const numDice = document.getElementById('numDice');
const Diceans = document.getElementById('Diceans');
const submit = document.getElementById('submit');


submit.onclick = function(){


        const Dice1 = Math.floor(Math.random() * 5  + 1);
        const Dice2 = Math.floor(Math.random() * 4  + 1);
        const Dice3 = Math.floor(Math.random() * 3  + 1);
        const Dice4 = Math.floor(Math.random() * 2  + 1);
        const Dice5 = Math.floor(Math.random() * 1  + 2);

        let numberOfDice = numDice.value

        if(numberOfDice == ''){
                Diceans.textContent = 'Kindy input a number, it cant be empty!'
        }
        else if(numberOfDice == '1'){
                Diceans.textContent = FruitsAll(Dice1)
        }
        else if(numberOfDice == '2'){
                Diceans.textContent = FruitsAll(Dice1, Dice2)
        }
        else if(numberOfDice == '3'){
                Diceans.textContent = FruitsAll(Dice1, Dice2, Dice3)
        }
        else if(numberOfDice == '4'){
                Diceans.textContent = FruitsAll(Dice1, Dice2, Dice3, Dice4)
        }
        else if(numberOfDice == '5'){
                Diceans.textContent = FruitsAll(Dice1, Dice2, Dice3, Dice4, Dice5)
        }
        else{
                Diceans.textContent = 'check again it is error'
        }




        function FruitsAll(...fruits){
                return fruits.join(', ')
        }


      }

