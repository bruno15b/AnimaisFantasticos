import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import AnimaScroll from "./modules/anima-scroll.js";
import initDropDown from "./modules/drop-down.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";

const scrollSuave = new ScrollSuave('[data-nav="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] .container-intro');
tabNav.init();

const modal = new Modal('[data-modal="modalLogin"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const animaScroll = new AnimaScroll('[data-anima="scroll"]');
animaScroll.init();

initFetchBtc();
initAnimais();
initFuncionamento();
initMenuMobile();
initDropDown();
