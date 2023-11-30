function t(t, e, r, n) {
    Object.defineProperty(t, e, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
function e(t) {
    return t && t.__esModule ? t.default : t
}
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
  , n = {}
  , i = {}
  , o = r.parcelRequire2524;
null == o && ((o = function(t) {
    if (t in n)
        return n[t].exports;
    if (t in i) {
        var e = i[t];
        delete i[t];
        var r = {
            id: t,
            exports: {}
        };
        return n[t] = r,
        e.call(r.exports, r, r.exports),
        r.exports
    }
    var o = new Error("Cannot find module '" + t + "'");
    throw o.code = "MODULE_NOT_FOUND",
    o
}
).register = function(t, e) {
    i[t] = e
}
,
r.parcelRequire2524 = o),
o.register("5IQP4", (function(e, r) {
    t(e.exports, "preloadFonts", (function() {
        return n
    }
    ));
    const n = t=>new Promise((e=>{
        WebFont.load({
            typekit: {
                id: t
            },
            active: e
        })
    }
    ))
}
)),
o.register("92jPu", (function(r, n) {
    t(r.exports, "default", (function() {
        return d
    }
    ));
    var i = o("9f2RE")
      , s = o("e0uiQ");
    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function u(t, e, r) {
        return e && a(t.prototype, e),
        r && a(t, r),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function l() {
        return l = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }
        ,
        l.apply(this, arguments)
    }
    function c(t, e) {
        return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        c(t, e)
    }
    function h(t, e) {
        var r = t % e;
        return (e > 0 && r < 0 || e < 0 && r > 0) && (r += e),
        r
    }
    var f = ["duration", "easing"]
      , p = function() {
        function t() {}
        var e = t.prototype;
        return e.to = function(t, e) {
            var r = this
              , n = void 0 === e ? {} : e
              , i = n.duration
              , o = void 0 === i ? 1 : i
              , s = n.easing
              , a = void 0 === s ? function(t) {
                return t
            }
            : s
              , u = function(t, e) {
                if (null == t)
                    return {};
                var r, n, i = {}, o = Object.keys(t);
                for (n = 0; n < o.length; n++)
                    e.indexOf(r = o[n]) >= 0 || (i[r] = t[r]);
                return i
            }(n, f);
            this.target = t,
            this.fromKeys = l({}, u),
            this.toKeys = l({}, u),
            this.keys = Object.keys(l({}, u)),
            this.keys.forEach((function(e) {
                r.fromKeys[e] = t[e]
            }
            )),
            this.duration = o,
            this.easing = a,
            this.currentTime = 0,
            this.isRunning = !0
        }
        ,
        e.stop = function() {
            this.isRunning = !1
        }
        ,
        e.raf = function(t) {
            var e = this;
            if (this.isRunning) {
                this.currentTime = Math.min(this.currentTime + t, this.duration);
                var r = this.progress >= 1 ? 1 : this.easing(this.progress);
                this.keys.forEach((function(t) {
                    var n = e.fromKeys[t];
                    e.target[t] = n + (e.toKeys[t] - n) * r
                }
                )),
                1 === r && this.stop()
            }
        }
        ,
        u(t, [{
            key: "progress",
            get: function() {
                return this.currentTime / this.duration
            }
        }]),
        t
    }()
      , d = function(t) {
        var r, n;
        function i(r) {
            var n, i, o, a, u = void 0 === r ? {} : r, l = u.duration, c = void 0 === l ? 1.2 : l, h = u.easing, f = void 0 === h ? function(t) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * t))
            }
            : h, d = u.smooth, _ = void 0 === d || d, g = u.mouseMultiplier, v = void 0 === g ? 1 : g, m = u.smoothTouch, y = void 0 !== m && m, x = u.touchMultiplier, w = void 0 === x ? 2 : x, b = u.direction, T = void 0 === b ? "vertical" : b, M = u.gestureDirection, S = void 0 === M ? "vertical" : M, O = u.infinite, k = void 0 !== O && O, P = u.wrapper, E = void 0 === P ? window : P, C = u.content, A = void 0 === C ? document.body : C;
            (a = t.call(this) || this).onWindowResize = function() {
                a.wrapperWidth = window.innerWidth,
                a.wrapperHeight = window.innerHeight
            }
            ,
            a.onWrapperResize = function(t) {
                var e = t[0];
                if (e) {
                    var r = e.contentRect;
                    a.wrapperWidth = r.width,
                    a.wrapperHeight = r.height
                }
            }
            ,
            a.onContentResize = function(t) {
                var e = t[0];
                if (e) {
                    var r = e.contentRect;
                    a.contentWidth = r.width,
                    a.contentHeight = r.height
                }
            }
            ,
            a.onVirtualScroll = function(t) {
                var e = t.deltaY
                  , r = t.deltaX
                  , n = t.originalEvent;
                if (!("vertical" === a.gestureDirection && 0 === e || "horizontal" === a.gestureDirection && 0 === r)) {
                    var i = !!n.composedPath().find((function(t) {
                        return t.hasAttribute && t.hasAttribute("data-lenis-prevent")
                    }
                    ));
                    n.ctrlKey || i || (a.smooth = n.changedTouches ? a.smoothTouch : a.options.smooth,
                    a.stopped ? n.preventDefault() : a.smooth && 4 !== n.buttons && (a.smooth && n.preventDefault(),
                    a.targetScroll -= "both" === a.gestureDirection ? r + e : "horizontal" === a.gestureDirection ? r : e,
                    a.scrollTo(a.targetScroll)))
                }
            }
            ,
            a.onScroll = function(t) {
                a.isScrolling && a.smooth || (a.targetScroll = a.scroll = a.lastScroll = a.wrapperNode[a.scrollProperty],
                a.notify())
            }
            ,
            window.lenisVersion = "0.2.28",
            a.options = {
                duration: c,
                easing: f,
                smooth: _,
                mouseMultiplier: v,
                smoothTouch: y,
                touchMultiplier: w,
                direction: T,
                gestureDirection: S,
                infinite: k,
                wrapper: E,
                content: A
            },
            a.duration = c,
            a.easing = f,
            a.smooth = _,
            a.mouseMultiplier = v,
            a.smoothTouch = y,
            a.touchMultiplier = w,
            a.direction = T,
            a.gestureDirection = S,
            a.infinite = k,
            a.wrapperNode = E,
            a.contentNode = A,
            a.wrapperNode.addEventListener("scroll", a.onScroll),
            a.wrapperNode === window ? (a.wrapperNode.addEventListener("resize", a.onWindowResize),
            a.onWindowResize()) : (a.wrapperHeight = a.wrapperNode.offsetHeight,
            a.wrapperWidth = a.wrapperNode.offsetWidth,
            a.wrapperObserver = new ResizeObserver(a.onWrapperResize),
            a.wrapperObserver.observe(a.wrapperNode)),
            a.contentHeight = a.contentNode.offsetHeight,
            a.contentWidth = a.contentNode.offsetWidth,
            a.contentObserver = new ResizeObserver(a.onContentResize),
            a.contentObserver.observe(a.contentNode),
            a.targetScroll = a.scroll = a.lastScroll = a.wrapperNode[a.scrollProperty],
            a.animate = new p;
            var D = (null == (n = navigator) || null == (i = n.userAgentData) ? void 0 : i.platform) || (null == (o = navigator) ? void 0 : o.platform) || "unknown";
            return a.virtualScroll = new (e(s))({
                el: a.wrapperNode,
                firefoxMultiplier: 50,
                mouseMultiplier: a.mouseMultiplier * (D.includes("Win") || D.includes("Linux") ? .84 : .4),
                touchMultiplier: a.touchMultiplier,
                passive: !1,
                useKeyboard: !1,
                useTouch: !0
            }),
            a.virtualScroll.on(a.onVirtualScroll),
            a
        }
        n = t,
        (r = i).prototype = Object.create(n.prototype),
        r.prototype.constructor = r,
        c(r, n);
        var o = i.prototype;
        return o.start = function() {
            var t = this.wrapperNode;
            this.wrapperNode === window && (t = document.documentElement),
            t.classList.remove("lenis-stopped"),
            this.stopped = !1
        }
        ,
        o.stop = function() {
            var t = this.wrapperNode;
            this.wrapperNode === window && (t = document.documentElement),
            t.classList.add("lenis-stopped"),
            this.stopped = !0,
            this.animate.stop()
        }
        ,
        o.destroy = function() {
            var t;
            this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize),
            this.wrapperNode.removeEventListener("scroll", this.onScroll),
            this.virtualScroll.destroy(),
            null == (t = this.wrapperObserver) || t.disconnect(),
            this.contentObserver.disconnect()
        }
        ,
        o.raf = function(t) {
            var e = t - (this.now || 0);
            this.now = t,
            !this.stopped && this.smooth && (this.lastScroll = this.scroll,
            this.animate.raf(.001 * e),
            this.scroll === this.targetScroll && (this.lastScroll = this.scroll),
            this.isScrolling && (this.setScroll(this.scroll),
            this.notify()),
            this.isScrolling = this.scroll !== this.targetScroll)
        }
        ,
        o.setScroll = function(t) {
            var e = this.infinite ? h(t, this.limit) : t;
            "horizontal" === this.direction ? this.wrapperNode.scrollTo(e, 0) : this.wrapperNode.scrollTo(0, e)
        }
        ,
        o.notify = function() {
            var t = this.infinite ? h(this.scroll, this.limit) : this.scroll;
            this.emit("scroll", {
                scroll: t,
                limit: this.limit,
                velocity: this.velocity,
                direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
                progress: t / this.limit
            })
        }
        ,
        o.scrollTo = function(t, e) {
            var r = void 0 === e ? {} : e
              , n = r.offset
              , i = void 0 === n ? 0 : n
              , o = r.immediate
              , s = void 0 !== o && o
              , a = r.duration
              , u = void 0 === a ? this.duration : a
              , l = r.easing
              , c = void 0 === l ? this.easing : l;
            if (null != t && !this.stopped) {
                var h;
                if ("number" == typeof t)
                    h = t;
                else if ("top" === t || "#top" === t)
                    h = 0;
                else if ("bottom" === t)
                    h = this.limit;
                else {
                    var f;
                    if ("string" == typeof t)
                        f = document.querySelector(t);
                    else {
                        if (null == t || !t.nodeType)
                            return;
                        f = t
                    }
                    if (!f)
                        return;
                    var p = 0;
                    if (this.wrapperNode !== window) {
                        var d = this.wrapperNode.getBoundingClientRect();
                        p = "horizontal" === this.direction ? d.left : d.top
                    }
                    var _ = f.getBoundingClientRect();
                    h = ("horizontal" === this.direction ? _.left : _.top) + this.scroll - p
                }
                h += i,
                this.targetScroll = this.infinite ? h : Math.max(0, Math.min(h, this.limit)),
                !this.smooth || s ? (this.animate.stop(),
                this.scroll = this.lastScroll = this.targetScroll,
                this.setScroll(this.targetScroll)) : this.animate.to(this, {
                    duration: u,
                    easing: c,
                    scroll: this.targetScroll
                })
            }
        }
        ,
        u(i, [{
            key: "scrollProperty",
            get: function() {
                return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop"
            }
        }, {
            key: "limit",
            get: function() {
                return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight
            }
        }, {
            key: "velocity",
            get: function() {
                return this.scroll - this.lastScroll
            }
        }]),
        i
    }(i.TinyEmitter)
}
)),
o.register("9f2RE", (function(t, e) {
    function r() {}
    r.prototype = {
        on: function(t, e, r) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: r
            }),
            this
        },
        once: function(t, e, r) {
            var n = this;
            function i() {
                n.off(t, i),
                e.apply(r, arguments)
            }
            return i._ = e,
            this.on(t, i, r)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++)
                r[n].fn.apply(r[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var r = this.e || (this.e = {})
              , n = r[t]
              , i = [];
            if (n && e)
                for (var o = 0, s = n.length; o < s; o++)
                    n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
            return i.length ? r[t] = i : delete r[t],
            this
        }
    },
    t.exports = r,
    t.exports.TinyEmitter = r
}
)),
o.register("e0uiQ", (function(t, e) {
    t.exports,
    t.exports = function() {
        var t = 0;
        function e(e) {
            return "__private_" + t++ + "_" + e
        }
        function r(t, e) {
            if (!Object.prototype.hasOwnProperty.call(t, e))
                throw new TypeError("attempted to use private field on non-instance");
            return t
        }
        function n() {}
        n.prototype = {
            on: function(t, e, r) {
                var n = this.e || (this.e = {});
                return (n[t] || (n[t] = [])).push({
                    fn: e,
                    ctx: r
                }),
                this
            },
            once: function(t, e, r) {
                var n = this;
                function i() {
                    n.off(t, i),
                    e.apply(r, arguments)
                }
                return i._ = e,
                this.on(t, i, r)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++)
                    r[n].fn.apply(r[n].ctx, e);
                return this
            },
            off: function(t, e) {
                var r = this.e || (this.e = {})
                  , n = r[t]
                  , i = [];
                if (n && e)
                    for (var o = 0, s = n.length; o < s; o++)
                        n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
                return i.length ? r[t] = i : delete r[t],
                this
            }
        };
        var i = n;
        i.TinyEmitter = n;
        var o, s = "virtualscroll", a = e("options"), u = e("el"), l = e("emitter"), c = e("event"), h = e("touchStart"), f = e("bodyTouchAction");
        return function() {
            function t(t) {
                var e = this;
                Object.defineProperty(this, a, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, u, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, l, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, c, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, h, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, f, {
                    writable: !0,
                    value: void 0
                }),
                this._onWheel = function(t) {
                    var n = r(e, a)[a]
                      , i = r(e, c)[c];
                    i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                    i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                    o.isFirefox && 1 === t.deltaMode && (i.deltaX *= n.firefoxMultiplier,
                    i.deltaY *= n.firefoxMultiplier),
                    i.deltaX *= n.mouseMultiplier,
                    i.deltaY *= n.mouseMultiplier,
                    e._notify(t)
                }
                ,
                this._onMouseWheel = function(t) {
                    var n = r(e, c)[c];
                    n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                    n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                    e._notify(t)
                }
                ,
                this._onTouchStart = function(t) {
                    var n = t.targetTouches ? t.targetTouches[0] : t;
                    r(e, h)[h].x = n.pageX,
                    r(e, h)[h].y = n.pageY
                }
                ,
                this._onTouchMove = function(t) {
                    var n = r(e, a)[a];
                    n.preventTouch && !t.target.classList.contains(n.unpreventTouchClass) && t.preventDefault();
                    var i = r(e, c)[c]
                      , o = t.targetTouches ? t.targetTouches[0] : t;
                    i.deltaX = (o.pageX - r(e, h)[h].x) * n.touchMultiplier,
                    i.deltaY = (o.pageY - r(e, h)[h].y) * n.touchMultiplier,
                    r(e, h)[h].x = o.pageX,
                    r(e, h)[h].y = o.pageY,
                    e._notify(t)
                }
                ,
                this._onKeyDown = function(t) {
                    var n = r(e, c)[c];
                    n.deltaX = n.deltaY = 0;
                    var i = window.innerHeight - 40;
                    switch (t.keyCode) {
                    case 37:
                    case 38:
                        n.deltaY = r(e, a)[a].keyStep;
                        break;
                    case 39:
                    case 40:
                        n.deltaY = -r(e, a)[a].keyStep;
                        break;
                    case 32:
                        n.deltaY = i * (t.shiftKey ? 1 : -1);
                        break;
                    default:
                        return
                    }
                    e._notify(t)
                }
                ,
                r(this, u)[u] = window,
                t && t.el && (r(this, u)[u] = t.el,
                delete t.el),
                o || (o = {
                    hasWheelEvent: "onwheel"in document,
                    hasMouseWheelEvent: "onmousewheel"in document,
                    hasTouch: "ontouchstart"in document,
                    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                    hasPointer: !!window.navigator.msPointerEnabled,
                    hasKeyDown: "onkeydown"in document,
                    isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                }),
                r(this, a)[a] = Object.assign({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    useKeyboard: !0,
                    useTouch: !0
                }, t),
                r(this, l)[l] = new i,
                r(this, c)[c] = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                },
                r(this, h)[h] = {
                    x: null,
                    y: null
                },
                r(this, f)[f] = null,
                void 0 !== r(this, a)[a].passive && (this.listenerOptions = {
                    passive: r(this, a)[a].passive
                })
            }
            var e = t.prototype;
            return e._notify = function(t) {
                var e = r(this, c)[c];
                e.x += e.deltaX,
                e.y += e.deltaY,
                r(this, l)[l].emit(s, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }
            ,
            e._bind = function() {
                o.hasWheelEvent && r(this, u)[u].addEventListener("wheel", this._onWheel, this.listenerOptions),
                o.hasMouseWheelEvent && r(this, u)[u].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                o.hasTouch && r(this, a)[a].useTouch && (r(this, u)[u].addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                r(this, u)[u].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                o.hasPointer && o.hasTouchWin && (r(this, f)[f] = document.body.style.msTouchAction,
                document.body.style.msTouchAction = "none",
                r(this, u)[u].addEventListener("MSPointerDown", this._onTouchStart, !0),
                r(this, u)[u].addEventListener("MSPointerMove", this._onTouchMove, !0)),
                o.hasKeyDown && r(this, a)[a].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
            }
            ,
            e._unbind = function() {
                o.hasWheelEvent && r(this, u)[u].removeEventListener("wheel", this._onWheel),
                o.hasMouseWheelEvent && r(this, u)[u].removeEventListener("mousewheel", this._onMouseWheel),
                o.hasTouch && (r(this, u)[u].removeEventListener("touchstart", this._onTouchStart),
                r(this, u)[u].removeEventListener("touchmove", this._onTouchMove)),
                o.hasPointer && o.hasTouchWin && (document.body.style.msTouchAction = r(this, f)[f],
                r(this, u)[u].removeEventListener("MSPointerDown", this._onTouchStart, !0),
                r(this, u)[u].removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                o.hasKeyDown && r(this, a)[a].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
            }
            ,
            e.on = function(t, e) {
                r(this, l)[l].on(s, t, e);
                var n = r(this, l)[l].e;
                n && n[s] && 1 === n[s].length && this._bind()
            }
            ,
            e.off = function(t, e) {
                r(this, l)[l].off(s, t, e);
                var n = r(this, l)[l].e;
                (!n[s] || n[s].length <= 0) && this._unbind()
            }
            ,
            e.destroy = function() {
                r(this, l)[l].off(),
                this._unbind()
            }
            ,
            t
        }()
    }()
}
)),
o.register("1oYLf", (function(e, r) {
    t(e.exports, "gsap", (function() {
        return s
    }
    ));
    var n = o("jxfTi")
      , i = o("bnyTL")
      , s = n.gsap.registerPlugin(i.CSSPlugin) || n.gsap;
    s.core.Tween
}
)),
o.register("jxfTi", (function(e, r) {
    function n(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function i(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    /*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    t(e.exports, "_config", (function() {
        return F
    }
    )),
    t(e.exports, "_isString", (function() {
        return H
    }
    )),
    t(e.exports, "_isUndefined", (function() {
        return K
    }
    )),
    t(e.exports, "_numExp", (function() {
        return rt
    }
    )),
    t(e.exports, "_numWithUnitExp", (function() {
        return nt
    }
    )),
    t(e.exports, "_relExp", (function() {
        return ot
    }
    )),
    t(e.exports, "gsap", (function() {
        return Yr
    }
    )),
    t(e.exports, "_missingPlugin", (function() {
        return ht
    }
    )),
    t(e.exports, "_plugins", (function() {
        return wt
    }
    )),
    t(e.exports, "GSCache", (function() {
        return Je
    }
    )),
    t(e.exports, "_getCache", (function() {
        return kt
    }
    )),
    t(e.exports, "_getProperty", (function() {
        return Pt
    }
    )),
    t(e.exports, "_forEachName", (function() {
        return Et
    }
    )),
    t(e.exports, "_round", (function() {
        return Ct
    }
    )),
    t(e.exports, "_parseRelative", (function() {
        return Dt
    }
    )),
    t(e.exports, "_ticker", (function() {
        return Xe
    }
    )),
    t(e.exports, "getUnit", (function() {
        return de
    }
    )),
    t(e.exports, "_replaceRandom", (function() {
        return Se
    }
    )),
    t(e.exports, "_getSetter", (function() {
        return vr
    }
    )),
    t(e.exports, "PropTween", (function() {
        return Or
    }
    )),
    t(e.exports, "_colorExp", (function() {
        return Ne
    }
    )),
    t(e.exports, "_colorStringFilter", (function() {
        return Be
    }
    )),
    t(e.exports, "_renderComplexString", (function() {
        return xr
    }
    )),
    t(e.exports, "_checkPlugin", (function() {
        return sr
    }
    )),
    t(e.exports, "_sortPropTweensByPriority", (function() {
        return Sr
    }
    ));
    var o, s, a, u, l, c, h, f, p, d, _, g, v, m, y, x, w, b, T, M, S, O, k, P, E, C, A, D, R, z, F = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, N = 1e8, Y = 1 / N, B = 2 * Math.PI, X = B / 4, I = 0, W = Math.sqrt, U = Math.cos, j = Math.sin, H = function(t) {
        return "string" == typeof t
    }, q = function(t) {
        return "function" == typeof t
    }, V = function(t) {
        return "number" == typeof t
    }, K = function(t) {
        return void 0 === t
    }, G = function(t) {
        return "object" == typeof t
    }, Q = function(t) {
        return !1 !== t
    }, Z = function() {
        return "undefined" != typeof window
    }, $ = function(t) {
        return q(t) || H(t)
    }, J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , tt = Array.isArray, et = /(?:-?\.?\d|\.)+/gi, rt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ot = /[+-]=-?[.\d]+/, st = /[^,'"\[\]\s]+/gi, at = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ut = {}, lt = {}, ct = function(t) {
        return (lt = Bt(t, ut)) && Yr
    }, ht = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, ft = function(t, e) {
        return !e && console.warn(t)
    }, pt = function(t, e) {
        return t && (ut[t] = e) && lt && (lt[t] = e) || ut
    }, dt = function() {
        return 0
    }, _t = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, gt = {
        suppressEvents: !0,
        kill: !1
    }, vt = {
        suppressEvents: !0
    }, mt = {}, yt = [], xt = {}, wt = {}, bt = {}, Tt = 30, Mt = [], St = "", Ot = function(t) {
        var e, r, n = t[0];
        if (G(n) || q(n) || (t = [t]),
        !(e = (n._gsap || {}).harness)) {
            for (r = Mt.length; r-- && !Mt[r].targetTest(n); )
                ;
            e = Mt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Je(t[r],e))) || t.splice(r, 1);
        return t
    }, kt = function(t) {
        return t._gsap || Ot(ve(t))[0]._gsap
    }, Pt = function(t, e, r) {
        return (r = t[e]) && q(r) ? t[e]() : K(r) && t.getAttribute && t.getAttribute(e) || r
    }, Et = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, Ct = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, At = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }, Dt = function(t, e) {
        var r = e.charAt(0)
          , n = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    }, Rt = function(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
            ;
        return n < r
    }, zt = function() {
        var t, e, r = yt.length, n = yt.slice(0);
        for (xt = {},
        yt.length = 0,
        t = 0; t < r; t++)
            (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, Ft = function(t, e, r, n) {
        yt.length && !s && zt(),
        t.render(e, r, n || s && e < 0 && (t._initted || t._startAt)),
        yt.length && !s && zt()
    }, Lt = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : H(t) ? t.trim() : t
    }, Nt = function(t) {
        return t
    }, Yt = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, Bt = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, Xt = function t(e, r) {
        for (var n in r)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = G(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    }, It = function(t, e) {
        var r, n = {};
        for (r in t)
            r in e || (n[r] = t[r]);
        return n
    }, Wt = function(t) {
        var e, r = t.parent || u, n = t.keyframes ? (e = tt(t.keyframes),
        function(t, r) {
            for (var n in r)
                n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
        }
        ) : Yt;
        if (Q(t.inherit))
            for (; r; )
                n(t, r.vars.defaults),
                r = r.parent || r._dp;
        return t
    }, Ut = function(t, e, r, n, i) {
        void 0 === r && (r = "_first"),
        void 0 === n && (n = "_last");
        var o, s = t[n];
        if (i)
            for (o = e[i]; s && s[i] > o; )
                s = s._prev;
        return s ? (e._next = s._next,
        s._next = e) : (e._next = t[r],
        t[r] = e),
        e._next ? e._next._prev = e : t[n] = e,
        e._prev = s,
        e.parent = e._dp = t,
        e
    }, jt = function(t, e, r, n) {
        void 0 === r && (r = "_first"),
        void 0 === n && (n = "_last");
        var i = e._prev
          , o = e._next;
        i ? i._next = o : t[r] === e && (t[r] = o),
        o ? o._prev = i : t[n] === e && (t[n] = i),
        e._next = e._prev = e.parent = null
    }, Ht = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, qt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }, Vt = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, Kt = function(t, e, r, n) {
        return t._startAt && (s ? t._startAt.revert(gt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    }, Gt = function t(e) {
        return !e || e._ts && t(e.parent)
    }, Qt = function(t) {
        return t._repeat ? Zt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Zt = function(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, $t = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Jt = function(t) {
        return t._end = At(t._start + (t._tDur / Math.abs(t._ts || t._rts || Y) || 0))
    }, te = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = At(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Jt(t),
        r._dirty || qt(r, t)),
        t
    }, ee = function(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = $t(t.rawTime(), e),
        (!e._dur || pe(0, e.totalDuration(), r) - e._tTime > Y) && e.render(r, !0)),
        qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -Y
        }
    }, re = function(t, e, r, n) {
        return e.parent && Ht(e),
        e._start = At((V(r) ? r : r || t !== u ? ce(t, r, e) : t._time) + e._delay),
        e._end = At(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        Ut(t, e, "_first", "_last", t._sort ? "_start" : 0),
        se(e) || (t._recent = e),
        n || ee(t, e),
        t._ts < 0 && te(t, t._tTime),
        t
    }, ne = function(t, e) {
        return (ut.ScrollTrigger || ht("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
    }, ie = function(t, e, r, n, i) {
        return ar(t, e, i),
        t._initted ? !r && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Xe.frame ? (yt.push(t),
        t._lazy = [i, n],
        1) : void 0 : 1
    }, oe = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
    }, se = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, ae = function(t, e, r, n) {
        var i = t._repeat
          , o = At(e) || 0
          , s = t._tTime / t._tDur;
        return s && !n && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = i ? i < 0 ? 1e10 : At(o * (i + 1) + t._rDelay * i) : o,
        s > 0 && !n && te(t, t._tTime = t._tDur * s),
        t.parent && Jt(t),
        r || qt(t.parent, t),
        t
    }, ue = function(t) {
        return t instanceof er ? qt(t) : ae(t, t._dur)
    }, le = {
        _start: 0,
        endTime: dt,
        totalDuration: dt
    }, ce = function t(e, r, n) {
        var i, o, s, a = e.labels, u = e._recent || le, l = e.duration() >= N ? u.endTime(!1) : e._dur;
        return H(r) && (isNaN(r) || r in a) ? (o = r.charAt(0),
        s = "%" === r.substr(-1),
        i = r.indexOf("="),
        "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")),
        ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l),
        a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)),
        s && n && (o = o / 100 * (tt(n) ? n[0] : n).totalDuration()),
        i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)) : null == r ? l : +r
    }, he = function(t, e, r) {
        var n, i, o = V(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
        if (o && (a.duration = e[1]),
        a.parent = r,
        t) {
            for (n = a,
            i = r; i && !("immediateRender"in n); )
                n = i.vars.defaults || {},
                i = Q(i.vars.inherit) && i.parent;
            a.immediateRender = Q(n.immediateRender),
            t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new fr(e[0],a,e[s + 1])
    }, fe = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, pe = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    }, de = function(t, e) {
        return H(t) && (e = at.exec(t)) ? e[1] : ""
    }, _e = [].slice, ge = function(t, e) {
        return t && G(t) && "length"in t && (!e && !t.length || t.length - 1 in t && G(t[0])) && !t.nodeType && t !== l
    }, ve = function(t, e, r) {
        return a && !e && a.selector ? a.selector(t) : !H(t) || r || !c && Ie() ? tt(t) ? function(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach((function(t) {
                var n;
                return H(t) && !e || ge(t, 1) ? (n = r).push.apply(n, ve(t)) : r.push(t)
            }
            )) || r
        }(t, r) : ge(t) ? _e.call(t, 0) : t ? [t] : [] : _e.call((e || h).querySelectorAll(t), 0)
    }, me = function(t) {
        return t = ve(t)[0] || ft("Invalid scope") || {},
        function(e) {
            var r = t.current || t.nativeElement || t;
            return ve(e, r.querySelectorAll ? r : r === t ? ft("Invalid scope") || h.createElement("div") : t)
        }
    }, ye = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }
        ))
    }, xe = function(t) {
        if (q(t))
            return t;
        var e = G(t) ? t : {
            each: t
        }
          , r = Ke(e.ease)
          , n = e.from || 0
          , i = parseFloat(e.base) || 0
          , o = {}
          , s = n > 0 && n < 1
          , a = isNaN(n) || s
          , u = e.axis
          , l = n
          , c = n;
        return H(n) ? l = c = {
            center: .5,
            edges: .5,
            end: 1
        }[n] || 0 : !s && a && (l = n[0],
        c = n[1]),
        function(t, s, h) {
            var f, p, d, _, g, v, m, y, x, w = (h || e).length, b = o[w];
            if (!b) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, N])[1])) {
                    for (m = -N; m < (m = h[x++].getBoundingClientRect().left) && x < w; )
                        ;
                    x--
                }
                for (b = o[w] = [],
                f = a ? Math.min(x, w) * l - .5 : n % x,
                p = x === N ? 0 : a ? w * c / x - .5 : n / x | 0,
                m = 0,
                y = N,
                v = 0; v < w; v++)
                    d = v % x - f,
                    _ = p - (v / x | 0),
                    b[v] = g = u ? Math.abs("y" === u ? _ : d) : W(d * d + _ * _),
                    g > m && (m = g),
                    g < y && (y = g);
                "random" === n && ye(b),
                b.max = m - y,
                b.min = y,
                b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : u ? "y" === u ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === n ? -1 : 1),
                b.b = w < 0 ? i - w : i,
                b.u = de(e.amount || e.each) || 0,
                r = r && w < 0 ? qe(r) : r
            }
            return w = (b[t] - b.min) / b.max || 0,
            At(b.b + (r ? r(w) : w) * b.v) + b.u
        }
    }, we = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var n = At(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (V(r) ? 0 : de(r))
        }
    }, be = function(t, e) {
        var r, n, i = tt(t);
        return !i && G(t) && (r = i = t.radius || N,
        t.values ? (t = ve(t.values),
        (n = !V(t[0])) && (r *= r)) : t = we(t.increment)),
        fe(e, i ? q(t) ? function(e) {
            return n = t(e),
            Math.abs(n - e) <= r ? n : e
        }
        : function(e) {
            for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = N, l = 0, c = t.length; c--; )
                (i = n ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < u && (u = i,
                l = c);
            return l = !r || u <= r ? t[l] : e,
            n || l === e || V(e) ? l : l + de(e)
        }
        : we(t))
    }, Te = function(t, e, r, n) {
        return fe(tt(t) ? !e : !0 === r ? (r = 0,
        !1) : !n, (function() {
            return tt(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        }
        ))
    }, Me = function(t, e, r) {
        return fe(r, (function(r) {
            return t[~~e(r)]
        }
        ))
    }, Se = function(t) {
        for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            n = t.indexOf(")", e),
            i = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, n - e - 7).match(i ? st : et),
            s += t.substr(o, e - o) + Te(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5),
            o = n + 1;
        return s + t.substr(o, t.length - o)
    }, Oe = function(t, e, r, n, i) {
        var o = e - t
          , s = n - r;
        return fe(i, (function(e) {
            return r + ((e - t) / o * s || 0)
        }
        ))
    }, ke = function(t, e, r) {
        var n, i, o, s = t.labels, a = N;
        for (n in s)
            (i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n,
            a = i);
        return o
    }, Pe = function(t, e, r) {
        var n, i, o, s = t.vars, u = s[e], l = a, c = t._ctx;
        if (u)
            return n = s[e + "Params"],
            i = s.callbackScope || t,
            r && yt.length && zt(),
            c && (a = c),
            o = n ? u.apply(i, n) : u.call(i),
            a = l,
            o
    }, Ee = function(t) {
        return Ht(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!s),
        t.progress() < 1 && Pe(t, "onInterrupt"),
        t
    }, Ce = function(t) {
        var e = (t = !t.name && t.default || t).name
          , r = q(t)
          , n = e && !r && t.init ? function() {
            this._props = []
        }
        : t
          , i = {
            init: dt,
            render: wr,
            add: or,
            kill: Tr,
            modifier: br,
            rawVars: 0
        }
          , o = {
            targetTest: 0,
            get: 0,
            getSetter: vr,
            aliases: {},
            register: 0
        };
        if (Ie(),
        t !== n) {
            if (wt[e])
                return;
            Yt(n, Yt(It(t, i), o)),
            Bt(n.prototype, Bt(i, It(t, o))),
            wt[n.prop = e] = n,
            t.targetTest && (Mt.push(n),
            mt[e] = 1),
            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        pt(e, n),
        t.register && t.register(Yr, n, Or)
    }, Ae = 255, De = {
        aqua: [0, Ae, Ae],
        lime: [0, Ae, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ae],
        navy: [0, 0, 128],
        white: [Ae, Ae, Ae],
        olive: [128, 128, 0],
        yellow: [Ae, Ae, 0],
        orange: [Ae, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ae, 0, 0],
        pink: [Ae, 192, 203],
        cyan: [0, Ae, Ae],
        transparent: [Ae, Ae, Ae, 0]
    }, Re = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ae + .5 | 0
    }, ze = function(t, e, r) {
        var n, i, o, s, a, u, l, c, h, f, p = t ? V(t) ? [t >> 16, t >> 8 & Ae, t & Ae] : 0 : De.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            De[t])
                p = De[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1),
                i = t.charAt(2),
                o = t.charAt(3),
                t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & Ae, p & Ae, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ae, t & Ae]
            } else if ("hsl" === t.substr(0, 3))
                if (p = f = t.match(et),
                e) {
                    if (~t.indexOf("="))
                        return p = t.match(rt),
                        r && p.length < 4 && (p[3] = 1),
                        p
                } else
                    s = +p[0] % 360 / 360,
                    a = +p[1] / 100,
                    n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a),
                    p.length > 3 && (p[3] *= 1),
                    p[0] = Re(s + 1 / 3, n, i),
                    p[1] = Re(s, n, i),
                    p[2] = Re(s - 1 / 3, n, i);
            else
                p = t.match(et) || De.transparent;
            p = p.map(Number)
        }
        return e && !f && (n = p[0] / Ae,
        i = p[1] / Ae,
        o = p[2] / Ae,
        u = ((l = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2,
        l === c ? s = a = 0 : (h = l - c,
        a = u > .5 ? h / (2 - l - c) : h / (l + c),
        s = l === n ? (i - o) / h + (i < o ? 6 : 0) : l === i ? (o - n) / h + 2 : (n - i) / h + 4,
        s *= 60),
        p[0] = ~~(s + .5),
        p[1] = ~~(100 * a + .5),
        p[2] = ~~(100 * u + .5)),
        r && p.length < 4 && (p[3] = 1),
        p
    }, Fe = function(t) {
        var e = []
          , r = []
          , n = -1;
        return t.split(Ne).forEach((function(t) {
            var i = t.match(nt) || [];
            e.push.apply(e, i),
            r.push(n += i.length + 1)
        }
        )),
        e.c = r,
        e
    }, Le = function(t, e, r) {
        var n, i, o, s, a = "", u = (t + a).match(Ne), l = e ? "hsla(" : "rgba(", c = 0;
        if (!u)
            return t;
        if (u = u.map((function(t) {
            return (t = ze(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }
        )),
        r && (o = Fe(t),
        (n = r.c).join(a) !== o.c.join(a)))
            for (s = (i = t.replace(Ne, "1").split(nt)).length - 1; c < s; c++)
                a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
        if (!i)
            for (s = (i = t.split(Ne)).length - 1; c < s; c++)
                a += i[c] + u[c];
        return a + i[s]
    }, Ne = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in De)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ye = /hsl[a]?\(/, Be = function(t) {
        var e, r = t.join(" ");
        if (Ne.lastIndex = 0,
        Ne.test(r))
            return e = Ye.test(r),
            t[1] = Le(t[1], e),
            t[0] = Le(t[0], e, Fe(t[1])),
            !0
    }, Xe = (b = Date.now,
    T = 500,
    M = 33,
    S = b(),
    O = S,
    P = k = 1e3 / 240,
    C = function t(e) {
        var r, n, i, o, s = b() - O, a = !0 === e;
        if (s > T && (S += s - M),
        ((r = (i = (O += s) - S) - P) > 0 || a) && (o = ++y.frame,
        x = i - 1e3 * y.time,
        y.time = i /= 1e3,
        P += r + (r >= k ? 4 : k - r),
        n = 1),
        a || (g = v(t)),
        n)
            for (w = 0; w < E.length; w++)
                E[w](i, x, o, e)
    }
    ,
    y = {
        time: 0,
        frame: 0,
        tick: function() {
            C(!0)
        },
        deltaRatio: function(t) {
            return x / (1e3 / (t || 60))
        },
        wake: function() {
            f && (!c && Z() && (l = c = window,
            h = l.document || {},
            ut.gsap = Yr,
            (l.gsapVersions || (l.gsapVersions = [])).push(Yr.version),
            ct(lt || l.GreenSockGlobals || !l.gsap && l || {}),
            m = l.requestAnimationFrame),
            g && y.sleep(),
            v = m || function(t) {
                return setTimeout(t, P - 1e3 * y.time + 1 | 0)
            }
            ,
            _ = 1,
            C(2))
        },
        sleep: function() {
            (m ? l.cancelAnimationFrame : clearTimeout)(g),
            _ = 0,
            v = dt
        },
        lagSmoothing: function(t, e) {
            T = t || 1 / 0,
            M = Math.min(e || 33, T)
        },
        fps: function(t) {
            k = 1e3 / (t || 240),
            P = 1e3 * y.time + k
        },
        add: function(t, e, r) {
            var n = e ? function(e, r, i, o) {
                t(e, r, i, o),
                y.remove(n)
            }
            : t;
            return y.remove(t),
            E[r ? "unshift" : "push"](n),
            Ie(),
            n
        },
        remove: function(t, e) {
            ~(e = E.indexOf(t)) && E.splice(e, 1) && w >= e && w--
        },
        _listeners: E = []
    }), Ie = function() {
        return !_ && Xe.wake()
    }, We = {}, Ue = /^[\d.\-M][\d.\-,\s]/, je = /["']/g, He = function(t) {
        for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++)
            r = o[a],
            e = a !== u - 1 ? r.lastIndexOf(",") : r.length,
            n = r.substr(0, e),
            i[s] = isNaN(n) ? n.replace(je, "").trim() : +n,
            s = r.substr(e + 1).trim();
        return i
    }, qe = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, Ve = function t(e, r) {
        for (var n, i = e._first; i; )
            i instanceof er ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease,
            i._ease = i._yEase,
            i._yEase = n,
            i._yoyo = r)),
            i = i._next
    }, Ke = function(t, e) {
        return t && (q(t) ? t : We[t] || function(t) {
            var e, r, n, i, o = (t + "").split("("), s = We[o[0]];
            return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [He(o[1])] : (e = t,
            r = e.indexOf("(") + 1,
            n = e.indexOf(")"),
            i = e.indexOf("(", r),
            e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Lt)) : We._CE && Ue.test(t) ? We._CE("", t) : s
        }(t)) || e
    }, Ge = function(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var i, o = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return Et(t, (function(t) {
            for (var e in We[t] = ut[t] = o,
            We[i = t.toLowerCase()] = r,
            o)
                We[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = We[t + "." + e] = o[e]
        }
        )),
        o
    }, Qe = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }, Ze = function t(e, r, n) {
        var i = r >= 1 ? r : 1
          , o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1)
          , s = o / B * (Math.asin(1 / i) || 0)
          , a = function(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * j((t - s) * o) + 1
        }
          , u = "out" === e ? a : "in" === e ? function(t) {
            return 1 - a(1 - t)
        }
        : Qe(a);
        return o = B / o,
        u.config = function(r, n) {
            return t(e, r, n)
        }
        ,
        u
    }, $e = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
          , i = "out" === e ? n : "in" === e ? function(t) {
            return 1 - n(1 - t)
        }
        : Qe(n);
        return i.config = function(r) {
            return t(e, r)
        }
        ,
        i
    };
    Et("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ge(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , (function(t) {
            return 1 - Math.pow(1 - t, r)
        }
        ), (function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }
        ))
    }
    )),
    We.Linear.easeNone = We.none = We.Linear.easeIn,
    Ge("Elastic", Ze("in"), Ze("out"), Ze()),
    A = 7.5625,
    R = 1 / (D = 2.75),
    Ge("Bounce", (function(t) {
        return 1 - z(1 - t)
    }
    ), z = function(t) {
        return t < R ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / D, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / D) * t + .9375 : A * Math.pow(t - 2.625 / D, 2) + .984375
    }
    ),
    Ge("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }
    )),
    Ge("Circ", (function(t) {
        return -(W(1 - t * t) - 1)
    }
    )),
    Ge("Sine", (function(t) {
        return 1 === t ? 1 : 1 - U(t * X)
    }
    )),
    Ge("Back", $e("in"), $e("out"), $e()),
    We.SteppedEase = We.steps = ut.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , n = t + (e ? 0 : 1)
              , i = e ? 1 : 0
              , o = 1 - Y;
            return function(t) {
                return ((n * pe(0, o, t) | 0) + i) * r
            }
        }
    },
    L.ease = We["quad.out"],
    Et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return St += t + "," + t + "Params,"
    }
    ));
    var Je = function(t, e) {
        this.id = I++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : Pt,
        this.set = e ? e.getSetter : vr
    }
      , tr = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            ae(this, +t.duration, 1, 1),
            this.data = t.data,
            a && (this._ctx = a,
            a.data.push(this)),
            _ || Xe.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            ae(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (Ie(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (te(this, t),
                !r._dp || r.parent || ee(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && re(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Y || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            Ft(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Qt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Qt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Zt(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return this._rts === -Y ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? $t(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || t === -Y ? 0 : this._rts,
            this.totalTime(pe(-this._delay, this._tDur, e), !0),
            Jt(this),
            Vt(this)
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Ie(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Y && (this._tTime -= Y)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && re(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (Q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $t(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.revert = function(t) {
            void 0 === t && (t = vt);
            var e = s;
            return s = t,
            (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
            this.totalTime(-.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            s = e,
            this
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (e._ts || 1),
                e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            ue(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                ue(this),
                e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(ce(this, t), Q(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, Q(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Y : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -Y,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - Y))
        }
        ,
        e.eventCallback = function(t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e,
            r && (n[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete n[t],
            this) : n[t]
        }
        ,
        e.then = function(t) {
            var e = this;
            return new Promise((function(r) {
                var n = q(t) ? t : Nt
                  , i = function() {
                    var t = e.then;
                    e.then = null,
                    q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            }
            ))
        }
        ,
        e.kill = function() {
            Ee(this)
        }
        ,
        t
    }();
    Yt(tr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Y,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var er = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}),
            (i = t.call(this, e) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = Q(e.sortChildren),
            u && re(e.parent || u, n(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && ne(n(i), e.scrollTrigger),
            i
        }
        i(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return he(0, arguments, this),
            this
        }
        ,
        r.from = function(t, e, r) {
            return he(1, arguments, this),
            this
        }
        ,
        r.fromTo = function(t, e, r, n) {
            return he(2, arguments, this),
            this
        }
        ,
        r.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            Wt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new fr(t,e,ce(this, r),1),
            this
        }
        ,
        r.call = function(t, e, r) {
            return re(this, fr.delayedCall(0, t, e), r)
        }
        ,
        r.staggerTo = function(t, e, r, n, i, o, s) {
            return r.duration = e,
            r.stagger = r.stagger || n,
            r.onComplete = o,
            r.onCompleteParams = s,
            r.parent = this,
            new fr(t,r,ce(this, i)),
            this
        }
        ,
        r.staggerFrom = function(t, e, r, n, i, o, s) {
            return r.runBackwards = 1,
            Wt(r).immediateRender = Q(r.immediateRender),
            this.staggerTo(t, e, r, n, i, o, s)
        }
        ,
        r.staggerFromTo = function(t, e, r, n, i, o, s, a) {
            return n.startAt = r,
            Wt(n).immediateRender = Q(n.immediateRender),
            this.staggerTo(t, e, n, i, o, s, a)
        }
        ,
        r.render = function(t, e, r) {
            var n, i, o, a, l, c, h, f, p, d, _, g, v = this._time, m = this._dirty ? this.totalDuration() : this._tDur, y = this._dur, x = t <= 0 ? 0 : At(t), w = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== u && x > m && t >= 0 && (x = m),
            x !== this._tTime || r || w) {
                if (v !== this._time && y && (x += this._time - v,
                t += this._time - v),
                n = x,
                p = this._start,
                c = !(f = this._ts),
                w && (y || (v = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (_ = this._yoyo,
                    l = y + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * l + t, e, r);
                    if (n = At(x % l),
                    x === m ? (a = this._repeat,
                    n = y) : ((a = ~~(x / l)) && a === x / l && (n = y,
                    a--),
                    n > y && (n = y)),
                    d = Zt(this._tTime, l),
                    !v && this._tTime && d !== a && (d = a),
                    _ && 1 & a && (n = y - n,
                    g = 1),
                    a !== d && !this._lock) {
                        var b = _ && 1 & d
                          , T = b === (_ && 1 & a);
                        if (a < d && (b = !b),
                        v = b ? 0 : y,
                        this._lock = 1,
                        this.render(v || (g ? 0 : At(a * l)), e, !y)._lock = 0,
                        this._tTime = x,
                        !e && this.parent && Pe(this, "onRepeat"),
                        this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                        v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (y = this._dur,
                        m = this._tDur,
                        T && (this._lock = 2,
                        v = b ? y : -1e-4,
                        this.render(v, !0),
                        this.vars.repeatRefresh && !g && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !c)
                            return this;
                        Ve(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                    var n;
                    if (r > e)
                        for (n = t._first; n && n._start <= r; ) {
                            if ("isPause" === n.data && n._start > e)
                                return n;
                            n = n._next
                        }
                    else
                        for (n = t._last; n && n._start >= r; ) {
                            if ("isPause" === n.data && n._start < e)
                                return n;
                            n = n._prev
                        }
                }(this, At(v), At(n)),
                h && (x -= n - (n = h._start))),
                this._tTime = x,
                this._time = n,
                this._act = !f,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                v = 0),
                !v && n && !e && (Pe(this, "onStart"),
                this._tTime !== x))
                    return this;
                if (n >= v && t >= 0)
                    for (i = this._first; i; ) {
                        if (o = i._next,
                        (i._act || n >= i._start) && i._ts && h !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r),
                            n !== this._time || !this._ts && !c) {
                                h = 0,
                                o && (x += this._zTime = -Y);
                                break
                            }
                        }
                        i = o
                    }
                else {
                    i = this._last;
                    for (var M = t < 0 ? t : n; i; ) {
                        if (o = i._prev,
                        (i._act || M <= i._end) && i._ts && h !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (M - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (M - i._start) * i._ts, e, r || s && (i._initted || i._startAt)),
                            n !== this._time || !this._ts && !c) {
                                h = 0,
                                o && (x += this._zTime = M ? -Y : Y);
                                break
                            }
                        }
                        i = o
                    }
                }
                if (h && !e && (this.pause(),
                h.render(n >= v ? 0 : -Y)._zTime = n >= v ? 1 : -1,
                this._ts))
                    return this._start = p,
                    Jt(this),
                    this.render(t, e, r);
                this._onUpdate && !e && Pe(this, "onUpdate", !0),
                (x === m && this._tTime >= this.totalDuration() || !x && v) && (p !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !y) && (x === m && this._ts > 0 || !x && this._ts < 0) && Ht(this, 1),
                e || t < 0 && !v || !x && !v && m || (Pe(this, x === m && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(x < m && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        r.add = function(t, e) {
            var r = this;
            if (V(e) || (e = ce(this, e, t)),
            !(t instanceof tr)) {
                if (tt(t))
                    return t.forEach((function(t) {
                        return r.add(t, e)
                    }
                    )),
                    this;
                if (H(t))
                    return this.addLabel(t, e);
                if (!q(t))
                    return this;
                t = fr.delayedCall(0, t)
            }
            return this !== t ? re(this, t, e) : this
        }
        ,
        r.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -N);
            for (var i = [], o = this._first; o; )
                o._start >= n && (o instanceof fr ? e && i.push(o) : (r && i.push(o),
                t && i.push.apply(i, o.getChildren(!0, e, r)))),
                o = o._next;
            return i
        }
        ,
        r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        r.remove = function(t) {
            return H(t) ? this.removeLabel(t) : q(t) ? this.killTweensOf(t) : (jt(this, t),
            t === this._recent && (this._recent = this._last),
            qt(this))
        }
        ,
        r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = At(Xe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        r.addLabel = function(t, e) {
            return this.labels[t] = ce(this, e),
            this
        }
        ,
        r.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        r.addPause = function(t, e, r) {
            var n = fr.delayedCall(0, e || dt, r);
            return n.data = "isPause",
            this._hasPause = 1,
            re(this, n, ce(this, t))
        }
        ,
        r.removePause = function(t) {
            var e = this._first;
            for (t = ce(this, t); e; )
                e._start === t && "isPause" === e.data && Ht(e),
                e = e._next
        }
        ,
        r.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
                rr !== n[i] && n[i].kill(t, e);
            return this
        }
        ,
        r.getTweensOf = function(t, e) {
            for (var r, n = [], i = ve(t), o = this._first, s = V(e); o; )
                o instanceof fr ? Rt(o._targets, i) && (s ? (!rr || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
                o = o._next;
            return n
        }
        ,
        r.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this, i = ce(n, t), o = e, s = o.startAt, a = o.onStart, u = o.onStartParams, l = o.immediateRender, c = fr.to(n, Yt({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (s && "time"in s ? s.time : n._time)) / n.timeScale()) || Y,
                onStart: function() {
                    if (n.pause(),
                    !r) {
                        var t = e.duration || Math.abs((i - (s && "time"in s ? s.time : n._time)) / n.timeScale());
                        c._dur !== t && ae(c, t, 0, 1).render(c._time, !0, !0),
                        r = 1
                    }
                    a && a.apply(c, u || [])
                }
            }, e));
            return l ? c.render(0) : c
        }
        ,
        r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Yt({
                startAt: {
                    time: ce(this, t)
                }
            }, r))
        }
        ,
        r.recent = function() {
            return this._recent
        }
        ,
        r.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            ke(this, ce(this, t))
        }
        ,
        r.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            ke(this, ce(this, t), 1)
        }
        ,
        r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Y)
        }
        ,
        r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, o = this.labels; i; )
                i._start >= r && (i._start += t,
                i._end += t),
                i = i._next;
            if (e)
                for (n in o)
                    o[n] >= r && (o[n] += t);
            return qt(this)
        }
        ,
        r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(e),
                r = r._next;
            return t.prototype.invalidate.call(this, e)
        }
        ,
        r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            qt(this)
        }
        ,
        r.totalDuration = function(t) {
            var e, r, n, i = 0, o = this, s = o._last, a = N;
            if (arguments.length)
                return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    (r = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1,
                    re(o, s, r - s._delay, 1)._lock = 0) : a = r,
                    r < 0 && s._ts && (i -= r,
                    (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts,
                    o._time -= r,
                    o._tTime -= r),
                    o.shiftChildren(-r, !1, -1 / 0),
                    a = 0),
                    s._end > i && s._ts && (i = s._end),
                    s = e;
                ae(o, o === u && o._time > i ? o._time : i, 1, 1),
                o._dirty = 0
            }
            return o._tDur
        }
        ,
        e.updateRoot = function(t) {
            if (u._ts && (Ft(u, $t(t, u)),
            p = Xe.frame),
            Xe.frame >= Tt) {
                Tt += F.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && F.autoSleep && Xe._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Xe.sleep()
                }
            }
        }
        ,
        e
    }(tr);
    Yt(er.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var rr, nr, ir = function(t, e, r, n, i, o, s) {
        var a, u, l, c, h, f, p, d, _ = new Or(this._pt,t,e,0,1,xr,null,i), g = 0, v = 0;
        for (_.b = r,
        _.e = n,
        r += "",
        (p = ~(n += "").indexOf("random(")) && (n = Se(n)),
        o && (o(d = [r, n], t, e),
        r = d[0],
        n = d[1]),
        u = r.match(it) || []; a = it.exec(n); )
            c = a[0],
            h = n.substring(g, a.index),
            l ? l = (l + 1) % 5 : "rgba(" === h.substr(-5) && (l = 1),
            c !== u[v++] && (f = parseFloat(u[v - 1]) || 0,
            _._pt = {
                _next: _._pt,
                p: h || 1 === v ? h : ",",
                s: f,
                c: "=" === c.charAt(1) ? Dt(f, c) - f : parseFloat(c) - f,
                m: l && l < 4 ? Math.round : 0
            },
            g = it.lastIndex);
        return _.c = g < n.length ? n.substring(g, n.length) : "",
        _.fp = s,
        (ot.test(n) || p) && (_.e = 0),
        this._pt = _,
        _
    }, or = function(t, e, r, n, i, o, s, a, u, l) {
        q(n) && (n = n(i || 0, t, o));
        var c, h = t[e], f = "get" !== r ? r : q(h) ? u ? t[e.indexOf("set") || !q(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, p = q(h) ? u ? _r : dr : pr;
        if (H(n) && (~n.indexOf("random(") && (n = Se(n)),
        "=" === n.charAt(1) && ((c = Dt(f, n) + (de(f) || 0)) || 0 === c) && (n = c)),
        !l || f !== n || nr)
            return isNaN(f * n) || "" === n ? (!h && !(e in t) && ht(e, n),
            ir.call(this, t, e, f, n, p, a || F.stringFilter, u)) : (c = new Or(this._pt,t,e,+f || 0,n - (f || 0),"boolean" == typeof h ? yr : mr,0,p),
            u && (c.fp = u),
            s && c.modifier(s, this, t),
            this._pt = c)
    }, sr = function(t, e, r, n, i, o) {
        var s, a, u, l;
        if (wt[t] && !1 !== (s = new wt[t]).init(i, s.rawVars ? e[t] : function(t, e, r, n, i) {
            if (q(t) && (t = lr(t, i, e, r, n)),
            !G(t) || t.style && t.nodeType || tt(t) || J(t))
                return H(t) ? lr(t, i, e, r, n) : t;
            var o, s = {};
            for (o in t)
                s[o] = lr(t[o], i, e, r, n);
            return s
        }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new Or(r._pt,i,t,0,1,s.render,s,0,s.priority),
        r !== d))
            for (u = r._ptLookup[r._targets.indexOf(i)],
            l = s._props.length; l--; )
                u[s._props[l]] = a;
        return s
    }, ar = function t(e, r, n) {
        var i, a, l, c, h, f, p, d, _, g, v, m, y, x = e.vars, w = x.ease, b = x.startAt, T = x.immediateRender, M = x.lazy, S = x.onUpdate, O = x.onUpdateParams, k = x.callbackScope, P = x.runBackwards, E = x.yoyoEase, C = x.keyframes, A = x.autoRevert, D = e._dur, R = e._startAt, z = e._targets, F = e.parent, B = F && "nested" === F.data ? F.vars.targets : z, X = "auto" === e._overwrite && !o, I = e.timeline;
        if (I && (!C || !w) && (w = "none"),
        e._ease = Ke(w, L.ease),
        e._yEase = E ? qe(Ke(!0 === E ? w : E, L.ease)) : 0,
        E && e._yoyo && !e._repeat && (E = e._yEase,
        e._yEase = e._ease,
        e._ease = E),
        e._from = !I && !!x.runBackwards,
        !I || C && !x.stagger) {
            if (m = (d = z[0] ? kt(z[0]).harness : 0) && x[d.prop],
            i = It(x, mt),
            R && (R._zTime < 0 && R.progress(1),
            r < 0 && P && T && !A ? R.render(-1, !0) : R.revert(P && D ? gt : _t),
            R._lazy = 0),
            b) {
                if (Ht(e._startAt = fr.set(z, Yt({
                    data: "isStart",
                    overwrite: !1,
                    parent: F,
                    immediateRender: !0,
                    lazy: !R && Q(M),
                    startAt: null,
                    delay: 0,
                    onUpdate: S,
                    onUpdateParams: O,
                    callbackScope: k,
                    stagger: 0
                }, b))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (s || !T && !A) && e._startAt.revert(gt),
                T && D && r <= 0 && n <= 0)
                    return void (r && (e._zTime = r))
            } else if (P && D && !R)
                if (r && (T = !1),
                l = Yt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && !R && Q(M),
                    immediateRender: T,
                    stagger: 0,
                    parent: F
                }, i),
                m && (l[d.prop] = m),
                Ht(e._startAt = fr.set(z, l)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (s ? e._startAt.revert(gt) : e._startAt.render(-1, !0)),
                e._zTime = r,
                T) {
                    if (!r)
                        return
                } else
                    t(e._startAt, Y, Y);
            for (e._pt = e._ptCache = 0,
            M = D && Q(M) || M && !D,
            a = 0; a < z.length; a++) {
                if (p = (h = z[a])._gsap || Ot(z)[a]._gsap,
                e._ptLookup[a] = g = {},
                xt[p.id] && yt.length && zt(),
                v = B === z ? a : B.indexOf(h),
                d && !1 !== (_ = new d).init(h, m || i, e, v, B) && (e._pt = c = new Or(e._pt,h,_.name,0,1,_.render,_,0,_.priority),
                _._props.forEach((function(t) {
                    g[t] = c
                }
                )),
                _.priority && (f = 1)),
                !d || m)
                    for (l in i)
                        wt[l] && (_ = sr(l, i, e, v, h, B)) ? _.priority && (f = 1) : g[l] = c = or.call(e, h, l, "get", i[l], v, B, 0, x.stringFilter);
                e._op && e._op[a] && e.kill(h, e._op[a]),
                X && e._pt && (rr = e,
                u.killTweensOf(h, g, e.globalTime(r)),
                y = !e.parent,
                rr = 0),
                e._pt && M && (xt[p.id] = 1)
            }
            f && Sr(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = S,
        e._initted = (!e._op || e._pt) && !y,
        C && r <= 0 && I.render(N, !0, !0)
    }, ur = function(t, e, r, n) {
        var i, o, s = e.ease || n || "power1.inOut";
        if (tt(e))
            o = r[t] || (r[t] = []),
            e.forEach((function(t, r) {
                return o.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: s
                })
            }
            ));
        else
            for (i in e)
                o = r[i] || (r[i] = []),
                "ease" === i || o.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: s
                })
    }, lr = function(t, e, r, n, i) {
        return q(t) ? t.call(e, r, n, i) : H(t) && ~t.indexOf("random(") ? Se(t) : t
    }, cr = St + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", hr = {};
    Et(cr + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
        return hr[t] = 1
    }
    ));
    var fr = function(t) {
        function e(e, r, i, s) {
            var a;
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var l, c, h, f, p, d, _, g, v = (a = t.call(this, s ? r : Wt(r)) || this).vars, m = v.duration, y = v.delay, x = v.immediateRender, w = v.stagger, b = v.overwrite, T = v.keyframes, M = v.defaults, S = v.scrollTrigger, O = v.yoyoEase, k = r.parent || u, P = (tt(e) || J(e) ? V(e[0]) : "length"in r) ? [e] : ve(e);
            if (a._targets = P.length ? Ot(P) : ft("GSAP target " + e + " not found. https://greensock.com", !F.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = b,
            T || w || $(m) || $(y)) {
                if (r = a.vars,
                (l = a.timeline = new er({
                    data: "nested",
                    defaults: M || {},
                    targets: k && "nested" === k.data ? k.vars.targets : P
                })).kill(),
                l.parent = l._dp = n(a),
                l._start = 0,
                w || $(m) || $(y)) {
                    if (f = P.length,
                    _ = w && xe(w),
                    G(w))
                        for (p in w)
                            ~cr.indexOf(p) && (g || (g = {}),
                            g[p] = w[p]);
                    for (c = 0; c < f; c++)
                        (h = It(r, hr)).stagger = 0,
                        O && (h.yoyoEase = O),
                        g && Bt(h, g),
                        d = P[c],
                        h.duration = +lr(m, n(a), c, d, P),
                        h.delay = (+lr(y, n(a), c, d, P) || 0) - a._delay,
                        !w && 1 === f && h.delay && (a._delay = y = h.delay,
                        a._start += y,
                        h.delay = 0),
                        l.to(d, h, _ ? _(c, d, P) : 0),
                        l._ease = We.none;
                    l.duration() ? m = y = 0 : a.timeline = 0
                } else if (T) {
                    Wt(Yt(l.vars.defaults, {
                        ease: "none"
                    })),
                    l._ease = Ke(T.ease || r.ease || "none");
                    var E, C, A, D = 0;
                    if (tt(T))
                        T.forEach((function(t) {
                            return l.to(P, t, ">")
                        }
                        )),
                        l.duration();
                    else {
                        for (p in h = {},
                        T)
                            "ease" === p || "easeEach" === p || ur(p, T[p], h, T.easeEach);
                        for (p in h)
                            for (E = h[p].sort((function(t, e) {
                                return t.t - e.t
                            }
                            )),
                            D = 0,
                            c = 0; c < E.length; c++)
                                (A = {
                                    ease: (C = E[c]).e,
                                    duration: (C.t - (c ? E[c - 1].t : 0)) / 100 * m
                                })[p] = C.v,
                                l.to(P, A, D),
                                D += A.duration;
                        l.duration() < m && l.to({}, {
                            duration: m - l.duration()
                        })
                    }
                }
                m || a.duration(m = l.duration())
            } else
                a.timeline = 0;
            return !0 !== b || o || (rr = n(a),
            u.killTweensOf(P),
            rr = 0),
            re(k, n(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (x || !m && !T && a._start === At(k._time) && Q(x) && Gt(n(a)) && "nested" !== k.data) && (a._tTime = -Y,
            a.render(Math.max(0, -y) || 0)),
            S && ne(n(a), S),
            a
        }
        i(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var n, i, o, a, u, l, c, h, f, p = this._time, d = this._tDur, _ = this._dur, g = t < 0, v = t > d - Y && !g ? d : t < Y ? 0 : t;
            if (_) {
                if (v !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                    if (n = v,
                    h = this.timeline,
                    this._repeat) {
                        if (a = _ + this._rDelay,
                        this._repeat < -1 && g)
                            return this.totalTime(100 * a + t, e, r);
                        if (n = At(v % a),
                        v === d ? (o = this._repeat,
                        n = _) : ((o = ~~(v / a)) && o === v / a && (n = _,
                        o--),
                        n > _ && (n = _)),
                        (l = this._yoyo && 1 & o) && (f = this._yEase,
                        n = _ - n),
                        u = Zt(this._tTime, a),
                        n === p && !r && this._initted)
                            return this._tTime = v,
                            this;
                        o !== u && (h && this._yEase && Ve(h, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = r = 1,
                        this.render(At(a * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (ie(this, g ? t : n, r, e, v))
                            return this._tTime = 0,
                            this;
                        if (p !== this._time)
                            return this;
                        if (_ !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = v,
                    this._time = n,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = c = (f || this._ease)(n / _),
                    this._from && (this.ratio = c = 1 - c),
                    n && !p && !e && (Pe(this, "onStart"),
                    this._tTime !== v))
                        return this;
                    for (i = this._pt; i; )
                        i.r(c, i.d),
                        i = i._next;
                    h && h.render(t < 0 ? t : !n && l ? -Y : h._dur * h._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (g && Kt(this, t, 0, r),
                    Pe(this, "onUpdate")),
                    this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && Pe(this, "onRepeat"),
                    v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Kt(this, t, 0, !0),
                    (t || !_) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ht(this, 1),
                    e || g && !p || !(v || p || l) || (Pe(this, v === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(v < d && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function(t, e, r, n) {
                    var i, o, a, u = t.ratio, l = e < 0 || !e && (!t._start && oe(t) && (t._initted || !se(t)) || (t._ts < 0 || t._dp._ts < 0) && !se(t)) ? 0 : 1, c = t._rDelay, h = 0;
                    if (c && t._repeat && (h = pe(0, t._tDur, e),
                    o = Zt(h, c),
                    t._yoyo && 1 & o && (l = 1 - l),
                    o !== Zt(t._tTime, c) && (u = 1 - l,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    l !== u || s || n || t._zTime === Y || !e && t._zTime) {
                        if (!t._initted && ie(t, e, n, r, h))
                            return;
                        for (a = t._zTime,
                        t._zTime = e || (r ? Y : 0),
                        r || (r = e && !a),
                        t.ratio = l,
                        t._from && (l = 1 - l),
                        t._time = 0,
                        t._tTime = h,
                        i = t._pt; i; )
                            i.r(l, i.d),
                            i = i._next;
                        e < 0 && Kt(t, e, 0, !0),
                        t._onUpdate && !r && Pe(t, "onUpdate"),
                        h && t._repeat && !r && t.parent && Pe(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === l && (l && Ht(t, 1),
                        r || s || (Pe(t, l ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        r.targets = function() {
            return this._targets
        }
        ,
        r.invalidate = function(e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
        }
        ,
        r.resetTo = function(t, e, r, n) {
            _ || Xe.wake(),
            this._ts || this.play();
            var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || ar(this, i),
            function(t, e, r, n, i, o, s) {
                var a, u, l, c, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!h)
                    for (h = t._ptCache[e] = [],
                    l = t._ptLookup,
                    c = t._targets.length; c--; ) {
                        if ((a = l[c][e]) && a.d && a.d._pt)
                            for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                                a = a._next;
                        if (!a)
                            return nr = 1,
                            t.vars[e] = "+=0",
                            ar(t, s),
                            nr = 0,
                            1;
                        h.push(a)
                    }
                for (c = h.length; c--; )
                    (a = (u = h[c])._pt || u).s = !n && 0 !== n || i ? a.s + (n || 0) + o * a.c : n,
                    a.c = r - a.s,
                    u.e && (u.e = Ct(r) + de(u.e)),
                    u.b && (u.b = a.s + de(u.b))
            }(this, t, e, r, n, this._ease(i / this._dur), i) ? this.resetTo(t, e, r, n) : (te(this, 0),
            this.parent || Ut(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        r.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? Ee(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, rr && !0 !== rr.vars.overwrite)._first || Ee(this),
                this.parent && r !== this.timeline.totalDuration() && ae(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var n, i, o, s, a, u, l, c = this._targets, h = t ? ve(t) : c, f = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(c, h))
                return "all" === e && (this._pt = 0),
                Ee(this);
            for (n = this._op = this._op || [],
            "all" !== e && (H(e) && (a = {},
            Et(e, (function(t) {
                return a[t] = 1
            }
            )),
            e = a),
            e = function(t, e) {
                var r, n, i, o, s = t[0] ? kt(t[0]).harness : 0, a = s && s.aliases;
                if (!a)
                    return e;
                for (n in r = Bt({}, e),
                a)
                    if (n in r)
                        for (i = (o = a[n].split(",")).length; i--; )
                            r[o[i]] = r[n];
                return r
            }(c, e)),
            l = c.length; l--; )
                if (~h.indexOf(c[l]))
                    for (a in i = f[l],
                    "all" === e ? (n[l] = e,
                    s = i,
                    o = {}) : (o = n[l] = n[l] || {},
                    s = e),
                    s)
                        (u = i && i[a]) && ("kill"in u.d && !0 !== u.d.kill(a) || jt(this, u, "_pt"),
                        delete i[a]),
                        "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && p && Ee(this),
            this
        }
        ,
        e.to = function(t, r) {
            return new e(t,r,arguments[2])
        }
        ,
        e.from = function(t, e) {
            return he(1, arguments)
        }
        ,
        e.delayedCall = function(t, r, n, i) {
            return new e(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }
        ,
        e.fromTo = function(t, e, r) {
            return he(2, arguments)
        }
        ,
        e.set = function(t, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new e(t,r)
        }
        ,
        e.killTweensOf = function(t, e, r) {
            return u.killTweensOf(t, e, r)
        }
        ,
        e
    }(tr);
    Yt(fr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    Et("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        fr[t] = function() {
            var e = new er
              , r = _e.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
        }
    }
    ));
    var pr = function(t, e, r) {
        return t[e] = r
    }
      , dr = function(t, e, r) {
        return t[e](r)
    }
      , _r = function(t, e, r, n) {
        return t[e](n.fp, r)
    }
      , gr = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , vr = function(t, e) {
        return q(t[e]) ? dr : K(t[e]) && t.setAttribute ? gr : pr
    }
      , mr = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , yr = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , xr = function(t, e) {
        var r = e._pt
          , n = "";
        if (!t && e.b)
            n = e.b;
        else if (1 === t && e.e)
            n = e.e;
        else {
            for (; r; )
                n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n,
                r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }
      , wr = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , br = function(t, e, r, n) {
        for (var i, o = this._pt; o; )
            i = o._next,
            o.p === n && o.modifier(t, e, r),
            o = i
    }
      , Tr = function(t) {
        for (var e, r, n = this._pt; n; )
            r = n._next,
            n.p === t && !n.op || n.op === t ? jt(this, n, "_pt") : n.dep || (e = 1),
            n = r;
        return !e
    }
      , Mr = function(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    }
      , Sr = function(t) {
        for (var e, r, n, i, o = t._pt; o; ) {
            for (e = o._next,
            r = n; r && r.pr > o.pr; )
                r = r._next;
            (o._prev = r ? r._prev : i) ? o._prev._next = o : n = o,
            (o._next = r) ? r._prev = o : i = o,
            o = e
        }
        t._pt = n
    }
      , Or = function() {
        function t(t, e, r, n, i, o, s, a, u) {
            this.t = e,
            this.s = n,
            this.c = i,
            this.p = r,
            this.r = o || mr,
            this.d = s || this,
            this.set = a || pr,
            this.pr = u || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = Mr,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    Et(St + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return mt[t] = 1
    }
    )),
    ut.TweenMax = ut.TweenLite = fr,
    ut.TimelineLite = ut.TimelineMax = er,
    u = new er({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    F.stringFilter = Be;
    var kr = []
      , Pr = {}
      , Er = []
      , Cr = 0
      , Ar = function(t) {
        return (Pr[t] || Er).map((function(t) {
            return t()
        }
        ))
    }
      , Dr = function() {
        var t = Date.now()
          , e = [];
        t - Cr > 2 && (Ar("matchMediaInit"),
        kr.forEach((function(t) {
            var r, n, i, o, s = t.queries, a = t.conditions;
            for (n in s)
                (r = l.matchMedia(s[n]).matches) && (i = 1),
                r !== a[n] && (a[n] = r,
                o = 1);
            o && (t.revert(),
            i && e.push(t))
        }
        )),
        Ar("matchMediaRevert"),
        e.forEach((function(t) {
            return t.onMatch(t)
        }
        )),
        Cr = t,
        Ar("matchMedia"))
    }
      , Rr = function() {
        function t(t, e) {
            this.selector = e && me(e),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            t && this.add(t)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            q(t) && (r = e,
            e = t,
            t = q);
            var n = this
              , i = function() {
                var t, i = a, o = n.selector;
                return i && i !== n && i.data.push(n),
                r && (n.selector = me(r)),
                a = n,
                t = e.apply(n, arguments),
                q(t) && n._r.push(t),
                a = i,
                n.selector = o,
                n.isReverted = !1,
                t
            };
            return n.last = i,
            t === q ? i(n) : t ? n[t] = i : i
        }
        ,
        e.ignore = function(t) {
            var e = a;
            a = null,
            t(this),
            a = e
        }
        ,
        e.getTweens = function() {
            var e = [];
            return this.data.forEach((function(r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof fr && !(r.parent && "nested" === r.parent.data) && e.push(r)
            }
            )),
            e
        }
        ,
        e.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        e.kill = function(t, e) {
            var r = this;
            if (t) {
                var n = this.getTweens();
                this.data.forEach((function(t) {
                    "isFlip" === t.data && (t.revert(),
                    t.getChildren(!0, !0, !1).forEach((function(t) {
                        return n.splice(n.indexOf(t), 1)
                    }
                    )))
                }
                )),
                n.map((function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }
                )).sort((function(t, e) {
                    return e.g - t.g || -1
                }
                )).forEach((function(e) {
                    return e.t.revert(t)
                }
                )),
                this.data.forEach((function(e) {
                    return !(e instanceof tr) && e.revert && e.revert(t)
                }
                )),
                this._r.forEach((function(e) {
                    return e(t, r)
                }
                )),
                this.isReverted = !0
            } else
                this.data.forEach((function(t) {
                    return t.kill && t.kill()
                }
                ));
            if (this.clear(),
            e) {
                var i = kr.indexOf(this);
                ~i && kr.splice(i, 1)
            }
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        t
    }()
      , zr = function() {
        function t(t) {
            this.contexts = [],
            this.scope = t
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            G(t) || (t = {
                matches: t
            });
            var n, i, o, s = new Rr(0,r || this.scope), a = s.conditions = {};
            for (i in this.contexts.push(s),
            e = s.add("onMatch", e),
            s.queries = t,
            t)
                "all" === i ? o = 1 : (n = l.matchMedia(t[i])) && (kr.indexOf(s) < 0 && kr.push(s),
                (a[i] = n.matches) && (o = 1),
                n.addListener ? n.addListener(Dr) : n.addEventListener("change", Dr));
            return o && e(s),
            this
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        e.kill = function(t) {
            this.contexts.forEach((function(e) {
                return e.kill(t, !0)
            }
            ))
        }
        ,
        t
    }()
      , Fr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach((function(t) {
                return Ce(t)
            }
            ))
        },
        timeline: function(t) {
            return new er(t)
        },
        getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, n) {
            H(t) && (t = ve(t)[0]);
            var i = kt(t || {}).get
              , o = r ? Nt : Lt;
            return "native" === r && (r = ""),
            t ? e ? o((wt[e] && wt[e].get || i)(t, e, r, n)) : function(e, r, n) {
                return o((wt[e] && wt[e].get || i)(t, e, r, n))
            }
            : t
        },
        quickSetter: function(t, e, r) {
            if ((t = ve(t)).length > 1) {
                var n = t.map((function(t) {
                    return Yr.quickSetter(t, e, r)
                }
                ))
                  , i = n.length;
                return function(t) {
                    for (var e = i; e--; )
                        n[e](t)
                }
            }
            t = t[0] || {};
            var o = wt[e]
              , s = kt(t)
              , a = s.harness && (s.harness.aliases || {})[e] || e
              , u = o ? function(e) {
                var n = new o;
                d._pt = 0,
                n.init(t, r ? e + r : e, d, 0, [t]),
                n.render(1, n),
                d._pt && wr(1, d)
            }
            : s.set(t, a);
            return o ? u : function(e) {
                return u(t, a, r ? e + r : e, s, 1)
            }
        },
        quickTo: function(t, e, r) {
            var n, i = Yr.to(t, Bt(((n = {})[e] = "+=0.1",
            n.paused = !0,
            n), r || {})), o = function(t, r, n) {
                return i.resetTo(e, t, r, n)
            };
            return o.tween = i,
            o
        },
        isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ke(t.ease, L.ease)),
            Xt(L, t || {})
        },
        config: function(t) {
            return Xt(F, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , r = t.effect
              , n = t.plugins
              , i = t.defaults
              , o = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !wt[t] && !ut[t] && ft(e + " effect requires " + t + " plugin.")
            }
            )),
            bt[e] = function(t, e, n) {
                return r(ve(t), Yt(e || {}, i), n)
            }
            ,
            o && (er.prototype[e] = function(t, r, n) {
                return this.add(bt[e](t, G(r) ? r : (n = r) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            We[t] = Ke(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ke(t, e) : We
        },
        getById: function(t) {
            return u.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, n, i = new er(t);
            for (i.smoothChildTiming = Q(t.smoothChildTiming),
            u.remove(i),
            i._dp = 0,
            i._time = i._tTime = u._time,
            r = u._first; r; )
                n = r._next,
                !e && !r._dur && r instanceof fr && r.vars.onComplete === r._targets[0] || re(i, r, r._start - r._delay),
                r = n;
            return re(u, i, 0),
            i
        },
        context: function(t, e) {
            return t ? new Rr(t,e) : a
        },
        matchMedia: function(t) {
            return new zr(t)
        },
        matchMediaRefresh: function() {
            return kr.forEach((function(t) {
                var e, r, n = t.conditions;
                for (r in n)
                    n[r] && (n[r] = !1,
                    e = 1);
                e && t.revert()
            }
            )) || Dr()
        },
        addEventListener: function(t, e) {
            var r = Pr[t] || (Pr[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = Pr[t]
              , n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1)
        },
        utils: {
            wrap: function t(e, r, n) {
                var i = r - e;
                return tt(e) ? Me(e, t(0, e.length), r) : fe(n, (function(t) {
                    return (i + (t - e) % i) % i + e
                }
                ))
            },
            wrapYoyo: function t(e, r, n) {
                var i = r - e
                  , o = 2 * i;
                return tt(e) ? Me(e, t(0, e.length - 1), r) : fe(n, (function(t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                }
                ))
            },
            distribute: xe,
            random: Te,
            snap: be,
            normalize: function(t, e, r) {
                return Oe(t, e, 0, 1, r)
            },
            getUnit: de,
            clamp: function(t, e, r) {
                return fe(r, (function(r) {
                    return pe(t, e, r)
                }
                ))
            },
            splitColor: ze,
            toArray: ve,
            selector: me,
            mapRange: Oe,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }
                    ), t)
                }
            },
            unitize: function(t, e) {
                return function(r) {
                    return t(parseFloat(r)) + (e || de(r))
                }
            },
            interpolate: function t(e, r, n, i) {
                var o = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!o) {
                    var s, a, u, l, c, h = H(e), f = {};
                    if (!0 === n && (i = 1) && (n = null),
                    h)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (tt(e) && !tt(r)) {
                        for (u = [],
                        l = e.length,
                        c = l - 2,
                        a = 1; a < l; a++)
                            u.push(t(e[a - 1], e[a]));
                        l--,
                        o = function(t) {
                            t *= l;
                            var e = Math.min(c, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        n = r
                    } else
                        i || (e = Bt(tt(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r)
                            or.call(f, e, s, "get", r[s]);
                        o = function(t) {
                            return wr(t, f) || (h ? e.p : e)
                        }
                    }
                }
                return fe(n, o)
            },
            shuffle: ye
        },
        install: ct,
        effects: bt,
        ticker: Xe,
        updateRoot: er.updateRoot,
        plugins: wt,
        globalTimeline: u,
        core: {
            PropTween: Or,
            globals: pt,
            Tween: fr,
            Timeline: er,
            Animation: tr,
            getCache: kt,
            _removeLinkedListItem: jt,
            reverting: function() {
                return s
            },
            context: function(t) {
                return t && a && (a.data.push(t),
                t._ctx = a),
                a
            },
            suppressOverwrites: function(t) {
                return o = t
            }
        }
    };
    Et("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return Fr[t] = fr[t]
    }
    )),
    Xe.add(er.updateRoot),
    d = Fr.to({}, {
        duration: 0
    });
    var Lr = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , Nr = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, r, n) {
                n._onInit = function(t) {
                    var n, i;
                    if (H(r) && (n = {},
                    Et(r, (function(t) {
                        return n[t] = 1
                    }
                    )),
                    r = n),
                    e) {
                        for (i in n = {},
                        r)
                            n[i] = e(r[i]);
                        r = n
                    }
                    !function(t, e) {
                        var r, n, i, o = t._targets;
                        for (r in e)
                            for (n = o.length; n--; )
                                (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Lr(i, r)),
                                i && i.modifier && i.modifier(e[r], t, o[n], r))
                    }(t, r)
                }
            }
        }
    }
      , Yr = Fr.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var o, s, a;
            for (o in this.tween = r,
            e)
                a = t.getAttribute(o) || "",
                (s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, i, 0, 0, o)).op = o,
                s.b = a,
                this._props.push(o)
        },
        render: function(t, e) {
            for (var r = e._pt; r; )
                s ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                r = r._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Nr("roundProps", we), Nr("modifiers"), Nr("snap", be)) || Fr;
    fr.version = er.version = Yr.version = "3.11.4",
    f = 1,
    Z() && Ie();
    We.Power0,
    We.Power1,
    We.Power2,
    We.Power3,
    We.Power4,
    We.Linear,
    We.Quad,
    We.Cubic,
    We.Quart,
    We.Quint,
    We.Strong,
    We.Elastic,
    We.Back,
    We.SteppedEase,
    We.Bounce,
    We.Sine,
    We.Expo,
    We.Circ
}
)),
o.register("bnyTL", (function(e, r) {
    t(e.exports, "CSSPlugin", (function() {
        return St
    }
    ));
    /*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var n, i, s, a, u, l, c, h, f = o("jxfTi"), p = {}, d = 180 / Math.PI, _ = Math.PI / 180, g = Math.atan2, v = /([A-Z])/g, m = /(left|right|width|margin|padding|x)/i, y = /[\s,\(]\S/, x = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, w = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, b = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, T = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, M = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, S = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, O = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, k = function(t, e, r) {
        return t.style[e] = r
    }, P = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, E = function(t, e, r) {
        return t._gsap[e] = r
    }, C = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, A = function(t, e, r, n, i) {
        var o = t._gsap;
        o.scaleX = o.scaleY = r,
        o.renderTransform(i, o)
    }, D = function(t, e, r, n, i) {
        var o = t._gsap;
        o[e] = r,
        o.renderTransform(i, o)
    }, R = "transform", z = R + "Origin", F = function(t, e) {
        var r = this
          , n = this.target
          , i = n.style;
        if (t in p) {
            if (this.tfm = this.tfm || {},
            "transform" !== t && (~(t = x[t] || t).indexOf(",") ? t.split(",").forEach((function(t) {
                return r.tfm[t] = J(n, t)
            }
            )) : this.tfm[t] = n._gsap.x ? n._gsap[t] : J(n, t)),
            this.props.indexOf(R) >= 0)
                return;
            n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"),
            this.props.push(z, e, "")),
            t = R
        }
        (i || e) && this.props.push(t, e, i[t])
    }, L = function(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }, N = function() {
        var t, e, r = this.props, n = this.target, i = n.style, o = n._gsap;
        for (t = 0; t < r.length; t += 3)
            r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty(r[t].replace(v, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                o[e] = this.tfm[e];
            o.svg && (o.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            !(t = c()) || t.isStart || i[R] || (L(i),
            o.uncache = 1)
        }
    }, Y = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: N,
            save: F
        };
        return e && e.split(",").forEach((function(t) {
            return r.save(t)
        }
        )),
        r
    }, B = function(t, e) {
        var r = i.createElementNS ? i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i.createElement(t);
        return r.style ? r : i.createElement(t)
    }, X = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(v, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, W(r) || r, 1) || ""
    }, I = "O,Moz,ms,Ms,Webkit".split(","), W = function(t, e, r) {
        var n = (e || u).style
          , i = 5;
        if (t in n && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(I[i] + t in n); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? I[i] : "") + t
    }, U = function() {
        "undefined" != typeof window && window.document && (n = window,
        i = n.document,
        s = i.documentElement,
        u = B("div") || {
            style: {}
        },
        B("div"),
        R = W(R),
        z = R + "Origin",
        u.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        h = !!W("perspective"),
        c = f.gsap.core.reverting,
        a = 1)
    }, j = function t(e) {
        var r, n = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, o = this.nextSibling, a = this.style.cssText;
        if (s.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        e)
            try {
                r = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (r = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
        s.removeChild(n),
        this.style.cssText = a,
        r
    }, H = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, q = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = j.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === j || (e = j.call(t, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +H(t, ["x", "cx", "x1"]) || 0,
            y: +H(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, V = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !q(t))
    }, K = function(t, e) {
        if (e) {
            var r = t.style;
            e in p && e !== z && (e = R),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(v, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, G = function(t, e, r, n, i, o) {
        var s = new (0,
        f.PropTween)(t._pt,e,r,0,1,o ? O : S);
        return t._pt = s,
        s.b = n,
        s.e = i,
        t._props.push(r),
        s
    }, Q = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Z = {
        grid: 1,
        flex: 1
    }, $ = function t(e, r, n, o) {
        var s, a, l, c, h = parseFloat(n) || 0, d = (n + "").trim().substr((h + "").length) || "px", _ = u.style, g = m.test(r), v = "svg" === e.tagName.toLowerCase(), y = (v ? "client" : "offset") + (g ? "Width" : "Height"), x = 100, w = "px" === o, b = "%" === o;
        return o === d || !h || Q[o] || Q[d] ? h : ("px" !== d && !w && (h = t(e, r, n, "px")),
        c = e.getCTM && V(e),
        !b && "%" !== d || !p[r] && !~r.indexOf("adius") ? (_[g ? "width" : "height"] = x + (w ? d : o),
        a = ~r.indexOf("adius") || "em" === o && e.appendChild && !v ? e : e.parentNode,
        c && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== i && a.appendChild || (a = i.body),
        (l = a._gsap) && b && l.width && g && l.time === f._ticker.time && !l.uncache ? (0,
        f._round)(h / l.width * x) : ((b || "%" === d) && !Z[X(a, "display")] && (_.position = X(e, "position")),
        a === e && (_.position = "static"),
        a.appendChild(u),
        s = u[y],
        a.removeChild(u),
        _.position = "absolute",
        g && b && ((l = (0,
        f._getCache)(a)).time = f._ticker.time,
        l.width = a[y]),
        (0,
        f._round)(w ? s * h / x : s && h ? x / s * h : 0))) : (s = c ? e.getBBox()[g ? "width" : "height"] : e[y],
        (0,
        f._round)(b ? h / s * x : h / 100 * s)))
    }, J = function(t, e, r, n) {
        var i;
        return a || U(),
        e in x && "transform" !== e && ~(e = x[e]).indexOf(",") && (e = e.split(",")[0]),
        p[e] && "transform" !== e ? (i = ct(t, n),
        i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : ht(X(t, z)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nt[e] && nt[e](t, e, r) || X(t, e) || (0,
        f._getProperty)(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(i + "").trim().indexOf(" ") ? $(t, e, i, r) + r : i
    }, tt = function(t, e, r, n) {
        if (!r || "none" === r) {
            var i = W(e, t, 1)
              , o = i && X(t, i, 1);
            o && o !== r ? (e = i,
            r = o) : "borderColor" === e && (r = X(t, "borderTopColor"))
        }
        var s, a, u, l, c, h, p, d, _, g, v, m = new (0,
        f.PropTween)(this._pt,t.style,e,0,1,f._renderComplexString), y = 0, x = 0;
        if (m.b = r,
        m.e = n,
        r += "",
        "auto" === (n += "") && (t.style[e] = n,
        n = X(t, e) || n,
        t.style[e] = r),
        s = [r, n],
        (0,
        f._colorStringFilter)(s),
        n = s[1],
        u = (r = s[0]).match(f._numWithUnitExp) || [],
        (n.match(f._numWithUnitExp) || []).length) {
            for (; a = f._numWithUnitExp.exec(n); )
                p = a[0],
                _ = n.substring(y, a.index),
                c ? c = (c + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (c = 1),
                p !== (h = u[x++] || "") && (l = parseFloat(h) || 0,
                v = h.substr((l + "").length),
                "=" === p.charAt(1) && (p = (0,
                f._parseRelative)(l, p) + v),
                d = parseFloat(p),
                g = p.substr((d + "").length),
                y = f._numWithUnitExp.lastIndex - g.length,
                g || (g = g || f._config.units[e] || v,
                y === n.length && (n += g,
                m.e += g)),
                v !== g && (l = $(t, e, h, g) || 0),
                m._pt = {
                    _next: m._pt,
                    p: _ || 1 === x ? _ : ",",
                    s: l,
                    c: d - l,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
            m.c = y < n.length ? n.substring(y, n.length) : ""
        } else
            m.r = "display" === e && "none" === n ? O : S;
        return f._relExp.test(n) && (m.e = 0),
        this._pt = m,
        m
    }, et = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, rt = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, o = e.t, s = o.style, a = e.u, u = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                n = 1;
            else
                for (i = (a = a.split(",")).length; --i > -1; )
                    r = a[i],
                    p[r] && (n = 1,
                    r = "transformOrigin" === r ? z : R),
                    K(o, r);
            n && (K(o, R),
            u && (u.svg && o.removeAttribute("transform"),
            ct(o, 1),
            u.uncache = 1,
            L(s)))
        }
    }, nt = {
        clearProps: function(t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var o = t._pt = new (0,
                f.PropTween)(t._pt,e,r,0,0,rt);
                return o.u = n,
                o.pr = -10,
                o.tween = i,
                t._props.push(r),
                1
            }
        }
    }, it = [1, 0, 0, 1, 0, 0], ot = {}, st = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, at = function(t) {
        var e = X(t, R);
        return st(e) ? it : e.substr(7).match(f._numExp).map(f._round)
    }, ut = function(t, e) {
        var r, n, i, o, a = t._gsap || (0,
        f._getCache)(t), u = t.style, l = at(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? it : l : (l !== it || t.offsetParent || t === s || a.svg || (i = u.display,
        u.display = "block",
        (r = t.parentNode) && t.offsetParent || (o = 1,
        n = t.nextElementSibling,
        s.appendChild(t)),
        l = at(t),
        i ? u.display = i : K(t, "display"),
        o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : s.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, lt = function(t, e, r, n, i, o) {
        var s, a, u, l = t._gsap, c = i || ut(t, !0), h = l.xOrigin || 0, f = l.yOrigin || 0, p = l.xOffset || 0, d = l.yOffset || 0, _ = c[0], g = c[1], v = c[2], m = c[3], y = c[4], x = c[5], w = e.split(" "), b = parseFloat(w[0]) || 0, T = parseFloat(w[1]) || 0;
        r ? c !== it && (a = _ * m - g * v) && (u = b * (-g / a) + T * (_ / a) - (_ * x - g * y) / a,
        b = b * (m / a) + T * (-v / a) + (v * x - m * y) / a,
        T = u) : (b = (s = q(t)).x + (~w[0].indexOf("%") ? b / 100 * s.width : b),
        T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)),
        n || !1 !== n && l.smooth ? (y = b - h,
        x = T - f,
        l.xOffset = p + (y * _ + x * v) - y,
        l.yOffset = d + (y * g + x * m) - x) : l.xOffset = l.yOffset = 0,
        l.xOrigin = b,
        l.yOrigin = T,
        l.smooth = !!n,
        l.origin = e,
        l.originIsAbsolute = !!r,
        t.style[z] = "0px 0px",
        o && (G(o, l, "xOrigin", h, b),
        G(o, l, "yOrigin", f, T),
        G(o, l, "xOffset", p, l.xOffset),
        G(o, l, "yOffset", d, l.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + T)
    }, ct = function(t, e) {
        var r = t._gsap || new (0,
        f.GSCache)(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var n, i, o, s, a, u, l, c, p, v, m, y, x, w, b, T, M, S, O, k, P, E, C, A, D, F, L, N, Y, B, I, W, U = t.style, j = r.scaleX < 0, H = "px", q = "deg", K = getComputedStyle(t), G = X(t, z) || "0";
        return n = i = o = u = l = c = p = v = m = 0,
        s = a = 1,
        r.svg = !(!t.getCTM || !V(t)),
        K.translate && ("none" === K.translate && "none" === K.scale && "none" === K.rotate || (U[R] = ("none" !== K.translate ? "translate3d(" + (K.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== K.rotate ? "rotate(" + K.rotate + ") " : "") + ("none" !== K.scale ? "scale(" + K.scale.split(" ").join(",") + ") " : "") + ("none" !== K[R] ? K[R] : "")),
        U.scale = U.rotate = U.translate = "none"),
        w = ut(t, r.svg),
        r.svg && (r.uncache ? (D = t.getBBox(),
        G = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px",
        A = "") : A = !e && t.getAttribute("data-svg-origin"),
        lt(t, A || G, !!A || r.originIsAbsolute, !1 !== r.smooth, w)),
        y = r.xOrigin || 0,
        x = r.yOrigin || 0,
        w !== it && (S = w[0],
        O = w[1],
        k = w[2],
        P = w[3],
        n = E = w[4],
        i = C = w[5],
        6 === w.length ? (s = Math.sqrt(S * S + O * O),
        a = Math.sqrt(P * P + k * k),
        u = S || O ? g(O, S) * d : 0,
        (p = k || P ? g(k, P) * d + u : 0) && (a *= Math.abs(Math.cos(p * _))),
        r.svg && (n -= y - (y * S + x * k),
        i -= x - (y * O + x * P))) : (W = w[6],
        B = w[7],
        L = w[8],
        N = w[9],
        Y = w[10],
        I = w[11],
        n = w[12],
        i = w[13],
        o = w[14],
        l = (b = g(W, Y)) * d,
        b && (A = E * (T = Math.cos(-b)) + L * (M = Math.sin(-b)),
        D = C * T + N * M,
        F = W * T + Y * M,
        L = E * -M + L * T,
        N = C * -M + N * T,
        Y = W * -M + Y * T,
        I = B * -M + I * T,
        E = A,
        C = D,
        W = F),
        c = (b = g(-k, Y)) * d,
        b && (T = Math.cos(-b),
        I = P * (M = Math.sin(-b)) + I * T,
        S = A = S * T - L * M,
        O = D = O * T - N * M,
        k = F = k * T - Y * M),
        u = (b = g(O, S)) * d,
        b && (A = S * (T = Math.cos(b)) + O * (M = Math.sin(b)),
        D = E * T + C * M,
        O = O * T - S * M,
        C = C * T - E * M,
        S = A,
        E = D),
        l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0,
        c = 180 - c),
        s = (0,
        f._round)(Math.sqrt(S * S + O * O + k * k)),
        a = (0,
        f._round)(Math.sqrt(C * C + W * W)),
        b = g(E, C),
        p = Math.abs(b) > 2e-4 ? b * d : 0,
        m = I ? 1 / (I < 0 ? -I : I) : 0),
        r.svg && (A = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !st(X(t, R)),
        A && t.setAttribute("transform", A))),
        Math.abs(p) > 90 && Math.abs(p) < 270 && (j ? (s *= -1,
        p += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (a *= -1,
        p += p <= 0 ? 180 : -180)),
        e = e || r.uncache,
        r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + H,
        r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + H,
        r.z = o + H,
        r.scaleX = (0,
        f._round)(s),
        r.scaleY = (0,
        f._round)(a),
        r.rotation = (0,
        f._round)(u) + q,
        r.rotationX = (0,
        f._round)(l) + q,
        r.rotationY = (0,
        f._round)(c) + q,
        r.skewX = p + q,
        r.skewY = v + q,
        r.transformPerspective = m + H,
        (r.zOrigin = parseFloat(G.split(" ")[2]) || 0) && (U[z] = ht(G)),
        r.xOffset = r.yOffset = 0,
        r.force3D = f._config.force3D,
        r.renderTransform = r.svg ? mt : h ? vt : pt,
        r.uncache = 0,
        r
    }, ht = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, ft = function(t, e, r) {
        var n = (0,
        f.getUnit)(e);
        return (0,
        f._round)(parseFloat(e) + parseFloat($(t, "x", r + "px", n))) + n
    }, pt = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        vt(t, e)
    }, dt = "0deg", _t = "0px", gt = ") ", vt = function(t, e) {
        var r = e || this
          , n = r.xPercent
          , i = r.yPercent
          , o = r.x
          , s = r.y
          , a = r.z
          , u = r.rotation
          , l = r.rotationY
          , c = r.rotationX
          , h = r.skewX
          , f = r.skewY
          , p = r.scaleX
          , d = r.scaleY
          , g = r.transformPerspective
          , v = r.force3D
          , m = r.target
          , y = r.zOrigin
          , x = ""
          , w = "auto" === v && t && 1 !== t || !0 === v;
        if (y && (c !== dt || l !== dt)) {
            var b, T = parseFloat(l) * _, M = Math.sin(T), S = Math.cos(T);
            T = parseFloat(c) * _,
            b = Math.cos(T),
            o = ft(m, o, M * b * -y),
            s = ft(m, s, -Math.sin(T) * -y),
            a = ft(m, a, S * b * -y + y)
        }
        g !== _t && (x += "perspective(" + g + gt),
        (n || i) && (x += "translate(" + n + "%, " + i + "%) "),
        (w || o !== _t || s !== _t || a !== _t) && (x += a !== _t || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + gt),
        u !== dt && (x += "rotate(" + u + gt),
        l !== dt && (x += "rotateY(" + l + gt),
        c !== dt && (x += "rotateX(" + c + gt),
        h === dt && f === dt || (x += "skew(" + h + ", " + f + gt),
        1 === p && 1 === d || (x += "scale(" + p + ", " + d + gt),
        m.style[R] = x || "translate(0, 0)"
    }, mt = function(t, e) {
        var r, n, i, o, s, a = e || this, u = a.xPercent, l = a.yPercent, c = a.x, h = a.y, p = a.rotation, d = a.skewX, g = a.skewY, v = a.scaleX, m = a.scaleY, y = a.target, x = a.xOrigin, w = a.yOrigin, b = a.xOffset, T = a.yOffset, M = a.forceCSS, S = parseFloat(c), O = parseFloat(h);
        p = parseFloat(p),
        d = parseFloat(d),
        (g = parseFloat(g)) && (d += g = parseFloat(g),
        p += g),
        p || d ? (p *= _,
        d *= _,
        r = Math.cos(p) * v,
        n = Math.sin(p) * v,
        i = Math.sin(p - d) * -m,
        o = Math.cos(p - d) * m,
        d && (g *= _,
        s = Math.tan(d - g),
        i *= s = Math.sqrt(1 + s * s),
        o *= s,
        g && (s = Math.tan(g),
        r *= s = Math.sqrt(1 + s * s),
        n *= s)),
        r = (0,
        f._round)(r),
        n = (0,
        f._round)(n),
        i = (0,
        f._round)(i),
        o = (0,
        f._round)(o)) : (r = v,
        o = m,
        n = i = 0),
        (S && !~(c + "").indexOf("px") || O && !~(h + "").indexOf("px")) && (S = $(y, "x", c, "px"),
        O = $(y, "y", h, "px")),
        (x || w || b || T) && (S = (0,
        f._round)(S + x - (x * r + w * i) + b),
        O = (0,
        f._round)(O + w - (x * n + w * o) + T)),
        (u || l) && (s = y.getBBox(),
        S = (0,
        f._round)(S + u / 100 * s.width),
        O = (0,
        f._round)(O + l / 100 * s.height)),
        s = "matrix(" + r + "," + n + "," + i + "," + o + "," + S + "," + O + ")",
        y.setAttribute("transform", s),
        M && (y.style[R] = s)
    }, yt = function(t, e, r, n, i) {
        var o, s, a = 360, u = (0,
        f._isString)(i), l = parseFloat(i) * (u && ~i.indexOf("rad") ? d : 1) - n, c = n + l + "deg";
        return u && ("short" === (o = i.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360),
        "cw" === o && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === o && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)),
        t._pt = s = new (0,
        f.PropTween)(t._pt,e,r,n,l,b),
        s.e = c,
        s.u = "deg",
        t._props.push(r),
        s
    }, xt = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, wt = function(t, e, r) {
        var n, i, o, s, a, u, l, c = xt({}, r._gsap), h = r.style;
        for (i in c.svg ? (o = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        h[R] = e,
        n = ct(r, 1),
        K(r, R),
        r.setAttribute("transform", o)) : (o = getComputedStyle(r)[R],
        h[R] = e,
        n = ct(r, 1),
        h[R] = o),
        p)
            (o = c[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = (0,
            f.getUnit)(o) !== (l = (0,
            f.getUnit)(s)) ? $(r, i, o, l) : parseFloat(o),
            u = parseFloat(s),
            t._pt = new (0,
            f.PropTween)(t._pt,n,i,a,u - a,w),
            t._pt.u = l || 0,
            t._props.push(i));
        xt(n, c)
    };
    (0,
    f._forEachName)("padding,margin,Width,Radius", (function(t, e) {
        var r = "Top"
          , n = "Right"
          , i = "Bottom"
          , o = "Left"
          , s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function(r) {
            return e < 2 ? t + r : "border" + r + t
        }
        ));
        nt[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var o, a;
            if (arguments.length < 4)
                return o = s.map((function(e) {
                    return J(t, e, r)
                }
                )),
                5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "),
            a = {},
            s.forEach((function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }
            )),
            t.init(e, a, i)
        }
    }
    ));
    var bt, Tt, Mt, St = {
        name: "css",
        register: U,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var o, s, u, l, c, h, d, _, g, v, m, b, S, O, k, P, E, C, A, D, F = this._props, L = t.style, N = r.vars.startAt;
            for (d in a || U(),
            this.styles = this.styles || Y(t),
            P = this.styles.props,
            this.tween = r,
            e)
                if ("autoRound" !== d && (s = e[d],
                !f._plugins[d] || !(0,
                f._checkPlugin)(d, e, r, n, t, i)))
                    if (c = typeof s,
                    h = nt[d],
                    "function" === c && (c = typeof (s = s.call(r, n, t, i))),
                    "string" === c && ~s.indexOf("random(") && (s = (0,
                    f._replaceRandom)(s)),
                    h)
                        h(this, t, d, s, r) && (k = 1);
                    else if ("--" === d.substr(0, 2))
                        o = (getComputedStyle(t).getPropertyValue(d) + "").trim(),
                        s += "",
                        f._colorExp.lastIndex = 0,
                        f._colorExp.test(o) || (_ = (0,
                        f.getUnit)(o),
                        g = (0,
                        f.getUnit)(s)),
                        g ? _ !== g && (o = $(t, d, o, g) + g) : _ && (s += _),
                        this.add(L, "setProperty", o, s, n, i, 0, 0, d),
                        F.push(d),
                        P.push(d, 0, L[d]);
                    else if ("undefined" !== c) {
                        if (N && d in N ? (o = "function" == typeof N[d] ? N[d].call(r, n, t, i) : N[d],
                        (0,
                        f._isString)(o) && ~o.indexOf("random(") && (o = (0,
                        f._replaceRandom)(o)),
                        (0,
                        f.getUnit)(o + "") || (o += f._config.units[d] || (0,
                        f.getUnit)(J(t, d)) || ""),
                        "=" === (o + "").charAt(1) && (o = J(t, d))) : o = J(t, d),
                        l = parseFloat(o),
                        (v = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                        u = parseFloat(s),
                        d in x && ("autoAlpha" === d && (1 === l && "hidden" === J(t, "visibility") && u && (l = 0),
                        P.push("visibility", 0, L.visibility),
                        G(this, L, "visibility", l ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        "scale" !== d && "transform" !== d && ~(d = x[d]).indexOf(",") && (d = d.split(",")[0])),
                        m = d in p)
                            if (this.styles.save(d),
                            b || ((S = t._gsap).renderTransform && !e.parseTransform || ct(t, e.parseTransform),
                            O = !1 !== e.smoothOrigin && S.smooth,
                            (b = this._pt = new (0,
                            f.PropTween)(this._pt,L,R,0,1,S.renderTransform,S,0,-1)).dep = 1),
                            "scale" === d)
                                this._pt = new (0,
                                f.PropTween)(this._pt,S,"scaleY",S.scaleY,(v ? (0,
                                f._parseRelative)(S.scaleY, v + u) : u) - S.scaleY || 0,w),
                                this._pt.u = 0,
                                F.push("scaleY", d),
                                d += "X";
                            else {
                                if ("transformOrigin" === d) {
                                    P.push(z, 0, L[z]),
                                    C = void 0,
                                    A = void 0,
                                    D = void 0,
                                    C = (E = s).split(" "),
                                    A = C[0],
                                    D = C[1] || "50%",
                                    "top" !== A && "bottom" !== A && "left" !== D && "right" !== D || (E = A,
                                    A = D,
                                    D = E),
                                    C[0] = et[A] || A,
                                    C[1] = et[D] || D,
                                    s = C.join(" "),
                                    S.svg ? lt(t, s, 0, O, 0, this) : ((g = parseFloat(s.split(" ")[2]) || 0) !== S.zOrigin && G(this, S, "zOrigin", S.zOrigin, g),
                                    G(this, L, d, ht(o), ht(s)));
                                    continue
                                }
                                if ("svgOrigin" === d) {
                                    lt(t, s, 1, O, 0, this);
                                    continue
                                }
                                if (d in ot) {
                                    yt(this, S, d, l, v ? (0,
                                    f._parseRelative)(l, v + s) : s);
                                    continue
                                }
                                if ("smoothOrigin" === d) {
                                    G(this, S, "smooth", S.smooth, s);
                                    continue
                                }
                                if ("force3D" === d) {
                                    S[d] = s;
                                    continue
                                }
                                if ("transform" === d) {
                                    wt(this, s, t);
                                    continue
                                }
                            }
                        else
                            d in L || (d = W(d) || d);
                        if (m || (u || 0 === u) && (l || 0 === l) && !y.test(s) && d in L)
                            u || (u = 0),
                            (_ = (o + "").substr((l + "").length)) !== (g = (0,
                            f.getUnit)(s) || (d in f._config.units ? f._config.units[d] : _)) && (l = $(t, d, o, g)),
                            this._pt = new (0,
                            f.PropTween)(this._pt,m ? S : L,d,l,(v ? (0,
                            f._parseRelative)(l, v + u) : u) - l,m || "px" !== g && "zIndex" !== d || !1 === e.autoRound ? w : M),
                            this._pt.u = g || 0,
                            _ !== g && "%" !== g && (this._pt.b = o,
                            this._pt.r = T);
                        else if (d in L)
                            tt.call(this, t, d, o, v ? v + s : s);
                        else if (d in t)
                            this.add(t, d, o || t[d], v ? v + s : s, n, i);
                        else if ("parseTransform" !== d) {
                            (0,
                            f._missingPlugin)(d, s);
                            continue
                        }
                        m || (d in L ? P.push(d, 0, L[d]) : P.push(d, 1, o || t[d])),
                        F.push(d)
                    }
            k && (0,
            f._sortPropTweensByPriority)(this)
        },
        render: function(t, e) {
            if (e.tween._time || !c())
                for (var r = e._pt; r; )
                    r.r(t, r.d),
                    r = r._next;
            else
                e.styles.revert()
        },
        get: J,
        aliases: x,
        getSetter: function(t, e, r) {
            var n = x[e];
            return n && n.indexOf(",") < 0 && (e = n),
            e in p && e !== z && (t._gsap.x || J(t, "x")) ? r && l === r ? "scale" === e ? C : E : (l = r || {},
            "scale" === e ? A : D) : t.style && !(0,
            f._isUndefined)(t.style[e]) ? k : ~e.indexOf("-") ? P : (0,
            f._getSetter)(t, e)
        },
        core: {
            _removeProperty: K,
            _getMatrix: ut
        }
    };
    f.gsap.utils.checkPrefix = W,
    f.gsap.core.getStyleSaver = Y,
    bt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    Tt = "rotation,rotationX,rotationY,skewX,skewY",
    Mt = (0,
    f._forEachName)(bt + "," + Tt + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        p[t] = 1
    }
    )),
    (0,
    f._forEachName)(Tt, (function(t) {
        f._config.units[t] = "deg",
        ot[t] = 1
    }
    )),
    x[Mt[13]] = bt + "," + Tt,
    (0,
    f._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        x[e[1]] = Mt[e[0]]
    }
    )),
    (0,
    f._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        f._config.units[t] = "px"
    }
    )),
    f.gsap.registerPlugin(St)
}
)),
o.register("aV8T4", (function(e, r) {
    t(e.exports, "ScrollTrigger", (function() {
        return pe
    }
    ));
    /*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var n, i, s, a, u, l, c, h, f, p, d, _, g, v, m, y, x, w, b, T, M, S, O, k, P, E, C, A, D, R, z, F, L, N, Y = o("2lFfT"), B = 1, X = Date.now, I = X(), W = 0, U = 0, j = function() {
        return v = 1
    }, H = function() {
        return v = 0
    }, q = function(t) {
        return t
    }, V = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, K = function() {
        return "undefined" != typeof window
    }, G = function() {
        return n || K() && (n = window.gsap) && n.registerPlugin && n
    }, Q = function(t) {
        return !!~c.indexOf(t)
    }, Z = function(t) {
        return (0,
        Y._getProxyProp)(t, "getBoundingClientRect") || (Q(t) ? function() {
            return ue.width = s.innerWidth,
            ue.height = s.innerHeight,
            ue
        }
        : function() {
            return Tt(t)
        }
        )
    }, $ = function(t, e) {
        var r = e.s
          , n = e.d2
          , i = e.d
          , o = e.a;
        return r = "scroll" + n,
        (o = (0,
        Y._getProxyProp)(t, r)) ? o() - Z(t)()[i] : Q(t) ? (u[r] || l[r]) - (s["inner" + n] || u["client" + n] || l["client" + n]) : t[r] - t["offset" + n]
    }, J = function(t, e) {
        for (var r = 0; r < b.length; r += 3)
            (!e || ~e.indexOf(b[r + 1])) && t(b[r], b[r + 1], b[r + 2])
    }, tt = function(t) {
        return "string" == typeof t
    }, et = function(t) {
        return "function" == typeof t
    }, rt = function(t) {
        return "number" == typeof t
    }, nt = function(t) {
        return "object" == typeof t
    }, it = function(t, e, r) {
        return t && t.progress(e ? 0 : 1) && r && t.pause()
    }, ot = function(t, e) {
        if (t.enabled) {
            var r = e(t);
            r && r.totalTime && (t.callbackAnimation = r)
        }
    }, st = Math.abs, at = "left", ut = "right", lt = "bottom", ct = "width", ht = "height", ft = "Right", pt = "Left", dt = "Top", _t = "Bottom", gt = "padding", vt = "margin", mt = "Width", yt = "Height", xt = "px", wt = function(t) {
        return s.getComputedStyle(t)
    }, bt = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, Tt = function(t, e) {
        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== wt(t)[m] && n.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , i = t.getBoundingClientRect();
        return r && r.progress(0).kill(),
        i
    }, Mt = function(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    }, St = function(t) {
        var e, r = [], n = t.labels, i = t.duration();
        for (e in n)
            r.push(n[e] / i);
        return r
    }, Ot = function(t) {
        var e = n.utils.snap(t)
          , r = Array.isArray(t) && t.slice(0).sort((function(t, e) {
            return t - e
        }
        ));
        return r ? function(t, n, i) {
            var o;
            if (void 0 === i && (i = .001),
            !n)
                return e(t);
            if (n > 0) {
                for (t -= i,
                o = 0; o < r.length; o++)
                    if (r[o] >= t)
                        return r[o];
                return r[o - 1]
            }
            for (o = r.length,
            t += i; o--; )
                if (r[o] <= t)
                    return r[o];
            return r[0]
        }
        : function(r, n, i) {
            void 0 === i && (i = .001);
            var o = e(r);
            return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t)
        }
    }, kt = function(t, e, r, n) {
        return r.split(",").forEach((function(r) {
            return t(e, r, n)
        }
        ))
    }, Pt = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    }, Et = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }, Ct = function(t, e, r) {
        return r && r.wheelHandler && t(e, "wheel", r)
    }, At = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Dt = {
        toggleActions: "play",
        anticipatePin: 0
    }, Rt = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, zt = function(t, e) {
        if (tt(t)) {
            var r = t.indexOf("=")
              , n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (n *= e / 100),
            t = t.substr(0, r - 1)),
            t = n + (t in Rt ? Rt[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }, Ft = function(t, e, r, n, i, o, s, u) {
        var c = i.startColor
          , h = i.endColor
          , f = i.fontSize
          , p = i.indent
          , d = i.fontWeight
          , _ = a.createElement("div")
          , g = Q(r) || "fixed" === (0,
        Y._getProxyProp)(r, "pinType")
          , v = -1 !== t.indexOf("scroller")
          , m = g ? l : r
          , y = -1 !== t.indexOf("start")
          , x = y ? c : h
          , w = "border-color:" + x + ";font-size:" + f + ";color:" + x + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return w += "position:" + ((v || u) && g ? "fixed;" : "absolute;"),
        (v || u || !g) && (w += (n === Y._vertical ? ut : lt) + ":" + (o + parseFloat(p)) + "px;"),
        s && (w += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
        _._isStart = y,
        _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        _.style.cssText = w,
        _.innerText = e || 0 === e ? t + "-" + e : t,
        m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_),
        _._offset = _["offset" + n.op.d2],
        Lt(_, 0, n, y),
        _
    }, Lt = function(t, e, r, i) {
        var o = {
            display: "block"
        }
          , s = r[i ? "os2" : "p2"]
          , a = r[i ? "p2" : "os2"];
        t._isFlipped = i,
        o[r.a + "Percent"] = i ? -100 : 0,
        o[r.a] = i ? "1px" : 0,
        o["border" + s + mt] = 1,
        o["border" + a + mt] = 0,
        o[r.p] = e + "px",
        n.set(t, o)
    }, Nt = [], Yt = {}, Bt = function() {
        return X() - W > 34 && (z || (z = requestAnimationFrame(ee)))
    }, Xt = function() {
        (!O || !O.isPressed || O.startX > l.clientWidth) && (Y._scrollers.cache++,
        O ? z || (z = requestAnimationFrame(ee)) : ee(),
        W || qt("scrollStart"),
        W = X())
    }, It = function() {
        E = s.innerWidth,
        P = s.innerHeight
    }, Wt = function() {
        Y._scrollers.cache++,
        !g && !S && !a.fullscreenElement && !a.webkitFullscreenElement && (!k || E !== s.innerWidth || Math.abs(s.innerHeight - P) > .25 * s.innerHeight) && h.restart(!0)
    }, Ut = {}, jt = [], Ht = function t() {
        return Et(pe, "scrollEnd", t) || $t(!0)
    }, qt = function(t) {
        return Ut[t] && Ut[t].map((function(t) {
            return t()
        }
        )) || jt
    }, Vt = [], Kt = function(t) {
        for (var e = 0; e < Vt.length; e += 5)
            (!t || Vt[e + 4] && Vt[e + 4].query === t) && (Vt[e].style.cssText = Vt[e + 1],
            Vt[e].getBBox && Vt[e].setAttribute("transform", Vt[e + 2] || ""),
            Vt[e + 3].uncache = 1)
    }, Gt = function(t, e) {
        var r;
        for (y = 0; y < Nt.length; y++)
            !(r = Nt[y]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
        e && Kt(e),
        e || qt("revert")
    }, Qt = function(t, e) {
        Y._scrollers.cache++,
        (e || !F) && Y._scrollers.forEach((function(t) {
            return et(t) && t.cacheID++ && (t.rec = 0)
        }
        )),
        tt(t) && (s.history.scrollRestoration = D = t)
    }, Zt = 0, $t = function(t, e) {
        if (!W || t) {
            F = pe.isRefreshing = !0,
            Y._scrollers.forEach((function(t) {
                return et(t) && t.cacheID++ && (t.rec = t())
            }
            ));
            var r = qt("refreshInit");
            T && pe.sort(),
            e || Gt(),
            Y._scrollers.forEach((function(t) {
                et(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
                t(0))
            }
            )),
            Nt.slice(0).forEach((function(t) {
                return t.refresh()
            }
            )),
            Nt.forEach((function(t, e) {
                if (t._subPinOffset && t.pin) {
                    var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight"
                      , n = t.pin[r];
                    t.revert(!0, 1),
                    t.adjustPinSpacing(t.pin[r] - n),
                    t.revert(!1, 1)
                }
            }
            )),
            Nt.forEach((function(t) {
                return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, $(t.scroller, t._dir)))
            }
            )),
            r.forEach((function(t) {
                return t && t.render && t.render(-1)
            }
            )),
            Y._scrollers.forEach((function(t) {
                et(t) && (t.smooth && requestAnimationFrame((function() {
                    return t.target.style.scrollBehavior = "smooth"
                }
                )),
                t.rec && t(t.rec))
            }
            )),
            Qt(D, 1),
            h.pause(),
            Zt++,
            ee(2),
            Nt.forEach((function(t) {
                return et(t.vars.onRefresh) && t.vars.onRefresh(t)
            }
            )),
            F = pe.isRefreshing = !1,
            qt("refresh")
        } else
            Pt(pe, "scrollEnd", Ht)
    }, Jt = 0, te = 1, ee = function(t) {
        if (!F || 2 === t) {
            pe.isUpdating = !0,
            N && N.update(0);
            var e = Nt.length
              , r = X()
              , n = r - I >= 50
              , i = e && Nt[0].scroll();
            if (te = Jt > i ? -1 : 1,
            Jt = i,
            n && (W && !v && r - W > 200 && (W = 0,
            qt("scrollEnd")),
            d = I,
            I = r),
            te < 0) {
                for (y = e; y-- > 0; )
                    Nt[y] && Nt[y].update(0, n);
                te = 1
            } else
                for (y = 0; y < e; y++)
                    Nt[y] && Nt[y].update(0, n);
            pe.isUpdating = !1
        }
        z = 0
    }, re = [at, "top", lt, ut, vt + _t, vt + ft, vt + dt, vt + pt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ne = re.concat([ct, ht, "boxSizing", "max" + mt, "max" + yt, "position", vt, gt, gt + dt, gt + ft, gt + _t, gt + pt]), ie = function(t, e, r, n) {
        if (!t._gsap.swappedIn) {
            for (var i, o = re.length, s = e.style, a = t.style; o--; )
                s[i = re[o]] = r[i];
            s.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (s.display = "inline-block"),
            a[lt] = a[ut] = "auto",
            s.flexBasis = r.flexBasis || "auto",
            s.overflow = "visible",
            s.boxSizing = "border-box",
            s[ct] = Mt(t, Y._horizontal) + xt,
            s[ht] = Mt(t, Y._vertical) + xt,
            s[gt] = a[vt] = a.top = a[at] = "0",
            se(n),
            a[ct] = a["max" + mt] = r[ct],
            a[ht] = a["max" + yt] = r[ht],
            a[gt] = r[gt],
            t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
        }
    }, oe = /([A-Z])/g, se = function(t) {
        if (t) {
            var e, r, i = t.t.style, o = t.length, s = 0;
            for ((t.t._gsap || n.core.getCache(t.t)).uncache = 1; s < o; s += 2)
                r = t[s + 1],
                e = t[s],
                r ? i[e] = r : i[e] && i.removeProperty(e.replace(oe, "-$1").toLowerCase())
        }
    }, ae = function(t) {
        for (var e = ne.length, r = t.style, n = [], i = 0; i < e; i++)
            n.push(ne[i], r[ne[i]]);
        return n.t = t,
        n
    }, ue = {
        left: 0,
        top: 0
    }, le = function(t, e, r, n, i, o, s, a, c, h, f, p, d) {
        et(t) && (t = t(a)),
        tt(t) && "max" === t.substr(0, 3) && (t = p + ("=" === t.charAt(4) ? zt("0" + t.substr(3), r) : 0));
        var _, g, v, m = d ? d.time() : 0;
        if (d && d.seek(0),
        rt(t))
            s && Lt(s, r, n, !0);
        else {
            et(e) && (e = e(a));
            var y, x, w, b, T = (t || "0").split(" ");
            v = (0,
            Y._getTarget)(e) || l,
            (y = Tt(v) || {}) && (y.left || y.top) || "none" !== wt(v).display || (b = v.style.display,
            v.style.display = "block",
            y = Tt(v),
            b ? v.style.display = b : v.style.removeProperty("display")),
            x = zt(T[0], y[n.d]),
            w = zt(T[1] || "0", r),
            t = y[n.p] - c[n.p] - h + x + i - w,
            s && Lt(s, w, n, r - w < 20 || s._isStart && w > 20),
            r -= r - w
        }
        if (o) {
            var M = t + r
              , S = o._isStart;
            _ = "scroll" + n.d2,
            Lt(o, M, n, S && M > 20 || !S && (f ? Math.max(l[_], u[_]) : o.parentNode[_]) <= M + 1),
            f && (c = Tt(s),
            f && (o.style[n.op.p] = c[n.op.p] - n.op.m - o._offset + xt))
        }
        return d && v && (_ = Tt(v),
        d.seek(p),
        g = Tt(v),
        d._caScrollDist = _[n.p] - g[n.p],
        t = t / d._caScrollDist * p),
        d && d.seek(m),
        d ? t : Math.round(t)
    }, ce = /(webkit|moz|length|cssText|inset)/i, he = function(t, e, r, i) {
        if (t.parentNode !== e) {
            var o, s, a = t.style;
            if (e === l) {
                for (o in t._stOrig = a.cssText,
                s = wt(t))
                    +o || ce.test(o) || !s[o] || "string" != typeof a[o] || "0" === o || (a[o] = s[o]);
                a.top = r,
                a.left = i
            } else
                a.cssText = t._stOrig;
            n.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }, fe = function(t, e) {
        var r, i, o = (0,
        Y._getScrollFunc)(t, e), s = "_scroll" + e.p2, a = function e(a, u, l, c, h) {
            var f = e.tween
              , p = u.onComplete
              , d = {};
            return l = l || o(),
            h = c && h || 0,
            c = c || a - l,
            f && f.kill(),
            r = Math.round(l),
            u[s] = a,
            u.modifiers = d,
            d[s] = function(t) {
                return (t = Math.round(o())) !== r && t !== i && Math.abs(t - r) > 3 && Math.abs(t - i) > 3 ? (f.kill(),
                e.tween = 0) : t = l + c * f.ratio + h * f.ratio * f.ratio,
                i = r,
                r = Math.round(t)
            }
            ,
            u.onUpdate = function() {
                Y._scrollers.cache++,
                ee()
            }
            ,
            u.onComplete = function() {
                e.tween = 0,
                p && p.call(f)
            }
            ,
            f = e.tween = n.to(t, u)
        };
        return t[s] = o,
        o.wheelHandler = function() {
            return a.tween && a.tween.kill() && (a.tween = 0)
        }
        ,
        Pt(t, "wheel", o.wheelHandler),
        a
    }, pe = function() {
        function t(e, r) {
            i || t.register(n) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(e, r)
        }
        return t.prototype.init = function(e, r) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            U) {
                var i, o, c, h, _, m, x, w, b, S, O, k, P, E, C, D, z, I, j, H, K, G, J, at, ut, lt, kt, Ct, Rt, Lt, Bt, It, Ut, jt, qt, Vt, Kt, Gt, Qt, Jt, ee, re, ne = e = bt(tt(e) || rt(e) || e.nodeType ? {
                    trigger: e
                } : e, Dt), oe = ne.onUpdate, ce = ne.toggleClass, pe = ne.id, de = ne.onToggle, _e = ne.onRefresh, ge = ne.scrub, ve = ne.trigger, me = ne.pin, ye = ne.pinSpacing, xe = ne.invalidateOnRefresh, we = ne.anticipatePin, be = ne.onScrubComplete, Te = ne.onSnapComplete, Me = ne.once, Se = ne.snap, Oe = ne.pinReparent, ke = ne.pinSpacer, Pe = ne.containerAnimation, Ee = ne.fastScrollEnd, Ce = ne.preventOverlaps, Ae = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Y._horizontal : Y._vertical, De = !ge && 0 !== ge, Re = (0,
                Y._getTarget)(e.scroller || s), ze = n.core.getCache(Re), Fe = Q(Re), Le = "fixed" === ("pinType"in e ? e.pinType : (0,
                Y._getProxyProp)(Re, "pinType") || Fe && "fixed"), Ne = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Ye = De && e.toggleActions.split(" "), Be = "markers"in e ? e.markers : Dt.markers, Xe = Fe ? 0 : parseFloat(wt(Re)["border" + Ae.p2 + mt]) || 0, Ie = this, We = e.onRefreshInit && function() {
                    return e.onRefreshInit(Ie)
                }
                , Ue = function(t, e, r) {
                    var n = r.d
                      , i = r.d2
                      , o = r.a;
                    return (o = (0,
                    Y._getProxyProp)(t, "getBoundingClientRect")) ? function() {
                        return o()[n]
                    }
                    : function() {
                        return (e ? s["inner" + i] : t["client" + i]) || 0
                    }
                }(Re, Fe, Ae), je = function(t, e) {
                    return !e || ~Y._proxies.indexOf(t) ? Z(t) : function() {
                        return ue
                    }
                }(Re, Fe), He = 0, qe = 0, Ve = (0,
                Y._getScrollFunc)(Re, Ae);
                if (A(Ie),
                Ie._dir = Ae,
                we *= 45,
                Ie.scroller = Re,
                Ie.scroll = Pe ? Pe.time.bind(Pe) : Ve,
                h = Ve(),
                Ie.vars = e,
                r = r || e.animation,
                "refreshPriority"in e && (T = 1,
                -9999 === e.refreshPriority && (N = Ie)),
                ze.tweenScroll = ze.tweenScroll || {
                    top: fe(Re, Y._vertical),
                    left: fe(Re, Y._horizontal)
                },
                Ie.tweenTo = i = ze.tweenScroll[Ae.p],
                Ie.scrubDuration = function(t) {
                    (It = rt(t) && t) ? Bt ? Bt.duration(t) : Bt = n.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: It,
                        paused: !0,
                        onComplete: function() {
                            return be && be(Ie)
                        }
                    }) : (Bt && Bt.progress(1).kill(),
                    Bt = 0)
                }
                ,
                r && (r.vars.lazy = !1,
                r._initted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0),
                Ie.animation = r.pause(),
                r.scrollTrigger = Ie,
                Ie.scrubDuration(ge),
                Rt = 0,
                pe || (pe = r.vars.id)),
                Nt.push(Ie),
                Se && (nt(Se) && !Se.push || (Se = {
                    snapTo: Se
                }),
                "scrollBehavior"in l.style && n.set(Fe ? [l, u] : Re, {
                    scrollBehavior: "auto"
                }),
                Y._scrollers.forEach((function(t) {
                    return et(t) && t.target === (Fe ? a.scrollingElement || u : Re) && (t.smooth = !1)
                }
                )),
                c = et(Se.snapTo) ? Se.snapTo : "labels" === Se.snapTo ? function(t) {
                    return function(e) {
                        return n.utils.snap(St(t), e)
                    }
                }(r) : "labelsDirectional" === Se.snapTo ? (Jt = r,
                function(t, e) {
                    return Ot(St(Jt))(t, e.direction)
                }
                ) : !1 !== Se.directional ? function(t, e) {
                    return Ot(Se.snapTo)(t, X() - qe < 500 ? 0 : e.direction)
                }
                : n.utils.snap(Se.snapTo),
                Ut = Se.duration || {
                    min: .1,
                    max: 2
                },
                Ut = nt(Ut) ? p(Ut.min, Ut.max) : p(Ut, Ut),
                jt = n.delayedCall(Se.delay || It / 2 || .1, (function() {
                    var t = Ve()
                      , e = X() - qe < 500
                      , o = i.tween;
                    if (!(e || Math.abs(Ie.getVelocity()) < 10) || o || v || He === t)
                        Ie.isActive && He !== t && jt.restart(!0);
                    else {
                        var s = (t - m) / P
                          , a = r && !De ? r.totalProgress() : s
                          , u = e ? 0 : (a - Lt) / (X() - d) * 1e3 || 0
                          , l = n.utils.clamp(-s, 1 - s, st(u / 2) * u / .185)
                          , h = s + (!1 === Se.inertia ? 0 : l)
                          , f = p(0, 1, c(h, Ie))
                          , _ = Math.round(m + f * P)
                          , g = Se
                          , y = g.onStart
                          , w = g.onInterrupt
                          , b = g.onComplete;
                        if (t <= x && t >= m && _ !== t) {
                            if (o && !o._initted && o.data <= st(_ - t))
                                return;
                            !1 === Se.inertia && (l = f - s),
                            i(_, {
                                duration: Ut(st(.185 * Math.max(st(h - a), st(f - a)) / u / .05 || 0)),
                                ease: Se.ease || "power3",
                                data: st(_ - t),
                                onInterrupt: function() {
                                    return jt.restart(!0) && w && w(Ie)
                                },
                                onComplete: function() {
                                    Ie.update(),
                                    He = Ve(),
                                    Rt = Lt = r && !De ? r.totalProgress() : Ie.progress,
                                    Te && Te(Ie),
                                    b && b(Ie)
                                }
                            }, t, l * P, _ - t - l * P),
                            y && y(Ie, i.tween)
                        }
                    }
                }
                )).pause()),
                pe && (Yt[pe] = Ie),
                (Qt = (ve = Ie.trigger = (0,
                Y._getTarget)(ve || me)) && ve._gsap && ve._gsap.stRevert) && (Qt = Qt(Ie)),
                me = !0 === me ? ve : (0,
                Y._getTarget)(me),
                tt(ce) && (ce = {
                    targets: ve,
                    className: ce
                }),
                me && (!1 === ye || ye === vt || (ye = !(!ye && me.parentNode && me.parentNode.style && "flex" === wt(me.parentNode).display) && gt),
                Ie.pin = me,
                (o = n.core.getCache(me)).spacer ? E = o.pinState : (ke && ((ke = (0,
                Y._getTarget)(ke)) && !ke.nodeType && (ke = ke.current || ke.nativeElement),
                o.spacerIsNative = !!ke,
                ke && (o.spacerState = ae(ke))),
                o.spacer = z = ke || a.createElement("div"),
                z.classList.add("pin-spacer"),
                pe && z.classList.add("pin-spacer-" + pe),
                o.pinState = E = ae(me)),
                !1 !== e.force3D && n.set(me, {
                    force3D: !0
                }),
                Ie.spacer = z = o.spacer,
                Ct = wt(me),
                J = Ct[ye + Ae.os2],
                j = n.getProperty(me),
                H = n.quickSetter(me, Ae.a, xt),
                ie(me, z, Ct),
                D = ae(me)),
                Be) {
                    k = nt(Be) ? bt(Be, At) : At,
                    S = Ft("scroller-start", pe, Re, Ae, k, 0),
                    O = Ft("scroller-end", pe, Re, Ae, k, 0, S),
                    I = S["offset" + Ae.op.d2];
                    var Ke = (0,
                    Y._getTarget)((0,
                    Y._getProxyProp)(Re, "content") || Re);
                    w = this.markerStart = Ft("start", pe, Ke, Ae, k, I, 0, Pe),
                    b = this.markerEnd = Ft("end", pe, Ke, Ae, k, I, 0, Pe),
                    Pe && (Gt = n.quickSetter([w, b], Ae.a, xt)),
                    Le || Y._proxies.length && !0 === (0,
                    Y._getProxyProp)(Re, "fixedMarkers") || (re = wt(ee = Fe ? l : Re).position,
                    ee.style.position = "absolute" === re || "fixed" === re ? re : "relative",
                    n.set([S, O], {
                        force3D: !0
                    }),
                    ut = n.quickSetter(S, Ae.a, xt),
                    kt = n.quickSetter(O, Ae.a, xt))
                }
                if (Pe) {
                    var Ge = Pe.vars.onUpdate
                      , Qe = Pe.vars.onUpdateParams;
                    Pe.eventCallback("onUpdate", (function() {
                        Ie.update(0, 0, 1),
                        Ge && Ge.apply(Qe || [])
                    }
                    ))
                }
                Ie.previous = function() {
                    return Nt[Nt.indexOf(Ie) - 1]
                }
                ,
                Ie.next = function() {
                    return Nt[Nt.indexOf(Ie) + 1]
                }
                ,
                Ie.revert = function(t, e) {
                    if (!e)
                        return Ie.kill(!0);
                    var n = !1 !== t || !Ie.enabled
                      , i = g;
                    n !== Ie.isReverted && (n && (Vt = Math.max(Ve(), Ie.scroll.rec || 0),
                    qt = Ie.progress,
                    Kt = r && r.progress()),
                    w && [w, b, S, O].forEach((function(t) {
                        return t.style.display = n ? "none" : "block"
                    }
                    )),
                    n && (g = 1,
                    Ie.update(n)),
                    !me || Oe && Ie.isActive || (n ? function(t, e, r) {
                        se(r);
                        var n = t._gsap;
                        if (n.spacerIsNative)
                            se(n.spacerState);
                        else if (t._gsap.swappedIn) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e),
                            i.removeChild(e))
                        }
                        t._gsap.swappedIn = !1
                    }(me, z, E) : ie(me, z, wt(me), at)),
                    n || Ie.update(n),
                    g = i,
                    Ie.isReverted = n)
                }
                ,
                Ie.refresh = function(o, s) {
                    if (!g && Ie.enabled || s)
                        if (me && o && W)
                            Pt(t, "scrollEnd", Ht);
                        else {
                            !F && We && We(Ie),
                            g = 1,
                            qe = X(),
                            i.tween && (i.tween.kill(),
                            i.tween = 0),
                            Bt && Bt.pause(),
                            xe && r && r.revert({
                                kill: !1
                            }).invalidate(),
                            Ie.isReverted || Ie.revert(!0, !0),
                            Ie._subPinOffset = !1;
                            for (var c, f, p, d, v, y, T, k, A, R, L, N = Ue(), B = je(), I = Pe ? Pe.duration() : $(Re, Ae), U = 0, H = 0, q = e.end, V = e.endTrigger || ve, Q = e.start || (0 !== e.start && ve ? me ? "0 0" : "0 100%" : 0), Z = Ie.pinnedContainer = e.pinnedContainer && (0,
                            Y._getTarget)(e.pinnedContainer), J = ve && Math.max(0, Nt.indexOf(Ie)) || 0, nt = J; nt--; )
                                (y = Nt[nt]).end || y.refresh(0, 1) || (g = 1),
                                !(T = y.pin) || T !== ve && T !== me || y.isReverted || (R || (R = []),
                                R.unshift(y),
                                y.revert(!0, !0)),
                                y !== Nt[nt] && (J--,
                                nt--);
                            for (et(Q) && (Q = Q(Ie)),
                            m = le(Q, ve, N, Ae, Ve(), w, S, Ie, B, Xe, Le, I, Pe) || (me ? -.001 : 0),
                            et(q) && (q = q(Ie)),
                            tt(q) && !q.indexOf("+=") && (~q.indexOf(" ") ? q = (tt(Q) ? Q.split(" ")[0] : "") + q : (U = zt(q.substr(2), N),
                            q = tt(Q) ? Q : m + U,
                            V = ve)),
                            x = Math.max(m, le(q || (V ? "100% 0" : I), V, N, Ae, Ve() + U, b, O, Ie, B, Xe, Le, I, Pe)) || -.001,
                            P = x - m || (m -= .01) && .001,
                            U = 0,
                            nt = J; nt--; )
                                (T = (y = Nt[nt]).pin) && y.start - y._pinPush <= m && !Pe && y.end > 0 && (c = y.end - y.start,
                                (T === ve && y.start - y._pinPush < m || T === Z) && !rt(Q) && (U += c * (1 - y.progress)),
                                T === me && (H += c));
                            if (m += U,
                            x += U,
                            Ie._pinPush = H,
                            w && U && ((c = {})[Ae.a] = "+=" + U,
                            Z && (c[Ae.p] = "-=" + Ve()),
                            n.set([w, b], c)),
                            me)
                                c = wt(me),
                                d = Ae === Y._vertical,
                                p = Ve(),
                                K = parseFloat(j(Ae.a)) + H,
                                !I && x > 1 && ((L = {
                                    style: L = (Fe ? a.scrollingElement || u : Re).style,
                                    value: L["overflow" + Ae.a.toUpperCase()]
                                })["overflow" + Ae.a.toUpperCase()] = "scroll"),
                                ie(me, z, c),
                                D = ae(me),
                                f = Tt(me, !0),
                                k = Le && (0,
                                Y._getScrollFunc)(Re, d ? Y._horizontal : Y._vertical)(),
                                ye && ((at = [ye + Ae.os2, P + H + xt]).t = z,
                                (nt = ye === gt ? Mt(me, Ae) + P + H : 0) && at.push(Ae.d, nt + xt),
                                se(at),
                                Z && Nt.forEach((function(t) {
                                    t.pin === Z && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                }
                                )),
                                Le && Ve(Vt)),
                                Le && ((v = {
                                    top: f.top + (d ? p - m : k) + xt,
                                    left: f.left + (d ? k : p - m) + xt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[ct] = v["max" + mt] = Math.ceil(f.width) + xt,
                                v[ht] = v["max" + yt] = Math.ceil(f.height) + xt,
                                v[vt] = v[vt + dt] = v[vt + ft] = v[vt + _t] = v[vt + pt] = "0",
                                v[gt] = c[gt],
                                v[gt + dt] = c[gt + dt],
                                v[gt + ft] = c[gt + ft],
                                v[gt + _t] = c[gt + _t],
                                v[gt + pt] = c[gt + pt],
                                C = function(t, e, r) {
                                    for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2)
                                        n = t[s],
                                        i.push(n, n in e ? e[n] : t[s + 1]);
                                    return i.t = t.t,
                                    i
                                }(E, v, Oe),
                                F && Ve(0)),
                                r ? (A = r._initted,
                                M(1),
                                r.render(r.duration(), !0, !0),
                                G = j(Ae.a) - K + P + H,
                                lt = Math.abs(P - G) > 1,
                                Le && lt && C.splice(C.length - 2, 2),
                                r.render(0, !0, !0),
                                A || r.invalidate(!0),
                                r.parent || r.totalTime(r.totalTime()),
                                M(0)) : G = P,
                                L && (L.value ? L.style["overflow" + Ae.a.toUpperCase()] = L.value : L.style.removeProperty("overflow-" + Ae.a));
                            else if (ve && Ve() && !Pe)
                                for (f = ve.parentNode; f && f !== l; )
                                    f._pinOffset && (m -= f._pinOffset,
                                    x -= f._pinOffset),
                                    f = f.parentNode;
                            R && R.forEach((function(t) {
                                return t.revert(!1, !0)
                            }
                            )),
                            Ie.start = m,
                            Ie.end = x,
                            h = _ = F ? Vt : Ve(),
                            Pe || F || (h < Vt && Ve(Vt),
                            Ie.scroll.rec = 0),
                            Ie.revert(!1, !0),
                            jt && (He = -1,
                            Ie.isActive && Ve(m + P * qt),
                            jt.restart(!0)),
                            g = 0,
                            r && De && (r._initted || Kt) && r.progress() !== Kt && r.progress(Kt, !0).render(r.time(), !0, !0),
                            (qt !== Ie.progress || Pe) && (r && !De && r.totalProgress(qt, !0),
                            Ie.progress = (h - m) / P === qt ? 0 : qt),
                            me && ye && (z._pinOffset = Math.round(Ie.progress * G)),
                            _e && !F && _e(Ie)
                        }
                }
                ,
                Ie.getVelocity = function() {
                    return (Ve() - _) / (X() - d) * 1e3 || 0
                }
                ,
                Ie.endAnimation = function() {
                    it(Ie.callbackAnimation),
                    r && (Bt ? Bt.progress(1) : r.paused() ? De || it(r, Ie.direction < 0, 1) : it(r, r.reversed()))
                }
                ,
                Ie.labelToScroll = function(t) {
                    return r && r.labels && (m || Ie.refresh() || m) + r.labels[t] / r.duration() * P || 0
                }
                ,
                Ie.getTrailing = function(t) {
                    var e = Nt.indexOf(Ie)
                      , r = Ie.direction > 0 ? Nt.slice(0, e).reverse() : Nt.slice(e + 1);
                    return (tt(t) ? r.filter((function(e) {
                        return e.vars.preventOverlaps === t
                    }
                    )) : r).filter((function(t) {
                        return Ie.direction > 0 ? t.end <= m : t.start >= x
                    }
                    ))
                }
                ,
                Ie.update = function(t, e, n) {
                    if (!Pe || n || t) {
                        var o, s, a, u, c, p, v, y = F ? Vt : Ie.scroll(), w = t ? 0 : (y - m) / P, b = w < 0 ? 0 : w > 1 ? 1 : w || 0, T = Ie.progress;
                        if (e && (_ = h,
                        h = Pe ? Ve() : y,
                        Se && (Lt = Rt,
                        Rt = r && !De ? r.totalProgress() : b)),
                        we && !b && me && !g && !B && W && m < y + (y - _) / (X() - d) * we && (b = 1e-4),
                        b !== T && Ie.enabled) {
                            if (u = (c = (o = Ie.isActive = !!b && b < 1) !== (!!T && T < 1)) || !!b != !!T,
                            Ie.direction = b > T ? 1 : -1,
                            Ie.progress = b,
                            u && !g && (s = b && !T ? 0 : 1 === b ? 1 : 1 === T ? 2 : 3,
                            De && (a = !c && "none" !== Ye[s + 1] && Ye[s + 1] || Ye[s],
                            v = r && ("complete" === a || "reset" === a || a in r))),
                            Ce && (c || v) && (v || ge || !r) && (et(Ce) ? Ce(Ie) : Ie.getTrailing(Ce).forEach((function(t) {
                                return t.endAnimation()
                            }
                            ))),
                            De || (!Bt || g || B ? r && r.totalProgress(b, !!g) : (Bt._dp._time - Bt._start !== Bt._time && Bt.render(Bt._dp._time - Bt._start),
                            Bt.resetTo ? Bt.resetTo("totalProgress", b, r._tTime / r._tDur) : (Bt.vars.totalProgress = b,
                            Bt.invalidate().restart()))),
                            me)
                                if (t && ye && (z.style[ye + Ae.os2] = J),
                                Le) {
                                    if (u) {
                                        if (p = !t && b > T && x + 1 > y && y + 1 >= $(Re, Ae),
                                        Oe)
                                            if (t || !o && !p)
                                                he(me, z);
                                            else {
                                                var M = Tt(me, !0)
                                                  , O = y - m;
                                                he(me, l, M.top + (Ae === Y._vertical ? O : 0) + xt, M.left + (Ae === Y._vertical ? 0 : O) + xt)
                                            }
                                        se(o || p ? C : D),
                                        lt && b < 1 && o || H(K + (1 !== b || p ? 0 : G))
                                    }
                                } else
                                    H(V(K + G * b));
                            Se && !i.tween && !g && !B && jt.restart(!0),
                            ce && (c || Me && b && (b < 1 || !R)) && f(ce.targets).forEach((function(t) {
                                return t.classList[o || Me ? "add" : "remove"](ce.className)
                            }
                            )),
                            oe && !De && !t && oe(Ie),
                            u && !g ? (De && (v && ("complete" === a ? r.pause().totalProgress(1) : "reset" === a ? r.restart(!0).pause() : "restart" === a ? r.restart(!0) : r[a]()),
                            oe && oe(Ie)),
                            !c && R || (de && c && ot(Ie, de),
                            Ne[s] && ot(Ie, Ne[s]),
                            Me && (1 === b ? Ie.kill(!1, 1) : Ne[s] = 0),
                            c || Ne[s = 1 === b ? 1 : 3] && ot(Ie, Ne[s])),
                            Ee && !o && Math.abs(Ie.getVelocity()) > (rt(Ee) ? Ee : 2500) && (it(Ie.callbackAnimation),
                            Bt ? Bt.progress(1) : it(r, "reverse" === a ? 1 : !b, 1))) : De && oe && !g && oe(Ie)
                        }
                        if (kt) {
                            var k = Pe ? y / Pe.duration() * (Pe._caScrollDist || 0) : y;
                            ut(k + (S._isFlipped ? 1 : 0)),
                            kt(k)
                        }
                        Gt && Gt(-y / Pe.duration() * (Pe._caScrollDist || 0))
                    }
                }
                ,
                Ie.enable = function(e, r) {
                    Ie.enabled || (Ie.enabled = !0,
                    Pt(Re, "resize", Wt),
                    Pt(Fe ? a : Re, "scroll", Xt),
                    We && Pt(t, "refreshInit", We),
                    !1 !== e && (Ie.progress = qt = 0,
                    h = _ = He = Ve()),
                    !1 !== r && Ie.refresh())
                }
                ,
                Ie.getTween = function(t) {
                    return t && i ? i.tween : Bt
                }
                ,
                Ie.setPositions = function(t, e) {
                    me && (K += t - m,
                    G += e - t - P,
                    ye === gt && Ie.adjustPinSpacing(e - t - P)),
                    Ie.start = m = t,
                    Ie.end = x = e,
                    P = e - t,
                    Ie.update()
                }
                ,
                Ie.adjustPinSpacing = function(t) {
                    if (at) {
                        var e = at.indexOf(Ae.d) + 1;
                        at[e] = parseFloat(at[e]) + t + xt,
                        at[1] = parseFloat(at[1]) + t + xt,
                        se(at)
                    }
                }
                ,
                Ie.disable = function(e, r) {
                    if (Ie.enabled && (!1 !== e && Ie.revert(!0, !0),
                    Ie.enabled = Ie.isActive = !1,
                    r || Bt && Bt.pause(),
                    Vt = 0,
                    o && (o.uncache = 1),
                    We && Et(t, "refreshInit", We),
                    jt && (jt.pause(),
                    i.tween && i.tween.kill() && (i.tween = 0)),
                    !Fe)) {
                        for (var n = Nt.length; n--; )
                            if (Nt[n].scroller === Re && Nt[n] !== Ie)
                                return;
                        Et(Re, "resize", Wt),
                        Et(Re, "scroll", Xt)
                    }
                }
                ,
                Ie.kill = function(t, n) {
                    Ie.disable(t, n),
                    Bt && !n && Bt.kill(),
                    pe && delete Yt[pe];
                    var i = Nt.indexOf(Ie);
                    i >= 0 && Nt.splice(i, 1),
                    i === y && te > 0 && y--,
                    i = 0,
                    Nt.forEach((function(t) {
                        return t.scroller === Ie.scroller && (i = 1)
                    }
                    )),
                    i || F || (Ie.scroll.rec = 0),
                    r && (r.scrollTrigger = null,
                    t && r.revert({
                        kill: !1
                    }),
                    n || r.kill()),
                    w && [w, b, S, O].forEach((function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    }
                    )),
                    N === Ie && (N = 0),
                    me && (o && (o.uncache = 1),
                    i = 0,
                    Nt.forEach((function(t) {
                        return t.pin === me && i++
                    }
                    )),
                    i || (o.spacer = 0)),
                    e.onKill && e.onKill(Ie)
                }
                ,
                Ie.enable(!1, !1),
                Qt && Qt(Ie),
                r && r.add && !P ? n.delayedCall(.01, (function() {
                    return m || x || Ie.refresh()
                }
                )) && (P = .01) && (m = x = 0) : Ie.refresh(),
                me && function() {
                    if (L !== Zt) {
                        var t = L = Zt;
                        requestAnimationFrame((function() {
                            return t === Zt && $t(!0)
                        }
                        ))
                    }
                }()
            } else
                this.update = this.refresh = this.kill = q
        }
        ,
        t.register = function(e) {
            return i || (n = e || G(),
            K() && window.document && t.enable(),
            i = U),
            i
        }
        ,
        t.defaults = function(t) {
            if (t)
                for (var e in t)
                    Dt[e] = t[e];
            return Dt
        }
        ,
        t.disable = function(t, e) {
            U = 0,
            Nt.forEach((function(r) {
                return r[e ? "kill" : "disable"](t)
            }
            )),
            Et(s, "wheel", Xt),
            Et(a, "scroll", Xt),
            clearInterval(_),
            Et(a, "touchcancel", q),
            Et(l, "touchstart", q),
            kt(Et, a, "pointerdown,touchstart,mousedown", j),
            kt(Et, a, "pointerup,touchend,mouseup", H),
            h.kill(),
            J(Et);
            for (var r = 0; r < Y._scrollers.length; r += 3)
                Ct(Et, Y._scrollers[r], Y._scrollers[r + 1]),
                Ct(Et, Y._scrollers[r], Y._scrollers[r + 2])
        }
        ,
        t.enable = function() {
            if (s = window,
            a = document,
            u = a.documentElement,
            l = a.body,
            n && (f = n.utils.toArray,
            p = n.utils.clamp,
            A = n.core.context || q,
            M = n.core.suppressOverwrites || q,
            D = s.history.scrollRestoration || "auto",
            n.core.globals("ScrollTrigger", t),
            l)) {
                U = 1,
                Y.Observer.register(n),
                t.isTouch = Y.Observer.isTouch,
                C = Y.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                Pt(s, "wheel", Xt),
                c = [s, a, u, l],
                n.matchMedia ? (t.matchMedia = function(t) {
                    var e, r = n.matchMedia();
                    for (e in t)
                        r.add(e, t[e]);
                    return r
                }
                ,
                n.addEventListener("matchMediaInit", (function() {
                    return Gt()
                }
                )),
                n.addEventListener("matchMediaRevert", (function() {
                    return Kt()
                }
                )),
                n.addEventListener("matchMedia", (function() {
                    $t(0, 1),
                    qt("matchMedia")
                }
                )),
                n.matchMedia("(orientation: portrait)", (function() {
                    return It(),
                    It
                }
                ))) : console.warn("Requires GSAP 3.11.0 or later"),
                It(),
                Pt(a, "scroll", Xt);
                var e, r, o = l.style, d = o.borderTopStyle, g = n.core.Animation.prototype;
                for (g.revert || Object.defineProperty(g, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                o.borderTopStyle = "solid",
                e = Tt(l),
                Y._vertical.m = Math.round(e.top + Y._vertical.sc()) || 0,
                Y._horizontal.m = Math.round(e.left + Y._horizontal.sc()) || 0,
                d ? o.borderTopStyle = d : o.removeProperty("border-top-style"),
                _ = setInterval(Bt, 250),
                n.delayedCall(.5, (function() {
                    return B = 0
                }
                )),
                Pt(a, "touchcancel", q),
                Pt(l, "touchstart", q),
                kt(Pt, a, "pointerdown,touchstart,mousedown", j),
                kt(Pt, a, "pointerup,touchend,mouseup", H),
                m = n.utils.checkPrefix("transform"),
                ne.push(m),
                i = X(),
                h = n.delayedCall(.2, $t).pause(),
                b = [a, "visibilitychange", function() {
                    var t = s.innerWidth
                      , e = s.innerHeight;
                    a.hidden ? (x = t,
                    w = e) : x === t && w === e || Wt()
                }
                , a, "DOMContentLoaded", $t, s, "load", $t, s, "resize", Wt],
                J(Pt),
                Nt.forEach((function(t) {
                    return t.enable(0, 1)
                }
                )),
                r = 0; r < Y._scrollers.length; r += 3)
                    Ct(Et, Y._scrollers[r], Y._scrollers[r + 1]),
                    Ct(Et, Y._scrollers[r], Y._scrollers[r + 2])
            }
        }
        ,
        t.config = function(e) {
            "limitCallbacks"in e && (R = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(_) || (_ = r) && setInterval(Bt, r),
            "ignoreMobileResize"in e && (k = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents"in e && (J(Et) || J(Pt, e.autoRefreshEvents || "none"),
            S = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        t.scrollerProxy = function(t, e) {
            var r = (0,
            Y._getTarget)(t)
              , n = Y._scrollers.indexOf(r)
              , i = Q(r);
            ~n && Y._scrollers.splice(n, i ? 6 : 2),
            e && (i ? Y._proxies.unshift(s, e, l, e, u, e) : Y._proxies.unshift(r, e))
        }
        ,
        t.clearMatchMedia = function(t) {
            Nt.forEach((function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            }
            ))
        }
        ,
        t.isInViewport = function(t, e, r) {
            var n = (tt(t) ? (0,
            Y._getTarget)(t) : t).getBoundingClientRect()
              , i = n[r ? ct : ht] * e || 0;
            return r ? n.right - i > 0 && n.left + i < s.innerWidth : n.bottom - i > 0 && n.top + i < s.innerHeight
        }
        ,
        t.positionInViewport = function(t, e, r) {
            tt(t) && (t = (0,
            Y._getTarget)(t));
            var n = t.getBoundingClientRect()
              , i = n[r ? ct : ht]
              , o = null == e ? i / 2 : e in Rt ? Rt[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
            return r ? (n.left + o) / s.innerWidth : (n.top + o) / s.innerHeight
        }
        ,
        t.killAll = function(t) {
            if (Nt.slice(0).forEach((function(t) {
                return "ScrollSmoother" !== t.vars.id && t.kill()
            }
            )),
            !0 !== t) {
                var e = Ut.killAll || [];
                Ut = {},
                e.forEach((function(t) {
                    return t()
                }
                ))
            }
        }
        ,
        t
    }();
    pe.version = "3.11.4",
    pe.saveStyles = function(t) {
        return t ? f(t).forEach((function(t) {
            if (t && t.style) {
                var e = Vt.indexOf(t);
                e >= 0 && Vt.splice(e, 5),
                Vt.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), n.core.getCache(t), A())
            }
        }
        )) : Vt
    }
    ,
    pe.revert = function(t, e) {
        return Gt(!t, e)
    }
    ,
    pe.create = function(t, e) {
        return new pe(t,e)
    }
    ,
    pe.refresh = function(t) {
        return t ? Wt() : (i || pe.register()) && $t(!0)
    }
    ,
    pe.update = function(t) {
        return ++Y._scrollers.cache && ee(!0 === t ? 2 : 0)
    }
    ,
    pe.clearScrollMemory = Qt,
    pe.maxScroll = function(t, e) {
        return $(t, e ? Y._horizontal : Y._vertical)
    }
    ,
    pe.getScrollFunc = function(t, e) {
        return (0,
        Y._getScrollFunc)((0,
        Y._getTarget)(t), e ? Y._horizontal : Y._vertical)
    }
    ,
    pe.getById = function(t) {
        return Yt[t]
    }
    ,
    pe.getAll = function() {
        return Nt.filter((function(t) {
            return "ScrollSmoother" !== t.vars.id
        }
        ))
    }
    ,
    pe.isScrolling = function() {
        return !!W
    }
    ,
    pe.snapDirectional = Ot,
    pe.addEventListener = function(t, e) {
        var r = Ut[t] || (Ut[t] = []);
        ~r.indexOf(e) || r.push(e)
    }
    ,
    pe.removeEventListener = function(t, e) {
        var r = Ut[t]
          , n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    }
    ,
    pe.batch = function(t, e) {
        var r, i = [], o = {}, s = e.interval || .016, a = e.batchMax || 1e9, u = function(t, e) {
            var r = []
              , i = []
              , o = n.delayedCall(s, (function() {
                e(r, i),
                r = [],
                i = []
            }
            )).pause();
            return function(t) {
                r.length || o.restart(!0),
                r.push(t.trigger),
                i.push(t),
                a <= r.length && o.progress(1)
            }
        };
        for (r in e)
            o[r] = "on" === r.substr(0, 2) && et(e[r]) && "onRefreshInit" !== r ? u(0, e[r]) : e[r];
        return et(a) && (a = a(),
        Pt(pe, "refresh", (function() {
            return a = e.batchMax()
        }
        ))),
        f(t).forEach((function(t) {
            var e = {};
            for (r in o)
                e[r] = o[r];
            e.trigger = t,
            i.push(pe.create(e))
        }
        )),
        i
    }
    ;
    var de, _e = function(t, e, r, n) {
        return e > n ? t(n) : e < 0 && t(0),
        r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    }, ge = function t(e, r) {
        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Y.Observer.isTouch ? " pinch-zoom" : "") : "none",
        e === u && t(l, r)
    }, ve = {
        auto: 1,
        scroll: 1
    }, me = function(t) {
        var e, r = t.event, i = t.target, o = t.axis, s = (r.changedTouches ? r.changedTouches[0] : r).target, a = s._gsap || n.core.getCache(s), u = X();
        if (!a._isScrollT || u - a._isScrollT > 2e3) {
            for (; s && s !== l && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !ve[(e = wt(s)).overflowY] && !ve[e.overflowX]); )
                s = s.parentNode;
            a._isScroll = s && s !== i && !Q(s) && (ve[(e = wt(s)).overflowY] || ve[e.overflowX]),
            a._isScrollT = u
        }
        (a._isScroll || "x" === o) && (r.stopPropagation(),
        r._gsapAllow = !0)
    }, ye = function(t, e, r, n) {
        return Y.Observer.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && me,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return r && Pt(a, Y.Observer.eventTypes[0], we, !1, !0)
            },
            onDisable: function() {
                return Et(a, Y.Observer.eventTypes[0], we, !0)
            }
        })
    }, xe = /(input|label|select|textarea)/i, we = function(t) {
        var e = xe.test(t.target.tagName);
        (e || de) && (t._gsapAllow = !0,
        de = e)
    }, be = function(t) {
        nt(t) || (t = {}),
        t.preventDefault = t.isNormalizer = t.allowClicks = !0,
        t.type || (t.type = "wheel,touch"),
        t.debounce = !!t.debounce,
        t.id = t.id || "normalizer";
        var e, r, i, o, a, l, c, h, f = t, d = f.normalizeScrollX, _ = f.momentum, g = f.allowNestedScroll, v = (0,
        Y._getTarget)(t.target) || u, m = n.core.globals().ScrollSmoother, y = m && m.get(), x = C && (t.content && (0,
        Y._getTarget)(t.content) || y && !1 !== t.content && !y.smooth() && y.content()), w = (0,
        Y._getScrollFunc)(v, Y._vertical), b = (0,
        Y._getScrollFunc)(v, Y._horizontal), T = 1, M = (Y.Observer.isTouch && s.visualViewport ? s.visualViewport.scale * s.visualViewport.width : s.outerWidth) / s.innerWidth, S = 0, O = et(_) ? function() {
            return _(e)
        }
        : function() {
            return _ || 2.8
        }
        , k = ye(v, t.type, !0, g), P = function() {
            return o = !1
        }, E = q, A = q, D = function() {
            r = $(v, Y._vertical),
            A = p(C ? 1 : 0, r),
            d && (E = p(0, $(v, Y._horizontal))),
            i = Zt
        }, R = function() {
            x._gsap.y = V(parseFloat(x._gsap.y) + w.offset) + "px",
            x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(x._gsap.y) + ", 0, 1)",
            w.offset = w.cacheID = 0
        }, z = function() {
            D(),
            a.isActive() && a.vars.scrollY > r && (w() > r ? a.progress(1) && w(r) : a.resetTo("scrollY", r))
        };
        return x && n.set(x, {
            y: "+=0"
        }),
        t.ignoreCheck = function(t) {
            return C && "touchmove" === t.type && function() {
                if (o) {
                    requestAnimationFrame(P);
                    var t = V(e.deltaY / 2)
                      , r = A(w.v - t);
                    if (x && r !== w.v + w.offset) {
                        w.offset = r - w.v;
                        var n = V((parseFloat(x && x._gsap.y) || 0) - w.offset);
                        x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)",
                        x._gsap.y = n + "px",
                        w.cacheID = Y._scrollers.cache,
                        ee()
                    }
                    return !0
                }
                w.offset && R(),
                o = !0
            }() || T > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }
        ,
        t.onPress = function() {
            var t = T;
            T = V((s.visualViewport && s.visualViewport.scale || 1) / M),
            a.pause(),
            t !== T && ge(v, T > 1.01 || !d && "x"),
            l = b(),
            c = w(),
            D(),
            i = Zt
        }
        ,
        t.onRelease = t.onGestureStart = function(t, e) {
            if (w.offset && R(),
            e) {
                Y._scrollers.cache++;
                var i, o, s = O();
                d && (o = (i = b()) + .05 * s * -t.velocityX / .227,
                s *= _e(b, i, o, $(v, Y._horizontal)),
                a.vars.scrollX = E(o)),
                o = (i = w()) + .05 * s * -t.velocityY / .227,
                s *= _e(w, i, o, $(v, Y._vertical)),
                a.vars.scrollY = A(o),
                a.invalidate().duration(s).play(.01),
                (C && a.vars.scrollY >= r || i >= r - 1) && n.to({}, {
                    onUpdate: z,
                    duration: s
                })
            } else
                h.restart(!0)
        }
        ,
        t.onWheel = function() {
            a._ts && a.pause(),
            X() - S > 1e3 && (i = 0,
            S = X())
        }
        ,
        t.onChange = function(t, e, r, n, o) {
            if (Zt !== i && D(),
            e && d && b(E(n[2] === e ? l + (t.startX - t.x) : b() + e - n[1])),
            r) {
                w.offset && R();
                var s = o[2] === r
                  , a = s ? c + t.startY - t.y : w() + r - o[1]
                  , u = A(a);
                s && a !== u && (c += u - a),
                w(u)
            }
            (r || e) && ee()
        }
        ,
        t.onEnable = function() {
            ge(v, !d && "x"),
            pe.addEventListener("refresh", z),
            Pt(s, "resize", z),
            w.smooth && (w.target.style.scrollBehavior = "auto",
            w.smooth = b.smooth = !1),
            k.enable()
        }
        ,
        t.onDisable = function() {
            ge(v, !0),
            Et(s, "resize", z),
            pe.removeEventListener("refresh", z),
            k.kill()
        }
        ,
        t.lockAxis = !1 !== t.lockAxis,
        (e = new (0,
        Y.Observer)(t)).iOS = C,
        C && !w() && w(1),
        C && n.ticker.add(q),
        h = e._dc,
        a = n.to(e, {
            ease: "power4",
            paused: !0,
            scrollX: d ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: h.vars.onComplete
        }),
        e
    };
    pe.sort = function(t) {
        return Nt.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    pe.observe = function(t) {
        return new (0,
        Y.Observer)(t)
    }
    ,
    pe.normalizeScroll = function(t) {
        if (void 0 === t)
            return O;
        if (!0 === t && O)
            return O.enable();
        if (!1 === t)
            return O && O.kill();
        var e = t instanceof Y.Observer ? t : be(t);
        return O && O.target === e.target && O.kill(),
        Q(e.target) && (O = e),
        e
    }
    ,
    pe.core = {
        _getVelocityProp: Y._getVelocityProp,
        _inputObserver: ye,
        _scrollers: Y._scrollers,
        _proxies: Y._proxies,
        bridge: {
            ss: function() {
                W || qt("scrollStart"),
                W = X()
            },
            ref: function() {
                return g
            }
        }
    },
    G() && n.registerPlugin(pe)
}
)),
o.register("2lFfT", (function(e, r) {
    function n(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    t(e.exports, "_scrollers", (function() {
        return x
    }
    )),
    t(e.exports, "_proxies", (function() {
        return w
    }
    )),
    t(e.exports, "_getProxyProp", (function() {
        return M
    }
    )),
    t(e.exports, "_horizontal", (function() {
        return D
    }
    )),
    t(e.exports, "_vertical", (function() {
        return R
    }
    )),
    t(e.exports, "_getTarget", (function() {
        return z
    }
    )),
    t(e.exports, "_getScrollFunc", (function() {
        return F
    }
    )),
    t(e.exports, "_getVelocityProp", (function() {
        return L
    }
    )),
    t(e.exports, "Observer", (function() {
        return I
    }
    ));
    /*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var i, o, s, a, u, l, c, h, f, p, d, _, g, v = function() {
        return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
    }, m = 1, y = [], x = [], w = [], b = Date.now, T = function(t, e) {
        return e
    }, M = function(t, e) {
        return ~w.indexOf(t) && w[w.indexOf(t) + 1][e]
    }, S = function(t) {
        return !!~p.indexOf(t)
    }, O = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    }, k = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }, P = "scrollLeft", E = "scrollTop", C = function() {
        return d && d.isPressed || x.cache++
    }, A = function(t, e) {
        var r = function r(n) {
            if (n || 0 === n) {
                m && (s.history.scrollRestoration = "manual");
                var i = d && d.isPressed;
                n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0),
                t(n),
                r.cacheID = x.cache,
                i && T("ss", n)
            } else
                (e || x.cache !== r.cacheID || T("ref")) && (r.cacheID = x.cache,
                r.v = t());
            return r.v + r.offset
        };
        return r.offset = 0,
        t && r
    }, D = {
        s: P,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: A((function(t) {
            return arguments.length ? s.scrollTo(t, R.sc()) : s.pageXOffset || a[P] || u[P] || l[P] || 0
        }
        ))
    }, R = {
        s: E,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: D,
        sc: A((function(t) {
            return arguments.length ? s.scrollTo(D.sc(), t) : s.pageYOffset || a[E] || u[E] || l[E] || 0
        }
        ))
    }, z = function(t) {
        return i.utils.toArray(t)[0] || ("string" == typeof t && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }, F = function(t, e) {
        var r = e.s
          , n = e.sc;
        S(t) && (t = a.scrollingElement || u);
        var o = x.indexOf(t)
          , s = n === R.sc ? 1 : 2;
        !~o && (o = x.push(t) - 1),
        x[o + s] || t.addEventListener("scroll", C);
        var l = x[o + s]
          , c = l || (x[o + s] = A(M(t, r), !0) || (S(t) ? n : A((function(e) {
            return arguments.length ? t[r] = e : t[r]
        }
        ))));
        return c.target = t,
        l || (c.smooth = "smooth" === i.getProperty(t, "scrollBehavior")),
        c
    }, L = function(t, e, r) {
        var n = t
          , i = t
          , o = b()
          , s = o
          , a = e || 50
          , u = Math.max(500, 3 * a)
          , l = function(t, e) {
            var u = b();
            e || u - o > a ? (i = n,
            n = t,
            s = o,
            o = u) : r ? n += t : n = i + (t - i) / (u - s) * (o - s)
        };
        return {
            update: l,
            reset: function() {
                i = n = r ? 0 : n,
                s = o = 0
            },
            getVelocity: function(t) {
                var e = s
                  , a = i
                  , c = b();
                return (t || 0 === t) && t !== n && l(t),
                o === s || c - s > u ? 0 : (n + (r ? a : -a)) / ((r ? c : o) - e) * 1e3
            }
        }
    }, N = function(t, e) {
        return e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
    }, Y = function(t) {
        var e = Math.max.apply(Math, t)
          , r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    }, B = function() {
        var t, e, r, n;
        (f = i.core.globals().ScrollTrigger) && f.core && (t = f.core,
        e = t.bridge || {},
        r = t._scrollers,
        n = t._proxies,
        r.push.apply(r, x),
        n.push.apply(n, w),
        x = r,
        w = n,
        T = function(t, r) {
            return e[t](r)
        }
        )
    }, X = function(t) {
        return (i = t || v()) && "undefined" != typeof document && document.body && (s = window,
        a = document,
        u = a.documentElement,
        l = a.body,
        p = [s, a, u, l],
        i.utils.clamp,
        g = i.core.context || function() {}
        ,
        h = "onpointerenter"in l ? "pointer" : "mouse",
        c = I.isTouch = s.matchMedia && s.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in s || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
        _ = I.eventTypes = ("ontouchstart"in u ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in u ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout((function() {
            return m = 0
        }
        ), 500),
        B(),
        o = 1),
        o
    };
    D.op = R,
    x.cache = 0;
    var I = function() {
        function t(t) {
            this.init(t)
        }
        var e, r, p;
        return t.prototype.init = function(t) {
            o || X(i) || console.warn("Please gsap.registerPlugin(Observer)"),
            f || B();
            var e = t.tolerance
              , r = t.dragMinimum
              , n = t.type
              , p = t.target
              , v = t.lineHeight
              , m = t.debounce
              , x = t.preventDefault
              , w = t.onStop
              , T = t.onStopDelay
              , M = t.ignore
              , P = t.wheelSpeed
              , E = t.event
              , A = t.onDragStart
              , I = t.onDragEnd
              , W = t.onDrag
              , U = t.onPress
              , j = t.onRelease
              , H = t.onRight
              , q = t.onLeft
              , V = t.onUp
              , K = t.onDown
              , G = t.onChangeX
              , Q = t.onChangeY
              , Z = t.onChange
              , $ = t.onToggleX
              , J = t.onToggleY
              , tt = t.onHover
              , et = t.onHoverEnd
              , rt = t.onMove
              , nt = t.ignoreCheck
              , it = t.isNormalizer
              , ot = t.onGestureStart
              , st = t.onGestureEnd
              , at = t.onWheel
              , ut = t.onEnable
              , lt = t.onDisable
              , ct = t.onClick
              , ht = t.scrollSpeed
              , ft = t.capture
              , pt = t.allowClicks
              , dt = t.lockAxis
              , _t = t.onLockAxis;
            this.target = p = z(p) || u,
            this.vars = t,
            M && (M = i.utils.toArray(M)),
            e = e || 1e-9,
            r = r || 0,
            P = P || 1,
            ht = ht || 1,
            n = n || "wheel,touch,pointer",
            m = !1 !== m,
            v || (v = parseFloat(s.getComputedStyle(l).lineHeight) || 22);
            var gt, vt, mt, yt, xt, wt, bt, Tt = this, Mt = 0, St = 0, Ot = F(p, D), kt = F(p, R), Pt = Ot(), Et = kt(), Ct = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === _[0], At = S(p), Dt = p.ownerDocument || a, Rt = [0, 0, 0], zt = [0, 0, 0], Ft = 0, Lt = function() {
                return Ft = b()
            }, Nt = function(t, e) {
                return (Tt.event = t) && M && ~M.indexOf(t.target) || e && Ct && "touch" !== t.pointerType || nt && nt(t, e)
            }, Yt = function() {
                var t = Tt.deltaX = Y(Rt)
                  , r = Tt.deltaY = Y(zt)
                  , n = Math.abs(t) >= e
                  , i = Math.abs(r) >= e;
                Z && (n || i) && Z(Tt, t, r, Rt, zt),
                n && (H && Tt.deltaX > 0 && H(Tt),
                q && Tt.deltaX < 0 && q(Tt),
                G && G(Tt),
                $ && Tt.deltaX < 0 != Mt < 0 && $(Tt),
                Mt = Tt.deltaX,
                Rt[0] = Rt[1] = Rt[2] = 0),
                i && (K && Tt.deltaY > 0 && K(Tt),
                V && Tt.deltaY < 0 && V(Tt),
                Q && Q(Tt),
                J && Tt.deltaY < 0 != St < 0 && J(Tt),
                St = Tt.deltaY,
                zt[0] = zt[1] = zt[2] = 0),
                (yt || mt) && (rt && rt(Tt),
                mt && (W(Tt),
                mt = !1),
                yt = !1),
                wt && (wt = !1,
                1) && _t && _t(Tt),
                xt && (at(Tt),
                xt = !1),
                gt = 0
            }, Bt = function(t, e, r) {
                Rt[r] += t,
                zt[r] += e,
                Tt._vx.update(t),
                Tt._vy.update(e),
                m ? gt || (gt = requestAnimationFrame(Yt)) : Yt()
            }, Xt = function(t, e) {
                dt && !bt && (Tt.axis = bt = Math.abs(t) > Math.abs(e) ? "x" : "y",
                wt = !0),
                "y" !== bt && (Rt[2] += t,
                Tt._vx.update(t, !0)),
                "x" !== bt && (zt[2] += e,
                Tt._vy.update(e, !0)),
                m ? gt || (gt = requestAnimationFrame(Yt)) : Yt()
            }, It = function(t) {
                if (!Nt(t, 1)) {
                    var e = (t = N(t, x)).clientX
                      , n = t.clientY
                      , i = e - Tt.x
                      , o = n - Tt.y
                      , s = Tt.isDragging;
                    Tt.x = e,
                    Tt.y = n,
                    (s || Math.abs(Tt.startX - e) >= r || Math.abs(Tt.startY - n) >= r) && (W && (mt = !0),
                    s || (Tt.isDragging = !0),
                    Xt(i, o),
                    s || A && A(Tt))
                }
            }, Wt = Tt.onPress = function(t) {
                Nt(t, 1) || (Tt.axis = bt = null,
                vt.pause(),
                Tt.isPressed = !0,
                t = N(t),
                Mt = St = 0,
                Tt.startX = Tt.x = t.clientX,
                Tt.startY = Tt.y = t.clientY,
                Tt._vx.reset(),
                Tt._vy.reset(),
                O(it ? p : Dt, _[1], It, x, !0),
                Tt.deltaX = Tt.deltaY = 0,
                U && U(Tt))
            }
            , Ut = function(t) {
                if (!Nt(t, 1)) {
                    k(it ? p : Dt, _[1], It, !0);
                    var e = !isNaN(Tt.y - Tt.startY)
                      , r = Tt.isDragging && (Math.abs(Tt.x - Tt.startX) > 3 || Math.abs(Tt.y - Tt.startY) > 3)
                      , n = N(t);
                    !r && e && (Tt._vx.reset(),
                    Tt._vy.reset(),
                    x && pt && i.delayedCall(.08, (function() {
                        if (b() - Ft > 300 && !t.defaultPrevented)
                            if (t.target.click)
                                t.target.click();
                            else if (Dt.createEvent) {
                                var e = Dt.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, s, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                                t.target.dispatchEvent(e)
                            }
                    }
                    ))),
                    Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1,
                    w && !it && vt.restart(!0),
                    I && r && I(Tt),
                    j && j(Tt, r)
                }
            }, jt = function(t) {
                return t.touches && t.touches.length > 1 && (Tt.isGesturing = !0) && ot(t, Tt.isDragging)
            }, Ht = function() {
                return Tt.isGesturing = !1,
                st(Tt)
            }, qt = function(t) {
                if (!Nt(t)) {
                    var e = Ot()
                      , r = kt();
                    Bt((e - Pt) * ht, (r - Et) * ht, 1),
                    Pt = e,
                    Et = r,
                    w && vt.restart(!0)
                }
            }, Vt = function(t) {
                if (!Nt(t)) {
                    t = N(t, x),
                    at && (xt = !0);
                    var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? s.innerHeight : 1) * P;
                    Bt(t.deltaX * e, t.deltaY * e, 0),
                    w && !it && vt.restart(!0)
                }
            }, Kt = function(t) {
                if (!Nt(t)) {
                    var e = t.clientX
                      , r = t.clientY
                      , n = e - Tt.x
                      , i = r - Tt.y;
                    Tt.x = e,
                    Tt.y = r,
                    yt = !0,
                    (n || i) && Xt(n, i)
                }
            }, Gt = function(t) {
                Tt.event = t,
                tt(Tt)
            }, Qt = function(t) {
                Tt.event = t,
                et(Tt)
            }, Zt = function(t) {
                return Nt(t) || N(t, x) && ct(Tt)
            };
            vt = Tt._dc = i.delayedCall(T || .25, (function() {
                Tt._vx.reset(),
                Tt._vy.reset(),
                vt.pause(),
                w && w(Tt)
            }
            )).pause(),
            Tt.deltaX = Tt.deltaY = 0,
            Tt._vx = L(0, 50, !0),
            Tt._vy = L(0, 50, !0),
            Tt.scrollX = Ot,
            Tt.scrollY = kt,
            Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1,
            g(this),
            Tt.enable = function(t) {
                return Tt.isEnabled || (O(At ? Dt : p, "scroll", C),
                n.indexOf("scroll") >= 0 && O(At ? Dt : p, "scroll", qt, x, ft),
                n.indexOf("wheel") >= 0 && O(p, "wheel", Vt, x, ft),
                (n.indexOf("touch") >= 0 && c || n.indexOf("pointer") >= 0) && (O(p, _[0], Wt, x, ft),
                O(Dt, _[2], Ut),
                O(Dt, _[3], Ut),
                pt && O(p, "click", Lt, !1, !0),
                ct && O(p, "click", Zt),
                ot && O(Dt, "gesturestart", jt),
                st && O(Dt, "gestureend", Ht),
                tt && O(p, h + "enter", Gt),
                et && O(p, h + "leave", Qt),
                rt && O(p, h + "move", Kt)),
                Tt.isEnabled = !0,
                t && t.type && Wt(t),
                ut && ut(Tt)),
                Tt
            }
            ,
            Tt.disable = function() {
                Tt.isEnabled && (y.filter((function(t) {
                    return t !== Tt && S(t.target)
                }
                )).length || k(At ? Dt : p, "scroll", C),
                Tt.isPressed && (Tt._vx.reset(),
                Tt._vy.reset(),
                k(it ? p : Dt, _[1], It, !0)),
                k(At ? Dt : p, "scroll", qt, ft),
                k(p, "wheel", Vt, ft),
                k(p, _[0], Wt, ft),
                k(Dt, _[2], Ut),
                k(Dt, _[3], Ut),
                k(p, "click", Lt, !0),
                k(p, "click", Zt),
                k(Dt, "gesturestart", jt),
                k(Dt, "gestureend", Ht),
                k(p, h + "enter", Gt),
                k(p, h + "leave", Qt),
                k(p, h + "move", Kt),
                Tt.isEnabled = Tt.isPressed = Tt.isDragging = !1,
                lt && lt(Tt))
            }
            ,
            Tt.kill = Tt.revert = function() {
                Tt.disable();
                var t = y.indexOf(Tt);
                t >= 0 && y.splice(t, 1),
                d === Tt && (d = 0)
            }
            ,
            y.push(Tt),
            it && S(p) && (d = Tt),
            Tt.enable(E)
        }
        ,
        e = t,
        (r = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]) && n(e.prototype, r),
        p && n(e, p),
        t
    }();
    I.version = "3.11.4",
    I.create = function(t) {
        return new I(t)
    }
    ,
    I.register = X,
    I.getAll = function() {
        return y.slice()
    }
    ,
    I.getById = function(t) {
        return y.filter((function(e) {
            return e.vars.id === t
        }
        ))[0]
    }
    ,
    v() && i.registerPlugin(I)
}
)),
o.register("jPLxl", (function(t, e) {
    t.exports,
    t.exports = function() {
        var t = document
          , e = t.createTextNode.bind(t);
        function r(t, e, r) {
            t.style.setProperty(e, r)
        }
        function n(t, e) {
            return t.appendChild(e)
        }
        function i(e, r, i, o) {
            var s = t.createElement("span");
            return r && (s.className = r),
            i && (!o && s.setAttribute("data-" + r, i),
            s.textContent = i),
            e && n(e, s) || s
        }
        function o(t, e) {
            return t.getAttribute("data-" + e)
        }
        function s(e, r) {
            return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e)) : []
        }
        function a(t) {
            for (var e = []; t--; )
                e[t] = [];
            return e
        }
        function u(t, e) {
            t && t.some(e)
        }
        function l(t) {
            return function(e) {
                return t[e]
            }
        }
        function c(t, e, n) {
            var i = "--" + e
              , o = i + "-index";
            u(n, (function(t, e) {
                Array.isArray(t) ? u(t, (function(t) {
                    r(t, o, e)
                }
                )) : r(t, o, e)
            }
            )),
            r(t, i + "-total", n.length)
        }
        var h = {};
        function f(t, e, r) {
            var n = r.indexOf(t);
            if (-1 == n)
                r.unshift(t),
                u(h[t].depends, (function(e) {
                    f(e, t, r)
                }
                ));
            else {
                var i = r.indexOf(e);
                r.splice(n, 1),
                r.splice(i, 0, t)
            }
            return r
        }
        function p(t, e, r, n) {
            return {
                by: t,
                depends: e,
                key: r,
                split: n
            }
        }
        function d(t) {
            return f(t, 0, []).map(l(h))
        }
        function _(t) {
            h[t.by] = t
        }
        function g(t, r, o, a, l) {
            t.normalize();
            var c = []
              , h = document.createDocumentFragment();
            a && c.push(t.previousSibling);
            var f = [];
            return s(t.childNodes).some((function(t) {
                if (!t.tagName || t.hasChildNodes()) {
                    if (t.childNodes && t.childNodes.length)
                        return f.push(t),
                        void c.push.apply(c, g(t, r, o, a, l));
                    var n = t.wholeText || ""
                      , s = n.trim();
                    s.length && (" " === n[0] && f.push(e(" ")),
                    u(s.split(o), (function(t, e) {
                        e && l && f.push(i(h, "whitespace", " ", l));
                        var n = i(h, r, t);
                        c.push(n),
                        f.push(n)
                    }
                    )),
                    " " === n[n.length - 1] && f.push(e(" ")))
                } else
                    f.push(t)
            }
            )),
            u(f, (function(t) {
                n(h, t)
            }
            )),
            t.innerHTML = "",
            n(t, h),
            c
        }
        var v = 0;
        function m(t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        }
        var y = "words"
          , x = p(y, v, "word", (function(t) {
            return g(t, "word", /\s+/, 0, 1)
        }
        ))
          , w = "chars"
          , b = p(w, [y], "char", (function(t, e, r) {
            var n = [];
            return u(r[y], (function(t, r) {
                n.push.apply(n, g(t, "char", "", e.whitespace && r))
            }
            )),
            n
        }
        ));
        function T(t) {
            var e = (t = t || {}).key;
            return s(t.target || "[data-splitting]").map((function(r) {
                var n = r["🍌"];
                if (!t.force && n)
                    return n;
                n = r["🍌"] = {
                    el: r
                };
                var i = d(t.by || o(r, "splitting") || w)
                  , s = m({}, t);
                return u(i, (function(t) {
                    if (t.split) {
                        var i = t.by
                          , o = (e ? "-" + e : "") + t.key
                          , a = t.split(r, s, n);
                        o && c(r, o, a),
                        n[i] = a,
                        r.classList.add(i)
                    }
                }
                )),
                r.classList.add("splitting"),
                n
            }
            ))
        }
        function M(t) {
            var e = (t = t || {}).target = i();
            return e.innerHTML = t.content,
            T(t),
            e.outerHTML
        }
        function S(t, e, r) {
            var n = s(e.matching || t.children, t)
              , i = {};
            return u(n, (function(t) {
                var e = Math.round(t[r]);
                (i[e] || (i[e] = [])).push(t)
            }
            )),
            Object.keys(i).map(Number).sort(O).map(l(i))
        }
        function O(t, e) {
            return t - e
        }
        T.html = M,
        T.add = _;
        var k = p("lines", [y], "line", (function(t, e, r) {
            return S(t, {
                matching: r[y]
            }, "offsetTop")
        }
        ))
          , P = p("items", v, "item", (function(t, e) {
            return s(e.matching || t.children, t)
        }
        ))
          , E = p("rows", v, "row", (function(t, e) {
            return S(t, e, "offsetTop")
        }
        ))
          , C = p("cols", v, "col", (function(t, e) {
            return S(t, e, "offsetLeft")
        }
        ))
          , A = p("grid", ["rows", "cols"])
          , D = "layout"
          , R = p(D, v, v, (function(t, e) {
            var a = e.rows = +(e.rows || o(t, "rows") || 1)
              , u = e.columns = +(e.columns || o(t, "columns") || 1);
            if (e.image = e.image || o(t, "image") || t.currentSrc || t.src,
            e.image) {
                var l = s("img", t)[0];
                e.image = l && (l.currentSrc || l.src)
            }
            e.image && r(t, "background-image", "url(" + e.image + ")");
            for (var c = a * u, h = [], f = i(v, "cell-grid"); c--; ) {
                var p = i(f, "cell");
                i(p, "cell-inner"),
                h.push(p)
            }
            return n(t, f),
            h
        }
        ))
          , z = p("cellRows", [D], "row", (function(t, e, r) {
            var n = e.rows
              , i = a(n);
            return u(r[D], (function(t, e, r) {
                i[Math.floor(e / (r.length / n))].push(t)
            }
            )),
            i
        }
        ))
          , F = p("cellColumns", [D], "col", (function(t, e, r) {
            var n = e.columns
              , i = a(n);
            return u(r[D], (function(t, e) {
                i[e % n].push(t)
            }
            )),
            i
        }
        ))
          , L = p("cells", ["cellRows", "cellColumns"], "cell", (function(t, e, r) {
            return r[D]
        }
        ));
        return _(x),
        _(b),
        _(k),
        _(P),
        _(E),
        _(C),
        _(A),
        _(R),
        _(z),
        _(F),
        _(L),
        T
    }()
}
));
