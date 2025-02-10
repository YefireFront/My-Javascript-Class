// Declaración y asignación de un mapa
let mapa = new Map();
mapa.set("nombre", "Ana");
mapa.set("edad", 25);

// Acceso a valores del mapa
console.log(mapa.get("nombre")); // "Ana"

// Comprobar existencia de una clave
console.log(mapa.has("edad")); // true

// Eliminar una clave
mapa.delete("edad");
console.log(mapa.has("edad")); // false

// Tamaño del mapa
console.log(mapa.size); // 1
