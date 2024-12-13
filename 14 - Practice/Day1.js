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
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  sum += element;
}
// console.log(sum/numberArray.length);

//% Funciones y Datos Primitivos:

// Define una función llamada calcularCuadrado que tome un número como argumento y devuelva el cuadrado de ese número.
const sqrt = (num) => num * num;
// Utiliza una declaración de función para definir la función.
function sqrt2(num) {
  console.log(num * num);
}

//% Manejo de Excepciones:

// Escribe un bloque try...catch que intente convertir una cadena en un número usando parseInt.
function trc(e) {
  try {
    console.log(e);
    newn = parseInt(e);
    console.log(newn);
  } catch (error) {
    console.log("this happend ", error);
  }
}

// trc('24')

//% Bucl