/*
El operador ||, por ejemplo, devolverá el valor de su izquierda cuando ese
valor pueda convertirse en true y devolverá el valor de su derecha de lo contrario.
*/

console.log("Lebron" || false);
console.log("" || "Jhonson");
console.log("Lebron" || "Jhonson");
console.log(false || "");

/*
Cuando
el valor a su izquierda es algo que se convierte en false, devuelve ese valor, y
de lo contrario devuelve el valor de su derecha.
*/
console.log(0 && "Jhonson");
console.log("" && "Jhonson");
console.log(false && "Jhonson");
console.log(undefined && "Jhonson");
console.log("Lebron" && 0);
console.log("Lebron" && "Jhonson");

/*

El operador ?? es el operador de fusión de nulos (nullish coalescing operator) introducido en 
ECMAScript 2020 (también conocido como JavaScript). Su propósito es proporcionar una forma 
concisa de elegir un valor predeterminado cuando se tiene un valor que puede ser null o undefined.
*/
console.log(null ?? "Jordan");
console.log(undefined ?? "Jhonson");
console.log(0 ?? "Bird");
console.log("" ?? "Shaq");
console.log(false ?? "Curry");


let top = 7
let miEquipoLibertadores = 8

miEquipoLibertadores = (miEquipoLibertadores > top ) ? 'Somos grandes' : miEquipoLibertadores

mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

miEquipoLibertadores