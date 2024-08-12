
class Perro {
    constructor(nombre, atk , def) {
        this.namee = nombre;
        this.power = atk;
        this.guard = def;
        this.vida = 100;
    }
}

class rotwailler extends Perro {
    constructor(nombre) {
        super();
        
    }
}




let perro1 = new rotwailler('Toby')
console.log(perro1)