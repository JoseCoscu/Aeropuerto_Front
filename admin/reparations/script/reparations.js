const deletClient = async (id) => {
    const response = await fetch(`http://localhost:1234/reparation/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const table_clients = document.querySelector('#reparations_table')
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
        const ventanaPopup = window.open('', 'Formulario Reparaciones', 'width=500,height=800')
        const content = await getContent('./reparationsForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
        console.log(client_data)
        // Modificas los valores de los campos específicos
        temporal.querySelector('#description').setAttribute('value', client_data['description'])
        temporal.querySelector('#price').setAttribute('value', client_data['priceHour'])
        temporal.querySelector('#idReparationType').setAttribute('value', client_data['idReparationType'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idReparation').setAttribute('value', id_client)
  
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
  