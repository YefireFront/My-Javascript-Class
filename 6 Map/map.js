const miMapa = new Map();
miMapa.set('a', 1);
miMapa.set('b', 2);
miMapa.set('c', 3);

// Iterar sobre un mapa y mostrar claves y valores utilizando for...of y entries()
for (const [clave, valor] of miMapa.entries()) {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
}
