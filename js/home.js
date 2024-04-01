// Ocultar los divs
window.onload = function() {
  document.getElementById('pelicula1').style.display = 'none';
  document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
}

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Event Listener para la flecha derecha
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

// Event Listener para la flecha izquierda
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

// Paginacion
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');

  if (i === 0) {
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });
}

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



function pulsar1() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula2').style.display = 'none';
	document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'flex';
}

function pulsar2() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula2').style.display = 'flex';
}

function pulsar3() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'flex';
}

function pulsar4() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'flex';
}

function pulsar5() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'flex';
}

function pulsar6() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'flex';
}

function pulsar7() {
  document.getElementById('pelicula0').style.display = 'none';
  document.getElementById('pelicula1').style.display = 'none';
	document.getElementById('pelicula2').style.display = 'none';
  document.getElementById('pelicula3').style.display = 'none';
  document.getElementById('pelicula4').style.display = 'none';
  document.getElementById('pelicula5').style.display = 'none';
  document.getElementById('pelicula6').style.display = 'none';
  document.getElementById('pelicula7').style.display = 'flex';
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