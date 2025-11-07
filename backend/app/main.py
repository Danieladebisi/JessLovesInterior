from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from typing import Optional, List
import os
from datetime import datetime
import logging

# Initialize FastAPI app
app = FastAPI(
    title="Jes Love's Interior Design API",
    description="Backend API for luxury interior design studio",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Security
security = HTTPBearer()

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    service_type: Optional[str] = None

class NewsletterSubscription(BaseModel):
    email: EmailStr
    name: Optional[str] = None

class ConsultationRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    project_type: str
    budget_range: str
    timeline: str
    message: Optional[str] = None

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# In-memory storage (replace with database in production)
contacts = []
newsletter_subscribers = []
consultation_requests = []

# Utility functions
def send_email_notification(to_email: str, subject: str, body: str):
    """Send email notification (implement with your email service)"""
    logger.info(f"Sending email to {to_email}: {subject}")
    # Implement actual email sending here

def save_to_database(data: dict, collection: str):
    """Save data to database (implement with your database)"""
    timestamp = datetime.now()
    data['created_at'] = timestamp
    data['id'] = f"{collection}_{len(globals()[collection]) + 1}"
    
    if collection == 'contacts':
        contacts.append(data)
    elif collection == 'newsletter_subscribers':
        newsletter_subscribers.append(data)
    elif collection == 'consultation_requests':
        consultation_requests.append(data)
    
    return data['id']

# API Routes
@app.get("/")
async def root():
    return {
        "message": "Jes Love's Interior Design API",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now()}

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactForm, background_tasks: BackgroundTasks):
    """Handle contact form submissions"""
    try:
        # Save to database
        contact_id = save_to_database(contact.dict(), 'contacts')
        
        # Send notification email to admin
        background_tasks.add_task(
            send_email_notification,
            "info@jeslovesinterior.com",
            f"New Contact Form Submission from {contact.name}",
            f"Name: {contact.name}\nEmail: {contact.email}\nPhone: {contact.phone}\nMessage: {contact.message}"
        )
        
        # Send confirmation email to client
        background_tasks.add_task(
            send_email_notification,
            contact.email,
            "Thank you for contacting Jes Love's Interior",
            f"Dear {contact.name},\n\nThank you for your interest in our interior design services. We have received your message and will get back to you within 24 hours.\n\nBest regards,\nJes Love's Interior Team"
        )
        
        logger.info(f"Contact form submitted successfully: {contact_id}")
        
        return ContactResponse(
            success=True,
            message="Thank you for your message. We'll get back to you soon!",
            id=contact_id
        )
    
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.post("/api/newsletter", response_model=ContactResponse)
async def subscribe_newsletter(subscription: NewsletterSubscription, background_tasks: BackgroundTasks):
    """Handle newsletter subscriptions"""
    try:
        # Check if email already exists
        existing = [s for s in newsletter_subscribers if s.get('email') == subscription.email]
        if existing:
            return ContactResponse(
                success=True,
                message="You're already subscribed to our newsletter!"
            )
        
        # Save to database
        subscription_id = save_to_database(subscription.dict(), 'newsletter_subscribers')
        
        # Send welcome email
        background_tasks.add_task(
            send_email_notification,
            subscription.email,
            "Welcome to Jes Love's Interior Newsletter",
            f"Dear {subscription.name or 'Subscriber'},\n\nWelcome to our newsletter! You'll receive updates about our latest projects, design tips, and exclusive offers.\n\nBest regards,\nJes Love's Interior Team"
        )
        
        logger.info(f"Newsletter subscription successful: {subscription_id}")
        
        return ContactResponse(
            success=True,
            message="Successfully subscribed to our newsletter!",
            id=subscription_id
        )
    
    except Exception as e:
        logger.error(f"Error processing newsletter subscription: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.post("/api/consultation", response_model=ContactResponse)
async def request_consultation(consultation: ConsultationRequest, background_tasks: BackgroundTasks):
    """Handle consultation requests"""
    try:
        # Save to database
        consultation_id = save_to_database(consultation.dict(), 'consultation_requests')
        
        # Send notification email to admin
        background_tasks.add_task(
            send_email_notification,
            "info@jeslovesinterior.com",
            f"New Consultation Request from {consultation.name}",
            f"Name: {consultation.name}\nEmail: {consultation.email}\nPhone: {consultation.phone}\nProject Type: {consultation.project_type}\nBudget Range: {consultation.budget_range}\nTimeline: {consultation.timeline}\nMessage: {consultation.message}"
        )
        
        # Send confirmation email to client
        background_tasks.add_task(
            send_email_notification,
            consultation.email,
            "Your Consultation Request - Jes Love's Interior",
            f"Dear {consultation.name},\n\nThank you for your consultation request. We're excited about the opportunity to work on your {consultation.project_type} project.\n\nOur team will review your requirements and contact you within 2 business days to schedule your free consultation.\n\nProject Details:\n- Type: {consultation.project_type}\n- Budget Range: {consultation.budget_range}\n- Timeline: {consultation.timeline}\n\nBest regards,\nJes Love's Interior Team"
        )
        
        logger.info(f"Consultation request submitted successfully: {consultation_id}")
        
        return ContactResponse(
            success=True,
            message="Consultation request submitted! We'll contact you within 2 business days.",
            id=consultation_id
        )
    
    except Exception as e:
        logger.error(f"Error processing consultation request: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/api/portfolio")
async def get_portfolio():
    """Get portfolio items"""
    portfolio_items = [
        {
            "id": 1,
            "title": "Luxury Penthouse",
            "category": "Residential",
            "description": "Modern luxury penthouse with panoramic city views",
            "image_url": "/images/portfolio/penthouse.jpg",
            "completion_date": "2024-06-15"
        },
        {
            "id": 2,
            "title": "Boutique Restaurant",
            "category": "Commercial",
            "description": "Elegant dining space with contemporary design elements",
            "image_url": "/images/portfolio/restaurant.jpg",
            "completion_date": "2024-04-22"
        },
        {
            "id": 3,
            "title": "Family Villa",
            "category": "Residential",
            "description": "Warm and inviting family home with classic touches",
            "image_url": "/images/portfolio/villa.jpg",
            "completion_date": "2024-08-10"
        }
    ]
    return {"portfolio": portfolio_items}

@app.get("/api/services")
async def get_services():
    """Get available services"""
    services = [
        {
            "id": 1,
            "name": "Residential Design",
            "description": "Complete home interior design services",
            "price_range": "$5,000 - $50,000",
            "duration": "4-12 weeks"
        },
        {
            "id": 2,
            "name": "Commercial Design",
            "description": "Professional workspace design solutions",
            "price_range": "$10,000 - $100,000",
            "duration": "6-16 weeks"
        },
        {
            "id": 3,
            "name": "Design Consultation",
            "description": "Expert design advice and planning",
            "price_range": "$200 - $500",
            "duration": "1-2 hours"
        }
    ]
    return {"services": services}

@app.get("/api/testimonials")
async def get_testimonials():
    """Get client testimonials"""
    testimonials = [
        {
            "id": 1,
            "client_name": "Sarah Johnson",
            "project": "Modern Family Home",
            "rating": 5,
            "review": "Jes transformed our house into a dream home. The attention to detail and creative vision exceeded our expectations.",
            "date": "2024-09-15"
        },
        {
            "id": 2,
            "client_name": "Michael Chen",
            "project": "Corporate Office",
            "rating": 5,
            "review": "Professional, creative, and delivered on time. Our new office space has boosted team morale significantly.",
            "date": "2024-08-22"
        },
        {
            "id": 3,
            "client_name": "Emily Rodriguez",
            "project": "Luxury Apartment",
            "rating": 5,
            "review": "Amazing work! Jes understood our style perfectly and created a sophisticated yet comfortable living space.",
            "date": "2024-10-05"
        }
    ]
    return {"testimonials": testimonials}

# Admin endpoints (add authentication in production)
@app.get("/api/admin/contacts")
async def get_contacts():
    """Get all contact form submissions (admin only)"""
    return {"contacts": contacts}

@app.get("/api/admin/newsletter")
async def get_newsletter_subscribers():
    """Get all newsletter subscribers (admin only)"""
    return {"subscribers": newsletter_subscribers}

@app.get("/api/admin/consultations")
async def get_consultation_requests():
    """Get all consultation requests (admin only)"""
    return {"consultations": consultation_requests}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)