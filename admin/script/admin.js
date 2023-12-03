let menu
document.addEventListener('DOMContentLoaded', async function () {
  const result = await fetch('../menu.html')
  const data = await result.text()
  document.querySelector('#menu-container').innerHTML = data
  menu = document.querySelector('.menu')
})

pestana = document.querySelector('#pestana')
pestana.addEventListener('click', () => {
  const _left = window.getComputedStyle(menu).left
  if (menu.style.left === '-250px' || _left === '-250px') {
    menu.style.left = '0'
  } else {
    menu.style.left = '-250px'
  }
})
