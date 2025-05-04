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



// Ejemplo for in  en array

const array = [1, 2, 3, 4, 5];
