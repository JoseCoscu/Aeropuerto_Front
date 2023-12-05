const createClient = async (client) => {
    try {
      const response = await fetch('http://localhost:1234/installation', {
        method: 'POST',
        body: JSON.stringify(client),
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
  const updateClient = async (client, id) => {
    try {
      const response = await fetch(`http://localhost:1234/installation/${id}`, {
        method: 'PUT',
        body: JSON.stringify(client),
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
  
  const client_form = document.querySelector('#installation_form')
  client_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const name = document.querySelector('#name').value
    const location = document.querySelector('#location').value
    const idTypeInst = document.querySelector('#installationType').value
    const idAirport = document.querySelector('#idAirport').value
    const id_client = document.querySelector('#idInstallation').value

    const installation ={name,location,idTypeInst,idAirport}
   
    if (button_type === 'Create') {
      const response = await createClient(installation)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateClient(installation, id_client)
      if (response === true) {
        window.close()
      }
    }
  })
  