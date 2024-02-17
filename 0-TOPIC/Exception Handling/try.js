
function numb (numero) {

try {
    if (numero > 100) {throw new Error('the number is higer than the option')}
    console.log(numero * numero);
} catch (error) {
    console.log(`the following error occurred ${error}`);
}
}


function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  


  

  function verificarEdad(edad) {
    try {
      if (edad < 18) {
        throw new Error('Debes ser mayor de 18 años');
      }
      console.log('Bienvenido, puedes continuar.');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }




  function validarNumero(numero) {
    try {
      if (numero < 1 || numero > 100) {
        throw new Error('El número debe estar entre 1 y 100');
      }
      console.log('El número es válido.');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
