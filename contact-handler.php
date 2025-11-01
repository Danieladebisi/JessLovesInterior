<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
$host = 'localhost';
$dbname = 'interior_design_db';
$username = 'your_db_username';
$password = 'your_db_password';

// Response function
function sendResponse($success, $message, $data = null) {
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit;
}

// Validation function
function validateInput($data, $required_fields) {
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
        }
    }
    
    // Email validation
    if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (isset($data['phone']) && !empty($data['phone'])) {
        $phone = preg_replace('/[^0-9]/', '', $data['phone']);
        if (strlen($phone) < 10) {
            $errors[] = 'Please enter a valid phone number';
        }
    }
    
    return $errors;
}

// Sanitize input
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Only POST requests are allowed');
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    sendResponse(false, 'Invalid JSON data');
}

// Determine form type
$form_type = $input['form_type'] ?? 'contact';

try {
    // Database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
    
    // Process different form types
    switch ($form_type) {
        case 'contact':
            handleContactForm($pdo, $input);
            break;
        case 'newsletter':
            handleNewsletterForm($pdo, $input);
            break;
        case 'consultation':
            handleConsultationForm($pdo, $input);
            break;
        default:
            sendResponse(false, 'Unknown form type');
    }
    
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    sendResponse(false, 'Database connection failed. Please try again later.');
} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    sendResponse(false, 'An unexpected error occurred. Please try again.');
}

function handleContactForm($pdo, $data) {
    $required_fields = ['name', 'email', 'subject', 'message'];
    $errors = validateInput($data, $required_fields);
    
    if (!empty($errors)) {
        sendResponse(false, 'Validation errors: ' . implode(', ', $errors));
    }
    
    $clean_data = sanitizeInput($data);
    
    // Insert into database
    $sql = "INSERT INTO contact_submissions (name, email, phone, subject, service_type, budget, message, ip_address, user_agent, created_at) 
            VALUES (:name, :email, :phone, :subject, :service_type, :budget, :message, :ip_address, :user_agent, NOW())";
    
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute([
        ':name' => $clean_data['name'],
        ':email' => $clean_data['email'],
        ':phone' => $clean_data['phone'] ?? null,
        ':subject' => $clean_data['subject'],
        ':service_type' => $clean_data['service_type'] ?? null,
        ':budget' => $clean_data['budget'] ?? null,
        ':message' => $clean_data['message'],
        ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
        ':user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null
    ]);
    
    if ($result) {
        // Send email notification (optional)
        sendEmailNotification($clean_data, 'contact');
        sendResponse(true, 'Thank you for your message! We will get back to you within 24 hours.');
    } else {
        sendResponse(false, 'Failed to save your message. Please try again.');
    }
}

function handleNewsletterForm($pdo, $data) {
    $required_fields = ['email'];
    $errors = validateInput($data, $required_fields);
    
    if (!empty($errors)) {
        sendResponse(false, 'Please enter a valid email address');
    }
    
    $clean_data = sanitizeInput($data);
    
    // Check if email already exists
    $check_sql = "SELECT id FROM newsletter_subscribers WHERE email = :email";
    $check_stmt = $pdo->prepare($check_sql);
    $check_stmt->execute([':email' => $clean_data['email']]);
    
    if ($check_stmt->fetch()) {
        sendResponse(false, 'This email is already subscribed to our newsletter');
    }
    
    // Insert new subscriber
    $sql = "INSERT INTO newsletter_subscribers (email, name, subscribed_at, ip_address, status) 
            VALUES (:email, :name, NOW(), :ip_address, 'active')";
    
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute([
        ':email' => $clean_data['email'],
        ':name' => $clean_data['name'] ?? null,
        ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? null
    ]);
    
    if ($result) {
        sendEmailNotification($clean_data, 'newsletter');
        sendResponse(true, 'Successfully subscribed to our newsletter! Welcome to our design community.');
    } else {
        sendResponse(false, 'Failed to subscribe. Please try again.');
    }
}

function handleConsultationForm($pdo, $data) {
    $required_fields = ['name', 'email', 'phone', 'project_type', 'timeline'];
    $errors = validateInput($data, $required_fields);
    
    if (!empty($errors)) {
        sendResponse(false, 'Please fill in all required fields: ' . implode(', ', $errors));
    }
    
    $clean_data = sanitizeInput($data);
    
    // Insert consultation request
    $sql = "INSERT INTO consultation_requests (name, email, phone, project_type, property_size, timeline, budget, description, preferred_contact, ip_address, created_at) 
            VALUES (:name, :email, :phone, :project_type, :property_size, :timeline, :budget, :description, :preferred_contact, :ip_address, NOW())";
    
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute([
        ':name' => $clean_data['name'],
        ':email' => $clean_data['email'],
        ':phone' => $clean_data['phone'],
        ':project_type' => $clean_data['project_type'],
        ':property_size' => $clean_data['property_size'] ?? null,
        ':timeline' => $clean_data['timeline'],
        ':budget' => $clean_data['budget'] ?? null,
        ':description' => $clean_data['description'] ?? null,
        ':preferred_contact' => $clean_data['preferred_contact'] ?? 'email',
        ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? null
    ]);
    
    if ($result) {
        sendEmailNotification($clean_data, 'consultation');
        sendResponse(true, 'Consultation request submitted successfully! We will contact you within 24 hours to schedule your free consultation.');
    } else {
        sendResponse(false, 'Failed to submit consultation request. Please try again.');
    }
}

function sendEmailNotification($data, $type) {
    $to = 'info@jeslovesinterior.com'; // Replace with your email
    $headers = [
        'From: noreply@jeslovesinterior.com',
        'Reply-To: ' . $data['email'],
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/html; charset=UTF-8'
    ];
    
    switch ($type) {
        case 'contact':
            $subject = "New Contact Form Submission from " . $data['name'];
            $message = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$data['name']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Phone:</strong> " . ($data['phone'] ?? 'Not provided') . "</p>
            <p><strong>Subject:</strong> {$data['subject']}</p>
            <p><strong>Service Type:</strong> " . ($data['service_type'] ?? 'Not specified') . "</p>
            <p><strong>Budget:</strong> " . ($data['budget'] ?? 'Not specified') . "</p>
            <p><strong>Message:</strong></p>
            <p>{$data['message']}</p>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            ";
            break;
            
        case 'newsletter':
            $subject = "New Newsletter Subscription";
            $message = "
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Name:</strong> " . ($data['name'] ?? 'Not provided') . "</p>
            <p><strong>Subscribed:</strong> " . date('Y-m-d H:i:s') . "</p>
            ";
            break;
            
        case 'consultation':
            $subject = "New Consultation Request from " . $data['name'];
            $message = "
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> {$data['name']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Phone:</strong> {$data['phone']}</p>
            <p><strong>Project Type:</strong> {$data['project_type']}</p>
            <p><strong>Property Size:</strong> " . ($data['property_size'] ?? 'Not specified') . "</p>
            <p><strong>Timeline:</strong> {$data['timeline']}</p>
            <p><strong>Budget:</strong> " . ($data['budget'] ?? 'Not specified') . "</p>
            <p><strong>Preferred Contact:</strong> " . ($data['preferred_contact'] ?? 'Email') . "</p>
            <p><strong>Description:</strong></p>
            <p>" . ($data['description'] ?? 'No additional details provided') . "</p>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            ";
            break;
    }
    
    mail($to, $subject, $message, implode("\r\n", $headers));
}
?>