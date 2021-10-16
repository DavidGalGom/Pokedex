class Page {
  parentElement;
  element;
  pageTitle;

  constructor(parentElement, className, htmlTag = "div", pageTitle) {
    this.parentElement = parentElement;
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.pageTitle = pageTitle;

    this.parentElement.append(this.element);
    this.generateHTML();
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
