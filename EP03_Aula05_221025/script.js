const divOut = document.getElementById("dOut");

// Estruturas de Repetição
// Loops / Laços (de repetição)
// While
//  enquanto (condicao) {
//    repita este código
//  }

/* while (...) {
  
} */
/* let contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
console.log("Fim do programa"); */

/* let i = 0;
// divOut.innerHTML = `<p> ${i} </p>`;

while (i <= 20) {
  divOut.innerHTML += `<p> ${i} </p>`;
  i++;
} */
// x, y , z
// z = x + y
/* let i = 0;
let total = 0;
while (i <= 20) {
  total += i;
  i++;
}
divOut.innerHTML = `<p> ${total} </p>`; */

// Pedir ao usuário um nome
// e verificar se o nome está contido na lista
/* let listaDeNomes = ["Fulano", "Ciclano", "Beltrano"];

const nome = prompt("Nome do usuário.");
let i = 0;
while (i < listaDeNomes.length) {
  const nomeLista = listaDeNomes[i];
  if (nome == nomeLista) {
    divOut.innerHTML = `<p> Nome Encontrado! </p>`;
  }
  i++;
} */

// Do .. While
//  faça {
//    repita este código
//  } enquanto (condicao)

/* 
do {
  
} while (...) 
*/
/* let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador <= 10);
console.log("Fim do programa"); */ 

/* let opcao = 1;
do {
  opcao = +prompt("Escolha 1 ou 2:");
  console.log(opcao);
} while (opcao != 1 && opcao != 2);
console.log("Fim do programa"); */

/* let opcao = 1;
while (opcao != 1 && opcao != 2) {
  opcao = +prompt("Escolha 1 ou 2:");
  console.log(opcao);
}
console.log("Fim do programa"); */

/* let listaDeNomes = ["Fulano", "Ciclano", "Beltrano"];

const nome = prompt("Nome do usuário.");
let i = 0;
do {
  const nomeLista = listaDeNomes[i];
  if (nome == nomeLista) {
    divOut.innerHTML = `<p> Nome Encontrado! </p>`;
  }
  i++;
} while (i < listaDeNomes.length); */

// Break e Continue

/* let i = 0;
while (i < 10) {
  if (i == 8) {
    break;
  }
  console.log(i);
  i++;
} */

/* let listaDeNomes = ["Fulano", "Ciclano", "Beltrano", "Fulana", "Ciclana", "Beltrana"];

const nome = prompt("Nome do usuário.");
let i = 0;
do {
  const nomeLista = listaDeNomes[i];
  if (nome == nomeLista) {
    divOut.innerHTML = `<p> Nome Encontrado! </p>`;
    break;
    // i = listaDeNomes.length;
  }
  i++;
} while (i < listaDeNomes.length);
divOut.innerHTML += `<p> ${++i} </p>`; */

/* let i = 0;
while (i <= 12) {
  const iter = i;
  i++;
  if (iter == 8) {
    continue;
  }
  console.log(iter);
}  */

// Imprimir os números pares de 1 a 100
let num = 0;
while (num <= 100) {
  const numero = num;
  num++;
  if (numero % 2 != 0){
    continue;
  }
  console.log(numero);
}