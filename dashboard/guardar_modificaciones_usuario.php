<?php
session_start();
$id_usuario = $_SESSION['userid'];
$plan = $_SESSION['plan'];
if ($plan == 'admin')
{
    
}
else
{
    header("Location: ../index.php");
}

$servername = "localhost";
$username = "root";
$password = "rootroot";
$dbname = "powerstream";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$id_usuario = $_POST['id_usuario'];
$email = $_POST['email'];
$password = $_POST['password'];
$plan = $_POST['plan'];

// Si la contraseña no está vacía, actualizarla también
if (!empty($password)) {
    $sql = "UPDATE usuarios SET email=?, password=?, plan=? WHERE id_usuario=?";
    $stmt = $conn->prepare($sql);
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $stmt->bind_param("sssi", $email, $hashed_password, $plan, $id_usuario);
} else {
    $sql = "UPDATE usuarios SET email=?, plan=? WHERE id_usuario=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $email, $plan, $id_usuario);
}

if ($stmt->execute() === TRUE) {
    echo "<script>
            alert('Modificaciones guardadas correctamente.');
            window.location.href = 'formmodificausuario.php';
          </script>";
} else {
    echo "Error al actualizar los datos: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
