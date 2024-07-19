// 1. Explicit Type Casting
const string = '24'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.123'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '01011'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// 2. Implicit Type Casting
const sum = '4' + 6        // Convierte el 6 a string, y lo concatena con el 4
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '18'
const numberValue = 28
const booleanValue = true
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + stringValue)
console.log(numberValue + numberValue) 
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)

const numero = '596'
const numeroConvertido = parseInt(numero)
console.log(typeof numero)
console.log(typeof numeroConvertido)
