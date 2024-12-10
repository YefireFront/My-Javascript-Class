// Crear un Set con 5 nombres de jugadores
const playersSet = new Set(['Lionel', 'Cristiano', 'Kylian', 'Neymar', 'Kevin']);

// Crear un array con 10 nombres de jugadores, incluyendo 3 nombres repetidos
const playersArray = ['Lionel', 'Cristiano', 'Kylian', 'Neymar', 'Kevin', 'Lionel', 'Cristiano', 'Kevin', 'Sadio', 'Eden'];

playersSet.forEach(player => console.log(player));

// playersArray.forEach(player => console.log(player));


const playerunique = [... new Set (playersArray)]

console.log(playerunique)



// Crear un Set con algunos lenguajes de programación
const languagesSet = new Set(['JavaScript', 'Python', 'Java', 'C++', 'Ruby']);

// Añadir un nuevo lenguaje al Set
languagesSet.add('Go');

// Intentar añadir un lenguaje duplicado no tendrá efecto
