<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userlogin_db";
$port = 1000;

// Create a new mysqli connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Construct SQL INSERT query
$sql = "INSERT INTO user_data (full_name, age, gender, fitness_goal, fitness_level, diet, other_diet, medical_conditions, other_medical, allergies, other_allergies, workout_days, workout_times, trainer_gender, trainer_age, trainer_training_style, motivation_preference, goals_timeline) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Prepare the SQL statement
$stmt = $conn->prepare($sql);

// Check for statement preparation errors
if (!$stmt) {
    die("Statement preparation failed: " . $conn->error);
}

// Bind parameters to the prepared statement
$stmt->bind_param("sissssssssssssssss", $full_name, $age, $gender, $fitness_goal, $fitness_level, $diet, $other_diet, $medical_conditions, $other_medical, $allergies, $other_allergies, $workout_days, $workout_times, $trainer_gender, $trainer_age, $trainer_training_style, $motivation_preference, $goals_timeline);

// Execute the prepared statement
if (!$stmt->execute()) {
    die("Execution failed: " . $stmt->error);
}

// Close the statement
$stmt->close();

// Close the database connection
$conn->close();

// Redirect to a success page after form submission
header("Location: http://127.0.0.1:5500/frontend/profile.html");
exit();
?>


