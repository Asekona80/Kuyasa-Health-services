<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $service = $_POST["service"];

    // Basic input validation (you can add more validation as needed)
    if (empty($name) || empty($email) || empty($service)) {
        echo "Please fill out all required fields.";
    } else {
        // Process the data as needed (e.g., save to a database)
        // Customize the response message
        $response = "Thank you, $name, for joining our health services! We will contact you shortly.";
        echo $response;
    }
} else {
    echo "Access denied.";
}
?>
