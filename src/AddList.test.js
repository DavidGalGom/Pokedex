import AddList from "../build/AddList.js";

describe("Given a Page component", () => {
  describe("When it recives a ul container, a 'pokemon-card' class and 'li' tag", () => {
    test("Then it should render main element with class 'main' inside the div container", () => {
      const container = document.createElement("li");
      const className = "pokemon-card";
      const tag = "li";

      new AddList(container, className, tag);
      const liFound = container.querySelector("li.pokemon-card");

      expect(liFound).not.toBeNull();
    });
  });
});
