


function suma(n1, n2, callback) {
  let res = n1 + n2;
  setTimeout(function () {
    if (res > 100) {
      console.log(`${res} elevado al cuadrado es ${res ** 2}`);
    } else {
      console.log(`${res} elevado al cubo es ${res ** 3}`);
    }
  }, 3000);

  callback(res)


}

function mayor(n){
  if (n > 100) {
    console.log( `${n} elevado al cuadrado es ${n**2}`);
  }else{
    console.log( `${n} elevado al cubo  es ${n**3}`);
  }
}


suma(10,2,mayor)
