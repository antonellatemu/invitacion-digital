const fechaObjetivo = new Date(2024,2,16, 9, 59, 59);

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const contadorElemento = document.getElementById('contador');
    contadorElemento.innerHTML = `
        <p>${dias} días, ${horas} horas, ${minutos} minutos, y ${segundos}segundos.</p>
    `;
    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

    if (diferencia <= 0) {
        contadorElemento.innerHTML = '<p>¡La fecha objetivo ha llegado!</p>';
        clearInterval(intervaloActualizacion);
    }
}

actualizarContador();
const intervaloActualizacion = setInterval(actualizarContador, 1000);