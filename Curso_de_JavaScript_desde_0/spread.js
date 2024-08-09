// 1. Copy of Arrays: De esta forma podemos mutar
// un Array sin alterar un Array original

const originalArray = [1, 2, 3, 4, 5, 6]
const copyOfArray = [...originalArray]
console.log(originalArray)
console.log(copyOfArray)

// 2. Combinacion de Arrays: Como su nombre lo indica, podemos
// juntar 2 o mas Arrays en uno nuevo
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log(array1)
console.log(array2)
console.log(combinedArray)

// 3. Creating Arrays with Additional Elements
const baseArray = [1, 2, 3, 4]
const arrayWithAdditionalElements = [...baseArray, 5, 6, 7, 9]
console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass elements to functions
function sum(a, b, c, d) {
  return a + b + c + d
}
const numbers = [4, 8, 19, 20]
const result = sum(...numbers)
console.log(result)