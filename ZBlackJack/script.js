function Card(valor, nipe) {
  return { 
    valor, 
    nipe,
    gerarImagem: function () {
      return `<img src="img/card${this.nipe}.png">`;
    }
  };
}
let cartasDeck = [
  Card(1, "SpadesA"), 
  Card(2, "Spades2"),
  Card(3, "Spades3"),
  Card(4, "Spades4"),
  Card(5, "Spades5"),
  Card(6, "Spades6"),
  Card(7, "Spades7"),
  Card(8, "Spades8"),
  Card(9, "Spades9"),
  Card(10, "Spades10"),
  Card(10, "SpadesJ"),
  Card(10, "SpadesK"),
  Card(10, "SpadesQ"),
];
let cartasJogador = [];
let cartasBanca = [];
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
    soma += carta.valor;
  });
  return soma;
}
// Função para atualizar interface do jogo
function atualizarUI() {
  const somaBanca = verificarMao(cartasBanca);
  const somaJogador = verificarMao(cartasJogador);
  pJogo.innerHTML = `<div>Banca: ${somaBanca}</div>`;
  cartasBanca.forEach(carta => pJogo.innerHTML += carta.gerarImagem());
  pJogo.innerHTML += `<div>Jogador: ${somaJogador}</div>`;
  cartasJogador.forEach(carta => pJogo.innerHTML += carta.gerarImagem());
}
// btnComprar.addEventListener('click', () => {
btnComprar.onclick = _ => {
  // pegar uma carta e jogar na mão do jogador
  const carta = pegarCarta();
  cartasJogador.push(carta);
  atualizarUI();
  // caso ele tenha mais de 21 na mão, que apareça a mensagem perdeu
  if (verificarMao(cartasJogador) > 21) {
    pMensagem.innerText = "Jogador Perdeu!";
    btnComprar.disabled = true;
    btnPassar.disabled = true;
    btnIniciar.disabled = false;
  }
};
/* // btnIniciar, ao ser clicado, faça:
// Limpe a mesa, pegue duas cartas para o jogador
// pega uma carta para a banca
// atualize a mesa, desabilite o botão inicar e
// libere os outros botões. */
btnIniciar.onclick = _ => reiniciarJogo();

btnPassar.onclick = _ => {
  // Bloquear o botão comprar
  btnComprar.disabled = true;
  // comprar uma carta para a banca
  cartasBanca.push(pegarCarta());
  atualizarUI();
  const maoBanca = verificarMao(cartasBanca);
  const maoJogador = verificarMao(cartasJogador);
  if (maoBanca > maoJogador && maoBanca <= 21) {
    pMensagem.innerText = "Banca Ganhou!";
  } else if (maoBanca > 21) {
    pMensagem.innerText = "Jogador Ganhou!";
  }
  if (pMensagem.innerText != "") {
    btnPassar.disabled = true;
    btnIniciar.disabled = false;
  }
}

function reiniciarJogo() {
    /* cartasJogador.forEach( carta => cartasDeck.push(carta));
  cartasBanca.forEach( carta => cartasDeck.push(carta)); */
  cartasDeck = cartasDeck.concat(cartasJogador, cartasBanca);
  cartasJogador = [];
  cartasBanca = [];
  pMesa.innerText = "";
  pMensagem.innerText = "";
  pJogo.innerText = "";
  cartasJogador.push(pegarCarta(), pegarCarta());
  cartasBanca.push(pegarCarta());
  atualizarUI();
  btnIniciar.disabled = true;
  btnComprar.disabled = false;
  btnPassar.disabled = false;
}


