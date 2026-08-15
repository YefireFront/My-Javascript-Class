# 🔄 GUÍA CRUD — completar el circuito (POST, DELETE, PUT)

> **Qué es este documento:** los pasos 7-9 del proyecto — las operaciones de
> escritura que completaron el CRUD:
>
> | Letra | Operación | Verbo HTTP | SQL | Estado |
> |---|---|---|---|---|
> | **C** reate | fichar jugador | POST | INSERT | ✅ paso 7 |
> | **R** ead | listar | GET | SELECT | ✅ pasos 2 y 5 |
> | **U** pdate | editar jugador | PUT | UPDATE | ✅ paso 9 |
> | **D** elete | echar jugador | DELETE | DELETE | ✅ paso 8 |
>
> Mismo método de siempre: qué escribir, dónde, palabra por palabra, verificación.
> Índice completo del proyecto: `00-INDICE.md`.

---

# PASO 7 — POST: fichar desde el front (y que sea eterno)

**Objetivo:** un formulario en la página → viaja al backend → `INSERT` en MySQL → el jugador aparece en la lista y sobrevive a todo.

---

## 7.0 — El concepto: ahora el cliente ENVÍA datos

Hasta hoy tus peticiones solo PEDÍAN (`GET`). Para crear algo, el cliente debe **mandar** el jugador nuevo. ¿Dónde viaja esa información? No en la URL — en el **body** (cuerpo) de la petición: un espacio de carga que los GET no usan, escrito en JSON.

Para que esto funcione hay que preparar los DOS lados:

- **Backend**: aprender a LEER ese body → `express.json()` + `req.body`
- **Front**: aprender a ENVIARLO → `fetch` con opciones (método, etiqueta, carga)

Vamos backend primero (y lo probamos sin tocar el front).

---

## 7.1 — Backend: el traductor de JSON entrante

**Escribe en `servidor.js`, debajo de** `app.use(cors());`:

```js
app.use(express.json());
```

| Pedazo | Qué significa |
|---|---|
| `app.use(...)` | "instala un **middleware**": un puesto de revisión por el que pasan TODAS las peticiones ANTES de llegar a tus rutas (cors era otro) |
| `express.json()` | el puesto que revisa: "¿esta petición trae body en JSON? → lo parseo y lo dejo listo en `req.body`" |

Sin esta línea, `req.body` llega `undefined` aunque el cliente mande datos — es el olvido clásico #1 de Express. Ya quedó instalado para siempre.

---

## 7.2 — Backend: la ruta POST

**Escribe debajo de tu ruta `GET /api/jugadores`:**

