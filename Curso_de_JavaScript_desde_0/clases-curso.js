// Tipos de declaraciones

// Declaracion con var
var x = 10              // Primera declaracion de la variable
var x = 10              // Redeclaracion de la variable
x = "jenny"             // Reasignacion de la variable
console.log(x)

// Declaracion con let
let nombre = "jenny"    // Declaracion de la variable
// let nombre = "jorge" // Redeclaracion no permitida, error de block-scoped
nombre = "jorge"        // Resignacion de la variable
console.log(nombre)

// Declaracion con const
const y = 2             // Declaracion de la variable
// const y = 3          // No se permite la declaracion, marcara error
// y = 1                // No marcara error en nuestro IDE, pero una vez que se ejecute
                        // nos marcara error 
console.log(y)