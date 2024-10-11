// Función que inicia el temporizador
function iniciarTemporizador() {
    let tiempoRestante = 50; // Tiempo inicial
    const intervalo = setInterval(function() {
        // Actualizar el elemento con el tiempo restante
        document.getElementById("temporizador").textContent = tiempoRestante;

        // Reducir el tiempo restante
        tiempoRestante--;

        // Verificar si el tiempo ha llegado a cero
        if (tiempoRestante < 0) {
            clearInterval(intervalo); // Detener el intervalo
            setTimeout(function() {
                alert("¡El tiempo se ha acabado!"); // Mostrar un mensaje después de terminar
            }, 1000); // Espera 1 segundo antes de mostrar la alerta
        }
    }, 1000); // Intervalo de 1 segundo (1000 ms)
}
