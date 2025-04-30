const upperCaseLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const lowerCaseLetters = "abcdefjhijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbols = "!@#$%^&*()_-+=~:;?/{}"

const passwordDisplay = document.getElementById('passwordDisplay')
const passwordLenght = document.getElementById('passwordLenght')
const passwordGeneratorCont = document.getElementById('passwordGeneratorCont')
const passwordButton = document.getElementById('button') 

const includeUpperCase = document.getElementById('upperCaseChars')
const includeLowerCase = document.getElementById('lowerCaseChars')
const includeNumbers = document.getElementById('numberChars')
const includeSymbols = document.getElementById('symbolChars')

 




passwordButton.addEventListener('click', passwordGenerated => {


    

if (passwordLenght.value == ''){
    passwordLenght.value = 16
}



const  upperCaseArray = []
upperCaseArray[0] = "A"
upperCaseArray[1] = "B"
upperCaseArray[2] = "C"
upperCaseArray[3] = "D"
upperCaseArray[4] = "E"
upperCaseArray[5] = "F"
upperCaseArray[6] = "G"
upperCaseArray[7] = "H"
upperCaseArray[8] = "I"
upperCaseArray[9] = "J"
upperCaseArray[10] = "K"
upperCaseArray[11] = "L"
upperCaseArray[12] = "M"
upperCaseArray[13] = "N"
upperCaseArray[14] = "O"
upperCaseArray[15] = "P"
upperCaseArray[16] = "Q"
upperCaseArray[17] = "R"
upperCaseArray[18] = "S"
upperCaseArray[19] = "T"
upperCaseArray[20] = "U"
upperCaseArray[21] = "V"
upperCaseArray[22] = "W"
upperCaseArray[23] = "X"
upperCaseArray[24] = "Y"
upperCaseArray[25] = "Z"


const randomUpperCaseIndex1 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex2 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex3 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex4 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex5 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex6 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex7 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex8 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex9 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex10 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex11 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex12 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex13 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex14 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex15 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex16 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex17 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex18 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex19 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex20 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex21 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex22 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex23 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex24 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex25 = Math.floor(Math.random() * upperCaseArray.length)
const randomUpperCaseIndex26 = Math.floor(Math.random() * upperCaseArray.length)

//The array for the random upperCaseLetters alone, using the designated random funtions immediately above it
const newUpperCaseArray = [
                            upperCaseArray[randomUpperCaseIndex1],
                            upperCaseArray[randomUpperCaseIndex2],
                            upperCaseArray[randomUpperCaseIndex3],
                            upperCaseArray[randomUpperCaseIndex4],
                            upperCaseArray[randomUpperCaseIndex5],
                            upperCaseArray[randomUpperCaseIndex6],
                            upperCaseArray[randomUpperCaseIndex7],
                            upperCaseArray[randomUpperCaseIndex8],
                            upperCaseArray[randomUpperCaseIndex9],
                            upperCaseArray[randomUpperCaseIndex10],
                            upperCaseArray[randomUpperCaseIndex11],
                            upperCaseArray[randomUpperCaseIndex12],
                            upperCaseArray[randomUpperCaseIndex13],
                            upperCaseArray[randomUpperCaseIndex14],
                            upperCaseArray[randomUpperCaseIndex15],
                            upperCaseArray[randomUpperCaseIndex16],
                            upperCaseArray[randomUpperCaseIndex17],
                            upperCaseArray[randomUpperCaseIndex18],
                            upperCaseArray[randomUpperCaseIndex19],
                            upperCaseArray[randomUpperCaseIndex20],
                            upperCaseArray[randomUpperCaseIndex21],
                            upperCaseArray[randomUpperCaseIndex22],
                            upperCaseArray[randomUpperCaseIndex23],
                            upperCaseArray[randomUpperCaseIndex24],
                            upperCaseArray[randomUpperCaseIndex25],
                            upperCaseArray[randomUpperCaseIndex26],
                          ]
newUpperCaseArray.length = passwordLenght.value
const uppercasetic = newUpperCaseArray.join('')


    

    const  lowerCaseArray = []
    lowerCaseArray[0] = "a"
    lowerCaseArray[1] = "b"
    lowerCaseArray[2] = "c"
    lowerCaseArray[3] = "d"
    lowerCaseArray[4] = "e"
    lowerCaseArray[5] = "f"
    lowerCaseArray[6] = "g"
    lowerCaseArray[7] = "h"
    lowerCaseArray[8] = "i"
    lowerCaseArray[9] = "j"
    lowerCaseArray[10] = "k"
    lowerCaseArray[11] = "l"
    lowerCaseArray[12] = "m"
    lowerCaseArray[13] = "n"
    lowerCaseArray[14] = "o"
    lowerCaseArray[15] = "p"
    lowerCaseArray[16] = "q"
    lowerCaseArray[17] = "r"
    lowerCaseArray[18] = "s"
    lowerCaseArray[19] = "t"
    lowerCaseArray[20] = "u"
    lowerCaseArray[21] = "v"
    lowerCaseArray[22] = "w"
    lowerCaseArray[23] = "x"
    lowerCaseArray[24] = "y"
    lowerCaseArray[25] = "z"
    
    const randomlowerCaseIndex1 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex2 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex3 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex4 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex5 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex6 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex7 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex8 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex9 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex10 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex11 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex12 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex13 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex14 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex15 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex16 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex17 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex18 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex19 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex20 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex21 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex22 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex23 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex24 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex25 = Math.floor(Math.random() * lowerCaseArray.length)
    const randomlowerCaseIndex26 = Math.floor(Math.random() * lowerCaseArray.length)
    
        //The array for the random lowercaseletters alone, using the designated random funtions immediately above it
    const newLowerCaseArray = [
                                lowerCaseArray[randomlowerCaseIndex1],
                                lowerCaseArray[randomlowerCaseIndex2],
                                lowerCaseArray[randomlowerCaseIndex3],
                                lowerCaseArray[randomlowerCaseIndex4],
                                lowerCaseArray[randomlowerCaseIndex5],
                                lowerCaseArray[randomlowerCaseIndex6],
                                lowerCaseArray[randomlowerCaseIndex7],
                                lowerCaseArray[randomlowerCaseIndex8],
                                lowerCaseArray[randomlowerCaseIndex9],
                                lowerCaseArray[randomlowerCaseIndex10],
                                lowerCaseArray[randomlowerCaseIndex11],
                                lowerCaseArray[randomlowerCaseIndex12],
                                lowerCaseArray[randomlowerCaseIndex13],
                                lowerCaseArray[randomlowerCaseIndex14],
                                lowerCaseArray[randomlowerCaseIndex15],
                                lowerCaseArray[randomlowerCaseIndex16],
                                lowerCaseArray[randomlowerCaseIndex17],
                                lowerCaseArray[randomlowerCaseIndex18],
                                lowerCaseArray[randomlowerCaseIndex19],
                                lowerCaseArray[randomlowerCaseIndex20],
                                lowerCaseArray[randomlowerCaseIndex21],
                                lowerCaseArray[randomlowerCaseIndex22],
                                lowerCaseArray[randomlowerCaseIndex23],
                                lowerCaseArray[randomlowerCaseIndex24],
                                lowerCaseArray[randomlowerCaseIndex25],
                                lowerCaseArray[randomlowerCaseIndex26],
                              ]
            newLowerCaseArray.length = passwordLenght.value
            const lowercasetic = newLowerCaseArray.join('')
                              
    
    const NumberArray = []
    NumberArray[0] = '1'
    NumberArray[1] = '2'
    NumberArray[2] = '3'
    NumberArray[3] = '4'
    NumberArray[4] = '5'
    NumberArray[5] = '6'
    NumberArray[6] = '7'
    NumberArray[7] = '8'
    NumberArray[8] = '9'
    NumberArray[9] = '0'
    NumberArray[10] = '1'
    NumberArray[11] = '2'
    NumberArray[12] = '3'
    NumberArray[13] = '4'
    NumberArray[14] = '5'
    NumberArray[15] = '6'

        const randomNumber1 = Math.floor(Math.random() * NumberArray.length) 
        const randomNumber2 = Math.floor(Math.random() * NumberArray.length) 
        const randomNumber3 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber4 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber5 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber6 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber7 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber8 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber9 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber10 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber11 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber12 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber13 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber14 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber15 = Math.floor(Math.random() * NumberArray.length)
        const randomNumber16 = Math.floor(Math.random() * NumberArray.length)

        //The array for the random number alone, using the designated random funtions immediately above it
    const newNumberArray = [
                                NumberArray[randomNumber1],
                                NumberArray[randomNumber2],
                                NumberArray[randomNumber3],
                                NumberArray[randomNumber4],
                                NumberArray[randomNumber5],
                                NumberArray[randomNumber6],
                                NumberArray[randomNumber7],
                                NumberArray[randomNumber8],
                                NumberArray[randomNumber9],
                                NumberArray[randomNumber10],
                                NumberArray[randomNumber11],
                                NumberArray[randomNumber12],
                                NumberArray[randomNumber13],
                                NumberArray[randomNumber14],
                                NumberArray[randomNumber15],
                                NumberArray[randomNumber16],
    ] 

newNumberArray.length = passwordLenght.value
const numeric = newNumberArray.join('')


const symbolArray = []
symbolArray[0] = "!"
symbolArray[1] = "@"
symbolArray[2] = "#"
symbolArray[3] = "$"
symbolArray[4] = "%"
symbolArray[5] = "^"
symbolArray[6] = "&"
symbolArray[7] = "*"
symbolArray[8] = "("
symbolArray[9] = ")"
symbolArray[10] = "-"
symbolArray[11] = "_"
symbolArray[12] = "+"
symbolArray[13] = "="
symbolArray[14] = "{"
symbolArray[15] = "}"
symbolArray[16] = "["
symbolArray[17] = "]"
symbolArray[18] = "|"
symbolArray[19] = ":"
symbolArray[20] = "?"
symbolArray[21] = "<"
symbolArray[22] = ">"


const randomSymbol = Math.floor(Math.random() * symbolArray.length)
const randomSymbo2 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo3 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo4 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo5 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo6 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo7 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo8 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo9 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo10 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol1 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol2 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol3 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol4 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol5 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol6 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol7 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol8 = Math.floor(Math.random() * symbolArray.length)
const randomSymbol9 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo20 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo21 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo22 = Math.floor(Math.random() * symbolArray.length)
const randomSymbo23 = Math.floor(Math.random() * symbolArray.length)


//The array for the random symbol alone, using the designated random funtions immediately above it
    const newSymbolArray = [
                                symbolArray[randomSymbol],
                                symbolArray[randomSymbo2],
                                symbolArray[randomSymbo3],
                                symbolArray[randomSymbo4],
                                symbolArray[randomSymbo5],
                                symbolArray[randomSymbo6],
                                symbolArray[randomSymbo7],
                                symbolArray[randomSymbo8],
                                symbolArray[randomSymbo9],
                                symbolArray[randomSymbo10],
                                symbolArray[randomSymbol1],
                                symbolArray[randomSymbol2],
                                symbolArray[randomSymbol3],
                                symbolArray[randomSymbol4],
                                symbolArray[randomSymbol5],
                                symbolArray[randomSymbol6],
                                symbolArray[randomSymbol7],
                                symbolArray[randomSymbol8],
                                symbolArray[randomSymbol9],
                                symbolArray[randomSymbo20],
                                symbolArray[randomSymbo21],
                                symbolArray[randomSymbo22],
                                symbolArray[randomSymbo23],
    ] 

    newSymbolArray.length = passwordLenght.value
    const symbolic = newSymbolArray.join('')
    





//all the four above array joined together here
    const concat = newUpperCaseArray.concat(newLowerCaseArray).concat(newNumberArray).concat(newSymbolArray)
      
           
    

//the random functions for the array below
// i multiplied by the numbers that you see because i wanted the random function to generate numbers within the range of the lenght of the arrays concated above each codes that are running here and downwardd
    const finalRandomPasswordIndex0 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex1 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex2 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex3 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex4 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex5 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex6 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex7 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex8 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex9 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex10 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex11 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex12 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex13 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex14 = Math.floor(Math.random() * passwordLenght.value * 4)
    const finalRandomPasswordIndex15 = Math.floor(Math.random() * passwordLenght.value * 4)

    
//Below is array containing the random indexes of the intially generated password
//i meant the long codes above
    const allFinalRandomPasswordIndexArray = [
                                                concat[finalRandomPasswordIndex0],
                                                concat[finalRandomPasswordIndex1],
                                                concat[finalRandomPasswordIndex2],
                                                concat[finalRandomPasswordIndex3],
                                                concat[finalRandomPasswordIndex4],
                                                concat[finalRandomPasswordIndex5],
                                                concat[finalRandomPasswordIndex6],
                                                concat[finalRandomPasswordIndex7],
                                                concat[finalRandomPasswordIndex8],
                                                concat[finalRandomPasswordIndex9],
                                                concat[finalRandomPasswordIndex10],
                                                concat[finalRandomPasswordIndex11],
                                                concat[finalRandomPasswordIndex12],
                                                concat[finalRandomPasswordIndex13],
                                                concat[finalRandomPasswordIndex14],
                                                concat[finalRandomPasswordIndex15]
                                            ]


    
    allFinalRandomPasswordIndexArray.length = passwordLenght.value
    const joinedArray = allFinalRandomPasswordIndexArray.join('')

    //console.log(joinedArray)
    //console.log(allFinalRandomPasswordIndexArray)
    //console.log(concat)

    
// The immediate below is the code running for the options of Uppercase and Lowercase random CHARACTERS ALL togeether

    const upperCaseandLowerCase = newUpperCaseArray.concat(newLowerCaseArray)

    const bothLowerAndUpperCaseRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const bothLowerAndUpperCaseRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)

    const lowerCaseAndUpperCaseArray = [
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex0],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex1],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex2],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex3],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex4],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex5],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex6],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex7],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex8],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex9],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex10],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex11],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex12],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex13],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex14],
                                            upperCaseandLowerCase[bothLowerAndUpperCaseRandomIndex15],
                                        ]
    
    

