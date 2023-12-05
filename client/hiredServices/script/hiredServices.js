let dropdownVisible = false;

const tableaaa=document.querySelector('#cService_table')

tableaaa.addEventListener('click',async(event)=>{
  if (event.target.type==='submit'){
    const button=event.target
    if(button.classList.contains('rate')){
      id=JSON.parse(button.value)

      const row = Array.from(button.closest('tr').cells)
      const reparation_data = {}
      row.forEach((x) => {
        const attr = x.getAttribute('name')
        const value = x.textContent
        if (attr !== null) reparation_data[attr] = value
      })
      
      reparation_data['date']=new Date(reparation_data['date']).toISOString()
      const data = JSON.stringify(reparation_data)
      toggleDropdown(id,data)
    }
  }
})

function toggleDropdown(id,data) {
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.setAttribute('value',JSON.stringify(id))
  dropdownContent.setAttribute('data',data)

  dropdownVisible = !dropdownVisible;
  dropdownContent.style.display = dropdownVisible ? 'block' : 'none';
}

function  submitValue() {
  const value = document.getElementById('inputValue').value;
  const id =  JSON.parse(document.getElementById('dropdownContent').getAttribute("value"))
  const reparation_data = JSON.parse(document.getElementById('dropdownContent').getAttribute("data"))
  reparation_data['valuation']=value
  if (value >= 1 && value <= 10) {
    updateCservice(reparation_data,id)
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