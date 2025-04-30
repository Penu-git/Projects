
const SliderContainer = document.querySelectorAll('.slider-container img');
let slideIndex = 0;
let intervalId = null;

//intializeSlider()
document.addEventListener("DOMContentLoaded", intializeSlider)


function intializeSlider(){

   if(SliderContainer.length > 0){
    SliderContainer[slideIndex].classList.add('displaySlide')
    intervalId = setInterval(nextSlide, 5000)
   }

}
function showSlide(index){

    if(index >= SliderContainer.length){
        slideIndex = 0
    }
    else if(index < 0){
        slideIndex = SliderContainer.length - 1
    }


    SliderContainer.forEach( slides => {
          slides.classList.remove("displaySlide")
    })
    SliderContainer[slideIndex].classList.add("displaySlide")
}
function prevSlide(){
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++
    showSlide(slideIndex)
}







let NameText = document.getElementById('name')
let MatricNo = document.getElementById('MatricNo')
let Password = document.getElementById('Password')
let RetypePassword = document.getElementById('confirm-password')
let checkbox = document.getElementById('checkbox')
let textDisplay = document.getElementById('textDisplay')
let secondText = document.getElementById('secondText')


try{

function submitData(){
    

    if(MatricNo == 'CYS/24/9182'){
        textDisplay.textContent = 'pls complete the fields above!'
    }
    else {
        checkPassword()
    }

}

function checkPassword(){
    if(Password.length !== RetypePassword.length){
        secondText.textContent = 'password do not match'
    }

}

}

catch(error){
    console.log('hello')
}
