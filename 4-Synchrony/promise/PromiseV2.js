function squrt(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * value);
    }, 2000);
  });
}

function expo(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        Number: num,
        cuadrado: num * num,
        cubo: num * num * num,
        half: num / 2,
      });
    }, 1000);
  });
}

// squrt(5)
//   .then((res) => {
//     console.log(res);
//     return expo(res);
//   })
//   .then((res) => {
//     console.log(res);
//   });



  // Ejemplo 1: Promesa que resuelve después de un tiempo determinado
const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`La operación se completó después de ${ms} milisegundos`);
      }, ms);
    });
  };
  
  delay(2000).then((mensaje) => {
    console.log(mensaje); // La operación se completó después de 2000 milisegundos
  });


