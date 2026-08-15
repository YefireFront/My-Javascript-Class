// ============================================
// LECCIÓN 3: map, filter y find
// Ejecuta con:  node 03-metodos-array.js
// ============================================
// Los 3 reciben una función y la aplican a cada elemento.
// La diferencia es QUÉ devuelven:
//   map    -> un array NUEVO transformado (mismo tamaño)
//   filter -> un array NUEVO solo con los que cumplen (tamaño menor o igual)
//   find   -> UN elemento (el primero que cumple) o undefined

const numeros = [10, 25, 8, 42, 3];

// --- map: transformar cada elemento ---
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [20, 50, 16, 84, 6]

// --- filter: quedarse solo con algunos ---
const mayoresDe9 = numeros.filter(n => n > 9);
console.log(mayoresDe9); // [10, 25, 42]

// --- find: buscar UNO ---
const primero = numeros.find(n => n > 9);
console.log(primero); // 10 (el primero que cumple, no un array)

// Y con objetos (que es como los usarás siempre):
const tareas = [
  { id: 1, titulo: "Estudiar JavaScript", completada: true },
  { id: 2, titulo: "Hacer ejercicio", completada: false },
  { id: 3, titulo: "Leer un libro", completada: false },
];

const titulos = tareas.map(t => t.titulo);
console.log(titulos); // ["Estudiar JavaScript", "Hacer ejercicio", "Leer un libro"]

const pendientes = tareas.filter(t => !t.completada);
console.log(pendientes); // las 2 tareas no completadas (objetos completos)

const tarea2 = tareas.find(t => t.id === 2);
console.log(tarea2); // { id: 2, titulo: "Hacer ejercicio", completada: false }

// ============================================
// TUS RETOS
// ============================================

// RETO 1: Reescribe tu "buscarTarea" de la lección 2 usando find.
// Debe quedar de 1-3 líneas. Ojo: si find no encuentra, devuelve
// undefined; haz que tu función devuelva null en ese caso.
// Pista: puedes usar un if, o investigar el operador ?? (nullish coalescing).

const tareaencontrada = tareas.find( t => t.id ==2);
console.log(tareaencontrada)

// ✅ SOLUCIÓN RETO 1 (con sufijo "Sol" para no chocar con tus nombres):
// - Es una FUNCIÓN reutilizable: el id llega como parámetro, no fijo en 2.
// - `===` siempre, nunca `==`.
// - El operador `??` significa: "si lo de la izquierda es null o undefined,
//   usa lo de la derecha". find devuelve undefined si no encuentra → lo
//   convertimos a null, que es lo que nuestra API usará para responder 404.
const buscarTareaSol = (listaTareas, id) => listaTareas.find(t => t.id === id) ?? null;

console.log(buscarTareaSol(tareas, 2));   // { id: 2, ... }
console.log(buscarTareaSol(tareas, 99));  // null (no undefined)


// RETO 2: Crea una función "tareasCompletadas" que reciba el array de
// tareas y devuelva SOLO los títulos (strings) de las completadas.
// Pista: se resuelve encadenando dos de los tres métodos.
// console.log(tareasCompletadas(tareas)) -> ["Estudiar JavaScript"]

const tareaCompletas = tareas.filter(t => t.completada)
console.log(tareaCompletas)

// ✅ SOLUCIÓN RETO 2:
// Tu filter estaba bien pero devolvía OBJETOS completos; faltaba el segundo
// paso de la cadena. La salida de una máquina entra a la siguiente:
//   filter -> [objetos completados]  ->  map -> [solo títulos]
function tareasCompletadasSol(listaTareas) {
  return listaTareas
    .filter(t => t.completada)   // 1º: solo las completadas
    .map(t => t.titulo);         // 2º: de cada objeto, saco el título
}

console.log(tareasCompletadasSol(tareas)); // ["Estudiar JavaScript"]

// RETO 3: Crea una función "eliminarTarea" que reciba el array de tareas
// y un id, y devuelva un array NUEVO sin la tarea de ese id.
// Pista: "eliminar" con filter = quedarse con todos los que NO son ese id.
// Esto será tu DELETE /tareas/:id en la API.
function eliminarTarea(arraytareas, idTarea) {
  const taresaCompletas = arraytareas.filter(  t => t.id !== idTarea )
  return taresaCompletas
}

console.log(eliminarTarea(tareas, 1))

// ✅ SOLUCIÓN RETO 3: tu lógica era CORRECTA. Solo dos pulidos:
// - No hace falta la variable intermedia: se puede retornar directo.
// - Si la usas, el nombre debe decir la verdad: eran "tareasRestantes",
//   no "taresaCompletas".
function eliminarTareaSol(listaTareas, id) {
  return listaTareas.filter(t => t.id !== id);
}

console.log(eliminarTareaSol(tareas, 1));



// RETO 4: Crea una función "completarTarea" que reciba el array y un id,
// y devuelva un array nuevo donde esa tarea tenga completada: true y las
// demás queden igual.
// Pista: map + un ternario. Para crear la copia modificada puedes escribir:
//   { id: t.id, titulo: t.titulo, completada: true }
// Esto será tu PUT /tareas/:id en la API.

function completarTarea(ArrayTareas, idTareas) {

   return ArrayTareas.map( t => t.id === idTareas ? t.completada = true : t )

}

// ✅ SOLUCIÓN RETO 4: tus dos errores eran:
// (1) `t.completada = true` es una ASIGNACIÓN, y su valor es `true`.
//     map guarda lo que la función DEVUELVE → guardó `true` en vez del objeto.
// (2) Esa asignación además modificaba el array original (mutación).
// La regla: en map se devuelve un objeto NUEVO. El spread `...t` copia
// todas las propiedades de t, y lo que pongas después la sobreescribe:
function completarTareaSol(listaTareas, id) {
  return listaTareas.map(t =>
    t.id === id
      ? { ...t, completada: true }  // copia de t, con completada cambiada
      : t                           // las demás pasan tal cual
  );
}

console.log(completarTareaSol(tareas, 2)); // la tarea 2 sale con completada: true
console.log(tareas);                       // y el original queda INTACTO
