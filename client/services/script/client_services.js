  const table_clients = document.querySelector('#service_table')
  table_clients.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('reserve_button')) {
        const id_client = button.value
        const row = Array.from(button.closest('tr').cells)
        const client_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) client_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Formulario Servicio', 'width=500,height=800')
        const content = await getContent('./serviceForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
        console.log(client_data)
        // Modificas los valores de los campos específicos
        temporal.querySelector('#description').setAttribute('value', client_data['description'])
        temporal.querySelector('#price').setAttribute('value', client_data['price'])
        temporal.querySelector('#idInstallation').setAttribute('value', client_data['idInstalation'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idService').setAttribute('value', id_client)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      
    }
  })
  