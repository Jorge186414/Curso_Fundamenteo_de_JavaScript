// // 1. Metodos para seleccionar un solo elemento
// console.log(document.getElementById('app-title')) // Selecciona el elemento con el id dentro del metodo
// console.log(document.querySelector('#app-title')) // Para indicar que queremos que seleccione por ID, colocamos en # seguido del ID
// console.log(document.querySelector('p'))  // En caso de haber mas de un elemento p, solo selecciona el primero que encuentra

// // 2. Metodos para seleccionar todos los elementos
// console.log(document.getElementsByClassName('menu-items'))  // Selecciona todos los elementos con el nombre de la clase dentro del metodo
// console.log(document.getElementsByTagName('p')) // Selecciona todos los elementos encontrados con la etiqueta p
// console.log(document.querySelectorAll('.menu-items')) // Al igual que getElementsByClassName, obtine todos los elementos con el nombre de 
// //  la clase dentro del metodo, ponemos un . antes del nombre para indicar que es una clase

// /*
// !Transversing DOM: Consiste en recorrer los nodos de un elemento
// !Basandonos en la jerarquia padre, hijos, hermanos
// */
// const parent = document.getElementById('parent')  // Obtine al nodo padre
// console.log(parent)
// const children = parent.children  // Obtiene los nodos hijos
// console.log(children)
// const firstChild = parent.firstElementChild // Obtiene el primer nodo hijo
// console.log(firstChild)
// const lastChild = parent.lastElementChild  // Obtiene el ultimo nodo hijo
// console.log(lastChild)
// /* 
// Asi como accedemos a nodos hijos, tambien podemos acceder a nodos hermanos,
// pero no de los hijos, sino que hermanos del nodo padre, lo que se veria
// como los nodos tios de los hijos del nodo padre
// */
// const previousSibling = parent.previousElementSibling
// console.log(previousSibling)
// const nextSibling = parent.nextElementSibling
// console.log(nextSibling)

// ! Navegacion de nodo hijo, hacia nodo padre
const children2 = document.querySelector('li')
console.log(children2)

const parent2 = children2.parentNode
console.log(parent2)

const grandParent = children2.parentElement
console.log(grandParent)

const grandGrandParent = children2.closest('menu')
console.log(grandGrandParent)