const greeting = function (name) {
    return `Hi, ${name}`
}


const newGreeting = (name) => {
    return `Hi, ${name}`        // Explicit return
}

const newGreetingImplicit = name => `Hi, ${name}`       // Implicit return 
const greetingWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding
const finctionalCharacter = {
    name: 'Monkey D Luffy',
    messagaWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`)    // De esta forma dado que no tiene contexto
                                                        // de this, this.name marcara undefined

        console.log(`${finctionalCharacter.name} says: ${message}`)    // Para que lo muestre se debe de acceder 
                                                        // directamente a la propiedad del objeto
    }
}

finctionalCharacter.messagaWithTraditionalFunction('I will be the king of the pirates!!.')
finctionalCharacter.messageWithArrowFunction('I will be the king of the pirates!!.')