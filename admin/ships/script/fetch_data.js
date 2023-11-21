const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";


window.addEventListener('DOMContentLoaded',async (event)=>{
  const ships  = await get_ships()
  const table = document.querySelector("#ships_table tbody")
  
  const rows = ships.map(ship => {
    const {id, name, status, capacity,numberCrews,totalPlazas,owner,classification} = ship 
    return `<tr>
              <td>${id}</td>
              <td>${name}</td>
              <td>${status}</td>
              <td>${capacity}</td>
              <td>${numberCrews}</td>
              <td>${totalPlazas}</td>
              <td>${owner}</td>
              <td>${classification}</td>
              </tr>`
  }).join('')
  table.innerHTML = rows;

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