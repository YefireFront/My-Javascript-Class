class Personaje {
    constructor({ nombre, iniciativa }) {
        this.nombre = nombre;
        this.vida = 100;
        this.atk = 0;
        this.def = 0;
        this.energia = 100;
        this.iniciativa = iniciativa; // Nuevo atributo para determinar el orden del turno
    }
    
    estaMuerto(objetivo = false) {
        if (objetivo.vida <= 0 || this.vida <= 0) {
            console.log(`Estás intentando interactuar con personajes muertos`);
            return true;
        }
    }
    
    atacar(objetivo) {
        if (this.estaMuerto(objetivo)) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
  
        if (this.atk > objetivo.def) {
            objetivo.vida = objetivo.vida - (this.atk - objetivo.def);
  
            if (objetivo.vida < 0) {
                objetivo.vida = 0;
            }
        } else {
            console.log(
                `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def}, no le causas daño`
            );
        }
        
 
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de atacar
    }
}

class Guerrero extends Personaje {
    constructor({ nombre, iniciativa }) {
        super({ nombre, iniciativa });
        this.especial = 0;
        this.atk = 60;
        this.def = 40;
    }

    atacar(objetivo) {
        super.atacar(objetivo)
        if (this.constructor.name == 'Guerrero') {
            this.especial++;
            if (this.especial == 2) {
                this.atk += 10;
                this.especial = 0;
            }
        }
        

    }

    blindar() {
        if (this.estaMuerto()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        this.def += 15;
        this.energia -= 30;
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de usar la habilidad
    }
    
    iraYopuka(objetivo) {
        if (this.estaMuerto(objetivo)) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        let dif = this.atk - objetivo.def;
        if (dif >= 30) {
            objetivo.vida = 0;
            this.energia -= 70;
        }
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de usar la habilidad
    }
}

class Sanador extends Personaje {
    constructor({ nombre, iniciativa }) {
        super({ nombre, iniciativa });
        this.especial = 1;
        this.atk = 30;
        this.def = 60;
    }
    
    curar(objetivo) {
        if (this.estaMuerto()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        objetivo.vida += 30;
        this.energia -= 30;
        if (objetivo.vida > 100) {
            objetivo.vida = 100;
        }
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de curar
    }
    
    sacrificio(objetivo) {
        if (this.estaMuerto()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        let cantidad = 100 - objetivo.vida;
        if (cantidad < this.vida) {
            objetivo.vida += cantidad;
            this.vida -= cantidad;
            this.energia -= 70;
        } else {
            objetivo.vida += this.vida;
            this.vida = 1;
            this.energia -= 70;
        }
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de sacrificar
    }
    
    revivir(objetivo) {
        if (this.especial == 0) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        if (this.vida === 0) return false;  
        if (objetivo.vida > 0) return false;            
        
        objetivo.vida = 40;
        this.energia -= 70;
        this.especial = 0;
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de revivir
    }
}

class Hechicero extends Personaje {
    constructor({ nombre, iniciativa }) {
        super({ nombre, iniciativa });
        this.especial = 1;
        this.atk = 70;
        this.def = 30;
    }
    
    mejorar(objetivo) {
        if (this.estaMuerto()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        objetivo.atk += 10;
        objetivo.def += 10;
        this.energia -= 30;
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de mejorar
    }
    
    peste(objetivo) {
        if (this.estaMuerto()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; // Verificación de turno
        
        objetivo.atk -= 20;
        objetivo.def -= 20;
        this.energia -= 70;
        
        GestorDeTurnos.finalizarTurno(); // Finalizar turno después de lanzar la peste
    }
}

class GestorDeTurnos {
    static personajes = [];
    static indiceTurnoActual = 0;

    static agregarPersonaje(personaje) {
        this.personajes.push(personaje);
        this.personajes.sort((a, b) => b.iniciativa - a.iniciativa); 
    }

    static esTurno(personaje) {
        if (this.personajes[this.indiceTurnoActual] !== personaje) {
            console.log(`No es tu turno, ${personaje.nombre}. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
            return false;
        }
        return true;
    }

    static finalizarTurno() {
        this.indiceTurnoActual = (this.indiceTurnoActual + 1) % this.personajes.length;
        console.log(`Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
    }

    static iniciar() {
        console.log(`Comienza la partida. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
    }
}

const Yeffer = new Guerrero({ nombre: "Yeffer", iniciativa: 10 });
const Arley = new Hechicero({ nombre: "Arley", iniciativa: 8 });
const Walter = new Sanador({ nombre: "Walter", iniciativa: 9 });

GestorDeTurnos.agregarPersonaje(Yeffer);
GestorDeTurnos.agregarPersonaje(Arley);
GestorDeTurnos.agregarPersonaje(Walter);

GestorDeTurnos.iniciar();
