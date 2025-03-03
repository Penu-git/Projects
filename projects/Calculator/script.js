const calDisplay = document.getElementById('display');
const additionOpt = document.getElementById('addition');
const clearOpt = document.getElementById('clear');
const Subtract = document.getElementById('subtract');
const Divide = document.getElementById('divide');
const Multiply = document.getElementById('times');
const Calculate = document.getElementById('calculate');

let num1 = document.getElementById('1');
let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');
let num5 = document.getElementById('5');
let num6 = document.getElementById('6');
let num7 = document.getElementById('7');
let num8 = document.getElementById('8');
let num9 = document.getElementById('9');
let num0 = document.getElementById('0');
const decimalP = document.getElementById('.');


let N1 = Number(num1.value)
let N2 = Number(num2.value)
let N3 = Number(num3.value)
let N4 = Number(num4.value)
let N5 = Number(num5.value)
let N6 = Number(num6.value)
let N7 = Number(num7.value)
let N8 = Number(num8.value)
let N9 = Number(num9.value)
let N0 = Number(num0.value)


try{

Subtract.addEventListener('click', () => {
    calDisplay.value += '-'
})
additionOpt.addEventListener('click', () => {
    calDisplay.value += '+'
})
Multiply.addEventListener('click', () => {
    calDisplay.value += '*'
})
Divide.addEventListener('click', () => {
    calDisplay.value += '/'
})






decimalP.addEventListener('click', () => {
    calDisplay.value += '.'
})
num0.addEventListener('click', () => {
    calDisplay.value += N0
})
num1.addEventListener('click', () => {
    calDisplay.value += N1
})
num2.addEventListener('click', () => {
    calDisplay.value += N2
})
num3.addEventListener('click', () => {
    calDisplay.value += N3
})
num4.addEventListener('click', () => {
    calDisplay.value += N4
})
num5.addEventListener('click', () => {
    calDisplay.value += N5
})
num6.addEventListener('click', () => {
    calDisplay.value += N6
})
num7.addEventListener('click', () => {
    calDisplay.value += N7
})
num8.addEventListener('click', () => {
    calDisplay.value += N8
})
num9.addEventListener('click', () => {
    calDisplay.value += N9
})




Calculate.addEventListener('click', () => {
    try{
        calDisplay.value = eval(calDisplay.value)
    }
    catch(error){
        calDisplay.value = 'Error'
    }
})


}
catch(error){
     console.error(error)
}





clearOpt.addEventListener('click', () => {
        calDisplay.value = ''
})