let divi = [10 , 2, 52, 25, 8]
let fruits = ['apple', 'banana', 'orange'];


divi.forEach((element) => {
    console.log(element);
});


fruits.forEach((fruit) => {
    console.log(fruit);
});


let num = 42;

if (typeof num === 'number') {
    console.log('The variable num is of type number');
} else {
    console.log('The variable num is not of type number');
}



let numbers = [5, 8, 12, 15, 20];

let foundNumber = numbers.find((number) => number > 100);

console.log(foundNumber);


numbers.forEach(n=>{
    console.log(n**2)
})
