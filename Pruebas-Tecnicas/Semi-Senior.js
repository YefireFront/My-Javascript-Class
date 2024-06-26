// Ejercicio de manipulación de arrays:
// Escribe una función que tome un array de números como entrada y devuelva un nuevo array con solo los números pares.

let arrayNumbers = [1,2,,2,2,2,3,4,4,4,5,6,7,8,9,10,8,7,8,8,20,2211,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

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




/*
Ejercicio: Sistema de gestión de tareas
Crea un sistema de gestión de tareas que permita al usuario agregar nuevas tareas, marcar tareas como completadas
eliminar tareas y ver todas las tareas existentes. Utiliza un objeto para representar cada tarea, con propiedades como id, descripcion y completada.

Requisitos:

Debe haber funciones para agregar, marcar como completada, eliminar y mostrar todas las tareas.
Las tareas deben tener un identificador único (id).
Debe manejar el estado de completado de cada tarea.
Debe proporcionar una interfaz de usuario simple para que el usuario interactúe con el sistema de gestión de tareas.
*/


class Tasks {
    constructor(id,description){
        this.id = id,
        this.description = description,
        this.state = false
    }
}


const taskManager = {
    task: [],
    addTask(description){
        const newTask = new Tasks(Date.now(), description)
        this.task.push(newTask)
    },

    checkTask(id){
        const task = this.task.find(e => e.id === id)
        if (task) {
            task.state = true
        }
    },

    deleteTask(id){
        this.task = this.task.filter(e=> e.id !== id)
    },

    showTask(){
        this.task.forEach(e=>{
            console.log(`ID. ${e.id} DESCRIPTION: ${e.description}`);
        })
    }
}





//* Prueba 

/*
Suma de elementos pares: Escribe una función que reciba un array de números
 y devuelva la suma de todos los elementos pares.
*/


function sumPar(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element %2 ==0) {
            sum += element
        }
        
    }
    return sum
}
sumPar(arrayNumbers)


/*
Eliminar duplicados: Escribe una función que tome un array como
 argumento y devuelva un nuevo array con los elementos únicos (sin duplicados).
 */

 function byeDouble(array) {
    let arrayNoDuplicados = [array[0]];
    let dupli = true

    for (let i = 0; i < array.length; i++) {

       for (let j = 0; j < arrayNoDuplicados.length; j++) {

         if (array[i] == arrayNoDuplicados[j] )  dupli = false

       }
       if (!dupli) {
        arrayNoDuplicados[arrayNoDuplicados.length] = array[i]
       }
        
    }
    return arrayNoDuplicados
 }

let res = byeDouble(arrayNumbers)
console.log(res)