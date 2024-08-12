const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessFull = true
    if (operationSuccessFull) {
      resolve('La operacion fue exitosa')
    } else {
      reject('Error al completar la opreacion')
    }
  }, 2000)
})

promise.then((successMessage) => {
  console.log(successMessage)
}).catch((errorMessage) => {
  console.log(errorMessage)
})