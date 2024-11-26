const gestorDeTurnos = {
  jugadores: [],
  indiceTurnoActual: 0,

  agregarJugador(jugador) {
    this.jugadores.push(jugador);
  },

  esTurno(jugador) {
    if (this.jugadores[this.indiceTurnoActual] !== jugador) {
      console.log(
        `No es tu turno, ${jugador.nombre}. Es el turno de ${
          this.jugadores[this.indiceTurnoActual].nombre
        }`
      );
      return false;
