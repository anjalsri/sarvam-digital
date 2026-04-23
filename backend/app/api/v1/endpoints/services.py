from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas.service import ServiceCreate, ServiceResponse
from app.models.service import Service
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[ServiceResponse])
def get_services(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Service).offset(skip).limit(limit).all()

@router.get("/{service_id}", response_model=ServiceResponse)
def get_service(service_id: int, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

@router.post("/", response_model=ServiceResponse)
def create_service(service_in: ServiceCreate, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    service = Service(**service_in.dict())
    db.add(service)
    db.commit()
    db.refresh(service)
    return service

@router.put("/{service_id}", response_model=ServiceResponse)
def update_service(service_id: int, service_in: ServiceCreate, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    for key, value in service_in.dict().items():
        setattr(service, key, value)
    db.commit()
    db.refresh(service)
    return service

@router.delete("/{service_id}")
def delete_service(service_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    db.delete(service)
    db.commit()
    return {"detail": "Service deleted"}
