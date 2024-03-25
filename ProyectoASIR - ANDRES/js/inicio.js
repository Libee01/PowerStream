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

