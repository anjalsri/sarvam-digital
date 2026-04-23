from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel, EmailStr
from app.db.session import get_db
from app.models.crm import Lead
from app.api import deps
from app.models.user import User

router = APIRouter()

class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class LeadResponse(LeadCreate):
    id: int
    status: str
    class Config:
        orm_mode = True

@router.post("/", response_model=LeadResponse)
def submit_lead(lead_in: LeadCreate, db: Session = Depends(get_db)):
    lead = Lead(**lead_in.dict())
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead

@router.get("/", response_model=List[LeadResponse])
def get_leads(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    return db.query(Lead).all()

@router.put("/{lead_id}/status")
def update_lead_status(lead_id: int, status: str, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    valid = ["New", "Contacted", "Closed"]
    if status not in valid:
        raise HTTPException(status_code=400, detail=f"Status must be one of {valid}")
    lead.status = status
    db.commit()
    return {"detail": f"Lead status updated to {status}"}
