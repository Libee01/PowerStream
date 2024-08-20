<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Preguntas Frecuentes</title>
    <link rel="stylesheet" href="css/FAQ.css"/>
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
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
    <div class="wrapper">
      <h1>Preguntas Frecuentes</h1>

      <div class="faq">
        <button class="accordion">
          ¿Qué es PowerStream?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            PowerStream es una plataforma de streaming donde puedes ver algunos de los títulos
            más novedosos incluyendo películas y series.
          </p>
        </div>
      </div>

      <div class="faq">
        <button class="accordion">
          ¿Cómo puedo suscribirme?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            Para suscribirte, simplemente visita nuestra página de registro, 
            elige el plan que más te convenga, y sigue las instrucciones para crear 
            una cuenta y realizar el pago.
          </p>
        </div>
      </div>

      <div class="faq">
        <button class="accordion">
          ¿Qué métodos de pago aceptan?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            Aceptamos varias formas de pago, incluyendo tarjetas de crédito, débito y PayPal.
          </p>
        </div>
      </div>

      <div class="faq">
        <button class="accordion">
          ¿Puedo cancelar mi suscripción en cualquier momento?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            Sí, puedes cancelar tu suscripción en cualquier momento desde tu cuenta. 
            No se te cobrará nuevamente después de cancelar.
          </p>
        </div>
      </div>

      <div class="faq">
        <button class="accordion">
          ¿Puedo ver contenido sin conexión?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            No, nuestra plataforma sólo permite la visualización en directo, no permite la descarga de los títulos disponibles.
          </p>
        </div>
      </div>

      <div class="faq">
        <button class="accordion">
          ¿Necesito una suscripción para ver el contenido?
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="pannel">
          <p>
            Puedes ver los títulos disponibles de nuestra plataforma de forma gratuita, pero para poder 
            reproducirlos necesitas una suscripción en nuestra web.
          </p>
        </div>
      </div>
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
    <script src="js/FAQ.js"></script>
  </body>
</html>
