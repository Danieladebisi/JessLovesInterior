<?php
/**
 * Database Setup Script for Jes Love's Interior Design Website
 * Run this script once to create the necessary database tables
 */

// Database configuration
$host = 'localhost';
$dbname = 'interior_design_db';
$username = 'your_db_username';
$password = 'your_db_password';

try {
    // Create database connection
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    // Create database if it doesn't exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$dbname`");
    
    echo "Database '$dbname' created/selected successfully.<br><br>";
    
    // Create contact_submissions table
    $contact_table = "
    CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(500) NOT NULL,
        service_type VARCHAR(100),
        budget VARCHAR(100),
        message TEXT NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('new', 'replied', 'resolved') DEFAULT 'new',
        INDEX idx_email (email),
        INDEX idx_created_at (created_at),
        INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    
    $pdo->exec($contact_table);
    echo "Contact submissions table created successfully.<br>";
    
    // Create newsletter_subscribers table
    $newsletter_table = "
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        unsubscribed_at TIMESTAMP NULL,
        ip_address VARCHAR(45),
        status ENUM('active', 'unsubscribed', 'bounced') DEFAULT 'active',
        verification_token VARCHAR(255),
        verified_at TIMESTAMP NULL,
        INDEX idx_email (email),
        INDEX idx_status (status),
        INDEX idx_subscribed_at (subscribed_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    
    $pdo->exec($newsletter_table);
    echo "Newsletter subscribers table created successfully.<br>";
    
    // Create consultation_requests table
    $consultation_table = "
    CREATE TABLE IF NOT EXISTS consultation_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        project_type VARCHAR(100) NOT NULL,
        property_size VARCHAR(100),
        timeline VARCHAR(100) NOT NULL,
        budget VARCHAR(100),
        description TEXT,
        preferred_contact ENUM('email', 'phone', 'text') DEFAULT 'email',
        consultation_scheduled_at TIMESTAMP NULL,
        ip_address VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('new', 'scheduled', 'completed', 'cancelled') DEFAULT 'new',
        notes TEXT,
        INDEX idx_email (email),
        INDEX idx_project_type (project_type),
        INDEX idx_created_at (created_at),
        INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    
    $pdo->exec($consultation_table);
    echo "Consultation requests table created successfully.<br>";
    
    // Create analytics table for tracking form submissions
    $analytics_table = "
    CREATE TABLE IF NOT EXISTS form_analytics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        form_type VARCHAR(50) NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        referrer VARCHAR(500),
        page_url VARCHAR(500),
        submission_date DATE,
        submission_time TIME,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_form_type (form_type),
        INDEX idx_submission_date (submission_date),
        INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    
    $pdo->exec($analytics_table);
    echo "Analytics table created successfully.<br>";
    
    // Create admin users table (optional for backend management)
    $admin_table = "
    CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('admin', 'manager', 'viewer') DEFAULT 'viewer',
        last_login TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('active', 'inactive') DEFAULT 'active',
        INDEX idx_username (username),
        INDEX idx_email (email),
        INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    
    $pdo->exec($admin_table);
    echo "Admin users table created successfully.<br>";
    
    // Insert default admin user (change password immediately!)
    $default_admin = "
    INSERT IGNORE INTO admin_users (username, email, password_hash, role) 
    VALUES ('admin', 'admin@jeslovesinterior.com', :password_hash, 'admin')
    ";
    
    $stmt = $pdo->prepare($default_admin);
    $stmt->execute([':password_hash' => password_hash('admin123!', PASSWORD_DEFAULT)]);
    echo "Default admin user created (username: admin, password: admin123!) - CHANGE IMMEDIATELY!<br>";
    
    echo "<br><strong>Database setup completed successfully!</strong><br>";
    echo "<br><strong>Next steps:</strong><br>";
    echo "1. Update the database credentials in contact-handler.php<br>";
    echo "2. Change the default admin password<br>";
    echo "3. Test the contact forms on your website<br>";
    echo "4. Set up email configuration for notifications<br>";
    
} catch (PDOException $e) {
    echo "Database setup failed: " . $e->getMessage();
} catch (Exception $e) {
    echo "Setup failed: " . $e->getMessage();
}
?>