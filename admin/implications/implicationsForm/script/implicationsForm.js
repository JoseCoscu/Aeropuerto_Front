const createCservice = async (Cservice) => {
    try {
      const response = await fetch('http://localhost:1234/implication', {
        method: 'POST',
        body: JSON.stringify(Cservice),
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
  const updateCservice = async (Cservice, id) => {
    try {
      const response = await fetch(
        `http://localhost:1234/implication/?service=${id.service}&date=${id.date}&client=${id.client}`,
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

    const ship1 = document.querySelector('#idShip1').value
    const startDate1 = new Date(document.querySelector('#date1').value).toISOString()
    const ship2 = document.querySelector('#idShip2').value
    const startDate2 = document.querySelector('#date2').value

    const Cservice = { ship1, startDate1, ship2, startDate2 }
    
  
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
  