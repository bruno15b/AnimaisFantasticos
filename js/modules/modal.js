export default function InitModal() {
  const container = document.querySelector('[data-modal="container"]');
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');

  if (container && abrir && fechar) {
    function botaoClicado(event) {
      event.preventDefault();
      container.classList.toggle("ativo");
    }

    function foraClick(event) {
      if (this === event.target) {
        container.classList.remove("ativo");
      }
    }

    container.addEventListener("mousedown", foraClick);
    abrir.addEventListener("click", botaoClicado);
    fechar.addEventListener("click", botaoClicado);
  }
}
