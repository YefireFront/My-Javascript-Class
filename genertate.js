// Definir la clase Equipo
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
    }

    // Método para sumar puntos al equipo
    sumarPuntos(puntos) {
        this.puntos += puntos;
    }
}

// Definir la clase Partido
class Partido {
    constructor(local, visitante) {
        this.local = local;
        this.visitante = visitante;
    }

    // Método para simular el resultado del partido
    simularResultado() {
        const golesLocal = Math.floor(Math.random() * 5);
        const golesVisitante = Math.floor(Math.random() * 5);

        if (golesLocal > golesVisitante) {
            this.local.sumarPuntos(3);
        } else if (golesLocal < golesVisitante) {
            this.visitante.sumarPuntos(3);
        } else {
            this.local.sumarPuntos(1);
            this.visitante.sumarPuntos(1);
        }
    }
}

// Crear los equipos
const equipo1 = new Equipo("Equipo 1");
const equipo2 = new Equipo("Equipo 2");
const equipo3 = new Equipo("Equipo 3");
const equipo4 = new Equipo("Equipo 4");

// Crear los partidos
const partido1 = new Partido(equipo1, equipo2);
const partido2 = new Partido(equipo3, equipo4);

// Simular los resultados de los partidos
partido1.simularResultado();
partido2.simularResultado();

// Imprimir los puntos de cada equipo
console.log(`${equipo1.nombre}: ${equipo1.puntos} puntos`);
console.log(`${equipo2.nombre}: ${equipo2.puntos} puntos`);