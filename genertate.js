class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.golesAFavor = 0;
        this.golesEnContra = 0;
    }

    actualizarEstadisticas(golesAFavor, golesEnContra) {
        this.golesAFavor += golesAFavor;
        this.golesEnContra += golesEnContra;

        if (golesAFavor > golesEnContra) {
            this.puntos += 3; // Victoria
        } else if (golesAFavor === golesEnContra) {
            this.puntos += 1; // Empate
        }
        // No hay puntos por una derrota
    }
}

class Torneo {
    constructor(equipos) {
        this.equipos = equipos;
    }



    jugarPartido(equipo1, equipo2, goles1, goles2) {
        equipo1.actualizarEstadisticas(goles1, goles2);
        equipo2.actualizarEstadisticas(goles2, goles1);
    }

    mostrarClasificacion() {
        this.equipos.sort((a, b) => b.puntos - a.puntos || (b.golesAFavor - b.golesEnContra) - (a.golesAFavor - a.golesEnContra));
        console.log('Equipo\t        Puntos\tGF\tGC');
        for (let equipo of this.equipos) {
            console.log(`${equipo.nombre} \t${equipo.puntos}\t${equipo.golesAFavor}\t${equipo.golesEnContra}`);
        }
    }
}

let nombresEquipos = [
    "Leones Rojos   ", 
    "Tigres Azules  ", 
    "Águilas Doradas", 
    "Lobos Plateados", 
    "Pumas Verdes   ", 
    "Osos Negros    ", 
    "Halcones Blancos", 
    "Serpientes Verdes"
];

let equipos = nombresEquipos.map(nombre => new Equipo(nombre));

let torneo = new Torneo(equipos);

torneo.jugarPartido(equipos[0], equipos[1], 2, 1);
torneo.jugarPartido(equipos[2], equipos[3], 0, 0);
torneo.jugarPartido(equipos[4], equipos[5], 1, 3);
torneo.jugarPartido(equipos[6], equipos[7], 4, 2);

torneo.mostrarClasificacion();
