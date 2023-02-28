/** 
@author PLATZY -- OSCAR BARAJAS  <SCOPE>
*/

//!----------------------------------------------------------------------------- SCOPE

 //*El alcance que determina la accesibilidad de las variables 

//-Global Scope -Function scope -Block scope
//? En javaScript, los objetos y las funciones tambine son variables 


//! Global Scope

// var fruit = "orange" //*global

// function bestFruit () {
//     console.log(fruit);    
// }

// bestFruit()


// function contries () {
//     country = 'Colombia' //al no ser Declarada Pasa automaticamenet a ser //*global 
//     console.log(country);
// }

// contries()
// console.log(country);




//! Function  Scope
//* las variables declaradas dentro de esta funcion van a ser accesibles solamentes dentro de esta funcion y en cualquiera de sus funcoiones anidadas 
//? Variables defined inside a function are not accessible (visible) from outside the function.


// function getting  (arguments) {
//     let userName = 'Ana'
//     console.log(userName);
    
//     if (userName === 'ana') {
        
//     }
// }

// getting()

// console.log(userName);

     

//! Block  Scope
 //*Las variables definidas dentro de un bloque solo pueden se utilizadas dentro de ese bloque  
 // ? Variables declared inside a { } block cannot be accessed from outside the block:

//  function Basil () {
//     if (true) {
//         var Santos = 'Santos'
//         let Palmeiras = 'Palmeiras'
//         const Flamengo ='Flamengo'
        
//     }

//     console.log(Santos);
//     console.log(Palmeiras);
//     console.log(Flamengo);
//  }
 
//  Basil()
 

