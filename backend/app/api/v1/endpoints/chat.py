from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends, Query, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
from typing import List, Dict
from pydantic import BaseModel
from datetime import datetime
import json

from app.db.session import get_db
from app.models.crm import Message
from app.models.user import User
from app.api.deps import get_current_user

router = APIRouter()

class ConnectionManager:
    def __init__(self):
        # Maps user_id to their active WebSocket connection
        self.active_connections: Dict[int, WebSocket] = {}

    async def connect(self, user_id: int, websocket: WebSocket):
        await websocket.accept()
        self.active_connections[user_id] = websocket

    def disconnect(self, user_id: int):
        self.active_connections.pop(user_id, None)

    async def send_personal_message(self, message: dict, user_id: int):
        websocket = self.active_connections.get(user_id)
        if websocket:
            await websocket.send_json(message)

manager = ConnectionManager()

# WebSocket endpoint for Sarvam AI Chat
@router.websocket("/ws/sarvam-ai/{user_id}")
async def websocket_sarvam_ai(
    websocket: WebSocket, 
    user_id: int, 
    token: str = Query(...), 
    db: Session = Depends(get_db)
):
    # Authenticate user via token
    try:
        current_user = get_current_user(db, token)
        if current_user.id != user_id:
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
            return
    except Exception:
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        return

    await manager.connect(user_id, websocket)
    try:
        while True:
            data_str = await websocket.receive_text()
            try:
                data = json.loads(data_str)
                receiver_id = data.get("receiver_id")
                content = data.get("message")
                
                if not receiver_id or not content:
                    continue

                # Save message to DB
                new_msg = Message(
                    sender_id=user_id, 
                    receiver_id=receiver_id, 
                    content=content,
                    is_read=0
                )
                db.add(new_msg)
                db.commit()
                db.refresh(new_msg)

                msg_dict = {
                    "id": new_msg.id,
                    "sender_id": new_msg.sender_id,
                    "receiver_id": new_msg.receiver_id,
                    "content": new_msg.content,
                    "timestamp": new_msg.timestamp.isoformat(),
                    "is_read": new_msg.is_read
                }

                # Send to receiver if online
                await manager.send_personal_message(msg_dict, receiver_id)
                # Send back to sender for confirmation
                await manager.send_personal_message(msg_dict, user_id)

            except json.JSONDecodeError:
                pass

    except WebSocketDisconnect:
        manager.disconnect(user_id)

class MessageResponse(BaseModel):
    id: int
    sender_id: int
    receiver_id: int
    content: str
    timestamp: datetime
    is_read: int

    class Config:
        from_attributes = True

# REST API for chat history
@router.get("/sarvam-ai/history/{other_user_id}", response_model=List[MessageResponse])
def get_chat_history(
    other_user_id: int, 
    current_user: User = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    # Fetch messages between current_user and other_user_id
    messages = db.query(Message).filter(
        or_(
            and_(Message.sender_id == current_user.id, Message.receiver_id == other_user_id),
            and_(Message.sender_id == other_user_id, Message.receiver_id == current_user.id)
        )
    ).order_by(Message.timestamp.asc()).all()
    
    return messages
