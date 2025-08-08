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
    // console.log(`Hola, soy ${this.nombre} del ${this.equipo}`);
  }
};




// ---------------------------
// Recorrer propiedades
// ---------------------------

for (let clave in jugadorBasket) {
  // console.log(`${clave}: ${jugadorBasket[clave]}`);
}


const enteruPares = Object.entries( entrenador);





let personaje1 = {
  nombre: 'Clark Kent',
  codeName: 'Superman',
  vivo: true,
  edad: 35,
  planeta: 'Krypton',
  poderes: ['Vuelo', 'Super fuerza', 'Vista de rayos X', 'Super velocidad'],
  debilidad: 'Kryptonita',
  trabajo: 'Reportero',
  lugar: 'Smallville',
  direccion : {
    calle: 'Main St',
    numero: 123,
    ciudad: 'Metropolis',
    pais: 'USA'
  },
}


const perros = ['Labrador', 'Bulldog', 'Beagle', 'Poodle', 'Chihuahua', 'Dachshund'];

// console.log(`${personaje1.direccion.calle}`)
// console.log(`cantidad de poderes ${personaje1.poderes.length}`)


const jugadoresBocaJrs ={
  jugador1: {
    nombre: 'Carlos Tevez',
    posicion: 'Delantero',
    goles: 100
  },
  jugador2: {
    nombre: 'Juan Román Riquelme',
    posicion: 'Mediocampista',
    goles: 80,
    // asis : 125
  },
  jugador3: {
    nombre: 'Fernando Gago',
    posicion: 'Mediocampista',
    goles: 50
  }
}


const {nombre, posicion, goles} = jugadoresBocaJrs.jugador1

// console.log(nombre, goles )

const {nombre : Playername, posicion : playerposiction , goles : playerScore, asis : playerAsist = 0} = jugadoresBocaJrs.jugador2

// console.log(`el jugador${Playername}  marco ${playerScore} goles y tiene ${playerAsist} asistencias`)

//mutating variables 

let perro1 = 'hachiko'
let perro2 = 'snoopy'

const obj = {perro1 : 'super can', perro2 : 'super snoopy'};
//se tiene que usar parentesis para evitar error de sintaxis por que se confunde con una declaracion de bloque
({perro1, perro2} = obj);
// console.log(perro1, perro2); 


//nestes objects
const jugador = {
  nombre: 'Lionel Messi',
  edad: 36,
  equipo: {
    nombre: 'Inter Miami',
    liga: 'MLS',
    estadio: {
      nombreStadio: 'DRV PNK Stadium',
      capacidad: 18000
    }
  }
};


const readPlayer = function  ({nombre , goles=0, asistencias=0}){
  // console.log(`el jugador ${nombre} marco ${goles} goles y ${asistencias} asistencias`)
}



readPlayer({
  asistencias : 125,
  goles: 50,
  nombre: 'Fernando Gago',

})



const superARG = {
  ...jugadoresBocaJrs.jugador2,
  campeonatos : 12,
  campeonatosNacionales : 26
}




// console.log(superARG)







const Player1 = {
    nombre: "Kylian Mbappé",
    edad: 24,
    equipo: "Paris Saint-Germain",
    nacionalidad: "Francia",
    posicion: "Delantero",
    salarioAnual: 50000000,
    estadisticas: {
        partidosJugados: 300,
        goles: 200,
        asistencias: 100,
        tarjetasAmarillas: 20,
        tarjetasRojas: 0
    },
    premios: [
        { nombre: "Balón de Oro", año: 2022, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2019, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2018, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesionado: false,
};

const Player2 = {
  nombre: "Sergio Ramos ",
  edad: 37,
  equipo: "Monterrey",    
  nacionalidad: "España",
  posicion: "Defensor",
  premios: [
      { nombre: "Champions League", año: 2014, descripcion: "Campeón con Real Madrid" },
      { nombre: "Eurocopa", año: 2008, descripcion: "Campeón con España" },
      { nombre: "Mundial de Clubes", año: 2016, descripcion: "Campeón con Real Madrid" }
  ],
  lesionado: true,
};






// console.log(`El jugador ${Player1.nombre} juega en el equipo ${Player1.equipo} y  ha jugado ${Player1.estadisticas.partidosJugados} partidos`);
// console.log(`El jugador ${Player2.nombre} juega en el equipo ${Player2.equipo} y  ha jugado ${Player2.estadisticas?.partidosJugados} partidos`);




//objet urterable for

for (const [clave, valor] of Object.entries(Player2)) {
  // console.log(`${clave}: ${valor}`);
}




const pro = Object.keys(Player2)
// console.log(pro)


const val = Object.values(Player1)
console.log(val)


for (const element of pro) {
  // console.log(`${element}`)
  
}



let ent = Object.entries(Player1)

console.log(ent)