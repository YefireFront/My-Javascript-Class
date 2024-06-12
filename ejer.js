// Clase Jugador
class Jugador {
    constructor(nombre, apuesta, numeroElegido) {
        this.nombre = nombre;
        this.apuesta = apuesta;
        this.numeroElegido = numeroElegido;
    }

    // Método para mostrar la información del jugador
    mostrarInfo() {
        console.log(`${this.nombre} ha apostado ${this.apuesta} unidades y ha elegido el número ${this.numeroElegido}.`);
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

    // Método para iniciar el juego
    iniciarJuego() {
        const numeroGenerado = this.generarNumeroAleatorio();
        console.log(`El número generado por la casa de apuestas es ${numeroGenerado}.`);

        this.jugadores.forEach(jugador => {
            jugador.mostrarInfo();
            if (jugador.numeroElegido === numeroGenerado) {
                console.log(`¡Felicidades ${jugador.nombre}! Has ganado ${jugador.apuesta * 5} unidades.`);
            } else {
                console.log(`Lo siento, ${jugador.nombre}. Has perdido tu apuesta de ${jugador.apuesta} unidades.`);
            }
        });
    }
}

// Crear instancias de Jugador
const jugador1 = new Jugador("Alice", 50, 3);
const jugador2 = new Jugador("Bob", 30, 1);
const jugador3 = new Jugador("Charlie", 20, 5);

// Crear instancia de CasaDeApuestas
const casaDeApuestas = new CasaDeApuestas();

// Agregar jugadores a la casa de apuestas
casaDeApuestas.agregarJugador(jugador1);
casaDeApuestas.agregarJugador(jugador2);
casaDeApuestas.agregarJugador(jugador3);

// Iniciar el juego
casaDeApuestas.iniciarJuego();
