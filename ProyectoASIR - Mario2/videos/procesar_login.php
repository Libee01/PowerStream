<?php
session_start(); // Iniciar la sesión

// Verificar si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $email = $_POST['correo'];
    $password = $_POST['password'];
    $conexion = mysqli_connect("localhost", "root", "rootroot")
    or die ("No se puede conectar con el servidor");

    mysqli_select_db ($conexion, "powerstream") or die ("No se puede conectar a la base de datos");
    $query="select * from p_usuario where correo = '$email'";
    $consulta = mysqli_query($conexion,$query) or die ("Fallo de la consulta");
    $nfilas = mysqli_num_rows($consulta);
        if ($nfilas == 1) {
            $row = mysqli_fetch_assoc($consulta);
            if ($password == $row['password']) {
                // Iniciar la sesión
                session_start();
                $tipo = $row['tipo_usuario'];
                $_SESSION['loggedin'] = true;
                $_SESSION['name'] = $row['nombres'];
                $_SESSION['userid'] = $row['usuario_id'];
                $_SESSION['start'] = time();
                $_SESSION['expire'] = $_SESSION['start'] + (1 * 60);
                
                // Redirección basada en el tipo de usuario
                header("Location: pelisiniciado.php");
            }
            else {
                header("Location: index.php?error=credenciales_invalidas");
            }
            exit();
        } else {
            // Las credenciales son incorrectas, redirigir al formulario de inicio de sesión con un mensaje de error
            header("Location: index.php?error=credenciales_invalidas");
            exit();
        }
        } else {
        // Si alguien intenta acceder a este script directamente, redirigirlo al formulario de inicio de sesión
        header("Location: index.php");
        exit();
        }
    ?>
