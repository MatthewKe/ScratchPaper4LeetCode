"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5250], {
        68949: function(t, e, n) {
            n.d(e, {
                Cp: function() {
                    return d
                },
                RR: function() {
                    return f
                },
                X5: function() {
                    return s
                },
                cv: function() {
                    return p
                },
                dp: function() {
                    return g
                },
                dr: function() {
                    return h
                },
                oo: function() {
                    return r
                },
                uY: function() {
                    return m
                },
                x7: function() {
                    return l
                }
            });
            var o = n(63175);

            function i(t, e, n) {
                let {
                    reference: i,
                    floating: r
                } = t;
                const c = (0, o.Qq)(e),
                    l = (0, o.Wh)(e),
                    s = (0, o.I4)(l),
                    f = (0, o.k3)(e),
                    a = "y" === c,
                    u = i.x + i.width / 2 - r.width / 2,
                    d = i.y + i.height / 2 - r.height / 2,
                    p = i[s] / 2 - r[s] / 2;
                let m;
                switch (f) {
                    case "top":
                        m = {
                            x: u,
                            y: i.y - r.height
                        };
                        break;
                    case "bottom":
                        m = {
                            x: u,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        m = {
                            x: i.x + i.width,
                            y: d
                        };
                        break;
                    case "left":
                        m = {
                            x: i.x - r.width,
                            y: d
                        };
                        break;
                    default:
                        m = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, o.hp)(e)) {
                    case "start":
                        m[l] -= p * (n && a ? -1 : 1);
                        break;
                    case "end":
                        m[l] += p * (n && a ? -1 : 1)
                }
                return m
            }
            const r = async (t, e, n) => {
                const {
                    placement: o = "bottom",
                    strategy: r = "absolute",
                    middleware: c = [],
                    platform: l
                } = n, s = c.filter(Boolean), f = await (null == l.isRTL ? void 0 : l.isRTL(e));
                let a = await l.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: r
                    }),
                    {
                        x: u,
                        y: d
                    } = i(a, o, f),
                    p = o,
                    m = {},
                    h = 0;
                for (let g = 0; g < s.length; g++) {
                    const {
                        name: n,
                        fn: c
                    } = s[g], {
                        x: y,
                        y: w,
                        data: x,
                        reset: v
                    } = await c({
                        x: u,
                        y: d,
                        initialPlacement: o,
                        placement: p,
                        strategy: r,
                        middlewareData: m,
                        rects: a,
                        platform: l,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    u = null != y ? y : u, d = null != w ? w : d, m = { ...m,
                        [n]: { ...m[n],
                            ...x
                        }
                    }, v && h <= 50 && (h++, "object" === typeof v && (v.placement && (p = v.placement), v.rects && (a = !0 === v.rects ? await l.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: r
                    }) : v.rects), ({
                        x: u,
                        y: d
                    } = i(a, p, f))), g = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: p,
                    strategy: r,
                    middlewareData: m
                }
            };
            async function c(t, e) {
                var n;
                void 0 === e && (e = {});
                const {
                    x: i,
                    y: r,
                    platform: c,
                    rects: l,
                    elements: s,
                    strategy: f
                } = t, {
                    boundary: a = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: m = 0
                } = (0, o.ku)(e, t), h = (0, o.yd)(m), g = s[p ? "floating" === d ? "reference" : "floating" : d], y = (0, o.JB)(await c.getClippingRect({
                    element: null == (n = await (null == c.isElement ? void 0 : c.isElement(g))) || n ? g : g.contextElement || await (null == c.getDocumentElement ? void 0 : c.getDocumentElement(s.floating)),
                    boundary: a,
                    rootBoundary: u,
                    strategy: f
                })), w = "floating" === d ? { ...l.floating,
                    x: i,
                    y: r
                } : l.reference, x = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(s.floating)), v = await (null == c.isElement ? void 0 : c.isElement(x)) && await (null == c.getScale ? void 0 : c.getScale(x)) || {
                    x: 1,
                    y: 1
                }, b = (0, o.JB)(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: w,
                    offsetParent: x,
                    strategy: f
                }) : w);
                return {
                    top: (y.top - b.top + h.top) / v.y,
                    bottom: (b.bottom - y.bottom + h.bottom) / v.y,
                    left: (y.left - b.left + h.left) / v.x,
                    right: (b.right - y.right + h.right) / v.x
                }
            }
            const l = t => ({
                name: "arrow",
                options: t,
                async fn(e) {
                    const {
                        x: n,
                        y: i,
                        placement: r,
                        rects: c,
                        platform: l,
                        elements: s
                    } = e, {
                        element: f,
                        padding: a = 0
                    } = (0, o.ku)(t, e) || {};
                    if (null == f) return {};
                    const u = (0, o.yd)(a),
                        d = {
                            x: n,
                            y: i
                        },
                        p = (0, o.Wh)(r),
                        m = (0, o.I4)(p),
                        h = await l.getDimensions(f),
                        g = "y" === p,
                        y = g ? "top" : "left",
                        w = g ? "bottom" : "right",
                        x = g ? "clientHeight" : "clientWidth",
                        v = c.reference[m] + c.reference[p] - d[p] - c.floating[m],
                        b = d[p] - c.reference[p],
                        R = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
                    let k = R ? R[x] : 0;
                    k && await (null == l.isElement ? void 0 : l.isElement(R)) || (k = s.floating[x] || c.floating[m]);
                    const A = v / 2 - b / 2,
                        T = k / 2 - h[m] / 2 - 1,
                        L = (0, o.VV)(u[y], T),
                        E = (0, o.VV)(u[w], T),
                        F = L,
                        V = k - h[m] - E,
                        C = k / 2 - h[m] / 2 + A,
                        D = (0, o.uZ)(F, C, V),
                        P = null != (0, o.hp)(r) && C != D && c.reference[m] / 2 - (C < F ? L : E) - h[m] / 2 < 0 ? C < F ? F - C : V - C : 0;
                    return {
                        [p]: d[p] - P,
                        data: {
                            [p]: D,
                            centerOffset: C - D + P
                        }
                    }
                }
            });
            const s = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "autoPlacement",
                        options: t,
                        async fn(e) {
                            var n, i, r;
                            const {
                                rects: l,
                                middlewareData: s,
                                placement: f,
                                platform: a,
                                elements: u
                            } = e, {
                                crossAxis: d = !1,
                                alignment: p,
                                allowedPlacements: m = o.Ct,
                                autoAlignment: h = !0,
                                ...g
                            } = (0, o.ku)(t, e), y = void 0 !== p || m === o.Ct ? function(t, e, n) {
                                return (t ? [...n.filter((e => (0, o.hp)(e) === t)), ...n.filter((e => (0, o.hp)(e) !== t))] : n.filter((t => (0, o.k3)(t) === t))).filter((n => !t || (0, o.hp)(n) === t || !!e && (0, o.Go)(n) !== n))
                            }(p || null, h, m) : m, w = await c(e, g), x = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0, v = y[x];
                            if (null == v) return {};
                            const b = (0, o.i8)(v, l, await (null == a.isRTL ? void 0 : a.isRTL(u.floating)));
                            if (f !== v) return {
                                reset: {
                                    placement: y[0]
                                }
                            };
                            const R = [w[(0, o.k3)(v)], w[b[0]], w[b[1]]],
                                k = [...(null == (i = s.autoPlacement) ? void 0 : i.overflows) || [], {
                                    placement: v,
                                    overflows: R
                                }],
                                A = y[x + 1];
                            if (A) return {
                                data: {
                                    index: x + 1,
                                    overflows: k
                                },
                                reset: {
                                    placement: A
                                }
                            };
                            const T = k.map((t => {
                                    const e = (0, o.hp)(t.placement);
                                    return [t.placement, e && d ? t.overflows.slice(0, 2).reduce(((t, e) => t + e), 0) : t.overflows[0], t.overflows]
                                })).sort(((t, e) => t[1] - e[1])),
                                L = (null == (r = T.filter((t => t[2].slice(0, (0, o.hp)(t[0]) ? 2 : 3).every((t => t <= 0))))[0]) ? void 0 : r[0]) || T[0][0];
                            return L !== f ? {
                                data: {
                                    index: x + 1,
                                    overflows: k
                                },
                                reset: {
                                    placement: L
                                }
                            } : {}
                        }
                    }
                },
                f = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n;
                            const {
                                placement: i,
                                middlewareData: r,
                                rects: l,
                                initialPlacement: s,
                                platform: f,
                                elements: a
                            } = e, {
                                mainAxis: u = !0,
                                crossAxis: d = !0,
                                fallbackPlacements: p,
                                fallbackStrategy: m = "bestFit",
                                fallbackAxisSideDirection: h = "none",
                                flipAlignment: g = !0,
                                ...y
                            } = (0, o.ku)(t, e), w = (0, o.k3)(i), x = (0, o.k3)(s) === s, v = await (null == f.isRTL ? void 0 : f.isRTL(a.floating)), b = p || (x || !g ? [(0, o.pw)(s)] : (0, o.gy)(s));
                            p || "none" === h || b.push(...(0, o.KX)(s, g, h, v));
                            const R = [s, ...b],
                                k = await c(e, y),
                                A = [];
                            let T = (null == (n = r.flip) ? void 0 : n.overflows) || [];
                            if (u && A.push(k[w]), d) {
                                const t = (0, o.i8)(i, l, v);
                                A.push(k[t[0]], k[t[1]])
                            }
                            if (T = [...T, {
                                    placement: i,
                                    overflows: A
                                }], !A.every((t => t <= 0))) {
                                var L, E;
                                const t = ((null == (L = r.flip) ? void 0 : L.index) || 0) + 1,
                                    e = R[t];
                                if (e) return {
                                    data: {
                                        index: t,
                                        overflows: T
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = null == (E = T.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : E.placement;
                                if (!n) switch (m) {
                                    case "bestFit":
                                        {
                                            var F;
                                            const t = null == (F = T.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : F[0];t && (n = t);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = s
                                }
                                if (i !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function a(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function u(t) {
                return o.mA.some((e => t[e] >= 0))
            }
            const d = function(t) {
                return void 0 === t && (t = {}), {
                    name: "hide",
                    options: t,
                    async fn(e) {
                        const {
                            rects: n
                        } = e, {
                            strategy: i = "referenceHidden",
                            ...r
                        } = (0, o.ku)(t, e);
                        switch (i) {
                            case "referenceHidden":
                                {
                                    const t = a(await c(e, { ...r,
                                        elementContext: "reference"
                                    }), n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: t,
                                            referenceHidden: u(t)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    const t = a(await c(e, { ...r,
                                        altBoundary: !0
                                    }), n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: t,
                                            escaped: u(t)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };
            const p = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            const {
                                x: n,
                                y: i
                            } = e, r = await async function(t, e) {
                                const {
                                    placement: n,
                                    platform: i,
                                    elements: r
                                } = t, c = await (null == i.isRTL ? void 0 : i.isRTL(r.floating)), l = (0, o.k3)(n), s = (0, o.hp)(n), f = "y" === (0, o.Qq)(n), a = ["left", "top"].includes(l) ? -1 : 1, u = c && f ? -1 : 1, d = (0, o.ku)(e, t);
                                let {
                                    mainAxis: p,
                                    crossAxis: m,
                                    alignmentAxis: h
                                } = "number" === typeof d ? {
                                    mainAxis: d,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...d
                                };
                                return s && "number" === typeof h && (m = "end" === s ? -1 * h : h), f ? {
                                    x: m * u,
                                    y: p * a
                                } : {
                                    x: p * a,
                                    y: m * u
                                }
                            }(e, t);
                            return {
                                x: n + r.x,
                                y: i + r.y,
                                data: r
                            }
                        }
                    }
                },
                m = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            const {
                                x: n,
                                y: i,
                                placement: r
                            } = e, {
                                mainAxis: l = !0,
                                crossAxis: s = !1,
                                limiter: f = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...a
                            } = (0, o.ku)(t, e), u = {
                                x: n,
                                y: i
                            }, d = await c(e, a), p = (0, o.Qq)((0, o.k3)(r)), m = (0, o.Rn)(p);
                            let h = u[m],
                                g = u[p];
                            if (l) {
                                const t = "y" === m ? "bottom" : "right",
                                    e = h + d["y" === m ? "top" : "left"],
                                    n = h - d[t];
                                h = (0, o.uZ)(e, h, n)
                            }
                            if (s) {
                                const t = "y" === p ? "bottom" : "right",
                                    e = g + d["y" === p ? "top" : "left"],
                                    n = g - d[t];
                                g = (0, o.uZ)(e, g, n)
                            }
                            const y = f.fn({ ...e,
                                [m]: h,
                                [p]: g
                            });
                            return { ...y,
                                data: {
                                    x: y.x - n,
                                    y: y.y - i
                                }
                            }
                        }
                    }
                },
                h = function(t) {
                    return void 0 === t && (t = {}), {
                        options: t,
                        fn(e) {
                            const {
                                x: n,
                                y: i,
                                placement: r,
                                rects: c,
                                middlewareData: l
                            } = e, {
                                offset: s = 0,
                                mainAxis: f = !0,
                                crossAxis: a = !0
                            } = (0, o.ku)(t, e), u = {
                                x: n,
                                y: i
                            }, d = (0, o.Qq)(r), p = (0, o.Rn)(d);
                            let m = u[p],
                                h = u[d];
                            const g = (0, o.ku)(s, e),
                                y = "number" === typeof g ? {
                                    mainAxis: g,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...g
                                };
                            if (f) {
                                const t = "y" === p ? "height" : "width",
                                    e = c.reference[p] - c.floating[t] + y.mainAxis,
                                    n = c.reference[p] + c.reference[t] - y.mainAxis;
                                m < e ? m = e : m > n && (m = n)
                            }
                            if (a) {
                                var w, x;
                                const t = "y" === p ? "width" : "height",
                                    e = ["top", "left"].includes((0, o.k3)(r)),
                                    n = c.reference[d] - c.floating[t] + (e && (null == (w = l.offset) ? void 0 : w[d]) || 0) + (e ? 0 : y.crossAxis),
                                    i = c.reference[d] + c.reference[t] + (e ? 0 : (null == (x = l.offset) ? void 0 : x[d]) || 0) - (e ? y.crossAxis : 0);
                                h < n ? h = n : h > i && (h = i)
                            }
                            return {
                                [p]: m,
                                [d]: h
                            }
                        }
                    }
                },
                g = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            const {
                                placement: n,
                                rects: i,
                                platform: r,
                                elements: l
                            } = e, {
                                apply: s = (() => {}),
                                ...f
                            } = (0, o.ku)(t, e), a = await c(e, f), u = (0, o.k3)(n), d = (0, o.hp)(n), p = "y" === (0, o.Qq)(n), {
                                width: m,
                                height: h
                            } = i.floating;
                            let g, y;
                            "top" === u || "bottom" === u ? (g = u, y = d === (await (null == r.isRTL ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = u, g = "end" === d ? "top" : "bottom");
                            const w = h - a[g],
                                x = m - a[y],
                                v = !e.middlewareData.shift;
                            let b = w,
                                R = x;
                            if (p) {
                                const t = m - a.left - a.right;
                                R = d || v ? (0, o.VV)(x, t) : t
                            } else {
                                const t = h - a.top - a.bottom;
                                b = d || v ? (0, o.VV)(w, t) : t
                            }
                            if (v && !d) {
                                const t = (0, o.Fp)(a.left, 0),
                                    e = (0, o.Fp)(a.right, 0),
                                    n = (0, o.Fp)(a.top, 0),
                                    i = (0, o.Fp)(a.bottom, 0);
                                p ? R = m - 2 * (0 !== t || 0 !== e ? t + e : (0, o.Fp)(a.left, a.right)) : b = h - 2 * (0 !== n || 0 !== i ? n + i : (0, o.Fp)(a.top, a.bottom))
                            }
                            await s({ ...e,
                                availableWidth: R,
                                availableHeight: b
                            });
                            const k = await r.getDimensions(l.floating);
                            return m !== k.width || h !== k.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        15250: function(t, e, n) {
            n.d(e, {
                Me: function() {
                    return S
                },
                oo: function() {
                    return z
                }
            });
            var o = n(63175),
                i = n(68949);

            function r(t) {
                return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function c(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function l(t) {
                var e;
                return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function s(t) {
                return t instanceof Node || t instanceof c(t).Node
            }

            function f(t) {
                return t instanceof Element || t instanceof c(t).Element
            }

            function a(t) {
                return t instanceof HTMLElement || t instanceof c(t).HTMLElement
            }

            function u(t) {
                return "undefined" !== typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof c(t).ShadowRoot)
            }

            function d(t) {
                const {
                    overflow: e,
                    overflowX: n,
                    overflowY: o,
                    display: i
                } = y(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i)
            }

            function p(t) {
                return ["table", "td", "th"].includes(r(t))
            }

            function m(t) {
                const e = h(),
                    n = y(t);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
            }

            function h() {
                return !("undefined" === typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function g(t) {
                return ["html", "body", "#document"].includes(r(t))
            }

            function y(t) {
                return c(t).getComputedStyle(t)
            }

            function w(t) {
                return f(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function x(t) {
                if ("html" === r(t)) return t;
                const e = t.assignedSlot || t.parentNode || u(t) && t.host || l(t);
                return u(e) ? e.host : e
            }

            function v(t) {
                const e = x(t);
                return g(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : a(e) && d(e) ? e : v(e)
            }

            function b(t, e) {
                var n;
                void 0 === e && (e = []);
                const o = v(t),
                    i = o === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    r = c(o);
                return i ? e.concat(r, r.visualViewport || [], d(o) ? o : []) : e.concat(o, b(o))
            }

            function R(t) {
                const e = y(t);
                let n = parseFloat(e.width) || 0,
                    i = parseFloat(e.height) || 0;
                const r = a(t),
                    c = r ? t.offsetWidth : n,
                    l = r ? t.offsetHeight : i,
                    s = (0, o.NM)(n) !== c || (0, o.NM)(i) !== l;
                return s && (n = c, i = l), {
                    width: n,
                    height: i,
                    $: s
                }
            }

            function k(t) {
                return f(t) ? t : t.contextElement
            }

            function A(t) {
                const e = k(t);
                if (!a(e)) return (0, o.ze)(1);
                const n = e.getBoundingClientRect(),
                    {
                        width: i,
                        height: r,
                        $: c
                    } = R(e);
                let l = (c ? (0, o.NM)(n.width) : n.width) / i,
                    s = (c ? (0, o.NM)(n.height) : n.height) / r;
                return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
                    x: l,
                    y: s
                }
            }
            const T = (0, o.ze)(0);

            function L(t) {
                const e = c(t);
                return h() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : T
            }

            function E(t, e, n, i) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const r = t.getBoundingClientRect(),
                    l = k(t);
                let s = (0, o.ze)(1);
                e && (i ? f(i) && (s = A(i)) : s = A(t));
                const a = function(t, e, n) {
                    return void 0 === e && (e = !1), !(!n || e && n !== c(t)) && e
                }(l, n, i) ? L(l) : (0, o.ze)(0);
                let u = (r.left + a.x) / s.x,
                    d = (r.top + a.y) / s.y,
                    p = r.width / s.x,
                    m = r.height / s.y;
                if (l) {
                    const t = c(l),
                        e = i && f(i) ? c(i) : i;
                    let n = t.frameElement;
                    for (; n && i && e !== t;) {
                        const t = A(n),
                            e = n.getBoundingClientRect(),
                            o = y(n),
                            i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                            r = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
                        u *= t.x, d *= t.y, p *= t.x, m *= t.y, u += i, d += r, n = c(n).frameElement
                    }
                }
                return (0, o.JB)({
                    width: p,
                    height: m,
                    x: u,
                    y: d
                })
            }

            function F(t) {
                return E(l(t)).left + w(t).scrollLeft
            }

            function V(t, e, n) {
                let i;
                if ("viewport" === e) i = function(t, e) {
                    const n = c(t),
                        o = l(t),
                        i = n.visualViewport;
                    let r = o.clientWidth,
                        s = o.clientHeight,
                        f = 0,
                        a = 0;
                    if (i) {
                        r = i.width, s = i.height;
                        const t = h();
                        (!t || t && "fixed" === e) && (f = i.offsetLeft, a = i.offsetTop)
                    }
                    return {
                        width: r,
                        height: s,
                        x: f,
                        y: a
                    }
                }(t, n);
                else if ("document" === e) i = function(t) {
                    const e = l(t),
                        n = w(t),
                        i = t.ownerDocument.body,
                        r = (0, o.Fp)(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
                        c = (0, o.Fp)(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
                    let s = -n.scrollLeft + F(t);
                    const f = -n.scrollTop;
                    return "rtl" === y(i).direction && (s += (0, o.Fp)(e.clientWidth, i.clientWidth) - r), {
                        width: r,
                        height: c,
                        x: s,
                        y: f
                    }
                }(l(t));
                else if (f(e)) i = function(t, e) {
                    const n = E(t, !0, "fixed" === e),
                        i = n.top + t.clientTop,
                        r = n.left + t.clientLeft,
                        c = a(t) ? A(t) : (0, o.ze)(1);
                    return {
                        width: t.clientWidth * c.x,
                        height: t.clientHeight * c.y,
                        x: r * c.x,
                        y: i * c.y
                    }
                }(e, n);
                else {
                    const n = L(t);
                    i = { ...e,
                        x: e.x - n.x,
                        y: e.y - n.y
                    }
                }
                return (0, o.JB)(i)
            }

            function C(t, e) {
                const n = x(t);
                return !(n === e || !f(n) || g(n)) && ("fixed" === y(n).position || C(n, e))
            }

            function D(t, e, n) {
                const i = a(e),
                    c = l(e),
                    s = "fixed" === n,
                    f = E(t, !0, s, e);
                let u = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const p = (0, o.ze)(0);
                if (i || !i && !s)
                    if (("body" !== r(e) || d(c)) && (u = w(e)), i) {
                        const t = E(e, !0, s, e);
                        p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
                    } else c && (p.x = F(c));
                return {
                    x: f.left + u.scrollLeft - p.x,
                    y: f.top + u.scrollTop - p.y,
                    width: f.width,
                    height: f.height
                }
            }

            function P(t, e) {
                return a(t) && "fixed" !== y(t).position ? e ? e(t) : t.offsetParent : null
            }

            function W(t, e) {
                const n = c(t);
                if (!a(t)) return n;
                let o = P(t, e);
                for (; o && p(o) && "static" === y(o).position;) o = P(o, e);
                return o && ("html" === r(o) || "body" === r(o) && "static" === y(o).position && !m(o)) ? n : o || function(t) {
                    let e = x(t);
                    for (; a(e) && !g(e);) {
                        if (m(e)) return e;
                        e = x(e)
                    }
                    return null
                }(t) || n
            }
            const O = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    let {
                        rect: e,
                        offsetParent: n,
                        strategy: i
                    } = t;
                    const c = a(n),
                        s = l(n);
                    if (n === s) return e;
                    let f = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        u = (0, o.ze)(1);
                    const p = (0, o.ze)(0);
                    if ((c || !c && "fixed" !== i) && (("body" !== r(n) || d(s)) && (f = w(n)), a(n))) {
                        const t = E(n);
                        u = A(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
                    }
                    return {
                        width: e.width * u.x,
                        height: e.height * u.y,
                        x: e.x * u.x - f.scrollLeft * u.x + p.x,
                        y: e.y * u.y - f.scrollTop * u.y + p.y
                    }
                },
                getDocumentElement: l,
                getClippingRect: function(t) {
                    let {
                        element: e,
                        boundary: n,
                        rootBoundary: i,
                        strategy: c
                    } = t;
                    const l = "clippingAncestors" === n ? function(t, e) {
                            const n = e.get(t);
                            if (n) return n;
                            let o = b(t).filter((t => f(t) && "body" !== r(t))),
                                i = null;
                            const c = "fixed" === y(t).position;
                            let l = c ? x(t) : t;
                            for (; f(l) && !g(l);) {
                                const e = y(l),
                                    n = m(l);
                                n || "fixed" !== e.position || (i = null), (c ? !n && !i : !n && "static" === e.position && i && ["absolute", "fixed"].includes(i.position) || d(l) && !n && C(t, l)) ? o = o.filter((t => t !== l)) : i = e, l = x(l)
                            }
                            return e.set(t, o), o
                        }(e, this._c) : [].concat(n),
                        s = [...l, i],
                        a = s[0],
                        u = s.reduce(((t, n) => {
                            const i = V(e, n, c);
                            return t.top = (0, o.Fp)(i.top, t.top), t.right = (0, o.VV)(i.right, t.right), t.bottom = (0, o.VV)(i.bottom, t.bottom), t.left = (0, o.Fp)(i.left, t.left), t
                        }), V(e, a, c));
                    return {
                        width: u.right - u.left,
                        height: u.bottom - u.top,
                        x: u.left,
                        y: u.top
                    }
                },
                getOffsetParent: W,
                getElementRects: async function(t) {
                    let {
                        reference: e,
                        floating: n,
                        strategy: o
                    } = t;
                    const i = this.getOffsetParent || W,
                        r = this.getDimensions;
                    return {
                        reference: D(e, await i(n), o),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await r(n)
                        }
                    }
                },
                getClientRects: function(t) {
                    return Array.from(t.getClientRects())
                },
                getDimensions: function(t) {
                    return R(t)
                },
                getScale: A,
                isElement: f,
                isRTL: function(t) {
                    return "rtl" === y(t).direction
                }
            };

            function S(t, e, n, i) {
                void 0 === i && (i = {});
                const {
                    ancestorScroll: r = !0,
                    ancestorResize: c = !0,
                    elementResize: s = "function" === typeof ResizeObserver,
                    layoutShift: f = "function" === typeof IntersectionObserver,
                    animationFrame: a = !1
                } = i, u = k(t), d = r || c ? [...u ? b(u) : [], ...b(e)] : [];
                d.forEach((t => {
                    r && t.addEventListener("scroll", n, {
                        passive: !0
                    }), c && t.addEventListener("resize", n)
                }));
                const p = u && f ? function(t, e) {
                    let n, i = null;
                    const r = l(t);

                    function c() {
                        clearTimeout(n), i && i.disconnect(), i = null
                    }
                    return function l(s, f) {
                        void 0 === s && (s = !1), void 0 === f && (f = 1), c();
                        const {
                            left: a,
                            top: u,
                            width: d,
                            height: p
                        } = t.getBoundingClientRect();
                        if (s || e(), !d || !p) return;
                        const m = {
                            rootMargin: -(0, o.GW)(u) + "px " + -(0, o.GW)(r.clientWidth - (a + d)) + "px " + -(0, o.GW)(r.clientHeight - (u + p)) + "px " + -(0, o.GW)(a) + "px",
                            threshold: (0, o.Fp)(0, (0, o.VV)(1, f)) || 1
                        };
                        let h = !0;

                        function g(t) {
                            const e = t[0].intersectionRatio;
                            if (e !== f) {
                                if (!h) return l();
                                e ? l(!1, e) : n = setTimeout((() => {
                                    l(!1, 1e-7)
                                }), 100)
                            }
                            h = !1
                        }
                        try {
                            i = new IntersectionObserver(g, { ...m,
                                root: r.ownerDocument
                            })
                        } catch (y) {
                            i = new IntersectionObserver(g, m)
                        }
                        i.observe(t)
                    }(!0), c
                }(u, n) : null;
                let m, h = -1,
                    g = null;
                s && (g = new ResizeObserver((t => {
                    let [o] = t;
                    o && o.target === u && g && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                        g && g.observe(e)
                    }))), n()
                })), u && !a && g.observe(u), g.observe(e));
                let y = a ? E(t) : null;
                return a && function e() {
                    const o = E(t);
                    !y || o.x === y.x && o.y === y.y && o.width === y.width && o.height === y.height || n();
                    y = o, m = requestAnimationFrame(e)
                }(), n(), () => {
                    d.forEach((t => {
                        r && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
                    })), p && p(), g && g.disconnect(), g = null, a && cancelAnimationFrame(m)
                }
            }
            const z = (t, e, n) => {
                const o = new Map,
                    r = {
                        platform: O,
                        ...n
                    },
                    c = { ...r.platform,
                        _c: o
                    };
                return (0, i.oo)(t, e, { ...r,
                    platform: c
                })
            }
        },
        63175: function(t, e, n) {
            n.d(e, {
                Ct: function() {
                    return r
                },
                Fp: function() {
                    return l
                },
                GW: function() {
                    return f
                },
                Go: function() {
                    return k
                },
                I4: function() {
                    return w
                },
                JB: function() {
                    return E
                },
                KX: function() {
                    return A
                },
                NM: function() {
                    return s
                },
                Qq: function() {
                    return x
                },
                Rn: function() {
                    return y
                },
                VV: function() {
                    return c
                },
                Wh: function() {
                    return v
                },
                gy: function() {
                    return R
                },
                hp: function() {
                    return g
                },
                i8: function() {
                    return b
                },
                k3: function() {
                    return h
                },
                ku: function() {
                    return m
                },
                mA: function() {
                    return o
                },
                pw: function() {
                    return T
                },
                uZ: function() {
                    return p
                },
                yd: function() {
                    return L
                },
                ze: function() {
                    return a
                }
            });
            const o = ["top", "right", "bottom", "left"],
                i = ["start", "end"],
                r = o.reduce(((t, e) => t.concat(e, e + "-" + i[0], e + "-" + i[1])), []),
                c = Math.min,
                l = Math.max,
                s = Math.round,
                f = Math.floor,
                a = t => ({
                    x: t,
                    y: t
                }),
                u = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                d = {
                    start: "end",
                    end: "start"
                };

            function p(t, e, n) {
                return l(t, c(e, n))
            }

            function m(t, e) {
                return "function" === typeof t ? t(e) : t
            }

            function h(t) {
                return t.split("-")[0]
            }

            function g(t) {
                return t.split("-")[1]
            }

            function y(t) {
                return "x" === t ? "y" : "x"
            }

            function w(t) {
                return "y" === t ? "height" : "width"
            }

            function x(t) {
                return ["top", "bottom"].includes(h(t)) ? "y" : "x"
            }

            function v(t) {
                return y(x(t))
            }

            function b(t, e, n) {
                void 0 === n && (n = !1);
                const o = g(t),
                    i = v(t),
                    r = w(i);
                let c = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                return e.reference[r] > e.floating[r] && (c = T(c)), [c, T(c)]
            }

            function R(t) {
                const e = T(t);
                return [k(t), e, k(e)]
            }

            function k(t) {
                return t.replace(/start|end/g, (t => d[t]))
            }

            function A(t, e, n, o) {
                const i = g(t);
                let r = function(t, e, n) {
                    const o = ["left", "right"],
                        i = ["right", "left"],
                        r = ["top", "bottom"],
                        c = ["bottom", "top"];
                    switch (t) {
                        case "top":
                        case "bottom":
                            return n ? e ? i : o : e ? o : i;
                        case "left":
                        case "right":
                            return e ? r : c;
                        default:
                            return []
                    }
                }(h(t), "start" === n, o);
                return i && (r = r.map((t => t + "-" + i)), e && (r = r.concat(r.map(k)))), r
            }

            function T(t) {
                return t.replace(/left|right|bottom|top/g, (t => u[t]))
            }

            function L(t) {
                return "number" !== typeof t ? function(t) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...t
                    }
                }(t) : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function E(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }
        }
    }
]);