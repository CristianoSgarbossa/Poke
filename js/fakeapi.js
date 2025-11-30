let limit = 151;
let offset = 0;
let api = [];

const tipoIcones = {
  normal: "./img/normal.svg",
  fire: "./img/fire.svg",
  water: "./img/water.svg",
  grass: "./img/grass.svg",
  electric: "./img/electric.svg",
  ice: "./img/ice.svg",
  fighting: "./img/fighting.svg",
  poison: "./img/poison.svg",
  ground: "./img/ground.svg",
  flying: "./img/flying.svg",
  psychic: "./img/psychic.svg",
  bug: "./img/bug.svg",
  rock: "./img/rock.svg",
  ghost: "./img/ghost.svg",
  dragon: "./img/dragon.svg",
  dark: "./img/dark.svg",
  steel: "./img/steel.svg",
  fairy: "./img/fairy.svg",
};

function getApiUrl() {
  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
}

async function carregarTodosPokemons() {
  try {
    const res = await fetch(getApiUrl());
    const data = await res.json();

    const detalhes = await Promise.all(
      data.results.map(async (p) => {
        const resDetalhe = await fetch(p.url);
        const pokeData = await resDetalhe.json();

        const tipos = pokeData.types.map((t) => t.type.name);

        const resSpecie = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}/`
        );
        const specieData = await resSpecie.json();

        const entry =
          specieData.flavor_text_entries
            .find(
              (entry) =>
                entry.language.name === "pt" || entry.language.name === "en"
            )
            ?.flavor_text.replace(/\f/g, " ") || "Descrição não disponível.";

        const resLocal = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeData.id}/encounters`
        );
        const localData = await resLocal.json();
        const local =
          localData.length > 0
            ? localData[0].location_area.name.replace(/-/g, " ")
            : "Local desconhecido";

        const evoUrl = specieData.evolution_chain?.url;
        let evolucao = [];

        if (evoUrl) {
          const resEvo = await fetch(evoUrl);
          const evoData = await resEvo.json();

          function extrairEvolucoes(chain) {
            const evolucoes = [];
            if (!chain) return evolucoes;

            evolucoes.push({
              nome: chain.species.name,
              id: parseInt(chain.species.url.split("/").slice(-2, -1)[0]),
              imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(
                chain.species.url.split("/").slice(-2, -1)[0]
              )}.png`,
            });

            if (chain.evolves_to && chain.evolves_to.length > 0) {
              chain.evolves_to.forEach((subEvo) => {
                evolucoes.push(...extrairEvolucoes(subEvo));
              });
            }

            return evolucoes;
          }

          evolucao = extrairEvolucoes(evoData.chain);
        }

        return {
          id: pokeData.id,
          nome: pokeData.name,
          tipo: tipos,
          tipoImg: tipos.map((t) => tipoIcones[t]),
          imagem:
            pokeData.sprites.versions["generation-v"]["black-white"].animated
              .front_default ||
            pokeData.sprites.other["official-artwork"].front_default,

          descricao: entry,
          local: local,
          evolucao: evolucao,
        };
      })
    );

    api = detalhes;

    const totalPages = Math.ceil(api.length / itensPorPagina);
    if (totalPages > 0) goToPage(1);
  } catch (erro) {
    console.error("Erro ao carregar Pokémons:", erro);
  }
}

carregarTodosPokemons();
