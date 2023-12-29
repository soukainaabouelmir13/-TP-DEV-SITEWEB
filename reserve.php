<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $partySize = $_POST["partySize"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    $reservationData = "$name, $email, $partySize, $date, $time\n";

    // Append reservation data to the text file
    file_put_contents("reservations.txt", $reservationData, FILE_APPEND);

    // You can add more logic here, such as sending an email confirmation to the user

    // Redirect to a thank you page or back to the reservation form
    header("Location: thank-you.html");
    exit();
}

?>
