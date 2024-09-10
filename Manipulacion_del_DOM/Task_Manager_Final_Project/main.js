//! Recuperar elementos del HTML
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

//! Agregar evento al formulario para que se manden los datos de este
taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // Obtenemos el input para el task y recuperamos el valor de esta
  const taskInput = document.getElementById('task-input')
  const task = taskInput.value

  // Validacion de la tarea
  if (task) {
    // Si la tarea existe, se agrega a a lista de tareas con la funcion createTaskElement
    taskList.append(createTaskElement(task))
    // Se limpia el valor de input despues de agregar la tarea
    taskInput.value = ''
  }
})

//! Funcion para agregar la tarea a la lista
const createTaskElement = task => {
  // Se crea un item en la lista tareas
  const li = document.createElement('li')
  // Pasamos la tarea del formulario al texto del elemento creado
  li.textContent = task
  // Creamos y agregamos un boton para borrar o editar la tarea
  li.append(createButton('❌'), 'delete-btn'), createButton('✏️', 'edit-btn')
  // retornamos el item que acabamos de crear
  return li
}

//! Funcion que se encarga de crear los botones de eliminar y editar
const createButton = (text, className) =>{
  // Creamos un elemento en nuestro HTML
  const btn = document.createElement('span')
  // Como texto y nombre de clase asignamos el valor correspondiente que recibimos 
  // como parametros al mandar a llamar la funcion
  btn.textContent = text
  btn.className = className
  // Retornamos el elemento creado
  return btn
}