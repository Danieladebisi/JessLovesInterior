<?php
// Hostinger deployment bootstrap for Next.js
// This file triggers the Node.js build process and serves the static files

$publicDir = __DIR__ . '/public';
$outDir = __DIR__ . '/out';

// Check if built files exist in public directory
if (is_dir($publicDir) && file_exists($publicDir . '/index.html')) {
    // Serve the built Next.js application
    $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
    
    // Remove query string
    $requestUri = strtok($requestUri, '?');
    
    // Handle root request
    if ($requestUri === '/' || $requestUri === '') {
        include $publicDir . '/index.html';
        exit;
    }
    
    // Handle specific file requests
    $filePath = $publicDir . $requestUri;
    
    if (file_exists($filePath)) {
        // Set appropriate content type
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);
        $contentTypes = [
            'html' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'webp' => 'image/webp',
            'ico' => 'image/x-icon'
        ];
        
        if (isset($contentTypes[$extension])) {
            header('Content-Type: ' . $contentTypes[$extension]);
        }
        
        readfile($filePath);
        exit;
    }
    
    // Handle 404 - serve the Next.js 404 page if it exists
    if (file_exists($publicDir . '/404.html')) {
        http_response_code(404);
        include $publicDir . '/404.html';
        exit;
    }
}

// If no built files found, show a message
http_response_code(503);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jes Love's Interior - Deployment in Progress</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #c6824b; margin-bottom: 20px; }
        .spinner { border: 4px solid #f3f3f3; border-top: 4px solid #c6824b; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 20px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏠 Jes Love's Interior</h1>
        <div class="spinner"></div>
        <h2>Website Deployment in Progress</h2>
        <p>We're setting up your beautiful interior design website. This usually takes just a few minutes.</p>
        <p>Please refresh this page in a moment to see your stunning website!</p>
        <p><small>If this message persists, the build process may need to complete. Contact support if needed.</small></p>
    </div>
</body>
</html>