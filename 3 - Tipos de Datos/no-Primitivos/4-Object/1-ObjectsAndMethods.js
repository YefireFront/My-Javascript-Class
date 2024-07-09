//!Flyweight


//*                                       


/*📌 //%Object.values()
Este método devuelve un array con los valores de las propiedades propias de un objeto, 
en el mismo orden en que se obtendrían en un bucle for...in.
 */

const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values);

const person = { name: "John", age: 30, city: "New York" };
const personValues = Object.values(person);
console.log(personValues);

/* //%Object.keys()
Este método devuelve un array de las propiedades propias de un objeto, 
en el mismo orden en que se obtendrían en un bucle for...in.
 */

const keys = Object.keys(obj);
console.log(keys);

function showProps(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(`${key}: ${obj[key]}`);
  }
}

showProps({ name: "John", age: 30, city: "New York" });

/* //%Object.entries()
Este método devuelve una matriz de pares clave/valor de las propiedades propias de un objeto.
 */

// Ejemplo 1:
const entries = Object.entries(obj);
console.log(entries); //

// Ejemplo 2:recipientes de plastico
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

/* //%Object.assign()
Este método copia los valores de todas las propiedades propias
 enumerables de uno o más objetos fuente a un objeto destino.
 */

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const mergedObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObj);

const target = { a: 1, b: 1 };
const source = { b: 2, c: 2 };

Object.assign(target, source);
console.log(target);

Array.forEach((e) => {});


//!Middleweight


const nba = {
  name: "Jordan",
  team: "Bulss",
  city: "Chocago",
  championship: [1992, 1994, 1995, 1996],
  directors: {
    president: "russel wats",
    manage: "Crabs Bilss",
    sponsore: "Nike",
  },
  dinasty: true,
};

const Arg = {
  name: "Boca",
  city: "Buenos aires",
  country: "Argentina",
  championship: [5, 12, 4, 2],
  sponser: { 2015: "Adidad", 2018: "Puma", 2021: "Nikwe" },
  Sing() {
    console.log(
      "Que paso con el fantama del Dsenso, que paso con la gallina en san lorenzo"
    );
  },
  Info() {
    console.log(`EL equipo ${this.name}`);
  },
  champ() {
    this.championship.forEach((element) => {
      console.log(element);
    });
  },
};

class Jugador {
  constructor(nombre, posicion) {
    this.nombre = nombre;
    this.posicion = posicion;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} y juego como ${this.posicion}.`);
  }
}

class EquipoFutbol {
  constructor(nombre) {
    this.nombre = nombre;
    this.jugadores = [];
  }

  agregarJugador(jugador) {
    this.jugadores.push(jugador);
    console.log(`${jugador.nombre} ha sido añadido al equipo ${this.nombre}.`);
  }

  presentarEquipo() {
    console.log(`Equipo: ${this.nombre}`);
    console.log("Jugadores:");
    this.jugadores.forEach((jugador) => {
      console.log(`- ${jugador.nombre} (${jugador.posicion})`);
    });
  }
}


//!Heavyweigh