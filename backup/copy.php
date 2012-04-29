<?php

$result = mail('maxvgc@gmail.com', 'test email', 'it is a message');

if($result == 1)
echo 'sending to '.$GLOBALS['recipient'].' succeeded.';
else
echo 'sending failure';

?>