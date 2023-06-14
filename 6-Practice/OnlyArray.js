/*
 ! PRACTICA DE ARRAY DIFERENTES NIVELES
// const MugiwaraCrew = ["Ussop", "Nami", "Sanji", "Lufy", "Zoro"];
// const Boca = [2000, 2002, 2006, 2007];
// const Me = [33, 56, 42, 30, 88, 25, 1, 33];
// const Arg = ["Boca", "RiBer", "SanLorenoz"];
// const Bra = ["Santos", "Palmeiras", "Fluminense"];
// const personajesNaruto = [
//   {
//     nombre: "Naruto Uzumaki",
//     rango: "Hokage",
//     aldea: "Aldea Oculta de la Hoja",
//   },
//   {
//     nombre: "Sasuke Uchiha",
//     rango: "Rogue Ninja",
//     aldea: "Aldea Oculta de la Hoja",
//   },
//   {
//     nombre: "Sakura Haruno",
//     rango: "Ninja Médico",
//     aldea: "Aldea Oculta de la Hoja",
//   },
//   {
//     nombre: "Kakashi Hatake",
//     rango: "Hokage",
//     aldea: "Aldea Oculta de la Hoja",
//   },
//   {
//     nombre: "Tsunade",
//     rango: "Hokage",
//     aldea: "Aldea Oculta de la Hoja",
//   },
//   {
//     nombre: "Gaara",
//     rango: "Kazekage",
//     aldea: "Aldea Oculta de la Arena",
//   },
//   {
//     nombre: "Onoki",
//     rango: "Tsuchikage",
//     aldea: "Aldea Oculta de la Roca",
//   },
//   {
//     nombre: "A",
//     rango: "Raikage",
//     aldea: "Aldea Oculta de las Nubes",
//   },
//   {
//     nombre: "Mei Terumi",
//     rango: "Mizukage",
//     aldea: "Aldea Oculta de la Niebla",
//   },
//   {
//     nombre: "Darui",
//     rango: "Raikage",
//     aldea: "Aldea Oculta de las Nubes",
//   },
// ];

// const personas = [
//   { nombre: "Juan", edad: 25 },
//   { nombre: "Juanfer Quintero", edad: 25 },
//   { nombre: "Judas", edad: 25 },
//   { nombre: "Ana", edad: 30 },
//   { nombre: "Anastacia", edad: 30 },
//   { nombre: "Pedro", edad: 20 },
//   { nombre: "Maria", edad: 28 },
//   { nombre: "Marta", edad: 28 },
//   { nombre: "Melaniew", edad: 28 },
// ];

// const mapa = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 112],
// ];

// function Sort(arr) {
//   let comodin1;
//   let comodin2;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       comodin1 = arr[i];
//       comodin2 = arr[i + 1];
//       arr[i] = comodin2;
//       arr[i + 1] = comodin1;
//       i = -1;
//     }
//   }
//   console.log(arr);
// }

// function Union(arr, arr2) {
//   let arr3 = [];
//   // console.log(arr.length);
//   // console.log(arr2.length);

//   if (arr.length < arr2.length) {
//     for (let i = 0; i <= arr.length; i++) {
//       arr3[i] = arr[i];

//       if (i < arr2.length) {
//         console.log(arr2[i]);
//         arr3[i + arr.length] = arr2[i];
//       }
//     }
//   } else {
//     for (let i = 0; i < arr2.length; i++) {
//       arr3[i] = arr2[i];

//       if (i < arr.length) {
//         arr3[i + arr2.length] = arr[i];
//       }
//     }
//   }
//   console.log(arr3);
// }

// function Clones(arr) {
//   let clonArray = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     clonArray[j] = arr[i];
//     clonArray[j + 1] = arr[i];
//     j += 2;
//   }

//   console.log(clonArray);
// }

// function FindHokage(arr) {
//   let h = 0;
//   const hokae = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].rango == "Hokage") {
//       hokae[h] = arr[i];
//       h++;
//     }
//   }
//   console.log(hokae);
// }

// function manejarTripulacion(arr, elm, acc) {
//   if (acc == "add") {
//     arr[arr.length] = elm;
//   }
//   if (acc == "del") {
//     let newcrew = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (elm != arr[i]) {
//         newcrew[j] = arr[i];
//         j++;
//       }
//     }
//     arr = newcrew;
//   }
//   console.log(arr);
// }

// function encontartesoro(params) {
//   for (let i = 0; i < mapa.length; i++) {
//     if (typeof mapa[i] != "object") {
//       console.log(mapa[i]);
//     }

//     for (let j = 0; j < mapa[i].length; j++) {
//       console.log(mapa[i][j]);
//       if (mapa[i][j] == "x") {
//         console.log(`El tesoro se encunetra en la fila ${i} Columna ${j}`);
//       }
//     }
//   }
// }

// function ordenarPorNombre(array) {
//   // Inicia la funcion
//   for (let i = 1; i < array.length; i++) {
//     // Inica le ciclo
//     const valorActual = array[i]; // se crea una constante y se le asigna cada objeto en el array que esta en cada indice
//     //   console.log(valorActual);

//     let j = i - 1; // se inicializa la  variable j en el valor de i -1

//     while (j >= 0 && array[j].nombre > valorActual.nombre) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = valorActual;
//   }
//   return array;
// }

// function multiplo(num, fin) {
//   let arraMult = [];
//   let j = 0;
//   let Limit = 0;

//   for (let i = 1; Limit < fin; i++) {
//     if (i % num == 0) {
//       arraMult[j] = i;
//       j++;
//       Limit++;
//     }
//   }
//   console.log(arraMult);
// }

// const personas2 = [
//   { nombre: "Juan", edad: 25, país: "Argentina" },
//   { nombre: "Ana", edad: 32, país: "España" },
//   { nombre: "Pedro", edad: 20, país: "Argentina" },
//   { nombre: "María", edad: 28, país: "México" },
//   { nombre: "Carlos", edad: 40, país: "Argentina" },
//   { nombre: "Sara", edad: 27, país: "España" },
//   { nombre: "Luis", edad: 35, país: "Argentina" },
//   { nombre: "Elena", edad: 31, país: "España" },
//   { nombre: "Andrés", edad: 29, país: "Argentina" },
//   { nombre: "Laura", edad: 33, país: "México" },
// ];

// function findFuckPeople(arr, country, age, par, name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (age == undefined && par == undefined && name == undefined) {
//       if (arr[i].país == country) {
//         console.log(arr[i]);
//       }
//     } else if (par == undefined && name == undefined) {
//       if (arr[i].país == country && arr[i].edad == age) {
//         console.log(arr[i]);
//       }
//     } else if (name == undefined) {
//       if (par == "Ma") {
//         if (arr[i].país == country && arr[i].edad > age) {
//           console.log(arr[i]);
//         }
//       } else if (par == "Mi") {
//         if (arr[i].país == country && arr[i].edad < age) {
//           console.log(arr[i]);
//         }
//       }
//     }
//   }
// }

// findFuckPeople(personas2, "Argentina", 50, "Mi");
*/

const num1 = '123'
let numx = Number(num1)
console.log(numx);
console.log(num1); vcvvvvvvvvvvvvvvv