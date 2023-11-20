// Obtener el botón y el formulario por su ID
import { content } from "../index.js";
const botonAbrir = document.getElementById("create_client");
const formulario = document.getElementById("wizardForm");

// Agregar un evento de clic al botón
botonAbrir.addEventListener("click", async function () {
  // Mostrar u ocultar el formulario al hacer clic en el botón
  const ventanaPopup = window.open("", "", "width=700,height=500");

  console.log(content);

  // Escribir el contenido en la nueva ventana emergente
  ventanaPopup.document.write(content);
});
