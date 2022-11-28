export default class AnimaNumeros {
  constructor(numeros, observeClass, observeTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeClass = observeClass;
    this.observeTarget = document.querySelector(observeTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  animaNumeros() {
    this.numeros.forEach((num) => {
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

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addObserver();
    }
    return this;
  }
}
