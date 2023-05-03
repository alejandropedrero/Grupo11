// Obtener los elementos del DOM necesarios
const publicacionForm = document.getElementById('publicacion-form');
const publicacionesContainer = document.getElementById('publicaciones-container');

// Agregar evento submit al formulario
publicacionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que la pagina se recargue
    
    // Obtener el comentario ingresado
    const comentario = document.getElementById('comment').value; 
    
    // Crear un nuevo elemento de publicación y agregarlo al contenedor
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.classList.add('mt-4', 'text-white', 'w-100', 'border');
    
    // Ajustar las clases del nuevo elemento según su posición en el contenedor
    if (publicacionesContainer.firstChild) {
        nuevaPublicacion.classList.add('mt-0');
    }
    
    // Agregar el HTML correspondiente al nuevo elemento de publicación
    nuevaPublicacion.innerHTML = `
        <div class="bg-light rounded p-3" style="color: black">
            <div class="d-flex align-items-center">
                <a href="perfil.html">
                    <img src="styles/resources/Sin título-2.png" alt="Kenzo" width="50px" height="50px" class="m-2" title="ir a tu perfil">
                </a>
                <p> Publicación antigua:</p>
            </div>
            ${comentario}
            <div class="d-flex justify-content-end align-items-center mt-3 me-3">
                <button type="button" class="btn btnLikePost position-relative" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                        </svg>
                    <span class="position-absolute top-0 start-105 translate-middle badge contador rounded-pill bg-secondary ">
                        0
                    </span>
                </button>
            </div>
        </div>
    `;
    
    // Agregar el nuevo elemento de publicación al contenedor
    publicacionesContainer.appendChild(nuevaPublicacion);
    
    // Limpiar el campo de texto del formulario
    document.getElementById('comment').value = '';
    
    // Agregar evento click al botón de "Me gusta"
    const btnMeGusta = nuevaPublicacion.querySelector('.btn');
    const contadorMeGusta = nuevaPublicacion.querySelector('.contador');
    let numMeGusta = 0;
    let haDadoMeGusta = false;
    btnMeGusta.addEventListener('click', () => {
        if (!haDadoMeGusta) {
            // Aumentar el contador de "Me gusta"
            numMeGusta++;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.add('active');
            haDadoMeGusta = true;
        } else {
            // Disminuir el contador de "Me gusta"
            numMeGusta--;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.remove('active');
            haDadoMeGusta = false;
        }
    });
});