const pilotos = [
  { numero: 0, nome: "Piloto A", pontos: 0 },
  { numero: 1, nome: "Piloto B", pontos: 0 },
  { numero: 2, nome: "Piloto C", pontos: 0 },
  { numero: 3, nome: "Piloto D", pontos: 0 }
];

function gerarTrPiloto(indice, piloto) {
  let tablerow = '<tr>';
  tablerow += `<td>${indice+1}</td>`
  tablerow += `<td>${piloto.nome}</td>`;
  tablerow += `<td>${piloto.pontos}</td>`;
  tablerow += '</tr>';
  return tablerow;
}

// Desenhar a tabela
function atualizarTabela(){
  const tablebody = document.getElementById("tablebody");
  tablebody.innerHTML = '';

  // copiar a lista pilotos
  // const pilotosCp = pilotos.map(piloto => piloto);
  const pilotosCp = [...pilotos];
  
  // ordenar a copia por pontos
  pilotosCp.sort((pilotoA, pilotoB) => pilotoB.pontos - pilotoA.pontos);
  
  for (let indice = 0; indice < pilotosCp.length; indice++) {
    const linha = gerarTrPiloto(indice, pilotosCp[indice]);
    tablebody.innerHTML += linha;
  }
}

// gerar um array com 4 numeros de 0 a 3
// em que cada numero corresponda a um dos pilotos.
function gerarResultadoCorrida(){
  const resultado = [];
  // sortear 4 números de 0 a 3
  // até que resultado tenha 4 números diferentes
  while (resultado.length < 4) {
    const piloto = Math.floor(Math.random() * 4);
    // se piloto não estiver contido em resultado,
    // inserir piloto em resultado
    if (!resultado.includes(piloto)) {
      resultado.push(piloto);
    }
  }
  return resultado;
}

// Pegar o resultado e atualizar a lista de pilotos
// 1º - 10 pontos
function atualizarPontos(resultado){
  resultado.forEach((numPiloto, indice)=> {
    pilotos[numPiloto].pontos += 10 - indice;
  });
}

function executarRodada(){
  const resultado = gerarResultadoCorrida();
  atualizarPontos(resultado);
  atualizarTabela();
}

atualizarTabela();
// atualizarPontos();
// console.log(pilotos);
// console.log(gerarResultadoCorrida());