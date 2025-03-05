const Rock = document.getElementById('Rock');
const Paper = document.getElementById('Paper');
const Scissors = document.getElementById('Scissors');
const PlayerDisplay = document.getElementById('PLAYER');
const ComputerDisplay = document.getElementById('Computer');
const ResultDisplay = document.getElementById('result');
const PlyScore = document.getElementById('PlyScore');
const ComScore = document.getElementById('ComScore');
let Finalresult = document.getElementById('Finalresult');





let TimeOut = 10;

let score = 1;
let Cscore = 1;


const arrayOptions = ['Rock', 'Paper', 'Scissors'];


function playersChoice(){

    TimeOut--;

Rock.addEventListener('click', () => {
        console.log(TimeOut--);
     
        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
         PlayerDisplay.textContent = `PLAYER: ${Rock.value}`
         ComputerDisplay.textContent = `Computer: ${randomOption}`

        if(Rock.value === randomOption){
              ResultDisplay.textContent = '😌 IT IS A TIE!'
              
        }
        else if(Rock.value){
                    ResultDisplay.textContent = randomOption === 'Scissors' ? 'YOU WIN! 😮' : 'YOU LOSS! 😋'     
        }

        if(ResultDisplay.textContent === 'YOU WIN! 😮'){
            ResultDisplay.style.color = 'green';
            PlyScore.textContent = `Player Score: ${(score++)}`
        }
        else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
            
            ResultDisplay.style.color = 'red'
            ComScore.textContent = `Computer Score: ${(Cscore++)}`
        }
        else{
            ResultDisplay.style.color = 'black'
        }
        

        if(score > Cscore){
            Finalresult.textContent = 'YOU WIN! 😍'
       }
       else if(score < Cscore){
           Finalresult.textContent = 'YOU LOSS! 😪'
       }
       else{
           Finalresult.textContent = 'ITS A DRAW! 😑'
       }


    })

Paper.addEventListener('click', () => {
        console.log(TimeOut--);

        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
         PlayerDisplay.textContent = `PLAYER: ${Paper.value}`
         ComputerDisplay.textContent = `Computer: ${randomOption}`

        if(Paper.value === randomOption){
            ResultDisplay.textContent = '😌 IT IS A TIE!'
            
      }
        else if(Paper.value){
                  ResultDisplay.textContent = randomOption === 'Scissors' ? 'YOU LOSS! 😋' : 'YOU WIN! 😮'

            
      }
    if(ResultDisplay.textContent === 'YOU WIN! 😮'){
        ResultDisplay.style.color = 'green'
        PlyScore.textContent = `Player Score: ${(score++)}`
    }
    else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
        
        ResultDisplay.style.color = 'red'
        ComScore.textContent = `Computer Score: ${(Cscore++)}`
    }
    else{
        ResultDisplay.style.color = 'black'
    }


    if(score > Cscore){
        Finalresult.textContent = 'YOU WIN! 😍'
   }
   else if(score < Cscore){
       Finalresult.textContent = 'YOU LOSS! 😪'
   }
   else{
       Finalresult.textContent = 'ITS A DRAW! 😑'
   }

    })

Scissors.addEventListener('click', () => {
        console.log(TimeOut--);

        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
         PlayerDisplay.textContent = `PLAYER: ${Scissors.value}`
         ComputerDisplay.textContent = `Computer: ${randomOption}`

        if(Scissors.value === randomOption){
            ResultDisplay.textContent = '😌 IT IS A TIE!'
            
      }
        else if(Scissors.value){
                  ResultDisplay.textContent = randomOption === 'Paper' ? 'YOU WIN! 😮' : 'YOU LOSS! 😋'

            
      }
    
    if(ResultDisplay.textContent === 'YOU WIN! 😮'){
        ResultDisplay.style.color = 'green'
        PlyScore.textContent = `Player Score: ${(score++)}`
    }
    else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
        ResultDisplay.style.color = 'red';
        ComScore.textContent = `Computer Score: ${(Cscore++)}`;
        
    }
    else{
        ResultDisplay.style.color = 'black'
    }

    if(score > Cscore){
         Finalresult.textContent = 'YOU WIN! 😍'
    }
    else if(score < Cscore){
        Finalresult.textContent = 'YOU LOSS! 😪'
    }
    else{
        Finalresult.textContent = 'ITS A DRAW! 😑'
    }
    
    })



}
playersChoice()








