import AddFromAPI from "./AddFromAPI.js";
import Component from "./Component.js";
import Service from "./Service.js";

class Page extends Component {
  pageTitle;
  url;
  pokemons;
  offset = 0;

  constructor(parentElement, pageTitle, url) {
    super(parentElement, "page", "div");
    this.pageTitle = pageTitle;
    this.url = url;
    this.pickUrl();
    this.generateHTML();
  }

  async pickUrl() {
    const urlPicked = new Service(this.url);
    const response = await urlPicked.getResponse();
    this.pokemons = response.results;
    const fatherList = document.querySelector(".pokedex-list");
    fatherList.innerHTML = "";
    this.pokemons.map(
      (pokemon) => new AddFromAPI(fatherList, "Pokedex", pokemon.url)
    );
  }

  generateHTML() {
    const html = `<main class="main-body-container">
        <h2 class="body-title">${this.pageTitle}</h2>
        <div class="body-container">
          <ul class="pokedex-list">
          </ul>
        </div>
      </main>
      <div class="buttons-body-container">
        
      </div>`;
    this.element.innerHTML = html;
  }

  passPage() {
    if (this.offset < 1118) {
      this.offset += 10;
      this.url = `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=10`;
      this.pickUrl();
      return this.url;
    }
  }

  backPage() {
    if (this.offset > 0) {
      this.offset -= 10;
      this.url = `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=10`;
      this.pickUrl();
      return this.url;
    }
  }
}

export default Page;
