const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#airport_table tbody')
const refresh_button = document.querySelector('#refresh')

const refreshAirports = async (event) => {
  const airports = await get_airports()
  const rows = airports
    .map((airport) => {
      const { id, name, geoPos, address } = airport
      console.log(address)
      return `<tr>
              <td name = 'id'>${id}</td>
              <td name = 'name'>${name}</td>
              <td name = 'geoPos'>${geoPos}</td>
              <td name = 'address'>${address}</td>
              <td><button class = "boton edit_button" value = ${id}>Edit</button>
              <button class = "boton delete_button" value =${id}>Delete</button></td>
            </tr>`
    })
    .join('')
  table.innerHTML = rows

}

window.addEventListener('DOMContentLoaded', refreshAirports)
refresh_button.addEventListener('click', refreshAirports)

const get_airports = async () => {
  try {
    const result = await fetch('http://localhost:1234/airport', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + encodeURIComponent(token),
        'Content-Type': 'application/json'
      }
    })
    const airports = await result.json()
    return airports
  } catch (error) {
    console.error(error)
  }
}
