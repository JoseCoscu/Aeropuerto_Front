const deletClassification = async (id) => {
    const response = fetch(`http://localhost:1234/classificationShip/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const table_clientsTypes = document.querySelector('#classification_table')
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
        const ventanaPopup = window.open('', 'Formulario Clasificaciones de Aviones', 'width=700,height=500')
        const content = await getContent('./classificationsForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#name').setAttribute('value', clientType_data['name'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idClassification').setAttribute('value', id_clientType)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_clientType = button.value
        const response = await deletClassification(id_clientType)
        location.reload()
        console.log(response)
      }
    }
  })
  