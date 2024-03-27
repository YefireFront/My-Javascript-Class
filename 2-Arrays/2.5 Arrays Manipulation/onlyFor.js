


const MugiwaraCrew = ["Ussop", "Nami", "Sanji", "Lufy", "Zoro"];
const Boca = [2000, 2002, 2006, 2007];
const Me = [33, 56, 42, 30, 88, 25, 1, 33];
const Arg = ["Boca", "RiBer", "SanLorenoz"];
const Bra = ["Santos", "Palmeiras", "Fluminense"];
const personajesNaruto = [
  {
    nombre: "Naruto Uzumaki",
    rango: "Hokage",
    aldea: "Aldea Oculta de la Hoja",
  },
  {
    nombre: "Sasuke Uchiha",
    rango: "Rogue Ninja",
    aldea: "Aldea Oculta de la Hoja",
  },
  {
    nombre: "Sakura Haruno",
    rango: "Ninja Médico",
    aldea: "Aldea Oculta de la Hoja",
  },
  {
    nombre: "Kakashi Hatake",
    rango: "Hokage",
    aldea: "Aldea Oculta de la Hoja",
  },
  {
    nombre: "Tsunade",
    rango: "Hokage",
    aldea: "Aldea Oculta de la Hoja",
  },
  {
    nombre: "Gaara",
    rango: "Kazekage",
    aldea: "Aldea Oculta de la Arena",
  },
  {
    nombre: "Onoki",
    rango: "Tsuchikage",
    aldea: "Aldea Oculta de la Roca",
  },
  {
    nombre: "A",
    rango: "Raikage",
    aldea: "Aldea Oculta de las Nubes",
  },
  {
    nombre: "Mei Terumi",
    rango: "Mizukage",
    aldea: "Aldea Oculta de la Niebla",
  },
  {
    nombre: "Darui",
    rango: "Raikage",
    aldea: "Aldea Oculta de las Nubes",
  },
];
const personas2 = [
    { nombre: "Juan", edad: 25, país: "Argentina" },
    { nombre: "Ana", edad: 32, país: "España" },
    { nombre: "Pedro", edad: 20, país: "Argentina" },
    { nombre: "María", edad: 28, país: "México" },
    { nombre: "Carlos", edad: 40, país: "Argentina" },
    { nombre: "Sara", edad: 27, país: "España" },
    { nombre: "Luis", edad: 35, país: "Argentina" },
    { nombre: "Elena", edad: 31, país: "España" },
    { nombre: "Andrés", edad: 29, país: "Argentina" },
    { nombre: "Laura", edad: 33, país: "México" },
  ];

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Juanfer Quintero", edad: 25 },
  { nombre: "Judas", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Anastacia", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Maria", edad: 28 },
  { nombre: "Marta", edad: 28 },
  { nombre: "Melaniew", edad: 28 },
];

const mapa = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 112],
];







//%1 Sort Array
function Sort(arr) {
  let comodin1;
  let comodin2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      comodin1 = arr[i];
      comodin2 = arr[i + 1];
      arr[i] = comodin2;
      arr[i + 1] = comodin1;
      i = -1;
    }
  }
  console.log(arr);
};

//%2 Join two arrays
function Union(arr, arr2) {
  let arr3 = [];
  console.log(arr.length);
  console.log(arr2.length);

  if (arr.length < arr2.length) {
    for (let i = 0; i <= arr.length; i++) {
      arr3[i] = arr[i];

      if (i < arr2.length) {
        console.log(arr2[i]);
        arr3[i + arr.length] = arr2[i];
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      arr3[i] = arr2[i];

      if (i < arr.length) {
        arr3[i + arr2.length] = arr[i];
      }
    }
  }
  console.log(arr3);
};

//%3 Clon array
function Clones(arr) {
  let clonArray = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    clonArray[j] = arr[i];
    clonArray[j + 1] = arr[i];
    j += 2;
  }

  console.log(clonArray);
};

//%4 find property in a object array
function FindHokage(arr) {
  let h = 0;
  const hokae = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rango == "Hokage") {
      hokae[h] = arr[i];
      h++;
    }
  }
  console.log(hokae);
};

//%5 Add or Delete Character
function manejarTripulacion(array, personaje, accion) {
  if (accion.toUppercase() == "AGREGAR") {
    array[array.length] = personaje;
  }
  if (accion.toUppercase() == "ELIMINAR") {
    let newCrew = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if ( array[i] != personaje ) {
        newCrew[newCrew.length] = array[i];
      }
    }
    array = newCrew;
  }
  console.log(array);
};

//%6 find something y matrix bidimension
function encontartesoro(mapa) {
  for (let i = 0; i < mapa.length; i++) {
    if (typeof mapa[i] != "object") {
      console.log(mapa[i]);
    }

    for (let j = 0; j < mapa[i].length; j++) {
      console.log(mapa[i][j]);
      if (mapa[i][j] == "x") {
        console.log(`El tesoro se encunetra en la fila ${i} Columna ${j}`);
      }
    }
  }
};














