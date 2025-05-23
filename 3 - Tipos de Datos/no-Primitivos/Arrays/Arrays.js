// ------------------------------------------
// 📘 ARCHIVO: arrays.js
// Todo lo que debes saber sobre Arrays en JavaScript
// ------------------------------------------

// ---------------------------
// ¿Qué es un array?
// ---------------------------
// Es una estructura que almacena múltiples valores en una sola variable

// ✅ Crear arrays

let jugadoresFutbol = ["Messi", "Cristiano", "Mbappé", "Neymar"];
let jugadoresNBA = ["LeBron", "Curry", "Durant", "Doncic"];
let videojuegos = ["Zelda", "FIFA", "Minecraft", "Call of Duty"];

console.log(jugadoresFutbol);
console.log(jugadoresNBA);
console.log(videojuegos);

// ---------------------------
// Acceder a un elemento
// ---------------------------

console.log(jugadoresFutbol[0]); // "Messi"
console.log(jugadoresNBA[2]);    // "Durant"

// ---------------------------
// Modificar un elemento
// ---------------------------

videojuegos[1] = "eFootball";
console.log(videojuegos); // ["Zelda", "eFootball", "Minecraft", "Call of Duty"]

// ---------------------------
// Longitud del array
// ---------------------------

console.log(jugadoresFutbol.length); // 4

// ---------------------------
// Métodos útiles de arrays
// ---------------------------

// Agregar elementos
jugadoresFutbol.push("Haaland"); // al final
jugadoresNBA.unshift("Giannis"); // al inicio

// Eliminar elementos
jugadoresFutbol.pop();    // elimina el último
jugadoresNBA.shift();     // elimina el primero

console.log(jugadoresFutbol);
console.log(jugadoresNBA);

// Buscar elementos
console.log(videojuegos.includes("Minecraft")); // true
console.log(jugadoresFutbol.indexOf("Neymar")); // 2

// Cortar o dividir arrays
let topJuegos = videojuegos.slice(0, 2); // ["Zelda", "eFootball"]
console.log(topJuegos);

// Eliminar o insertar elementos con splice
jugadoresNBA.splice(1, 1, "Tatum"); // elimina a Curry y pone a Tatum
console.log(jugadoresNBA);

// ---------------------------
// Iterar sobre un array
// ---------------------------

console.log("🎮 Lista de videojuegos:");
videojuegos.forEach((juego, index) => {
  console.log(`${index + 1}. ${juego}`);
});

// Crear un nuevo array con map
let jugadoresMayus = jugadoresFutbol.map(jugador => jugador.toUpperCase());
console.log(jugadoresMayus);

// ---------------------------
// Arrays anidados
// ---------------------------

let equipos = [
  ["Real Madrid", "Barcelona"],
  ["Lakers", "Celtics"]
];

console.log(equipos[0][1]); // "Barcelona"

// ---------------------------
// Objetos dentro de un array
// ---------------------------

let jugadores = [
  { nombre: "Messi", deporte: "Fútbol", edad: 36 },
  { nombre: "Curry", deporte: "Basket", edad: 35 },
  { nombre: "Zelda", deporte: "Videojuego", edad: null }
];

jugadores.forEach(j => {
  console.log(`${j.nombre} juega ${j.deporte}`);
});
