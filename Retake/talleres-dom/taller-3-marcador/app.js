// ============================================================
// 🏟️ TALLER 3 — Marcador NBA (nivel: jefe — diseña TÚ los datos)
// Aquí no te doy el array: la primera decisión de arquitectura es
// tuya. Pista fuerte: NO guardes los puntos en dos variables sueltas;
// guarda las JUGADAS, y los puntos se CALCULAN (reduce).
// Fíjate también en el index.html: los botones ya traen data-equipo
// y data-valor — dos tatuajes por botón. Sin soluciones.
// ============================================================

// E1. Diseña el estado: let jugadas = []
//     donde cada jugada será algo como { equipo: "local", valor: 2 }

// E2. Agarra #puntosLocal, #puntosVisita, #ganando y #historial.

// E3. pintar():
//     - puntos del local = jugadas del local sumadas con filter + reduce
//     - lo mismo para visita
//     - escribe ambos marcadores con textContent
//     - #ganando: "Va ganando LOCAL" / "Va ganando VISITANTE" / "Empate"

// E4. Los 6 botones de puntos con UNA sola delegación:
//     ponle el listener a document (sí, se puede: es el ancestro de todo)
//     o envuelve el tablero. Guarda: solo botones que TENGAN
//     dataset.equipo. Luego:
//       jugadas.push({ equipo: ..., valor: Number(...) })  y pintar()

// E5. Historial dentro de pintar(): un <li> por jugada, tipo
//     "LOCAL anota +3". La más reciente ARRIBA (pista: recorre una
//     copia invertida: [...jugadas].reverse() — ¿por qué la copia? 😉)

// E6. Deshacer: quita la ÚLTIMA jugada (pop) y repinta.
//     Caso borde: ¿qué pasa si no hay jugadas? Que no explote.

// E7. Reiniciar: jugadas = [] y repintar... pero pide confirmación:
//       if (!confirm("¿Borrar el partido?")) return;
//     (confirm es un popup nativo, primo del alert)

// E8 (BONUS mental, sin código): ¿notaste que NUNCA hiciste
//     puntosLocal += 2? Guardaste EVENTOS y calculaste el estado.
//     Así funcionan los bancos (transacciones → saldo) y tu futura
//     base de datos. Guárdate la idea.
