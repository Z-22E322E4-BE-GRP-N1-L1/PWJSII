/* const num = 19 / 0;
console.log(num); */

// try .. catch

/* let valor = 9;
let letra = valor.charAt(1);
console.log(letra);
console.log("Fim do programa."); */

/* fetch("...")
.then(_ => null)
.catch(_ => null); 

axios.then().catch();*/

/* let valor = 9;
let letra = null;

try {
  letra = valor.charAt(1);
  console.log(letra);
} catch (e) {
  // console.log(e);
  console.log(e.message);
} 
console.log("Fim do programa."); */


/* let valor = 9;
let letra = null;

try {
  letra = valor.charAt(1);
  console.log(letra);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("finally.");
}
console.log("Fim do programa."); */

/* function exibirLetra(texto) {
  let letra = texto.charAt(1);
  console.log(letra);
}

exibirLetra("Nikola");
exibirLetra(9); */

/* function exibirLetra(texto) {
  let letra = null;
  if (typeof texto === "string"){
    letra = texto.charAt(1);
  }
  console.log(letra);
}

exibirLetra(9); */

/* function exibirLetra(texto) {
  let letra = null;
  if (typeof texto === "string"){
    letra = texto.charAt(1);
    console.log(letra);
  } else {
    throw Error("O parâmentro passado não é do tipo String.");
  }
}

exibirLetra(9);
console.log("Fim do programa."); */

function exibirLetra(texto) {
  let letra = null;
  if (typeof texto === "string"){
    letra = texto.charAt(1);
    console.log(letra);
  } else {
    throw Error("O parâmentro passado não é do tipo String.");
  }
}

try {
  exibirLetra(9);
} catch (error) {
  console.warn(error.message);
}

console.log("Fim do programa.");