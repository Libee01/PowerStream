<?php
session_start();
if ($plan == 'admin')
{
    
}
else
{
    header("Location: ../index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/mensajes.css">
    <title>Guardar pelicula</title>
</head>
<body>
<div id="titulo">
       <a href="../index.php" class="nada" > <img src="../img/logoinmo.png" id="logo"></a>
    </div> 
    <div id="php">
    <?php
        session_start();
        var_dump($_POST); // Para ver los datos recibidos del formulario en la consola del navegador
        
        $id = $_POST['id_video'];
        $userid = $_SESSION['userid'];
        $titulo = $_POST['titulo'];
        $tipo = $_POST['tipo'];
        $portada = $_POST['img_portada'];      

        $conexion = mysqli_connect("localhost", "root", "rootroot") or die ("No se puede conectar con el servidor");
        mysqli_select_db($conexion, "powerstream") or die ("No se puede conectar a la base de datos");

        $query_inicial = "SELECT * FROM lista WHERE id_video = '$id' and id_usuario = '$userid'";
        $resultado = mysqli_query($conexion, $query_inicial);
        $coincidencias = mysqli_num_rows($resultado);
        if ($coincidencias > 0) {
            echo "Esa película ya se encuentra en tu lista";
            exit();
        }
        if ($coincidencias == 0) {
            $query = "INSERT INTO lista (id_video, id_usuario, titulo, tipo, img_portada) VALUES ('$id', '$userid', '$titulo', '$tipo', '$portada')";

            if (mysqli_query($conexion, $query)) {
                echo "Película añadida a tu lista";
            } else {
                echo "Error al registrar al añadir pelicula: " . mysqli_error($conexion);
            }
        }

        mysqli_close($conexion);
    ?>

    </div>
</body>