function Guerrero(nombre, vida, energia, atk, def) {
  (this.nombre = nombre),
    (this.vida = vida),
    (this.energia = energia),
    (this.atk = atk),
    (this.def = def),
    (this.tipo = "Guerrero"),
    (this.special = 0);

  /** Estado */

  /** Metodos */

  (this.Atacar = function (objetivo) {
    this.special++;

    if (this.atk > objetivo.def) {
      objetivo.vida = objetivo.vida - (this.atk - objetivo.def);
      console.log(`${this.nombre} con un ATK de ${this.atk} 
                    ataca a ${objetivo.nombre} con una defensa de ${objetivo.def} 
                    tu especial aumento a ${this.special}`);

      if (objetivo.vida < 0) {
        objetivo.vida = 0;
      }
    } else {
      console.log(
        `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
      );
    }

    console.log(objetivo);
    console.log(this);
  }),
    (this.Blindar = function () {
      if (this.vida > 0) {
        if (this.energia >= 30) {
          this.energia -= 30;
          if (this.def == 70) {
            console.log("Defensa a el maximo");
          } else {
            this.def += 20;
            if (this.def > 70) {
              this.def = 70;
            }
            console.log(`${this.nombre} tu defensa aumento a ${this.def}`);
          }
        } else {
          console.log(
            `Tienes ${this.energia} de energia. Energia insuficiente para usar blindar`
          );
        }
      } else {
        console.log(`No puede jugar con ${this.nombre} esta muerto`);
      }

      console.log(this);
    }),
    (this.GranAtack = function (objetivo) {
      if (this.energia >= 70) {
        let diferecnia = this.atk - objetivo.def;
        if (diferecnia >= 30) {
          objetivo.vida = 0;
          console.log(
            `${this.nombre} Usa el gran Ataque a ${objetivo.nombre}  `
          );
        } else {
          console.log(
            `Tu diferencia es de ${diferecnia} no puedes usan el gran ataque`
          );
        }
      } else {
        console.log(
          `tu energia es de ${this.energia}, no tienes energia suficiente para el Gran Ataque`
        );
      }
      console.log(this);
      console.log(objetivo);
    }),
    (this.ira = function (obj1, obj2) {
      if (this.special >= 3) {
        let ira = this.atk;
        this.atk = 120;
        console.log(this);
        obj1.vida -= this.atk - obj1.def;
        obj2.vida -= this.atk - obj2.def;
        this.atk = ira;
      } else {
        console.log(`Solo tienes ${this.special}`);
      }
    });
}
function Sanador(nombre, vida, energia, atk, def) {
  (this.nombre = nombre),
    (this.vida = vida),
    (this.energia = energia),
    (this.atk = atk),
    (this.def = def),
    (this.tipo = "Sanador"),
    (this.special = true),
    (this.muerto = function () {
      if (this.via < 0) {
        console.log(`${this.nombre} esta muerto, no puede jugar`);
        return false;
      }
    })(
      (this.Atacar = function (objetivo) {
        this.muerto();
        objetivo.muerto();

        if (this.atk > objetivo.def) {
          objetivo.vida = objetivo.vida - (this.atk - objetivo.def);
          console.log(`${this.nombre} con un ATK de ${this.atk} ataca a ${objetivo.nombre} con una defensa de ${objetivo.def} 
                        tu especial aumento a ${this.special}`);

          if (objetivo.vida < 0) {
            objetivo.vida = 0;
          }
        } else {
          console.log(
            `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
          );
        }

        console.log(objetivo);
        console.log(this);
      })
    ),
    (this.curar = function (objetivo) {
      this.muerto();
      objetivo.muerto();

      if (this.energia >= 30) {
        this.energia -= 30;
        objetivo.vida += 30;
        if (objetivo.vida > 100) {
          objetivo.vida = 100;
        }
      }
      console.log(this);
      console.log(objetivo);
    }),
    (this.sacrificio = function (objetivo) {
      if (this.energia >= 70) {
        this.energia = 0;
        this.vida = 0;
        objetivo.vida = 100;
      } else {
        console.log("Energia insuficiente");
      }

      console.log(this);
      console.log(objetivo);
    }),
    (this.revivir = function (objetivo) {
      if (this.special == true) {
        if (objetivo.vida == 0) {
          objetivo.vida = 50;
          this.revivir = false;
          console.log(`Has revivido a el jugador ${objetivo.nombre}`);
        } else {
          console.log("No puedes revivir a un jugador muerto");
        }
      } else {
        console.log("Ya usaste la habilidad de rivivir");
      }
      console.log(this);
      console.log(objetivo);
    });
}
function Mago(nombre, vida, energia, atk, def) {
  (this.nombre = nombre),
    (this.vida = vida),
    (this.energia = energia),
    (this.atk = atk),
    (this.def = def),
    (this.tipo = "Mago"),
    (this.Atacar = function (objetivo) {
      if (this.atk > objetivo.def) {
        objetivo.vida = objetivo.vida - (this.atk - objetivo.def);
        console.log(
          `${this.nombre} con un ATK de ${this.atk} ataca a ${objetivo.nombre} con una defensa de ${objetivo.def} `
        );
      } else {
        console.log(
          `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
        );
      }
      console.log(this);
      console.log(objetivo);
    });
  this.Mejora = function (objetivo) {
    if (this.energia >= 30) {
      this.energia -= 30;
      objetivo.atk += 10;
      objetivo.def += 10;
      if (objetivo.def > 70) {
        objetivo.def = 70;
      }
      if (objetivo.atk > 100) {
        objetivo.atk = 100;
      }
    } else {
      console.log("Energia Insuficiente");
    }

    console.log(this);
    console.log(objetivo);
  };
  this.Gripe = function (objetivo) {
    if (this.energia >= 70) {
      this.energia -= 70;
      objetivo.atk -= 10;
      objetivo.def -= 10;

      if (objetivo.atk > 100) {
        objetivo.atk = 100;
      }
      if (objetivo.def > 70) {
        objetivo.def = 70;
      }
    } else {
      console.log("Energia Insuficiente");
    }
  };
}

const Yeffer = new Guerrero("Yeffer", 100, 100, 70, 40);
const Walter = new Sanador("Walter", 100, 100, 50, 60);


for (const key in Yeffer) {

    console.log(` ${key} = ${Yeffer[key]}`);
    
  
}

for (const iterator of object) {
  
}