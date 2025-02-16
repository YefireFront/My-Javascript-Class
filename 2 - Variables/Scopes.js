// Global Scope

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am globally constant";

function checkGlobalScope() {
  console.log(globalVar);   // I am global
  console.log(globalLet);   // I am also global
  console.log(globalConst); // I am globally constant
}

checkGlobalScope();

console.log(globalVar);   // I am global
console.log(globalLet);   // I am also global
console.log(globalConst); // I am globally constant



