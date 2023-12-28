"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2205], {
        87760: function(e, n, t) {
            t.d(n, {
                Ry: function() {
                    return l
                }
            });
            var r = function(e) {
                    return "undefined" === typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                o = new WeakMap,
                a = new WeakMap,
                c = {},
                u = 0,
                i = function(e) {
                    return e && (e.host || i(e.parentNode))
                },
                s = function(e, n, t, r) {
                    var s = function(e, n) {
                        return n.map((function(n) {
                            if (e.contains(n)) return n;
                            var t = i(n);
                            return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
                        })).filter((function(e) {
                            return Boolean(e)
                        }))
                    }(n, Array.isArray(e) ? e : [e]);
                    c[t] || (c[t] = new WeakMap);
                    var l = c[t],
                        d = [],
                        f = new Set,
                        v = new Set(s),
                        p = function(e) {
                            e && !f.has(e) && (f.add(e), p(e.parentNode))
                        };
                    s.forEach(p);
                    var m = function(e) {
                        e && !v.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                            if (f.has(e)) m(e);
                            else {
                                var n = e.getAttribute(r),
                                    c = null !== n && "false" !== n,
                                    u = (o.get(e) || 0) + 1,
                                    i = (l.get(e) || 0) + 1;
                                o.set(e, u), l.set(e, i), d.push(e), 1 === u && c && a.set(e, !0), 1 === i && e.setAttribute(t, "true"), c || e.setAttribute(r, "true")
                            }
                        }))
                    };
                    return m(n), f.clear(), u++,
                        function() {
                            d.forEach((function(e) {
                                var n = o.get(e) - 1,
                                    c = l.get(e) - 1;
                                o.set(e, n), l.set(e, c), n || (a.has(e) || e.removeAttribute(r), a.delete(e)), c || e.removeAttribute(t)
                            })), --u || (o = new WeakMap, o = new WeakMap, a = new WeakMap, c = {})
                        }
                },
                l = function(e, n, t) {
                    void 0 === t && (t = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        a = n || r(e);
                    return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), s(o, a, t, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        52886: function(e, n, t) {
            t.d(n, {
                Av: function() {
                    return c
                },
                pF: function() {
                    return r
                },
                xv: function() {
                    return a
                },
                zi: function() {
                    return o
                }
            });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                c = "--removed-body-scroll-bar-size"
        },
        81655: function(e, n, t) {
            t.d(n, {
                jp: function() {
                    return d
                }
            });
            var r = t(64386),
                o = t(13086),
                a = t(52886),
                c = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                u = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                i = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" === typeof window) return c;
                    var n = function(e) {
                            var n = window.getComputedStyle(document.body),
                                t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = n["padding" === e ? "paddingTop" : "marginTop"],
                                o = n["padding" === e ? "paddingRight" : "marginRight"];
                            return [u(t), u(r), u(o)]
                        }(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: n[0],
                        top: n[1],
                        right: n[2],
                        gap: Math.max(0, r - t + n[2] - n[0])
                    }
                },
                s = (0, o.Ws)(),
                l = function(e, n, t, r) {
                    var o = e.left,
                        c = e.top,
                        u = e.right,
                        i = e.gap;
                    return void 0 === t && (t = "margin"), "\n  .".concat(a.xv, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a.pF, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(a.zi, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(a.pF, " .").concat(a.pF, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(a.zi, " .").concat(a.zi, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat(a.Av, ": ").concat(i, "px;\n  }\n")
                },
                d = function(e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        o = e.gapMode,
                        a = void 0 === o ? "margin" : o,
                        c = r.useMemo((function() {
                            return i(a)
                        }), [a]);
                    return r.createElement(s, {
                        styles: l(c, !n, a, t ? "" : "!important")
                    })
                }
        },
        55753: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return x
                }
            });
            var r = t(3173),
                o = t(64386),
                a = t(52886),
                c = t(75874),
                u = (0, t(92289)._)(),
                i = function() {},
                s = o.forwardRef((function(e, n) {
                    var t = o.useRef(null),
                        a = o.useState({
                            onScrollCapture: i,
                            onWheelCapture: i,
                            onTouchMoveCapture: i
                        }),
                        s = a[0],
                        l = a[1],
                        d = e.forwardProps,
                        f = e.children,
                        v = e.className,
                        p = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        g = e.sideCar,
                        E = e.noIsolation,
                        y = e.inert,
                        b = e.allowPinchZoom,
                        w = e.as,
                        C = void 0 === w ? "div" : w,
                        _ = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        A = g,
                        R = (0, c.q)([t, n]),
                        P = (0, r.__assign)((0, r.__assign)({}, _), s);
                    return o.createElement(o.Fragment, null, m && o.createElement(A, {
                        sideCar: u,
                        removeScrollBar: p,
                        shards: h,
                        noIsolation: E,
                        inert: y,
                        setCallbacks: l,
                        allowPinchZoom: !!b,
                        lockRef: t
                    }), d ? o.cloneElement(o.Children.only(f), (0, r.__assign)((0, r.__assign)({}, P), {
                        ref: R
                    })) : o.createElement(C, (0, r.__assign)({}, P, {
                        className: v,
                        ref: R
                    }), f))
                }));
            s.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, s.classNames = {
                fullWidth: a.zi,
                zeroRight: a.pF
            };
            var l = t(92016),
                d = t(81655),
                f = t(13086),
                v = !1;
            if ("undefined" !== typeof window) try {
                var p = Object.defineProperty({}, "passive", {
                    get: function() {
                        return v = !0, !0
                    }
                });
                window.addEventListener("test", p, p), window.removeEventListener("test", p, p)
            } catch (S) {
                v = !1
            }
            var m = !!v && {
                    passive: !1
                },
                h = function(e, n) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
                        return "TEXTAREA" === e.tagName
                    }(e) && "visible" === t[n])
                },
                g = function(e, n) {
                    var t = n;
                    do {
                        if ("undefined" !== typeof ShadowRoot && t instanceof ShadowRoot && (t = t.host), E(e, t)) {
                            var r = y(e, t);
                            if (r[1] > r[2]) return !0
                        }
                        t = t.parentNode
                    } while (t && t !== document.body);
                    return !1
                },
                E = function(e, n) {
                    return "v" === e ? function(e) {
                        return h(e, "overflowY")
                    }(n) : function(e) {
                        return h(e, "overflowX")
                    }(n)
                },
                y = function(e, n) {
                    return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
                        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
                    }(n);
                    var t
                },
                b = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                w = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                C = function(e) {
                    return e && "current" in e ? e.current : e
                },
                _ = function(e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
                },
                A = 0,
                R = [];
            var P = (0, l.L)(u, (function(e) {
                    var n = o.useRef([]),
                        t = o.useRef([0, 0]),
                        a = o.useRef(),
                        c = o.useState(A++)[0],
                        u = o.useState((function() {
                            return (0, f.Ws)()
                        }))[0],
                        i = o.useRef(e);
                    o.useEffect((function() {
                        i.current = e
                    }), [e]), o.useEffect((function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(c));
                            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(C), !0).filter(Boolean);
                            return n.forEach((function(e) {
                                    return e.classList.add("allow-interactivity-".concat(c))
                                })),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(c)), n.forEach((function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(c))
                                    }))
                                }
                        }
                    }), [e.inert, e.lockRef.current, e.shards]);
                    var s = o.useCallback((function(e, n) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var r, o = b(e),
                                c = t.current,
                                u = "deltaX" in e ? e.deltaX : c[0] - o[0],
                                s = "deltaY" in e ? e.deltaY : c[1] - o[1],
                                l = e.target,
                                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === l.type) return !1;
                            var f = g(d, l);
                            if (!f) return !0;
                            if (f ? r = d : (r = "v" === d ? "h" : "v", f = g(d, l)), !f) return !1;
                            if (!a.current && "changedTouches" in e && (u || s) && (a.current = r), !r) return !0;
                            var v = a.current || r;
                            return function(e, n, t, r, o) {
                                var a = function(e, n) {
                                        return "h" === e && "rtl" === n ? -1 : 1
                                    }(e, window.getComputedStyle(n).direction),
                                    c = a * r,
                                    u = t.target,
                                    i = n.contains(u),
                                    s = !1,
                                    l = c > 0,
                                    d = 0,
                                    f = 0;
                                do {
                                    var v = y(e, u),
                                        p = v[0],
                                        m = v[1] - v[2] - a * p;
                                    (p || m) && E(e, u) && (d += m, f += p), u = u.parentNode
                                } while (!i && u !== document.body || i && (n.contains(u) || n === u));
                                return (l && (o && 0 === d || !o && c > d) || !l && (o && 0 === f || !o && -c > f)) && (s = !0), s
                            }(v, n, e, "h" === v ? u : s, !0)
                        }), []),
                        l = o.useCallback((function(e) {
                            var t = e;
                            if (R.length && R[R.length - 1] === u) {
                                var r = "deltaY" in t ? w(t) : b(t),
                                    o = n.current.filter((function(e) {
                                        return e.name === t.type && e.target === t.target && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                                        var n, o
                                    }))[0];
                                if (o && o.should) t.cancelable && t.preventDefault();
                                else if (!o) {
                                    var a = (i.current.shards || []).map(C).filter(Boolean).filter((function(e) {
                                        return e.contains(t.target)
                                    }));
                                    (a.length > 0 ? s(t, a[0]) : !i.current.noIsolation) && t.cancelable && t.preventDefault()
                                }
                            }
                        }), []),
                        v = o.useCallback((function(e, t, r, o) {
                            var a = {
                                name: e,
                                delta: t,
                                target: r,
                                should: o
                            };
                            n.current.push(a), setTimeout((function() {
                                n.current = n.current.filter((function(e) {
                                    return e !== a
                                }))
                            }), 1)
                        }), []),
                        p = o.useCallback((function(e) {
                            t.current = b(e), a.current = void 0
                        }), []),
                        h = o.useCallback((function(n) {
                            v(n.type, w(n), n.target, s(n, e.lockRef.current))
                        }), []),
                        P = o.useCallback((function(n) {
                            v(n.type, b(n), n.target, s(n, e.lockRef.current))
                        }), []);
                    o.useEffect((function() {
                        return R.push(u), e.setCallbacks({
                                onScrollCapture: h,
                                onWheelCapture: h,
                                onTouchMoveCapture: P
                            }), document.addEventListener("wheel", l, m), document.addEventListener("touchmove", l, m), document.addEventListener("touchstart", p, m),
                            function() {
                                R = R.filter((function(e) {
                                    return e !== u
                                })), document.removeEventListener("wheel", l, m), document.removeEventListener("touchmove", l, m), document.removeEventListener("touchstart", p, m)
                            }
                    }), []);
                    var k = e.removeScrollBar,
                        x = e.inert;
                    return o.createElement(o.Fragment, null, x ? o.createElement(u, {
                        styles: _(c)
                    }) : null, k ? o.createElement(d.jp, {
                        gapMode: "margin"
                    }) : null)
                })),
                k = o.forwardRef((function(e, n) {
                    return o.createElement(s, (0, r.__assign)({}, e, {
                        ref: n,
                        sideCar: P
                    }))
                }));
            k.classNames = s.classNames;
            var x = k
        },
        13086: function(e, n, t) {
            t.d(n, {
                Ws: function() {
                    return u
                }
            });
            var r, o = t(64386);

            function a() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = r || t.nc;
                return n && e.setAttribute("nonce", n), e
            }
            var c = function() {
                    var e = 0,
                        n = null;
                    return {
                        add: function(t) {
                            var r, o;
                            0 == e && (n = a()) && (o = t, (r = n).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(n)), e++
                        },
                        remove: function() {
                            !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                u = function() {
                    var e = function() {
                        var e = c();
                        return function(n, t) {
                            o.useEffect((function() {
                                return e.add(n),
                                    function() {
                                        e.remove()
                                    }
                            }), [n && t])
                        }
                    }();
                    return function(n) {
                        var t = n.styles,
                            r = n.dynamic;
                        return e(t, r), null
                    }
                }
        },
        75874: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return o
                }
            });
            var r = t(64386);

            function o(e, n) {
                return function(e, n) {
                    var t = (0, r.useState)((function() {
                        return {
                            value: e,
                            callback: n,
                            facade: {
                                get current() {
                                    return t.value
                                },
                                set current(e) {
                                    var n = t.value;
                                    n !== e && (t.value = e, t.callback(e, n))
                                }
                            }
                        }
                    }))[0];
                    return t.callback = n, t.facade
                }(n || null, (function(n) {
                    return e.forEach((function(e) {
                        return function(e, n) {
                            return "function" === typeof e ? e(n) : e && (e.current = n), e
                        }(e, n)
                    }))
                }))
            }
        },
        92016: function(e, n, t) {
            t.d(n, {
                L: function() {
                    return c
                }
            });
            var r = t(3173),
                o = t(64386),
                a = function(e) {
                    var n = e.sideCar,
                        t = (0, r.__rest)(e, ["sideCar"]);
                    if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var a = n.read();
                    if (!a) throw new Error("Sidecar medium not found");
                    return o.createElement(a, (0, r.__assign)({}, t))
                };

            function c(e, n) {
                return e.useMedium(n), a
            }
            a.isSideCarExport = !0
        },
        92289: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return c
                }
            });
            var r = t(3173);

            function o(e) {
                return e
            }

            function a(e, n) {
                void 0 === n && (n = o);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = n(e, r);
                        return t.push(o),
                            function() {
                                t = t.filter((function(e) {
                                    return e !== o
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; t.length;) {
                            var n = t;
                            t = [], n.forEach(e)
                        }
                        t = {
                            push: function(n) {
                                return e(n)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var n = [];
                        if (t.length) {
                            var o = t;
                            t = [], o.forEach(e), n = t
                        }
                        var a = function() {
                                var t = n;
                                n = [], t.forEach(e)
                            },
                            c = function() {
                                return Promise.resolve().then(a)
                            };
                        c(), t = {
                            push: function(e) {
                                n.push(e), c()
                            },
                            filter: function(e) {
                                return n = n.filter(e), t
                            }
                        }
                    }
                }
            }

            function c(e) {
                void 0 === e && (e = {});
                var n = a(null);
                return n.options = (0, r.__assign)({
                    async: !0,
                    ssr: !1
                }, e), n
            }
        },
        64437: function(e, n, t) {
            t.d(n, {
                EW: function() {
                    return a
                }
            });
            var r = t(64386);
            let o = 0;

            function a() {
                (0, r.useEffect)((() => {
                    var e, n;
                    const t = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = t[0]) && void 0 !== e ? e : c()), document.body.insertAdjacentElement("beforeend", null !== (n = t[1]) && void 0 !== n ? n : c()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
                    }
                }), [])
            }

            function c() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        43700: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return d
                }
            });
            var r = t(66869),
                o = t(64386),
                a = t(51678),
                c = t(28305),
                u = t(97474);
            const i = "focusScope.autoFocusOnMount",
                s = "focusScope.autoFocusOnUnmount",
                l = {
                    bubbles: !1,
                    cancelable: !0
                },
                d = (0, o.forwardRef)(((e, n) => {
                    const {
                        loop: t = !1,
                        trapped: d = !1,
                        onMountAutoFocus: p,
                        onUnmountAutoFocus: g,
                        ...E
                    } = e, [y, b] = (0, o.useState)(null), w = (0, u.W)(p), C = (0, u.W)(g), _ = (0, o.useRef)(null), A = (0, a.e)(n, (e => b(e))), R = (0, o.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, o.useEffect)((() => {
                        if (d) {
                            function e(e) {
                                if (R.paused || !y) return;
                                const n = e.target;
                                y.contains(n) ? _.current = n : m(_.current, {
                                    select: !0
                                })
                            }

                            function n(e) {
                                if (R.paused || !y) return;
                                const n = e.relatedTarget;
                                null !== n && (y.contains(n) || m(_.current, {
                                    select: !0
                                }))
                            }

                            function t(e) {
                                if (document.activeElement === document.body)
                                    for (const n of e) n.removedNodes.length > 0 && m(y)
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", n);
                            const r = new MutationObserver(t);
                            return y && r.observe(y, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", n), r.disconnect()
                            }
                        }
                    }), [d, y, R.paused]), (0, o.useEffect)((() => {
                        if (y) {
                            h.add(R);
                            const n = document.activeElement;
                            if (!y.contains(n)) {
                                const t = new CustomEvent(i, l);
                                y.addEventListener(i, w), y.dispatchEvent(t), t.defaultPrevented || (! function(e, {
                                    select: n = !1
                                } = {}) {
                                    const t = document.activeElement;
                                    for (const r of e)
                                        if (m(r, {
                                                select: n
                                            }), document.activeElement !== t) return
                                }((e = f(y), e.filter((e => "A" !== e.tagName))), {
                                    select: !0
                                }), document.activeElement === n && m(y))
                            }
                            return () => {
                                y.removeEventListener(i, w), setTimeout((() => {
                                    const e = new CustomEvent(s, l);
                                    y.addEventListener(s, C), y.dispatchEvent(e), e.defaultPrevented || m(null !== n && void 0 !== n ? n : document.body, {
                                        select: !0
                                    }), y.removeEventListener(s, C), h.remove(R)
                                }), 0)
                            }
                        }
                        var e
                    }), [y, w, C, R]);
                    const P = (0, o.useCallback)((e => {
                        if (!t && !d) return;
                        if (R.paused) return;
                        const n = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            r = document.activeElement;
                        if (n && r) {
                            const n = e.currentTarget,
                                [o, a] = function(e) {
                                    const n = f(e),
                                        t = v(n, e),
                                        r = v(n.reverse(), e);
                                    return [t, r]
                                }(n);
                            o && a ? e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), t && m(a, {
                                select: !0
                            })) : (e.preventDefault(), t && m(o, {
                                select: !0
                            })) : r === n && e.preventDefault()
                        }
                    }), [t, d, R.paused]);
                    return (0, o.createElement)(c.WV.div, (0, r.Z)({
                        tabIndex: -1
                    }, E, {
                        ref: A,
                        onKeyDown: P
                    }))
                }));

            function f(e) {
                const n = [],
                    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            const n = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; t.nextNode();) n.push(t.currentNode);
                return n
            }

            function v(e, n) {
                for (const t of e)
                    if (!p(t, {
                            upTo: n
                        })) return t
            }

            function p(e, {
                upTo: n
            }) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e;) {
                    if (void 0 !== n && e === n) return !1;
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement
                }
                return !1
            }

            function m(e, {
                select: n = !1
            } = {}) {
                if (e && e.focus) {
                    const t = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== t && function(e) {
                        return e instanceof HTMLInputElement && "select" in e
                    }(e) && n && e.select()
                }
            }
            const h = function() {
                let e = [];
                return {
                    add(n) {
                        const t = e[0];
                        n !== t && (null === t || void 0 === t || t.pause()), e = g(e, n), e.unshift(n)
                    },
                    remove(n) {
                        var t;
                        e = g(e, n), null === (t = e[0]) || void 0 === t || t.resume()
                    }
                }
            }();

            function g(e, n) {
                const t = [...e],
                    r = t.indexOf(n);
                return -1 !== r && t.splice(r, 1), t
            }
        },
        53268: function(e, n, t) {
            t.d(n, {
                VY: function() {
                    return z
                },
                fC: function() {
                    return Z
                },
                h_: function() {
                    return K
                },
                xz: function() {
                    return B
                }
            });
            var r = t(66869),
                o = t(64386),
                a = t(98346),
                c = t(51678),
                u = t(66744),
                i = t(93001),
                s = t(64437),
                l = t(43700),
                d = t(62948),
                f = t(76286),
                v = t(20103),
                p = t(49114),
                m = t(28305),
                h = t(97772),
                g = t(82949),
                E = t(87760),
                y = t(55753);
            const b = "Popover",
                [w, C] = (0, u.b)(b, [f.D7]),
                _ = (0, f.D7)(),
                [A, R] = w(b),
                P = e => {
                    const {
                        __scopePopover: n,
                        children: t,
                        open: r,
                        defaultOpen: a,
                        onOpenChange: c,
                        modal: u = !1
                    } = e, i = _(n), s = (0, o.useRef)(null), [l, v] = (0, o.useState)(!1), [p = !1, m] = (0, g.T)({
                        prop: r,
                        defaultProp: a,
                        onChange: c
                    });
                    return (0, o.createElement)(f.fC, i, (0, o.createElement)(A, {
                        scope: n,
                        contentId: (0, d.M)(),
                        triggerRef: s,
                        open: p,
                        onOpenChange: m,
                        onOpenToggle: (0, o.useCallback)((() => m((e => !e))), [m]),
                        hasCustomAnchor: l,
                        onCustomAnchorAdd: (0, o.useCallback)((() => v(!0)), []),
                        onCustomAnchorRemove: (0, o.useCallback)((() => v(!1)), []),
                        modal: u
                    }, t))
                },
                k = "PopoverTrigger",
                x = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopePopover: t,
                        ...u
                    } = e, i = R(k, t), s = _(t), l = (0, c.e)(n, i.triggerRef), d = (0, o.createElement)(m.WV.button, (0, r.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": I(i.open)
                    }, u, {
                        ref: l,
                        onClick: (0, a.M)(e.onClick, i.onOpenToggle)
                    }));
                    return i.hasCustomAnchor ? d : (0, o.createElement)(f.ee, (0, r.Z)({
                        asChild: !0
                    }, s), d)
                })),
                S = "PopoverPortal",
                [M, F] = w(S, {
                    forceMount: void 0
                }),
                T = e => {
                    const {
                        __scopePopover: n,
                        forceMount: t,
                        children: r,
                        container: a
                    } = e, c = R(S, n);
                    return (0, o.createElement)(M, {
                        scope: n,
                        forceMount: t
                    }, (0, o.createElement)(p.z, {
                        present: t || c.open
                    }, (0, o.createElement)(v.h, {
                        asChild: !0,
                        container: a
                    }, r)))
                },
                L = "PopoverContent",
                N = (0, o.forwardRef)(((e, n) => {
                    const t = F(L, e.__scopePopover),
                        {
                            forceMount: a = t.forceMount,
                            ...c
                        } = e,
                        u = R(L, e.__scopePopover);
                    return (0, o.createElement)(p.z, {
                        present: a || u.open
                    }, u.modal ? (0, o.createElement)(O, (0, r.Z)({}, c, {
                        ref: n
                    })) : (0, o.createElement)(D, (0, r.Z)({}, c, {
                        ref: n
                    })))
                })),
                O = (0, o.forwardRef)(((e, n) => {
                    const t = R(L, e.__scopePopover),
                        u = (0, o.useRef)(null),
                        i = (0, c.e)(n, u),
                        s = (0, o.useRef)(!1);
                    return (0, o.useEffect)((() => {
                        const e = u.current;
                        if (e) return (0, E.Ry)(e)
                    }), []), (0, o.createElement)(y.Z, {
                        as: h.g7,
                        allowPinchZoom: !0
                    }, (0, o.createElement)(W, (0, r.Z)({}, e, {
                        ref: i,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e => {
                            var n;
                            e.preventDefault(), s.current || null === (n = t.triggerRef.current) || void 0 === n || n.focus()
                        })),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e => {
                            const n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey,
                                r = 2 === n.button || t;
                            s.current = r
                        }), {
                            checkForDefaultPrevented: !1
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, (e => e.preventDefault()), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                })),
                D = (0, o.forwardRef)(((e, n) => {
                    const t = R(L, e.__scopePopover),
                        a = (0, o.useRef)(!1),
                        c = (0, o.useRef)(!1);
                    return (0, o.createElement)(W, (0, r.Z)({}, e, {
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: n => {
                            var r, o;
                            (null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, n), n.defaultPrevented) || (a.current || null === (o = t.triggerRef.current) || void 0 === o || o.focus(), n.preventDefault());
                            a.current = !1, c.current = !1
                        },
                        onInteractOutside: n => {
                            var r, o;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, n), n.defaultPrevented || (a.current = !0, "pointerdown" === n.detail.originalEvent.type && (c.current = !0));
                            const u = n.target;
                            (null === (o = t.triggerRef.current) || void 0 === o ? void 0 : o.contains(u)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && c.current && n.preventDefault()
                        }
                    }))
                })),
                W = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopePopover: t,
                        trapFocus: a,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: u,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: p,
                        onFocusOutside: m,
                        onInteractOutside: h,
                        ...g
                    } = e, E = R(L, t), y = _(t);
                    return (0, s.EW)(), (0, o.createElement)(l.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: a,
                        onMountAutoFocus: c,
                        onUnmountAutoFocus: u
                    }, (0, o.createElement)(i.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onInteractOutside: h,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: p,
                        onFocusOutside: m,
                        onDismiss: () => E.onOpenChange(!1)
                    }, (0, o.createElement)(f.VY, (0, r.Z)({
                        "data-state": I(E.open),
                        role: "dialog",
                        id: E.contentId
                    }, y, g, {
                        ref: n,
                        style: { ...g.style,
                            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))))
                }));

            function I(e) {
                return e ? "open" : "closed"
            }
            const Z = P,
                B = x,
                K = T,
                z = N
        },
        61880: function(e, n) {
            n.Z = function(e) {
                for (var n = -1, t = null == e ? 0 : e.length, r = 0, o = []; ++n < t;) {
                    var a = e[n];
                    a && (o[r++] = a)
                }
                return o
            }
        }
    }
]);