// Creacion de string
const opcion1 = "Comillas dobles"
const opcion2 = 'Comillas simples'
const opcion3 = `Comilla inversa`

// Concatenacion de strings
// Primera opcion
const direccion = "La que sea 128"
const ciudad = "tangamandapio"
const direccionCompleta = "Mi direccion completa es " + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacios = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacios)

// Segunda opcion: Template literal
const nombre = 'Jorge'
const apellido = 'Miranda'
const pais = 'Mexico'
const presentacion = `Hola soy ${nombre} ${apellido} de ${pais}`
console.log(presentacion)

// Tercer forma: join()
const parteUno = 'Hola soy Jorge'
const parteDos = 'Miranda, de Mexico'
const parteTres = 'Estudio Sistemas Computacionales'
const texto = [parteUno, parteDos, parteTres]
console.log(texto.join(' '))

// Cuarta forma: concat()
const hobbie1 = 'Jugar'
const hobbie3 = 'Ver series'
const hobbie2 = 'Escuchar musica'
const hobies = 'Mis hobies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobies)

// Caracteres de escape
// 1. Escape alternativo
const escapeAlternativo = "I'am Student of Sistemas Computaciones"
// 2. Barra invertida
const barraInvertida = 'I\'am Student of Sistemas Computaciones'
// 3. Template Literals
const templateLiterals = `I'am am Student of Sistemas Computaciones`

// Strings primitivos
const stringPrimitivo = "Hola, como te va"
// stringPrimitivo = 'Bien'         // No se puede reasignar
console.log(stringPrimitivo)

// string objetos 
const stringObjeto = new String('Soy mejor que el string primitivo')
console.log(typeof stringObjeto)

// Manipulacion de strings
const saludo = 'Hola bicho, donde estabas?'
console.log(saludo[3])
console.log(saludo.charAt(3))
console.log(saludo.indexOf('a'))
console.log(saludo.indexOf('donde'))
console.log(saludo.lastIndexOf('e'))
console.log(saludo.slice(4, 9))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleUpperCase())

const saludoDivido = saludo.split(' ')
console.log(saludoDivido)

const saludoConEspacios = ' Hola mundo, Otra vez '
console.log(saludoConEspacios.trim())

const saludoOriginal = 'Hola Mundo'
const saludoCambiado = saludoOriginal.replace('Mundo', 'Jenni')
console.log(saludoCambiado)
