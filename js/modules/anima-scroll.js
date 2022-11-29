import debounce from "./debounce.js";

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.startHeight = window.innerHeight * 0.6;
    this.class = "ativo";
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offSet: offSet - this.startHeight,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offSet) {
        item.element.classList.add(this.class);
      } else if (item.element.classList.contains(this.class)) {
        item.element.classList.remove(this.class);
      }
    });
  }

  addWindowEvent() {
    window.addEventListener("scroll", this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addWindowEvent();
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
