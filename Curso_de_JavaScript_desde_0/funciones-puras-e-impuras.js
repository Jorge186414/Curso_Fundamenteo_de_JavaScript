// 1. Funciones puras
/*
Side Effects
  1. Modificar variables globales.
  2. Modificar parametros.
  3. Solicitudes HTTP.
  4. Imprimir mensajes en pantalla o en consola.
  5. Manipulacion del DOM.
  6. Obtener la hora actual
*/

function sum(a, b) {
  return a + b
}

function sum2(a, b) {
  console.log(`A: ${a}`)
  return a + b
}

let counter = 0
console.log(counter)
function sumWithSideEffect(a) {
  counter += a
  return counter
}
sumWithSideEffect(8)
console.log(counter)

function square(x) {
  return x * x
}

function addTen(y) {
  return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)