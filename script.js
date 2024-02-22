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