// Clase Jugador
class Jugador {
    constructor(nombre, dinero) {
        this.nombre = nombre;
        this.dinero = dinero;
    }

    // Método para realizar una apuesta
    realizarApuesta(apuesta, numeroElegido) {
        if (apuesta > this.dinero) {
            console.log(`No tienes suficiente dinero para apostar ${apuesta} unidades.`);
            return false;
        }
        this.apuesta = apuesta;
        this.numeroElegido = numeroElegido;
        return true;
    }

    // Método para mostrar la información del jugador
    mostrarInfo() {
        console.log(`${this.nombre} ha apostado ${this.apuesta} unidades y ha elegido el número ${this.numeroElegido}.`);
    }

    // Método para actualizar el dinero del jugador después de una ronda
    actualizarDinero(resultado) {
        if (resultado) {
            this.dinero += this.apuesta * 4; // El jugador gana 5 veces su apuesta, incluida la original
        } else {
            this.dinero -= this.apuesta;
        }
    }

    // Método para verificar si el jugador tiene dinero para seguir jugando
    tieneDinero() {
        return this.dinero > 0;
    }
}



// Clase CasaDeApuestas
class CasaDeApuestas {
    constructor() {
        this.jugadores = [];
    }

    // Método para agregar un jugador
    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    // Método para generar un número aleatorio entre 1 y 5
    generarNumeroAleatorio() {
        return Math.floor(Math.random() * 5) + 1;
    }

    // Método para iniciar una ronda de juego
    iniciarRonda() {
        const numeroGenerado = this.generarNumeroAleatorio();
        console.log(`El número generado por la casa de apuestas es ${numeroGenerado}.`);

        this.jugadores.forEach(jugador => {
            jugador.mostrarInfo();
            const gano = jugador.numeroElegido === numeroGenerado;
            if (gano) {
                console.log(`¡Felicidades ${jugador.nombre}! Has ganado ${jugador.apuesta * 5} unidades.`);
            } else {
                console.log(`Lo siento, ${jugador.nombre}. Has perdido tu apuesta de ${jugador.apuesta} unidades.`);
            }
            jugador.actualizarDinero(gano);
            console.log(`Ahora ${jugador.nombre} tiene ${jugador.dinero} unidades.`);
        });
    }

    // Método para iniciar el juego con múltiples rondas
    iniciarJuego() {
        let ronda = 1;
        while (this.jugadores.some(jugador => jugador.tieneDinero())) {
            console.log(`\n--- Ronda ${ronda} ---`);
            this.jugadores.forEach(jugador => {
                if (jugador.tieneDinero()) {
                    const apuesta = parseInt(prompt(`¿Cuánto quieres apostar, ${jugador.nombre}?`));
                    const numeroElegido = parseInt(prompt(`Elige un número entre 1 y 5, ${jugador.nombre}.`));
                    if (jugador.realizarApuesta(apuesta, numeroElegido)) {
                        this.iniciarRonda();
                    }
                }
            });
            ronda++;
        }
        console.log("El juego ha terminado.");
    }
}

// Crear instancias de Jugador
const jugador1 = new Jugador("Alice", 100);
const jugador2 = new Jugador("Bob", 100);
const jugador3 = new Jugador("Charlie", 100);

// Crear instancia de CasaDeApuestas
const casaDeApuestas = new CasaDeApuestas();

// Agregar jugadores a la casa de apuestas
casaDeApuestas.agregarJugador(jugador1);
casaDeApuestas.agregarJugador(jugador2);
casaDeApuestas.agregarJugador(jugador3);

// Iniciar el juego






