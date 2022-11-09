const divOut = document.getElementById("dOut");

/* function nomeDaFuncao(params) {
  
} */

/* function somar(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
} */

/* const somar = function (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
} 

const soma = somar(1, 2, 3);

divOut.innerText = soma; */

/* const precos = [3.56, 6.89, 3.56, 12.87];

function imprimirPrecos(preco) {
  divOut.innerHTML += `<p>${preco}</p>`;
}

precos.forEach(imprimirPrecos); */

/* const precos = [3.56, 6.89, 3.56, 12.87];

precos.forEach(
  function (preco) {
    divOut.innerHTML += `<p>${preco}</p>`;
  }
); */


// parâmetros com valor default

/* function dividir(numA = 1, numB = 1) {
  return numA / numB;
}

divOut.innerHTML += `<p>${dividir(10, 2)}</p>`;
divOut.innerHTML += `<p>${dividir(10)}</p>`;
divOut.innerHTML += `<p>${dividir()}</p>`; */

/* function saudar(
    nome = "Fulano", 
    tratamento = "Sr(a).",
    outro) {
  return `Olá, ${tratamento} ${nome}. ${outro}`;
}

divOut.innerHTML += `<p>${saudar("Nikola")}</p>`;
divOut.innerHTML += `<p>${saudar("Nikola", "Senhor")}</p>`;
divOut.innerHTML += `<p>${saudar()}</p>`;
divOut.innerHTML += `<p>${saudar("Nikola", "Senhor", "!")}</p>`; */

// >=
// 10 >= 20

// Arrow Function

/* let somar = function (arg1, arg2) {
  return arg1 + arg2;
}

divOut.innerHTML += `<p>${somar(4, 8)}</p>`

// Uma linha, com retorno
somar = (arg1, arg2) => {
  return arg1 + arg2;
}

divOut.innerHTML += `<p>${somar(4, 8)}</p>`;

// Uma linha, sem retorno
somar = (arg1, arg2) => divOut.innerHTML += `<p>${arg1 + arg2}</p>`;
somar(4, 8);

// Uma linha, com retorno
somar = (arg1, arg2) => arg1 + arg2;
divOut.innerHTML += `<p>${somar(4, 8)}</p>`;

// Várias linhas, com retorno
somar = (arg1, arg2) => {
  const resultado = arg1 + arg2;
  return resultado;
};

divOut.innerHTML += `<p>${somar(4, 8)}</p>`;

// Um parâmentro, não precisa dos parênteses
dobrar = arg1 => arg1 * 2;
divOut.innerHTML += `<p>6. ${dobrar(4)}</p>`; */

// const precos = [3.56, 6.89, 3.56, 12.87];

/* precos.forEach(
  function (preco) {
    divOut.innerHTML += `<p>${preco}</p>`;
  }
); */

// const imprimir = preco => divOut.innerHTML += `<p>${preco}</p>`;
// precos.forEach(preco => divOut.innerHTML += `<p>${preco}</p>`);

/* function imprimirPNaDiv(preco) {
  divOut.innerHTML += `<p>${preco}</p>`;
}
precos.forEach(imprimirPNaDiv); */

// Outras funções que pedem como parâmetro, funções

/* function operar(op1, op2, operacao) {
  const resultado = operacao(op1, op2);
  return `${op1}, ${op2} = ${resultado}`
} */

const operar = (op1, op2, operacao) => `<p>${op1}, ${op2} = ${operacao(op1, op2)}</p>`;

const somar = (op1, op2) => op1 + op2;
const sub = (op1, op2) => op1 - op2;
const mult = (op1, op2) => op1 * op2;
const div = (op1, op2) => op1 / op2;
const dobrar = op1 => op1 * 2;

divOut.innerHTML += operar(5, 6, somar);
divOut.innerHTML += operar(5, 6, sub);
divOut.innerHTML += operar(5, 6, mult);
divOut.innerHTML += operar(5, 6, div);