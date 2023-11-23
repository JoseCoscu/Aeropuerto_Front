
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
            const ventanaPopup = window.open("", "Formulario Cliente", "width=700,height=500");
            const content = await getContent("./client_form/index.html");
            
            const temporal = document.createElement('div');
            temporal.innerHTML = content;

            // Modificas los valores de los campos específicos
            temporal.querySelector('#name').setAttribute('value', client_data['name']);
            temporal.querySelector('#username').setAttribute('value', client_data['username']);
            temporal.querySelector('#password').setAttribute('value', '1234');
            temporal.querySelector('#nacionalidad').setAttribute('value', client_data['nationality']);
            temporal.querySelector('#clienttype').setAttribute('value', client_data['idClientType']);
            
            console.log(temporal)
            const contenidoModificado = temporal.innerHTML;

            // Escribir el contenido en la nueva ventana emergente
             ventanaPopup.document.write( contenidoModificado);

        }
        if(event.target.classList.contains('delete_button')){
            const id_client = button.value
            console.log(id_client)
        }
    }
})