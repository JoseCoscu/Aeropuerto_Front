const panel = document.getElementById('panel');
const pestana = document.getElementById('pestana');

pestana.addEventListener('click', () => {
    if (panel.style.left === '-250px') {
        panel.style.left = '0';
    } else {
        panel.style.left = '-250px';
    }
});

document.getElementById('services').onclick = function(){
    window.location.href = './services/index.html';
};

