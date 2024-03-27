/** 
@author ES6 <DESTRUCTURING>
*/
// //*ARRAY DESTRUCTURING
//%1
let boca = 'Bostero'
let river = 'Gashinas'
const arg = `${boca } > ${river}`

console.log(arg)
'use strict';
let ArgTeams = ['boca', 'River', 'Racing']
let [a,b,c] = ArgTeams

console.log(ArgTeams)
console.log(a,b,c)
console.info(arg);

//%2
const numbers = [1];
const [first = 0, second = 0] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 0

//%3
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // Output: 2
console.log(y); // Output: 1




//*OBJET DESTRUCTURING
//%1
let nba ={nombre : 'Bulls',ciudad : 'chicago',}
console.log(nba);

let {nombre, ciudad} = nba;
console.log(nombre, ciudad );


//%2

const person = { nombre: 'Juan', edad: 30 };
const { nombre: nick, edad: age } = person;

console.log(nick); // Output: Juan
console.log(age);  // Output: 30



//*SPREAD_OPERATOR

let nba2 ={
    nombre  : 'Bulls',
    ciudad  : 'Chicago',
    stadium : 'United Center'
}

let sport = 'Basketball'

let data = {
    id:1,
    ...nba,
    country:'EEUU'
}
console.log(data);




//*REST

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[2]);
    return num + values[2];
    
}


sum(1,2,3,4)



