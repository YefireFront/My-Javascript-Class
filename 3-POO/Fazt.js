console.log(typeof true);
console.log("Yefire".toUpperCase());
console.log(typeof 9);

console.log(typeof []);
console.log(typeof {});

const team = {
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
    }
}



console.log(team.name);
console.log(team.championship);
console.log(team.sponser[2015]);
team.Sing()
team.Info() 

function Movies (name , genero , info){
    this.name= name 
    this.genero = genero
    this.info = info
    this.basic = function(){
        console.log(`${this.name} es de ${this.genero}`);
    }
}


const avatar = new Movies('Avatar', 'Ficcion',{duracion:125,formsto:'mp4'})
avatar.basic()
console.log(avatar);




class Jugador{
    constructor(name , lastname){
        this.name = name
        this.lastname = lastname
    }
}

const Ronaldo = new Jugador ('Nasario', 'De lima')
console.log(Ronaldo);