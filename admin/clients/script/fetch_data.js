const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";


window.addEventListener('DOMContentLoaded',async (event)=>{
  const clients  = await get_client()
  const table = document.querySelector("#clients_table tbody")
  
  const rows = clients.map(client => {
    const {id, idClientType, name, username, nationality} = client 
    return `<tr>
              <td>${id}</td>
              <td>${idClientType}</td>
              <td>${name}</td>
              <td>${username}</td>
              <td>${nationality}</td>
            </tr>`
  }).join('')
  table.innerHTML = rows;

})


const get_client = async () =>{

  try {
    const result = await fetch("http://localhost:1234/clients", {
    method: "GET",
    headers: { 
      "Authorization" : "Bearer " + encodeURIComponent(token),
      "Content-Type": "application/json"
    },
    })
    const clients = await result.json()
    return clients
  }
  catch(error){
    console.error(error)
  }
} 