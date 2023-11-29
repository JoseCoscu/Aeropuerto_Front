const createClientType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/passenger', {
        method: 'POST',
        body: JSON.stringify(clientType),
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
  const updateClientType = async (clientType, id) => {
    try {
      const response = await fetch(`http://localhost:1234/passenger/${id}`, {
        method: 'PUT',
        body: JSON.stringify(clientType),
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
  
  const clientType_form = document.querySelector('#clientType_form')
  clientType_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const ship = document.querySelector('#ship').value
    const date = document.querySelector('#date').value
    const idClient = document.querySelector('#idClient').value
    const idPassengerType = document.querySelector('#idClientType').value
    const clientType = {ship,date,idClient,idPassengerType}
    const id_passenger = document.querySelector('#idPassenger').value
    
    if (button_type === 'Create') {
      const response = await createClientType(clientType)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateClientType(clientType, id_passenger)
      if (response === true) {
        window.close()
      }
    }
  })
  