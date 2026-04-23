from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.user import User
from app.models.order_payment import Order
from app.models.project import Project
from app.models.crm import Lead
from app.api import deps

router = APIRouter()

@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    total_users = db.query(User).count()
    total_projects = db.query(Project).count()
    total_leads = db.query(Lead).count()
    total_revenue = db.query(Order).filter(Order.status == "Paid").with_entities(
        db.query(Order.amount).scalar_subquery()
    ).count()
    # Simple revenue sum
    paid_orders = db.query(Order).filter(Order.status == "Paid").all()
    revenue = sum(o.amount for o in paid_orders)
    
    return {
        "total_users": total_users,
        "total_projects": total_projects,
        "total_leads": total_leads,
        "total_revenue": revenue,
    }

@router.get("/users")
def admin_list_users(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    return db.query(User).all()

@router.put("/users/{user_id}/block")
def block_user(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="User not found")
    user.is_blocked = True
    db.commit()
    return {"detail": f"User {user_id} blocked"}

@router.put("/users/{user_id}/unblock")
def unblock_user(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="User not found")
    user.is_blocked = False
    db.commit()
    return {"detail": f"User {user_id} unblocked"}

@router.put("/users/{user_id}/promote")
def promote_to_admin(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="User not found")
    user.role = "admin"
    db.commit()
    return {"detail": f"User {user_id} promoted to admin"}
