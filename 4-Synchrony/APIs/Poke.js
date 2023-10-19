// const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
// let PokemonList = []

// fetch(`${apiUrl}?limit=9`)
//   .then(response => response.json())
//   .then(data => {
//     const pokemons = data.results;
//     pokemons.forEach(pokemon => {
//       fetch(pokemon.url)
//         .then(response => response.json())
//         .then(pokemonData => {
//             PokemonList.push(pokemonData.name) 
//         })
//         .catch(error => {
//           console.error('Hubo un error al obtener los datos del Pokémon:', error);
//         });
//     });
//   })
//   .catch(error => {
//     console.error('Hubo un error al obtener la lista de Pokémon:', error);
//   });
  

// async function ejecucionAsincronica() {
//   await new Promise(resolve => setTimeout(resolve,2000));  
//   console.log(PokemonList);
// }

// ejecucionAsincronica()

function cards() {

  let card = document.createElement('div')
  console.log(card);



  
}



cards()


