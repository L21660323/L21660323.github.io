// Esperamos a que la página esté completamente cargada
window.onload = function() {
    const formulario = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const mensajeError = document.getElementById('noname');
    
    // Agregamos un evento 'submit' al formulario
    formulario.onsubmit = function(event) {
        // Verificamos si el campo de nombre está vacío
        if (nombreInput.value.trim() === '') {
            // Mostramos el mensaje de error en color rosa
            mensajeError.style.display = 'block';
            // Evitamos que se envíe el formulario
            event.preventDefault();
        } else {
            // Ocultamos el mensaje de error si el campo no está vacío
            mensajeError.style.display = 'none';
        }
    };
};