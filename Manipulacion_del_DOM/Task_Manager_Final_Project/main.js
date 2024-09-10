// Recuperar elementos del HTML
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

// Agregar evento al formulario
taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // Obtenemos el input para el task y recuperamos el valor de esta
  const taskInput = document.getElementById('task-input')
  const task = taskInput.value 
  console.log(task)
})