from sqlalchemy import Column, Integer, String, Text, Float
from app.db.session import Base

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)
    category = Column(String)
