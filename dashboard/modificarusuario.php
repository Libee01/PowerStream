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

// Consultar todos los usuarios al cargar la página
$sql = "SELECT * FROM usuarios";
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
    // Verificar si se ha recibido un ID de usuario para modificar
    if(isset($_POST['id_usuario'])) {
        // Obtener el ID de usuario enviado desde el formulario
        $id_usuario = $_POST['id_usuario'];

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

        // Consulta SQL para obtener los datos del usuario a modificar
        $sql = "SELECT * FROM usuarios WHERE id_usuario = '$id_usuario'";
        $result = $conn->query($sql);

        // Verificar si se encontraron resultados
        if ($result->num_rows > 0) {
            // Mostrar el formulario para modificar los datos del usuario
            $row = $result->fetch_assoc();
            ?>
            <div id="anadirformulario" class="forms">
                <div class="login-form2" id="loginForm2">
                    <h2>Modificar Usuario</h2>
                    
                    <!-- Títulos -->
                    <div class="titulos">
                        <p class="tit">Correo electrónico:</p>
                        <p class="tit">Contraseña:</p>
                        <p class="tit">Plan:</p>
                        <p class="tit">Fecha de Suscripción:</p>
                        <p class="tit">Fecha de Renovación:</p>
                        <p class="tit">Pagado:</p>
                    </div>
                    
                    <!-- Campos de entrada -->
                    <div class="inputs">
                        <form action="guardar_modificaciones_usuario.php" method="POST">
                            <input type="hidden" name="id_usuario" value="<?php echo $row['id_usuario']; ?>">
                            
                            <!-- Campo de correo electrónico -->
                            <input type="text" id="email" name="email" value="<?php echo $row['email']; ?>"><br>
                            
                            <!-- Campo de contraseña -->
                            <input type="password" id="password" name="password" placeholder="Nueva Contraseña"><br>
                            
                            <!-- Campo de plan -->
                            <select id="plan" name="plan">
                                <option value="basico" <?php if ($row['plan'] === 'basico') echo 'selected'; ?>>Básico</option>
                                <option value="gold" <?php if ($row['plan'] === 'gold') echo 'selected'; ?>>Gold</option>
                                <option value="premium" <?php if ($row['plan'] === 'premium') echo 'selected'; ?>>Premium</option>
                                <option value="admin" <?php if ($row['plan'] === 'admin') echo 'selected'; ?>>Admin</option>
                            </select><br>
                            
                            <!-- Campo de fecha de suscripción (solo lectura) -->
                            <input type="text" id="fecha_suscripcion" name="fecha_suscripcion" value="<?php echo $row['fecha_suscripcion']; ?>" readonly><br>
                            
                            <!-- Campo de fecha de renovación (solo lectura) -->
                            <input type="text" id="fecha_renovacion" name="fecha_renovacion" value="<?php echo $row['fecha_renovacion']; ?>" readonly><br>
                            
                            <!-- Campo de pagado (solo lectura) -->
                            <input type="text" id="pagado" name="pagado" value="<?php echo $row['pagado']; ?>" readonly><br>
                            
                            <input class="btn-7" type="submit" value="Guardar cambios">

                        </form>
                    </div>
                </div>
            </div>
            <?php
        } else {
            // Si no se encontró el usuario, mostrar un mensaje de error
            echo "<div class='error'>No se encontró el usuario a modificar.</div>";
        }

        // Cerrar la conexión a la base de datos
        $conn->close();
    } else {
        // Si no se recibió un ID de usuario, mostrar un mensaje de error
        echo "<div class='error'>No se recibió el ID de usuario para modificar.</div>";
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
