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
$id_video = $_POST['id_video'];
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];
$tipo = $_POST['tipo'];
$genero = $_POST['genero'];
$fecha_subida = date("Y-m-d");
$video = $_FILES['video']['name'];
$portada = $_FILES['portada']['name'];
$publi = $_FILES['publi']['name'];
$n_publi = $_FILES['nom_publi']['name'];

// Crear la consulta SQL para actualizar los datos del video
$sql = "UPDATE videos SET 
            titulo='$titulo', 
            descripcion='$descripcion', 
            tipo='$tipo', 
            genero='$genero', 
            fecha_subida='$fecha_subida', 
            video='$video', 
            img_portada='$portada', 
            img_publi='$publi', 
            nom_publi='$n_publi' 
        WHERE id_video='$id_video'";

if ($conn->query($sql) === TRUE) {
    echo "Video actualizado correctamente.";

    // Carpeta donde se guardarán los videos y las imágenes
    $carpeta_videos = "../videos2/";
    $carpeta_imagenes = "../img2/";

    $errores = [];

    // Mover el archivo de video a la carpeta correspondiente
    if (!empty($video)) {
        if ($_FILES['video']['error'] === UPLOAD_ERR_OK) {
            if (!move_uploaded_file($_FILES['video']['tmp_name'], $carpeta_videos . $video)) {
                $errores[] = "Error al mover el archivo de video.";
            }
        } else {
            $errores[] = "Error en la subida del archivo de video: " . $_FILES['video']['error'];
        }
    }

    // Mover el archivo de portada a la carpeta correspondiente
    if (!empty($portada)) {
        if ($_FILES['portada']['error'] === UPLOAD_ERR_OK) {
            if (!move_uploaded_file($_FILES['portada']['tmp_name'], $carpeta_imagenes . $portada)) {
                $errores[] = "Error al mover el archivo de portada.";
            }
        } else {
            $errores[] = "Error en la subida del archivo de portada: " . $_FILES['portada']['error'];
        }
    }

    // Mover el archivo de publicidad a la carpeta correspondiente
    if (!empty($publi)) {
        if ($_FILES['publi']['error'] === UPLOAD_ERR_OK) {
            if (!move_uploaded_file($_FILES['publi']['tmp_name'], $carpeta_imagenes . $publi)) {
                $errores[] = "Error al mover el archivo de publicidad.";
            }
        } else {
            $errores[] = "Error en la subida del archivo de publicidad: " . $_FILES['publi']['error'];
        }
    }

    // Mover el archivo del nombre de publicidad a la carpeta correspondiente
    if (!empty($n_publi)) {
        if ($_FILES['nom_publi']['error'] === UPLOAD_ERR_OK) {
            if (!move_uploaded_file($_FILES['nom_publi']['tmp_name'], $carpeta_imagenes . $n_publi)) {
                $errores[] = "Error al mover el archivo del nombre de publicidad.";
            }
        } else {
            $errores[] = "Error en la subida del archivo del nombre de publicidad: " . $_FILES['nom_publi']['error'];
        }
    }

    if (empty($errores)) {
        echo "<script>
            alert('Modificaciones guardadas correctamente.');
            window.location.href = 'formmodificarvideo.php';
          </script>";
    } else {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!-- Enlace para volver a la página de modificación -->
<a href="formmodificarvideo.php">Volver</a>
