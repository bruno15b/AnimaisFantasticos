export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseLeave({ currentTarget }) {
    this.boxTollTip.remove();
    currentTarget.removeEventListener("mouseleave", this.mouseLeave);
  }

  mouseMove(event) {
    if (event.pageX + 190 > window.innerWidth) {
      this.boxTollTip.style.left = `${event.pageX - 140}px`;
    } else {
      this.boxTollTip.style.left = `${event.pageX + 20}px`;
    }
    this.boxTollTip.style.top = `${event.pageY + 20}px`;
  }

  criarBoxToolTip(element) {
    const boxTollTip = document.createElement("div");
    document.body.appendChild(boxTollTip);
    boxTollTip.innerText = element.getAttribute("aria-label");
    boxTollTip.classList.add("tooltip");
    this.boxTollTip = boxTollTip;
  }

  mouseOver({ currentTarget }) {
    this.criarBoxToolTip(currentTarget);
    currentTarget.addEventListener("mouseleave", this.mouseLeave);
    currentTarget.addEventListener("mousemove", this.mouseMove);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.mouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
