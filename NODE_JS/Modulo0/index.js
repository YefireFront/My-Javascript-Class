console.log("Mi ultimo dia sin saber node")

const nombre = "Yeffer James"
console.log(`My nickname is ${nombre}`)

const moment =  new Date()
console.log(`La fecha actual es ${moment.toLocaleString()}`)

// Obtener los componentes de la fecha
const ahora = new Date();
const anio = ahora.getFullYear();
const mes = ahora.getMonth() + 1; // Los meses van de 0 (Enero) a 11 (Diciembre)
const dia = ahora.getDate();
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();


