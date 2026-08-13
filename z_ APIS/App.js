// ===============================
// PASOS PARA CREAR UNA API BÁSICA CON NODE.JS (usando Express)
// ===============================

// 1. Crear carpeta del proyecto y entrar en ella
//    mkdir mi-api && cd mi-api

// 2. Inicializar el proyecto (genera package.json)
//    npm init -y

// 3. Instalar Express (framework mínimo para crear la API)
//    npm install express

// 4. Crear un archivo, por ejemplo server.js, con este código:

const express = require('express');   // importamos express
const app = express();                // creamos la app
app.use(express.json());              // permite leer JSON en el body
app.use(express.static('public'));    // sirve archivos HTML de la carpeta public

// 5. Definir rutas (endpoints)
app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nombre: 'Yefire' }]);
});

app.post('/usuarios', (req, res) => {
  res.json({ mensaje: 'Usuario creado', data: req.body });
});

// 6. Levantar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

// 7. Ejecutar el servidor
//    node server.js

// 8. Probar la API (navegador, Postman o curl)
//    curl http://localhost:3000

// ===============================
// PASOS PARA CONSULTAR UNA BASE DE DATOS MYSQL
// ===============================

// 9. Instalar el driver de MySQL
//    npm install mysql2

// 10. Importar y crear la conexión (usa tus propios datos)
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mi_base'
});

// 11. Crear un endpoint que consulte la base de datos
app.get('/productos', (req, res) => {
  conexion.query('SELECT * FROM productos', (err, resultados) => {
    if (err) throw err;
    res.json(resultados);
  });
});

// 12. Ejecutar node server.js y probar
//    curl http://localhost:3000/productos
