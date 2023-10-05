//! MAP()

// const array = [1,2,3,4,5]
// const newArray = array.map(key => key + 'anilio'   )
// console.log(newArray)

//! FILTER()

// const array = [1,2,3,4,5]
// const newArray = array.filter(key => key >= 4 )
// console.log(newArray)

//! FOREACH()

// const array = ['yeffer','23 MJ','Boca','Real Madrid']
// const newArray = array.forEach((key, i, a) => console.log(key,i,a))
// console.log(newArray)

// let sum = 0;
// const add = []
// const numbers = [65, 44, 12, 4];
// const sumaAray = numbers.forEach(function myFunction(item,i) {
//     add.push(i)
//     add.push(item)
//     sum += item;
//     console.log(add);
//     console.log(sum);
//  });

// console.log(sumaAray);

//! findIndex()

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);

//! SOME()

// const aarray = [1,2,3,4,5]
// const newArray = aarray.some((key) => (key % 2 === 0))

// console.log(newArray)

// const array = [1, 2, 3, 4, 5];
// const even =  (element) => element % 2 === 0;

// console.log(array.some(even));
// Expected output: true

//! INCLUDES()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Banana", 0));
// console.log(fruits.includes("Apple", 2));

//! EVERY()

// const Condition = (currentValue) => currentValue < 40;

// const array1 = [10, 30, 39, 29, 10, 13];
// const array9 = [100, 30, 39, 29, 10, 13];

// console.log(array1.every(Condition));
// console.log(array9.every(Condition));

//! CONCAT()

// const array1 = [10, 30, 39, 29, 10, 13];
// const array9 = [{Feeling:'Amor', Mentaliuty:'angry'},{Ex:'Leo', Acually:'Me'}];
// const array = ['yeffer','23 MJ','Boca','Real Madrid']

// const newArray = array1.concat(array9, array);
// console.log(newArray)

//! CONCAT()
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join(' '));
// // Expected output: "Fire-Air-Water"

//! REDUCE()

// const array1 = [10, 2, 3, 4];

// const cum = array1.reduce( (accumulator, currentValue) => accumulator + currentValue,0);

// console.log(cum);

//! REDUCE()

// const fruits = ["Apple", "Orange","Orange","Orange","Orange","Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 7);
// console.log(index);

//! PUSH()

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// console.log(animals);

//! SLICE()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// let remove = animals.slice(2, -1)
// console.log(remove);

// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());

//! SLICE()

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 0, 'May','June','July','August','September','October','November','December');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const greatsTeams = [
  {
    team: "Boca",
    titulos: 6,
    country: "Argentina",
    stadium: "Bombonera",
    motto: "EL jugador numero 12",
  },
  {
    team: "Real Madrid",
    titulos: 14,
    country: "España",
    stadium: "Bernabeu",
  },
  {
    team: "Santos",
    titulos: 3,
    country: "Brasil",
    stadium: "Maracana",
    motto: "La casa del el rey pele",
  },
  {
    team: "Barcelona",
    titulos: 5,
    country: "España",
    stadium: "Cap noun",
    motto: "Siempre cule",
  },
  {
    team: "Racing",
    titulos: 1,
    country: "Argentina",
    stadium: "Amalfinati",
  },
  {
    team: "Manchester United",
    titulos: 4,
    country: "Inglaterra",
    stadium: "Stanford breach",
  },
  {
    team: "Milan",
    titulos: 6,
    country: "Italia",
    stadium: "Jusepa Meatzaa",
  },
  {
    team: "LA Galaxy",
    titulos: 1,
    country: "US",
    stadium: "Dignity Health Sports Park",
  },
];

// arrTeam = greatsTeams.map( e => e.team)
// arrTeam = greatsTeams.map( e =>{
//     return {...e, sport: 'soccer'}
// })
// console.log(arrTeam);

title = greatsTeams
  .map((e) => e.titulos)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 2, 18, 2, 4, 2, , 1, 5, 215, 2, 51];

res = arrnum.reduce(
  (obj, item) => {
    if (item >= 1 && item <= 5) {
      obj["1-5"] += 1;
    }
    if (item >= 6 && item <= 8) {
      obj["6-8"] += 1;
    }

    if (item >= 9) {
      obj["rest"] += 1;
    }
    return obj;
  },
  {
    "1-5": 0,
    "6-8": 0,
    rest: 0,
  }
);

let parrafo =
  "si yo considero que yeffer es una gran persona, entonces yeffer debe, mirar a yeffer y pensarlo bien";

const repe = (parrafo, word, cont = 0) => {
  let arr = parrafo.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (word == element) {
      cont++;
    }
  }
  console.log(`la palabra ${word} esta ${cont} veces`);
};

repe(parrafo,'yeffer')

