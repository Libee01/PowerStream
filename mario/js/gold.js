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
var loadMoreBtn1 = document.querySelector('#load-more-1');
var currentItem1 = 3;

loadMoreBtn1.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i < currentItem1 + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 3;
    if(currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }
}

// Cargar más películas de drama
var loadMoreBtn2 = document.querySelector('#load-more-2');
var currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }
}

// Cargar más películas de terror
var loadMoreBtn3 = document.querySelector('#load-more-3');
var currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'
    }
}

// Cargar más películas románticas
var loadMoreBtn4 = document.querySelector('#load-more-4');
var currentItem4 = 4;

loadMoreBtn4.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-4 .box-4'
    )];
    for(var i = currentItem4; i < currentItem4 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem4 += 4;
    if(currentItem4 >= boxes.length) {
        loadMoreBtn4.style.display = 'none'
    }
}

// Cargar más películas de comedia
var loadMoreBtn5 = document.querySelector('#load-more-5');
var currentItem5 = 4;

loadMoreBtn5.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-5 .box-5'
    )];
    for(var i = currentItem5; i < currentItem5 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem5 += 4;
    if(currentItem5 >= boxes.length) {
        loadMoreBtn5.style.display = 'none'
    }
}

// Cargar más películas de aventuras
var loadMoreBtn6 = document.querySelector('#load-more-6');
var currentItem6 = 4;

loadMoreBtn6.onclick = () => {
    var boxes = [...document.querySelectorAll(
        '.box-container-6 .box-6'
    )];
    for(var i = currentItem6; i < currentItem6 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem6 += 4;
    if(currentItem6 >= boxes.length) {
        loadMoreBtn6.style.display = 'none'
    }
}