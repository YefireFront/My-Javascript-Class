/*
//!Manipulación de Arrays:
//*Crea una función que reciba un array de números y devuelva la suma de los números pares.

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8];
// const arrayNum2 = [1, 25, 3, 45, 8, 8];

// const sumArrayPares = arrayNum.filter((num) => num % 2 == 0).reduce((acum, num) => acum + num, 0);




//*Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array que contenga solo los elementos únicos de ambos arrays.


// function uniqueElemnt(array1, array2) {
//   const uniqueArray = []
//   let largeArray = array1.length >= array2.length ? array1 : array2;
//   let shortArray = array1.length > array2.length ? array2 : array1;

//   for (let i = 0; i < largeArray.length; i++) {
//       let unique = true
//     for(let j = 0; j < shortArray.length; j++){
//       if(largeArray[i] == shortArray[j]){
//         unique = false
//         break
//       }
//     }
//     if (unique == true) uniqueArray.push(largeArray[i])
//   }
//   return uniqueArray
// }

// uniqueElemnt(arrayNum, arrayNum2);





//*mplementa una función que reciba un array de objetos y devuelva un nuevo array con solo los objetos que tengan una propiedad específica.

//   const animes = [
//     { 
//         titulo: 'Naruto',
//         genero: 'Shonen',
//         episodios: 220,
//         estudio: 'Studio Pierrot',
//         popularidad: 'Alta'
//     },
//     { 
//         titulo: 'One Piece',
//         episodios: 1000,
//         estudio: 'Toei Animation',
//         popularidad: 'Muy Alta'
//     },
//     { 
//         titulo: 'Attack on Titan',
//         genero: 'Shonen',
//         episodios: 75,
//         estudio: 'Wit Studio',
//     },
//     { 
//         titulo: 'Death Note',
//         episodios: 37,
//         estudio: 'Madhouse',
//         popularidad: 'Alta'
//     },
//     { 
//         titulo: 'My Hero Academia',
//         genero: 'Shonen',
//         episodios: 113,
//     }
// ];


//   function speProperty (objArra, prop){

//     objArra.forEach(obj=>{
//       for (const key in obj) {
//         if (key == prop) {
//           console.log(obj)
//         }
       
//         }
//       })
//     }
    



//   speProperty(animes, 'genero')



  //!Programación Funcional

 //*Define una función map personalizada que emule el comportamiento del método map de los arrays. 

// function mapPersonalizada(arr, callback) {
//   const resultado = [];

//   for (let i = 0; i < arr.length; i++) {
//       resultado.push(callback(arr[i], i, arr));
//   }

//   return resultado;
// }

// let res = mapPersonalizada(arrayNum,function(numero) {
//   return numero * numero;
// });




//*Crea una función filter propia que funcione como el método filter de los arrays.

// const numbers = [1, 2, 3, 4, 5, 6];
// function customFilter(array, callback) {
//   const filteredArray = [];
  
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }
  
//   return filteredArray;
// }

// const evenNumbers = customFilter(numbers, function(num) {
//   return num % 2 === 0;
// });


  //! Promesas y Asincronía:

//* Escribe una función que simule una solicitud HTTP utilizando promesas. Debe devolver una promesa que se resuelva después de un tiempo aleatorio.

// function descargarContenido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("¡Contenido descargado!"); // Simulación de una descarga exitosa
//     }, 2000);
//   });
// }

// function procesarContenido(contenido) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Contenido procesado: ${contenido.toUpperCase()}`);
//     }, 1500);
//   });
// }

// function mostrarResultado(resultado) {
//   console.log(resultado);
// }

// descargarContenido()
//   .then((contenidoDescargado) => {
//     console.log("Descarga completa:", contenidoDescargado);
//     return procesarContenido(contenidoDescargado);
//   })
//   .then((contenidoProcesado) => {
//     console.log("Procesamiento completo:", contenidoProcesado);
//     mostrarResultado(contenidoProcesado);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });



*/


//*Crea una función que utilice async/await para consumir una API externa y devolver los datos procesados.





async function obtenerListaAnimes() {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit10`);
      const result = await response.json();
      const animeList = result.data
      // console.log(animeList)
      // animeList.forEach(element => {
      //   console.log(element.title)
      // });
      
      const res = animeList.map(anime=> {
        return {
          name: anime.title,
          episodios: anime.episodes,
          // genero: anime.genres,
          popularidad: anime.popularity,
          Puntuacion: anime.score,
          ranking: anime.rank,
          // img: anime.images
        }
      }) 
      console.log(res)
      
  }


  obtenerListaAnimes()



  //*Implementa una función que realice múltiples solicitudes HTTP en paralelo y devuelva los resultados una vez que todas las solicitudes se completen.
  