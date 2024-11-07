let parrafo = document.querySelector('.section-uno p');

let boton = document.querySelector('.cambiar-estilo');

/* -- Esta es la forma más newbe --
function CambiarStilo()
{
    parrafo.textContent = 'Esto es una prueba para ver que tal se ve lo que estoy haciendo.';
};

boton.addEventListener("click", CambiarStilo);  */

/* Manera pro Con función anonima */

boton.addEventListener("click", () => parrafo.textContent = 'Esto es una prueba para ver que tal se ve lo que estoy haciendo.');