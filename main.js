let parrafo = document.querySelector(".section-uno p");

let boton = document.querySelector(".cambiar-estilo");

const HTMLRespuesta = document.querySelector(".parrafo-api");

/* Manera pro Con función anonima 

boton.addEventListener("click", () => parrafo.textContent = 'Esto es una prueba para ver que tal se ve lo que estoy haciendo.'); */

/* -- Esta es la forma más newbe -- */
function CambiarStilo() {
  parrafo.textContent =
    "Esto es una prueba para ver que tal se ve lo que estoy haciendo.";
}

boton.addEventListener("click", CambiarStilo);

//Consumo satisfactorio de API
fetch("https://localhost:7137/Pais/All-pais")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((pais) => {
    const plantilla = pais
      .map((p) => `<li>${p.nombre} - ${p.capital} - ${p.gentilicio}</li>`)
      .join("<br>");
    HTMLRespuesta.innerHTML = `<ul>${plantilla}</ul>`;
  })
  .catch((error) => {
    console.error("Error al consumir la API:", error);
    HTMLRespuesta.textContent =
      "Hubo un error al cargar los datos. Por favor, intenta nuevamente.";
  });



/* -- Esto modifica el elemento p y lo transforma en una lista -- 

.then((pais) => {
    const plantilla = pais
      .map((p) => `<li>${p.nombre} - ${p.capital} - ${p.gentilicio}</li>`)
      .join("<br>");
    HTMLRespuesta.innerHTML = `<ul>${plantilla}</ul>`;
  })

*/ 
  /* -- Metodo para obtener el API en el elemento creado en HTML --
  
  .then((pais) => {
    const plantilla = pais
      .map((p) => `${p.nombre} - ${p.capital} - ${p.gentilicio}`)
      .join("<br>");
    HTMLRespuesta.innerHTML = plantilla;

  */