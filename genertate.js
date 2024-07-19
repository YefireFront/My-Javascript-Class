class Jugador {
  constructor(nombre, puntos, precio, equipo, posicion, estadisticas) {
    this.nombre = nombre;
    this.puntos = puntos;
    this.precio = precio;
    this.equipo = equipo;
    this.posicion = posicion;
    this.estadisticas = estadisticas;
  }
}

const jugador1 = new Jugador(
  "Cristiano Ronaldo",
  7.5,
  180,
  undefined,
  "Delantero",
  {
    partidos_jugados: 500,
    goles: 444,
    asistencias: 258,
    tarjetas_amarillas: 15,
    tarjetas_rojas: 0,
  }
);

const jugador2 = new Jugador(
  "Lionel Messi",
  8.5,
  200,
  undefined,
  "Delantero",
  {
    partidos_jugados: 600,
    goles: 500,
    asistencias: 300,
    tarjetas_amarillas: 10,
    tarjetas_rojas: 1,
  }
);

const jugador3 = new Jugador(
  "Neymar Jr",
  5.0,
  150,
  undefined,
  "Delantero",
  {
    partidos_jugados: 400,
    goles: 200,
    asistencias: 100,
    tarjetas_amarillas: 20,
    tarjetas_rojas: 2,
  }
);

const jugador4 = new Jugador(
  "Luis Suarez",
  4.0,
  150,
  undefined,
  "Delantero",
  {
    partidos_jugados: 400,
    goles: 300,
    asistencias: 150,
    tarjetas_amarillas: 25,
    tarjetas_rojas: 1,
  }
);

const jugador5 = new Jugador(
  "Sergio Ramos",
  6.5,
  180,
  undefined,
  "Defensa",
  {
    partidos_jugados: 500,
    goles: 50,
    asistencias: 10,
    tarjetas_amarillas: 50,
    tarjetas_rojas: 5,
  }
);

const jugador6 = new Jugador(
  "Gerard Pique",
  7.4,
  150,
  undefined,
  "Defensa",
  {
    partidos_jugados: 400,
    goles: 30,
    asistencias: 20,
    tarjetas_amarillas: 40,
    tarjetas_rojas: 4,
  }
);

class Equipo {
  constructor(nombre, jugadores, presupuesto, puntos) {
    this.nombre = nombre;
    this.jugadores = jugadores;
    this.presupuesto = presupuesto;
    this.puntos = puntos;
  }

  comprarJugador(jugador) {
    if (jugador.equipo === undefined) {
      if (jugador.precio <= this.presupuesto) {
        this.jugadores.push(jugador);
        this.presupuesto -= jugador.precio;
        jugador.equipo = this.nombre;
        this.puntos += jugador.puntos;
        console.log(`El Jugador ${jugador.nombre} fue comprado con éxito por el equipo ${this.nombre}`);
      } else {
        console.log(`No tienes suficiente presupuesto para comprar a ${jugador.nombre}`);
      }
    } else {
      if (jugador.equipo === this.nombre) {
        console.log(`El Jugador ${jugador.nombre} ya pertenece a este equipo`);
      } else {
        console.log(`El Jugador ${jugador.nombre} juega en el quipo ${jugador.equipo}`);
      }
    }
  }
}

const equipo1 = new Equipo("Real Madrid", [], 1000, 0);
const equipo2 = new Equipo("Barcelona", [], 1000, 0);
const equipo3 = new Equipo("Manchester United", [], 1200, 0);
const equipo4 = new Equipo("Juventus", [], 900, 0);
const equipo5 = new Equipo("Bayern Munich", [], 1100, 0);
const equipo6 = new Equipo("Liverpool", [], 950, 0);

class Partido {
  constructor(equipoLocal, equipoVisitante, golesLocal, golesVisitante) {
    this.equipoLocal = equipoLocal;
    this.equipoVisitante = equipoVisitante;
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  jugarPartido() {
    console.log(`¡Comienza el partido entre ${this.equipoLocal.nombre} y ${this.equipoVisitante.nombre}!`);
    console.log(`Resultado final: ${this.equipoLocal.nombre} ${this.golesLocal} - ${this.golesVisitante} ${this.equipoVisitante.nombre}`);

    if (this.golesLocal > this.golesVisitante) {
      this.equipoLocal.puntos += 3;
      console.log(`${this.equipoLocal.nombre} gana el partido y suma 3 puntos.`);
    } else if (this.golesLocal < this.golesVisitante) {
      this.equipoVisitante.puntos += 3;
      console.log(`${this.equipoVisitante.nombre} gana el partido y suma 3 puntos.`);
    } else {
      this.equipoLocal.puntos += 1;
      this.equipoVisitante.puntos += 1;
      console.log(`El partido termina en empate y ambos equipos suman 1 punto.`);
    }
  }
}

const partido1 = new Partido(equipo1, equipo2, 2, 1);
partido1.jugarPartido();

const partido2 = new Partido(equipo3, equipo1, 0, 0);
partido2.jugarPartido();

const partido3 = new Partido(equipo2, equipo3, 3, 2);
partido3.jugarPartido();

const partido4 = new Partido(equipo1, equipo3, 1, 2);
partido4.jugarPartido();

const partido5 = new Partido(equipo4, equipo5, 2, 2);
partido5.jugarPartido();

const partido6 = new Partido(equipo6, equipo4, 1, 3);
partido6.jugarPartido();
