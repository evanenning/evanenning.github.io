<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

 
  $destinatario = 'mariaevanenning@gmail.com';
  $asunto = 'Formulario de contacto';

  
  $contenidoCorreo = "Nombre: $nombre\n";
  $contenidoCorreo .= "Email: $email\n";
  $contenidoCorreo .= "Mensaje: $mensaje\n";

  
  $resultado = mail($destinatario, $asunto, $contenidoCorreo);

  if ($resultado) {
    echo 'El formulario se ha enviado correctamente.';
  } else {
    echo 'Hubo un error al enviar el formulario.';
  }
}
?>
