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

  function cargarMasItems(btn, cantidadInicial, claseObjetivo, btnMenosId) {
    let currentItem = cantidadInicial;
    let loadLessBtn = document.querySelector('#' + btnMenosId);

    btn.onclick = () => {
      let contenedores = [...document.querySelectorAll("." + claseObjetivo)];
      for (let i = currentItem; i < currentItem + 4 && i < contenedores.length; i++) {
        contenedores[i].style.display = 'inline-block';
      }
      currentItem += 4;
      if (currentItem >= contenedores.length || currentItem >= 6) {
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

  useEffect(() => {
    let loadMoreBtns = [];
    let loadLessBtns = [];
    for (let i = 1; i <= 6; i++) {
      loadMoreBtns.push(document.querySelector(`#load-more-${i}`));
      loadLessBtns.push(document.querySelector(`#load-less-${i}`));
    }

    loadMoreBtns.forEach((btn, index) => {
      cargarMasItems(btn, 4, `box-container-${index + 1} .box-${index + 1}`, `load-less-${index + 1}`);
    });
  }, []);

  return <></>;
}

export default MyComponent;
