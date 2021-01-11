const gameColumn = ["b", "i", "n", "g", "o"];

//¿Cómo funciona el juego?

//1. Se generan los numeros aleatorios en un rango:

function randomBetweenNumbers(minNum, maxNum) {
  const RANDOM_MIN = minNum;
  const RANDOM_MAX = maxNum;
  let randomBetweenNumbers = Math.floor(
    Math.random() * (RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN
  );
  return randomBetweenNumbers;
}

//2. De los numeros generados se raliza un array para garantizar que no se repitan.

function withoutRepeatingNumber(minNumber, maxNumber) {
  let arrayOfNumbers = [];

  do {
    for (let k = 0; k < 5; k++) {
      arrayOfNumbers[k] = randomBetweenNumbers(minNumber, maxNumber);
    }
  } while (
    arrayOfNumbers[0] === arrayOfNumbers[1] ||
    arrayOfNumbers[0] === arrayOfNumbers[2] ||
    arrayOfNumbers[0] === arrayOfNumbers[3] ||
    arrayOfNumbers[0] === arrayOfNumbers[4] ||
    arrayOfNumbers[1] === arrayOfNumbers[2] ||
    arrayOfNumbers[1] === arrayOfNumbers[3] ||
    arrayOfNumbers[1] === arrayOfNumbers[4] ||
    arrayOfNumbers[2] === arrayOfNumbers[3] ||
    arrayOfNumbers[2] === arrayOfNumbers[4] ||
    arrayOfNumbers[3] === arrayOfNumbers[4]
  );

  return arrayOfNumbers;
}

//3. Se llena el tablero con los numeros aleatorios indicados.

function fillBoard() {
  let i = 0;
  let j = 0;
  let arrayWithNoNumberRepeat = [];
  for (i = 0; i < 5; i++) {
    switch (i) {
      case 0:
        arrayWithNoNumberRepeat = withoutRepeatingNumber(1, 15);
        break;
      case 1:
        arrayWithNoNumberRepeat = withoutRepeatingNumber(16, 30);
        break;
      case 2:
        arrayWithNoNumberRepeat = withoutRepeatingNumber(31, 45);
        break;
      case 3:
        arrayWithNoNumberRepeat = withoutRepeatingNumber(46, 60);
        break;
      case 4:
        arrayWithNoNumberRepeat = withoutRepeatingNumber(61, 75);
        break;
    }
    for (j = 0; j < 5; j++) {
      if (i === 2 && j === 2) {
        document.getElementById(`${gameColumn[i]}${j}`).innerHTML = "@";
      } else {
        document.getElementById(`${gameColumn[i]}${j}`).innerHTML =
          arrayWithNoNumberRepeat[j];
      }
    }
  }
}

//4. Se ejecuta funcion para llenar el juego:

fillBoard();
