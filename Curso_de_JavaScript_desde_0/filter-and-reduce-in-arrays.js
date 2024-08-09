// 1. filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

// 2. reduce() - case 1
const numbersReduce = [10, 9, 8, 7, 6]
const sum = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

// 3. reduce() - case 2
const words = ['apple', 'banana', 'bay', 'apple', 'banana', 'apple']
const wordsFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})
console.log(wordsFrecuency)