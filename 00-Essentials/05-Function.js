
const ingredient = function (amount, unit, name) {
  let ingredientAmount = amount * factor;

  if (ingredientAmount > 1) {
    unit += "s";
  }
  console.log(`${ingredientAmount} ${unit} ${name}`);
};


ingredient(1, "lata", "garbanzos");
ingredient(0.25, "taza", "tahini");
ingredient(0.25, "taza", "jugo de limón");
ingredient(1, "diente", "ajo");
ingredient(2, "cucharada", "aceite de oliva");
ingredient(0.5, "cucharadita", "comino");

// Funciones como valores

let launchMissiles = function () {
  missileSystem.launch("now");
};

if (true) {
  launchMissiles = function () {
    /* no hacer nada */
  };
}
undefined

//ARROW

add = function (a, b) {
  return a + b;
};

add = (a, b) => {
  return a + b;
};

add = (a, b) => a + b;

add = (a) => a + 10;

add = a => a++ ;


console.log(object);
console.log()


const greet = name => `Hello, ${name}!`;

console.log(greet('World')); // Outputs: Hello, World!

const nbaPlayer = (name, team , city) => `Hello, ${name}! You play for ${team} in ${city}`;

const jordan = nbaPlayer('Michael Jordan', 'Chicago Bulls', 'Chicago');
const kobe = nbaPlayer('Kobe Bryant', 'Los Angeles Lakers', 'Los Angeles');

console.log(jordan)


// Funcion declarada 

function add(a, b) {
  return a + b;
}

add(1, 2);


// Funcion expresada

const add = function (a, b) {
  return a + b;
}

add(1, 2);


