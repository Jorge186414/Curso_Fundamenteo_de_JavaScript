//! Recuperar elementos del HTML
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

//! Cargamos lo que tenemos guardado en localStorage
loadTask()

//! Agregar evento al formulario para que se manden los datos de este
taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // Obtenemos el input para el task y recuperamos el valor de esta
  const taskInput = document.getElementById('task-input')
  const task = taskInput.value.trim()

  // Validacion de la tarea
  if (task) {
    // Si la tarea existe, se agrega a a lista de tareas con la funcion createTaskElement
    taskList.append(createTaskElement(task))
    // Almanenar la tarea en localStorage
    storeTaskInLocalStorage(task)
    // Se limpia el valor de input despues de agregar la tarea
    taskInput.value = ''
  }
})

//! Funcion para agregar la tarea a la lista
function createTaskElement(task) {
  // Se crea un item en la lista tareas
  const li = document.createElement('li')
  // Pasamos la tarea del formulario al texto del elemento creado
  li.textContent = task
  // Creamos y agregamos un boton para borrar o editar la tarea
  li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn'))
  // retornamos el item que acabamos de crear
  return li
}

//! Funcion que se encarga de crear los botones de eliminar y editar
function createButton(text, className) {
  // Creamos un elemento en nuestro HTML
  const btn = document.createElement('span')
  // Como texto y nombre de clase asignamos el valor correspondiente que recibimos 
  // como parametros al mandar a llamar la funcion
  btn.textContent = text
  btn.className = className
  // Retornamos el elemento creado
  return btn
}

//! Uso de delegacion de evento para los botones de editar y borrar
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    deleteTask(event.target.parentElement)
  } else if (event.target.classList.contains('edit-btn')) {
    editTask(event.target.parentElement)
  }
})

//! Funcion para borrar un elemento, lo que equivale a borrar una tarea
const deleteTask = taskItem => {
  if (confirm('Segur@ que deseas borrar la tarea?')) {
    taskItem.remove()
  }
}

//! Funcion para editar el elemento
const editTask = taskItem => {
  const newTask = prompt('Edita la tarea: ', taskItem.firstChild.textContent)
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask
  }
}

//! Persistencia de los datos con localStorage con una web api
const storeTaskInLocalStorage = task => {
  // Creamos una variable para las tareas, las parsearemos a un archivo JSON
  // primero obetenemos lo que hay en el el localStorage.
  // Y si no hay nada lo almacenamos en un array vacio
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  // Mandamos la nueva tarea al localStorage
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  tasks.forEach(task => {
    taskList.appendChild(createTaskElement(task))
  })
}