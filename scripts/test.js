let arrayNombres = [];
let numeroSeleccionado;

arrayNombres = ["Alejo", "Thomas", "Jhon"];

console.log(arrayNombres);

let arrayNumeros = [1, 2, 3, 4, 5, 6, 18];

console.log(arrayNumeros);

//Agregar datos usando .push
arrayNumeros.push(12);
arrayNombres.push("Daniela");

console.log(arrayNumeros);
console.log(arrayNombres);

//Cuantos elementos tiene:
console.log(arrayNombres.length);

//Llamar los elementos
numeroSeleccionado = arrayNumeros[6];
console.log(numeroSeleccionado);

//Buscar elementos en el array:

function buscar(numero) {
  return numero === 18;
}

arrayNumeros.some(buscar);
console.log(arrayNumeros.some(buscar));
