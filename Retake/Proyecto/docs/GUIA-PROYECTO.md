# 🏀 GUÍA DEL PROYECTO — paso a paso, línea por línea

> **Cómo funciona:** construimos `frontend/app.js` DESDE CERO (archivo vacío).
> Cada línea numerada te dice: **QUÉ escribir** (exacto), **DÓNDE va** (debajo de qué),
> y **QUÉ HACE** palabra por palabra. Escribe tecleando, no copies bloques.
> Hay 2 puntos de verificación: uno a mitad de camino y otro al final.

---

## 📍 Antes de empezar, confirma tu terreno

1. **`frontend/app.js` está VACÍO** (borraste todo). ✅
2. **`frontend/index.html` NO se toca.** Solo recuerda qué tiene, porque lo vamos a usar:
   - un botón: `<button id="btnJugadores">`
   - un div vacío: `<div id="resultado">`
   - la etiqueta `<script src="app.js">` al final (por eso tu JS ve el HTML)
3. **`backend/servidor.js` NO se toca.** Ya funciona: tiene la ruta `GET /api/jugadores`
   que responde los 4 jugadores en JSON, y permite peticiones del front gracias a `cors`.
4. **Ambos motores encendidos:**
   - Terminal en `Proyecto/backend` → `node servidor.js` → "Corriendo en el puerto 3000 🚀"
   - `index.html` abierto con Live Server
   - En el navegador: `F12` → pestaña **Console** abierta (ahí viven tus logs y errores)

---

# PASO 1 — Del botón a la pantalla (app.js completo)

**Objetivo final:** click en "Cargar jugadores" → los 4 jugadores del servidor aparecen en la página.

**El plan en una frase:** agarrar los 2 elementos del HTML → poner oreja al botón → pedir los datos al servidor → pintarlos en el div.

---

## PARTE A · Agarrar los elementos (líneas 1 y 2)

### Línea 1 — Agarrar el botón

**Escribe (primera línea del archivo):**

```js
const boton = document.querySelector("#btnJugadores");
```

**Palabra por palabra:**

| Pedazo | Qué significa |
|---|---|
| `const` | crea una "caja" cuyo contenido no va a cambiar |
| `boton` | el nombre de la caja (lo elegimos nosotros, sin tilde porque los nombres no llevan) |
| `=` | "guarda en la caja lo que dé la derecha" |
| `document` | LA página completa, vista desde JavaScript |
| `.querySelector(...)` | "búscame UN elemento dentro de la página" |
| `"#btnJugadores"` | el criterio: `#` = buscar por id → encuentra `<button id="btnJugadores">` |
| `;` | fin de la instrucción |

**Resultado:** la caja `boton` contiene el botón de verdad: lo que le hagamos a la caja, le pasa al botón en pantalla.

### Línea 2 — Agarrar el div donde pintaremos

**Escribe (debajo de la línea 1):**

```js
const resultado = document.querySelector("#resultado");
```

**Explicación:** idéntica a la línea 1, cambiando el objetivo: busca por id `resultado` y guarda el `<div id="resultado">` en la caja `resultado`. Las "agarradas" van juntas arriba del archivo porque solo hacen falta UNA vez.

---

## PARTE B · La oreja en el botón (líneas 3 y 5)

### Líneas 3 a 5 — El esqueleto del listener

**Escribe (dejando una línea en blanco debajo de la línea 2):**

```js
boton.addEventListener("click", async () => {

});
```

Son 3 líneas: la de apertura, una vacía en el medio (la iremos llenando), y la de cierre.

**Palabra por palabra la línea de apertura:**

| Pedazo | Qué significa |
|---|---|
| `boton` | la caja del botón (línea 1) |
| `.addEventListener` | "ponle una oreja": quiero reaccionar a un evento suyo |
| `(` | empiezan los 2 datos que la oreja necesita... |
| `"click"` | dato 1: QUÉ evento escuchar (el click del mouse) |
| `,` | separador entre los 2 datos |
| `async` | aviso: la función de abajo va a ESPERAR cosas adentro (sin esta palabra, `await` da error) |
| `()` | los paréntesis de la función (van vacíos: el click no nos entrega nada que necesitemos hoy) |
| `=>` | la "flecha": convierte lo anterior en una función |
| `{` | abre el CUERPO: todo lo que pongamos aquí dentro correrá EN CADA CLICK |

**Y la línea de cierre `});`:**

| Pedazo | Qué significa |
|---|---|
| `}` | cierra el cuerpo de la función (la pareja del `{` de arriba) |
| `)` | cierra el paréntesis que abrió `addEventListener(` |
| `;` | fin de la instrucción |

**Clave mental:** las líneas 1-2 corren UNA vez (al cargar la página). Lo de dentro de las llaves corre CADA vez que hagan click. Cero clicks = cero ejecuciones.

---

## PARTE C · Pedir los datos al servidor (líneas 4a y 4b, DENTRO de las llaves)

### Línea 4a — Enviar la petición y esperar la respuesta

**Escribe (dentro de las llaves del listener, con sangría):**

```js
    const respuesta = await fetch("http://localhost:3000/api/jugadores");
```

**Palabra por palabra:**

| Pedazo | Qué significa |
|---|---|
| `const respuesta` | caja para lo que el servidor devuelva |
| `await` | "espera AQUÍ hasta que llegue" — pausa solo esta función, la página no se congela |
| `fetch(...)` | envía una petición GET a esa dirección |
| `"http://localhost:3000/api/jugadores"` | la dirección de TU backend: máquina local (`localhost`), puerta `3000`, ruta `/api/jugadores` |

