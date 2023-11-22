const createClient = async (client) => {
  try {
  const response = fetch("http://localhost:1234/clients", {
  method: "POST",
  body: JSON.stringify(client), 
  headers: {
    "Content-Type": "application/json",
  },
})
 const res = await response.json()
 console.log(res)
 return res.ok
}
  catch(err){
    console.log(err)
    return false
}
} 
const client_form = document.querySelector("#client_form");
client_form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value
  const username = document.querySelector("#username").value
  const nationality = document.querySelector("#nacionalidad").value
  const idClientType = document.querySelector("#clienttype").value
  const password = document.querySelector("#password").value
  const client = {name, username, nationality, idClientType,password}

  const response = await createClient(client)
  console.log(response)

  
  
});
