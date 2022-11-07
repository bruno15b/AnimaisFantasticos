export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips) {
    const onMouseLeave = {
      handleEvent() {
        this.boxTollTip.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.boxTollTip.style.top = event.pageY + 20 + "px";
        this.boxTollTip.style.left = event.pageX + 20 + "px";
      },
    };

    function onMouseOver(event) {
      const boxTollTip = criarBoxToolTip(this);
      onMouseLeave.boxTollTip = boxTollTip;
      onMouseLeave.element = this;
      this.addEventListener(
        "mouseleave",
        onMouseLeave /*() => boxTolltip.remove() */
      );

      onMouseMove.boxTollTip = boxTollTip;
      this.addEventListener("mousemove", onMouseMove);
    }

    function criarBoxToolTip(element) {
      const boxTollTip = document.createElement("div");
      document.body.appendChild(boxTollTip);
      boxTollTip.innerText = element.getAttribute("aria-label");
      boxTollTip.classList.add("tooltip");

      return boxTollTip;
    }

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}
