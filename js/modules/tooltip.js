export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  const onMouseLeave = {
    handleEvent() {
      this.boxTollTip.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      this.boxTollTip.style.top = `${event.pageY + 20}px`;
      this.boxTollTip.style.left = `${event.pageX + 20}px`;
    },
  };

  function criarBoxToolTip(element) {
    const boxTollTip = document.createElement("div");
    document.body.appendChild(boxTollTip);
    boxTollTip.innerText = element.getAttribute("aria-label");
    boxTollTip.classList.add("tooltip");
    return boxTollTip;
  }

  function onMouseOver() {
    const boxTollTip = criarBoxToolTip(this);
    onMouseLeave.boxTollTip = boxTollTip;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    onMouseMove.boxTollTip = boxTollTip;
    this.addEventListener("mousemove", onMouseMove);
  }

  if (tooltips) {
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}
