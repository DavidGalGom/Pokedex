import Page from "./Page.js";

class AddList extends Page {
  name;
  image;
  index;
  type;

  constructor(
    parentElement,
    className,
    htmlTag,
    pageTitle,
    name,
    image,
    index,
    type
  ) {
    super(parentElement, className, htmlTag, pageTitle);
    this.name = name;
    this.image = image;
    this.index = index;
    this.type = type;

    this.parentElement.append(this.element);
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
                <p class="pokemon-type">Type:${this.type}</p>
              `;
    this.element.innerHTML = html;
  }
}

export default AddList;