```js
app.post("/api/jugadores", async (req, res) => {
  const { nombre, posicion, puntos } = req.body;

  if (!nombre || !posicion || puntos === undefined) {
    return res.status(400).json({ error: "Faltan datos: nombre, posicion y puntos" });
  }

  const [resultado] = await db.query(
    "INSERT INTO jugadores (nombre, posicion, puntos) VALUES (?, ?, ?)",
    [nombre, posicion, puntos]
  );

  res.status(201).json({ id: resultado.insertId, nombre, posicion, puntos });
});
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| `app.post` | mismo camino que el GET de la lista, **otro verbo** → otro plato del menú (el menú es verbo + ruta juntos) |
| `req.body` | el body que el middleware 7.1 parseó: un objeto JS con lo que mandó el cliente |
| `const { nombre, posicion, puntos } = req.body` | 🌟 **destructuring de objeto**: saca esas 3 propiedades del objeto y crea 3 constantes con esos nombres, en una línea. Equivale a escribir `const nombre = req.body.nombre;` tres veces |
| `!nombre \|\| !posicion` | validación: ¿falta alguno o vino vacío? (`""` y `undefined` cuentan como "falsos") |
| `puntos === undefined` | para puntos se pregunta distinto: `!puntos` rechazaría el `0`, que es un valor válido |
| `res.status(400)` | **400 Bad Request**: "TÚ (cliente) pediste mal". Compáralo con el 404 (no existe) y el 500 (yo me rompí) — las 3 familias |
| `VALUES (?, ?, ?)` | tres huecos, tres valores en el array, EN ORDEN — la regla del `?` de siempre |
| `resultado.insertId` | 🌟 el objeto-resumen del INSERT trae el **id que AUTO_INCREMENT le asignó** — la base te cuenta qué número le tocó |
| `res.status(201)` | **201 Created**: "creado con éxito" (el 200 de los nacimientos) |
| `.json({ id: ..., nombre, ... })` | respondemos el jugador completo CON su id nuevo — cortesía estándar: el cliente sabe exactamente qué quedó guardado. *(Nota: `nombre` a secas equivale a `nombre: nombre` — atajo de JS cuando la clave y la variable se llaman igual)* |

### 🔎 VERIFICACIÓN A — probar el POST sin front

Reinicia el servidor. Abre `localhost:3000` en el navegador → F12 → Console, y ejecuta:

```js
fetch("http://localhost:3000/api/jugadores", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nombre: "Jayson Tatum", posicion: "alero", puntos: 23.1 })
}).then(r => r.json()).then(console.log)
```

**Qué es cada opción del fetch** (esto MISMO irá luego en tu app.js):

| Pedazo | Qué significa |
|---|---|
| `fetch(url, {...})` | el segundo argumento son las OPCIONES: sin él, fetch hace GET pelado; con él, personalizas la petición |
| `method: "POST"` | el verbo |
| `headers: { "Content-Type": "application/json" }` | la etiqueta del paquete: "lo que mando en el body es JSON" — sin ella, `express.json()` ignora el body |
| `body: JSON.stringify({...})` | la carga: tu objeto convertido a texto JSON (serializado — lo contrario de `.json()`) |

**Esperado:** en consola aparece `{ id: 5, nombre: "Jayson Tatum", ... }` (o el id que toque) → el `insertId` trabajando. **Confírmalo en Workbench:** `SELECT * FROM jugadores;` → Tatum está.
**Prueba también la validación:** manda `body: JSON.stringify({ nombre: "" })` → debe responder el error con status **400**.

---

## 7.3 — Front: el formulario en el HTML

**En `frontend/index.html`, debajo del botón "Cargar jugadores" (y antes del div resultado), escribe:**

```html
<h3>Fichar jugador</h3>
<input id="inpNombre" type="text" placeholder="Nombre" />
<input id="inpPosicion" type="text" placeholder="Posición" />
<input id="inpPuntos" type="number" placeholder="Puntos" />
<button id="btnFichar">Fichar</button>
```

Nada nuevo aquí: 3 cajas de texto con su id (los ganchos para JS) y un botón. El `type="number"` solo ayuda al usuario (flechitas, teclado numérico) — recuerda: **su `.value` sigue siendo string**.

---

## 7.4 — Front: primero, un refactor pequeñito

Tu código de "traer y pintar" vive DENTRO del listener del botón cargar. Ahora lo necesitarán DOS botones (cargar y fichar) → hay que sacarlo a una función con nombre.

**Reorganiza `app.js` así** (mismas líneas de siempre, nueva casa):

```js
const boton = document.querySelector("#btnJugadores");
const resultado = document.querySelector("#resultado");

async function cargarJugadores() {
  const respuesta = await fetch("http://localhost:3000/api/jugadores");
  const jugadores = await respuesta.json();

  resultado.replaceChildren();

  for (const j of jugadores) {
    const p = document.createElement("p");
    p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;
    resultado.append(p);
  }
}

boton.addEventListener("click", cargarJugadores);
```

| Pedazo | Qué significa |
|---|---|
| `async function cargarJugadores() {...}` | el MISMO cuerpo que tenía tu listener, ahora con nombre propio y reutilizable |
| `addEventListener("click", cargarJugadores)` | 🌟 se pasa la función POR SU NOMBRE, **sin paréntesis**: "cuando haya click, ejecuta ESTA". Con paréntesis (`cargarJugadores()`) la ejecutarías YA, una vez, y le pasarías su resultado al listener — error clásico |

**Verifica antes de seguir:** el botón "Cargar jugadores" sigue funcionando igual.

---

## 7.5 — Front: el listener de fichar

**Escribe al final de `app.js`:**

```js
const btnFichar = document.querySelector("#btnFichar");
const inpNombre = document.querySelector("#inpNombre");
const inpPosicion = document.querySelector("#inpPosicion");
const inpPuntos = document.querySelector("#inpPuntos");

