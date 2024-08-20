<?php
session_start();
$id_usuario = $_SESSION['userid'];
$plan = $_SESSION['plan'];
if ($plan == 'admin')
{
    
}
else
{
    header("Location: ../index.php");
}

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
$genero = $_POST['genero'];
$fecha_subida = date("Y-m-d");
$video = $_FILES['video']['name'];
$portada = $_FILES['portada']['name'];
$publi = $_FILES['publi']['name'];
$n_publi = $_FILES['nom_publi']['name'];

// Insertar datos en la base de datos
$sql = "INSERT INTO videos (titulo, descripcion, tipo, genero, fecha_subida, video, img_portada, img_publi, nom_publi)
        VALUES ('$titulo', '$descripcion', '$tipo', '$genero', '$fecha_subida', '$video', '$portada', '$publi', '$n_publi')";

if ($conn->query($sql) === TRUE) {
    $carpeta_videos = "../videos2/";
    $carpeta_imagenes = "../img2/";

    // Mover el archivo de video a la carpeta correspondiente
    move_uploaded_file($_FILES['video']['tmp_name'], $carpeta_videos . $video);
    // Mover el archivo de portada a la carpeta correspondiente
    move_uploaded_file($_FILES['portada']['tmp_name'], $carpeta_imagenes . $portada);

    move_uploaded_file($_FILES['publi']['tmp_name'], $carpeta_imagenes . $publi);
    move_uploaded_file($_FILES['nom_publi']['tmp_name'], $carpeta_imagenes . $n_publi);

    // Consulta para contar el número de videos en el género dado
    $contar = "SELECT COUNT(id_video) AS total FROM videos WHERE genero = '$genero' and tipo = '$tipo'";
    $resultado = $conn->query($contar);
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $total_videos = $fila['total'];

        // Si hay más de 8 videos en el género, eliminar el más antiguo
        if ($total_videos > 8) {
            // Consulta para encontrar el video más antiguo
            $sql_eliminar = "SELECT id_video FROM videos WHERE genero = '$genero' ORDER BY fecha_subida ASC LIMIT 1";
            $resultado_eliminar = $conn->query($sql_eliminar);
            if ($resultado_eliminar->num_rows > 0) {
                $fila_eliminar = $resultado_eliminar->fetch_assoc();
                $id_video = $fila_eliminar['id_video'];

                // Eliminar el video más antiguo de la base de datos
                $sql_eliminar_video = "DELETE FROM videos WHERE id_video = '$id_video'";
                $conn->query($sql_eliminar_video);
            }
        }
    }

    // JavaScript para mostrar alerta y redirigir
    echo "<script>
            alert('PELICULA SUBIDA CORRECTAMENTE');
            window.location.href = 'formsubirvideo.html';
          </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
