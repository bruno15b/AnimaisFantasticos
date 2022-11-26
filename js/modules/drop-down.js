import OutsideClickClose from "./outside-click-close.js";

export default function initDropDown() {
  const dropDown = document.querySelectorAll("[data-dropdown]");

  function dropDownClick(event) {
    event.preventDefault();
    this.classList.add("active");
    OutsideClickClose([this], () => {
      this.classList.remove("active");
    });
  }

  dropDown.forEach((item) => {
    ["touchstart", "click"].forEach((eventStart) => {
      item.addEventListener(eventStart, dropDownClick);
    });
  });
}
