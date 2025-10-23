const fakeapi = [
  {
    id: 1,
    nome: "Bulbasaur",
    tipo: ["Planta", "Venenoso"],
    descricao:
      "Bulbasaur é um Pokémon que carrega uma semente nas costas desde que nasce. Ele cresce absorvendo energia do sol.",
    local:
      "Pode ser encontrado em florestas e campos verdes, escondido entre a grama e arbustos.",
    imagem: "./img/bulbasaur.png",
    tipoImg: ["./img/frame.png", "./img/frame 2.png"],
    evolucao: [
      { id: 1, nome: "Bulbasaur", imagem: "./img/bulbasaur.png" },
      { id: 2, nome: "Ivysaur", imagem: "./img/Ivysaur.png" },
      { id: 3, nome: "Venusaur", imagem: "./img/Venusaur.png" },
    ],
  },

  {
    id: 2,
    nome: "Ivysaur",
    tipo: ["Planta", "Venenoso"],
    descricao:
      "Ivysaur evoluiu de Bulbasaur e a semente em suas costas está começando a florescer. Ele absorve energia do sol para se fortalecer.",
    local:
      "Encontrado em florestas densas e áreas gramadas, onde pode se camuflar entre plantas.",
    imagem: "./img/Ivysaur.png",

    tipoImg: ["./img/frame.png", "./img/frame 2.png"],

    evolucao: [
      { id: 1, nome: "Bulbasaur", imagem: "./img/bulbasaur.png" },
      { id: 2, nome: "Ivysaur", imagem: "./img/Ivysaur.png" },
      { id: 3, nome: "Venusaur", imagem: "./img/Venusaur.png" },
    ],
  },

  {
    id: 3,
    nome: "Venusaur",
    tipo: ["Planta", "Venenoso"],
    descricao:
      "Venusaur é a forma final de Bulbasaur, com uma enorme flor nas costas que absorve nutrientes do sol e da chuva para ganhar força.",
    local:
      "Vive em florestas exuberantes e campos abertos, sendo difícil de encontrar devido ao seu tamanho e camuflagem.",
    imagem: "./img/Venusaur.png",

    tipoImg: ["./img/frame.png", "./img/frame 2.png"],

    evolucao: [
      { id: 1, nome: "Bulbasaur", imagem: "./img/bulbasaur.png" },
      { id: 2, nome: "Ivysaur", imagem: "./img/Ivysaur.png" },
      { id: 3, nome: "Venusaur", imagem: "./img/Venusaur.png" },
    ],
  },

  {
    id: 4,
    nome: "Charmander",
    tipo: ["Fogo"],
    descricao:
      "Charmander é um Pokémon pequeno e ágil, cuja cauda está sempre em chamas, refletindo seu estado de saúde.",
    local:
      "Pode ser encontrado em áreas rochosas e próximas a vulcões, onde gosta de clima quente.",
    imagem: "./img/charmander.png",
    tipoImg: ["./img/fire.png"],

    evolucao: [
      { id: 4, nome: "Charmander", imagem: "./img/charmander.png" },
      { id: 5, nome: "Charmeleon", imagem: "./img/charmeleon.png" },
      { id: 6, nome: "Charizard", imagem: "./img/charizard.png" },
    ],
  },

  {
    id: 5,
    nome: "Charmeleon",
    tipo: ["Fogo"],
    descricao:
      "Charmeleon evoluiu de Charmander e é mais agressivo e poderoso, com chamas mais intensas na cauda.",
    local:
      "Encontrado em montanhas e regiões quentes, adaptando-se a terrenos rochosos.",
    imagem: "./img/charmeleon.png",
    tipoImg: ["./img/fire.png"],

    evolucao: [
      { id: 4, nome: "Charmander", imagem: "./img/charmander.png" },
      { id: 5, nome: "Charmeleon", imagem: "./img/charmeleon.png" },
      { id: 6, nome: "Charizard", imagem: "./img/charizard.png" },
    ],
  },

  {
    id: 6,
    nome: "Charizard",
    tipo: ["Fogo", "Voador"],
    descricao:
      "Charizard é a forma final, um poderoso Pokémon voador que cospe fogo e pode sobrevoar grandes distâncias.",
    local:
      "Vive em regiões montanhosas e vulcânicas, dominando os céus com suas chamas.",
    imagem: "./img/charizard.png",
    tipoImg: ["./img/fire.png"],

    evolucao: [
      { id: 4, nome: "Charmander", imagem: "./img/charmander.png" },
      { id: 5, nome: "Charmeleon", imagem: "./img/charmeleon.png" },
      { id: 6, nome: "Charizard", imagem: "./img/charizard.png" },
    ],
  },

  {
    id: 7,
    nome: "Squirtle",
    tipo: ["Água"],
    descricao:
      "Squirtle é um pequeno Pokémon aquático com casco resistente, capaz de disparar jatos de água com precisão.",
    local: "Pode ser encontrado próximo a rios, lagos e áreas costeiras.",
    imagem: "./img/squirtle.png",
    tipoImg: ["./img/water.png"],

    evolucao: [
      { id: 7, nome: "Squirtle", imagem: "./img/squirtle.png" },
      { id: 8, nome: "Wartortle", imagem: "./img/wartortle.png" },
      { id: 9, nome: "Blastoise", imagem: "./img/blastoise.png" },
    ],
  },

  {
    id: 8,
    nome: "Wartortle",
    tipo: ["Água"],
    descricao:
      "Wartortle evoluiu de Squirtle, ganhando força e uma cauda mais robusta, além de habilidades de natação avançadas.",
    local:
      "Vive em lagos profundos e rios, onde se movimenta com grande agilidade.",
    imagem: "./img/wartortle.png",
    tipoImg: ["./img/water.png"],

    evolucao: [
      { id: 7, nome: "Squirtle", imagem: "./img/squirtle.png" },
      { id: 8, nome: "Wartortle", imagem: "./img/wartortle.png" },
      { id: 9, nome: "Blastoise", imagem: "./img/blastoise.png" },
    ],
  },

  {
    id: 9,
    nome: "Blastoise",
    tipo: ["Água"],
    descricao:
      "Blastoise é a forma final, com poderosos canhões de água em seu casco, capaz de derrotar inimigos à distância.",
    local:
      "Habita grandes lagos, rios e áreas costeiras, sendo muito resistente e estratégico em batalhas.",
    imagem: "./img/blastoise.png",
    tipoImg: ["./img/water.png"],

    evolucao: [
      { id: 7, nome: "Squirtle", imagem: "./img/squirtle.png" },
      { id: 8, nome: "Wartortle", imagem: "./img/wartortle.png" },
      { id: 9, nome: "Blastoise", imagem: "./img/blastoise.png" },
    ],
  },

  // CATERPIE
  {
    id: 10,
    nome: "Caterpie",
    tipo: ["Inseto"],
    descricao:
      "Caterpie é uma pequena lagarta que se move rapidamente e se camufla entre folhas.",
    local: "Encontrado em florestas e áreas com muitas árvores.",
    imagem: "./img/caterpie.png",
    tipoImg: ["./img/frame.png"],
    evolucao: [
      { id: 10, nome: "Caterpie", imagem: "./img/caterpie.png" },
      { id: 11, nome: "Metapod", imagem: "./img/metapod.png" },
      { id: 12, nome: "Butterfree", imagem: "./img/butterfree.png" },
    ],
  },

  // METAPOD
  {
    id: 11,
    nome: "Metapod",
    tipo: ["Inseto"],
    descricao:
      "Metapod evoluiu de Caterpie e possui um casco rígido, se protegendo de ataques inimigos.",
    local: "Florestas densas, permanecendo imóvel enquanto evolui.",
    imagem: "./img/metapod.png",
    tipoImg: ["./img/frame.png"],
    evolucao: [
      { id: 10, nome: "Caterpie", imagem: "./img/caterpie.png" },
      { id: 11, nome: "Metapod", imagem: "./img/metapod.png" },
      { id: 12, nome: "Butterfree", imagem: "./img/butterfree.png" },
    ],
  },

  // BUTTERFREE
  {
    id: 12,
    nome: "Butterfree",
    tipo: ["Inseto", "Voador"],
    descricao:
      "Butterfree é uma borboleta que voa facilmente e libera pó tóxico para se defender.",
    local:
      "Florestas e campos abertos, frequentemente visto voando sobre flores.",
    imagem: "./img/butterfree.png",
    tipoImg: ["./img/frame.png"],
    evolucao: [
      { id: 10, nome: "Caterpie", imagem: "./img/caterpie.png" },
      { id: 11, nome: "Metapod", imagem: "./img/metapod.png" },
      { id: 12, nome: "Butterfree", imagem: "./img/butterfree.png" },
    ],
  },

  // WEEDLE
  {
    id: 13,
    nome: "Weedle",
    tipo: ["Inseto", "Venenoso"],
    descricao: "Weedle é uma pequena lagarta com ferrão venenoso na cabeça.",
    local: "Florestas e arbustos, onde se esconde rapidamente.",
    imagem: "./img/weedle.png",
    tipoImg: ["./img/frame.png", "./img/frame 2.png"],
    evolucao: [
      { id: 13, nome: "Weedle", imagem: "./img/weedle.png" },
      { id: 14, nome: "Kakuna", imagem: "./img/kakuna.png" },
      { id: 15, nome: "Beedrill", imagem: "./img/beedrill.png" },
    ],
  },

  // KAKUNA
  {
    id: 14,
    nome: "Kakuna",
    tipo: ["Inseto", "Venenoso"],
    descricao:
      "Kakuna é a forma intermediária de Weedle, com um casco duro para se proteger enquanto evolui.",
    local: "Florestas densas, permanecendo imóvel para se fortalecer.",
    imagem: "./img/kakuna.png",
    tipoImg: ["./img/frame.png", "./img/frame 2.png"],
    evolucao: [
      { id: 13, nome: "Weedle", imagem: "./img/weedle.png" },
      { id: 14, nome: "Kakuna", imagem: "./img/kakuna.png" },
      { id: 15, nome: "Beedrill", imagem: "./img/beedrill.png" },
    ],
  },

  // BEEDRILL
  {
    id: 15,
    nome: "Beedrill",
    tipo: ["Inseto", "Venenoso"],
    descricao:
      "Beedrill é a evolução final de Weedle, com três ferrões poderosos usados em combate.",
    local: "Florestas e áreas verdes, voando rapidamente em busca de presas.",
    imagem: "./img/beedrill.png",
    tipoImg: ["./img/frame.png", "./img/frame 2.png"],
    evolucao: [
      { id: 13, nome: "Weedle", imagem: "./img/weedle.png" },
      { id: 14, nome: "Kakuna", imagem: "./img/kakuna.png" },
      { id: 15, nome: "Beedrill", imagem: "./img/beedrill.png" },
    ],
  },
];

