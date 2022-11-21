const api_url = 'https://coderbyte.com/api/challenges/json/age-counting'

async function getKeys() {
  const response = await fetch(api_url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  const values = Object.values(data).toString().split(', ')

  const keys = []

  values.map((element, index, array) => {
    if (element == 'age=30') {
      keys.push(array[index - 1])
    }
  })

  return keys
}

getKeys()
