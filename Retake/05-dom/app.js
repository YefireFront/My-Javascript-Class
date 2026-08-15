// ============================================================
// LECCIÓN 5 · DOM — PASO A PASO
// Este archivo crece contigo: cuando termines un paso y me digas
// "r", yo agrego el siguiente. Un concepto a la vez.
//
// CÓMO PROBAR: click derecho en index.html → "Open with Live Server"
// y en el navegador F12 → pestaña Console (tus console.log viven ahí).
// ============================================================


// ════════════════════════════════════════════════════════════
// PASO 1 — AGARRAR elementos: document.querySelector
// ════════════════════════════════════════════════════════════
//
// El navegador convirtió tu index.html en un árbol de objetos (el DOM).
// "document" es la puerta de entrada a ese árbol desde JS.
//
// Para AGARRAR una pieza se usa un selector, igual que en CSS:
//   document.querySelector("#contador")  → el elemento con id="contador"
//   document.querySelector("h1")         → el primer <h1> de la página
//
// Y una vez agarrada, puedes leer o cambiar su texto:
//   elemento.textContent           → leer su texto
//   elemento.textContent = "hola"  → cambiarlo (la página cambia YA)

// --- EJEMPLO (míralo funcionar antes de practicar) ---
const titulo = document.querySelector("h1");
console.log(titulo);              // el nodo <h1> completo

// --- TU MINI-PRÁCTICA DEL PASO 1 (solo querySelector + textContent) ---

// P1. Agarra el <p id="contador"> en una constante llamada "contador"
//     e imprímelo en consola. (Recuerda: los id se buscan con "#")
const contador = document.querySelector("#contador")
console.log(contador)


// P2. Cámbiale el texto a: "Temporada 2026 lista 🏀"
//     (guarda el archivo y MIRA la página cambiar — ese es el momento wow)
contador.textContent = "Temporada 2026 lista 🏀"


// P3. Cambia el texto del <h1> para ponerle tu propio equipo,
//     ej: "🏀 Yeffer Ballers"
titulo.textContent="🏀 Yeffer Ballers" 

// P4. Agarra el botón "Fichar" (id btnFichar) e imprime SU texto
//     en consola. ¿Qué imprime?
const btnFichar = document.querySelector("#btnFichar")
console.log(btnFichar)

// ─── PASO 1 COMPLETADO ✅ (9/10 — corrige P4: era btnFichar.textContent) ───


// ════════════════════════════════════════════════════════════
// PASO 2 — PINTAR datos en la página: createElement + append
// ════════════════════════════════════════════════════════════
//
// Para poner algo nuevo en la página son SIEMPRE 3 movimientos:
//
//   const li = document.createElement("li");  // 1. CREAR el elemento (aún invisible)
//   li.textContent = "🏀 Curry";              // 2. LLENARLO (texto, clases...)
//   lista.append(li);                         // 3. ENGANCHARLO a su padre → aparece
//
// Crear → llenar → enganchar. Como armar la carta y ponerla en la mesa.
// Bonus de seguridad: textContent trata TODO como texto plano, así que
// nadie puede inyectarte HTML malicioso (el famoso XSS).
//
// Una herramienta más para el paso 2 (la necesitarás en P6):
//   lista.replaceChildren();   // vacía al padre: borra todos sus hijos
// Sirve para "limpiar la mesa" antes de volver a pintar todo.
//
// El patrón completo de todo front queda así:
//   DATOS → recorrer con for...of → crear/llenar/enganchar → pantalla

// --- Los datos: tu plantilla NBA ---
let plantilla = [
  { id: 1, nombre: "Stephen Curry",  posicion: "base",    puntos: 24.8, activo: true },
  { id: 2, nombre: "LeBron James",   posicion: "alero",   puntos: 27.1, activo: true },
  { id: 3, nombre: "Nikola Jokic",   posicion: "pivot",   puntos: 20.9, activo: true },
  { id: 4, nombre: "Luka Doncic",    posicion: "base",    puntos: 28.6, activo: true },
  { id: 5, nombre: "Kobe Bryant",    posicion: "escolta", puntos: 25.0, activo: false },
  { id: 6, nombre: "Michael Jordan", posicion: "escolta", puntos: 30.1, activo: false },
];

// --- TU MINI-PRÁCTICA DEL PASO 2 ---

// P5. Calentamiento: agarra el <ul id="lista"> en una constante "lista"
//     y haz los 3 movimientos con UN jugador fijo:
//     crea un <li>, ponle de texto "🏀 Jugador de prueba", engánchalo.
//     Guarda y míralo aparecer en la página.

