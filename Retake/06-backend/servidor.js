const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send("Hola estudiantes");
});

app.get("/alumnos", (req, res) => {
    res.send("Aquí están los alumnos");
});

// La ruta de la API: responde la lista de jugadores en JSON
app.get("/api/jugadores", (req, res) => {
  console.log("me pidieron los jugadores"); // corre una vez POR petición
  res.json(jugadores);
});

app.get("/saludo", (req, res) => {
    res.send("<h1>Hola estudiantes</h1>");
});

app.get("/players", (req, res) => {
    res.json(jugadores);
});


app.listen(3000, () => {
    console.log("corriendo en el 3000 🚀");
});