class Service {
  url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(url) {
    this.url = url;
  }

  async getResponse() {
    const response = await fetch(this.url);
    const pokemon = await response.json();
    return pokemon;
  }
}

export default Service;
