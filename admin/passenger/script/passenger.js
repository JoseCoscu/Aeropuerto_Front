const deletPassenger = async (id) => {
  const response = await fetch(
    `http://localhost:1234/passenger/?shipOld=${id.ship}&dateOld=${id.date}&idClientOld=${id.idClient}`,
    {
      method: 'DELETE'
    }
  )
  return response.ok
}

const table_passenger = document.querySelector('#passenger_table')
table_passenger.addEventListener('click', async (event) => {
  if (event.target.type === 'submit') {
    const button = event.target
    if (event.target.classList.contains('edit_button')) {
      const id_passenger = JSON.stringify(button.value)
      const row = Array.from(button.closest('tr').cells)
      const passenger_data = {}
      row.forEach((x) => {
        const attr = x.getAttribute('name')
        const value = x.textContent
        if (attr !== null) passenger_data[attr] = value
      })
      const ventanaPopup = window.open('', 'Formulario Pasajero', 'width=700,height=500')
      const content = await getContent('./passengerForm/index.html')

      const temporal = document.createElement('div')
      temporal.innerHTML = content

      // Modificas los valores de los campos específicos
      temporal.querySelector('#ship').setAttribute('value', passenger_data['ship'])
      temporal.querySelector('#date').setAttribute('value', passenger_data['date'])
      temporal.querySelector('#idClient').setAttribute('value', passenger_data['idClient'])
      temporal.querySelector('#idClientType').setAttribute('value', passenger_data['idClientType'])

      temporal.querySelector('#create-update').setAttribute('value', 'Edit')
      temporal.querySelector('#idPassenger').setAttribute('value', id_passenger)

      const contenidoModificado = temporal.innerHTML

      // Escribir el contenido en la nueva ventana emergente
      ventanaPopup.document.write(contenidoModificado)
    }
    if (event.target.classList.contains('delete_button')) {
      const id_passenger = await JSON.parse(button.value)
      const response = await deletPassenger(id_passenger)
      location.reload()
    }
  }
})
