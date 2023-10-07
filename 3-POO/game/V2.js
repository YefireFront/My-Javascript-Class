class Personaje {
  constructor({ name, atk, def }) {
    this.name = name;
    this.life = 100;
    this.atk = atk;
    this.def = def;
    this.energy = 100;
  }
  dead(objetivo = false) {
    if (objetivo.life <= 0 || this.life <= 0) {
      console.log(`Estas intentando interactuar con personajes muertos`);
      return true;
    }
  }
  exhausted() {
    if (this.energy < 70) return true;
  }
  tired() {
    if (this.energy < 30) return true;
  }
}

class Warrior extends Personaje {
  constructor({name, atk, def}) {
    super({name, atk, def});
    this.ira = 0;
    
  }

  Atacar(objetivo) {
    if (this.dead(objetivo)) return false;

    this.ira++;

    if (this.atk > objetivo.def) {
      objetivo.life = objetivo.life - (this.atk - objetivo.def);
      console.log(`${this.name} con un ATK de ${this.atk} ataca a ${objetivo.name} con una defensa de ${objetivo.def} tu especial aumento a ${this.ira}`);

      if (objetivo.life < 0) {
        objetivo.life = 0;
      }
    } else {
      console.log(
        `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
      );
    }

    console.log(objetivo);
    console.log(this);
  }

  blindar() {
    if (this.dead()) return false;
    if (this.tired()) return false;
    this.def += 15;
    this.energy -= 30;

    console.log(`El personaje ${this.name} Activa Blindar`);
    console.log(this);
  }

  iraYopuka(objetivo) {
    if (this.dead(objetivo)) return false;
    if (this.exhausted()) return false;
    let dif = this.atk - objetivo.def;
    if (dif > 30) {
      objetivo.life = 0;
      this.energy -= 70;
    }
  }
}

class Witcher extends Personaje {
    constructor({name,atk,def}){
       super({name, atk, def});
       
          
    }
}



const yeffer = new Warrior({
    name: 'Yeffer',
    atk: 70,
    def: 40,
  });
const Anilio = new Warrior({
    name: 'Anilio',
    atk: 70,
    def: 50,
  });

