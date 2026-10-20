// Cambiad la fecha cuando la tengáis confirmada. Formato: AAAA-MM-DDTHH:MM:SS
const fechaBoda = "";
const timer = document.getElementById('timer');
function actualizarCuentaAtras(){if(!fechaBoda){timer.textContent='Próximamente';return;}const ms=new Date(fechaBoda).getTime()-Date.now();if(!Number.isFinite(ms)){timer.textContent='Fecha por confirmar';return;}if(ms<=0){timer.textContent='¡Hoy es el gran día!';return;}const dias=Math.floor(ms/86400000),horas=Math.floor(ms/3600000)%24,minutos=Math.floor(ms/60000)%60,segundos=Math.floor(ms/1000)%60;timer.innerHTML=[[dias,'Días'],[horas,'Horas'],[minutos,'Minutos'],[segundos,'Segundos']].map(([n,label])=>`<div><strong>${String(n).padStart(2,'0')}</strong><span>${label}</span></div>`).join('');}
actualizarCuentaAtras();setInterval(actualizarCuentaAtras,1000);
