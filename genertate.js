const numbers = [1, 2, 3, 4, 5];

// forEach: Iterar y mostrar cada número
numbers.forEach(number => {
  console.log('forEach:', number);
});

// map: Crear nuevo array de números al cuadrado
const squaredNumbers = numbers.map(number => number * number);
console.log('map:', squaredNumbers);

// filter: Filtrar números pares
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('filter:', evenNumbers);

// reduce: Sumar todos los números
const sum = numbers.reduce((total, number) => total + number, 0);
console.log('reduce:', sum);

// find: Encontrar el primer número par
const firstEven = numbers.find(number => number % 2 === 0);
console.log('find:', firstEven);

// some: Comprobar si hay algún número par
const hasEven = numbers.some(number => number % 2 === 0);