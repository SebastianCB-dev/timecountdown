'use strict';

const parrafoCountdown = document.querySelector('#text-countdown');
const botonStart = document.querySelector('#button-start');
const botonPause = document.querySelector('#button-pause');
const botonReagain = document.querySelector('#button-reagain');
const botonReset = document.querySelector('#button-reset');
const botonVuelta = document.querySelector('#button-vuelta');
const divVueltas = document.querySelector('#info-vueltas');
let vueltas = 1;
let segundos = 0;
let minutos = 0;
let horas = 0;
let countdown;
const iniciar = () => {
    countdown = setInterval(()=>{
        let horasConv, minutosConv, segundosConv;
        if(horas <= 9) {
            horasConv = '0' + horas; 
        }
        else if(horas > 9) {
            horasConv = horas;
        }
        if(minutos <= 9) {
            minutosConv = '0' + minutos; 
        }
        else if(minutos > 9) {
            minutosConv = minutos;
        }
        if(segundos <= 9) {
            segundosConv = '0' + segundos; 
        }
        else if(segundos > 9) {
            segundosConv = segundos;
        }
        if(segundos < 60) {
            parrafoCountdown.innerHTML = `${horasConv}:${minutosConv}:${segundosConv}`;
            segundos++;
        }
        if(segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if(minutos == 60) {
            horas ++;
            minutos = 0;
            segundos = 0;
        }
        if(horas == 24) {
            horas = 0;
            minutos = 0;
            segundos = 0; 
        }
        
    }, 1000);
}

botonStart.addEventListener('click', ()=>{
    iniciar();
    botonStart.style.display = 'none';
    botonPause.style.display = 'block';
    botonVuelta.style.display = 'block';
});

botonPause.addEventListener('click', ()=> {
    clearInterval(countdown);
    botonPause.style.display = 'none';
    botonReagain.style.display = 'block'; 
    botonReset.style.display = 'block';
});

botonReagain.addEventListener('click', ()=> {
    iniciar();
    botonReagain.style.display = 'none';
    botonPause.style.display = 'block';
    botonReset.style.display = 'none';
});
const reset = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    parrafoCountdown.innerHTML = `00:00:00`;
    divVueltas.innerHTML = '';
    vueltas = 1;
};
botonReset.addEventListener('click', () => {
    botonStart.style.display = 'block';  
    botonPause.style.display = 'none';  
    botonReagain.style.display = 'none'; 
    botonReset.style.display = 'none';
    botonVuelta.style.display = 'none';
    reset();  
});
botonVuelta.addEventListener('click', ()=>{
    let parrafo = document.createElement('p');
    parrafo.append(`Vuelta Nro.${vueltas} - ${parrafoCountdown.innerHTML}`);
    divVueltas.appendChild(parrafo);
    vueltas++;
});