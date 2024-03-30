<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/mensajes.css">
    <script src="../js/registro.js"></script>
    <title>Registro usuario</title>
</head>
<body>
<div id="titulo">
       <a href="../index.php" class="nada" > <img src="../img/logoinmo.png" id="logo"></a>
    </div> 
    <div id="php">
    <?php
        $email = $_REQUEST['email'];
        $pass = $_REQUEST['password'];
        $password_hash = password_hash($pass, PASSWORD_BCRYPT);
        $plan = $_REQUEST['plan'];

        // Generar la fecha actual y la fecha actual más 30 días
        $fecha_actual = date('Y-m-d');
        $fecha_renovacion = date('Y-m-d', strtotime('+30 days'));

        $conexion = mysqli_connect("localhost", "root", "rootroot")
        or die ("No se puede conectar con el servidor");

        $email = mysqli_real_escape_string($conexion, $email);
        $pass = mysqli_real_escape_string($conexion, $pass);

        mysqli_select_db ($conexion, "powerstream") or die ("No se puede conectar a la base de datos");
        $query_inicial = "select * from usuarios where email = '$email'";
        $resultado = mysqli_query($conexion, $query_inicial);
        $coincidencias = mysqli_num_rows($resultado);
        if ($coincidencias > 0) {
            header("Location: ../index.php?error=correo_ya_registrado!");
            exit();
        }
        if ($coincidencias == 0) {
            $query = "INSERT INTO usuarios (email, password, plan, fecha_suscripcion, fecha_renovacion) VALUES ('$email', '$password_hash', '$plan', '$fecha_actual', '$fecha_renovacion')";

            if(mysqli_query ($conexion,$query))
            {
                echo "<div class='borrado'>Usuario añadido correctamente</div>";
                echo "<div class='mensaje'><img src='../img/arriba1.png' class='ok'></div>";
            }
            else
            {
            echo "Error al registrar al usuario: " . mysqli_error($conexion);
            echo "<div class='mensaje'><img src='../../img/abajo.png' class='ok'></di>";
            }
        }
                
        mysqli_close($conexion);
        ?>
    </div>
</body>