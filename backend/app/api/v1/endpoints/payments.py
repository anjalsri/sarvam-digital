from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas.order import OrderCreate, OrderResponse
from app.models.order_payment import Order, Payment
from app.api import deps
from app.models.user import User
from app.utils.helpers import mock_create_payment_order

router = APIRouter()

@router.post("/create-order", response_model=OrderResponse)
def create_order(order_in: OrderCreate, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    order = Order(user_id=current_user.id, service_id=order_in.service_id, amount=order_in.amount, status="Pending")
    db.add(order)
    db.commit()
    db.refresh(order)
    return order

@router.post("/verify-payment")
def verify_payment(order_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order or order.user_id != current_user.id:
        raise HTTPException(status_code=404, detail="Order not found")
    # Mock: generate a fake transaction id and mark as success
    mock_tx_id = mock_create_payment_order(order.amount)
    payment = Payment(order_id=order.id, transaction_id=mock_tx_id, status="Success")
    order.status = "Paid"
    db.add(payment)
    db.commit()
    return {"detail": "Payment successful (mock)", "transaction_id": mock_tx_id}

@router.get("/my-orders", response_model=List[OrderResponse])
def get_my_orders(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    return db.query(Order).filter(Order.user_id == current_user.id).all()
