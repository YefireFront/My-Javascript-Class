

const jugadorNBA = new Map();
jugadorNBA.set("nombre", "Lebron James");
jugadorNBA.set("equipo", "Los Angeles Lakers");
jugadorNBA.set(2, "Ala-Pívot");
jugadorNBA.set("anillos", 4);
jugadorNBA.set("activo", true);
jugadorNBA.set(3, "base");


// console.log(jugadorNBA); 


// crear un map com valores
const MejoresLibrosDeLaHistoria = new Map(
[
    [1, 'Cien años de soledad'],
    [2, 'El Quijote'],  
    [3, 'Orgullo y prejuicio'],
    [4, '1984'],
    [5, 'El gran Gatsby'],
    [6, 'Matar a un ruiseñor'],
    [7, 'Crimen y castigo'],    
    [8, 'El señor de los anillos'],
    [9, 'Ulises'],
    [10, 'En busca del tiempo perdido']
]
);

// mostrar la cantidad de libros tamaño del map
// console.log(`${MejoresLibrosDeLaHistoria.size} libros:`); 

// recorrer el map y mostrar cada libro
for (const [clave, valor] of MejoresLibrosDeLaHistoria) {
    // console.log(`${clave}: ${valor}`);
}


// | Método              | Descripción                     |
// | ------------------- | ------------------------------- |
// | `set(clave, valor)` | Añade o actualiza un valor      |
// | `get(clave)`        | Obtiene el valor de una clave   |
// | `has(clave)`        | Comprueba si la clave existe    |
// | `delete(clave)`     | Elimina una entrada             |
// | `clear()`           | Elimina todas las entradas      |
// | `size`              | Devuelve el número de elementos |


// const basketabllGameEvent = new Map([
//     [1, 'Game started'],
//     [, '3 pointer scored  by player 23 Los Angeles Lakers'],
//     [3, 'Foul by player 7 Los Angeles Lakers'],
//     [4, 'Free throw scored by player 12 Los Angeles Lakers'],
//     [5, 'Timeout called by coach of Los Angeles Lakers'],
//     [6, 'Game ended with score 120-115']   
// ]);

const soccerGameEvent = new Map([
    [1, 'Game started'],
    [18, 'GOAL'],
    [25, 'Substitution'],
    [30, 'Yellow card '],
    [45, 'Half-time break'],
    [60, 'Substitution'],
    [75, 'GOAL'],
    [90, 'Full-time whistle']   
]);


for (const [min, event] of soccerGameEvent) {
   half = min <= 45 ? 'FIRS' : 'SECOND' 
    console.log(`${half}HALF ${min} : ${event}`)
}    

