const createPassenger = async (passenger) => {
  try {
    const response = await fetch('http://localhost:1234/passenger', {
      method: 'POST',
      body: JSON.stringify(passenger),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.ok
  } catch (err) {
    console.log(err)
    return false
  }
}
const updatePassenger = async (passenger, id) => {
  try {
    const response = await fetch(
      `http://localhost:1234/passenger/?shipOld=${id.ship}&dateOld=${id.date}&idClientOld=${id.idClient}`,
      {
        method: 'PUT',
        body: JSON.stringify(passenger),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.ok
  } catch (err) {
    console.log(err)
    return false
  }
}

const passenger_form = document.querySelector('#passenger_form')
passenger_form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const button_type = document.querySelector('#create-update').value
  const ship = document.querySelector('#ship').value
  const date = document.querySelector('#date').value
  const idClient = document.querySelector('#idClient').value
  const idPassengerType = document.querySelector('#idClientType').value
  const passenger = { ship, date, idClient, idPassengerType }
  const id_passenger = JSON.parse(document.querySelector('#idPassenger').value)

  if (button_type === 'Create') {
    const response = await createPassenger(passenger)
    if (response === true) {
      window.close()
    }
  }
  if (button_type === 'Edit') {
    const id = JSON.parse(id_passenger)
    const response = await updatePassenger(passenger, id)
    if (response === true) {
      window.close()
    }
  }
})
