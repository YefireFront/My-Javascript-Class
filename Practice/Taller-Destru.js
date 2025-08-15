
const personajeAnime = {
  nombre: "Monkey D. Luffy",
  edad: 19,
  tripulacion: {
    nombre: "Sombrero de Paja",
    barco: "Thousand Sunny",
    miembros: [
      { nombre: "Roronoa Zoro", rol: "Espadachín", recompensa: 320_000_000 },
      { nombre: "Nami", rol: "Navegante", recompensa: 66_000_000 },
      { nombre: "Sanji", rol: "Cocinero", recompensa: 330_000_000 }
    ]
  },
  habilidades: ["Gomu Gomu no Mi", "Haki de Observación", "Haki de Armadura", "Haki del Rey"],
  recompensas: {
    actual: 1_500_000_000,
    anteriores: [30_000_000, 100_000_000, 400_000_000]
  },
  origen: {
    isla: "Fuschia",
    mar: "East Blue",
    mentor: { nombre: "Shanks", apodo: "Pelirrojo" }
  }
};


// Destructuring básico de propiedades
// Extrae de personajeAnime las variables nombre, edad y habilidades.

const {nombre , edad, habilidades} = personajeAnime

// Destructuring anidado
// Extrae el nombre de la tripulación (tripulacion.nombre) y el nombre del barco (tripulacion.barco) en variables separadas.


const {nombre: tripulacion, barco} = personajeAnime.tripulacion


// Destructuring de arrays dentro de objetos
// Extrae el nombre del primer miembro de la tripulación y su recompensa.

// const {nombre: primerMiembro, recompensa : miembroRecompensa } = personajeAnime.tripulacion.miembros[0]

const {
  tripulacion: {
    miembros: [{ nombre: primerMiembro, recompensa: recompensaPrimerMiembro }]
  }
} = personajeAnime;

const {
  tripulacion: {
    miembros: [
      , // ← dejamos vacío para saltar el primer miembro
      { nombre: segundoMiembro, recompensa: recompensaSegundo },
      { nombre: tercerMiembro, recompensa: recompensaTercero }
    ]
  }
} = personajeAnime;

// console.log(`Subcapitan: ${primerMiembro}\nRecompensa: ${recompensaPrimerMiembro}`)
 


// Destructuring con arrays independientes
// Extrae los tres primeros valores del array recompensas.anteriores en variables primeraRecompensa, segundaRecompensa, terceraRecompensa.
