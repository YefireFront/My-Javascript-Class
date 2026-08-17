# 🔐 PASO 16 — Login: usuarios, contraseñas y rutas protegidas

> ⏳ **Pendiente — este documento es el TEMARIO del paso, no la guía línea por línea.**
> La guía completa se escribe al llegar al paso, partiendo del código real de ese momento.
>
> **Se construye:** registro + login de usuarios; solo quien inicia sesión puede crear/editar/borrar jugadores.
> **Se aprende:** autenticación de verdad — hashing con bcrypt, tokens JWT, middleware, variables de entorno.

---

## Por qué va al final

El login toca **las tres capas a la vez**: tabla nueva en MySQL, rutas y middleware
en Express, y estado ("¿quién soy?") en el front. Necesita todo lo aprendido antes:
`POST` + `req.body` (paso 7), status codes (paso 8), y idealmente `Router` (paso 15)
para que las rutas de auth vivan en su propio archivo.

## El plano

```
[ login.html ]                [ Express :3000 ]              [ MySQL ]
 formulario ──POST /api/login──▶ bcrypt.compare ──SELECT──▶  tabla usuarios
     ◀────────── token JWT ──────────┘
 guarda token
     │
[ index.html ]
 fetch con "Authorization: Bearer <token>" ──▶ middleware verifica ──▶ deja pasar o 401
```

---

## Los sub-pasos y sus temas

### 16.1 — La tabla `usuarios` (SQL puro, como el paso 3)
- **Se construye:** `CREATE TABLE usuarios` con `id`, `email`, `password_hash`.
- **Temas:** `UNIQUE` en el email (la base rechaza duplicados por ti); por qué la
  columna se llama `password_hash` y no `password` — adelanto del tema estrella.

### 16.2 — Registro: `POST /api/registro` + bcrypt ⭐ (el tema más importante)
- **Se construye:** ruta que recibe email + contraseña y guarda el usuario.
- **Temas:**
  - **NUNCA se guarda la contraseña en texto plano.** Si te roban la base, te roban
    todas las cuentas. Es la regla número 1 de seguridad web.
  - **Hash:** función de un solo sentido — de `"1234"` sale `"$2b$10$N9qo8u..."`,
    pero del hash no se puede volver a `"1234"`.
  - `npm install bcrypt` → `bcrypt.hash(password, 10)` (el `10` = rondas de "sal").
  - Status `409 Conflict` cuando el email ya existe (nuevo código para la colección).

### 16.3 — Login: `POST /api/login` + comparar hashes
- **Se construye:** ruta que verifica email + contraseña.
- **Temas:**
  - Si no puedes "des-hashear"… ¿cómo compruebas la contraseña? →
    `bcrypt.compare(loQueEscribió, elHashGuardado)` — hashea lo recibido y compara.
  - Status `401 Unauthorized` — y el mismo mensaje genérico ("credenciales inválidas")
    tanto si falla el email como la contraseña, para no dar pistas a un atacante.

### 16.4 — El problema de la memoria: HTTP no recuerda quién eres
- **El problema:** hiciste login… y en el siguiente fetch el servidor ya no sabe
  quién eres. Cada petición HTTP empieza de cero (*stateless*).
- **Temas:**
  - Las dos soluciones clásicas: **sesiones** (el servidor recuerda) vs
    **tokens JWT** (el cliente lleva un "carnet firmado"). Usamos JWT.
  - `npm install jsonwebtoken` → `jwt.sign(datos, SECRETO, { expiresIn: "2h" })`.
  - Qué hay dentro de un token (header.payload.firma) — se puede LEER pero no
    FALSIFICAR sin el secreto.
  - **Variables de entorno:** el secreto no va en el código → `npm install dotenv`,
    archivo `.env`, y `.gitignore` (si el secreto llega a GitHub, ya no es secreto).

### 16.5 — Middleware: el portero de las rutas 🏔️ (el concepto nuevo grande)
- **Se construye:** función `verificarToken` que protege POST, PUT y DELETE de
  jugadores; los GET siguen públicos.
- **Temas:**
  - Qué es un **middleware**: función que se ejecuta ANTES de la ruta —
    `(req, res, next)` y la llamada a `next()` ("puedes pasar").
  - Ya usaste dos sin saberlo: `cors()` y `express.json()` — ahora escribes el tuyo.
  - Leer el header `Authorization: Bearer <token>` y `jwt.verify`.
  - `401` (no sé quién eres) vs `403` (sé quién eres, pero no puedes) — la
    diferencia entre **autenticación** y **autorización**.

### 16.6 — El front: guardar el token y usarlo
- **Se construye:** `login.html` con su formulario; tras login OK se guarda el token
  y se vuelve a `index.html`; botón "Cerrar sesión".
- **Temas:**
  - `localStorage` — memoria del navegador que sobrevive al F5 (espejo de la
    "memoria" que el servidor no tiene).
  - Añadir el header a los fetch: `headers: { Authorization: "Bearer " + token }`.
  - Estado de la interfaz según login (mostrar/ocultar formulario y botones ✏️🗑️) —
    el mismo patrón de ESTADO del paso 11.
  - Logout = `localStorage.removeItem("token")`. No hay que "avisar" al servidor.

### 16.7 — *(opcional)* Roles: admin vs usuario normal
- **Se construye:** columna `rol` en usuarios; solo admin borra jugadores.
- **Temas:** meter datos extra en el payload del JWT; middleware de autorización
  encadenado (`verificarToken` → `soloAdmin`). Aquí el `403` cobra sentido pleno.

---

## Conceptos nuevos vs ya conocidos

| Ya lo sabes (de pasos anteriores) | Nuevo en este paso |
|---|---|
| `POST` + `req.body` (paso 7) | hash y `bcrypt` |
| status codes 201/404/500 (pasos 7-8) | `401`, `403`, `409` |
| `fetch` con headers y body (paso 7) | header `Authorization` |
| `cors()` y `express.json()` como cajas negras | escribir TU propio middleware |
| `dataset` y estado del front (pasos 8, 11) | `localStorage` y JWT |
| tabla `jugadores` (paso 3) | tabla `usuarios` con `UNIQUE` |

## Errores típicos que vamos a esquivar

1. Guardar contraseñas en texto plano (jamás, ni "para probar").
2. Subir el `.env` con el secreto a GitHub → `.gitignore` desde el minuto 1.
3. Mensajes de error que regalan pistas ("el email no existe" ❌ → "credenciales inválidas" ✅).
4. Proteger solo el front (ocultar el botón 🗑️) y dejar la ruta DELETE abierta —
   la seguridad vive en el SERVIDOR; el front solo decora.

## Sesiones estimadas

- **Sesión 1:** 16.1 + 16.2 (tabla + registro + bcrypt).
- **Sesión 2:** 16.3 + 16.4 (login + JWT + `.env`).
- **Sesión 3:** 16.5 (middleware) — el concepto grande, sin prisa.
- **Sesión 4:** 16.6 (front completo). 16.7 si sobra energía.
