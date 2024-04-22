<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/mensajes.css">
    <title>Borrar película</title>
</head>
<body>
<div id="titulo">
       <a href="../index.php" class="nada" > <img src="../img/logoinmo.png" id="logo"></a>
    </div> 
    <div id="php">
    <?php
        session_start();
        var_dump($_POST); // Para ver los datos recibidos del formulario en la consola del navegador
        
        // Verificar si se recibió el ID de la película
        if(isset($_POST['id'])) {
            $id = $_POST['id'];
            
            // Conexión a la base de datos
            $conexion = mysqli_connect("localhost", "root", "rootroot") or die ("No se puede conectar con el servidor");
            mysqli_select_db($conexion, "powerstream") or die ("No se puede conectar a la base de datos");

            // Consulta para verificar si la película está en la lista
            $query_inicial = "SELECT * FROM lista WHERE ID_video = '$id'";
            $resultado = mysqli_query($conexion, $query_inicial);
            $coincidencias = mysqli_num_rows($resultado);
            
            if ($coincidencias == 0) {
                echo "Esa película no se encuentra en tu lista";
                exit();
            }

            // Si la película está en la lista, procede con la eliminación
            $query = "DELETE FROM lista where ID_video = $id";
            if (mysqli_query($conexion, $query)) {
                // Si la eliminación es exitosa, devolver "success" como respuesta
                echo "success";
            } else {
                // Si hay un error al eliminar, devolver "error" como respuesta
                echo "error";
            }

            mysqli_close($conexion);
        } else {
            // Si no se recibió el ID de la película, mostrar un mensaje de error
            echo "ID de película no recibido";
        }
    ?>

    </div>
</body>
</html>
