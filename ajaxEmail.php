<?php
if (isset($_POST)) {
    $companyname = $_POST['companyname'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phoneno = $_POST['phoneno'];
    $user_message = $_POST['message'];
    if(empty($companyname) || empty($fullname) || empty($email) || empty($phoneno) || empty($user_message)) {
        echo 'fail 1'; exit;
    }


    $subject = "Contact Us";
    $to = "dev.mwaqas@gmail.com";
    // $to = "<info@explorelogics.com>, <yaseen3327095758@gmail.com>";

    $message = 'Company Name: '.$companyname."\r\n".'User Name: '.$fullname."\r\n".'Email: '.$email."\r\n". 'Phone Number: '.$phoneno."\r\n". 'Message: '.$user_message;
    $from = "<noreply@explorelogics.com>";

    $headers = "From: Contact Us " . $from."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode( array('msg' => 'success', 'response' => 'Email successfully sent. We will be in touch with you shortly. Thanks.') );
        exit;
    } else {
        echo json_encode( array('msg' => 'error', 'response' => 'Sorry, an error occurred while a sending message, Please try again.') );
        exit;
    }
    
}?>