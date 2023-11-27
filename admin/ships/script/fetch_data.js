const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";
writeTable()

function writeTable(){
 window.addEventListener('DOMContentLoaded',async (event)=>{
  const ships  = await get_ships()
  const table = document.querySelector("#ships_table tbody")
  
  const rows = ships.map(ship => {
    const {id, name, status, capacity,numberCrews,totalPlazas,owner,classification} = ship 
    return `<tr>
              <td name = 'id'>${id}</td>
              <td name = 'name'>${name}</td>
              <td name = 'status'>${status}</td>
              <td name = 'capacity'>${capacity}</td>
              <td name = 'numberCrews'>${numberCrews}</td>
              <td name = 'totalPlazas'>${totalPlazas}</td>
              <td name = 'owner'>${owner}</td>
              <td name = 'classification'>${classification}</td>
              <td>
              <button class = "boton edit_button" value = ${id}>Edit</button>
              <button class = "boton delete_button" value =${id}>Delete</button>
              </td>
              </tr>`
  }).join('')
  table.innerHTML = rows;

}) 
}


const refresh = document.querySelector('#refresh')
refresh.addEventListener('click', async(event)=>{
  location.reload()
})


const get_ships = async () =>{

  try {
    const result = await fetch("http://localhost:1234/ship", {
    method: "GET",
    headers: { 
      "Authorization" : "Bearer " + encodeURIComponent(token),
      "Content-Type": "application/json"
    },
    })
    const ships = await result.json()
    return ships
  }
  catch(error){
    console.error(error)
  }
} 