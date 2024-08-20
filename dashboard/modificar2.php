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
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a href="dashboard.php" class="logo">PowerStream</a>
            <nav class="navbar">
                <ul>
                        <li><a href="dashboard.php">Contenido</a></li>
                        <li><a href="dashboard.php">Usuarios</a></li>
                </ul>
            </nav>
            <a href="../index.php"><img id="logout" src="../img/logout.png"></a>
        </div>
    </header>

    <?php
    // Verificar si se ha recibido un ID de video para modificar
    if(isset($_POST['id_video'])) {
        // Obtener el ID de video enviado desde el formulario
        $id_video = $_POST['id_video'];

        // Realizar la conexión a la base de datos
        $servername = "localhost";
        $username = "root";
        $password = "rootroot";
        $dbname = "powerstream";
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar si hay errores de conexión
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        // Consulta SQL para obtener los datos del video a modificar
        $sql = "SELECT * FROM videos WHERE id_video = '$id_video'";
        $result = $conn->query($sql);

        // Verificar si se encontraron resultados
        if ($result->num_rows > 0) {
            // Mostrar el formulario para modificar los datos del video
            $row = $result->fetch_assoc();
            ?>
            <div id="anadirformulario" class="forms">
    <div class="login-form2" id="loginForm2">
        <h2>MODIFICAR VIDEO</h2>
        <div class="titulos">
            <p class="tit">Título:</p>
            <p class="tit">Descripción:</p><br><br><br>
            <p class="tit">Tipo:</p>
            <p class="tit">Género:</p>
            <p class="tit">Fecha de Subida:</p>
            <p class="tit">Video:</p>
            <p class="tit">Img Portada:</p>
            <p class="tit">Img Publicidad:</p>
            <p class="tit">Nombre Publicidad:</p>
        </div>
        <div class="inputs">
            <form action="guardar_modificaciones.php" method="POST"  enctype="multipart/form-data">
                <input type="hidden" name="id_video" value="<?php echo $row['id_video']; ?>">
                <input type="text" id="titulo" name="titulo" value="<?php echo $row['titulo']; ?>"><br>
                <textarea id="descripcion" name="descripcion"><?php echo $row['descripcion']; ?></textarea><br>
                <select id="tipo" name="tipo" required>
                    <option value="pelicula" <?php if($row['tipo'] == 'pelicula') echo 'selected'; ?>>Película</option>
                    <option value="serie" <?php if($row['tipo'] == 'serie') echo 'selected'; ?>>Serie</option>
                </select><br>
                <select id="genero" name="genero" required>
                    <option value="accion" <?php if($row['genero'] == 'accion') echo 'selected'; ?>>Acción</option>
                    <option value="terror" <?php if($row['genero'] == 'terror') echo 'selected'; ?>>Terror</option>
                    <option value="drama" <?php if($row['genero'] == 'drama') echo 'selected'; ?>>Drama</option>
                    <option value="romantica" <?php if($row['genero'] == 'romantica') echo 'selected'; ?>>Romántica</option>
                    <option value="comedia" <?php if($row['genero'] == 'comedia') echo 'selected'; ?>>Comedia</option>
                    <option value="aventuras" <?php if($row['genero'] == 'aventuras') echo 'selected'; ?>>Aventuras</option>
                </select><br>
                <input type="text" id="fecha_subida" name="fecha_subida" value="<?php echo $row['fecha_subida']; ?>"><br>
                    <input type="file" id="video" name="video">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="portada" name="portada">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="publi" name="publi">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="nom_publi" name="nom_publi">

                <input class="btn-7" type="submit" value="Guardar cambios">
            </form>
        </div>
    </div>
</div>

            <?php
        } else {
            
        }

        // Cerrar la conexión a la base de datos
        $conn->close();
    } else {
        // Si no se recibió un ID de video, mostrar un mensaje de error
        echo "<div class='error'>No se recibió el ID de video para modificar.</div>";
    }
    ?>
  <script>
        function goBack() {
            window.history.back();
        }
    </script>
</body>
</html>
<?php
$conn->close();
?>
