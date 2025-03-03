
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








let dividend = Number(window.prompt('Enter a dividend: '));
let divisor = Number(window.prompt('Enter a divisor: '));

let result = dividend / divisor;

if (isNaN(dividend) || isNaN(divisor)){
    throw new Error('divisor or dividend cant be a word')
}
else if (dividend == '' || divisor == ''){
    throw new Error('Input a number')
}
else{
    console.log(result)
}
















