// Función para jugar
function jugar(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    
    // Elegir jugada aleatoria de la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    // Determinar el ganador
    let resultado = "";

    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate. Ambos eligieron " + eleccionUsuario + ".";
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        resultado = "Ganaste. Tú elegiste " + eleccionUsuario + " y la computadora eligió " + eleccionComputadora + ".";
    } else {
        resultado = "Perdiste. Tú elegiste " + eleccionUsuario + " y la computadora eligió " + eleccionComputadora + ".";
    }

    // Mostrar el resultado en el DOM
    document.getElementById("resultado").textContent = resultado;
}