// The immediate below is the code running for the options of Uppercase and Number random CHARACTERS ALL togeether                                        

    const upperCaseAndNumbers = newUpperCaseArray.concat(newNumberArray)                                        
    
    
    const upperAndNumbersRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex13= Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndNumbersRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)

    const upperCaseAndNumberArray = [
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex0],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex1],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex2],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex3],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex4],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex5],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex6],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex7],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex8],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex9],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex10],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex11],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex12],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex13],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex14],
                                        upperCaseAndNumbers[upperAndNumbersRandomIndex15],
                                    ]




// The immediate below is the code running for the options of Uppercase and Symbol random CHARACTERS ALL togeether                                    

    const upperCaseAndSymbol = newUpperCaseArray.concat(newSymbolArray) 
    
    
    const upperAndSymbolsRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const upperAndSymbolsRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)

    const upperCaseAndSymbolArray = [
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex0],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex1],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex2],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex3],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex4],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex5],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex6],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex7],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex8],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex9],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex10],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex11],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex12],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex13],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex14],
                                        upperCaseAndSymbol[upperAndSymbolsRandomIndex15],
                                    ]




// The immediate below is the code running for the options of Lowercase and Number random CHARACTERS ALL togeether                                    

    const lowerCaseAndNumber = newLowerCaseArray.concat(newNumberArray)

    
    const lowerAndNumberRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndNumberRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)


    const lowerCaseAndNumberArray = [
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex0],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex1],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex2],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex3],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex4],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex5],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex6],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex7],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex8],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex9],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex10],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex11],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex12],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex13],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex14],
                                        lowerCaseAndNumber[lowerAndNumberRandomIndex15],
                                    ]


