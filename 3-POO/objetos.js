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
const jugador3 = new Jugador("Sergio Ramos", "Defensor");

// Crear equipo de fútbol
const equipoBarcelona = new EquipoFutbol("FC Barcelona");
const equipoRalMadrid = new EquipoFutbol("Real Madrid");
const equipoLiverpool = new EquipoFutbol("Liverpool");

// Agregar Jugador 
equipoBarcelona.agregarJugador(jugador1);
equipoRalMadrid.agregarJugador(jugador2);

// Presentar equipo y jugadores
equipoBarcelona.presentarEquipo();
equipoRalMadrid.presentarEquipo();

  /**NBA */
 
  class Player {
    constructor(name, age, team) {
      this.name = name;
      this.age = age;
      this.team = team;
    }
  
    getInfo() {
      return `${this.name}, ${this.age} años, ${this.team}`;
    }
  }
  
  class Team {
    constructor(name, city) {
      this.name = name;
      this.city = city;
      this.players = [];
    }
  
    addPlayer(player) {
      this.players.push(player);
    }
  
    getPlayersList() {
      return this.players.map(player => player.name);
    }
  }
  
  const leBron = new Player("LeBron James", 36, "Los Angeles Lakers");
  const steph = new Player("Stephen Curry", 33, "Golden State Warriors");
  
  // const lakers = new Team("Los Angeles Lakers", "Los Angeles");
  const warriors = new Team("Golden State Warriors", "San Francisco");
  const Bulls = new Team("Chicago Bulss", "Chcago");
  

  

