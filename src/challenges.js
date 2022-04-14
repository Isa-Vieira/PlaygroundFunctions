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
  let area = (base * height) / 2
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado;
}



// Desafio 4
function concatName(nomes) {
  let listanomes = nomes[nomes.length - 1]
  let listanomes2 = nomes[0]
  return listanomes + ', ' + listanomes2
}
console.log(concatName(["Ana", "Maria", "João"]))



// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}
console.log(footballPoints(14, 8))


// Desafio 6
function highestCount(arraynumeros) {
  let numeros = arraynumeros[0]
  let vezesquerepete = 0
  for(let index=0; index < arraynumeros.length; index += 1){
    if( arraynumeros[index] > numeros)
    numeros = arraynumeros[index]
  }
  for(let index=0; index < arraynumeros.length; index +=1){
  if(arraynumeros[index] === numeros )
      vezesquerepete += 1
  }
  return vezesquerepete;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse(mouse, cat1,cat2) {
  let posicaocat1 = Math.abs(mouse - cat1)
  let posicaocat2 = Math.abs(mouse - cat2)
  let resultado 
  if( posicaocat1 < posicaocat2){
     resultado = "cat1"
  }if( posicaocat1 > posicaocat2){
    resultado = "cat2"
  }if( posicaocat1 === posicaocat2){
    resultado = "os gatos trombam e o rato foge"
  }
   return resultado;
  
}
console.log(catAndMouse(1,2,3))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(frase) {
  let frasecodificada = ''
  for (let letra of frase) {
    if (letra == 'a') {
      frasecodificada += '1'
    } else if (letra =='e') {
      frasecodificada += '2'
    } else if (letra == 'i') {
      frasecodificada += '3'
    } else if (letra == 'o') {
      frasecodificada += '4'
    } else if (letra == 'u') {
      frasecodificada += '5'
    } else {
      frasecodificada = frasecodificada + letra
    }
  }
  return frasecodificada;
}

console.log(encode('frase'));


function decode(frase) {
  let frasecodificada = ''
  for (let letra of frase) {
    if (letra === '1') {
      frasecodificada += 'a'
    } else if (letra ==='2') {
      frasecodificada += 'e'
    } else if (letra === '3') {
      frasecodificada += 'i'
    } else if (letra === '4') {
      frasecodificada += 'o'
    } else if (letra === '5') {
      frasecodificada += 'u'
    } else {
      frasecodificada = frasecodificada + letra
    }
  }
  return frasecodificada;
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