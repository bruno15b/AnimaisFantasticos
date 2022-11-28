export default class Modal {
  constructor(modalLogin, abrir, fechar) {
    this.modalLogin = document.querySelector(modalLogin);
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.activeClass = "ativo";
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  handleClickOut(event) {
    if (this.modalLogin === event.target) {
      this.modalLogin.classList.remove(this.activeClass);
    }
  }

  toggleModal() {
    this.modalLogin.classList.toggle(this.activeClass);
  }

  handleOpenClose(event) {
    event.preventDefault();
    this.toggleModal();
  }

  addModalEvent() {
    this.modalLogin.addEventListener("mousedown", this.handleClickOut);
    this.abrir.addEventListener("click", this.handleOpenClose);
    this.fechar.addEventListener("click", this.handleOpenClose);
  }

  init() {
    if (this.modalLogin && this.abrir && this.fechar) {
      this.addModalEvent();
    }
  }
}
