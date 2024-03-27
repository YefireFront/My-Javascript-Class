//!Flyweight

function recur(n) {
  if (n < 5) {
    return n + 1;
  } else {
    return n;
  }
}

//!Middleweight
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Ejemplo de uso:
console.log(factorial(5)); // Output: 120
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

//!Heavyweigh
