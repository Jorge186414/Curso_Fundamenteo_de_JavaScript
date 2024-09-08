const container = document.querySelector('.container')
const button = document.querySelector('button')

container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'green'
})

container.addEventListener('mouseout', () => {
  container.style.backgroundColor = 'red'
})

//button.addEventListener('click', () => {
//  alert('Button clicked')
//})

// Como retirar eventos una vez ejecutados
// Creamos la funcion que se va a ejecutar al accionar un evento
const buttonClickCallback = () => {
  alert('Button Clicked')
}
// agregar esa funcion como evento a un elemento
button.addEventListener('click', buttonClickCallback)

// creamos un time con setTimeout, que es una web api que nos da el navegado
setTimeout(() => {
  button.removeEventListener('click', buttonClickCallback)  // primer parametro indicamos que vento queremos eliminar
  // el segundo parametro es el que pasara el callback para saber que evento se va a eliminar
}, 2000)  // indica el tiempo en milisigundos que tienen que pasar para que elimine el evento