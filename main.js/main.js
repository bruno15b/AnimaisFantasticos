/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var i=n(698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var r=e&&e.prototype instanceof p?e:p,o=Object.create(r.prototype),s=new A(i||[]);return a(o,"_invoke",{value:E(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var v={};function p(){}function m(){}function y(){}var g={};h(g,c,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(O([])));k&&k!==n&&o.call(k,c)&&(g=k);var w=y.prototype=p.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(r,a,s,c){var u=f(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;a(this,"_invoke",{value:function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}})}function E(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=f(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=f(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:void 0,done:!0}}return m.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},L(x.prototype),h(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,i,r,o){void 0===o&&(o=Promise);var a=new x(d(t,n,i,r),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(w),h(w,l,"Generator"),h(w,c,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=o.call(r,"catchLoc"),c=o.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;C(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var i=n(61)();t.exports=i;try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return i(e,[{key:"scrollToSection",value:function(t){t.preventDefault(),document.querySelector(t.currentTarget.getAttribute("href")).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),o=function(){function e(n,i,r){t(this,e),this.accordions=document.querySelectorAll(n),this.classDd=void 0===i?"ativo":i,this.classDdAfter=void 0===r?"arrow-up":r,this.handleAccordion=this.handleAccordion.bind(this)}return i(e,[{key:"handleAccordion",value:function(t){var e=t.currentTarget;e.nextElementSibling.classList.toggle(this.classDd),e.classList.contains(this.classDdAfter)?e.classList.remove(this.classDdAfter):e.classList.add(this.classDdAfter)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordions.forEach((function(e,n){e.addEventListener("click",t.handleAccordion),n>0&&e.classList.add(t.classDdAfter)}))}},{key:"init",value:function(){return this.accordions.length&&(this.accordions[0].nextElementSibling.classList.add(this.classDd),this.addAccordionEvent()),this}}]),e}();function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i),this.activeClass="ativo",this.handleTabNav=this.handleTabNav.bind(this)}return i(e,[{key:"handleTabNav",value:function(t){var e=this,n=s(this.tabMenu),i=t.currentTarget,r=n.indexOf(i);this.tabContent[r].classList.add(this.activeClass),this.tabContent.forEach((function(t,n){r!==n&&t.classList.remove(e.activeClass)}))}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e){e.addEventListener("click",t.handleTabNav)}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.tabContent[0].classList.add(this.activeClass),this.addTabNavEvent()),this}}]),e}(),u=function(){function e(n,i,r){t(this,e),this.modalLogin=document.querySelector(n),this.abrir=document.querySelector(i),this.fechar=document.querySelector(r),this.activeClass="ativo",this.handleOpenClose=this.handleOpenClose.bind(this),this.handleClickOut=this.handleClickOut.bind(this)}return i(e,[{key:"handleClickOut",value:function(t){this.modalLogin===t.target&&this.modalLogin.classList.remove(this.activeClass)}},{key:"toggleModal",value:function(){this.modalLogin.classList.toggle(this.activeClass)}},{key:"handleOpenClose",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"addModalEvent",value:function(){this.modalLogin.addEventListener("mousedown",this.handleClickOut),this.abrir.addEventListener("click",this.handleOpenClose),this.fechar.addEventListener("click",this.handleOpenClose)}},{key:"init",value:function(){return this.modalLogin&&this.abrir&&this.fechar&&this.addModalEvent(),this}}]),e}(),l=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.mouseOver=this.mouseOver.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.mouseMove=this.mouseMove.bind(this)}return i(e,[{key:"mouseLeave",value:function(t){var e=t.currentTarget;this.boxTollTip.remove(),e.removeEventListener("mouseleave",this.mouseLeave)}},{key:"mouseMove",value:function(t){t.pageX+190>window.innerWidth?this.boxTollTip.style.left="".concat(t.pageX-140,"px"):this.boxTollTip.style.left="".concat(t.pageX+20,"px"),this.boxTollTip.style.top="".concat(t.pageY+20,"px")}},{key:"criarBoxToolTip",value:function(t){var e=document.createElement("div");document.body.appendChild(e),e.innerText=t.getAttribute("aria-label"),e.classList.add("tooltip"),this.boxTollTip=e}},{key:"mouseOver",value:function(t){var e=t.currentTarget;this.criarBoxToolTip(e),e.addEventListener("mouseleave",this.mouseLeave),e.addEventListener("mousemove",this.mouseMove)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.mouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function h(t,e){var n;return function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r),n=null}),e)}}var d=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.startHeight=.6*window.innerHeight,this.class="ativo",this.checkDistance=h(this.checkDistance.bind(this),50)}return i(e,[{key:"getDistance",value:function(){var t=this;this.distance=s(this.sections).map((function(e){return{element:e,offSet:e.offsetTop-t.startHeight}}))}},{key:"checkDistance",value:function(){var t=this;this.distance.forEach((function(e){window.pageYOffset>e.offSet?e.element.classList.add(t.class):e.element.classList.contains(t.class)&&e.element.classList.remove(t.class)}))}},{key:"addWindowEvent",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addWindowEvent()),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function f(t,e){var n=["touchstart","click"],i=document.documentElement,r="data-outside";function o(a){var s=t.some((function(t){return t.contains(a.target)}));t.forEach((function(t){s||(t.removeAttribute(r),n.forEach((function(){i.removeEventListener(a,o)})),e())}))}t.forEach((function(t){t.hasAttribute(r,"")||(n.forEach((function(t){setTimeout((function(){i.addEventListener(t,o)}))})),t.setAttribute(r,""))}))}var v=function(){function e(n){t(this,e),this.dropDown=document.querySelectorAll(n)}return i(e,[{key:"addDropDown",value:function(){this.dropDown.forEach((function(t){["touchstart","click"].forEach((function(n){t.addEventListener(n,e.dropDownClick)}))}))}},{key:"init",value:function(){return this.dropDown.length&&this.addDropDown(),this}}],[{key:"fechar",value:function(t){f([t],(function(){t.classList.remove("active")}))}},{key:"dropDownClick",value:function(t){t.preventDefault(),t.currentTarget.classList.add("active"),e.fechar(t.currentTarget)}}]),e}(),p=function(){function e(n,i){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.abrirMenu=this.abrirMenu.bind(this)}return i(e,[{key:"abrirMenu",value:function(){this.menuList.classList.toggle("active"),this.menuButton.classList.toggle("active"),e.fechar(this.menuList,this.menuButton)}},{key:"addMenuMobileEvent",value:function(){this.menuButton.addEventListener("click",this.abrirMenu)}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileEvent(),this}}],[{key:"fechar",value:function(t,e){f([t,e],(function(){t.classList.remove("active"),e.classList.remove("active")}))}}]),e}(),m=function(){function e(n){t(this,e),this.funcionamento=document.querySelector(n)}return i(e,[{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosTempoReal",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horaAgora=this.dataAgora.getUTCHours()-3}},{key:"abrirFechar",value:function(){this.diasSemana.includes(this.diaAgora)&&this.horaAgora>=this.horarioSemana[0]&&this.horaAgora<=this.horarioSemana[1]&&this.funcionamento.classList.add("aberto")}},{key:"init",value:function(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosTempoReal(),this.abrirFechar()),this}}]),e}();function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(a,e);var n,r,o=(n=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(r){var i=k(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return b(this,t)});function a(){return t(this,a),o.apply(this,arguments)}return i(a,[{key:"clickSlide",value:function(t){t.preventDefault(),this.form=document.forms.nav,this.form.next===t.target?this.activNextSlide():this.form.prev===t.target&&this.activePrevSlide(),this.changeActiveClass(),this.activeControlItem()}},{key:"addClickNavEvent",value:function(){document.forms.nav.addEventListener("click",this.clickSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n,"</a></li>")})),document.body.insertBefore(t,document.forms.nav),t}},{key:"activeFirstItem",value:function(){this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){e.classList.remove(t.activeClass)})),this.activeFirstItem()}},{key:"removeCLass",value:function(){var t=this;this.slideArray.forEach((function(e){e.item.classList.remove(t.activeClass)}))}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e),n.removeCLass(),n.changeActiveClass(),n.activeControlItem()}))}},{key:"addControl",value:function(t){var e=this;this.control=document.querySelector(t)||this.createControl(),this.controlArray=s(this.control.children),this.controlArray.forEach((function(t,n){e.eventControl(t,n)}))}}]),a}(function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active"}return i(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.slide.style.transform="translate3d(".concat(t,"px,0,0)"),this.dist.movePosition=t}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"onFinish",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.dist.finalPosition=this.dist.movePosition,this.wrapper.removeEventListener(e,this.onMove),this.transition(!0),this.changeSlideOnFinish()}},{key:"activNextSlide",value:function(){this.index.next&&(this.changeSlide(this.index.next),this.slideArray[this.index.prev].item.classList.remove(this.activeClass))}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&(this.changeSlide(this.index.prev),this.slideArray[this.index.next].item.classList.remove(this.activeClass))}},{key:"changeSlideOnFinish",value:function(){this.dist.movement>70&&void 0!==this.index.next?this.activNextSlide():this.dist.movement<-70&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active),this.changeActiveClass(),this.activeControlItem()}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("mouseup",this.onFinish),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("touchend",this.onFinish)}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;return this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1},this.index}},{key:"slideConfig",value:function(){return this.slideArray=s(this.slide.children).map((function(t){return{item:t,position:t.offsetLeft}})),this.slideArray}},{key:"calcMargin",value:function(t){return(this.wrapper.offsetWidth-this.slideConfig()[t].item.offsetWidth)/2}},{key:"offsetWidthMarginLeft",value:function(t){return-(this.slideConfig()[t].position-this.calcMargin(t))}},{key:"changeActiveClass",value:function(){this.slideArray[this.index.active].item.classList.add(this.activeClass)}},{key:"changeSlide",value:function(t){this.moveSlide(this.offsetWidthMarginLeft(t)),this.slidesIndexNav(t),this.dist.finalPosition=this.offsetWidthMarginLeft(t)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slideConfig(),t.changeSlide(t.index.active)}),500)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onFinish=this.onFinish.bind(this),this.onResize=h(this.onResize.bind(this),50),this.clickSlide=this.clickSlide.bind(this)}},{key:"init",value:function(t,e){return this.transition(),this.bindEvents(),this.addSlideEvents(),this.changeSlide(t),this.changeActiveClass(),this.addResizeEvent(),this.addControl(e),this.activeFirstItem(),document.forms.nav&&this.addClickNavEvent(),this}}]),e}());function L(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function x(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){L(o,i,r,a,s,"next",t)}function s(t){L(o,i,r,a,s,"throw",t)}a(void 0)}))}}var E=n(687),S=n.n(E),T=function(){function e(n,i,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observeClass=i,this.observeTarget=document.querySelector(r),this.handleMutation=this.handleMutation.bind(this)}return i(e,[{key:"animaNumeros",value:function(){this.numeros.forEach((function(t){var e=+t.innerText,n=Math.ceil(e/100),i=0,r=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(r))}),20*Math.random())}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observeClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observeTarget&&this.addObserver(),this}}]),e}();new r('[data-nav="suave"] a[href^="#"]').init(),new o('[data-anima="accordion"] dt').init(),new c('[data-tab="menu"] li','[data-tab="content"] .container-intro').init(),new u('[data-modal="modalLogin"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new l("[data-tooltip]").init(),new d('[data-anima="scroll"]').init(),new v("[data-dropdown]").init(),new p('[data-menu="button"]','[data-menu="list"]').init(),new m("[data-semana]").init(),new w(".slide",".wrapper","button").init(2,".custom-controls"),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3> <span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function r(){new T("[data-numero]","ativo",".numeros").init()}function o(){return(o=x(S().mark((function e(){var n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=fetch(t),e.next=4,n;case 4:return e.next=6,e.sent.json();case 6:e.sent.forEach((function(t){return i(t)})),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("./animaisapi.json"),function(t,e){var n=document.querySelector(".btc-preco");function i(){return(i=x(S().mark((function e(){var i,r;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=fetch(t),e.next=4,i;case 4:return e.next=6,e.sent.json();case 6:r=e.sent,n.innerText=(n.innerText=1e3/r.BRL.last).toFixed(6),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}("https://blockchain.info/ticker"),h()})()})();