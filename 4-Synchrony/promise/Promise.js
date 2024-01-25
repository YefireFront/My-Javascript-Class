//* Calvo man

//$Creamos un objeto

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
      reject(`You Dont Wint`);
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

// miProm(phone)
// .then((m) =>{ 
//   return WhatYouWin(m)
// })
// .then(res=>{

//   if (res.champions.length >= 2) {
//     console.log(`Felificationes tiene mas de 2 campeonastos tines ${res.champions.length}`);
    
//   }
// })




 //*Mistake 

// const miPromesa1 = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     const numeroAleatorio = Math.random();
//     if (numeroAleatorio >= 0.5) {
//       resolve(numeroAleatorio);
//     } else {
//       reject(new Error(` numeor menor a 0.5 ---> ${numeroAleatorio}`));
//     }
//   }, 1000);
// });

// miPromesa1
//   .then((resultado) => {
//     console.log("Promesa resuelta:", resultado);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });


//? Promesas en cadena  

const promesa1 = new Promise((resolve) => resolve(1));
const promesa2 = new Promise((resolve) => resolve(2));
const promesa3 = new Promise((resolve) => resolve(3));

// promesa1
//   .then((valor) => {
//     console.log(valor);
//     return promesa2;
//   })
//   .then((valor) => {
//     console.log(valor);
//     return promesa3;
//   })
//   .then((valor) => {
//     console.log(valor);
//   });


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
