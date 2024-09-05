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
// 4.3 createElements: Nos perite el crear elementos sin influuir en el rendimiento de nuestra pagina
// esto se puede hacer en cualquier parte del DOM
const newPElement = document.createElement('p') // 1. Crear el elemento que quearmos inyectar
newPElement.textContent = 'Fui creado con createElement'  // 2. Darle texto o contenido al elemento
contentArea.append(newPElement) // 3. Declarar una variable para el contenedor en donde queramos inyectar el elemento e inyectarlo
const newItem = document.createElement('li')
newItem.textContent = 'item 7'
listArea.prepend(newItem) // Pondra al elemento al principio del contenedor o elemento padre
listArea.before(newItem)  // Pondra al elemento antes del elemento padre, es decir, fuera de la lista en este caso, pero no clona, solo mueve el elemento
listArea.after(newItem) // Es parecido a before, solo pondra el elemento despues del padre, siendo hermano de los items dentro del padre.

// 4.4. Eliminacion de elementos
// 4.4.1. Eliminacion con querySelector
const firstItem = document.querySelector('li')  // Seleccionara al primer elemento li
firstItem.remove()  // Con el metodo remove, eliminara la elemento previamente seleccionado
const list = document.querySelector('ul') // Hace algo paracido, solo que ahora primero buscara un elemento ul, para despues eliminar a un hijo
list.removeChild(list.firstChild)  // Ya que seleccionamos a un elemento padre, dependiendo que metodo tomemos, ya sea el primero o ultimo hijo

// 4.5. Clonacion y reemplazo de elementos
// 4.5.1. cloneNode()
const section = document.querySelector('#contentArea')  // 1. Seleccionamos el contenedor donde esta el elemento que queramos clonar
const elementoOriginal = section.querySelector('p') // 2. Seleccionamos el elemento que queremos clonar dentro del contenedor
const elementoClonado = elementoOriginal.cloneNode(true)  // 3. Clonamos el elemento con cloneNode()
section.append(elementoClonado) // 4. Inyectamos el elemento en el DOM
elementoClonado.textContent = 'Texto cambiado del elemento clonado' // 4. Ya que el elemento esta en el DOM, podemos cambiar su contenido
// 4.5.1. replaceWith()
const lista = document.querySelector('#listArea') // 1. Seleccionamos el elemento padre donde queramos reeemplazar
const itemToReplace = lista.children[2] // 2. Seleccionamos el elemento hijo del padre que queramos reemplazar
itemToReplace.replaceWith(elementoClonado)  // 3. Reemplazamos el elemento con replaceWith