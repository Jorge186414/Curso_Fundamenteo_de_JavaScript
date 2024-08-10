const person = {
  name: 'Jorge',
  lastName: 'Miranda',
  age: 21,

}

function people(name, lastName, age) {
  this.name = name
  this.lastName = lastName
  this.age = age
}

const person1 = new people('Jennifer', 'Angeles', 21)
console.log(person1)

const person2 = new people('Juan', 'Lopez', 15)
console.log(person2)

// Add properties to constructor
people.prototype.number = '7777777777'
// El prototipo es la copia de la funcion constructora que se encarga
// de compartir cada una de las propiedades o metodos dentro de un objeto

person1.nacionality = 'Mexican'

people.prototype.greeting = function () {
  console.log(`Hi i'm ${this.name}, i have ${this.age} years old.`)
}
person1.greeting()
person2.greeting()
