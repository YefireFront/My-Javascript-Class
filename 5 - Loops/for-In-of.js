// ------------------------------------------------------------
// 📘 for_in_for_of.js
// Diferencias entre for...in y for...of
// ------------------------------------------------------------


// --------------------------------------------
// 🔹 for...in
// Recorre las propiedades (claves) de un objeto o índices de un array.
// --------------------------------------------

let jugador = {
  nombre: "Messi",
  edad: 36,
  club: "Inter Miami"
};

console.log("🔍 Usando for...in con objeto:");
for (let propiedad in jugador) {
  console.log(propiedad + ":", jugador[propiedad]);
}
// Resultado:
// nombre: Messi
// edad: 36
// club: Inter Miami


// --------------------------------------------
// 🔹 for...in con array (repite índices, no elementos)
// --------------------------------------------

let juegos = ["FIFA", "GTA", "Zelda"];

console.log("🔢 for...in con array (índices):");
for (let indice in juegos) {
  console.log(indice + " =>", juegos[indice]);
}


// --------------------------------------------
// 🔹 for...of
// Recorre los **valores** directamente (ideal para arrays).
// No funciona con objetos directamente.
// --------------------------------------------

console.log("🎮 for...of con array (valores):");
for (let juego of juegos) {
  console.log("Juego:", juego);
}
// Resultado:
// Juego: FIFA
// Juego: GTA
// Juego: Zelda


// --------------------------------------------
// 🔹 for...of con string
// --------------------------------------------

let nombre = "Kobe";

console.log("🔠 Letras del nombre con for...of:");
for (let letra of nombre) {
  console.log(letra);
}
// Resultado: K o b e


// --------------------------------------------
// ❌ for...of con objetos (NO FUNCIONA directamente)
// Esto lanzaría error:
// for (let dato of jugador) { ... }

// ✅ Solución: usar Object.values(), Object.keys() o Object.entries()
console.log("✔️ for...of con Object.entries:");
for (let [clave, valor] of Object.entries(jugador)) {
  console.log(clave + ":", valor);
}


// --------------------------------------------
// ✅ RESUMEN RÁPIDO
// --------------------------------------------

/*
| Bucle       | Recorre              | Ideal para       |
|-------------|----------------------|------------------|
| for...in    | Propiedades / índices| Objetos          |
| for...of    | Valores directamente | Arrays y strings |

Usos típicos:
- for...in → objetos
- for...of → arrays, strings
*/
