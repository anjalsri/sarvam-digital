from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user import UserResponse
from app.models.user import User
from app.api import deps

router = APIRouter()

@router.get("/me", response_model=UserResponse)
def read_user_me(current_user: User = Depends(deps.get_current_active_user)):
    return current_user

@router.put("/me", response_model=UserResponse)
def update_user_me(name: str, current_user: User = Depends(deps.get_current_active_user), db: Session = Depends(get_db)):
    current_user.name = name
    db.commit()
    db.refresh(current_user)
    return current_user

from typing import List
@router.get("/", response_model=List[UserResponse])
def get_all_users(current_user: User = Depends(deps.get_current_admin_user), db: Session = Depends(get_db)):
    return db.query(User).all()
