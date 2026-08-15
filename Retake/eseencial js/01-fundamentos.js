// ============================================
// LECCIÓN 1: Variables, tipos y funciones
// Ejecuta este archivo con:  node 01-fundamentos.js
// ============================================

// --- CONCEPTO 1: Variables ---
// Solo necesitas dos palabras: const (no cambia) y let (sí cambia).
// Olvídate de "var", no lo vamos a usar.

const nombre = "Yeffer";   // texto (string)
let edad = 25;             // número (number)
let estudiando = true;     // verdadero/falso (boolean)

console.log(nombre, edad, estudiando);

// --- CONCEPTO 2: Funciones ---
// Una función recibe datos, hace algo, y devuelve un resultado con "return".

function saludar(persona) {
  return "Hola, " + persona;
}

console.log(saludar(nombre)); // "Hola, Yeffer"

// También existe la forma "flecha" (arrow function). Hace LO MISMO:
const despedir = (persona) => {
  return "Chao, " + persona;
};

console.log(despedir(nombre)); // "Chao, Yeffer"

// ============================================
// TUS RETOS (escribe tu código debajo de cada uno)
// ============================================

// RETO 1: Crea una función "doble" que reciba un número
// y devuelva ese número multiplicado por 2.
// Pruébala con: console.log(doble(4))  -> debe imprimir 8

function doble(n) {
  return n*2
}



a = doble(5)
console.log(a)



// RETO 2: Crea una función "presentar" que reciba un nombre y una edad,
// y devuelva un texto como: "Me llamo Yeffer y tengo 25 años"

function presentar(nombre , edad) {
  return `Me llamo ${nombre} y tengo ${edad} años `
}

console.log(presentar('Yeffer', '34'))



// RETO 3: Crea una función "esMayorDeEdad" que reciba una edad
// y devuelva true si es 18 o más, y false si no.
// (Pista: necesitas if... o puedes hacerlo en una sola línea con >=)


function esMayorDeEdad(edad) {
  return edad >=18 ? true : false
}


console.log(esMayorDeEdad(25))

// RETO 4 (bonus): Escribe el RETO 1 pero como arrow function.

const double = n => n*2


console.log(double(100))