// ✅ CORRECCIÓN 2 aplicada: la constante ahora se llama "lista" y es
// la que usa TODO el archivo (antes pintar() usaba el global fantasma
// que el navegador crea por el id — funcionaba de chiripa).
const lista = document.querySelector('#lista')
const li = document.createElement("li")
li.textContent = "Yefire bas 🏀"
lista.append(li)


// P6. Ahora en serio: crea una función pintar() que:
//     1. limpie la mesa:  lista.replaceChildren()
//     2. recorra plantilla con for...of
//     3. por CADA jugador haga crear → llenar → enganchar, con texto:
//          🏀 Nombre — posicion · puntos pts
//        (template literal: `🏀 ${j.nombre} — ...`)
//     Llama a pintar() una vez. Deben verse los 6.
//     (¿Por qué limpiar primero? Prueba llamar pintar() DOS veces
//      seguidas sin el replaceChildren y mira qué pasa 😄)

// ✅ CORRECCIÓN 1 aplicada: aquí estaba tu primera function pintar()
// (la de P6). Se eliminó porque la de P7 la pisaba por completo:
// dos declaraciones con el mismo nombre = la última gana, incluso
// para las llamadas escritas antes. Una función, una sola versión.


// P7. Los retirados, tachados: dentro de tu for...of, si el jugador
//     tiene activo: false, agrégale la clase al li:
//       li.classList.add("retirado")
//     (el CSS de index.html ya sabe qué hacer con esa clase)

function pintar() {

  lista.replaceChildren();

  for (const j of plantilla) {

    const li = document.createElement("li");

    li.textContent = `🏀 ${j.nombre} — ${j.posicion} · ${j.puntos} pts`;

    // El "tatuaje" (necesario para el Paso 4): guardamos el id del
    // jugador EN el propio <li>, como atributo data-id. Así, cuando
    // alguien haga click en este <li>, podremos leerle el tatuaje y
    // saber exactamente a qué jugador del array corresponde.
    // En el HTML se ve así:  <li data-id="3">🏀 Nikola Jokic ...</li>
    li.dataset.id = j.id;

    if (j.activo === false) {
      li.classList.add("retirado");
    }

    lista.appendChild(li);
  }
}

// P8 (bonus). Agrega un 7º jugador al array a mano (el que quieras),
//     guarda, y confirma que aparece pintado sin tocar nada más.
//     Moraleja: los DATOS mandan, la página obedece.

plantilla.push({
  id: 7,
  nombre: "Kevin Durant",
  posicion: "alero",
  puntos: 27.3,
  activo: true
});

pintar()


// ─── PASO 2 COMPLETADO ✅ (8/10 — las 2 correcciones ya quedaron aplicadas) ───


// ════════════════════════════════════════════════════════════
// PASO 3 — ESCUCHAR al usuario: addEventListener + input.value
// ════════════════════════════════════════════════════════════
//
// Hasta ahora tu código corre UNA vez al cargar. Los eventos lo
// cambian todo: dejas "orejas" puestas, y cuando el usuario actúa,
// el navegador ejecuta tu función (¡vía la cola de tareas y el
// event loop — tu lección 4 en acción!):
//
//   boton.addEventListener("click", () => {
//     // esto corre CADA VEZ que hagan click, no ahora
//   });
//
// Y para leer lo que el usuario escribió en un input:
//   entrada.value      // ⚠ SIEMPRE llega como string, aunque escriban 25

// --- TU MINI-PRÁCTICA DEL PASO 3 ---

// P9. La oreja más simple: ponle un listener al botón Fichar que
//     solo haga console.log("¡click!"). Guarda, dale click varias
//     veces y mira la consola contarlos (Chrome los agrupa: "¡click! x4").




// P10. Dentro de ESE MISMO listener, agarra el <input id="entrada">
//      (constante "entrada", arriba con las demás) e imprime:
//      console.log(entrada.value, typeof entrada.value)
//      Escribe algo en la caja, dale click y confirma: siempre string.


// P11. El fichaje completo. Evoluciona el listener (¡no hagas otro!):
//      1. const nombre = entrada.value
//      2. si está vacío, corta:  if (nombre === "") return
//      3. arma el jugador nuevo:
//           { id: Date.now(),            ← número único (la hora en ms)
//             nombre: nombre,
//             posicion: "novato",
//             puntos: Math.round(Math.random() * 200 + 80) / 10,  ← 8.0 a 28.0
//             activo: true }
//      4. plantilla.push(jugadorNuevo)
//      5. entrada.value = ""            ← limpia la caja
//      6. pintar()
//      Ficha a quien quieras y míralo aparecer. 🎉


// P12 (bonus de seguridad — la promesa del XSS): con tu app ya
//      funcionando, escribe ESTO en el input y fíchalo:
//        <img src=x onerror=alert('hackeado')>
//      ¿Qué pasa? NADA malo: se pinta como texto literal. Eso es
//      textContent protegiéndote. Si hubiéramos usado innerHTML para
//      pintar, ese "jugador" habría EJECUTADO código ajeno en tu web.
//      Acabas de ver tu primera defensa contra XSS en vivo. 🛡️


