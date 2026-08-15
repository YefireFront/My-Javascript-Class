# ⌨️ Mis Snippets de VS Code

> Archivo fuente: `%APPDATA%\Code\User\snippets\yeffer.code-snippets`
> Para editarlos: `Ctrl+Shift+P` → "Snippets: Configure Snippets" → `yeffer.code-snippets`
> Tras cambiar algo: `Ctrl+Shift+P` → "Reload Window"

Cómo se usan: escribe el **prefijo** en un archivo `.js`/`.jsx`/`.ts` y pulsa `Tab` (o `Enter` sobre la sugerencia). Con `Tab` saltas entre los huecos rellenables.

---

## 🟨 JavaScript básico

| Prefijo | Qué crea |
|---------|----------|
| `cl` | `console.log(...)` |
| `cll` | `console.log(`texto ${variable}`)` — log con template literal |
| `fn` | Función clásica `function nombre() {}` |
| `arf` | Arrow function: `const nombre = (params) => {}` |
| `rt` | `return` rápido |
| `fori` | Loop `for` clásico con índice (el nombre del array se rellena en todo el loop) |
| `forof` | Loop `for...of` para recorrer arrays |
| `obj` | Objeto con 3 propiedades rellenables |
| `tryc` | Bloque `try/catch` con log del error |

```js
// arf →
const nombre = (params) => {
}

// forof →
for (const item of items) {
}

// tryc →
try {
} catch (error) {
  console.log('Algo fallo:', error.message);
}
```

## 🌐 Asincronismo y APIs (Lección 4)

| Prefijo | Qué crea |
|---------|----------|
| `afn` | Función async completa: `fetch` + `.json()` + `try/catch` + `return null` si falla |
| `ftch` | Solo las dos líneas: `await fetch` + `await resp.json()` (úsalo dentro de una async) |

```js
// afn → EL patrón estrella del curso:
async function traerDatos(params) {
  try {
    const resp = await fetch(url);
    const datos = await resp.json();
    return datos;
  } catch (error) {
    console.log('Algo fallo:', error.message);
    return null;
  }
}
```

## 🚂 Express — backend (Fase 4 del curso)

| Prefijo | Qué crea |
|---------|----------|
| `exps` | Servidor Express mínimo con `express.json()` y ruta de prueba en el puerto 3000 |
| `exr` | Una ruta: escribe `exr` y **elige con las flechas** entre `get`/`post`/`put`/`delete` |

```js
// exps →
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));

// exr →
app.get('/ruta', (req, res) => {
  res.json(respuesta);
});
```

## ⚛️ React (para cuando lleguemos al front)

| Prefijo | Qué crea |
|---------|----------|
| `rfc` | Componente con `export default` (toma el nombre del archivo) |
| `rf` | Componente sin export |
| `fnf` | Función con `return` y Fragment `<></>` |
| `rsc` | Componente con styled-components |
| `us` | `const [state, setState] = useState(valor)` |
| `ue` | `useEffect` con cleanup y dependencias |
| `rim` | Componente completo: import + `useState` + `useEffect` + export |
| `mapr` | Renderizar lista con `.map()` y `key` |
| `inp` | Input controlado (estado + `onChange`) |

## ▲ Next.js

| Prefijo | Qué crea |
|---------|----------|
| `fnlo` | Layout de Next.js con `children` tipado |

---

## 📝 Chuleta para crear snippets nuevos

```jsonc
"Nombre descriptivo": {
  "prefix": "atajo",                    // lo que escribes antes de Tab
  "scope": "javascript,typescript",     // en qué lenguajes aparece
  "body": [
    "cada string es una linea",
    "  $1 es el primer hueco, $2 el segundo, $0 donde queda el cursor",
    "  ${1:valorPorDefecto} pone texto de ejemplo rellenable",
    "  ${1|get,post,put|} crea un menu de opciones"
  ],
  "description": "lo que se ve en el autocompletado"
}
```

Reglas aprendidas (de los bugs que ya arreglamos):
- Si usas `${1:arr}` en una línea, repítelo como `${1:arr}` en las demás — nunca lo escribas fijo (`arr`), o el snippet queda roto al renombrar.
- La `description` debe decir la verdad: es lo que lees en el menú de autocompletado.
