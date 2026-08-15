// ============================================================
// 🏀 SÚPER PRÁCTICA: Manipulación de arrays de objetos — NBA Edition
// 30 ejercicios: medios → avanzados. Ejecuta con: node practica-nba.js
//
// Reglas del gimnasio:
//  - Resuélvelos EN ORDEN (suben de dificultad y se apoyan entre sí)
//  - Imprime cada resultado con etiqueta: console.log("E1:", resultado)
//  - NUNCA modifiques el array original (salvo que el ejercicio lo pida)
//  - Atascado 10+ min en uno → márcalo, sigue, y al final me dices "r"
// ============================================================

const jugadores = [
  { id: 1, nombre: "Michael Jordan", posicion: "escolta", era: "clasico", retirado: true, anillos: 6, mvps: 5, altura: 1.98, equipos: ["Bulls", "Wizards"], stats: { puntos: 30.1, rebotes: 6.2, asistencias: 5.3 } },
  { id: 2, nombre: "LeBron James", posicion: "alero", era: "actual", retirado: false, anillos: 4, mvps: 4, altura: 2.06, equipos: ["Cavaliers", "Heat", "Lakers"], stats: { puntos: 27.1, rebotes: 7.5, asistencias: 7.4 } },
  { id: 3, nombre: "Kobe Bryant", posicion: "escolta", era: "clasico", retirado: true, anillos: 5, mvps: 1, altura: 1.98, equipos: ["Lakers"], stats: { puntos: 25.0, rebotes: 5.2, asistencias: 4.7 } },
  { id: 4, nombre: "Magic Johnson", posicion: "base", era: "clasico", retirado: true, anillos: 5, mvps: 3, altura: 2.06, equipos: ["Lakers"], stats: { puntos: 19.5, rebotes: 7.2, asistencias: 11.2 } },
  { id: 5, nombre: "Larry Bird", posicion: "alero", era: "clasico", retirado: true, anillos: 3, mvps: 3, altura: 2.06, equipos: ["Celtics"], stats: { puntos: 24.3, rebotes: 10.0, asistencias: 6.3 } },
  { id: 6, nombre: "Shaquille O'Neal", posicion: "pivot", era: "clasico", retirado: true, anillos: 4, mvps: 1, altura: 2.16, equipos: ["Magic", "Lakers", "Heat", "Suns", "Cavaliers", "Celtics"], stats: { puntos: 23.7, rebotes: 10.9, asistencias: 2.5 } },
  { id: 7, nombre: "Tim Duncan", posicion: "ala-pivot", era: "clasico", retirado: true, anillos: 5, mvps: 2, altura: 2.11, equipos: ["Spurs"], stats: { puntos: 19.0, rebotes: 10.8, asistencias: 3.0 } },
  { id: 8, nombre: "Hakeem Olajuwon", posicion: "pivot", era: "clasico", retirado: true, anillos: 2, mvps: 1, altura: 2.13, equipos: ["Rockets", "Raptors"], stats: { puntos: 21.8, rebotes: 11.1, asistencias: 2.5 } },
  { id: 9, nombre: "Kareem Abdul-Jabbar", posicion: "pivot", era: "clasico", retirado: true, anillos: 6, mvps: 6, altura: 2.18, equipos: ["Bucks", "Lakers"], stats: { puntos: 24.6, rebotes: 11.2, asistencias: 3.6 } },
  { id: 10, nombre: "Allen Iverson", posicion: "base", era: "clasico", retirado: true, anillos: 0, mvps: 1, altura: 1.83, equipos: ["76ers", "Nuggets", "Pistons", "Grizzlies"], stats: { puntos: 26.7, rebotes: 3.7, asistencias: 6.2 } },
  { id: 11, nombre: "Dirk Nowitzki", posicion: "ala-pivot", era: "clasico", retirado: true, anillos: 1, mvps: 1, altura: 2.13, equipos: ["Mavericks"], stats: { puntos: 20.7, rebotes: 7.5, asistencias: 2.4 } },
  { id: 12, nombre: "Stephen Curry", posicion: "base", era: "actual", retirado: false, anillos: 4, mvps: 2, altura: 1.88, equipos: ["Warriors"], stats: { puntos: 24.8, rebotes: 4.7, asistencias: 6.4 } },
  { id: 13, nombre: "Kevin Durant", posicion: "alero", era: "actual", retirado: false, anillos: 2, mvps: 1, altura: 2.08, equipos: ["Thunder", "Warriors", "Nets", "Suns"], stats: { puntos: 27.3, rebotes: 7.0, asistencias: 4.4 } },
  { id: 14, nombre: "Giannis Antetokounmpo", posicion: "ala-pivot", era: "actual", retirado: false, anillos: 1, mvps: 2, altura: 2.11, equipos: ["Bucks"], stats: { puntos: 23.4, rebotes: 9.9, asistencias: 4.9 } },
  { id: 15, nombre: "Nikola Jokic", posicion: "pivot", era: "actual", retirado: false, anillos: 1, mvps: 3, altura: 2.11, equipos: ["Nuggets"], stats: { puntos: 20.9, rebotes: 10.7, asistencias: 7.0 } },
  { id: 16, nombre: "Luka Doncic", posicion: "base", era: "actual", retirado: false, anillos: 0, mvps: 0, altura: 2.01, equipos: ["Mavericks", "Lakers"], stats: { puntos: 28.6, rebotes: 8.6, asistencias: 8.2 } },
  { id: 17, nombre: "Victor Wembanyama", posicion: "pivot", era: "actual", retirado: false, anillos: 0, mvps: 0, altura: 2.24, equipos: ["Spurs"], stats: { puntos: 21.4, rebotes: 10.6, asistencias: 3.7 } },
  { id: 18, nombre: "Jayson Tatum", posicion: "alero", era: "actual", retirado: false, anillos: 1, mvps: 0, altura: 2.03, equipos: ["Celtics"], stats: { puntos: 23.1, rebotes: 7.2, asistencias: 3.9 } },
];


