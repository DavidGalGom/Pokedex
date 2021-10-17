import AddFromAPI from "./AddFromAPI.js";
import Component from "./Component.js";
import Service from "./Service.js";

class Page extends Component {
  pageTitle;
  url;
  pokemons;

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
}

export default Page;
