<?php
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Get the form fields and remove whitespace
	$Name = strip_tags(trim($_POST["Name"]));
	$Name = str_replace(array("\r", "\n"), array(" ", " "), $Name);
	$email = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);
	$title = strip_tags(trim($_POST["Title"]));
	$title = str_replace(array("\r", "\n"), array(" ", " "), $title);
	$messages = strip_tags(trim($_POST["Messages"]));
	$messages = str_replace(array("\r", "\n"), array(" ", " "), $messages);

	// Check that data was sent to the mailer.
	if (empty($Name) || empty($email) || empty($title) || empty($messages)) {

		// Set a 400 (bad request) response code and exit.
		// http_response_code(400);
		echo "Niepoprawnie uzupełniłeś formularz";
		exit;
	}

	$trescMaila = "
    <p><b>Zgloszenie na Prime City</b></p>
    <p>Dane do kontaktu:<br/>
    Imię i Nazwisko: <b>$Name</b> <br/>
		Email: <b>$email</b> <br/>
		Tytuł wiadomości: <b>$title</b>
		Wiadomość: <br/>
		$messages
    </p>
    ";

	$mail->CharSet = "UTF-8";
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'mpro2.linuxpl.com';                       // Specify main and backup server
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'rochyra@primebitgames.com';                   // SMTP username
	$mail->Password = 'Ro3107,,pbg';               // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
	$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS
	$mail->setFrom('rochyra@primebitgames.com', 'Prime City');     //Set who the message is to be sent from
	$mail->addReplyTo($email);  //Set an alternative reply-to address
	// $mail->addAddress('kontakt@wirtualnykelner.pl');  // Add a recipient innn!!!!!!!!!!!!!!!!!
	$mail->addAddress('rochyra@primebitgames.com');  // Add a recipient innn!!!!!!!!!!!!!!!!!
	$mail->SMTPDebug = 0; //Debug?

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = 'Zgloszenie na Prime City';
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
	echo "Dziękujemy, wiadomość wysłana";
} else {
	// Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo "Błąd servera, spróbuj jeszcze raz";
}
