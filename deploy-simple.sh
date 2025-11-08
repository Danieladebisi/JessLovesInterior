#!/bin/bash
# Simple deployment script for pre-built Next.js files
# No Node.js required on server

echo "🚀 Deploying Jes Love's Interior website..."

# Check if built files exist
if [ -d "public" ] && [ -f "public/index.html" ]; then
    echo "✅ Pre-built website files found"
    echo "🌐 Website is ready to serve"
    echo "📁 Files located in public/ directory"
    
    # Set proper permissions
    chmod -R 644 public/*
    chmod 755 public/
    
    echo "✅ Permissions set correctly"
    echo "🎉 Deployment completed successfully!"
else
    echo "❌ No pre-built files found in public/ directory"
    echo "💡 Files should be pre-built and committed to repository"
fi