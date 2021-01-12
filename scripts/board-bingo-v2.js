const gameBoard = [
  ["b0", "i0", "n0", "g0", "o0"],
  ["b1", "i1", "n1", "g1", "o1"],
  ["b2", "i2", "n2", "g2", "o2"],
  ["b3", "i3", "n3", "g3", "o3"],
  ["b4", "i4", "n4", "g4", "o4"],
];

// let compararNumeros = [];
// let newNumber;

//1. Se generan los numeros aleatorios en un rango:

function numeroRandom(minNum, maxNum) {
  let numeroRandom = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return numeroRandom;
}

//2. Se almacenan los valores. Se busca que no se repitan.
//Indicar el rango y la cantidad de números.

function numeroAleatorioSinRepetir(min, max, quantity) {
  let takeNumberRandom = [];
  let numberTemp;
  takeNumberRandom.length = quantity;
  for (let i = 0; i < takeNumberRandom.length; i++) {
    numberTemp = numeroRandom(min, max);
    if (i === 0) {
      takeNumberRandom[i] = numberTemp;
    } else {
      for (let j = 0; j < i; j++) {
        while (takeNumberRandom[j] === numberTemp) {
          numberTemp = numeroRandom(min, max);
        }
        takeNumberRandom[i] = numberTemp;
      }
    }
  }

  return takeNumberRandom;
}

function numerosAleatoriosSinRep(min, max, cuantos) {
  let compararNumeros = [];
  let newNumber;
  for (let t = 0; t < cuantos; t++) {
    if (t === 0) {
      compararNumeros.push(numeroRandom(min, max));
      // compararNumeros[t]=numeroRandom(min, max);
    } else {
      newNumber = numeroRandom(min, max);
      while (compararNumeros.some((numero) => numero === newNumber)) {
        newNumber = numeroRandom(min, max);
      }
      compararNumeros.push(newNumber);
    }
  }
  return compararNumeros;
}

//3. Se llena el tablero con los numeros indicados:

function fillAllBoard() {
  for (let k = 0; k < 5; k++) {
    let numberByColumn = [];
    switch (k) {
      case 0:
        numberByColumn = numerosAleatoriosSinRep(1, 15, 5);
        break;
      case 1:
        numberByColumn = numerosAleatoriosSinRep(16, 30, 5);
        break;
      case 2:
        numberByColumn = numerosAleatoriosSinRep(31, 45, 5);
        break;
      case 3:
        numberByColumn = numerosAleatoriosSinRep(46, 60, 5);
        break;
      case 4:
        numberByColumn = numerosAleatoriosSinRep(61, 75, 5);
        break;
    }
    for (let l = 0; l < gameBoard.length; l++) {
      if (k === 2 && l === 2) {
        document.getElementById(gameBoard[l][k]).innerHTML = "@";
      } else {
        document.getElementById(gameBoard[l][k]).innerHTML = numberByColumn[l];
      }
    }
  }
}

//4. Se llama la función para que llene los datos en el tablero.

// fillAllBoard();

//4. Se crea un boton para que se genere de forma aleatoria los tableros.
let generateBoard = document.getElementById("generar-carton");
generateBoard.addEventListener("click", fillAllBoard, false);
