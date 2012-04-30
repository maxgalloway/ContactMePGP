<?php
require_once('install/config.php');

if(validateCaptcha($_POST['challenge'])){
  doSend();

} else{
  header("HTTP/1.0 403 Forbidden");

}

function validateCaptcha($captcha){           
  require_once('secImg/securimage.php');
  $securimage = new Securimage();

  return $securimage->check($captcha);
}


function doSend(){
  $result = mail($GLOBALS['recipient']
  	    , 'test email', $_POST['message']);

  if($result){
    header("HTTP/1.0 200 OK");
  } else{
   header("HTTP/1.0 500 Internal Server Error");
  }
}
?>