//! MAP()

// const array = [1,2,3,4,5]
// const newArray = array.map(key => key + 'anilio'   )
// console.log(newArray)

//! FILTER()

// const array = [1,2,3,4,5]
// const newArray = array.filter(key => key >= 4 )
// console.log(newArray)

//? FOREACH()

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

const array1 = [10, 30, 39, 29, 10, 13];
const array9 = [
  { Feeling: "Amor", Mentaliuty: "angry" },
  { Ex: "Leo", Acually: "Me" },
];
const array = ["yeffer", "23 MJ", "Boca", "Real Madrid"];

const newArray = array1.concat(array9, array);
console.log(newArray);

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

//*  CREATE AN ARRAY THAT IS SEPARATED BY PACE (SPLIT and JOIN)

const bocaFrase = "El jugador numero 12";
let bocaFraseSplit = bocaFrase.split(" ");
console.log(bocaFrase);
console.log(bocaFraseSplit);

let bocaFraseJoin = bocaFraseSplit.join("/");
console.log(bocaFraseJoin);
