//* Calvo man

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

// descargarContenido()
//   .then((contenidoDescargado) => {
//     console.log("Descarga completa:", contenidoDescargado);
//     return procesarContenido(contenidoDescargado);
//   })
