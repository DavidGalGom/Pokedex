/* eslint-disable no-unused-vars */
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
const newPokemon2 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Ivisaur",
  "",
  "002",
  "Plant and Poison"
);
const newPokemon3 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Venusaur",
  "",
  "003",
  "Plant and Poison"
);
const newPokemon4 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Charmander",
  "",
  "004",
  "Fire"
);
const newPokemon5 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Charmaleon",
  "",
  "005",
  "Fire"
);
const newPokemon6 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Charizard",
  "",
  "006",
  "Fire"
);
const newPokemon7 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Squirtle",
  "",
  "007",
  "Water"
);
const newPokemon8 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Wartortle",
  "",
  "008",
  "Water"
);
const newPokemon9 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Blastoise",
  "",
  "009",
  "Water"
);
const newPokemon10 = new AddList(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "Caterpie",
  "",
  "010",
  "Bug"
);
