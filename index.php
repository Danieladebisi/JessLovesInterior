<?php
// Jes Love's Interior - Static Website Server
// Serves pre-built Next.js static files

$publicDir = __DIR__ . '/out';
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';

// Remove query string
$requestUri = strtok($requestUri, '?');

// Handle root request
if ($requestUri === '/' || $requestUri === '') {
    if (file_exists($publicDir . '/index.html')) {
        header('Content-Type: text/html; charset=utf-8');
        readfile($publicDir . '/index.html');
        exit;
    }
}

// Handle specific file requests
if ($requestUri !== '/') {
    $filePath = $publicDir . $requestUri;
    
    if (file_exists($filePath) && is_file($filePath)) {
        // Set appropriate content type
        $extension = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
        $contentTypes = [
            'html' => 'text/html; charset=utf-8',
            'css' => 'text/css; charset=utf-8',
            'js' => 'application/javascript; charset=utf-8',
            'json' => 'application/json; charset=utf-8',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'webp' => 'image/webp',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject'
        ];
        
        if (isset($contentTypes[$extension])) {
            header('Content-Type: ' . $contentTypes[$extension]);
        }
        
        // Set cache headers for static assets
        if (in_array($extension, ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico', 'woff', 'woff2', 'ttf', 'eot'])) {
            header('Cache-Control: public, max-age=31536000'); // 1 year
            header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
        }
        
        readfile($filePath);
        exit;
    }
}

// Handle 404 - serve the Next.js 404 page if it exists
if (file_exists($publicDir . '/404.html')) {
    http_response_code(404);
    header('Content-Type: text/html; charset=utf-8');
    readfile($publicDir . '/404.html');
    exit;
}

// Default 404 response
http_response_code(404);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jes Love's Interior - Interior Design Studio</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            text-align: center; 
            padding: 50px 20px; 
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%); 
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container { 
            max-width: 600px; 
            background: white; 
            padding: 60px 40px; 
            border-radius: 20px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .logo { 
            width: 80px; 
            height: 80px; 
            background: #c6824b; 
            border-radius: 50%; 
            margin: 0 auto 30px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 40px; 
            color: white;
        }
        h1 { 
            color: #c6824b; 
            margin: 0 0 10px; 
            font-size: 2.5em;
            font-weight: 300;
        }
        .subtitle {
            color: #666;
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .description {
            color: #888;
            line-height: 1.6;
            margin-bottom: 40px;
        }
        .contact {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 15px;
            margin-top: 30px;
        }
        .contact h3 {
            color: #c6824b;
            margin: 0 0 15px;
        }
        .contact p {
            margin: 5px 0;
            color: #666;
        }
        .btn {
            display: inline-block;
            background: #c6824b;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 10px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: #a56d3d;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🏠</div>
        <h1>Jes Love's Interior</h1>
        <p class="subtitle">Professional Interior Design Studio</p>
        
        <p class="description">
            We create stunning, personalized living spaces that reflect your unique style and enhance your daily life. 
            From residential to commercial projects, our expert team brings luxury and functionality together.
        </p>
        
        <div class="contact">
            <h3>Get In Touch</h3>
            <p><strong>📞 Phone:</strong> (267) 230-7372</p>
            <p><strong>📍 Location:</strong> Groton, CT</p>
            <p><strong>✉️ Email:</strong> info@jeslovesinterior.com</p>
        </div>
        
        <p style="margin-top: 30px; color: #999; font-size: 0.9em;">
            Our full website is currently being optimized. Contact us directly for consultations!
        </p>
    </div>
</body>
</html>