const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#workshopV_table tbody')
const refresh_button = document.querySelector('#refresh')

const refreshPassengers = async (event) => {
  const passengers = await get_passengers()

  const rows = passengers
    .map((passengers) => {
      const { ship, date, valuation, } = passengers
      const id = { ship, date }
      const _dateS = date.substring(0, 10)
      const _id = JSON.stringify(id)
      return `<tr>
              <td name = 'ship'>${ship}</td>
              <td name = 'date'>${_dateS}</td>
              <td name = 'valuation'>${valuation}</td>
              <td><button class = "boton edit_button" value = ${_id}>Edit</button>
              <button class = "boton delete_button" value = ${_id}>Delete</button></td>
            </tr>`
    })
    .join('')
  table.innerHTML = rows
}

window.addEventListener('DOMContentLoaded', refreshPassengers)
refresh_button.addEventListener('click', refreshPassengers)

const get_passengers = async () => {
  try {
    const result = await fetch('http://localhost:1234/valuationReparation', {
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
