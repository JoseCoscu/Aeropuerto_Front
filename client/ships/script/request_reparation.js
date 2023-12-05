const ship_table = document.querySelector('#ships_table')
  ship_table.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const button = event.target
      if (event.target.classList.contains('edit_button')) {
        const id_ship = button.value
        const row = Array.from(button.closest('tr').cells)
        const ship_data = {}
        row.forEach((x) => {
          const attr = x.getAttribute('name')
          const value = x.textContent
          if (attr !== null) ship_data[attr] = value
        })
        const ventanaPopup = window.open('', 'Reparaciones Disponibles', 'width=700,height=500')
        const content = await getContent('./reparations/index.html')

      
  
        // const temporal = document.createElement('div')
        // temporal.innerHTML = content
        
        ventanaPopup.document.write(content);

        console.log(ship_data)
      
      
      
      
      }}})



      const getContent = async (path) => {
        try {
          const response = await fetch(path);
          const content = await response.text();
          return content;
        } catch (e) {
          console.error(e);
        }
      }