<?php
session_start();
$id_usuario = $_SESSION['userid'];
$plan = $_SESSION['plan'];
if ($plan == 'basico')
{
    
}
elseif ($plan == 'gold')
{
    
}
elseif ($plan == 'premium')
{
    
}
else
{
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="css/reproductor.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon"> <!-- Vincula el icono favicon -->
</head>
<body>
    <?php
    // Verificar si se proporcionó un ID de película
    if (isset($_GET['id_video'])) {
        // Obtener el ID de la película
        $id_pelicula = $_GET['id_video'];

        $conn = mysqli_connect("localhost", "root", "rootroot")
        or die ("No se puede conectar con el servidor");

        mysqli_select_db ($conn, "powerstream") or die ("No se puede conectar a la base de datos");

        // Consulta para obtener los detalles de la película específica
        $sql = "SELECT * FROM videos WHERE id_video = $id_pelicula";
        $result = $conn->query($sql);

        // Mostrar los detalles de la película
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo '<header class="header">';
            echo '    <div class="menu container">';
            echo '        <a href="#" class="logo" onclick="goBack()">PowerStream</a>'; // Modificación aquí
            echo '        <input type="checkbox" id="menu">';
            echo '        <label for="menu">';
            echo '            <img src="img2/menu.png" class="menu-icono" alt="menu">';
            echo '        </label>';
            echo '        <nav class="navbar">';
            echo '            <ul>';
            echo '                <li><a href="#" onclick="goBack()">Películas</a></li>';
            echo '                <li><a href="#" onclick="goBack()">Series</a></li>';
            echo '            </ul>';
            echo '        </nav>';
            echo '        <a href="index.php"><img id="logout" src="img/logout.png"></a>';
            echo '    </div>';
            
            echo '<div class="header-1" id="movie-image" style="background-image:url(img2/' . $row['img_publi'] . '); ">';
            echo '<img class="play" src="img/play.png" onclick="playVideo()">';
            echo '<br>';
            echo '<img class="nompubli" src="img2/' . $row['nom_publi'] . '"> ';
            echo '</div>';
            echo '<div class="texto" id="movie-details">';
            echo '<h2>' . $row['titulo'] . '</h2>';
            echo '<p>' . $row['descripcion'] . '</p>';
            echo '</div>';
            echo '</header>';

            // Añadir el elemento de video
            echo '<div class="video-container" id="video-container">';
            echo '    <video id="video" controls>';
            echo '        <source src="videos2/' . $row['video'] . '" type="video/mp4">';
            echo '        Your browser does not support the video tag.';
            echo '    </video>';
            echo '</div>';
        } else {
            echo "No se encontraron detalles de la película.";
        }
    } else {
        echo "No se proporcionó ID de película.";
    }
    ?>
    <script>
        function goBack() {
            window.history.back();
        }

        function playVideo() {
            document.getElementById('movie-image').classList.add('hidden');
            document.getElementById('movie-details').classList.add('hidden');
            const videoContainer = document.getElementById('video-container');
            videoContainer.style.display = 'block';
            const video = document.getElementById('video');
            video.play();
        }
    </script>
</body>
</html>
