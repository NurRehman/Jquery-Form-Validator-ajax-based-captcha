	<?php
	session_start(); // started the session to get the session string.
	
	//Check if user Captcha is equals to the session string.
	echo (strtolower($_POST['captcha']) == strtolower($_SESSION['random_number'])) ?: false;

	?>
