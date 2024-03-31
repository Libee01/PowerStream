

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
    if (isset($_GET['id'])) {
        // Obtener el ID de la película
        $id_pelicula = $_GET['id'];

        $conn = mysqli_connect("localhost", "root", "rootroot")
        or die ("No se puede conectar con el servidor");

        mysqli_select_db ($conn, "powerstream") or die ("No se puede conectar a la base de datos");
        // Consulta para obtener los detalles de la película específica
        $sql = "SELECT * FROM prueba WHERE id = $id_pelicula";
        $result = $conn->query($sql);

        // Mostrar los detalles de la película
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo '<header class="header">';
            echo '    <div class="menu container">';
            echo '        <a href="#" class="logo">PowerStream</a>';
            echo '        <input type="checkbox" id="menu">';
            echo '        <label for="menu">';
            echo '            <img src="img2/menu.png" class="menu-icono" alt="menu">';
            echo '        </label>';
            echo '        <nav class="navbar">';
            echo '            <ul>';
            echo '                <li><a href="index.php">Películas</a></li>';
            echo '                <li><a href="series.php">Series</a></li>';
            echo '            </ul>';
            echo '        </nav>';
            echo '        <a href="index.php"><img id="logout" src="img/logout.png"></a>';
            echo '    </div>';
            

            echo '<div class="header-1" style="background-image:url(php/img/' . $row['img_publi'] . '); ">';
            echo '<img class="play" src="img/play.png">';
            echo '<br>';
            echo '<img class="nompubli" src="php/img/' . $row['nom_publi'] . '"> ';
            echo '</div>';
            echo '<div class="texto">';
            echo '<h2>' . $row['titulo'] . '</h2>';
            echo '<p>' . $row['descripcion'] . '</p>';
            echo '</div>';
            
            echo '</header>';
        } else {
            echo "No se encontraron detalles de la película.";
        }
    } else {
        echo "No se proporcionó ID de película.";
    }
    ?>
</body>
</html>