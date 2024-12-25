<?php
//configuration
$toEmail='prcsKhutso@gmail.com';
$subject='contact Form submission';

//Difine a function to validate form data
function validateFormData($formData){
    $errors=[];
    
    if(empty($formData['name'])){
        $errors[]='Please enter your name.';
    }
    if(empty($formData['email'])){
        $errors[]='please enter your email';
        }
    if(empty($formData['message'])){
        $errors[]='Please enter your message.';
    }  
    return $errors;
}

//Define a function to send an email
function sendEmail($toEmail,$subject,$body,$headers){
    try{
        mail($toEmail,$subject,$body,$headers);
        return true;
    } catch (Exception $e) {
       return false;
    }
}

//check if form data is sent
if($_SERVER['REQUEST_METHOD']==='POST'){
//Get form data
$name=filter_var($_POST['name'],FILTER_SANITIZE_STRING);
$email=filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
$message=filter_var($_POST['message'],FILTER_SANITIZE_STRING);

//validate form dats
if(empty($name)|| empty($email)|| empty($message)){
    $response=['success'=>false,'message'=>'please fill in all fields.',];
    echo
    json_encode($response);
    exit;           
}

//send email
$headers="From: $email\r\n";
$headers.="Reply-To: $email\r\n";
$headers.="content-Type:text\plain; charset=UTF-8\r\n";
$body ="Name:$name\r\nEmail: $email\r\nMessage:$message";
mail($toEmail,$subject, $body, $headers);

//return success response

  $response=['success'=>true,'message'=>'message sent successfully.',];
    echo
    json_encode($response);
    exit;           
}else{
    //return error response
    $response=['success'=>false,'message'=>'Method not allowed.Please use POST request.',];
    echo json_encode($response);
      exit;      
}
