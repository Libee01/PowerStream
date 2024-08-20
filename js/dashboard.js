 // Función para mostrar el conjunto de botones y ocultar el león
 function mostrarConjuntoBotones(targetId) {
    // Muestra el conjunto de botones correspondiente y oculta los otros
    var conjuntosBotones = document.querySelectorAll(".conjunto-botones");
    conjuntosBotones.forEach(function(conjunto) {
        if (conjunto.id === targetId) {
            conjunto.style.display = "block";
        } else {
            conjunto.style.display = "none";
        }
    });

    // Oculta todos los formularios
    var formularios = document.querySelectorAll(".forms");
    formularios.forEach(function(formulario) {
        formulario.style.display = "none";
    });

    // Oculta el fondo del león
    document.getElementById("leon").style.display = "none";
}

// Agrega eventos de clic a los enlaces con la clase "mostrarBotones"
document.querySelectorAll(".mostrarBotones").forEach(function(enlace) {
    enlace.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = this.getAttribute("data-target");
        mostrarConjuntoBotones(targetId);
    });
});

function goBack() {
    window.history.back();
}

function showHideFilterFields() {
    var select = document.getElementById("columna");
    var textFilter = document.getElementById("textFilter");
    var dateFilter = document.getElementById("dateFilter");

    // Mostrar u ocultar los campos de filtro según la opción seleccionada
    if (select.value === "fecha_suscripcion") {
        textFilter.style.display = "none";
        dateFilter.style.display = "block";
    } else {
        textFilter.style.display = "block";
        dateFilter.style.display = "none";
    }
}