// The immediate below is the code running for the options of Lowercase and Symbol random CHARACTERS ALL togeether

    const lowerCaseAndSymbol = newLowerCaseArray.concat(newSymbolArray)
    
    
    const lowerAndSymbolRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const lowerAndSymbolRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)


    const lowerAndSymbolArray = [
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex0],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex1],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex2], 
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex3],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex4],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex5],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex6],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex7],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex8],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex9],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex10],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex11],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex12],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex13],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex14],
                                 lowerCaseAndSymbol[lowerAndSymbolRandomIndex15],
                              ]


// The immediate below is the code running for the options of Numbers and Symbol random LETTERS ALL togeether

    const numbersAndSymbols = newNumberArray.concat(newSymbolArray)
    
    
    const numbersAndSymbolsRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 2)
    const numbersAndSymbolsRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 2)



    const numbersAndSymbolsArray = [
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex0],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex1],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex2],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex3],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex4],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex5],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex6],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex7],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex8],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex9],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex10],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex11],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex12],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex13],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex14],
                                        numbersAndSymbols[numbersAndSymbolsRandomIndex15],
                                   ]   


// The immediate below is the code running for the options of Uppercase, Lowercase and Number random LETTERS ALL togeether                                   
                                   
    const  upperLowerAndNumbers = newUpperCaseArray.concat(newLowerCaseArray).concat(newNumberArray)                                  

    
    const upperLowerNumberRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerNumberRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 3)         
    
    const upperLowerNumberArray = [
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex0],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex1],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex2],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex3],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex4],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex5],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex6],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex7],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex8],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex9],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex10],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex11],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex12],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex13],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex14],
                                        upperLowerAndNumbers[upperLowerNumberRandomIndex15],
                                  ]


