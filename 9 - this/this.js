// Global Context

console.log(this); // window (in a browser)



// Function Context
// Non-strict mode:
function globalFunction() {
    console.log(this);
  }
  globalFunction(); // window (in a browser)
  
//   Strict mode:

"use strict";
function globalFunctionStrict() {
  console.log(this);
}
globalFunctionStrict(); // undefined




// Method Context

const obj = {
    name: 'Alice',
    greet: function() {
      console.log(this.name);
    }
  };
  
  obj.greet(); // Alice

  

//   Constructor Context

function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person('Bob');
  console.log(person1.name); // Bob
  

//   Arrow Functions

const obj1 = {
    name: 'Charlie',
    regularFunction: function() {
      console.log(this.name); // Charlie
    },
    arrowFunction: () => {
      console.log(this.name); // undefined (or global name in non-strict mode)
    }
  };
  
  obj.regularFunction();
  obj.arrowFunction();
  

//   Event Handlers

document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // <button id="myButton">...</button>
  });
  