// ✅ SOLUCIÓN PASO 3 (P9 → P11 son la MISMA oreja evolucionando;
//    esta es la versión final, con la historia contada en comentarios)

// La constante del input, arriba con sus hermanas conceptualmente:
const entrada = document.querySelector("#entrada");

btnFichar.addEventListener("click", () => {
  // P9 era solo esto: console.log("¡click!")
  // P10 agregaba:     console.log(entrada.value, typeof entrada.value)
  // → siempre "string": si algún día pides puntos por input, Number() antes.

  // P11: el fichaje completo
  const nombre = entrada.value;

  // Cláusula de guarda: si la caja está vacía, no hay nada que fichar.
  // El return corta el listener aquí; nada de lo de abajo corre.
  if (nombre === "") return;

  const jugadorNuevo = {
    id: Date.now(),          // ms desde 1970: número único suficiente aquí
    nombre: nombre,
    posicion: "novato",
    puntos: Math.round(Math.random() * 200 + 80) / 10, // 8.0 – 28.0
    activo: true,
  };

  plantilla.push(jugadorNuevo); // 1º cambian los DATOS...
  entrada.value = "";           // (cortesía: caja limpia para el siguiente)
  pintar();                     // ...y la página obedece. El ciclo completo.
});

// P12 (hazlo tú, es un click): escribe en el input
//   <img src=x onerror=alert('hackeado')>
// y fíchalo. Se pinta como texto inofensivo — textContent en acción.
// Con innerHTML, esa línea habría ejecutado el alert. Esa es la razón
// de fondo de tu elección del append. 🛡️

// ─── PASO 3 COMPLETADO ✅ ───


// ════════════════════════════════════════════════════════════
// PASO 4 — DELEGACIÓN: un solo oído para toda la lista
// ════════════════════════════════════════════════════════════
//
// Objetivo: click en un jugador → se retira (tachado). Otro click → vuelve.
//
// El problema: los <li> se DESTRUYEN y RECREAN en cada pintar()
// (replaceChildren los borra). Si le pones listener a cada <li>,
// muere en el siguiente repintado. ¿Ponerlos de nuevo cada vez? Caro y feo.
//
// La solución pro: DELEGACIÓN. Un ÚNICO listener en el padre (<ul>),
// que nunca se destruye. Los clicks de los hijos "burbujean" hacia
// arriba y el padre los recibe. Para saber a QUIÉN le hicieron click:
//
//   lista.addEventListener("click", (evento) => {
//     evento.target   // ← el elemento EXACTO donde cayó el click
//   });
//
// Y para saber QUÉ JUGADOR es ese <li>, le tatuamos su id al crearlo.
// Eso se hace con dataset (los atributos data-* de HTML):
//
//   li.dataset.id = j.id;         // en pintar(): <li data-id="3">
//   evento.target.dataset.id      // en el listener: "3"  ⚠ ¡STRING!

// --- TU MINI-PRÁCTICA DEL PASO 4 (esta vez sin solución 😉) ---

// P13. La oreja en el padre: listener de "click" en lista que haga
//      console.log(evento.target). Click en varios jugadores y mira
//      la consola: ¿qué te llega? ¿Y si haces click en la zona vacía
//      del <ul>, debajo de los jugadores?


// P14. El tatuaje: en pintar(), agrega li.dataset.id = j.id
//      Y en el listener de P13 imprime:
//      console.log(evento.target.dataset.id, typeof evento.target.dataset.id)
//      Confirma la trampa: llega como string (como TODO en el DOM).


// P15. El retiro (evoluciona el MISMO listener de P13):
//      1. const idClickeado = Number(evento.target.dataset.id)
//      2. plantilla = plantilla.map(...)  ← al jugador con ese id,
//         voltéale activo con spread: { ...j, activo: !j.activo }
//         (¡es tu completarTarea de la lección 3, calcado!)
//      3. pintar()
//      Click a Jordan → revive. Otro click → se retira. 😄


// P16 (bonus, el caso borde): si haces click en la zona vacía del
//      <ul>, evento.target es el propio <ul> (sin data-id) y tu
//      Number(undefined) da NaN. Protégelo con cláusula de guarda
//      al inicio del listener:
//        if (evento.target.tagName !== "LI") return;


// ✅ SOLUCIÓN PASO 4
// OJO: requiere el tatuaje en pintar(). Agrega esta línea dentro de tu
// for...of, antes del appendChild:
//
//     li.dataset.id = j.id;    // ← el <li> queda como <li data-id="3">
//
// (agrégala TÚ a tu pintar(); sin ella, el listener no sabe quién es quién)

