const myElement = document.querySelector('#miElemento');
const firstElement = document.querySelector('.miClase');
const nestedElement = document.querySelector('#contenedor .elementoHijo');
const specificElement = document.querySelector('ul.lista > li:nth-child(2)');
const elementWithAttribute = document.querySelector('[data-atributo="valor"]');




const $ = selector => document.querySelector(selector)
const $Id = selector => document.getElementById(selector)
const $All = selector => document.querySelectorAll(selector)
const Elevar = Num => Num * Num


const $ConatinerDiv =   $('#Bogo');
const $ul           =   $('.lista');
const $items        =   $All('.items');

console.log($)
console.log(Elevar)

console.log($ConatinerDiv)
console.log($ul)
console.log($items)


// Seleccionar una lista de elementos
const nodeList = document.querySelectorAll('.miLista li');

// Convertir el NodeList a un Array
const arrayFromNodeList = Array.from(nodeList);
// O usando el operador de propagación
const arrayFromSpread = [...nodeList];


// advance Selestc
