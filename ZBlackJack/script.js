let cartasDeck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "J", "Q"];
let cartasJogador = [];
let cartasBanca = [];

// Funcao que retorna uma carta aleatória do deck
function pegarCarta() {
  const quantCartas = cartasDeck.length;
  let indice = Math.random() * quantCartas - 1;
  const indiceCarta = Math.floor(indice);
  const carta = cartasDeck.splice(indiceCarta, 1);
  // pMesa.innerText = cartasDeck.length;
  return carta[0];
}

// função que, recebendo um array, retorna a soma das cartas
function verificarMao(cartas) {
  cartas.forEach(carta => {
    
  });
  return soma;
}