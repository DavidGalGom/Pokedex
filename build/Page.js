import AddFromAPI from "./AddFromAPI.js";
import Service from "./Service.js";

class Page {
  parentElement;
  element;
  pageTitle;
  url;
  pokemons;

  constructor(parentElement, className, htmlTag = "div", pageTitle, url) {
    this.parentElement = parentElement;
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.pageTitle = pageTitle;
    this.url = url;

    this.parentElement.append(this.element);
    this.pickUrl();
    this.generateHTML();
  }

  async pickUrl() {
    const urlPicked = new Service(this.url);
    const response = await urlPicked.getResponse();
    this.pokemons = response.results;
    const fatherList = document.querySelector(".pokedex-list");
    this.pokemons.map(
      (pokemon) =>
        new AddFromAPI(fatherList, "pokemon-card", "li", "Pokedex", pokemon.url)
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
        <button class="previous-button">Previous</button>
        <button class="next-button">Next</button>
      </div>`;
    this.element.innerHTML = html;
  }
}

export default Page;
