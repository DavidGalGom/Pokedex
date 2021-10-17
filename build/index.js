/* eslint-disable no-unused-vars */
import Component from "./Component.js";
import Page from "./Page.js";
import AddList from "./AddList.js";
import AddFromAPI from "./AddFromAPI.js";
import Button from "./Button.js";

const fatherPage = document.querySelector(".page-container");
const mainPage = new Page(
  fatherPage,
  "Pokedex",
  "https://pokeapi.co/api/v2/pokemon?offset=00&limit=10"
);
const fatherButton = document.querySelector(".buttons-body-container");
const previousButton = new Button(fatherButton, "previous-button", "Back", () =>
  console.log("back")
);

const nextButton = new Button(fatherButton, "next-button", "Next", () =>
  console.log("next")
);
