// function Boca(fn) {
//   setTimeout(function () {
//     console.log("Somo la 12, somo los xeneixes");
//     fn()
//     console.log("Somo la 12, somo los xeneixes");
//     fn()
//   }, 1000);
// }

// function riBer() {
//   console.log("Me fui a la B por cagon");
// }


// Boca(riBer)


function suma (n1, n2, callback){
  let res = n1 + n2
  callback(res)
}

suma(10,20,mayor)

function mayor(n){
  if (n > 100) {
    console.log( `${n} elevado al cuadrado es ${n**2}`);
  }else{
    console.log( `${n} elevado al cubo  es ${n**3}`);
  }
}

function hacerAlgo(numero, callback) {
  const resultado = numero * 2;
  
  callback(resultado);
}

function miCallback(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

hacerAlgo(5, miCallback);
