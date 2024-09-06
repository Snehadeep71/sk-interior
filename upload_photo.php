<?php
session_start();
if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
    header('Location: login.html');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['photo'])) {
    $filename = basename($_FILES['photo']['name']);
    $target_path = "uploads/" . $filename;

    if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_path)) {
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'photo_gallery');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Insert photo record
        $sql = "INSERT INTO photos (filename) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $filename);
        $stmt->execute();
        $stmt->close();
        $conn->close();

        header('Location: dashboard.php');
    } else {
        echo "Error uploading photo.";
    }
}
?>
