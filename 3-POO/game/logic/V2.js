
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
  Atacar(objetivo) {
    if (this.dead(objetivo)) return false;


    if (this.atk > objetivo.def) {

      objetivo.life = objetivo.life - (this.atk - objetivo.def);

      if (objetivo.life < 0) {
        objetivo.life = 0;
      }
    } else {
      console.log(
        `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
      );

    }
    
    if (this.constructor.name == 'Warrior') {
        this.special++
      }
      Reloade(this, objetivo);
  }
}

class Warrior extends Personaje {
  constructor({ name, atk, def }) {
    super({ name, atk, def });
    this.special = 0;
  }

  blindar() {
    if (this.dead()) return false;
    if (this.tired()) return false;
    this.def += 15;
    this.energy -= 30;

    console.log(`El personaje ${this.name} Activa Blindar`);
    console.log(this);
    Reloade(this)
    

  }

  iraYopuka(objetivo) {
    if (this.dead(objetivo)) return false;
    if (this.exhausted()) return false;
    let dif = this.atk - objetivo.def;
    if (dif > 30) {
      objetivo.life = 0;
      this.energy -= 70;
      Reloade(this,objetivo)
    }
  }
}

class Healer extends Personaje{
  constructor({name,atk,def}){
    super({name , atk, def});
    this.special = 1;
  };

  curar = function (objetivo) {
    if (this.dead())  return false;
    if (this.tired()) return false;
  
    objetivo.life += 30;
    this.energy -= 30;
    if (objetivo.life > 100) {
      objetivo.life = 100;
    }

    Reloade(this,objetivo)
  };

  sacrificio = function (objetivo) {
      if (this.dead())      return false;
      if (this.exhausted()) return false;

      let cantidad = 100 - objetivo.life
      if (cantidad < this.life){
          objetivo.life += cantidad
          this.life     -= cantidad;
          this.energy   -= 70 
      }else{
          objetivo.life += this.life 
          this.life = 1
          this.energy   -= 70 
      }

      Reloade(this,objetivo)


  };

  revivir = function (objetivo){

      if (this.special == 0) return false;
      if (this.life === 0)   return false;  
      if (objetivo.life > 0) return false;            
      if (this.exhausted())  return false;

      objetivo.life = 40
      this.energy   -=70
      this.special = 0

      Reloade(this,objetivo)



  }




}

class Witcher extends Personaje{
  constructor({name,atk,def}){
    super({name,atk,def})
    this.special = 1
  }

  Mejora = function (objetivo) {
    if (this.energy >= 30) {
      this.energy -= 30;
      objetivo.atk += 10;
      objetivo.def += 10;
      if (objetivo.def > 70) {
        objetivo.def = 70;
      }
      if (objetivo.atk > 100) {
        objetivo.atk = 100;
      }
    } else {
      console.log("energy Insuficiente");
    }

    Reloade(this,objetivo)
  };
}




const yeffer = new Warrior({
  name: "Yeffer",
  atk: 70,
  def: 60,
});
const Arley = new Witcher({
  name: "Arley",
  atk: 50,
  def: 20,
});
const Walter = new Healer({
  name: "Walter",
  atk: 80,
  def: 40,
});



const PersonajeGame = [Arley,yeffer,Walter];
const allplayers = []

PersonajeGame.forEach((pj) => {

  //? CREANTING IMG  
  const div__img = document.createElement("div");
  const div_image = document.createElement("img");
  //$ PARSEANDO
  div__img.classList.add("card__img");
  //% INSERTANDO
  div__img.append(div_image);
  //! DATA
  div_image.src = `./img/${pj.constructor.name}.png`



  //? CREANTING CARD INFO
  const div__info = document.createElement("div");
  const info_h2 = document.createElement("h2");
  const info_p = document.createElement("p");
  //! DATA
  info_h2.textContent= pj.name
  //$ PARSEANDO
  div__info.classList.add("card__info");
  //% INSERTANDO
  div__info.append(info_h2, info_p);
  


  
  //? CREANTING CARD WAPON
  const div__weapon = document.createElement("div");
  const div_weapon1 = document.createElement("div");
  const i_weapon1 = document.createElement("i");
  const p_weapon1 = document.createElement("p");
  const div_weapon2 = document.createElement("div");
  const i_weapon2 = document.createElement("i");
  const p_weapon2 = document.createElement("p");
  //! DATA
  p_weapon1.textContent=pj.atk
  p_weapon2.textContent=pj.def
  //$ PARSEANDO
  div__weapon.classList.add("card__weapon");
  div_weapon1.classList.add("card__stats--atk");
  div_weapon2.classList.add("card__stats--def");
  i_weapon1.classList.add("fa-solid", "fa-hand-back-fist");
  i_weapon2.classList.add("fa-solid", "fa-shield");
  //% INSERTANDO
  div_weapon1.append(i_weapon1, p_weapon1);
  div_weapon2.append(i_weapon2, p_weapon2);
  div__weapon.append(div_weapon1, div_weapon2);



  //? CREANTING CARD STATS
  const div_stats = document.createElement("div");
  const div_life = document.createElement("div");
  const i_life = document.createElement("i");
  const p_life = document.createElement("p");
  const div_energy = document.createElement("div");
  const i_energy = document.createElement("i");
  const p_energy = document.createElement("p");
  const div_special = document.createElement("div");
  const i_special = document.createElement("i");
  const p_special = document.createElement("p");
  //! DATA
  p_life.textContent= pj.life
  p_energy.textContent= pj.energy
  p_special.textContent= pj.special
  //$ PARSEANDO
  div_stats.classList.add("card__stats");
  div_life.classList.add("card__stats--heart");
  div_energy.classList.add("card__stats--magic");
  div_special.classList.add("card__stats--special");
  i_life.classList.add("fa-solid", "fa-heart", "fa-beat-fade");
  i_energy.classList.add("fa-solid", "fa-fire");
  i_special.classList.add("fa-solid", "fa-star");
  //% INSERTANDO
  div_life.append(i_life, p_life);
  div_energy.append(i_energy, p_energy);
  div_special.append(i_special, p_special);
  div_stats.append(div_life, div_energy, div_special);



  //? CREANTING MAIN CARD
  const card = document.createElement("div");
  //$PARDENADO
  card.classList.add("card", pj.name);
  //% INSERTANDO
  card.append(div__img, div__info, div__weapon, div_stats);



 
  allplayers.push(card)
  
});


//? CREANTING APLICATION CONTAINER
const container = document.createElement("div");
container.classList.add("container");
container.append(...allplayers);

const appNode =  document.querySelector("#APP")
appNode.appendChild(container);








function Reloade(me , you) {

  if (me) {
    const me_vida    = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--heart > p`)
    const me_energy  = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--magic > p`)
    const me_special = document.querySelector(`#APP > div > div.card.${me.name} > div.card__stats > div.card__stats--special > p`)
    const me_atk     = document.querySelector(`#APP > div > div.card.${me.name} > div.card__weapon > div.card__stats--atk > p`)
    const me_def     = document.querySelector(`#APP > div > div.card.${me.name} > div.card__weapon > div.card__stats--def > p`)
    
      me_energy.textContent   = me.energy;
      me_special.textContent  = me.special;
      me_vida.textContent     = me.life;
      me_atk.textContent      = me.atk;
      me_def.textContent      = me.def;    
  }

  if (you) {
    const you_vida    = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--heart > p`)
    const you_energy  = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--magic > p`)
    const you_special = document.querySelector(`#APP > div > div.card.${you.name} > div.card__stats > div.card__stats--special > p`)
    const you_atk     = document.querySelector(`#APP > div > div.card.${you.name} > div.card__weapon > div.card__stats--atk > p`)
    const you_def     = document.querySelector(`#APP > div > div.card.${you.name} > div.card__weapon > div.card__stats--def > p`)
    
      you_energy.textContent  = you.energy;
      you_special.textContent = you.special;
      you_vida.textContent    = you.life;
      you_atk.textContent     = you.atk;
      you_def.textContent     = you.def;
    }
    
  }
  






yeffer.Atacar(Walter)
yeffer.Atacar(Arley)
yeffer.Atacar(Arley)
Walter.revivir(Arley)
