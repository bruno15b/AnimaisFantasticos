import OutsideClickClose from "./outside-click-close.js";

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.abrirMenu = this.abrirMenu.bind(this);
  }

  static fechar(menuList, menuButton) {
    OutsideClickClose([menuList, menuButton], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  abrirMenu() {
    this.menuList.classList.toggle("active");
    this.menuButton.classList.toggle("active");
    MenuMobile.fechar(this.menuList, this.menuButton);
  }

  addMenuMobileEvent() {
    this.menuButton.addEventListener("click", this.abrirMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
