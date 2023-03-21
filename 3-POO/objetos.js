const team = {
    name : 'Boca',
    city : 'Buenos aires',
    country : 'Argentina',
    championship : [5,12,4,2],
    sponser : {
        2015 : 'Adidad',
        2018 : 'Puma',
        2021 : 'Nikwe'
    },
    Sing (){
        console.log('Que paso con el fantama del Dsenso, que paso con la gallina en san lorenzo');
    }
}



console.log(team.name);
console.log(team.sponser[2015]);
console.log(team.championship);

team.Sing()

// let p = 0
// while (p < 100) {
//     console.log(p);
//     p++
// }


function queso (argu){

    console.log(argu*2);
}


for (let index = 0; index < 10; index++) {
    console.log(index);

    queso(index)
    
}