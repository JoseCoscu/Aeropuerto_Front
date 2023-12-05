const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI'
const table = document.querySelector('#reparations_table tbody')
const refresh_button = document.querySelector('#refresh')


const refreshClients = async (event) => {
  const clients = await get_client()
  const rows = clients
    .map((client) => {
      const { id, description, priceHour, idReparationType,idInstalation } = client
      return `<tr>
              <td name = 'id'>${id}</td>
              <td name = 'description'>${description}</td>
              <td name = 'priceHour'>${priceHour}</td>
              <td name = 'idReparationType'>${idReparationType}</td>
              <td name = 'idInstallation'>${idInstalation}</td>
              <td>
              <button class = "boton edit_button" value = ${id}>Edit</button>
              <button class = "boton delete_button" value =${id}>Delete</button>
              </td>
            </tr>`
    })
    .join('')
  table.innerHTML = rows
}
const get_client = async () => {
  try {
    const result = await fetch('http://localhost:1234/reparation', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + encodeURIComponent(token),
        'Content-Type': 'application/json'
      }
    })
    const clients = await result.json()
    return clients
  } catch (error) {
    console.error(error)
  }
}
refreshClients()