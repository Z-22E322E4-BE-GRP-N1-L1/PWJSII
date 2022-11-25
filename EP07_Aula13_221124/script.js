// Number

// isNaN Not a Number
/* const idade = +prompt("Informe a sua idade.");
if (!Number.isNaN(idade)) {
  console.log("A idade deve ser um número.");
}

function operar(numA, numB) {
  return numA + numB;
}

operar(true, false); */

// isInteger
/* console.log(16, Number.isInteger(777));
console.log(17, Number.isInteger(-777));
console.log(18, Number.isInteger("777"));
console.log(1/0);
console.log(20, Number.isInteger(Infinity));
console.log(21, Number.isInteger(777.77));
console.log(22, !Number.isInteger(777.77)); */

// parseFloat
/* let valor = Number.parseFloat("21.5");
console.log(26, valor);
console.log(27, typeof valor);
console.log(28, "É inteiro:", Number.isInteger(valor)); */
// parseInt
/* valor = Number.parseInt("21.5");
console.log(26, valor);
console.log(27, typeof valor);
console.log(28, "É inteiro:", Number.isInteger(valor));

valor = Number.parseInt("100110", 2);
console.log((38).toString(2));
console.log(26, valor);
console.log(27, typeof valor);
console.log(28, "É inteiro:", Number.isInteger(valor));

valor = Number.parseInt("Olá");
console.log(42, valor);
console.log(43, Number.isNaN(valor));
console.log(44, typeof valor);
console.log(45, "É inteiro:", Number.isInteger(valor)); */

// Max_value / Min_value
/* const maximo = Number.MAX_VALUE;
const minimo = Number.MIN_VALUE;

console.log(maximo, minimo); */

/* let numeros = [2, 5, 4, 3, 7, 5, 4];
let maior = Number.MIN_VALUE; //-99_999_999;  
numeros.forEach(num => {
  if (maior < num)
    maior = num;
});
console.log(maior); */

// Objects

// Null e Undefined

/* let numero;
numero = null;
console.log(numero); */

/* function somar(a, b){
  const soma = a + b;
  if (!Number.isNaN(soma))
    console.log(soma);
  else
    console.log("Operação não realizada.");
}

somar(3, 2);
somar(3, Number.parseInt("Dez")); */

/* function somar(a, b){
  const soma = a + b;
  if (!Number.isNaN(soma))
    return soma;
  else
    return null;
}

const resultado1 = somar(3, 2);
const resultado2 = somar(3, Number.parseInt("Dez"));

if (resultado1 != null) {
  console.log("Soma resultante:", resultado1);
}

if (resultado2 != null) {
  console.log("Soma resultante:", resultado2);
} else {
  console.log("Operação não realizada.");
}

let numero; // undefined
// numero = null;
console.log(numero); */ 

// Length
const nome = "Nikola Tesla";
console.log(typeof nome);
console.log(nome.length);

// concat
const tratamento = "Físico";
const nomeCompleto = nome.concat(tratamento);
console.log(nomeCompleto);

// substring
console.log(nomeCompleto.substring(4));
console.log(nomeCompleto.substring(4, 6));
console.log(nomeCompleto.substr(4, 6));

// StartsWith
console.log(nomeCompleto.startsWith("N"));
console.log(nomeCompleto.startsWith("Ni"));
console.log(nomeCompleto.startsWith("Nikola"));
console.log(nomeCompleto.startsWith("T", 7));

// EndsWith // Nikola TeslaFísico
console.log(nomeCompleto.endsWith("o"));
console.log(nomeCompleto.endsWith("co"));
console.log(nomeCompleto.endsWith("Físico"));
console.log(nomeCompleto.endsWith("la", 12));

// includes // Nikola TeslaFísico
console.log(nomeCompleto.includes("ola"));
console.log(nomeCompleto.includes("a"));
console.log(nomeCompleto.includes("i"));
console.log(nomeCompleto.includes("k", 3));

// replace // Nikola TeslaFísico
console.log(nomeCompleto.replace("k", "c"));
console.log(nomeCompleto.replace("í", "i"));

// indexOf // Nikola TeslaFísico
console.log(nomeCompleto.indexOf("k"));
console.log(nomeCompleto.indexOf("í"));
