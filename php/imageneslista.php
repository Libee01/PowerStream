<?php
$servername = "localhost";
$username = "root";
$password = "rootroot";
$database = "powerstream";

// Extraer el ID de usuario de la sesión
$userid = $_SESSION['userid'];

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Chequea la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los detalles de las películas para la parte que cambia
$sql = "SELECT * FROM lista ORDER BY ID_video DESC LIMIT 5";
$result = $conn->query($sql);

// Añadir las peliculas de la base de datos

$peliculas = "SELECT * FROM lista WHERE ID_usuario = $userid and tipo = 'pelicula'";
$result_pelicula = $conn->query($peliculas);

$series = "SELECT * FROM lista WHERE ID_usuario = $userid and tipo = 'serie'";
$result_serie = $conn->query($series);

// Cierra la conexión
$conn->close();
?>
