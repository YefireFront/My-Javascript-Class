//!Flyweight
//!Middleweight
//!Heavyweigh


const li = document.querySelector('h1')


li.addEventListener('mouseover', ()=>{
    console.log('Vamo manejan esto com PRO');
})

const inputElement = document.getElementById("miInput");

inputElement.addEventListener("keyup", function(event) {
  console.log("Tecla soltada: " + event.key);
});
