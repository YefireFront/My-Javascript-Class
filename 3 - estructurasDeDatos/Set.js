

// | Método          | Descripción                      |
// | --------------- | -------------------------------- |
// | `add(valor)`    | Añade un valor                   |
// | `delete(valor)` | Elimina un valor                 |
// | `has(valor)`    | Comprueba si existe              |
// | `clear()`       | Elimina todos los valores        |
// | `size`          | Devuelve cuántos elementos tiene |


const libros = new Set();

libros.add('it')
libros.add('Paranormla Activity')
libros.add('Pert harbo')

let a = libros.delete('it') 
console.log(a) // si elimina corrcetamente devuele true

if (libros.has('it')){
    console.log('si esxiste')
}else{
    console.log('no esxixte')
}

console.log(libros.size)



//Crear un set de empresas de software con valores
const empresasSoftware = new Set(['Globant', 'Mercado Libre', 'Despegar', 'Pedidos Ya']); 

console.log(`${empresasSoftware.size} empresas de software:`); // Muestra la cantidad de empresas



//recorrer el set y mostrar cada empresa



for (const element of empresasSoftware) {
    console.log(element)
}



empresasSoftware.forEach(empresa =>{
 console.log(empresa)
})




// | Característica    | `Set`                       | Array                                     |
// | ----------------- | ----------------------------| ----------------------------------------- |
// | Duplicados        | ❌ No permite               | ✅ Sí                                   |
// | Acceso por índice | ❌ No                       | ✅ Sí (`arr[0]`)                        |
// | Orden             | Mantiene orden de inserción  | Mantiene orden de inserción               |
// | Búsqueda rápida   | ✅ Sí (`has`)               | ❌ Normalmente más lenta con `.includes()` |


// intersenctio  method 



const food1Ingredientes = new Set(['tomate', 'lechuga', 'carne', 'queso']);
const food2Ingredientes = new Set(['tomate', 'lechuga', 'pollo', 'aguacate']);

const commonIngredientes =  food1Ingredientes.intersection(food2Ingredientes)

console.log(commonIngredientes) 


//  union method

const fusionIngredientes = food1Ingredientes.union(food2Ingredientes);
console.log(fusionIngredientes); 


// Diferencia entre dos sets
const diferenciaIngredientes1 = food1Ingredientes.difference(food2Ingredientes);
const diferenciaIngredientes2 = food2Ingredientes.difference(food1Ingredientes);

console.log(diferenciaIngredientes1); 
console.log(diferenciaIngredientes2); 


// aymetric difference
const diferenciaAsimetrica = food1Ingredientes.symmetricDifference(food2Ingredientes);
console.log(diferenciaAsimetrica); 