btnFichar.addEventListener("click", async () => {
  const jugadorNuevo = {
    nombre: inpNombre.value,
    posicion: inpPosicion.value,
    puntos: Number(inpPuntos.value),
  };

  await fetch("http://localhost:3000/api/jugadores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jugadorNuevo),
  });

  inpNombre.value = "";
  inpPosicion.value = "";
  inpPuntos.value = "";

  cargarJugadores();
});
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| `Number(inpPuntos.value)` | 🌟 la conversión que llevas 5 lecciones esperando: `.value` es string (`"23.1"`), la base quiere número → `Number()` lo convierte |
| el `fetch` con opciones | idéntico al de la Verificación A — ya lo conoces pieza a pieza |
| `await fetch(...)` sin guardar | esperamos a que el servidor confirme, pero no usamos la respuesta (ya sabemos qué mandamos). El await importa: garantiza que el INSERT terminó ANTES de recargar la lista |
| `inpX.value = ""` | cortesía: limpiar el formulario |
| `cargarJugadores()` | 🌟 el premio del refactor: recargar la lista es UNA llamada. El ciclo completo: enviar → guardar en MySQL → repintar desde MySQL |

---

### ✅ VERIFICACIÓN FINAL del paso 7

1. Llena el formulario (ej: `Giannis`, `ala-pivot`, `23.4`) → click "Fichar" → **aparece en la lista al instante**.
2. Workbench: `SELECT * FROM jugadores;` → Giannis está, con su id automático.
3. La eternidad: apaga el servidor, enciéndelo, click "Cargar" → **Giannis sigue**.
4. El guardia: intenta fichar con el nombre vacío → no debe crearse (revisa en Network el **400**).
5. Pregunta de concepto: *¿por qué `addEventListener("click", cargarJugadores)` va SIN paréntesis?*

---

# PASO 8 — DELETE: echar jugadores con el botón ✖

**Objetivo:** cada jugador de la lista lleva un botón **✖** → click → `DELETE` en MySQL → desaparece de la lista y de la base. Para siempre.

---

## 8.0 — El concepto: ¿CUÁL jugador?

Hasta ahora tus rutas eran de talla única: `/api/jugadores` significa "TODOS". Pero eliminar exige apuntar a UNO. ¿Cómo viaja ese dato?

- En el POST viajó en el **body** (un objeto entero de carga).
- Aquí no hay nada que cargar: solo hace falta **un número**. Y para un número, HTTP tiene un lugar más simple: **la propia URL**.

```
DELETE /api/jugadores/3
                      └── el 3 ES el mensaje: "elimina al jugador 3"
```

Express te deja declarar rutas con un **hueco variable** usando dos puntos:

```
tu ruta:      /api/jugadores/:id      ← :id = "aquí va a venir ALGO, guárdamelo"
piden:        /api/jugadores/3
Express hace: req.params = { id: "3" }
```

**Grábate estas 3 verdades de `req.params`:**

1. `:id` en la ruta **captura** lo que venga en esa posición de la URL. El nombre lo eliges tú (`:id` → `req.params.id`).
2. Lo capturado llega **SIEMPRE como string**: piden `/3` y recibes `"3"`, no `3`. Todo lo que viaja por HTTP es texto.
3. A MySQL no le importa: en `WHERE id = ?` compara `"3"` con la columna INT sin problema (convierte solo). A JS sí le importaría (`"3" === 3` es `false`) — por eso el string te muerde en JS, no en SQL.

`req.params` (datos EN la URL) y `req.body` (datos EN la carga) son las dos manos de una API. Ya conoces las dos.

---

## 8.1 — Backend: la ruta DELETE

**Escribe en `servidor.js`, debajo de tu ruta `app.post` (después de la línea del `res.status(201)...` y su `});`):**

