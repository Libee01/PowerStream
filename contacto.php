<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="css/contacto.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a href="index.php" class="logo">PowerStream</a>
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="img2/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="index.php">Películas</a></li>
                    <li><a href="default_series.php">Series</a></li>
                    <li><a href="registrarse.html">Mi lista</a></li>
                </ul>
            </nav>
            <a href="inicio_sesion.html" class="btn-1">Login</a>
            <a href="registrarse.html" class="btn-1">Registro</a>
        </div>
    </header>
    <div class="contact-container">
        <h2>Contacto</h2>
        <form id="contactForm">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
                <span class="error" id="nameError"></span>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <span class="error" id="emailError"></span>
            </div>
            <div class="form-group">
                <label for="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>
                <span class="error" id="messageError"></span>
            </div>
            <div class="form-group">
                <button type="submit">Enviar Mensaje</button>
            </div>
        </form>
    </div>
    <br><br>
    <footer class="footer container">

        <h3>PowerStream</h3>
        
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <li><a href="sobre_nosotros.php">Nosotros</a></li>
            <li><a href="contacto.php">Contacto</a></li>
            <li><a href="politica_privacidad.php">Politica de privacidad</a></li>
            <li><a href="FAQ.php">Preguntas frecuentes</a></li>
        </ul>
        <p id="copyright">&copy; 2024 PowerStream</p>           
    </footer>

<script src="js/contacto.js"></script>
</body>
</html>
