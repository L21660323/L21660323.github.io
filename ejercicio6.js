// Función para cambiar la imagen
function cambiarImagen() {
    // Obtener la referencia del elemento img
    var imagen = document.getElementById("imagen");

    // Verificar qué imagen está actualmente cargada
    if (imagen.src.includes("imagen.jpg")) {
        imagen.src = "bote.png"; // Cambia a la segunda imagen
    } else {
        imagen.src = "imagen.jpg"; // Vuelve a la primera imagen
    }
}
