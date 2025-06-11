'use estric'

const realMadrid = {
    nombre: "Real Madrid Club de Fútbol",
    fundacion: 1902,
    estadio: {
        nombre: "Santiago Bernabéu",
        capacidad: 81044,
        ubicacion: "Madrid, España",
        inauguracion: 1947
    },
    colores: ["Blanco", "Dorado"],
    presidente: "Florentino Pérez",
    entrenador: "Carlo Ancelotti",
    trofeos: {
        championsLeague: 14,
        ligaEspañola: 35,
        copaDelRey: 20,
        supercopaEspaña: 12,
        mundialDeClubes: 5
    },
    rivales: {
        principal: "Barcelona",
        otros: ["Atlético de Madrid", "Sevilla", "Valencia"]
    },
    estadisticas: {
        temporadaActual: {
            partidosJugados: 38,
            victorias: 28,
            empates: 6,
            derrotas: 4,
            golesFavor: 87,
            golesContra: 26
        }
    }
};



const [color1 , color2] = realMadrid.colores

console.log(color1)
console.log(color2)