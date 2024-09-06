<?php
include 'db.php'; // Include the database connection file

// New password
$newPassword = 'snehadeep2';

// Hash the new password
$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

// Insert or update the admin user
$sql = "INSERT INTO users (username, password) VALUES ('sayan', '$hashedPassword')
        ON DUPLICATE KEY UPDATE password='$hashedPassword'";

if ($conn->query($sql) === TRUE) {
    echo "Admin user created/updated successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>