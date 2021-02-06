<?php
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Get the form fields and remove whitespace
	$Name = strip_tags(trim($_POST["Name"]));
	$Name = str_replace(array("\r", "\n"), array(" ", " "), $Name);
	$email = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);
	$phone = strip_tags(trim($_POST["Phone"]));
	$messages = strip_tags(trim($_POST["Message"]));
	$messages = str_replace(array("\r", "\n"), array(" ", " "), $messages);

	// Check that data was sent to the mailer.
	// if (empty($Name) || empty($email) || empty($messages)) {

	// 	// Set a 400 (bad request) response code and exit.
	// 	// http_response_code(400);
	// 	echo "Niepoprawnie uzupełniłeś formularz";
	// 	exit;
	// }

	$trescMaila = "
    <p><b>Formularz sklepu Eco Shop</b></p>
    <p>Dane do kontaktu:<br/>
    Imię i Nazwisko: <b>$Name</b> <br/>
		Email: <b>$email</b> <br/>
		Telefon: <b>$phone</b> <br/>
		Wiadomość: <br/>
		$messages
    </p>
    ";

	$mail->CharSet = "UTF-8";
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'ecoshop.webakademia@gmail.com';                   // SMTP username
	$mail->Password = 'ecoshop1@';               // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted
	$mail->Port = 465;                                    //Set the SMTP port number - 587 for authenticated TLS
	$mail->setFrom('ecoshop.webakademia@gmail.com', 'Eco Shop');     //Set who the message is to be sent from
	$mail->addReplyTo($email);  //Set an alternative reply-to address
	$mail->addAddress('ecoshop.webakademia@gmail.com');  // Add a recipient innn!!!!!!!!!!!!!!!!!
	$mail->SMTPDebug = 0; //Debug?

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = 'Formularz sklepu Eco Shop';
	$mail->Body    = $trescMaila;
	// $mail->AltBody = $AltTresc;

	//Read an HTML message body from an external file, convert referenced images to embedded,
	//convert HTML into a basic plain-text alternative body
	//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
	if (!$mail->send()) {
		echo 'Przepraszamy, ale wystąpił błąd';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
		exit;
	}
	echo "sent";
} else {
	// Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo "fail";
}
