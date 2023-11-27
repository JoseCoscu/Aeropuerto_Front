const createClientType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/classificationShip', {
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
      const response = await fetch(`http://localhost:1234/classificationShip/${id}`, {
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
  
  const clientType_form = document.querySelector('#classification_form')
  clientType_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const name = document.querySelector('#name').value
    const clientType = {name}
    const id_clientType = document.querySelector('#idClassification').value
    console.log(clientType)
    if (button_type === 'Create') {
      const response = await createClientType(clientType)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateClientType(clientType, id_clientType)
      if (response === true) {
        window.close()
      }
    }
  })
  