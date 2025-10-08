const express = require('express');
const { query } = require('../DB/database');

const router = express.Router();

// GET /api/jugadores - Obtener todos los jugadores
router.get('/', async (req, res) => {
  try {
    const jugadores = await query('SELECT * FROM players');
    console.log("Playaa ===>", jugadores);
    
    res.json({
      success: true,
      data: jugadores,
      count: jugadores.length
    });
  } catch (error) {
    console.error('Error al obtener jugadores:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los jugadores',
      error: error.message
    });
  }
});

// GET /api/jugadores/lakers-premium - Lakers con valor > 120
router.get('/lakers-premium', async (req, res) => {
  try {
    console.log('🔍 Buscando jugadores de Lakers...');
    
    // Primero veamos todos los jugadores de Lakers
    const todosLakers = await query('SELECT * FROM players WHERE equipo = "Lakers"');
    console.log('📋 Todos los Lakers:', todosLakers);
    
    // Ahora filtremos por valor > 120
    const jugadores = await query('SELECT * FROM players WHERE equipo = "Lakers" AND valor > 120');
    console.log('💰 Lakers con valor > 120:', jugadores);
    
    if (jugadores.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron jugadores de Lakers con valor mayor a 120',
        debug: {
          todosLakers: todosLakers,
          totalLakers: todosLakers.length
        }
      });
    }

    res.json({
      success: true,
      data: jugadores,
      count: jugadores.length,
      filtro: 'Lakers con valor > 120'
    });
  } catch (error) {
    console.error('Error al obtener jugadores Lakers premium:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los jugadores',
      error: error.message
    });
  }
});

// GET /api/jugadores/equipo/:equipo - Filtrar por equipo
router.get('/equipo/:equipo', async (req, res) => {
  const equipo = req.params.equipo;
  try {
    const jugadores = await query('SELECT * FROM players WHERE equipo = ?', [equipo]);
    
    if (jugadores.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No se encontraron jugadores del equipo: ${equipo}`
      });
    }

    res.json({
      success: true,
      data: jugadores,
      count: jugadores.length,
      equipo: equipo
    });
  } catch (error) {
    console.error('Error al obtener jugadores por equipo:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los jugadores',
      error: error.message
    });
  }
});

// GET /api/jugadores/equipo/:equipo/valor/:valor - Filtrar por equipo y valor
router.get('/equipo/:equipo/valor/:valor', async (req, res) => {
  const equipo = req.params.equipo;
  const valorMinimo = req.params.valor;
  try {
    const jugadores = await query(
      'SELECT * FROM players WHERE equipo = ? AND valor > ?', 
      [equipo, valorMinimo]
    );
    
    if (jugadores.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No se encontraron jugadores del equipo ${equipo} con valor mayor a ${valorMinimo}`
      });
    }

    res.json({
      success: true,
      data: jugadores,
      count: jugadores.length,
      equipo: equipo,
      valorMinimo: valorMinimo
    });
  } catch (error) {
    console.error('Error al obtener jugadores filtrados:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los jugadores',
      error: error.message
    });
  }
});

// GET /api/jugadores/:id - Obtener jugador por ID (DEBE ir al final)
router.get('/:id', async (req, res) => {
  const jugadorId = req.params.id;
  try {
    const jugadores = await query('SELECT * FROM players WHERE id = ?', [jugadorId]);
    
    if (jugadores.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Jugador no encontrado'
      });
    }

    res.json({
      success: true,
      data: jugadores[0]
    });
  } catch (error) {
    console.error('Error al obtener el jugador:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener el jugador',
      error: error.message
    });
  }
});

module.exports = router;
