from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel
from app.db.session import get_db
from app.models.portfolio import PortfolioItem
from app.api import deps
from app.models.user import User

router = APIRouter()

class PortfolioBase(BaseModel):
    title: str
    description: str | None = None
    image_url: str | None = None
    link: str | None = None

class PortfolioResponse(PortfolioBase):
    id: int
    class Config:
        orm_mode = True

@router.get("/", response_model=List[PortfolioResponse])
def get_portfolio(db: Session = Depends(get_db)):
    return db.query(PortfolioItem).all()

@router.post("/", response_model=PortfolioResponse)
def create_portfolio_item(item_in: PortfolioBase, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    item = PortfolioItem(**item_in.dict())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

@router.put("/{item_id}", response_model=PortfolioResponse)
def update_portfolio_item(item_id: int, item_in: PortfolioBase, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    item = db.query(PortfolioItem).filter(PortfolioItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    for key, value in item_in.dict().items():
        setattr(item, key, value)
    db.commit()
    db.refresh(item)
    return item

@router.delete("/{item_id}")
def delete_portfolio_item(item_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    item = db.query(PortfolioItem).filter(PortfolioItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(item)
    db.commit()
    return {"detail": "Deleted"}
