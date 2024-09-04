//! 1. Modificacion de atributos de HTML
const input = document.querySelector('#input-id')
console.log(input)  // nos devolvera el elemento de input
console.dir(input)  // nos devolvera las propiedades del objeto input

/*
Al hacer eso, el valor de input va a cambiar, pero solo se cambio en 
la propiedad del objeto ya cargado en el DOM, esto no va a alterar el 
valor inicial que le dimos en nuestro documento HTML, dado que el 
inicial solo es un atributo con el que se inicializa el objeto que
vamos a manipular con JavaScript
*/
//console.log(input.value)  // Aqui nos imprime el valor inicial, declarado
// en los atributos del input
//input.value = 'Nombre completo' 
//console.log(input.value)  // Ya que  modificamos el valor de la propieda, 
// directamente con JavaScript ya no mostrara 'Nombre', mostrar 'Nombre completo'

//! 2. Modificacion de texto en HTML
const title = document.querySelector('#app-title')
//console.dir(title)
//title.textContent = 'Texto cambiado desde JavaScript' // Este y el metodo de abajo
// si van a cambiar el texto que tiene esta etiqueta, dado que no es un
// atributo de la etiqueta
//title.innerText = 'Otro titulo cambiado'

//! 3. Modificacion de estilos
// 3.1 Propiedad .style: Agrega estilos en linea en la etiqueta del elemento.
const title2 = document.querySelector('h1')
//title.style.color = 'red'
const menu = document.querySelector('.menu')
//menu.style.backgroundColor = 'pink'
//menu.style.fontSize = '25px'

// 3.2 className: Nos ayuda a acceder a la clase ya existente de un elemento,
// y una vez que accede reescribe la clase del elemento por una nueva
//menu.className = 'main-menu'

// 3.2 classList: Nos permite acceder a las clases de un elemento
// y agregar nuevas clases sin reescribir las clases ya existentes
const button = document.querySelector('button')
/*
button.addEventListener('click', () => {
//  menu.classList.toggle('invisible')  // con este metodo vamos a alternar la presencia de una clase
})
*/

//! 4. Creating and Removing elements
// 4.1 HTMLStrings: Cadenas de texto que utilizamos  que posteriormente 
// podemos inyectar en el DOM con ayuda de CreateElements
// 4.1.1. innerHTML: Genera e inyecta el elemento en el DOM, reemplazando el texto
// ya existe
const contentArea = document.getElementById('contentArea')
contentArea.innerHTML = '<p>Este es un nuevo parrafo inyectado.</p>'
// 4.1.2. insertAdjacentHTML: Hace lo mismo solo que nos deja decirir
// en que parte del DOM inyectar el elemento, sin reemplazar lo existente
contentArea.insertAdjacentHTML('beforeend', '<p>Este es otro parrafo sin que se reemplace uno</p>')
contentArea.insertAdjacentHTML('beforebegin', '<p>Parrafo con beforebegin</p>')
contentArea.insertAdjacentText('afterbegin', '<p>Parrafo con afterbegin</p>')
contentArea.insertAdjacentHTML('afterend', '<p>Parrafo con afterend</p>')
// 4.2. Creacion de elementos sin reemplazar
// 4.2.1 innerHTML: De esta forma no reemplaza algo ya existente,
// insertando sin alterar, el problema es que al hacer esto vuelve a renderizar todo elemento padre,
// alterando el performance
const listArea = document.getElementById('listArea')
listArea.innerHTML += ('<li>item 5</li>')
// 4.2.2. insertAdjacentHTML: Cumple la misma funcion que el 4.1.2, solo que no estaria
// renderizando al elemento padre
listArea.insertAdjacentHTML('beforeend', '<li>item 6</li>')