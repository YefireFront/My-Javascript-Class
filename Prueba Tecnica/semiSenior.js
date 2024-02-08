// Ejercicio de manipulación de arrays:
// Escribe una función que tome un array de números como entrada y devuelva un nuevo array con solo los números pares.

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

//arrow fuction
getPar = (arr)=>{
    let arrPar = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element%2 == 0) {
            arrPar[arrPar.length] = element
        }
    }
    console.log(arrPar);
}
//declared function  and array method
function getPar2 (arr) {
    let arrPar = arr.filter(e=> e%2==0)
    console.log(arrPar);
}


// Ejercicio de objetos y funciones:
// Crea un objeto que represente un libro con propiedades como título, autor y número de páginas. 
// Luego, escribe una función que tome un array de estos objetos y devuelva la cantidad total de páginas de todos los libros.

const books = [
{
    titulo:'El club de las 5 de la mañana',
    autor:'ryan arthir',
    paginas: 12
},
{
    titulo:'Dont make me think',
    autor:'ryan arthir',
    paginas: 12
},
{
    titulo:'La sociedad de los poetas muertos',
    autor:'ryan arthir',
    paginas: 12
},{
    titulo:'if you want it you do it ',
    autor:'ryan arthir',
    paginas: 14
}

]

getPages = (arr)=>{
    let numPages = 0

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        numPages += element.paginas
    }

    console.log(numPages);
}

function getPages2(arrayDeLibros) {
    let tp = 0
    arrayDeLibros.forEach(e => tp += e.paginas );
    console.log(tp);

}

/**
 * Ejercicio de programación orientada a objetos:
Crea una clase Animal con propiedades como nombre y edad, y métodos como comer() y dormir(). 
Luego, crea subclases como Perro, Gato, etc., que extiendan la clase Animal y tengan
 métodos adicionales específicos para cada tipo de anima
 */

 class Animal{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    eta(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
 }
 
 class Cat extends Animal{
    constructor(name, age){
        super(name, age)
    }

    rumbling(){
        console.log(`The cat, ${this.name} is rumbling`);
    }
}

class Hourse extends Animal{
    constructor(name,age,competition){
        super(name,age)
        this.competition = competition
    }
    ride(){
        console.log(`The hourse, ${this.name} is riding`);
    }
 }


/**
 * Ejercicio de manipulación del DOM:
Escribe un script que agregue un botón a una página HTML y que al hacer clic en él, cambie el color de fondo de la página.
 */

 
const cambiarColorBtn = document.getElementById('cambiarColorBtn');

function cambiarColorDeFondo() {
    // get random color
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = colorAleatorio;
}

cambiarColorBtn.addEventListener('click', cambiarColorDeFondo);

