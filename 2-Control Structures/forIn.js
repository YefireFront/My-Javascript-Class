const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Ejemploville'
  };
  
  for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
  }

  
  const numeros = [1, 2, 3, 4, 5];

for (let indice in numeros) {
  console.log('Índice ' + indice + ': ' + numeros[indice]);
}



