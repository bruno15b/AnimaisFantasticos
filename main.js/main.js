/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      61: (t, e, n) => {
        var r = n(698).default;
        function o() {
          "use strict";
          (t.exports = o =
            function () {
              return e;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e = {},
            n = Object.prototype,
            i = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            c = s.iterator || "@@iterator",
            u = s.asyncIterator || "@@asyncIterator",
            l = s.toStringTag || "@@toStringTag";
          function h(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            h({}, "");
          } catch (t) {
            h = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function d(t, e, n, r) {
            var o = e && e.prototype instanceof p ? e : p,
              i = Object.create(o.prototype),
              s = new A(r || []);
            return a(i, "_invoke", { value: k(t, n, s) }), i;
          }
          function f(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = d;
          var v = {};
          function p() {}
          function m() {}
          function y() {}
          var g = {};
          h(g, c, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            L = b && b(b(C([])));
          L && L !== n && i.call(L, c) && (g = L);
          var w = (y.prototype = p.prototype = Object.create(g));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              h(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function n(o, a, s, c) {
              var u = f(t[o], t, a);
              if ("throw" !== u.type) {
                var l = u.arg,
                  h = l.value;
                return h && "object" == r(h) && i.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        n("next", t, s, c);
                      },
                      function (t) {
                        n("throw", t, s, c);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (l.value = t), s(l);
                      },
                      function (t) {
                        return n("throw", t, s, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (t, r) {
                function i() {
                  return new e(function (e, o) {
                    n(t, r, e, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function k(t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return { value: void 0, done: !0 };
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = T(a, n);
                  if (s) {
                    if (s === v) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = f(t, e, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? "completed" : "suspendedYield"), c.arg === v)) continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function T(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), T(t, e), "throw" === e.method)) return v;
                (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
              }
              return v;
            }
            var r = f(n, t.iterator, e.arg);
            if ("throw" === r.type) return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), v;
            var o = r.arg;
            return o
              ? o.done
                ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = void 0)), (e.delegate = null), v)
                : o
              : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), v);
          }
          function S(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
          }
          function O(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function A(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
          }
          function C(t) {
            if (t) {
              var e = t[c];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var n = -1,
                  r = function e() {
                    for (; ++n < t.length; ) if (i.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (r.next = r);
              }
            }
            return { next: M };
          }
          function M() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = y),
            a(w, "constructor", { value: y, configurable: !0 }),
            a(y, "constructor", { value: m, configurable: !0 }),
            (m.displayName = h(y, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), h(t, l, "GeneratorFunction")), (t.prototype = Object.create(w)), t;
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            x(E.prototype),
            h(E.prototype, u, function () {
              return this;
            }),
            (e.AsyncIterator = E),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(d(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(w),
            h(w, l, "Generator"),
            h(w, c, function () {
              return this;
            }),
            h(w, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = C),
            (A.prototype = {
              constructor: A,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function n(n, r) {
                  return (a.type = "throw"), (a.arg = t), (e.next = n), r && ((e.method = "next"), (e.arg = void 0)), !!r;
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    a = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var s = i.call(o, "catchLoc"),
                      c = i.call(o, "finallyLoc");
                    if (s && c) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!c) throw new Error("try statement without catch or finally");
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var o = r;
                    break;
                  }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), v) : this.complete(a);
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      O(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (this.delegate = { iterator: C(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = void 0), v;
              },
            }),
            e
          );
        }
        (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
      },
      698: (t) => {
        function e(n) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(n)
          );
        }
        (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
      },
      687: (t, e, n) => {
        var r = n(61)();
        t.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (t) {
          "object" == typeof globalThis ? (globalThis.regeneratorRuntime = r) : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }
      function r(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      var o = (function () {
          function e(n, r) {
            t(this, e),
              (this.linksInternos = document.querySelectorAll(n)),
              (this.options = void 0 === r ? { behavior: "smooth", block: "start" } : r),
              (this.scrollToSection = this.scrollToSection.bind(this));
          }
          return (
            r(e, [
              {
                key: "scrollToSection",
                value: function (t) {
                  t.preventDefault(), document.querySelector(t.currentTarget.getAttribute("href")).scrollIntoView(this.options);
                },
              },
              {
                key: "addLinkEvent",
                value: function () {
                  var t = this;
                  this.linksInternos.forEach(function (e) {
                    e.addEventListener("click", t.scrollToSection);
                  });
                },
              },
              {
                key: "init",
                value: function () {
                  return this.linksInternos.length && this.addLinkEvent(), this;
                },
              },
            ]),
            e
          );
        })(),
        i = (function () {
          function e(n, r, o) {
            t(this, e),
              (this.accordions = document.querySelectorAll(n)),
              (this.classDd = void 0 === r ? "ativo" : r),
              (this.classDdAfter = void 0 === o ? "arrow-up" : o),
              (this.handleAccordion = this.handleAccordion.bind(this));
          }
          return (
            r(e, [
              {
                key: "handleAccordion",
                value: function (t) {
                  var e = t.currentTarget;
                  e.nextElementSibling.classList.toggle(this.classDd),
                    e.classList.contains(this.classDdAfter) ? e.classList.remove(this.classDdAfter) : e.classList.add(this.classDdAfter);
                },
              },
              {
                key: "addAccordionEvent",
                value: function () {
                  var t = this;
                  this.accordions.forEach(function (e, n) {
                    e.addEventListener("click", t.handleAccordion), n > 0 && e.classList.add(t.classDdAfter);
                  });
                },
              },
              {
                key: "init",
                value: function () {
                  return this.accordions.length && (this.accordions[0].nextElementSibling.classList.add(this.classDd), this.addAccordionEvent()), this;
                },
              },
            ]),
            e
          );
        })();
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var s = (function () {
          function e(n, r) {
            t(this, e),
              (this.tabMenu = document.querySelectorAll(n)),
              (this.tabContent = document.querySelectorAll(r)),
              (this.activeClass = "ativo"),
              (this.handleTabNav = this.handleTabNav.bind(this));
          }
          return (
            r(e, [
              {
                key: "handleTabNav",
                value: function (t) {
                  var e,
                    n = this,
                    r =
                      (function (t) {
                        if (Array.isArray(t)) return a(t);
                      })((e = this.tabMenu)) ||
                      (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                      })(e) ||
                      (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return a(t, e);
                          var n = Object.prototype.toString.call(t).slice(8, -1);
                          return (
                            "Object" === n && t.constructor && (n = t.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                          );
                        }
                      })(e) ||
                      (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                      })(),
                    o = t.currentTarget,
                    i = r.indexOf(o);
                  this.tabContent[i].classList.add(this.activeClass),
                    this.tabContent.forEach(function (t, e) {
                      i !== e && t.classList.remove(n.activeClass);
                    });
                },
              },
              {
                key: "addTabNavEvent",
                value: function () {
                  var t = this;
                  this.tabMenu.forEach(function (e) {
                    e.addEventListener("click", t.handleTabNav);
                  });
                },
              },
              {
                key: "init",
                value: function () {
                  return this.tabMenu.length && this.tabContent.length && (this.tabContent[0].classList.add(this.activeClass), this.addTabNavEvent()), this;
                },
              },
            ]),
            e
          );
        })(),
        c = (function () {
          function e(n, r, o) {
            t(this, e),
              (this.modalLogin = document.querySelector(n)),
              (this.abrir = document.querySelector(r)),
              (this.fechar = document.querySelector(o)),
              (this.activeClass = "ativo"),
              (this.handleOpenClose = this.handleOpenClose.bind(this)),
              (this.handleClickOut = this.handleClickOut.bind(this));
          }
          return (
            r(e, [
              {
                key: "handleClickOut",
                value: function (t) {
                  this.modalLogin === t.target && this.modalLogin.classList.remove(this.activeClass);
                },
              },
              {
                key: "toggleModal",
                value: function () {
                  this.modalLogin.classList.toggle(this.activeClass);
                },
              },
              {
                key: "handleOpenClose",
                value: function (t) {
                  t.preventDefault(), this.toggleModal();
                },
              },
              {
                key: "addModalEvent",
                value: function () {
                  this.modalLogin.addEventListener("mousedown", this.handleClickOut),
                    this.abrir.addEventListener("click", this.handleOpenClose),
                    this.fechar.addEventListener("click", this.handleOpenClose);
                },
              },
              {
                key: "init",
                value: function () {
                  return this.modalLogin && this.abrir && this.fechar && this.addModalEvent(), this;
                },
              },
            ]),
            e
          );
        })(),
        u = (function () {
          function e(n) {
            t(this, e),
              (this.tooltips = document.querySelectorAll(n)),
              (this.mouseOver = this.mouseOver.bind(this)),
              (this.mouseLeave = this.mouseLeave.bind(this)),
              (this.mouseMove = this.mouseMove.bind(this));
          }
          return (
            r(e, [
              {
                key: "mouseLeave",
                value: function (t) {
                  var e = t.currentTarget;
                  this.boxTollTip.remove(), e.removeEventListener("mouseleave", this.mouseLeave);
                },
              },
              {
                key: "mouseMove",
                value: function (t) {
                  t.pageX + 190 > window.innerWidth ? (this.boxTollTip.style.left = "".concat(t.pageX - 140, "px")) : (this.boxTollTip.style.left = "".concat(t.pageX + 20, "px")),
                    (this.boxTollTip.style.top = "".concat(t.pageY + 20, "px"));
                },
              },
              {
                key: "criarBoxToolTip",
                value: function (t) {
                  var e = document.createElement("div");
                  document.body.appendChild(e), (e.innerText = t.getAttribute("aria-label")), e.classList.add("tooltip"), (this.boxTollTip = e);
                },
              },
              {
                key: "mouseOver",
                value: function (t) {
                  var e = t.currentTarget;
                  this.criarBoxToolTip(e), e.addEventListener("mouseleave", this.mouseLeave), e.addEventListener("mousemove", this.mouseMove);
                },
              },
              {
                key: "addTooltipsEvent",
                value: function () {
                  var t = this;
                  this.tooltips.forEach(function (e) {
                    e.addEventListener("mouseover", t.mouseOver);
                  });
                },
              },
              {
                key: "init",
                value: function () {
                  return this.tooltips.length && this.addTooltipsEvent(), this;
                },
              },
            ]),
            e
          );
        })();
      function l(t, e) {
        var n = ["touchstart", "click"],
          r = document.documentElement,
          o = "data-outside";
        function i(a) {
          var s = t.some(function (t) {
            return t.contains(a.target);
          });
          t.forEach(function (t) {
            s ||
              (t.removeAttribute(o),
              n.forEach(function () {
                r.removeEventListener(a, i);
              }),
              e());
          });
        }
        t.forEach(function (t) {
          t.hasAttribute(o, "") ||
            (n.forEach(function (t) {
              setTimeout(function () {
                r.addEventListener(t, i);
              });
            }),
            t.setAttribute(o, ""));
        });
      }
      function h(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function d(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              h(i, r, o, a, s, "next", t);
            }
            function s(t) {
              h(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      var f,
        v,
        p = n(687),
        m = n.n(p),
        y = (function () {
          function e(n, r, o) {
            t(this, e),
              (this.numeros = document.querySelectorAll(n)),
              (this.observeClass = r),
              (this.observeTarget = document.querySelector(o)),
              (this.handleMutation = this.handleMutation.bind(this));
          }
          return (
            r(e, [
              {
                key: "animaNumeros",
                value: function () {
                  this.numeros.forEach(function (t) {
                    var e = +t.innerText,
                      n = Math.ceil(e / 100),
                      r = 0,
                      o = setInterval(function () {
                        (r += n), (t.innerText = r), r > e && ((t.innerText = e), clearInterval(o));
                      }, 20 * Math.random());
                  });
                },
              },
              {
                key: "handleMutation",
                value: function (t) {
                  t[0].target.classList.contains(this.observeClass) && (this.observer.disconnect(), this.animaNumeros());
                },
              },
              {
                key: "addObserver",
                value: function () {
                  (this.observer = new MutationObserver(this.handleMutation)), this.observer.observe(this.observeTarget, { attributes: !0 });
                },
              },
              {
                key: "init",
                value: function () {
                  return this.numeros.length && this.observeTarget && this.addObserver(), this;
                },
              },
            ]),
            e
          );
        })();
      new o('[data-nav="suave"] a[href^="#"]').init(),
        new i('[data-anima="accordion"] dt').init(),
        new s('[data-tab="menu"] li', '[data-tab="content"] .container-intro').init(),
        new c('[data-modal="modalLogin"]', '[data-modal="abrir"]', '[data-modal="fechar"]').init(),
        new u("[data-tooltip]").init(),
        (function () {
          var t = document.querySelector(".btc-preco");
          function e() {
            return (e = d(
              m().mark(function e(n) {
                var r, o;
                return m().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (r = fetch(n)), (e.next = 4), r;
                        case 4:
                          return (e.next = 6), e.sent.json();
                        case 6:
                          (o = e.sent), (t.innerText = (t.innerText = 1e3 / o.BRL.last).toFixed(6)), (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            )).apply(this, arguments);
          }
          t &&
            (function (t) {
              e.apply(this, arguments);
            })("https://blockchain.info/ticker");
        })(),
        (function () {
          var t = document.querySelector(".numeros-grid");
          function e(t) {
            var e = document.createElement("div");
            return e.classList.add("numero-animal"), (e.innerHTML = "<h3>".concat(t.specie, "</h3> <span data-numero>").concat(t.total, "</span>")), e;
          }
          function n() {
            return (n = d(
              m().mark(function n(r) {
                var o;
                return m().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (o = fetch(r)), (n.next = 4), o;
                        case 4:
                          return (n.next = 6), n.sent.json();
                        case 6:
                          n.sent.forEach(function (n) {
                            var r = e(n);
                            t.appendChild(r);
                          }),
                            new y("[data-numero]", "ativo", ".numeros").init(),
                            (n.next = 15);
                          break;
                        case 12:
                          (n.prev = 12), (n.t0 = n.catch(0)), console.log(n.t0);
                        case 15:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 12]]
                );
              })
            )).apply(this, arguments);
          }
          t &&
            (function (t) {
              n.apply(this, arguments);
            })("./animaisapi.json");
        })(),
        (function () {
          var t = document.querySelector("[data-semana]");
          if (t) {
            var e = t.dataset.semana.split(",").map(Number),
              n = t.dataset.horario.split(",").map(Number),
              r = new Date(),
              o = r.getDay(),
              i = r.getHours();
            e.includes(o) && i >= n[0] && i <= n[1] && t.classList.add("aberto");
          }
        })(),
        (f = document.querySelector('[data-menu="button"]')),
        (v = document.querySelector('[data-menu="list"]')),
        f &&
          f.addEventListener("click", function () {
            v.classList.toggle("active"),
              f.classList.toggle("active"),
              l([v, f], function () {
                v.classList.remove("active"), f.classList.remove("active");
              });
          }),
        (function () {
          function t(t) {
            var e = this;
            t.preventDefault(),
              this.classList.add("active"),
              l([this], function () {
                e.classList.remove("active");
              });
          }
          document.querySelectorAll("[data-dropdown]").forEach(function (e) {
            ["touchstart", "click"].forEach(function (n) {
              e.addEventListener(n, t);
            });
          });
        })(),
        (function () {
          var t = document.querySelectorAll('[data-anima="scroll"]'),
            e = 0.8 * window.innerHeight;
          function n() {
            t.forEach(function (t) {
              t.getBoundingClientRect().top - e < 0 && t.classList.add("ativo");
            });
          }
          t.length && (n(), window.addEventListener("scroll", n));
        })();
    })();
})();
