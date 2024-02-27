document.addEventListener('DOMContentLoaded', function() {
    var titulo = document.getElementById('sabado');
    var textoCompleto = titulo.innerText;
    titulo.innerText = '';

    var index = 0;
    var interval = setInterval(function() {
        titulo.innerText += textoCompleto[index];
        index++;
        if (index === textoCompleto.length) {
            clearInterval(interval);
        }
    }, 100); // Intervalo de tiempo en milisegundos entre cada letra
});
const mapButton = document.getElementById('mapButton');
const mapContainer = document.getElementById('mapContainer');

// Mostrar el mapa cuando el mouse pasa por encima del botón
mapButton.addEventListener('mouseenter', function() {
  mapContainer.classList.remove('hidden');
});

// Ocultar el mapa cuando el mouse sale del botón
mapButton.addEventListener('mouseleave', function() {
  mapContainer.classList.add('hidden');
});