class Jugador {
  constructor(nombre, posicion, precio, habilidad, puntuacion) {
    this.nombre = nombre;
    this.posicion = posicion;
    this.precio = precio;
    this.habilidad = habilidad;
    this.puntuacion = puntuacion;
  }

  mostrarInfo() {
    console.log( `
    Nombre: ${this.nombre}
    Posición: ${this.posicion}
    Precio: ${this.precio}
    Habilidad: ${this.habilidad}
    Puntuación: ${this.puntuacion}
    `)
  }
}

class Equipo {
  constructor(nombre) { 
    this.nombre = nombre;
    this.presupuesto = 1000000; // Presupuesto inicial
    this.jugadores = [];
  }

  comprarJugador(jugador) {
    if (this.presupuesto >= jugador.precio) {
      this.jugadores.push(jugador);
      this.presupuesto -= jugador.precio;
      console.log(`${jugador.nombre} ha sido comprado por ${this.nombre}.`);
    } else {
      console.log(`No hay suficiente presupuesto para comprar a ${jugador.nombre}.`);
    }
  }

  mostrarJugadores() {
    console.log(`Jugadores en el equipo ${this.nombre}:`);
    this.jugadores.forEach(jugador => console.log(jugador.mostrarInfo()));
  }

  mostrarPresupuesto() {
    console.log(`Presupuesto restante: ${this.presupuesto}`);
  }
}



// Crear 5 jugadores
const jugador1 = new Jugador('Lionel Messi', 'Delantero', 1200000, 95, 97);
const jugador2 = new Jugador('Cristiano Ronaldo', 'Delantero', 1100000, 94, 96);
const jugador3 = new Jugador('Kevin De Bruyne', 'Centrocampista', 1000000, 92, 93);
const jugador4 = new Jugador('Virgil van Dijk', 'Defensa', 900000, 90, 91);
const jugador5 = new Jugador('Alisson Becker', 'Portero', 850000, 89, 90);

// Mostrar información de los jugadores
jugador1.mostrarInfo();
jugador2.mostrarInfo();
jugador3.mostrarInfo();
jugador4.mostrarInfo();
jugador5.mostrarInfo();

