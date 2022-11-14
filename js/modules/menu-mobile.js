import OutsideClickClose from "./outside-click-close.js";
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  if (menuButton) {
    menuButton.addEventListener("click", abrirMenu);

    function abrirMenu(event) {
      menuList.classList.toggle("active");
      menuButton.classList.toggle("active");

      OutsideClickClose([menuList, menuButton], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
  }
}