// The immediate below is the code running for the options of Uppercase, Lowercase and Symbol random LETTERS ALL togeether                                  

    const upperLowerSymbol = newUpperCaseArray.concat(newLowerCaseArray).concat(newSymbolArray)

    
    const upperLowerSymbolRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperLowerSymbolRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 3)  

    const upperLowerSymbolArray = [
                                        upperLowerSymbol[upperLowerSymbolRandomIndex0],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex1],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex2],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex3],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex4],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex5],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex6],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex7],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex8],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex9],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex10],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex11],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex12],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex13],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex14],
                                        upperLowerSymbol[upperLowerSymbolRandomIndex15],
                                  ]


// The immediate below is the code running for the options of Uppercase, Numbers and Symbol random LETTERS ALL togeether


    const upperNumberSymbol = newUpperCaseArray.concat(newNumberArray).concat(newSymbolArray) 

    
    const upperNumberSymbolRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 3)
    const upperNumberSymbolRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 3)  
    
    const upperNumberSymbolArray = [
                                        upperNumberSymbol[upperNumberSymbolRandomIndex0],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex1],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex2],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex3],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex4],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex5],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex6],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex7],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex8],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex9],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex10],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex11],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex12],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex13],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex14],
                                        upperNumberSymbol[upperNumberSymbolRandomIndex15],
                                   ]



