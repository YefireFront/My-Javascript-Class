const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "nba",
});

app.use(cors());
app.use(express.json());

app.get("/api/jugadores", async (req, res) => {
  const [filas] = await db.query("SELECT * FROM jugadores");
  res.json(filas);
  
});

app.post("/api/jugadores", async (req, res) => {
  const { nombre, posicion, puntos } = req.body;

  if (!nombre || !posicion || puntos === undefined) {
    return res.status(400).json({ error: "Faltan datos: nombre, posicion y puntos" });
  }

  const [resultado] = await db.query(
    "INSERT INTO jugadores (nombre, posicion, puntos) VALUES (?, ?, ?)",
    [nombre, posicion, puntos]
  );

  res.status(201).json({ id: resultado.insertId, nombre, posicion, puntos });
});

app.delete("/api/jugadores/:id", async (req, res) => {
  const [resultado] = await db.query(
    "DELETE FROM jugadores WHERE id = ?",
    [req.params.id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ error: "No existe el jugador " + req.params.id });
  }

  res.json({ eliminado: Number(req.params.id) });
});

app.put("/api/jugadores/:id", async (req, res) => {
  const { puntos } = req.body;

  if (puntos === undefined) {
    return res.status(400).json({ error: "Faltan los puntos" });
  }

  const [resultado] = await db.query(
    "UPDATE jugadores SET puntos = ? WHERE id = ?",
    [puntos, req.params.id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ error: "No existe el jugador " + req.params.id });
  }

  res.json({ id: Number(req.params.id), puntos });
});


app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000 🚀");
}); 