const form = document.getElementById('myForm')

// Dado que con esto vamos a evitar que el formulario se 
// mande cuando damos clic al boton de este, tenemos 
// que pasar al evento para poder usar el eventObject
form.addEventListener('submit', (event)=>{

  event.preventDefault()  // Con este prevenimos el 
  // comportamiento base del formulario, evitando que 
  // la pagina se refresce

  const name = form.elements['name']  // de esta forma se va a buscar
  // dentro del form un elemento con el atributo name
  console.log(name) // y esto nos imprimira al objeto como tal

  // si queremos un valor en concreto , por ejemplo el valor del input
  // hacemos lo siguiente
  const value = form.elements['name'].value // Hace lo mismo que obtener el objeto
  // pero ahora solo nos devolvera al valor del elemento y no todo el objeto
  console.log(value)
})