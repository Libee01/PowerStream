import React, { useEffect, useState } from 'react';
function MyComponent() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  let interval;
  useEffect(() => {
    const slidesArray = Array.from(document.getElementsByClassName("slides")[0].getElementsByClassName("header-1"));
    setSlides(slidesArray);
    showSlides();

    // Cleanup
    return () => clearTimeout(interval);
  }, []);
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + 1;
      if (newIndex > slides.length - 1) {
        newIndex = 0;
      }
      slides[newIndex].style.display = "block";
      return newIndex;
    });
    interval = setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
  }
  function stopSlide() {
    clearTimeout(interval);
  }
  function startSlide() {
    interval = setTimeout(showSlides, 5000);
  }
  function añadirALista(id, titulo, portada, categoria, img_publi) {
    // Realizar una solicitud al servidor para añadir la película a la lista de reproducción
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar_pelicula.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText); // Mostrar la respuesta del servidor (opcional)
      }
    };
    // Enviar datos a guardar_pelicula.php
    xhr.send("id=" + id + "&titulo=" + titulo + "&portada=" + portada + "&categoria=" + categoria + "&img_publi=" + img_publi);
  }
  return null;
}
export default MyComponent;
