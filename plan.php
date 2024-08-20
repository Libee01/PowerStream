<?php
// Recibir correo y contraseña del formulario anterior
$email = isset($_POST['email']) ? $_POST['email'] : null;
$password = isset($_POST['password']) ? $_POST['password'] : null;

// Verificar si email y password han sido enviados
if (!$email || !$password) {
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planes de precios</title>
    <link rel="stylesheet" href="css/plan.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
    <header>
        <h1>Planes de precios</h1>
    </header>

    <section class="planes">
        <div class="plan-wrapper">
            <div class="plan">
                <h2>Básico</h2>
                <p class="precio">$4.99/mes</p>
                <ul class="caracteristicas">
                    <li>Acceso a todas las categorías</li>
                    <li>Acceso a 4 títulos por género</li>
                    <li>Películas y series hasta calidad HD 720p</li>
                    <li>Con anuncios</li>
                </ul>
                <form action="redirigir.php" method="POST">
                    <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">
                    <input type="hidden" name="password" value="<?php echo htmlspecialchars($password); ?>">
                    <button type="submit" name="plan" value="basico" class="boton">Subscribirse a plan básico</button>
                </form>
            </div>
        </div>

        <div class="plan-wrapper">
            <div class="plan">
                <h2 class="gold">Gold</h2>
                <p class="precio">$14.99/mes</p>
                <ul class="caracteristicas">
                    <li>Acceso a todas las categorías</li>
                    <li>Acceso a 6 títulos por género</li>
                    <li>Películas y series hasta calidad FULL HD 1080p</li>
                    <li>Sin anuncios</li>
                </ul>
                <form action="redirigir.php" method="POST">
                    <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">
                    <input type="hidden" name="password" value="<?php echo htmlspecialchars($password); ?>">
                    <button type="submit" name="plan" value="gold" class="boton">Subscribirse a plan gold</button>
                </form>
            </div>
        </div>

        <div class="plan-wrapper">
            <div class="plan">
                <h2 class="premium">Premium</h2>
                <p class="precio">$19.99/mes</p>
                <ul class="caracteristicas">
                    <li>Acceso a todas las categorías</li>
                    <li>Acceso nuestro catálogo completo</li>
                    <li>Películas y series hasta calidad 4K</li>
                    <li>Sin anuncios</li>
                </ul>
                <form action="redirigir.php" method="POST">
                    <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">
                    <input type="hidden" name="password" value="<?php echo htmlspecialchars($password); ?>">
                    <button type="submit" name="plan" value="premium" class="boton">Subscribirse a plan premium</button>
                </form>
            </div>
        </div>
    </section>

    <section class="comparacion">
        <h2>Comparar planes</h2>
        <div class="contenedor-tabla">
            <table>
                <tr>
                    <th></th>
                    <th>Básico</th>
                    <th class="gold">Gold</th>
                    <th class="premium">Premium</th>
                </tr>
                <tr>
                    <td>Películas</td>
                    <td class="basic">✓</td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Series</td>
                    <td class="basic">✓</td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Acceso a todas las categorías</td>
                    <td class="basic">✓</td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Calidad HD</td>
                    <td class="basic">✓</td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Calidad FULL HD</td>
                    <td></td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Calidad 4K</td>
                    <td></td>
                    <td></td>
                    <td class="premium">✓</td>
                </tr>
                <tr>
                    <td>Sin anuncios</td>
                    <td></td>
                    <td class="gold">✓</td>
                    <td class="premium">✓</td>
                </tr>
            </table>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 PowerStream</p>
    </footer>
    
</body>
</html>
