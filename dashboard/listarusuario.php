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

// Verificar si se ha enviado el formulario de filtrado u ordenación
if ($_SERVER["REQUEST_METHOD"] == "POST" && (isset($_POST['ordenar']) || isset($_POST['filtrar']))) {
    $whereClause = "";
    $orderClause = "";

    if (isset($_POST['filtrar'])) {
        $columna = $conn->real_escape_string($_POST['columna']);
        $valor = $conn->real_escape_string($_POST['valor']);
        if (strtolower($valor) !== 'all') {
            $whereClause = "WHERE $columna like '%$valor%'";
        }
    }

    if (isset($_POST['ordenar'])) {
        $orden = $conn->real_escape_string($_POST['orden']);
        $orderClause = "ORDER BY $orden";
    }

    // Crear la consulta SQL con la cláusula WHERE y ORDER BY
    $sql = "SELECT * FROM usuarios $whereClause $orderClause";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $results = $result->fetch_all(MYSQLI_ASSOC);
    } else {
        $results = [];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream - Usuarios</title>
    <link rel="stylesheet" href="../css/dashboardlistar.css">
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
            <h2>INVENTARIO DE USUARIOS</h2>
            <div class="titulos">
                <p class="tit">Filtrar por:</p>
                <p class="tit">Valor para filtrar:</p>
                <p class="tit">Ordenar por:</p><br><br><br>
            </div>
            <div class="inputs">
                <form action="" method="POST">
                    <select id="columna" name="columna">
                        <option value="id_usuario">ID Usuario</option>
                        <option value="email">Email</option>
                    </select><br>
                    <input type="text" id="valor" name="valor" placeholder="Escribe 'all' para mostrar todo">
                    <button class="btn-3" type="submit" name="filtrar">Filtrar</button>
                </form>
                <form action="" method="POST">
                    <select id="orden" name="orden">
                        <option value="id_usuario ASC">ID Usuario ascendente</option>
                        <option value="id_usuario DESC">ID Usuario descendente</option>
                        <option value="fecha_suscripcion ASC">Fecha de Suscripción ascendente</option>
                        <option value="fecha_suscripcion DESC">Fecha de Suscripción descendente</option>
                        <option value="email ASC">Email ascendente</option>
                        <option value="email DESC">Email descendente</option>
                        <option value="plan ASC">Plan ascendente</option>
                        <option value="plan DESC">Plan descendente</option>
                    </select>
                    <button class="btn-3" type="submit" name="ordenar">Ordenar</button>
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
                    </tr>";
        foreach ($results as $row) {
            echo "<tr>
                    <td>{$row['id_usuario']}</td>
                    <td>{$row['email']}</td>
                    <td>{$row['plan']}</td>
                    <td>{$row['fecha_suscripcion']}</td>
                    <td>{$row['fecha_renovacion']}</td>
                    <td>" . ($row['pagado'] ? 'Sí' : 'No') . "</td>
                </tr>";
        }
        echo "  </table>
              </div>";
    } elseif ($_SERVER["REQUEST_METHOD"] == "POST" && (isset($_POST['ordenar']) || isset($_POST['filtrar']))) {
        
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
