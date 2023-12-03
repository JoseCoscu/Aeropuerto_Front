const deletPassenger = async (id) => {
    const response = await fetch(
      `http://localhost:1234/contractService/?service=${id.service}&date=${new Date(id.date).toISOString()}&client=${id.client}`,
      {
        method: 'DELETE'
      }
    )
    return response.ok
  }
  
  const Cservice_table = document.querySelector('#cService_table')
  Cservice_table.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('edit_button')) {
        const id_Cservice = JSON.stringify(button.value)
        const row = Array.from(button.closest('tr').cells)
        const passenger_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) passenger_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Formulario Contrato de Servicio', 'width=700,height=500')
        const content = await getContent('./contractServiceForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#idService').setAttribute('value', passenger_data['service'])
        temporal.querySelector('#date').setAttribute('value', passenger_data['date'])
        temporal.querySelector('#idClient').setAttribute('value', passenger_data['idClient'])
        temporal.querySelector('#valuation').setAttribute('value', passenger_data['valuation'])
  
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idCSevice').setAttribute('value', id_Cservice)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_Cservice = await JSON.parse(button.value)
        const response = await deletPassenger(id_Cservice)
        location.reload()
      }
    }
  })
  