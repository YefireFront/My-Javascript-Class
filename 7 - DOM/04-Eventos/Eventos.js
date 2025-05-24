
//Una vez que el documento htm se ha cargado, se ejecuta la función que se le pasa como parámetro

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
});


//Eventos de cl|ick

let element = document.createElement("div");

//Evento Click
element.addEventListener("click", () => {
  console.log("Click");
});


//Evento MouseEnter
element.addEventListener("mouseenter", () => {
  console.log("Mouse Enter");
});

//Evento MouseLeave
element.addEventListener("mouseleave", () => {
  console.log("Mouse Leave");
});

//Evento Doble Click

element.addEventListener("dblclick", () => {
  console.log("Doble Click");
});



//Eventos de teclado

//Evento KeyDown
element.addEventListener("keydown", () => {
  console.log("Key Down");
});

//Evento KeyUp
element.addEventListener("keyup", () => {
  console.log("Key Up");
});

//Evento Copy
element.addEventListener("copy", () => {
  console.log("Copy");
});

//Evento Paste

element.addEventListener("paste", () => {
  console.log("Paste");
});

//Evento Cut
element.addEventListener("cut", () => {
  console.log("Cut");
});


//Evento input

element.addEventListener("input", (event) => {

    console.log(event.target.value);
    console.log(event.type)

});






//Eventos de formulario

//Evento Submit
//el evento submit se dispara cuando se envía un formulario

element.addEventListener("submit", () => {
  console.log("Submit");
});


//Evento Reset
//el evento reset se dispara cuando se resetea un formulario 

element.addEventListener("reset", () => {
  console.log("Reset");
});




//Eventos de Scroll

//Evento Scroll
//el evento scroll se dispara cuando se hace scroll en la página

element.addEventListener("scroll", () => {
  console.log("Scroll");
});


// Event bubbling Delegation

// Event bubbling es un mecanismo que permite que un evento se propague a los elementos padres de un elemento que ha sido clickeado

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (event) => {

    if (event.target.classList.contains("title")) {
        console.log("Click en title");
    }
    
    if (event.target.classList.contains("parrafo")) {
        console.log("Click en parrafo");
    }
    
    if (event.target.classList.contains("card")) {
        console.log("Click en card");
    }
});



// Prevenir Event Bubbling con un método

const tarjeta = document.createElement("div");

tarjeta.onclick = (event) => {

    secunfunction(1)
}

function secunfunction(num) {
    console.log(num)
}