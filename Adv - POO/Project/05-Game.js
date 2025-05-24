class Personaje{
    constructor(nombre , ataque , defensa){
        this.nombre = nombre;
        this.vida = 100
        this.magia = 100
        this.ataque = ataque
        this.defensa = defensa
    }
    estaMuerto(){
        if(this.vida <= 0){
            console.log(`${this.nombre} ha muerto`)
            return true
        }else{
            return false
        }
    }
    atacar(personajeObjetivo){
        if(this.estaMuerto() || personajeObjetivo.estaMuerto()){return true}

        let daño = this.ataque - personajeObjetivo.defensa
        personajeObjetivo.vida -= daño
        console.log(`${this.nombre} ataca a ${personajeObjetivo.nombre} y le hace ${daño} de daño`)
        estado(Players)
    }  
}

class Guerrero extends Personaje{
    constructor(nombre ){
        super(nombre, 90 , 30); 
        this.pasiva = 0
    }

    atacar(personajeObjetivo){
       super.atacar(personajeObjetivo);

        this.pasiva ++
        console.log(`${this.nombre} ha activado su pasiva ${this.pasiva}`)
        if (this.pasiva == 2) {
            this.vida += 20
            console.log(`${this.nombre} ha recuperado 20 de vida gracias a la pasiva`)
            this.pasiva = 0            
        }
        estado(Players)
    }

    


}

class Mago    extends Personaje{
    constructor(nombre){
        super(nombre , 70 , 20);  
    }


    marca(personajeObjetivo){
        this.marcados.push(personajeObjetivo)
        personajeObjetivo.marca = true
    }
}

class Curador extends Personaje{
    constructor(nombre){
        super(nombre , 50 , 40);
    }
}

class vikingo extends Guerrero{
    constructor(nombre){
        super(nombre)
        this.ataque = 70
        this.defensa = 30
    }
}
