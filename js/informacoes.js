document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Busca o Pokémon pelo ID
  const pokemon = fakeapi.find((p) => p.id === id);

  if (!pokemon) {
    document.body.innerHTML = "<p>Pokémon não encontrado!</p>";
    return;
  }

  const nomeEl = document.getElementById("nome");

  // Funções para favoritos
  function isFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    return favoritos.includes(id);
  }

  function toggleFavorito(id, estrelaEl) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((favId) => favId !== id);
      estrelaEl.src = "./img/star.svg"; // estrela vazia
    } else {
      favoritos.push(id);
      estrelaEl.src = "./img/star2.svg"; // estrela cheia
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  function isFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    return favoritos.includes(id);
  }

  // Depois de preencher nome e ID:
  const tituloContainer = document.querySelector(".informacao-titulo");
  const estrela = document.createElement("img");

  estrela.src = isFavorito(pokemon.id) ? "./img/star2.svg" : "./img/star.svg";

  estrela.addEventListener("click", () => toggleFavorito(pokemon.id, estrela));

  // Adiciona a estrela dentro do mesmo container
  tituloContainer.appendChild(estrela);

  // Insere o nome e a estrela
  nomeEl.textContent = `#${pokemon.id} ${pokemon.nome}`;

  // Preenche os outros elementos
  document.getElementById("descricao").textContent = pokemon.descricao;
  document.getElementById("imagem").src = pokemon.imagem;

  // Tipos
  const tiposContainer = document.getElementById("tipos");
  tiposContainer.innerHTML = ""; // limpa antes de adicionar
  pokemon.tipo.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    tiposContainer.appendChild(span);
  });

  // Local
  document.getElementById("local").textContent = pokemon.local;

  // Evoluções
  const evolucaoContainer = document.getElementById("evolucao");
  evolucaoContainer.innerHTML = ""; // limpa antes de adicionar
  pokemon.evolucao.forEach((evo) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${evo.imagem}" alt="${evo.nome}">
      <p>#${evo.id} ${evo.nome}</p>
    `;
    evolucaoContainer.appendChild(div);
  });
});
