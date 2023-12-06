const personas = [
  { nombre: 'Juan', edad: 25, tieneHijos: false },
  { nombre: 'María', edad: 30, tieneHijos: true },
  { nombre: 'Pedro', edad: 20, tieneHijos: false },
 
];

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  
  if (persona.tieneHijos) {
    continue;
  }
  
  if (persona.edad < 25) {
    continue;
  }
  
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}

