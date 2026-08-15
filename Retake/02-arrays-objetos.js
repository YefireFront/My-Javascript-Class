// ============================================
// LECCIÓN 2: Arrays y objetos
// Ejecuta con:  node 02-arrays-objetos.js
// ============================================

// --- CONCEPTO 1: Arrays (listas) ---
const frutas = ["manzana", "pera", "uva"];


frutas.push("mango");          // agrega al final

// Para recorrer un array: for...of
// for (const fruta of frutas) {
//   console.log("Me gusta la", fruta);
// }

// --- CONCEPTO 2: Objetos (datos con nombre) ---
// Un objeto agrupa datos relacionados. Así se ve UNA tarea de nuestro
// futuro gestor de tareas:
const tarea = {
  id: 1,
  titulo: "Estudiar JavaScript",
  completada: false,
};


// --- CONCEPTO 3: La combinación estrella: array DE objetos ---
// Así se ven los datos en el mundo real (así te los devuelve una base de datos):


// for (const t of tareas) {
//   console.log(t.id, "-", t.titulo);
// }

// ============================================
// TUS RETOS
// ============================================

// RETO 1: Crea un array "numeros" con [10, 25, 8, 42, 3] y recorre el array
// con for...of imprimiendo cada número multiplicado por 10.

const numbers = [10, 25, 8, 42,3]

for(const i of numbers){
  // console.log(i)
}



// RETO 2: Crea una función "sumarTodo" que reciba un array de números
// y devuelva la suma de todos.
// Pista: crea una variable "total" en 0 antes del loop y ve sumando.
// Pruébala: console.log(sumarTodo([10, 20, 30])) -> 60

function sumarTodo( NewArray) {
  let total = 0;

  for (const element of NewArray) {
    total += element
  }

  return total
}

console.log(sumarTodo(numbers))



// RETO 3: Crea un objeto "usuario" con: nombre, email y edad (inventa los datos).
// Luego imprime un texto con template literal: "Yeffer (y.yefire@gmail.com) tiene 25 años"



 const usuario ={
  id: 325,
  nombre: 'Michael',
  email: 'Yefire@gmail.com',
  edad:25
 }

 console.log(`${usuario.nombre} ${usuario.email} tiene ${usuario.edad} años`)


// RETO 4: Usando el array "tareas" de arriba, crea una función
// "contarPendientes" que reciba un array de tareas y devuelva CUÁNTAS
// tienen completada: false.
// Pruébala: console.log(contarPendientes(tareas)) -> 2



const tareas = [
  { id: 1, titulo: "Estudiar JavaScript", completada: true },
  { id: 2, titulo: "Hacer ejercicio", completada: false },
  { id: 3, titulo: "Leer un libro", completada: false },
];


function contarPendientes(Tareas) {
  let tareasPendientes = 0;

  for (const element of Tareas) {
    if(!element.completada){
      tareasPendientes +=1
    }

  }
  return tareasPendientes

  
}
console.log(contarPendientes(tareas)) 





// RETO 5 (bonus): Crea una función "buscarTarea" que reciba el array de
// tareas y un id, y devuelva la tarea que tenga ese id (el objeto completo).
// Si no existe, que devuelva null.
// Esto es EXACTAMENTE lo que hará tu API cuando pidan GET /tareas/2.

function buscarTarea(Tareas, id) {

  for (const element of Tareas) {

    if(element.id === id){
      return element
    }
    
  }
}

const elementoEncontrdo = buscarTarea(tareas, 2)
console.log(elementoEncontrdo)

