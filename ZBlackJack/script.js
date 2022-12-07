let cartasDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let cartasJogador = [];
let cartasBanca = [];

// const pMesa = null;

// Funcao que retorna uma carta aleatória do deck
function pegarCarta() {
  const quantCartas = cartasDeck.length;
  let indice = Math.random() * quantCartas - 1;
  const indiceCarta = Math.floor(indice);
  const carta = cartasDeck.splice(indiceCarta, 1);
  // pMesa.innerText = cartasDeck;
  return carta[0];
}

// função que, recebendo um array, retorna a soma das cartas
function verificarMao(cartas) {
  let soma = 0;
  cartas.forEach(carta => {
    soma += carta;
  });
  return soma;
}

// Função para atualizar interface do jogo
function atualizarJogo() {
  const somaBanca = verificarMao(cartasBanca);
  const somaJogador = verificarMao(cartasJogador);
  pJogo.innerText = `Banca: ${somaBanca}\n`;
  pJogo.innerText += cartasBanca;
  pJogo.innerText += `\nJogador: ${somaJogador}\n`;
  pJogo.innerText += cartasJogador;
}

// btnComprar.addEventListener('click', () => {
btnComprar.onclick = _ => {
  // pegar uma carta e jogar na mão do jogador
  const carta = pegarCarta();
  cartasJogador.push(carta);
  atualizarJogo();
};

// btnIniciar, ao ser clicado, faça:
// Limpe a mesa, pegue duas cartas para o jogador
// pega uma carta para a banca
// atualize a mesa, desabilite o botão inicar e
// libere os outros botões.
btnIniciar.onclick = _ => {
  pMesa.innerText = "";
  pMensagem.innerText = "";
  pJogo.innerText = "";
  cartasJogador.push(pegarCarta(), pegarCarta());
  cartasBanca.push(pegarCarta());
  atualizarJogo();
  btnIniciar.disabled = true;
  btnComprar.disabled = false;
  btnPassar.disabled = false;
}


