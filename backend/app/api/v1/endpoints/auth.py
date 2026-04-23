from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user import UserCreate, UserLogin, Token, UserResponse
from app.models.user import User
from app.core.security import get_password_hash, verify_password, create_access_token, create_refresh_token
from app.api import deps
import jwt
from app.core.config import settings

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_in.email).first()
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # First user becomes admin dynamically (optional convention) or set default 'user'
    hashed_password = get_password_hash(user_in.password)
    user_count = db.query(User).count()
    assigned_role = "admin" if user_count == 0 else "user"
    new_user = User(email=user_in.email, name=user_in.name, hashed_password=hashed_password, role=assigned_role)
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login", response_model=Token)
def login(user_in: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_in.email).first()
    if not user or not verify_password(user_in.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    if user.is_blocked:
        raise HTTPException(status_code=403, detail="Account is blocked")
        
    return {
        "access_token": create_access_token(user.id),
        "refresh_token": create_refresh_token(user.id),
        "token_type": "bearer"
    }

@router.post("/refresh", response_model=Token)
def refresh_token(token: str, db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        if payload.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid token type")
        user_id = payload.get("sub")
        return {
            "access_token": create_access_token(user_id),
            "refresh_token": token,
            "token_type": "bearer"
        }
    except Exception:
        raise HTTPException(status_code=401, detail="Could not validate credentials")
