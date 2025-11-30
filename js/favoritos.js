const filtroBtn = document.getElementById("filtro-btn");
const filtroIcon = document.getElementById("filtro-icon");
const filtroMenu = document.getElementById("filtro-menu");

// Variável para controlar se o menu de filtro está aberto ou fechado
let filtroAberto = false;

// Evento de clique no botão de filtro para abrir/fechar o menu
filtroBtn.addEventListener("click", () => {
  // Alterna o estado do menu (abre se estava fechado, fecha se estava aberto)
  filtroAberto = !filtroAberto;

  // Mostra ou oculta o menu baseado no estado
  filtroMenu.style.display = filtroAberto ? "flex" : "none";

  // Altera o ícone do botão dependendo do estado do menu
  filtroIcon.innerHTML = filtroAberto
    ? `<path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2" stroke-linecap="round"/>`
    : `<path d="M3 4h18v2l-7 8v6l-4 2v-8L3 6V4z"/>`;
});

// Função para renderizar a lista de Pokémons favoritos na tela
function mostrarFavoritos(listaPokemons) {
  // Seleciona o container onde os favoritos serão exibidos
  const container = document.getElementById("todos-favoritos");
  if (!container) return; // Se não existir, encerra a função

  // Se a lista estiver vazia ou indefinida, mostra mensagem de aviso
  if (!listaPokemons || listaPokemons.length === 0) {
    container.innerHTML =
      "<p class='nh-fv'>Adicione algum pokemon a Pokedex.</p>";
    return;
  }

  // Cria o HTML dos favoritos e insere no container
  container.innerHTML = listaPokemons
    .map((poke) => {
      const tipos = poke.tipo || []; // Pega os tipos do Pokémon (ou vazio)
      const tiposImg = poke.tipoImg || []; // Pega os ícones dos tipos (ou vazio)
      return `
        <a href="informacoes.html?id=${poke.id}" class="favorito-item">
          <div class="favorito-info">
            <p class="favorito-id">#${poke.id.toString().padStart(3, "0")}</p>
            <h3 class="favorito-nome">${poke.nome}</h3>
          </div>
          <div class="tipo-container">
            ${tiposImg
              .map(
                (img, index) =>
                  `<img src="${img}" alt="${tipos[index]}" class="tipo-img">`
              )
              .join("")}
          </div>
          <img src="${poke.imagem}" alt="${poke.nome}" class="img-poke">
        </a>
      `;
    })
    .join(""); // Junta todos os elementos em uma única string
}

// Função para carregar os Pokémons favoritos salvos no localStorage
function carregarFavoritos() {
  // Pega os IDs dos favoritos do localStorage, ou vazio se não existir
  const favoritosIds = JSON.parse(localStorage.getItem("favoritos")) || [];
  console.log(favoritosIds);

  // Filtra a base fakeapi para pegar apenas os Pokémons favoritos
  const favoritos = api.filter((p) => favoritosIds.includes(p.id));

  // Mostra os favoritos na tela
  mostrarFavoritos(favoritos);
}

// Evento de clique no menu de filtro para ordenar os favoritos
filtroMenu.addEventListener("click", (e) => {
  // Só executa se o elemento clicado for um botão
  if (e.target.tagName !== "BUTTON") return;

  // Pega o tipo de filtro do botão clicado (az, id ou tipo)
  const tipoFiltro = e.target.dataset.filtro;

  // Pega os IDs de favoritos do localStorage
  const favoritosIds = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Filtra a lista de Pokémons favoritos
  let favoritos = api.filter((p) => favoritosIds.includes(p.id));

  // Ordena os favoritos de acordo com o tipo de filtro
  if (tipoFiltro === "az") {
    favoritos.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordem alfabética
  } else if (tipoFiltro === "id") {
    favoritos.sort((a, b) => a.id - b.id); // Ordem por ID
  } else if (tipoFiltro === "tipo") {
    favoritos.sort((a, b) => (a.tipo[0] || "").localeCompare(b.tipo[0] || "")); // Ordem pelo primeiro tipo
  }

  // Renderiza os favoritos ordenados
  mostrarFavoritos(favoritos);

  // Fecha o menu de filtro
  filtroMenu.style.display = "none";
  filtroAberto = false;

  // Reseta o ícone do botão para estado fechado
  filtroIcon.innerHTML = `<path d="M3 4h18v2l-7 8v6l-4 2v-8L3 6V4z"/>`;
});

// Inicializa a lista de favoritos ao carregar a página
document.addEventListener("DOMContentLoaded", async () => {
  // 🔹 Aguarda o carregamento da API (PokeAPI ou sua função local)
  if (typeof carregarTodosPokemons === "function") {
    await carregarTodosPokemons(); // garante que api esteja preenchida
  }

  // 🔹 Depois disso, carrega e mostra os favoritos
  carregarFavoritos();
});
