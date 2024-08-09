// 1. find()
const multipleOf5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const firstNumberGraterThan10 = multipleOf5.find(
  number => number > 10
)
console.log(multipleOf5)
console.log(firstNumberGraterThan10)

// 2. findIndex()
const ramdomNumbers = [9, 7, 87, 56]
const indexNumber = ramdomNumbers.findIndex(
  number => number > 40
)
console.log(indexNumber)

// Exercise: Raffle Winner Verification Program
const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 1 },
  { id: 8, name: 'Michael', ticketNumber: 8 },
  { id: 15, name: 'Emily', ticketNumber: 15 },
  { id: 47, name: 'Charlie', ticketNumber: 47 }
]

function findWinnerByName(name) {
  const winner = winningParticipants.find(
    participants => participants.name === name)
  return winner || 'No winner found with that name :('
}

function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(
    participants => participants.ticketNumber === ticketNumber
  )
  return index !== 1 ? index: 'No winner with that ticket number'
}

function displayWinnerInformation(winner){
  if(winner !== undefined && winner != null && winner !== 'No winner found with that name :('){
    console.log('Winner information: ', winner)
  }else{
    console.log('No winner found')
  }
}

const winnerByName = findWinnerByName('Jennifer')
const indexWinnerByTicketNumber = findIndexWinnerByTicket(15)

displayWinnerInformation(winnerByName)
console.log('Index of winner by ticker number: ', indexWinnerByTicketNumber)