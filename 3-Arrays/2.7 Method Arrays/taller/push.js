/**
 * Adds an element to the end of an array and returns the new length of the array.
 * @method push
 * @param {*} element - The element to add to the array.
 * @returns {number} - The new length of the array.
 */


//* JUNIOR
// 1.	Agregar Elemento: Escribe una función que tome un array y un elemento como argumentos, y utilice el método push() para agregar el elemento al final del array. Devuelve el array actualizado

const arr = [5, 7, 2, 6, 9];

function add(arr, elm) {
  arr.push(elm);
  return arr;
}

let Jres1 = add(arr, 15);

// 2.	Agregar Múltiples Elementos: Crea una función que tome un array y una lista de elementos como argumentos. Utiliza el método push() para agregar cada elemento de la lista al final del array. Devuelve el array actualizado.

function addsome(arr, ...elm) {
  console.log(elm);
  arr.push(...elm);
  return arr;
}

let Jres2 = addsome(arr, 15, 21, 5, 8, 6);

// 3.	Agregar Números Pares: Escribe una función que tome un array de números como argumento y agregue todos los números pares del 1 al 10 utilizando el método push(). Devuelve el array actualizado.

function pares(arr) {
  let arrPar = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element % 2 == 0) arrPar.push(element);
  }

  return arrPar;
}

let Jres3 = pares(arr);

// 4.	Agregar Strings: Crea una función que tome un array y una cadena como argumentos, y use push() para agregar la cadena al final del array. Devuelve el array actualizado.

function addString(arr, str) {
  arr.push(str);
  return arr;
}

let Jres4 = addString(arr, "Hola");

// 5.	Agregar Elemento Condicionado: Escribe una función que tome un array y un elemento como argumentos, y use push() para agregar el elemento al final del array solo si el elemento no está presente en el array. Devuelve el array actualizado.

function addElemt(arr, elm) {
  let be = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === elm) {
      be = true;
      break;
    }
  }
  if (!be) arr.push(elm);
  return arr;
}

let Jres5 = addElemt(arr, 8);




//* SEMI



// 1.	Agregar a la Mitad: Crea una función que tome un array y un elemento como argumentos, y use push() para agregar el elemento en la mitad del array. Si el array tiene un número impar de elementos, 
// el nuevo elemento debe agregarse justo después del elemento central; de lo contrario, debe agregarse después del primer elemento de la mitad derecha.


function addMiddle(arr, elm) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
    }
}