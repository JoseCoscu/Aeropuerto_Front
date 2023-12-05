// Obtener el botón y el formulario por su ID
const botonAbrir = document.getElementById("create_airport");
const formulario = document.getElementById("wizardForm");
const getContent = async (path) => {
  try {
    const response = await fetch(path);
    const content = await response.text();
    return content;
  } catch (e) {
    console.error(e);
  }
};
// Agregar un evento de clic al botón
botonAbrir.addEventListener("click", async function () {
  // Mostrar u ocultar el formulario al hacer clic en el botón
  const ventanaPopup = window.open("", "Formulario Aeropuerto", "width=600,height=800");

  const content = await getContent("./airPortForm/index.html");

  // Escribir el contenido en la nueva ventana emergente
  ventanaPopup.document.write(content);
});
