<?php
	$existing_account = array("coen60", "coen60l");
	$account = $_POST["account"];
	$password = $_POST["password"];
	$message = "";
	$hasNumber = false;

	foreach ($existing_account as $element) {
		if($element == $account) {
			$message .= "The account name is already taken.";
		}
	}

	if(empty($message)) {
		if(strlen($password) < 8) {
			$msg .= "<font color=red>Your password is too short. It must be at least 8 charcters long.</font><br>";
		}
		else {
			for($i=0; $i<strlen($password); $i++) {
				$j = $password[$i];
				if(is_numeric($j)) {
					$hasNumber = true;
				}
			}
			if(!$hasNumber) {
				$message .= "<font color=red>You need at least 1 number.</font>";
			}
			else{
				$message .= "<font color=blue>Your account and password will be created.</font>";
			}
		}
	}
?>