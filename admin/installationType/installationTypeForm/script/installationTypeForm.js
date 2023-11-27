const createInstallationType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/installationType', {
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
  const updateInstallationType = async (clientType, id) => {
    try {
      const response = await fetch(`http://localhost:1234/installationType/${id}`, {
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
    const name = document.querySelector('#name').value
    const clientType = {name}
    const id_clientType = document.querySelector('#idClientType').value
    console.log(clientType)
    if (button_type === 'Create') {
      const response = await createInstallationType(clientType)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateInstallationType(clientType, id_clientType)
      if (response === true) {
        window.close()
      }
    }
  })
  