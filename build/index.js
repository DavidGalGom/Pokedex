import Page from "./Page.js";
import AddList from "./AddList.js";

const fatherPage = document.querySelector(".page-container");
const mainPage = new Page(fatherPage, "page", "div", "Pokedex");
const fatherList = document.querySelector(".pokedex-list");
const newPokemon = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Bulbasaur",
  "bulbasaur.png",
  "001",
  "Plant and Poison"
);
