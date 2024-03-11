 
 function recur(n) {
   
    if (n < 5) {
        return   (n + 1);
    }else{
        return n
    }
    
 }



 function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso:
console.log(factorial(5)); // Output: 120
