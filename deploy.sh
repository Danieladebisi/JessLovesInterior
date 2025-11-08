#!/bin/bash

# Hostinger deployment script for Next.js
echo "🚀 Starting Next.js deployment for Jes Love's Interior..."

# Check if Node.js is available
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
    
    # Check if npm is available
    if command -v npm &> /dev/null; then
        echo "✅ npm found: $(npm --version)"
        
        # Install dependencies
        echo "📦 Installing dependencies..."
        npm install
        
        # Build the Next.js application
        echo "🔨 Building Next.js application..."
        npm run build
        
        # Copy built files to public directory
        if [ -d "out" ]; then
            echo "📁 Copying built files to public directory..."
            
            # Create public directory if it doesn't exist
            mkdir -p public
            
            # Copy all files from out to public
            cp -r out/* public/
            
            # Ensure proper permissions
            chmod -R 755 public/
            
            echo "✅ Deployment completed successfully!"
            echo "🌐 Website files are ready in public/ directory"
        else
            echo "❌ Build failed - out directory not found"
            exit 1
        fi
    else
        echo "❌ npm not found. Please ensure Node.js environment is properly configured."
        exit 1
    fi
else
    echo "❌ Node.js not found. Deployment requires Node.js environment."
    echo "💡 Tip: Enable Node.js in your Hostinger hosting panel"
    exit 1
fi

echo "🎉 Jes Love's Interior website deployment complete!"