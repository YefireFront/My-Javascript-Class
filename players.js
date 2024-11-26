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
    }
    return true;
  },

  finalizarTurno() {
    this.indiceTurnoActual =
      (this.indiceTurnoActual + 1) % this.jugadores.length;
    console.log(
      `Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`
    );
  },

  mostrarTablaDePosiciones() {
    console.log("\nTabla de Posiciones:");
