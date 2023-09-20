/*
 * Calvo man
 */

// let phone = {
//   Brand: "Iphone",
//   Model: "14",
//   champions: ["Super Liga", "Champiosn", "Libertadores"],
// };

// function WhatYouWin(win) {
//   return new Promise((resolve, reject) => {
//     if (win) {
//       console.log(`You won this championship`);
//       for (let i = 0; i < win.champions.length; i++) {
//         console.log(win.champions[i]);
//       }
//     } else {
//       reject(`You Dont Wint`);
//     }
//   });
// }

// function miProm() {
//   return new Promise((resolve, reject) => {
//     let championship = true;

//     if (championship) {
//       resolve(phone);
//     } else {
//       reject("No obtuviste un Phone");
//     }
//   });
// }

// miProm().then((m) => {
//      return WhatYouWin(m);
//   }).then((m) => {
//     console.log(m);
//   }).catch((m)=>{
//     console.log(m);
//   })

/*
 * The beargd */

// const miPromesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(42); // Resuelve la promesa con el número 42 después de 2 segundos.
//   }, 2000);
// });

// miPromesa.then((resultado) => {
//   console.log(resultado); // Debería mostrar 42 después de 2 segundos.
// });

/*
 *Mistake */

// const miPromesa1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Resuelve la promesa con el número 42 después de 2 segundos.
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

/*
? Promesas en cadena  */

// const promesa1 = new Promise((resolve) => resolve(1));
// const promesa2 = new Promise((resolve) => resolve(2));
// const promesa3 = new Promise((resolve) => resolve(3));

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




  /*
  % Otra anidada*/



// function descargarContenido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("¡Contenido descargado!"); // Simulación de una descarga exitosa
//     }, 2000);
//   });
// }

// function procesarContenido(contenido) {
//   return new Promise((resolve, reject) => {
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


/*
!ERROR */

function descargarContenido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.5; // Simula un error aleatorio
      if (exito) {
        resolve("¡Contenido descargado!"); // Descarga exitosa
      } else {
        reject("Error en la descarga"); // Descarga fallida
      }
    }, 2000);
  });
}

function procesarContenido(contenido) {
  return new Promise((resolve, reject) => {
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
