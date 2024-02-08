const teams =['Boca','Real Madrid','Santos','Barcelona','Racing','Boca','Santos','Barcelona',]
const num = ['1','2','3','4','5','5',[23,32,35],'9']
const greatsTeams =[
    {
        team: 'Boca',
        titulos: 6,
        country :'Argentina',
        stadium : 'Bombonera',
        motto : 'EL jugador numero 12'
        
    },
    {
        team: 'Real Madrid',
        titulos: 14,
        country:'España',
        stadium : 'Bernabeu',
        
        
    },
    {
        team: 'Santos',
        titulos: 3,
        country:'Brasil',
        stadium : 'Maracana',
        motto : 'La casa del el rey pele'
    },
    {
        team: 'Barcelona',
        titulos: 5,
        country:'España',
        stadium : 'Cap noun',
        motto : 'Siempre cule'
    },
    {
        team: 'Racing',
        titulos: 1,
        country:'Argentina',
        stadium : 'Amalfinati'
    },
    {
      team: 'Manchester United',
      titulos: 4,
      country:'Inglaterra',
      stadium : 'Stanford breach'
    },
    {
        team: 'Milan',
        titulos: 6,
        country :'Italia',
        stadium : 'Jusepa Meatzaa'
    },
    {
        team: 'LA Galaxy',
        titulos: 1,
        country:'US',
        stadium : 'Dignity Health Sports Park'
    }
]

//%1

//* NUMERO DE VECES QUE SE REPITE UN DATO EN UN OBJ  (Map y Reduce)

const mapeado_Country = greatsTeams.map(k =>  k.country)
const reducido = mapeado_Country.reduce((obj , value)=>{
    if (obj[value]){
        obj[value] = obj[value] + 1;
    }else{
        obj[value] = 1;
    }
    return obj;
    
},{})


console.log(mapeado_Country);
console.log(reducido);



//%2

//* VALIDAR SI ALGUN DATO CUMPLE CON LA CONDICION ( MAP and SOME )


const mapeado_Title = greatsTeams.map(k =>  k.titulos)
const someado = mapeado_Title.some((k,i) => k>10  )
console.log(mapeado_Title);
console.log(`es ${someado} que algun elemento coincide con la condicion`);



//%3
  
  arrTeam = greatsTeams.map( e => e.team)
  arrTeam = greatsTeams.map( e =>{
      return {...e, sport: 'soccer'}
  })
  console.log(arrTeam);
  
  title = greatsTeams
    .map((e) => e.titulos)
    .reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item] += 1;
      }
      return obj;
    }, {});
  
  
  let parrafo = "si yo considero que yeffer es una gran persona, entonces yeffer debe, mirar a yeffer y pensarlo bien";
  
  const repe = (parrafo, word, cont = 0) => {
    let arr = parrafo.split(" ");
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (word == element) {
        cont++;
      }
    }
    console.log(`la palabra ${word} esta ${cont} veces`);
  };


  //%4

  //* VALIDAR SI TODOS LOS DATOS CUMPLE CON LA CONDICION (MAP and EVERY)

const mapeado_Name = greatsTeams.map(k =>  k.team)
const everyado = mapeado_Name.every((k) => k.length > 3 )
console.log(mapeado_Name);
console.log(`es ${everyado} que todos los  elementos coinciden con la condicion`);





