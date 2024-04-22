<?php
echo php_ini_loaded_file();
// Obtener datos del formulario
$titulo = $_REQUEST['titulo'];
$videoNombre = $_FILES['video']['name'];
$portadaNombre = $_FILES['portada']['name'];
$descripcion = $_REQUEST['descripcion'];
$tipo = $_REQUEST['tipo'];
$plan = $_REQUEST['plan'];
$genero = $_REQUEST['genero'];
$fecha_subida = date("Y-m-d");
$tamano = $_FILES['video']['size'];

echo $titulo;
echo "<br><br>";
echo $videoNombre;
echo "<br><br>";
echo $tamano;
echo "<br><br>";
echo $portadaNombre;
echo "<br><br>";
echo $descripcion;
echo "<br><br>";
echo $tipo;
echo "<br><br>";
echo $plan;
echo "<br><br>";
echo $genero;
echo "<br><br>";
echo $fecha_subida;
?>
