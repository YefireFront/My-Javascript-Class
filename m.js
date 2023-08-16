// /* map*/
// arrNum = [25, 85, 35, 96, 45, 85, 100]
// arrNombre = ['Yeffer', 'Bocaz', 'Real Madrid', 'zidane']

// arrNum.map(e => console.log(e * 2))
// arrNombre.map(e => console.log(e.toUpperCase()))
// arrlong = arrNombre.map(e => e.length)
// console.log(arrlong);

// /**fILTER */

// arr2 = arrNum.filter(e => e % 2 == 0)
// console.log(arr2);
// arr3 = arrNum.filter(e => e >= 18)
// console.log(arr3);
// arr4 = arrNombre.filter(e => e.length > 5)
// console.log(arr4);

// /**forEcah*/

// arrNum.forEach(e => {
//     console.log(e * 2);
// });
// arrNombre.forEach(e => {
//     console.log(`Hola ${e} como estas`);
// });
// arrNombre.forEach(e => {
//     console.log(e + '-¡Genial!');
// });

// v1 = arrNum.find(e => e > 10)
// console.log(v1);
// v2 = arrNum.find(e => e > 21)
// console.log(v2);
// // v3 = arrNombre.find(palabra => palabra.includes("z"));
// // console.log(v3);
// // v3 = arrNombre.find(palabra => {
// //     for (let i = 0; i < palabra.length; i++) {
// //         if (palabra[i] === "z") {
// //             return true;
// //         }
// //     }
// // });
// // console.log(v3);

// for (let i = 0; i < arrNombre.length; i++) {
//     ya = false
//     for (let j = 0; j < arrNombre[i].length; j++) {
//         if (arrNombre[i][j] == 'z') {
//             console.log(arrNombre[i]);
//             ya = true
//         }
//     }
//     if (ya == true) {
//         break
//     }
// }



function formatoFecha(fecha) {
    const partes = fecha.split("-");
    // const fechaFormateada = partes[2] + "/" + partes[1] + "/" + partes[0];
    const fechaFormateada = [partes[2], partes[1], partes[0]].join("/");

    return fechaFormateada;
}

const fechaOriginal = "2023-08-15";
const fechaFormateada = formatoFecha(fechaOriginal);

console.log("Fecha original:", fechaOriginal);
console.log("Fecha formateada:", fechaFormateada);


let arraynuevofecha = []
acum = ""
for (let i = 0; i < fechaOriginal.length; i++) {
    if (fechaOriginal[i] == '-') {
        arraynuevofecha[arraynuevofecha.length]=acum
        acum= ""
    }
    acum += fechaOriginal[i]
}
if (acum != "") {
    arraynuevofecha[arraynuevofecha.length]=acum
}

