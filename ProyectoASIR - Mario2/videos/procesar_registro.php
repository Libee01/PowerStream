<?php
// Conexión a la base de datos (debes reemplazar los valores con los de tu configuración)
$servername = "localhost";
$username = "root";
$password = "rootroot";
$database = "powerstream";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Insertar los datos del nuevo usuario en la base de datos
    $sql = "INSERT INTO p_usuario (correo, password) VALUES ('$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso. ¡Bienvenido!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
