
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


const personaje1 = {
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
    estadoActual: "Vivo"
};

const personaje2 = {
    nombre: "Trafalgar D. Water Law",
    edad: 26,
    tripulacion: "Piratas de Heart",
    origen: "North Blue",
    recompensa: "500,000,000 Berries",
    frutaDelDiablo: "Ope Ope no Mi",
    habilidades: {
        hakiObservacion: true,
        hakiArmadura: true,
        tecnicas: ["Shambles", "Room", "Gamma Knife"]
    },
    apariencia: {
        altura: "191 cm",
        peso: "78 kg",
        cabello: "Negro",
        ojos: "Ámbar",
        vestimenta: "Abrigo largo, pantalones oscuros, sombrero de copa"
    },
    aliados: [
        { nombre: "Bepo", rol: "Navegante" },
        { nombre: "Jean Bart", rol: "Timonel" },
        { nombre: "Penguin", rol: "Artillero" }
    ],
    estadoActual: "Vivo"
};

const personaje3 = {
    nombre: "Charlotte Katakuri",
    edad: 48,
    tripulacion: "Piratas de Big Mom",
    origen: "Whole Cake Island",
    recompensa: "1,057,000,000 Berries",
    frutaDelDiablo: "Mochi Mochi no Mi",
    habilidades: {
        hakiObservacion: true,
        hakiArmadura: true,
        tecnicas: ["Mochi Thrust", "Block Mochi", "Mochi Golem"]
    },
    apariencia: {
        altura: "509 cm",
        peso: "185 kg",
        cabello: "Negro",
        ojos: "Ámbar",
        vestimenta: "Kimono negro, bufanda rosa, sombrero de copa"
    },
    aliados: [
        { nombre: "Charlotte Smoothie", rol: "Comandante" },
        { nombre: "Charlotte Cracker", rol: "Comandante" },
        { nombre: "Charlotte Perospero", rol: "Comandante" }
    ],
    estadoActual: "Vivo"
};

const personaje4 = {
    nombre: "Marshall D. Teach",
    edad: 40,
    tripulacion: "Piratas de Barbanegra",
    origen: "Grand Line",
    recompensa: "2,247,600,000 Berries",
    frutaDelDiablo: "Yami Yami no Mi",
    habilidades: {
        hakiObservacion: true,
        hakiArmadura: true,
        tecnicas: ["Darkness", "Black Hole", "Dark Vortex"]
    },
    apariencia: {
        altura: "344 cm",
        peso: "380 kg",
        cabello: "Negro",
        ojos: "Negros",
        vestimenta: "Abrigo largo, sombrero de ala ancha"
    },
    aliados: [
        { nombre: "Shiliew", rol: "Comandante" },
        { nombre: "Jesus Burgess", rol: "Comandante" },
        { nombre: "Doc Q", rol: "Médico" }
    ],
    estadoActual: "Vivo"
};

const personaje5 = {
    nombre: "Kaido",
    edad: 50,
    tripulacion: "Piratas de las Bestias",
    origen: "Wano Country",
    recompensa: "4,611,100,000 Berries",
    frutaDelDiablo: "Uo Uo no Mi (Model: Seiryu)",
    habilidades: {
        hakiObservacion: true,
        hakiArmadura: true,
        tecnicas: ["Boro Breath", "Thunder Bagua", "Kaido's Thunder"]
    },
    apariencia: {
        altura: "685 cm",
        peso: "10,000 kg",
        cabello: "Negro",
        ojos: "Ámbar",
        vestimenta: "Kimono rojo, hombreras con forma de cabeza de dragón"
    },
    aliados: [
        { nombre: "King", rol: "Comandante" },
        { nombre: "Queen", rol: "Comandante" },
        { nombre: "Jack", rol: "Comandante" }
    ],
    estadoActual: "Vivo"
};



function convertRecompensaToNumber(personaje) {
    const recompensaString = personaje.recompensa.replace(/,/g, "").replace(" Berries", "");
    const recompensaNumber = parseFloat(recompensaString);
    return recompensaNumber;
}

const recompensaPersonaje1 = convertRecompensaToNumber(personaje1);
const recompensaPersonaje2 = convertRecompensaToNumber(personaje2);
const recompensaPersonaje3 = convertRecompensaToNumber(personaje3);
const recompensaPersonaje4 = convertRecompensaToNumber(personaje4);
const recompensaPersonaje5 = convertRecompensaToNumber(personaje5);