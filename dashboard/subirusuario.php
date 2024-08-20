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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_BCRYPT);
    $plan = $conn->real_escape_string($_POST['plan']);
    $pagado = $conn->real_escape_string($_POST['pagado']);
    
    // Generar fechas automáticamente
    $fecha_suscripcion = date('Y-m-d');
    $fecha_renovacion = date('Y-m-d', strtotime('+30 days'));

    $sql = "INSERT INTO usuarios (email, password, plan, fecha_suscripcion, fecha_renovacion, pagado)
            VALUES ('$email', '$password', '$plan', '$fecha_suscripcion', '$fecha_renovacion', '$pagado')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
        alert('USUARIO CREADO CORRECTAMENTE');
        window.location.href = 'formanadirusuario.html';
      </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
