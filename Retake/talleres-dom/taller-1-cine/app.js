// ============================================================
// 🎬 TALLER 1 — Mi Watchlist (nivel: los pasos 1-4 de la lección)
// Es la app de la lección con otra piel: si te trabas, mira tu
// 05-dom/app.js — los patrones son los mismos.
// Abre index.html con Live Server. Sin soluciones: esto es gimnasio.
// ============================================================

const peliculas = [
  { id: 1, titulo: "El Padrino",            genero: "drama",  vista: true },
  { id: 2, titulo: "Space Jam",             genero: "comedia", vista: true },
  { id: 3, titulo: "Coach Carter",          genero: "drama",  vista: false },
  { id: 4, titulo: "Interestelar",          genero: "scifi",  vista: false },
  { id: 5, titulo: "Air: la historia de Jordan", genero: "drama", vista: false },
];

// E1. Agarra #lista y #resumen en constantes.

// E2. Crea pintar(): limpia la lista (replaceChildren), recorre
//     "peliculas" con for...of y por cada una: crea el <li>, ponle
//     de texto  🎬 Titulo (genero) , tatúale su id con dataset,
//     y si vista === true agrégale la clase "vista".
//     Llama a pintar() al final del archivo.

// E3. Dentro de pintar(), el resumen debe decir:
//     "Te faltan 3 de 5 películas"  (filter + length)

// E4. El botón Agregar: lee el input, si está vacío corta (guarda),
//     arma la película nueva { id: Date.now(), titulo, genero: "sin género",
//     vista: false }, push, limpia el input, pintar().

// E5. Click en una película → alterna vista/no vista.
//     Delegación en el <ul>: guarda con tagName, lee dataset.id con
//     Number(), map con spread volteando "vista", reasigna y pinta.

// E6 (BONUS - reto de verdad, concepto nuevo por tu cuenta):
//     Haz funcionar los 3 botones de filtro (Todas / Por ver / Vistas).
//     Idea: una variable  let filtroActual = "todas"  que cada botón
//     cambia antes de llamar a pintar(); y pintar() decide qué recorrer:
//       filtroActual === "vistas"     → peliculas.filter(p => p.vista)
//       filtroActual === "pendientes" → peliculas.filter(p => !p.vista)
//       otro caso                     → peliculas
//     (Los datos NUNCA se borran: solo cambia qué se PINTA.)
