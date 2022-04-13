// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else if (param1 === false && param2 === false) {
  return false;
  } else {
    return false; 
  }   
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/ 2
  return area;
}

// Desafio 3
function splitSentence(frase){
   let resultado = frase.split(" ")
   return resultado;
}



// Desafio 4
function concatName(nomes) {
  let listanomes = nomes[nomes.length-1]
  let listanomes2 = nomes[0]
   return listanomes + ', ' + listanomes2 
} 
console.log(concatName(["Ana", "Maria", "João"]))



// Desafio 5
function footballPoints(wins,ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}
console.log(footballPoints(14,8))


// Desafio 6
function highestCount(arraynumeros) {
  let numeros = [9, 1, 2, 3, 9, 5, 7];
  return Math.max.apply(null,numeros);

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(frase) {
  let frasecodificada = ("")
  for(let letra of frase){
    if(letra === 'a'){

    }
  }
    return frasecodificada;
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};