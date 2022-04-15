// Desafio 11
function generatePhoneNumber(arraytelefone) {
  let numeros = `(${arraytelefone[0]}${arraytelefone[1]}) ${arraytelefone[2]}${arraytelefone[3]}${arraytelefone[4]}${arraytelefone[5]}${arraytelefone[6]}-${arraytelefone[7]}${arraytelefone[8]}${arraytelefone[9]}${arraytelefone[10]}`
  if(arraytelefone.length !== 11){
     numeros = "Array com tamanho incorreto."
  } else if(arraytelefone.length === 11){
  for( let index=0; index < arraytelefone.length; index +=1){
     if (arraytelefone[index] < 0 || arraytelefone[index] > 9 ){
       numeros = "não é possível gerar um número de telefone com esses valores"
     }
  }
   for( let index=0; index < arraytelefone.length; index +=1){
     let posicaoindex = arraytelefone[index]
     let contador = 0;
   for( let index2=0; index2 < arraytelefone.length; index2 +=1){
     let posicaoindex2 = arraytelefone[index2]
     if(posicaoindex === posicaoindex2){
              contador +=1        
     }
    if(contador >= 3){
       numeros = "não é possível gerar um número de telefone com esses valores" 
    }
   }
  }
}
return numeros;
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let somadasmedidas 
  if(lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB){
    return false
  }
  if(lineA < lineB + lineC || lineB < lineC + lineA || lineC < lineA + lineB){
    return true
  }  
}

// Desafio 13
function hydrate(Bartrybe) {
  let somadobar = 0;
  let frase = " copo de água"
  for(let index=0; index < Bartrybe.length; index +=1){
    let numero = Bartrybe[index]
    numero = parseInt(numero,10)
    if(numero > 0){
      somadobar = somadobar + numero
    }
  } 
  if(somadobar > 1){
    frase = " copos de água";

  }
  return somadobar + frase;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
