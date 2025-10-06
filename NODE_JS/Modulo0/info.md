# 🚀 Módulo 0: Preparación del Entorno y Primeros Pasos con Node.js

Bienvenido(a) al módulo de **preparación**. En este módulo, sentaremos las bases necesarias para trabajar de forma efectiva con **Node.js**. Cubriremos desde la instalación de las herramientas esenciales hasta la ejecución de nuestro primer programa.

---

## 🛠 Temas Cubiertos

Esta sección detalla los conceptos fundamentales que exploraremos:

### 1. ¿Qué es Node.js y para qué sirve?

**Node.js** es un **entorno de ejecución (runtime)** de JavaScript construido con el motor V8 de Chrome. Permite ejecutar código JavaScript **fuera del navegador**.

**¿Para qué sirve?**
* **Desarrollo de Back-end (Servidores):** Su principal uso. Permite crear APIs, servidores web, y gestionar bases de datos.
* **Herramientas de Línea de Comandos (CLI):** Creación de utilidades personalizadas.
* **Aplicaciones en Tiempo Real:** Ideal para chats y juegos gracias a su arquitectura asíncrona.

### 2. Instalación de Node.js y NPM

Aprenderás a instalar las dos herramientas esenciales:

* **Node.js:** El entorno de ejecución principal.
* **NPM (Node Package Manager):** El gestor de paquetes estándar de Node.js. Permite instalar, compartir y gestionar librerías y dependencias en tu proyecto.

> **Verificación:** Después de la instalación, verifica que todo funcione abriendo tu terminal y ejecutando:
> ```bash
> node -v
> npm -v
> ```

### 3. Cómo usar la Terminal y Comandos Básicos

La terminal (o línea de comandos) será tu herramienta principal para interactuar con Node.js. Es crucial dominar algunos comandos básicos:

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **`ls`** (o `dir` en Windows) | Lista los archivos y carpetas del directorio actual. | `ls` |
| **`cd <carpeta>`** | Cambia al directorio especificado. | `cd src` |
| **`cd ..`** | Sube un nivel en la estructura de directorios. | `cd ..` |
| **`mkdir <nombre>`** | Crea un nuevo directorio (carpeta). | `mkdir proyecto` |

### 4. Primer Programa en Node.js (Hola Mundo)

¡Es hora de escribir y ejecutar tu primer código!

1.  Crea un archivo llamado **`app.js`**.
2.  Escribe el código:
    ```javascript
    console.log("¡Hola Mundo desde Node.js!");
    ```
3.  Ejecuta el archivo usando Node.js en tu terminal:
    ```bash
    node app.js
    ```

### 5. Diferencia entre Node.js y JavaScript en el Navegador

Es vital entender que, aunque ambos usan JavaScript, el entorno es distinto:

| Característica | JavaScript en el Navegador | Node.js |
| :--- | :--- | :--- |
| **Entorno** | El navegador (Chrome, Firefox, etc.) | El servidor o tu máquina local |
| **Acceso al DOM** | **SÍ**, puede manipular elementos HTML. | **NO**, no tiene elementos visuales. |
| **Acceso al Sistema** | **Limitado** (por seguridad). | **Total** (puede leer/escribir archivos). |
| **Módulos Principales** | `window`, `document` | `fs` (File System), `http` |

---

## ✅ Próximos Pasos

Una vez que hayas revisado y completado la instalación de Node.js, estás listo para avanzar al Módulo 1.