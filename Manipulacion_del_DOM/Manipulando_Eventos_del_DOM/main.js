const container = document.querySelector('.container')
const button = document.querySelector('#btn')

// Con esta funcion estariamos dandole un evento a un
// elemento HTML
container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'green'
})

// Con este aparentemente le quitamos el evento, pero lo
// unico que hace es regresar el color a como estaba al 
// principio por lo que parece que se le quita el evento
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

// eventObject
// Es una forma en la que podemos obtener el objeto que esta
// lanzando un evente, de forma que se lance el evento
// y nos de el objeto que lo lanza

// Primero obtenemos el boton que queramos usar para esto
const button2 = document.querySelector('#btn2')

// Definimos una funcion que tiene como paramatro a event,
// esto es para que la funcion reciba el objeto que la activo
const buttonClicked = (event) => {
  // imprimimos el event, u objeto que activo ese evento
  console.log(event)

  // Si queremos solo una caracteristica en concreto tenemos
  // que navegar sobre el objeto del evento, por ejemplo para 
  // obtener el id del elemento usamos
  console.log(event.target.id)

  // y si queremos el texto que tiene el elemento usariamos
  console.log(event.target.textContent)
}

// Asignamos el evento de clic al boton, y pasamos la funcion
// que queremos que se active al dar click sobre el boton
button2.addEventListener('click', buttonClicked)