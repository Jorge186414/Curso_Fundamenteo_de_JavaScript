class Person {
  constructor(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
  }
  greething(){
    console.log(`Hi my name is ${this.name} ${this.lastName}, I have ${this.age} years old`)
  }
}

const person1 = new Person('Jorge', 'Miranda', 21)
person1.greething()