export default class Accordion {
  constructor(itens, classDd, classDdAfter) {
    this.accordions = document.querySelectorAll(itens);
    if (classDd === undefined) {
      this.classDd = "ativo";
    } else {
      this.classDd = classDd;
    }
    if (classDdAfter === undefined) {
      this.classDdAfter = "arrow-up";
    } else {
      this.classDdAfter = classDdAfter;
    }

    this.handleAccordion = this.handleAccordion.bind(this);
  }

  handleAccordion(event) {
    const accordionTarget = event.currentTarget;
    accordionTarget.nextElementSibling.classList.toggle(this.classDd);
    if (accordionTarget.classList.contains(this.classDdAfter)) {
      accordionTarget.classList.remove(this.classDdAfter);
    } else {
      accordionTarget.classList.add(this.classDdAfter);
    }
  }

  addAccordionEvent() {
    this.accordions.forEach((item, index) => {
      item.addEventListener("click", this.handleAccordion);
      if (index > 0) {
        item.classList.add(this.classDdAfter);
      }
    });
  }

  init() {
    if (this.accordions.length) {
      this.accordions[0].nextElementSibling.classList.add(this.classDd);
      this.addAccordionEvent();
    }
    return this;
  }
}
