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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['buscar'])) {
        $columna = $conn->real_escape_string($_POST['columna']);
        $valor = $conn->real_escape_string($_POST['valor']);

        // Crear la consulta SQL
        if ($valor === 'all') {
            // Consulta SQL para listar todos los videos
            $sql = "SELECT * FROM usuarios ";
        } else {
            // Crear la consulta SQL con filtro
            $sql = "SELECT * FROM usuarios where $columna like '%$valor%'";
        }
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $results = $result->fetch_all(MYSQLI_ASSOC);
        } else {
            $results = [];
        }
    }

    if (isset($_POST['borrar'])) {
        $id_usuario = $conn->real_escape_string($_POST['id_usuario']);

        // Crear la consulta SQL para borrar
        $sql = "DELETE FROM usuarios WHERE id_usuario = '$id_usuario'";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Usuario borrado exitosamente');</script>";
        } else {
            echo "Error borrando el usuario: " . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream - Usuarios</title>
    <link rel="stylesheet" href="../css/modificar_usuario.css">
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
            <h2>GESTIONAR USUARIOS</h2>
            <div class="titulos">
                <p class="tit">Filtrar por:</p>
                <p class="tit">Valor para filtrar:</p><br><br><br>
            </div>
            <div class="inputs">
            <form action="" method="POST">
                <select id="columna" name="columna" required>
                    <option value="id_usuario">ID Usuario</option>
                    <option value="email">Email</option>
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
            <table>
                <tr>
                <th>ID Usuario</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Fecha de Suscripción</th>
                <th>Fecha de Renovación</th>
                <th>Pagado</th>
                <th>Acciones</th>
                </tr>";
    foreach ($results as $row) {
        echo "<tr>
                <td>{$row['id_usuario']}</td>
                <td>{$row['email']}</td>
                <td>{$row['plan']}</td>
                <td>{$row['fecha_suscripcion']}</td>
                <td>{$row['fecha_renovacion']}</td>
                <td>" . ($row['pagado'] ? 'Sí' : 'No') . "</td>
                <td>
                <form action='' method='POST' onsubmit='return confirm(\"¿Estás seguro de que deseas borrar este usuario?\");'>
                    <input type='hidden' name='id_usuario' value='{$row['id_usuario']}'>
                    <input type='image' class='papelera2'src='../img/papelera.png' alt='Borrar' name='borrar'>
                </form>
                </td>
            </tr>";
    }
    echo "  </table>
          </div>";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
    
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
