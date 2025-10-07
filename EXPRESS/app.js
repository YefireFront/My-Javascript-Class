const express = require('express');
const { testConnection } = require('./database');
const jugadoresRouter = require('./routes/jugadores');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Probar conexión a la base de datos al iniciar
testConnection();

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Ruta básica para probar
app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor Express funcionando con MySQL',
    status: 'OK'
  });
});

// Usar el router de jugadores
app.use('/api/jugadores', jugadoresRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
