const createReparationType = async (clientType) => {
    try {
      const response = await fetch('http://localhost:1234/reparationType', {
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
  const updateReparationType = async (clientType, id) => {
    try {
      const response = await fetch(`http://localhost:1234/reparationType/${id}`, {
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
  
  const clientType_form = document.querySelector('#reparationType_form')
  clientType_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const name = document.querySelector('#name').value
    const clientType = {name}
    const id_clientType = document.querySelector('#idReparationType').value
    console.log(clientType)
    if (button_type === 'Create') {
      const response = await createReparationType(clientType)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateReparationType(clientType, id_clientType)
      if (response === true) {
        window.close()
      }
    }
  })
  