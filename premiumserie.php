<?php
    session_start();
    $id_usuario = $_SESSION['userid'];
    $plan = $_SESSION['plan'];
    if ($plan == 'premium')
    {
        
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
            <a href="premiumserie.php" class="logo">PowerStream</a>
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="img2/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="premium.php">Películas</a></li>
                    <li><a href="premiumserie.php">Series</a></li>
                    <li><a href="lista.php">Mi lista</a></li>
                </ul>
            </nav>
            <a href="index.php"><img id="logout" src="img/logout.png"></a>
        </div>
        <div class="header-content container slides">
                <?php 
            // Incluir el archivo PHP que realiza la consulta SQL
            include 'php/imagenesseries.php'; 
            
            // Verificar si hay resultados de la consulta antes de mostrar los datos
            if ($result->num_rows > 0) { 
                        ?>
                                <div class="header-container">
                        <?php
                                $i = 0; 
                                while ($row = $result->fetch_assoc()) { 
                        ?>
                                <?php if($i == 0) { ?>
                                    <div class="header-1 active" style="background-image:url(img2/<?php echo $row['img_publi']; ?>);">

                                <?php } else { ?>
                                <div class="header-1" style="background-image:url(img2/<?php echo $row['img_publi']; ?>); ">
                                    <?php } ?>
                                        <img  src="img2/<?php echo $row['nom_publi']; ?>">                                  
                                        <div>
                                        <a class="btn-2" href="reproductor.php?id_video=<?php echo $row['id_video']; ?>">Ver ahora</a> 
                                        </div>
                                </div>
                        <?php 
                                    $i++; 
                                }
                        ?>
                                </div> <!-- Cierre de header-container -->
                        <?php
                            } else {
                                // Si no hay resultados, mostrar un mensaje alternativo
                                echo "No se encontraron resultados.";
                            }
                        ?>
        </div>
    </header>
    <section class="movies container">
        <h2>Series de Acción</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-1">
        <?php 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_accion->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_accion->fetch_assoc()) { 
            ?>
                        <div class="box-1 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                               
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="añadirALista(<?php echo $row['id_video']; ?>, '<?php echo $row['titulo']; ?>', 
                                    '<?php echo $row['tipo']; ?>', '<?php echo $row['img_portada']; ?>')">Añadir a la lista</div>
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
        <h2>Series de Terror</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-2">
        <?php 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_terror->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_terror->fetch_assoc()) { 
            ?>
                        <div class="box-2 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                               
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="añadirALista(<?php echo $row['id_video']; ?>, '<?php echo $row['titulo']; ?>', 
                                    '<?php echo $row['tipo']; ?>', '<?php echo $row['img_portada']; ?>')">Añadir a la lista</div>
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

    <section class="movies container">
        <h2>Series Románticas</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-3">
        <?php 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_romanticas->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_romanticas->fetch_assoc()) { 
            ?>
                        <div class="box-3 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                               
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="añadirALista(<?php echo $row['id_video']; ?>, '<?php echo $row['titulo']; ?>', 
                                    '<?php echo $row['tipo']; ?>', '<?php echo $row['img_portada']; ?>')">Añadir a la lista</div>
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
        
        <div class="load-more" id="load-more-3">Cargar más</div>
        <div class="load-less" id="load-less-3">Cargar menos</div>
    </section>

    <section class="movies container">
        <h2>Series de Comedia</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-4">
        <?php 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_comedia->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_comedia->fetch_assoc()) { 
            ?>
                        <div class="box-4 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="img2/<?php echo $row['img_portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                               
                                <h2><?php echo $row['titulo']; ?></h2>
                                <div class="opciones">
                                    <a href="reproductor.php?id_video=<?php echo $row['id_video']; ?>"><div class="reproducir">Reproducir</div></a>
                                    <div class="reproducir" onclick="añadirALista(<?php echo $row['id_video']; ?>, '<?php echo $row['titulo']; ?>', 
                                    '<?php echo $row['tipo']; ?>', '<?php echo $row['img_portada']; ?>')">Añadir a la lista</div>
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
        
        <div class="load-more" id="load-more-4">Cargar más</div>
        <div class="load-less" id="load-less-4">Cargar menos</div>
    </section>

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

    <script src="js/premium.js"></script>
</body>
</html>