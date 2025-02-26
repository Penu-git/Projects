const numDice = document.getElementById('numDice');
const Diceans = document.getElementById('Diceans');
const submit = document.getElementById('submit');


submit.onclick = function(){

          
        const Dice1 =  Diceans.textContent = Math.floor(Math.random() * 5  + 1);
        const Dice2 =  Diceans.textContent = Math.floor(Math.random() * 4  + 1);
        const Dice3 =  Diceans.textContent = Math.floor(Math.random() * 3  + 1);
        const Dice4 =  Diceans.textContent = Math.floor(Math.random() * 2  + 1);
        const Dice5 =  Diceans.textContent = Math.floor(Math.random() * 1  + 2);

        function getDiceValue(...Values){
          return Values.join(', ')
        }

        variable = Number(getDiceValue());
      function diceValues(...answers){
        numDice.value == 1 ? Diceans.textContent = getDiceValue(Dice1) : Diceans.textContent = '';
        numDice.value == 2 ? Diceans.textContent = getDiceValue(Dice1, Dice2) : Diceans.textContent = '';
        
      }
        diceValues()
         
      }
