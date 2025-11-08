#!/bin/bash

# Hostinger deployment script for Next.js
echo "Starting Next.js deployment..."

# Install dependencies
npm install

# Build the Next.js application
npm run build

# Copy built files to public directory for web server
if [ -d "out" ]; then
    echo "Copying built files to public directory..."
    rm -rf public/*
    cp -r out/* public/
    echo "Deployment completed successfully!"
else
    echo "Build failed - out directory not found"
    exit 1
fi