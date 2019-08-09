! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var l = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var l in e) n.d(o, l, function (t) {
                return e[t]
            }.bind(null, l));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/dist", n(n.s = 0)
}([function (e, t, n) {
    "use strict";
    n.r(t);
    var o = () => {
        const e = document.querySelectorAll(".call-btn"),
            t = document.querySelectorAll(".discount-btn"),
            n = document.querySelectorAll(".check-btn"),
            o = document.querySelectorAll(".consultation-btn"),
            l = document.querySelector(".popup-call"),
            c = document.querySelector(".popup-discount"),
            r = document.querySelector(".popup-check"),
            u = document.querySelector(".popup-consultation"),
            d = (e, t) => {
                e.forEach(e => {
                    e.addEventListener("click", () => {
                        t.style.display = "block"
                    })
                })
            };
        d(e, l), d(t, c), d(n, r), d(o, u);
        const a = e => {
            e.addEventListener("click", t => {
                let n = t.target;
                n.classList.contains("popup-close") ? (t.preventDefault(), e.style.display = "") : (n = n.closest(".popup-dialog")) || (e.style.display = "none")
            })
        };
        a(l), a(c), a(r), a(u)
    };
    var l = () => {
        const e = document.getElementById("accordion-two"),
            t = document.querySelectorAll(".panel-heading"),
            n = document.querySelectorAll(".panel-collapse");
        e.addEventListener("click", e => {
            e.preventDefault();
            let o = e.target;
            (o = o.closest(".panel-heading")).classList.contains("panel-heading") && t.forEach((e, t) => {
                e === o && (e => {
                    for (let t = 0; t < n.length; t++) n[t].style.display = e === t ? "block" : "none"
                })(t)
            })
        })
    };
    var c = () => {
        const e = document.querySelector(".add-sentence-btn"),
            t = document.querySelectorAll(".hide-item");
        e.addEventListener("click", () => {
            t.forEach(e => {
                e.classList.remove("hidden")
            }), e.style.display = "none"
        })
    };
    var r = () => {
        document.getElementById("myonoffswitch"), document.getElementById("accordion"), document.querySelectorAll(".panel-heading"), document.querySelectorAll(".collapse"), document.getElementById("collapseTwo"), document.getElementById("collapseThree"), document.getElementById("collapseVour")
    };
    (() => {})(), o(), l(), c(), r()
}]);