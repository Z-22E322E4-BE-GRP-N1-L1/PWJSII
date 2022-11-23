// Var, Let e Const
/* let numero = 10; 
let numero = "dez"; 
console.log(numero); */
// Escopo
/* function funA(){
  let numero = 10;
  console.log(numero);
}

funA();
console.log(numero); */
/* var decVar = "Var";
let decLet = "Let";

console.log(decVar);
console.log(decLet); */
/* {
  var decVar = "Var";
  let decLet = "Let";
}

console.log(decVar);
console.log(decLet); */
/* var decVar = "Var";
let decLet = "Let";

{
  console.log(decVar);
  console.log(decLet);
} */
/* { 
  var decVar = "Var";
  let decLet = "Let";
}

{
  console.log(decVar);
  console.log(decLet);
} */
/* 
for (var i = 0; i < 5; i++){
  console.log("For: ", i);
}
console.log("Fora do For: ", i); */
/* for (let i = 0; i < 5; i++){
  console.log("For: ", i);
}
console.log("Fora do For: ", i); */
/* let i = 0;
for (; i < 5; i++){
  console.log("For: ", i);
}
console.log("Fora do For: ", i); */
/* if (true) {
  var numero = 10;
  console.log("Dentro do If: ", numero);
}
console.log("Fora do If: ", numero); */
/* if (true) {
  let numero = 10;
  console.log("Dentro do If: ", numero);
}
console.log("Fora do If: ", numero); */
/* function funcA() {
  var numero = 10;
  console.log("Dentro da Função: ", numero);
}

funcA();
console.log("Fora da Função: ", numero); */

// function funcA() {
//   let numero = 10;
//   console.log("Dentro da Função: ", numero);
// }

// funcA();
// console.log("Fora da Função: ", numero);

// /* 1 */ {
//   let numero = 10;
//   /* 2 */ {
//     let numero = 10;
//     console.log(numero);
//   }
// }
// let numero = 10;
/* {
  let texto = 10;
} */
/* function imprimir() {
  let nome = "dez";
  if (true) {
    let numero = 10;
    console.log(numero, nome, texto);
  }
} */
/* let numero = 10;
function imprimir() {
  console.log(numero);
} 
function imprimir(numero = 0) {
  console.log(numero);
}
imprimir(numero); */

// Números
let numInteiro = 1;
numInteiro = 4_234_565;
console.log(typeof numInteiro);

let numFloat = 1.0;
numFloat = 4_234_565.765_324_453;
console.log(typeof numFloat);

let numHexa = 0x7E6;
console.log(typeof numHexa);
console.log(numHexa);

let numBin = 0b11111100110;
console.log(typeof numBin);
console.log(numBin);

const numString = numInteiro.toString();
console.log(typeof numString);
console.log(numString);
console.log(numFloat.toFixed(2));


const num = Number(2022);
console.log(typeof num);

// Number.isInteger(numFloat);
