const createClient = async (client) => {
  try {
    const response = await fetch('http://localhost:1234/clients', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.ok
  } catch (err) {
    console.log(err)
    return false
  }
}
const updateClient = async (client, id) => {
  try {
    const response = await fetch(`http://localhost:1234/clients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.ok
  } catch (err) {
    console.log(err)
    return false
  }
}

const client_form = document.querySelector('#client_form')
client_form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const button_type = document.querySelector('#create-update').value
  const name = document.querySelector('#name').value
  const username = document.querySelector('#username').value
  const nationality = document.querySelector('#nacionalidad').value
  const idClientType = document.querySelector('#clienttype').value
  const password = document.querySelector('#password').value
  const client = { name, username, nationality, idClientType, password }
  const id_client = document.querySelector('#idClient').value
  console.log(client)
  if (button_type === 'Create') {
    const response = await createClient(client)
    console.log(response)
    if (response === true) {
      window.close()
    }
  }
  if (button_type === 'Edit') {
    const response = await updateClient(client, id_client)
    if (response === true) {
      window.close()
    }
  }
})
