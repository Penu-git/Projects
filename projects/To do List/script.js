const searchBox = document.getElementById('searchBox')
const searchButton = document.getElementById('searchButton')
const resultDisplay = document.getElementById('resultDisplay')

let nameSearch;

try{

   function getData(){

                    let spongebob = personData[0]
                    let squirel = personData[1]
                    let monkey = personData[2]
                    let cat = personData[3]
                    let ade = personData[4]
                    let shade = personData[5]
                    let bola = personData[6]
                    let ronaldo = personData[7]
                    let leonardo = personData[8]

                    
            nameSearch = searchBox.value.toLocaleLowerCase().trim()
        

            if (nameSearch == ''){
                resultDisplay.textContent =  'Boss howfar naw😢, help me now🙏, type name for the place now☝☝☝'
                }
            else if(nameSearch == 'spongebob'){
                resultDisplay.textContent = `Name: ${spongebob.name},
                                            Age: ${spongebob.age},
                                            isEmployed: ${spongebob.isEmployed},
                                            Hobbies: ${spongebob.hobbies},
                                            Gender: ${spongebob.gender}`
                }
            else if(nameSearch == 'squirel'){
                resultDisplay.textContent = `Name: ${squirel.name},
                                            Age: ${squirel.age},
                                            isEmployed: ${squirel.isEmployed},
                                            Hobbies: ${squirel.hobbies},
                                            Gender: ${squirel.gender}`
                }
            else if(nameSearch == 'monkey'){
                resultDisplay.textContent = `Name: ${monkey.name},
                                            Age: ${monkey.age},
                                            isEmployed: ${monkey.isEmployed},
                                            Hobbies: ${monkey.hobbies},
                                            Gender: ${monkey.gender}`
                }
            else if(nameSearch == 'cat'){
                resultDisplay.textContent = `Name: ${cat.name},
                                            Age: ${cat.age},
                                            isEmployed: ${cat.isEmployed},
                                            Hobbies: ${cat.hobbies},
                                            Gender: ${cat.gender}`
                }
            else if(nameSearch == 'ade'){
                resultDisplay.textContent = `Name: ${ade.name},
                                            Age: ${ade.age},
                                            isEmployed: ${ade.isEmployed},
                                            Hobbies: ${ade.hobbies},
                                            Gender: ${ade.gender}`
                }
            else if(nameSearch == 'shade'){
                resultDisplay.textContent = `Name: ${shade.name},
                                            Age: ${shade.age},
                                            isEmployed: ${shade.isEmployed},
                                            Hobbies: ${shade.hobbies},
                                            Gender: ${shade.gender}`
                }
            else if(nameSearch == 'bola'){
                resultDisplay.textContent = `Name: ${bola.name},
                                            Age: ${bola.age},
                                            isEmployed: ${bola.isEmployed},
                                            Hobbies: ${bola.hobbies},
                                            Gender: ${bola.gender}`
                }
            else if(nameSearch == 'ronaldo'){
                resultDisplay.textContent = `Name: ${ronaldo.name},
                                            Age: ${ronaldo.age},
                                            isEmployed: ${ronaldo.isEmployed},
                                            Hobbies: ${ronaldo.hobbies},
                                            Gender: ${ronaldo.gender}`
                }
            else if(nameSearch == 'leonardo'){
                resultDisplay.textContent = `Name: ${leonardo.name},
                                            Age: ${leonardo.age},
                                            isEmployed: ${leonardo.isEmployed},
                                            Hobbies: ${leonardo.hobbies},
                                            Gender: ${leonardo.gender}`
            }
            else{
                resultDisplay.textContent = 'Kindly recheck the spelling of suspects above😎, from below👇👇'
            }


   }



}
catch(error){
    console.error(error)
}
























const personData = [
    { name: "spongebob", age: 20, isEmployed: true, hobbies: "jellyfishing", gender: "cartoon"},
    { name: "squirel",age: 30, isEmployed: true, hobbies: "climbing", gender: 'animal'},
    { name: "monkey", age: 25, isEmployed: false, hobbies: "jumping", gender: 'animal'},
    { name: "cat", age: 15, isEmployed: false, hobbies: "hunting", gender: 'animal'},
    { name: "ade", gender: "Male", age: 30, isEmployed: true, hobby: "dancing" },
    { name: "shade", gender: "Female", age: 15, isEmployed: false, hobbies: "running"},
    { name: "bola", gender: "Male", age: 55, isEmployed: true, hobbies: "skating"},
    { name: "ronaldo", gender: "Male", age: 30, isEmployed: true, hobbies: "Playing Football"},
    { name: 'leonardo', gender: 'Male', age:3, isemployed: true, hobbies: 'Business market structure analyis'}
]    