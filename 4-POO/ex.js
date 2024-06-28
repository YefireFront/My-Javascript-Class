
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
