const deletAirPort = async (id) => {
    const response = fetch(`http://localhost:1234/airport/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const table_clients = document.querySelector('#airport_table')
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
        const ventanaPopup = window.open('', 'Formulario Aeropuerto', 'width=700,height=500')
        const content = await getContent('./airportForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
        // Modificas los valores de los campos específicos
        temporal.querySelector('#name').setAttribute('value', client_data['name'])
        temporal.querySelector('#geoPos').setAttribute('value', client_data['geoPos'])
        temporal.querySelector('#address').setAttribute('value', client_data['address'])
        temporal.querySelector('#idAirPort').setAttribute('value', id_client)
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_client = button.value
        const response = await deletAirPort(id_client)
        location.reload()
        console.log(response)
      }
    }
  })
  