<?php
$servername = "localhost";
$username = "root";
$password = "rootroot";
$database = "powerstream";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Chequea la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los detalles de las películas para la parte que cambia
$sql = "SELECT * FROM videos WHERE  tipo = 'serie' ORDER BY rand() LIMIT 5";
$result = $conn->query($sql);

// Añadir las series de la base de datos

$sqlaccion = "SELECT * FROM videos WHERE genero = 'accion' and tipo = 'serie'";
$result_accion = $conn->query($sqlaccion);

$sqlterror = "SELECT * FROM videos WHERE genero = 'terror' and tipo = 'serie'";
$result_terror = $conn->query($sqlterror);

$sqlromanticas = "SELECT * FROM videos WHERE genero = 'romantica' and tipo = 'serie'";
$result_romanticas = $conn->query($sqlromanticas);

$sqlcomedia = "SELECT * FROM videos WHERE genero = 'comedia' and tipo = 'serie'";
$result_comedia = $conn->query($sqlcomedia);




// Cierra la conexión
$conn->close();
?>