export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  const tela80 = window.innerHeight * 0.8;
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - tela80;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
