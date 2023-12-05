const createClientType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/reparation', {
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
    console.log(id)
    try {
      const response = await fetch(`http://localhost:1234/reparation/${id}`, {
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
  
  const clientType_form = document.querySelector('#reparation_form')
  clientType_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const description = document.querySelector('#description').value
    const priceHour = document.querySelector('#price').value
    const idReparationType = document.querySelector('#idReparationType').value
    const idInstalation = document.querySelector('#idInstallation').value
    const clientType = {description,priceHour,idReparationType,idInstalation}
    const id_passenger = document.querySelector('#idReparation').value
    console.log(clientType)
    
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
  