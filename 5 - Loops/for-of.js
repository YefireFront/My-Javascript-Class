//!Flyweight
//!Middleweight
//!Heavyweigh



/* //*Ejercicio 1 Suma de elementos de un array
Escribe una función llamada sumaArray que tome un array de números como argumento y devuelva la suma de todos los elementos del array.
*/

const numeros = [1, 2, 3, 4, 5];

let suma = 0
for (const n of numeros) {
    console.log(suma += n);
}



/* //* Ejercicio 2: Concatenación de strings
Escribe una función llamada concatenarStrings que tome un array de strings como argumento y devuelva
una sola cadena que sea la concatenación de todos los elementos del array.
*/



const palabras = ["Hola", " ", "mundo", "!"];
const Strings = (textarray)=>{

    let newText = ''

    for (const word of textarray) {
        newText += word
        console.log(newText);
    }

}




/* //*Ejercicio 3 contarVocales
Escribe una función llamada contarVocales que tome una cadena como argumento y devuelva el número de vocales (a, e, i, o, u) en la cadena.
*/


const texto = "JavaScript es divertidO!";
const vocales = (text)=>{
    vocalCounter = 0   

    // for (const letter of text) {
    //     if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||letter == 'u' ) {
    //         vocalCounter ++
    //         console.log(`letter ${letter} allfound ${vocalCounter}`);
    //     }
    // }


 
    //% method 
    
    const vocales ='aeiou'

    for (const letter of text) {
        if (vocales.includes(letter.toLowerCase())) {
            vocalCounter ++
            console.log(vocalCounter);
        }
        
    }
}