// ============================================================
// BLOQUE A — Calentamiento con lo que ya sabes (1-8)
// ============================================================

// E1. Array con los jugadores de la era "actual".

// E2. Nombres (solo strings) de los que tienen 4 o más anillos.
for (const element of jugadores) {
  if (element.anillos >= 4) {
    // console.log(element.nombre)
  }
}

// E3. El objeto completo de "Nikola Jokic" (búscalo por nombre).
let Nikola = jugadores.find(j => j.nombre === 'Nikola Jokic')
// console.log(Nikola)


// E4. Los que promedian 25+ puntos, en formato "Nombre: puntos"
//     → ["Michael Jordan: 30.1", "LeBron James: 27.1", ...]
const arrayPromedio25puntos = jugadores.filter(j => j.stats.puntos >= 25).map(j => (`${j.nombre} : ${j.stats.puntos}`))
// console.log(arrayPromedio25puntos)

// E5. Los BASES que reparten más de 6 asistencias (stats.asistencias).
for (const element of jugadores) {
  if (element.stats.asistencias >= 6 && element.posicion ==='base') {
    // console.log(`Nombre: ${element.nombre} - ${element.posicion} Asistencia AVG : ${element.stats.asistencias}`)

  }

}

// E6. ¿Algún jugador de la lista pasó por los "Celtics"? (true/false)
//     Pista: some + includes sobre el array equipos.
  let algunoPasoPorCeltic = jugadores.some( j => j.equipos.includes("Celtics"))
  //  console.log(algunoPasoPorCeltic ? `Si hay de Celtic`: `No hay de Celt` )

// E7. ¿TODOS los pivots miden 2.10 o más? (true/false)
//     Pista: primero filter de pivots, luego every.

  let pivotDeMasDE2 = jugadores.filter( j => j.posicion ==='pivot').every(j => j.altura >= 2.10)
  // console.log(pivotDeMasDE2)

// E8. Los "trotamundos": jugadores que pasaron por 3 equipos o más,
//     en formato "Nombre (N equipos)".

  const losTrotamundo = jugadores.filter(j => j.equipos.length >= 3)
  for (const item of losTrotamundo) {
    // console.log(item.nombre)
    
  }


// ============================================================
// BLOQUE B — Ordenar y encadenar (9-15)
// ============================================================

// E9. TOP 5 anotadores: los 5 nombres con más stats.puntos, en orden.
//     (sort + slice + map — y no dañes el array original)

const top5Puntos = jugadores.sort((j , p)=> p.stats.puntos - j.stats.puntos).slice(0 , 5).map(j => j.stats.puntos)
console.log(top5Puntos) 



