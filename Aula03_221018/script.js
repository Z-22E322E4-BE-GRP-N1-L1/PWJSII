const pSaida = document.getElementById("pOut");

const daysOfTheWeek = ["Segunda", "Terça", "Quarta"];

const otherDaysOfTheWeek = ["Quinta", "Sexta"];

pSaida.innerHTML = daysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += otherDaysOfTheWeek;
pSaida.innerHTML += "<br>";

// Slice(start, end)
let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
allDaysOfTheWeek = 
  allDaysOfTheWeek
    .concat(otherDaysOfTheWeek, daysOfTheWeek);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek; 
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice();
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice(3);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice(3, 8);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice(3, 1000);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice(3, 4);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.slice(-100);

// allDaysOfTheWeek[]
/* // LastIndexOf
let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
allDaysOfTheWeek = 
  allDaysOfTheWeek
    .concat(otherDaysOfTheWeek, daysOfTheWeek);
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.lastIndexOf("Terça", 7); */

/**
* @params variavel: String - adadasasfas
* @returnd...
*/
/*function tratarArrayComoString(variavel) {
  console.log(variavel.join());
} */

/* pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.indexOf("Sábado"); */

/* pSaida.innerHTML += "<br>";
allDaysOfTheWeek = 
  allDaysOfTheWeek
    .concat(otherDaysOfTheWeek, daysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.indexOf("Terça", 2); */

// IndexOf
/* let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek.indexOf("Terça");
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.indexOf("Sábado");

pSaida.innerHTML += "<br>";
allDaysOfTheWeek = 
  allDaysOfTheWeek
    .concat(otherDaysOfTheWeek, daysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek;
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.indexOf("Terça", 2); */

// allDaysOfTheWeek[1]
// ToString
/* let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek.join();
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek.toString();
pSaida.innerHTML += "<br>";
pSaida.innerHTML += allDaysOfTheWeek;
pSaida.innerHTML += "<br>"; */

/* function tratarArrayComoString(variavel) {
  console.log(variavel.join());
}

tratarArrayComoString(allDaysOfTheWeek);
tratarArrayComoString(allDaysOfTheWeek.toString()); */

// Join
/* let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek.join();
pSaida.innerHTML += "<br>";
const separador = "<br>"
pSaida.innerHTML+= allDaysOfTheWeek.join(separador);

pSaida.innerHTML += "<br>";
pSaida.innerHTML += "<br>";
pSaida.innerHTML += daysOfTheWeek.join();
pSaida.innerHTML += otherDaysOfTheWeek.join(); */

/* // Concat
let allDaysOfTheWeek = daysOfTheWeek.concat(otherDaysOfTheWeek);
pSaida.innerHTML += allDaysOfTheWeek;
pSaida.innerHTML += "<br>";

let otherAllDaysOfTheWeek = otherDaysOfTheWeek.concat(daysOfTheWeek);
pSaida.innerHTML += otherAllDaysOfTheWeek;
pSaida.innerHTML += "<br>";

// ["Quinta", "Sexta"].concat(["Segunda", "Terça", "Quarta"], ["Quinta", "Sexta"])
otherAllDaysOfTheWeek = 
  otherDaysOfTheWeek.concat(daysOfTheWeek, otherDaysOfTheWeek);
pSaida.innerHTML += otherAllDaysOfTheWeek; */