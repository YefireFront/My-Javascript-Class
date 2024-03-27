//!Flyweight



// 1- Permite accedre a el ambito de una funcion exterior desde una funcion interior
// 2- Se tiene una Clusure cuando una funcion accede a una vareiable fuera de su contexto
// 3 CADA VEZ QUE SE EJECUTA UNA FUNCION EN JS, SE CRA UN NUEVO CONTEXTO DE
// 4 EJECUCION CON UN NUEVO ENTORNO LÉXICO

function moneyBox(coins) {
  let saveConis = 0;
  saveConis += coins;
  console.log(`MoneyBox = ${saveConis}`);
}
moneyBox(5);
moneyBox(15);

function Cajamoney() {
  let saveConis = 0;
  function countConis(coins) {
    saveConis += coins;
    console.log(` Caja Money: $${saveConis}`);
  }
  return countConis;
}

const MyCajamoney = Cajamoney();
const yefferMoney = Cajamoney();

MyCajamoney(5);
yefferMoney(100);
MyCajamoney(5);

yefferMoney(100);
MyCajamoney(5);





//!Middleweight


//Practice
function countCrator() {
  let cot = 0;

  setTimeout(() => {
    cot += 100;
  }, 5000);

  return function increase() {
    return cot++;
  };
}

firscounter = countCrator();


//Practice

function Count() {
  let cont = 0;

  return {
    increas: () => {
      cont++;
      return cont;
    },
    decraese: () => {
      cont--;
      return cont;
    },
    show: () => {
      return cont;
    },
    built: () => {
      setTimeout(() => {
        cont += 100;
      }, 5000);
    },
  };
}

const con1 = Count();

con1.increas();
con1.increas();
con1.built();
con1.increas();
con1.decraese();
con1.decraese();
con1.built();
console.log(con1.show());







//!Heavyweigh