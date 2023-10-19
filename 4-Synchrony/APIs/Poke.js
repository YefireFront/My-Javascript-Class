const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
let PokemonList = []

fetch(`${apiUrl}?limit=151`)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;
    pokemons.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          
            PokemonList.push(
              {
                name:pokemonData.name,
                type:pokemonData.types[0].type.name,
                img:pokemonData.sprites.front_default
              }
              
              ) 

           
        })
        .catch(error => {
          console.error('Hubo un error al obtener los datos del Pokémon:', error);
        });
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener la lista de Pokémon:', error);
  });
  

async function ejecucionAsincronica() {
  await new Promise(resolve => setTimeout(resolve,1000));  
  cards(PokemonList)
}


function cards(ArrayPokemon) {
  const $container = document.querySelector(".container")

  ArrayPokemon.forEach(pokemon =>{


                 //* CREANDO CARTAD PRINCIPALES
  //%CREATIND
  const $card = document.createElement("div")
  //%STYLING
  $card.classList.add('card')
  //%INSERTING
  $container.append($card)

                //* CREANDO CARTAD DIV INFO  
  //%CREATING
  const $info       = document.createElement("div");  
  const $info__name = document.createElement("h2"); 
  const $info__type = document.createElement("div") ;
  const $i           = document.createElement("i");
  const $p           = document.createElement("p");
  //%STYLING
  $info.classList.add('info');     
  $info__name.classList.add('info__name')
  $info__type.classList.add('info__type')   
  
  if (pokemon.type == 'fire') {
    $i.classList.add('fa-solid' , 'fa-fire')
    $i.style ="color: #f15d1e";
    $info__name.style.color = '#f15d1e';
    
  }
  if (pokemon.type == 'grass') {
    $i.classList.add('fa-solid' , 'fa-leaf')
    $i.style ="color:#25b686"
    $info__name.style.color = '#25b686';
    
  }

  if (pokemon.type == 'water') {
    $i.classList.add('fa-solid', 'fa-location-pin','fa-rotate-180')
    $i.style ="color:#2968d6"
    $info__name.style.color = '#2968d6';
    
  }
 
  //%INSERTING  
  $card.append($info)
  $info.append($info__name,$info__type)
  $info__type.append($i,$p)
  //%TEXTING
  $info__name.textContent= pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) 
  $p.textContent= pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1) 


                    //* CREANDO CARTAD DIV IMGAGE  
  //%CREATING
  const $imagen       = document.createElement("div");                  
  const $img      = document.createElement("img");                  
  //%STYLING
  $imagen.classList.add('imagen');
  $img.setAttribute('src', pokemon.img);
  //%INSERTING  
  $imagen.append($img)
  $card.append($imagen)

})
  
}




ejecucionAsincronica()

