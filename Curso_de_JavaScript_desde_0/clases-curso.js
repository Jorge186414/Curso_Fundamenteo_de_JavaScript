// Tipos de declaraciones

// Declaracion con var
var x = 10              // Primera declaracion de la variable
var x = 10              // Redeclaracion de la variable
x = "jenny"             // Reasignacion de la variable

// Declaracion con let
let nombre = "jenny"    // Declaracion de la variable
// let nombre = "jorge" // Redeclaracion no permitida, error de block-scoped
nombre = "jorge"        // Resignacion de la variable

// Declaracion con const
const y = 2             // Declaracion de la variable
// const y = 3          // No se permite la declaracion, marcara error
// y = 1                // No marcara error en nuestro IDE, pero una vez que se ejecute
                        // nos marcara error 

// Mutabilidad e inmutabilidad de datos

// Inmutabilidad
let numero1 = 20
let numero2 = numero1
numero1 = 15
console.log(numero2)                // Aunque el valor de numero1 se reasigno, no cambio el de numero2
                                    // mostrando que se crea un nuevo valor de este
function cambiarValor(numero){
    numero = "hola" 
    console.log(numero)
}
cambiarValor(numero1)               // Va a imprimir el valor de numero cambiado
console.log(numero1)                // A pesar de que el valor de numero1 se cambio
                                    // dentro de la funcion, fuera de ella no le afecto

// Mutabilidad
let lenguajesProgramacion = {lenguaje: "JavaScript"}    
let lenguajes = lenguajesProgramacion                   
lenguajes.lenguaje = "Python"           
console.log(lenguajesProgramacion)      // Dado que se pasa por referencia va a imprimir Python

function cambioNombre(objeto){
    objeto.creador = "Guido van Rossum"
}
cambioNombre(lenguajes)
console.log(lenguajesProgramacion)      // Dado que si tiene mutabilidad, al cambiar el valor
                                        // en la funcion va a cambiar tambien fuera de ella