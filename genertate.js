let array = [1, 2, 3, 4, 5];

// push()
array.push(6);
// Modified Array: [1, 2, 3, 4, 5, 6]

// pop()
let popped = array.pop();
// Popped Element: 6

// forEach()
array.forEach(element => {
    console.log(element);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// map()
let doubled = array.map(element => element * 2);
// Doubled Array: [2, 4, 6, 8, 10]

// filter()
let evenNumbers = array.filter(element => element % 2 === 0);
// Even Numbers: [2, 4]

// reduce()
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Sum: 15

// find()
let found = array.find(element => element > 3);
// Found Element: 4

// indexOf()
let index = array.indexOf(3);
// Index of 3: 2

// join()
let joined = array.join("-");
// Joined String: "1-2-3-4-5"

// slice()
let sliced = array.slice(1, 3);
// Sliced Array: [2, 3]

// splice()
array.splice(2, 1);
// Modified Array: [1, 2, 4, 5]

// shift()
let shifted = array.shift();
// Shifted Element: 1

// unshift()
array.unshift(0);
// Modified Array: [0, 1, 2, 4, 5]

// every()
let allGreaterThanZero = array.every(element => element > 0);
// All greater than zero: false


// includes()
let includesThree = array.includes(3);
// Includes 3: false





// concat()
let newArray = array.concat([6, 7, 8]);
// Concatenated Array: [1, 2, 3, 4, 5, 6, 7, 8]

// reverse()
let reversedArray = array.reverse();
// Reversed Array: [5, 4, 3, 2, 1]

// sort()
let sortedArray = array.sort();
// Sorted Array: [1, 2, 3, 4, 5]

// fill()
let filledArray = array.fill(0, 2, 4);
// Filled Array: [1, 2, 0, 0, 5]

// findIndex()
let foundIndex = array.findIndex(element => element > 3);
// Index of Found Element: 3

// lastIndexOf()
let lastIndex = array.lastIndexOf(2);
// Last Index of 2: 1

// flat()
let nestedArray = [1, [2, 3], [4, [5]]];
let flattenedArray = nestedArray.flat();
// Flattened Array: [1, 2, 3, 4, [5]]

// flatMap()
let mappedArray = array.flatMap(element => [element, element * 2]);
// Mapped Array: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// keys()
let keys = array.keys();
// Keys: [0, 1, 2, 3, 4]

// values()
let values = array.values();
// Values: [1, 2, 3, 4, 5]

// entries()
let entries = array.entries();
// Entries: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]