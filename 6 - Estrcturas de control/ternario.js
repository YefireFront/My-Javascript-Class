// ------------------------------------------------------------
// 📘 operador_ternario.js
// Uso del operador ternario (condición ? valor1 : valor2)
// ------------------------------------------------------------


// --------------------------------------------
// 🔹 ¿Qué es el operador ternario?
// Es una forma corta de escribir un if-else.
// Sintaxis: condición ? valor_si_true : valor_si_false
// --------------------------------------------

let puntos = 20;
let resultado = puntos >= 10 ? "✅ Clasificado" : "❌ Eliminado";
console.log(resultado); // ✅ Clasificado


// --------------------------------------------
// 🔹 Ejemplo con booleano
// --------------------------------------------

let conectado = false;
let estado = conectado ? "🟢 En línea" : "🔴 Desconectado";
console.log(estado); // 🔴 Desconectado


// --------------------------------------------
// 🔹 Ejemplo con números
// --------------------------------------------

let edad = 17;
let acceso = (edad >= 18) ? "✅ Acceso permitido" : "🚫 Acceso denegado";
console.log(acceso); // 🚫 Acceso denegado


// --------------------------------------------
// 🔹 Ejemplo con strings (videojuegos)
// --------------------------------------------

let juego = "FIFA";
let categoria = juego === "FIFA" ? "⚽ Deportes" : "🎮 Otro";
console.log(categoria); // ⚽ Deportes


// --------------------------------------------
// 🔹 Uso dentro de funciones
// --------------------------------------------

function verificarConexion(usuario) {
  return usuario.activo ? "Conectado" : "Desconectado";
}

let usuario1 = { nombre: "Carlos", activo: true };
let usuario2 = { nombre: "Ana", activo: false };

console.log(verificarConexion(usuario1)); // Conectado
console.log(verificarConexion(usuario2)); // Desconectado


// --------------------------------------------
// 🔹 Encadenamiento (no recomendado si es confuso)
// --------------------------------------------

let nota = 8;
let mensaje = nota >= 9 ? "🎉 Excelente" :
              nota >= 6 ? "✅ Aprobado" :
              "❌ Reprobado";

console.log(mensaje); // ✅ Aprobado


// --------------------------------------------
// 🔹 Comparación con if-else
// --------------------------------------------

let online = true;

// Usando if-else
if (online) {
  console.log("🟢 Está en línea");
} else {
  console.log("🔴 No está conectado");
}

// Usando ternario
console.log(online ? "🟢 Está en línea" : "🔴 No está conectado");

