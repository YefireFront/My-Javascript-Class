function moneyBox(coins){
    let = saveConis = 0;
    saveConis += coins
    console.log(`MoneyBox = ${saveConis}`)
}
moneyBox(5)
moneyBox(5)


function Cajamoney(){
    let saveConis = 0 ;
    function countConis(coins){
        saveConis += coins;
        console.log(` Caja Money: $${saveConis}`)
    }
    return countConis

}

 const MyCajamoney = Cajamoney();

 
 MyCajamoney(5);
 MyCajamoney(5);
 MyCajamoney(125);
 

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