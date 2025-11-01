# Hostinger Deployment Fix Guide

## Issue: "fatal: could not read Username for 'https://github.com': No such device or address"

This error occurs because Hostinger cannot access your GitHub repository. Here are the solutions:

## Solution 1: Make Repository Public (Recommended)

1. **Go to your GitHub repository**: https://github.com/Danieladebisi/JessLovesInterior
2. **Click on "Settings"** (in the repository menu)
3. **Scroll down to "Danger Zone"**
4. **Click "Change repository visibility"**
5. **Select "Make public"**
6. **Type the repository name to confirm**
7. **Click "I understand, change repository visibility"**

## Solution 2: Set up GitHub Integration in Hostinger

1. **Log into your Hostinger account**
2. **Go to Git Deployment section**
3. **Click "Connect to GitHub"**
4. **Authorize Hostinger to access your GitHub account**
5. **Select your repository from the list**

## Solution 3: Alternative Deployment Methods

### Option A: Upload Files Directly
1. **Download all files from the repository**
2. **Go to Hostinger File Manager**
3. **Upload all files to your public_html folder**

### Option B: Use ZIP Upload
1. **Download repository as ZIP**
2. **Extract the ZIP file**
3. **Upload extracted files via Hostinger File Manager**

## Files to Upload (if using manual upload):

```
📁 Your Domain Folder/
├── 📄 index.html
├── 📄 contact-handler.php
├── 📄 setup-database.php
├── 📄 .htaccess
├── 📄 robots.txt
├── 📄 sitemap.xml
└── 📁 images/
    ├── 🖼️ Logo #c6824b.png
    └── 🖼️ Logo white #ffffff.png
```

## Post-Deployment Steps:

1. **Run database setup**: Visit `https://yourdomain.com/setup-database.php`
2. **Update database credentials** in `contact-handler.php`
3. **Replace domain references** from `yourdomain.com` to your actual domain
4. **Test contact forms** and website functionality
5. **Set up SSL certificate** in Hostinger panel
6. **Delete setup-database.php** after running it

## Domain Configuration:

Replace all instances of `https://yourdomain.com/` with your actual domain in:
- index.html (meta tags)
- sitemap.xml
- robots.txt
- contact-handler.php (email notifications)

## Quick Fix for Immediate Deployment:

**Try making the repository public first** - this is the fastest solution and should resolve the authentication issue immediately.