// The immediate below is the code running for the options of Lowercase, Numbers and Symbol random LETTERS ALL togeether


    const lowerNumberSymbol = newLowerCaseArray.concat(newNumberArray).concat(newSymbolArray)  
    
    
    const lowerNumberSymbolRandomIndex0 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex1 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex2 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex3 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex4 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex5 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex6 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex7 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex8 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex9 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex10 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex11 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex12 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex13 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex14 = Math.floor(Math.random() * passwordLenght.value * 3)
    const lowerNumberSymbolRandomIndex15 = Math.floor(Math.random() * passwordLenght.value * 3)  


    const lowerNumberSymbolArray = [
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex0],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex1],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex2],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex3],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex4],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex5],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex6],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex7],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex8],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex9],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex10],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex11],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex12],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex13],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex14],
                                        lowerNumberSymbol[lowerNumberSymbolRandomIndex15],
                                   ]

    
                                       


// The BELOW is when the USER picks only one of the password Generator options 
    if(includeUpperCase.checked){
        
        passwordDisplay.textContent = uppercasetic
        passwordDisplay.style.backgroundColor = "black"
        passwordDisplay.style.color = "red"
    }
    else if(includeLowerCase.checked){
        passwordDisplay.style.backgroundColor = "transparent"
        passwordDisplay.textContent = lowercasetic
    }
    else if(includeNumbers.checked){
        passwordDisplay.style.backgroundColor = "transparent"
        passwordDisplay.textContent = numeric
    }
    else if(includeSymbols.checked){
        passwordDisplay.style.backgroundColor = "transparent"
        passwordDisplay.textContent = symbolic
    }
    

