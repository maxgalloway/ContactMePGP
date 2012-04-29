<?php
require('install/config.php');

$result = mail($GLOBALS['recipient'], 'test email', $_POST['message']);

if($result == 1)
echo 'sending to '.$GLOBALS['recipient'].' succeeded.';
else
echo 'sending failure';

?>