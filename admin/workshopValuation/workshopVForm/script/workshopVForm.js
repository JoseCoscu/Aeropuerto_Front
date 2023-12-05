const createCservice = async (workshop) => {
    try {
      const response = await fetch('http://localhost:1234/valuationReparation', {
        method: 'POST',
        body: JSON.stringify(workshop),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(await response.json())
      return response.ok
    } catch (err) {
      console.log(err)
      return false
    }
  }
  const updateCservice = async (workshop, id) => {
    try {
        console.log(workshop,id.ship)
      const response = await fetch(
        `http://localhost:1234/valuationReparation/?shipOld=${id.ship}&dateOld=${id.date}`,
        {
          method: 'PUT',
          body: JSON.stringify(workshop),
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
  
  const passenger_form = document.querySelector('#wsReparationForm')
  passenger_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button_type = document.querySelector('#create-update').value
    const ship = document.querySelector('#idShip').value
    const date = new Date(document.querySelector('#date').value).toISOString()
    const valuation = document.querySelector('#valuation').value
    const Cservice = { ship, date, valuation }
    
  
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
  