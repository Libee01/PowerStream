// Ocultar los divs
window.onload = function() {
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
}

// Carousel 1
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Event Listener para la flecha derecha
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

// Event Listener para la flecha izquierda
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});

// Carousel 2
const fila2 = document.querySelector('.contenedor-carousel2');
const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// Event Listener para la flecha derecha 2
flechaDerecha2.addEventListener('click', () => {
  fila2.scrollLeft += fila2.offsetWidth;
});

// Event Listener para la flecha izquierda 2
flechaIzquierda2.addEventListener('click', () => {
  fila2.scrollLeft -= fila2.offsetWidth;
});

// Carousel 3
const fila3 = document.querySelector('.contenedor-carousel3');
const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// Event Listener para la flecha derecha 3
flechaDerecha3.addEventListener('click', () => {
  fila3.scrollLeft += fila3.offsetWidth;
});

// Event Listener para la flecha izquierda 3
flechaIzquierda3.addEventListener('click', () => {
  fila3.scrollLeft -= fila3.offsetWidth;
});

// Carousel 4
const fila4 = document.querySelector('.contenedor-carousel4');
const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

// Event Listener para la flecha derecha 4
flechaDerecha4.addEventListener('click', () => {
  fila4.scrollLeft += fila4.offsetWidth;
});

// Event Listener para la flecha izquierda 4
flechaIzquierda4.addEventListener('click', () => {
  fila4.scrollLeft -= fila4.offsetWidth;
});

// Carousel 5
const fila5 = document.querySelector('.contenedor-carousel5');
const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
const flechaDerecha5 = document.getElementById('flecha-derecha5');

// Event Listener para la flecha derecha 4
flechaDerecha5.addEventListener('click', () => {
  fila5.scrollLeft += fila5.offsetWidth;
});

// Event Listener para la flecha izquierda 4
flechaIzquierda5.addEventListener('click', () => {
  fila5.scrollLeft -= fila5.offsetWidth;
});

// Hover
peliculas.forEach((pelicula) => {
  pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach(p => p.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  peliculas.forEach(p => p.classList.remove('hover'));
});



function recomendada1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'flex';
}

function recomendada2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'flex';
}

function recomendada3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'flex';
}

function recomendada4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'flex';
}

function recomendada5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'flex';
}

function recomendada6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'flex';
}

function recomendada7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
	document.getElementById('recomendada2').style.display = 'none';
  document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'flex';
}

function accion1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion1').style.display = 'flex';
}

function accion2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion2').style.display = 'flex';
}

function accion3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion3').style.display = 'flex';
}

function accion4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion4').style.display = 'flex';
}

function accion5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion5').style.display = 'flex';
}

function accion6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion6').style.display = 'flex';
}

function accion7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('accion7').style.display = 'flex';
}

function terror1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror1').style.display = 'flex';
}

function terror2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror2').style.display = 'flex';
}

function terror3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror3').style.display = 'flex';
}

function terror4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror4').style.display = 'flex';
}

function terror5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror5').style.display = 'flex';
}

function terror6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror6').style.display = 'flex';
}

function terror7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('terror7').style.display = 'flex';
}

function infantil1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'flex';
}

function infantil2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil2').style.display = 'flex';
}

function infantil3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil3').style.display = 'flex';
}

function infantil4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil4').style.display = 'flex';
}

function infantil5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil5').style.display = 'flex';
}

function infantil6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil6').style.display = 'flex';
}

function infantil7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('infantil7').style.display = 'flex';
}

function documental1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental1').style.display = 'flex';
}

function documental2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental2').style.display = 'flex';
}

function documental3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental3').style.display = 'flex';
}

function documental4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental4').style.display = 'flex';
}

function documental5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental5').style.display = 'flex';
}

function documental6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental7').style.display = 'none';
  document.getElementById('documental6').style.display = 'flex';
}

