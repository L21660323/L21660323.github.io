// Función para generar colores hexadecimales aleatorios
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
}
