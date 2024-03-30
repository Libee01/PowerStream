<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "rootroot";
$dbname = "powerstream";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recuperar los datos del formulario
$titulo = $_REQUEST['titulo'];
$descripcion = $_REQUEST['descripcion'];
$categoria = $_REQUEST['categoria'];

$copiarFichero = false;
            $errores = "";
            if (is_uploaded_file ($_FILES['img']['tmp_name']))
            {
                $nombreDirectorio = "php/img/";
                $nombreFichero = $_FILES['img']['name'];
                $copiarFichero2 = true;
            }

            // El fichero introducido supera el l�mite de tama�o permitido
            else if ($_FILES['img']['error'] == UPLOAD_ERR_FORM_SIZE)
            {
                $maxsize = $_REQUEST['MAX_FILE_SIZE'];
                $errores = $errores . "   <LI>El tama�o del fichero supera el límite permitido ($maxsize bytes)\n";
            }

            // No se ha introducido ning�n fichero
            else if ($_FILES['img']['name'] == "")
            $nombreFichero = '';
            // El fichero introducido no se ha podido subir
            else
            $errores = $errores . "   <LI>No se ha podido subir el fichero\n";

            // Mostrar errores encontrados
            if ($errores != "")
            {
                print ("<P>No se ha podido realizar la inserción debido a los siguientes errores:</P>\n");
                print ("<UL>\n");
                print ($errores);
                print ("</UL>\n");
                print ("<P>[ <A HREF='javascript:history.back()'>Volver</A> ]</P>\n");
            }
            else
            {
                // Mover foto a su ubicaci�n definitiva
                if ($copiarFichero)
                move_uploaded_file ($_FILES['img']['tmp_name'], $nombreDirectorio . $nombreFichero);
                
            }
     //--------------------------Segunda img

            $copiarFichero2 = false;
                $errores = "";
                if (is_uploaded_file($_FILES['img2']['tmp_name'])) {
                    $nombreDirectorio = "php/img/";
                    $nombreFichero2 = $_FILES['img2']['name'];
                    $copiarFichero2 = true;
                } else if ($_FILES['img2']['error'] == UPLOAD_ERR_FORM_SIZE) {
                    $maxsize = $_REQUEST['MAX_FILE_SIZE'];
                    $errores = $errores . "   <LI>El tamaño del fichero supera el límite permitido ($maxsize bytes)\n";
                } else if ($_FILES['img2']['name'] == "") {
                    $nombreFichero2 = '';
                } else {
                    $errores = $errores . "   <LI>No se ha podido subir el fichero\n";
                }

                // Mostrar errores encontrados
                if ($errores != "") {
                    print ("<P>No se ha podido realizar la inserción debido a los siguientes errores:</P>\n");
                    print ("<UL>\n");
                    print ($errores);
                    print ("</UL>\n");
                    print ("<P>[ <A HREF='javascript:history.back()'>Volver</A> ]</P>\n");
                } else {
                    // Mover foto a su ubicación definitiva
                    if ($copiarFichero2) {
                        move_uploaded_file($_FILES['img2']['tmp_name'], $nombreDirectorio . $nombreFichero2);
                    }
                }



            //conectar con el sercvidor de base de datos
            $conexion = mysqli_connect("localhost", "root", "rootroot")
            or die ("No se puede conectar con el servidor");
            
            //seleccionar base de datos
            
            mysqli_select_db ($conexion, "powerstream") or die ("No se puede conectar a la base de datos");

            $query="insert into prueba (titulo,portada,descripcion,categoria,img_publi) values ('$titulo','$nombreFichero','$descripcion','$categoria','$nombreFichero2')";
            //echo "$query.<br> ";

            
            if(mysqli_query($conexion,$query))
            {
                
                echo "<div class='borrado'>Piso añadido corectamente</div>";
                echo "<div class='mensaje'><img src='../../img/arriba1.png' class='ok'></div>";
            }   
            else
            {
                echo "<div class='borrado'>Piso NO añadido</div>";
                echo "<div class='mensaje'><img src='../../img/abajo.png' class='ok'></div>";
                
            }
            //cerrrar
                mysqli_close($conexion);
            ?>
