
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


let contadorPrimos = 0;
for (let numero = 2; contadorPrimos < 20; numero++) {
    if (esPrimo(numero)) {
        console.log(numero);
        contadorPrimos++;
    }
}
