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

