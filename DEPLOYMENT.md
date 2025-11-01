# Jes Love's Interior Design Website - Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Server Requirements
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx web server
- SSL certificate for HTTPS
- mod_rewrite enabled (Apache)

### 2. Database Setup
1. Create a MySQL database named `interior_design_db`
2. Create a database user with full privileges
3. Run `setup-database.php` to create tables
4. Update database credentials in `contact-handler.php`

### 3. File Permissions
```bash
chmod 644 index.html
chmod 644 .htaccess
chmod 755 contact-handler.php
chmod 755 setup-database.php
chmod 755 images/
chmod 644 images/*
```

### 4. Configuration Updates

#### Update Database Credentials
Edit `contact-handler.php`:
```php
$host = 'your_server_host';
$dbname = 'interior_design_db';
$username = 'your_db_username';
$password = 'your_secure_password';
```

#### Update Domain URLs
Replace all instances of `https://yourdomain.com/` with your actual domain:
- In `index.html` meta tags
- In JSON-LD schema markup
- In canonical URLs

#### Google Analytics Setup
1. Create Google Analytics account
2. Get your tracking ID (GA_MEASUREMENT_ID)
3. Replace `GA_MEASUREMENT_ID` in `index.html`

## 🚀 Deployment Steps

### Step 1: Upload Files
Upload all files to your web server's document root:
```
/public_html/
├── index.html
├── contact-handler.php
├── setup-database.php
├── .htaccess
└── images/
    ├── Logo #c6824b.png
    └── Logo white #ffffff.png
```

### Step 2: Database Setup
1. Access `https://yourdomain.com/setup-database.php`
2. Follow the setup instructions
3. **Important**: Delete `setup-database.php` after setup
4. Change default admin password immediately

### Step 3: Test Functionality
1. Visit your website
2. Test contact form submission
3. Test newsletter subscription
4. Verify email notifications work
5. Check all links and images load properly

### Step 4: SSL & Security
1. Install SSL certificate
2. Enable HTTPS redirect in `.htaccess`
3. Test security headers with online tools
4. Run security scans

### Step 5: Performance Testing
1. Test with Google PageSpeed Insights
2. Run GTmetrix analysis
3. Test mobile responsiveness
4. Verify lazy loading works

## 🔧 SEO Configuration

### Google Search Console
1. Add property to Google Search Console
2. Submit sitemap (create sitemap.xml)
3. Monitor crawl errors
4. Set up URL parameters

### Meta Tags Verification
Ensure all pages have:
- ✅ Title tags (50-60 characters)
- ✅ Meta descriptions (150-160 characters) 
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs

### Local SEO
1. Create Google My Business listing
2. Add local schema markup
3. Get listed in local directories
4. Collect customer reviews

## 📊 Analytics & Tracking

### Google Analytics Events
The following events are tracked:
- Contact form submissions
- Newsletter signups
- Phone number clicks
- Email link clicks

### Conversion Goals
Set up these goals in Google Analytics:
1. Contact form completion
2. Newsletter subscription
3. Phone call tracking
4. Consultation requests

## 🛡️ Security Checklist

- ✅ Strong database passwords
- ✅ File permission restrictions
- ✅ Security headers configured
- ✅ SQL injection protection
- ✅ XSS protection
- ✅ CSRF protection in forms
- ✅ Rate limiting for forms

## 📱 Mobile Optimization

- ✅ Responsive design
- ✅ Mobile-friendly forms
- ✅ Touch-friendly buttons
- ✅ Fast loading on mobile
- ✅ Optimized images

## 🔍 Testing URLs

After deployment, test these URLs:
- `https://yourdomain.com/` (Homepage)
- `https://yourdomain.com/#services` (Services section)
- `https://yourdomain.com/#portfolio` (Portfolio section)
- `https://yourdomain.com/#about` (About section)
- `https://yourdomain.com/#contact` (Contact section)

## 📈 Performance Targets

Aim for these metrics:
- Google PageSpeed Score: 90+
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3s

## 🔄 Maintenance Tasks

### Weekly
- Check contact form submissions
- Review analytics data
- Monitor website uptime

### Monthly
- Update content if needed
- Check for broken links
- Review security logs
- Backup database

### Quarterly
- Update PHP/server software
- Review and update SEO strategy
- Analyze conversion rates
- Update testimonials

## 📞 Support Contacts

- Web Development: Powered by User Friendly Sites
- Domain/Hosting: [Your hosting provider]
- Email Support: [Your email]
- Emergency Contact: 267-230-7372

## 🎯 Success Metrics

Track these KPIs:
- Organic search traffic growth
- Contact form conversion rate
- Newsletter signup rate
- Page load speed
- Mobile usability score
- Local search rankings

---

**Important**: After deployment, monitor the website for the first 48 hours to ensure everything works correctly. Keep backups of all files and database before making any changes.