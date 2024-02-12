
  

//% Ejercicoo 1
/*  Buscar información de un usuario:
  Crea una función buscarUsuario que acepte un nombre de usuario como parámetro y devuelva una promesa.
  Esta promesa debe resolver con la información del usuario si se encuentra en una base de datos simulada
  o rechazar con un mensaje de error si el usuario no existe.
*/


const baseDeDatosUsuarios = {
  usuario1: {
    nombre: "Juan",
    edad: 25,
    email: "juan@example.com"
  },
  usuario2: {
    nombre: "María",
    edad: 30,
    email: "maria@examplecom"
  },
  usuario3: {
    nombre: "Pedro",
    edad: 128,
    email: "pedro@example.com"
  }
};

const searchInformation = (name)=>{
  let user = `the user ${name} is not in the DB `
  return new Promise((resolve, reject) => {
    for (const key in baseDeDatosUsuarios) {
      const element = baseDeDatosUsuarios[key];
      if (element.nombre.toUpperCase() == name.toUpperCase()) {
        user = element 
      }
  }
    if (user) {
      resolve(user)
    }else{
      reject(user)
    }
    
  })
}

// searchInformation('pedro').then((res)=>{
//   console.log(res);
// })



//% Ejercicoo 2
/*
Obtener datos de una API:
Utiliza la API pública de JSON Placeholder (https://jsonplaceholder.typicode.com/) 
para crear una función obtenerPublicaciones que devuelva una promesa. 
Esta promesa debe resolver con un arreglo de publicaciones obtenidas de la API o rechazar con un mensaje de error 
si hay algún problema de conexión.
*/
function obtenerPublicaciones() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las publicaciones');
        }
        return response.json();
      })
      .then(publicaciones => {
        resolve(publicaciones);
      })
      .catch(error => {
        reject(error);
      });
  });
}

obtenerPublicaciones()
  .then(publicaciones => {
    console.log('Publicaciones obtenidas:', publicaciones);
  })
  .catch(error => {
    console.error(error);
  });



//% Ejercicoo 3
/*
Simular una tarea asíncrona:
Crea una función realizarTarea que simule una tarea asíncrona que tarda un tiempo variable en completarse 
(entre 1 y 5 segundos). La promesa debe resolver con un mensaje de éxito después de completar
 la tarea o rechazar con un mensaje de error si la tarea falla.
*/

const realizarTarea = ()=>{
  const numeroAleatorio = Math.floor(Math.random() * 5000) + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(`Task done after ${numeroAleatorio/1000}seg`)
    },numeroAleatorio)
  })
}

// realizarTarea().then((res)=>{
//   console.log(res);
// })


//% Ejercicoo 4
/*
Validar una operación:
Crea una función validarOperacion que acepte un número como parámetro. 
La promesa debe resolver si el número es mayor que 10, o rechazar si es menor o igual a 10.
 Agrega un tiempo de espera de 2 segundos antes de resolver o rechazar la promesa para simular una operación asíncrona.
*/


const operValidation = (num)=>{

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num>10) {
        resolve(`The number ${num} is more than 10 `)
      } else{
        reject(`The number ${num} is less than 10 or 10`)
        
      }
    }, 2000);
  })
}


// operValidation(5).then((res)=>{
//   console.log(res);
// }).catch((res)=>{
//   console.log(res);
// })
























/*
Simular una compra en línea:
Crea una función simularCompra que acepte un objeto con información de un producto a comprar. La promesa debe resolver con un mensaje de confirmación si la compra es exitosa (simula esto con una probabilidad del 70%) o rechazar con un mensaje de error si la compra falla.

*/