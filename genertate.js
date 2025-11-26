// Clase JugadorFutbol
class JugadorFutbol {
    constructor(nombre, edad, posicion) {
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
}


// Clase Equipo
class Equipo {
    constructor(nombre, ciudad ,jugadorEstrella, jugadorActual) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.jugadorEstrella = jugadorEstrella;
        this.jugadorActual = jugadorActual;
    }
}



class Entrenador{
    constructor(nombre, edad, equipo){
        this.nombre = nombre;
        this.edad = edad;
        this.equipo = equipo;
    }
}


var jugador1 = new JugadorFutbol("Lionel Messi", 36, "Delantero");
var jugador2 = new JugadorFutbol("Erling Haaland", 23, "Delantero");
var jugador3 = new JugadorFutbol("Kylian Mbappé", 24,  "Delantero");
var jugador4 = new JugadorFutbol("Robert Lewandowski", 33, "Delantero");

// Instancias de equipos
var equipo1 = new Equipo("Inter Miami", "Miami", jugador1, jugador2);
var equipo2 = new Equipo("Manchester City", "Manchester", jugador3, jugador4);

var entrenador1 = new Entrenador("Pep Guardiola", 50, equipo1);
var entrenador2 = new Entrenador("Jorge Sampaoli", 55, equipo2);


// console.log(equipo1);
// console.log(equipo2);

console.log(entrenador1);