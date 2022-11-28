export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = "ativo";
    this.handleTabNav = this.handleTabNav.bind(this);
  }

  handleTabNav(event) {
    const arrayTabMenu = [...this.tabMenu];
    const tabNavTarget = event.currentTarget;
    const index = arrayTabMenu.indexOf(tabNavTarget);
    this.tabContent[index].classList.add(this.activeClass);
    this.tabContent.forEach((content, index2) => {
      if (index !== index2) {
        content.classList.remove(this.activeClass);
      }
    });
  }

  addTabNavEvent() {
    this.tabMenu.forEach((menu) => {
      menu.addEventListener("click", this.handleTabNav);
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add(this.activeClass);
      this.addTabNavEvent();
    }
    return this;
  }
}