lista.addEventListener("click", (evento) => {
  // P16: cláusula de guarda — si el click no cayó en un <li>
  // (ej: la zona vacía del ul), evento.target sería el propio <ul>,
  // su dataset.id sería undefined y Number(undefined) daría NaN.
  if (evento.target.tagName !== "LI") return;

  // P14: dataset.id llega como STRING ("3"), y nuestros id son números.
  // Number() lo convierte para poder comparar con === sin sorpresas.
  const idClickeado = Number(evento.target.dataset.id);

  // P15: el toggle inmutable — calcado de completarTarea (Lección 3):
  // map devuelve un array NUEVO donde solo el clickeado cambia.
  plantilla = plantilla.map(j =>
    j.id === idClickeado
      ? { ...j, activo: !j.activo }  // copia con activo volteado
      : j                            // los demás pasan tal cual
  );

  pintar(); // datos cambiaron → la página obedece
});

// ─── PASO 4 COMPLETADO ✅ (el data-id ya quedó dentro de pintar) ───


// ════════════════════════════════════════════════════════════
// PASO 5 (FINAL) — Cargar datos externos: fetch + append
// ════════════════════════════════════════════════════════════
//
// Hasta ahora tus datos viven ESCRITOS en este archivo. En el mundo
// real llegan de AFUERA: de un archivo, de una API, de una base de
// datos. Este paso junta tu Lección 4 (fetch/async/await) con todo
// lo que acabas de aprender del DOM.
//
// Vamos a cargar el archivo leyendas.json (está en esta carpeta,
// ábrelo y míralo: es un array de jugadores en formato JSON).
//
// DETALLE IMPORTANTE — por qué esto exige Live Server:
// fetch NO puede leer archivos de tu disco directamente (file://...).
// Necesita pedírselos a un SERVIDOR vía http://. Live Server es un
// mini-servidor que sirve tu carpeta — por eso la URL "leyendas.json"
// funciona: en realidad está pidiendo
// http://127.0.0.1:5500/05-dom/leyendas.json
// En la Fase 4 el servidor lo vas a programar TÚ, y esta pieza
// encajará sola.

// ✅ SOLUCIÓN PASO 5 — leída línea por línea, sin prisa:

// 1) Agarramos el botón, como siempre (herramienta 1 del DOM):
const btnLeyendas = document.querySelector("#btnLeyendas");

// 2) Oreja puesta. Fíjate en el "async" antes de los paréntesis:
//    como ADENTRO usaremos await, la función del listener debe ser
//    async (la regla de la Lección 4: await solo vive en async).
btnLeyendas.addEventListener("click", async () => {

  // 3) try/catch: pedir datos SIEMPRE puede fallar (archivo borrado,
  //    sin conexión, servidor caído...). Si algo explota dentro del
  //    try, saltamos al catch y la app sigue viva.
  try {

    // 4) La petición. await = "espera aquí (solo esta función) hasta
    //    que llegue la respuesta". El programa NO se congela.
    const resp = await fetch("leyendas.json");

    // 5) La respuesta llega "cruda" (texto). .json() la convierte en
    //    objetos JavaScript de verdad. También tarda → otro await.
    const leyendas = await resp.json();

    // 6) FILTRO ANTI-DUPLICADOS: si aprietas el botón dos veces, no
    //    queremos dos Magic Johnson. Lógica, leída de adentro afuera:
    //      plantilla.some(j => j.nombre === ley.nombre)
    //        → ¿ALGUNO de mi plantilla ya se llama como esta leyenda?
    //      El filter se queda solo con las leyendas donde eso es false
    //        → es decir, con las que AÚN NO están fichadas.
    const nuevas = leyendas.filter(
      ley => !plantilla.some(j => j.nombre === ley.nombre)
    );

    // 7) Sumamos las nuevas a los datos. [...a, ...b] crea un array
    //    NUEVO con los de a y los de b (spread, Lección 3).
    plantilla = [...plantilla, ...nuevas];

    // 8) Y el final de siempre: datos cambiaron → la página obedece.
    pintar();

  } catch (error) {
    // Si el fetch falló, aterrizamos aquí con el motivo en error.message.
    // La app no revienta: informa y sigue funcionando.
    console.log("No se pudieron cargar las leyendas:", error.message);
  }
});

// ─── 🏁 LECCIÓN 5 COMPLETADA ───
// Tu app hace TODO el ciclo de un front real:
//   pinta datos → escucha al usuario → modifica datos → repinta
//   → y carga datos externos con fetch.
// Practica con los talleres de la carpeta ../talleres-dom y cuando
// quieras seguimos en la Fase 4: Retake/06-backend (¡Express!).
