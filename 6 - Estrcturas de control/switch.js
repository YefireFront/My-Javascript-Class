// ------------------------------------------------------------
// 📘 uso_switch.js
// Uso del switch para múltiples condiciones
// ------------------------------------------------------------


// --------------------------------------------
// 🔹 ¿Qué es switch?
// switch evalúa una expresión y ejecuta el bloque de código 
// que coincide con el valor de esa expresión.
// --------------------------------------------

let videojuego = "FIFA";

switch (videojuego) {
  case "FIFA":
    console.log("⚽ Videojuego de fútbol");
    break;
  case "NBA 2K":
    console.log("🏀 Videojuego de baloncesto");
    break;
  case "Call of Duty":
    console.log("🔫 Videojuego de disparos");
    break;
  default:
    console.log("🎮 Otro tipo de videojuego");
}


// --------------------------------------------
// 🔹 Ejemplo con números
// --------------------------------------------

let nota = 10;

switch (nota) {
  case 10:
  case 9:
    console.log("🎉 Excelente");
    break;
  case 8:
  case 7:
    console.log("✅ Bien hecho");
    break;
  case 6:
    console.log("⚠️ Apenas pasaste");
    break;
  default:
    console.log("❌ Reprobado");
}


// --------------------------------------------
// 🔹 Switch con valores booleanos (se puede pero no es lo usual)
// --------------------------------------------

let conectado = true;

switch (conectado) {
  case true:
    console.log("🟢 Usuario conectado");
    break;
  case false:
    console.log("🔴 Usuario desconectado");
    break;
}


// --------------------------------------------
// 🔹 Switch con días de la semana
// --------------------------------------------

let dia = "sábado";

switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
  case "viernes":
    console.log("📚 Día de clases");
    break;
  case "sábado":
  case "domingo":
    console.log("🎮 Fin de semana, a jugar videojuegos");
    break;
  default:
    console.log("❓ Día no válido");
}


// --------------------------------------------
// 🔹 IMPORTANTE
// - Siempre usar `break` para evitar que siga ejecutando los demás casos.
// - `default` es como el `else` por si ningún caso coincide.
// --------------------------------------------

