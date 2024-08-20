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

$results = [];
$order_by = 'id_video';
$order_dir = 'ASC';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['buscar'])) {
        $columna = $conn->real_escape_string($_POST['columna']);
        $valor = $conn->real_escape_string($_POST['valor']);

        // Crear la consulta SQL
        if ($valor === 'all') {
            // Consulta SQL para listar todos los videos
            $sql = "SELECT * FROM videos ";
        } else {
            // Crear la consulta SQL con filtro
            $sql = "SELECT * FROM videos where $columna like '%$valor%'";
        }
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $results = $result->fetch_all(MYSQLI_ASSOC);
        } else {
            $results = [];
        }
    }
} else {
    // Consulta SQL para listar todos los videos al cargar la página
    $sql = "SELECT * FROM videos ORDER BY $order_by $order_dir";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $results = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $results = [];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="../css/modificar_video.css">
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
    <div id="anadirformulario" class="forms">
        <div class="login-form2" id="loginForm2">
            <h2>MODIFICAR VIDEO</h2>
            <div class="titulos">
                <p class="tit">Filtrar por:</p>
                <p class="tit">Valor para filtrar:</p><br><br><br>
            </div>
            <div class="inputs">
                <form action="" method="POST">
                    <select id="columna" name="columna" required>
                        <option value="id_video">ID Video</option>
                        <option value="titulo">Título</option>
                        <option value="genero">Género</option>
                        <option value="fecha_subida">Fecha de Subida</option>
                    </select><br>
                    <input type="text" id="valor" name="valor" required><br>
                    <button class="btn-2" type="submit" name="buscar">Buscar</button>
                </form>
            </div>
        </div>
    </div>

<?php
if (!empty($results)) {
    echo "<div class='tabla'>
            <table border='1'>
                <tr>
                    <th>ID Video</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Tipo</th>
                    <th>Género</th>
                    <th>Fecha de Subida</th>
                    <th>Video</th>
                    <th>Img Portada</th>
                    <th>Img Publicidad</th>
                    <th>Nombre Publicidad</th>
                    <th>Acciones</th>
                </tr>";
    foreach ($results as $row) {
        echo "<tr>
                <td>{$row['id_video']}</td>
                <td>{$row['titulo']}</td>
                <td class='descripcion'>{$row['descripcion']}</td>
                <td>{$row['tipo']}</td>
                <td>{$row['genero']}</td>
                <td>{$row['fecha_subida']}</td>
                <td>{$row['video']}</td>
                <td>{$row['img_portada']}</td>
                <td>{$row['img_publi']}</td>
                <td>{$row['nom_publi']}</td>
                <td>
                    <form action='modificar2.php' method='POST'>
                        <input type='hidden' name='id_video' value='{$row['id_video']}'>
                        <input type='hidden' name='titulo' value='{$row['titulo']}'>
                        <input type='hidden' name='descripcion' value='{$row['descripcion']}'>
                        <input type='hidden' name='tipo' value='{$row['tipo']}'>
                        <input type='hidden' name='genero' value='{$row['genero']}'>
                        <input type='hidden' name='fecha_subida' value='{$row['fecha_subida']}'>
                        <input type='hidden' name='video' value='{$row['video']}'>
                        <input type='hidden' name='img_portada' value='{$row['img_portada']}'>
                        <input type='hidden' name='img_publi' value='{$row['img_publi']}'>
                        <input type='hidden' name='nom_publi' value='{$row['nom_publi']}'>
                        <input type='image' class='papelera' src='../img/editar.png' alt='Modificar'>
                    </form>
                </td>
            </tr>";
    }
    echo "</table>
        </div>";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
    echo "<div>No se encontraron resultados.</div>";
}
?>
    <script src="../js/dashboard.js"></script>

</body>
</html>
<?php
$conn->close();
?>
