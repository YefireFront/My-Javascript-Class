'use strict';




const getCountrryData = function (country) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://restcountries.com/v2/name/${country}`);
    xhr.send();
    
    xhr.addEventListener('load', function(){
        const data = JSON.parse(this.responseText);
        
        // Contenedor donde pondremos las cartas
        const container = document.createElement('div');
        document.body.appendChild(container);
        
        // Crear una tarjeta por cada país
        data.forEach(country => {
            const card = document.createElement('div');
            card.style.border = '1px solid #ccc';
            card.style.padding = '10px';
            card.style.margin = '10px';
            card.style.width = '250px';
            card.style.display = 'inline-block';
            
            card.innerHTML = `
            <h2>${country.name}</h2>
            <img src="${country.flag}" alt="Bandera de ${country.name}" width="100%">
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Población:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Región:</strong> ${country.region}</p>
            `;
            
            container.appendChild(card);
        });
    });
    
}



getCountrryData('portugal')
getCountrryData('colombia')
getCountrryData('brasil')