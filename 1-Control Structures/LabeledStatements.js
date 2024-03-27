outerLoop: for (let i = 0; i < 3; i++) {
  console.log("Outer loop iteration " + i);
  
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log("Inner loop iteration " + j);
    if (i === 1 && j === 1) {
      break outerLoop; 
    }
  }
}


let gameBoard = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  
  let targetValue = 1;
  let targetPosition = [];
  
  search: for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === targetValue) {
        targetPosition = [i, j];
        break search; 
      }
    }
  }
  
  if (targetPosition.length === 0) {
    console.log("Elemento no encontrado en el tablero.");
  } else {
    console.log("Elemento encontrado en la posición:", targetPosition);
  }
  