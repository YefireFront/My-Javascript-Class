let puntos = 0;

// Pregunta 1
let respuesta1 = prompt("¿Cuál es tu color favorito?\n1: Rojo\n2: Azul\n3: Verde\n4: Amarillo");
if (respuesta1 === '2') {
    puntos +=1 ;
}

// Pregunta 2
let respuesta2 = prompt("¿Cuál es tu comida favorita?\n1: Pizza\n2: Hamburguesa\n3: Sushi\n4: Ensalada");
if (respuesta2 === '1') {
    puntos += 1;
}

// Pregunta 3
let respuesta3 = prompt("¿Qué deporte prefieres?\n1: Fútbol\n2: Baloncesto\n3: Tenis\n4: Natación");
if (respuesta3 === '3') {
    puntos += 1;
}

// Pregunta 4
let respuesta4 = prompt("¿Cuál es tu animal favorito?\n1: Perro\n2: Gato\n3: Pájaro\n4: Pez");
if (respuesta4 === '2') {
    puntos += 1;
}

// Mostrar resultado final
alert("Tu puntuación final es: " + puntos);



  // Accumulator example
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log("The sum of the numbers is: " + sum);




