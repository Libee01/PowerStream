var slideIndex = 0;
var slides = document.getElementsByClassName("slides")[0].getElementsByClassName("header-1");
var interval;

showSlides();

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length - 1) {slideIndex = 0} // Reiniciar índice si se llega al final
    
    slides[slideIndex].style.display = "block";  

    interval = setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
}

// Detener el deslizamiento automático cuando el puntero está sobre una imagen
for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseover", stopSlide);
    slides[i].addEventListener("mouseout", startSlide);
}

function stopSlide() {
    clearTimeout(interval);
}

function startSlide() {
    interval = setTimeout(showSlides, 5000);
}

// Cargar más películas de acción

function cargarMasItems(btn, cantidadInicial, claseObjetivo, btnMenosId) {
    let currentItem = cantidadInicial;
    let loadLessBtn = document.querySelector('#' + btnMenosId);

    btn.onclick = () => {
        let contenedores = [...document.querySelectorAll("." + claseObjetivo)];
        for (let i = currentItem; i < currentItem + 4 && i < contenedores.length; i++) {
            contenedores[i].style.display = 'inline-block';
        }
        currentItem += 4;
        if (currentItem >= contenedores.length || currentItem >= 4) {
            btn.style.display = 'none';
            loadLessBtn.style.display = 'inline-block'; // Mostrar el botón "Cargar menos"
        }
    };

    loadLessBtn.onclick = () => {
        let contenedores = [...document.querySelectorAll("." + claseObjetivo)];
        for (let i = currentItem - 4; i < currentItem && i < contenedores.length; i++) {
            contenedores[i].style.display = 'none';
        }
        currentItem -= 4;
        if (currentItem <= cantidadInicial) {
            loadLessBtn.style.display = 'none'; // Ocultar el botón "Cargar menos"
            btn.style.display = 'inline-block'; // Mostrar el botón "Cargar más" nuevamente
        }
    };
}

let loadMoreBtn1 = document.querySelector('#load-more-1');
let loadLessBtn1 = document.querySelector('#load-less-1');
let loadMoreBtn2 = document.querySelector('#load-more-2');
let loadLessBtn2 = document.querySelector('#load-less-2');
let loadMoreBtn3 = document.querySelector('#load-more-3');
let loadLessBtn3 = document.querySelector('#load-less-3');
let loadMoreBtn4 = document.querySelector('#load-more-4');
let loadLessBtn4 = document.querySelector('#load-less-4');


cargarMasItems(loadMoreBtn1, 4, "box-container-1 .box-1", "load-less-1");
cargarMasItems(loadMoreBtn2, 4, "box-container-2 .box-2", "load-less-2");
cargarMasItems(loadMoreBtn3, 4, "box-container-3 .box-3", "load-less-3");
cargarMasItems(loadMoreBtn4, 4, "box-container-4 .box-4", "load-less-4");



function añadirALista() {
    window.location.href = "login.html";
}

// Variables de prueba para verificar el funcionamiento del correo de recuperar contraseña
var reset_success = "<?php echo $_SESSION['reset_success']; ?>";
console.log("Ha funcionado:", reset_success);

var reset_error = "<?php echo $_SESSION['reset_error']; ?>";
console.log("Ha fallado:", reset_error);