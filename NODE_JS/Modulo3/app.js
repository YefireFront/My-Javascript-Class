// console.log("Hola Mundo desde Node.js");

// console.warn("Esto es una advertencia");

// console.error(("Esto es un error"));




//modulo process

// console.log("ID del proceso:", process.env);

// console.log("pocess argv:", process.argv);

// //uso de memoria
// console.log("Uso de memoria:", process.memoryUsage());



// Modulo OS

// const os = require('os');

// console.log("Información del sistema operativo:");
// console.log("Tipo de SO:", os.type());
// console.log("Plataforma:", os.platform());
// console.log("Arquitectura:", os.arch());
// console.log("Memoria libre:", os.freemem());
// console.log("Memoria total:", os.totalmem());
// console.log("Directorio home:", os.homedir());
// console.log("Tiempo de actividad (s):", os.uptime());


// modulo Timer

// console.log("Inicio del temporizador");
// setTimeout(() => {
//   console.log("Han pasado 7 segundos");
// }, 7000);

// let contador = 0;   
// const intervalo = setInterval(() => {
//   contador++;
//   console.log(`Han pasado ${contador} segundos`);   
//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log("Temporizador detenido");
//     }
// }, 1000);   


// // set tme out cn args
// function saludar (nombre) {
//     console.log(`Hola, ${nombre}`);
// }

// setTimeout( saludar, 8000, "Yeffer");  


// //setInmediate
// function recibeinmidiae( item) {
//     console.log(`Item: ${item}`);
// }

// console.log("Antes de setImmediate");

// setImmediate( recibeinmidiae , "item");

// console.log("Fin del archivo app.js");



// Modulo fs

const fs = require('fs');

// Leer un archivo de texto

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {  
        console.error("Error al leer el archivo:", err);
        return;
    }   
    console.log("Contenido del archivo:", data);
});




// Escribir en un archivo de texto
const contenido = "Este es un nuevo contenido para el archivo.\n";  
fs.writeFile('archivo.txt', contenido, (err) => {
    if (err) {
        console.error("Error al escribir en el archivo:", err);
        return;
    }   
    console.log("Archivo escrito exitosamente");
});

// Agregar contenido a un archivo existente
const nuevoContenido = "Este es contenido adicional.\n";  
fs.appendFile('archivo.txt', nuevoContenido, (err) => {
    if (err) {
        console.error("Error al agregar contenido al archivo:", err);
        return;
    }   
    console.log("Contenido agregado exitosamente");
});