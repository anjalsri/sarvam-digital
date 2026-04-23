from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, services, projects, payments, portfolio, leads, chat, notifications, ai_tools, admin

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])
api_router.include_router(services.router, prefix="/services", tags=["Services"])
api_router.include_router(projects.router, prefix="/projects", tags=["Projects"])
api_router.include_router(payments.router, prefix="/payments", tags=["Payments"])
api_router.include_router(portfolio.router, prefix="/portfolio", tags=["Portfolio"])
api_router.include_router(leads.router, prefix="/leads", tags=["Leads"])
api_router.include_router(chat.router, prefix="/chat", tags=["Chat"])
api_router.include_router(notifications.router, prefix="/notifications", tags=["Notifications"])
api_router.include_router(ai_tools.router, prefix="/ai", tags=["AI Tools"])
api_router.include_router(admin.router, prefix="/admin", tags=["Admin"])
