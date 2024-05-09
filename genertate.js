/**
 * Adds an element to the end of an array and returns the new length of the array.
 * @method push
 * @param {*} element - The element to add to the array.
 * @returns {number} - The new length of the array.
 */

/**
 * Removes the last element from an array and returns that element.
 * @method pop
 * @returns {*} - The removed element from the array.
 */

/**
 * Executes a provided function once for each array element.
 * @method forEach
 * @param {Function} callback - Function to execute on each element.
 */

/**
 * Creates a new array with the results of calling a provided function on every element in the array.
 * @method map
 * @param {Function} callback - Function that produces an element of the new array.
 * @returns {Array} - A new array with the results of the provided function.
 */

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * @method filter
 * @param {Function} callback - Function that tests each element of the array.
 * @returns {Array} - A new array with the elements that pass the test.
 */

/**
 * Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 * @method reduce
 * @param {Function} callback - Function to execute on each element.
 * @param {*} initialValue - Value to use as the first argument to the first call of the callback.
 * @returns {*} - The reduced value.
 */

/**
 * Returns the first element in the array that satisfies the provided testing function.
 * @method find
 * @param {Function} callback - Function to test each element of the array.
 * @returns {*} - The first element that satisfies the testing function.
 */

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @method indexOf
 * @param {*} element - Element to locate in the array.
 * @returns {number} - The first index of the element in the array, or -1 if not found.
 */

/**
 * Joins all elements of an array into a string, separated by the specified separator string.
 * @method join
 * @param {string} separator - Specifies a string to separate each element of the array.
 * @returns {string} - A string representing the elements of the array joined by the separator.
 */

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 * @method slice
 * @param {number} start - Zero-based index at which to begin extraction.
 * @param {number} end - Zero-based index before which to end extraction.
 * @returns {Array} - A new array containing the extracted elements.
 */

/**
 * Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 * @method splice
 * @param {number} start - Index at which to start changing the array.
 * @param {number} deleteCount - An integer indicating the number of old array elements to remove.
 * @param {...*} elements - The elements to add to the array, beginning at the start index.
 * @returns {Array} - An array containing the deleted elements.
 */

/**
 * Removes the first element from an array and returns that removed element.
 * @method shift
 * @returns {*} - The removed element from the array.
 */

/**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 * @method unshift
 * @param {...*} elements - The elements to add to the front of the array.
 * @returns {number} - The new length of the array.
 */

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * @method every
 * @param {Function} callback - Function to test each element of the array.
 * @returns {boolean} - True if all elements pass the test, otherwise false.
 */

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * @method includes
 * @param {*} element - The element to search for.
 * @returns {boolean} - True if the element is found, otherwise false.
 */

/**
 * Returns a new array that is the result of concatenating two or more arrays.
 * @method concat
 * @param {...Array} arrays - The arrays to concatenate.
 * @returns {Array} - A new array that is the result of the concatenation.
 */

/**
 * Reverses the order of the elements in an array.
 * @method reverse
 * @returns {Array} - The reversed array.
 */

/**
 * Sorts the elements of an array in place and returns the sorted array.
 * @method sort
 * @returns {Array} - The sorted array.
 */

/**
 * Fills all the elements of an array from a start index to an end index with a static value.
 * @method fill
 * @param {*} value - Value to fill the array with.
 * @param {number} start - Start index (inclusive).
 * @param {number} end - End index (exclusive).
 * @returns {Array} - The modified array.
 */

/**
 * Returns the index of the first element in the array that satisfies the provided testing function.
 * @method findIndex
 * @param {Function} callback - Function to test each element of the array.
 * @returns {number} - The index of the first element that satisfies the testing function.
 */

/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
 * @method lastIndexOf
 * @param {*} element - Element to locate in the array.
 * @returns {number} - The last index of the element in the array, or -1 if not found.
 */

/**
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * @method flat
 * @param {number} [depth=1] - The depth level specifying how deep a nested array structure should be flattened.
 * @returns {Array} - A new array with the sub-array elements concatenated.
 */

/**
 * Maps each element using a mapping function, then flattens the result into a new array.
 * @method flatMap
 * @param {Function} callback - Function that produces an element of the new array.
 * @returns {Array} - A new array with the mapped and flattened elements.
 */

/**
 * Returns a new Array Iterator object that contains the keys for each index in the array.
 * @method keys
 * @returns {Iterator} - A new Array Iterator object.
 */

/**
 * Returns a new Array Iterator object that contains the values for each index in the array.
 * @method values
 * @returns {Iterator} - A new Array Iterator object.
 */

/**
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 * @method entries
 * @returns {Iterator} - A new Array Iterator object.
 */
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








// Exercise 1: Multiply each element in the array by 2
let multipliedArray = array.map(element => element * 2);

// Exercise 2: Convert each element in the array to a string
let stringArray = array.map(element => String(element));

// Exercise 3: Square each element in the array
let squaredArray = array.map(element => element ** 2);

// Exercise 4: Convert each element in the array to its absolute value
let absoluteArray = array.map(element => Math.abs(element));

// Exercise 5: Convert each element in the array to its square root
let squareRootArray = array.map(element => Math.sqrt(element));




// Exercise 1: Convert each element in the array to uppercase
let uppercaseArray = array.map(element => element.toUpperCase());

// Exercise 2: Multiply each element in the array by its index
let multipliedByIndexArray = array.map((element, index) => element * index);

// Exercise 3: Convert each element in the array to its binary representation
let binaryArray = array.map(element => element.toString(2));

// Exercise 4: Add a prefix to each element in the array
let prefixedArray = array.map(element => "Prefix " + element);

// Exercise 5: Calculate the square of the sum of each element and its index
let squaredSumArray = array.map((element, index) => (element + index) ** 2);