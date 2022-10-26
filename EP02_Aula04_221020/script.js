// Slice
//...

const pSaida = document.getElementById("pOut");


// Sort
/* const nomes = ["fabio", "Fulano", "Fabiana", "fabricio", "Ciclano", "Beltrando", "Bay"];

pSaida.innerHTML = nomes;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += nomes.sort();
pSaida.innerHTML += "<br>";

const numeros = [8, 5, 96, 9, 968, 100, 12, 102, 101, 25];


function ordenarNum(a, b) {
  return a - b;
}

pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros.sort(ordenarNum);
pSaida.innerHTML += "<br>"; */

// Reverse
/* const numeros = [8, 5, 96, 9, 968, 100, 12, 102, 101, 25];


function ordenarNum(a, b) {
  return a - b;
}

// numeros = numeros.sort(ordenarNum);

pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros.sort(ordenarNum);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros.reverse();
pSaida.innerHTML += "<br>"; */

/* const numeros = ["é", "è", "a", "ä", "b", "ç", "ª"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += numeros.sort(); */

/* const daysOfTheWeek = ["Segunda", "Terça", "Quarta"];

const otherDaysOfTheWeek = ["Quinta", "Sexta"];

pSaida.innerHTML = daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += otherDaysOfTheWeek;
pSaida.innerHTML += "<br>";

// Slice(start, end)
let allDaysOfTheWeek = daysOfTheWeek
                            .concat(otherDaysOfTheWeek);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.reverse();
pSaida.innerHTML += "<br>"; */

// Splice

/* let daysOfTheWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.splice(3);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;

daysOfTheWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.splice(2, 1);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek[3];



daysOfTheWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.splice(2, 1, "Feriado");
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek[3];


daysOfTheWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.splice(2, 1, "Feriado", "Sábado", "Domingo");
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek[3];


daysOfTheWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.splice(1, 3, "Feriado", "Sábado", "Domingo");
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek[3]; */


// Espalhamento spread

/* const listaDeNumerosA = [1,2,3,4];
const listaDeNumerosB = [listaDeNumerosA, 1, 5, 8]; // [ [1, 2, 3, 4], 1, 5, 8 ]
const listaDeNumerosC = [...listaDeNumerosA, 1, 5, 8]; // [1, 2, 3, 4]

pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosA;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosA.length;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosB;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosB.length;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosC;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosC.length;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += "<br>";

function somar(w, x, y, z) {
  return w + x + y + z;
}

const numerosParaSoma = [1, 2, 3, 4];

pSaida.innerHTML += "<br>";
pSaida.innerHTML += somar(1, 2, 3, 4);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += somar(numerosParaSoma);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += somar(...numerosParaSoma);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += somar(numerosParaSoma[0],numerosParaSoma[1] ); */

const listaDeNumerosA = [[1,2,3,4]];
const listaDeNumerosB = listaDeNumerosA; // [[1, 2, 3, 4]]
const listaDeNumerosC = [...listaDeNumerosA]; // [[1, 2, 3, 4]]

listaDeNumerosA[0][0] = 10;

pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosA;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosA.length;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosB;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosB.length;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosC;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += listaDeNumerosC.length;
pSaida.innerHTML += "<br>";

const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [5, 6, 7, 8],
  [5, 6, 7, 8],
  [5, 6, 7, 8],
  [5, 6, 7, 8],
  [5, 6, 7, 8]
]