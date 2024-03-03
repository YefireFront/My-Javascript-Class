/*
*Manipulación del DOM:
!1
Crea una página web con un botón que al hacer clic en él, cambie el color de fondo del documento.
!2
Desarrolla un formulario de inicio de sesión que valide el correo electrónico y la contraseña ingresados antes de enviar el formulario.

*Trabajo con Arrays:
!1
Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los números pares en el array.

!2
Implementa una función que tome un array de strings como parámetro y devuelva un nuevo array con solo las palabras que tienen más de 5 letras.
*Trabajo con Objetos:
!1
Crea un objeto llamado 'estudiante' que tenga propiedades como nombre, edad, curso, etc. Luego, crea una función que imprima todas las propiedades del objeto.
!2
Desarrolla una función que tome un array de objetos (cada objeto representa un libro con propiedades como título, autor, date de publicación, etc.) y devuelva el título del libro más reciente.

*AJAX y APIs:

Utiliza la API de GitHub para mostrar información de tu perfil (nombre de usuario, avatar, número de seguidores, etc.) en tu página web.
Crea un formulario que permita a los usuarios buscar películas utilizando la API de IMDb y muestra los resultados en la página.

*Eventos y Callbacks:

Implementa una función que tome dos números y una función de callback como parámetros y llame a la función de callback con la suma de los dos números.
Crea un reproductor de música simple que permita reproducir, pausar y detener una canción utilizando eventos y callbacks.

*ES6 y Funciones Asíncronas:

Convierte una función tradicional en una función de flecha y comprueba que funcione correctamente.
Utiliza async/await para hacer una solicitud a una API y mostrar los datos en la página cuando se resuelva la promesa.


*/


//* RECURSOS
const arrayNum = [1,2,3,4,5,6,7,8];
const arrayNames = ['yeffer','Chris Brown', 'riri', 'Jordan', 'Shaq Oneal','raul'];
let res = '';
let books = [
    { 
        titulo: "Cien dates de soledad", 
        autor: "Gabriel García Márquez", 
        date: 1967, 
        paginas: 432 
    },
    { 
        titulo: "El Señor de los Anillos", 
        autor: "J.R.R. Tolkien", 
        date: 1954, 
        paginas: 1178 
    },
    { 
        titulo: "Harry Potter y la piedra filosofal", 
        autor: "J.K. Rowling", 
        date: 1997, 
        paginas: 309 
    },
    { 
        titulo: "1984", 
        autor: "George Orwell", 
        date: 1949, 
        paginas: 328 
    },
    { 
        titulo: "Don Quijote de la Mancha", 
        autor: "Miguel de Cervantes", 
        date: 1605, 
        paginas: 863 
    },
    { 
        titulo: "Matar un ruiseñor", 
        autor: "Harper Lee", 
        date: 1960, 
        paginas: 324 
    },
    { 
        titulo: "Orgullo y prejuicio", 
        autor: "Jane Austen", 
        date: 1813, 
        paginas: 432 
    },
    { 
        titulo: "To Kill a Mockingbird", 
        autor: "Harper Lee", 
        date: 1960, 
        paginas: 324 
    },
    { 
        titulo: "The Catcher in the Rye", 
        autor: "J.D. Salinger", 
        date: 1951, 
        paginas: 224 
    },
    { 
        titulo: "The Great Gatsby", 
        autor: "F. Scott Fitzgerald", 
        date: 1925, 
        paginas: 180 
    }
];



//*Manipulación del DOM:
//!1

const btn = document.querySelector("#btn");

const root = document.querySelector("#root");

btn.addEventListener("click", function () {
    
    root.style.cssText = "color: red; background-color: lightblue; display: flex;  justify-content:space-between; alin-item:center";
});

//!2

function validarFormulario() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Expresión regular para validar el correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico y la contraseña están vacíos
    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar el formato del correo electrónico
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un correo electrónico válido.');
        return false;
    }

    // Verificar la longitud de la contraseña
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    // Si la validación pasa, enviar el formulario
    return true;
}




//*Trabajo con Arrays:

//!1
function addArray(array) {

    return array.filter(numero => numero % 2 === 0).reduce((acumulador, numero) => acumulador + numero, 0);
    
    //%PURELOGICAL
    // let add = 0
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    //     if (element %2===0) {
    //         add+=element            
    //     }
        
    //   }

  
}

//!2

function fiveLetter(stringArray) {
    
    let arrayFil=[]
    
    arrayFil = stringArray.filter(e  => e.length > 4)


    //%PURELOGICAL
    // for (let i = 0; i < stringArray.length; i++) {
    //     const element = stringArray[i];
        
    //     if (element.length > 6) {
    //         arrayFil[arrayFil.length] = element                
    //     }
        
    // }

    return arrayFil
}



//*Trabajo con Objetos:
//!1


const estudiante = {
    names : 'Yeffer',
    lastName : 'Moreno',
    age: 29,
    courses : 'Advanve JavaScript',

    who(){

        console.log(`My name is ${names} ${this.lastName} & i'm ${age} years old. This are all my courses`);

    }

}


function recentBook (arrayBooks) {

    let orderBooks = []
    orderBooks = arrayBooks.sort((a, b)=> a.date - b.date)


    //%PURELOGICAL
    // let comoding = ''
    // for (let i = 0; i < arrayBooks.length; i++) {
        
    //     if (arrayBooks[i+1]==undefined) {
    //         break
    //     }
    //     if (arrayBooks[i].date > arrayBooks[i + 1].date) {
    //         comoding = arrayBooks[i]
    //         arrayBooks[i] = arrayBooks[i + 1]
    //         arrayBooks[i + 1] = comoding
    //         i=0           
            
    //     }        
    // }


    // return arrayBooks
    return orderBooks

}

res = recentBook(books)
console.log(res);
