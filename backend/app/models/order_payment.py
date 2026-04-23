from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from app.db.session import Base
import datetime

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    service_id = Column(Integer, ForeignKey("services.id"))
    amount = Column(Float, nullable=False)
    status = Column(String, default="Pending")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    transaction_id = Column(String, unique=True, index=True)
    status = Column(String) # Success / Failed
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
