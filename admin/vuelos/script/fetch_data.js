const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";

const refresh_button = document.querySelector('#refresh')

const refreshFlights = async (event)=>{
  const flights  = await get_flights()
  const table = document.querySelector("#flights_table tbody")
  
  const rows = flights.map(flight => {
    const {ship, date, airport, plannedDate} = flight 
    const id = { ship, date }
    const _datef = date.substring(0, 10)
    const _dateS = plannedDate.substring(0, 10)
    const _id = JSON.stringify(id)
    return `<tr>
              <td name='ship'>${ship}</td>
              <td name='date'>${_datef}</td>
              <td name='airport_id'>${airport}</td>
              <td name='plannedDate'>${_dateS}</td>
              <td><button class = "boton edit_button" value = ${_id}>Edit</button>
              <button class = "boton delete_button" value = ${_id}>Delete</button></td>
            </tr>`
  }).join('')
  table.innerHTML = rows;

}

window.addEventListener('DOMContentLoaded',refreshFlights)
refresh_button.addEventListener('click', refreshFlights)



const get_flights = async () =>{

  try {
    const result = await fetch("http://localhost:1234/flight", {
    method: "GET",
    headers: { 
      "Authorization" : "Bearer " + encodeURIComponent(token),
      "Content-Type": "application/json"
    },
    })
    const flights = await result.json()
    return flights
  }
  catch(error){
    console.error(error)
  }
} 