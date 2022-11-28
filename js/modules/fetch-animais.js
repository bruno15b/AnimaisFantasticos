import AnimaNumeros from "./anima-numeros.js";

export default function initAnimais() {
  const numerosGrid = document.querySelector(".numeros-grid");

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = fetch(url);
      const animaisJson = await (await animaisResponse).json();
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }

  if (numerosGrid) {
    fetchAnimais("./animaisapi.json");
  }
}