function documental7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('recomendada1').style.display = 'none';
  document.getElementById('recomendada2').style.display = 'none';
	document.getElementById('recomendada3').style.display = 'none';
  document.getElementById('recomendada4').style.display = 'none';
  document.getElementById('recomendada5').style.display = 'none';
  document.getElementById('recomendada6').style.display = 'none';
  document.getElementById('recomendada7').style.display = 'none';
  document.getElementById('accion1').style.display = 'none';
  document.getElementById('accion2').style.display = 'none';
  document.getElementById('accion3').style.display = 'none';
  document.getElementById('accion4').style.display = 'none';
  document.getElementById('accion5').style.display = 'none';
  document.getElementById('accion6').style.display = 'none';
  document.getElementById('accion7').style.display = 'none';
  document.getElementById('terror1').style.display = 'none';
  document.getElementById('terror2').style.display = 'none';
  document.getElementById('terror3').style.display = 'none';
  document.getElementById('terror4').style.display = 'none';
  document.getElementById('terror5').style.display = 'none';
  document.getElementById('terror6').style.display = 'none';
  document.getElementById('terror7').style.display = 'none';
  document.getElementById('infantil1').style.display = 'none';
  document.getElementById('infantil2').style.display = 'none';
  document.getElementById('infantil3').style.display = 'none';
  document.getElementById('infantil4').style.display = 'none';
  document.getElementById('infantil5').style.display = 'none';
  document.getElementById('infantil6').style.display = 'none';
  document.getElementById('infantil7').style.display = 'none';
  document.getElementById('documental1').style.display = 'none';
  document.getElementById('documental2').style.display = 'none';
  document.getElementById('documental3').style.display = 'none';
  document.getElementById('documental4').style.display = 'none';
  document.getElementById('documental5').style.display = 'none';
  document.getElementById('documental6').style.display = 'none';
  document.getElementById('documental7').style.display = 'flex';
}

// Reproductor de la pelicula0
document.getElementById('video0').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula0').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula1
document.getElementById('video1').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula1').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula2
document.getElementById('video2').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video2.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula2').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula3
document.getElementById('video3').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video3.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula3').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula4
document.getElementById('video4').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video4.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula4').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula5
document.getElementById('video5').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video5.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula5').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula6
document.getElementById('video6').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video6.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula6').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula7
document.getElementById('video7').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video7.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('pelicula7').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 1
document.getElementById('video8').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion1').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 2
document.getElementById('video9').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video2.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion2').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 3
document.getElementById('video10').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video3.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion3').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 4
document.getElementById('video11').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video4.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion4').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 5
document.getElementById('video12').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video5.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion5').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 6
document.getElementById('video13').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video6.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion6').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula accion 7
document.getElementById('video14').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video7.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('accion7').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 1
document.getElementById('video15').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror1').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 2
document.getElementById('video16').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video2.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror2').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 3
document.getElementById('video17').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video3.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror3').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 4
document.getElementById('video18').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video4.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror4').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 5
document.getElementById('video19').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video5.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror5').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 6
document.getElementById('video20').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video6.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror6').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula terror 7
document.getElementById('video21').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video7.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('terror7').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 1
document.getElementById('video22').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil1').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 2
document.getElementById('video23').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video2.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil2').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 3
document.getElementById('video24').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video3.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil3').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 4
document.getElementById('video25').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video4.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil4').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 5
document.getElementById('video26').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video5.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil5').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 6
document.getElementById('video27').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video6.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil6').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor de la pelicula infantil 7
document.getElementById('video28').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video7.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('infantil7').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 1
document.getElementById('video29').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video0.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental1').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 2
document.getElementById('video30').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video2.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental2').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 3
document.getElementById('video31').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video3.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental3').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 4
document.getElementById('video32').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video4.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental4').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 5
document.getElementById('video33').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video5.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental5').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 6
document.getElementById('video34').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video6.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental6').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});

// Reproductor del documental 7
document.getElementById('video35').addEventListener('click', function() {
  var video = document.createElement('video');
  video.src = './videos/video7.mp4'; // Ruta al video en tu servidor
  video.controls = true; // Mostrar controles de reproducción
  video.autoplay = true; // Reproducir automáticamente al cargar
  video.style.width = '100%'; // Establecer ancho al 100%
  video.style.height = 'auto'; // Establecer altura automática
  video.style.marginTop = '1em'; // Ajustar margen superior

  // Reemplazar el contenedor actual con el video
  var contenedor = document.getElementById('documental7').getElementsByClassName('contenedor')[0];
  contenedor.innerHTML = ''; // Limpiar contenido actual
  contenedor.appendChild(video);
});