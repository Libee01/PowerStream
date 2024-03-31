<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="css/basico.css">
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a href="#" class="logo">PowerStream</a>
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="img2/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Mi lista</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-content container slides">
                <?php 
            // Incluir el archivo PHP que realiza la consulta SQL
            include 'php/imagenespeliculas.php'; 
            
            // Verificar si hay resultados de la consulta antes de mostrar los datos
            if ($result->num_rows > 0) { 
                        ?>
                                <div class="header-container">
                        <?php
                                $i = 0; 
                                while ($row = $result->fetch_assoc()) { 
                        ?>
                                <?php if($i == 0) { ?>
                                    <div class="header-1 active" style="background-image:url(php/img/<?php echo $row['img_publi']; ?>);">

                                <?php } else { ?>
                                <div class="header-1" style="background-image:url(php/img/<?php echo $row['img_publi']; ?>); ">
                                <?php } ?>
                                        <h3><?php echo $row['titulo']; ?></h3>
                                        <p><?php echo $row['descripcion']; ?></p>
                                        <a href="#" class="btn-2">Ver ahora</a>
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
        <h2>Peliculas de Acción</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-1">
            <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_accion->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_accion->fetch_assoc()) { 
            ?>
                        <?php if($i == 0) { ?>
                        <div class="box-1 active">
                        <?php } else { ?>
                        <div class="box-1">
                        <?php } ?>
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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

    </section>
    <section class="movies container">
        <h2>Peliculas de Drama</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-2">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_drama->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_drama->fetch_assoc()) { 
            ?>
                        <div class="box-2 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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
        
    </section>

    <section class="movies container">
        <h2>Peliculas de Terror</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-3">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_terror->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_terror->fetch_assoc()) { 
            ?>
                        <div class="box-3 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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
        
    </section>

    <section class="movies container">
        <h2>Peliculas Romanticas</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-4">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_romanticas->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_romanticas->fetch_assoc()) { 
            ?>
                        <div class="box-4 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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
        
    </section>

    <section class="movies container">
        <h2>Peliculas de Comedia </h2>
        <hr>
        <div id="peliculas-accion" class="box-container-5">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_comedia->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_comedia->fetch_assoc()) { 
            ?>
                        <div class="box-5 <?php if($i == 0) echo 'active'; ?> " style="border-radius: 5px;z-index:1000;display: none;">
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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

    </section>


    <section class="movies container">
        <h2>Peliculas de Aventuras</h2>
        <hr>
        <div id="peliculas-accion" class="box-container-6">
        <?php 
    // Incluir el archivo PHP que realiza la consulta SQL
    include 'php/imagenespeliculas.php'; 
    
    // Verificar si hay resultados de la consulta antes de mostrar los datos
    if ($result_aventuras->num_rows > 0) { 
            ?>
                    <div class="box-container">
            <?php
                    $i = 0; 
                    while ($row = $result_aventuras->fetch_assoc()) { 
            ?>
                        <div class="box-6 <?php if($i == 0) echo 'active'; ?>">
                            <div class="content">
                                <img id="arriba" src="php/img/<?php echo $row['portada']; ?>" alt="<?php echo $row['titulo']; ?>">
                                <h3><?php echo $row['titulo']; ?></h3>
                                <p><?php echo $row['descripcion']; ?> </p>
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

    </footer>

    <script src="js/basico.js"></script>
</body>
</html>