import React, { useState, useEffect } from 'react';

function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        showSlides();
        return () => clearInterval(intervalId);
    }, []);

    function showSlides() {
        const slides = document.getElementsByClassName("slides")[0].getElementsByClassName("header-1");

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

        const newIntervalId = setTimeout(showSlides, 5000);
        setIntervalId(newIntervalId);
    }

    function stopSlide() {
        clearInterval(intervalId);
    }

    function startSlide() {
        showSlides();
    }

    return (
        <div className="slides">
            {/* Aquí van tus diapositivas */}
            <div className="header-1">Slide 1</div>
            <div className="header-1">Slide 2</div>
            <div className="header-1">Slide 3</div>
        </div>
    );
}

function MovieList({ items }) {
    const [currentItem, setCurrentItem] = useState(4);

    function loadMoreItems() {
        setCurrentItem(prevItem => prevItem + 4);
    }

    function loadLessItems() {
        setCurrentItem(prevItem => Math.max(prevItem - 4, 4));
    }

    return (
        <div>
            {items.slice(0, currentItem).map(item => (
                <div key={item.id} className="box-container">
                    <div className="box">{item.name}</div>
                    {/* Aquí van más detalles del item */}
                </div>
            ))}
            {currentItem < items.length && (
                <button onClick={loadMoreItems}>Cargar más</button>
            )}
            {currentItem > 4 && (
                <button onClick={loadLessItems}>Cargar menos</button>
            )}
        </div>
    );
}

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Aquí puedes cargar los datos de las películas desde el servidor
        // por ejemplo, utilizando fetch o Axios
    }, []);

    function fetchMovies() {
        // Aquí simularíamos la carga de películas desde el servidor
        setTimeout(() => {
            setMovies([
                { id: 1, name: "Movie 1" },
                { id: 2, name: "Movie 2" },
                { id: 3, name: "Movie 3" },
                // Más películas...
            ]);
        }, 1000);
    }

    return (
        <div>
            <SlideShow />
            <MovieList items={movies} />
            <button onClick={fetchMovies}>Cargar películas</button>
        </div>
    );
}

export default App;
