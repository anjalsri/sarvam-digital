from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas.project import ProjectCreate, ProjectResponse
from app.models.project import Project
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[ProjectResponse])
def get_projects(db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    if current_user.role == "admin":
        return db.query(Project).all()
    return db.query(Project).filter(Project.user_id == current_user.id).all()

@router.get("/{project_id}", response_model=ProjectResponse)
def get_project(project_id: int, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_active_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.role != "admin" and project.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")
    return project

@router.post("/", response_model=ProjectResponse)
def create_project(project_in: ProjectCreate, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    project = Project(**project_in.dict())
    db.add(project)
    db.commit()
    db.refresh(project)
    return project

@router.put("/{project_id}/status")
def update_project_status(project_id: int, status: str, db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    valid_statuses = ["Pending", "In Progress", "Completed"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Status must be one of {valid_statuses}")
    project.status = status
    db.commit()
    return {"detail": f"Status updated to {status}"}

@router.put("/{project_id}/milestones")
def update_milestones(project_id: int, milestones: List[str], db: Session = Depends(get_db), current_user: User = Depends(deps.get_current_admin_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    project.milestones = milestones
    db.commit()
    return {"detail": "Milestones updated", "milestones": milestones}
