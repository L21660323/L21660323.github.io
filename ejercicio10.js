// Función para filtrar la tabla
function filtrarTabla() {
    // Obtener el valor del input
    const filtro = document.getElementById('filtroInput').value.toUpperCase();
    
    // Obtener la tabla y las filas
    const tabla = document.getElementById('tablaDatos');
    const filas = tabla.getElementsByTagName('tr');

    // Recorrer todas las filas (excepto la cabecera) y ocultar las que no coinciden con el filtro
    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        let coincide = false;

        // Recorrer todas las celdas de la fila
        for (let j = 0; j < celdas.length; j++) {
            if (celdas[j]) {
                const textoCelda = celdas[j].textContent || celdas[j].innerText;
                if (textoCelda.toUpperCase().indexOf(filtro) > -1) {
                    coincide = true;
                    break;
                }
            }
        }

        // Mostrar u ocultar la fila según si coincide con el filtro
        filas[i].style.display = coincide ? "" : "none";
    }
}