```js
app.delete("/api/jugadores/:id", async (req, res) => {
  const [resultado] = await db.query(
    "DELETE FROM jugadores WHERE id = ?",
    [req.params.id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ error: "No existe el jugador " + req.params.id });
  }

  res.json({ eliminado: Number(req.params.id) });
});
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| `app.delete` | cuarto verbo del menú. Misma mecánica que get/post: verbo + ruta = plato |
| `"/api/jugadores/:id"` | 🌟 la ruta con hueco: atrapa `/1`, `/25`, `/999`… lo que venga después de la última `/` cae en `req.params.id` |
| `"DELETE FROM jugadores WHERE id = ?"` | el DELETE que ya usaste en Workbench (paso 4). El `WHERE` es la diferencia entre echar a UNO y **vaciar la tabla entera** — jamás un DELETE sin WHERE |
| `[req.params.id]` | el valor que rellena el `?`. Regla de siempre: el dato NUNCA se pega en el string (SQL Injection) |
| `resultado.affectedRows` | 🌟 el objeto-resumen del DELETE dice **cuántas filas borró**. Es tu única forma de saber si el jugador existía: MySQL no da error por borrar algo inexistente, simplemente borra 0 |
| `affectedRows === 0` | borró 0 → ese id no existe → **404**, la familia "no encontrado" que ya conoces |
| `return res.status(404)...` | el `return` corta la ruta aquí. Sin él, seguiría y respondería DOS veces (error clásico) |
| `res.json({ eliminado: ... })` | confirmación al cliente. `Number(...)` solo para responder el id como número, ya que llegó string (verdad #2) |

### 🔎 VERIFICACIÓN A — probar el DELETE sin front

Reinicia el servidor. Mira en Workbench qué ids tienes (`SELECT id, nombre FROM jugadores;`) y elige uno sacrificable (ej: un Tatum duplicado de las pruebas). En la Console del navegador (F12 en `localhost:3000`):

```js
fetch("http://localhost:3000/api/jugadores/5", { method: "DELETE" })
  .then(r => r.json()).then(console.log)
```

*(cambia el 5 por tu id sacrificable — fíjate: no hay headers ni body, el id ya va en la URL)*

1. **Esperado:** `{ eliminado: 5 }` en consola.
2. **Workbench:** `SELECT * FROM jugadores;` → esa fila **ya no está**.
3. **El 404:** repite el MISMO fetch (el jugador ya no existe) → `{ error: "No existe el jugador 5" }`. Eso es `affectedRows === 0` trabajando.

---

## 8.2 — Front: el botón ✖ en cada jugador

Cada `<p>` de la lista necesita su botón. Se fabrica donde se fabrica el `<p>`: dentro del `for` de `cargarJugadores`.

**En `app.js`, dentro del `for`, entre la línea del `textContent` y la del `resultado.append(p)`, agrega estas 4 líneas:**

```js
const btn = document.createElement("button");
btn.textContent = "✖";
btn.dataset.id = j.id;
p.append(btn);
```

**Así debe quedar el `for` completo:**

```js
for (const j of jugadores) {
  const p = document.createElement("p");
  p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;

  const btn = document.createElement("button");
  btn.textContent = "✖";
  btn.dataset.id = j.id;
  p.append(btn);

  resultado.append(p);
}
```

| Pedazo | Qué significa |
|---|---|
| `document.createElement("button")` | el patrón de siempre: crear → llenar → enganchar. Ahora el enganche es DENTRO del `<p>` del jugador |
| `btn.dataset.id = j.id` | 🌟 **la línea clave del paso.** `dataset` guarda datos TUYOS dentro del elemento HTML (en el HTML se ve como `data-id="3"`). El botón queda **etiquetado** con el id de SU jugador. Sin esto, un click diría "me apretaron"… pero no sabrías a quién eliminar |
| `p.append(btn)` | el botón vive dentro del párrafo de su jugador |

⚠️ **Orden obligatorio:** el `p.textContent = ...` va ANTES del `p.append(btn)`. Asignar `textContent` **arrasa todo el contenido** del elemento — si aprietas el botón primero y el texto después, el texto se come al botón.

**Verifica antes de seguir:** recarga → "Cargar jugadores" → cada jugador tiene su ✖ (aún no hace nada, es normal: un botón sin listener es decoración).

---

## 8.3 — Front: UN listener para todos los botones (delegación)

Problema: los botones ✖ **no existen** cuando carga la página — nacen en cada `cargarJugadores()`, y cada repintado los destruye y crea otros nuevos. Ponerles listener uno a uno sería perseguir fantasmas.

Solución (la delegación de tu lección DOM): el listener se pone **UNA vez** en el contenedor `#resultado`, que sí vive siempre. Los clicks de los hijos **burbujean** hasta él, y `evento.target` te dice exactamente qué elemento recibió el click.

