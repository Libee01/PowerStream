<?php
    session_start();
    $id_usuario = $_SESSION['userid'];
    $plan = $_SESSION['plan'];
    $basico = 'basico.php';
    $gold = 'gold.php';
    $premium = 'premium.php';
    $series_basico = 'basicoserie.php';
    $series_gold = 'goldserie.php';
    $series_premium = 'premiumserie.php';
    if ($plan == 'basico')
    {
        $enlace = $basico;
        $enlace2 = $series_basico;
    }
    elseif ($plan == 'gold')
    {
        $enlace = $gold;
        $enlace2 = $series_gold;
    }
    elseif ($plan == 'premium')
    {
        $enlace = $premium;
        $enlace2 = $series_premium;
    }
    else
    {
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="css/premium.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a href="<?php echo $enlace; ?>" class="logo">PowerStream</a>
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="img2/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">            
                <ul>
                    <li><a href="<?php echo $enlace; ?>">Películas</a></li>
                    <li><a href="<?php echo $enlace2; ?>">Series</a></li>
                </ul>
            </nav>
            <a href="index.php"><img id="logout" src="img/logout.png"></a>
            <!-- Incluir el archivo PHP que realiza la consulta SQL -->
            <?php include 'php/imageneslista.php'; ?>
        </div>
    </header>
    <br><br><br>
    <section class="movies container">
        <h2>Películas</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-1">
            <?php 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_pelicula->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_pelicula->fetch_assoc()) { 
            ?>
                        <?php if($i == 0) { ?>
                        <div class="box-1 active">
                        <?php } else { ?>
                        <div class="box-1">
                        <?php } ?>
                            <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="QuitardeLista(<?php echo $row['id_video']; ?>, <?php echo $row['id_usuario']; ?>)">Quitar de la lista</div>

                                </div>    
                            </div>
                        </div>
            <?php 
                        $i++; 
                    }
            ?>
                    </div> <!-- Cierre de box-container -->
            <?php
                } else {
                    // Si no hay resultados, mostrar un mensaje alternativo
                    echo "No se encontraron resultados.";
                }
            ?>

        </div>

        <div class="load-more" id="load-more-1">Cargar más</div>
        <div class="load-less" id="load-less-1">Cargar menos</div>

    </section>
    <section class="movies container">
        <h2>Series</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-2">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
     
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_serie->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_serie->fetch_assoc()) { 
            ?>
                        <div class="box-2 <?php if($i == 0) echo 'active'; ?>">
                        <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="QuitardeLista(<?php echo $row['id_video']; ?>, <?php echo  $row['id_usuario']; ?>)">Quitar de la lista</div>
                                </div>
                        </div>
                        </div>
            <?php 
                        $i++; 
                    }
            ?>
                    </div> <!-- Cierre de box-container -->
            <?php
                } else {
                    // Si no hay resultados, mostrar un mensaje alternativo
                    echo "No se encontraron resultados.";
                }
            ?>

        </div>
        
        <div class="load-more" id="load-more-2">Cargar más</div>
        <div class="load-less" id="load-less-2">Cargar menos</div>

    </section>

    <footer class="footer container">

        <h3>PowerStream</h3>
        
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Politica de privacidad</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
        </ul>
        <p id="copyright">&copy; 2024 PowerStream</p>        
    </footer>

    <script src="js/lista.js"></script>
</body>
</html>