// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// numbers.sort();
// console.log(numbers);

// const Boca = ['Gati', 'Navarro', 'Serna', 'Riquelme', 'aaaa']
// Boca.reverse()
// console.log(Boca);
// // Boca.sort()
// // console.log(Boca);

// let song = "Que paso con el fantasma del descenso"
// let yef = song.replace('fantasma', 'ghost')
// console.log(song);
// console.log(yef);


// const arr = [9, 52, 61, 8, 1, 9, 2, 9]
// let ant = 0
// let pos = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         ant = arr[i]
//         pos = arr[i + 1]
//         // chgange
//         arr[i] = pos
//         arr[i + 1] = ant
//         i = 0

//     }
// }
// console.log(arr);

console.log(typeof(67));
console.log(typeof('Yeffre'));
console.log(typeof(true));

function formatoFecha(fecha) {
    const partes = fecha.split("-");
    const fechaFormateada = partes[2] + "/" + partes[1] + "/" + partes[0];
    // const fechaFormateada = [partes[2], partes[1], partes[0]].join("/");
    return fechaFormateada;
}

const fechaOriginal = "2023-08-15";
const fechaFormateada = formatoFecha(fechaOriginal);

// console.log("Fecha Original:", fechaOriginal);
// console.log("Fecha Formateada:", fechaFormateada);


let AP = [];
let acum = "";
for (let i = 0; i < fechaOriginal.length; i++) {
    if (fechaOriginal[i] == '-') {
        AP[AP.length] = acum + ''
        acum = ""
        continue
        
    }
    acum += fechaOriginal[i]
}
if (acum !== "") {
    AP[AP.length] = acum;
}
console.log(AP);

let fin = AP[2] + '/'+ AP[1] + '/'+ AP[0]
console.log(fin);

