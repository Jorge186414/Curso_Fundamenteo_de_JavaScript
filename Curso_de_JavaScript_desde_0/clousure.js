function outerFunction() {
  let outerVariable = 'I am from outer function'
  
  function innterFunction() {
    console.log(outerVariable)
  }

  return innterFunction
}

const clousureExample = outerFunction()
clousureExample()

function createCounter(){
  let count = 0

  return function (){
    count++
    console.log(count)
  }
}

const counterA = createCounter()
counterA()
counterA()
counterA()
counterA()
const counterB = createCounter()
counterB()
counterB()
counterA()

function outer (){
  let messsage = 'Hello'

  function inner (name){
    console.log(`${messsage} ${name}`)
  }
  
  return inner

}

const clousureA = outer()
const clousureB = outer()
clousureA('Jorge')
clousureB('Jenny')