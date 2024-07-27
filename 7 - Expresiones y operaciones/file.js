// Ejemplo Completo de Expresiones y Operaciones en JavaScript

// Variables Iniciales
let a = 10;
let b = 5;

// Operadores Aritméticos
let suma = a + b; // 15
let resta = a - b; // 5
let multiplicacion = a * b; // 50
let division = a / b; // 2
let modulo = a % b; // 0
let exponenciacion = a ** b; // 100000

// Operadores de Asignación
let x = 10;
x += 5; // x = x + 5; x ahora es 15
x -= 3; // x = x - 3; x ahora es 12
x *= 2; // x = x * 2; x ahora es 24
x /= 4; // x = x / 4; x ahora es 6
x %= 4; // x = x % 4; x ahora es 2

// Operadores de Comparación
let esIgual = (a == b); // false
let esEstrictoIgual = (a === b); // false
let noIgual = (a != b); // true
let estrictoNoIgual = (a !== b); // true
let mayorQue = (a > b); // true
let mayorOIgualQue = (a >= b); // true
let menorQue = (a < b); // false
let menorOIgualQue = (a <= b); // false

// Operadores Lógicos
let and = (a > 5 && b < 10); // true
let or = (a > 15 || b < 10); // true
let not = !(a > 5); // false

// Operadores de Incremento y Decremento
let incremento = a++; // incremento ahora es 10, a es 11
let decremento = b--; // decremento ahora es 5, b es 4

// Operadores de Concatenación de Strings
let saludo = "Hola, ";
let nombre = "Mundo";
let mensajeConcatenado = saludo + nombre; // "Hola, Mundo"

// Operadores de Acceso a Propiedades
let persona = { nombre: "Juan", edad: 30 };
console.log(persona.nombre); // "Juan"
console.log(persona["edad"]); // 30

// Operador Condicional (Ternario)
let edad = 20;
let tipo = (edad >= 18) ? "adulto" : "menor";
console.log(tipo); // "adulto"

// Operadores de Tipo
console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
let fecha = new Date();
console.log(fecha instanceof Date); // true

// Ejemplo Completo que Combina Varios Operadores y Expresiones
let y = 5;

let esMayor = suma > 10; // true
let mensaje = esMayor ? "La suma es mayor que 10" : "La suma es 10 o menor"; // "La suma es mayor que 10"

let persona2 = { nombre: "Ana", edad: 25 };
let saludoCompleto = "Hola, " + persona2.nombre; // "Hola, Ana"

