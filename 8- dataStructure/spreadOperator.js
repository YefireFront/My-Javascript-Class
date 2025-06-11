// Ejemplo 1: Spread con Arrays - Copiar un array
const numeros = [1, 2, 3];
const numerosCopia = [...numeros];
console.log('Ejemplo 1:', numerosCopia); // [1, 2, 3]

// Ejemplo 2: Spread con Arrays - Combinar arrays
const frutas = ['manzana', 'pera'];
const verduras = ['zanahoria', 'lechuga'];
const alimentos = [...frutas, ...verduras];
console.log('Ejemplo 2:', alimentos); // ['manzana', 'pera', 'zanahoria', 'lechuga']

// Ejemplo 3: Spread con Arrays - Insertar elementos
const numeros2 = [1, 2, 3];
const numerosNuevos = [0, ...numeros2, 4, 5];
console.log('Ejemplo 3:', numerosNuevos); // [0, 1, 2, 3, 4, 5]

// Ejemplo 4: Spread con Arrays - Convertir string a array
const palabra = 'Hola';
const letras = [...palabra];
console.log('Ejemplo 4:', letras); // ['H', 'o', 'l', 'a']

// Ejemplo 5: Spread con Objetos - Copiar un objeto
const persona = {
    nombre: 'Juan',
    edad: 30
};
const personaCopia = { ...persona };
console.log('Ejemplo 5:', personaCopia); // { nombre: 'Juan', edad: 30 }

// Ejemplo 6: Spread con Objetos - Combinar objetos
const infoBasica = {
    nombre: 'María',
    edad: 25
};
const infoAdicional = {
    ciudad: 'Madrid',
    trabajo: 'Programadora'
};
const infoCompleta = { ...infoBasica, ...infoAdicional };
console.log('Ejemplo 6:', infoCompleta);

// Ejemplo 7: Spread con Objetos - Sobrescribir propiedades
const configuracion = {
    tema: 'oscuro',
    idioma: 'español'
};
const configuracionActualizada = {
    ...configuracion,
    tema: 'claro'
};
console.log('Ejemplo 7:', configuracionActualizada);

// Ejemplo 8: Spread en parámetros de función
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log('Ejemplo 8:', sumar(1, 2, 3, 4)); // 10

// Ejemplo 9: Spread con Arrays - Crear una copia profunda
const matriz = [[1, 2], [3, 4]];
const matrizCopia = matriz.map(fila => [...fila]);
console.log('Ejemplo 9:', matrizCopia);

// Ejemplo 10: Spread con Objetos - Clonar y modificar
const usuario = {
    nombre: 'Carlos',
    preferencias: {
        tema: 'oscuro',
        notificaciones: true
    }
};
const usuarioNuevo = {
    ...usuario,
    nombre: 'Carlos Actualizado',
    preferencias: {
        ...usuario.preferencias,
        tema: 'claro'
    }
};
console.log('Ejemplo 10:', usuarioNuevo);

// Ejemplo 11: Spread con Arrays - Eliminar duplicados
const numeros3 = [1, 2, 2, 3, 3, 4];
const numerosUnicos = [...new Set(numeros3)];
console.log('Ejemplo 11:', numerosUnicos); // [1, 2, 3, 4]

// Ejemplo 12: Spread con Objetos - Valores por defecto
const configuracionBase = {
    tema: 'claro',
    idioma: 'español',
    notificaciones: true
};
const configuracionUsuario = {
    ...configuracionBase,
    ...{ tema: 'oscuro' }
};
console.log('Ejemplo 12:', configuracionUsuario); 