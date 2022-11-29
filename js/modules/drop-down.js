import outsideClickClose from "./outside-click-close.js";

export default class DropDown {
  constructor(dropDown) {
    this.dropDown = document.querySelectorAll(dropDown);
  }

  static fechar(target) {
    outsideClickClose([target], () => {
      target.classList.remove("active");
    });
  }

  static dropDownClick(event) {
    event.preventDefault();
    event.currentTarget.classList.add("active");
    DropDown.fechar(event.currentTarget);
  }

  addDropDown() {
    this.dropDown.forEach((item) => {
      ["touchstart", "click"].forEach((eventStart) => {
        item.addEventListener(eventStart, DropDown.dropDownClick);
      });
    });
  }

  init() {
    if (this.dropDown.length) {
      this.addDropDown();
    }
    return this;
  }
}
