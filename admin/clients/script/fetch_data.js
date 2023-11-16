const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJpYXQiOjE2OTg3NzM5MzAsImV4cCI6MTY5OTM3ODczMH0.MA_7LkLjbgYtBMOns8wuuvdv9qdCSFspsPuTL6L7shI";


window.addEventListener('DOMContentLoaded',(event)=>{get_client()})


const get_client = () =>{fetch("http://localhost:1234/clients", {
    method: "GET",
    headers: { 
      "Authorization" : "Bearer " + encodeURIComponent(token),
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
} 