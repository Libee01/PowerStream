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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerStream</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <link rel="icon" href="../img/favicon.ico" type="image/x-icon"> <!-- Vincula el icono favicon -->
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a href="dashboard.php" class="logo">PowerStream</a>
            <nav class="navbar">
                <ul>
                    <li><a class="mostrarBotones" data-target="botones" href="#">Contenido</a></li>
                    <li><a class="mostrarBotones" data-target="botones2" href="#">Usuarios</a></li>
                </ul>
            </nav>
            <a href="../index.php"><img id="logout" src="../img/logout.png"></a>
        </div>
    </header>
    <div id="leon">
    </div>
    <div id="botones" class="conjunto-botones">
        <div class="fila">
            <abbr title="AÑADIR VIDEO">
                <div id="btn1" class="mostrarformulario">
                    <a href="formsubirvideo.html"><img class="anadir" src="../img/nuevo.png"></a>
                </div>    
            </abbr>
            <abbr title="ELIMINAR VIDEO">
                <div id="btn2" class="mostrarformulario">
                <a href="formeliminarvideo.php"><img class="eliminar" src="../img/borrar.png"></a>
                </div>
            </abbr>
        </div>
        <div class="fila2">
            <abbr title="EDITAR VIDEO">
                <div id="btn3" class="mostrarformulario">
                <a href="formmodificarvideo.php"><img class="editar" src="../img/editar.png"></a>
                </div>
            </abbr>
            <abbr title="LISTAR VIDEO">
                <div id="btn4" class="mostrarformulario">
                <a href="formlistar.php"><img class="listar" src="../img/menu.png"></a>
                </div>
            </abbr>   
        </div>
    </div>
    <div id="botones2" class="conjunto-botones">
        <div class="fila21">
            <abbr title="AÑADIR USUARIO">
                <div id="btn12">
                <a href="formanadirusuario.html"><img class="anadir2" src="../img/anadirusu1.png"></a>
                </div>    
            </abbr>
            <abbr title="ELIMINAR USUARIO">
                <div id="btn22">
                <a href="eliminarusuario.php"><img class="eliminar2" src="../img/eliminarusu2.png"></a>
                </div>
            </abbr>
        </div>
        <div class="fila22">
            <abbr title="EDITAR USUARIO">
                <div id="btn32">
                <a href="formmodificausuario.php"><img class="editar2" src="../img/editar.png"></a>
                </div>
            </abbr>
            <abbr title="LISTAR USUARIOS">
                <div id="btn42">
                <a href="listarusuario.php"><img class="listar2" src="../img/menu.png"></a>
                </div>
            </abbr>   
        </div>
    </div>
    <script src="../js/dashboard.js"></script>
</body>
</html>