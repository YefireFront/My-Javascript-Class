
//
const elemento = document.getElementById('miElemento');
elemento.classList.add('nuevaClase');




// Agregar múltiples clases a un elemento:
const elemento1 = document.getElementById('miElemento');
elemento1.classList.add('clase1', 'clase2', 'clase3');


// Agregar una clase basada en una condición:
const elemento2 = document.getElementById('miElemento');
if (true) {
  elemento2.classList.add('claseCondicional');
}



// Agregar una clase después de un retraso:
const elemento4 = document.getElementById('miElemento4');
setTimeout(() => {
  elemento4.classList.add('claseConRetraso');
}, 1000);




// Agregar una clase en respuesta a un evento:
const elemento5 = document.getElementById('miElemento');
elemento5.addEventListener('click', () => {
  elemento5.classList.add('claseAlHacerClic');
});


// Remover una clase de un elemento:
elemento.classList.remove('avion');




//agregar atributos a un elemento
$link.setAttribute('target', '_blank');



// atributos

// Crear un botón
const boton = document.createElement('button');
boton.textContent = 'Haz clic aquí';

// Agregar atributos
boton.setAttribute('id', 'miBoton');
boton.setAttribute('class', 'btn btn-primary');
boton.setAttribute('disabled', 'true');

// Insertar el botón en el DOM
document.body.appendChild(boton);

// Seleccionar el valor del atributo 'id'
const botonId = boton.getAttribute('id');
console.log('ID del botón:', botonId);

// Eliminar el atributo 'disabled'
boton.removeAttribute('disabled');


// Crear un enlace
const enlace = document.createElement('a');
enlace.textContent = 'Visita OpenAI';
enlace.setAttribute('href', 'https://www.openai.com');

// Agregar un atributo 'target' para abrir en nueva pestaña
enlace.setAttribute('target', '_blank');

// Insertar el enlace en el DOM
document.body.appendChild(enlace);

// Seleccionar y mostrar el valor del atributo 'href'
const hrefValue = enlace.getAttribute('href');
console.log('Enlace:', hrefValue);

// Eliminar el atributo 'target'
enlace.removeAttribute('target');
