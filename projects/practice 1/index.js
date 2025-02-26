

const ans = [1, 2, 3, 4, 5, 6]

const squares = ans.map((elements) => Math.pow(elements, 3))
const evenNumbers = ans.filter( (elements) => elements % 2 === 0 )
const Total = ans.reduce((elements, accumulator) => elements + accumulator)

console.log(Total)