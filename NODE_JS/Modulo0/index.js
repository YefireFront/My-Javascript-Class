console.log("Mi ultimo dia sin saber node")

const nom = "Yeffer James"
console.log(`My nickname is ${nom}`)

const moment =  new Date()
console.log(`La fecha actual es ${moment.toLocaleString()}`)

// Obtener los componentes de la fecha
const ahora = new Date();
const anio = ahora.getFullYear();
const mes = ahora.getMonth() + 1; // Los meses van de 0 (Enero) a 11 (Diciembre)
const dia = ahora.getDate();
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();


// ==============================
// Módulo 1: Fundamentos de JavaScript para Node.js
// ==============================

// 1.1 Variables y tipos de datos
let nombre = "Ana";
let edad = 30;
let esEstudiante = true;
let hobbies = ["leer", "programar", "deporte"];
const pais = "Colombia";
var antiguo = "Evitar usar var";

// 1.2 Operadores
let a = 5;
let b = 3;
console.log("Suma:", a + b);  // 8
console.log("Mayor que y positivo:", a > b && b > 0); // true

// 1.3 Estructuras de control
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

let color = "rojo";
switch(color) {
    case "rojo":
        console.log("Color rojo");
        break;
    case "azul":
        console.log("Color azul");
        break;
    default:
        console.log("Otro color");
}

// 1.4 Bucles
console.log("Bucle for:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Bucle while:");
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

// For...of para arrays
let frutas = ["manzana", "pera", "uva"];
console.log("For...of frutas:");
for(let fruta of frutas) {
    console.log(fruta);
}

// For...in para objetos
let personaObj = { nombre: "Ana", edad: 25 };
console.log("For...in persona:");
for(let key in personaObj) {
    console.log(key, personaObj[key]);
}

// 1.5 Funciones
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Juan"));

const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar2("Maria"));

const saludar3 = nombre => `Hola, ${nombre}`;
console.log(saludar3("Luis"));

// 1.6 Objetos y arrays
let persona = {
    nombre: "Luis",
    edad: 28,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar();

let numeros = [1, 2, 3, 4, 5];
console.log("Primer número del array:", numeros[0]);
numeros.push(6);
console.log("Array después de push:", numeros);

// Métodos de arrays
let nums = [1,2,3,4,5];
let pares = nums.filter(n => n % 2 === 0); // [2,4]
console.log("Números pares:", pares);

let cuadrados = nums.map(n => n * n); // [1,4,9,16,25]
console.log("Cuadrados:", cuadrados);

console.log("forEach:");
nums.forEach(n => console.log(n));

let suma = nums.reduce((acc, n) => acc + n, 0); // 15
console.log("Suma total:", suma);

// ==============================
// Ejercicios prácticos
// ==============================

// 1. Array con películas favoritas
let peliculas = ["Inception", "Avatar", "Matrix"];
console.log("Películas favoritas:");
for(let peli of peliculas) {
    console.log(peli);
}

// 2. Objeto persona con método saludar
let persona2 = {
    nombre: "Carlos",
    edad: 22,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
};
persona2.saludar();

// 3. Función que suma dos números
function sumar(x, y) {
    return x + y;
}
console.log("Suma 7+3:", sumar(7,3));

// 4. Array de números y filter > 10
let numeros2 = [5, 12, 8, 20, 3];
let mayores10 = numeros2.filter(n => n > 10);
console.log("Números mayores a 10:", mayores10);

// 5. Switch para día de la semana
let day = "sábado";
switch(day.toLowerCase()) {
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día laboral");
}
