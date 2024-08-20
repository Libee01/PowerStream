<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $conexion = mysqli_connect("localhost", "root", "rootroot")
    or die("No se puede conectar con el servidor");

    mysqli_select_db($conexion, "powerstream") or die("No se puede conectar a la base de datos");

    $query = "SELECT id_usuario, email, password, plan FROM usuarios WHERE email = '$email'";
    $consulta = mysqli_query($conexion, $query) or die("Fallo de la consulta");

    $nfilas = mysqli_num_rows($consulta);
    if ($nfilas == 1) {
        $row = mysqli_fetch_assoc($consulta);
        if (password_verify($pass, $row['password'])) {
            // Iniciar la sesión
            $_SESSION['plan'] = $row['plan'];
            $_SESSION['loggedin'] = true;
            $_SESSION['email'] = $row['email'];
            $_SESSION['userid'] = $row['id_usuario'];
            $_SESSION['start'] = time();
            $_SESSION['expire'] = $_SESSION['start'] + (1 * 60);

            // Redirección basada en el tipo de usuario
            if ($_SESSION['plan'] == 'basico') {
                header("Location: basico.php");
            } elseif ($_SESSION['plan'] == 'gold') {
                header("Location: gold.php");
            } elseif ($_SESSION['plan'] == 'premium') {
                header("Location: premium.php");
            } elseif ($_SESSION['plan'] == 'admin') {
                header("Location: dashboard/dashboard.php");
            }
            exit();
        } else {
            // Las credenciales son incorrectas
            header("Location: ../index.php?error=credenciales_invalidas");
            exit();
        }
    } else {
        // No se encontró el usuario
        header("Location: ../index.php?error=credenciales_invalidas");
        exit();
    }
} else {
    // Si alguien intenta acceder a este script directamente, redirigirlo al formulario de inicio de sesión
    header("Location: index.php");
    exit();
}
?>

