<?php

	$sendto   = "valentine.webdev@gmail.com"; // почта, на которую будет приходить письмо
	$emptyField = 'Поле не заполнено';
	
	$usersubj = $_POST['subject']; // сохраняем в переменную данные полученные из поля c телефонным номеро
	$username = ( $_POST['name'] != '') ? $_POST['name'] : $emptyField; // сохраняем в переменную данные полученные из поля c телефонным номеро
	$usertel = $_POST['tel'] ? $_POST['tel'] : $emptyField; // сохраняем в переменную данные полученные из поля c телефонным номеро
	

	// Формирование заголовка письма
	$subject  = "PROJECTS.WEBCLICK - Отделка бань - Заявка с сайта";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Отделка бань - Заявка с сайта</h2>\r\n";
	$msg .= "<p><strong>Форма:</strong> ".$usersubj."</p>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	$msg .= "</body></html>";

	if ( $usertel != 'Поле не заполнено' && $usertel != '' ){
		@mail($sendto, $subject, $msg, $headers);
	}

?>
