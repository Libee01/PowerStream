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

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
    $columna = $conn->real_escape_string($_POST['columna']);
    $valor = $conn->real_escape_string($_POST['valor']);

    // Crear la consulta SQL
    $sql = "SELECT * FROM peliculas WHERE $columna = '$valor'";
    $result = $conn->query($sql);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['borrar'])) {
    $id_video = $conn->real_escape_string($_POST['id_video']);

    // Crear la consulta SQL para borrar
    $sql = "DELETE FROM peliculas WHERE id_video = '$id_video'";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Película borrada exitosamente');</script>";
    } else {
        echo "Error borrando la película: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon"> <!-- Vincula el icono favicon -->
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
    <div id="anadirformulario" class="forms">
        <div class="login-form2" id="loginForm2">
            <h2>SUBIR VIDEO</h2>
            <div class="titulos">
                <p class="tit">Título:</p>
                <p class="tit">Descripción:</p><br><br><br>
                <p class="tit">Tipo:</p>
                <p class="tit">Género:</p>
                <p class="tit">Archivo de video:</p>
                <p class="tit">Imagen de portada:</p>
                <p class="tit">Imagen de publicidad:</p>
                <p class="tit">Nombre de película:</p>
            </div>
            <div class="inputs">
                <form action="subirvideo.php" method="POST" enctype="multipart/form-data">    
                    <input type="text" id="titulo" name="titulo">
                    <textarea id="descripcion" name="descripcion"></textarea><br>
                    <select id="tipo" name="tipo" required>
                        <option value="pelicula">Película</option>
                        <option value="serie">Serie</option>
                    </select><br>
                    <select id="genero" name="genero" required>
                        <option value="accion">Acción</option>
                        <option value="terror">Terror</option>
                        <option value="romantica">Romántica</option>
                        <option value="comedia">Comedia</option>
                    </select><br>
                    <input type="file" id="video" name="video">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="portada" name="portada">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="publi" name="publi">
                    <input type="hidden" name="MAX_FILE_SIZE" value="9999999">
                    <input type="file" id="nom_publi" name="nom_publi"><br><br>
                    <button type="submit">Subir vídeo</button>
                </form>
            </div>
        </div>
    </div>
    <?php
if (isset($result) && $result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>ID Video</th>
                <th>Título</th>
                <th>Género</th>
                <th>Fecha de Subida</th>
                <th>Acciones</th>
            </tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id_video']}</td>
                <td>{$row['titulo']}</td>
                <td>{$row['genero']}</td>
                <td>{$row['fecha_subida']}</td>
                <td>
                    <form action='' method='POST' onsubmit='return confirm(\"¿Estás seguro de que deseas borrar esta película?\");'>
                        <input type='hidden' name='id_video' value='{$row['id_video']}'>
                        <button type='submit' name='borrar'>Borrar</button>
                    </form>
                </td>
            </tr>";
    }
    echo "</table>";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
    echo "No se encontraron resultados.";
}
?>

    <script>
        function goBack() {
            window.history.back();
        }
    </script>
    
</body>
</html>