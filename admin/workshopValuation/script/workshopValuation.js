const deletPassenger = async (id) => {
    const response = await fetch(
      `http://localhost:1234/workshop/?shipOld=${id.ship}&dateOld=${new Date(id.date).toISOString()}&client=${id.client}`,
      {
        method: 'DELETE'
      }
    )
    return response.ok
  }
  
  const Cservice_table = document.querySelector('#workshopV_table')
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
        const ventanaPopup = window.open('', 'Formulario Evaluacion Taller', 'width=500,height=800')
        const content = await getContent('./workshopVForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content
        

        // Modificas los valores de los campos específicos
        temporal.querySelector('#idShip').setAttribute('value', passenger_data['ship'])
        temporal.querySelector('#date').setAttribute('value', passenger_data['date'])
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
  