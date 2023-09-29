/** 
@author PLATZY -- OSCAR BARAJAS  <CLOSURE>
*/

//* Permite accedre a el ambito de una funcion exterior desde una funcion interior 
//* Se tiene una Clusure cuando una funcion accede a una vareiable fuera de su contexto 


// function moneyBox(coins){
//     let saveConis = 0;
//     saveConis += coins
//     console.log(`MoneyBox = ${saveConis}`)
// }
// moneyBox(5)
// moneyBox(15)


// function Cajamoney(){
//     let saveConis = 0 ;
//     function countConis(coins){
//         saveConis += coins;
//         console.log(` Caja Money: $${saveConis}`)
//     }
//     return countConis

// }

//  const MyCajamoney = Cajamoney();
//  const yefferMoney = Cajamoney();

 
//  MyCajamoney(5);
//  yefferMoney(100)
//  MyCajamoney(5);
 
//  yefferMoney(100)
//  MyCajamoney(5);

 

// function veterinaria (){
//     let animal =[]

//    function addpet(pet){
//     animal.push(pet)
//     console.log(`Veterianrie List ${animal} and the last pet add is ${pet}`)

//    }
//    return addpet
// }

// const MarchPets = veterinaria()
//  MarchPets('PERRO')
//  MarchPets('GATOS')


//  function exterior() {
//     var variableExterior = 10;
  
//     function interior(p) {
//       console.log(variableExterior + p);
//     }
  
//     return interior;
//   }
  
//   let clausura = exterior();
//   let clausura2 = exterior();
  
//   clausura(0); // Esto imprimirá "10" en la consola
//   clausura(15); // Esto imprimirá "10" en la consola

  


/** 
@author LA COCINA DEL CODIGO  <CLOSURE>
*/


function countCrator() {
    let cot = 0

    setTimeout(()=>{
        cot += 100 
    }, 5000)

    return function increase () {
        return cot++
    }
}

firscounter = countCrator()