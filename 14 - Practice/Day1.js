//% Manipulación de Arrays y Objetos:

// Crea una función llamada calcularPromedio que tome un array de números como argumento y devuelva el promedio de esos números.
const numberArray = [3, 3, 3, 5];
function AVG(arr) {
  const prom =
    arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /
    arr.length;
  console.log(prom);
}
// AVG(numberArray);

//% Utiliza un bucle for of para recorrer el array y calcular la suma de los números.
let sum = 0;

  