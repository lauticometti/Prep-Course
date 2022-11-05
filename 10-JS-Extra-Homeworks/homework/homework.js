// No cambies los nombres de las funciones.

const { convertToRecursiveGlob } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var arr = string.split('');
  var obj = {};
  var keys = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) 
  {
    var isHere = false;

    for (let j = 0; j < keys.length; j++)
    {
      if (arr[i] == keys[j])
      {
        isHere = true;
        break;
      }
    }

    if (isHere) { obj[arr[i]]++   ; }
    else        { obj[arr[i]] = 1 ; }
    
    keys = Object.keys(obj)
  }

  return obj;
}

//Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
//al principio de la palabra.
//Ejemplo: soyHENRY -> HENRYsoy
//Escribe tu código aquí
function capToFront(s) {

  var arrayAbc = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'
  ];

  var arrayUpperAbc = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'Ñ', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z'
  ]

  var sToArray = s.split('');

  var uppers = sToArray.filter(function(i){
    return arrayUpperAbc.includes(i);
  })
  
  var lowers = sToArray.filter(function(i){
    return arrayAbc.includes(i);
  })
  
  uppers = uppers.join('') 
  lowers = lowers.join('')

  var uppersAndLowers = uppers + lowers;
  return uppersAndLowers;
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" ");
  var deletredsArray = [];
  var invertedArray = []

  for(let i = 0; i < array.length; i++){
    deletredsArray[i] = array[i].split('').reverse();
  }

  for(let i = 0; i < deletredsArray.length; i++){
    invertedArray[i] = deletredsArray[i].join('');
  }

  return invertedArray.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var str = numero + "";
  var arr = str.split('') 
  var reversed = arr.reverse();
  var arrAgain = reversed.join('');

  if (numero == arrAgain) return "Es capicua";
  return "No es capicua";
}

function deleteAbc(cadena){
//Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
//y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
//Escribe tu código aquí
var arr = cadena.split('');
var filtered = arr.filter(noAbc);
var filteredStr = filtered.join('');

function noAbc(letter){
  return letter != 'a' && letter != 'b' && letter != 'c';
}

return filteredStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var sorted = arr.sort(function hla(a, b){
    return a.length - b.length;
  })

  return sorted;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var interseccion = [];

  arreglo1.forEach(function(i, index){
    if(arreglo2.includes(i)) return interseccion[index] = i;
    return interseccion[index] = ''; 
  }) 

  interseccion = interseccion.filter(function(i){
    return i != '';
  })

  return interseccion;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};