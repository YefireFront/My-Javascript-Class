// ------------------------------------------------------------
// 📘 bucles_while_doWhile.js
// Uso de los ciclos WHILE y DO...WHILE en JavaScript
// ------------------------------------------------------------


// --------------------------------------------
// 🔹 while
// Se ejecuta mientras la condición sea verdadera.
// --------------------------------------------

let puntos = 0;

while (puntos < 5) {
  console.log("⚽ Sumando punto:", puntos);
  puntos++;
}
// Resultado: Se imprimen puntos del 0 al 4


// --------------------------------------------
// 🔹 Ejemplo con array y while
// --------------------------------------------

let videojuegos = ["FIFA", "Minecraft", "Zelda", "GTA"];
let i = 0;

while (i < videojuegos.length) {
  console.log("🎮 Jugando:", videojuegos[i]);
  i++;
}


// --------------------------------------------
// 🔹 do...while
// Se ejecuta AL MENOS UNA VEZ, luego verifica la condición.
// --------------------------------------------

let energia = 0;

do {
  console.log("🔋 Intentando encender la consola...");
  energia++;
} while (energia < 1);

// Aunque energía es 0 al inicio, se ejecuta una vez


// --------------------------------------------
// 🔹 Comparación: while vs do...while
// --------------------------------------------

let vidas = 3;

console.log("➡ Usando while:");
while (vidas < 3) {
  console.log("❤️ Vida:", vidas);
  vidas++;
}

let intentos = 3;

console.log("➡ Usando do...while:");
do {
  console.log("💥 Intento fallido:", intentos);
  intentos++;
} while (intentos < 3);


// --------------------------------------------
// 🔹 Usar con condiciones booleanas
// --------------------------------------------

let conectado = true;
let contador = 0;

while (conectado && contador < 3) {
  console.log("🟢 Usuario activo:", contador);
  contador++;
}


// --------------------------------------------
// 🔹 Controlar bucles infinitos:
// Siempre asegura que la condición cambie dentro del bucle.
// --------------------------------------------

let goles = 0;
while (goles < 3) {
  console.log("⚽ Goooool número:", goles + 1);
  goles++; // Sin esto, sería bucle infinito
}

