<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$call = $_POST['call'];
$service = $_POST['service'];
$message = $_POST['message'];
$formcontent=" From: $name \n Priority: $priority \n Message: $message";
$recipient = "tmimi0387@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>