const deletClient = async (id) => {
  const response = fetch(`http://localhost:1234/clients/${id}`, {
    method: 'DELETE'
  })
  return response.ok
}

const table_clients = document.querySelector('#clients_table')
table_clients.addEventListener('click', async (event) => {
  if (event.target.type === 'submit') {
    const button = event.target
    if (event.target.classList.contains('edit_button')) {
      const id_client = button.value
      const row = Array.from(button.closest('tr').cells)
      const client_data = {}
      row.forEach((x) => {
        const attr = x.getAttribute('name')
        const value = x.textContent
        if (attr !== null) client_data[attr] = value
      })
      const ventanaPopup = window.open('', 'Formulario Cliente', 'width=700,height=500')
      const content = await getContent('./client_form/index.html')

      const temporal = document.createElement('div')
      temporal.innerHTML = content

      // Modificas los valores de los campos específicos
      temporal.querySelector('#name').setAttribute('value', client_data['name'])
      temporal.querySelector('#username').setAttribute('value', client_data['username'])
      temporal.querySelector('#password').setAttribute('value', '')
      temporal.querySelector('#nacionalidad').setAttribute('value', client_data['nationality'])
      temporal.querySelector('#clienttype').setAttribute('value', client_data['idClientType'])
      temporal.querySelector('#create-update').setAttribute('value', 'Edit')
      temporal.querySelector('#idClient').setAttribute('value', id_client)

      const contenidoModificado = temporal.innerHTML

      // Escribir el contenido en la nueva ventana emergente
      ventanaPopup.document.write(contenidoModificado)
    }
    if (event.target.classList.contains('delete_button')) {
      const id_client = button.value
      const response = await deletClient(id_client)
      location.reload()
      console.log(response)
    }
  }
})


function  clientsFromTable() {
  const clients = [];
  const ctable = document.getElementById('clients_table');
  const rows = ctable.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    
   
      const cliente = {
        id: cells[0].innerText,
        clientType: cells[1].innerText,
        nombre: cells[2].innerText,
        username: cells[3].innerText,
        nationality: cells[4].innerText
       
      };
      
      clients.push(cliente);
    
  }
  
  return clients;
}

function sortBy(columnIndex) {
  const clientes = clientsFromTable();

  clientes.sort((a, b) => {
    const valueA = Object.values(a)[columnIndex];
    const valueB = Object.values(b)[columnIndex];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB);
    } else {
      return valueA - valueB;
    }
  });

updateCtable(clientes)
}


function updateCtable(clientes) {
  const tableBody = document.getElementById('clients_table').getElementsByTagName('tbody')[0]
  tableBody.innerHTML = ''

  clientes.forEach(cliente => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td name='id'>${cliente.id}</td>
      <td name = 'idClientType'>${cliente.clientType}</td>
      <td name = 'name'>${cliente.nombre}</td>
      <td name = 'username'>${cliente.username}</td>
      <td name = 'nationality'>${cliente.nationality}</td>
      <td>
        <button class = "boton edit_button" value = ${cliente.id}>Edit</button>
        <button class = "boton delete_button" value =${cliente.id}>Delete</button>
      </td>
    `
    tableBody.appendChild(row);
  });
}


const searchInput = document.getElementById('searchInput');
const dropdownContent = document.getElementById('dropdownContent');


searchInput.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');

});

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', buscarClientes)

function buscarClientes() {
  clientes=clientsFromTable()
  const searchTerm = searchInput.value.toLowerCase();
  
  const resultados = clientes.filter(cliente =>
    cliente.nombre.toLowerCase().includes(searchTerm) || cliente.username.toLowerCase().includes(searchTerm)
  )
  updateCtable(resultados)
}
