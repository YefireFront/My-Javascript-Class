
// const teams =['Boca','Real Madrid','Santos','Barcelona','Racing','Boca','Santos','Barcelona',]
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


//* VALIDAR SI ALGUN DATO CUMPLE CON LA CONDICION ( MAP and SOME )


const mapeado_Title = greatsTeams.map(k =>  k.titulos)
const someado = mapeado_Title.some((k,i) => k>10  )
console.log(mapeado_Title);
console.log(`es ${someado} que algun elemento coincide con la condicion`);


//* VALIDAR SI TODOS LOS DATOS CUMPLE CON LA CONDICION (MAP and EVERY)

const mapeado_Name = greatsTeams.map(k =>  k.team)
const everyado = mapeado_Name.every((k) => k.length > 3 )
console.log(mapeado_Name);
console.log(`es ${everyado} que todos los  elementos coinciden con la condicion`);


//*  ENCONTRAR EL PRIMER ELEMENTO QUE CUMPLE CON UNA CONDICION ( find )


const findneado = greatsTeams.find(country => country.country === 'US')
console.log(`The team that macth is`);
console.log( findneado);


//*  CREATE AN ARRAY THAT IS SEPARATED BY PACE (SPLIT and JOIN)

const bocaFrase = 'El jugador numero 12'
let bocaFraseSplit = bocaFrase.split(' ')
console.log(bocaFrase);
console.log(bocaFraseSplit);

let bocaFraseJoin = bocaFraseSplit.join('/')
console.log(bocaFraseJoin);

//*   CONVERTY 2 ARRAYS INTO ONE  (CONCAT)

const numandstribg = num.concat(teams)
console.log(numandstribg);


//* CREATE AN ARRAY WITH THE START DATE OF THIS OBJECT

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
    };
 
    
    // TODO My solution :)
    const pc = calendars.primaryCalendar.map(keys=>keys.startDate)
    console.log(pc);
    
    const sc = calendars.secondaryCalendar.map(keys=>keys.startDate)
    console.log(sc);
    
    
    
    // TODO The Solutio :)
    
    const ObjToArray = Object.values(calendars)  //? convertir objeto a array 
    console.log(ObjToArray);
    
    const Flatarray = ObjToArray.flat() //? Flatten the array one lvl 
    console.log(Flatarray);
    
    const MapArray = Flatarray.map(keys=>keys.startDate) //? map de array and return startDate property of the objets 
    console.log(MapArray);
    


    
//* CAUNT THE NUMBERS OF WORD THAT REAPET IN THIS ARRAY


const a = ["Beautiful is better than ugly","Explicit is better than implicit","Simple is better than complex","Complex is better than complicated",]

console.log(a);
const text = a.join(' ')
console.log(text);
const word = text.split(' ');
console.log(word);
console.log(word.length);
  



const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();


const Boca = ['Gati', 'Navarro', 'Serna', 'Riquelme', 'aaaa']
Boca.reverse()

let song = "Que paso con el fantasma del descenso"
let yef  = song.replace('fantasma', 'ghost')


const arr = [9, 52, 61, 8, 1, 9, 2, 9]
let ant = 0
let pos = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        ant = arr[i]
        pos = arr[i + 1]
        // chgange
        arr[i] = pos
        arr[i + 1] = ant
        i = 0

    }
}
console.log(arr);



function formatoFecha(fecha) {
    const partes = fecha.split("-");
    const fechaFormateada  = partes[2] + "/" + partes[1] + "/" + partes[0];
    // const fechaFormateada = [partes[2], partes[1], partes[0]].join("/");
    return fechaFormateada;
}

const fechaOriginal = "2023-08-15";
const fechaFormateada = formatoFecha(fechaOriginal);

// console.log("Fecha Original:", fechaOriginal);
// console.log("Fecha Formateada:", fechaFormateada);


let AP = [];
let acum = "";
for (let i = 0; i < fechaOriginal.length; i++) {
    if (fechaOriginal[i] == '-') {
        AP[AP.length] = acum + ''
        acum = ""
        continue
        
    }
    acum += fechaOriginal[i]
}
if (acum !== "") {
    AP[AP.length] = acum;
}
console.log(AP);

let fin = AP[2] + '/'+ AP[1] + '/'+ AP[0]
console.log(fin);
