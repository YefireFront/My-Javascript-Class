function doSomething(callback) {
    // Realiza alguna operación o tarea
    // ...
  
    // Llama al callback después de completar la operación
    callback();
  }
  
  // Define una función de callback
  function callbackFunction() {
    console.log('La operación se ha completado.');
  }
  
  // Pasa la función de callback al realizar algo
  doSomething(callbackFunction);
  

  function saludar(nombre) {
    alert("Hola " + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);