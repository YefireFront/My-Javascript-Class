//METODOS ESTATICOS DEL PROTOTIPO OBJETC

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // -->  ["a", "b", "c"]

const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj2)); // --> [1, 2, 3]

const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj3)); // -->  [["a", 1], ["b", 2], ["c", 3]]

const objA = { a: 1 };
const objB = { b: 2 };
const objC = { c: 3 };
const mergedObj = Object.assign({}, objA, objB, objC);
console.log(mergedObj); // --> { a: 1, b: 2, c: 3 }




const Arg = {
    name : 'yefire',
    age: 18,
    wonChampionship: ['Libertadores'],
    addChampionshop(){
        this.wonChampionship.push(tournament)
    }
}

console.log(Object.keys(Arg));
console.log(Object.getOwnPropertyNames(Arg));
console.log(Object.entries(Arg)[1]);


console.log(Object.getOwnPropertyDescriptors(Arg));
Object.defineProperty()