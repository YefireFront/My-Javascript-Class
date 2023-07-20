function calcularRaizCuadrada(numero) {
    if (numero < 0) {
      return "No es válido, la raíz cuadrada de un número negativo no existe en los números reales.";
    }
  
    return numero ** 0.5;
  }
  
  // Ejemplo de uso:
  const numero1 = 25;
  const numero2 = -9;
  const n3 = 9
  
  console.log(`La raíz cuadrada de ${numero1} es: ${calcularRaizCuadrada(numero1)}`);
  console.log(`La raíz cuadrada de ${30} es: ${calcularRaizCuadrada(30)}`);
  console.log(`La raíz cuadrada de ${numero2} es: ${calcularRaizCuadrada(numero2)}`);
  console.log(`La raíz cuadrada de ${n3} es: ${calcularRaizCuadrada(n3)}`);
  