<?php
$servername = "localhost";
$db_username = "sayan"; // New MySQL username
$db_password = "snehadeep2"; // New MySQL password
$database = "photo_gallery2"; // New database name

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
