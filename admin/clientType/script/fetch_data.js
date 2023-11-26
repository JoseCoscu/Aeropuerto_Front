const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#clientsType_table tbody')
const refresh_button = document.querySelector('#refresh')

const refreshClientsTypes = async (event) => {
  const clientsTypes = await get_clientTypes()

  const rows = clientsTypes
    .map((clientType) => {
      const { id, name} = clientType
      return `<tr>
              <td name = 'id'>${id}</td>
              <td name = 'name'>${name}</td>
              <td><button class = "boton edit_button" value = ${id}>Edit</button>
              <button class = "boton delete_button" value =${id}>Delete</button></td>
              
            </tr>`
    })
    .join('')
  table.innerHTML = rows
}

window.addEventListener('DOMContentLoaded', refreshClientsTypes)
refresh_button.addEventListener('click', refreshClientsTypes)

const get_clientTypes = async () => {
  try {
    const result = await fetch('http://localhost:1234/typeClient', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + encodeURIComponent(token),
        'Content-Type': 'application/json'
      }
    })
    const clientsTypes = await result.json()
    return clientsTypes
  } catch (error) {
    console.error(error)
  }
}
