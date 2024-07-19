// 1. null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

// 2. undefined
let name
console.log(name)

// 3. symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)
const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// 4. bigint
const bigNumber = 9879789797234234897979867979n
console.log(bigNumber)