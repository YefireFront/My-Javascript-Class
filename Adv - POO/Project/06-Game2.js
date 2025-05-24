class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
    }

    anotarPuntos(cantidad) {
        if (!gestorDeTurnos.esTurno(this)) return;
        if (cantidad <= 0) {
            console.log(`${this.nombre}, los puntos deben ser positivos.`);
            return;
        }
        this.puntos += cantidad;
        console.log(`${this.nombre} anotó ${cantidad} puntos!`);
        gestorDeTurnos.mostrarTablaDePosiciones();
        gestorDeTurnos.finalizarTurno();
    }
}

const anderson = new Jugador("Anderson");
const mateo = new Jugador("Mateo");
const brandon = new Jugador("Brandon");
const valery = new Jugador("Valery");

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

    mostrarTablaDePosiciones() {
        console.log("\nTabla de Posiciones:");
        this.jugadores.sort((a, b) => b.puntos - a.puntos).forEach((jugador, index) => {
            console.log(`${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`);
        });
        console.log(""); // Espacio adicional para legibilidad
    },

    iniciar() {
        console.log(`Comienza la partida. Es el turno de ${this.jugadores[this.indiceTurnoActual].nombre}`);
    }
};

// Agregar jugadores al sistema de turnos
gestorDeTurnos.agregarJugador(valery);
gestorDeTurnos.agregarJugador(anderson);
gestorDeTurnos.agregarJugador(mateo);
gestorDeTurnos.agregarJugador(brandon);

// Iniciar el sistema de turnos
gestorDeTurnos.iniciar();
