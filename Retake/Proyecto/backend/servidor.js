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



app.get("/api/jugadores", async (req, res) => {
  const [filas] = await db.query("SELECT * FROM jugadores");
  res.json(filas);
});

app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000 🚀");
});