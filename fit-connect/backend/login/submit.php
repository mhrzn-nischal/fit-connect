<?php

session_start();
// include('susbmitConnection.php'); 
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define variables and initialize with empty values
    $full_name = $age = $gender = $fitness_goal = $fitness_level = $diet = $other_diet = "";
    $medical_conditions = $other_medical = $allergies = $other_allergies = $workout_days = "";
    $workout_times = $trainer_gender = $trainer_age = $trainer_training_style = $motivation_preference = $goals_timeline = "";

    // Processing form data when form is submitted
    // Retrieve and sanitize input values
    if (empty($_POST['full-name'])) {
        die("Full Name is required");
    }

    // Get form data
    $full_name = htmlspecialchars($_POST['full-name']);
    
    $age = htmlspecialchars($_POST["age"]);
    $gender = htmlspecialchars($_POST["gender"]);
    $fitness_goal = htmlspecialchars($_POST["fitness-goal"]);
    $fitness_level = htmlspecialchars($_POST["fitness-level"]);
    $diet = htmlspecialchars($_POST["diet"]);
    $other_diet = htmlspecialchars($_POST["other-diet"]);
    if (!empty($_POST["medical-conditions"])) {
        $medical_conditions = implode(", ", $_POST["medical-conditions"]);
    }
    $other_medical = htmlspecialchars($_POST["other-medical"]);
    if (!empty($_POST["allergies"])) {
      $allergies = isset($_POST['allergies']) && is_array($_POST['allergies']) ? implode(', ', $_POST['allergies']) : '';
    }
    $other_allergies = htmlspecialchars($_POST["other-allergies"]);
    $workout_days = htmlspecialchars($_POST["workout-days"]);
    if (!empty($_POST["workout-times"])) {
        $workout_times = implode(", ", $_POST["workout-times"]);
    }
    if (!empty($_POST["trainer-gender"])) {
        $trainer_gender = implode(", ", $_POST["trainer-gender"]);
    }
    if (!empty($_POST["trainer-age"])) {
        $trainer_age = implode(", ", $_POST["trainer-age"]);
    }
    if (!empty($_POST["trainer-training-style"])) {
        $trainer_training_style = implode(", ", $_POST["trainer-training-style"]);
    }
    $motivation_preference = htmlspecialchars($_POST["motivation-preference"]);
    $goals_timeline = htmlspecialchars($_POST["goals-timeline"]);

    // Perform database operations here or any other actions needed with the form data

    // Redirect to a success page after form submission
    header("Location: submitConnection.php");
    exit();
}
?>
