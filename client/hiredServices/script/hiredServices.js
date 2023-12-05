let dropdownVisible = false;

function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownVisible = !dropdownVisible;
  dropdownContent.style.display = dropdownVisible ? 'block' : 'none';
}

function  submitValue() {
  const value = document.getElementById('inputValue').value;
  if (value >= 1 && value <= 10) {
    // Aquí puedes usar 'value' para lo que necesites, por ejemplo, enviarlo al servidor.
    const ratebtnValue = JSON.parse( document.querySelector('#rate').value)
    const buton = document.querySelector('#rate')
    
    const row = Array.from(buton.closest('tr').cells)
    const reparation_data = {}
    row.forEach((x) => {
      const attr = x.getAttribute('name')
      const value = x.textContent
      if (attr !== null) reparation_data[attr] = value
    })
    reparation_data['valuation']=value
    reparation_data['date']=new Date(reparation_data['date']).toISOString()

    updateCservice(reparation_data,ratebtnValue)
    toggleDropdown();

  } else {
    alert('Por favor, ingresa un valor válido del 1 al 10.');
  }
}


const updateCservice = async (Cservice, id) => {
    try {
      const response = await fetch(
        `http://localhost:1234/contractService/?service=${id.service}&date=${id.date}&client=${id.client}`,
        {
          method: 'PUT',
          body: JSON.stringify(Cservice),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const msg = await response.json()
      console.log(msg)
      return response.ok
    } catch (err) {
      console.log(err)
      return false
    }
  }