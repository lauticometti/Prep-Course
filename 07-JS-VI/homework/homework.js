// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  const arr = nombre.split("");                       //Convierte string en array.
  const firstLetter = arr.shift();                    //Remueve primer letra y la almacena en la variable.
  const capitalized = firstLetter.toUpperCase();      //Convierte la letra almacena arriba en mayus.
  arr.unshift(capitalized);                           //Mete la letra transformada nuevamente en la array.
  const newName = arr.join('');                       //Convierte el array en string nuevamente.
  return newName;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  arr.map(cb);
  return arr;
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  function sumar(acc, elemento){
    return acc + elemento;
  }

  const suma = numeros.reduce(sumar)

  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(cb);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var newArray = array.map(cb);
  return newArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  function firstLetterChecker(str){
    return str[0] === "a";
  }

  let newArray = array.filter(firstLetterChecker);
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
