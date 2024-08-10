class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre
    this.tipo = tipo
  }
  emitirSonido() {
    console.log('El animal emite sonido')
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo)
    this.raza = raza
  }
  emitirSonido() {
    console.log('El perro ladra')
  }
  correr() {
    console.log(`${this.nombre} esta corriendo en el parque`)
  }
}

const perro1 = new Perro('Tonton', 'Perro', 'Husky')
console.log(perro1)
perro1.correr()

perro1.sentarse = function(){
  console.log('El perro se sento')
}
Perro.prototype.darLaPata = function(){
  console.log('El perro dio la pata')
}

// Uso de this
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

const person1 = new Person('Jennifer', 21)
person1.drinkWater = function(){
  console.log(`${this.name} esta tomando agua`)
}
person1.drinkWater()