// E10. Ranking de anillos: ordena por anillos DESC, y si empatan,
//      por mvps DESC. Formato: "Nombre — 6 anillos, 5 MVPs"
//      Pista: en el sort → if (b.anillos !== a.anillos) return b.anillos - a.anillos; return b.mvps - a.mvps;

  const topAnillos = jugadores.sort((j,p)  => p.anillos - j.anillos).map(j => `${j.nombre} - ${j.anillos}`)
  console.log(topAnillos)

// E11. El más alto y el más bajo de la liga (dos objetos o dos nombres).

// E12. Todos los nombres en orden alfabético (localeCompare).

// E13. Club del doble-doble: jugadores con AL MENOS DOS de sus tres
//      stats en 10 o más (Jokic sí: 10.7 reb y... no, solo una — piensa
//      bien la condición). Devuelve nombres.

// E14. Ficha coleccionable de TODOS: array de strings tipo:
//      "⭐ Michael Jordan (escolta) | 30.1 pts | 6 🏆 | Bulls/Wizards"
//      Pista: equipos.join("/")

// E15. La espina clavada: los RETIRADOS que se fueron SIN anillos.

// ============================================================
// BLOQUE C — reduce: de array a un solo valor (16-22)
// ============================================================

// E16. Total de anillos sumando toda la lista (un número).

// E17. Promedio de puntos de toda la liga, con 1 decimal.

// E18. El jugador con MÁS MVPs... usando SOLO reduce (sin sort).
//      Pista: el acumulador es "el mejor hasta ahora"; compara y decide
//      a quién devuelves en cada vuelta.

// E19. Conteo por posición → { escolta: 2, alero: 4, base: 4, ... }
//      Pista: empieza con {} y en cada vuelta: acc[j.posicion] = (acc[j.posicion] ?? 0) + 1

// E20. Agrupar NOMBRES por era → { clasico: ["Michael Jordan", ...], actual: [...] }

// E21. Suma de puntos SOLO de los jugadores actuales (filter + reduce).

// E22. Diccionario nombre → anillos → { "Michael Jordan": 6, "LeBron James": 4, ... }
//      (así se ven los datos indexados; lo usarás con la base de datos)

// ============================================================
// BLOQUE D — Nivel jefe final (23-30)
// ============================================================

// E23. La API gringa: transforma la lista al formato en inglés que
//      esperaría otra app: { name, rings, ppg } (solo esos 3 campos).

// E24. Buscador: función buscar(texto) que devuelva los jugadores cuyo
//      nombre contenga el texto, SIN importar mayúsculas.
//      buscar("an") → Duncan, Giannis, Jordan(?)... compruébalo.
//      Pista: toLowerCase + includes.

// E25. Fantasy points: crea un array NUEVO donde cada jugador tenga un
//      campo extra fantasy = puntos + rebotes * 1.2 + asistencias * 1.5
//      (redondeado a 1 decimal, spread para no mutar). Luego: top 3.

// E26. Todos los equipos de la liga, SIN repetidos y ordenados.
//      Pista: flatMap + Set.

// E27. Cara a cara: función versus(nombre1, nombre2) que devuelva
//      "GANA <nombre> (X.X vs Y.Y)" comparando su fantasy del E25.
//      versus("Luka Doncic", "Stephen Curry") → ¿quién gana?

// E28. ¡Anillo para Luka!: función ganarAnillo(lista, nombre) que
//      devuelva un array NUEVO donde ese jugador tiene anillos + 1 y
//      los demás quedan igual. Verifica que el original NO cambió.

// E29. Función retirar(lista, nombre): array nuevo con ese jugador en
//      retirado: true Y ADEMÁS validando: si el nombre no existe,
//      devuelve null (¡el contrato de siempre!).

// E30. EL QUINTETO HISTÓRICO 🏆: arma un objeto con el mejor anotador
//      de CADA posición:
//      { base: "Luka Doncic", escolta: "...", alero: "...", "ala-pivot": "...", pivot: "..." }
//      Pista pro: reduce donde el acumulador es el objeto, y en cada
//      vuelta comparas al jugador contra el que ya ocupa su posición.
//      (También vale con 5 filter+sort... pero el reduce es una línea de campeón)

// ============================================================
// Cuando termines (o te atores): escribe "r" y reviso la lógica.
// ============================================================
