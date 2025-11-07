document.addEventListener("DOMContentLoaded", () => {
  crearGaleria();
  navegacionFija();
});

function navegacionFija() {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  window.addEventListener("scroll", () => {
    // La distancia que existe entre el header y sobreFestival
    // Los numeros se reducen hasta llegar a negativos que es cuando ya
    // pasamos la seccion sobreFestival
    // console.log(sobreFestival.getBoundingClientRect().bottom);
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function crearGaleria() {
  const cantidadImagenes = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= cantidadImagenes; i++) {
    const imagen = document.createElement("IMG");
    imagen.setAttribute("src", `src/img/gallery/full/${i}.jpg`);
    imagen.setAttribute("alt", "Imagen Galeria");

    // Event Handler
    imagen.onclick = () => {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.setAttribute("src", `src/img/gallery/full/${i}.jpg`);
  imagen.setAttribute("alt", "Imagen Galeria");

  // Generar modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  // Boton
  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("btn-cerar");
  cerrarModalBtn.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(cerrarModalBtn);

  //Agregar al HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}
