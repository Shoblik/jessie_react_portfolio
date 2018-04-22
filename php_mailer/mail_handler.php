<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('email_config.php');
require_once('phpmailer/PHPMailer/PHPMailerAutoload.php');

$postJSON = file_get_contents('php://input');
$post = json_decode($postJSON, TRUE);

if (empty($post)) {
    die('empty post variable');
}

$output = [
  'success' => false,
];
    $mail = new PHPMailer;
    $mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

    $mail->isSMTP();                // Set mailer to use SMTP.
    $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
    $mail->SMTPAuth = true;         // Enable SMTP authentication


    $mail->Username = EMAIL_USER;   // SMTP username
    $mail->Password = EMAIL_PASS;   // SMTP password
    $mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
    $mail->Port = 587;              // TCP port to connect to
    $options = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->smtpConnect($options);
    $mail->From = 'webportfoliomailer@gmail.com';  // sender's email address (shows in "From" field)
    $mail->FromName = 'Web Portfolio Message';   // sender's name (shows in "From" field)
    $mail->addAddress('jessienyount@gmail.com');  // Add a recipient

//$mail->addAddress('ellen@example.com');                        // Name is optional
    $mail->addReplyTo($post['email']);                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Portfolio message from ' . $post['name'];
    $mail->Body    = $post['message'];
    $mail->AltBody = htmlentities('something went wrong');

    if(!$mail->send()) {
        $output['success'] = false;
        $output['message'] = $mail->ErrorInfo;
    } else {
//    echo 'Message has been sent';
        $output['emailSent'] = true;
        $output['success'] = true;

    }
    $output = json_encode($output);
    print($output);

?>
