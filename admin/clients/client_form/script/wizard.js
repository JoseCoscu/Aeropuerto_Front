// Obtener el botón y el formulario por su ID
const botonAbrir = document.getElementById('create_client');
const formulario = document.getElementById('wizardForm');

// Agregar un evento de clic al botón
botonAbrir.addEventListener('click', function() {
  // Mostrar u ocultar el formulario al hacer clic en el botón
  console.log("clikkkk")
  const ventanaPopup = window.open('', '_blank', 'width=700,height=500');

  const contenidoPopup = `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario Cliente</title>
 <style>
 body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #55da5b; /* Verde claro */
  }
  
  .container {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left; /* Alineación a la izquierda */
    width: 70%; /* Ancho del formulario */
    max-width: 600px; /* Ancho máximo */
    margin: 0 auto; /* Centrar el formulario */
  }
  
  h1 {
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }
  
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box; /* Incluir el padding en el ancho total */
  }
  
  input[type="submit"] {
    background-color: #4CAF50; /* Color verde */
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049; /* Color verde más oscuro al pasar el mouse */
  }
  
 </style>
</head>
<body>
  <div class="container">
    <h1>Nuevo Cliente</h1>
    <form>
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id">
      </div>
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username">
      </div>
      <div class="form-group">
        <label for="nacionalidad">Nacionalidad:</label>
        <input type="text" id="nacionalidad" name="nacionalidad">
      </div>
      <div class="form-group">
        <label for="clienttype">Tipo de Cliente:</label>
        <select id="clienttype" name="clienttype">
          <option value="regular">Regular</option>
          <option value="premium">Premium</option>
          <option value="vip">VIP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="notas">Notas:</label>
        <textarea id="notas" name="notas" rows="4"></textarea>
      </div>
      <input type="submit" value="Enviar">
    </form>
  </div>
</body>
</html>

`;

// Escribir el contenido en la nueva ventana emergente
ventanaPopup.document.write(contenidoPopup);

});
