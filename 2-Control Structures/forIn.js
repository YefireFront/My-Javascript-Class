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




const libros = [
    { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien' },
    { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' }
  ];
  
  for (let index in libros) {
    console.log('Libro ' + (parseInt(index) + 1) + ': ' + libros[index].titulo);
  }
  