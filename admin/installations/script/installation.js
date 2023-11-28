const deletClientType = async (id) => {
    const response = fetch(`http://localhost:1234/installation/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const table_clientsTypes = document.querySelector('#installations_table')
  table_clientsTypes.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('edit_button')) {
        const id_clientType = button.value
        const row = Array.from(button.closest('tr').cells)
        const clientType_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) clientType_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Formulario Tipo de Cliente', 'width=700,height=500')
        const content = await getContent('./installationForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content

        console.log(clientType_data)
  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#name').setAttribute('value', clientType_data['name'])
        temporal.querySelector('#location').setAttribute('value', clientType_data['location'])
        temporal.querySelector('#idAirport').setAttribute('value', clientType_data['idAirport'])
        temporal.querySelector('#installationType').setAttribute('value', clientType_data['idInstallationType'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idInstallation').setAttribute('value', id_clientType)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_clientType = button.value
        const response = await deletClientType(id_clientType)
        location.reload()
        console.log(response)
      }
    }
  })
  