```
click en ✖ ──burbujea──▶ <p> ──burbujea──▶ #resultado (aquí lo atrapas)
                                              │
                                              └─ evento.target = el ✖ exacto que apretaron
```

**Escribe la función en el bloque de funciones de `app.js` (debajo de `ficharJugador`), y su listener al final con los otros dos:**

```js
async function eliminarJugador(evento) {
  if (evento.target.tagName !== "BUTTON") return;

  const id = evento.target.dataset.id;

  await fetch(`http://localhost:3000/api/jugadores/${id}`, {
    method: "DELETE",
  });

  cargarJugadores();
}
```

```js
resultado.addEventListener("click", eliminarJugador);
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| `function eliminarJugador(evento)` | 🌟 los listeners SIEMPRE reciben un objeto-evento con toda la info del click; hasta hoy lo ignorabas, hoy lo necesitas. Al pasar la función por nombre, el navegador se lo entrega solo |
| `evento.target` | el elemento EXACTO donde ocurrió el click (puede ser un ✖, o un `<p>`, o el fondo del div) |
| `.tagName !== "BUTTON"` | el filtro del delegado: "¿no fue en un botón? → no es asunto mío". `tagName` siempre viene en MAYÚSCULAS. Sin este filtro, clickear el texto de un jugador dispararía un DELETE a `undefined` |
| `return` a secas | salir de la función sin hacer nada — la **cláusula guardia**: primero descarta, luego trabaja |
| `evento.target.dataset.id` | 🌟 el circuito se cierra: recuperas la etiqueta que TÚ pegaste en 8.2. El botón sabe a quién mata |
| `` `...jugadores/${id}` `` | el id se inyecta en la URL con template literal → al backend le llega `/api/jugadores/3` → cae en `req.params.id`. **Mismo dato, punta a punta: `j.id` → `dataset` → click → URL → `req.params` → `?` → MySQL** |
| `{ method: "DELETE" }` | solo el verbo: sin headers ni body, porque no hay carga |
| `cargarJugadores()` | como en fichar: la base cambió → repintar desde la base. La lista SIEMPRE refleja MySQL, nunca se maquilla a mano |

---

### ✅ VERIFICACIÓN FINAL del paso 8

1. Recarga → "Cargar jugadores" → click en el ✖ de un jugador de prueba → **desaparece de la lista al instante**.
2. **Workbench:** `SELECT * FROM jugadores;` → tampoco está en la base.
3. La eternidad: reinicia el servidor → "Cargar jugadores" → **sigue sin estar**.
4. El filtro: click en el TEXTO de un jugador (no en el ✖) → no pasa nada, y en Network **no** sale ninguna petición DELETE.
5. Preguntas de concepto:
   - ¿Por qué el listener va en `#resultado` y no en cada botón?
   - ¿Qué detecta que el id no existe: JS, Express o MySQL? *(pista: `affectedRows`)*
   - Si piden `/3`, ¿`req.params.id` es `3` o `"3"`? ¿Por qué a MySQL le da igual?

---

# PASO 9 — PUT: editar los puntos de un jugador

**Objetivo:** un botón ✏️ junto al ✖ → click → escribes los puntos nuevos → `UPDATE` en MySQL → la lista se repinta. Con esto el CRUD queda **COMPLETO**.

---

## 9.0 — El concepto: el verbo que junta TODO

