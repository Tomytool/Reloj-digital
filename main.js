let horas = document.querySelector('#hora');
let tiempo_hora = document.createElement('p');
tiempo_hora.classList.add('time');
horas.appendChild(tiempo_hora);

let minutos = document.querySelector('#minutos');
let tiempo_minutos = document.createElement('p');
tiempo_minutos.classList.add('time');
minutos.appendChild(tiempo_minutos);

let segundos = document.querySelector('#segundos');
let tiempo_segundos = document.createElement('p');
tiempo_segundos.classList.add('time');
segundos.appendChild(tiempo_segundos);

let contador = 1;

const tiempo = () => {
  const toma_tiempo = new Date();
  let hora = toma_tiempo.getHours();
  let minuto = toma_tiempo.getMinutes();
  let segundo = toma_tiempo.getSeconds();
  console.log(`${contador}`);
  contador = contador + 1;

  tiempo_hora.innerText = hora;

  tiempo_minutos.innerText = minuto;

  tiempo_segundos.innerText = segundo;

  setTimeout(()=>{tiempo()}, 1000);
};

tiempo();
