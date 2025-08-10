const getCountryAndNei = function (country) {

    
    // AJAX call conutruy 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function(){
        console.log(this)
        console.log(request)
        //Obteniendo el paos
        const [data] = JSON.parse(this.responseText);
        
        //Obtenog los 2 primero paises vecinos
        const [neighbour, neighbour2] = data.borders;

        if (!neighbour) return false

        //AJAX call pais vecino 
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText)
            console.warn(data2)

        })

        if (!neighbour2) return false

        //AJAX call pais vecino 2
        const request3 = new XMLHttpRequest();
        request3.open('GET', `https://restcountries.com/v2/alpha/${neighbour2}`);
        request3.send();
        request3.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText)
            console.warn(data2)

        })

    
        
  
    }); 
    
}




function getCountryFetchJ(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response)=>{

        if (!response.ok) throw new Error (`country nor found (${response.status})`)
        return response.json()
    })
    .then((data)=>{
        const [pasiVecino1 , paisVecino2] = data[0]?.borders
        if (!pasiVecino1) return false

        return fetch(`https://restcountries.com/v2/alpha/${pasiVecino1}`)
    
    })
    .then((response)=> response.json())
    .then(data =>{
        console.log(data)
    })
    .catch(err =>{
        console.error(`${err} XXX`);
        
    })
}

getCountryFetchJ('portugaal')


