const gestorTurnos = {
    jugadores: ['Jugador 1', 'Jugador 2', 'Jugador 3'],
    indiceActual: 0,

    siguienteTurno() {
        this.indiceActual = this.indiceActual === this.jugadores.length - 1 ? 0 : this.indiceActual + 1;
        const jugadorActual = this.jugadores[this.indiceActual];
        console.log(`Es el turno de ${jugadorActual}`);
    },

    obtenerJugadorActual() {
        console.log(`Es el turno de ${this.jugadores[this.indiceActual]}`);
    },
};


