const container = document.querySelector('.container')
const button = document.querySelector('button')

container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'green'
})

container.addEventListener('mouseout', () => {
  container.style.backgroundColor = 'red'
})
