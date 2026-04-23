import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Sarvam Digital API"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecretkey123")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./sql_app.db"
    AI_API_KEY: str = os.getenv("AI_API_KEY", "")

    class Config:
        case_sensitive = True

settings = Settings()
