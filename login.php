<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->bind_result($userId, $hashedPassword);
    $stmt->fetch();
    $stmt->close();

    if (password_verify($password, $hashedPassword)) {
        $_SESSION['loggedin'] = true;
        $_SESSION['userid'] = $userId;
        header('Location: dashboard.php');
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
$conn->close();
?>
