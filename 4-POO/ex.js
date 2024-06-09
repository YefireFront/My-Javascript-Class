const jugador1 = {
    nombre: "Cristiano Ronaldo",
    edad: 36,
    equipo: "Manchester United",
    nacionalidad: "Portugal",
    posicion: "Delantero",
    lesionado: false,
    estadisticas: {
        partidosJugados: 900,
        goles: 800,
        asistencias: 200,
        tarjetasAmarillas: 60,
        tarjetasRojas: 4,
        estatura: null
    }, 
    premios: [
        { nombre: "Balón de Oro", año: 2008, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2014, descripcion: "Máximo goleador de Europa", activo: true },
        { nombre: "FIFA World Player", año: 2008, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el tobillo", duracion: "3 semanas" },
        { tipo: "Lesión en el muslo", duracion: "2 meses" }
    ],
    redesSociales: {
        twitter: "@Cristiano",
        instagram: "@Cristiano",
        facebook: "Cristiano Ronaldo",
        tikTok: undefined
    },
    salarioAnual: null,
};

const jugador2 = {
    nombre: "Neymar Jr",
    edad: 29,
    equipo: "Paris Saint-Germain",
    nacionalidad: "Brasil",
    posicion: "Delantero",
    salarioAnual: undefined,
    estadisticas: {
        partidosJugados: 600,
        goles: 300,
        asistencias: 400,
        tarjetasAmarillas: 40,
        tarjetasRojas: 1
    },
    premios: [
        { nombre: "Balón de Oro", año: 2015, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2010, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2015, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el pie", duracion: "1 semana" },
        { tipo: "Lesión en la rodilla", duracion: "3 semanas" }
    ],
    redesSociales: {
        twitter: "@neymarjr",
        instagram: "@neymarjr",
        facebook: "Neymar Jr",
        linkedin: null
    },
    lesionado: true,
};

const jugador3 = {
    nombre: "Robert Lewandowski",
    edad: 33,
    equipo: "Bayern Munich",
    nacionalidad: "Polonia",
    lesionado: false,
    posicion: "Delantero",
    estadisticas: {
        partidosJugados: 700,
        goles: 600,
        asistencias: 100,
        tarjetasAmarillas: 30,
        tarjetasRojas: 0
    },
    premios: [
        { nombre: "Balón de Oro", año: 2021, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2021, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2021, descripcion: "Mejor jugador del mundo según la FIFA", activo: true }
    ],
    lesiones: [
        { tipo: "Lesión en la pierna", duracion: "2 semanas" },
        { tipo: "Lesión en el hombro", duracion: "1 mes" }
    ],
    redesSociales: {
        twitter: "@lewy_official",
        instagram: "@_rl9",
        facebook: "Robert Lewandowski"
    },
    salarioAnual: null,
};

const jugador4 = {
    nombre: "Kevin De Bruyne",
    edad: 30,
    equipo: "Manchester City",
    nacionalidad: "Bélgica",
    posicion: "Centrocampista",
    salarioAnual: undefined,
    estadisticas: {
        partidosJugados: 500,
        goles: 100,
        asistencias: 300,
        tarjetasAmarillas: 20,
        tarjetasRojas: 3
    },
    premios: [
        { nombre: "Balón de Oro", año: 2022, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2020, descripcion: "Máximo goleador de Europa", activo: true },
        { nombre: "FIFA World Player", año: 2022, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en la rodilla", duracion: "2 semanas" },
        { tipo: "Lesión en el tobillo", duracion: "3 semanas" }
    ],
    redesSociales: {
        twitter: "@DeBruyneKev",
        instagram: "@kevindebruyne",
        facebook: "Kevin De Bruyne",
        linkedin: null
    },
    lesionado: true,
};

const jugador5 = {
    nombre: "Sergio Ramos",
    edad: 35,
    equipo: "Paris Saint-Germain",
    nacionalidad: "España",
    lesionado: false,
    posicion: "Defensa",
    estadisticas: {
        partidosJugados: 600,
        goles: 70,
        asistencias: 30,
        tarjetasAmarillas: 100,
        tarjetasRojas: 10
    },
    premios: [
        { nombre: "Balón de Oro", año: 2014, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2012, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2014, descripcion: "Mejor jugador del mundo según la FIFA", activo: true }
    ],
    lesiones: [
        { tipo: "Lesión en el gemelo", duracion: "2 semanas" },
        { tipo: "Lesión en la rodilla", duracion: "1 mes" }
    ],
    redesSociales: {
        twitter: "@SergioRamos",
        instagram: "@sergioramos",
        facebook: "Sergio Ramos"
    },
    salarioAnual: undefined,
};

const jugador6 = {
    nombre: "Kylian Mbappé",
    edad: 22,
    equipo: "Paris Saint-Germain",
    nacionalidad: "Francia",
    posicion: "Delantero",
    lesionado: false,
    estadisticas: {
        partidosJugados: 200,
        goles: 150,
        asistencias: 100,
        tarjetasAmarillas: 20,
        tarjetasRojas: 0,
        estatura: null
    },
    premios: [
        { nombre: "Balón de Oro", año: 2022, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2021, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2022, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el tobillo", duracion: "1 semana" },
        { tipo: "Lesión en el muslo", duracion: "2 semanas" }
    ],
    redesSociales: {
        twitter: "@KMbappe",
        instagram: "@k.mbappe",
        facebook: "Kylian Mbappé",
        tikTok: undefined
    },
    salarioAnual: null,
};

const jugador7 = {
    nombre: "Luis Suárez",
    edad: 34,
    equipo: "Atlético Madrid",
    nacionalidad: "Uruguay",
    lesionado: false,
    posicion: "Delantero",
    estadisticas: {
        partidosJugados: 700,
        goles: 500,
        asistencias: 200,
        tarjetasAmarillas: 80,
        tarjetasRojas: 5
    },
    premios: [
        { nombre: "Balón de Oro", año: 2014, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2016, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2014, descripcion: "Mejor jugador del mundo según la FIFA", activo: true }
    ],
    lesiones: [
        { tipo: "Lesión en la rodilla", duracion: "3 semanas" },
        { tipo: "Lesión en el tobillo", duracion: "1 mes" }
    ],
    redesSociales: {
        twitter: "@LuisSuarez9",
        instagram: "@luissuarez9",
        facebook: "Luis Suárez"
    },
    salarioAnual: undefined,
};

const jugador8 = {
    nombre: "Mohamed Salah",
    edad: 29,
    equipo: "Liverpool",
    nacionalidad: "Egipto",
    lesionado: true,
    posicion: "Delantero",
    estadisticas: {
        partidosJugados: 400,
        goles: 250,
        asistencias: 150,
        tarjetasAmarillas: 10,
        tarjetasRojas: 1,
        estatura: null
    },
    premios: [
        { nombre: "Balón de Oro", año: 2021, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2018, descripcion: "Máximo goleador de Europa" },
        { nombre: "FIFA World Player", año: 2021, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el hombro", duracion: "2 semanas" },
        { tipo: "Lesión en el pie", duracion: "3 semanas" }
    ],
    redesSociales: {
        twitter: "@MoSalah",
        instagram: "@mosalah",
        facebook: "Mohamed Salah",
        tikTok: undefined
    },
    salarioAnual: null,
};
const jugador9 = {
    nombre: "Gareth Bale",
    edad: 32,
    equipo: "Real Madrid",
    nacionalidad: "Gales",
    lesionado: false,
    posicion: "Delantero",
    estadisticas: {
        partidosJugados: 600,
        goles: 200,
        asistencias: 150,
        tarjetasAmarillas: 40,
        tarjetasRojas: 1,
        estatura: null
    },
    premios: [
        { nombre: "Balón de Oro", año: 2016, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2013, descripcion: "Máximo goleador de Europa", activo: true },
        { nombre: "FIFA World Player", año: 2016, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el tobillo", duracion: "2 semanas" },
        { tipo: "Lesión en el muslo", duracion: "1 mes" }
    ],
    redesSociales: {
        twitter: "@GarethBale11",
        instagram: "@garethbale11",
        facebook: "Gareth Bale",
        linkedin: undefined
    },
    salarioAnual: null
};

const jugador10 = {
    nombre: "Harry Kane",
    edad: 28,
    equipo: "Tottenham Hotspur",
    nacionalidad: "Inglaterra",
    lesionado: true,
    posicion: "Delantero",
    estadisticas: {
        partidosJugados: 500,
        goles: 300,
        asistencias: 200,
        tarjetasAmarillas: 50,
        tarjetasRojas: 2,
        estatura: null
    },
    premios: [
        { nombre: "Balón de Oro", año: 2023, descripcion: "Mejor jugador del mundo" },
        { nombre: "Bota de Oro", año: 2021, descripcion: "Máximo goleador de Europa", activo: true },
        { nombre: "FIFA World Player", año: 2023, descripcion: "Mejor jugador del mundo según la FIFA" }
    ],
    lesiones: [
        { tipo: "Lesión en el tobillo", duracion: "2 semanas" },
        { tipo: "Lesión en el muslo", duracion: "1 mes" }
    ],
    redesSociales: {
        twitter: "@HKane",
        instagram: "@harrykane",
        facebook: "Harry Kane",
        tikTok: undefined
    },
    salarioAnual: null
};


const jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10];



const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,
    editorial: "Editorial Sudamericana",
    genero: "Realismo mágico",
    idioma: "Español",
    disponibilidad: true,
    copiasVendidas: undefined,
    estadisticas: {
        paginas: 417,
        capitulos: 20,
        ediciones: 30,
        traducciones: 37,
        premios: 5
    },
    premios: [
        { nombre: "Premio Nobel de Literatura", año: 1982, descripcion: "Reconocimiento por su obra literaria" },
        { nombre: "Premio Rómulo Gallegos", año: 1972, descripcion: "Mejor novela publicada en lengua española", activo: false }
    ],
    criticas: [
        { medio: "The New York Times", comentario: "Una obra maestra del siglo XX" },
        { medio: "El País", comentario: "Una novela que define a toda una generación" }
    ],
    redesSociales: {
        twitter: null,
        instagram: null,
        facebook: "Gabriel García Márquez",
        goodreads: "Cien Años de Soledad"
    },
    disponibleParaPrestamo: true
};


const personajeOnePiece = {
    nombre: "Monkey D. Luffy",
    edad: 19,
    tripulacion: "Piratas de Sombrero de Paja",
    origen: "East Blue",
    recompensa: "1,500,000,000 Berries",
    frutaDelDiablo: "Gomu Gomu no Mi",
    habilidades: {
        hakiRey: true,
        hakiObservacion: true,
        hakiArmadura: true,
        tecnicas: ["Gomu Gomu no Pistol", "Gomu Gomu no Gatling", "Gear Fourth"]
    },
    apariencia: {
        altura: "174 cm",
        peso: "64 kg",
        cabello: "Negro",
        ojos: "Negros",
        vestimenta: "Chaleco rojo, pantalones cortos azules, sandalias, sombrero de paja"
    },
    aliados: [
        { nombre: "Roronoa Zoro", rol: "Espadachín" },
        { nombre: "Nami", rol: "Navegante" },
        { nombre: "Sanji", rol: "Cocinero" }
    ],
    enemigos: [
        { nombre: "Marshall D. Teach", alias: "Barbanegra", recompensa: "2,247,600,000 Berries" },
        { nombre: "Kaido", alias: "Kaido de las Bestias", recompensa: "4,611,100,000 Berries" }
    ],
    aventuras: [
        { nombre: "Saga de Arabasta", descripcion: "Luffy ayuda a la princesa Vivi a salvar su reino de Crocodile" },
        { nombre: "Saga de Enies Lobby", descripcion: "Luffy y su tripulación enfrentan al CP9 para rescatar a Nico Robin" }
    ],
    redesSociales: {
        twitter: null,
        instagram: null,
        facebook: null,
        tiktok: "@LuffyThePirateKing"
    },
    estadoActual: "Vivo"
};
