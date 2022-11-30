/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(itens, classDd, classDdAfter) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    this.accordions = document.querySelectorAll(itens);\n    if (classDd === undefined) {\n      this.classDd = \"ativo\";\n    } else {\n      this.classDd = classDd;\n    }\n    if (classDdAfter === undefined) {\n      this.classDdAfter = \"arrow-up\";\n    } else {\n      this.classDdAfter = classDdAfter;\n    }\n    this.handleAccordion = this.handleAccordion.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"handleAccordion\",\n    value: function handleAccordion(event) {\n      var accordionTarget = event.currentTarget;\n      accordionTarget.nextElementSibling.classList.toggle(this.classDd);\n      if (accordionTarget.classList.contains(this.classDdAfter)) {\n        accordionTarget.classList.remove(this.classDdAfter);\n      } else {\n        accordionTarget.classList.add(this.classDdAfter);\n      }\n    }\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n      this.accordions.forEach(function (item, index) {\n        item.addEventListener(\"click\", _this.handleAccordion);\n        if (index > 0) {\n          item.classList.add(_this.classDdAfter);\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordions.length) {\n        this.accordions[0].nextElementSibling.classList.add(this.classDd);\n        this.addAccordionEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordion;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AnimaNumeros = /*#__PURE__*/function () {\n  function AnimaNumeros(numeros, observeClass, observeTarget) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaNumeros);\n    this.numeros = document.querySelectorAll(numeros);\n    this.observeClass = observeClass;\n    this.observeTarget = document.querySelector(observeTarget);\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaNumeros, [{\n    key: \"animaNumeros\",\n    value: function animaNumeros() {\n      this.numeros.forEach(function (num) {\n        var qnt = +num.innerText;\n        var incremento = Math.ceil(qnt / 100);\n        var i = 0;\n        var timer = setInterval(function () {\n          i += incremento;\n          num.innerText = i;\n          if (i > qnt) {\n            num.innerText = qnt;\n            clearInterval(timer);\n          }\n        }, 20 * Math.random());\n      });\n    }\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains(this.observeClass)) {\n        this.observer.disconnect();\n        this.animaNumeros();\n      }\n    }\n  }, {\n    key: \"addObserver\",\n    value: function addObserver() {\n      this.observer = new MutationObserver(this.handleMutation);\n      this.observer.observe(this.observeTarget, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length && this.observeTarget) {\n        this.addObserver();\n      }\n      return this;\n    }\n  }]);\n  return AnimaNumeros;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\nvar AnimaScroll = /*#__PURE__*/function () {\n  function AnimaScroll(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnimaScroll);\n    this.sections = document.querySelectorAll(sections);\n    this.startHeight = window.innerHeight * 0.6;\n    this[\"class\"] = \"ativo\";\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnimaScroll, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offSet = section.offsetTop;\n        return {\n          element: section,\n          offSet: offSet - _this.startHeight\n        };\n      });\n    }\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      var _this2 = this;\n      this.distance.forEach(function (item) {\n        if (window.pageYOffset > item.offSet) {\n          item.element.classList.add(_this2[\"class\"]);\n        } else if (item.element.classList.contains(_this2[\"class\"])) {\n          item.element.classList.remove(_this2[\"class\"]);\n        }\n      });\n    }\n  }, {\n    key: \"addWindowEvent\",\n    value: function addWindowEvent() {\n      window.addEventListener(\"scroll\", this.checkDistance);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        this.addWindowEvent();\n      }\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener(\"scroll\", this.checkDistance);\n    }\n  }]);\n  return AnimaScroll;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/drop-down.js":
/*!*********************************!*\
  !*** ./js/modules/drop-down.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDown)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_click_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside-click-close.js */ \"./js/modules/outside-click-close.js\");\n\n\n\nvar DropDown = /*#__PURE__*/function () {\n  function DropDown(dropDown) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DropDown);\n    this.dropDown = document.querySelectorAll(dropDown);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DropDown, [{\n    key: \"addDropDown\",\n    value: function addDropDown() {\n      this.dropDown.forEach(function (item) {\n        [\"touchstart\", \"click\"].forEach(function (eventStart) {\n          item.addEventListener(eventStart, DropDown.dropDownClick);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.dropDown.length) {\n        this.addDropDown();\n      }\n      return this;\n    }\n  }], [{\n    key: \"fechar\",\n    value: function fechar(target) {\n      (0,_outside_click_close_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([target], function () {\n        target.classList.remove(\"active\");\n      });\n    }\n  }, {\n    key: \"dropDownClick\",\n    value: function dropDownClick(event) {\n      event.preventDefault();\n      event.currentTarget.classList.add(\"active\");\n      DropDown.fechar(event.currentTarget);\n    }\n  }]);\n  return DropDown;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/drop-down.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\nfunction initAnimais(url, target) {\n  var numerosGrid = document.querySelector(target);\n  function createAnimal(animal) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3> <span data-numero>\").concat(animal.total, \"</span>\");\n    return div;\n  }\n  function preencherAnimal(animal) {\n    var divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n  function initAnimaNumeros() {\n    var animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-numero]\", \"ativo\", \".numeros\");\n    animaNumeros.init();\n  }\n  function fetchAnimais() {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var animaisResponse, animaisJson;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              animaisResponse = fetch(url);\n              _context.next = 4;\n              return animaisResponse;\n            case 4:\n              _context.next = 6;\n              return _context.sent.json();\n            case 6:\n              animaisJson = _context.sent;\n              animaisJson.forEach(function (animal) {\n                return preencherAnimal(animal);\n              });\n              initAnimaNumeros();\n              _context.next = 14;\n              break;\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  return fetchAnimais();\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-btc.js":
/*!*********************************!*\
  !*** ./js/modules/fetch-btc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction initFetchBtc(url, target) {\n  var spanBtc = document.querySelector(target);\n  function fetchBtc() {\n    return _fetchBtc.apply(this, arguments);\n  }\n  function _fetchBtc() {\n    _fetchBtc = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response, precoBtc;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              response = fetch(url);\n              _context.next = 4;\n              return response;\n            case 4:\n              _context.next = 6;\n              return _context.sent.json();\n            case 6:\n              precoBtc = _context.sent;\n              spanBtc.innerText = (spanBtc.innerText = 1000 / precoBtc.BRL.last).toFixed(6);\n              _context.next = 13;\n              break;\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 10]]);\n    }));\n    return _fetchBtc.apply(this, arguments);\n  }\n  return fetchBtc();\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/fetch-btc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar initFuncionamento = /*#__PURE__*/function () {\n  function initFuncionamento(funcionamento) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, initFuncionamento);\n    this.funcionamento = document.querySelector(funcionamento);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initFuncionamento, [{\n    key: \"dadosFuncionamento\",\n    value: function dadosFuncionamento() {\n      this.diasSemana = this.funcionamento.dataset.semana.split(\",\").map(Number);\n      this.horarioSemana = this.funcionamento.dataset.horario.split(\",\").map(Number);\n    }\n  }, {\n    key: \"dadosTempoReal\",\n    value: function dadosTempoReal() {\n      this.dataAgora = new Date();\n      this.diaAgora = this.dataAgora.getDay();\n      this.horaAgora = this.dataAgora.getUTCHours() - 3;\n    }\n  }, {\n    key: \"abrirFechar\",\n    value: function abrirFechar() {\n      if (this.diasSemana.includes(this.diaAgora) && this.horaAgora >= this.horarioSemana[0] && this.horaAgora <= this.horarioSemana[1]) {\n        this.funcionamento.classList.add(\"aberto\");\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.funcionamento) {\n        this.dadosFuncionamento();\n        this.dadosTempoReal();\n        this.abrirFechar();\n      }\n      return this;\n    }\n  }]);\n  return initFuncionamento;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_click_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside-click-close.js */ \"./js/modules/outside-click-close.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(menuButton, menuList) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.abrirMenu = this.abrirMenu.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"abrirMenu\",\n    value: function abrirMenu() {\n      this.menuList.classList.toggle(\"active\");\n      this.menuButton.classList.toggle(\"active\");\n      MenuMobile.fechar(this.menuList, this.menuButton);\n    }\n  }, {\n    key: \"addMenuMobileEvent\",\n    value: function addMenuMobileEvent() {\n      this.menuButton.addEventListener(\"click\", this.abrirMenu);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuButton && this.menuList) {\n        this.addMenuMobileEvent();\n      }\n      return this;\n    }\n  }], [{\n    key: \"fechar\",\n    value: function fechar(menuList, menuButton) {\n      (0,_outside_click_close_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([menuList, menuButton], function () {\n        menuList.classList.remove(\"active\");\n        menuButton.classList.remove(\"active\");\n      });\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(modalLogin, abrir, fechar) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.modalLogin = document.querySelector(modalLogin);\n    this.abrir = document.querySelector(abrir);\n    this.fechar = document.querySelector(fechar);\n    this.activeClass = \"ativo\";\n    this.handleOpenClose = this.handleOpenClose.bind(this);\n    this.handleClickOut = this.handleClickOut.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"handleClickOut\",\n    value: function handleClickOut(event) {\n      if (this.modalLogin === event.target) {\n        this.modalLogin.classList.remove(this.activeClass);\n      }\n    }\n  }, {\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.modalLogin.classList.toggle(this.activeClass);\n    }\n  }, {\n    key: \"handleOpenClose\",\n    value: function handleOpenClose(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n  }, {\n    key: \"addModalEvent\",\n    value: function addModalEvent() {\n      this.modalLogin.addEventListener(\"mousedown\", this.handleClickOut);\n      this.abrir.addEventListener(\"click\", this.handleOpenClose);\n      this.fechar.addEventListener(\"click\", this.handleOpenClose);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.modalLogin && this.abrir && this.fechar) {\n        this.addModalEvent();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click-close.js":
/*!*******************************************!*\
  !*** ./js/modules/outside-click-close.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClickClose)\n/* harmony export */ });\nfunction outsideClickClose(arrayElements, callback) {\n  var eventStart = [\"touchstart\", \"click\"];\n  var hmtl = document.documentElement;\n  var outside = \"data-outside\";\n  function clickClose(event) {\n    var verificador = arrayElements.some(function (element) {\n      return element.contains(event.target);\n    });\n    arrayElements.forEach(function (element) {\n      if (!verificador) {\n        element.removeAttribute(outside);\n        eventStart.forEach(function () {\n          hmtl.removeEventListener(event, clickClose);\n        });\n        callback();\n      }\n    });\n  }\n  arrayElements.forEach(function (element) {\n    if (!element.hasAttribute(outside, \"\")) {\n      eventStart.forEach(function (starter) {\n        setTimeout(function () {\n          hmtl.addEventListener(starter, clickClose);\n        });\n      });\n      element.setAttribute(outside, \"\");\n    }\n  });\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outside-click-close.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var section = document.querySelector(event.currentTarget.getAttribute(\"href\"));\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener(\"click\", _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"SlideNav\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Slide = /*#__PURE__*/function () {\n  function Slide(slide, wrapper) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slide);\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = \"active\";\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Slide, [{\n    key: \"transition\",\n    value: function transition(active) {\n      this.slide.style.transition = active ? \"transform .3s\" : \"\";\n    }\n  }, {\n    key: \"moveSlide\",\n    value: function moveSlide(distX) {\n      this.slide.style.transform = \"translate3d(\".concat(distX, \"px,0,0)\");\n      this.dist.movePosition = distX;\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(clientX) {\n      this.dist.movement = (this.dist.startX - clientX) * 1.6;\n      return this.dist.finalPosition - this.dist.movement;\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(event) {\n      var pointerPosition = event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n      var finalPosition = this.updatePosition(pointerPosition);\n      this.moveSlide(finalPosition);\n    }\n  }, {\n    key: \"onFinish\",\n    value: function onFinish(event) {\n      var pointerPosition = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n      this.dist.finalPosition = this.dist.movePosition;\n      this.wrapper.removeEventListener(pointerPosition, this.onMove);\n      this.transition(true);\n      this.changeSlideOnFinish();\n    }\n  }, {\n    key: \"activNextSlide\",\n    value: function activNextSlide() {\n      if (this.index.next) {\n        this.changeSlide(this.index.next);\n        this.slideArray[this.index.prev].item.classList.remove(this.activeClass);\n      }\n    }\n  }, {\n    key: \"activePrevSlide\",\n    value: function activePrevSlide() {\n      if (this.index.prev !== undefined) {\n        this.changeSlide(this.index.prev);\n        this.slideArray[this.index.next].item.classList.remove(this.activeClass);\n      }\n    }\n  }, {\n    key: \"changeSlideOnFinish\",\n    value: function changeSlideOnFinish() {\n      if (this.dist.movement > 70 && this.index.next !== undefined) {\n        this.activNextSlide();\n      } else if (this.dist.movement < -70 && this.index.prev !== undefined) {\n        this.activePrevSlide();\n      } else {\n        this.changeSlide(this.index.active);\n      }\n      this.changeActiveClass();\n      this.activeControlItem();\n    }\n  }, {\n    key: \"onStart\",\n    value: function onStart(event) {\n      var moveType;\n      if (event.type === \"mousedown\") {\n        event.preventDefault();\n        this.dist.startX = event.clientX;\n        moveType = \"mousemove\";\n      } else {\n        this.dist.startX = event.changedTouches[0].clientX;\n        moveType = \"touchmove\";\n      }\n      this.wrapper.addEventListener(moveType, this.onMove);\n      this.transition(false);\n    }\n  }, {\n    key: \"addSlideEvents\",\n    value: function addSlideEvents() {\n      this.wrapper.addEventListener(\"mousedown\", this.onStart);\n      this.wrapper.addEventListener(\"mouseup\", this.onFinish);\n      this.wrapper.addEventListener(\"touchstart\", this.onStart);\n      this.wrapper.addEventListener(\"touchend\", this.onFinish);\n    }\n  }, {\n    key: \"slidesIndexNav\",\n    value: function slidesIndexNav(index) {\n      var last = this.slideArray.length - 1;\n      this.index = {\n        prev: index ? index - 1 : undefined,\n        active: index,\n        next: index === last ? undefined : index + 1\n      };\n      return this.index;\n    }\n  }, {\n    key: \"slideConfig\",\n    value: function slideConfig() {\n      this.slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.slide.children).map(function (item) {\n        var position = item.offsetLeft;\n        return {\n          item: item,\n          position: position\n        };\n      });\n      return this.slideArray;\n    }\n  }, {\n    key: \"calcMargin\",\n    value: function calcMargin(index) {\n      return (this.wrapper.offsetWidth - this.slideConfig()[index].item.offsetWidth) / 2;\n    }\n  }, {\n    key: \"offsetWidthMarginLeft\",\n    value: function offsetWidthMarginLeft(index) {\n      var position = this.slideConfig()[index].position;\n      var margin = this.calcMargin(index);\n      return -(position - margin);\n    }\n  }, {\n    key: \"changeActiveClass\",\n    value: function changeActiveClass() {\n      this.slideArray[this.index.active].item.classList.add(this.activeClass);\n    }\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(index) {\n      this.moveSlide(this.offsetWidthMarginLeft(index));\n      this.slidesIndexNav(index);\n      this.dist.finalPosition = this.offsetWidthMarginLeft(index);\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      var _this = this;\n      setTimeout(function () {\n        _this.slideConfig();\n        _this.changeSlide(_this.index.active);\n      }, 500);\n    }\n  }, {\n    key: \"addResizeEvent\",\n    value: function addResizeEvent() {\n      window.addEventListener(\"resize\", this.onResize);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.onStart = this.onStart.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onFinish = this.onFinish.bind(this);\n      this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.onResize.bind(this), 50);\n      this.clickSlide = this.clickSlide.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init(inicio, customControl) {\n      this.transition();\n      this.bindEvents();\n      this.addSlideEvents();\n      this.changeSlide(inicio);\n      this.changeActiveClass();\n      this.addResizeEvent();\n      this.addControl(customControl);\n      this.activeFirstItem();\n      if (document.forms.nav) {\n        this.addClickNavEvent();\n      }\n      return this;\n    }\n  }]);\n  return Slide;\n}();\nvar SlideNav = /*#__PURE__*/function (_Slide) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SlideNav, _Slide);\n  var _super = _createSuper(SlideNav);\n  function SlideNav() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, SlideNav);\n    return _super.apply(this, arguments);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SlideNav, [{\n    key: \"clickSlide\",\n    value: function clickSlide(event) {\n      event.preventDefault();\n      this.form = document.forms.nav;\n      if (this.form.next === event.target) {\n        this.activNextSlide();\n      } else if (this.form.prev === event.target) {\n        this.activePrevSlide();\n      }\n      this.changeActiveClass();\n      this.activeControlItem();\n    }\n  }, {\n    key: \"addClickNavEvent\",\n    value: function addClickNavEvent() {\n      document.forms.nav.addEventListener(\"click\", this.clickSlide);\n    }\n  }, {\n    key: \"createControl\",\n    value: function createControl() {\n      var control = document.createElement(\"ul\");\n      control.dataset.control = \"slide\";\n      this.slideArray.forEach(function (item, index) {\n        control.innerHTML += \"<li><a href=\\\"#slide\".concat(index + 1, \"\\\">\").concat(index, \"</a></li>\");\n      });\n      document.body.insertBefore(control, document.forms.nav);\n      return control;\n    }\n  }, {\n    key: \"activeFirstItem\",\n    value: function activeFirstItem() {\n      this.controlArray[this.index.active].classList.add(this.activeClass);\n    }\n  }, {\n    key: \"activeControlItem\",\n    value: function activeControlItem() {\n      var _this2 = this;\n      this.controlArray.forEach(function (item) {\n        item.classList.remove(_this2.activeClass);\n      });\n      this.activeFirstItem();\n    }\n  }, {\n    key: \"removeCLass\",\n    value: function removeCLass() {\n      var _this3 = this;\n      this.slideArray.forEach(function (slide) {\n        slide.item.classList.remove(_this3.activeClass);\n      });\n    }\n  }, {\n    key: \"eventControl\",\n    value: function eventControl(item, index) {\n      var _this4 = this;\n      item.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n        _this4.changeSlide(index);\n        _this4.removeCLass();\n        _this4.changeActiveClass();\n        _this4.activeControlItem();\n      });\n    }\n  }, {\n    key: \"addControl\",\n    value: function addControl(customControl) {\n      var _this5 = this;\n      this.control = document.querySelector(customControl) || this.createControl();\n      this.controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.control.children);\n      this.controlArray.forEach(function (item, index) {\n        _this5.eventControl(item, index);\n      });\n    }\n  }]);\n  return SlideNav;\n}(Slide);\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(tabMenu, tabContent) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TabNav);\n    this.tabMenu = document.querySelectorAll(tabMenu);\n    this.tabContent = document.querySelectorAll(tabContent);\n    this.activeClass = \"ativo\";\n    this.handleTabNav = this.handleTabNav.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TabNav, [{\n    key: \"handleTabNav\",\n    value: function handleTabNav(event) {\n      var _this = this;\n      var arrayTabMenu = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.tabMenu);\n      var tabNavTarget = event.currentTarget;\n      var index = arrayTabMenu.indexOf(tabNavTarget);\n      this.tabContent[index].classList.add(this.activeClass);\n      this.tabContent.forEach(function (content, index2) {\n        if (index !== index2) {\n          content.classList.remove(_this.activeClass);\n        }\n      });\n    }\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (menu) {\n        menu.addEventListener(\"click\", _this2.handleTabNav);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        this.tabContent[0].classList.add(this.activeClass);\n        this.addTabNavEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ToolTip = /*#__PURE__*/function () {\n  function ToolTip(tooltips) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ToolTip);\n    this.tooltips = document.querySelectorAll(tooltips);\n    this.mouseOver = this.mouseOver.bind(this);\n    this.mouseLeave = this.mouseLeave.bind(this);\n    this.mouseMove = this.mouseMove.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ToolTip, [{\n    key: \"mouseLeave\",\n    value: function mouseLeave(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.boxTollTip.remove();\n      currentTarget.removeEventListener(\"mouseleave\", this.mouseLeave);\n    }\n  }, {\n    key: \"mouseMove\",\n    value: function mouseMove(event) {\n      if (event.pageX + 190 > window.innerWidth) {\n        this.boxTollTip.style.left = \"\".concat(event.pageX - 140, \"px\");\n      } else {\n        this.boxTollTip.style.left = \"\".concat(event.pageX + 20, \"px\");\n      }\n      this.boxTollTip.style.top = \"\".concat(event.pageY + 20, \"px\");\n    }\n  }, {\n    key: \"criarBoxToolTip\",\n    value: function criarBoxToolTip(element) {\n      var boxTollTip = document.createElement(\"div\");\n      document.body.appendChild(boxTollTip);\n      boxTollTip.innerText = element.getAttribute(\"aria-label\");\n      boxTollTip.classList.add(\"tooltip\");\n      this.boxTollTip = boxTollTip;\n    }\n  }, {\n    key: \"mouseOver\",\n    value: function mouseOver(_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      this.criarBoxToolTip(currentTarget);\n      currentTarget.addEventListener(\"mouseleave\", this.mouseLeave);\n      currentTarget.addEventListener(\"mousemove\", this.mouseMove);\n    }\n  }, {\n    key: \"addTooltipsEvent\",\n    value: function addTooltipsEvent() {\n      var _this = this;\n      this.tooltips.forEach(function (item) {\n        item.addEventListener(\"mouseover\", _this.mouseOver);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tooltips.length) {\n        this.addTooltipsEvent();\n      }\n      return this;\n    }\n  }]);\n  return ToolTip;\n}();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_drop_down_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drop-down.js */ \"./js/modules/drop-down.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./js/modules/fetch-btc.js\");\n/* harmony import */ var _modules_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-nav=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordion = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anima=\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] .container-intro');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"modalLogin\"]', '[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\ntooltip.init();\nvar animaScroll = new _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-anima=\"scroll\"]');\nanimaScroll.init();\nvar dropDown = new _modules_drop_down_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-dropdown]\");\ndropDown.init();\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nvar funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-semana]\");\nfuncionamento.init();\nvar slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_9__.SlideNav(\".slide\", \".wrapper\", \"button\");\nslide.init(2, \".custom-controls\");\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"./animaisapi.json\", \".numeros-grid\");\n(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\n(0,_modules_debounce_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n      return ContinueSentinel;\n    }\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) {\n              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            }\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n  return arr2;\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://animaisfantasticos/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;