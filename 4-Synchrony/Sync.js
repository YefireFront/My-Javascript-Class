

  // Definimos una función asíncrona que realiza una solicitud HTTP
async function obtenerDatos() {
    try {
      // Hacemos una solicitud GET a una API
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      // Verificamos si la solicitud fue exitosa
      if (!respuesta.ok) {
        throw new Error('No se pudo obtener la información');
      }
      
      // Parseamos la respuesta a JSON
      const datos = await respuesta.json();
      
      // Devolvemos los datos obtenidos
      return datos;
    } catch (error) {
      // Manejamos los errores
      console.error('Se produjo un error:', error);
      throw error; // Lanzamos el error nuevamente para que pueda ser manejado externamente si es necesario
    }
  }
  
  // Llamamos a la función asíncrona y manejamos los datos
  obtenerDatos()
    .then(data => {
      console.log('Datos obtenidos:', data);
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });
  

    // Definimos una función asíncrona para obtener información de un Pokémon
async function obtenerInfoPokemon(pokemonName) {
    try {
      // Construimos la URL de la API con el nombre del Pokémon
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
      
      // Hacemos una solicitud GET a la API de Pokémon
      const respuesta = await fetch(apiUrl);
      
      // Verificamos si la solicitud fue exitosa
      if (!respuesta.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      
      // Parseamos la respuesta a JSON
      const datosPokemon = await respuesta.json();
      
      // Devolvemos los datos del Pokémon
      return datosPokemon;
    } catch (error) {
      // Manejamos los errores
      console.error('Se produjo un error:', error);
      throw error; // Lanzamos el error nuevamente para que pueda ser manejado externamente si es necesario
    }
  }
  
  // Llamamos a la función asíncrona para obtener información sobre un Pokémon
  const nombrePokemon = 'pikachu'; // Cambia el nombre del Pokémon según tu elección
  obtenerInfoPokemon(nombrePokemon)
    .then(data => {
      console.log(`Información de ${nombrePokemon.toUpperCase()}:`, data);
    })
    .catch(error => {
      console.error(`Error al obtener información de ${nombrePokemon.toUpperCase()}:`, error);
    });
  