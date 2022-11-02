const divOut = document.getElementById("dOut");

// Estrutura de Repetição

/* for ([inicial]; [cond]; [incremental]) {
  
} */

// for (let i = 0; i < 10; i = i + 1)
// for (let i = 0; i < 10; i += 1)
/* for (let i = 0; i < 10; i++) {
  console.log(`Iteração: ${i}.`);
} */

/* let i = 0;
for (; i < 10; i++) {
  divOut.innerHTML += `<p>Iteração: ${i}.</p>`;
}  */

/* let i = 0;
for (; i < 10;) {
  divOut.innerHTML += `<p>Iteração: ${i}.</p>`;
  i++;
}  */

/* let i = 0;
for (;;) {
  divOut.innerHTML += `<p>Iteração: ${i}.</p>`;
  i++;
  if (i >= 10) break;
} 

*/

/* let nomes = ["Fulano", "Ciclano", "Beltrano"];
for (let i = 0; i < 10; i += 1) {
  // if (i % 2 == 0) continue;
  divOut.innerHTML += `<p>Iteração: ${nomes[i]}.</p>`;
} */


/* let contagem;
let soma = 0;

for (contagem = 10; contagem > 0; contagem--) {
  soma = soma + contagem;
}

divOut.innerHTML += `<p>${soma}</p>`;  */

/* let opcao = 0;
for (;opcao != 1 && opcao != 2;){
  opcao = prompt("Informe uma opção de 1 a 2:");
}
divOut.innerHTML += `<p>Opção selecionada: ${opcao}</p>`;  */


/* let nomes = [];
for (let i = 0; i < 4; ++i) {
  const nome = prompt("Informe um nome.");
  nomes.push(nome);
}

divOut.innerHTML += `<p>Opção selecionada: ${nomes}</p>`; */


// for .. of
// let nomes = ["Fulano", "Ciclano", "Beltrano"];
/* for (let i = 0; i < nomes.length; i++) {
  const nome = nomes[i];
} */

/* for (let nome of nomes) {
  divOut.innerHTML += `<p>${nome}</p>`; 
} */

/* let funcionarios = [
  ["Fulano", 3_000.98],
  ["Ciclano", 4_789.98],
  ["Beltrano", 6_865.98]
];

for (let func of funcionarios) {
  for (let item of func) {
    divOut.innerHTML +=
      `<span style='padding: 10px;'>${item}</span>`;
  }
  divOut.innerHTML += "<br/>"
} */

/* const palavra = "Beltrano";
for (let l of palavra) {
  divOut.innerHTML +=
    `<span style='padding: 10px;'>${l}</span>`;
} */

// For .. in

/* let carro = {
  modelo: "Golf",
  marca: "Volkswagen",
  ano: 1999,
  cor: "Azul"
}

for (let prop in carro){
  divOut.innerHTML += `<p>${prop}: ${carro[prop]}</p>`;
} */


let carro = {
  modelo: "Golf",
  marca: "Volkswagen",
  ano: 1999,
  cor: "Azul"
}
console.log(carro["ano"]);
console.log(carro.ano);
// const carros = [1, 2, 3, 4, 5, 0];
// carros.0;
/* for (let prop in carros){
  divOut.innerHTML += `<p>${prop}</p>`;
} */
const carros = [
  { modelo: "Golf", marca: "Volkswagen"},
  { modelo: "Uno", marca: "Fiat"},
  { modelo: "Onix", marca: "GM"},
];

for (let carro of carros){
  for (let prop in carro){
    console.log(prop);
  divOut.innerHTML += 
    `<span 
    style='padding: 10px;'>
      ${prop}: ${carro[prop]}</span>`;
  }
  divOut.innerHTML += "<br/>"
}


divOut.innerHTML += `<p>Loop finalizado</p>`;