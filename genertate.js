jugador1 = {
  nombre: "Cristiano Ronaldo",
  puntos: 7.5,
  precio: 180,
  equipo: undefined,
  posicion: "Delantero",
  estadisticas: {
    partidos_jugados: 500,
    goles: 444,
    asistencias: 258,
    tarjetas_amarillas: 15,
    tarjetas_rojas: 0,
  },
};

jugador2 = {
  nombre: "Lionel Messi",
  puntos: 8.5,
  precio: 200,
  equipo: undefined,
  posicion: "Delantero",
  estadisticas: {
    partidos_jugados: 600,
    goles: 500,
    asistencias: 300,
    tarjetas_amarillas: 10,
    tarjetas_rojas: 1,
  },
};

jugador3 = {
  nombre: "Neymar Jr",
  puntos: 5.0,
  precio: 150,
  equipo: undefined,
  posicion: "Delantero",
  estadisticas: {
    partidos_jugados: 400,
    goles: 200,
    asistencias: 100,
    tarjetas_amarillas: 20,
    tarjetas_rojas: 2,
  },
};

jugador4 = {
  nombre: "Luis Suarez",
  puntos: 4.0,
  precio: 150,
  equipo: undefined,
  posicion: "Delantero",
  estadisticas: {
    partidos_jugados: 400,
    goles: 300,
    asistencias: 150,
    tarjetas_amarillas: 25,
    tarjetas_rojas: 1,
  },
};

jugador5 = {
  nombre: "Sergio Ramos",
  puntos: 6.5,
  precio: 180,
  equipo: undefined,
  posicion: "Defensa",
  estadisticas: {
    partidos_jugados: 500,
    goles: 50,
    asistencias: 10,
    tarjetas_amarillas: 50,
    tarjetas_rojas: 5,
  },
};

jugador6 = {
  nombre: "Gerard Pique",
  puntos: 7.4,
  precio: 150,
  equipo: undefined,
  posicion: "Defensa",
  estadisticas: {
    partidos_jugados: 400,
    goles: 30,
    asistencias: 20,
    tarjetas_amarillas: 40,
    tarjetas_rojas: 4,
  },
};

const Equipo1 = {
  nombre: "Real Madrid",
  jugadores: [],
  presupuesto: 1000,
  puntos: 0,

  comprarJugador: function (jugador) {
    if (jugador.equipo === undefined) {
      if (jugador.precio <= this.presupuesto) {
        this.jugadores.push(jugador);
        this.presupuesto -= jugador.precio;
        jugador.equipo = this.nombre;
        this.puntos += jugador.puntos;
        console.log(`El Jugador ${jugador.nombre} fue comprado con éxito por el equipo ${this.nombre}`);
      } else {
        console.log(
          `No tienes suficiente presupuesto para comprar a ${jugador.nombre}`
        );
      }
    } else {
        if (jugador.equipo === this.nombre) {
            console.log(`El Jugador ${jugador.nombre} ya pertenece a este equipo`)
        }else{
            console.log(`El Jugador ${jugador.nombre} juega en el quipo ${jugador.equipo}`);
        }
    }
  },
};

const Equipo2 = {
  nombre: "Barcelona",
  jugadores: [],
  presupuesto: 1000,
  puntos: 0,

  comprarJugador: function (jugador) {
    if (jugador.equipo === undefined) {
      if (jugador.precio <= this.presupuesto) {
        this.jugadores.push(jugador);
        this.presupuesto -= jugador.precio;
        jugador.equipo = this.nombre;
        this.puntos += jugador.puntos;
        console.log(`El Jugador ${jugador.nombre} fue comprado con éxito por el equipo ${this.nombre}`);
      } else {
        console.log(
          `No tienes suficiente presupuesto para comprar a ${jugador.nombre}`
        );
      }
    } else {
        if (jugador.equipo === this.nombre) {
            console.log(`El Jugador ${jugador.nombre} ya pertenece a este equipo`)
        }else{
            console.log(`El Jugador ${jugador.nombre} juega en el quipo ${jugador.equipo}`);
        }
    }
  },
};


