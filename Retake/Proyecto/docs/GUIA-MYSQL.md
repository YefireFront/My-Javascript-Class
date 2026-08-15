# 🗄️ MySQL ↔ Node.js — Guía de conexión (la parte JavaScript)

> **Qué es este documento:** TODO lo necesario para que tu backend de Node/Express
> hable con MySQL: instalación npm, la conexión, las consultas desde JS y los
> errores típicos. *(La instalación de MySQL y el SQL puro de Workbench ya los
> dominas — aquí vive solo el lado JavaScript, ampliado.)*

**El plano completo:**

```
[ front :5500 ] ──fetch──▶ [ Express :3000 ] ──mysql2──▶ [ MySQL :3306 ]
   pinta datos               decide y traduce               guarda datos
```

El front NUNCA habla con MySQL directo: siempre pasa por tu servidor. Así los
datos tienen un solo portero (validación, seguridad, reglas) — tu Express.

---

## 1. Instalar el driver: mysql2

Node no sabe hablar con MySQL de fábrica (igual que no sabía ser servidor sin
Express). La pieza que falta se llama **driver**: una librería que conoce el
protocolo del puerto 3306 y te lo esconde detrás de funciones JS.

**Terminal en `Proyecto/backend`:**

```
npm install mysql2
```

- Se descarga a `node_modules` y queda anotado en `package.json` → `"dependencies"`.
- **Verifica:** tu `package.json` debe tener `express`, `cors` y `mysql2`.
- ¿Por qué "mysql2" y no "mysql"? El paquete original (`mysql`) quedó viejo;
  `mysql2` es su sucesor: más rápido y con soporte de promesas. Es el estándar hoy.

---

## 2. Traerlo al archivo: la variante /promise

**Arriba de `servidor.js`, junto a los otros require:**

```js
const mysql = require("mysql2/promise");
```

| Pedazo | Qué significa |
|---|---|
| `require("mysql2/promise")` | trae el driver en su **versión con promesas** |
| ¿por qué `/promise`? | toda consulta VIAJA (al puerto 3306 y de vuelta) → tarda → es asíncrona. Con esta variante usas tu `async/await` de siempre. Sin ella, mysql2 trabaja con callbacks estilo antiguo (`query(sql, (err, res) => {...})`) — funciona, pero es el pasado |

---

## 3. La conexión: createPool

**Debajo de `const app = express();`:**

```js
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "TU_CONTRASEÑA_DE_ROOT",
  database: "nba",
});
```

### Cada opción, a fondo

| Opción | Qué significa |
|---|---|
| `host: "localhost"` | en qué máquina vive MySQL. Hoy: la tuya. El día que la base viva en un servidor de verdad, aquí irá su dirección — y será EL ÚNICO cambio |
| `user: "root"` | con qué usuario entrar. `root` es el super-usuario (todo poder). En producción se crea un usuario limitado para la app; para aprender, root está bien |
| `password: "..."` | tu contraseña real de root (la misma de Workbench), entre comillas |
| `database: "nba"` | a qué base de datos apuntar por defecto (el `USE nba;` en versión configuración) |

*(El puerto no aparece porque mysql2 asume el 3306 — el estándar. Si tu MySQL usara otro, se agrega `port: 3307`.)*

### ¿Qué es un "pool" y por qué no una conexión simple?

- `createConnection` abre **UNA** línea telefónica con la base.
- `createPool` abre un **grupito de líneas reutilizables** (10 por defecto).

¿Por qué importa? Tu servidor atiende **muchas peticiones a la vez** (event loop).
Con una sola línea, las consultas hacen fila; con el pool, cada petición toma una
línea libre, la usa y la devuelve. Mismo esfuerzo de código, mucho mejor
comportamiento — por eso se usa pool directamente, siempre.

### ⚠ La contraseña en el código

Aceptable para aprender, **mala práctica real**: si subes esto a GitHub, tu
contraseña queda pública. La solución profesional es un archivo **`.env`**
(variables de entorno, fuera de git) — lo implementaremos más adelante en el
curso. Por ahora: consciente del pecado, y seguimos.

---

## 4. Consultar desde JS: db.query

La forma general:

```js
const [filas] = await db.query("AQUÍ VA SQL PURO");
```

| Pedazo | Qué significa |
|---|---|
| `db.query("...")` | manda el SQL por una línea del pool y trae el resultado. El string es **exactamente** lo que escribirías en Workbench |
| `await` | la consulta viaja y vuelve → se espera (solo esta función; el servidor sigue atendiendo a otros) |
| `const [filas] =` | `query` devuelve un array de DOS cosas: `[filas, info-de-columnas]`. Los corchetes son **destructuring**: "dame el elemento 0 y llámalo filas". La info de columnas casi nunca se usa |
| `filas` | 🌟 llega como **array de objetos JS normales**: `[{ id: 1, nombre: "Stephen Curry", ... }]`. mysql2 tradujo las filas por ti — de aquí en adelante es tu JavaScript de siempre (map, filter, res.json...) |

