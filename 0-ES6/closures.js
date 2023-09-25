/** 
@author PLATZY -- OSCAR BARAJAS  <CLOSURE>
*/
//!------------------------------------------CLOUSERE
//* Permite accedre a el ambito de una funcion exterior desde una funcion interior 
//* Se tiene una Clusure cuando una funcion accede a una vareiabnle fuera de su contexto 

//?todo = No se aplica clouser
function moneyBox(coins){
    let saveConis = 0;
    saveConis += coins
    console.log(`MoneyBox = ${saveConis}`)
}
moneyBox(5)
moneyBox(15)


function Cajamoney(){
    let saveConis = 0 ;
    function countConis(coins){
        saveConis += coins;
        console.log(` Caja Money: $${saveConis}`)
    }
    return countConis

}

 const MyCajamoney = Cajamoney();
 const yefferMoney = Cajamoney();

 
 MyCajamoney(5);
 yefferMoney(100)
 MyCajamoney(5);
 
 yefferMoney(100)
 MyCajamoney(5);
 yefferMoney(100)
 

function veterinaria (){
    let animal =[]

   function addpet(pet){
    animal.push(pet)
    console.log(`Veterianrie List ${animal} and the last pet add is ${pet}`)

   }
   return addpet
}

const MarchPets = veterinaria()
 MarchPets('PERRO')
 MarchPets('GATOS')
 MarchPets('VACA')
 MarchPets('POLLO')
 MarchPets('POLLO')


function Yeffer (Somos, Venimos) {
    Somos += Venimos;
    console.log(`Yeffer: ${Somos}`)
}

