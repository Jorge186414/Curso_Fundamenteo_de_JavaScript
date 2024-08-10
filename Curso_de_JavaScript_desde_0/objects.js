const person = {
  name: 'Jorge',
  lastName: 'Miranda',
  age: 21,
  address: {
    street: 'Privada Ailes',
    colony: 'El Sabino',
    country: 'Mexico',
    zipCode: 54250
  },
  // Si dejamos el metodo como una funcion normal, usar 'this.name'
  // si imprimira el nombre, por su contexto de ejecuion.
  /*greetings() {
    console.log(`Hi ${this.name}, have a good day ;)`)
  }*/
  // Si lo cambiamos a una fucion de flecha no imprimira el nombre
  greeting: () => {
    console.log(`Hi ${this.name}, have a good day ;)`)  // Para imprimir el nombre. tenemos que acceder directamente a esta propiedad
    console.log(`Hi i'm ${person.name}, i have ${person.age} years old \n and i'm from ${person.address.country}`) 
  }
}
console.log(person)
person.greeting()

// Add elements to objects
person.phoneNumber = '7645156709'
console.log(person)

// Add methods
person.farewall = () => {
  console.log('Good bay, see you later')
}
person.farewall()
console.log(person)
delete person.phoneNumber
console.log(person)