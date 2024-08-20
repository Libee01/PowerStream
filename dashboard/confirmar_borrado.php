<?php
session_start();
if ($plan == 'admin')
{
    
}
else
{
    header("Location: ../index.php");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_video = $_POST['id_video'];

    // Aquí debes establecer la conexión a la base de datos.
    $servername = "localhost";
    $username = "root";
    $password = "rootroot";
    $dbname = "powerstream";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Sanitizar la entrada del usuario para prevenir inyección SQL
    $id_video = $conn->real_escape_string($id_video);

    // Crear la consulta SQL para borrar
    $sql = "DELETE FROM videos WHERE id_video = '$id_video'";

    if ($conn->query($sql) === TRUE) {
        echo "Película borrada exitosamente";
    } else {
        echo "Error borrando la película: " . $conn->error;
    }

    $conn->close();
}
?>