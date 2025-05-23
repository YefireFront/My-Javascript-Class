// Global Scope

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am globally constant";

function checkGlobalScope() {
  console.log(globalVar);   // I am global
  console.log(globalLet);   // I am also global
  console.log(globalConst); // I am globally constant
}

// checkGlobalScope();

// console.log(globalVar);   // I am global
// console.log(globalLet);   // I am also global
// console.log(globalConst); // I am globally constant





// . Function Scope

function checkFunctionScope() {
    var functionVar = "I am in a function";
    let functionLet = "I am also in a function";
    const functionConst = "I am constant in a function";
    
    console.log(functionVar);   // I am in a function
    console.log(functionLet);   // I am also in a function
    console.log(functionConst); // I am constant in a function
  }
  
  // checkFunctionScope();
  
  // console.log(functionVar); // Error: functionVar is not defined
  // console.log(functionLet); // Error: functionLet is not defined
  // console.log(functionConst); // Error: functionConst is not defined
  




//   Block Scope


if (false) {
    var blockVar = "I am a var inside a block";
    let blockLet = "I am a let inside a block";
    const blockConst = "I am a const inside a block";
    
    console.log(blockVar);   // I am a var inside a block
    console.log(blockLet);   // I am a let inside a block
    console.log(blockConst); // I am a const inside a block
  }
  
  // console.log(blockVar); // I am a var inside a block
  // console.log(blockLet); // Error: blockLet is not defined
  // console.log(blockConst); // Error: blockConst is not defined
  



