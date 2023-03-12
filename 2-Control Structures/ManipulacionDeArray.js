/** 
@author NICOLAS MOLINAS <MANIPULACION_DE_ARRAY>
*/


let boca = ['a', 'b', 'c', 'd', 'e']

//*for each
boca.forEach(element => console.log('FOR EACH ',element))


//*MAP 
/** 
 * El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.
 */
const newBoca = boca.map(element => element + ' 1' )
console.log(newBoca);

const ARG_teams =[
    {
        id: 1,
        name: 'Albi Celeste',
        city: 'Buenos Aires',
        country: 'Argentina',
        titulos: 3,
    },
    {
        id : 2,
        name: 'Canarinha',
        city:'Sau Paublo',
        country: 'Brasil',
        titulos: 5,
    },
    {
        id:3,
        name: 'Garra Charrua',
        city : 'monte video',
        country : 'Uruguay',
        titulos: 2,
    }
]

const newTeams = ARG_teams.map(team => team.name + ' '+ team.titulos)


const newTeams2 = ARG_teams.map(team =>{
    return team.name +''+ team.titulos
} )

const newTeams3 = ARG_teams.map(team =>{
    return {
        ...team,
        continate: 'America'
    }
} )
console.log(newTeams);
console.log(newTeams2);
console.log(newTeams3);