const option1 = document.getElementById('Btn1');
const option2 = document.getElementById('Btn2');
const option3 = document.getElementById('Btn3');
const option4 = document.getElementById('Btn4');
const option5 = document.getElementById('Btn5');
const answer1 = document.getElementById('ansFate');
const answer2 = document.getElementById('Fate');
const Btncontainer = document.getElementById('Btncontainer');



for(let countdown = 5; countdown--; countdown<=1){
   
const getRannum = document.getElementById('guess').onclick = function(){
    let yoast = option1.textContent = BtnNum = Math.floor(Math.random() * (max - min) + 1);
    let prep = option2.textContent = BtnNum = Math.floor(Math.random() * (max - min) - 1);
    let begin = option3.textContent = BtnNum = Math.floor(Math.random() * (max + min) + 1);
    let start = option4.textContent = BtnNum = Math.floor(Math.random() * (max - min) + 5);
    let read = option5.textContent = BtnNum = Math.floor(Math.random() * (max - min) * 2);


    if(yoast === ranNum){
        remark = (`${answer1.textContent = 'Congratulations! you picked right..'}`)
    }
    else if(prep === yoast){
        remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
    }
    else if(begin === yoast){
        remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
    }
    else if(start === yoast){
        remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
    }
    else if(read === yoast){
        remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
    }
    else{
        remark = answer1.textContent = 'incorrect';
    }

      
}

}




//let options = document.getElementsByClassName('buttons');
let min = 0;
let max = 20;
let BtnNum = 0;


let ranNum = Math.floor(Math.random() * (max - min) * 1);
console.log(ranNum);

/*let yoast = option1.textContent = BtnNum = Math.floor(Math.random() * (max - min) + 1);
let prep = option2.textContent = BtnNum = Math.floor(Math.random() * (max - min) - 1);
let begin = option3.textContent = BtnNum = Math.floor(Math.random() * (max + min) + 1);
let start = option4.textContent = BtnNum = Math.floor(Math.random() * (max - min) + 5);
let read = option5.textContent = BtnNum = Math.floor(Math.random() * (max - min) * 2);*/

let remark;

/*if(yoast === ranNum){
    remark = (`${answer1.textContent = 'Congratulations! you picked right..'}`)
}
else if(prep === ranNum){
    remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
}
else if(begin === ranNum){
    remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
}
else if(start === ranNum){
    remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
}
else if(read === ranNum){
    remark = (`${answer1.textcontent = 'Congratulations! you picked right..'}`)
}
else{
    remark = answer1.textContent = 'incorrect';
}*/