**Regla:** `SELECT` devuelve filas. `INSERT/UPDATE/DELETE` devuelven un objeto-resumen
en esa misma posición (con `affectedRows` — cuántas filas tocó — e `insertId` — el
id que AUTO_INCREMENT le puso a lo insertado). Lo usarás en el POST.

---

## 5. Valores del cliente: el `?` (SIEMPRE)

Cuando la consulta necesita un valor que viene del cliente (un id de la URL, un
nombre de un formulario), **jamás se concatena ni se mete con template literal**:

```js
// ❌ PROHIBIDO — puerta abierta a SQL Injection:
db.query(`SELECT * FROM jugadores WHERE id = ${req.params.id}`);

// ✅ SIEMPRE ASÍ — el ? y el valor aparte:
db.query("SELECT * FROM jugadores WHERE id = ?", [req.params.id]);
```

| Pedazo | Qué significa |
|---|---|
| `?` | hueco del lado SQL: "aquí va un valor que te paso por separado" |
| `[valor1, valor2...]` | el array de valores para los `?`, en orden (un `?` → un valor) |

**¿Por qué?** El id de la URL lo escribe el visitante. Con template literal, alguien
puede pedir `/api/jugadores/1; DELETE FROM jugadores` y su SQL se inyecta dentro
del tuyo (**SQL Injection** — 25 años en el top de vulnerabilidades; el primo del
XSS que viste en el DOM: mezclar texto ajeno con código propio). Con `?`, mysql2
trata el valor como DATO, nunca como SQL. Regla absoluta, sin excepciones.

---

## 6. Las rutas del proyecto (el estado del arte)

### Lista completa — GET /api/jugadores ✅ (ya funciona)

```js
app.get("/api/jugadores", async (req, res) => {
  const [filas] = await db.query("SELECT * FROM jugadores");
  res.json(filas);
});
```

### Un jugador — GET /api/jugadores/:id (el paso en curso)

```js
app.get("/api/jugadores/:id", async (req, res) => {
  const [filas] = await db.query(
    "SELECT * FROM jugadores WHERE id = ?",
    [req.params.id]
  );

  if (filas.length === 0) {
    return res.status(404).json({ error: "Jugador no encontrado" });
  }

  res.json(filas[0]);
});
```

**Las piezas nuevas de esta ruta:**

| Pedazo | Qué significa |
|---|---|
| `"/api/jugadores/:id"` | ruta con **hueco variable**: los `:` capturan lo que venga en esa posición |
| `req.params` | el objeto con los huecos capturados: piden `/3` → `{ id: "3" }`. ⚠ llega como STRING, como todo en HTTP |
| `filas.length === 0` | la consulta no encontró nada → el array llegó vacío |
| `res.status(404)` | fija el código de estado ANTES de responder: 404 = "no existe" |
| `return` | corta el handler: una petición, UNA respuesta (sin él, respondería dos veces → error) |
| `res.json(filas[0])` | quien pide UN jugador recibe UN objeto, no un array de uno |

**✅ Verificación:** `/api/jugadores/1` → solo Curry (objeto). `/api/jugadores/999`
→ el JSON de error y status **404** en la pestaña Network.

---

## 7. Diagnóstico: los errores de conexión típicos

| Error | Qué significa | Arreglo |
|---|---|---|
| `Access denied for user 'root'` | contraseña del pool ≠ la real | corrige `password:` |
| `Unknown database 'nba'` | el nombre en `database:` no existe | compara con `SHOW DATABASES;` |
| `ECONNREFUSED ...:3306` | el MySQL Server está apagado | servicios de Windows → MySQL → Iniciar |
| `ETIMEDOUT` | el host no responde | ¿`host` correcto? ¿firewall? |
| `Error 1364: Field X doesn't have a default value` | insertaste sin una columna NOT NULL | manda el campo que falta |

---

## 📎 Apéndice: chuleta SQL mínima (referencia rápida)

```sql
SELECT * FROM jugadores;                        -- todo
SELECT nombre, puntos FROM jugadores;           -- solo columnas
SELECT * FROM jugadores WHERE puntos > 24;      -- filtrar (=, >, <, >=, <=, <>)
SELECT * FROM jugadores ORDER BY puntos DESC LIMIT 5;   -- ordenar + top
INSERT INTO jugadores (nombre, posicion, puntos) VALUES ('X', 'base', 10.0);
UPDATE jugadores SET puntos = 25.0 WHERE id = 3;        -- ⚠ siempre con WHERE
DELETE FROM jugadores WHERE id = 5;                     -- ⚠ siempre con WHERE
```

---

*Siguiente paso del proyecto: **PASO 7 — POST**: fichar desde el front con
formulario, `express.json()` y `req.body` + el INSERT con `?`. Di "r" cuando
la ruta `:id` pase su verificación.*
