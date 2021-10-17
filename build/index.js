/* eslint-disable no-unused-vars */
import Page from "./Page.js";
import AddList from "./AddList.js";
import AddFromAPI from "./AddFromAPI.js";

const fatherPage = document.querySelector(".page-container");
const mainPage = new Page(
  fatherPage,
  "page",
  "div",
  "Pokedex",
  "https://pokeapi.co/api/v2/pokemon?offset=00&limit=10"
);
/* const fatherList = document.querySelector(".pokedex-list");
const newTenPokemon = new AddFromAPI(
  fatherList,
  "pokemon-card",
  "li",
  "Pokedex",
  "https://pokeapi.co/api/v2/pokemon?offset=00&limit=10"
); */
