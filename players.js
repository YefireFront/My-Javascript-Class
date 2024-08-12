

const gestorDeTurnos = {
    jugadores: [],
    indiceTurnoActual: 0,

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    },

    esTurno(jugador) {
        if (this.jugadores[this.indiceTurnoActual] !== jugador) {
            console.log(`No es tu turno, ${jugador.nombre}. Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
            return false;
        }
        return true;
    },

    finalizarTurno() {
        this.indiceTurnoActual = (this.indiceTurnoActual + 1) % this.jugadores.length;
        console.log(`Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
    },

    iniciar() {
        console.log(`Comienza la partida. Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
    }
};

const LeBron = {
    nombre: "LeBron James",
    puntos: 0,
    anotarPuntos(cantidad) {
        if (!gestorDeTurnos.esTurno(this)) return;
        this.puntos += cantidad;
        console.log(`${this.nombre} anotó ${cantidad} puntos!`);
        gestorDeTurnos.finalizarTurno();
    },
};

const Curry = {
    nombre: "Stephen Curry",
    puntos: 0,
    anotarPuntos(cantidad) {
        if (!gestorDeTurnos.esTurno(this)) return;
        this.puntos += cantidad;
        console.log(`${this.nombre} anotó ${cantidad} puntos!`);
        gestorDeTurnos.finalizarTurno();
    },
};

const Durant = {
    nombre: "Kevin Durant",
    puntos: 0,
    anotarPuntos(cantidad) {
        if (!gestorDeTurnos.esTurno(this)) return;
        this.puntos += cantidad;
        console.log(`${this.nombre} anotó ${cantidad} puntos!`);
        gestorDeTurnos.finalizarTurno();
    },
};

// Agregar jugadores al gestor de turnos
gestorDeTurnos.agregarJugador(LeBron);
gestorDeTurnos.agregarJugador(Curry);
gestorDeTurnos.agregarJugador(Durant);

// Iniciar el sistema de turnos
gestorDeTurnos.iniciar();
