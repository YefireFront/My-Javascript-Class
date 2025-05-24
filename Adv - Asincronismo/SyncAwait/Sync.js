

async function getUserInfo(userIds) {
  const userInfo = [];
  for (const userId of userIds) {
    try {
      const user = await fetchUser(userId);
      userInfo.push(user);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return userInfo;
}

// Uso de la función
async function example() {
  const userIds = [1, 2, 3];
  const users = await getUserInfo(userIds);
  console.log('Users:', users);
}

example();



async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Fetched Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();



async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched Pokemon Data:', data);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
}

fetchPokemon('pikachu');