function fetchData() {
  fetch('https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8').then(
    (response) => {
      response.json
    }).then((data) => {
      console.log(data)
    }).catch((reject) => {
      console.log(reject)
    })
}

async function fetchDataWithAsync() {
  try {
    let response = await fetch('https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8')
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const URLS = [
  'https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
  'https://hp-api.onrender.com/api/character/4c7e6819-a91a-45b2-a454-f931e4a7cce3',
  'https://hp-api.onrender.com/api/character/c3b1f9a5-b87b-48bf-b00d-95b093ea6390',
  'https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225',
  'https://hp-api.onrender.com/api/character/36bfefd0-e0bb-4d11-be98-d1ef6117a77a'
]

async function fetchCharacters() {
  try {
    for await (URL of URLS) {
      let response = await fetch(URL)
      let data = await response.json()
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}