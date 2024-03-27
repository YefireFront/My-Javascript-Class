
//* FOREACH()

const array = ['yeffer','23 MJ','Boca','Real Madrid']
const newArray = array.forEach((key, i, a) => console.log(key,i,a))
console.log(newArray)

let sum = 0;
const add = []
const numbers = [65, 44, 12, 4];
const sumaAray = numbers.forEach(function myFunction(item,i) {
    add.push(i)
    add.push(item)
    sum += item;
    console.log(add);
    console.log(sum);
 });