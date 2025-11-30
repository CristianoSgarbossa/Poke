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
  const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const poke = api.find((p) =>
    normalizar(p.nome.toLowerCase()).includes(normalizar(nome))
  );

  if (poke) {
    localStorage.setItem("pokemonSelecionado", JSON.stringify(poke));
    // Redireciona para a página de informações
    window.location.href = `informacoes.html?id=${poke.id}`;
  } else {
    alert("Pokémon não encontrado!");
  }
}

// Criacao de Paginacao e cards

const cards = document.getElementById("cards");
const paginacao = document.getElementById("paginacao");

const itensPorPagina = 8;
let currentPage = 1;

// Funcao para renderizar pokemons da pagina
function renderPokemons(page = 1) {
  currentPage = page;
  cards.innerHTML = "";

  const start = (page - 1) * itensPorPagina;
  const end = start + itensPorPagina;

  const pokemonsToShow = api.slice(start, end);

  pokemonsToShow.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    // ID
    const ids = document.createElement("span");
    ids.textContent = `#${pokemon.id}`;
    card.appendChild(ids);

    // tipos
    const tipoContainer = document.createElement("div");
    tipoContainer.style.position = "absolute";
    tipoContainer.style.top = "25px";
    tipoContainer.style.right = "10px";
    tipoContainer.style.display = "flex";
    tipoContainer.style.gap = "5px";
    card.appendChild(tipoContainer);

    if (Array.isArray(pokemon.tipoImg)) {
      pokemon.tipoImg.forEach((tipoSrc) => {
        const tipoImagem = document.createElement("img");
        tipoImagem.classList.add("img-tipo");
        tipoImagem.src = tipoSrc;
        tipoImagem.alt = pokemon.nome;
        tipoImagem.style.height = "20px";
        tipoContainer.appendChild(tipoImagem);
      });
    }

    // nome
    const title = document.createElement("h2");
    title.textContent = pokemon.nome;
    card.appendChild(title);

    // imagem
    const img = document.createElement("img");
    img.classList.add("img-poke");
    img.src = pokemon.imagem;
    img.alt = pokemon.nome;
    img.onclick = () => {
      localStorage.setItem("pokemonSelecionado", JSON.stringify(pokemon));
      window.location.href = "informacoes.html";
    };
    card.appendChild(img);

    cards.appendChild(card);
  });

  createPagination();
}

// cria paginação
function createPagination() {
  const totalPages = Math.ceil(api.length / itensPorPagina);
  paginacao.innerHTML = "";

  // botão anterior
  const prev = document.createElement("button");
  prev.classList.add("page-btn");
  prev.disabled = currentPage === 1;
  prev.onclick = () => goToPage(currentPage - 1);

  const imgPrev = document.createElement("img");
  imgPrev.src = "./img/seta-abrir.svg";
  imgPrev.alt = "Anterior";
  imgPrev.style.width = "12px";
  imgPrev.style.height = "8px";
  imgPrev.style.transform = "rotate(-90deg)";
  prev.appendChild(imgPrev);

  paginacao.appendChild(prev);

  // lógica das páginas
  let pages = [];

  if (totalPages <= 7) {
    pages = [...Array(totalPages).keys()].map((n) => n + 1);
  } else {
    if (currentPage <= 4) {
      pages = [1, 2, 3, 4, 5, "...", totalPages];
    } else if (currentPage >= totalPages - 3) {
      pages = [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  }

  pages.forEach((num) => {
    const btn = document.createElement("button");

    if (num === "...") {
      btn.classList.add("disabled");
      btn.innerText = "...";
      paginacao.appendChild(btn);
      return;
    }

    btn.innerText = num;

    if (num === currentPage) btn.classList.add("active");

    btn.onclick = () => goToPage(num);

    paginacao.appendChild(btn);
  });

  // botão próximo
  const next = document.createElement("button");
  next.classList.add("page-btn");
  next.disabled = currentPage === totalPages;
  next.onclick = () => goToPage(currentPage + 1);

  const imgNext = document.createElement("img");
  imgNext.src = "./img/seta-abrir.svg";
  imgNext.alt = "Próximo";
  imgNext.style.width = "12px";
  imgNext.style.height = "8px";
  imgNext.style.transform = "rotate(90deg)";
  next.appendChild(imgNext);

  paginacao.appendChild(next);
}

function goToPage(num) {
  currentPage = num;
  renderPokemons(num);
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
    container.innerHTML =
      "<p class='nh-fv'>Adicione algum pokemon a Pokedex.</p>";
    return;
  }

  const lista = favoritos
    .slice(-limit)
    .map((id) => {
      const poke = api.find((p) => p.id === Number(id));
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
document.addEventListener("DOMContentLoaded", async () => {
  await carregarTodosPokemons();
  renderPokemons(1); // carrega a 1ª página certinho
  renderFavoritos("favorito", 8);
});
