// 1. new Array() or Array()
const mangas = Array('One Piece', 'Blue Period', 'Haikyu', 'Kaiju No.8')
console.log(mangas)

const justOneNumber = Array(12)
console.log(justOneNumber)

// 2. Array literal syntax
const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const series = ['Breaking Bad', 'Umbrella Academy', 'Stranger Things']
console.log(series)

const recipeIngredientes = [
  'Flour',
  true,
  2,
  {
    ingredients: 'milk', quantity: '6 cups'
  },
  false
]
console.log(recipeIngredientes)

// Accessing array elements
const thirdManga = mangas[2]
console.log(thirdManga)

// lenght property
const numberOfMangas = mangas.length
console.log(numberOfMangas)

// Mutability
mangas.push('Sword Art Online') // Agregar un nuevo elemento al array
console.log(mangas)

// Inmutability
const newMangas = mangas.concat('Demon Slayer', 'Rent a Girlfriend')
console.log(newMangas)

// Checking arrays with Array.isArray()
const isArray = Array.isArray(mangas)
console.log(isArray)

const numbersArray = Array(1, 2, 3, 4, 5, 6, 7, 8);
let sumElement = 0;

for (element of numbersArray) {
  sumElement += element;
}

console.log(`La suma total de los números almacenados en el Array son:\n${sumElement}`);

// Methods that modify the original array

// push()
const countries = Array('Mexico', 'Japon', 'Argentina')
const newCountries = countries.push('United Kingdom', 'Germany')
console.log(countries)
console.log(newCountries)

// pop()
const removedCountry = countries.pop()
console.log(countries)
console.log(removedCountry)