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
casaDeApuestas.iniciarJuego();







// Clase Producto
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase CarritoDeCompras
class CarritoDeCompras {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(producto => producto.id !== id);
    }

    obtenerTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    vaciarCarrito() {
        this.productos = [];
    }
}

// Clase Orden
class Orden {
    constructor(cliente, productos) {
        this.cliente = cliente;
        this.productos = productos;
        this.total = this.calcularTotal();
        this.fecha = new Date();
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

// Clase Cliente
class Cliente {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.carrito = new CarritoDeCompras();
    }

    realizarCompra() {
        if (this.carrito.productos.length === 0) {
            console.log("El carrito está vacío.");
            return;
        }

        const orden = new Orden(this, this.carrito.productos);
        this.carrito.vaciarCarrito();
        console.log(`Orden realizada por ${this.nombre} el ${orden.fecha}`);
        console.log(`Total de la orden: $${orden.total.toFixed(2)}`);
        return orden;
    }
}

// Ejemplo de uso
const cliente1 = new Cliente(1, "Juan Pérez");
const producto1 = new Producto(101, "Laptop", 1000);
const producto2 = new Producto(102, "Mouse", 50);

cliente1.carrito.agregarProducto(producto1);
cliente1.carrito.agregarProducto(producto2);

console.log(`Total en el carrito: $${cliente1.carrito.obtenerTotal().toFixed(2)}`);
const orden1 = cliente1.realizarCompra();
