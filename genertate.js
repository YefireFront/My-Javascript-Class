// 🔹 Parte 1: Variables, Entrada y Salida
// Hola Mundo Personalizado
// Crea un programa que pida tu nombre y edad, y luego muestre el mensaje:
// Hola [nombre], tienes [edad] años.

// Suma de dos números
// Solicita al usuario dos números y muestra su suma.

// Conversor de grados Celsius a Fahrenheit
// Usa la fórmula: F = C * 1.8 + 32.


// let nombre = 'yeffer'
// let edad = 33

// console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)



// let numero1 = 15
// let numero2 = 33

// let sumna = numero1 + numero2

// let Fahrenheit = 25
// let celcius = 22

// console.log(`${celcius} celcius  equivalen a ${celcius * 1.8 + 32}Farenheit`)


// 🔹 Parte 2: Condicionales
// Número Par o Impar
// Pide un número al usuario e imprime si es par o impar.

// Mayor de tres números
// Solicita tres números distintos e indica cuál es el mayor.

// Edad para votar
// Si la edad del usuario es mayor o igual a 18, imprime "Puedes votar". Si no, "Aún no puedes votar".

// let numeroPar = 15

// if (numeroPar % 2 == 0) {
//     console.log(`${numeroPar} es par`);
// }else{
//     console.log(`${numeroPar} no es par`);
// }

// let num1 = 20
// let num2 = 36
// let num3 = 12

// if(num1 >= num2 && num2 >= num3){
//     console.log(`${num1} es el numero mayor`);
// }else if(num2 >= num1 && num1 >= num3){
//     console.log(`${num2} es el numeor mayor`)
// }else if (num3 >= num1 && num3 >= num2){
//     console.log(`${num3} es el numer mayor`)
// }




//  Parte 3: Ciclos
// Contar del 1 al 10
// Muestra los números del 1 al 10 usando un bucle.

// Suma de los primeros N números
// Pide un número N y muestra la suma de los números del 1 al N.

// Tabla de multiplicar del 5
// Usa un ciclo para imprimir la tabla del 5 hasta el 10.

// Adivina el número
// Genera un número aleatorio del 1 al 10 y permite al usuario adivinarlo. Dale hasta 3 intentos.




for (let i = 0; i <= 10 ; i++) {
    // console.log(`${i}`)
}

let n = 10
let suma = 0
for (let i = 0; i <= n ; i++) {
    suma+=i
    // console.log(`${i}`)
}
// console.log(`${suma}`)


for (let i = 0; i < 11; i++) {
    // console.log(`5 x ${i} = ${5*i}`)
}


// // Generar número aleatorio entre 1 y 10
// let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// let intentos = 3;

// while (intentos > 0) {
//   let adivinanza = parseInt(prompt(`Adivina el número (1 al 10). Te quedan ${intentos} intento(s):`));

//   if (adivinanza === numeroSecreto) {
//     alert("¡Felicidades! Adivinaste el número secreto.");
//     break;
//   } else {
//     alert("Incorrecto.");
//     intentos--;
//   }

//   if (intentos === 0) {
//     alert(`Se te acabaron los intentos. El número era ${numeroSecreto}.`);
//   }
// }




// Parte 4: Problemas de lógica
// ¿Es año bisiesto?
// Escribe un programa que determine si un año es bisiesto.
// (Un año es bisiesto si es divisible por 4, pero no por 100, salvo que también sea divisible por 400.)

// Palíndromo
// Pide una palabra y determina si se lee igual al revés.

// Contador de vocales
// Pide una frase y cuenta cuántas vocales tiene.

// Fibonacci (opcional)
// Muestra los primeros N números de la serie de Fibonacci.


function bis(diasAnio) {
    if((diasAnio % 4 == 0 && diasAnio%100 != 0)|| (diasAnio % 400 ==0)){ 
        console.log(`Bisiest`)
    }else{
        
        console.log(`No Bisiest`)
    }
}


function invertirMetodos(palabra) {
    // Convertimos a minúsculas y quitamos espacios (opcional para mejorar la verificación)
    let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
    
    // Invertimos la palabra
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    // Comparamos
    if (palabraLimpia === palabraInvertida) {
      console.log(`"${palabra}" es un palíndromo.`);
    } else {
      console.log(`"${palabra}" no es un palíndromo.`);
    }
}


function invertir (palabra){
    // Convertimos a minúsculas y quitamos espacios (opcional para mejorar la verificación)
    if (palabra[palabra.length - 1] === ' '  ||palabra[0] === ' ' ){
        console.log(`la palabra contiene espacios`)
        return false
    }

     // Invertir la palabra (opcional)
    let invertida = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }

    if(palabra == invertida){
        console.log(`Palabra palindromo`)
        return true
    }else{
        console.log(`Palabra no palindromo`)
        return false
    }

}


function contarVocales(palabra) {
    let cont = 0;
    palabra = palabra.toLowerCase(); // Reasignar la cadena en minúsculas

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            cont++;
        }
    }

    if (cont > 0) {
        console.log(`La palabra "${palabra}" tiene ${cont} vocal(es).`);
    } else {
        console.log(`La palabra "${palabra}" no tiene vocales.`);
    }
}


function fibonachi(numero) {
    let ant = 0
    let pos = 1
    let suma = 0

    for (let i = 0; i <= numero ; i++) {
        if (i == 0){
            console.log(`${i}`);
            continue
        }
        if (i == 1){
            console.log(`${i}`);
            continue
        }
        if(i > 1){
            suma = ant + pos
            ant = pos
            pos = suma

            console.log(`${suma}`)

        }


    
    }

    // console.log(`el fibonachi de ${numero} es ${fibonachiResul}`)
}


const prompt = require('prompt-sync')();
let saldo = 15000

while (true) {
    
    console.log("🟡 Bienvenido al Cajero Automático 🟡\n\n" +
    "1. Ver saldo\n" +
    "2. Retirar dinero\n" +
    "3. Depositar dinero\n" +
    "4. Salir\n\n");
    let res = prompt("Elige una opción (1-4):")

    if (res == 1) {
        console.log(`Viendo saldo...\n`)
        console.log(`Tu saldo es ${saldo}\n`)
    }
    
    if (res == 2) {
        console.log(`\n RETIRANDO...`)
        console.log(`Tu saldo es ${saldo}\n`)
        let cantidadRetiro = prompt("Cuanto dinero deseas retirar")
        console.log(`Saldo: ${saldo}`)
        saldo = saldo - cantidadRetiro
        console.log(`acaba de retirar ${cantidadRetiro}\n nuevo saldo ${saldo}`)
        
        
    }

    if (res == 3){
        console.log(`\n\nDEPORSITANDO SALDO...`)
        let cantidadDepositar = parseInt(prompt("Cuanto dinero deseas depositar"))
        console.log(`Saldo: ${saldo}`)
        saldo = saldo + cantidadDepositar
        console.log(`acaba de deporistar ${cantidadDepositar}\n nuevo saldo ${saldo}`)
    }

    if (res == 4) {
        console.log(`\n\nBYE BYE BYE\n\n\n`)
        break
    }

   

    
}

