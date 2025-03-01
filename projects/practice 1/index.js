
let time = document.getElementById('timecount');


function getTime(){


             const now = new Date()
             const hour = now.getHours().toString().padStart(2, '0');
             const minute = now.getMinutes().toString().padStart(2, '0');
             const second = now.getSeconds().toString().padStart(2, '0');


             time.textContent = `${hour}:${minute}:${second}`
}
getTime();

function update(){
    setInterval(getTime, 1000)
}
update()

