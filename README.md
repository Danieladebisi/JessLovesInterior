# 🏠 Jes Love's Interior - Modern Interior Design Studio

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38bdf8)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-latest-009688)](https://fastapi.tiangolo.com/)

A luxury interior design studio website built with modern web technologies. Features a responsive Next.js frontend with TypeScript, a Python FastAPI backend, and optimized for Hostinger deployment.

## 🌟 Features

- **🎨 Modern Design**: Clean, professional interior design showcase
- **📱 Responsive**: Mobile-first design that works on all devices
- **⚡ Fast Performance**: Optimized Next.js static export for lightning-fast loading
- **🔍 SEO Optimized**: Complete meta tags, structured data, and sitemap
- **📧 Contact Forms**: Functional contact and newsletter subscription forms
- **🎭 Animations**: Smooth Framer Motion animations throughout
- **🔒 Type Safe**: Full TypeScript implementation for better code quality
- **🎯 Professional Logo**: Three logo variants (standard, brown, white) integrated throughout

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with SSG
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-triggered animations

### Backend
- **Python FastAPI** - Modern async web framework
- **Pydantic** - Data validation and settings management
- **SQLAlchemy** - SQL toolkit and ORM
- **PostgreSQL** - Production database (ready to configure)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
JessLovesInterior/
├── 📁 components/          # React components
│   ├── Header.tsx          # Navigation with logo
│   ├── Hero.tsx           # Homepage hero section
│   ├── Services.tsx       # Interior design services
│   ├── Portfolio.tsx      # Portfolio showcase
│   ├── About.tsx          # About section
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Site footer
├── 📁 pages/              # Next.js pages
│   ├── _app.tsx           # App configuration
│   ├── _document.tsx      # Document configuration
│   ├── index.tsx          # Homepage
│   └── 404.tsx           # Error page
├── 📁 styles/             # Styling
│   └── globals.css        # Global CSS with Tailwind
├── 📁 public/             # Static assets
│   └── images/            # Logo files
│       ├── logo.png       # Standard logo
│       ├── logo-brown.png # Brand color logo
│       └── logo-white.png # White variant logo
├── 📁 backend/            # Python FastAPI backend
│   └── app/
│       └── main.py        # API endpoints
├── 📁 out/               # Production build (deploy this)
│   ├── index.html        # Built homepage
│   ├── _next/           # Optimized assets
│   └── images/          # Optimized images
└── 📄 Configuration Files
    ├── next.config.js     # Next.js config with static export
    ├── tailwind.config.js # Tailwind CSS configuration
    ├── tsconfig.json      # TypeScript configuration
    └── package.json       # Dependencies and scripts
```

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Danieladebisi/JessLovesInterior.git
   cd JessLovesInterior
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Backend (from backend directory)
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 🚀 Deployment to Hostinger

### Quick Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Copy all files from the `out/` folder
   - Upload to your Hostinger `public_html` directory

3. **Deploy backend** (optional)
   - Set up Python environment on Hostinger
   - Upload `backend/` folder to subdomain

### Detailed Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for comprehensive deployment instructions including:
- Step-by-step Hostinger setup
- Backend deployment options
- Database configuration
- Email setup for contact forms
- Performance optimization tips

## 🎨 Logo Usage

The website includes three logo variants for different use cases:

- **logo.png**: Standard logo for light backgrounds
- **logo-brown.png**: Brand color (#c6824b) version
- **logo-white.png**: White version for dark backgrounds

All logos are properly integrated throughout the website:
- Header navigation (resized and cropped for optimal display)
- Hero section (prominent branding)
- Favicon and meta tags
- Email templates

## 📧 Contact Forms

The website includes functional contact forms with:
- **Contact Form**: General inquiries with email notifications
- **Newsletter**: Subscription system with welcome emails
- **Consultation Requests**: Professional service inquiries

Backend API endpoints handle form submissions with proper validation and email notifications.

## 🎯 SEO Features

- **Meta Tags**: Optimized titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions

## 📱 Performance

- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for faster loading
- **Static Export**: Pre-built static files for maximum performance
- **Efficient CSS**: Tailwind CSS with purging of unused styles
- **Caching**: Optimized caching headers for static assets

## 🔒 Security

- **Input Validation**: Pydantic models for API validation
- **SQL Injection Protection**: SQLAlchemy ORM usage
- **CORS Configuration**: Proper cross-origin request handling
- **Environment Variables**: Secure configuration management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For deployment assistance or technical support, please:
1. Check the [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. Review the project documentation
3. Open an issue for specific problems

## 🏆 Features Checklist

- ✅ Modern Next.js with TypeScript
- ✅ Python FastAPI backend
- ✅ Responsive mobile-first design
- ✅ Professional logo integration
- ✅ Contact forms with email notifications
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Hostinger deployment ready
- ✅ Clean file/folder organization
- ✅ Comprehensive documentation

---

**Built with ❤️ for professional interior design showcase**