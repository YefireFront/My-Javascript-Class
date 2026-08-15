// ============================================
// LECCIÓN 4: Asincronismo y fetch
// Ejecuta con:  node 04-asincronismo.js
// (necesitas internet: vamos a consumir una API real)
// ============================================

// --- CONCEPTO 1: JavaScript no espera ---
console.log("A");
setTimeout(() => {
  console.log("B (llegué 2 segundos tarde)");
}, 2000);
console.log("C");
// Orden real: A, C... y 2 segundos después, B.
// setTimeout deja la función "en la cocina" y el código sigue.

// --- CONCEPTO 2: async / await + fetch ---
// fetch pide datos a una URL. Como internet tarda, fetch devuelve una
// PROMESA (un ticket). await espera el ticket y te da el valor real.
// Regla: await solo funciona dentro de una función marcada con async.

async function verTarea() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const datos = await resp.json(); // el texto de la respuesta → objeto JS
  console.log("Tarea de la API:", datos);
}

verTarea();
// jsonplaceholder es una API gratis de práctica. Sus "todos" son tareas:
// { userId: 1, id: 1, title: "delectus aut autem", completed: false }
// ¿Te suena? ¡Es NUESTRO proyecto pero en inglés!

// ============================================
// TUS RETOS
// ============================================

// RETO 1 (calentamiento, sin ejecutar): ¿en qué orden se imprime esto?
// Escribe tu predicción en el comentario de abajo y LUEGO pruébalo.
//
//   console.log("uno");
//   setTimeout(() => console.log("dos"), 0);
//   console.log("tres");
//
// Mi predicción: uno tres dos


// RETO 2: Crea una función async "traerTarea" que reciba un id,
// pida  https://jsonplaceholder.typicode.com/todos/ID  (pega el id al
// final de la url con template literal) y DEVUELVA el objeto de la tarea.
// Pruébala así (fíjate: para usar el resultado también hace falta await,
// así que llámala desde otra función async):
//
//   async function main() {
//     const t = await traerTarea(5);
//     console.log(t.title);
//   }
//   main();


async function traerTareas(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await resp.json()
  console.log(data)

}

traerTareas(9)

// ✅ SOLUCIÓN RETO 2: tu fetch y tu .json() estaban perfectos.
// Lo que faltaba: RETORNAR el dato (no imprimirlo) — una función que solo
// hace console.log no le sirve a nadie más. Y el nombre en singular:
// trae UNA tarea.
async function traerTareaSol(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await resp.json();
  return data; // 👈 la clave: quien llama decide qué hacer con la tarea
}

// Para USAR el resultado también hay que esperar la promesa con await,
// y await solo vive dentro de una async → por eso el main():
async function mainReto2() {
  const t = await traerTareaSol(5);
  console.log("SOL 2 →", t.title);
}
mainReto2();


// RETO 3: Crea una función async "titulosPendientes" que pida TODAS las
// tareas (https://jsonplaceholder.typicode.com/todos), y devuelva solo
// los TÍTULOS de las NO completadas (campo: completed) ...pero solo las
// primeras 5 para no inundar la consola.
// Pistas: es Lección 3 pura después del fetch. Y existe .slice(0, 5)
// para quedarte con los primeros 5 de un array.

async function titulosPendientes() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  let respuestaTitulosPendientes = data
    .filter(task => !task.completed)
    .map(task => task.title);

  console.log(respuestaTitulosPendientes);
}

titulosPendientes()

// ✅ SOLUCIÓN RETO 3: tu filter + map era EXACTO (Lección 3 aplicada a
// datos reales). Solo faltaban dos cosas:
//   1. .slice(0, 5) — sin él imprimiste ~90 títulos
//   2. return en vez de console.log (mismo motivo que el reto 2)
async function titulosPendientesSol() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await resp.json();
  return data
    .filter(t => !t.completed)  // solo las NO completadas
    .map(t => t.title)          // de cada objeto, su título
    .slice(0, 5);               // y de esos, los primeros 5
}

async function mainReto3() {
  const titulos = await titulosPendientesSol();
  console.log("SOL 3 →", titulos);
}
mainReto3();


// RETO 4: ¿Qué pasa si la URL está mal? Prueba tu traerTarea con la url
// rota "https://jsonplaceholder.typicode.commmm/todos/1" y mira el error.
// Luego protégela con try/catch:
//
//   try {
//     // lo que puede fallar
//   } catch (error) {
//     console.log("Algo falló:", error.message);
//   }
//
// Haz que traerTarea devuelva null cuando algo falle (¿te suena el patrón?
// igual que buscarTarea: null = "no lo tengo", y quien llama decide qué hacer).

// ✅ SOLUCIÓN RETO 4: la versión "a prueba de internet". El try envuelve
// TODO lo que puede fallar; si cualquier línea explota, el programa salta
// al catch en vez de morirse, y devolvemos null (el contrato de siempre:
// null = "no lo tengo", quien llama decide).
// Es exactamente lo que genera tu snippet `afn`.
async function traerTareaSegura(id) {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("SOL 4 → Algo falló:", error.message);
    return null;
  }
}

// Probamos LOS DOS caminos: el feliz y el roto.
async function mainReto4() {
  const buena = await traerTareaSegura(3);
  console.log("SOL 4 (url buena) →", buena.title);

  // La misma función con dominio roto NO revienta el programa:
  const rotaUrl = "https://jsonplaceholder.typicode.commmm/todos/1";
  try {
    await fetch(rotaUrl); // así se ve el error SIN protección (lo atrapamos aquí para la demo)
  } catch (e) {
    console.log("SOL 4 → así muere un fetch sin try/catch:", e.message);
  }

  // Y así respondería nuestra futura API:
  const t = await traerTareaSegura(9999999); // id que no existe → la API responde {} vacío
  if (t === null || t.id === undefined) {
    console.log("SOL 4 → 404: tarea no encontrada");
  }
}
mainReto4();

// 📌 NOTA PRO (guárdala para el backend): fetch solo LANZA error cuando no
// puede conectar (dominio roto, sin internet). Si el servidor responde
// "404 no existe", fetch NO lanza error: te llega una respuesta con
// resp.ok === false. Por eso arriba el id 9999999 no cayó en el catch:
// el servidor SÍ respondió (con un objeto vacío). En el backend
// comprobaremos resp.ok además del try/catch.
