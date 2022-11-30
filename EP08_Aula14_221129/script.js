/* let contador = 0;

while (contador <= 10) {
  // chame uma função
  console.log("Chamar função X;");
  // alert(contador);
  contador++;
} */

/* let contador = 0;

while (contador < 10) {
  // chame uma função
  // console.log("Chamar função X;");
  console.log(contador);
  contador++;
} */

/* let contador = 0;

while (contador < 10) {
  // chame uma função
  // console.log("Chamar função X;");
  console.log("log", contador);
  console.warn(contador);
  console.error(contador);
  console.info("Info", contador);
  contador++;
} */

let contador = 0;
let contagens = [];

function contar() {
  dOut.innerHTML = `<p>${contador}</p>`;
  dOut.innerHTML += `<p>${contagens}</p>`;
}

while (contador < 10) {
  contagens.push(contador);
  contar();
  contador++;
}