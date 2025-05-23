// ----------------------------------------------------------
// 📘 metodos_de_Object.js
// Guía de métodos estáticos del objeto global Object en JS
// ----------------------------------------------------------

let jugador = {
  nombre: "Cristiano Ronaldo",
  edad: 39,
  equipo: "Al-Nassr",
  goles: 850
};

// -----------------------------------
// 🔹 Object.keys(obj)
// Devuelve un array con los nombres de las propiedades
// -----------------------------------

console.log(Object.keys(jugador));
// → ["nombre", "edad", "equipo", "goles"]

// -----------------------------------
// 🔹 Object.values(obj)
// Devuelve un array con los valores de las propiedades
// -----------------------------------

console.log(Object.values(jugador));
// → ["Cristiano Ronaldo", 39, "Al-Nassr", 850]

// -----------------------------------
// 🔹 Object.entries(obj)
// Devuelve un array con pares [clave, valor]
// -----------------------------------

console.log(Object.entries(jugador));
/*
[
  ["nombre", "Cristiano Ronaldo"],
  ["edad", 39],
  ["equipo", "Al-Nassr"],
  ["goles", 850]
]
*/

// -----------------------------------
// 🔹 Object.assign(destino, fuente)
// Copia las propiedades de un objeto a otro
// -----------------------------------

let estadisticas = { asistencias: 200 };
let copiaJugador = Object.assign({}, jugador, estadisticas);

console.log(copiaJugador);
/*
{
  nombre: "Cristiano Ronaldo",
  edad: 39,
  equipo: "Al-Nassr",
  goles: 850,
  asistencias: 200
}
*/

// -----------------------------------
// 🔹 Object.freeze(obj)
// Congela el objeto: no se puede modificar ni añadir
// -----------------------------------

Object.freeze(jugador);
jugador.edad = 40;           // ❌ No se modifica
jugador.pais = "Portugal";   // ❌ No se agrega
console.log(jugador);        // Sigue igual

// -----------------------------------
// 🔹 Object.seal(obj)
// Sella el objeto: se pueden modificar valores, pero no añadir o eliminar propiedades
// -----------------------------------

let videojuego = {
  nombre: "FIFA 24",
  jugadores: 2
};

Object.seal(videojuego);
videojuego.nombre = "EA FC 24";  // ✅ Modificar sí
videojuego.plataforma = "PS5";  // ❌ No se puede agregar
delete videojuego.jugadores;    // ❌ No se puede eliminar
console.log(videojuego);

// -----------------------------------
// 🔹 Object.hasOwn(obj, "clave")
// Devuelve true si el objeto tiene esa propiedad
// (más moderno que hasOwnProperty)
// -----------------------------------

console.log(Object.hasOwn(jugador, "goles")); // true
console.log(Object.hasOwn(jugador, "asistencias")); // false

// -----------------------------------
// 🔹 Object.getOwnPropertyNames(obj)
// Devuelve un array con todas las propiedades, incluidas no enumerables
// -----------------------------------

console.log(Object.getOwnPropertyNames(jugador));
// → ["nombre", "edad", "equipo", "goles"]

// -----------------------------------
// 🔹 Object.defineProperty(obj, "propiedad", descriptor)
// Permite definir o modificar propiedades con más control
// -----------------------------------

let consola = {};
Object.defineProperty(consola, "marca", {
  value: "PlayStation",
  writable: false,       // No se puede modificar
  enumerable: true,
  configurable: false
});

console.log(consola.marca); // PlayStation
consola.marca = "Xbox";     // ❌ No se modifica
console.log(consola.marca); // PlayStation

// -----------------------------------
// 🔹 Object.is(a, b)
// Compara si dos valores son estrictamente iguales (mejor que === en algunos casos)
// -----------------------------------

console.log(Object.is(0, -0));       // false
console.log(Object.is(NaN, NaN));   // true
console.log(Object.is("Hola", "Hola")); // true
