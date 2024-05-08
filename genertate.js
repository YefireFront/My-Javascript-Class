const numeros = [1, 2, 3, 4, 5];


// Método push()
numeros.push(6);
console.log(numeros); // Output: [1, 2, 3, 4, 5, 6]

// Método pop()
const ultimoNumero = numeros.pop();
console.log(ultimoNumero); // Output: 6

// Método shift()
const primerNumero = numeros.shift();
console.log(primerNumero); // Output: 1

// Método unshift()
numeros.unshift(0);
console.log(numeros); // Output: [0, 2, 3, 4, 5]

// Método slice()
const subArray = numeros.slice(2, 4);
console.log(subArray); // Output: [3, 4]

// Método splice()
numeros.splice(1, 2);
console.log(numeros); // Output: [0, 4, 5]

// Método concat()
const otroArray = [6, 7, 8];
const arrayConcatenado = numeros.concat(otroArray);
console.log(arrayConcatenado); // Output: [0, 4, 5, 6, 7, 8]

// Método join()
const arrayComoString = numeros.join("-");
console.log(arrayComoString); // Output: "0-4-5"

// Método reverse()
numeros.reverse();
console.log(numeros); // Output: [5, 4, 0]

// Método sort()
numeros.sort();
console.log(numeros); // Output: [0, 4, 5]