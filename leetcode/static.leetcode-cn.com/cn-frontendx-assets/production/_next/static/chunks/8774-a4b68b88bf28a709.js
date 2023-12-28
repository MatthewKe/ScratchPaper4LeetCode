"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8774], {
        62948: function(e, t, n) {
            var r;
            n.d(t, {
                M: function() {
                    return s
                }
            });
            var o = n(64386),
                i = n(19509);
            const a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {});
            let l = 0;

            function s(e) {
                const [t, n] = o.useState(a());
                return (0, i.b)((() => {
                    e || n((e => null !== e && void 0 !== e ? e : String(l++)))
                }), [e]), e || (t ? `radix-${t}` : "")
            }
        },
        76286: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return W
                },
                Eh: function() {
                    return Z
                },
                VY: function() {
                    return Y
                },
                fC: function() {
                    return z
                },
                D7: function() {
                    return E
                }
            });
            var r = n(66869),
                o = n(64386),
                i = n(68949),
                a = n(15250),
                l = n(39157);
            var s = "undefined" !== typeof document ? o.useLayoutEffect : o.useEffect;

            function c(e, t) {
                if (e === t) return !0;
                if (typeof e !== typeof t) return !1;
                if ("function" === typeof e && e.toString() === t.toString()) return !0;
                let n, r, o;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length, n != t.length) return !1;
                        for (r = n; 0 !== r--;)
                            if (!c(e[r], t[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                    for (r = n; 0 !== r--;)
                        if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 !== r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e !== e && t !== t
            }

            function u(e) {
                if ("undefined" === typeof window) return 1;
                return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function d(e, t) {
                const n = u(e);
                return Math.round(t * n) / n
            }

            function p(e) {
                const t = o.useRef(e);
                return s((() => {
                    t.current = e
                })), t
            }
            var f = n(28305);
            const h = (0, o.forwardRef)(((e, t) => {
                    const {
                        children: n,
                        width: i = 10,
                        height: a = 5,
                        ...l
                    } = e;
                    return (0, o.createElement)(f.WV.svg, (0, r.Z)({}, l, {
                        ref: t,
                        width: i,
                        height: a,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none"
                    }), e.asChild ? n : (0, o.createElement)("polygon", {
                        points: "0,0 30,0 15,10"
                    }))
                })),
                g = h;
            var m = n(51678),
                v = n(66744),
                y = n(97474),
                w = n(19509);
            const x = "Popper",
                [b, E] = (0, v.b)(x),
                [C, T] = b(x),
                P = e => {
                    const {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(C, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                _ = "PopperAnchor",
                R = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopePopper: n,
                        virtualRef: i,
                        ...a
                    } = e, l = T(_, n), s = (0, o.useRef)(null), c = (0, m.e)(t, s);
                    return (0, o.useEffect)((() => {
                        l.onAnchorChange((null === i || void 0 === i ? void 0 : i.current) || s.current)
                    })), i ? null : (0, o.createElement)(f.WV.div, (0, r.Z)({}, a, {
                        ref: c
                    }))
                })),
                k = "PopperContent",
                [S, M] = b(k),
                A = (0, o.forwardRef)(((e, t) => {
                    var n, h, g, v, x, b, E, C;
                    const {
                        __scopePopper: P,
                        side: _ = "bottom",
                        sideOffset: R = 0,
                        align: M = "center",
                        alignOffset: A = 0,
                        arrowPadding: O = 0,
                        avoidCollisions: D = !0,
                        collisionBoundary: L = [],
                        collisionPadding: z = 0,
                        sticky: W = "partial",
                        hideWhenDetached: Y = !1,
                        updatePositionStrategy: Z = "optimized",
                        onPlaced: B,
                        ...V
                    } = e, X = T(k, P), [F, j] = (0, o.useState)(null), K = (0, m.e)(t, (e => j(e))), [N, q] = (0, o.useState)(null), G = function(e) {
                        const [t, n] = (0, o.useState)(void 0);
                        return (0, w.b)((() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                const t = new ResizeObserver((t => {
                                    if (!Array.isArray(t)) return;
                                    if (!t.length) return;
                                    const r = t[0];
                                    let o, i;
                                    if ("borderBoxSize" in r) {
                                        const e = r.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        o = t.inlineSize, i = t.blockSize
                                    } else o = e.offsetWidth, i = e.offsetHeight;
                                    n({
                                        width: o,
                                        height: i
                                    })
                                }));
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }), [e]), t
                    }(N), J = null !== (n = null === G || void 0 === G ? void 0 : G.width) && void 0 !== n ? n : 0, Q = null !== (h = null === G || void 0 === G ? void 0 : G.height) && void 0 !== h ? h : 0, U = _ + ("center" !== M ? "-" + M : ""), ee = "number" === typeof z ? z : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...z
                    }, te = Array.isArray(L) ? L : [L], ne = te.length > 0, re = {
                        padding: ee,
                        boundary: te.filter(H),
                        altBoundary: ne
                    }, {
                        refs: oe,
                        floatingStyles: ie,
                        placement: ae,
                        isPositioned: le,
                        middlewareData: se
                    } = function(e) {
                        void 0 === e && (e = {});
                        const {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: i,
                            elements: {
                                reference: f,
                                floating: h
                            } = {},
                            transform: g = !0,
                            whileElementsMounted: m,
                            open: v
                        } = e, [y, w] = o.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [x, b] = o.useState(r);
                        c(x, r) || b(r);
                        const [E, C] = o.useState(null), [T, P] = o.useState(null), _ = o.useCallback((e => {
                            e != M.current && (M.current = e, C(e))
                        }), [C]), R = o.useCallback((e => {
                            e !== A.current && (A.current = e, P(e))
                        }), [P]), k = f || E, S = h || T, M = o.useRef(null), A = o.useRef(null), O = o.useRef(y), D = p(m), L = p(i), H = o.useCallback((() => {
                            if (!M.current || !A.current) return;
                            const e = {
                                placement: t,
                                strategy: n,
                                middleware: x
                            };
                            L.current && (e.platform = L.current), (0, a.oo)(M.current, A.current, e).then((e => {
                                const t = { ...e,
                                    isPositioned: !0
                                };
                                I.current && !c(O.current, t) && (O.current = t, l.flushSync((() => {
                                    w(t)
                                })))
                            }))
                        }), [x, t, n, L]);
                        s((() => {
                            !1 === v && O.current.isPositioned && (O.current.isPositioned = !1, w((e => ({ ...e,
                                isPositioned: !1
                            }))))
                        }), [v]);
                        const I = o.useRef(!1);
                        s((() => (I.current = !0, () => {
                            I.current = !1
                        })), []), s((() => {
                            if (k && (M.current = k), S && (A.current = S), k && S) {
                                if (D.current) return D.current(k, S, H);
                                H()
                            }
                        }), [k, S, H, D]);
                        const $ = o.useMemo((() => ({
                                reference: M,
                                floating: A,
                                setReference: _,
                                setFloating: R
                            })), [_, R]),
                            z = o.useMemo((() => ({
                                reference: k,
                                floating: S
                            })), [k, S]),
                            W = o.useMemo((() => {
                                const e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!z.floating) return e;
                                const t = d(z.floating, y.x),
                                    r = d(z.floating, y.y);
                                return g ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...u(z.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }), [n, g, z.floating, y.x, y.y]);
                        return o.useMemo((() => ({ ...y,
                            update: H,
                            refs: $,
                            elements: z,
                            floatingStyles: W
                        })), [y, H, $, z, W])
                    }({
                        strategy: "fixed",
                        placement: U,
                        whileElementsMounted: (...e) => (0, a.Me)(...e, {
                            animationFrame: "always" === Z
                        }),
                        elements: {
                            reference: X.anchor
                        },
                        middleware: [(0, i.cv)({
                            mainAxis: R + Q,
                            alignmentAxis: A
                        }), D && (0, i.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === W ? (0, i.dr)() : void 0,
                            ...re
                        }), D && (0, i.RR)({ ...re
                        }), (0, i.dp)({ ...re,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                const {
                                    width: o,
                                    height: i
                                } = t.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), N && (ce = {
                            element: N,
                            padding: O
                        }, {
                            name: "arrow",
                            options: ce,
                            fn(e) {
                                const {
                                    element: t,
                                    padding: n
                                } = "function" === typeof ce ? ce(e) : ce;
                                return t && (r = t, {}.hasOwnProperty.call(r, "current")) ? null != t.current ? (0, i.x7)({
                                    element: t.current,
                                    padding: n
                                }).fn(e) : {} : t ? (0, i.x7)({
                                    element: t,
                                    padding: n
                                }).fn(e) : {};
                                var r
                            }
                        }), I({
                            arrowWidth: J,
                            arrowHeight: Q
                        }), Y && (0, i.Cp)({
                            strategy: "referenceHidden",
                            ...re
                        })]
                    });
                    var ce;
                    const [ue, de] = $(ae), pe = (0, y.W)(B);
                    (0, w.b)((() => {
                        le && (null === pe || void 0 === pe || pe())
                    }), [le, pe]);
                    const fe = null === (g = se.arrow) || void 0 === g ? void 0 : g.x,
                        he = null === (v = se.arrow) || void 0 === v ? void 0 : v.y,
                        ge = 0 !== (null === (x = se.arrow) || void 0 === x ? void 0 : x.centerOffset),
                        [me, ve] = (0, o.useState)();
                    return (0, w.b)((() => {
                        F && ve(window.getComputedStyle(F).zIndex)
                    }), [F]), (0, o.createElement)("div", {
                        ref: oe.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ie,
                            transform: le ? ie.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: me,
                            "--radix-popper-transform-origin": [null === (b = se.transformOrigin) || void 0 === b ? void 0 : b.x, null === (E = se.transformOrigin) || void 0 === E ? void 0 : E.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(S, {
                        scope: P,
                        placedSide: ue,
                        onArrowChange: q,
                        arrowX: fe,
                        arrowY: he,
                        shouldHideArrow: ge
                    }, (0, o.createElement)(f.WV.div, (0, r.Z)({
                        "data-side": ue,
                        "data-align": de
                    }, V, {
                        ref: K,
                        style: { ...V.style,
                            animation: le ? void 0 : "none",
                            opacity: null !== (C = se.hide) && void 0 !== C && C.referenceHidden ? 0 : void 0
                        }
                    }))))
                })),
                O = "PopperArrow",
                D = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                L = (0, o.forwardRef)((function(e, t) {
                    const {
                        __scopePopper: n,
                        ...i
                    } = e, a = M(O, n), l = D[a.placedSide];
                    return (0, o.createElement)("span", {
                        ref: a.onArrowChange,
                        style: {
                            position: "absolute",
                            left: a.arrowX,
                            top: a.arrowY,
                            [l]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[a.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[a.placedSide],
                            visibility: a.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(g, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                }));

            function H(e) {
                return null !== e
            }
            const I = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, a;
                    const {
                        placement: l,
                        rects: s,
                        middlewareData: c
                    } = t, u = 0 !== (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset), d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [f, h] = $(l), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], m = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2, v = (null !== (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + p / 2;
                    let y = "",
                        w = "";
                    return "bottom" === f ? (y = u ? g : `${m}px`, w = -p + "px") : "top" === f ? (y = u ? g : `${m}px`, w = `${s.floating.height+p}px`) : "right" === f ? (y = -p + "px", w = u ? g : `${v}px`) : "left" === f && (y = `${s.floating.width+p}px`, w = u ? g : `${v}px`), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function $(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n]
            }
            const z = P,
                W = R,
                Y = A,
                Z = L
        },
        58774: function(e, t, n) {
            n.d(t, {
                Eh: function() {
                    return q
                },
                VY: function() {
                    return N
                },
                fC: function() {
                    return F
                },
                h_: function() {
                    return K
                },
                xz: function() {
                    return j
                },
                zt: function() {
                    return X
                }
            });
            var r = n(66869),
                o = n(64386),
                i = n(98346),
                a = n(51678),
                l = n(66744),
                s = n(93001),
                c = n(62948),
                u = n(76286),
                d = n(20103),
                p = n(49114),
                f = n(28305),
                h = n(97772),
                g = n(82949),
                m = n(47983);
            const [v, y] = (0, l.b)("Tooltip", [u.D7]), w = (0, u.D7)(), x = "TooltipProvider", b = 700, E = "tooltip.open", [C, T] = v(x), P = e => {
                const {
                    __scopeTooltip: t,
                    delayDuration: n = b,
                    skipDelayDuration: r = 300,
                    disableHoverableContent: i = !1,
                    children: a
                } = e, [l, s] = (0, o.useState)(!0), c = (0, o.useRef)(!1), u = (0, o.useRef)(0);
                return (0, o.useEffect)((() => {
                    const e = u.current;
                    return () => window.clearTimeout(e)
                }), []), (0, o.createElement)(C, {
                    scope: t,
                    isOpenDelayed: l,
                    delayDuration: n,
                    onOpen: (0, o.useCallback)((() => {
                        window.clearTimeout(u.current), s(!1)
                    }), []),
                    onClose: (0, o.useCallback)((() => {
                        window.clearTimeout(u.current), u.current = window.setTimeout((() => s(!0)), r)
                    }), [r]),
                    isPointerInTransitRef: c,
                    onPointerInTransitChange: (0, o.useCallback)((e => {
                        c.current = e
                    }), []),
                    disableHoverableContent: i
                }, a)
            }, _ = "Tooltip", [R, k] = v(_), S = e => {
                const {
                    __scopeTooltip: t,
                    children: n,
                    open: r,
                    defaultOpen: i = !1,
                    onOpenChange: a,
                    disableHoverableContent: l,
                    delayDuration: s
                } = e, d = T(_, e.__scopeTooltip), p = w(t), [f, h] = (0, o.useState)(null), m = (0, c.M)(), v = (0, o.useRef)(0), y = null !== l && void 0 !== l ? l : d.disableHoverableContent, x = null !== s && void 0 !== s ? s : d.delayDuration, b = (0, o.useRef)(!1), [C = !1, P] = (0, g.T)({
                    prop: r,
                    defaultProp: i,
                    onChange: e => {
                        e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(E))) : d.onClose(), null === a || void 0 === a || a(e)
                    }
                }), k = (0, o.useMemo)((() => C ? b.current ? "delayed-open" : "instant-open" : "closed"), [C]), S = (0, o.useCallback)((() => {
                    window.clearTimeout(v.current), b.current = !1, P(!0)
                }), [P]), M = (0, o.useCallback)((() => {
                    window.clearTimeout(v.current), P(!1)
                }), [P]), A = (0, o.useCallback)((() => {
                    window.clearTimeout(v.current), v.current = window.setTimeout((() => {
                        b.current = !0, P(!0)
                    }), x)
                }), [x, P]);
                return (0, o.useEffect)((() => () => window.clearTimeout(v.current)), []), (0, o.createElement)(u.fC, p, (0, o.createElement)(R, {
                    scope: t,
                    contentId: m,
                    open: C,
                    stateAttribute: k,
                    trigger: f,
                    onTriggerChange: h,
                    onTriggerEnter: (0, o.useCallback)((() => {
                        d.isOpenDelayed ? A() : S()
                    }), [d.isOpenDelayed, A, S]),
                    onTriggerLeave: (0, o.useCallback)((() => {
                        y ? M() : window.clearTimeout(v.current)
                    }), [M, y]),
                    onOpen: S,
                    onClose: M,
                    disableHoverableContent: y
                }, n))
            }, M = "TooltipTrigger", A = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    ...l
                } = e, s = k(M, n), c = T(M, n), d = w(n), p = (0, o.useRef)(null), h = (0, a.e)(t, p, s.onTriggerChange), g = (0, o.useRef)(!1), m = (0, o.useRef)(!1), v = (0, o.useCallback)((() => g.current = !1), []);
                return (0, o.useEffect)((() => () => document.removeEventListener("pointerup", v)), [v]), (0, o.createElement)(u.ee, (0, r.Z)({
                    asChild: !0
                }, d), (0, o.createElement)(f.WV.button, (0, r.Z)({
                    "aria-describedby": s.open ? s.contentId : void 0,
                    "data-state": s.stateAttribute
                }, l, {
                    ref: h,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e => {
                        "touch" !== e.pointerType && (m.current || c.isPointerInTransitRef.current || (s.onTriggerEnter(), m.current = !0))
                    })),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, (() => {
                        s.onTriggerLeave(), m.current = !1
                    })),
                    onPointerDown: (0, i.M)(e.onPointerDown, (() => {
                        g.current = !0, document.addEventListener("pointerup", v, {
                            once: !0
                        })
                    })),
                    onFocus: (0, i.M)(e.onFocus, (() => {
                        g.current || s.onOpen()
                    })),
                    onBlur: (0, i.M)(e.onBlur, s.onClose),
                    onClick: (0, i.M)(e.onClick, s.onClose)
                })))
            })), O = "TooltipPortal", [D, L] = v(O, {
                forceMount: void 0
            }), H = e => {
                const {
                    __scopeTooltip: t,
                    forceMount: n,
                    children: r,
                    container: i
                } = e, a = k(O, t);
                return (0, o.createElement)(D, {
                    scope: t,
                    forceMount: n
                }, (0, o.createElement)(p.z, {
                    present: n || a.open
                }, (0, o.createElement)(d.h, {
                    asChild: !0,
                    container: i
                }, r)))
            }, I = "TooltipContent", $ = (0, o.forwardRef)(((e, t) => {
                const n = L(I, e.__scopeTooltip),
                    {
                        forceMount: i = n.forceMount,
                        side: a = "top",
                        ...l
                    } = e,
                    s = k(I, e.__scopeTooltip);
                return (0, o.createElement)(p.z, {
                    present: i || s.open
                }, s.disableHoverableContent ? (0, o.createElement)(Z, (0, r.Z)({
                    side: a
                }, l, {
                    ref: t
                })) : (0, o.createElement)(z, (0, r.Z)({
                    side: a
                }, l, {
                    ref: t
                })))
            })), z = (0, o.forwardRef)(((e, t) => {
                const n = k(I, e.__scopeTooltip),
                    i = T(I, e.__scopeTooltip),
                    l = (0, o.useRef)(null),
                    s = (0, a.e)(t, l),
                    [c, u] = (0, o.useState)(null),
                    {
                        trigger: d,
                        onClose: p
                    } = n,
                    f = l.current,
                    {
                        onPointerInTransitChange: h
                    } = i,
                    g = (0, o.useCallback)((() => {
                        u(null), h(!1)
                    }), [h]),
                    m = (0, o.useCallback)(((e, t) => {
                        const n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t, n = 5) {
                                const r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, function(e, t) {
                                const n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw new Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect())),
                            i = function(e) {
                                const t = e.slice();
                                return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        const t = [];
                                        for (let r = 0; r < e.length; r++) {
                                            const n = e[r];
                                            for (; t.length >= 2;) {
                                                const e = t[t.length - 1],
                                                    r = t[t.length - 2];
                                                if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                                                t.pop()
                                            }
                                            t.push(n)
                                        }
                                        t.pop();
                                        const n = [];
                                        for (let r = e.length - 1; r >= 0; r--) {
                                            const t = e[r];
                                            for (; n.length >= 2;) {
                                                const e = n[n.length - 1],
                                                    r = n[n.length - 2];
                                                if (!((e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x))) break;
                                                n.pop()
                                            }
                                            n.push(t)
                                        }
                                        return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                                    }(t)
                            }([...o, ... function(e) {
                                const {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())]);
                        u(i), h(!0)
                    }), [h]);
                return (0, o.useEffect)((() => () => g()), [g]), (0, o.useEffect)((() => {
                    if (d && f) {
                        const e = e => m(e, f),
                            t = e => m(e, d);
                        return d.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                            d.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
                        }
                    }
                }), [d, f, m, g]), (0, o.useEffect)((() => {
                    if (c) {
                        const e = e => {
                            const t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = (null === d || void 0 === d ? void 0 : d.contains(t)) || (null === f || void 0 === f ? void 0 : f.contains(t)),
                                o = ! function(e, t) {
                                    const {
                                        x: n,
                                        y: r
                                    } = e;
                                    let o = !1;
                                    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
                                        const e = t[i].x,
                                            l = t[i].y,
                                            s = t[a].x,
                                            c = t[a].y;
                                        l > r !== c > r && n < (s - e) * (r - l) / (c - l) + e && (o = !o)
                                    }
                                    return o
                                }(n, c);
                            r ? g() : o && (g(), p())
                        };
                        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                    }
                }), [d, f, c, p, g]), (0, o.createElement)(Z, (0, r.Z)({}, e, {
                    ref: s
                }))
            })), [W, Y] = v(_, {
                isInside: !1
            }), Z = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    children: i,
                    "aria-label": a,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    ...d
                } = e, p = k(I, n), f = w(n), {
                    onClose: g
                } = p;
                return (0, o.useEffect)((() => (document.addEventListener(E, g), () => document.removeEventListener(E, g))), [g]), (0, o.useEffect)((() => {
                    if (p.trigger) {
                        const e = e => {
                            const t = e.target;
                            null !== t && void 0 !== t && t.contains(p.trigger) && g()
                        };
                        return window.addEventListener("scroll", e, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    }
                }), [p.trigger, g]), (0, o.createElement)(s.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: g
                }, (0, o.createElement)(u.VY, (0, r.Z)({
                    "data-state": p.stateAttribute
                }, f, d, {
                    ref: t,
                    style: { ...d.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }), (0, o.createElement)(h.A4, null, i), (0, o.createElement)(W, {
                    scope: n,
                    isInside: !0
                }, (0, o.createElement)(m.f, {
                    id: p.contentId,
                    role: "tooltip"
                }, a || i))))
            })), B = "TooltipArrow", V = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    ...i
                } = e, a = w(n);
                return Y(B, n).isInside ? null : (0, o.createElement)(u.Eh, (0, r.Z)({}, a, i, {
                    ref: t
                }))
            }));
            const X = P,
                F = S,
                j = A,
                K = H,
                N = $,
                q = V
        }
    }
]);