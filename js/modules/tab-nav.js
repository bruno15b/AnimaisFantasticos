export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] .container-intro');

  if (tabMenu.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");
    tabMenu.forEach((menu, index) => {
      menu.addEventListener("click", () => {
        tabContent[index].classList.add("ativo");
        tabContent.forEach((content, index2) => {
          if (index !== index2) {
            content.classList.remove("ativo");
          }
        });
      });
    });
  }
}
