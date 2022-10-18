function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(
    ".js-tabcontent .container-intro"
  );
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

function initAcorrdion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add("ativo");
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

initAcorrdion();
initTabNav();
