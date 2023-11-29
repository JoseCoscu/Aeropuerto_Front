const createClientType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/service', {
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
      const response = await fetch(`http://localhost:1234/service/${id}`, {
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
  
  const clientType_form = document.querySelector('#service_form')
  clientType_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const description = document.querySelector('#description').value
    const price = document.querySelector('#price').value
    const idInstalation = document.querySelector('#idInstallation').value
    const clientType = {description,price,idInstalation}
    const id_passenger = document.querySelector('#idService').value
    
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
  