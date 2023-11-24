const deletShip = async (id) => {
    const response = fetch(`http://localhost:1234/ship/${id}`, {
      method: 'DELETE'
    })
    return response.ok
  }
  
  const ship_table = document.querySelector('#ships_table')
  ship_table.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('edit_button')) {
        const id_ship = button.value
        const row = Array.from(button.closest('tr').cells)
        const ship_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) ship_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Formulario Avion', 'width=700,height=500')
        const content = await getContent('./ship_form/index.html')
  
        const temporal = document.createElement('div')
        temporal.innerHTML = content

        console.log(ship_data)
  
        // Modificas los valores de los campos específicos
        temporal.querySelector('#name').setAttribute('value', ship_data['name'])
        temporal.querySelector('#status').setAttribute('value', ship_data['status'])
        temporal.querySelector('#capacity').setAttribute('value', ship_data['capacity'])
        temporal.querySelector('#crew').setAttribute('value', ship_data['numberCrews'])
        temporal.querySelector('#total_seats').setAttribute('value', ship_data['totalPlazas'])
        temporal.querySelector('#owner').setAttribute('value', ship_data['owner'])
        temporal.querySelector('#classification').setAttribute('value', ship_data['classification'])
        temporal.querySelector('#create-update').setAttribute('value', 'Edit')
        temporal.querySelector('#idShip').setAttribute('value', id_ship)
  
        const contenidoModificado = temporal.innerHTML
  
        // Escribir el contenido en la nueva ventana emergente
        ventanaPopup.document.write(contenidoModificado)
      }
      if (event.target.classList.contains('delete_button')) {
        const id_ship = button.value
        const response = await deletShip(id_ship)
        location.reload()
        console.log(response)
      }
    }
  })
  