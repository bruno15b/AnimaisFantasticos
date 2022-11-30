import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import AnimaScroll from "./modules/anima-scroll.js";
import DropDown from "./modules/drop-down.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import { SlideNav } from "./modules/slide.js";
import initAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";
import initDebounce from "./modules/debounce.js";

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

const dropDown = new DropDown("[data-dropdown]");
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

const slide = new SlideNav(".slide", ".wrapper", "button");
slide.init(2, ".custom-controls");

initAnimais("./animaisapi.json", ".numeros-grid");
initFetchBtc("https://blockchain.info/ticker", ".btc-preco");
initDebounce();
