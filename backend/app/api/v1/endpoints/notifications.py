from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel
from app.db.session import get_db
from app.models.crm import Notification
from app.api import deps
from app.models.user import User

router = APIRouter()

class NotificationCreate(BaseModel):
    user_id: int
    title: str
    message: str

class NotificationResponse(NotificationCreate):
    id: int
    is_read: int
    class Config:
        orm_mode = True

@router.post("/send", response_model=NotificationResponse)
def send_notification(notif_in: NotificationCreate, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    notif = Notification(**notif_in.dict())
    db.add(notif)
    db.commit()
    db.refresh(notif)
    return notif

@router.get("/my", response_model=List[NotificationResponse])
def get_my_notifications(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    return db.query(Notification).filter(Notification.user_id == current_user.id).all()

@router.put("/{notif_id}/read")
def mark_read(notif_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    notif = db.query(Notification).filter(Notification.id == notif_id, Notification.user_id == current_user.id).first()
    if not notif:
        raise HTTPException(status_code=404, detail="Notification not found")
    notif.is_read = 1
    db.commit()
    return {"detail": "Marked as read"}