// Criacao de Paginacao e cards

const cards = document.getElementById("cards");
const paginacao = document.getElementById("paginacao");

const itensPorPagina = 6;
let currentPage = 1;

// Funcao para renderizar pokemons da pagina
function renderPokemons(page) {
  cards.innerHTML = "";

  const start = (page - 1) * itensPorPagina;
  const end = start + itensPorPagina;
  const pokemonsToShow = fakeapi.slice(start, end);

  pokemonsToShow.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    // ID
    const ids = document.createElement("span");
    ids.textContent = `#${pokemon.id}`;
    card.appendChild(ids);

    // Container das imagens de tipo
    const tipoContainer = document.createElement("div");
    tipoContainer.style.position = "absolute";
    tipoContainer.style.top = "15px";
    tipoContainer.style.right = "10px";
    tipoContainer.style.display = "flex";
    tipoContainer.style.gap = "5px"; // espaço entre as imagens
    card.appendChild(tipoContainer);

    // Adiciona todas as imagens de tipo
    if (Array.isArray(pokemon.tipoImg)) {
      pokemon.tipoImg.forEach((tipoSrc) => {
        const tipoImagem = document.createElement("img");
        tipoImagem.classList.add("img-tipo");
        tipoImagem.src = tipoSrc;
        tipoImagem.alt = pokemon.nome;
        tipoImagem.style.height = "20px"; // define tamanho
        tipoContainer.appendChild(tipoImagem);
      });
    } else {
      const tipoImagem = document.createElement("img");
      tipoImagem.classList.add("img-tipo");
      tipoImagem.src = pokemon.tipoImg;
      tipoImagem.alt = pokemon.nome;
      tipoImagem.style.height = "20px";
      tipoContainer.appendChild(tipoImagem);
    }

    // Nome
    const title = document.createElement("h2");
    title.textContent = pokemon.nome;
    card.appendChild(title);

    // Imagem do Pokémon
    const img = document.createElement("img");
    img.classList.add("img-poke");
    img.src = pokemon.imagem;
    img.alt = pokemon.nome;
    img.onclick = () => {
      window.location.href = `informacoes.html?id=${pokemon.id}`;
    };
    card.appendChild(img);

    // Adiciona card à tela
    cards.appendChild(card);
  });
}

