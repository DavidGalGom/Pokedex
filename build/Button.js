import Page from "./Page.js";
import Component from "./Component.js";

class Button extends Component {
  text;
  actionOnClick;

  constructor(parentElement, className, text, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;
    this.text = text;

    this.element.textContent = this.text;

    this.events();
    this.passPage();
    this.backPage();
  }

  events() {
    this.element.addEventListener("click", this.actionOnClick);
  }
  passPage() {
    this.text = "Nuxt";
  }
  backPage() {
    this.text = "Buck";
  }
}

export default Button;
