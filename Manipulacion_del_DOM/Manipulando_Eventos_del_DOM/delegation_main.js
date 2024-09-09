// Recuperamos los elementos de la lista
const listItems = document.querySelectorAll('p');

// Agregamos un evento a cada elemento de la lista
listItems.forEach((item) => { // ahora por cada elemento de la lista
  // pasa el item y se le agrega un evento de click, para 
  // posteriormente recuperar el eventObject para poder
  // cambiar una clase de CSS con ayuda de toggle,
  // alternandola, si la tiene la va a quitar, y si no
  // la tiene la va a agregar
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("highlight");
  });
});

// Uso de Delegetion Events
const list =document.querySelector('ul')  // Obtenemos la lista completa
list.addEventListener(('click'), (event) =>{  // Volvemos a
  // asignar un evento de click a nuestro elemento y pasamos
  // el eventObject para la manipulacion.

  // ahora con el objeto que genera se va a obtener el 
  // elemento li mas cercano al target, y se va a alternan
  // la clase highlight al igual que antes, 
  // NOTA: Se debe especificar a que elemento mas cercano del
  // target, por que en caso de que la etiqueta li tenga parrafo,
  // la clase se le cambia a ese parrafo y no al li como tal,
  // de esta forma nos aseguramos que siempre afectara 
  // al item dentro de nuestra lista y no al texto de nuestro item
  event.target.closest('li').classList.toggle('highlight')
})