from pydantic import BaseModel
from typing import Optional, List, Any

class ProjectBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: Optional[str] = "Pending"
    user_id: int

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    milestones: List[Any]
    files: List[Any]

    class Config:
        orm_mode = True
