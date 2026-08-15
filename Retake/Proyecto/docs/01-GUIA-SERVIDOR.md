# ⚙️ GUÍA SERVIDOR — la base de Express (pasos 0-1)

> **Qué es este documento:** las líneas de arranque de `backend/servidor.js` —
> lo que existe ANTES de cualquier ruta — explicadas una por una, y las
> herramientas npm que lo sostienen. *(El pool de MySQL se explica en
> `03-GUIA-MYSQL`; las rutas, en `03-GUIA-MYSQL` sección 6 y `07-GUIA-CRUD`.)*

---

## PASO 0 — Las herramientas: npm y package.json

**Terminal en `Proyecto/backend`:**

```
npm init -y
npm install express cors mysql2
```

| Pieza | Qué es |
|---|---|
| `npm` | el instalador de librerías de Node (viene con Node) |
| `npm init -y` | crea `package.json`: la ficha del proyecto (nombre, versión y — lo importante — sus dependencias) |
| `npm install X` | descarga la librería a `node_modules/` y la anota en `"dependencies"` |
| `node_modules/` | el almacén de librerías descargadas. **Nunca se edita ni se sube a git**: es regenerable |
| `package-lock.json` | el recibo exacto de versiones instaladas (garantiza que otra máquina instale LO MISMO) |

**La prueba de que node_modules es desechable:** bórralo entero → `npm install` →
npm lee `package.json` y lo reconstruye idéntico. Por eso un proyecto se comparte
SIN node_modules: con la ficha basta.

---

## PASO 1 — servidor.js: las líneas base

### Los tres require (líneas 1-3)

```js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
```

| Pedazo | Qué significa |
|---|---|
| `require("...")` | "tráeme esa librería de node_modules y dámela en una caja" (el import clásico de Node, estilo CommonJS) |
| `express` | el framework que convierte Node en un servidor web con rutas |
| `cors` | el permiso de origen cruzado — ver abajo |
| `mysql2/promise` | el driver de MySQL en versión promesas → explicado a fondo en `03-GUIA-MYSQL` sección 2 |

### Crear la app (línea 5)

```js
const app = express();
```

| Pedazo | Qué significa |
|---|---|
| `express()` | ejecutar la librería fabrica TU servidor: un objeto con todo el arsenal (`.get`, `.post`, `.use`, `.listen`...) |
| `app` | la caja donde vive. Todo el archivo gira alrededor de ella |

*(Debajo va `const db = mysql.createPool({...})` — cada opción está explicada en `03-GUIA-MYSQL` sección 3.)*

### Los dos middlewares (un "middleware" = puesto de revisión por el que pasan TODAS las peticiones antes de llegar a las rutas)

```js
app.use(cors());
app.use(express.json());
```

| Línea | Qué hace y POR QUÉ está |
|---|---|
| `app.use(cors())` | 🌟 el navegador, por seguridad, bloquea que una página pida datos a un origen distinto del suyo. Tu front vive en `localhost:5500` (Live Server) y pide a `localhost:3000` → orígenes distintos → bloqueado. `cors()` hace que el servidor responda "acepto visitas de otros orígenes". Sin esta línea: error rojo de CORS en la Console del front |
| `app.use(express.json())` | el traductor de bodies JSON entrantes → los deja listos en `req.body`. Explicado en `07-GUIA-CRUD` 7.1 |

**El orden importa:** los middlewares se declaran ANTES de las rutas, porque la
petición los cruza en orden de llegada.

### Encender el motor (última línea del archivo)

```js
app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000 🚀");
});
```

| Pedazo | Qué significa |
|---|---|
| `.listen(3000, ...)` | "quédate despierto escuchando la puerta 3000". A partir de aquí el programa NO termina: espera peticiones para siempre (hasta Ctrl+C) |
| `3000` | el número de puerto — la "puerta" de tu máquina donde vive esta API (el front usa la 5500, MySQL la 3306) |
| `() => { console.log(...) }` | función que corre UNA vez, cuando el servidor ya está listo — el "ya estoy despierto" en la terminal |

**Encender / apagar:** terminal en `backend/` → `node servidor.js`. Cambiaste código → `Ctrl+C` y volver a encender (Node lee el archivo solo al arrancar).

---

## 🗺️ El mapa de servidor.js completo (y dónde está explicado cada bloque)

```js
require × 3            ← esta guía
const app = express()  ← esta guía
const db = createPool  ← 03-GUIA-MYSQL sección 3
app.use(cors())        ← esta guía
app.use(express.json())← 07-GUIA-CRUD 7.1
app.get    /jugadores  ← 03-GUIA-MYSQL secciones 4-6
app.post   /jugadores  ← 07-GUIA-CRUD paso 7
app.delete /jugadores/:id ← 07-GUIA-CRUD paso 8
app.put    /jugadores/:id ← 07-GUIA-CRUD paso 9
app.listen(3000)       ← esta guía
```

*Índice completo del proyecto: `00-INDICE.md`.*
