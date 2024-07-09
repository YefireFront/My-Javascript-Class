nombre = "yeffer";

const objeto1 = {
  nombre: "Juan",
  edad: 25,
  profesion: "programador",

  saludar() {
    console.log(`Hola Soy un Programador`);
  },
};

const objeto2 = {
  nombre: "María",
  edad: 30,
  profesion: "diseñadora",

  cumplirAño() {
    if (this.edad > 32) {
      console.log("Ya no puedes cumplir años");
      return false;
    }
    this.edad += 1;
    console.log("cumpliste años 🎉");
  },
};

const objeto5 = {
  nombre: "Equipo de fútbol",
  jugador: ["Rivaldo", "Maradona", "Riquelme"],
  ciudad: "Barcelona",

  colores: ["azul", "grana"],
  estadio: "Camp Nou",

  agregarJugador(jugador) {
    if (jugador.length > 5) {
      this.jugador.push(jugador);
    }
  },
  EliminarJugador() {
    this.jugador.pop();
  },
};

const objeto6 = {
  nombre: "Equipo de fútbol",
  jugador: ["Rivaldo", "Maradona", "Riquelme"],
  ciudad: "Barcelona",

  colores: ["azul", "grana"],
  estadio: "Camp Nou",

  agregarJugador(jugador) {
    if (jugador.length > 5) {
      this.jugador.push(jugador);
    }
  },

  EliminarJugador() {
    this.jugador.pop();
  },
};

objeto5.agregarJugador("Klivert");
