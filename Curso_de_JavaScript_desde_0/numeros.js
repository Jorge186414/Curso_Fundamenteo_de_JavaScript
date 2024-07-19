// 1. Enteros y Decimales
const entero = 14
const decimal = 3.1416
console.log(typeof entero, typeof decimal)

// 2. Notacion Cientifica
const cientifica = 4e2
console.log(cientifica)

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero  = NaN
console.log(`Numero infinito: ${infinito} \n No es un numero: ${noEsUnNumero}`)

// Operaciones Aritmeticas
// 1. Suma, Resta, Multiplicacion y Divicion
const numero1 = 10
const numero2 = 15
const suma = numero1 + numero2
const resta = numero1 - numero2
const multiplicacion = numero1 * numero2
const division = numero1 / numero2

// 2. Modulo y Exponenciacion
const modulo = numero1 % numero2
const exponenciacion = numero1 ** 3

// 3. Precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.7)

// 4. Operaciones con Math
const raizCuadrada = Math.sqrt(89)
const valorAbsoluto = Math.abs(-87)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)