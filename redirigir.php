<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];
    $plan = $_POST['plan'];

    // Guardar los datos en la sesión
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    $_SESSION['plan'] = $plan;

    // Redirigir a pago.php
    header('Location: pago.php');
    exit();
} else {
    header('Location: index.php');
    exit();
}
?>

