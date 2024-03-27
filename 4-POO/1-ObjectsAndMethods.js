//!Flyweight
//!Middleweight
//!Heavyweigh




const nba ={
  name : 'Jordan',
  team : 'Bulss',
  city : 'Chocago',
  championship : [1992, 1994, 1995, 1996],
  directors : {
      president : 'russel wats',
      manage : 'Crabs Bilss',
      sponsore: 'Nike'
  },
  dinasty : true

}

const Arg = {
  name    : 'Boca',
  city    : 'Buenos aires',
  country : 'Argentina',
  championship : [5,12,4,2],
  sponser : {2015:'Adidad', 2018:'Puma', 2021:'Nikwe'},
  Sing(){
      console.log('Que paso con el fantama del Dsenso, que paso con la gallina en san lorenzo');
  },
  Info(){
      console.log(`EL equipo ${this.name}`);
  },
  champ(){
      
      this.championship.forEach(element => {
          console.log(element);
      });
  }
}

class Jugador {
  constructor(nombre, posicion) {
    this.nombre = nombre;
    this.posicion = posicion;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} y juego como ${this.posicion}.`);
  } 
}

class EquipoFutbol {
  constructor(nombre) {
    this.nombre = nombre;
    this.jugadores = [];
  }

  agregarJugador(jugador) {
    this.jugadores.push(jugador);
    console.log(`${jugador.nombre} ha sido añadido al equipo ${this.nombre}.`);
  }
   
  presentarEquipo() {
    console.log(`Equipo: ${this.nombre}`);
    console.log("Jugadores:");
    this.jugadores.forEach((jugador) => {
      console.log(`- ${jugador.nombre} (${jugador.posicion})`);
    });
  }
}

