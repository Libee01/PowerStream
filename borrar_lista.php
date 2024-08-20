<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

// Verificar si se recibieron los IDs de la película y del usuario
if (isset($_POST['id_video']) && isset($_POST['id_usuario'])) {
    $id_video = $_POST['id_video'];
    $id_usuario = $_POST['id_usuario'];

    // Conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "rootroot", "powerstream");
    if (!$conexion) {
        die("Error de conexión: " . mysqli_connect_error());
    }

    // Consulta para verificar si la película está en la lista
    $query_inicial = "SELECT * FROM lista WHERE id_video = '$id_video' AND id_usuario = '$id_usuario'";
    $resultado = mysqli_query($conexion, $query_inicial);
    if (!$resultado) {
        die("Error en la consulta: " . mysqli_error($conexion));
    }
    $coincidencias = mysqli_num_rows($resultado);

    if ($coincidencias == 0) {
        echo "Esa película no se encuentra en tu lista";
    } else {
        // Si la película está en la lista, procede con la eliminación
        $query = "DELETE FROM lista WHERE id_video = '$id_video' AND id_usuario = '$id_usuario'";
        if (mysqli_query($conexion, $query)) {
            echo "Película eliminada correctamente";
        } else {
            echo "Error al eliminar la película: " . mysqli_error($conexion);
        }
    }

    mysqli_close($conexion);
} else {
    echo "ID de película o usuario no recibidos";
}
?>
