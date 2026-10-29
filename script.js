// ----- Funcionalidade 1: mostrar o que cada habilidade faz -----

// Objeto com o nome e a descrição de cada habilidade.
// A letra (P, Q, W, E, R) é a "chave" para achar a habilidade.
var habilidades = {
  P: {
    nome: "Passiva - Trial by Fire",
    desc: "Os ataques dele podem incendiar os inimigos, que sofrem dano de queimadura com o tempo."
  },
  Q: {
    nome: "Q - Parrrley",
    desc: "Ele dá um tiro de pistola no alvo. Se o tiro derrotar um inimigo, ele ganha ouro extra."
  },
  W: {
    nome: "W - Remove Scurvy",
    desc: "Ele come uma laranja para se curar e se livrar de efeitos ruins. É uma referência ao escorbuto, doença comum entre piratas."
  },
  E: {
    nome: "E - Powder Keg",
    desc: "Ele coloca barris de pólvora no chão. Quando um barril é atacado, ele explode e causa dano em volta."
  },
  R: {
    nome: "R - Cannon Barrage",
    desc: "Ele chama o navio dele para bombardear uma grande área do mapa, atingindo vários inimigos."
  }
};

// Função executada quando o usuário clica em um botão de habilidade.
// Recebe a letra da habilidade e mostra o nome e a descrição no painel.
function mostrarHabilidade(letra) {
  // Busca no HTML os elementos onde o texto vai aparecer.
  var nome = document.getElementById("nomeHabilidade");
  var desc = document.getElementById("descHabilidade");

  // Troca o texto da tela pelo da habilidade escolhida.
  nome.textContent = habilidades[letra].nome;
  desc.textContent = habilidades[letra].desc;

  // Pega todos os botões de habilidade e tira a classe "ativo" de todos.
  var botoes = document.querySelectorAll(".botoes-habilidade button");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativo");
  }

  // Descobre qual botão foi clicado (pela posição na lista) e destaca ele.
  var ordem = ["P", "Q", "W", "E", "R"];
  botoes[ordem.indexOf(letra)].classList.add("ativo");
}

// ----- Funcionalidade 2: mostrar e ocultar uma informação -----

// Função executada quando o usuário clica no botão "Mostrar curiosidades".
// Se a caixa estiver escondida, ela aparece. Se estiver visível, ela some.
function mostrarOcultar() {
  var caixa = document.getElementById("caixa");
  var botao = document.getElementById("btnCuriosidade");

  // classList.toggle adiciona a classe "escondido" se ela não existir
  // e remove se ela já existir (troca de um estado para o outro).
  caixa.classList.toggle("escondido");

  // Verifica se a caixa está escondida para mudar o texto do botão.
  if (caixa.classList.contains("escondido")) {
    botao.textContent = "Mostrar curiosidades";
  } else {
    botao.textContent = "Ocultar curiosidades";
  }
}

// ----- Funcionalidade 3: modificar um texto -----

// Lista (array) com os fatos que vão aparecer na caixa.
var fatos = [
  "Curiosidade: em 2015, a Riot \"matou\" o Gangplank na história do jogo, algo que nunca tinha acontecido com um campeão.",
  "Curiosidade: o navio dele se chama Dead Pool e a tripulação dele são os Jagged Hooks.",
  "Curiosidade: ele já foi chamado de Rei de Bilgewater, uma cidade de piratas.",
  "Curiosidade: na habilidade W ele come uma laranja para se curar, uma referência ao escorbuto, doença comum entre piratas.",
  "Curiosidade: o jogo Ruined King, de 2021, mostra Miss Fortune e Illaoi enfrentando o passado dele."
];

// Guarda qual fato da lista está aparecendo agora.
var fatoAtual = 0;

// Função executada quando o usuário clica no botão "Próximo fato".
// Troca o texto da caixa pelo próximo fato da lista.
function proximoFato() {
  var texto = document.getElementById("textoFato");
  var caixa = document.getElementById("caixa");

  // Passa para o próximo fato.
  fatoAtual = fatoAtual + 1;

  // Se chegou ao fim da lista, volta para o primeiro.
  if (fatoAtual >= fatos.length) {
    fatoAtual = 0;
  }

  // Altera o texto que aparece na tela.
  texto.textContent = fatos[fatoAtual];

  // Garante que a caixa está visível depois de clicar no botão.
  caixa.classList.remove("escondido");
  document.getElementById("btnCuriosidade").textContent = "Ocultar curiosidades";
}

// ----- Funcionalidade 4: alterar a cor de um elemento -----

// Lista (array) com algumas cores que a caixa pode receber.
var cores = ["#1b5a4f", "#5c1a14", "#6b4e12", "#3a2a5c"];

// Guarda qual cor da lista está sendo usada no momento.
var posicao = 0;

// Função executada quando o usuário clica no botão "Mudar cor da caixa".
// Troca a cor de fundo da caixa pela próxima cor da lista.
function mudarCor() {
  var caixa = document.getElementById("caixa");

  // Passa para a próxima cor da lista.
  posicao = posicao + 1;

  // Se chegou ao fim da lista, volta para o começo.
  if (posicao >= cores.length) {
    posicao = 0;
  }

  // Altera a cor de fundo da caixa usando o estilo (style) do elemento.
  caixa.style.backgroundColor = cores[posicao];
}