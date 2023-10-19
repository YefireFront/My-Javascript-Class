


fetch(`${apiUrl}?limit=10`)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;
    pokemons.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
            PokemonList.push(pokemonData.name) 
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos del Pokémon:', error);
        });
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener la lista de Pokémon:', error);
  });