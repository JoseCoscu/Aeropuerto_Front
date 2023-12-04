  const table_clients = document.querySelector('#services_table')
  table_clients.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('reserve_button')) {
        const id_client = button.value
        const row = Array.from(button.closest('tr').cells)
        const client_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) client_data[attr] = value
        })
      
      const service = client_data['id']
      const date = new Date().toISOString()
      const client = client_id
      const valuation = null
      const Cservice = { service, date, client, valuation }
      console.log(Cservice)
      createCservice(Cservice)
      }
    }
  })
const client_id="1"




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

