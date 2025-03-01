const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const gametext = document.getElementById('gametext');
const answerR = document.getElementById('answerR');
const range = document.getElementById('answer');


const submit = document.getElementById('submit');



let thinking = true;
const min = 1;
const max = 30;
let think;

let attempts = 0;

let you = range.value =  0;

     
option2.onclick = function(){
    gametext.textContent = 'Input your random number?';
 
    think = Math.floor(Math.random() * (max - min) + 2);
    console.log(think)


      range.value = Number(range.value);


  submit.onclick = function(){


     let y = range.value ++ ;
     y +2

    attempts++;
    answerR.textContent = range.value


       if(range.value == think){
           gametext.textContent = `Congrats! on your guess🤗. it took you ${attempts} times`
       }
       else if(range.value < think){
            gametext.textContent = 'too low, try again'
       }
       else if(range.value > think){
        gametext.textContent = 'too high, try again'
   }
       else{
           
       }

  }
}


/*function add(x, y){
    return x + y
}

console.log(add(9,8))

function subtract(x, y){
    return x - y
}

console.log(subtract(88, 100));



function isOdd(number){

    if(!number / 2 === 0){
        return true
    }
    else{
        return false
    }

}

console.log(isOdd(36))

*/
let minNum = 1;
let maxNum = 50;
let attempt = 0;
let running = true;

let answer = window.prompt(`choose the random number between ${minNum} and ${maxNum}! `)

function generateRandomNumber(Number){
    attempt ++;
    let min = 1;
    let max = 50;
     Number = Math.floor(Math.random() * (max - min) + 1);
     return Number
}
while(running){
switch(true){
    case answer === generateRandomNumber():
        window.alert(`Congratulation! you guessed right! it took you ${attempt} `)

        break;
        
    case answer > generateRandomNumber():
        window.alert('Too high! try again')
        break;
        
    case answer < generateRandomNumber():
        window.alert('Too low! try again')

        break;



}

running = false

}