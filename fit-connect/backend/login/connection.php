<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userlogin_db";
$port = 1000;

$conn = new mysqli($servername, $username, $password, $dbname,$port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