Editar es la operación más completa del CRUD, porque necesita **los dos canales de datos a la vez**:

```
PUT /api/jugadores/3          ← req.params: ¿A QUIÉN edito?  (viaja en la URL)
body: { "puntos": 31.5 }      ← req.body:   ¿QUÉ le pongo?   (viaja en la carga)
```

Compara los 4 verbos — fíjate cómo PUT es la suma de los otros:

| Verbo | ¿URL con `:id`? | ¿body? | SQL |
|---|---|---|---|
| GET lista | no | no | SELECT |
| POST | no | ✅ | INSERT |
| DELETE | ✅ | no | DELETE |
| **PUT** | ✅ | ✅ | **UPDATE** |

No aprendes NADA nuevo de transporte: es `req.params` (paso 8) + `req.body` (paso 7) en la misma ruta.

*(Nota de cultura API: estrictamente PUT significa "reemplaza el recurso ENTERO" y su hermano PATCH "cambia solo un campo". En la práctica, muchísimas APIs usan PUT para ambos. Usamos PUT y punto; PATCH existe, ya lo sabes.)*

---

## 9.1 — Backend: la ruta PUT

**Escribe en `servidor.js`, debajo de tu ruta `app.delete` (después de su `});`):**

```js
app.put("/api/jugadores/:id", async (req, res) => {
  const { puntos } = req.body;

  if (puntos === undefined) {
    return res.status(400).json({ error: "Faltan los puntos" });
  }

  const [resultado] = await db.query(
    "UPDATE jugadores SET puntos = ? WHERE id = ?",
    [puntos, req.params.id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ error: "No existe el jugador " + req.params.id });
  }

  res.json({ id: Number(req.params.id), puntos });
});
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| `app.put` | quinto y último verbo del menú. El circuito de rutas queda completo |
| `const { puntos } = req.body` | destructuring de UN solo campo — solo editamos puntos (las stats cambian cada temporada; el nombre no) |
| `puntos === undefined` | el guardia del 400, versión corta: solo hay un campo que validar |
| `"UPDATE jugadores SET puntos = ? WHERE id = ?"` | el UPDATE del paso 4 de Workbench. `SET` = qué cambiar, `WHERE` = a quién. Sin `WHERE` le pondrías esos puntos a **toda la liga** — mismo peligro que el DELETE |
| `[puntos, req.params.id]` | 🌟 DOS huecos → DOS valores, y el **ORDEN es sagrado**: el 1º rellena el 1º `?`, el 2º el 2º. Si los cruzas, MySQL no avisa: intentaría poner el id de puntos y buscar un id igual a los puntos |
| `affectedRows === 0` → 404 | idéntico al DELETE: editaste a nadie = no existía |
| `res.json({ id: ..., puntos })` | confirmación con lo que quedó |

⚠️ Un `affectedRows` curioso: si editas a un jugador poniéndole los **mismos** puntos que ya tenía, MySQL puede reportar 0 filas cambiadas… y tu ruta respondería 404 aunque el jugador exista. Es un caso borde conocido; lo aceptamos así de momento — pruébalo en la verificación y me cuentas qué viste.

### 🔎 VERIFICACIÓN A — probar el PUT sin front

Reinicia el servidor. En la Console del navegador (F12 en `localhost:3000`):

```js
fetch("http://localhost:3000/api/jugadores/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ puntos: 99.9 })
}).then(r => r.json()).then(console.log)
```

1. **Esperado:** `{ id: 1, puntos: 99.9 }`.
2. **Workbench:** `SELECT * FROM jugadores WHERE id = 1;` → tiene 99.9. *(Devuélvele sus puntos reales con otro PUT — Curry no anota 99.9 ni en los videojuegos.)*
3. **El 404:** mismo fetch a `/999` → `{ error: "No existe el jugador 999" }`.
4. **El 400:** mismo fetch a `/1` pero `body: JSON.stringify({})` → `{ error: "Faltan los puntos" }`.

---

## 9.2 — Front: el botón ✏️ y las etiquetas de acción

Ahora cada jugador tendrá DOS botones (✏️ y ✖). Tu filtro actual (`tagName !== "BUTTON"`) ya no alcanza: ambos son BUTTON. El delegado necesita saber **qué acción** pide cada botón → segunda etiqueta `dataset`.

**En el `for` de `cargarJugadores`, deja el bloque de botones así** (1 línea nueva en el ✖, 4 líneas del ✏️ — va ANTES del ✖ para que quede ✏️ ✖):

```js
const btnEditar = document.createElement("button");
btnEditar.textContent = "✏️";
btnEditar.dataset.id = j.id;
btnEditar.dataset.accion = "editar";
p.append(btnEditar);

