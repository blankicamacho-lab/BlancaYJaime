/* CUENTA ATRÁS - BLANCA Y JAIME */
/* 22 de mayo de 2027, a las 12:00 h en Jerez */

const fechaBoda = new Date("2027-05-22T12:00:00+02:00").getTime();

function actualizarCuentaAtras() {
  const diferencia = Math.max(0, fechaBoda - Date.now());

  const dias = Math.floor(diferencia / 86400000);
  const horas = Math.floor((diferencia / 3600000) % 24);
  const minutos = Math.floor((diferencia / 60000) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  const valores = { dias, horas, minutos, segundos };

  for (const [id, valor] of Object.entries(valores)) {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.textContent = String(valor).padStart(2, "0");
    }
  }
}

actualizarCuentaAtras();
setInterval(actualizarCuentaAtras, 1000);
