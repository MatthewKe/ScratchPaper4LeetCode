"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3726], {
        84383: function(e, t, n) {
            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function r(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var o = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, a = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        l = !0, s = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l) throw s
                        }
                    }
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function s() {
                return s = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var o = a(e, t);
                    if (o) {
                        var r = Object.getOwnPropertyDescriptor(o, t);
                        return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value
                    }
                }, s.apply(this, arguments)
            }

            function a(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                return e
            }

            function l(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && c(e, t)
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return u(this, n)
                }
            }

            function u(e, t) {
                if (t && ("object" === o(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function m(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var g = n(38556),
                y = n(87309),
                b = n(92914),
                k = function(e) {
                    for (var t = 0;; t++)
                        if (!(e = e.previousSibling)) return t
                },
                w = function(e) {
                    var t = e.assignedSlot || e.parentNode;
                    return t && 11 == t.nodeType ? t.host : t
                },
                S = null,
                D = function(e, t, n) {
                    var o = S || (S = document.createRange());
                    return o.setEnd(e, null == n ? e.nodeValue.length : n), o.setStart(e, t || 0), o
                },
                N = function(e, t, n, o) {
                    return n && (C(e, t, n, o, -1) || C(e, t, n, o, 1))
                },
                O = /^(img|br|input|textarea|hr)$/i;

            function C(e, t, n, o, r) {
                for (;;) {
                    if (e == n && t == o) return !0;
                    if (t == (r < 0 ? 0 : M(e))) {
                        var i = e.parentNode;
                        if (!i || 1 != i.nodeType || T(e) || O.test(e.nodeName) || "false" == e.contentEditable) return !1;
                        t = k(e) + (r < 0 ? 0 : 1), e = i
                    } else {
                        if (1 != e.nodeType) return !1;
                        if ("false" == (e = e.childNodes[t + (r < 0 ? -1 : 0)]).contentEditable) return !1;
                        t = r < 0 ? M(e) : 0
                    }
                }
            }

            function M(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function x(e, t, n) {
                for (var o = 0 == t, r = t == M(e); o || r;) {
                    if (e == n) return !0;
                    var i = k(e);
                    if (!(e = e.parentNode)) return !1;
                    o = o && 0 == i, r = r && i == M(e)
                }
            }

            function T(e) {
                for (var t, n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
                return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
            }
            var E = function(e) {
                return e.focusNode && N(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
            };

            function P(e, t) {
                var n = document.createEvent("Event");
                return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n
            }
            var A = "undefined" != typeof navigator ? navigator : null,
                V = "undefined" != typeof document ? document : null,
                R = A && A.userAgent || "",
                B = /Edge\/(\d+)/.exec(R),
                I = /MSIE \d/.exec(R),
                F = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(R),
                z = !!(I || F || B),
                L = I ? document.documentMode : F ? +F[1] : B ? +B[1] : 0,
                q = !z && /gecko\/(\d+)/i.test(R);
            q && (/Firefox\/(\d+)/.exec(R) || [0, 0])[1];
            var K = !z && /Chrome\/(\d+)/.exec(R),
                $ = !!K,
                _ = K ? +K[1] : 0,
                W = !z && !!A && /Apple Computer/.test(A.vendor),
                H = W && (/Mobile\/\w+/.test(R) || !!A && A.maxTouchPoints > 2),
                j = H || !!A && /Mac/.test(A.platform),
                U = !!A && /Win/.test(A.platform),
                G = /Android \d/.test(R),
                X = !!V && "webkitFontSmoothing" in V.documentElement.style,
                Y = X ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

            function J(e) {
                return {
                    left: 0,
                    right: e.documentElement.clientWidth,
                    top: 0,
                    bottom: e.documentElement.clientHeight
                }
            }

            function Q(e, t) {
                return "number" == typeof e ? e : e[t]
            }

            function Z(e) {
                var t = e.getBoundingClientRect(),
                    n = t.width / e.offsetWidth || 1,
                    o = t.height / e.offsetHeight || 1;
                return {
                    left: t.left,
                    right: t.left + e.clientWidth * n,
                    top: t.top,
                    bottom: t.top + e.clientHeight * o
                }
            }

            function ee(e, t, n) {
                for (var o = e.someProp("scrollThreshold") || 0, r = e.someProp("scrollMargin") || 5, i = e.dom.ownerDocument, s = n || e.dom; s; s = w(s))
                    if (1 == s.nodeType) {
                        var a = s,
                            l = a == i.body,
                            c = l ? J(i) : Z(a),
                            d = 0,
                            u = 0;
                        if (t.top < c.top + Q(o, "top") ? u = -(c.top - t.top + Q(r, "top")) : t.bottom > c.bottom - Q(o, "bottom") && (u = t.bottom - c.bottom + Q(r, "bottom")), t.left < c.left + Q(o, "left") ? d = -(c.left - t.left + Q(r, "left")) : t.right > c.right - Q(o, "right") && (d = t.right - c.right + Q(r, "right")), d || u)
                            if (l) i.defaultView.scrollBy(d, u);
                            else {
                                var f = a.scrollLeft,
                                    h = a.scrollTop;
                                u && (a.scrollTop += u), d && (a.scrollLeft += d);
                                var p = a.scrollLeft - f,
                                    v = a.scrollTop - h;
                                t = {
                                    left: t.left - p,
                                    top: t.top - v,
                                    right: t.right - p,
                                    bottom: t.bottom - v
                                }
                            }
                        if (l) break
                    }
            }

            function te(e) {
                for (var t = [], n = e.ownerDocument, o = e; o && (t.push({
                        dom: o,
                        top: o.scrollTop,
                        left: o.scrollLeft
                    }), e != n); o = w(o));
                return t
            }

            function ne(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = o.dom,
                        i = o.top,
                        s = o.left;
                    r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != s && (r.scrollLeft = s)
                }
            }
            var oe = null;

            function re(e, t) {
                for (var n, o, r, i, s = 2e8, a = 0, l = t.top, c = t.top, d = e.firstChild, u = 0; d; d = d.nextSibling, u++) {
                    var f = void 0;
                    if (1 == d.nodeType) f = d.getClientRects();
                    else {
                        if (3 != d.nodeType) continue;
                        f = D(d).getClientRects()
                    }
                    for (var h = 0; h < f.length; h++) {
                        var p = f[h];
                        if (p.top <= l && p.bottom >= c) {
                            l = Math.max(p.bottom, l), c = Math.min(p.top, c);
                            var v = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
                            if (v < s) {
                                n = d, s = v, o = v && 3 == n.nodeType ? {
                                    left: p.right < t.left ? p.right : p.left,
                                    top: t.top
                                } : t, 1 == d.nodeType && v && (a = u + (t.left >= (p.left + p.right) / 2 ? 1 : 0));
                                continue
                            }
                        } else p.top > t.top && !r && p.left <= t.left && p.right >= t.left && (r = d, i = {
                            left: Math.max(p.left, Math.min(p.right, t.left)),
                            top: p.top
                        });
                        !n && (t.left >= p.right && t.top >= p.top || t.left >= p.left && t.top >= p.bottom) && (a = u + 1)
                    }
                }
                return !n && r && (n = r, o = i, s = 0), n && 3 == n.nodeType ? function(e, t) {
                    for (var n = e.nodeValue.length, o = document.createRange(), r = 0; r < n; r++) {
                        o.setEnd(e, r + 1), o.setStart(e, r);
                        var i = ce(o, 1);
                        if (i.top != i.bottom && ie(t, i)) return {
                            node: e,
                            offset: r + (t.left >= (i.left + i.right) / 2 ? 1 : 0)
                        }
                    }
                    return {
                        node: e,
                        offset: 0
                    }
                }(n, o) : !n || s && 1 == n.nodeType ? {
                    node: e,
                    offset: a
                } : re(n, o)
            }

            function ie(e, t) {
                return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
            }

            function se(e, t, n) {
                var o = e.childNodes.length;
                if (o && n.top < n.bottom)
                    for (var r = Math.max(0, Math.min(o - 1, Math.floor(o * (t.top - n.top) / (n.bottom - n.top)) - 2)), i = r;;) {
                        var s = e.childNodes[i];
                        if (1 == s.nodeType)
                            for (var a = s.getClientRects(), l = 0; l < a.length; l++) {
                                var c = a[l];
                                if (ie(t, c)) return se(s, t, c)
                            }
                        if ((i = (i + 1) % o) == r) break
                    }
                return e
            }

            function ae(e, t) {
                var n, o = e.dom.ownerDocument,
                    r = 0,
                    i = function(e, t, n) {
                        if (e.caretPositionFromPoint) try {
                            var o = e.caretPositionFromPoint(t, n);
                            if (o) return {
                                node: o.offsetNode,
                                offset: o.offset
                            }
                        } catch (i) {}
                        if (e.caretRangeFromPoint) {
                            var r = e.caretRangeFromPoint(t, n);
                            if (r) return {
                                node: r.startContainer,
                                offset: r.startOffset
                            }
                        }
                    }(o, t.left, t.top);
                i && (n = i.node, r = i.offset);
                var s, a = (e.root.elementFromPoint ? e.root : o).elementFromPoint(t.left, t.top);
                if (!a || !e.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
                    var l = e.dom.getBoundingClientRect();
                    if (!ie(t, l)) return null;
                    if (!(a = se(e.dom, t, l))) return null
                }
                if (W)
                    for (var c = a; n && c; c = w(c)) c.draggable && (n = void 0);
                if (a = function(e, t) {
                        var n = e.parentNode;
                        return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e
                    }(a, t), n) {
                    if (q && 1 == n.nodeType && (r = Math.min(r, n.childNodes.length)) < n.childNodes.length) {
                        var d, u = n.childNodes[r];
                        "IMG" == u.nodeName && (d = u.getBoundingClientRect()).right <= t.left && d.bottom > t.top && r++
                    }
                    n == e.dom && r == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : 0 != r && 1 == n.nodeType && "BR" == n.childNodes[r - 1].nodeName || (s = function(e, t, n, o) {
                        for (var r = -1, i = t, s = !1; i != e.dom;) {
                            var a = e.docView.nearestDesc(i, !0);
                            if (!a) return null;
                            if (1 == a.dom.nodeType && (a.node.isBlock && a.parent && !s || !a.contentDOM)) {
                                var l = a.dom.getBoundingClientRect();
                                if (a.node.isBlock && a.parent && !s && (s = !0, l.left > o.left || l.top > o.top ? r = a.posBefore : (l.right < o.left || l.bottom < o.top) && (r = a.posAfter)), !a.contentDOM && r < 0) return (a.node.isBlock ? o.top < (l.top + l.bottom) / 2 : o.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter
                            }
                            i = a.dom.parentNode
                        }
                        return r > -1 ? r : e.docView.posFromDOM(t, n, -1)
                    }(e, n, r, t))
                }
                null == s && (s = function(e, t, n) {
                    var o = re(t, n),
                        r = o.node,
                        i = o.offset,
                        s = -1;
                    if (1 == r.nodeType && !r.firstChild) {
                        var a = r.getBoundingClientRect();
                        s = a.left != a.right && n.left > (a.left + a.right) / 2 ? 1 : -1
                    }
                    return e.docView.posFromDOM(r, i, s)
                }(e, a, t));
                var f = e.docView.nearestDesc(a, !0);
                return {
                    pos: s,
                    inside: f ? f.posAtStart - f.border : -1
                }
            }

            function le(e) {
                return e.top < e.bottom || e.left < e.right
            }

            function ce(e, t) {
                var n = e.getClientRects();
                if (n.length) {
                    var o = n[t < 0 ? 0 : n.length - 1];
                    if (le(o)) return o
                }
                return Array.prototype.find.call(n, le) || e.getBoundingClientRect()
            }
            var de = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

            function ue(e, t, n) {
                var o = e.docView.domFromPos(t, n < 0 ? -1 : 1),
                    r = o.node,
                    i = o.offset,
                    s = o.atom,
                    a = X || q;
                if (3 == r.nodeType) {
                    if (!a || !de.test(r.nodeValue) && (n < 0 ? i : i != r.nodeValue.length)) {
                        var l = i,
                            c = i,
                            d = n < 0 ? 1 : -1;
                        return n < 0 && !i ? (c++, d = -1) : n >= 0 && i == r.nodeValue.length ? (l--, d = 1) : n < 0 ? l-- : c++, fe(ce(D(r, l, c), d), d < 0)
                    }
                    var u = ce(D(r, i, i), n);
                    if (q && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                        var f = ce(D(r, i - 1, i - 1), -1);
                        if (f.top == u.top) {
                            var h = ce(D(r, i, i + 1), -1);
                            if (h.top != u.top) return fe(h, h.left < f.left)
                        }
                    }
                    return u
                }
                if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
                    if (null == s && i && (n < 0 || i == M(r))) {
                        var p = r.childNodes[i - 1];
                        if (1 == p.nodeType) return he(p.getBoundingClientRect(), !1)
                    }
                    if (null == s && i < M(r)) {
                        var v = r.childNodes[i];
                        if (1 == v.nodeType) return he(v.getBoundingClientRect(), !0)
                    }
                    return he(r.getBoundingClientRect(), n >= 0)
                }
                if (null == s && i && (n < 0 || i == M(r))) {
                    var m = r.childNodes[i - 1],
                        g = 3 == m.nodeType ? D(m, M(m) - (a ? 0 : 1)) : 1 != m.nodeType || "BR" == m.nodeName && m.nextSibling ? null : m;
                    if (g) return fe(ce(g, 1), !1)
                }
                if (null == s && i < M(r)) {
                    for (var y = r.childNodes[i]; y.pmViewDesc && y.pmViewDesc.ignoreForCoords;) y = y.nextSibling;
                    var b = y ? 3 == y.nodeType ? D(y, 0, a ? 0 : 1) : 1 == y.nodeType ? y : null : null;
                    if (b) return fe(ce(b, -1), !0)
                }
                return fe(ce(3 == r.nodeType ? D(r) : r, -n), n >= 0)
            }

            function fe(e, t) {
                if (0 == e.width) return e;
                var n = t ? e.left : e.right;
                return {
                    top: e.top,
                    bottom: e.bottom,
                    left: n,
                    right: n
                }
            }

            function he(e, t) {
                if (0 == e.height) return e;
                var n = t ? e.top : e.bottom;
                return {
                    top: n,
                    bottom: n,
                    left: e.left,
                    right: e.right
                }
            }

            function pe(e, t, n) {
                var o = e.state,
                    r = e.root.activeElement;
                o != t && e.updateState(t), r != e.dom && e.focus();
                try {
                    return n()
                } finally {
                    o != t && e.updateState(o), r != e.dom && r && r.focus()
                }
            }
            var ve = /[\u0590-\u08ac]/;
            var me = null,
                ge = null,
                ye = !1;

            function be(e, t, n) {
                return me == t && ge == n ? ye : (me = t, ge = n, ye = "up" == n || "down" == n ? function(e, t, n) {
                    var o = t.selection,
                        r = "up" == n ? o.$from : o.$to;
                    return pe(e, t, (function() {
                        for (var t = e.docView.domFromPos(r.pos, "up" == n ? -1 : 1).node;;) {
                            var o = e.docView.nearestDesc(t, !0);
                            if (!o) break;
                            if (o.node.isBlock) {
                                t = o.contentDOM || o.dom;
                                break
                            }
                            t = o.dom.parentNode
                        }
                        for (var i = ue(e, r.pos, 1), s = t.firstChild; s; s = s.nextSibling) {
                            var a = void 0;
                            if (1 == s.nodeType) a = s.getClientRects();
                            else {
                                if (3 != s.nodeType) continue;
                                a = D(s, 0, s.nodeValue.length).getClientRects()
                            }
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                if (c.bottom > c.top + 1 && ("up" == n ? i.top - c.top > 2 * (c.bottom - i.top) : c.bottom - i.bottom > 2 * (i.bottom - c.top))) return !1
                            }
                        }
                        return !0
                    }))
                }(e, t, n) : function(e, t, n) {
                    var o = t.selection.$head;
                    if (!o.parent.isTextblock) return !1;
                    var r = o.parentOffset,
                        i = !r,
                        s = r == o.parent.content.size,
                        a = e.domSelection();
                    return ve.test(o.parent.textContent) && a.modify ? pe(e, t, (function() {
                        var t = e.domSelectionRange(),
                            r = t.focusNode,
                            i = t.focusOffset,
                            s = t.anchorNode,
                            l = t.anchorOffset,
                            c = a.caretBidiLevel;
                        a.modify("move", n, "character");
                        var d = o.depth ? e.docView.domAfterPos(o.before()) : e.dom,
                            u = e.domSelectionRange(),
                            f = u.focusNode,
                            h = u.focusOffset,
                            p = f && !d.contains(1 == f.nodeType ? f : f.parentNode) || r == f && i == h;
                        try {
                            a.collapse(s, l), r && (r != s || i != l) && a.extend && a.extend(r, i)
                        } catch (v) {}
                        return null != c && (a.caretBidiLevel = c), p
                    })) : "left" == n || "backward" == n ? i : s
                }(e, t, n))
            }
            var ke = function() {
                    function e(t, n, o, r) {
                        p(this, e), this.parent = t, this.children = n, this.dom = o, this.contentDOM = r, this.dirty = 0, o.pmViewDesc = this
                    }
                    return m(e, [{
                        key: "matchesWidget",
                        value: function(e) {
                            return !1
                        }
                    }, {
                        key: "matchesMark",
                        value: function(e) {
                            return !1
                        }
                    }, {
                        key: "matchesNode",
                        value: function(e, t, n) {
                            return !1
                        }
                    }, {
                        key: "matchesHack",
                        value: function(e) {
                            return !1
                        }
                    }, {
                        key: "parseRule",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "stopEvent",
                        value: function(e) {
                            return !1
                        }
                    }, {
                        key: "size",
                        get: function() {
                            for (var e = 0, t = 0; t < this.children.length; t++) e += this.children[t].size;
                            return e
                        }
                    }, {
                        key: "border",
                        get: function() {
                            return 0
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                            for (var e = 0; e < this.children.length; e++) this.children[e].destroy()
                        }
                    }, {
                        key: "posBeforeChild",
                        value: function(e) {
                            for (var t = 0, n = this.posAtStart;; t++) {
                                var o = this.children[t];
                                if (o == e) return n;
                                n += o.size
                            }
                        }
                    }, {
                        key: "posBefore",
                        get: function() {
                            return this.parent.posBeforeChild(this)
                        }
                    }, {
                        key: "posAtStart",
                        get: function() {
                            return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
                        }
                    }, {
                        key: "posAfter",
                        get: function() {
                            return this.posBefore + this.size
                        }
                    }, {
                        key: "posAtEnd",
                        get: function() {
                            return this.posAtStart + this.size - 2 * this.border
                        }
                    }, {
                        key: "localPosFromDOM",
                        value: function(e, t, n) {
                            if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                                if (n < 0) {
                                    var o, r;
                                    if (e == this.contentDOM) o = e.childNodes[t - 1];
                                    else {
                                        for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                                        o = e.previousSibling
                                    }
                                    for (; o && (!(r = o.pmViewDesc) || r.parent != this);) o = o.previousSibling;
                                    return o ? this.posBeforeChild(r) + r.size : this.posAtStart
                                }
                                var i, s;
                                if (e == this.contentDOM) i = e.childNodes[t];
                                else {
                                    for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                                    i = e.nextSibling
                                }
                                for (; i && (!(s = i.pmViewDesc) || s.parent != this);) i = i.nextSibling;
                                return i ? this.posBeforeChild(s) : this.posAtEnd
                            }
                            var a;
                            if (e == this.dom && this.contentDOM) a = t > k(this.contentDOM);
                            else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) a = 2 & e.compareDocumentPosition(this.contentDOM);
                            else if (this.dom.firstChild) {
                                if (0 == t)
                                    for (var l = e;; l = l.parentNode) {
                                        if (l == this.dom) {
                                            a = !1;
                                            break
                                        }
                                        if (l.previousSibling) break
                                    }
                                if (null == a && t == e.childNodes.length)
                                    for (var c = e;; c = c.parentNode) {
                                        if (c == this.dom) {
                                            a = !0;
                                            break
                                        }
                                        if (c.nextSibling) break
                                    }
                            }
                            return (null == a ? n > 0 : a) ? this.posAtEnd : this.posAtStart
                        }
                    }, {
                        key: "nearestDesc",
                        value: function(e) {
                            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !0, o = e; o; o = o.parentNode) {
                                var r = this.getDesc(o),
                                    i = void 0;
                                if (r && (!t || r.node)) {
                                    if (!n || !(i = r.nodeDOM) || (1 == i.nodeType ? i.contains(1 == e.nodeType ? e : e.parentNode) : i == e)) return r;
                                    n = !1
                                }
                            }
                        }
                    }, {
                        key: "getDesc",
                        value: function(e) {
                            for (var t = e.pmViewDesc, n = t; n; n = n.parent)
                                if (n == this) return t
                        }
                    }, {
                        key: "posFromDOM",
                        value: function(e, t, n) {
                            for (var o = e; o; o = o.parentNode) {
                                var r = this.getDesc(o);
                                if (r) return r.localPosFromDOM(e, t, n)
                            }
                            return -1
                        }
                    }, {
                        key: "descAt",
                        value: function(e) {
                            for (var t = 0, n = 0; t < this.children.length; t++) {
                                var o = this.children[t],
                                    r = n + o.size;
                                if (n == e && r != n) {
                                    for (; !o.border && o.children.length;) o = o.children[0];
                                    return o
                                }
                                if (e < r) return o.descAt(e - n - o.border);
                                n = r
                            }
                        }
                    }, {
                        key: "domFromPos",
                        value: function(e, t) {
                            if (!this.contentDOM) return {
                                node: this.dom,
                                offset: 0,
                                atom: e + 1
                            };
                            for (var n, o = 0, r = 0, i = 0; o < this.children.length; o++) {
                                var s = this.children[o],
                                    a = i + s.size;
                                if (a > e || s instanceof Me) {
                                    r = e - i;
                                    break
                                }
                                i = a
                            }
                            if (r) return this.children[o].domFromPos(r - this.children[o].border, t);
                            for (; o && !(n = this.children[o - 1]).size && n instanceof we && n.side >= 0; o--);
                            if (t <= 0) {
                                for (var l, c = !0;
                                    (l = o ? this.children[o - 1] : null) && l.dom.parentNode != this.contentDOM; o--, c = !1);
                                return l && t && c && !l.border && !l.domAtom ? l.domFromPos(l.size, t) : {
                                    node: this.contentDOM,
                                    offset: l ? k(l.dom) + 1 : 0
                                }
                            }
                            for (var d, u = !0;
                                (d = o < this.children.length ? this.children[o] : null) && d.dom.parentNode != this.contentDOM; o++, u = !1);
                            return d && u && !d.border && !d.domAtom ? d.domFromPos(0, t) : {
                                node: this.contentDOM,
                                offset: d ? k(d.dom) : this.contentDOM.childNodes.length
                            }
                        }
                    }, {
                        key: "parseRange",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (0 == this.children.length) return {
                                node: this.contentDOM,
                                from: e,
                                to: t,
                                fromOffset: 0,
                                toOffset: this.contentDOM.childNodes.length
                            };
                            for (var o = -1, r = -1, i = n, s = 0;; s++) {
                                var a = this.children[s],
                                    l = i + a.size;
                                if (-1 == o && e <= l) {
                                    var c = i + a.border;
                                    if (e >= c && t <= l - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, c);
                                    e = i;
                                    for (var d = s; d > 0; d--) {
                                        var u = this.children[d - 1];
                                        if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(1)) {
                                            o = k(u.dom) + 1;
                                            break
                                        }
                                        e -= u.size
                                    } - 1 == o && (o = 0)
                                }
                                if (o > -1 && (l > t || s == this.children.length - 1)) {
                                    t = l;
                                    for (var f = s + 1; f < this.children.length; f++) {
                                        var h = this.children[f];
                                        if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
                                            r = k(h.dom);
                                            break
                                        }
                                        t += h.size
                                    } - 1 == r && (r = this.contentDOM.childNodes.length);
                                    break
                                }
                                i = l
                            }
                            return {
                                node: this.contentDOM,
                                from: e,
                                to: t,
                                fromOffset: o,
                                toOffset: r
                            }
                        }
                    }, {
                        key: "emptyChildAt",
                        value: function(e) {
                            if (this.border || !this.contentDOM || !this.children.length) return !1;
                            var t = this.children[e < 0 ? 0 : this.children.length - 1];
                            return 0 == t.size || t.emptyChildAt(e)
                        }
                    }, {
                        key: "domAfterPos",
                        value: function(e) {
                            var t = this.domFromPos(e, 0),
                                n = t.node,
                                o = t.offset;
                            if (1 != n.nodeType || o == n.childNodes.length) throw new RangeError("No node after pos " + e);
                            return n.childNodes[o]
                        }
                    }, {
                        key: "setSelection",
                        value: function(e, t, n) {
                            for (var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = Math.min(e, t), i = Math.max(e, t), s = 0, a = 0; s < this.children.length; s++) {
                                var l = this.children[s],
                                    c = a + l.size;
                                if (r > a && i < c) return l.setSelection(e - a - l.border, t - a - l.border, n, o);
                                a = c
                            }
                            var d = this.domFromPos(e, e ? -1 : 1),
                                u = t == e ? d : this.domFromPos(t, t ? -1 : 1),
                                f = n.getSelection(),
                                h = !1;
                            if ((q || W) && e == t) {
                                var p = d,
                                    v = p.node,
                                    m = p.offset;
                                if (3 == v.nodeType) h = !(!m || "\n" != v.nodeValue[m - 1]);
                                else {
                                    var g = v.childNodes[m - 1];
                                    h = g && ("BR" == g.nodeName || "false" == g.contentEditable)
                                }
                            }
                            if (q && f.focusNode && f.focusNode != u.node && 1 == f.focusNode.nodeType) {
                                var y = f.focusNode.childNodes[f.focusOffset];
                                y && "false" == y.contentEditable && (o = !0)
                            }
                            if (o || h && W || !N(d.node, d.offset, f.anchorNode, f.anchorOffset) || !N(u.node, u.offset, f.focusNode, f.focusOffset)) {
                                var b = !1;
                                if ((f.extend || e == t) && !h) {
                                    f.collapse(d.node, d.offset);
                                    try {
                                        e != t && f.extend(u.node, u.offset), b = !0
                                    } catch (S) {}
                                }
                                if (!b) {
                                    if (e > t) {
                                        var k = d;
                                        d = u, u = k
                                    }
                                    var w = document.createRange();
                                    w.setEnd(u.node, u.offset), w.setStart(d.node, d.offset), f.removeAllRanges(), f.addRange(w)
                                }
                            }
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function(e) {
                            return !this.contentDOM && "selection" != e.type
                        }
                    }, {
                        key: "contentLost",
                        get: function() {
                            return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
                        }
                    }, {
                        key: "markDirty",
                        value: function(e, t) {
                            for (var n = 0, o = 0; o < this.children.length; o++) {
                                var r = this.children[o],
                                    i = n + r.size;
                                if (n == i ? e <= i && t >= n : e < i && t > n) {
                                    var s = n + r.border,
                                        a = i - r.border;
                                    if (e >= s && t <= a) return this.dirty = e == n || t == i ? 2 : 1, void(e != s || t != a || !r.contentLost && r.dom.parentNode == this.contentDOM ? r.markDirty(e - s, t - s) : r.dirty = 3);
                                    r.dirty = r.dom != r.contentDOM || r.dom.parentNode != this.contentDOM || r.children.length ? 3 : 2
                                }
                                n = i
                            }
                            this.dirty = 2
                        }
                    }, {
                        key: "markParentsDirty",
                        value: function() {
                            for (var e = 1, t = this.parent; t; t = t.parent, e++) {
                                var n = 1 == e ? 2 : 1;
                                t.dirty < n && (t.dirty = n)
                            }
                        }
                    }, {
                        key: "domAtom",
                        get: function() {
                            return !1
                        }
                    }, {
                        key: "ignoreForCoords",
                        get: function() {
                            return !1
                        }
                    }]), e
                }(),
                we = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i) {
                        var s;
                        p(this, n);
                        var a, l = o.type.toDOM;
                        if ("function" == typeof l && (l = l(r, (function() {
                                return a ? a.parent ? a.parent.posBeforeChild(a) : void 0 : i
                            }))), !o.type.spec.raw) {
                            if (1 != l.nodeType) {
                                var c = document.createElement("span");
                                c.appendChild(l), l = c
                            }
                            l.contentEditable = "false", l.classList.add("ProseMirror-widget")
                        }
                        return (s = t.call(this, e, [], l, null)).widget = o, s.widget = o, a = f(s), s
                    }
                    return m(n, [{
                        key: "matchesWidget",
                        value: function(e) {
                            return 0 == this.dirty && e.type.eq(this.widget.type)
                        }
                    }, {
                        key: "parseRule",
                        value: function() {
                            return {
                                ignore: !0
                            }
                        }
                    }, {
                        key: "stopEvent",
                        value: function(e) {
                            var t = this.widget.spec.stopEvent;
                            return !!t && t(e)
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function(e) {
                            return "selection" != e.type || this.widget.spec.ignoreSelection
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.widget.type.destroy(this.dom), s(h(n.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "domAtom",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "side",
                        get: function() {
                            return this.widget.type.side
                        }
                    }]), n
                }(ke),
                Se = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i) {
                        var s;
                        return p(this, n), (s = t.call(this, e, [], o, null)).textDOM = r, s.text = i, s
                    }
                    return m(n, [{
                        key: "size",
                        get: function() {
                            return this.text.length
                        }
                    }, {
                        key: "localPosFromDOM",
                        value: function(e, t) {
                            return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
                        }
                    }, {
                        key: "domFromPos",
                        value: function(e) {
                            return {
                                node: this.textDOM,
                                offset: e
                            }
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function(e) {
                            return "characterData" === e.type && e.target.nodeValue == e.oldValue
                        }
                    }]), n
                }(ke),
                De = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i) {
                        var s;
                        return p(this, n), (s = t.call(this, e, [], r, i)).mark = o, s
                    }
                    return m(n, [{
                        key: "parseRule",
                        value: function() {
                            return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
                                mark: this.mark.type.name,
                                attrs: this.mark.attrs,
                                contentElement: this.contentDOM || void 0
                            }
                        }
                    }, {
                        key: "matchesMark",
                        value: function(e) {
                            return 3 != this.dirty && this.mark.eq(e)
                        }
                    }, {
                        key: "markDirty",
                        value: function(e, t) {
                            if (s(h(n.prototype), "markDirty", this).call(this, e, t), 0 != this.dirty) {
                                for (var o = this.parent; !o.node;) o = o.parent;
                                o.dirty < this.dirty && (o.dirty = this.dirty), this.dirty = 0
                            }
                        }
                    }, {
                        key: "slice",
                        value: function(e, t, o) {
                            var r = n.create(this.parent, this.mark, !0, o),
                                i = this.children,
                                s = this.size;
                            t < s && (i = qe(i, t, s, o)), e > 0 && (i = qe(i, 0, e, o));
                            for (var a = 0; a < i.length; a++) i[a].parent = r;
                            return r.children = i, r
                        }
                    }], [{
                        key: "create",
                        value: function(e, t, o, r) {
                            var i = r.nodeViews[t.type.name],
                                s = i && i(t, r, o);
                            return s && s.dom || (s = y.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t, o))), new n(e, t, s.dom, s.contentDOM || s.dom)
                        }
                    }]), n
                }(ke),
                Ne = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i, s, a, l, c, d) {
                        var u;
                        return p(this, n), (u = t.call(this, e, [], s, a)).node = o, u.outerDeco = r, u.innerDeco = i, u.nodeDOM = l, u
                    }
                    return m(n, [{
                        key: "parseRule",
                        value: function() {
                            var e = this;
                            if (this.node.type.spec.reparseInView) return null;
                            var t = {
                                node: this.node.type.name,
                                attrs: this.node.attrs
                            };
                            if ("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"), this.contentDOM)
                                if (this.contentLost) {
                                    for (var n = this.children.length - 1; n >= 0; n--) {
                                        var o = this.children[n];
                                        if (this.dom.contains(o.dom.parentNode)) {
                                            t.contentElement = o.dom.parentNode;
                                            break
                                        }
                                    }
                                    t.contentElement || (t.getContent = function() {
                                        return y.Fragment.empty
                                    })
                                } else t.contentElement = this.contentDOM;
                            else t.getContent = function() {
                                return e.node.content
                            };
                            return t
                        }
                    }, {
                        key: "matchesNode",
                        value: function(e, t, n) {
                            return 0 == this.dirty && e.eq(this.node) && Ie(t, this.outerDeco) && n.eq(this.innerDeco)
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.node.nodeSize
                        }
                    }, {
                        key: "border",
                        get: function() {
                            return this.node.isLeaf ? 0 : 1
                        }
                    }, {
                        key: "updateChildren",
                        value: function(e, t) {
                            var n = this,
                                o = this.node.inlineContent,
                                r = t,
                                i = e.composing ? this.localCompositionInfo(e, t) : null,
                                s = i && i.pos > -1 ? i : null,
                                a = i && i.pos < 0,
                                l = new ze(this, s && s.node, e);
                            ! function(e, t, n, o) {
                                var r = t.locals(e),
                                    i = 0;
                                if (0 == r.length) {
                                    for (var s = 0; s < e.childCount; s++) {
                                        var a = e.child(s);
                                        o(a, r, t.forChild(i, a), s), i += a.nodeSize
                                    }
                                    return
                                }
                                for (var l = 0, c = [], d = null, u = 0;;) {
                                    if (l < r.length && r[l].to == i) {
                                        for (var f = r[l++], h = void 0; l < r.length && r[l].to == i;)(h || (h = [f])).push(r[l++]);
                                        if (h) {
                                            h.sort(Le);
                                            for (var p = 0; p < h.length; p++) n(h[p], u, !!d)
                                        } else n(f, u, !!d)
                                    }
                                    var v = void 0,
                                        m = void 0;
                                    if (d) m = -1, v = d, d = null;
                                    else {
                                        if (!(u < e.childCount)) break;
                                        m = u, v = e.child(u++)
                                    }
                                    for (var g = 0; g < c.length; g++) c[g].to <= i && c.splice(g--, 1);
                                    for (; l < r.length && r[l].from <= i && r[l].to > i;) c.push(r[l++]);
                                    var y = i + v.nodeSize;
                                    if (v.isText) {
                                        var b = y;
                                        l < r.length && r[l].from < b && (b = r[l].from);
                                        for (var k = 0; k < c.length; k++) c[k].to < b && (b = c[k].to);
                                        b < y && (d = v.cut(b - i), v = v.cut(0, b - i), y = b, m = -1)
                                    }
                                    o(v, v.isInline && !v.isLeaf ? c.filter((function(e) {
                                        return !e.inline
                                    })) : c.slice(), t.forChild(i, v), m), i = y
                                }
                            }(this.node, this.innerDeco, (function(t, i, s) {
                                t.spec.marks ? l.syncToMarks(t.spec.marks, o, e) : t.type.side >= 0 && !s && l.syncToMarks(i == n.node.childCount ? y.Mark.none : n.node.child(i).marks, o, e), l.placeWidget(t, e, r)
                            }), (function(t, n, s, c) {
                                var d;
                                l.syncToMarks(t.marks, o, e), l.findNodeMatch(t, n, s, c) || a && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (d = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(t, n, s, d, e) || l.updateNextNode(t, n, s, e, c, r) || l.addNode(t, n, s, e, r), r += t.nodeSize
                            })), l.syncToMarks([], o, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || 2 == this.dirty) && (s && this.protectLocalComposition(e, s), Te(this.contentDOM, this.children, e), H && function(e) {
                                if ("UL" == e.nodeName || "OL" == e.nodeName) {
                                    var t = e.style.cssText;
                                    e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t
                                }
                            }(this.dom))
                        }
                    }, {
                        key: "localCompositionInfo",
                        value: function(e, t) {
                            var n = e.state.selection,
                                o = n.from,
                                r = n.to;
                            if (!(e.state.selection instanceof g.TextSelection) || o < t || r > t + this.node.content.size) return null;
                            var i = e.domSelectionRange(),
                                s = function(e, t) {
                                    for (;;) {
                                        if (3 == e.nodeType) return e;
                                        if (1 == e.nodeType && t > 0) {
                                            if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType) return e.childNodes[t];
                                            t = M(e = e.childNodes[t - 1])
                                        } else {
                                            if (!(1 == e.nodeType && t < e.childNodes.length)) return null;
                                            e = e.childNodes[t], t = 0
                                        }
                                    }
                                }(i.focusNode, i.focusOffset);
                            if (!s || !this.dom.contains(s.parentNode)) return null;
                            if (this.node.inlineContent) {
                                var a = s.nodeValue,
                                    l = function(e, t, n, o) {
                                        for (var r = 0, i = 0; r < e.childCount && i <= o;) {
                                            var s = e.child(r++),
                                                a = i;
                                            if (i += s.nodeSize, s.isText) {
                                                for (var l = s.text; r < e.childCount;) {
                                                    var c = e.child(r++);
                                                    if (i += c.nodeSize, !c.isText) break;
                                                    l += c.text
                                                }
                                                if (i >= n) {
                                                    var d = a < o ? l.lastIndexOf(t, o - a - 1) : -1;
                                                    if (d >= 0 && d + t.length + a >= n) return a + d;
                                                    if (n == o && l.length >= o + t.length - a && l.slice(o - a, o - a + t.length) == t) return o
                                                }
                                            }
                                        }
                                        return -1
                                    }(this.node.content, a, o - t, r - t);
                                return l < 0 ? null : {
                                    node: s,
                                    pos: l,
                                    text: a
                                }
                            }
                            return {
                                node: s,
                                pos: -1,
                                text: ""
                            }
                        }
                    }, {
                        key: "protectLocalComposition",
                        value: function(e, t) {
                            var n = t.node,
                                o = t.pos,
                                r = t.text;
                            if (!this.getDesc(n)) {
                                for (var i = n; i.parentNode != this.contentDOM; i = i.parentNode) {
                                    for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
                                    for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
                                    i.pmViewDesc && (i.pmViewDesc = void 0)
                                }
                                var s = new Se(this, i, n, r);
                                e.input.compositionNodes.push(s), this.children = qe(this.children, o, o + r.length, e, s)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t, n, o) {
                            return !(3 == this.dirty || !e.sameMarkup(this.node)) && (this.updateInner(e, t, n, o), !0)
                        }
                    }, {
                        key: "updateInner",
                        value: function(e, t, n, o) {
                            this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(o, this.posAtStart), this.dirty = 0
                        }
                    }, {
                        key: "updateOuterDeco",
                        value: function(e) {
                            if (!Ie(e, this.outerDeco)) {
                                var t = 1 != this.nodeDOM.nodeType,
                                    n = this.dom;
                                this.dom = Ve(this.dom, this.nodeDOM, Ae(this.outerDeco, this.node, t), Ae(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e
                            }
                        }
                    }, {
                        key: "selectNode",
                        value: function() {
                            1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0)
                        }
                    }, {
                        key: "deselectNode",
                        value: function() {
                            1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable")
                        }
                    }, {
                        key: "domAtom",
                        get: function() {
                            return this.node.isAtom
                        }
                    }], [{
                        key: "create",
                        value: function(e, t, o, r, i, s) {
                            var a, l = i.nodeViews[t.type.name],
                                c = l && l(t, i, (function() {
                                    return a ? a.parent ? a.parent.posBeforeChild(a) : void 0 : s
                                }), o, r),
                                d = c && c.dom,
                                u = c && c.contentDOM;
                            if (t.isText)
                                if (d) {
                                    if (3 != d.nodeType) throw new RangeError("Text must be rendered as a DOM text node")
                                } else d = document.createTextNode(t.text);
                            else if (!d) {
                                var f = y.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t));
                                d = f.dom, u = f.contentDOM
                            }
                            u || t.isText || "BR" == d.nodeName || (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
                            var h = d;
                            return d = Be(d, o, t), c ? a = new xe(e, t, o, r, d, u || null, h, c, i, s + 1) : t.isText ? new Ce(e, t, o, r, d, h, i) : new n(e, t, o, r, d, u || null, h, i, s + 1)
                        }
                    }]), n
                }(ke);

            function Oe(e, t, n, o, r) {
                Be(o, t, e);
                var i = new Ne(void 0, e, t, n, o, o, o, r, 0);
                return i.contentDOM && i.updateChildren(r, 0), i
            }
            var Ce = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i, s, a, l) {
                        return p(this, n), t.call(this, e, o, r, i, s, null, a, l, 0)
                    }
                    return m(n, [{
                        key: "parseRule",
                        value: function() {
                            for (var e = this.nodeDOM.parentNode; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
                            return {
                                skip: e || !0
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t, n, o) {
                            return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !e.sameMarkup(this.node)) && (this.updateOuterDeco(t), 0 == this.dirty && e.text == this.node.text || e.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = e.text, o.trackWrites == this.nodeDOM && (o.trackWrites = null)), this.node = e, this.dirty = 0, !0)
                        }
                    }, {
                        key: "inParent",
                        value: function() {
                            for (var e = this.parent.contentDOM, t = this.nodeDOM; t; t = t.parentNode)
                                if (t == e) return !0;
                            return !1
                        }
                    }, {
                        key: "domFromPos",
                        value: function(e) {
                            return {
                                node: this.nodeDOM,
                                offset: e
                            }
                        }
                    }, {
                        key: "localPosFromDOM",
                        value: function(e, t, o) {
                            return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : s(h(n.prototype), "localPosFromDOM", this).call(this, e, t, o)
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function(e) {
                            return "characterData" != e.type && "selection" != e.type
                        }
                    }, {
                        key: "slice",
                        value: function(e, t, o) {
                            var r = this.node.cut(e, t),
                                i = document.createTextNode(r.text);
                            return new n(this.parent, r, this.outerDeco, this.innerDeco, i, i, o)
                        }
                    }, {
                        key: "markDirty",
                        value: function(e, t) {
                            s(h(n.prototype), "markDirty", this).call(this, e, t), this.dom == this.nodeDOM || 0 != e && t != this.nodeDOM.nodeValue.length || (this.dirty = 3)
                        }
                    }, {
                        key: "domAtom",
                        get: function() {
                            return !1
                        }
                    }]), n
                }(Ne),
                Me = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n() {
                        return p(this, n), t.apply(this, arguments)
                    }
                    return m(n, [{
                        key: "parseRule",
                        value: function() {
                            return {
                                ignore: !0
                            }
                        }
                    }, {
                        key: "matchesHack",
                        value: function(e) {
                            return 0 == this.dirty && this.dom.nodeName == e
                        }
                    }, {
                        key: "domAtom",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "ignoreForCoords",
                        get: function() {
                            return "IMG" == this.dom.nodeName
                        }
                    }]), n
                }(ke),
                xe = function(e) {
                    l(n, e);
                    var t = d(n);

                    function n(e, o, r, i, s, a, l, c, d, u) {
                        var f;
                        return p(this, n), (f = t.call(this, e, o, r, i, s, a, l, d, u)).spec = c, f
                    }
                    return m(n, [{
                        key: "update",
                        value: function(e, t, o, r) {
                            if (3 == this.dirty) return !1;
                            if (this.spec.update) {
                                var i = this.spec.update(e, t, o);
                                return i && this.updateInner(e, t, o, r), i
                            }
                            return !(!this.contentDOM && !e.isLeaf) && s(h(n.prototype), "update", this).call(this, e, t, o, r)
                        }
                    }, {
                        key: "selectNode",
                        value: function() {
                            this.spec.selectNode ? this.spec.selectNode() : s(h(n.prototype), "selectNode", this).call(this)
                        }
                    }, {
                        key: "deselectNode",
                        value: function() {
                            this.spec.deselectNode ? this.spec.deselectNode() : s(h(n.prototype), "deselectNode", this).call(this)
                        }
                    }, {
                        key: "setSelection",
                        value: function(e, t, o, r) {
                            this.spec.setSelection ? this.spec.setSelection(e, t, o) : s(h(n.prototype), "setSelection", this).call(this, e, t, o, r)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.spec.destroy && this.spec.destroy(), s(h(n.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "stopEvent",
                        value: function(e) {
                            return !!this.spec.stopEvent && this.spec.stopEvent(e)
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function(e) {
                            return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : s(h(n.prototype), "ignoreMutation", this).call(this, e)
                        }
                    }]), n
                }(Ne);

            function Te(e, t, n) {
                for (var o = e.firstChild, r = !1, i = 0; i < t.length; i++) {
                    var s = t[i],
                        a = s.dom;
                    if (a.parentNode == e) {
                        for (; a != o;) o = Fe(o), r = !0;
                        o = o.nextSibling
                    } else r = !0, e.insertBefore(a, o);
                    if (s instanceof De) {
                        var l = o ? o.previousSibling : e.lastChild;
                        Te(s.contentDOM, s.children, n), o = l ? l.nextSibling : e.firstChild
                    }
                }
                for (; o;) o = Fe(o), r = !0;
                r && n.trackWrites == e && (n.trackWrites = null)
            }
            var Ee = function(e) {
                e && (this.nodeName = e)
            };
            Ee.prototype = Object.create(null);
            var Pe = [new Ee];

            function Ae(e, t, n) {
                if (0 == e.length) return Pe;
                for (var o = n ? Pe[0] : new Ee, r = [o], i = 0; i < e.length; i++) {
                    var s = e[i].type.attrs;
                    if (s)
                        for (var a in s.nodeName && r.push(o = new Ee(s.nodeName)), s) {
                            var l = s[a];
                            null != l && (n && 1 == r.length && r.push(o = new Ee(t.isInline ? "span" : "div")), "class" == a ? o.class = (o.class ? o.class + " " : "") + l : "style" == a ? o.style = (o.style ? o.style + ";" : "") + l : "nodeName" != a && (o[a] = l))
                        }
                }
                return r
            }

            function Ve(e, t, n, o) {
                if (n == Pe && o == Pe) return t;
                for (var r = t, i = 0; i < o.length; i++) {
                    var s = o[i],
                        a = n[i];
                    if (i) {
                        var l = void 0;
                        a && a.nodeName == s.nodeName && r != e && (l = r.parentNode) && l.nodeName.toLowerCase() == s.nodeName || ((l = document.createElement(s.nodeName)).pmIsDeco = !0, l.appendChild(r), a = Pe[0]), r = l
                    }
                    Re(r, a || Pe[0], s)
                }
                return r
            }

            function Re(e, t, n) {
                for (var o in t) "class" == o || "style" == o || "nodeName" == o || o in n || e.removeAttribute(o);
                for (var r in n) "class" != r && "style" != r && "nodeName" != r && n[r] != t[r] && e.setAttribute(r, n[r]);
                if (t.class != n.class) {
                    for (var i = t.class ? t.class.split(" ").filter(Boolean) : [], s = n.class ? n.class.split(" ").filter(Boolean) : [], a = 0; a < i.length; a++) - 1 == s.indexOf(i[a]) && e.classList.remove(i[a]);
                    for (var l = 0; l < s.length; l++) - 1 == i.indexOf(s[l]) && e.classList.add(s[l]);
                    0 == e.classList.length && e.removeAttribute("class")
                }
                if (t.style != n.style) {
                    if (t.style)
                        for (var c, d = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; c = d.exec(t.style);) e.style.removeProperty(c[1]);
                    n.style && (e.style.cssText += n.style)
                }
            }

            function Be(e, t, n) {
                return Ve(e, e, Pe, Ae(t, n, 1 != e.nodeType))
            }

            function Ie(e, t) {
                if (e.length != t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (!e[n].type.eq(t[n].type)) return !1;
                return !0
            }

            function Fe(e) {
                var t = e.nextSibling;
                return e.parentNode.removeChild(e), t
            }
            var ze = function() {
                function e(t, n, o) {
                    p(this, e), this.lock = n, this.view = o, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = function(e, t) {
                        var n = t,
                            o = n.children.length,
                            r = e.childCount,
                            i = new Map,
                            s = [];
                        e: for (; r > 0;) {
                            for (var a = void 0;;)
                                if (o) {
                                    var l = n.children[o - 1];
                                    if (!(l instanceof De)) {
                                        a = l, o--;
                                        break
                                    }
                                    n = l, o = l.children.length
                                } else {
                                    if (n == t) break e;
                                    o = n.parent.children.indexOf(n), n = n.parent
                                }
                            var c = a.node;
                            if (c) {
                                if (c != e.child(r - 1)) break;
                                --r, i.set(a, r), s.push(a)
                            }
                        }
                        return {
                            index: r,
                            matched: i,
                            matches: s.reverse()
                        }
                    }(t.node.content, t)
                }
                return m(e, [{
                    key: "destroyBetween",
                    value: function(e, t) {
                        if (e != t) {
                            for (var n = e; n < t; n++) this.top.children[n].destroy();
                            this.top.children.splice(e, t - e), this.changed = !0
                        }
                    }
                }, {
                    key: "destroyRest",
                    value: function() {
                        this.destroyBetween(this.index, this.top.children.length)
                    }
                }, {
                    key: "syncToMarks",
                    value: function(e, t, n) {
                        for (var o = 0, r = this.stack.length >> 1, i = Math.min(r, e.length); o < i && (o == r - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && !1 !== e[o].type.spec.spanning;) o++;
                        for (; o < r;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), r--;
                        for (; r < e.length;) {
                            this.stack.push(this.top, this.index + 1);
                            for (var s = -1, a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                                var l = this.top.children[a];
                                if (l.matchesMark(e[r]) && !this.isLocked(l.dom)) {
                                    s = a;
                                    break
                                }
                            }
                            if (s > -1) s > this.index && (this.changed = !0, this.destroyBetween(this.index, s)), this.top = this.top.children[this.index];
                            else {
                                var c = De.create(this.top, e[r], t, n);
                                this.top.children.splice(this.index, 0, c), this.top = c, this.changed = !0
                            }
                            this.index = 0, r++
                        }
                    }
                }, {
                    key: "findNodeMatch",
                    value: function(e, t, n, o) {
                        var r, i = -1;
                        if (o >= this.preMatch.index && (r = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && r.matchesNode(e, t, n)) i = this.top.children.indexOf(r, this.index);
                        else
                            for (var s = this.index, a = Math.min(this.top.children.length, s + 5); s < a; s++) {
                                var l = this.top.children[s];
                                if (l.matchesNode(e, t, n) && !this.preMatch.matched.has(l)) {
                                    i = s;
                                    break
                                }
                            }
                        return !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
                    }
                }, {
                    key: "updateNodeAt",
                    value: function(e, t, n, o, r) {
                        var i = this.top.children[o];
                        return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2), !!i.update(e, t, n, r) && (this.destroyBetween(this.index, o), this.index++, !0)
                    }
                }, {
                    key: "findIndexWithChild",
                    value: function(e) {
                        for (;;) {
                            var t = e.parentNode;
                            if (!t) return -1;
                            if (t == this.top.contentDOM) {
                                var n = e.pmViewDesc;
                                if (n)
                                    for (var o = this.index; o < this.top.children.length; o++)
                                        if (this.top.children[o] == n) return o;
                                return -1
                            }
                            e = t
                        }
                    }
                }, {
                    key: "updateNextNode",
                    value: function(e, t, n, o, r, i) {
                        for (var s = this.index; s < this.top.children.length; s++) {
                            var a = this.top.children[s];
                            if (a instanceof Ne) {
                                var l = this.preMatch.matched.get(a);
                                if (null != l && l != r) return !1;
                                var c = a.dom,
                                    d = void 0,
                                    u = this.isLocked(c) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && 3 != a.dirty && Ie(t, a.outerDeco));
                                if (!u && a.update(e, t, n, o)) return this.destroyBetween(this.index, s), a.dom != c && (this.changed = !0), this.index++, !0;
                                if (!u && (d = this.recreateWrapper(a, e, t, n, o, i))) return this.top.children[this.index] = d, d.dirty = 2, d.updateChildren(o, i + 1), d.dirty = 0, this.changed = !0, this.index++, !0;
                                break
                            }
                        }
                        return !1
                    }
                }, {
                    key: "recreateWrapper",
                    value: function(e, t, n, o, i, s) {
                        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
                        var a = Ne.create(this.top, t, n, o, i, s);
                        if (!a.contentDOM) return null;
                        a.children = e.children, e.children = [];
                        var l, c = r(a.children);
                        try {
                            for (c.s(); !(l = c.n()).done;) {
                                l.value.parent = a
                            }
                        } catch (d) {
                            c.e(d)
                        } finally {
                            c.f()
                        }
                        return a
                    }
                }, {
                    key: "addNode",
                    value: function(e, t, n, o, r) {
                        var i = Ne.create(this.top, e, t, n, o, r);
                        i.contentDOM && i.updateChildren(o, r + 1), this.top.children.splice(this.index++, 0, i), this.changed = !0
                    }
                }, {
                    key: "placeWidget",
                    value: function(e, t, n) {
                        var o = this.index < this.top.children.length ? this.top.children[this.index] : null;
                        if (!o || !o.matchesWidget(e) || e != o.widget && o.widget.type.toDOM.parentNode) {
                            var r = new we(this.top, e, t, n);
                            this.top.children.splice(this.index++, 0, r), this.changed = !0
                        } else this.index++
                    }
                }, {
                    key: "addTextblockHacks",
                    value: function() {
                        for (var e = this.top.children[this.index - 1], t = this.top; e instanceof De;) e = (t = e).children[t.children.length - 1];
                        (!e || !(e instanceof Ce) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((W || $) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top))
                    }
                }, {
                    key: "addHackNode",
                    value: function(e, t) {
                        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
                        else {
                            var n = document.createElement(e);
                            "IMG" == e && (n.className = "ProseMirror-separator", n.alt = ""), "BR" == e && (n.className = "ProseMirror-trailingBreak");
                            var o = new Me(this.top, [], n, null);
                            t != this.top ? t.children.push(o) : t.children.splice(this.index++, 0, o), this.changed = !0
                        }
                    }
                }, {
                    key: "isLocked",
                    value: function(e) {
                        return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode))
                    }
                }]), e
            }();

            function Le(e, t) {
                return e.type.side - t.type.side
            }

            function qe(e, t, n, o, r) {
                for (var i = [], s = 0, a = 0; s < e.length; s++) {
                    var l = e[s],
                        c = a,
                        d = a += l.size;
                    c >= n || d <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, o)), r && (i.push(r), r = void 0), d > n && i.push(l.slice(n - c, l.size, o)))
                }
                return i
            }

            function Ke(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = e.domSelectionRange(),
                    o = e.state.doc;
                if (!n.focusNode) return null;
                var r = e.docView.nearestDesc(n.focusNode),
                    i = r && 0 == r.size,
                    s = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
                if (s < 0) return null;
                var a, l, c = o.resolve(s);
                if (E(n)) {
                    for (a = c; r && !r.node;) r = r.parent;
                    var d = r.node;
                    if (r && d.isAtom && g.NodeSelection.isSelectable(d) && r.parent && (!d.isInline || !x(n.focusNode, n.focusOffset, r.dom))) {
                        var u = r.posBefore;
                        l = new g.NodeSelection(s == u ? c : o.resolve(u))
                    }
                } else {
                    var f = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                    if (f < 0) return null;
                    a = o.resolve(f)
                }
                if (!l) {
                    var h = "pointer" == t || e.state.selection.head < c.pos && !i ? 1 : -1;
                    l = Qe(e, a, c, h)
                }
                return l
            }

            function $e(e) {
                return e.editable ? e.hasFocus() : et(e) && document.activeElement && document.activeElement.contains(e.dom)
            }

            function _e(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.state.selection;
                if (Ye(e, n), $e(e)) {
                    if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && $) {
                        var o = e.domSelectionRange(),
                            r = e.domObserver.currentSelection;
                        if (o.anchorNode && r.anchorNode && N(o.anchorNode, o.anchorOffset, r.anchorNode, r.anchorOffset)) return e.input.mouseDown.delayedSelectionSync = !0, void e.domObserver.setCurSelection()
                    }
                    if (e.domObserver.disconnectSelection(), e.cursorWrapper) Xe(e);
                    else {
                        var i, s, a = n.anchor,
                            l = n.head;
                        !We || n instanceof g.TextSelection || (n.$from.parent.inlineContent || (i = He(e, n.from)), n.empty || n.$from.parent.inlineContent || (s = He(e, n.to))), e.docView.setSelection(a, l, e.root, t), We && (i && Ue(i), s && Ue(s)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ge(e))
                    }
                    e.domObserver.setCurSelection(), e.domObserver.connectSelection()
                }
            }
            var We = W || $ && _ < 63;

            function He(e, t) {
                var n = e.docView.domFromPos(t, 0),
                    o = n.node,
                    r = n.offset,
                    i = r < o.childNodes.length ? o.childNodes[r] : null,
                    s = r ? o.childNodes[r - 1] : null;
                if (W && i && "false" == i.contentEditable) return je(i);
                if ((!i || "false" == i.contentEditable) && (!s || "false" == s.contentEditable)) {
                    if (i) return je(i);
                    if (s) return je(s)
                }
            }

            function je(e) {
                return e.contentEditable = "true", W && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e
            }

            function Ue(e) {
                e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null)
            }

            function Ge(e) {
                var t = e.dom.ownerDocument;
                t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
                var n = e.domSelectionRange(),
                    o = n.anchorNode,
                    r = n.anchorOffset;
                t.addEventListener("selectionchange", e.input.hideSelectionGuard = function() {
                    n.anchorNode == o && n.anchorOffset == r || (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout((function() {
                        $e(e) && !e.state.selection.visible || e.dom.classList.remove("ProseMirror-hideselection")
                    }), 20))
                })
            }

            function Xe(e) {
                var t = e.domSelection(),
                    n = document.createRange(),
                    o = e.cursorWrapper.dom,
                    r = "IMG" == o.nodeName;
                r ? n.setEnd(o.parentNode, k(o) + 1) : n.setEnd(o, 0), n.collapse(!1), t.removeAllRanges(), t.addRange(n), !r && !e.state.selection.visible && z && L <= 11 && (o.disabled = !0, o.disabled = !1)
            }

            function Ye(e, t) {
                if (t instanceof g.NodeSelection) {
                    var n = e.docView.descAt(t.from);
                    n != e.lastSelectedViewDesc && (Je(e), n && n.selectNode(), e.lastSelectedViewDesc = n)
                } else Je(e)
            }

            function Je(e) {
                e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0)
            }

            function Qe(e, t, n, o) {
                return e.someProp("createSelectionBetween", (function(o) {
                    return o(e, t, n)
                })) || g.TextSelection.between(t, n, o)
            }

            function Ze(e) {
                return !(e.editable && !e.hasFocus()) && et(e)
            }

            function et(e) {
                var t = e.domSelectionRange();
                if (!t.anchorNode) return !1;
                try {
                    return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
                } catch (n) {
                    return !1
                }
            }

            function tt(e, t) {
                var n = e.selection,
                    o = n.$anchor,
                    r = n.$head,
                    i = t > 0 ? o.max(r) : o.min(r),
                    s = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
                return s && g.Selection.findFrom(s, t)
            }

            function nt(e, t) {
                return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0
            }

            function ot(e, t, n) {
                var o = e.state.selection;
                if (!(o instanceof g.TextSelection)) {
                    if (o instanceof g.NodeSelection && o.node.isInline) return nt(e, new g.TextSelection(t > 0 ? o.$to : o.$from));
                    var r = tt(e.state, t);
                    return !!r && nt(e, r)
                }
                if (!o.empty || n.indexOf("s") > -1) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
                    var i = tt(e.state, t);
                    return !!(i && i instanceof g.NodeSelection) && nt(e, i)
                }
                if (!(j && n.indexOf("m") > -1)) {
                    var s, a = o.$head,
                        l = a.textOffset ? null : t < 0 ? a.nodeBefore : a.nodeAfter;
                    if (!l || l.isText) return !1;
                    var c = t < 0 ? a.pos - l.nodeSize : a.pos;
                    return !!(l.isAtom || (s = e.docView.descAt(c)) && !s.contentDOM) && (g.NodeSelection.isSelectable(l) ? nt(e, new g.NodeSelection(t < 0 ? e.state.doc.resolve(a.pos - l.nodeSize) : a)) : !!X && nt(e, new g.TextSelection(e.state.doc.resolve(t < 0 ? c : c + l.nodeSize))))
                }
            }

            function rt(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function it(e) {
                var t = e.pmViewDesc;
                return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName)
            }

            function st(e, t) {
                return t < 0 ? function(e) {
                    var t = e.domSelectionRange(),
                        n = t.focusNode,
                        o = t.focusOffset;
                    if (!n) return;
                    var r, i, s = !1;
                    q && 1 == n.nodeType && o < rt(n) && it(n.childNodes[o]) && (s = !0);
                    for (;;)
                        if (o > 0) {
                            if (1 != n.nodeType) break;
                            var a = n.childNodes[o - 1];
                            if (it(a)) r = n, i = --o;
                            else {
                                if (3 != a.nodeType) break;
                                o = (n = a).nodeValue.length
                            }
                        } else {
                            if (lt(n)) break;
                            for (var l = n.previousSibling; l && it(l);) r = n.parentNode, i = k(l), l = l.previousSibling;
                            if (l) o = rt(n = l);
                            else {
                                if ((n = n.parentNode) == e.dom) break;
                                o = 0
                            }
                        }
                    s ? ct(e, n, o) : r && ct(e, r, i)
                }(e) : at(e)
            }

            function at(e) {
                var t = e.domSelectionRange(),
                    n = t.focusNode,
                    o = t.focusOffset;
                if (n) {
                    for (var r, i, s = rt(n);;)
                        if (o < s) {
                            if (1 != n.nodeType) break;
                            if (!it(n.childNodes[o])) break;
                            r = n, i = ++o
                        } else {
                            if (lt(n)) break;
                            for (var a = n.nextSibling; a && it(a);) r = a.parentNode, i = k(a) + 1, a = a.nextSibling;
                            if (a) o = 0, s = rt(n = a);
                            else {
                                if ((n = n.parentNode) == e.dom) break;
                                o = s = 0
                            }
                        }
                    r && ct(e, r, i)
                }
            }

            function lt(e) {
                var t = e.pmViewDesc;
                return t && t.node && t.node.isBlock
            }

            function ct(e, t, n) {
                var o = e.domSelection();
                if (E(o)) {
                    var r = document.createRange();
                    r.setEnd(t, n), r.setStart(t, n), o.removeAllRanges(), o.addRange(r)
                } else o.extend && o.extend(t, n);
                e.domObserver.setCurSelection();
                var i = e.state;
                setTimeout((function() {
                    e.state == i && _e(e)
                }), 50)
            }

            function dt(e, t) {
                var n = e.state.doc.resolve(t);
                if (!$ && !U && n.parent.inlineContent) {
                    var o = e.coordsAtPos(t);
                    if (t > n.start()) {
                        var r = e.coordsAtPos(t - 1),
                            i = (r.top + r.bottom) / 2;
                        if (i > o.top && i < o.bottom && Math.abs(r.left - o.left) > 1) return r.left < o.left ? "ltr" : "rtl"
                    }
                    if (t < n.end()) {
                        var s = e.coordsAtPos(t + 1),
                            a = (s.top + s.bottom) / 2;
                        if (a > o.top && a < o.bottom && Math.abs(s.left - o.left) > 1) return s.left > o.left ? "ltr" : "rtl"
                    }
                }
                return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr"
            }

            function ut(e, t, n) {
                var o = e.state.selection;
                if (o instanceof g.TextSelection && !o.empty || n.indexOf("s") > -1) return !1;
                if (j && n.indexOf("m") > -1) return !1;
                var r = o.$from,
                    i = o.$to;
                if (!r.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                    var s = tt(e.state, t);
                    if (s && s instanceof g.NodeSelection) return nt(e, s)
                }
                if (!r.parent.inlineContent) {
                    var a = t < 0 ? r : i,
                        l = o instanceof g.AllSelection ? g.Selection.near(a, t) : g.Selection.findFrom(a, t);
                    return !!l && nt(e, l)
                }
                return !1
            }

            function ft(e, t) {
                if (!(e.state.selection instanceof g.TextSelection)) return !0;
                var n = e.state.selection,
                    o = n.$head,
                    r = n.$anchor,
                    i = n.empty;
                if (!o.sameParent(r)) return !0;
                if (!i) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
                var s = !o.textOffset && (t < 0 ? o.nodeBefore : o.nodeAfter);
                if (s && !s.isText) {
                    var a = e.state.tr;
                    return t < 0 ? a.delete(o.pos - s.nodeSize, o.pos) : a.delete(o.pos, o.pos + s.nodeSize), e.dispatch(a), !0
                }
                return !1
            }

            function ht(e, t, n) {
                e.domObserver.stop(), t.contentEditable = n, e.domObserver.start()
            }

            function pt(e, t) {
                var n = t.keyCode,
                    o = function(e) {
                        var t = "";
                        return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t
                    }(t);
                if (8 == n || j && 72 == n && "c" == o) return ft(e, -1) || st(e, -1);
                if (46 == n || j && 68 == n && "c" == o) return ft(e, 1) || st(e, 1);
                if (13 == n || 27 == n) return !0;
                if (37 == n || j && 66 == n && "c" == o) {
                    var r = 37 == n ? "ltr" == dt(e, e.state.selection.from) ? -1 : 1 : -1;
                    return ot(e, r, o) || st(e, r)
                }
                if (39 == n || j && 70 == n && "c" == o) {
                    var i = 39 == n ? "ltr" == dt(e, e.state.selection.from) ? 1 : -1 : 1;
                    return ot(e, i, o) || st(e, i)
                }
                return 38 == n || j && 80 == n && "c" == o ? ut(e, -1, o) || st(e, -1) : 40 == n || j && 78 == n && "c" == o ? function(e) {
                    if (!W || e.state.selection.$head.parentOffset > 0) return !1;
                    var t = e.domSelectionRange(),
                        n = t.focusNode,
                        o = t.focusOffset;
                    if (n && 1 == n.nodeType && 0 == o && n.firstChild && "false" == n.firstChild.contentEditable) {
                        var r = n.firstChild;
                        ht(e, r, "true"), setTimeout((function() {
                            return ht(e, r, "false")
                        }), 20)
                    }
                    return !1
                }(e) || ut(e, 1, o) || at(e) : o == (j ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n)
            }

            function vt(e, t) {
                e.someProp("transformCopied", (function(n) {
                    t = n(t, e)
                }));
                for (var n = [], o = t, r = o.content, i = o.openStart, s = o.openEnd; i > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;) {
                    i--, s--;
                    var a = r.firstChild;
                    n.push(a.type.name, a.attrs != a.type.defaultAttrs ? a.attrs : null), r = a.content
                }
                var l = e.someProp("clipboardSerializer") || y.DOMSerializer.fromSchema(e.state.schema),
                    c = Ot(),
                    d = c.createElement("div");
                d.appendChild(l.serializeFragment(r, {
                    document: c
                }));
                for (var u, f = d.firstChild, h = 0; f && 1 == f.nodeType && (u = Dt[f.nodeName.toLowerCase()]);) {
                    for (var p = u.length - 1; p >= 0; p--) {
                        for (var v = c.createElement(u[p]); d.firstChild;) v.appendChild(d.firstChild);
                        d.appendChild(v), h++
                    }
                    f = d.firstChild
                }
                return f && 1 == f.nodeType && f.setAttribute("data-pm-slice", "".concat(i, " ").concat(s).concat(h ? " -".concat(h) : "", " ").concat(JSON.stringify(n))), {
                    dom: d,
                    text: e.someProp("clipboardTextSerializer", (function(n) {
                        return n(t, e)
                    })) || t.content.textBetween(0, t.content.size, "\n\n")
                }
            }

            function mt(e, t, n, r, i) {
                var s, a, l = i.parent.type.spec.code;
                if (!n && !t) return null;
                var c = t && (r || l || !n);
                if (c) {
                    if (e.someProp("transformPastedText", (function(n) {
                            t = n(t, l || r, e)
                        })), l) return t ? new y.Slice(y.Fragment.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0) : y.Slice.empty;
                    var d = e.someProp("clipboardTextParser", (function(n) {
                        return n(t, i, r, e)
                    }));
                    if (d) a = d;
                    else {
                        var u = i.marks(),
                            f = e.state.schema,
                            h = y.DOMSerializer.fromSchema(f);
                        s = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((function(e) {
                            var t = s.appendChild(document.createElement("p"));
                            e && t.appendChild(h.serializeNode(f.text(e, u)))
                        }))
                    }
                } else e.someProp("transformPastedHTML", (function(t) {
                    n = t(n, e)
                })), s = function(e) {
                    var t = /^(\s*<meta [^>]*>)*/.exec(e);
                    t && (e = e.slice(t[0].length));
                    var n, o = Ot().createElement("div"),
                        r = /<([a-z][^>\s]+)/i.exec(e);
                    (n = r && Dt[r[1].toLowerCase()]) && (e = n.map((function(e) {
                        return "<" + e + ">"
                    })).join("") + e + n.map((function(e) {
                        return "</" + e + ">"
                    })).reverse().join(""));
                    if (o.innerHTML = e, n)
                        for (var i = 0; i < n.length; i++) o = o.querySelector(n[i]) || o;
                    return o
                }(n), X && function(e) {
                    for (var t = e.querySelectorAll($ ? "span:not([class]):not([style])" : "span.Apple-converted-space"), n = 0; n < t.length; n++) {
                        var o = t[n];
                        1 == o.childNodes.length && "\xa0" == o.textContent && o.parentNode && o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), o)
                    }
                }(s);
                var p = s && s.querySelector("[data-pm-slice]"),
                    v = p && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(p.getAttribute("data-pm-slice") || "");
                if (v && v[3])
                    for (var m = +v[3]; m > 0; m--) {
                        for (var g = s.firstChild; g && 1 != g.nodeType;) g = g.nextSibling;
                        if (!g) break;
                        s = g
                    }
                if (!a) {
                    var b = e.someProp("clipboardParser") || e.someProp("domParser") || y.DOMParser.fromSchema(e.state.schema);
                    a = b.parseSlice(s, {
                        preserveWhitespace: !(!c && !v),
                        context: i,
                        ruleFromNode: function(e) {
                            return "BR" != e.nodeName || e.nextSibling || !e.parentNode || gt.test(e.parentNode.nodeName) ? null : {
                                ignore: !0
                            }
                        }
                    })
                }
                if (v) a = function(e, t) {
                    if (!e.size) return e;
                    var n, o = e.content.firstChild.type.schema;
                    try {
                        n = JSON.parse(t)
                    } catch (c) {
                        return e
                    }
                    for (var r = e.content, i = e.openStart, s = e.openEnd, a = n.length - 2; a >= 0; a -= 2) {
                        var l = o.nodes[n[a]];
                        if (!l || l.hasRequiredAttrs()) break;
                        r = y.Fragment.from(l.create(n[a + 1], r)), i++, s++
                    }
                    return new y.Slice(r, i, s)
                }(St(a, +v[1], +v[2]), v[4]);
                else if (a = y.Slice.maxOpen(function(e, t) {
                        if (e.childCount < 2) return e;
                        for (var n = function(n) {
                                var o = t.node(n).contentMatchAt(t.index(n)),
                                    r = void 0,
                                    i = [];
                                if (e.forEach((function(e) {
                                        if (i) {
                                            var t, n = o.findWrapping(e.type);
                                            if (!n) return i = null;
                                            if (t = i.length && r.length && bt(n, r, e, i[i.length - 1], 0)) i[i.length - 1] = t;
                                            else {
                                                i.length && (i[i.length - 1] = kt(i[i.length - 1], r.length));
                                                var s = yt(e, n);
                                                i.push(s), o = o.matchType(s.type), r = n
                                            }
                                        }
                                    })), i) return {
                                    v: y.Fragment.from(i)
                                }
                            }, r = t.depth; r >= 0; r--) {
                            var i = n(r);
                            if ("object" === o(i)) return i.v
                        }
                        return e
                    }(a.content, i), !0), a.openStart || a.openEnd) {
                    for (var k = 0, w = 0, S = a.content.firstChild; k < a.openStart && !S.type.spec.isolating; k++, S = S.firstChild);
                    for (var D = a.content.lastChild; w < a.openEnd && !D.type.spec.isolating; w++, D = D.lastChild);
                    a = St(a, k, w)
                }
                return e.someProp("transformPasted", (function(t) {
                    a = t(a, e)
                })), a
            }
            var gt = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

            function yt(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = t.length - 1; o >= n; o--) e = t[o].create(null, y.Fragment.from(e));
                return e
            }

            function bt(e, t, n, o, r) {
                if (r < e.length && r < t.length && e[r] == t[r]) {
                    var i = bt(e, t, n, o.lastChild, r + 1);
                    if (i) return o.copy(o.content.replaceChild(o.childCount - 1, i));
                    if (o.contentMatchAt(o.childCount).matchType(r == e.length - 1 ? n.type : e[r + 1])) return o.copy(o.content.append(y.Fragment.from(yt(n, e, r + 1))))
                }
            }

            function kt(e, t) {
                if (0 == t) return e;
                var n = e.content.replaceChild(e.childCount - 1, kt(e.lastChild, t - 1)),
                    o = e.contentMatchAt(e.childCount).fillBefore(y.Fragment.empty, !0);
                return e.copy(n.append(o))
            }

            function wt(e, t, n, o, r, i) {
                var s = t < 0 ? e.firstChild : e.lastChild,
                    a = s.content;
                return e.childCount > 1 && (i = 0), r < o - 1 && (a = wt(a, t, n, o, r + 1, i)), r >= n && (a = t < 0 ? s.contentMatchAt(0).fillBefore(a, i <= r).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(y.Fragment.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, s.copy(a))
            }

            function St(e, t, n) {
                return t < e.openStart && (e = new y.Slice(wt(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new y.Slice(wt(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e
            }
            var Dt = {
                    thead: ["table"],
                    tbody: ["table"],
                    tfoot: ["table"],
                    caption: ["table"],
                    colgroup: ["table"],
                    col: ["table", "colgroup"],
                    tr: ["table", "tbody"],
                    td: ["table", "tbody", "tr"],
                    th: ["table", "tbody", "tr"]
                },
                Nt = null;

            function Ot() {
                return Nt || (Nt = document.implementation.createHTMLDocument("title"))
            }
            var Ct = {},
                Mt = {},
                xt = {
                    touchstart: !0,
                    touchmove: !0
                },
                Tt = m((function e() {
                    p(this, e), this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
                        time: 0,
                        x: 0,
                        y: 0,
                        type: ""
                    }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
                }));

            function Et(e, t) {
                e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now()
            }

            function Pt(e) {
                e.someProp("handleDOMEvents", (function(t) {
                    for (var n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = function(t) {
                        return At(e, t)
                    })
                }))
            }

            function At(e, t) {
                return e.someProp("handleDOMEvents", (function(n) {
                    var o = n[t.type];
                    return !!o && (o(e, t) || t.defaultPrevented)
                }))
            }

            function Vt(e) {
                return {
                    left: e.clientX,
                    top: e.clientY
                }
            }

            function Rt(e, t, n, r, i) {
                if (-1 == r) return !1;
                for (var s = e.state.doc.resolve(r), a = function(o) {
                        if (e.someProp(t, (function(t) {
                                return o > s.depth ? t(e, n, s.nodeAfter, s.before(o), i, !0) : t(e, n, s.node(o), s.before(o), i, !1)
                            }))) return {
                            v: !0
                        }
                    }, l = s.depth + 1; l > 0; l--) {
                    var c = a(l);
                    if ("object" === o(c)) return c.v
                }
                return !1
            }

            function Bt(e, t, n) {
                e.focused || e.focus();
                var o = e.state.tr.setSelection(t);
                "pointer" == n && o.setMeta("pointer", !0), e.dispatch(o)
            }

            function It(e, t, n, o, r) {
                return Rt(e, "handleClickOn", t, n, o) || e.someProp("handleClick", (function(n) {
                    return n(e, t, o)
                })) || (r ? function(e, t) {
                    if (-1 == t) return !1;
                    var n, o, r = e.state.selection;
                    r instanceof g.NodeSelection && (n = r.node);
                    for (var i = e.state.doc.resolve(t), s = i.depth + 1; s > 0; s--) {
                        var a = s > i.depth ? i.nodeAfter : i.node(s);
                        if (g.NodeSelection.isSelectable(a)) {
                            o = n && r.$from.depth > 0 && s >= r.$from.depth && i.before(r.$from.depth + 1) == r.$from.pos ? i.before(r.$from.depth) : i.before(s);
                            break
                        }
                    }
                    return null != o && (Bt(e, g.NodeSelection.create(e.state.doc, o), "pointer"), !0)
                }(e, n) : function(e, t) {
                    if (-1 == t) return !1;
                    var n = e.state.doc.resolve(t),
                        o = n.nodeAfter;
                    return !!(o && o.isAtom && g.NodeSelection.isSelectable(o)) && (Bt(e, new g.NodeSelection(n), "pointer"), !0)
                }(e, n))
            }

            function Ft(e, t, n, o) {
                return Rt(e, "handleDoubleClickOn", t, n, o) || e.someProp("handleDoubleClick", (function(n) {
                    return n(e, t, o)
                }))
            }

            function zt(e, t, n, o) {
                return Rt(e, "handleTripleClickOn", t, n, o) || e.someProp("handleTripleClick", (function(n) {
                    return n(e, t, o)
                })) || function(e, t, n) {
                    if (0 != n.button) return !1;
                    var o = e.state.doc;
                    if (-1 == t) return !!o.inlineContent && (Bt(e, g.TextSelection.create(o, 0, o.content.size), "pointer"), !0);
                    for (var r = o.resolve(t), i = r.depth + 1; i > 0; i--) {
                        var s = i > r.depth ? r.nodeAfter : r.node(i),
                            a = r.before(i);
                        if (s.inlineContent) Bt(e, g.TextSelection.create(o, a + 1, a + 1 + s.content.size), "pointer");
                        else {
                            if (!g.NodeSelection.isSelectable(s)) continue;
                            Bt(e, g.NodeSelection.create(o, a), "pointer")
                        }
                        return !0
                    }
                }(e, n, o)
            }

            function Lt(e) {
                return jt(e)
            }
            Mt.keydown = function(e, t) {
                var n = t;
                if (e.input.shiftKey = 16 == n.keyCode || n.shiftKey, !$t(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !G || !$ || 13 != n.keyCode))
                    if (229 != n.keyCode && e.domObserver.forceFlush(), !H || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) e.someProp("handleKeyDown", (function(t) {
                        return t(e, n)
                    })) || pt(e, n) ? n.preventDefault() : Et(e, "key");
                    else {
                        var o = Date.now();
                        e.input.lastIOSEnter = o, e.input.lastIOSEnterFallbackTimeout = setTimeout((function() {
                            e.input.lastIOSEnter == o && (e.someProp("handleKeyDown", (function(t) {
                                return t(e, P(13, "Enter"))
                            })), e.input.lastIOSEnter = 0)
                        }), 200)
                    }
            }, Mt.keyup = function(e, t) {
                16 == t.keyCode && (e.input.shiftKey = !1)
            }, Mt.keypress = function(e, t) {
                var n = t;
                if (!($t(e, n) || !n.charCode || n.ctrlKey && !n.altKey || j && n.metaKey))
                    if (e.someProp("handleKeyPress", (function(t) {
                            return t(e, n)
                        }))) n.preventDefault();
                    else {
                        var o = e.state.selection;
                        if (!(o instanceof g.TextSelection) || !o.$from.sameParent(o.$to)) {
                            var r = String.fromCharCode(n.charCode);
                            /[\r\n]/.test(r) || e.someProp("handleTextInput", (function(t) {
                                return t(e, o.$from.pos, o.$to.pos, r)
                            })) || e.dispatch(e.state.tr.insertText(r).scrollIntoView()), n.preventDefault()
                        }
                    }
            };
            var qt = j ? "metaKey" : "ctrlKey";
            Ct.mousedown = function(e, t) {
                var n = t;
                e.input.shiftKey = n.shiftKey;
                var o = Lt(e),
                    r = Date.now(),
                    i = "singleClick";
                r - e.input.lastClick.time < 500 && function(e, t) {
                    var n = t.x - e.clientX,
                        o = t.y - e.clientY;
                    return n * n + o * o < 100
                }(n, e.input.lastClick) && !n[qt] && ("singleClick" == e.input.lastClick.type ? i = "doubleClick" : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")), e.input.lastClick = {
                    time: r,
                    x: n.clientX,
                    y: n.clientY,
                    type: i
                };
                var s = e.posAtCoords(Vt(n));
                s && ("singleClick" == i ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new Kt(e, s, n, !!o)) : ("doubleClick" == i ? Ft : zt)(e, s.pos, s.inside, n) ? n.preventDefault() : Et(e, "pointer"))
            };
            var Kt = function() {
                function e(t, n, o, r) {
                    var i, s, a = this;
                    if (p(this, e), this.view = t, this.pos = n, this.event = o, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!o[qt], this.allowDefault = o.shiftKey, n.inside > -1) i = t.state.doc.nodeAt(n.inside), s = n.inside;
                    else {
                        var l = t.state.doc.resolve(n.pos);
                        i = l.parent, s = l.depth ? l.before() : 0
                    }
                    var c = r ? null : o.target,
                        d = c ? t.docView.nearestDesc(c, !0) : null;
                    this.target = d ? d.dom : null;
                    var u = t.state.selection;
                    (0 == o.button && i.type.spec.draggable && !1 !== i.type.spec.selectable || u instanceof g.NodeSelection && u.from <= s && u.to > s) && (this.mightDrag = {
                        node: i,
                        pos: s,
                        addAttr: !(!this.target || this.target.draggable),
                        setUneditable: !(!this.target || !q || this.target.hasAttribute("contentEditable"))
                    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout((function() {
                        a.view.input.mouseDown == a && a.target.setAttribute("contentEditable", "false")
                    }), 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), Et(t, "pointer")
                }
                return m(e, [{
                    key: "done",
                    value: function() {
                        var e = this;
                        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout((function() {
                            return _e(e.view)
                        })), this.view.input.mouseDown = null
                    }
                }, {
                    key: "up",
                    value: function(e) {
                        if (this.done(), this.view.dom.contains(e.target)) {
                            var t = this.pos;
                            this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Vt(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Et(this.view, "pointer") : It(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : 0 == e.button && (this.flushed || W && this.mightDrag && !this.mightDrag.node.isAtom || $ && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Bt(this.view, g.Selection.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Et(this.view, "pointer")
                        }
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        this.updateAllowDefault(e), Et(this.view, "pointer"), 0 == e.buttons && this.done()
                    }
                }, {
                    key: "updateAllowDefault",
                    value: function(e) {
                        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
                    }
                }]), e
            }();

            function $t(e, t) {
                return !!e.composing || !!(W && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) && (e.input.compositionEndedAt = -2e8, !0)
            }
            Ct.touchstart = function(e) {
                e.input.lastTouch = Date.now(), Lt(e), Et(e, "pointer")
            }, Ct.touchmove = function(e) {
                e.input.lastTouch = Date.now(), Et(e, "pointer")
            }, Ct.contextmenu = function(e) {
                return Lt(e)
            };
            var _t = G ? 5e3 : -1;

            function Wt(e, t) {
                clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout((function() {
                    return jt(e)
                }), t))
            }

            function Ht(e) {
                for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = function() {
                        var e = document.createEvent("Event");
                        return e.initEvent("event", !0, !0), e.timeStamp
                    }()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty()
            }

            function jt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!(G && e.domObserver.flushingSoon >= 0)) {
                    if (e.domObserver.forceFlush(), Ht(e), t || e.docView && e.docView.dirty) {
                        var n = Ke(e);
                        return n && !n.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(n)) : e.updateState(e.state), !0
                    }
                    return !1
                }
            }
            Mt.compositionstart = Mt.compositionupdate = function(e) {
                if (!e.composing) {
                    e.domObserver.flush();
                    var t = e.state,
                        n = t.selection.$from;
                    if (t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((function(e) {
                            return !1 === e.type.spec.inclusive
                        })))) e.markCursor = e.state.storedMarks || n.marks(), jt(e, !0), e.markCursor = null;
                    else if (jt(e), q && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length)
                        for (var o = e.domSelectionRange(), r = o.focusNode, i = o.focusOffset; r && 1 == r.nodeType && 0 != i;) {
                            var s = i < 0 ? r.lastChild : r.childNodes[i - 1];
                            if (!s) break;
                            if (3 == s.nodeType) {
                                e.domSelection().collapse(s, s.nodeValue.length);
                                break
                            }
                            r = s, i = -1
                        }
                    e.input.composing = !0
                }
                Wt(e, _t)
            }, Mt.compositionend = function(e, t) {
                e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionID++, Wt(e, 20))
            };
            var Ut = z && L < 15 || H && Y < 604;

            function Gt(e, t, n, o, r) {
                var i = mt(e, t, n, o, e.state.selection.$from);
                if (e.someProp("handlePaste", (function(t) {
                        return t(e, r, i || y.Slice.empty)
                    }))) return !0;
                if (!i) return !1;
                var s = function(e) {
                        return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null
                    }(i),
                    a = s ? e.state.tr.replaceSelectionWith(s, e.input.shiftKey) : e.state.tr.replaceSelection(i);
                return e.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
            }
            Ct.copy = Mt.cut = function(e, t) {
                var n = t,
                    o = e.state.selection,
                    r = "cut" == n.type;
                if (!o.empty) {
                    var i = Ut ? null : n.clipboardData,
                        s = vt(e, o.content()),
                        a = s.dom,
                        l = s.text;
                    i ? (n.preventDefault(), i.clearData(), i.setData("text/html", a.innerHTML), i.setData("text/plain", l)) : function(e, t) {
                        if (e.dom.parentNode) {
                            var n = e.dom.parentNode.appendChild(document.createElement("div"));
                            n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                            var o = getSelection(),
                                r = document.createRange();
                            r.selectNodeContents(t), e.dom.blur(), o.removeAllRanges(), o.addRange(r), setTimeout((function() {
                                n.parentNode && n.parentNode.removeChild(n), e.focus()
                            }), 50)
                        }
                    }(e, a), r && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
                }
            }, Mt.paste = function(e, t) {
                var n = t;
                if (!e.composing || G) {
                    var o = Ut ? null : n.clipboardData;
                    o && Gt(e, o.getData("text/plain"), o.getData("text/html"), e.input.shiftKey, n) ? n.preventDefault() : function(e, t) {
                        if (e.dom.parentNode) {
                            var n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
                                o = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                            n || (o.contentEditable = "true"), o.style.cssText = "position: fixed; left: -10000px; top: 10px", o.focus(), setTimeout((function() {
                                e.focus(), o.parentNode && o.parentNode.removeChild(o), n ? Gt(e, o.value, null, e.input.shiftKey, t) : Gt(e, o.textContent, o.innerHTML, e.input.shiftKey, t)
                            }), 50)
                        }
                    }(e, n)
                }
            };
            var Xt = m((function e(t, n) {
                    p(this, e), this.slice = t, this.move = n
                })),
                Yt = j ? "altKey" : "ctrlKey";
            for (var Jt in Ct.dragstart = function(e, t) {
                    var n = t,
                        o = e.input.mouseDown;
                    if (o && o.done(), n.dataTransfer) {
                        var r = e.state.selection,
                            i = r.empty ? null : e.posAtCoords(Vt(n));
                        if (i && i.pos >= r.from && i.pos <= (r instanceof g.NodeSelection ? r.to - 1 : r.to));
                        else if (o && o.mightDrag) e.dispatch(e.state.tr.setSelection(g.NodeSelection.create(e.state.doc, o.mightDrag.pos)));
                        else if (n.target && 1 == n.target.nodeType) {
                            var s = e.docView.nearestDesc(n.target, !0);
                            s && s.node.type.spec.draggable && s != e.docView && e.dispatch(e.state.tr.setSelection(g.NodeSelection.create(e.state.doc, s.posBefore)))
                        }
                        var a = e.state.selection.content(),
                            l = vt(e, a),
                            c = l.dom,
                            d = l.text;
                        n.dataTransfer.clearData(), n.dataTransfer.setData(Ut ? "Text" : "text/html", c.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Ut || n.dataTransfer.setData("text/plain", d), e.dragging = new Xt(a, !n[Yt])
                    }
                }, Ct.dragend = function(e) {
                    var t = e.dragging;
                    window.setTimeout((function() {
                        e.dragging == t && (e.dragging = null)
                    }), 50)
                }, Mt.dragover = Mt.dragenter = function(e, t) {
                    return t.preventDefault()
                }, Mt.drop = function(e, t) {
                    var n = t,
                        o = e.dragging;
                    if (e.dragging = null, n.dataTransfer) {
                        var r = e.posAtCoords(Vt(n));
                        if (r) {
                            var i = e.state.doc.resolve(r.pos),
                                s = o && o.slice;
                            s ? e.someProp("transformPasted", (function(t) {
                                s = t(s, e)
                            })) : s = mt(e, n.dataTransfer.getData(Ut ? "Text" : "text/plain"), Ut ? null : n.dataTransfer.getData("text/html"), !1, i);
                            var a = !(!o || n[Yt]);
                            if (e.someProp("handleDrop", (function(t) {
                                    return t(e, n, s || y.Slice.empty, a)
                                }))) n.preventDefault();
                            else if (s) {
                                n.preventDefault();
                                var l = s ? b.dropPoint(e.state.doc, i.pos, s) : i.pos;
                                null == l && (l = i.pos);
                                var c = e.state.tr;
                                a && c.deleteSelection();
                                var d = c.mapping.map(l),
                                    u = 0 == s.openStart && 0 == s.openEnd && 1 == s.content.childCount,
                                    f = c.doc;
                                if (u ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), !c.doc.eq(f)) {
                                    var h = c.doc.resolve(d);
                                    if (u && g.NodeSelection.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild)) c.setSelection(new g.NodeSelection(h));
                                    else {
                                        var p = c.mapping.map(l);
                                        c.mapping.maps[c.mapping.maps.length - 1].forEach((function(e, t, n, o) {
                                            return p = o
                                        })), c.setSelection(Qe(e, h, c.doc.resolve(p)))
                                    }
                                    e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"))
                                }
                            }
                        }
                    }
                }, Ct.focus = function(e) {
                    e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout((function() {
                        e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && _e(e)
                    }), 20))
                }, Ct.blur = function(e, t) {
                    var n = t;
                    e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1)
                }, Ct.beforeinput = function(e, t) {
                    if ($ && G && "deleteContentBackward" == t.inputType) {
                        e.domObserver.flushSoon();
                        var n = e.input.domChangeCount;
                        setTimeout((function() {
                            if (e.input.domChangeCount == n && (e.dom.blur(), e.focus(), !e.someProp("handleKeyDown", (function(t) {
                                    return t(e, P(8, "Backspace"))
                                })))) {
                                var t = e.state.selection.$cursor;
                                t && t.pos > 0 && e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView())
                            }
                        }), 50)
                    }
                }, Mt) Ct[Jt] = Mt[Jt];

            function Qt(e, t) {
                if (e == t) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                for (var o in t)
                    if (!(o in e)) return !1;
                return !0
            }
            var Zt = function() {
                    function e(t, n) {
                        p(this, e), this.toDOM = t, this.spec = n || rn, this.side = this.spec.side || 0
                    }
                    return m(e, [{
                        key: "map",
                        value: function(e, t, n, o) {
                            var r = e.mapResult(t.from + o, this.side < 0 ? -1 : 1),
                                i = r.pos;
                            return r.deleted ? null : new nn(i - n, i - n, this)
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && Qt(this.spec, t.spec))
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            this.spec.destroy && this.spec.destroy(e)
                        }
                    }]), e
                }(),
                en = function() {
                    function e(t, n) {
                        p(this, e), this.attrs = t, this.spec = n || rn
                    }
                    return m(e, [{
                        key: "map",
                        value: function(e, t, n, o) {
                            var r = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
                                i = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
                            return r >= i ? null : new nn(r, i, this)
                        }
                    }, {
                        key: "valid",
                        value: function(e, t) {
                            return t.from < t.to
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            return this == t || t instanceof e && Qt(this.attrs, t.attrs) && Qt(this.spec, t.spec)
                        }
                    }, {
                        key: "destroy",
                        value: function() {}
                    }], [{
                        key: "is",
                        value: function(t) {
                            return t.type instanceof e
                        }
                    }]), e
                }(),
                tn = function() {
                    function e(t, n) {
                        p(this, e), this.attrs = t, this.spec = n || rn
                    }
                    return m(e, [{
                        key: "map",
                        value: function(e, t, n, o) {
                            var r = e.mapResult(t.from + o, 1);
                            if (r.deleted) return null;
                            var i = e.mapResult(t.to + o, -1);
                            return i.deleted || i.pos <= r.pos ? null : new nn(r.pos - n, i.pos - n, this)
                        }
                    }, {
                        key: "valid",
                        value: function(e, t) {
                            var n, o = e.content.findIndex(t.from),
                                r = o.index,
                                i = o.offset;
                            return i == t.from && !(n = e.child(r)).isText && i + n.nodeSize == t.to
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            return this == t || t instanceof e && Qt(this.attrs, t.attrs) && Qt(this.spec, t.spec)
                        }
                    }, {
                        key: "destroy",
                        value: function() {}
                    }]), e
                }(),
                nn = function() {
                    function e(t, n, o) {
                        p(this, e), this.from = t, this.to = n, this.type = o
                    }
                    return m(e, [{
                        key: "copy",
                        value: function(t, n) {
                            return new e(t, n, this.type)
                        }
                    }, {
                        key: "eq",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
                        }
                    }, {
                        key: "map",
                        value: function(e, t, n) {
                            return this.type.map(e, this, t, n)
                        }
                    }, {
                        key: "spec",
                        get: function() {
                            return this.type.spec
                        }
                    }, {
                        key: "inline",
                        get: function() {
                            return this.type instanceof en
                        }
                    }], [{
                        key: "widget",
                        value: function(t, n, o) {
                            return new e(t, t, new Zt(n, o))
                        }
                    }, {
                        key: "inline",
                        value: function(t, n, o, r) {
                            return new e(t, n, new en(o, r))
                        }
                    }, {
                        key: "node",
                        value: function(t, n, o, r) {
                            return new e(t, n, new tn(o, r))
                        }
                    }]), e
                }(),
                on = [],
                rn = {},
                sn = function() {
                    function e(t, n) {
                        p(this, e), this.local = t.length ? t : on, this.children = n.length ? n : on
                    }
                    return m(e, [{
                        key: "find",
                        value: function(e, t, n) {
                            var o = [];
                            return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o
                        }
                    }, {
                        key: "findInner",
                        value: function(e, t, n, o, r) {
                            for (var i = 0; i < this.local.length; i++) {
                                var s = this.local[i];
                                s.from <= t && s.to >= e && (!r || r(s.spec)) && n.push(s.copy(s.from + o, s.to + o))
                            }
                            for (var a = 0; a < this.children.length; a += 3)
                                if (this.children[a] < t && this.children[a + 1] > e) {
                                    var l = this.children[a] + 1;
                                    this.children[a + 2].findInner(e - l, t - l, n, o + l, r)
                                }
                        }
                    }, {
                        key: "map",
                        value: function(e, t, n) {
                            return this == an || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || rn)
                        }
                    }, {
                        key: "mapInner",
                        value: function(t, n, o, r, i) {
                            for (var s, a = 0; a < this.local.length; a++) {
                                var l = this.local[a].map(t, o, r);
                                l && l.type.valid(n, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[a].spec)
                            }
                            return this.children.length ? cn(this.children, s || [], t, n, o, r, i) : s ? new e(s.sort(pn), on) : an
                        }
                    }, {
                        key: "add",
                        value: function(t, n) {
                            return n.length ? this == an ? e.create(t, n) : this.addInner(t, n, 0) : this
                        }
                    }, {
                        key: "addInner",
                        value: function(t, n, o) {
                            var r, i = this,
                                s = 0;
                            t.forEach((function(e, t) {
                                var a, l = t + o;
                                if (a = un(n, e, l)) {
                                    for (r || (r = i.children.slice()); s < r.length && r[s] < t;) s += 3;
                                    r[s] == t ? r[s + 2] = r[s + 2].addInner(e, a, l + 1) : r.splice(s, 0, t, t + e.nodeSize, hn(a, e, l + 1, rn)), s += 3
                                }
                            }));
                            for (var a = dn(s ? fn(n) : n, -o), l = 0; l < a.length; l++) a[l].type.valid(t, a[l]) || a.splice(l--, 1);
                            return new e(a.length ? this.local.concat(a).sort(pn) : this.local, r || this.children)
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            return 0 == e.length || this == an ? this : this.removeInner(e, 0)
                        }
                    }, {
                        key: "removeInner",
                        value: function(t, n) {
                            for (var o = this.children, r = this.local, i = 0; i < o.length; i += 3) {
                                for (var s, a = void 0, l = o[i] + n, c = o[i + 1] + n, d = 0; d < t.length; d++)(s = t[d]) && s.from > l && s.to < c && (t[d] = null, (a || (a = [])).push(s));
                                if (a) {
                                    o == this.children && (o = this.children.slice());
                                    var u = o[i + 2].removeInner(a, l + 1);
                                    u != an ? o[i + 2] = u : (o.splice(i, 3), i -= 3)
                                }
                            }
                            if (r.length)
                                for (var f, h = 0; h < t.length; h++)
                                    if (f = t[h])
                                        for (var p = 0; p < r.length; p++) r[p].eq(f, n) && (r == this.local && (r = this.local.slice()), r.splice(p--, 1));
                            return o == this.children && r == this.local ? this : r.length || o.length ? new e(r, o) : an
                        }
                    }, {
                        key: "forChild",
                        value: function(t, n) {
                            if (this == an) return this;
                            if (n.isLeaf) return e.empty;
                            for (var o, r, i = 0; i < this.children.length; i += 3)
                                if (this.children[i] >= t) {
                                    this.children[i] == t && (o = this.children[i + 2]);
                                    break
                                }
                            for (var s = t + 1, a = s + n.content.size, l = 0; l < this.local.length; l++) {
                                var c = this.local[l];
                                if (c.from < a && c.to > s && c.type instanceof en) {
                                    var d = Math.max(s, c.from) - s,
                                        u = Math.min(a, c.to) - s;
                                    d < u && (r || (r = [])).push(c.copy(d, u))
                                }
                            }
                            if (r) {
                                var f = new e(r.sort(pn), on);
                                return o ? new ln([f, o]) : f
                            }
                            return o || an
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            if (this == t) return !0;
                            if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
                            for (var n = 0; n < this.local.length; n++)
                                if (!this.local[n].eq(t.local[n])) return !1;
                            for (var o = 0; o < this.children.length; o += 3)
                                if (this.children[o] != t.children[o] || this.children[o + 1] != t.children[o + 1] || !this.children[o + 2].eq(t.children[o + 2])) return !1;
                            return !0
                        }
                    }, {
                        key: "locals",
                        value: function(e) {
                            return vn(this.localsInner(e))
                        }
                    }, {
                        key: "localsInner",
                        value: function(e) {
                            if (this == an) return on;
                            if (e.inlineContent || !this.local.some(en.is)) return this.local;
                            for (var t = [], n = 0; n < this.local.length; n++) this.local[n].type instanceof en || t.push(this.local[n]);
                            return t
                        }
                    }], [{
                        key: "create",
                        value: function(e, t) {
                            return t.length ? hn(t, e, 0, rn) : an
                        }
                    }]), e
                }();
            sn.empty = new sn([], []), sn.removeOverlap = vn;
            var an = sn.empty,
                ln = function() {
                    function e(t) {
                        p(this, e), this.members = t
                    }
                    return m(e, [{
                        key: "map",
                        value: function(t, n) {
                            var o = this.members.map((function(e) {
                                return e.map(t, n, rn)
                            }));
                            return e.from(o)
                        }
                    }, {
                        key: "forChild",
                        value: function(t, n) {
                            if (n.isLeaf) return sn.empty;
                            for (var o = [], r = 0; r < this.members.length; r++) {
                                var i = this.members[r].forChild(t, n);
                                i != an && (i instanceof e ? o = o.concat(i.members) : o.push(i))
                            }
                            return e.from(o)
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            if (!(t instanceof e) || t.members.length != this.members.length) return !1;
                            for (var n = 0; n < this.members.length; n++)
                                if (!this.members[n].eq(t.members[n])) return !1;
                            return !0
                        }
                    }, {
                        key: "locals",
                        value: function(e) {
                            for (var t, n = !0, o = 0; o < this.members.length; o++) {
                                var r = this.members[o].localsInner(e);
                                if (r.length)
                                    if (t) {
                                        n && (t = t.slice(), n = !1);
                                        for (var i = 0; i < r.length; i++) t.push(r[i])
                                    } else t = r
                            }
                            return t ? vn(n ? t : t.sort(pn)) : on
                        }
                    }], [{
                        key: "from",
                        value: function(t) {
                            switch (t.length) {
                                case 0:
                                    return an;
                                case 1:
                                    return t[0];
                                default:
                                    return new e(t.every((function(e) {
                                        return e instanceof sn
                                    })) ? t : t.reduce((function(e, t) {
                                        return e.concat(t instanceof sn ? t : t.members)
                                    }), []))
                            }
                        }
                    }]), e
                }();

            function cn(e, t, n, o, r, i, s) {
                for (var a = e.slice(), l = function(e, t) {
                        var o = 0;
                        n.maps[e].forEach((function(e, n, i, s) {
                            for (var l = s - i - (n - e), c = 0; c < a.length; c += 3) {
                                var d = a[c + 1];
                                if (!(d < 0 || e > d + t - o)) {
                                    var u = a[c] + t - o;
                                    n >= u ? a[c + 1] = e <= u ? -2 : -1 : i >= r && l && (a[c] += l, a[c + 1] += l)
                                }
                            }
                            o += l
                        })), t = n.maps[e].map(t, -1), d = t
                    }, c = 0, d = i; c < n.maps.length; c++) l(c, d);
                for (var u = !1, f = 0; f < a.length; f += 3)
                    if (a[f + 1] < 0) {
                        if (-2 == a[f + 1]) {
                            u = !0, a[f + 1] = -1;
                            continue
                        }
                        var h = n.map(e[f] + i),
                            p = h - r;
                        if (p < 0 || p >= o.content.size) {
                            u = !0;
                            continue
                        }
                        var v = n.map(e[f + 1] + i, -1) - r,
                            m = o.content.findIndex(p),
                            g = m.index,
                            y = m.offset,
                            b = o.maybeChild(g);
                        if (b && y == p && y + b.nodeSize == v) {
                            var k = a[f + 2].mapInner(n, b, h + 1, e[f] + i + 1, s);
                            k != an ? (a[f] = p, a[f + 1] = v, a[f + 2] = k) : (a[f + 1] = -2, u = !0)
                        } else u = !0
                    }
                if (u) {
                    var w = function(e, t, n, o, r, i, s) {
                            function a(e, t) {
                                for (var i = 0; i < e.local.length; i++) {
                                    var l = e.local[i].map(o, r, t);
                                    l ? n.push(l) : s.onRemove && s.onRemove(e.local[i].spec)
                                }
                                for (var c = 0; c < e.children.length; c += 3) a(e.children[c + 2], e.children[c] + t + 1)
                            }
                            for (var l = 0; l < e.length; l += 3) - 1 == e[l + 1] && a(e[l + 2], t[l] + i + 1);
                            return n
                        }(a, e, t, n, r, i, s),
                        S = hn(w, o, 0, s);
                    t = S.local;
                    for (var D = 0; D < a.length; D += 3) a[D + 1] < 0 && (a.splice(D, 3), D -= 3);
                    for (var N = 0, O = 0; N < S.children.length; N += 3) {
                        for (var C = S.children[N]; O < a.length && a[O] < C;) O += 3;
                        a.splice(O, 0, S.children[N], S.children[N + 1], S.children[N + 2])
                    }
                }
                return new sn(t.sort(pn), a)
            }

            function dn(e, t) {
                if (!t || !e.length) return e;
                for (var n = [], o = 0; o < e.length; o++) {
                    var r = e[o];
                    n.push(new nn(r.from + t, r.to + t, r.type))
                }
                return n
            }

            function un(e, t, n) {
                if (t.isLeaf) return null;
                for (var o, r = n + t.nodeSize, i = null, s = 0; s < e.length; s++)(o = e[s]) && o.from > n && o.to < r && ((i || (i = [])).push(o), e[s] = null);
                return i
            }

            function fn(e) {
                for (var t = [], n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
                return t
            }

            function hn(e, t, n, o) {
                var r = [],
                    i = !1;
                t.forEach((function(t, s) {
                    var a = un(e, t, s + n);
                    if (a) {
                        i = !0;
                        var l = hn(a, t, n + s + 1, o);
                        l != an && r.push(s, s + t.nodeSize, l)
                    }
                }));
                for (var s = dn(i ? fn(e) : e, -n).sort(pn), a = 0; a < s.length; a++) s[a].type.valid(t, s[a]) || (o.onRemove && o.onRemove(s[a].spec), s.splice(a--, 1));
                return s.length || r.length ? new sn(s, r) : an
            }

            function pn(e, t) {
                return e.from - t.from || e.to - t.to
            }

            function vn(e) {
                for (var t = e, n = 0; n < t.length - 1; n++) {
                    var o = t[n];
                    if (o.from != o.to)
                        for (var r = n + 1; r < t.length; r++) {
                            var i = t[r];
                            if (i.from != o.from) {
                                i.from < o.to && (t == e && (t = e.slice()), t[n] = o.copy(o.from, i.from), mn(t, r, o.copy(i.from, o.to)));
                                break
                            }
                            i.to != o.to && (t == e && (t = e.slice()), t[r] = i.copy(i.from, o.to), mn(t, r + 1, i.copy(o.to, i.to)))
                        }
                }
                return t
            }

            function mn(e, t, n) {
                for (; t < e.length && pn(n, e[t]) > 0;) t++;
                e.splice(t, 0, n)
            }

            function gn(e) {
                var t = [];
                return e.someProp("decorations", (function(n) {
                    var o = n(e.state);
                    o && o != an && t.push(o)
                })), e.cursorWrapper && t.push(sn.create(e.state.doc, [e.cursorWrapper.deco])), ln.from(t)
            }
            var yn = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                },
                bn = z && L <= 11,
                kn = function() {
                    function e() {
                        p(this, e), this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
                    }
                    return m(e, [{
                        key: "set",
                        value: function(e) {
                            this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.anchorNode = this.focusNode = null
                        }
                    }, {
                        key: "eq",
                        value: function(e) {
                            return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
                        }
                    }]), e
                }(),
                wn = function() {
                    function e(t, n) {
                        var o = this;
                        p(this, e), this.view = t, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new kn, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((function(e) {
                            for (var t = 0; t < e.length; t++) o.queue.push(e[t]);
                            z && L <= 11 && e.some((function(e) {
                                return "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length
                            })) ? o.flushSoon() : o.flush()
                        })), bn && (this.onCharData = function(e) {
                            o.queue.push({
                                target: e.target,
                                type: "characterData",
                                oldValue: e.prevValue
                            }), o.flushSoon()
                        }), this.onSelectionChange = this.onSelectionChange.bind(this)
                    }
                    return m(e, [{
                        key: "flushSoon",
                        value: function() {
                            var e = this;
                            this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout((function() {
                                e.flushingSoon = -1, e.flush()
                            }), 20))
                        }
                    }, {
                        key: "forceFlush",
                        value: function() {
                            this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, yn)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            var e = this;
                            if (this.observer) {
                                var t = this.observer.takeRecords();
                                if (t.length) {
                                    for (var n = 0; n < t.length; n++) this.queue.push(t[n]);
                                    window.setTimeout((function() {
                                        return e.flush()
                                    }), 20)
                                }
                                this.observer.disconnect()
                            }
                            this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
                        }
                    }, {
                        key: "connectSelection",
                        value: function() {
                            this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
                        }
                    }, {
                        key: "disconnectSelection",
                        value: function() {
                            this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
                        }
                    }, {
                        key: "suppressSelectionUpdates",
                        value: function() {
                            var e = this;
                            this.suppressingSelectionUpdates = !0, setTimeout((function() {
                                return e.suppressingSelectionUpdates = !1
                            }), 50)
                        }
                    }, {
                        key: "onSelectionChange",
                        value: function() {
                            if (Ze(this.view)) {
                                if (this.suppressingSelectionUpdates) return _e(this.view);
                                if (z && L <= 11 && !this.view.state.selection.empty) {
                                    var e = this.view.domSelectionRange();
                                    if (e.focusNode && N(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon()
                                }
                                this.flush()
                            }
                        }
                    }, {
                        key: "setCurSelection",
                        value: function() {
                            this.currentSelection.set(this.view.domSelectionRange())
                        }
                    }, {
                        key: "ignoreSelectionChange",
                        value: function(e) {
                            if (!e.focusNode) return !0;
                            for (var t, n = new Set, o = e.focusNode; o; o = w(o)) n.add(o);
                            for (var r = e.anchorNode; r; r = w(r))
                                if (n.has(r)) {
                                    t = r;
                                    break
                                }
                            var i = t && this.view.docView.nearestDesc(t);
                            return i && i.ignoreMutation({
                                type: "selection",
                                target: 3 == t.nodeType ? t.parentNode : t
                            }) ? (this.setCurSelection(), !0) : void 0
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            var e = this.view;
                            if (e.docView && !(this.flushingSoon > -1)) {
                                var t = this.observer ? this.observer.takeRecords() : [];
                                this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
                                var n = e.domSelectionRange(),
                                    o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Ze(e) && !this.ignoreSelectionChange(n),
                                    r = -1,
                                    i = -1,
                                    s = !1,
                                    a = [];
                                if (e.editable)
                                    for (var l = 0; l < t.length; l++) {
                                        var c = this.registerMutation(t[l], a);
                                        c && (r = r < 0 ? c.from : Math.min(c.from, r), i = i < 0 ? c.to : Math.max(c.to, i), c.typeOver && (s = !0))
                                    }
                                if (q && a.length > 1) {
                                    var d = a.filter((function(e) {
                                        return "BR" == e.nodeName
                                    }));
                                    if (2 == d.length) {
                                        var u = d[0],
                                            f = d[1];
                                        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove()
                                    }
                                }
                                var h = null;
                                r < 0 && o && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && E(n) && (h = Ke(e)) && h.eq(g.Selection.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, _e(e), this.currentSelection.set(n), e.scrollToSelection()) : (r > -1 || o) && (r > -1 && (e.docView.markDirty(r, i), function(e) {
                                    if (Sn.has(e)) return;
                                    if (Sn.set(e, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace)) {
                                        if (e.requiresGeckoHackNode = q, Dn) return;
                                        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Dn = !0
                                    }
                                }(e)), this.handleDOMChange(r, i, s, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || _e(e), this.currentSelection.set(n))
                            }
                        }
                    }, {
                        key: "registerMutation",
                        value: function(e, t) {
                            if (t.indexOf(e.target) > -1) return null;
                            var n = this.view.docView.nearestDesc(e.target);
                            if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style"))) return null;
                            if (!n || n.ignoreMutation(e)) return null;
                            if ("childList" == e.type) {
                                for (var o = 0; o < e.addedNodes.length; o++) t.push(e.addedNodes[o]);
                                if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
                                    from: n.posBefore,
                                    to: n.posAfter
                                };
                                var r = e.previousSibling,
                                    i = e.nextSibling;
                                if (z && L <= 11 && e.addedNodes.length)
                                    for (var s = 0; s < e.addedNodes.length; s++) {
                                        var a = e.addedNodes[s],
                                            l = a.previousSibling,
                                            c = a.nextSibling;
                                        (!l || Array.prototype.indexOf.call(e.addedNodes, l) < 0) && (r = l), (!c || Array.prototype.indexOf.call(e.addedNodes, c) < 0) && (i = c)
                                    }
                                var d = r && r.parentNode == e.target ? k(r) + 1 : 0,
                                    u = n.localPosFromDOM(e.target, d, -1),
                                    f = i && i.parentNode == e.target ? k(i) : e.target.childNodes.length;
                                return {
                                    from: u,
                                    to: n.localPosFromDOM(e.target, f, 1)
                                }
                            }
                            return "attributes" == e.type ? {
                                from: n.posAtStart - n.border,
                                to: n.posAtEnd + n.border
                            } : {
                                from: n.posAtStart,
                                to: n.posAtEnd,
                                typeOver: e.target.nodeValue == e.oldValue
                            }
                        }
                    }]), e
                }(),
                Sn = new WeakMap,
                Dn = !1;

            function Nn(e) {
                var t = e.pmViewDesc;
                if (t) return t.parseRule();
                if ("BR" == e.nodeName && e.parentNode) {
                    if (W && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                        var n = document.createElement("div");
                        return n.appendChild(document.createElement("li")), {
                            skip: n
                        }
                    }
                    if (e.parentNode.lastChild == e || W && /^(tr|table)$/i.test(e.parentNode.nodeName)) return {
                        ignore: !0
                    }
                } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return {
                    ignore: !0
                };
                return null
            }
            var On = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

            function Cn(e, t, n, o, r) {
                if (t < 0) {
                    var i = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
                        s = Ke(e, i);
                    if (s && !e.state.selection.eq(s)) {
                        if ($ && G && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", (function(t) {
                                return t(e, P(13, "Enter"))
                            }))) return;
                        var a = e.state.tr.setSelection(s);
                        "pointer" == i ? a.setMeta("pointer", !0) : "key" == i && a.scrollIntoView(), e.composing && a.setMeta("composition", e.input.compositionID), e.dispatch(a)
                    }
                } else {
                    var l = e.state.doc.resolve(t),
                        c = l.sharedDepth(n);
                    t = l.before(c + 1), n = e.state.doc.resolve(n).after(c + 1);
                    var d, u, f = e.state.selection,
                        h = function(e, t, n) {
                            var o, r = e.docView.parseRange(t, n),
                                i = r.node,
                                s = r.fromOffset,
                                a = r.toOffset,
                                l = r.from,
                                c = r.to,
                                d = e.domSelectionRange(),
                                u = d.anchorNode;
                            if (u && e.dom.contains(1 == u.nodeType ? u : u.parentNode) && (o = [{
                                    node: u,
                                    offset: d.anchorOffset
                                }], E(d) || o.push({
                                    node: d.focusNode,
                                    offset: d.focusOffset
                                })), $ && 8 === e.input.lastKeyCode)
                                for (var f = a; f > s; f--) {
                                    var h = i.childNodes[f - 1],
                                        p = h.pmViewDesc;
                                    if ("BR" == h.nodeName && !p) {
                                        a = f;
                                        break
                                    }
                                    if (!p || p.size) break
                                }
                            var v = e.state.doc,
                                m = e.someProp("domParser") || y.DOMParser.fromSchema(e.state.schema),
                                g = v.resolve(l),
                                b = null,
                                k = m.parse(i, {
                                    topNode: g.parent,
                                    topMatch: g.parent.contentMatchAt(g.index()),
                                    topOpen: !0,
                                    from: s,
                                    to: a,
                                    preserveWhitespace: "pre" != g.parent.type.whitespace || "full",
                                    findPositions: o,
                                    ruleFromNode: Nn,
                                    context: g
                                });
                            if (o && null != o[0].pos) {
                                var w = o[0].pos,
                                    S = o[1] && o[1].pos;
                                null == S && (S = w), b = {
                                    anchor: w + l,
                                    head: S + l
                                }
                            }
                            return {
                                doc: k,
                                sel: b,
                                from: l,
                                to: c
                            }
                        }(e, t, n),
                        p = e.state.doc,
                        v = p.slice(h.from, h.to);
                    8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (d = e.state.selection.to, u = "end") : (d = e.state.selection.from, u = "start"), e.input.lastKeyCode = null;
                    var m = function(e, t, n, o, r) {
                        var i = e.findDiffStart(t, n);
                        if (null == i) return null;
                        var s = e.findDiffEnd(t, n + e.size, n + t.size),
                            a = s.a,
                            l = s.b;
                        if ("end" == r) {
                            o -= a + Math.max(0, i - Math.min(a, l)) - i
                        }
                        if (a < i && e.size < t.size) {
                            l = (i -= o <= i && o >= a ? i - o : 0) + (l - a), a = i
                        } else if (l < i) {
                            a = (i -= o <= i && o >= l ? i - o : 0) + (a - l), l = i
                        }
                        return {
                            start: i,
                            endA: a,
                            endB: l
                        }
                    }(v.content, h.doc.content, h.from, d, u);
                    if ((H && e.input.lastIOSEnter > Date.now() - 225 || G) && r.some((function(e) {
                            return 1 == e.nodeType && !On.test(e.nodeName)
                        })) && (!m || m.endA >= m.endB) && e.someProp("handleKeyDown", (function(t) {
                            return t(e, P(13, "Enter"))
                        }))) e.input.lastIOSEnter = 0;
                    else {
                        if (!m) {
                            if (!(o && f instanceof g.TextSelection && !f.empty && f.$head.sameParent(f.$anchor)) || e.composing || h.sel && h.sel.anchor != h.sel.head) {
                                if (h.sel) {
                                    var b = Mn(e, e.state.doc, h.sel);
                                    if (b && !b.eq(e.state.selection)) {
                                        var k = e.state.tr.setSelection(b);
                                        e.composing && k.setMeta("composition", e.input.compositionID), e.dispatch(k)
                                    }
                                }
                                return
                            }
                            m = {
                                start: f.from,
                                endA: f.to,
                                endB: f.to
                            }
                        }
                        if ($ && e.cursorWrapper && h.sel && h.sel.anchor == e.cursorWrapper.deco.from && h.sel.head == h.sel.anchor) {
                            var w = m.endB - m.start;
                            h.sel = {
                                anchor: h.sel.anchor + w,
                                head: h.sel.anchor + w
                            }
                        }
                        e.input.domChangeCount++, e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof g.TextSelection && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= h.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= h.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), z && L <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > h.from && " \xa0" == h.doc.textBetween(m.start - h.from - 1, m.start - h.from + 1) && (m.start--, m.endA--, m.endB--);
                        var S, D = h.doc.resolveNoCache(m.start - h.from),
                            N = h.doc.resolveNoCache(m.endB - h.from),
                            O = p.resolve(m.start),
                            C = D.sameParent(N) && D.parent.inlineContent && O.end() >= m.endA;
                        if ((H && e.input.lastIOSEnter > Date.now() - 225 && (!C || r.some((function(e) {
                                return "DIV" == e.nodeName || "P" == e.nodeName
                            }))) || !C && D.pos < h.doc.content.size && (S = g.Selection.findFrom(h.doc.resolve(D.pos + 1), 1, !0)) && S.head == N.pos) && e.someProp("handleKeyDown", (function(t) {
                                return t(e, P(13, "Enter"))
                            }))) e.input.lastIOSEnter = 0;
                        else if (e.state.selection.anchor > m.start && function(e, t, n, o, r) {
                                if (!o.parent.isTextblock || n - t <= r.pos - o.pos || xn(o, !0, !1) < r.pos) return !1;
                                var i = e.resolve(t);
                                if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                                var s = e.resolve(xn(i, !0, !0));
                                return !(!s.parent.isTextblock || s.pos > n || xn(s, !0, !1) < n) && o.parent.content.cut(o.parentOffset).eq(s.parent.content)
                            }(p, m.start, m.endA, D, N) && e.someProp("handleKeyDown", (function(t) {
                                return t(e, P(8, "Backspace"))
                            }))) G && $ && e.domObserver.suppressSelectionUpdates();
                        else {
                            $ && G && m.endB == m.start && (e.input.lastAndroidDelete = Date.now()), G && !C && D.start() != N.start() && 0 == N.parentOffset && D.depth == N.depth && h.sel && h.sel.anchor == h.sel.head && h.sel.head == m.endA && (m.endB -= 2, N = h.doc.resolveNoCache(m.endB - h.from), setTimeout((function() {
                                e.someProp("handleKeyDown", (function(t) {
                                    return t(e, P(13, "Enter"))
                                }))
                            }), 20));
                            var M, x, T, A = m.start,
                                V = m.endA;
                            if (C)
                                if (D.pos == N.pos) z && L <= 11 && 0 == D.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout((function() {
                                    return _e(e)
                                }), 20)), M = e.state.tr.delete(A, V), x = p.resolve(m.start).marksAcross(p.resolve(m.endA));
                                else if (m.endA == m.endB && (T = function(e, t) {
                                    for (var n, o, r, i = e.firstChild.marks, s = t.firstChild.marks, a = i, l = s, c = 0; c < s.length; c++) a = s[c].removeFromSet(a);
                                    for (var d = 0; d < i.length; d++) l = i[d].removeFromSet(l);
                                    if (1 == a.length && 0 == l.length) o = a[0], n = "add", r = function(e) {
                                        return e.mark(o.addToSet(e.marks))
                                    };
                                    else {
                                        if (0 != a.length || 1 != l.length) return null;
                                        o = l[0], n = "remove", r = function(e) {
                                            return e.mark(o.removeFromSet(e.marks))
                                        }
                                    }
                                    for (var u = [], f = 0; f < t.childCount; f++) u.push(r(t.child(f)));
                                    if (y.Fragment.from(u).eq(e)) return {
                                        mark: o,
                                        type: n
                                    }
                                }(D.parent.content.cut(D.parentOffset, N.parentOffset), O.parent.content.cut(O.parentOffset, m.endA - O.start())))) M = e.state.tr, "add" == T.type ? M.addMark(A, V, T.mark) : M.removeMark(A, V, T.mark);
                            else if (D.parent.child(D.index()).isText && D.index() == N.index() - (N.textOffset ? 0 : 1)) {
                                var R = D.parent.textBetween(D.parentOffset, N.parentOffset);
                                if (e.someProp("handleTextInput", (function(t) {
                                        return t(e, A, V, R)
                                    }))) return;
                                M = e.state.tr.insertText(R, A, V)
                            }
                            if (M || (M = e.state.tr.replace(A, V, h.doc.slice(m.start - h.from, m.endB - h.from))), h.sel) {
                                var B = Mn(e, M.doc, h.sel);
                                B && !($ && G && e.composing && B.empty && (m.start != m.endB || e.input.lastAndroidDelete < Date.now() - 100) && (B.head == A || B.head == M.mapping.map(V) - 1) || z && B.empty && B.head == A) && M.setSelection(B)
                            }
                            x && M.ensureMarks(x), e.composing && M.setMeta("composition", e.input.compositionID), e.dispatch(M.scrollIntoView())
                        }
                    }
                }
            }

            function Mn(e, t, n) {
                return Math.max(n.anchor, n.head) > t.content.size ? null : Qe(e, t.resolve(n.anchor), t.resolve(n.head))
            }

            function xn(e, t, n) {
                for (var o = e.depth, r = t ? e.end() : e.pos; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount);) o--, r++, t = !1;
                if (n)
                    for (var i = e.node(o).maybeChild(e.indexAfter(o)); i && !i.isLeaf;) i = i.firstChild, r++;
                return r
            }
            var Tn = vt,
                En = mt,
                Pn = jt,
                An = function() {
                    function e(t, n) {
                        var o = this;
                        p(this, e), this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Tt, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Fn), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = Bn(this), Rn(this), this.nodeViews = In(this), this.docView = Oe(this.state.doc, Vn(this), gn(this), this.dom, this), this.domObserver = new wn(this, (function(e, t, n, r) {
                                return Cn(o, e, t, n, r)
                            })), this.domObserver.start(),
                            function(e) {
                                var t = function(t) {
                                    var n = Ct[t];
                                    e.dom.addEventListener(t, e.input.eventHandlers[t] = function(t) {
                                        ! function(e, t) {
                                            if (!t.bubbles) return !0;
                                            if (t.defaultPrevented) return !1;
                                            for (var n = t.target; n != e.dom; n = n.parentNode)
                                                if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
                                            return !0
                                        }(e, t) || At(e, t) || !e.editable && t.type in Mt || n(e, t)
                                    }, xt[t] ? {
                                        passive: !0
                                    } : void 0)
                                };
                                for (var n in Ct) t(n);
                                W && e.dom.addEventListener("input", (function() {
                                    return null
                                })), Pt(e)
                            }(this), this.updatePluginViews()
                    }
                    return m(e, [{
                        key: "composing",
                        get: function() {
                            return this.input.composing
                        }
                    }, {
                        key: "props",
                        get: function() {
                            if (this._props.state != this.state) {
                                var e = this._props;
                                for (var t in this._props = {}, e) this._props[t] = e[t];
                                this._props.state = this.state
                            }
                            return this._props
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            e.handleDOMEvents != this._props.handleDOMEvents && Pt(this);
                            var t = this._props;
                            this._props = e, e.plugins && (e.plugins.forEach(Fn), this.directPlugins = e.plugins), this.updateStateInner(e.state, t)
                        }
                    }, {
                        key: "setProps",
                        value: function(e) {
                            var t = {};
                            for (var n in this._props) t[n] = this._props[n];
                            for (var o in t.state = this.state, e) t[o] = e[o];
                            this.update(t)
                        }
                    }, {
                        key: "updateState",
                        value: function(e) {
                            this.updateStateInner(e, this._props)
                        }
                    }, {
                        key: "updateStateInner",
                        value: function(e, t) {
                            var n = this.state,
                                o = !1,
                                r = !1;
                            e.storedMarks && this.composing && (Ht(this), r = !0), this.state = e;
                            var i = n.plugins != e.plugins || this._props.plugins != t.plugins;
                            if (i || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
                                var s = In(this);
                                (function(e, t) {
                                    var n = 0,
                                        o = 0;
                                    for (var r in e) {
                                        if (e[r] != t[r]) return !0;
                                        n++
                                    }
                                    for (var i in t) o++;
                                    return n != o
                                })(s, this.nodeViews) && (this.nodeViews = s, o = !0)
                            }(i || t.handleDOMEvents != this._props.handleDOMEvents) && Pt(this), this.editable = Bn(this), Rn(this);
                            var a = gn(this),
                                l = Vn(this),
                                c = n.plugins == e.plugins || n.doc.eq(e.doc) ? e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve" : "reset",
                                d = o || !this.docView.matchesNode(e.doc, l, a);
                            !d && e.selection.eq(n.selection) || (r = !0);
                            var u = "preserve" == c && r && null == this.dom.style.overflowAnchor && function(e) {
                                for (var t, n, o = e.dom.getBoundingClientRect(), r = Math.max(0, o.top), i = (o.left + o.right) / 2, s = r + 1; s < Math.min(innerHeight, o.bottom); s += 5) {
                                    var a = e.root.elementFromPoint(i, s);
                                    if (a && a != e.dom && e.dom.contains(a)) {
                                        var l = a.getBoundingClientRect();
                                        if (l.top >= r - 20) {
                                            t = a, n = l.top;
                                            break
                                        }
                                    }
                                }
                                return {
                                    refDOM: t,
                                    refTop: n,
                                    stack: te(e.dom)
                                }
                            }(this);
                            if (r) {
                                this.domObserver.stop();
                                var f = d && (z || $) && !this.composing && !n.selection.empty && !e.selection.empty && function(e, t) {
                                    var n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
                                    return e.$anchor.start(n) != t.$anchor.start(n)
                                }(n.selection, e.selection);
                                if (d) {
                                    var h = $ ? this.trackWrites = this.domSelectionRange().focusNode : null;
                                    !o && this.docView.update(e.doc, l, a, this) || (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Oe(e.doc, l, a, this.dom, this)), h && !this.trackWrites && (f = !0)
                                }
                                f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && function(e) {
                                    var t = e.docView.domFromPos(e.state.selection.anchor, 0),
                                        n = e.domSelectionRange();
                                    return N(t.node, t.offset, n.anchorNode, n.anchorOffset)
                                }(this)) ? _e(this, f) : (Ye(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start()
                            }
                            this.updatePluginViews(n), "reset" == c ? this.dom.scrollTop = 0 : "to selection" == c ? this.scrollToSelection() : u && function(e) {
                                var t = e.refDOM,
                                    n = e.refTop,
                                    o = e.stack,
                                    r = t ? t.getBoundingClientRect().top : 0;
                                ne(o, 0 == r ? 0 : r - n)
                            }(u)
                        }
                    }, {
                        key: "scrollToSelection",
                        value: function() {
                            var e = this,
                                t = this.domSelectionRange().focusNode;
                            if (this.someProp("handleScrollToSelection", (function(t) {
                                    return t(e)
                                })));
                            else if (this.state.selection instanceof g.NodeSelection) {
                                var n = this.docView.domAfterPos(this.state.selection.from);
                                1 == n.nodeType && ee(this, n.getBoundingClientRect(), t)
                            } else ee(this, this.coordsAtPos(this.state.selection.head, 1), t)
                        }
                    }, {
                        key: "destroyPluginViews",
                        value: function() {
                            for (var e; e = this.pluginViews.pop();) e.destroy && e.destroy()
                        }
                    }, {
                        key: "updatePluginViews",
                        value: function(e) {
                            if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                                for (var t = 0; t < this.pluginViews.length; t++) {
                                    var n = this.pluginViews[t];
                                    n.update && n.update(this, e)
                                } else {
                                    this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
                                    for (var o = 0; o < this.directPlugins.length; o++) {
                                        var r = this.directPlugins[o];
                                        r.spec.view && this.pluginViews.push(r.spec.view(this))
                                    }
                                    for (var i = 0; i < this.state.plugins.length; i++) {
                                        var s = this.state.plugins[i];
                                        s.spec.view && this.pluginViews.push(s.spec.view(this))
                                    }
                                }
                        }
                    }, {
                        key: "someProp",
                        value: function(e, t) {
                            var n, o = this._props && this._props[e];
                            if (null != o && (n = t ? t(o) : o)) return n;
                            for (var r = 0; r < this.directPlugins.length; r++) {
                                var i = this.directPlugins[r].props[e];
                                if (null != i && (n = t ? t(i) : i)) return n
                            }
                            var s = this.state.plugins;
                            if (s)
                                for (var a = 0; a < s.length; a++) {
                                    var l = s[a].props[e];
                                    if (null != l && (n = t ? t(l) : l)) return n
                                }
                        }
                    }, {
                        key: "hasFocus",
                        value: function() {
                            if (z) {
                                var e = this.root.activeElement;
                                if (e == this.dom) return !0;
                                if (!e || !this.dom.contains(e)) return !1;
                                for (; e && this.dom != e && this.dom.contains(e);) {
                                    if ("false" == e.contentEditable) return !1;
                                    e = e.parentElement
                                }
                                return !0
                            }
                            return this.root.activeElement == this.dom
                        }
                    }, {
                        key: "focus",
                        value: function() {
                            this.domObserver.stop(), this.editable && function(e) {
                                if (e.setActive) return e.setActive();
                                if (oe) return e.focus(oe);
                                var t = te(e);
                                e.focus(null == oe ? {
                                    get preventScroll() {
                                        return oe = {
                                            preventScroll: !0
                                        }, !0
                                    }
                                } : void 0), oe || (oe = !1, ne(t, 0))
                            }(this.dom), _e(this), this.domObserver.start()
                        }
                    }, {
                        key: "root",
                        get: function() {
                            var e = this,
                                t = this._root;
                            if (null == t)
                                for (var n = function(t) {
                                        if (9 == t.nodeType || 11 == t.nodeType && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = function() {
                                            return t.ownerDocument.getSelection()
                                        }), {
                                            v: e._root = t
                                        }
                                    }, r = this.dom.parentNode; r; r = r.parentNode) {
                                    var i = n(r);
                                    if ("object" === o(i)) return i.v
                                }
                            return t || document
                        }
                    }, {
                        key: "posAtCoords",
                        value: function(e) {
                            return ae(this, e)
                        }
                    }, {
                        key: "coordsAtPos",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return ue(this, e, t)
                        }
                    }, {
                        key: "domAtPos",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.docView.domFromPos(e, t)
                        }
                    }, {
                        key: "nodeDOM",
                        value: function(e) {
                            var t = this.docView.descAt(e);
                            return t ? t.nodeDOM : null
                        }
                    }, {
                        key: "posAtDOM",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                                o = this.docView.posFromDOM(e, t, n);
                            if (null == o) throw new RangeError("DOM position not inside the editor");
                            return o
                        }
                    }, {
                        key: "endOfTextblock",
                        value: function(e, t) {
                            return be(this, t || this.state, e)
                        }
                    }, {
                        key: "pasteHTML",
                        value: function(e, t) {
                            return Gt(this, "", e, !1, t || new ClipboardEvent("paste"))
                        }
                    }, {
                        key: "pasteText",
                        value: function(e, t) {
                            return Gt(this, e, null, !0, t || new ClipboardEvent("paste"))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.docView && (! function(e) {
                                for (var t in e.domObserver.stop(), e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
                                clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout)
                            }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], gn(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null)
                        }
                    }, {
                        key: "isDestroyed",
                        get: function() {
                            return null == this.docView
                        }
                    }, {
                        key: "dispatchEvent",
                        value: function(e) {
                            return function(e, t) {
                                At(e, t) || !Ct[t.type] || !e.editable && t.type in Mt || Ct[t.type](e, t)
                            }(this, e)
                        }
                    }, {
                        key: "dispatch",
                        value: function(e) {
                            var t = this._props.dispatchTransaction;
                            t ? t.call(this, e) : this.updateState(this.state.apply(e))
                        }
                    }, {
                        key: "domSelectionRange",
                        value: function() {
                            return W && 11 === this.root.nodeType && function(e) {
                                for (var t = e.activeElement; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
                                return t
                            }(this.dom.ownerDocument) == this.dom ? function(e) {
                                var t;

                                function n(e) {
                                    e.preventDefault(), e.stopImmediatePropagation(), t = e.getTargetRanges()[0]
                                }
                                e.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", n, !0);
                                var o = t.startContainer,
                                    r = t.startOffset,
                                    i = t.endContainer,
                                    s = t.endOffset,
                                    a = e.domAtPos(e.state.selection.anchor);
                                if (N(a.node, a.offset, i, s)) {
                                    var l = [i, s, o, r];
                                    o = l[0], r = l[1], i = l[2], s = l[3]
                                }
                                return {
                                    anchorNode: o,
                                    anchorOffset: r,
                                    focusNode: i,
                                    focusOffset: s
                                }
                            }(this) : this.domSelection()
                        }
                    }, {
                        key: "domSelection",
                        value: function() {
                            return this.root.getSelection()
                        }
                    }]), e
                }();

            function Vn(e) {
                var t = Object.create(null);
                return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (function(n) {
                    if ("function" == typeof n && (n = n(e.state)), n)
                        for (var o in n) "class" == o ? t.class += " " + n[o] : "style" == o ? t.style = (t.style ? t.style + ";" : "") + n[o] : t[o] || "contenteditable" == o || "nodeName" == o || (t[o] = String(n[o]))
                })), t.translate || (t.translate = "no"), [nn.node(0, e.state.doc.content.size, t)]
            }

            function Rn(e) {
                if (e.markCursor) {
                    var t = document.createElement("img");
                    t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
                        dom: t,
                        deco: nn.widget(e.state.selection.head, t, {
                            raw: !0,
                            marks: e.markCursor
                        })
                    }
                } else e.cursorWrapper = null
            }

            function Bn(e) {
                return !e.someProp("editable", (function(t) {
                    return !1 === t(e.state)
                }))
            }

            function In(e) {
                var t = Object.create(null);

                function n(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n])
                }
                return e.someProp("nodeViews", n), e.someProp("markViews", n), t
            }

            function Fn(e) {
                if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
            }
            t.Decoration = nn, t.DecorationSet = sn, t.EditorView = An, t.__endComposition = Pn, t.__parseFromClipboard = En, t.__serializeForClipboard = Tn
        }
    }
]);