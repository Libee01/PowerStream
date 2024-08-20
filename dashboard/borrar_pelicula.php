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
    // Crear la consulta SQL
    if ($valor === 'all') {
        // Consulta SQL para listar todos los videos
        $sql = "SELECT * FROM videos ";
    } else {
        // Crear la consulta SQL con filtro
        $sql = "SELECT * FROM videos where $columna like '%$valor%'";
    }
    $result = $conn->query($sql);

    if (!$result) {
        echo "Error en la consulta: " . $conn->error;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['borrar'])) {
    $id_video = $conn->real_escape_string($_POST['id_video']);

    // Crear la consulta SQL para borrar
    $sql = "DELETE FROM videos WHERE id_video = '$id_video'";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Película borrada exitosamente');</script>";
    } else {
        echo "Error borrando la película: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar y Borrar Películas</title>
</head>
<body>

<form action="" method="POST">
    <label for="columna">Selecciona columna para filtrar:</label>
    <select id="columna" name="columna" required>
        <option value="id_video">ID Video</option>
        <option value="titulo">Título</option>
        <option value="genero">Género</option>
        <option value="fecha_subida">Fecha de Subida</option>
    </select><br>

    <label for="valor">Valor para filtrar:</label>
    <input type="text" id="valor" name="valor" required><br>
    
    <button type="submit" name="buscar">Buscar</button>
</form>

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
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['id_video']}</td>
                        <td>{$row['titulo']}</td>
                        <td>{$row['genero']}</td>
                        <td>{$row['fecha_subida']}</td>
                        <td>
                            <form action='' method='POST' onsubmit=\"return confirm('??? seguro de que deseas borrar la película con ID {$row['id_video']}?');\">
                                <input type='hidden' name='id_video' value='{$row['id_video']}'>
                                <input type='image' class='papelera' src='img/papelera.png' alt='Borrar' name='borrar'>
                            </form>
                        </td>
                    </tr>";
            }
            
    echo "</table>";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
    echo "No se encontraron resultados.";
}
?>

</body>
</html>

<?php
$conn->close();
?>
