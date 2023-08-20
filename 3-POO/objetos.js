class Jugador {
  constructor(nombre, posicion) {
    this.nombre = nombre;
    this.posicion = posicion;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} y juego como ${this.posicion}.`);
  }
}

class EquipoFutbol {
  constructor(nombre) {
    this.nombre = nombre;
    this.jugadores = [];
  }

  agregarJugador(jugador) {
    this.jugadores.push(jugador);
    console.log(`${jugador.nombre} ha sido añadido al equipo ${this.nombre}.`);
  }

  presentarEquipo() {
    console.log(`Equipo: ${this.nombre}`);
    console.log("Jugadores:");
    this.jugadores.forEach((jugador) => {
      console.log(`- ${jugador.nombre} (${jugador.posicion})`);
    });
  }
}

// Crear jugadores
const jugador1 = new Jugador("Lionel Messi", "Delantero");
const jugador2 = new Jugador("Sergio Ramos", "Defensor");

// Crear equipo de fútbol
const equipoBarcelona = new EquipoFutbol("FC Barcelona");
const equipoRalMadrid = new EquipoFutbol("Real Madrid");

// Agregar Jugador 
equipoBarcelona.agregarJugador(jugador1);
equipoRalMadrid.agregarJugador(jugador2);

// Presentar equipo y jugadores
equipoBarcelona.presentarEquipo();
equipoRalMadrid.presentarEquipo();
