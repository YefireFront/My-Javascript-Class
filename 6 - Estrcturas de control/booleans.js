// ------------------------------------------------------------
// 📘 asignacion_booleans_cortocircuito.js
// Asignación usando booleanos y operadores de cortocircuito
// ------------------------------------------------------------


// --------------------------------------------
// 🔹 Cortocircuito con || (OR)
// Devuelve el primer valor "truthy"
// --------------------------------------------

let jugador = "";
let nombreJugador = jugador || "Anónimo";
console.log(nombreJugador); // "Anónimo"

let favorito = "Messi" || "Cristiano";
console.log(favorito); // "Messi" (es truthy)


// --------------------------------------------
// 🔹 Cortocircuito con && (AND)
// Devuelve el primer valor "falsy", o el último si todos son truthy
// --------------------------------------------

let estaActivo = true;
let mensaje = estaActivo && "Jugador conectado";
console.log(mensaje); // "Jugador conectado"

let conectado = false;
let mensaje2 = conectado && "Jugador conectado";
console.log(mensaje2); // false


// --------------------------------------------
// 🔹 Usar para condiciones en línea
// --------------------------------------------

let goles = 2;
goles > 0 && console.log("⚽ Anotó goles"); // Se imprime

let faltas = 0;
faltas > 0 && console.log("🚫 Tiene faltas"); // No se imprime


// --------------------------------------------
// 🔹 Usar para valores por defecto
// --------------------------------------------

function obtenerEquipo(nombre) {
  return nombre || "Equipo Desconocido";
}

console.log(obtenerEquipo("Bulls")); // Bulls
console.log(obtenerEquipo(""));      // Equipo Desconocido


// --------------------------------------------
// 🔹 Evitar ejecutar si no se cumple la condición
// --------------------------------------------

let logueado = true;
logueado && console.log("🟢 Bienvenido al sistema");

let edad = 0;
edad && console.log("👤 Edad ingresada"); // No se ejecuta porque 0 es falsy


// --------------------------------------------
// 🔹 Combinación con funciones
// --------------------------------------------

function mostrarEstadisticas(jugador) {
  jugador && console.log(`📊 Estadísticas de ${jugador}`);
}

mostrarEstadisticas("Jordan"); // Se ejecuta
mostrarEstadisticas("");       // No se ejecuta

