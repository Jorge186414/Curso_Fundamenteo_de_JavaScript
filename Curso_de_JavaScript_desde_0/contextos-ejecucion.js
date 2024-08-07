// Ejemplo 1
const productName = 'Smartphone'
const price = 1200
const brand = 'Iphone'

function getProductDetails() {
	const productName = 'Laptop'
	const price = 3000
	return `The ${productName} costs $${price} 
	and is from the brand ${brand}`
}

console.log(getProductDetails())	/* Aqui muestra el productName y price
	de dentro del bloque, es decir, contexto local de ejecucion 
	y no del contexto global */
console.log(`The ${productName} const $${price} 
	and is from the brand ${brand}`)	/* Aqui va a mostrar el productName
	y price del contexto global de ejecucion.*/

// Ejemplo 2
const userPoints = 89
function checkAccess() {
	if (userPoints < 100) {
		const message = 'Access denied: Insufficient points:('
		return message
	} else {
		const message = 'Access granted: Enjoy the premium features ;)'
		return message
	}
}
console.log(checkAccess())

// Ejemplo 3
const globalVariable = 'Hola Mundo'
function localOne() {
	console.log('Global 1: ', globalVariable)
	// console.log('Local 1:', localVariable)

	function localTwo() {
		const localTwo = 'Hello World'
		console.log('Local 2:', localTwo)
	}

	function localThree() {
		console.log('Local 3:', localTwo)
	}
	localTwo()
	localThree()
}
console.log(localOne())