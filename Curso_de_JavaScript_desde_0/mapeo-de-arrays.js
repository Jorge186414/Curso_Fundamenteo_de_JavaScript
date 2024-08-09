// 1. map()
const numbers = [1, 2, 3, 4, 5, 6]
const squareNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squareNumbers)

// 2. forEach()
const colors = ['Red', 'Blue', 'Orange', 'Purple']
const iterateColor = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iterateColor)

// Excercise: Farenheit to Celsius
const tempsFarenheit = [32, 68, 95, 104, 212]
const tempsCelcius = tempsFarenheit.map(tempFarenheit => 5 / 9 * (tempFarenheit - 32))
console.log(`Temperatures in Farenheit: ${tempsFarenheit}`)
console.log(`Temperatures in Celsius: ${tempsCelcius}`)

// Excersice: Sum of elements in an Array
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
newNumbers.forEach(number => sum += number)
console.log('Sum of the numbers in the Array:', sum)

