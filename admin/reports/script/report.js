const select = document.querySelector("#format")
const enlaces = document.querySelectorAll(".e")
select.addEventListener('change',() => {
    const selection = select.value 
    enlaces.forEach(e => {
        const action = e.getAttribute('data-action');
        e.href = `http://localhost:1234/reports/?action=${action}&format=${selection}`;

    })
})

