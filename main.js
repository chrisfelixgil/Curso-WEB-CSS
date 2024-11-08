let parrafo = document.querySelector('.section-uno p');

let boton = document.querySelector('.cambiar-estilo');

/* Manera pro Con función anonima 

boton.addEventListener("click", () => parrafo.textContent = 'Esto es una prueba para ver que tal se ve lo que estoy haciendo.'); */

/* -- Esta es la forma más newbe -- */
function CambiarStilo()
{
    parrafo.textContent = 'Esto es una prueba para ver que tal se ve lo que estoy haciendo.';
    let limpiar = document.querySelector('.cambiar-estilo');
    limpiar.innerHTML = "<button>Limpiar</button>";
    
};

boton.addEventListener("click", CambiarStilo);

//Consumo satisfactorio de API
fetch("https://localhost:7137/Pais/All-pais")
    .then(res => res.json())
    .then(Response => console.log(Response))



    
