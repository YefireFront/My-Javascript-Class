// Declaración y asignación de un conjunto
let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(2); // No se añadirá porque 2 ya existe en el conjunto

// Comprobar existencia de un valor
console.log(conjunto.has(2)); // true

// Eliminar un valor
conjunto.delete(1);
console.log(conjunto.has(1)); // false

// Tamaño del conjunto
console.log(conjunto.size); // 1
