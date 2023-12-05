const deletPassenger = async (id) => {
    const response = await fetch(
      `http://localhost:1234/workshop/?ship=${id.ship}&startDate=${new Date(id.startDate).toISOString()}&client=${id.client}`,
      {
        method: 'DELETE'
      }
    )
    return response.ok
  }
  
  const Cservice_table = document.querySelector('#workshop_table')
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
        const ventanaPopup = window.open('', 'Formulario Taller', 'width=500,height=800')
        const content = await getContent('./workshopForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
        

        // Modificas los valores de los campos específicos
        temporal.querySelector('#idShip').setAttribute('value', passenger_data['ship'])
        temporal.querySelector('#startDate').setAttribute('value', passenger_data['starDate'])
        temporal.querySelector('#endDate').setAttribute('value', passenger_data['endDate'])
        temporal.querySelector('#idReparation').setAttribute('value', passenger_data['idReparation'])
        temporal.querySelector('#time').setAttribute('value', passenger_data['time'])
        temporal.querySelector('#increment').setAttribute('value', passenger_data['increment'])
        temporal.querySelector('#discount').setAttribute('value', passenger_data['discount'])
        temporal.querySelector('#status').setAttribute('value', passenger_data['status'])

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
  