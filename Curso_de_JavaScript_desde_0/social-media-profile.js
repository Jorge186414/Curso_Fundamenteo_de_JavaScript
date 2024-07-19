// Social Media Profile
// 1. User Information
const userName = 'Cracker'
const fullName = 'Jorge Miranda'
const age = 25
const isStudent = true

// 2. Address
const address = {
    stree: 'Privada Ailes',
    city: 'Jilotepec',
    state: 'Mexico',
    zipCode: 54240
}

// 3. Hobies
const hobbies = ['Estudiar', 'Ver peloculas y series', 'Escuchar Musica', 'Jugar Videojuegos']

// 4. Generating personalized bip
const personalBio = 
`Hi i'm ${fullName}. 
I'm ${age} years old.
I live in ${address.city} Estado de ${address.state}.
I love ${hobbies.join(', ')}.
Follow me for see my progress in the course. ;)`

// 5. Print the user profile and bio
console.log(personalBio)

