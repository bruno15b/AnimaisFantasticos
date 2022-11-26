export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-nav="suave"] a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
