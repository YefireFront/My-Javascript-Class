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
  constructor({ name, atk, def }) {
    super({ name, atk, def });
    this.special = 0;
  }

  Atacar(objetivo) {
    if (this.dead(objetivo)) return false;

    this.special++;

    if (this.atk > objetivo.def) {
      objetivo.life = objetivo.life - (this.atk - objetivo.def);
      console.log(
        `${this.name} con un ATK de ${this.atk} ataca a ${objetivo.name} con una defensa de ${objetivo.def} tu especial aumento a ${this.special}`
      );

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
    GameState(yeffer);
  }

  blindar() {
    if (this.dead()) return false;
    if (this.tired()) return false;
    this.def += 15;
    this.energy -= 30;

    console.log(`El personaje ${this.name} Activa Blindar`);
    console.log(this);
    GameState(yeffer);
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

const yeffer = new Warrior({
  name: "Yeffer",
  atk: 70,
  def: 50,
});
const Arley = new Warrior({
  name: "Arley",
  atk: 80,
  def: 60,
});
const Walter = new Warrior({
  name: "WALTER",
  atk: 60,
  def: 60,
});



//*! DINAMIC WAY -------------------------------------------------------------------------------------------------

const PersonajeGame = [yeffer, Arley,Walter];
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
  card.classList.add("card");
  //% INSERTANDO
  card.append(div__img, div__info, div__weapon, div_stats);



  //? CREANTING APLICATION CONTAINER
  const container = document.querySelector(".container");
  //% INSERTANDO
  container.append(card);
});










//*! GAMEPLAY -------------------------------------------------------------------------------------------------



const vida = document.querySelector("#life");
const energy = document.querySelector("#energy");
const special = document.querySelector("#special");

const atk = document.querySelector("#atk");
const def = document.querySelector("#def");

function GameState(PJ) {
  //* stats
  energy.textContent = PJ.energy;
  special.textContent = PJ.special;
  vida.textContent = PJ.life;

  //* wapon
  atk.textContent = PJ.atk;
  def.textContent = PJ.def;
}

GameState(yeffer);
