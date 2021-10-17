import Component from "./Component.js";
import Service from "./Service.js";

class AddFromAPI extends Component {
  url;
  pokemon = {};
  name;
  image;
  index;
  type1;
  type2;
  colors = {
    steel: "rgb(173, 168, 145)",
    water: "rgb(66, 163, 196)",
    bug: "rgb(107, 178, 134)",
    dragon: "rgb(59, 132, 211)",
    electric: "rgb(229, 229, 48)",
    ghost: "rgb(96, 62, 209)",
    fire: "rgb(252, 42, 42)",
    fairy: "rgb(234, 105, 219)",
    ice: "rgb(109, 231, 242)",
    fighting: "rgb(209, 69, 97)",
    normal: "rgb(173, 162, 165)",
    grass: "rgb(83, 191, 59)",
    psychic: "rgb(242, 21, 212)",
    rock: "rgb(147, 86, 20)",
    dark: "rgb(63, 61, 59)",
    ground: "rgb(214, 89, 6)",
    poison: "rgb(168, 57, 153)",
    flying: "rgb(118, 154, 158)",
  };
  colors2 = {
    steel: "rgb(173, 168, 145,0.5)",
    water: "rgb(66, 163, 196,0.5)",
    bug: "rgb(107, 178, 134,0.5)",
    dragon: "rgb(59, 132, 211,0.5)",
    electric: "rgb(229, 229, 48,0.5)",
    ghost: "rgb(96, 62, 209,0.5)",
    fire: "rgb(252, 42, 42,0.5)",
    fairy: "rgb(234, 105, 219,0.5)",
    ice: "rgb(109, 231, 242,0.5)",
    fighting: "rgb(209, 69, 97,0.5)",
    normal: "rgb(173, 162, 165,0.5)",
    grass: "rgb(83, 191, 59,0.5)",
    psychic: "rgb(242, 21, 212,0.5)",
    rock: "rgb(147, 86, 20,0.5)",
    dark: "rgb(63, 61, 59,0.5)",
    ground: "rgb(214, 89, 6,0.5)",
    poison: "rgb(168, 57, 153,0.5)",
    flying: "rgb(118, 154, 158,0.5)",
  };

  constructor(parentElement, pageTitle, url) {
    super(parentElement, "pokedex-card", "li", pageTitle);
    this.url = url;
    this.getProperties();
  }

  async getProperties() {
    const getPokemon = new Service(this.url);
    const responsePokemon = await getPokemon.getResponse();
    this.pokemon = responsePokemon;
    this.name = responsePokemon.name.toUpperCase();
    this.image = responsePokemon.sprites.other.dream_world.front_default;
    this.index = responsePokemon.id;
    this.type1 = responsePokemon.types[0].type.name;
    this.element.style.borderColor = this.colors[this.type1];
    this.element.style.background = this.colors2[this.type1];
    this.type1 = responsePokemon.types[0].type.name.toUpperCase();
    if (responsePokemon.types[1] !== undefined) {
      this.type2 = responsePokemon.types[1].type.name.toUpperCase();
    } else {
      this.type2 = "";
    }

    this.generateHTML();
  }

  generateHTML() {
    const html = `
              <div class="pokemon-card-header">
                  <h3 class="pokemon-name">${this.name}</h3>
                  <button class="star-button"><i class="fas fa-star"></i></button>
                </div>
                <img
                  class="pokemon-img"
                  src="${this.image}"
                  alt="Image of the pokemon"
                  width="174"
                  height="160"
                />
                <p class="pokemon-index">Number #${this.index}</p>
                <div class="type-container">
                <p class="pokemon-type">Type:${this.type1}</p>
                <p class="pokemon-type">${this.type2}</p>
                </div>
              `;
    this.element.innerHTML = html;
  }
}

export default AddFromAPI;
