from sqlalchemy import Column, Integer, String, Text
from app.db.session import Base

class PortfolioItem(Base):
    __tablename__ = "portfolio_items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    image_url = Column(String)
    link = Column(String, nullable=True)
