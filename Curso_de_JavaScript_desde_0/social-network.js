/*
REQUERIMIENTOS:
  1. El usuario debe poder ingresar usuario y contrasenia.
  2. El sistema debe ser capaz de validar si el usuario existe 
  en la base de datos.
  3. Si el usuario y contrasenia con correctos, el sistema
  debe mostrar el timeline del usuario.
  4. Si el usuario y contrasenia son incorrectos, el sistema
  debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const userDatabase = [
  {
    id: 1,
    username: 'Jorge',
    password: '1234'
  },
  {
    id: 2,
    username: 'Jennifer',
    password: '654789'
  },
  {
    id: 3,
    username: 'Mariana',
    password: '98765'
  }
]

const usersTimeline = [
  {
    id: 1,
    username: 'Jorge',
    timeline: 'Me empieza a gustar JavaScript'
  },
  {
    id: 2,
    username: 'Jennifer',
    timeline: 'Me gusta la programacion front-end'
  },
  {
    id: 3,
    username: 'Mariana',
    timeline: 'A mi no me gusta CSS'
  }
]

const username = prompt('Cual es tu nombre de usuario?')
const password = prompt('Cual es tu contrasenia')
let index = undefined

function findUser(username, password) {
  let counter = 0
  for (user in userDatabase) {
    if (userDatabase[user].username === username && userDatabase[user].password === password) {
      alert('Bienvenido')
      index = userDatabase[user].id
      showTimeline(index)
    } else {
      counter++
    }
    if (counter == userDatabase.length) {
      alert('Credenciales no validas')
    }
  }
}

function showTimeline(index) {
  if (index != undefined) {
    for (timeline in usersTimeline) {
      if (usersTimeline[timeline].id === index) {
        console.log(`${usersTimeline[timeline].username} publico:
          ${usersTimeline[timeline].timeline}`)
      }
    }
  }
}

findUser(username, password)



