// ----------------------------------------------------------
// 📘 condicionales_y_booleans.js
// Guía sobre condicionales y valores booleanos en JavaScript
// ----------------------------------------------------------


// --------------------------------------------
// 🔹 Booleanos: true / false
// --------------------------------------------

let esCampeon = true;
let estaLesionado = false;

console.log("¿Es campeón?", esCampeon); // true
console.log("¿Está lesionado?", estaLesionado); // false


// --------------------------------------------
// 🔹 Operadores de comparación
// --------------------------------------------

// == : igual en valor
// === : igual en valor y tipo
// != : diferente en valor
// !== : diferente en valor o tipo
// > , < , >= , <=

console.log(5 == "5");   // true (compara solo valor)
console.log(5 === "5");  // false (compara tipo también)
console.log(10 !== 10);  // false
console.log(7 < 12);     // true


// --------------------------------------------
// 🔹 Condicional if
// --------------------------------------------

let goles = 3;

if (goles > 0) {
  console.log("⚽ El jugador anotó goles.");
}


// --------------------------------------------
// 🔹 if - else
// --------------------------------------------

let conectado = false;

if (conectado) {
  console.log("🟢 Usuario en línea.");
} else {
  console.log("🔴 Usuario desconectado.");
}


// --------------------------------------------
// 🔹 if - else if - else
// --------------------------------------------

let ranking = 2;

if (ranking === 1) {
  console.log("🥇 Oro");
} else if (ranking === 2) {
  console.log("🥈 Plata");
} else if (ranking === 3) {
  console.log("🥉 Bronce");
} else {
  console.log("Sin medalla");
}


// --------------------------------------------
// 🔹 Comparar cadenas
// --------------------------------------------

let juego = "FIFA 24";

if (juego === "FIFA 24") {
  console.log("🎮 Juego de fútbol seleccionado");
}


// --------------------------------------------
// 🔹 Comparar arrays (nunca con === directo)
let juegos1 = ["FIFA", "NBA"];
let juegos2 = ["FIFA", "NBA"];

console.log(juegos1 === juegos2); // false (referencias distintas)


// --------------------------------------------
// 🔹 Comparar booleanos en funciones
// --------------------------------------------

function estaDisponible(juego) {
  return juego === "GTA VI";
}

if (estaDisponible("GTA VI")) {
  console.log("🟢 Disponible para jugar");
} else {
  console.log("⛔ No disponible");
}


// --------------------------------------------
// 🔹 Operador ternario (condición ? valorSi : valorNo)
// --------------------------------------------

let edad = 17;
let acceso = (edad >= 18) ? "✅ Acceso permitido" : "🚫 Acceso denegado";

console.log(acceso);


// --------------------------------------------
// 🔹 Booleanos implícitos (truthy/falsy)
// --------------------------------------------

let nombreJugador = "";

if (nombreJugador) {
  console.log("Tiene nombre");
} else {
  console.log("Nombre vacío"); // esto se ejecuta
}

// Valores falsy comunes: false, 0, "", null, undefined, NaN

