

const elemento = document.getElementById('miElemento');
elemento.classList.toggle('claseATogglear');



// Alternar una clase con un estado booleano:
    aic
    const estado = true;
elemento.classList.toggle('claseConEstado', estado);



// Alternar una clase basada en una condición:
const condicion = true;
elemento.classList.toggle('claseCondicional', condicion);



// Alternar una clase después de un retraso:

setTimeout(() => {
  elemento.classList.toggle('claseConRetraso');
}, 1000);



// Alternar una clase en respuesta a un evento:

elemento.addEventListener('click', () => {
  elemento.classList.toggle('claseAlHacerClic');
});
