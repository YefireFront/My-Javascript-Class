# 🔄 GUÍA CRUD — completar el circuito (POST, DELETE, PUT)

> **Qué es este documento:** la última guía del proyecto. Tu API ya LEE
> (la R del CRUD). Aquí agregamos lo que falta, un paso a la vez:
>
> | Letra | Operación | Verbo HTTP | SQL | Estado |
> |---|---|---|---|---|
> | **C** reate | fichar jugador | POST | INSERT | ← PASO 7 (este) |
> | **R** ead | listar / uno | GET | SELECT | ✅ hecho |
> | **U** pdate | editar jugador | PUT | UPDATE | paso 9 |
> | **D** elete | echar jugador | DELETE | DELETE | paso 8 |
>
> Mismo método de siempre: qué escribir, dónde, palabra por palabra, verificación.

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

**Escribe debajo de tu ruta `GET /api/jugadores/:id`:**

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

*Cuando pase, di "r": PASO 8 — DELETE: el botón "✖ echar" en cada jugador
(volverá tu delegación de eventos) y el jugador desaparece de MySQL.*
