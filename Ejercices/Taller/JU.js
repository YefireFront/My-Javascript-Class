/*
? 1 Escribe un bucle "for" que recorra e imprima todos los elementos de un array.
*/

const America = ["Cartillo", "Julian Vasquez", "Polo Streg", "Mafla", "Rincon"];
const Boca = [2000, 2012, 2003, 1985, 1981];
const riBer = [9, 11, 23, 10, 31];

// for (let i = 0; i < America.length; i++) {
//   console.log(America[i]);
// }

/*
? 2 Crea un array de números y utiliza un bucle "for" para calcular la suma de todos los elementos.
*/

// let suma = 0
// for (let i = 0; i < Boca.length; i++) {
//     suma += Boca[i]
// }

// console.log(suma);

/*
? 3 Dado un array de palabras, crea un bucle "for" para imprimir cada palabra en una línea nueva.
*/
// for (let i = 0; i < America.length; i++) {
//   console.log(America[i]);
// }

/*
? 4 Utilizando un bucle "for", multiplica cada elemento de un array por 2 y almacena
? los resultados en un nuevo array.
*/

// let riBer2 = []

// for (let i = 0; i < riBer.length; i++) {
//     riBer2[i]=riBer[i]*2
// }
// console.log(riBer);
// console.log(riBer2);

/*
? Crea un bucle "for" que encuentre el valor máximo en un array de números.
*/

// let mayor = 0;

// for (let i = 0; i < riBer.length; i++) {
//   if (riBer[i] > mayor) {
//     mayor = riBer[i];
//   }
// }

// console.log(mayor);
/*
? 6 Dado un array de nombres, utiliza un bucle "for" para encontrar el nombre más largo
*/

// let largeName = 0;
// let TeamName = "";
// for (let i = 0; i < America.length; i++) {
//   if (America[i].length > largeName) {
//     largeName = America[i].length;
//     TeamName = America[i]
//   }
// }
// console.log(`El nomre mas largo es ${TeamName} y tiene ${largeName} letras`);

/*
? 7 Escribe un bucle "for" que sume los elementos de un array y devuelva el resultado.
*/

// let Averge = 0
// let Suma = 0

// for (let i = 0; i < riBer.length; i++) {
//   // console.log(riBer[i]);
//   Suma += riBer[i]
// }
// Averge = Suma/riBer.length
// console.log(Averge);

/*
? 10 Utilizando un bucle "for", invierte el orden de los elementos de un array.
*/

// let America2 = []
// for (let i = 4 ; i > -1; i--) {
//   America2[America2.length]= America[i]
// }
// console.log(America2);

// for (let j = 0; j < America.length; j++) {
//   console.log(America[j]);

// }

/*
% 1 Recorre un array de números y suma todos los elementos. Debes crear una función sumarElementos(array)
% que reciba un array de números y devuelva la suma de todos los elementos utilizando un bucle "for".
*/

// function sumarElementos(arr) {
//   let suma = 0;
//   for (let i = 0; i < arr.length; i++) {

//     suma += arr[i];
//   }
//   console.log(suma);
// }
// sumarElementos(riBer);
// sumarElementos(Boca);

/*
% Encuentra el índice del primer número par en un array de números. 
% Debes crear una función encontrarIndicePar(array) que encuentre el índice 
% del primer número par en un array utilizando un bucle "for". 
% Si no hay números pares en el array, la función debe retornar -1.
*/

// function encontrarIndicePar(arr) {
//   let indice = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       indice = i;
//       break;
//     }
//   }
//   console.log(`EL primer numero par es ${arr[indice]} esta en el indeice ${indice}`);
// }

// encontrarIndicePar(riBer);

//Contar impares
// function contarImpares (arr){
//   let impares = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       impares ++;
//     }
//   }
//   console.log(impares);
// }
// contarImpares(riBer)

/*
 *Econtrar el valor minimo de un array
 */

// function encontrarMinimo (arr){
//   let minimo= arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimo) {
//       minimo=arr[i]
//     }

//   }
//   console.log(minimo);
// }

// encontrarMinimo(riBer)
// encontrarMinimo(Boca)

/*
 * Concatena todos los elementos de un array de strings en un solo string
 */

// function concatenarElementos(arr) {
//   let cadeneta = "";
//   for (let i = 0; i < arr.length; i++) {
//     cadeneta+= arr[i]
//   }
//   console.log(cadeneta);
// }

// concatenarElementos(America)
