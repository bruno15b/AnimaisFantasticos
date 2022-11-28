export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.startHeight = window.innerHeight * 0.8;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.startHeight;
      console.log(this.startHeight);
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  addWindowEvent() {
    window.addEventListener("scroll", this.animaScroll);
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      this.addWindowEvent();
    }
  }
}
