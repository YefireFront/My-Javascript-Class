// let numeros = [2, 4, 5, 2, 3, 5];

// let numerosRepetidos = [];

// for (let i = 0; i < numeros.length; i++) {
//     let numeroActual = numeros[i];
//     let contador = 0;

//     for (let j = 0; j < numeros.length; j++) {
//         if (numeroActual === numeros[j]) {
//             contador++;
//         }
//     }

//     if (contador > 1 ) {
//         numerosRepetidos.push(numeroActual);
//     }
// }





class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    getPoints() {
        return this.points;
    }

    getName() {
        return this.name;
    }
}




















