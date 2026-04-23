from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON
from app.db.session import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    status = Column(String, default="Pending") # Pending / In Progress / Completed
    user_id = Column(Integer, ForeignKey("users.id"))
    milestones = Column(JSON, default=[]) # Storing milestones as JSON list
    files = Column(JSON, default=[]) # Storing file URLs as JSON list
