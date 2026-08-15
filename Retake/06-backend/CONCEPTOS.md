# 📖 Backend desde cero — Conceptos a profundidad

> **Documento vivo**: crece con cada paso que desbloqueas.
> **Cómo trabajamos**: `servidor.js` contiene SOLO código limpio con
> comentarios cortos de documentación; el porqué profundo de cada línea
> y las prácticas de cada paso viven AQUÍ.
> Compañero interactivo: 🍕 [La Pizzería HTTP](https://claude.ai/code/artifact/f56694fa-bb2b-4809-aa0e-5427caa5a16b).

---

## 0. El mapa grande: ¿qué estamos construyendo?

Un **backend** es la mitad invisible de toda app: el programa que guarda los datos de verdad y decide quién puede hacer qué. Cuando tu app del DOM (lección 5) hacía `fetch("leyendas.json")`, Live Server actuaba de backend improvisado. Ahora el plan es reemplazarlo por un programa **tuyo**:

```
[ Tu front (navegador) ]  ──petición──▶  [ TU servidor (Node+Express) ]  ──▶  [ MySQL ]
        lección 5         ◀──respuesta──          fase 4 (aquí)               fase 5
```

Cada flecha es una conversación **petición → respuesta**. Domina esa conversación y dominas el backend.

---

## 1. Cliente y servidor: los dos papeles

| | CLIENTE | SERVIDOR |
|---|---|---|
| Su verbo | **PEDIR** | **RESPONDER** |
| Ejemplos que ya usaste | tu navegador, tu `fetch` | jsonplaceholder, Live Server |
| Dónde vive | la máquina del usuario | una máquina encendida 24/7 |
| Cuándo corre | cuando el usuario abre la página | **siempre** — espera peticiones |

**Idea profunda #1**: cliente y servidor son *papeles*, no máquinas. Tu mismo computador jugará ambos papeles: el navegador (cliente) en una ventana y Node (servidor) en la terminal. Se hablarán entre sí dentro de tu propia máquina.

**Idea profunda #2**: en HTTP el servidor **jamás habla primero**. No puede "avisarte" nada si no le pediste algo. Cada conversación nace en el cliente: una petición, una respuesta, fin. Sin memoria de la anterior (por eso se dice que HTTP es *stateless* — sin estado). Cómo "recordar" quién eres entre peticiones (sesiones, tokens) es un tema que llegará mucho después.

---

## 2. Anatomía de una dirección

```
http://  localhost  :3000  /api/jugadores
──┬───   ───┬─────  ──┬──  ──────┬───────
protocolo  domicilio  puerto     ruta
```

- **Protocolo (`http://`)** — el idioma pactado: cómo se escriben las peticiones y respuestas. `https` es lo mismo + cifrado (el candado 🔒). No es "otra cosa", es HTTP con guardaespaldas.
- **Domicilio (`localhost`)** — a qué máquina va la petición. `localhost` = "esta misma máquina" (equivale a la IP `127.0.0.1`: tu computador llamándose a sí mismo). En producción aquí va un dominio (`miapp.com`) que un servicio llamado DNS traduce a la IP real.
- **Puerto (`:3000`)** — tu máquina es un edificio con ~65.000 locales numerados. Cada programa-servidor atiende en uno. Live Server atiende en el 5500, tu Express atenderá en el 3000: por eso conviven sin chocar. Si dos programas quieren el mismo puerto, el segundo falla con `EADDRINUSE` (dirección en uso) — cuando te pase, ya sabes qué significa.
- **Ruta (`/api/jugadores`)** — QUÉ le pides a ese servidor. El servidor define su **menú** de rutas; pedir algo fuera del menú da 404.

---

## 3. La petición y la respuesta, por dentro

Una **petición** tiene, como mínimo:
- un **verbo** (la intención) + una **ruta** (el objetivo): `GET /api/jugadores`
- cabeceras (metadatos: quién soy, qué formatos acepto...) — las verás más adelante
- a veces un **cuerpo** (datos que envías, ej. el jugador nuevo en un POST)

Una **respuesta** tiene:
- un **código de estado** (el resumen en un número)
- cabeceras
- un **cuerpo** (el contenido: texto, JSON, HTML, una imagen...)

### Los verbos (los 4 del CRUD)

| Verbo | Intención | En tu app NBA será... |
|---|---|---|
| **GET** | dame / leer | ver la plantilla |
| **POST** | crea algo nuevo | fichar un jugador |
| **PUT** (o PATCH) | modifica lo existente | retirar / editar un jugador |
| **DELETE** | borra | echar a un jugador |

**Idea profunda**: el menú del servidor se define por **verbo + ruta juntos**. `GET /api/jugadores` y `POST /api/jugadores` son dos platos distintos aunque compartan dirección: mismo sustantivo, distinta intención. Esa gramática (verbos + sustantivos) tiene nombre: **API REST** — la forma estándar de diseñar APIs que piden en las empresas.

### Los códigos de estado (aprende las familias, no la lista)

- **2xx = todo bien** → `200 OK` (aquí tienes), `201 Created` (creado)
- **4xx = TÚ (cliente) pediste mal** → `404 Not Found` (no existe), `400 Bad Request` (petición malformada)
- **5xx = YO (servidor) me rompí** → `500 Internal Server Error` (mi código explotó)

**Idea profunda**: un 404 **no es una falla** — es el servidor respondiendo honestamente "eso no está en mi menú". Falla sería no responder. ¿Recuerdas `buscarTarea` devolviendo `null`? Ese `null` es exactamente lo que tu API convertirá en un 404: el mismo contrato, ahora entre máquinas.

### JSON: el idioma de los datos

**J**ava**S**cript **O**bject **N**otation: tus objetos y arrays de siempre, escritos como texto para poder viajar por la red. Reglas que lo diferencian de un objeto JS: comillas dobles obligatorias en las claves, sin funciones, sin comentarios, sin coma final. Ya lo dominas sin saberlo: `leyendas.json` era esto. Una **API** es, simplemente, un servidor cuyo menú responde JSON en vez de páginas.

---

## 4. PASO 0 — Los proyectos de Node (npm)

**npm** (Node Package Manager) viene con Node y hace dos trabajos: descargar librerías y llevar la contabilidad del proyecto.

| Pieza | Qué es | ¿Se comparte/sube a git? |
|---|---|---|
| `package.json` | La **cédula**: nombre del proyecto y lista de dependencias (`"express": "^5.2.1"`) | ✅ SÍ — es la fuente de verdad |
| `node_modules/` | Las librerías **descargadas** (Express + sus 60+ ayudantes) | ❌ JAMÁS — pesa mucho y se regenera |
| `package-lock.json` | La foto **exacta** de qué versión de cada cosa se instaló | ✅ SÍ — garantiza instalaciones idénticas |

**La magia que comprobaste en P4**: borras `node_modules` entero, corres `npm install`, y todo renace — porque la cédula + el lock contienen la receta completa. Por eso un repo profesional trae un `.gitignore` con `node_modules` dentro.

**El `^` en `^5.2.1`**: significa "esta versión o parches compatibles". Detalle de versionado que explica por qué existe el lock: sin él, dos máquinas podrían instalar versiones ligeramente distintas.

---

## 5. PASO 1 — Las dos primeras líneas

```js
const express = require("express");  // línea 1
const app = express();               // línea 2
```

**`require("express")`** — el sistema de módulos clásico de Node (CommonJS). Node busca la carpeta `express` dentro de `node_modules` y te entrega lo que esa librería **exporta**. Express exporta una función. (El estándar moderno es `import`, que ya usarás con React; `require` es su hermano mayor y sigue siendo lo normal en muchísimo código Node — tu package.json lo declara: `"type": "commonjs"`.)

**`express()`** — llamas a la función y te devuelve tu **aplicación**: el objeto con el que defines todo tu servidor. La pizzería recién construida: existe, pero sin menú y con las puertas cerradas.

### 💀 La lección escondida: por qué el programa se murió

Corriste `node servidor.js`, salieron los logs... y la terminal te devolvió el prompt. El proceso **terminó**. ¿Por qué?

Conecta con tu Lección 4: Node ejecuta tu archivo de arriba a abajo, y al llegar al final revisa el event loop: *"¿queda algo pendiente? ¿timers? ¿peticiones en vuelo? ¿alguien escuchando un puerto?"* Si la respuesta es no → no hay razón para seguir vivo → el proceso muere.

**Definición profunda de servidor**: *un programa al que le dimos una razón permanente para no morir*. Esa razón será `app.listen(puerto)`: le clava al event loop una tarea eterna — "escucha esta puerta para siempre" — y por eso la terminal se queda "pegada": no está trabada, está **viva**.

---

## 5b. PASO 2 — `app.listen`: el servidor respira

```js
app.listen(3000, () => {
  console.log("🍕 Pizzería abierta en http://localhost:3000");
});
```

**Qué hace de verdad**: le pide al sistema operativo la puerta 3000 y deja al event loop con una tarea eterna: *"vigila esa puerta"*. Por eso el proceso ya no muere y la terminal queda "pegada" — no trabada: **viva y esperando**. Apagarlo es Ctrl+C (matar el proceso → el sistema libera el puerto).

**El segundo argumento es un callback** (tu lección 4): Express lo ejecuta una sola vez, cuando el puerto quedó abierto con éxito. Es solo un aviso de arranque — el trabajo real del servidor ocurre después, petición por petición.

**`Cannot GET /` — el 404 más importante de tu vida**: al visitar `localhost:3000`, el navegador envía `GET /`. Tu servidor está vivo pero su menú está vacío → responde honestamente `404`. Lección: *que te responda un 404 significa que TODO el circuito ya funciona* (navegador → puerto → Express → respuesta → navegador); solo falta el menú. Compáralo con el otro escenario: servidor apagado → "no se puede acceder al sitio" → ahí no hubo conversación en absoluto. **Distinguir "me respondió que no" de "no hay nadie" te ahorrará horas de depuración toda tu carrera.**

**`EADDRINUSE`** (viste este error en P11 si hiciste el bonus): dos procesos no pueden escuchar la misma puerta. Soluciones reales: apagar el otro proceso, o cambiar de puerto. Te lo cruzarás cuando dejes un servidor corriendo olvidado.

---

## 5c. PASO 3 — La primera ruta: nace el menú

```js
app.get("/", (req, res) => {
  res.send("¡Mi primer servidor vive! 🏀");
});
```

### Léela como una frase

> "app: cuando llegue una petición **GET** a la ruta **/**, ejecuta esta **función** para atenderla."

Es un plato del menú: verbo (`get`) + ruta (`"/"`) + receta (la función). A esa función se le llama **handler** (manejador). ¿Te suena el patrón? Es **idéntico** a tu `boton.addEventListener("click", fn)` del DOM: dejas una oreja puesta y la función corre cuando ocurre el evento. En el front el evento era un click; aquí es *una petición entrante*.

### req y res: los dos paquetes que te entregan

Cada vez que llega una petición, Express ejecuta tu handler pasándole dos objetos:

| | Qué es | Metáfora pizzera |
|---|---|---|
| **`req`** (request) | TODO sobre la petición que llegó: qué ruta pidió, qué datos trae, de dónde viene... | La comanda: qué pidió el cliente |
| **`res`** (response) | La caja de herramientas para RESPONDER: `res.send`, `res.json`, códigos de estado... | La bandeja para despachar el pedido |

Por ahora solo usamos `res.send(texto)` — responde texto/HTML y cierra la conversación. `req` lo exploraremos cuando las rutas necesiten datos del cliente (muy pronto).

**Regla de una respuesta**: cada petición debe recibir **exactamente una** respuesta. Sin `res.send` el navegador se queda esperando eternamente; con dos `res.send` Express lanza error. Una comanda, un plato.

### Idea profunda: el handler corre POR PETICIÓN

`app.get(...)` se ejecuta UNA vez (al arrancar: registra el plato en el menú). Pero el **handler de adentro corre cada vez que alguien pide esa ruta**: 100 visitas = 100 ejecuciones. Lo comprobarás en la práctica P15 con un log.

### Idea profunda #2: el servidor tiene tu código VIEJO en memoria

Cuando corres `node servidor.js`, Node **lee el archivo una vez** y ejecuta esa copia. Si editas el archivo después, el proceso vivo ni se entera: sigue sirviendo la versión que leyó. Por eso el ritual molesto: **guardar → Ctrl+C → node servidor.js** en cada cambio. (Aguanta el ritual 2 pasos más: la herramienta que lo elimina —nodemon— llega pronto, y la valorarás el doble por haber sufrido esto 😄)

### 🏋️ Prácticas del paso 3

- **P12.** Reinicia el servidor y visita `http://localhost:3000/` → adiós `Cannot GET /`, hola saludo. En F12 → Network ahora verás **200** donde antes había 404.
- **P13.** Cambia el texto del `res.send` y recarga el navegador **sin reiniciar el servidor**. ¿Cambió? No — relee la "idea profunda #2". Ahora sí: Ctrl+C, `node servidor.js`, recarga.
- **P14.** ✍️ **Esta la escribes TÚ**: agrega un segundo plato al menú — `GET /saludo` que responda el texto que quieras. Mismo patrón, otra ruta. Pruébala en `localhost:3000/saludo`. (Y comprueba que `/pizza` sigue dando 404: solo existe lo que TÚ pongas en el menú.)
- **P15.** Mete un `console.log("me pidieron /")` DENTRO del handler de `/`. Reinicia y recarga la página 5 veces mirando la **terminal**. Cada recarga = una línea nueva = el handler corriendo por petición. Estás viendo a tus visitantes en vivo — así nacen los logs de servidor.

---

## 5d. PASO 4 — `res.json`: nace tu API

### El cambio de idioma

`res.send("texto")` responde para **humanos**. Una API responde para **programas** (tu `fetch` del front): datos estructurados. Para eso existe:

```js
res.json(jugadores);
```

Qué hace por dentro (dos cosas, ambas importantes):
1. **Serializa**: convierte tu array/objeto JS a texto JSON (lo que hacía `JSON.stringify`).
2. **Etiqueta la respuesta**: agrega la cabecera `Content-Type: application/json` — la nota que le dice al cliente "esto que te mando es JSON, parsealo como datos". Por esa etiqueta tu `fetch` sabe que puede hacer `resp.json()`.

### La convención `/api/...`

Las rutas de datos se agrupan bajo el prefijo `/api`: así conviven en el mismo servidor las páginas para humanos (`/`) y los datos para programas (`/api/jugadores`). No es obligatorio — es la costumbre de la industria, y las costumbres compartidas son las que dejan leer código ajeno.

### Idea profunda: tu "base de datos" es MORTAL

El array `jugadores` vive en la **memoria del proceso**. Consecuencia brutal que debes ver con tus propios ojos (práctica P19): cualquier cambio que una petición le haga al array **se esfuma al reiniciar el servidor**, porque reiniciar = leer el archivo de cero. Los datos de verdad necesitan vivir FUERA del proceso, en un programa cuyo único trabajo es guardarlos: **una base de datos**. Acabas de entender por qué existe la fase 5 (MySQL) antes de llegar a ella.

### 🏋️ Prácticas del paso 4 (la ruta la escribes TÚ)

- **P16.** ✍️ Escribe la ruta que faltó en P14, pero la importante:
  `GET /api/jugadores` que responda `res.json(jugadores)`. Mismo patrón que tu `GET /` — 3 líneas. Reinicia y visita `http://localhost:3000/api/jugadores`: deberías ver tus 4 jugadores en JSON. **Ese momento es oficialmente tu primera API.**
- **P17.** ✍️ El log que faltó en P15: dentro del handler nuevo, `console.log("me pidieron los jugadores")`. Recarga varias veces mirando la terminal: el handler corre por petición.
- **P18.** El círculo se cierra 🤯: con el servidor corriendo y la pestaña de `localhost:3000` abierta, ve a F12 → Console y ejecuta:
  ```js
  fetch("/api/jugadores").then(r => r.json()).then(console.log)
  ```
  Tu `fetch` de la lección 4... consumiendo TU servidor de la fase 4. Cliente tuyo, servidor tuyo, conversación completa.
- **P19.** La mortalidad de los datos: agrega temporalmente esta ruta traviesa y visítala:
  ```js
  app.get("/api/fichar-prueba", (req, res) => {
    jugadores.push({ id: 99, nombre: "Prueba", posicion: "novato", puntos: 10 });
    res.json(jugadores);
  });
  ```
  Visítala 2-3 veces (se acumulan Pruebas), luego **reinicia el servidor** y pide `/api/jugadores`... ¿y las Pruebas? 💨 Esa desaparición es LA razón de ser de las bases de datos. (Borra la ruta traviesa después.)

---

## 6. Próximos pasos (se irán llenando aquí)

- [x] **PASO 2** — `app.listen`: el servidor respira. Y el famoso `Cannot GET /`. ✅ → sección 5b
- [x] **PASO 3** — La primera ruta, req y res. ✅ → sección 5c
- [x] **PASO 4** — `res.json` + `/api/jugadores`: nace tu API. ✅ → sección 5d
- [x] **PASO 5** — nodemon: el servidor que se reinicia solo. ✅ → sección 5e

## 5e. PASO 5 — nodemon: fin del ritual Ctrl+C

### El problema (lo viviste HOY)

Tu servidor quedó corriendo con código viejo y una ruta nueva "no existía" aunque estaba en el archivo. El ritual guardar → Ctrl+C → `node servidor.js` no es solo molesto: **es una fuente real de bugs fantasma** ("¡pero si lo cambié!").

### La herramienta

**nodemon** = *node monitor*. Un vigilante que corre tu servidor y, cada vez que guardas un archivo, lo **mata y lo revive solo** con el código nuevo.

### Concepto nuevo 1: dependencias de desarrollo

```
npm install --save-dev nodemon
```

El `--save-dev` (o `-D`) lo guarda en `"devDependencies"` en vez de `"dependencies"`. La diferencia importa: **express** lo necesita el servidor para FUNCIONAR (producción); **nodemon** solo te sirve a TI mientras desarrollas. Cuando la app se despliegue a un servidor real, las devDependencies ni se instalan.

### Concepto nuevo 2: los scripts de npm

En `package.json` existe la sección `"scripts"`: atajos con nombre para comandos del proyecto. Ya te dejé este:

```json
"scripts": {
  "dev": "nodemon servidor.js"
}
```

Se ejecutan con `npm run <nombre>`: → **`npm run dev`**. ¿Por qué no escribir `nodemon servidor.js` directo? Dos razones: (1) nodemon está instalado DENTRO del proyecto (no global), y npm run sabe encontrarlo en node_modules; (2) es el estándar: llegas a cualquier proyecto del mundo, miras sus scripts, y `npm run dev` arranca sin leer documentación.

### 🏋️ Prácticas del paso 5

- **P20.** Instala: `npm install --save-dev nodemon` y confirma en package.json la nueva sección `"devDependencies"`.
- **P21.** Apaga cualquier servidor viejo (Ctrl+C) y enciende con: **`npm run dev`**. Verás los logs de nodemon (versión, "watching...") y luego tu "corriendo en el 3000 🚀".
- **P22.** La magia: con el servidor corriendo, cambia el texto del `res.send` de `/`, **guarda**, y mira la terminal reiniciarse sola (`restarting due to changes...`). Recarga el navegador: texto nuevo, sin tocar nada. Se acabó el ritual.
- **P23** (cultura general): Node 22 trae un modo nativo parecido: `node --watch servidor.js`. Funciona sin instalar nada — nodemon sigue siendo el estándar que verás en los proyectos, pero que sepas que existe.

**Nuevo flujo de trabajo desde hoy**: una terminal con `npm run dev` SIEMPRE viva mientras programas. Solo se reinicia sola.
- [ ] **PASO 3** — La primera ruta: `app.get("/", (req, res) => ...)` — qué son req y res.
- [ ] **PASO 4** — `res.json`: nace tu API.
- [ ] **PASO 5** — nodemon: adiós al Ctrl+C eterno.
- [ ] Después: el CRUD completo de jugadores, conectar tu front de la lección 5, y de ahí a MySQL.

---

## 7. Glosario rápido (crece con el curso)

| Término | En una frase |
|---|---|
| Cliente | El que pide (navegador, fetch) |
| Servidor | Programa siempre encendido que responde peticiones |
| HTTP | Las reglas del juego petición/respuesta |
| localhost | "Esta misma máquina" (127.0.0.1) |
| Puerto | Puerta numerada donde un programa escucha (Express: 3000) |
| Ruta | El "qué pides": `/api/jugadores` |
| Verbo | La intención: GET lee, POST crea, PUT edita, DELETE borra |
| 404 | "Eso no está en mi menú" — respuesta honesta, no falla |
| JSON | Objetos/arrays JS escritos como texto para viajar |
| API | Servidor cuyo menú responde datos (JSON), no páginas |
| REST | La gramática estándar para diseñar ese menú |
| npm | Administrador de librerías y contabilidad del proyecto |
| require | "Tráeme lo que exporta esa librería" (módulos CommonJS) |
| Stateless | HTTP no recuerda la petición anterior: cada una empieza de cero |
| listen | "Escucha este puerto para siempre" — lo que mantiene vivo al servidor |
| Callback | Función que entregas para que otro la ejecute cuando toque |
| EADDRINUSE | "Puerta ocupada": dos procesos pelean por el mismo puerto |
| Ctrl+C | Matar el proceso de la terminal (apaga el servidor, libera el puerto) |
| Ruta/endpoint | Un plato del menú: verbo + camino + handler |
| Handler | La función que atiende una petición (corre una vez POR petición) |
| req | Objeto con todo lo que trae la petición entrante |
| res | Caja de herramientas para responder (send, json, status...) |
| res.json | Serializa tus datos a JSON y los etiqueta como tales |
| Serializar | Convertir datos vivos (objetos JS) a texto que pueda viajar |
| Content-Type | Cabecera que dice qué formato trae el cuerpo de la respuesta |
| BD en memoria | Datos en variables del proceso: se esfuman al reiniciar |
