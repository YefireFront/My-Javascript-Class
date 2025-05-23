// ------------------------------------------
// 📘 ARCHIVO: tipos_primitivos.js
// Guía completa sobre los 6 tipos de datos primitivos en JavaScript
// ------------------------------------------

// ¿Qué es un tipo de dato primitivo?
// Es un valor que no es un objeto y no tiene métodos. Se almacenan directamente en la memoria.
// Existen 6 tipos primitivos:

// ==========================================
// 1. STRING - Texto
// ==========================================

let texto1 = "Hola mundo";
let texto2 = 'JavaScript';
let texto3 = `Plantilla con backticks`;

console.log(typeof texto1); // string

// ✅ Puedes usar comillas dobles, simples o backticks
// ✅ Los backticks permiten interpolación:
let nombre = "Ana";
let saludo = `Hola, ${nombre}!`; // Hola, Ana!

// ==========================================
// 2. NUMBER - Números (enteros y decimales)
// ==========================================

let entero = 100;
let decimal = 3.14;
let negativo = -50;

console.log(typeof decimal); // number

// ✅ Soporta operaciones matemáticas
let resultado = entero + decimal - negativo; // 100 + 3.14 + 50 = 153.14

// Cuidado con divisiones por cero:
let divisionPorCero = 10 / 0; // Infinity

// ==========================================
// 3. BOOLEAN - Verdadero o falso
// ==========================================

let esMayor = true;
let esMenor = false;

console.log(typeof esMayor); // boolean

// ✅ Se usan en condicionales
if (esMayor) {
  console.log("La condición es verdadera");
}

// ==========================================
// 4. UNDEFINED - Valor no asignado
// ==========================================

let sinValor;
console.log(sinValor);       // undefined
console.log(typeof sinValor); // undefined

// ✅ Se produce cuando una variable es declarada pero no inicializada

// ==========================================
// 5. NULL - Ausencia intencional de valor
// ==========================================

let usuario = null;
console.log(usuario);        // null
console.log(typeof usuario); // ⚠️ object (esto es un bug histórico de JS)

// ✅ Se usa para decir "intencionalmente vacío"

// ==========================================
// 6. SYMBOL - Identificadores únicos
// ==========================================

let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");

console.log(simbolo1 === simbolo2); // false (cada símbolo es único)
console.log(typeof simbolo1);       // symbol

// ✅ Se usa para crear propiedades únicas en objetos

// ==========================================
// BONUS: BIGINT (nuevo tipo no primitivo antiguo)
// ==========================================

let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGrande); // bigint

// ==========================================
// Comparación entre undefined y null
// ==========================================

console.log(undefined == null);  // true (igualdad débil)
console.log(undefined === null); // false (igualdad estricta)

// ==========================================
// Ejemplo práctico de cada tipo primitivo
// ==========================================

const usuarioEjemplo = {
  nombre: "Carlos",         // string
  edad: 25,                 // number
  estaActivo: true,         // boolean
  direccion: undefined,     // undefined
  telefono: null,           // null
  id: Symbol("usuarioID")   // symbol
};

console.log(usuarioEjemplo);
