

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
  const nombrePokemon = 'pichu'; // Cambia el nombre del Pokémon según tu elección
  obtenerInfoPokemon(nombrePokemon)
    .then(data => {
      console.log(`Información de ${nombrePokemon.toUpperCase()}:`, data);
    })
    .catch(error => {
      console.error(`Error al obtener información de ${nombrePokemon.toUpperCase()}:`, error);
    });
  

  

     //%
     async function procesarDatos(datos) {
      for (let dato of datos) {
          let resultado = await procesarDato(dato);
          console.log(resultado);
      }
  }
  
  procesarDatos([1, 2, 3]);


  //%
  async function obtenerDatos() {
    try {
        let datos = await fetchData();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

obtenerDatos();

//%
async function obtenerDatos() {
  let [datos1, datos2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(datos1, datos2);
}

obtenerDatos();