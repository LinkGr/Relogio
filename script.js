let data = new Date();
let hora = data.getHours().toString(); 
let minutos = data.getMinutes().toString();
let segundos = data.getSeconds().toString();

let html_hora = document.getElementById('horas');
let html_minutos = document.getElementById('minutos');
let html_segundos = document.getElementById('segundos');

    data = new Date();
    hora = data.getHours().toString();
    if (hora.length != 2) {
        hora = '0' + hora;
    }
    minutos = data.getMinutes().toString();
    if (minutos.length != 2) {
        minutos = '0' + minutos;
    }
    segundos = data.getSeconds().toString();
    if (segundos.length != 2) {
        segundos = '0' + segundos;
    }

    html_hora.textContent = hora;
    html_minutos.textContent = minutos;
    html_segundos.textContent = segundos;


setInterval(horario, 1000);

function horario() {
    data = new Date();
    hora = data.getHours().toString();
    if (hora.length != 2) {
        hora = '0' + hora;
    }
    minutos = data.getMinutes().toString();
    if (minutos.length != 2) {
        minutos = '0' + minutos;
    }
    segundos = data.getSeconds().toString();
    if (segundos.length != 2) {
        segundos = '0' + segundos;
    }

    html_hora.textContent = hora;
    html_minutos.textContent = minutos;
    html_segundos.textContent = segundos;
}