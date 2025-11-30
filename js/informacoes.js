document.addEventListener("DOMContentLoaded", () => {
  const pokemon = JSON.parse(localStorage.getItem("pokemonSelecionado"));

  if (!pokemon) {
    document.body.innerHTML = "<p>Pokémon não encontrado!</p>";
    return;
  }

  const nomeEl = document.getElementById("nome");

  // Funções para favoritos
  function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos") || "[]");
  }

  function isFavorito(id) {
    const favoritos = getFavoritos();
    return favoritos.includes(Number(id));
  }

  function toggleFavorito(id, estrelaEl) {
    let favoritos = getFavoritos();
    id = Number(id);

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((favId) => favId !== id);
      estrelaEl.src = "./img/star.svg"; // estrela vazia
      console.log("Removido dos favoritos:", id);
    } else {
      favoritos.push(id);
      estrelaEl.src = "./img/star2.svg"; // estrela cheia
      console.log("Adicionado aos favoritos:", id);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log("Favoritos salvos:", favoritos);
  }

  // Depois de preencher nome e ID:
  const tituloContainer = document.querySelector(".informacao-titulo");
  const estrela = document.createElement("img");

  estrela.src = isFavorito(pokemon.id) ? "./img/star2.svg" : "./img/star.svg";

  estrela.style.cursor = "pointer"; // opcional: mostrar que é clicável
  estrela.addEventListener("click", () => toggleFavorito(pokemon.id, estrela));

  tituloContainer.appendChild(estrela);

  // Insere o nome e a estrela
  nomeEl.textContent = `#${pokemon.id} ${pokemon.nome}`;

  // Preenche os outros elementos
  document.getElementById("descricao").textContent = pokemon.descricao;
  document.getElementById("imagem").src = pokemon.imagem;

  // Tipos
  // Tipos
  const tiposContainer = document.getElementById("tipos");
  tiposContainer.innerHTML = ""; // limpa antes de adicionar
  pokemon.tipo.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    tiposContainer.appendChild(span);
  });

  // Local
  document.getElementById("local").textContent =
    pokemon.local || "Desconhecido";

  // Evoluções
  const evolucaoContainer = document.getElementById("evolucao");
  evolucaoContainer.innerHTML = "";
  if (pokemon.evolucao && pokemon.evolucao.length > 0) {
    pokemon.evolucao.forEach((evo) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${evo.imagem}" alt="${evo.nome}">
        <p>#${evo.id} ${evo.nome}</p>
      `;
      evolucaoContainer.appendChild(div);
    });
  } else {
    evolucaoContainer.innerHTML = "<p>Sem evoluções conhecidas.</p>";
  }
});
