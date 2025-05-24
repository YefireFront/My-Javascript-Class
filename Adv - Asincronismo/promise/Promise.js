//!Flyweight
//!Middleweight
//!Heavyweigh



let phone = {
  Brand: "Iphone",
  Model: "14",
  champions: ["Super Liga", "Champiosn", "Libertadores"],
};

function WhatYouWin(win) {
  return new Promise((resolve, reject) => {
    if (win) {
      console.log(`You won this championship`);
      for (let i = 0; i < win.champions.length; i++) {
        console.log(win.champions[i]);
      }
      resolve(win);
    } else {
      reject(`You Dont Win`);
    }
  });
}

function miProm(phone) {
  return new Promise((resolve, reject) => {
    if (phone.champions) {
      resolve(phone);
    } else {
      reject("No obtuviste un Phone");
    }
  });
}

miProm(phone).then((m) =>{ 
  return WhatYouWin(m)
}).then(res=>{

  if (res.champions.length >= 2) {
    console.log(`Felificationes tiene mas de 2 campeonastos tines ${res.champions.length}`);
    
  }
})





  //% Otra anidada

function descargarContenido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("¡Contenido descargado!"); // Simulación de una descarga exitosa
    }, 2000);
  });
}

function procesarContenido(contenido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Contenido procesado: ${contenido.toUpperCase()}`);
    }, 1500);
  });
}

function mostrarResultado(resultado) {
  console.log(resultado);
}

descargarContenido()
  .then((contenidoDescargado) => {
    console.log("Descarga completa:", contenidoDescargado);
    return procesarContenido(contenidoDescargado);
  })
  .then((contenidoProcesado) => {
    console.log("Procesamiento completo:", contenidoProcesado);
    mostrarResultado(contenidoProcesado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


//!ERROR 

function descargarContenido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random();
      const exito = num > 0.5; // Simula un error aleatorio
      if (exito) {
        console.log(`Velocidad superior a 0.5 VELOCIDAD DE : ${num}`);
        resolve(`¡Contenido descargado`); // Descarga exitosa
      } else {
        reject(`Error en la descarga, velocidad inferior a 0.5 VELOCIDAD DE  : ${num}`); // Descarga fallida
      }
    }, 1000);
  });
}

function procesarContenido(contenido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Contenido procesado: ${contenido.toUpperCase()}`);
    }, 2500);
  });
}

function mostrarResultado(resultado) {
  console.log(resultado);
}

descargarContenido()
  .then((contenidoDescargado) => {
    console.log("Descarga completa:", contenidoDescargado);
    return procesarContenido(contenidoDescargado);
  })
  .then((contenidoProcesado) => {
    console.log("Procesamiento completo:", contenidoProcesado);
    mostrarResultado(contenidoProcesado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



  
  

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




//% Ejercicio 5
function checkStock(item) {
  const stockDatabase = {
    apple: 10,
    banana: 0,
    orange: 5,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stockDatabase[item] > 0) {
        resolve(`The item "${item}" is in stock with quantity: ${stockDatabase[item]}`);
      } else {
        reject(`The item "${item}" is out of stock`);
      }
    }, 1500);
  });
}

checkStock('banana')
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });




















/*
Simular una compra en línea:
Crea una función simularCompra que acepte un objeto con información de un producto a comprar. La promesa debe resolver con un mensaje de confirmación si la compra es exitosa (simula esto con una probabilidad del 70%) o rechazar con un mensaje de error si la compra falla.

*/



//* Crea una promesa que resuelva con la cadena "Rasengan" después de 1 segundo.

function rasenganPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rasengan");
    }, 1000);
  });
}


//* Crea una función que tome un número como parámetro y devuelva una promesa que resuelva con ese número duplicado.

function duplicado(n) {
  return new Promise((resolve, reject) => {
    resolve(`${n}${n}`);
  });
}

duplicado(9).then((res) => {
//   console.log(res);
});

//*Crea una promesa que se rechace después de 500 milisegundos con el mensaje "Sasuke no te acepta".

function sasuke(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name == "Sasuke") {
        resolve("Sasuke regresa ");
      } else {
        reject("Sasuke no te acepta");
      }
    });
  }, 500);

}

sasuke("Sauke")
  .then((rese) => {
    // console.log(rese);
  })
  .catch((res) => {
    // console.log(res);
  });


  //*Crea una promesa que se resuelva después de 2 segundos con la cadena "Nunca me rendiré".

  function dontgiveup() {

   return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("Nunca me rendiré")
            
        }, 2000);
    })
    
  }


  dontgiveup()
  .then(res=>{
    // console.log(res);
  })


//*Crea una función que devuelva una promesa que se resuelva con la cadena "Te amo, Naruto" después de 3 segundos.

function love(naruto) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (naruto == 'yes') {
                resolve ('Te amo naruto')
            }else{
                reject('Te amo sasuke')
            }
        }, 3000);
    })
    
}


love('yes')
.then((res)=>{
    // console.log(res);
})
.catch((res)=>{
    console.log(res);
})



//*Crea una promesa que se resuelva con la cadena "Gomu Gomu no... ¡Pistol!" después de 2 segundos.

function luffy() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Gomu Gomu noooooo... ¡PISTONOOO!')
        }, 2000);
    })
    
}



luffy()
.then((res)=>{
    // console.log(res);
})


//*Crea una función que tome un objeto con una propiedad "animal" 
//*y devuelva una promesa que se resuelva con el objeto transformado después de 3 segundos.

const PETS = {
    animal:'Perro',
    name: 'Lucky',
    raza: 'retrever',
    trans: false
}
function animal(pet) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pet.trans=true
            resolve(pet)
        }, 3000);
    })
    
}

animal(PETS)
.then((res)=>{
    // console.log(res);
})



//*Crea una promesa que se resuelva después de 5 segundos con una lista de libros que Robin ha investigado.

const BOOKS = ['atomic Habit','If you dream you get it', '5am club']

function robin(book) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(book)
        }, 5000);
    })
}


robin(BOOKS)
.then((res)=>{
    // console.log(res);
})



//*Crea una función que simule la búsqueda del tesoro de Luffy, 
//*donde la promesa se resuelve después de un tiempo aleatorio entre 1 y 10 segundos con un mensaje de tesoro encontrado.




function onePiece(max,min) {

    return new Promise((resolve, reject) => {
        timeout = Math.random()* (max - min) + min;
        timeout= Math.round(timeout)
        let mili = timeout * 1000
        
        setTimeout(() => {
            resolve(`tesoro encontrado despue de ${timeout} segundos`);
        }, mili);
    })
    
}


onePiece(15,1)
.then((res)=>{
    // console.log(res);
})




//* Crea una promesa que se resuelva con la cadena "Kamehameha" 
//*después de 1 segundo y luego se rechace con la cadena "No es suficiente" después de 3 segundos.



function kame() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('KameHame Ha')
        }, 1000);
        setTimeout(() => {
            reject('Its not enough')
        }, 3000);
        
    })
    
}







//*Crea una función que tome un nivel de entrenamiento y devuelva una promesa que se resuelva con el poder de Vegeta 
//*después de ese entrenamiento, después de 5 segundos.

function gokuTransformation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("¡Super Saiyan!");
      }, 2000);
      
    });
  }
  
  gokuTransformation()
    .then((result) => {
      console.log(result);
      return new Promise((resolve) => {
          setTimeout(() => {
            resolve("¡Super Saiyan Blue!");
          }, 4000);
        
      })
    })
    .then(res=>{
        console.log(res);
    })

    