// The BELOW is when the USER PICKS only two of the options in the password Generator    
    if(includeUpperCase.checked && includeLowerCase.checked){
        lowerCaseAndUpperCaseArray.length = passwordLenght.value
        const lowerAndUpperCasetic  = lowerCaseAndUpperCaseArray.join('')
        passwordDisplay.textContent = lowerAndUpperCasetic
    }
    else if(includeUpperCase.checked && includeNumbers.checked){
        upperCaseAndNumberArray.length = passwordLenght.value
        const upperNumberistic = upperCaseAndNumberArray.join('')
        passwordDisplay.textContent = upperNumberistic
    }
    else if(includeUpperCase.checked && includeSymbols.checked){
        upperCaseAndSymbolArray.length = passwordLenght.value
        const upperSymbolistic = upperCaseAndSymbolArray.join('')
        passwordDisplay.textContent = upperSymbolistic
    }
    else if( includeNumbers.checked && includeLowerCase.checked){
        lowerCaseAndNumberArray.length = passwordLenght.value
        const lowerNumberistic = lowerCaseAndNumberArray.join('')
        passwordDisplay.textContent = lowerNumberistic
    }
    else if(includeLowerCase.checked && includeSymbols.checked){
        lowerAndSymbolArray.length = passwordLenght.value
        const lowerSymbolistic = lowerAndSymbolArray.join('')
        passwordDisplay.textContent = lowerSymbolistic
    }
    else if(includeNumbers.checked && includeSymbols.checked){
        numbersAndSymbolsArray.length = passwordLenght.value
        const numberSymbolistic = numbersAndSymbolsArray.join('')
        passwordDisplay.textContent = numberSymbolistic
    }
        



// The BELOW if and else condition IS FOR when the user picks three of the options and when the user picks nothing

    if(!includeUpperCase.checked && !includeLowerCase.checked && !includeNumbers.checked && !includeSymbols.checked){
        passwordDisplay.textContent = "pls select at least one option ☝☝"
        passwordDisplay.style.backgroundColor = "transparent"
        passwordLenght.value  = ""
    }
    else if (includeSymbols.checked && includeLowerCase.checked && includeUpperCase.checked && includeNumbers.checked){
        passwordDisplay.style.backgroundColor = "blue"
        passwordDisplay.style.color = "white"
        passwordDisplay.textContent = joinedArray
    }
    else if(includeLowerCase.checked && includeNumbers.checked && includeSymbols.checked){
        lowerNumberSymbolArray.length = passwordLenght.value
        const lowerNumberSymbolistic = lowerNumberSymbolArray.join('')
        passwordDisplay.textContent = lowerNumberSymbolistic
    }
    else if(includeUpperCase.checked && includeLowerCase.checked && includeNumbers.checked){
        upperLowerNumberArray.length = passwordLenght.value
        const upperLowerNumberistic = upperLowerNumberArray.join('')
        passwordDisplay.textContent = upperLowerNumberistic
    }
    else if(includeLowerCase.checked && includeUpperCase.checked && includeSymbols.checked){
        upperLowerSymbolArray.length = passwordLenght.value
        const upperLowerSymbolistic = upperLowerSymbolArray.join('')
        passwordDisplay.textContent = upperLowerSymbolistic
    }
    else if(includeUpperCase.checked && includeNumbers.checked && includeSymbols.checked){
        upperNumberSymbolArray.length = passwordLenght.value
        const upperNumberSymbolistic = upperNumberSymbolArray.join('')
        passwordDisplay.textContent = upperNumberSymbolistic
    }



})



const toggleButtonDisplay = document.createElement('div')
toggleButtonDisplay.style.width = '200px'
toggleButtonDisplay.style.height = '400px'
toggleButtonDisplay.style.backgroundColor = 'black'
toggleButtonDisplay.style.visibility = 'hidden'
toggleButtonDisplay.style.borderRadius = '10px'
toggleButtonDisplay.style.position = 'absolute top;'


document.getElementById('hamburgerMenu').append(toggleButtonDisplay)


const toggleButton = document.querySelectorAll('.toggleButton')

toggleButton.forEach( 
    event => {
        event.addEventListener('click', 
            event => {
                event.target = toggleButtonDisplay.style.visibility = 'visible'
            }
        )
    }
)
























/*

    let userPasswordLenght1 =  upperCaseLetters.split('', passwordLenght.value).join('')
    let userPasswordLenght2 = lowerCaseLetters.split('', passwordLenght.value).join('')
    let userPasswordLenght3 = numbers.split('', passwordLenght.value).join('')
    let userPasswordLenght4 = symbols.split('', passwordLenght.value).join('')

*/


