// *Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// %aolucion con arrow Function

// encontarCaracteres = ( s ) => console.log(`La cadena ${s} tiene un total de ${s.length} caracteres`);
// let resul = encontarCaracteres('Yefire')
// console.log(resul);
// %solucion con validaciones

// function encontarCaracteres(s) {
//   let canti = 0;

//   if (typeof s != "string") {
//     console.log("Valor incorrecto");
//     return undefined;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == " ") {
//       continue;
//     }
//     canti++;
//   }
//   console.log(`La cadena ${s} tiene ${canti} de caracteres`);
// }


//*Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//%solution

 recortar = ( n , c ) =>{
  let a = []
  a = [...n]
  for (let i = 0; i < c; i++) {
    console.log(a[i]);
  }
}

recortar("Doflamingo",4)