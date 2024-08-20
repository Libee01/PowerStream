<?php
session_start();

// Verificar si los datos de la sesión están disponibles
if (!isset($_SESSION['email']) || !isset($_SESSION['password']) || !isset($_SESSION['plan'])) {
    echo "No se han encontrado datos de suscripción.";
    exit();
}

$email = $_SESSION['email'];
$password = $_SESSION['password'];
$plan = $_SESSION['plan'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="css/pago.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon"> <!-- Vincula el icono favicon -->
</head>
<body>

    <h1>Proceso de Pago</h1>
    <div id="datos">
        <p>Correo electrónico: <?php echo htmlspecialchars($email); ?></p>
        
        <p>Plan seleccionado: <?php echo htmlspecialchars($plan); ?></p>
    </div>

    <div style="text-align: center;">
        <div id="paypal-button-container"></div>
    </div>
   
    <script src="https://www.paypal.com/sdk/js?client-id=AaQ1Gok1zk8nA7RpfbWACB1P4OxKmjjdSichNmXen51OylXtLqBssohUnMtef6R6D0kAxi_Z14Bd4wmh&currency=EUR" data-sdk-integration-source="button-factory"></script>
    <script>
        function initPayPalButton() {
            paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'pay',
                },
                createOrder: function(data, actions) {
                    // Obtener el valor del plan seleccionado
                    var plan = '<?php echo $plan; ?>';

                    // Definir el importe según el plan seleccionado
                    var amount;
                    switch (plan) {
                        case 'basico':
                            amount = 4.99;
                            break;
                        case 'gold':
                            amount = 14.99;
                            break;
                        case 'premium':
                            amount = 19.99;
                            break;
                        default:
                            amount = 0; // Precio por defecto si el plan no está reconocido
                            break;
                    }

                    // Crear la orden de pago con el importe correspondiente
                    return actions.order.create({
                        purchase_units: [{"description":"PAGO" + plan.toUpperCase(), "amount":{"currency_code":"EUR", "value": amount}}]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(orderData) {
                        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                        // Llamada AJAX para actualizar la base de datos
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "registro.php", true);
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                // Redirigir a la página de agradecimiento después del pago exitoso
                                window.location.href = 'inicio_sesion.html';
                            }
                        };
                        xhr.send("email=<?php echo urlencode($email); ?>&password=<?php echo urlencode($password); ?>&plan=<?php echo urlencode($plan); ?>");
                    });
                },
                onError: function(err) {
                    console.log(err);
                }
            }).render('#paypal-button-container');
        }
        initPayPalButton();
    </script>
</body>
</html>
