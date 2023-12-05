const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";
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


writeTable()

const client_id=localStorage.getItem('client_id')

function writeTable(){
 window.addEventListener('DOMContentLoaded',async (event)=>{
  const ships  = await get_ships()
  const table = document.querySelector("#ships_table tbody")
  
  const rows = ships.map(ship => {
    const {id, name, status, capacity,numberCrews,totalPlazas,owner,classification} = ship 

    if (client_id!=owner){

    }
    else{
      return `<tr>
              <td name = 'id'>${id}</td>
              <td name = 'name'>${name}</td>
              <td name = 'status'>${status}</td>
              <td name = 'capacity'>${capacity}</td>
              <td name = 'numberCrews'>${numberCrews}</td>
              <td name = 'totalPlazas'>${totalPlazas}</td>
              <td name = 'classification'>${classification}</td>
              <td>
              <button class = "boton edit_button" value = ${id}>Solicitar Reparacion</button>
              </td>
              </tr>`  
    }
    
  }).join('')
  table.innerHTML = rows;

}) 
}

