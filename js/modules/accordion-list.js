export default function initAcorrdion() {
  const accordionList = document.querySelectorAll('[data-anima="accordion"] dt');

  if (accordionList.length) {
    accordionList.forEach((item, index) => {
      if (index > 0) {
        item.classList.add("arrow-up");
      }
      item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("ativo");
        if (item.classList.contains("arrow-up")) {
          item.classList.remove("arrow-up");
        } else {
          item.classList.add("arrow-up");
        }
      });
    });
  }
}
