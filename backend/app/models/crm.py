from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from app.db.session import Base
import datetime

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    message = Column(Text)
    status = Column(String, default="New") # New / Contacted / Closed
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Message(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    sender_id = Column(Integer, ForeignKey("users.id"))
    receiver_id = Column(Integer, ForeignKey("users.id"), nullable=True) # None for admin broadcast
    content = Column(Text)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    is_read = Column(Integer, default=0)

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    message = Column(Text)
    is_read = Column(Integer, default=0) # 0 for false, 1 for true
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
