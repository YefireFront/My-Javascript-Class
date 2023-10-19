const promise = new Promise(function(resolve, reject){

})

const cows = 5;
const countCows = new Promise(function(resolve,reject){

    if (cows > 10) {
        resolve(`we have ${cows} cows on the farm`)
    }else{
        reject("There is'n cows on the farm")
    }

})


countCows.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.warn(error);
}).finally(()=>console.log(`Finally `));