const btn = document.createElement("button");
btn.textContent = "✖";
btn.dataset.id = j.id;
btn.dataset.accion = "eliminar";
p.append(btn);
```

| Pedazo | Qué significa |
|---|---|
| `dataset.accion = "editar"` / `"eliminar"` | 🌟 cada botón lleva ahora DOS etiquetas: **a quién** (`data-id`) y **para qué** (`data-accion`). En el HTML: `<button data-id="3" data-accion="editar">` |

---

## 9.3 — Front: el plan — funciones GEMELAS

`eliminarJugador` ya funciona. **No se desarma.** `editarJugador` se construye como su **gemela**: una función nueva, independiente, con la misma silueta:

```
eliminarJugador(evento)              editarJugador(evento)
──────────────────────               ─────────────────────
1. ¿este click es mío? si no, fuera  1. ¿este click es mío? si no, fuera
2. saco el id del dataset            2. saco el id del dataset
3. fetch DELETE                      3. pregunto los puntos (prompt)
4. recargo la lista                  4. fetch PUT
                                     5. recargo la lista
```

¿Y quién escucha los clicks? **Las dos a la vez.** Concepto nuevo del paso:

> 🌟 Un elemento puede tener **VARIOS listeners del mismo evento**. Un click en `#resultado` dispara TODAS las funciones registradas, en orden. Cada una decide con su filtro si el click era suyo o lo ignora.

```
                    click en la lista (#resultado)
                    ├──▶ eliminarJugador(evento)  → ¿accion === "eliminar"? no → return
                    └──▶ editarJugador(evento)    → ¿accion === "editar"?  no → return
```

**Lo ÚNICO que se toca de eliminar: su filtro (1 línea).** Hoy dice "reacciono a cualquier BUTTON" — y el ✏️ nuevo TAMBIÉN es un button. Sin ese cambio, click en editar = jugador eliminado. El filtro debe preguntar por la **acción**, no por la etiqueta.

---

## 9.4 — Front: la línea que cambia en `eliminarJugador`

**En tu `eliminarJugador`, reemplaza SOLO la línea del filtro:**

```js
if (evento.target.tagName !== "BUTTON") return;        // ← fuera esta
if (evento.target.dataset.accion !== "eliminar") return;  // ← entra esta
```

**Así debe quedar (todo lo demás intacto):**

