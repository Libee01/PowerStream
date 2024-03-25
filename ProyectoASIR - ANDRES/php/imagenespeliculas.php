<?php
$servername = "localhost"; // Cambia esto por tu servidor MySQL
$username = "root"; // Cambia esto por tu nombre de usuario de MySQL
$password = "rootroot"; // Cambia esto por tu contraseña de MySQL
$database = "powerstream"; // Cambia esto por el nombre de tu base de datos

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Chequea la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los detalles de las películas para la parte que cambia
$sql = "SELECT * FROM prueba ORDER BY id DESC LIMIT 5";
$result = $conn->query($sql);

// Añadir las peliculas de la base de datos

$sqlaccion = "SELECT * FROM prueba WHERE categoria = 'accion'";
$result_accion = $conn->query($sqlaccion);

$sqldrama = "SELECT * FROM prueba WHERE categoria = 'drama'";
$result_drama = $conn->query($sqldrama);

$sqlterror = "SELECT * FROM prueba WHERE categoria = 'terror'";
$result_terror = $conn->query($sqlterror);

$sqlromanticas = "SELECT * FROM prueba WHERE categoria = 'romanticas'";
$result_romanticas = $conn->query($sqlromanticas);

$sqlcomedia = "SELECT * FROM prueba WHERE categoria = 'comedia'";
$result_comedia = $conn->query($sqlcomedia);

$sqlaventuras = "SELECT * FROM prueba WHERE categoria = 'aventuras'";
$result_aventuras = $conn->query($sqlaventuras);



// Cierra la conexión
$conn->close();
?>
