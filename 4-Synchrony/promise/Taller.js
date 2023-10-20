//* Crea una promesa que resuelva con la cadena "Rasengan" después de 1 segundo.

function rasenganPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rasengan");
    }, 1000);
  });
}

rasenganPromise().then((result) => {
//   console.log(result);
});

//* Crea una función que tome un número como parámetro y devuelva una promesa que resuelva con ese número duplicado.

function duplicado(n) {
  return new Promise((resolve, reject) => {
    resolve(`${n}${n}`);
  });
}

duplicado(9).then((res) => {
//   console.log(res);
});

//*Crea una promesa que se rechace después de 500 milisegundos con el mensaje "Sasuke no te acepta".

function sasuke(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name == "Sasuke") {
        resolve("Sasuke regresa ");
      } else {
        reject("Sasuke no te acepta");
      }
    });
  }, 500);

}

sasuke("Sauke")
  .then((rese) => {
    // console.log(rese);
  })
  .catch((res) => {
    // console.log(res);
  });


  //*Crea una promesa que se resuelva después de 2 segundos con la cadena "Nunca me rendiré".

  function dontgiveup() {

   return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("Nunca me rendiré")
            
        }, 2000);
    })
    
  }


  dontgiveup()
  .then(res=>{
    // console.log(res);
  })


//*Crea una función que devuelva una promesa que se resuelva con la cadena "Te amo, Naruto" después de 3 segundos.

function love(naruto) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (naruto == 'yes') {
                resolve ('Te amo naruto')
            }else{
                reject('Te amo sasuke')
            }
        }, 3000);
    })
    
}


love('yes')
.then((res)=>{
    // console.log(res);
})
.catch((res)=>{
    console.log(res);
})



//*Crea una promesa que se resuelva con la cadena "Gomu Gomu no... ¡Pistol!" después de 2 segundos.

function luffy() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Gomu Gomu noooooo... ¡PISTONOOO!')
        }, 2000);
    })
    
}



luffy()
.then((res)=>{
    // console.log(res);
})


//*Crea una función que tome un objeto con una propiedad "animal" 
//*y devuelva una promesa que se resuelva con el objeto transformado después de 3 segundos.

const PETS = {
    animal:'Perro',
    name: 'Lucky',
    raza: 'retrever',
    trans: false
}
function animal(pet) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pet.trans=true
            resolve(pet)
        }, 3000);
    })
    
}

animal(PETS)
.then((res)=>{
    // console.log(res);
})



//*Crea una promesa que se resuelva después de 5 segundos con una lista de libros que Robin ha investigado.

const BOOKS = ['atomic Habit','If you dream you get it', '5am club']

function robin(book) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(book)
        }, 5000);
    })
}


robin(BOOKS)
.then((res)=>{
    // console.log(res);
})



//*Crea una función que simule la búsqueda del tesoro de Luffy, 
//*donde la promesa se resuelve después de un tiempo aleatorio entre 1 y 10 segundos con un mensaje de tesoro encontrado.




function onePiece(max,min) {

    return new Promise((resolve, reject) => {
        timeout = Math.random()* (max - min) + min;
        timeout= Math.round(timeout)
        let mili = timeout * 1000
        
        setTimeout(() => {
            resolve(`tesoro encontrado despue de ${timeout} segundos`);
        }, mili);
    })
    
}


onePiece(15,1)
.then((res)=>{
    // console.log(res);
})




//* Crea una promesa que se resuelva con la cadena "Kamehameha" 
//*después de 1 segundo y luego se rechace con la cadena "No es suficiente" después de 3 segundos.



function kame() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('KameHame Ha')
        }, 1000);
        setTimeout(() => {
            reject('Its not enough')
        }, 3000);
        
    })
    
}







//*Crea una función que tome un nivel de entrenamiento y devuelva una promesa que se resuelva con el poder de Vegeta 
//*después de ese entrenamiento, después de 5 segundos.

function gokuTransformation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("¡Super Saiyan!");
      }, 2000);
      
    });
  }
  
  gokuTransformation()
    .then((result) => {
      console.log(result);
      return new Promise((resolve) => {
          setTimeout(() => {
            resolve("¡Super Saiyan Blue!");
          }, 4000);
        
      })
    })
    .then(res=>{
        console.log(res);
    })

    