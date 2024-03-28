//!Flyweight
//!Middleweight
//!Heavyweigh


const resultado = calcularSuma(9, 10);

function ordenarPorPuntaje(objetos) {
  // Implementación del algoritmo de ordenación de burbuja
  for (let i = 0; i < objetos.length - 1; i++) {
    for (let j = 0; j < objetos.length - 1 - i; j++) {
      if (objetos[j].puntaje < objetos[j + 1].puntaje) {
        // Intercambiar los objetos si el puntaje del elemento actual es menor que el siguiente
        let temp = objetos[j];
        objetos[j] = objetos[j + 1];
        objetos[j + 1] = temp;
      }
    }
  }

  // Devolver solo los primeros 5 objetos
  return objetos.slice(0, 5);
}

// Ejemplo de uso
const datos = [
  { nombre: "Juan", puntaje: 85 },
  { nombre: "María", puntaje: 92 },
  { nombre: "Pedro", puntaje: 78 },
  { nombre: "Luis", puntaje: 88 },
  { nombre: "Ana", puntaje: 95 },
  { nombre: "Laura", puntaje: 80 },
];

const primerosCinco = ordenarPorPuntaje(datos);