# 📚 Repaso — Fases 1 y 2 del Retake

> Lo que ya dominas antes de entrar al DOM. Si algo de aquí no te suena,
> vuelve al archivo de esa lección antes de seguir.

---

## Lección 1 — Variables y funciones (`01-fundamentos.js`)

```js
const nombre = "Yeffer";  // no cambia → const (tu opción por defecto)
let edad = 25;            // sí cambia → let  (nunca var, nunca sin declarar)

function saludar(persona) {
  return "Hola, " + persona;   // return = la función ENTREGA un valor
}

const doble = n => n * 2;      // arrow function: la forma corta
```

**Reglas que ya son ley:**
- Toda variable nace con `const` o `let`. `a = 5` a secas crea una global fantasma.
- Siempre `===`, nunca `==` (el doble convierte tipos a escondidas: `'2' == 2` es `true`).
- Los números van sin comillas: `'34' + 1` es `'341'`, no `35`.

## Lección 2 — Arrays y objetos (`02-arrays-objetos.js`)

```js
const tarea = { id: 1, titulo: "Estudiar", completada: false };
tarea.titulo;                 // leer con punto

const tareas = [ {...}, {...} ];   // ← LA estructura del mundo real
for (const t of tareas) { ... }    // recorrer con for...of
```

**Regla:** array de objetos = como te llegan los datos de toda API y toda base de datos.

## Lección 3 — map, filter, find (`03-metodos-array.js`)

| Máquina | Pregunta que responde | Devuelve |
|---------|----------------------|----------|
| `map`    | "todos, pero cambiados"  | array nuevo, mismo tamaño |
| `filter` | "solo los que..."        | array nuevo, más corto |
| `find`   | "ese UNO en concreto"    | un elemento (o `undefined`) |

```js
tareas.map(t => t.titulo)                    // títulos
tareas.filter(t => !t.completada)            // pendientes
tareas.find(t => t.id === 2) ?? null         // buscar (?? convierte undefined → null)
tareas.filter(t => t.id !== 5)               // "eliminar" = quedarse con el resto
tareas.map(t => t.id === 2 ? { ...t, completada: true } : t)  // "editar" sin mutar
```

**Reglas:**
- En `map`, se DEVUELVE el elemento nuevo. `t.completada = true` dentro de un map
  devuelve `true` (¡la asignación vale eso!) y además muta el original.
- `{ ...t, campo: nuevoValor }` = copia del objeto con un cambio (spread).
- `null` = "no lo tengo, decide tú" → será tu 404 en la API.

## Lección 4 — Asincronismo y fetch (`04-asincronismo.js`)

```js
async function traerTarea(id) {                    // async = permiso para await
  try {
    const resp = await fetch(`https://.../todos/${id}`);  // promesa → respuesta
    const data = await resp.json();                       // texto → objetos JS
    return data;                                          // RETURN, no console.log
  } catch (error) {
    return null;                                          // internet falló → plan B
  }
}
```

**El modelo mental (mapa + simulador):**
- JS tiene UN hilo (call stack): una cosa a la vez.
- Lo lento (timers, red) se delega a las APIs de Node → al terminar, su callback
  hace fila en una cola.
- Event loop: con el stack vacío, mete callbacks — PRIMERO microtareas (promesas),
  DESPUÉS tareas (timers). Por eso `A, D, C, B`.
- `await` pausa SOLO tu función; el programa sigue.
- `fetch` solo lanza error si no puede conectar; un 404 llega como respuesta
  con `resp.ok === false`.

**Tus visuales:**
- 🏭 map/filter/find: https://claude.ai/code/artifact/41c66964-91a7-479a-a1f9-44583d17f719
- 🍽️ Restaurante asíncrono: https://claude.ai/code/artifact/b7a792a0-a4ed-4079-9825-b576abc406f7
- ⚙️ Simulador del event loop: https://claude.ai/code/artifact/bec9edf2-7600-4f82-85fc-e8467e922e04
- 🗺️ Mapa del asincronismo: `asincronismo-mapa.excalidraw` (y `diagrama-await-fetch.excalidraw`)

---

## ⚠️ Tus 3 errores recurrentes (vigílalos)

1. **`console.log` en vez de `return`** — apareció en las lecciones 2, 3 y 4.
   Una función que imprime no le sirve a nadie; una que devuelve, sí.
2. **`==` en vez de `===`** — cada uno baja un punto de la nota 😄
3. **Olvidar el caso "no encontrado"** — toda búsqueda necesita su `return null`.

## 🗺️ Dónde vas en la ruta

- [x] Fase 1 — Fundamentos (lecciones 1-3)
- [x] Fase 2 — JS moderno + asincronismo (lección 4)
- [ ] **Fase 3 — DOM: tu primer front** ← estás aquí (`05-dom/`)
- [ ] Fase 4 — Backend con Express
- [ ] Fase 5 — MySQL
- [ ] Fase 6 — Todo conectado: el gestor de tareas completo
