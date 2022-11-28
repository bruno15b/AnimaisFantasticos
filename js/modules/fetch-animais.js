import AnimaNumeros from "./anima-numeros.js";

export default function initAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function initAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animaNumeros.init();
  }

  async function fetchAnimais() {
    try {
      const animaisResponse = fetch(url);
      const animaisJson = await (await animaisResponse).json();
      animaisJson.forEach((animal) => preencherAnimal(animal));
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  return fetchAnimais();
}
