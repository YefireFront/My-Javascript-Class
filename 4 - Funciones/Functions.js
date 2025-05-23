// -------------------------------------------------------
// 📘 funciones_en_js.js
// Guía definitiva sobre funciones en JavaScript
// -------------------------------------------------------


// --------------------------------------------
// 🔹 Declaración tradicional de función
// --------------------------------------------
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("Mario"); // Hola, Mario


// --------------------------------------------
// 🔹 Función que retorna valor
// --------------------------------------------
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 8);
console.log("Resultado:", resultado); // Resultado: 13


// --------------------------------------------
// 🔹 Función como expresión (anónima)
// --------------------------------------------
const restar = function (a, b) {
  return a - b;
};

console.log("Resta:", restar(10, 4)); // Resta: 6


// --------------------------------------------
// 🔹 Función flecha (Arrow function)
// --------------------------------------------

const multiplicar = (a, b) => a * b;

console.log("Multiplicación:", multiplicar(4, 3)); // Multiplicación: 12

// Con más lógica y llaves:
const saludarFormal = (nombre) => {
  const mensaje = `Bienvenido, ${nombre}`;
  return mensaje;
};

console.log(saludarFormal("Luigi"));


// --------------------------------------------
// 🔹 Parámetros por defecto
// --------------------------------------------

function presentarJugador(nombre = "Anónimo", equipo = "Libre") {
  console.log(`${nombre} juega en ${equipo}`);
}

presentarJugador("Messi", "Inter Miami");
presentarJugador(); // Anónimo juega en Libre


// --------------------------------------------
// 🔹 Funciones dentro de objetos (métodos)
// --------------------------------------------

let videojuego = {
  titulo: "GTA VI",
  mostrarInfo: function () {
    console.log(`Título: ${this.titulo}`);
  }
};

videojuego.mostrarInfo(); // Título: GTA VI



let saludarHola = crearSaludo("Hola");
saludarHola("Peach"); // Hola, Peach


// --------------------------------------------
// 🔹 Función como parámetro (callback)
// --------------------------------------------

function procesarJugador(nombre, callback) {
  callback(nombre);
}

function mostrarNombreMayusculas(nombre) {
  console.log(nombre.toUpperCase());
}

procesarJugador("Neymar", mostrarNombreMayusculas); // NEYMAR


// --------------------------------------------
// 🔹 Función autoejecutable (IIFE)
// --------------------------------------------

(function () {
  console.log("Función ejecutada inmediatamente");
})();


// --------------------------------------------
// 🔹 Función que recibe datos de un array
// --------------------------------------------

const jugadores = ["Lebron", "Curry", "Durant"];

jugadores.forEach(function (nombre) {
  console.log("Jugador:", nombre);
});





let ceraObj= (nombre, apellido) => ({nombre,apellido})
