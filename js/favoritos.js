const filtroBtn = document.getElementById("filtro-btn");
const filtroIcon = document.getElementById("filtro-icon");
const filtroMenu = document.getElementById("filtro-menu");
let filtroAberto = false;

// Alternar ícone e menu
filtroBtn.addEventListener("click", () => {
  filtroAberto = !filtroAberto;
  filtroMenu.style.display = filtroAberto ? "flex" : "none";

  filtroIcon.innerHTML = filtroAberto
    ? `<path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2" stroke-linecap="round"/>`
    : `<path d="M3 4h18v2l-7 8v6l-4 2v-8L3 6V4z"/>`;
});

// Função única para renderizar favoritos
function mostrarFavoritos(listaPokemons) {
  const container = document.getElementById("todos-favoritos");
  if (!container) return;

  if (!listaPokemons || listaPokemons.length === 0) {
    container.innerHTML = "<p>Nenhum favorito ainda ✨</p>";
    return;
  }

  container.innerHTML = listaPokemons
    .map((poke) => {
      const tipos = poke.tipo || [];
      const tiposImg = poke.tipoImg || [];
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
    .join("");
}

// Inicializa favoritos
function carregarFavoritos() {
  const favoritosIds = JSON.parse(localStorage.getItem("favoritos")) || [];
  const favoritos = fakeapi.filter((p) => favoritosIds.includes(p.id));
  mostrarFavoritos(favoritos);
}

// Filtro
filtroMenu.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const tipoFiltro = e.target.dataset.filtro;
  const favoritosIds = JSON.parse(localStorage.getItem("favoritos")) || [];
  let favoritos = fakeapi.filter((p) => favoritosIds.includes(p.id));

  if (tipoFiltro === "az") {
    favoritos.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (tipoFiltro === "id") {
    favoritos.sort((a, b) => a.id - b.id);
  } else if (tipoFiltro === "tipo") {
    favoritos.sort((a, b) => (a.tipo[0] || "").localeCompare(b.tipo[0] || ""));
  }

  mostrarFavoritos(favoritos);

  filtroMenu.style.display = "none";
  filtroAberto = false;
  filtroIcon.innerHTML = `<path d="M3 4h18v2l-7 8v6l-4 2v-8L3 6V4z"/>`;
});

// Inicializa ao carregar a página
document.addEventListener("DOMContentLoaded", carregarFavoritos);
