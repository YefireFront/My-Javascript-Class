async function myAsyncFunction() {
    // Asynchronous code here
  }
  

  async function fetchData() {
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    return data;
  }
  

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
  