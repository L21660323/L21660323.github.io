/**  Se seleccionan todos los elementos de la galería (.gallery-item), los modales (.modal) y los botones de cerrar (.close-button).
galleryItems contiene todos los elementos de la galería que al hacer clic abren un modal.
modals contiene todos los elementos que representan los modales.
closeButtons contiene todos los botones de cierre de los modales. */
const galleryItems = document.querySelectorAll('.gallery-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

/** Se recorren todos los elementos de la galería y se les añade un evento de clic.*/
/** Al hacer clic en un elemento de la galería, se obtiene el valor del atributo data-modal-target.*/
/** Se selecciona el modal que tiene el id igual al valor del atributo data-modal-target.*/
/** Se llama a la función openModal y se le pasa como argumento el modal seleccionado.*/

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        openModal(modal);
    });
});

// Cerrar modal al hacer clic en el botón de cerrar
/** Se recorren todos los botones de cerrar y se les añade un evento de clic.*/
/** Al hacer clic en un botón de cerrar, se obtiene el modal al que pertenece el botón.*/
/** Se llama a la función closeModal y se le pasa como argumento el modal obtenido.*/

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Cerrar modal al hacer clic fuera del contenido del modal
/** Se recorren todos los modales y se les añade un evento de clic.*/
/** Al hacer clic en un modal, si el objetivo del evento es el modal, se llama a la función closeModal y se le pasa como argumento el modal.*/

modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Cerrar modal al presionar la tecla "Esc"
/** Se añade un evento de teclado a todo el documento.*/
/** Al presionar la tecla "Esc", se recorren todos los modales.*/
/** Si el modal está visible, se llama a la función closeModal y se le pasa como argumento el modal.*/
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.style.display === 'flex') {
                closeModal(modal);
            }
        });
    }
});

// Función para abrir el modal
/** Se define la función openModal que recibe un modal como argumento.*/
/** Si el modal existe, se le asigna el valor "flex" a la propiedad display del modal.*/
function openModal(modal) {
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Función para cerrar el modal
/** Se define la función closeModal que recibe un modal como argumento.*/
/** Si el modal existe, se le asigna el valor "none" a la propiedad display del modal.*/
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
    }
}

