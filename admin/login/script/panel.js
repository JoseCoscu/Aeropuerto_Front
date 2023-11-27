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

document.getElementById('ships').onclick = function(){
    window.location.href = '../ships/index.html';
};

document.getElementById('clientType').onclick = function(){
    window.location.href = '../clientType/index.html';
};

document.getElementById('installationsTypes').onclick = function(){
    window.location.href = '../installationType/index.html';
};

document.getElementById('passengerType').onclick = function(){
    window.location.href = '../passengerType/index.html';
};

document.getElementById('reparationsTypes').onclick = function(){
    window.location.href = '../reparationType/index.html';
};
