//*  CRACION BASICA  Y TIPOS DE DATOS

const libro = {
    titulo: "JavaScript para Principiantes",
    autor: "Ana López",
    añoPublicacion: 2020,
    disponible: true,
    precio: 25.99
};

const pelicula = {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    actores: ["Marlon Brando", "Al Pacino", "James Caan"],
    duracion: 175,
    añoEstreno: 1972
};

const receta = {
    nombre: "Tarta de Manzana",
    tiempoPreparacion: 60,
    ingredientes: {
        manzanas: 4,
        azucar: 200,
        harina: 250,
        huevos: 3
    },
    dificultad: "Media"
};



const estudiante = {
    nombre: "Luis",
    edad: 2024 - 1995,
    universidad: undefined,
    carrera: "Ingeniería",
    asignadoA: null,
};









//*

let per = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

/**
 * Notación de Punto:

La notación de punto es la forma más común y directa de acceder a las propiedades de un objeto.
Se utiliza escribiendo el nombre del objeto seguido de un punto (.) y luego el nombre de la propiedad.
Es más legible y fácil de entender cuando se conoce el nombre de la propiedad de antemano.
No se pueden utilizar variables o expresiones para acceder a las propiedades dinámicamente.
 */

console.log(per.nombre); 
console.log(per.edad); 

/**
 * Notación de Corchetes:

La notación de corchetes permite acceder a las propiedades de un objeto utilizando una cadena que representa el nombre de la propiedad.
Se utiliza escribiendo el nombre del objeto seguido de corchetes ([]), dentro de los cuales se coloca la cadena que representa el nombre de la propiedad.
Se puede acceder a las propiedades de forma dinámica utilizando variables o expresiones dentro de los corchetes.
Es útil cuando el nombre de la propiedad está almacenado en una variable o cuando se accede a las propiedades dinámicam
 */
console.log(per["ciudad"]); 
let propiedad = "nombre";
console.log(per[propiedad]);




//*  FUNCIONES Y METODOS

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre + ".");
    }
};

persona.saludar(); // Output: Hola, soy Juan.


let calculadora = {
    suma: function(a, b) {
        return a + b;
    },
    resta: function(a, b) {
        return a - b;
    }
};




let cuentaBancaria = {
    saldo: 1000,
    depositar: function(cantidad) {
        this.saldo += cantidad;
        console.log("Se depositaron " + cantidad + " euros. Saldo actual: " + this.saldo + " euros.");
    },
    retirar: function(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log("Se retiraron " + cantidad + " euros. Saldo actual: " + this.saldo + " euros.");
        } else {
            console.log("Fondos insuficientes.");
        }
    }
};


let usuario = {
    nombre: "Ana",
    edad: 25,
    esMayorDeEdad: function() {
        if (this.edad >= 18) {
            console.log("¡" + this.nombre + " es mayor de edad!");
        } else {
            console.log("¡" + this.nombre + " es menor de edad!");
        }
    }
};





let carrito = {
    productos: [],
    agregarProducto: function(nombre, precio) {
        this.productos.push({ nombre: nombre, precio: precio });
        console.log("Se añadió " + nombre + " al carrito.");
    },
    calcularTotal: function() {
        let total = 0;
        this.productos.forEach(function(producto) {
            total += producto.precio;
        });
        return total;
    }
};

