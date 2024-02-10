const arreglo = [1, 2, 3, 4, 5];
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}


const objeto = {a: 1, b: 2, c: 3};
for (let clave in objeto) {
    console.log(`${clave}: ${objeto[clave]}`);
}


for (let i = 0; i < 10; i += 2) {
    console.log(i);
}


const texto = "Hola";
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}


for (let i = 5; i > 0; i--) {
    console.log(i);
}
