"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9299], {
        50048: function(e, t, n) {
            n.d(t, {
                bv: function() {
                    return Z
                }
            });
            var r = n(64386),
                o = n.t(r, 2),
                u = n(67306),
                l = n(57735),
                a = n(68949),
                i = n(15250),
                s = n(39157);
            const c = e => {
                const {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        return r = t, Object.prototype.hasOwnProperty.call(r, "current") ? null != t.current ? (0, a.x7)({
                            element: t.current,
                            padding: n
                        }).fn(e) : {} : t ? (0, a.x7)({
                            element: t,
                            padding: n
                        }).fn(e) : {};
                        var r
                    }
                }
            };
            var f = "undefined" !== typeof document ? r.useLayoutEffect : r.useEffect;

            function p(e, t) {
                if (e === t) return !0;
                if (typeof e !== typeof t) return !1;
                if ("function" === typeof e && e.toString() === t.toString()) return !0;
                let n, r, o;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length, n != t.length) return !1;
                        for (r = n; 0 !== r--;)
                            if (!p(e[r], t[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                    for (r = n; 0 !== r--;)
                        if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 !== r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !p(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e !== e && t !== t
            }

            function d(e) {
                const t = r.useRef(e);
                return f((() => {
                    t.current = e
                })), t
            }
            var m = "undefined" !== typeof document ? r.useLayoutEffect : r.useEffect;
            let v = !1,
                h = 0;
            const y = () => "floating-ui-" + h++;
            o["useId".toString()];

            function g() {
                const e = new Map;
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach((e => e(n)))
                    },
                    on(t, n) {
                        e.set(t, [...e.get(t) || [], n])
                    },
                    off(t, n) {
                        e.set(t, (e.get(t) || []).filter((e => e !== n)))
                    }
                }
            }
            const b = r.createContext(null),
                w = () => r.useContext(b);

            function E(e) {
                return (null == e ? void 0 : e.ownerDocument) || document
            }

            function P(e) {
                return E(e).defaultView || window
            }

            function x(e) {
                return !!e && e instanceof P(e).Element
            }
            const S = o["useInsertionEffect".toString()] || (e => e());

            function C(e) {
                const t = r.useRef((() => {
                    0
                }));
                return S((() => {
                    t.current = e
                })), r.useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }), [])
            }

            function R(e) {
                void 0 === e && (e = {});
                const {
                    open: t = !1,
                    onOpenChange: n,
                    nodeId: o
                } = e, u = function(e) {
                    void 0 === e && (e = {});
                    const {
                        placement: t = "bottom",
                        strategy: n = "absolute",
                        middleware: o = [],
                        platform: u,
                        whileElementsMounted: l,
                        open: a
                    } = e, [c, m] = r.useState({
                        x: null,
                        y: null,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [v, h] = r.useState(o);
                    p(v, o) || h(o);
                    const y = r.useRef(null),
                        g = r.useRef(null),
                        b = r.useRef(c),
                        w = d(l),
                        E = d(u),
                        [P, x] = r.useState(null),
                        [S, C] = r.useState(null),
                        R = r.useCallback((e => {
                            y.current !== e && (y.current = e, x(e))
                        }), []),
                        j = r.useCallback((e => {
                            g.current !== e && (g.current = e, C(e))
                        }), []),
                        F = r.useCallback((() => {
                            if (!y.current || !g.current) return;
                            const e = {
                                placement: t,
                                strategy: n,
                                middleware: v
                            };
                            E.current && (e.platform = E.current), (0, i.oo)(y.current, g.current, e).then((e => {
                                const t = { ...e,
                                    isPositioned: !0
                                };
                                I.current && !p(b.current, t) && (b.current = t, s.flushSync((() => {
                                    m(t)
                                })))
                            }))
                        }), [v, t, n, E]);
                    f((() => {
                        !1 === a && b.current.isPositioned && (b.current.isPositioned = !1, m((e => ({ ...e,
                            isPositioned: !1
                        }))))
                    }), [a]);
                    const I = r.useRef(!1);
                    f((() => (I.current = !0, () => {
                        I.current = !1
                    })), []), f((() => {
                        if (P && S) {
                            if (w.current) return w.current(P, S, F);
                            F()
                        }
                    }), [P, S, F, w]);
                    const T = r.useMemo((() => ({
                            reference: y,
                            floating: g,
                            setReference: R,
                            setFloating: j
                        })), [R, j]),
                        O = r.useMemo((() => ({
                            reference: P,
                            floating: S
                        })), [P, S]);
                    return r.useMemo((() => ({ ...c,
                        update: F,
                        refs: T,
                        elements: O,
                        reference: R,
                        floating: j
                    })), [c, F, T, O, R, j])
                }(e), l = w(), a = r.useRef(null), c = r.useRef({}), v = r.useState((() => g()))[0], [h, y] = r.useState(null), b = r.useCallback((e => {
                    const t = x(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    u.refs.setReference(t)
                }), [u.refs]), E = r.useCallback((e => {
                    (x(e) || null === e) && (a.current = e, y(e)), (x(u.refs.reference.current) || null === u.refs.reference.current || null !== e && !x(e)) && u.refs.setReference(e)
                }), [u.refs]), P = r.useMemo((() => ({ ...u.refs,
                    setReference: E,
                    setPositionReference: b,
                    domReference: a
                })), [u.refs, E, b]), S = r.useMemo((() => ({ ...u.elements,
                    domReference: h
                })), [u.elements, h]), R = C(n), j = r.useMemo((() => ({ ...u,
                    refs: P,
                    elements: S,
                    dataRef: c,
                    nodeId: o,
                    events: v,
                    open: t,
                    onOpenChange: R
                })), [u, o, v, t, R, P, S]);
                return m((() => {
                    const e = null == l ? void 0 : l.nodesRef.current.find((e => e.id === o));
                    e && (e.context = j)
                })), r.useMemo((() => ({ ...u,
                    context: j,
                    refs: P,
                    reference: E,
                    positionReference: b
                })), [u, P, j, E, b])
            }
            var j, F = Object.defineProperty,
                I = (e, t, n) => (((e, t, n) => {
                    t in e ? F(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" != typeof t ? t + "" : t, n), n),
                T = {
                    exports: {}
                },
                O = {};
            T.exports = function() {
                if (j) return O;
                j = 1;
                var e = r,
                    t = Symbol.for("react.element"),
                    n = Symbol.for("react.fragment"),
                    o = Object.prototype.hasOwnProperty,
                    u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function a(e, n, r) {
                    var a, i = {},
                        s = null,
                        c = null;
                    for (a in void 0 !== r && (s = "" + r), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n) o.call(n, a) && !l.hasOwnProperty(a) && (i[a] = n[a]);
                    if (e && e.defaultProps)
                        for (a in n = e.defaultProps) void 0 === i[a] && (i[a] = n[a]);
                    return {
                        $$typeof: t,
                        type: e,
                        key: s,
                        ref: c,
                        props: i,
                        _owner: u.current
                    }
                }
                return O.Fragment = n, O.jsx = a, O.jsxs = a, O
            }();
            var k = T.exports;
            const M = new class {
                constructor() {
                    I(this, "current", this.detect())
                }
                set(e) {
                    this.current !== e && (this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return typeof window > "u" || typeof document > "u" ? "server" : "client"
                }
            };

            function A(e, t, ...n) {
                if (e in t) {
                    const r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                const r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, A), r
            }

            function N(e) {
                return M.isServer ? null : e instanceof Node ? e.ownerDocument : e && Object.prototype.hasOwnProperty.call(e, "current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            const $ = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var L = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(L || {});

            function B(e) {
                const t = (0, r.useRef)(e);
                return ((e, t) => {
                    M.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
                })((() => {
                    t.current = e
                }), [e]), t
            }

            function z(e, t, n) {
                const o = B(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }

            function D(e, t, n = !0) {
                const o = (0, r.useRef)(!1);

                function u(n, r) {
                    if (!o.current || n.defaultPrevented) return;
                    const u = function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(e),
                        l = r(n);
                    if (null !== l && l.getRootNode().contains(l)) {
                        for (const e of u) {
                            if (null === e) continue;
                            const t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(l) || n.composed && n.composedPath().includes(t)) return
                        }
                        return ! function(e, t = 0) {
                            var n;
                            return e !== (null == (n = N(e)) ? void 0 : n.body) && A(t, {
                                0: () => e.matches($),
                                1() {
                                    let t = e;
                                    for (; null !== t;) {
                                        if (t.matches($)) return !0;
                                        t = t.parentElement
                                    }
                                    return !1
                                }
                            })
                        }(l, L.Loose) && -1 !== l.tabIndex && n.preventDefault(), t(n, l)
                    }
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        o.current = n
                    }))
                }), [n]);
                const l = (0, r.useRef)(null);
                z("mousedown", (e => {
                    var t, n;
                    o.current && (l.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), z("click", (e => {
                    l.current && (u(e, (() => l.current)), l.current = null)
                }), !0), z("blur", (e => u(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
            const _ = (0, r.createContext)(null);
            _.displayName = "ReferenceContext";
            const Y = (0, r.createContext)(null);
            Y.displayName = "FloatingContext";
            const H = (0, r.createContext)(null);

            function U(e) {
                const t = (0, r.useContext)(_);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, U), t
                }
                return t
            }

            function V(e) {
                const t = (0, r.useContext)(Y);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, V), t
                }
                return t
            }

            function W(e) {
                const t = (0, r.useContext)(H);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, W), t
                }
                return t
            }

            function G(e, t, n, o) {
                const {
                    referenceRef: u
                } = o, l = t;
                if (l.as === r.Fragment) return k.jsx(e.type, { ...e.props,
                    ...n,
                    ref: u
                });
                const a = l.as || "div";
                return k.jsx(a, { ...n,
                    ref: u,
                    children: k.jsx(e.type, { ...e.props
                    })
                })
            }

            function X(e, t, n, o) {
                const {
                    floatingRef: a,
                    props: i,
                    mounted: s,
                    setShow: c,
                    x: f,
                    y: p,
                    placement: d,
                    strategy: m,
                    referenceElWidth: v
                } = o, h = { ...i,
                    ...t
                }, y = function(e, t) {
                    return (0, r.useMemo)((() => "function" == typeof e.originClass ? e.originClass(t) : "string" == typeof e.originClass ? e.originClass : e.tailwindcssOriginClass ? (e => {
                        switch (e) {
                            case "top":
                                return "origin-bottom";
                            case "bottom":
                                return "origin-top";
                            case "left":
                                return "origin-right";
                            case "right":
                                return "origin-left";
                            case "top-start":
                            case "right-end":
                                return "origin-bottom-left";
                            case "top-end":
                            case "left-end":
                                return "origin-bottom-right";
                            case "right-start":
                            case "bottom-start":
                                return "origin-top-left";
                            case "left-start":
                            case "bottom-end":
                                return "origin-top-right";
                            default:
                                return ""
                        }
                    })(t) : ""), [t, e.originClass, e.tailwindcssOriginClass])
                }(h, d), g = {
                    show: !!s.current && h.show,
                    enter: `${h.enter||""} ${y}`,
                    enterFrom: `${h.enterFrom||""}`,
                    enterTo: `${h.enterTo||""}`,
                    leave: `${h.leave||""} ${y}`,
                    leaveFrom: `${h.leaveFrom||""}`,
                    leaveTo: `${h.leaveTo||""}`,
                    beforeEnter: () => {
                        c(!0)
                    },
                    afterLeave: () => {
                        c(!1)
                    }
                }, b = {
                    style: { ...h.dialog || !h.transform && void 0 !== h.transform ? {
                            position: m,
                            zIndex: h.zIndex || 9999,
                            top: `${p||0}px`,
                            left: `${f||0}px`
                        } : {
                            position: m,
                            zIndex: h.zIndex || 9999,
                            top: "0px",
                            left: "0px",
                            right: "auto",
                            bottom: "auto",
                            transform: `translate(${Math.round(f||0)}px,${Math.round(p||0)}px)`
                        },
                        width: h.adaptiveWidth && "number" == typeof v ? `${v}px` : void 0
                    }
                };
                return w = function(e) {
                    const t = { ...b,
                        ...n,
                        ref: a
                    };
                    if (h.as === r.Fragment) return k.jsx(e.type, { ...e.props,
                        ...t
                    });
                    const o = h.as || "div";
                    return k.jsx(o, { ...t,
                        children: k.jsx(e.type, { ...e.props
                        })
                    })
                }(M.isServer ? s.current && h.show ? k.jsx(e.type, { ...e.props
                }) : k.jsx(r.Fragment, {}) : h.transitionChild ? k.jsx(l.u.Child, {
                    as: r.Fragment,
                    ...g,
                    children: k.jsx(e.type, { ...e.props
                    })
                }) : k.jsx(l.u, {
                    as: r.Fragment,
                    ...g,
                    children: k.jsx(e.type, { ...e.props
                    })
                })), h.portal ? k.jsx(u.h, {
                    children: w
                }) : w;
                var w
            }

            function J([e, t], n) {
                var o, u;
                const l = (0, r.useRef)(!1),
                    [s, f] = (0, r.useState)(),
                    p = (0, r.useRef)(null),
                    d = (0, r.useMemo)((() => ({
                        show: n.onShow || (() => {}),
                        hide: n.onHide || (() => {}),
                        update: n.onUpdate || (() => {})
                    })), [n.onShow, n.onHide, n.onUpdate]),
                    {
                        x: m,
                        y: v,
                        placement: h,
                        strategy: y,
                        update: g,
                        refs: b,
                        middlewareData: w
                    } = R({
                        placement: n.placement || "bottom-start",
                        strategy: n.strategy,
                        middleware: s
                    }),
                    [E, P] = (0, r.useState)(null),
                    x = (0, r.useCallback)((() => {
                        g(), d.update()
                    }), [g, d]);
                (0, r.useEffect)(x, [n.placement, n.strategy, s]),
                function(e, t, n, o) {
                    (0, r.useEffect)((() => {
                        const r = [];
                        ("number" == typeof o.offset || "object" == typeof o.offset || "function" == typeof o.offset) && r.push((0, a.cv)(o.offset)), (!0 === o.flip || "number" == typeof o.flip || "object" == typeof o.flip) && r.push((0, a.RR)({
                            padding: "number" == typeof o.flip ? o.flip : void 0,
                            ..."object" == typeof o.flip ? o.flip : {}
                        })), (!0 === o.shift || "number" == typeof o.shift || "object" == typeof o.shift) && r.push((0, a.uY)({
                            padding: "number" == typeof o.shift ? o.shift : void 0,
                            ..."object" == typeof o.shift ? o.shift : {}
                        })), (!0 === o.autoPlacement || "object" == typeof o.autoPlacement) && r.push((0, a.X5)("object" == typeof o.autoPlacement ? o.autoPlacement : void 0)), (!0 === o.arrow || "number" == typeof o.arrow) && r.push(c({
                            element: n,
                            padding: !0 === o.arrow ? 0 : o.arrow
                        })), r.push(..."function" == typeof o.middleware ? o.middleware({
                            referenceEl: t.reference,
                            floatingEl: t.floating
                        }) : o.middleware || []), (!0 === o.hide || "object" == typeof o.hide) && r.push((0, a.Cp)("object" == typeof o.hide ? o.hide : void 0)), e(r)
                    }), [o.offset, o.shift, o.flip, o.arrow, o.autoPlacement, o.hide, o.middleware])
                }(f, b, p, n), (0, r.useEffect)((() => {
                    l.current = !0
                }), []),
                function(e, t, n) {
                    (0, r.useEffect)((() => {
                        if (e && M.isClient && typeof ResizeObserver < "u" && t.current && t.current instanceof Element) {
                            const e = new ResizeObserver((([e]) => {
                                const t = e.borderBoxSize.reduce(((e, {
                                    inlineSize: t
                                }) => e + t), 0);
                                n(t)
                            }));
                            return e.observe(t.current), () => {
                                e.disconnect(), n(null)
                            }
                        }
                    }), [])
                }(n.adaptiveWidth, b.reference, P), (0, r.useEffect)((() => {
                    if (b.reference.current && b.floating.current && e) {
                        const e = !1 !== n.autoUpdate ? (0, i.Me)(b.reference.current, b.floating.current, x, "object" == typeof n.autoUpdate ? n.autoUpdate : void 0) : () => {};
                        return d.show(), () => {
                            e(), d.hide()
                        }
                    }
                }), [e, x, b]);
                const S = (0, r.useRef)(!0);
                (0, r.useEffect)((() => {
                    !(b.reference.current instanceof Element) && b.reference.current && b.floating.current && S.current && (S.current = !1, x(), window.requestAnimationFrame((() => {
                        S.current = !0, x()
                    })))
                }), [b]);
                return {
                    referenceApi: {
                        referenceRef: b.setReference,
                        placement: h
                    },
                    floatingApi: {
                        floatingRef: b.setFloating,
                        props: n,
                        mounted: l,
                        setShow: t,
                        x: m,
                        y: v,
                        placement: h,
                        strategy: y,
                        referenceElWidth: E
                    },
                    arrowApi: {
                        arrowRef: p,
                        placement: h,
                        x: null == (o = w.arrow) ? void 0 : o.x,
                        y: null == (u = w.arrow) ? void 0 : u.y
                    },
                    x: m,
                    y: v,
                    placement: h,
                    strategy: y,
                    update: x,
                    refs: b,
                    middlewareData: w
                }
            }
            H.displayName = "ArrowContext";
            const K = (0, r.forwardRef)(((e, t) => {
                const [n, o] = (0, r.useState)(e.show ? ? !1), {
                    referenceApi: u,
                    floatingApi: l,
                    arrowApi: a,
                    placement: i
                } = J([n, o], e), s = {
                    placement: i
                }, [c, f] = "function" == typeof e.children ? e.children(s) : e.children;
                if (!(0, r.isValidElement)(c)) return console.warn("<Float /> is missing a reference and floating element."), k.jsx(r.Fragment, {});

                function p(n) {
                    if (e.as === r.Fragment || !e.as) return k.jsx(r.Fragment, {
                        children: n
                    });
                    const o = e.as;
                    return k.jsx(o, {
                        ref: t,
                        className: e.className,
                        children: n
                    })
                }
                if (e.composable || e.dialog) return p(k.jsx(_.Provider, {
                    value: u,
                    children: k.jsx(Y.Provider, {
                        value: l,
                        children: k.jsx(H.Provider, {
                            value: a,
                            children: "function" == typeof e.children ? e.children(s) : e.children
                        })
                    })
                }, "FloatingNode"));
                const d = G(c, {
                        as: r.Fragment
                    }, {
                        key: "reference-node"
                    }, u),
                    m = X(f, {
                        as: e.floatingAs || "div"
                    }, {}, l);
                return p([d, k.jsx(H.Provider, {
                    value: a,
                    children: m
                }, "floating-node")])
            }));

            function q({
                onInitial: e,
                children: t,
                ...n
            }) {
                const [o, u] = (0, r.useState)(n.show ? ? !1), l = (0, r.useMemo)((() => {
                    const {
                        as: e,
                        show: t,
                        placement: r,
                        strategy: o,
                        offset: u,
                        shift: l,
                        flip: a,
                        arrow: i,
                        autoPlacement: s,
                        hide: c,
                        autoUpdate: f,
                        zIndex: p,
                        enter: d,
                        enterFrom: m,
                        enterTo: v,
                        leave: h,
                        leaveFrom: y,
                        leaveTo: g,
                        originClass: b,
                        tailwindcssOriginClass: w,
                        portal: E,
                        transform: P,
                        middleware: x,
                        onShow: S,
                        onHide: C,
                        onUpdate: R,
                        ...j
                    } = n;
                    return j
                }), [n]), {
                    floatingApi: a,
                    arrowApi: i,
                    placement: s,
                    refs: c
                } = J([o, u], n);
                if ((0, r.useEffect)((() => {
                        u(n.show ? ? !1)
                    }), [n.show]), e({
                        show: o,
                        setShow: u,
                        placement: s,
                        refs: c
                    }), !t) return k.jsx(r.Fragment, {});
                const f = X("function" == typeof t ? t({
                    placement: s,
                    close: function() {
                        o && u(!1)
                    }
                }) : t, { ...n,
                    as: n.as || r.Fragment,
                    show: o
                }, l, a);
                return k.jsx(H.Provider, {
                    value: i,
                    children: f
                })
            }
            K.displayName = "Float";
            const Z = Object.assign(K, {
                Reference: function(e) {
                    if (!e.children) return k.jsx(r.Fragment, {});
                    const t = (0, r.useMemo)((() => {
                            const {
                                as: t,
                                children: n,
                                ...r
                            } = e;
                            return r
                        }), [e]),
                        n = U("Float.Reference"),
                        {
                            placement: o
                        } = n,
                        u = {
                            placement: o
                        };
                    return G("function" == typeof e.children ? e.children(u) : e.children, { ...e,
                        as: e.as || r.Fragment
                    }, t, n)
                },
                Content: function(e) {
                    if (!e.children) return k.jsx(r.Fragment, {});
                    const t = (0, r.useMemo)((() => {
                            const {
                                as: t,
                                enter: n,
                                enterFrom: r,
                                enterTo: o,
                                leave: u,
                                leaveFrom: l,
                                leaveTo: a,
                                originClass: i,
                                tailwindcssOriginClass: s,
                                transitionChild: c,
                                children: f,
                                ...p
                            } = e;
                            return p
                        }), [e]),
                        n = V("Float.Content"),
                        {
                            placement: o
                        } = n,
                        u = {
                            placement: o
                        };
                    return X("function" == typeof e.children ? e.children(u) : e.children, { ...e,
                        as: e.as || "div"
                    }, t, n)
                },
                Arrow: function(e) {
                    const {
                        arrowRef: t,
                        placement: n,
                        x: o,
                        y: u
                    } = W("Float.Arrow"), l = (0, r.useMemo)((() => {
                        const {
                            as: t,
                            offset: n,
                            children: r,
                            ...o
                        } = e;
                        return o
                    }), [e]), a = {
                        left: "number" == typeof o ? `${o}px` : void 0,
                        top: "number" == typeof u ? `${u}px` : void 0,
                        right: void 0,
                        bottom: void 0,
                        [{
                            top: "bottom",
                            right: "left",
                            bottom: "top",
                            left: "right"
                        }[n.split("-")[0]]]: -1 * (e.offset ? ? 4) + "px",
                        ...l.style
                    };
                    if (e.as === r.Fragment) {
                        const o = {
                                placement: n
                            },
                            u = "function" == typeof e.children ? e.children(o) : e.children;
                        return u && (0, r.isValidElement)(u) ? k.jsx(u.type, { ...u.props,
                            ref: t,
                            style: a
                        }) : k.jsx(r.Fragment, {})
                    }
                    const i = e.as || "div";
                    return k.jsx(i, {
                        ref: t,
                        ...l,
                        style: a,
                        children: e.children
                    })
                },
                Virtual: q,
                ContextMenu: function(e) {
                    return k.jsx(q, {
                        flip: !0,
                        ...e,
                        show: !1,
                        portal: !0,
                        onInitial: function({
                            setShow: e,
                            refs: t
                        }) {
                            z("contextmenu", (n => {
                                n.preventDefault(), t.setPositionReference({
                                    getBoundingClientRect: () => ({
                                        width: 0,
                                        height: 0,
                                        x: n.clientX,
                                        y: n.clientY,
                                        top: n.clientY,
                                        left: n.clientX,
                                        right: n.clientX,
                                        bottom: n.clientY
                                    })
                                }), e(!0)
                            })), D(t.floating, (() => {
                                e(!1)
                            }))
                        }
                    })
                },
                Cursor: function({
                    globalHideCursor: e,
                    ...t
                }) {
                    return k.jsx(q, { ...t,
                        portal: !0,
                        className: "headlesui-float-cursor-root",
                        onInitial: function({
                            setShow: t,
                            refs: n
                        }) {
                            function o() {
                                t(!0)
                            }

                            function u() {
                                t(!1)
                            }

                            function l(e) {
                                n.setPositionReference({
                                    getBoundingClientRect: () => ({
                                        width: 0,
                                        height: 0,
                                        x: e.clientX,
                                        y: e.clientY,
                                        top: e.clientY,
                                        left: e.clientX,
                                        right: e.clientX,
                                        bottom: e.clientY
                                    })
                                })
                            }

                            function a(e) {
                                o(), l(e)
                            }

                            function i(e) {
                                o(), l(e.touches[0])
                            }
                            const s = N(n.floating);
                            s && ((0, r.useEffect)((() => {
                                if ((e || void 0 === e) && !s.getElementById("headlesui-float-cursor-style")) {
                                    const e = s.createElement("style");
                                    return (s.head || s.getElementsByTagName("head")[0]).appendChild(e), e.id = "headlesui-float-cursor-style", e.appendChild(s.createTextNode(["*, *::before, *::after {", "  cursor: none !important;", "}", ".headlesui-float-cursor-root {", "  pointer-events: none !important;", "}"].join("\n"))), () => {
                                        var e;
                                        return null == (e = s.getElementById("headlesui-float-cursor-style")) ? void 0 : e.remove()
                                    }
                                }
                            }), [e]), "ontouchstart" in window || navigator.maxTouchPoints > 0 ? (z("touchstart", i), z("touchend", u), z("touchmove", i)) : (z("mouseenter", a), z("mouseleave", u), z("mousemove", a)))
                        }
                    })
                }
            })
        },
        48485: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return _
                }
            });
            var r, o, u = n(64386),
                l = n(4945),
                a = n(59932),
                i = n(17953),
                s = n(84795),
                c = n(49180),
                f = n(40523),
                p = n(41086),
                d = n(63511),
                m = n(82369),
                v = n(92698),
                h = n(49965),
                y = n(10810),
                g = n(2506),
                b = n(88645),
                w = n(17907),
                E = n(13487),
                P = n(75271),
                x = ((o = x || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
                S = ((r = S || {})[r.TogglePopover = 0] = "TogglePopover", r[r.ClosePopover = 1] = "ClosePopover", r[r.SetButton = 2] = "SetButton", r[r.SetButtonId = 3] = "SetButtonId", r[r.SetPanel = 4] = "SetPanel", r[r.SetPanelId = 5] = "SetPanelId", r);
            let C = {
                    0: e => ({ ...e,
                        popoverState: (0, l.E)(e.popoverState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.popoverState ? e : { ...e,
                        popoverState: 1
                    },
                    2: (e, t) => e.button === t.button ? e : { ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : { ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : { ...e,
                        panelId: t.panelId
                    }
                },
                R = (0, u.createContext)(null);

            function j(e) {
                let t = (0, u.useContext)(R);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, j), t
                }
                return t
            }
            R.displayName = "PopoverContext";
            let F = (0, u.createContext)(null);

            function I(e) {
                let t = (0, u.useContext)(F);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, I), t
                }
                return t
            }
            F.displayName = "PopoverAPIContext";
            let T = (0, u.createContext)(null);

            function O() {
                return (0, u.useContext)(T)
            }
            T.displayName = "PopoverGroupContext";
            let k = (0, u.createContext)(null);

            function M(e, t) {
                return (0, l.E)(t.type, C, e, t)
            }
            k.displayName = "PopoverPanelContext";
            let A = (0, a.yV)((function(e, t) {
                    var n;
                    let r = (0, u.useRef)(null),
                        o = (0, i.T)(t, (0, i.h)((e => {
                            r.current = e
                        }))),
                        s = (0, u.useReducer)(M, {
                            popoverState: 1,
                            buttons: [],
                            button: null,
                            buttonId: null,
                            panel: null,
                            panelId: null,
                            beforePanelSentinel: (0, u.createRef)(),
                            afterPanelSentinel: (0, u.createRef)()
                        }),
                        [{
                            popoverState: c,
                            button: f,
                            buttonId: m,
                            panel: h,
                            panelId: b,
                            beforePanelSentinel: E,
                            afterPanelSentinel: x
                        }, S] = s,
                        C = (0, y.i)(null != (n = r.current) ? n : f),
                        j = (0, u.useMemo)((() => {
                            if (!f || !h) return !1;
                            for (let l of document.querySelectorAll("body > *"))
                                if (Number(null == l ? void 0 : l.contains(f)) ^ Number(null == l ? void 0 : l.contains(h))) return !0;
                            let e = (0, p.GO)(),
                                t = e.indexOf(f),
                                n = (t + e.length - 1) % e.length,
                                r = (t + 1) % e.length,
                                o = e[n],
                                u = e[r];
                            return !h.contains(o) && !h.contains(u)
                        }), [f, h]),
                        I = (0, P.E)(m),
                        T = (0, P.E)(b),
                        k = (0, u.useMemo)((() => ({
                            buttonId: I,
                            panelId: T,
                            close: () => S({
                                type: 1
                            })
                        })), [I, T, S]),
                        A = O(),
                        N = null == A ? void 0 : A.registerPopover,
                        $ = (0, w.z)((() => {
                            var e;
                            return null != (e = null == A ? void 0 : A.isFocusWithinPopoverGroup()) ? e : (null == C ? void 0 : C.activeElement) && ((null == f ? void 0 : f.contains(C.activeElement)) || (null == h ? void 0 : h.contains(C.activeElement)))
                        }));
                    (0, u.useEffect)((() => null == N ? void 0 : N(k)), [N, k]), (0, g.O)(null == C ? void 0 : C.defaultView, "focus", (e => {
                        var t, n, r, o;
                        0 === c && ($() || !f || !h || e.target !== window && (null != (n = null == (t = E.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = x.current) ? void 0 : r.contains) && o.call(r, e.target) || S({
                            type: 1
                        })))
                    }), !0), (0, v.O)([f, h], ((e, t) => {
                        S({
                            type: 1
                        }), (0, p.sP)(t, p.tJ.Loose) || (e.preventDefault(), null == f || f.focus())
                    }), 0 === c);
                    let L = (0, w.z)((e => {
                            S({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : f : f;
                            null == t || t.focus()
                        })),
                        B = (0, u.useMemo)((() => ({
                            close: L,
                            isPortalled: j
                        })), [L, j]),
                        z = (0, u.useMemo)((() => ({
                            open: 0 === c,
                            close: L
                        })), [c, L]),
                        D = e,
                        _ = {
                            ref: o
                        };
                    return u.createElement(R.Provider, {
                        value: s
                    }, u.createElement(F.Provider, {
                        value: B
                    }, u.createElement(d.up, {
                        value: (0, l.E)(c, {
                            0: d.ZM.Open,
                            1: d.ZM.Closed
                        })
                    }, (0, a.sY)({
                        ourProps: _,
                        theirProps: D,
                        slot: z,
                        defaultTag: "div",
                        name: "Popover"
                    }))))
                })),
                N = (0, a.yV)((function(e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-button-${n}`,
                            ...o
                        } = e,
                        [d, v] = j("Popover.Button"),
                        {
                            isPortalled: h
                        } = I("Popover.Button"),
                        g = (0, u.useRef)(null),
                        P = `headlessui-focus-sentinel-${(0,s.M)()}`,
                        x = O(),
                        S = null == x ? void 0 : x.closeOthers,
                        C = (0, u.useContext)(k),
                        R = null !== C && C === d.panelId;
                    (0, u.useEffect)((() => {
                        if (!R) return v({
                            type: 3,
                            buttonId: r
                        }), () => {
                            v({
                                type: 3,
                                buttonId: null
                            })
                        }
                    }), [r, v]);
                    let F = (0, i.T)(g, t, R ? null : e => {
                            if (e) d.buttons.push(r);
                            else {
                                let e = d.buttons.indexOf(r); - 1 !== e && d.buttons.splice(e, 1)
                            }
                            d.buttons.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && v({
                                type: 2,
                                button: e
                            })
                        }),
                        T = (0, i.T)(g, t),
                        M = (0, y.i)(g),
                        A = (0, w.z)((e => {
                            var t, n, r;
                            if (R) {
                                if (1 === d.popoverState) return;
                                switch (e.key) {
                                    case c.R.Space:
                                    case c.R.Enter:
                                        e.preventDefault(), null == (n = (t = e.target).click) || n.call(t), v({
                                            type: 1
                                        }), null == (r = d.button) || r.focus()
                                }
                            } else switch (e.key) {
                                case c.R.Space:
                                case c.R.Enter:
                                    e.preventDefault(), e.stopPropagation(), 1 === d.popoverState && (null == S || S(d.buttonId)), v({
                                        type: 0
                                    });
                                    break;
                                case c.R.Escape:
                                    if (0 !== d.popoverState) return null == S ? void 0 : S(d.buttonId);
                                    if (!g.current || (null == M ? void 0 : M.activeElement) && !g.current.contains(M.activeElement)) return;
                                    e.preventDefault(), e.stopPropagation(), v({
                                        type: 1
                                    })
                            }
                        })),
                        N = (0, w.z)((e => {
                            R || e.key === c.R.Space && e.preventDefault()
                        })),
                        $ = (0, w.z)((t => {
                            var n, r;
                            (0, f.P)(t.currentTarget) || e.disabled || (R ? (v({
                                type: 1
                            }), null == (n = d.button) || n.focus()) : (t.preventDefault(), t.stopPropagation(), 1 === d.popoverState && (null == S || S(d.buttonId)), v({
                                type: 0
                            }), null == (r = d.button) || r.focus()))
                        })),
                        L = (0, w.z)((e => {
                            e.preventDefault(), e.stopPropagation()
                        })),
                        B = 0 === d.popoverState,
                        z = (0, u.useMemo)((() => ({
                            open: B
                        })), [B]),
                        D = (0, m.f)(e, g),
                        _ = R ? {
                            ref: T,
                            type: D,
                            onKeyDown: A,
                            onClick: $
                        } : {
                            ref: F,
                            id: d.buttonId,
                            type: D,
                            "aria-expanded": e.disabled ? void 0 : 0 === d.popoverState,
                            "aria-controls": d.panel ? d.panelId : void 0,
                            onKeyDown: A,
                            onKeyUp: N,
                            onClick: $,
                            onMouseDown: L
                        },
                        Y = (0, E.l)(),
                        H = (0, w.z)((() => {
                            let e = d.panel;
                            e && (0, l.E)(Y.current, {
                                [E.N.Forwards]: () => (0, p.jA)(e, p.TO.First),
                                [E.N.Backwards]: () => (0, p.jA)(e, p.TO.Last)
                            })
                        }));
                    return u.createElement(u.Fragment, null, (0, a.sY)({
                        ourProps: _,
                        theirProps: o,
                        slot: z,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), B && !R && h && u.createElement(b._, {
                        id: P,
                        features: b.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: H
                    }))
                })),
                $ = a.AN.RenderStrategy | a.AN.Static,
                L = (0, a.yV)((function(e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-overlay-${n}`,
                            ...o
                        } = e,
                        [{
                            popoverState: l
                        }, c] = j("Popover.Overlay"),
                        p = (0, i.T)(t),
                        m = (0, d.oJ)(),
                        v = null !== m ? m === d.ZM.Open : 0 === l,
                        h = (0, w.z)((e => {
                            if ((0, f.P)(e.currentTarget)) return e.preventDefault();
                            c({
                                type: 1
                            })
                        })),
                        y = (0, u.useMemo)((() => ({
                            open: 0 === l
                        })), [l]);
                    return (0, a.sY)({
                        ourProps: {
                            ref: p,
                            id: r,
                            "aria-hidden": !0,
                            onClick: h
                        },
                        theirProps: o,
                        slot: y,
                        defaultTag: "div",
                        features: $,
                        visible: v,
                        name: "Popover.Overlay"
                    })
                })),
                B = a.AN.RenderStrategy | a.AN.Static,
                z = (0, a.yV)((function(e, t) {
                    let n = (0, s.M)(),
                        {
                            id: r = `headlessui-popover-panel-${n}`,
                            focus: o = !1,
                            ...f
                        } = e,
                        [m, v] = j("Popover.Panel"),
                        {
                            close: h,
                            isPortalled: g
                        } = I("Popover.Panel"),
                        P = `headlessui-focus-sentinel-before-${(0,s.M)()}`,
                        x = `headlessui-focus-sentinel-after-${(0,s.M)()}`,
                        S = (0, u.useRef)(null),
                        C = (0, i.T)(S, t, (e => {
                            v({
                                type: 4,
                                panel: e
                            })
                        })),
                        R = (0, y.i)(S);
                    (0, u.useEffect)((() => (v({
                        type: 5,
                        panelId: r
                    }), () => {
                        v({
                            type: 5,
                            panelId: null
                        })
                    })), [r, v]);
                    let F = (0, d.oJ)(),
                        T = null !== F ? F === d.ZM.Open : 0 === m.popoverState,
                        O = (0, w.z)((e => {
                            var t;
                            if (e.key === c.R.Escape) {
                                if (0 !== m.popoverState || !S.current || (null == R ? void 0 : R.activeElement) && !S.current.contains(R.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), v({
                                    type: 1
                                }), null == (t = m.button) || t.focus()
                            }
                        }));
                    (0, u.useEffect)((() => {
                        var t;
                        e.static || 1 === m.popoverState && (null == (t = e.unmount) || t) && v({
                            type: 4,
                            panel: null
                        })
                    }), [m.popoverState, e.unmount, e.static, v]), (0, u.useEffect)((() => {
                        if (!o || 0 !== m.popoverState || !S.current) return;
                        let e = null == R ? void 0 : R.activeElement;
                        S.current.contains(e) || (0, p.jA)(S.current, p.TO.First)
                    }), [o, S, m.popoverState]);
                    let M = (0, u.useMemo)((() => ({
                            open: 0 === m.popoverState,
                            close: h
                        })), [m, h]),
                        A = {
                            ref: C,
                            id: m.panelId,
                            onKeyDown: O,
                            onBlur: o && 0 === m.popoverState ? e => {
                                var t, n, r, o, u;
                                let l = e.relatedTarget;
                                !l || !S.current || null != (t = S.current) && t.contains(l) || (v({
                                    type: 1
                                }), ((null == (r = null == (n = m.beforePanelSentinel.current) ? void 0 : n.contains) ? void 0 : r.call(n, l)) || (null == (u = null == (o = m.afterPanelSentinel.current) ? void 0 : o.contains) ? void 0 : u.call(o, l))) && l.focus({
                                    preventScroll: !0
                                }))
                            } : void 0,
                            tabIndex: -1
                        },
                        N = (0, E.l)(),
                        $ = (0, w.z)((() => {
                            let e = S.current;
                            e && (0, l.E)(N.current, {
                                [E.N.Forwards]: () => {
                                    (0, p.jA)(e, p.TO.First)
                                },
                                [E.N.Backwards]: () => {
                                    var e;
                                    null == (e = m.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        })),
                        L = (0, w.z)((() => {
                            let e = S.current;
                            e && (0, l.E)(N.current, {
                                [E.N.Forwards]: () => {
                                    var e, t, n;
                                    if (!m.button) return;
                                    let r = (0, p.GO)(),
                                        o = r.indexOf(m.button),
                                        u = r.slice(0, o + 1),
                                        l = [...r.slice(o + 1), ...u];
                                    for (let a of l.slice())
                                        if ((null == (t = null == (e = null == a ? void 0 : a.id) ? void 0 : e.startsWith) ? void 0 : t.call(e, "headlessui-focus-sentinel-")) || (null == (n = m.panel) ? void 0 : n.contains(a))) {
                                            let e = l.indexOf(a); - 1 !== e && l.splice(e, 1)
                                        }(0, p.jA)(l, p.TO.First, !1)
                                },
                                [E.N.Backwards]: () => (0, p.jA)(e, p.TO.Last)
                            })
                        }));
                    return u.createElement(k.Provider, {
                        value: m.panelId
                    }, T && g && u.createElement(b._, {
                        id: P,
                        ref: m.beforePanelSentinel,
                        features: b.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: $
                    }), (0, a.sY)({
                        ourProps: A,
                        theirProps: f,
                        slot: M,
                        defaultTag: "div",
                        features: B,
                        visible: T,
                        name: "Popover.Panel"
                    }), T && g && u.createElement(b._, {
                        id: x,
                        ref: m.afterPanelSentinel,
                        features: b.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: L
                    }))
                })),
                D = (0, a.yV)((function(e, t) {
                    let n = (0, u.useRef)(null),
                        r = (0, i.T)(n, t),
                        [o, l] = (0, u.useState)([]),
                        s = (0, w.z)((e => {
                            l((t => {
                                let n = t.indexOf(e);
                                if (-1 !== n) {
                                    let e = t.slice();
                                    return e.splice(n, 1), e
                                }
                                return t
                            }))
                        })),
                        c = (0, w.z)((e => (l((t => [...t, e])), () => s(e)))),
                        f = (0, w.z)((() => {
                            var e;
                            let t = (0, h.r)(n);
                            if (!t) return !1;
                            let r = t.activeElement;
                            return !(null == (e = n.current) || !e.contains(r)) || o.some((e => {
                                var n, o;
                                return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(r))
                            }))
                        })),
                        p = (0, w.z)((e => {
                            for (let t of o) t.buttonId.current !== e && t.close()
                        })),
                        d = (0, u.useMemo)((() => ({
                            registerPopover: c,
                            unregisterPopover: s,
                            isFocusWithinPopoverGroup: f,
                            closeOthers: p
                        })), [c, s, f, p]),
                        m = (0, u.useMemo)((() => ({})), []),
                        v = e,
                        y = {
                            ref: r
                        };
                    return u.createElement(T.Provider, {
                        value: d
                    }, (0, a.sY)({
                        ourProps: y,
                        theirProps: v,
                        slot: m,
                        defaultTag: "div",
                        name: "Popover.Group"
                    }))
                })),
                _ = Object.assign(A, {
                    Button: N,
                    Overlay: L,
                    Panel: z,
                    Group: D
                })
        },
        2506: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = n(64386),
                o = n(75271);

            function u(e, t, n, u) {
                let l = (0, o.E)(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        l.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, u), () => e.removeEventListener(t, n, u)
                }), [e, t, u])
            }
        },
        92698: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var r = n(64386),
                o = n(41086),
                u = n(75271);

            function l(e, t, n) {
                let o = (0, u.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }

            function a(e, t, n = !0) {
                let u = (0, r.useRef)(!1);

                function a(n, r) {
                    if (!u.current || n.defaultPrevented) return;
                    let l = function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(e),
                        a = r(n);
                    if (null !== a && a.getRootNode().contains(a)) {
                        for (let e of l) {
                            if (null === e) continue;
                            let t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(a) || n.composed && n.composedPath().includes(t)) return
                        }
                        return !(0, o.sP)(a, o.tJ.Loose) && -1 !== a.tabIndex && n.preventDefault(), t(n, a)
                    }
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        u.current = n
                    }))
                }), [n]);
                let i = (0, r.useRef)(null);
                l("mousedown", (e => {
                    var t, n;
                    u.current && (i.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), l("click", (e => {
                    !i.current || (a(e, (() => i.current)), i.current = null)
                }), !0), l("blur", (e => a(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
        },
        82369: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return l
                }
            });
            var r = n(64386),
                o = n(34082);

            function u(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function l(e, t) {
                let [n, l] = (0, r.useState)((() => u(e)));
                return (0, o.e)((() => {
                    l(u(e))
                }), [e.type, e.as]), (0, o.e)((() => {
                    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && l("button")
                }), [n, t]), n
            }
        },
        13487: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return l
                },
                l: function() {
                    return a
                }
            });
            var r = n(64386),
                o = n(75271);
            var u, l = ((u = l || {})[u.Forwards = 0] = "Forwards", u[u.Backwards = 1] = "Backwards", u);

            function a() {
                let e = (0, r.useRef)(0);
                return function(e, t, n) {
                    let u = (0, o.E)(t);
                    (0, r.useEffect)((() => {
                        function t(e) {
                            u.current(e)
                        }
                        return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                    }), [e, n])
                }("keydown", (t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }), !0), e
            }
        }
    }
]);