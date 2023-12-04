const createCservice = async (workshop) => {
    try {
      const response = await fetch('http://localhost:1234/workshop', {
        method: 'POST',
        body: JSON.stringify(workshop),
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
  const updateCservice = async (workshop, id) => {
    try {
      const response = await fetch(
        `http://localhost:1234/workshop/?service=${id.service}&date=${id.date}&client=${id.client}`,
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
    const startDate = new Date(document.querySelector('#startDate').value).toISOString()
    const finalDate = new Date( document.querySelector('#endDate').value).toISOString()
    const idReparation = document.querySelector('#idReparation').value
    const time = document.querySelector('#time').value
    const increase = document.querySelector('#increment').value
    const discount = document.querySelector('#discount').value
    const status = document.querySelector('#status').value
    const Cservice = { ship, startDate, finalDate, idReparation, time, increase, discount, status }
    
  
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
  