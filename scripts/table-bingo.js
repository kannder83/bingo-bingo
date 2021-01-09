let text;
let gameColumn = ["b", "i", "n", "g", "o"];

function writeHtml() {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      if (j === 2 && i === 2) {
        document.getElementById(`${gameColumn[j]}${i}`).innerHTML = "@";
      } else {
        switch (j) {
          case 0:
            document.getElementById(
              `${gameColumn[j]}${i}`
            ).innerHTML = numRandom(1, 15);
            break;
          case 1:
            document.getElementById(
              `${gameColumn[j]}${i}`
            ).innerHTML = numRandom(16, 30);
            break;
          case 2:
            document.getElementById(
              `${gameColumn[j]}${i}`
            ).innerHTML = numRandom(31, 45);
            break;
          case 3:
            document.getElementById(
              `${gameColumn[j]}${i}`
            ).innerHTML = numRandom(46, 60);
            break;
          case 4:
            document.getElementById(
              `${gameColumn[j]}${i}`
            ).innerHTML = numRandom(61, 75);
            break;
        }
      }
    }
  }
}

//llena el tablero de forma aleatoria:

//1. Se generan los numeros aleatorios:

function numRandom(minNum, maxNum) {
  const RANDOM_MIN = minNum;
  const RANDOM_MAX = maxNum;
  let randomNumber = Math.floor(
    Math.random() * (RANDOM_MAX - RANDOM_MIN) + RANDOM_MIN
  );
  return randomNumber;
}

writeHtml();
