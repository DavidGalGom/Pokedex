import Page from "../build/Page.js";

describe("Given a Page component", () => {
  describe("When it recives a main container, a 'page' class and 'div' tag", () => {
    test("Then it should render main element with class 'main' inside the div container", () => {
      const container = document.createElement("div");
      const className = "page";
      const tag = "div";

      new Page(container, className, tag);
      const divFound = container.querySelector("div.page");

      expect(divFound).not.toBeNull();
    });
  });
});
