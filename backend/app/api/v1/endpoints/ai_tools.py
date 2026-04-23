from fastapi import APIRouter
from pydantic import BaseModel
from app.utils.helpers import mock_ai_response

router = APIRouter()

class AIPromptRequest(BaseModel):
    prompt: str
    type: str = "caption"  # caption | content | description

class AIResponse(BaseModel):
    result: str
    type: str
    note: str

@router.post("/generate", response_model=AIResponse)
def generate_content(request: AIPromptRequest):
    # Mock response - replace with real AI SDK (OpenAI/Gemini) using AI_API_KEY env var
    result = mock_ai_response(request.prompt)
    return {
        "result": result,
        "type": request.type,
        "note": "This is a mock AI response. Set AI_API_KEY in .env to enable real AI generation."
    }
