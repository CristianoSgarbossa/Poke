function renderTodosFavoritos(containerId) {
  const favoritos = getFavoritos(); // pega do localStorage
  const container = document.getElementById(containerId);

  if (!container) return;

  if (favoritos.length === 0) {
    container.innerHTML = "<p>Nenhum favorito ainda ✨</p>";
    return;
  }

  const lista = favoritos
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

          <!-- Contêiner para as imagens de tipo -->
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

// Chama quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  renderTodosFavoritos("todos-favoritos");
});