```js
async function eliminarJugador(evento) {
  if (evento.target.dataset.accion !== "eliminar") return;

  const id = evento.target.dataset.id;

  await fetch(`http://localhost:3000/api/jugadores/${id}`, {
    method: "DELETE",
  });

  cargarJugadores();
}
```

| Pedazo | Qué significa |
|---|---|
| `dataset.accion !== "eliminar"` | el filtro pasa de "¿es un botón?" a "¿es MI botón?". Click en ✏️, en el texto o en el fondo → `return`, no es asunto suyo |
| ¿por qué funciona con el texto/fondo? | ahí `dataset.accion` es `undefined`, y `undefined !== "eliminar"` → fuera. Un solo filtro cubre todos los casos |

---

## 9.5 — Front: `editarJugador`, la función de ACTUALIZAR

Nueva, completa, **sin tocar nada más**. Misma silueta que su gemela; sus dos diferencias: pregunta el dato nuevo, y su fetch lleva carga.

**Escribe DEBAJO de `eliminarJugador`:**

```js
async function editarJugador(evento) {
  if (evento.target.dataset.accion !== "editar") return;

  const id = evento.target.dataset.id;

  const nuevosPuntos = prompt("Puntos nuevos:");
  if (nuevosPuntos === null) return;

  await fetch(`http://localhost:3000/api/jugadores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ puntos: Number(nuevosPuntos) }),
  });

  cargarJugadores();
}
```

**Palabra por palabra (lo nuevo):**

| Pedazo | Qué significa |
|---|---|
| filtro + `dataset.id` | calcados de la gemela — en la clase puedes proyectar las dos funciones lado a lado y se explican solas |
| `prompt("...")` | 🌟 ventanita nativa del navegador con un campo de texto. Devuelve **string** con lo escrito, o **`null`** si aprietan Cancelar. Feúcho pero perfecto aquí: cero HTML extra |
| `if (nuevosPuntos === null) return` | segunda cláusula guardia: Cancelar = no molestar al servidor |
| URL con `${id}` **y** `body` | 🌟 aquí se VE que PUT usa los dos canales: el id viaja en la URL (¿a quién?) y los puntos en el body (¿qué?). DELETE solo usaba URL; POST solo body |
| `headers` + `JSON.stringify` | la receta de siempre que hay carga: etiquetar el paquete y serializarlo |
| `Number(nuevosPuntos)` | `prompt` devuelve string, la base quiere número — el mismo reflejo que con `.value` |
| `cargarJugadores()` | la base cambió → repintar desde la base, como siempre |

---

## 9.6 — Front: el segundo listener

**En el bloque de listeners, AGREGA una línea al final (la de eliminar no se toca):**

```js
resultado.addEventListener("click", editarJugador);
```

**Así debe quedar el bloque completo:**

```js
// ── Listeners ──────────────────────────────
boton.addEventListener("click", cargarJugadores);
btnFichar.addEventListener("click", ficharJugador);
resultado.addEventListener("click", eliminarJugador);
resultado.addEventListener("click", editarJugador);
```

Las dos últimas líneas son el concepto 🌟 en acción: **mismo elemento, mismo evento, dos funciones** — cada click en la lista pasa por ambas y los filtros deciden.

El mapa final del archivo — léelo de abajo hacia arriba y se cuenta solo:

```
cargarJugadores()   ← botón cargar       (GET)
ficharJugador()     ← botón fichar       (POST)
eliminarJugador()   ← click en un ✖      (DELETE)
editarJugador()     ← click en un ✏️     (PUT)
```

*Nota para tu clase: existe un diseño alternativo — UNA función "repartidora" que lee `dataset.accion` y llama a la que toque. Con 2 acciones, las gemelas son más claras; con 5+ acciones, el repartidor escala mejor. Vale la pena mencionarlo como cierre.*

---

### ✅ VERIFICACIÓN FINAL del paso 9 (y del CRUD)

1. Click en ✏️ de un jugador → escribe `31.5` → acepta → **sus puntos cambian en la lista** y en Workbench.
2. Click en ✏️ → **Cancelar** → no pasa nada, y en Network no hay petición PUT.
3. El ✖ **sigue funcionando** (el refactor no lo rompió).
4. Click en el texto de un jugador → no pasa nada (el filtro implícito).
5. Reinicia el servidor → los puntos editados **siguen**.
6. Preguntas de concepto:
   - En `[puntos, req.params.id]`, ¿por qué el orden importa y quién lo decide?
   - ¿Qué habría pasado al clickear ✏️ si el filtro del ✖ siguiera siendo `tagName !== "BUTTON"`?
   - PUT usa URL **y** body: ¿qué viaja en cada uno y por qué no van juntos en uno solo?

---

## 🏆 Si todo pasó: CRUD COMPLETO

Front (HTML+JS) ⇄ API Express ⇄ MySQL, con los 4 verbos, validaciones 400, 404s honestos y datos que sobreviven a cualquier reinicio. Esto es, en miniatura, la arquitectura de casi toda app web que usas a diario.

*Siguiente etapa: pasos 10-15 — búsqueda con `req.query`, formulario de edición,
stats con `GROUP BY`, tabla `equipos` con JOIN, página de detalle y `express.Router`.
El plan completo, en orden y con objetivos: **`00-INDICE.md`**.*
