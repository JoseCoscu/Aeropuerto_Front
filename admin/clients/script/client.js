
var table_clients = document.querySelector("#clients_table")
table_clients.addEventListener('click', async (event) => {

    if (event.target.type === 'submit'){
        const button = event.target
        if(event.target.classList.contains('edit_button')){
            
            const id_client = button.value
            const row = Array.from(button.closest('tr').cells)
            const client_data = {}
            row.forEach(x => {
                const attr = x.getAttribute('name')
                const value = x.textContent
                if (attr !== null)
                    client_data[attr] = value
            })
            console.log(client_data)
        }
        if(event.target.classList.contains('delete_button')){
            const id_client = button.value
            console.log(id_client)
        }
    }
})