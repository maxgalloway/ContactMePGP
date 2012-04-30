<?php
/**
Copyright (C) 2012 Max Galloway-Carson maxvgc@gmail.com

This file is part of ContactMePGP.
    
ContactMePGP is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
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
  	    , 'pgp message for you', $_POST['message']);

  if($result){
    header("HTTP/1.0 200 OK");
  } else{
   header("HTTP/1.0 500 Internal Server Error");
  }
}
?>