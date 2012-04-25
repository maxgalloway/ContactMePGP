<?php

$result = mail('maxvgc@gmail.com', 'test email', $_POST['message']);

if($result == 1)
echo 'sending succeeded.';
else
echo 'sending failure';

?>