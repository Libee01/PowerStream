<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "rootroot";
$dbname = "powerstream";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];
$tipo = $_POST['tipo'];
$plan = $_POST['plan'];
$genero = $_POST['genero'];
$fecha_subida = date("Y-m-d");
$video = $_FILES['video']['name'];
$portada = $_FILES['portada']['name'];

// Insertar datos en la base de datos
$sql = "INSERT INTO videos (titulo, video, portada, descripcion, tipo, plan, genero, fecha_subida)
        VALUES ('$titulo', '$video', '$portada', '$descripcion', '$tipo', '$plan', '$genero', '$fecha_subida')";

if ($conn->query($sql) === TRUE) {
    echo "Video subido y registrado correctamente.";

    // Carpeta donde se guardarán los videos y las imágenes
    $carpeta_videos = "videos/";
    $carpeta_imagenes = "img/";

    // Mover el archivo de video a la carpeta correspondiente
    move_uploaded_file($_FILES['video']['tmp_name'], $carpeta_videos . $video);
    // Mover el archivo de portada a la carpeta correspondiente
    move_uploaded_file($_FILES['portada']['tmp_name'], $carpeta_imagenes . $portada);

    echo "Archivos movidos correctamente a sus respectivas carpetas.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