**Ojo importante:** lo que llega a `respuesta` NO son los jugadores todavía. Es un **sobre cerrado**: trae el código de estado (200), etiquetas... y el contenido dentro, sin abrir.

### Línea 4b — Abrir el sobre

**Escribe (debajo de la 4a, dentro de las llaves):**

```js
    const jugadores = await respuesta.json();
```

**Palabra por palabra:**

| Pedazo | Qué significa |
|---|---|
| `const jugadores` | caja para el contenido ya abierto |
| `await` | abrir el sobre también tarda un instante → se espera |
| `respuesta.json()` | "del sobre, saca el texto JSON y conviértelo en datos JavaScript de verdad" |

**Resultado:** `jugadores` es un **array de 4 objetos** — exactamente el array que vive en tu `servidor.js`, después de viajar por la red.

### 🔎 VERIFICACIÓN A (haz esta pausa)

Agrega **temporalmente** debajo de la 4b:

```js
    console.log(jugadores);
```

Guarda → click al botón → en la Console (F12) debe aparecer el array con tus 4 jugadores. **Además**: mira la terminal del backend — debe decir "Me pidieron los jugadores". Si ambas cosas pasan, tu front y tu back ya conversan. *(El log lo puedes borrar después: era un andamio.)*

**Si falla:** ¿backend encendido? → ¿error rojo en Console? (si menciona CORS, revisa que `app.use(cors())` esté en el servidor) → ¿la URL está exacta?

---

## PARTE D · Pintar en la página (líneas 5 a 8, DENTRO de las llaves)

### Línea 5 — Limpiar el div antes de pintar

**Escribe (debajo de la 4b / del console.log):**

```js
    resultado.replaceChildren();
```

| Pedazo | Qué significa |
|---|---|
| `resultado` | la caja del div (línea 2) |
| `.replaceChildren()` | "reemplaza tus hijos por... nada" → vacía el div |

**¿Por qué?** Sin esta línea, cada click AGREGA 4 jugadores más (3 clicks = 12 párrafos). Con ella, cada click limpia y pinta fresco.

### Líneas 6 — El recorrido, esqueleto primero

**Escribe (debajo de la línea 5):**

```js
    for (const j of jugadores) {

    }
```

| Pedazo | Qué significa |
|---|---|
| `for` | "repite el bloque de las llaves" |
| `const j` | en cada vuelta, `j` es UN jugador (vuelta 1: Curry, vuelta 2: LeBron...) |
| `of jugadores` | "...recorriendo el array jugadores" → 4 elementos = 4 vueltas |
| `{ }` | el cuerpo que se repite (vacío por ahora; van 3 líneas adentro) |

### Línea 7a — Crear el párrafo (dentro del for)

**Escribe (dentro de las llaves del for, doble sangría):**

```js
        const p = document.createElement("p");
```

| Pedazo | Qué significa |
|---|---|
| `document.createElement` | "fabrícame un elemento HTML nuevo" |
| `("p")` | de tipo párrafo `<p>` |

**Ojo:** el párrafo existe **solo en memoria** — aún es invisible. Es una carta impresa que no has puesto sobre la mesa.

### Línea 7b — Escribirle el texto (dentro del for)

**Escribe (debajo de la 7a):**

```js
        p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;
```

| Pedazo | Qué significa |
|---|---|
| `p.textContent` | el texto interno del párrafo |
| `` ` ` `` | comillas invertidas (backticks): texto con huecos. En teclado latino: `Alt Gr` + la tecla de `}`/`+` (varía; también funciona Alt+96) |
| `${j.nombre}` | HUECO: aquí se incrusta el nombre del jugador de ESTA vuelta |
| `—` `·` | adornos literales (vale usar `-` y `.` normales) |
| `${j.posicion}` `${j.puntos}` | más huecos con los datos de `j` |

**Resultado vuelta 1:** `Stephen Curry — base · 24.8 pts`

### Línea 7c — Engancharlo a la página (dentro del for)

**Escribe (debajo de la 7b):**

```js
        resultado.append(p);
```

| Pedazo | Qué significa |
|---|---|
| `resultado.append(p)` | "div: engancha este párrafo como tu último hijo" → **aparece en pantalla** |

**El ritmo por cada jugador:** crear (7a) → llenar (7b) → enganchar (7c).

---

## 🧩 Así debe quedar app.js completo (para COMPARAR al final)

```js
const boton = document.querySelector("#btnJugadores");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", async () => {
    const respuesta = await fetch("http://localhost:3000/api/jugadores");
    const jugadores = await respuesta.json();

    resultado.replaceChildren();

    for (const j of jugadores) {
        const p = document.createElement("p");
        p.textContent = `${j.nombre} — ${j.posicion} · ${j.puntos} pts`;
        resultado.append(p);
    }
});
```

---

## ✅ VERIFICACIÓN FINAL del paso 1

1. Click en "Cargar jugadores" → **los 4 jugadores aparecen en la página**.
2. Click **5 veces seguidas** → siguen siendo 4, no 20 (eso es la línea 5 trabajando).
3. La terminal del backend acumula un "Me pidieron los jugadores" por cada click → cada click fue una petición HTTP real de tu front a tu back.

**Cuando los 3 puntos pasen, di "r": se agrega aquí el PASO 2 — pedir UN solo jugador por su id (el backend estrena `req.params`).**
