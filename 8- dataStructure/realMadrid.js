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
    jugadores: [
        {
            nombre: "Thibaut Courtois",
            posicion: "Portero",
            numero: 1,
            nacionalidad: "Belga",
            edad: 31
        },
        {
            nombre: "Jude Bellingham",
            posicion: "Centrocampista",
            numero: 5,
            nacionalidad: "Inglés",
            edad: 20
        },
        {
            nombre: "Vinicius Jr",
            posicion: "Delantero",
            numero: 7,
            nacionalidad: "Brasileño",
            edad: 23
        }
    ],
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

// Ejemplo de cómo acceder a los datos
console.log("Nombre del club:", realMadrid.nombre);
console.log("Capacidad del estadio:", realMadrid.estadio.capacidad);
console.log("Jugadores:", realMadrid.jugadores.map(jugador => jugador.nombre).join(", "));
console.log("Champions League ganadas:", realMadrid.trofeos.championsLeague); 