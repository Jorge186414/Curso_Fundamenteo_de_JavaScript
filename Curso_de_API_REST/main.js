const URL = 'https://hp-api.onrender.com/api/characters'
fetch(URL)
  .then(response => response.json())
  .then(data =>{
    const character = document.getElementById('character')
    character.src = data[0].image
    
    const characterName = document.getElementById('characterName')
    characterName.textContent = data[0].name
  }) 