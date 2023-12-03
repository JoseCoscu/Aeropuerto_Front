const createCservice = async (Cservice) => {
    try {
      const response = await fetch('http://localhost:1234/contractService', {
        method: 'POST',
        body: JSON.stringify(Cservice),
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
  const updateCservice = async (Cservice, id) => {
    try {
      const response = await fetch(
        `http://localhost:1234/contractService/?service=${id.service}&date=${id.date}&client=${id.client}`,
        {
          method: 'PUT',
          body: JSON.stringify(Cservice),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const msg = await response.json()
      console.log(msg)
      return response.ok
    } catch (err) {
      console.log(err)
      return false
    }
  }
  
  const passenger_form = document.querySelector('#contractServiceForm')
  passenger_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const service = document.querySelector('#idService').value
    const date = new Date(document.querySelector('#date').value).toISOString()
    const client = document.querySelector('#idClient').value
    const valuation = document.querySelector('#valuation').value
    const Cservice = { service, date, client, valuation }
    
  
    if (button_type === 'Create') {
      const response = await createCservice(Cservice)
      if (response === true) {
        window.close()
      }
    }
    if (button_type === 'Edit') {
      const id_Cservice = JSON.parse(document.querySelector('#idCSevice').value)
      const id = JSON.parse(id_Cservice)
      const response = await updateCservice(Cservice, id)
      if (response === true) {
        window.close()
      }
    }
  })
  