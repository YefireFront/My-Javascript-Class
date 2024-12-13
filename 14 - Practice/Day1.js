//% Manipulación de Arrays y Objetos:

// Crea una función llamada calcularPromedio que tome un array de números como argumento y devuelva el promedio de esos números.
const numberArray = [3, 3, 3, 5];
function AVG(arr) {
  const prom =
    arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /
    arr.length;
  console.log(prom);
}
// AVG(numberArray);

//% Utiliza un bucle for of para recorrer el array y calcular la suma de los números.
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  sum += element;
}
// console.log(sum/numberArray.length);

//% Funciones y Datos Primitivos:

// Define una función llamada calcularCuadrado que tome un número como argumento y devuelva el cuadrado de ese número.
const sqrt = (num) => num * num;
// Utiliza una declaración de función para definir la función.
function sqrt2(num) {
  console.log(num * num);
}

//% Manejo de Excepciones:

// Escribe un bloque try...catch que intente convertir una cadena en un número usando parseInt.
function trc(e) {
  try {
    console.log(e);
    newn = parseInt(e);
    console.log(newn);
  } catch (error) {
    console.log("this happend ", error);
  }
}

// trc('24')

//% Bucles y Control de Flujo:

// Utiliza un bucle for para iterar sobre un array de objetos.
// Dentro del bucle, utiliza un if para verificar si alguna propiedad de cada objeto es un string vacío.
// Si encuentras una propiedad vacía, usa break para salir del bucle.
const arrayDeObjetos = [
  { nombre: "yeffer", edad: 25, email: "correo@example.com" },
  { nombre: "Juan", edad: "5", email: "juan@example.com" },
  { nombre: "María", edad: 30, email: "" },
  { nombre: "", edad: "", email: "" },
];

function forlabel(arr) {
  
  mainfor: for (let i = 0; i < arrayDeObjetos.length; i++) {
    const element = arrayDeObjetos[i];
  
    for (const key in element) {
      if (element[key] == "") {
        console.error(`the property ${key} is empty ${element[key]}`);
        break mainfor;
      } else {
        console.log(`${key} ${element[key]}`);
      }
    }
  }
}

//% Async/Await y Promesas:

// Crea una función asincrónica llamada obtenerDatosUsuario que simule una llamada a una API para obtener los datos de un usuario.
// Dentro de esta función, utiliza fetch para hacer una solicitud a una URL ficticia que devuelve datos de usuario.
// Utiliza await para esperar la respuesta del servidor.
// Captura cualquier error usando try...catch y muestra un mensaje de error si la solicitud falla.

function obtenerDatosUsuario() {
  return new Promise((resolve, reject) => {
    // Simulando una solicitud a una API con un retraso de 2 segundos
    setTimeout(() => {
      const datosUsuario = {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30,
      };
      resolve(datosUsuario);
    }, 2000);
  });
}

async function mostrarDatosUsuario() {
  try {
    console.log("Obteniendo datos del usuario...");
    const datosUsuario = await obtenerDatosUsuario();
