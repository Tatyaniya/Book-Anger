<?php

header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$mail = htmlspecialchars($_POST["mail"]);
$text = htmlspecialchars($_POST["text"]);


$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "mail@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "potapov-gnev прислал новое сообщение";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
Почта: $mail<br>
Вопрос: $text<br>
";

mail($myemail, $tema, $message_to_myemail, "From: potapov-gnev <mail@gmail.com> \r\n Reply-To: potapov \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$name</td> <td>$mail</td>  <td>$text</td> <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>