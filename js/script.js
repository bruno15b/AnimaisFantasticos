import initTabNav from "./modules/tab-nav.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initAcorrdion from "./modules/accordion-list.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import InitModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/drop-down.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";

const scrollSuave = new ScrollSuave('[data-nav="suave"] a[href^="#"]');

scrollSuave.init();

initFetchBtc();
initAnimais();
initFuncionamento();
initMenuMobile();
initDropDown();
initToolTip();
InitModal();
initAnimaScroll();
initAcorrdion();
initTabNav();
