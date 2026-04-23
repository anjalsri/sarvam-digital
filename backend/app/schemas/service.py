from pydantic import BaseModel
from typing import Optional

class ServiceBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    category: Optional[str] = None

class ServiceCreate(ServiceBase):
    pass

class ServiceResponse(ServiceBase):
    id: int

    class Config:
        from_attributes = True
