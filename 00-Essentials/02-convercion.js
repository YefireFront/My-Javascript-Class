"use strict";
//Convercion de Datos

console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" - 1);

const numero = parseInt("123");

const numeroFloat = parseFloat("3.14");

const numero2 = Number("42");

const stringNumero = String(42);

let booleano1 = Boolean("yeffer");
let booleano2 = Boolean("");

booleano1;
booleano2;

function vald(numero1, numero2) {
  let a = numero1;
  let b = numero2;
  if (typeof numero1 == "string") {
    a = Number(numero1);
  }

  if (typeof numero2 == "string") {
    b = Number(numero2);
  }
  console.log(a + b);
}

vald("1", "1");
