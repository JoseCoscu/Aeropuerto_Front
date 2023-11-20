export const content = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario Cliente</title>
    <link rel="stylesheet" href="./client_form/css/styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Formulario</h1>
      <form id="client_form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div class="form-group">
          <label for="nacionalidad">Nacionalidad:</label>
          <input type="text" id="nacionalidad" name="nacionalidad" />
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
        <input type="submit" value="Crear" />
      </form>
    </div>
    <script src="./client_form/script/client_form.js"></script>
  </body>
</html>`;
