const createClient = async (client) => {
    try {
      const response = await fetch('http://localhost:1234/airport', {
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
      const response = await fetch(`http://localhost:1234/airport/${id}`, {
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
  
  const client_form = document.querySelector('#airPort_form')
  client_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const name = document.querySelector('#name').value
    const geoPos = document.querySelector('#geoPos').value
    const direccion = document.querySelector('#address').value
    
    const client = { name, geoPos, direccion }
    console.log(client)
    const id_client = document.querySelector('#idAirPort').value
    console.log(client)
    if (button_type === 'Create') {
      const response = await createClient(client)
      console.log(response)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const response = await updateClient(client, id_client)
      if (response === true) {
        window.close()
      }
    }
  })
  