def mock_ai_response(prompt: str) -> str:
    return f"This is an automated mock response generated for your prompt: '{prompt}'."

def mock_create_payment_order(amount: float) -> str:
    import uuid
    return f"order_{uuid.uuid4().hex[:12]}"
