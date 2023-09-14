function Guerrero(nombre , vida , energia , atk , def ) {
    this.nombre = nombre,
    this.vida = vida,
    this.energia = energia,
    this.atk = atk,
    this.def = def,
    this.tipo = 'Guerrero',
    this.special=0

    /** Estado */

  



    /** Metodos */
    
    this.Atacar = function(enemigo){
        if (this.vida >0 ) {
            if (enemigo.vida > 0) {
                    this.special ++
                    if (this.atk > enemigo.def) {
                        enemigo.vida = enemigo.vida - (this.atk - enemigo.def)
                        console.log(`${this.nombre} con un ATK de ${this.atk} ataca a ${enemigo.nombre} con una defensa de ${enemigo.def} 
                        tu especial aumento a ${this.special}`);
            
                        if (enemigo.vida < 0 ) {
                            enemigo.vida = 0
                        }
                    
                    }else{
                        console.log(`Tu ataque es de ${this.atk} y la defensa del enemigo es mayor, es de ${enemigo.def} no le causas daño`);
                    
                }
            }else{
                console.log(`No puede interactuar con ${enemigo.nombre} esta muerto`);

            }
            
        }else{
            console.log(`No puede jugar con ${this.nombre} esta muerto`);
        }
      
       
        console.log(enemigo);
        console.log(this);


    },

    this.Blindar = function(){

        if (this.vida >0 ) {
            if (this.energia >= 30) {
                this.energia -= 30
                if (this.def == 70) {
                    console.log('Defensa a el maximo');
                }else{
                    this.def += 20
                    if (this.def > 70) {
                        this.def = 70
                    }
                    console.log(`${this.nombre} tu defensa aumento a ${this.def}`);
                }
            }else{
                console.log(`Tienes ${this.energia} de energia. Energia insuficiente para usar blindar`);
            }
        }else{
            console.log(`No puede jugar con ${this.nombre} esta muerto`);
        }
       
        console.log(this);
    },

    this.GranAtack= function(enemigo){

        
        if (this.vida > 0) {
            if (enemigo.vida > 0) {
                if (this.energia >= 70) {
                    let diferecnia = this.atk - enemigo.def
                    if (diferecnia >= 30) {
                        enemigo.vida = 0
                        console.log(`${this.nombre} Usa el gran Ataque a ${enemigo.nombre}  `);
                    }else{
                        console.log(`Tu diferencia es de ${diferecnia} no puedes usan el gran ataque`);
                    }
                    
                }else{
        
                    console.log(`tu energia es de ${this.energia}, no tienes energia suficiente para el Gran Ataque`);
                    
                }
            }else{
                console.log(`No puede interactuar con ${enemigo.nombre} esta muerto`);
            }
        }else{
            console.log(`No puede jugar con ${this.nombre} esta muerto`);
        }

        console.log(this);
        console.log(enemigo);



    }

    this.ira = function(obj1 , obj2){

        if (this.vida > 0) {

            if (obj1.vida > 0 && obj2 > 0) {
                if (this.special >= 3) {
                    let ira = this.atk
                    this.atk = 120
                    console.log(this);
                    obj1.vida -= (this.atk - obj1.def )
                    obj2.vida -= (this.atk - obj2.def )
                    this.atk = ira

            }else{
                console.log(`Solo tienes ${this.special}`);
            }
            
        }else{
            console.log(`uno de los personajes esta muerto`);
        }

        console.log(`estas muerto no puede jugar`);

    }

    
}
function Sanador(nombre , vida , energia , atk , def ) {
    this.nombre = nombre,
    this.vida = vida,
    this.energia = energia,
    this.atk = atk,
    this.def = def,
    this.tipo = 'Sanador',
    this.special = true,

    this.Atacar = function(enemigo){
        if (this.vida >0 ) {
            if (enemigo.vida > 0) {
                    this.special ++
                    if (this.atk > enemigo.def) {
                        enemigo.vida = enemigo.vida - (this.atk - enemigo.def)
                        console.log(`${this.nombre} con un ATK de ${this.atk} ataca a ${enemigo.nombre} con una defensa de ${enemigo.def} 
                        tu especial aumento a ${this.special}`);
            
                        if (enemigo.vida < 0 ) {
                            enemigo.vida = 0
                        }
                    
                    }else{
                        console.log(`Tu ataque es de ${this.atk} y la defensa del enemigo es mayor, es de ${enemigo.def} no le causas daño`);
                    
                }
            }else{
                console.log(`No puede interactuar con ${enemigo.nombre} esta muerto`);

            }
            
        }else{
            console.log(`No puede jugar con ${this.nombre} esta muerto`);
        }
      
       
        console.log(enemigo);
        console.log(this);


    },
    this.curar = function(objetivo){
        if (this.energia >= 30) {
            this.energia -= 30
            objetivo.vida += 30
            if (objetivo.vida > 100) {
                objetivo.vida = 100
            }
            
        }
        console.log(this);
        console.log(objetivo);
    }
    this.sacrificio = function(objetivo){
        if (this.energia >= 70) {
            this.energia = 0
            this.vida = 0
            objetivo.vida = 100
            
        }else{
            console.log('Energia insuficiente');
        }

        console.log(this);
        console.log(objetivo);
    }
    this.revivir = function(objetivo){
        if (this.special == true) {
            if (objetivo.vida == 0) {
                objetivo.vida = 50
                this.revivir = false
                console.log(`Has revivido a el jugador ${objetivo.nombre}`);
            }else{
                console.log('No puedes revivir a un jugador muerto');

            }
        }else{
            console.log('Ya usaste la habilidad de rivivir');
        }
        console.log(this);
        console.log(objetivo);
    }
}
function Mago(nombre , vida , energia , atk , def ) {
    this.nombre = nombre,
    this.vida = vida,
    this.energia = energia,
    this.atk = atk,
    this.def = def,
    this.tipo = 'Mago',
    this.Atacar = function(enemigo){
        if (this.atk > enemigo.def) {
            enemigo.vida = enemigo.vida - (this.atk - enemigo.def)
            console.log(`${this.nombre} con un ATK de ${this.atk} ataca a ${enemigo.nombre} con una defensa de ${enemigo.def} `);
           
        }else{
            console.log(`Tu ataque es de ${this.atk} y la defensa del enemigo es mayor, es de ${enemigo.def} no le causas daño`);
        }
        console.log(this);
        console.log(enemigo);

    }
    this.Mejora = function(objetivo){
        if (this.energia >= 30) {
            this.energia -= 30
            objetivo.atk += 10
            objetivo.def += 10
            if (objetivo.def > 70) {
                objetivo.def = 70
            }
            if (objetivo.atk > 100) {
                objetivo.atk = 100
            }
        }else{
            console.log('Energia Insuficiente');
        }

        console.log(this);
        console.log(objetivo);
    }
    this.Gripe = function(objetivo){
        if (this.energia >= 70) {
            this.energia -= 70
            objetivo.atk -= 10
            objetivo.def -= 10

            if (objetivo.atk > 100) {
                objetivo.atk = 100
            }
            if (objetivo.def > 70) {
                objetivo.def = 70
            }
        }else{
            console.log('Energia Insuficiente');
        }
    }
}



const Yeffer = new Guerrero('Yeffer', 100 , 100 , 70 , 40)
const Walter = new Sanador('Walter', 100 , 100 , 50 , 60)


const Apo = new Mago('Apo', 100 , 100 , 60 , 50)
const Arley = new Mago('Arley', 20 , 100 , 60 , 50)

