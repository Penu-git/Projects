
//document.addEventListener('DOMContentLoaded', Game)

const Rock = document.getElementById('Rock');
const Paper = document.getElementById('Paper');
const Scissors = document.getElementById('Scissors');
const PlayerDisplay = document.getElementById('PLAYER');
const ComputerDisplay = document.getElementById('Computer');
const ResultDisplay = document.getElementById('result');
const PlyScore = document.getElementById('PlyScore');
const ComScore = document.getElementById('ComScore');
let Finalresult = document.getElementById('Finalresult');
const timeDisplay = document.getElementById('timeDisplay')
let Life = document.getElementById('Life')
let lifeNumber = document.getElementById('lifeNumber').textContent



let timer = null
let elapsedTime = 0
let startTime = 0
let val = 1
let count = 5
let counte = 5
let LifeCount = 4 
let score = 1
let Cscore = 1


Life.textContent = `Life🤍💖: ${count}`
const arrayOptions = ['Rock', 'Paper', 'Scissors'];

function GameOverDisplay(){
    ResultDisplay.textContent = 'GAME OVER!!'
    ResultDisplay.style.fontSize = '78px'
    ResultDisplay.style.color = 'red'
    ResultDisplay.classList.add('finalAnimation')
    ResultDisplay.style.fontFamily = 'calibri'
}
function reduceLife(){
    lifeNumber = LifeCount--
    Life.textContent = `Attempts🤍💖: ${lifeNumber}`
}
function enableTimeCount(){
    timer = setInterval(update, 10)
    startTime = Date.now() - elapsedTime
}
function gameResult(){
    if(score > Cscore){
        Finalresult.textContent = 'YOU WIN! 😍'
        }
    else if(score < Cscore){
        Finalresult.textContent = 'YOU LOSS! 😪'
        }
    else{
        Finalresult.textContent = 'ITS A DRAW! 😑'
        }
}
function playerScore(){
    PlyScore.textContent = `Player Score: ${(score++)}`
}
function computerScore(){
    ComScore.textContent = `Computer Score: ${(Cscore++)}`
}



function RockBtnClick(){
    
        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
        PlayerDisplay.textContent = `PLAYER: ${Rock.value}`
        ComputerDisplay.textContent = `Computer: ${randomOption}`
    
        if(Rock.value === randomOption){
            ResultDisplay.textContent = '😌 IT IS A TIE!'
            
            }
        else if(Rock.value){
            enableTimeCount()
            ResultDisplay.textContent = randomOption === 'Scissors' ? 'YOU WIN! 😮' : 'YOU LOSS! 😋'     
            }
    
            //display text style
        if(ResultDisplay.textContent === 'YOU WIN! 😮'){
            ResultDisplay.style.color = 'green';
            playerScore()
            }
        else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
            reduceLife()
            counte --
            ResultDisplay.style.color = 'red'
            computerScore()
            val ++
            console.log(val)
            }
        else{
            ResultDisplay.style.color = 'black'
            }

        if (counte <= 0){
            GameOverDisplay()
            Life.textContent = `Attempts🤍💖: 0`
            PlayerDisplay.textContent = `PLAYER: `
            ComputerDisplay.textContent = `Computer: `
            PlyScore.textContent = gameResult()
            ComScore.textContent = ''

            setTimeout(() => {
                while (ResultDisplay.textContent == 'GAME OVER!!'){
                    ResultDisplay.textContent == 'Hello you!'
                    clearInterval(timer)
                }
            }, 3000);
            
        }

}


function PaperBtnClick(){
    
        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
        PlayerDisplay.textContent = `PLAYER: ${Paper.value}`
        ComputerDisplay.textContent = `Computer: ${randomOption}`

        if(Paper.value === randomOption){
            ResultDisplay.textContent = '😌 IT IS A TIE!'
            
            }
        else if(Paper.value){
            enableTimeCount()
            ResultDisplay.textContent = randomOption === 'Scissors' ? 'YOU LOSS! 😋' : 'YOU WIN! 😮'
            }

            //display text style
        if(ResultDisplay.textContent === 'YOU WIN! 😮'){
            ResultDisplay.style.color = 'green'
            playerScore()
            }
        else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
            reduceLife()
            counte --
            ResultDisplay.style.color = 'red'
            computerScore()
            }
        else{
            ResultDisplay.style.color = 'black'
            }
        if (counte <= 0){
            GameOverDisplay()
            Life.textContent = `Attempts🤍💖: 0`
            PlayerDisplay.textContent = `PLAYER: `
            ComputerDisplay.textContent = `Computer: `
            PlyScore.textContent = gameResult()
            ComScore.textContent = ''

            setTimeout(() => {
                while (ResultDisplay.textContent == 'GAME OVER!!'){
                    ResultDisplay.textContent == 'Hello you!'
                    clearInterval(timer)
                }
            }, 3000);

        }

}


function ScissorsBtnClick(){
    
        const randomOption = arrayOptions[Math.floor(Math.random() * 3)]
        PlayerDisplay.textContent = `PLAYER: ${Scissors.value}`
        ComputerDisplay.textContent = `Computer: ${randomOption}`

        if(Scissors.value === randomOption){
            ResultDisplay.textContent = '😌 IT IS A TIE!'
        }
        else if(Scissors.value){
            enableTimeCount()
            ResultDisplay.textContent = randomOption === 'Paper' ? 'YOU WIN! 😮' : 'YOU LOSS! 😋'     
        }
        

        //display text style
        if(ResultDisplay.textContent === 'YOU WIN! 😮'){
            ResultDisplay.style.color = 'green'
            playerScore()
        }
        else if (ResultDisplay.textContent === 'YOU LOSS! 😋'){
            reduceLife()
            counte --
            ResultDisplay.style.color = 'red';
            computerScore()
        }
        else{
            ResultDisplay.style.color = 'black'
        }
        if (counte <= 0){
            GameOverDisplay()
            Life.textContent = `Attempts🤍💖: 0`
            PlayerDisplay.textContent = `PLAYER: `
            ComputerDisplay.textContent = `Computer: `
            PlyScore.textContent = gameResult()
            ComScore.textContent = ''

            setTimeout(() => {
                while (ResultDisplay.textContent == 'GAME OVER!!'){
                    ResultDisplay.textContent == 'Hello you!'
                    clearInterval(timer)
                }
            }, 3000);
            
        }

}








function update() {
    
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
    
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    
        timeDisplay.textContent = ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

}


