//! Recuperar elementos del HTML
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

//! Cargamos lo que tenemos guardado en localStorage
loadTask()

//! Agregar evento al formulario para que se manden los datos de este
taskForm.addEventListener('submit', (event) => {
  // Evitamos el comportamiento normal del formulario
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
  // En base al eventObject validamos la clase que este tiene
  // al momento de que el padre(taskList) delega un evento al elemento
  // hijo(span) que presionamos se decide la validacion
  if (event.target.classList.contains('delete-btn')) {
    // Si la clase es delete-btn se ejecuta la funcion deleteTask ayudandonos 
    // del target del evento
    deleteTask(event.target.parentElement)
  } else if (event.target.classList.contains('edit-btn')) {
    // Si la clase es edit-btn se ejecuta la funcion editTask igualmente
    // ayudandonos del target del evento
    editTask(event.target.parentElement)
  }
})

//! Funcion para borrar un elemento, lo que equivale a borrar una tarea
const deleteTask = taskItem => {
  if (confirm('Segur@ que deseas borrar la tarea?')) {
    // Mandamos a llamar a la funcion removeFromLocaStorage, y este parametro
    // corresponde al nombre de la tarea que hay en el li donde damos clic 
    removeFromLocaStorage(taskItem.firstChild.textContent)
    taskItem.remove()
  }
}

//! Funcion para editar el elemento
const editTask = taskItem => {
  // Se muestra un promp que tendra la tarea a editar, pasada por parametro al 
  // mandar llamar la funcion 
  const newTask = prompt('Edita la tarea: ', taskItem.firstChild.textContent)
  // si borramos el texto no va a ejecutar nada, en casi contrario
  if (newTask !== null) {
    // cambiamos el texto del primer hijo del item por el nuevo ingresado en el promp
    taskItem.firstChild.textContent = newTask
    // Actualizamos lo almacenado en el localStorage
    updateLocalStorage()
  }
}

//! Persistencia de los datos con localStorage con una web api
const storeTaskInLocalStorage = task => {
  // Creamos una variable para las tareas, las parsearemos a un archivo JSON
  // primero obetenemos lo que hay en el el localStorage.
  // Y si no hay nada almacenamos en un array vacio
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  // Mandamos la nueva tarea al localStorage
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTask() {
  // Obtenemos lo que tenemos almacenado en el localStorage, si no hay 
  // algo almacenado se genera un array vacion
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  // Para cada tarea del localStorage vamos a crear un item dentro 
  // de nuestra lista de tareas
  tasks.forEach(task => {
    taskList.appendChild(createTaskElement(task))
  })
}

//! Eliminacion y edicion en el localStorage
const updateLocalStorage = () => {
  // Para obtener el nuevo cambio, primero obtenemos todo lo que tenga una etique
  // li en nuestra liesta de tareas, una vez obtenidos vamos a obtener el texto del
  // primer elemento del li, y todo esto lo vamos a pasar a un array con Array.from()
  const tasks = Array.from(taskList.querySelectorAll('li')).map((li) => li.firstChild.textContent)
  // Empujamos esto al localStorage para que almacene el cambio
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const removeFromLocaStorage = (taskContent) => {
  // Obtenemos las tareas del localStorage, y si no hay nada almacenamos un array vacion
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  // Filtramos lo que hay en la lista de tareas en base lo que se pasa como parametro
  const updateTasks = tasks.filter(task => task !== taskContent)
  // Seteamos la actualizacion en el localStorage
  localStorage.setItem('tasks', JSON.stringify(updateTasks))
}