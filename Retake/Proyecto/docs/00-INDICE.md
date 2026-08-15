# 🗺️ ÍNDICE DEL PROYECTO — orden de implementación

> **Cómo usar este documento:** es el mapa maestro. Cada PASO está numerado en el
> orden real de construcción, con la guía donde vive su explicación línea por línea.
> Un tema = una guía. Si buscas "¿dónde está explicada tal línea?", empieza aquí.

## El plano de la app

```
[ front :5500 ]  ──fetch──▶  [ Express :3000 ]  ──mysql2──▶  [ MySQL :3306 ]
 index.html                    servidor.js                     base "nba"
 app.js                        rutas GET/POST/                 tabla jugadores
 estilos.css                   DELETE/PUT
```

---

## ✅ Pasos construidos (0 – 9)

| Paso | Tema | Guía donde está explicado |
|---|---|---|
| **0** | Herramientas: npm, package.json, node_modules | `01-GUIA-SERVIDOR` → sección 0 |
| **1** | Servidor Express base + cors + listen | `01-GUIA-SERVIDOR` → sección 1 |
| **2** | Front base: fetch + pintar con createElement | `02-GUIA-FRONT` (completa) |
| **3** | SQL puro en Workbench: base `nba`, tabla, INSERT/SELECT/WHERE/UPDATE/DELETE | `03-GUIA-MYSQL` → apéndice (chuleta) |
| **4** | Conexión JS ⇄ MySQL: driver mysql2, `/promise`, createPool | `03-GUIA-MYSQL` → secciones 1-3 |
| **5** | Consultas desde Express: `db.query`, destructuring, la regla del `?` | `03-GUIA-MYSQL` → secciones 4-5 |
| **6** | *(opcional)* GET /:id — documentada, NO implementada; sus conceptos (`:id`, `req.params`, 404) se aprendieron en el paso 8 | `03-GUIA-MYSQL` → sección 6 |
| **7** | POST: `express.json`, `req.body`, formulario, refactor a funciones | `07-GUIA-CRUD` → paso 7 |
| **8** | DELETE: `req.params`, `dataset`, delegación de eventos, `affectedRows` | `07-GUIA-CRUD` → paso 8 |
| **9** | PUT: URL + body juntos, `UPDATE`, funciones gemelas, listeners múltiples | `07-GUIA-CRUD` → paso 9 |

---

## 🔜 Pasos por construir (10 – 15)

*Cada guía se escribe al llegar a su paso, partiendo del código real de ese momento.*

### PASO 10 — Búsqueda, filtros y orden: `req.query` ⭐ próximo
- **Se construye:** input de búsqueda + botones de orden → `GET /api/jugadores?posicion=base&orden=puntos`.
- **Se aprende:** `req.query` — el TERCER y último canal de datos (ya conocen `params` y `body`); `LIKE` y `ORDER BY` dinámicos en SQL.
- **Por qué primero:** esfuerzo chico, la app se siente 10 veces más real.

### PASO 11 — Formulario de edición real (adiós `prompt`)
- **Se construye:** click en ✏️ → el formulario se rellena con los datos del jugador → el botón cambia a "Guardar".
- **Se aprende:** ESTADO de la interfaz (¿creando o editando?) — el patrón de front que se repite en toda app.

### PASO 12 — La tabla responde preguntas: `GROUP BY`, `AVG`, `COUNT`
- **Se construye:** mini-dashboard sobre la lista ("12 jugadores · promedio 21.3 pts · mejor: Luka") con ruta `/api/stats`.
- **Se aprende:** SQL como calculadora, no solo como cajón de guardar.

### PASO 13 — Segunda tabla: `equipos` — FOREIGN KEY y JOIN 🏔️ (el salto grande)
- **Se construye:** cada jugador pertenece a un equipo; la lista muestra el nombre del equipo.
- **Se aprende:** RELACIONES entre tablas — la diferencia entre una tabla suelta y una base de datos de verdad. `JOIN` desbloquea cualquier app real (usuarios→pedidos, alumnos→cursos). Merece 2+ sesiones.

### PASO 14 — Página de detalle: `jugador.html?id=3`
- **Se construye:** click en un jugador → otra página con su ficha completa.
- **Se aprende:** navegación entre páginas y `URLSearchParams` (el espejo de `req.query`, del lado del front).

### PASO 15 — El backend se organiza: `express.Router` y carpetas
- **Se construye:** `servidor.js` se separa en `rutas/jugadores.js`, `rutas/equipos.js`.
- **Se aprende:** organización de un backend que crece. Va DESPUÉS del 13, cuando el dolor del archivo largo ya se sienta.

**La lógica del orden:** primero exprimir la tabla que ya existe (10-12), luego multiplicar tablas (13), luego ordenar la casa (14-15).

---

## 📂 Cada archivo del proyecto → dónde está explicado

| Archivo | Su documentación |
|---|---|
| `backend/servidor.js` | base (requires, app, cors, listen): `01-GUIA-SERVIDOR` · pool y `db.query`: `03-GUIA-MYSQL` · `express.json` y rutas POST/DELETE/PUT: `07-GUIA-CRUD` |
| `backend/package.json` | `01-GUIA-SERVIDOR` → sección 0 |
| `frontend/app.js` | base (elementos, listener, fetch, pintado): `02-GUIA-FRONT` · funciones y botones: `07-GUIA-CRUD` (7.4, 8.2-8.3, 9.3-9.6) |
| `frontend/index.html` | base: `02-GUIA-FRONT` → apéndice · formulario: `07-GUIA-CRUD` → 7.3 |
| `frontend/estilos.css` | estético, fuera del temario del curso (comentado en el propio archivo) |
