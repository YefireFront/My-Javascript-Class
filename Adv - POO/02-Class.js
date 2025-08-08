
class Persona {
    constructor(nombre , edad ){
        this.nombre = nombre;
        this.edad =  edad ;
        this.salario = 100
    }

    WhoAmI(){
        console.log(`I am ${this.nombre}`);
    }
}
const Yeffer = new Persona('yeffer', 15)

const Persona2 = new Persona('Chris Brown', 29)


class Equipo {
    constructor(nombre , pais){

        this.nombre = nombre;
        this.pais = pais;
        this.jugadores = [];
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
        console.log(`${jugador.nombre} ha sido agregado al equipo ${this.nombre}`);
    }

    obtenerJugadores() {
        return this.jugadores;
    }
}

class SoccerTeam extends Equipo {
    constructor(nombre, pais, estadio, teamName){
        super(nombre, pais);
        this.estadio = estadio;
        this.teamName = teamName;
    }

    iam(){
        console.log(`${this.estadio}  ${this.teamName} ${this.pais}`);
    }
}

const Barcelona = new SoccerTeam('Barcelona', 'Spain', 'Camp Nou');
const persona1 = new Persona('yeffer', 30);
const BocaJrs = new Equipo('Boca Juniors', 'Argentina');

Barcelona.iam(); // Output: Camp Nou Barcelona Spain

function JugadorNBA(nombre, equipo, posicion) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.posicion = posicion;
}

const LeBronJames = new JugadorNBA('LeBron James', 'Los Angeles Lakers', 'Ala-Pívot');





let persona = {
    nombre: 'yeffer'
};

persona.altura = 186;
console.log(persona); 

delete persona.altura;
console.log(persona); 



