export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.startHeight = window.innerHeight * 0.8;
    this.class = "ativo";
    this.checkDistance = this.checkDistance.bind(this);
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
