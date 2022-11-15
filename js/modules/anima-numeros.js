export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((num) => {
      const qnt = +num.innerText;
      const incremento = Math.ceil(qnt / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += incremento;
        num.innerText = i;
        if (i > qnt) {
          num.innerText = qnt;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer.observe(observeTarget, { attributes: true });
}