// cria paginação
function createPagination(totalPages, currentPage) {
  paginacao.innerHTML = "";

  const prev = document.createElement("button");
  prev.disabled = currentPage === 1;

  const img = document.createElement("img");
  img.src = "./img/seta-abrir.svg";
  img.alt = "Anterior";
  img.style.width = "12px";
  img.style.height = "8px";
  img.style.transform = "rotate(-90deg)";
  prev.appendChild(img);

  prev.onclick = () => goToPage(currentPage - 1);
  paginacao.appendChild(prev);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => goToPage(i);
    paginacao.appendChild(btn);
  }

  const next = document.createElement("button");
  next.disabled = currentPage === totalPages;

  const imgLado = document.createElement("img");
  imgLado.src = "./img/seta-abrir.svg";
  imgLado.alt = "Próximo";
  imgLado.style.width = "12px";
  imgLado.style.height = "8px";
  imgLado.style.transform = "rotate(90deg)";
  next.appendChild(imgLado);

  next.onclick = () => goToPage(currentPage + 1);
  paginacao.appendChild(next);
}

function goToPage(page) {
  currentPage = page;
  const totalPages = Math.ceil(fakeapi.length / itensPorPagina);
  renderPokemons(currentPage);
  createPagination(totalPages, currentPage);
}

// inicialização
const totalPages = Math.ceil(fakeapi.length / itensPorPagina);
if (totalPages > 0) {
  goToPage(1); // carrega a primeira página
}
