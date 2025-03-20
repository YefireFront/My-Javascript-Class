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
