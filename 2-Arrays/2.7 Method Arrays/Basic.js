//*PUSH
//añade al final
let arr = [1, 2, 3];
arr.push(4);


//*UNSHIFT
//añade a el inicio
arr.unshift(0, 1);


//*POP
//Elimina el ultimo
let ultimoElemento = arr.pop();

//*SHIFT
//Elimina el primero
let primerElemento = arr.shift();

//*SLICE
//Devuelve una copia superficial de una parte de un array en un nuevo array.

let subArray = arr.slice(0, 2); 
arr
subArray

//*SPLICE

arr.splice(0,2 ); // Elimina 1 elemento desde el índice 2
arr

arr.splice(2, 1, 'a', 'b','yeffer'); // Inserta 'a' y 'b' en el índice 2
arr