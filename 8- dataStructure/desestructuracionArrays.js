// Ejemplo 1: Desestructuración básica
const colores = ['rojo', 'azul', 'verde'];
const [primerColor, segundoColor, tercerColor] = colores;
console.log('Ejemplo 1:', primerColor); // 'rojo'
console.log('Ejemplo 1:', segundoColor); // 'azul'

// Ejemplo 2: Saltando elementos
const numeros = [1, 2, 3, 4, 5];
const [primero, , tercero, , quinto] = numeros;
console.log('Ejemplo 2:', primero, tercero, quinto); // 1 3 5

// Ejemplo 3: Usando el operador rest (...)
const frutas = ['manzana', 'pera', 'plátano', 'naranja', 'kiwi'];
const [primera, segunda, ...restoFrutas] = frutas;
console.log('Ejemplo 3:', primera); // 'manzana'
console.log('Ejemplo 3:', restoFrutas); // ['plátano', 'naranja', 'kiwi']

// Ejemplo 4: Valores por defecto
const [nombre = 'Anónimo', edad = 18] = [];
console.log('Ejemplo 4:', nombre, edad); // 'Anónimo' 18

// Ejemplo 5: Intercambio de variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log('Ejemplo 5:', a, b); // 10 5

// Ejemplo 6: Desestructuración anidada
const datos = [1, [2, 3], 4];
const [x, [y, z], w] = datos;
console.log('Ejemplo 6:', x, y, z, w); // 1 2 3 4

// Ejemplo 7: Desestructuración con funciones
function obtenerCoordenadas() {
    return [10, 20, 30];
}
const [latitud, longitud, altura] = obtenerCoordenadas();
console.log('Ejemplo 7:', latitud, longitud, altura); // 10 20 30

// Ejemplo 8: Desestructuración parcial
const [primerElemento, ...elementosRestantes] = [1, 2, 3, 4, 5];
console.log('Ejemplo 8:', primerElemento); // 1
console.log('Ejemplo 8:', elementosRestantes); // [2, 3, 4, 5]

// Ejemplo 9: Desestructuración con valores por defecto y rest
const [primero2 = 0, segundo2 = 0, ...resto2] = [1];
console.log('Ejemplo 9:', primero2, segundo2, resto2); // 1 0 []
