<?PHP
$email = $_POST["email"];
$submittedmessage = $_POST["message"];
$to = "viravongv@gmail.com";
$subject = "New Email Address for Mailing List";
$headers = "From: $email\n";
$message = "A visitor to your site has sent the following message to be added to your mailing list.\n
            Message: $submittedmessage";

$user = "$email";
$usersubject = "Thank You";
$userheaders = "From: viravongv@gmail.com\n";
$usermessage = "Thank you for your message. We will get back to you shortly!";

mail($to,$subject,$message,$headers);
mail($user,$usersubject,$usermessage,$userheaders);
?>
