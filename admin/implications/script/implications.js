const deletPassenger = async (id) => {
    console.log(id)
    const response = await fetch(
        `http://localhost:1234/implication/?ship1=${id.ship1}&startDate1=${new Date(id.startDate1).toISOString()}&ship2=${id.ship2}&startDate2=${new Date(id.startDate2).toISOString()}`,
        
      {
        method: 'DELETE'
      }
    )
    console.log(await response.json)
    return response.ok
  }
  
  const Cservice_table = document.querySelector('#implications_table')
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
        const content = await getContent('./implicationsForm/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content

  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#idShip1').setAttribute('value', passenger_data['ship1'])
        temporal.querySelector('#date1').setAttribute('value', passenger_data['startDate1'])
        temporal.querySelector('#idShip2').setAttribute('value', passenger_data['ship2'])
        temporal.querySelector('#date2').setAttribute('value', passenger_data['startDate2'])
  
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
  