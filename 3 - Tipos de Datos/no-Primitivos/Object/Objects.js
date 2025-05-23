// ¿Qué es un objeto?
// ---------------------------
// Es una colección de pares clave:valor (propiedades)
// Se usa para representar entidades del mundo real

// ✅ Crear un objeto con llaves {}
let jugadorFutbol = {
  nombre: "Lionel Messi",
  edad: 36,
  equipo: "Inter Miami",
  goles: 820,
  activo: true
};

let jugadorBasket = {
  nombre: "Stephen Curry",
  edad: 35,
  equipo: "Golden State Warriors",
  triples: 3500,
  activo: true
}



// ---------------------------
// Acceder a propiedades
// ---------------------------

console.log(jugadorFutbol.nombre);      
console.log(jugadorBasket["triples"]);  

// ---------------------------
// Modificar propiedades
// ---------------------------

jugadorFutbol.goles += 1;
jugadorBasket.triples = 3600;

// ---------------------------
// Agregar nuevas propiedades
// ---------------------------

jugadorFutbol.nacionalidad = "Argentina";
jugadorBasket.altura = "1.88m";

// ---------------------------
// Eliminar propiedades
// ---------------------------

delete jugadorFutbol.activo;



// ---------------------------
// Objetos anidados
// ---------------------------

let videojuego = {
  titulo: "Zelda: Breath of the Wild",
  plataforma: "Nintendo Switch",
  stats: {
    jugadores: 1,
    horas: 100,
    dificultad: "Media"
  }
};



// ---------------------------
// Métodos en objetos
// ---------------------------

let entrenador = {
  nombre: "Pep Guardiola",
  equipo: "Manchester City",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} del ${this.equipo}`);
  }
};




// ---------------------------
// Recorrer propiedades
// ---------------------------

for (let clave in jugadorBasket) {
  console.log(`${clave}: ${jugadorBasket[clave]}`);
}


const enteruPares = Object.entries( entrenador);