const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#cService_table tbody')
const refresh_button = document.querySelector('#refresh')
const get_passengers = async () => {
    try {
      const result = await fetch('http://localhost:1234/contractService', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + encodeURIComponent(token),
          'Content-Type': 'application/json'
        }
      })
      const passengers = await result.json()
      return passengers
    } catch (error) {
      console.error(error)
    }
  }

const client_id=localStorage.getItem('client_id')

const refreshPassengers = async (event) => {
  const passengers = await get_passengers()

  const rows = passengers
    .map((passengers) => {
      const { service, client, date, valuation } = passengers
      const id = { service, date, client }
      if (client_id!=client) {
        
      }
      else{
        const _datef = date.substring(0, 10)
      const _id = JSON.stringify(id)
      return `<tr>
              <td name = 'service'>${service}</td>
              <td name = 'client'>${client}</td>
              <td name = 'date'>${_datef}</td>
              <td name = 'valuation'>${valuation}</td>
              <td><button  name = 'rateBtn'  class="dropbtn rate" value = ${_id}>Edit</button>
            </tr>`

      }
      
    })
    .join('')
  table.innerHTML = rows
}

window.addEventListener('DOMContentLoaded', refreshPassengers)


