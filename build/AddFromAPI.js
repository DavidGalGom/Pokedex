import Page from "./Page.js";
import Service from "./Service.js";

class AddFromAPI extends Page {
  url;
  pokemon = {};
  name;
  image;
  index;
  type1;
  type2;

  constructor(parentElement, className, htmlTag, pageTitle, url) {
    super(parentElement, className, htmlTag, pageTitle);
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.url = url;
    this.getProperties();
  }

  async getProperties() {
    const getPokemon = new Service(this.url);
    const responsePokemon = await getPokemon.getResponse();
    this.pokemon = responsePokemon;
    this.name = responsePokemon.name;
    this.image = responsePokemon.sprites.other.dream_world.front_default;
    this.index = responsePokemon.id;
    this.type1 = responsePokemon.types[0].type;
    this.type2 = responsePokemon.types[1].type;
    this.generateHTML();
  }

  generateHTML() {
    const html = `
              <div class="pokemon-card-header">
                  <h3 class="pokemon-name">${this.name}</h3>
                  <i class="fas fa-star"></i>
                </div>
                <img
                  class="pokemon-img"
                  src="${this.image}"
                  alt="Image of the pokemon"
                  width="174"
                  height="160"
                />
                <p class="pokemon-index">Pokedex Number: ${this.index}</p>
                <p class="pokemon-type">Type:${this.type1} and ${this.type2}</p>
              `;
    this.element.innerHTML = html;
  }
}

export default AddFromAPI;
