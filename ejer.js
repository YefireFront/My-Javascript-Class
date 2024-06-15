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


