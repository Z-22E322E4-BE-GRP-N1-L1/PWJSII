const divOut = document.getElementById("dOut");

// For (_;_;_)
// For of
// For in
// While do .. While
// Break e Continue

// Arrays

// forEach

/* const numeros = [1, 2, 3, 4, 5, 6, 7];
const nomes = ["A", "B"]; */
// Stream
/* for (let num of numeros){
  console.log(num);
} */
/* function dobrar(num) {
  console.log(num * 2);
} */
// function name(value, index)
/* function dobrar(num, i) {
  console.log(i, num * 2);
} */
/* function dobrar(num, i, a) {
  const nome = nomes[i];
  console.log(i, num * 2, a);
} */

// function dobrar(_, i, a) {
//   console.log(a[i]);
//   return "Passou";
// }

// const fEach = numeros.forEach(dobrar);
// console.log(fEach);

/* const pessoas = [
  { nome: "Fulano", salario: 3_009.98},
  { nome: "Ciclano", salario: 4_009.98},
  { nome: "Beltrano", salario: 5_009.98},
];

function atualizar(pessoa) {
  console.log(pessoa.nome, pessoa.salario * 1.1);
}

pessoas.forEach(atualizar);

numeros.forEach(atualizar); */

// map
// array1
// array1.map()
// array2

/* const numeros = [1, 2, 3, 4, 5, 6, 7];

function dobrar(num) {
  divOut.innerHTML += `<p>${num}</p>`;
  // return num * 2;
}


numeros.forEach(dobrar); */
// const nunsDobrados = numeros.map(dobrar);
// console.log(nunsDobrados);

/* const numeros = [1, 2, 3, 4, 5, 6, 7];

function mapear(num, i) {
  return `<p>${i}: ${num}</p>`;
}

function inserir(elemento) {
  divOut.innerHTML += elemento;
}

const numMapeados = numeros.map(mapear);
numMapeados.forEach(inserir); */

// filter
// const numeros = [1, 2, 3, 4, 5, 6, 7];

/* function filtroPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
} */

/* function filtroPar(num) {
  return num % 2 == 0;
}

const numPares = numeros.filter(filtroPar);

function inserir(elemento) {
  divOut.innerHTML += `<p>${elemento}</p>`;
}

numPares.forEach(inserir); */

const pessoas = [
  { nome: "Fulano", salario: 3_009.98, cargo: "Estagiário"},
  { nome: "Ciclano", salario: 4_009.98, cargo: "Estagiário"},
  { nome: "Beltrano", salario: 5_009.98, cargo: "Analista"},
];

function filtroEstags(pessoa) {
  return pessoa.cargo == "Estagiário";
}

function mapear(pessoa) {
  let retorno = `<li><strong>${pessoa.nome}</strong>: 
                R$ ${pessoa.salario} / 
                ${pessoa.cargo}</li>`;
  return retorno;
}

function inserir(elemento) {
  divOut.innerHTML += elemento;
}

const estagiarios = pessoas.filter(filtroEstags);
const estagsHtml = estagiarios.map(mapear);
estagsHtml.forEach(inserir);

for (let ele of estagsHtml){
  inserir(ele);
}

// some, every

/* for (let ele of estagsHtml){
  divOut.innerHTML += elemento;
} */

/* pessoas
  .filter(filtroEstags)
  .map(mapear)
  .forEach(inserir); */