# 🔑 PASO 16 — Login sencillo: "¿quién eres?" antes de entrar

> ⏳ **Pendiente — este documento es el TEMARIO del paso, no la guía línea por línea.**
> La guía completa se escribe al llegar al paso, partiendo del código real de ese momento.
>
> **Se construye:** página de login; si el email y la contraseña coinciden con la tabla
> `usuarios`, entras a la app y te saluda por tu nombre.
> **Se aprende:** NADA nuevo de cero — este paso es el gran repaso: formulario + POST +
> `req.body` + SELECT + estado del front, todo junto en una función real.
>
> 📌 **Alcance:** esto es una demo educativa que corre en tu computador, sin datos
> reales de nadie. Por eso NO entramos en temas de seguridad (hashing, tokens, etc.) —
> eso pertenece a apps en producción, no a este curso.

---

## El plano

```
[ login.html ]                    [ Express :3000 ]           [ MySQL ]
 formulario ──POST /api/login──▶  SELECT ... WHERE  ──────▶   tabla usuarios
 email + pass                     email=? AND password=?
     ◀── { ok, nombre } ────────────────┘
 guarda "sesión" en localStorage y salta a index.html
```

---

## Los sub-pasos y sus temas

### 16.1 — La tabla `usuarios` (SQL puro, como el paso 3)
- **Se construye:** `CREATE TABLE usuarios` con `id`, `nombre`, `email`, `password`;
  2-3 usuarios metidos a mano con `INSERT` desde Workbench.
- **Repasa:** `CREATE TABLE`, `INSERT`, `SELECT ... WHERE` (paso 3).
- **Nuevo:** `UNIQUE` en el email — la base rechaza duplicados por ti.

### 16.2 — La página `login.html`
- **Se construye:** segunda página HTML con un formulario de 2 campos y su `app-login.js`.
- **Repasa:** estructura HTML + `<form>` + `preventDefault` (pasos 2 y 7).
- **Nuevo:** un proyecto con DOS páginas — y `input type="password"` (los puntitos ●●●).

### 16.3 — La ruta `POST /api/login`
- **Se construye:** ruta que recibe email + contraseña y busca la pareja exacta en la tabla.
- **Repasa:** `req.body`, `db.query` con `?`, destructuring (pasos 5 y 7).
- **Nuevo:** una consulta con DOS condiciones: `WHERE email = ? AND password = ?`;
  y el status `401 Unauthorized` para "esa pareja no existe" (se suma al 404 y al 500).

### 16.4 — Recordar quién entró: `localStorage`
- **El problema:** haces login… saltas a `index.html`… y la página nueva no sabe nada.
  Cada página HTML empieza de cero.
- **Se construye:** al recibir `{ ok: true, nombre: "Yeffer" }` se guarda el nombre,
  se salta a `index.html` con `location.href`, y allí se muestra "Hola, Yeffer 👋".
- **Nuevo:** `localStorage.setItem` / `getItem` / `removeItem` — la memoria del
  navegador que sobrevive al F5 y al cambio de página.
- Botón **"Cerrar sesión"** = borrar el dato y volver a `login.html`.

### 16.5 — *(opcional)* La app reacciona a la sesión
- **Se construye:** si no hay nadie logueado, `index.html` te manda a `login.html`;
  el formulario de crear jugador solo aparece con sesión iniciada.
- **Repasa:** ESTADO de la interfaz — el mismo patrón del paso 11 (¿creando o editando?),
  ahora con ¿dentro o fuera?

### 16.6 — *(opcional)* Registro: `POST /api/registro`
- **Se construye:** formulario "crear cuenta" que hace INSERT en `usuarios`.
- **Repasa:** es literalmente el mismo patrón del POST de jugadores (paso 7).
- **Nuevo:** status `409 Conflict` cuando el email ya está registrado.

---

## Conceptos: casi todo es repaso

| Ya lo sabes (de pasos anteriores) | Nuevo en este paso |
|---|---|
| formulario + `preventDefault` (paso 7) | `input type="password"` |
| `POST` + `req.body` (paso 7) | `WHERE` con dos condiciones (`AND`) |
| status 201/404/500 (pasos 7-8) | `401` y `409` |
| `SELECT ... WHERE` (pasos 3 y 5) | `localStorage` |
| estado de la interfaz (paso 11) | `location.href` (saltar de página) |

## Sesiones estimadas

- **Sesión 1:** 16.1 + 16.2 + 16.3 — tabla, página y ruta: el login ya funciona.
- **Sesión 2:** 16.4 — `localStorage` y cerrar sesión. Los opcionales si sobra energía.
