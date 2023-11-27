const deletPassengerType = async (id) => {
    const response = fetch(`http://localhost:1234/passengerType/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const installationsType_table = document.querySelector('#passengerType_table')
  installationsType_table.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('edit_button')) {
        const id_installationsType = button.value
        const row = Array.from(button.closest('tr').cells)
        const installationsType_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) installationsType_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Formulario Tipo de Pasajero', 'width=600,height=800')
        const content = await getContent('./passengerTypeForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#name').setAttribute('value', installationsType_data['name'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idPassengerType').setAttribute('value', id_installationsType)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_clientType = button.value
        const response = await deletPassengerType(id_clientType)
        location.reload()
        console.log(response)
      }
    }
  })
  