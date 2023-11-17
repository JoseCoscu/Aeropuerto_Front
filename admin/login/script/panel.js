const panel = document.getElementById('panel');
const pestana = document.getElementById('pestana');

pestana.addEventListener('click', () => {
    if (panel.style.left === '-180px') {
        panel.style.left = '0';
    } else {
        panel.style.left = '-180px';
    }
});

document.getElementById('services').onclick = function(){
    window.location.href = '../servicios/index.html';
};

document.getElementById('reparations').onclick = function(){
    window.location.href = '../reparaciones/index.html';
};

document.getElementById('flys').onclick = function(){
    window.location.href = '../vuelos/index.html';
};

document.getElementById('clients').onclick = function(){
    window.location.href = '../clients/index.html';
};