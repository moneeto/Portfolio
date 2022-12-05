<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['textarea'];



$destinatario = "palmeyro-businessacc@outlook.com";
$asunto = "Este mail proviene del portafolio 'FRONT-END DEVELOPER'.";

$mensaje = 'Este mensaje fue enviado por '. $nombre . ',\r\n';
$mensaje .= 'Su e-mail es: ' . $email . ',\r\n';
$mensaje .= 'Mensaje: ' . $_POST['mensaje'] . ',\r\n';
$mensaje .= 'Este mensaje fue enviado el ' . date('d/m/Y', time());

mail($destinatario, $asunto, utf8_decode($mensaje), $header);

header("location: ../Portafolio/exito.html");

?>
