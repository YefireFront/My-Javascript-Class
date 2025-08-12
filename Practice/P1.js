// Ejercicios
// forEach básico
// Dado el array ["Goku", "Vegeta", "Piccolo", "Gohan"], muestra en consola cada nombre en mayúsculas usando forEach.



let guerrerosZ = ["Goku", "Vegeta", "Piccolo", "Gohan"]

// guerrerosZ.forEach(guerrero =>{console.log(guerrero.toUpperCase())})



// map básico
// Dado el array [2, 4, 6, 8], crea un nuevo array donde cada número esté multiplicado por 3.

const numeros_1 =[2, 4, 6, 8] 

// const numeros_1_MAP = numeros_1.map(n => n * 3)


// map con objetos
// Dado el array de objetos:

// js
// Copiar
// Editar
// const productos = [
//   { nombre: "Camiseta", precio: 20 },
//   { nombre: "Pantalón", precio: 35 },
//   { nombre: "Zapatos", precio: 50 }
// ];
// Crea un nuevo array que solo contenga los precios con IVA (19%).


const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 }
];

const nuevosProductos = productos.map(produc => {
    return{
        nombre : produc.nombre,
        precio : produc.precio += (produc.precio * 0.19)
    }
})

// nuevosProductos




// filter básico
// Dado el array [10, 25, 5, 40, 15], crea un nuevo array con los números mayores a 20.
const numeros10 = [10, 25, 5, 40, 15];

const nuevosnumeros10 = numeros10.filter(n => n >= 20)





// filter con objetos
// Del array productos anterior, crea un nuevo array con los productos cuyo precio sea mayor a 30.

const nuevosProductosMayores =[]
 productos.forEach(produc => {
    if (produc.precio > 30){
        nuevosProductosMayores.push({
        nombre : produc.nombre,
        precio : produc.precio += (produc.precio * 0.19)
        })
    }
   
})

// Filtrar y modificar productos cuyo precio sea mayor a 30
const nuevosProductosMayoresRF = productos.filter(producto => producto.precio > 30);



// find
// Encuentra el primer producto cuyo precio sea mayor a 25 en el array productos.
const primerProducto30 = productos.find(p => p.precio > 30)


// some
// Determina si en el array [3, 5, 8, 1, 9] hay al menos un número mayor a 10.
const numeroSome =  [3, 5, 8, 1, 9];

const hayMayor10 = numeroSome.some(n => n > 10) ? console.log('si hay') : console.log('no hay ')



// every
// Comprueba si todos los números del array [4, 8, 12, 16] son múltiplos de 4.
const numeroEveri4 =  [4, 8, 12, 16];

const hayMultiplo4 = numeroEveri4.every(n => n % 4 == 0) ? 'todos son multiplo': 'todos no son multiplo'

// reduce básico
// Suma todos los números del array [5, 10, 15, 20].




// reduce con objetos
// Calcula el precio total de todos los productos del array productos.

const totalPrecio = productos.reduce((acumulador, p)=> acumulador + p.precio , 0)
totalPrecio

// sort (números)
// Ordena el array [30, 10, 50, 20, 40] de menor a mayor.
const numsort=  [30, 10, 50, 20, 40];


// const numSort = numsort.sort()
const numSort = numsort.sort((a , b)=> b - a)
numSort



// Ordena el array ["Naruto", "Goku", "Luffy", "Ichigo"] alfabéticamente.
const pNaruto = ["Naruto", "Goku", "Luffy", "Ichigo"];
const pNarutoSort = pNaruto.sort()
pNarutoSort

