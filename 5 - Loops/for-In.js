//!Flyweight 💪


//% A

const persona1 = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ejemploville",
};

for (let propiedad in persona1) {
  console.log(propiedad + ": " + persona1[propiedad]);
}

//% B
const numeros = [1, 2, 3, 4, 5];

for (let indice in numeros) {
  console.log("Índice " + indice + ": " + numeros[indice]);
}

//% C
const frutas = ["Ronaldo", "Jordan", "Tom Brandy", "Tigger Wood"];

for (const e in frutas) {
  console.log(`element: ${frutas[e]}`);
}
 //% D

const champsions = {
  jorda: 6,
  Shaq: 4,
  Lebron: 4,
  Kobe: 5,
  Antetokumpo: 1,
};

for (const key in champsions) {
  console.log(`${key} ${champsions[key]}`);
}




//!Middleweight 💪


/* //*
 ercicio 1: Conteo de propiedades de un objeto
Escribe una función llamada contarPropiedades que tome un objeto como argumento y devuelva el número de propiedades que tiene.

Ejercicio 2: Obtener valores pares de un array
Escribe una función llamada valoresPares que tome un array que contenga números como valores 
y devuelva un array con solo los valores pares.

Ejercicio 3: Concatenación de claves y valores
Escribe una función llamada concatenarClavesYValores que tome un objeto como argumento 
y devuelva una cadena que contenga todas las claves y valores del objeto concatenados en un formato legible. 
 */





