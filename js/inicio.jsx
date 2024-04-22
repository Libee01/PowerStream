import React, { useState, useEffect } from 'react';

function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const slidesArray = Array.from(document.getElementsByClassName("slides")[0].getElementsByClassName("header-1"));
        setSlides(slidesArray);
        showSlides();
        
        // Detener el deslizamiento automático cuando el puntero está sobre una imagen
        slidesArray.forEach(slide => {
            slide.addEventListener("mouseover", stopSlide);
            slide.addEventListener("mouseout", startSlide);
        });

        return () => {
            slidesArray.forEach(slide => {
                slide.removeEventListener("mouseover", stopSlide);
                slide.removeEventListener("mouseout", startSlide);
            });
        };
    }, []);

    function showSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);

        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
    }

    function stopSlide() {
        clearTimeout(interval);
    }

    function startSlide() {
        showSlides();
    }

    return (
        <div className="slides">
            {/* Aquí van los elementos de diapositivas */}
        </div>
    );
}

export default SlideShow;
