<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verificar que los datos se pasaron correctamente
    if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['plan'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $plan = $_POST['plan'];

        // Generar la fecha actual y la fecha de renovación (30 días después)
        $fecha_actual = date('Y-m-d');
        $fecha_renovacion = date('Y-m-d', strtotime('+30 days'));
        $pago = 1;
        // Hash de la contraseña
        $password_hash = password_hash($password, PASSWORD_BCRYPT);

        // Conexión a la base de datos
        $servername = "localhost";
        $username = "root";
        $password_db = "rootroot";
        $dbname = "powerstream";

        $conn = new mysqli($servername, $username, $password_db, $dbname);

        // Verificar conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Insertar datos en la base de datos
        $query = "INSERT INTO usuarios (email, password, plan, fecha_suscripcion, fecha_renovacion,pagado) VALUES ('$email','$password_hash','$plan','$fecha_actual','$fecha_renovacion','$pago')";
        $stmt = $conn->prepare($query);
        
        $stmt->bind_param("sssssi", $email, $password_hash, $plan, $fecha_actual, $fecha_renovacion, $pago_confirmado);

        if ($stmt->execute()) {
            echo "Usuario registrado y pago confirmado.";
        } else {
            echo "Error al registrar al usuario: " . $stmt->error;
        }

        // Cerrar conexión
        $stmt->close();
        $conn->close();
    } else {
        echo "Datos incompletos.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
