const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#implications_table tbody')
const refresh_button = document.querySelector('#refresh')

const refreshPassengers = async (event) => {
  const passengers = await get_passengers()

  const rows = passengers
    .map((passengers) => {
      const { ship1, startDate1, ship2, startDate2 } = passengers
      const id = { ship1, startDate1, ship2, startDate2 }
      const _dateS = startDate1.substring(0, 10)
      const _dateF = startDate2.substring(0, 10)
      const _id = JSON.stringify(id)
      return `<tr>
              <td name = 'ship1'>${ship1}</td>
              <td name = 'startDate1'>${startDate1}</td>
              <td name = 'ship2'>${ship2}</td>
              <td name = 'startDate2'>${startDate2}</td>
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
    const result = await fetch('http://localhost:1234/implication', {
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
