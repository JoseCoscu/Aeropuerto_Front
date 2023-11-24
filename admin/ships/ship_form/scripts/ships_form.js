const createShip = async (ship) => {
    try {
      const response = await fetch('http://localhost:1234/ship', {
        method: 'POST',
        body: JSON.stringify(ship),
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
  const updateShip = async (ship, id) => {
    try {
      const response = await fetch(`http://localhost:1234/ship/${id}`, {
        method: 'PUT',
        body: JSON.stringify(ship),
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


const ship_form = document.querySelector("#ship_form")
ship_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const name = document.querySelector('#name').value
    const status = document.querySelector('#status').value
    const capacity = document.querySelector('#capacity').value
    const numberCrews = document.querySelector('#crew').value
    const totalPlazas = document.querySelector('#total_seats').value
    const owner = document.querySelector('#owner').value
    const classification = document.querySelector('#classification').value

    const ship = { name, status, capacity, numberCrews, totalPlazas, owner, classification}
    const id_ship = document.querySelector('#idShip').value
    console.log(ship)
    if (button_type === 'Create') {
      const response = await createShip(ship)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateShip(ship, id_ship)
      if (response === true) {
        window.close()
      }
    }
  })