window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-bg");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // impede o pulo instantâneo
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 70; // ajuste se tiver header fixo
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const sections = document.querySelectorAll("section"); // todas as seções
const navLinks = document.querySelectorAll(".header-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // ajuste se tiver header fixo
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Funcao para inicializar busca
const input = document.querySelector("#search-input");
const button = document.querySelector("#search-btn");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buscarPokemon();
  }
});

button.addEventListener("click", () => {
  buscarPokemon();
});

function buscarPokemon() {
  const nome = input.value.toLowerCase().trim();
  const poke = fakeapi.find((p) => p.nome.toLowerCase() === nome);
  if (poke) {
    window.location.href = `informacoes.html?id=${poke.id}`;
  } else {
    alert("Pokémon não encontrado");
  }
}

// Criacao de Paginacao e cards

const cards = document.getElementById("cards");
const paginacao = document.getElementById("paginacao");

const itensPorPagina = 8;
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
    tipoContainer.style.top = "25px";
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

// --- Funções de favoritos ---
function getFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos") || "[]");
}

function renderFavoritos(containerId, limit = 8) {
  const favoritos = getFavoritos();
  const container = document.getElementById(containerId);

  if (!container) return;

  if (favoritos.length === 0) {
    container.innerHTML = "<p>Nenhum favorito ainda ✨</p>";
    return;
  }

  const lista = favoritos
    .slice(-limit)
    .map((id) => {
      const poke = fakeapi.find((p) => p.id === id);
      if (!poke) return "";

      const tipos = poke.tipo || [];
      const tiposImg = poke.tipoImg || [];

      return `
  <a href="informacoes.html?id=${poke.id}" class="favorito-item">
    <div class="favorito-info">
      <p class="favorito-id">#${poke.id.toString().padStart(3, "0")}</p>
      <h3 class="favorito-nome">${poke.nome}</h3>
    </div>

    <!-- Contêiner flex para as imagens de tipo -->
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

  container.innerHTML = lista;
}

// --- Quando a página carregar ---
document.addEventListener("DOMContentLoaded", () => {
  renderFavoritos("favorito", 8);
});
