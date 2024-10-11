// Array para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
    const inputTarea = document.getElementById("nuevaTarea");
    const tareaTexto = inputTarea.value;

    if (tareaTexto.trim() !== "") {
        // Agregar tarea al array
        tareas.push({ texto: tareaTexto, completada: false });

        // Actualizar la lista en el DOM
        actualizarLista();
        
        // Limpiar el campo de texto
        inputTarea.value = "";
    } else {
        alert("Por favor, ingresa una tarea.");
    }
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = ""; // Limpiar la lista antes de volver a mostrar

    // Recorrer el array de tareas y crear elementos en el DOM
    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");

        // Aplicar clase 'completada' si la tarea está marcada
        if (tarea.completada) {
            li.classList.add("completada");
        }

        // Crear el texto de la tarea
        li.textContent = tarea.texto;

        // Botón para marcar tarea como completada
        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
        botonCompletar.onclick = function() {
            marcarCompletada(indice);
        };

        // Botón para eliminar la tarea
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            eliminarTarea(indice);
        };

        // Agregar los botones al elemento de lista
        li.appendChild(botonCompletar);
        li.appendChild(botonEliminar);

        // Agregar el elemento de lista a la lista en el DOM
        listaTareas.appendChild(li);
    });
}

// Función para marcar una tarea como completada
function marcarCompletada(indice) {
    tareas[indice].completada = !tareas[indice].completada; // Alternar el estado de completada
    actualizarLista(); // Actualizar la lista en el DOM
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
    tareas.splice(indice, 1); // Eliminar tarea del array
    actualizarLista(); // Actualizar la lista en el DOM
}
