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
console.log(input.value)  // Aqui nos imprime el valor inicial, declarado
// en los atributos del input
input.value = 'Nombre completo' 
console.log(input.value)  // Ya que  modificamos el valor de la propieda, 
// directamente con JavaScript ya no mostrara 'Nombre', mostrar 'Nombre completo'

//! 2. Modificacion de texto en HTML
const title = document.querySelector('#app-title')
console.dir(title)
title.textContent = 'Texto cambiado desde JavaScript' // Este y el metodo de abajo
// si van a cambiar el texto que tiene esta etiqueta, dado que no es un
// atributo de la etiqueta
title.innerText = 'Otro titulo cambiado'