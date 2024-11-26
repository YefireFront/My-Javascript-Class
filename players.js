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
    this.jugadores
      .sort((a, b) => b.puntos - a.puntos)
      .forEach((jugador, index) => {
        console.log(
          `${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`
        );
      });
    console.log(""); // Espacio adicional para legibilidad
  },

  iniciar() {
    console.log(
      `Comienza la partida. Es el turno de ${
        this.jugadores[this.indiceTurnoActual].nombre
      }`
    );
  },
};

const anderson = {
  nombre: "Anderson",
  puntos: 0,
  anotarPuntos(cantidad) {
    if (!gestorDeTurnos.esTurno(this)) return;
    this.puntos += cantidad;
    console.log(`${this.nombre} anotó ${cantidad} puntos!`);
    gestorDeTurnos.mostrarTablaDePosiciones();
    gestorDeTurnos.finalizarTurno();
  },
};

const mateo = {
  nombre: "Mateo",
  puntos: 0,
  anotarPuntos(cantidad) {
    if (!gestorDeTurnos.esTurno(this)) return;
    this.puntos += cantidad;
    console.log(`${this.nombre} anotó ${cantidad} puntos!`);
    gestorDeTurnos.mostrarTablaDePosiciones();
    gestorDeTurnos.finalizarTurno();
  },
};

const brandon = {
  nombre: "Brandon",
  puntos: 0,
  anotarPuntos(cantidad) {
    if (!gestorDeTurnos.esTurno(this)) return;
    this.puntos += cantidad;
    console.log(`${this.nombre} anotó ${cantidad} puntos!`);
    gestorDeTurnos.mostrarTablaDePosiciones();
    gestorDeTurnos.finalizarTurno();
  },
};

const valery = {
  nombre: "Valery",
  puntos: 0,
  anotarPuntos(cantidad) {
    if (!gestorDeTurnos.esTurno(this)) return;
    this.puntos += cantidad;
    console.log(`${this.nombre} anotó ${cantidad} puntos!`);
    gestorDeTurnos.mostrarTablaDePosiciones();
    gestorDeTurnos.finalizarTurno();
  },
};
