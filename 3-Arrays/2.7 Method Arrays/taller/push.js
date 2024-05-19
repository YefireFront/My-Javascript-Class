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

const arr2 = [1, 2, 3];
const arr3 = [3, 2, 5];
function addMiddle(arr, elm) {
  let cabeza = [];
  let cola = [];

  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      cabeza.push(arr[i]);
    }
    for (let i = arr.length / 2; i < arr.length; i++) {
      cola.push(arr[i]);
    }
    cabeza.push(elm);
    return [...cabeza, ...cola];
  }

  if (arr.length % 2 !== 0) {
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      cabeza.push(arr[i]);
    }
    for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
      cola.push(arr[i]);
    }
    cabeza.push(elm);
    return [...cabeza, ...cola];
  }
}
let Mres1 = addMiddle(arr2, 15);

// 2.	Agregar Único: Escribe una función que tome un array y un elemento como argumentos, y utilice push() para agregar el elemento solo si no está presente en el array. Devuelve el array actualizado.

function addUnique(arr, elm) {
  let dif = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== elm) dif++;
  }

  if (dif === arr.length) arr.push(elm);

  return arr;
}

// 3.	Agregar Elementos Únicos: Crea una función que tome dos arrays como argumentos y use push()
// para agregar todos los elementos del segundo array al primero, pero solo si no están presentes en el primer array. Devuelve el array actualizado.

function arrInarr2(arr1, arr2) {
  let newarr = arr1;
  for (let i = 0; i < arr2.length; i++) {
    const elementarr2 = arr2[i];
    let be = false;

    for (let j = 0; j < arr1.length; j++) {
      const elementarr1 = arr1[j];

      if (elementarr1 === elementarr2) {
        be = true;
      }

      if (j+1 == arr2.length) {
          if (!be) newarr.push(elementarr2);
      }

    }
  }
}



// 4.	Agregar Elementos Condicionados: Escribe una función que tome un array y una función de condición como argumentos. Utiliza push() 
// para agregar elementos al array solo si cumplen con la condición proporcionada por la función. Devuelve el array actualizado.



function par(elm) {
    if (elm % 2 == 0) return true
}

function conditionelement(arr, fnc) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (fnc(element)) {
            arr.push(element)
        }
    }
}


// 5.	Agregar Elementos Después de Cierta Posición: Crea una función que tome un array, un elemento y una posición como argumentos, y utilice push() 
// para agregar el elemento después de la posición especificada en el array. Devuelve el array actualizado.


function addInIndex(arr , index , elm) {

    let cabeza =[];
    let cola =  [];



    for (let i = 0; i <= index; i++) {
        const element = arr[i];
        cabeza.push(element)
    }

    cabeza.push(elm)
    cabeza

    for (let i = index + 1; i < arr.length; i++) {
        const element = arr[i];
        cola.push(element)
    }

    return [...cabeza,...cola]
}



arr
const Sres5 = addInIndex(arr, 3,'we Will the champíons')
Sres5