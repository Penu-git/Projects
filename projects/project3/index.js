const Temperature = document.getElementById('Temperature');
const toFarenhiet = document.getElementById('toFarenheit');
const toCelcius = document.getElementById('toCelsius');
const Submit = document.getElementById('Submit');
const answer = document.getElementById('answer');
const decimalpoints = document.getElementById('decimalpoints');

  let temp;
  //let textbox = decimalpoints.value;

function convert(){

Submit.onclick = function(){


    if(toFarenhiet.checked){

        temp = Number(Temperature.value);
        temp = 9 / 5 * temp + 32 ;
        answer.textContent = temp.toFixed(decimalpoints.value)  + "∘F";
        
    }
    else if(toCelcius.checked){
        temp = Number(Temperature.value);
        temp = (5 / 9) * (temp - 32) ;
        answer.textContent = temp.toFixed(decimalpoints.value) + "∘C";
    }
    else{
      answer.textContent = 'select a unit'
    }
}

}

convert(Submit.onclick)


