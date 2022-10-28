const divOut = document.getElementById("dOut");

//
const listaA = [100, 2, 23, 67, 23, 89, 76, 54];
const listaB = [2, 5, 4, 23, 67, 23, 45, 76, 54, 200];
// [100, 2, 23, 67, 89, 76, 54, 5, 4, 45, 200]

// Criar uma lista com o conteúdo das outras duas, sem repetir os números
let tamanhoA = listaA.length;
let tamanhoB = listaB.length;

let listaC = [...listaA, ...listaB];
let listaD = [];
let listaE = [];
let incremento = 0;

// Percorre a listaC
while (incremento < listaC.length) {
    let eleC = listaC[incremento];
    let estaContido = verificarRepetida(eleC, listaD);
    if (!estaContido) 
      listaD.push(eleC);
    else if (!verificarRepetida(eleC, listaE))
      listaE.push(eleC);
  incremento++;
}

function verificarRepetida(valor, lista) {
  let incre = 0;
  while (incre < lista.length){
    if (valor == lista[incre]) {
      return true;
    }
    incre++;
  }
  return false;
}

divOut.innerHTML += `<p>Nova Lista: ${listaD} </p>`;
divOut.innerHTML += `<p>Lista Repetidas: ${listaE} </p>`;

/* //
const listaA = [100, 2, 23, 67, 23, 89, 76, 54];
const listaB = [2, 5, 4, 23, 67, 23, 45, 76, 54, 200];
// [100, 2, 23, 67, 89, 76, 54, 5, 4, 45, 200]

// Criar uma lista com o conteúdo das outras duas, sem repetir os números
let tamanhoA = listaA.length;
let tamanhoB = listaB.length;

let listaC = [...listaA, ...listaB];
let listaD = [];
let incremento = 0;

// Percorre a listaC
while (incremento < listaC.length) {
    let incrementoD = 0;
    let eleC = listaC[incremento];
    let nEstaContido = true;

    // Percorra a listaD
    while (incrementoD < listaD.length){
      // Se eleC está contido em D, encerra o loop
      if (eleC == listaD[incrementoD]) {
        nEstaContido = false;
        break;
      }
      incrementoD++;
    }
  
    // add eleC em D
    if (nEstaContido) 
      listaD.push(eleC);
  incremento++;
} */

// divOut.innerHTML += `<p>Nova Lista: ${listaD} </p>`;

/* const numeros = [100, 2, 5, 4, 23, 67, 23, 45, 6, 89, 76, 54, 200];
// Qual o maior
// Qual o menor
// Qual a média
// sem usar o sort
let incremento = 0;
let maior = -9999;
let menor = 9999999;
let somatorio = 0;
while (incremento < numeros.length) {
  // Maior
  if (numeros[incremento] > maior) {
    maior = numeros[incremento];
  }

  // Menor
  if (numeros[incremento] < menor)
    menor = numeros[incremento];
  
  // Média
  somatorio += numeros[incremento];

  // incremento
  incremento++;
}

const media = somatorio / numeros.length;
divOut.innerHTML += `<p>Maior: ${maior} </p>`;
divOut.innerHTML += `<p>Menor: ${menor} </p>`;
divOut.innerHTML += `<p>Média: ${media} </p>`; */

// Gerar Número de 6 Dígitos 0 a 9
/* const numRifa = [];

while (numRifa.length < 6) {
  let digRifa = Math.random() * 9;
  digRifa = Math.floor(digRifa);
  numRifa.push(digRifa);
}

divOut.innerHTML = `<p> ${numRifa} </p>`; */