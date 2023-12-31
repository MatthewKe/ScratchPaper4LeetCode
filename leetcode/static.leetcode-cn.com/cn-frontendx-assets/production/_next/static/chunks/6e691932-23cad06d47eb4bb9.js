"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1232], {
        15899: function(e, t, o) {
            o.r(t), o.d(t, {
                Decoration: function() {
                    return At
                },
                DecorationSet: function() {
                    return Bt
                },
                EditorView: function() {
                    return Ht
                },
                __endComposition: function() {
                    return wt
                },
                __parseFromClipboard: function() {
                    return $e
                },
                __serializeForClipboard: function() {
                    return Ke
                }
            });
            o(65240);
            var n = o(85927),
                r = o(50770),
                i = o(90345),
                s = {};
            if ("undefined" != typeof navigator && "undefined" != typeof document) {
                var a = /Edge\/(\d+)/.exec(navigator.userAgent),
                    c = /MSIE \d/.test(navigator.userAgent),
                    l = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
                s.mac = /Mac/.test(navigator.platform);
                var d = s.ie = !!(c || l || a);
                s.ie_version = c ? document.documentMode || 6 : l ? +l[1] : a ? +a[1] : null, s.gecko = !d && /gecko\/(\d+)/i.test(navigator.userAgent), s.gecko_version = s.gecko && +(/Firefox\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1];
                var f = !d && /Chrome\/(\d+)/.exec(navigator.userAgent);
                s.chrome = !!f, s.chrome_version = f && +f[1], s.safari = !d && /Apple Computer/.test(navigator.vendor), s.ios = s.safari && (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2), s.android = /Android \d/.test(navigator.userAgent), s.webkit = "webkitFontSmoothing" in document.documentElement.style, s.webkit_version = s.webkit && +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
            }
            var h = function(e) {
                    for (var t = 0;; t++)
                        if (!(e = e.previousSibling)) return t
                },
                u = function(e) {
                    var t = e.parentNode;
                    return t && 11 == t.nodeType ? t.host : t
                },
                p = null,
                m = function(e, t, o) {
                    var n = p || (p = document.createRange());
                    return n.setEnd(e, null == o ? e.nodeValue.length : o), n.setStart(e, t || 0), n
                },
                v = function(e, t, o, n) {
                    return o && (y(e, t, o, n, -1) || y(e, t, o, n, 1))
                },
                g = /^(img|br|input|textarea|hr)$/i;

            function y(e, t, o, n, r) {
                for (;;) {
                    if (e == o && t == n) return !0;
                    if (t == (r < 0 ? 0 : b(e))) {
                        var i = e.parentNode;
                        if (1 != i.nodeType || w(e) || g.test(e.nodeName) || "false" == e.contentEditable) return !1;
                        t = h(e) + (r < 0 ? 0 : 1), e = i
                    } else {
                        if (1 != e.nodeType) return !1;
                        if ("false" == (e = e.childNodes[t + (r < 0 ? -1 : 0)]).contentEditable) return !1;
                        t = r < 0 ? b(e) : 0
                    }
                }
            }

            function b(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function w(e) {
                for (var t, o = e; o && !(t = o.pmViewDesc); o = o.parentNode);
                return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
            }
            var O = function(e) {
                var t = e.isCollapsed;
                return t && s.chrome && e.rangeCount && !e.getRangeAt(0).collapsed && (t = !1), t
            };

            function D(e, t) {
                var o = document.createEvent("Event");
                return o.initEvent("keydown", !0, !0), o.keyCode = e, o.key = o.code = t, o
            }

            function N(e) {
                return {
                    left: 0,
                    right: e.documentElement.clientWidth,
                    top: 0,
                    bottom: e.documentElement.clientHeight
                }
            }

            function S(e, t) {
                return "number" == typeof e ? e : e[t]
            }

            function C(e) {
                var t = e.getBoundingClientRect(),
                    o = t.width / e.offsetWidth || 1,
                    n = t.height / e.offsetHeight || 1;
                return {
                    left: t.left,
                    right: t.left + e.clientWidth * o,
                    top: t.top,
                    bottom: t.top + e.clientHeight * n
                }
            }

            function M(e, t, o) {
                for (var n = e.someProp("scrollThreshold") || 0, r = e.someProp("scrollMargin") || 5, i = e.dom.ownerDocument, s = o || e.dom; s; s = u(s))
                    if (1 == s.nodeType) {
                        var a = s == i.body || 1 != s.nodeType,
                            c = a ? N(i) : C(s),
                            l = 0,
                            d = 0;
                        if (t.top < c.top + S(n, "top") ? d = -(c.top - t.top + S(r, "top")) : t.bottom > c.bottom - S(n, "bottom") && (d = t.bottom - c.bottom + S(r, "bottom")), t.left < c.left + S(n, "left") ? l = -(c.left - t.left + S(r, "left")) : t.right > c.right - S(n, "right") && (l = t.right - c.right + S(r, "right")), l || d)
                            if (a) i.defaultView.scrollBy(l, d);
                            else {
                                var f = s.scrollLeft,
                                    h = s.scrollTop;
                                d && (s.scrollTop += d), l && (s.scrollLeft += l);
                                var p = s.scrollLeft - f,
                                    m = s.scrollTop - h;
                                t = {
                                    left: t.left - p,
                                    top: t.top - m,
                                    right: t.right - p,
                                    bottom: t.bottom - m
                                }
                            }
                        if (a) break
                    }
            }

            function k(e) {
                for (var t = [], o = e.ownerDocument; e && (t.push({
                        dom: e,
                        top: e.scrollTop,
                        left: e.scrollLeft
                    }), e != o); e = u(e));
                return t
            }

            function x(e, t) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o],
                        r = n.dom,
                        i = n.top,
                        s = n.left;
                    r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != s && (r.scrollLeft = s)
                }
            }
            var T = null;

            function A(e, t) {
                for (var o, n, r = 2e8, i = 0, s = t.top, a = t.top, c = e.firstChild, l = 0; c; c = c.nextSibling, l++) {
                    var d = void 0;
                    if (1 == c.nodeType) d = c.getClientRects();
                    else {
                        if (3 != c.nodeType) continue;
                        d = m(c).getClientRects()
                    }
                    for (var f = 0; f < d.length; f++) {
                        var h = d[f];
                        if (h.top <= s && h.bottom >= a) {
                            s = Math.max(h.bottom, s), a = Math.min(h.top, a);
                            var u = h.left > t.left ? h.left - t.left : h.right < t.left ? t.left - h.right : 0;
                            if (u < r) {
                                o = c, r = u, n = u && 3 == o.nodeType ? {
                                    left: h.right < t.left ? h.right : h.left,
                                    top: t.top
                                } : t, 1 == c.nodeType && u && (i = l + (t.left >= (h.left + h.right) / 2 ? 1 : 0));
                                continue
                            }
                        }!o && (t.left >= h.right && t.top >= h.top || t.left >= h.left && t.top >= h.bottom) && (i = l + 1)
                    }
                }
                return o && 3 == o.nodeType ? function(e, t) {
                    for (var o = e.nodeValue.length, n = document.createRange(), r = 0; r < o; r++) {
                        n.setEnd(e, r + 1), n.setStart(e, r);
                        var i = B(n, 1);
                        if (i.top != i.bottom && P(t, i)) return {
                            node: e,
                            offset: r + (t.left >= (i.left + i.right) / 2 ? 1 : 0)
                        }
                    }
                    return {
                        node: e,
                        offset: 0
                    }
                }(o, n) : !o || r && 1 == o.nodeType ? {
                    node: e,
                    offset: i
                } : A(o, n)
            }

            function P(e, t) {
                return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
            }

            function E(e, t, o) {
                var n = e.childNodes.length;
                if (n && o.top < o.bottom)
                    for (var r = Math.max(0, Math.min(n - 1, Math.floor(n * (t.top - o.top) / (o.bottom - o.top)) - 2)), i = r;;) {
                        var s = e.childNodes[i];
                        if (1 == s.nodeType)
                            for (var a = s.getClientRects(), c = 0; c < a.length; c++) {
                                var l = a[c];
                                if (P(t, l)) return E(s, t, l)
                            }
                        if ((i = (i + 1) % n) == r) break
                    }
                return e
            }

            function V(e, t) {
                var o, n, r, i, a = e.root;
                if (a.caretPositionFromPoint) try {
                    var c = a.caretPositionFromPoint(t.left, t.top);
                    c && (r = (o = c).offsetNode, i = o.offset)
                } catch (v) {}
                if (!r && a.caretRangeFromPoint) {
                    var l = a.caretRangeFromPoint(t.left, t.top);
                    l && (r = (n = l).startContainer, i = n.startOffset)
                }
                var d, f = a.elementFromPoint(t.left, t.top + 1);
                if (!f || !e.dom.contains(1 != f.nodeType ? f.parentNode : f)) {
                    var h = e.dom.getBoundingClientRect();
                    if (!P(t, h)) return null;
                    if (!(f = E(e.dom, t, h))) return null
                }
                if (s.safari && f.draggable && (r = i = null), f = function(e, t) {
                        var o = e.parentNode;
                        return o && /^li$/i.test(o.nodeName) && t.left < e.getBoundingClientRect().left ? o : e
                    }(f, t), r) {
                    if (s.gecko && 1 == r.nodeType && (i = Math.min(i, r.childNodes.length)) < r.childNodes.length) {
                        var u, p = r.childNodes[i];
                        "IMG" == p.nodeName && (u = p.getBoundingClientRect()).right <= t.left && u.bottom > t.top && i++
                    }
                    r == e.dom && i == r.childNodes.length - 1 && 1 == r.lastChild.nodeType && t.top > r.lastChild.getBoundingClientRect().bottom ? d = e.state.doc.content.size : 0 != i && 1 == r.nodeType && "BR" == r.childNodes[i - 1].nodeName || (d = function(e, t, o, n) {
                        for (var r = -1, i = t; i != e.dom;) {
                            var s = e.docView.nearestDesc(i, !0);
                            if (!s) return null;
                            if (s.node.isBlock && s.parent) {
                                var a = s.dom.getBoundingClientRect();
                                if (a.left > n.left || a.top > n.top) r = s.posBefore;
                                else {
                                    if (!(a.right < n.left || a.bottom < n.top)) break;
                                    r = s.posAfter
                                }
                            }
                            i = s.dom.parentNode
                        }
                        return r > -1 ? r : e.docView.posFromDOM(t, o)
                    }(e, r, i, t))
                }
                null == d && (d = function(e, t, o) {
                    var n = A(t, o),
                        r = n.node,
                        i = n.offset,
                        s = -1;
                    if (1 == r.nodeType && !r.firstChild) {
                        var a = r.getBoundingClientRect();
                        s = a.left != a.right && o.left > (a.left + a.right) / 2 ? 1 : -1
                    }
                    return e.docView.posFromDOM(r, i, s)
                }(e, f, t));
                var m = e.docView.nearestDesc(f, !0);
                return {
                    pos: d,
                    inside: m ? m.posAtStart - m.border : -1
                }
            }

            function B(e, t) {
                var o = e.getClientRects();
                return o.length ? o[t < 0 ? 0 : o.length - 1] : e.getBoundingClientRect()
            }
            var R = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

            function z(e, t, o) {
                var n = e.docView.domFromPos(t, o < 0 ? -1 : 1),
                    r = n.node,
                    i = n.offset,
                    a = s.webkit || s.gecko;
                if (3 == r.nodeType) {
                    if (!a || !R.test(r.nodeValue) && (o < 0 ? i : i != r.nodeValue.length)) {
                        var c = i,
                            l = i,
                            d = o < 0 ? 1 : -1;
                        return o < 0 && !i ? (l++, d = -1) : o >= 0 && i == r.nodeValue.length ? (c--, d = 1) : o < 0 ? c-- : l++, _(B(m(r, c, l), d), d < 0)
                    }
                    var f = B(m(r, i, i), o);
                    if (s.gecko && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                        var h = B(m(r, i - 1, i - 1), -1);
                        if (h.top == f.top) {
                            var u = B(m(r, i, i + 1), -1);
                            if (u.top != f.top) return _(u, u.left < h.left)
                        }
                    }
                    return f
                }
                if (!e.state.doc.resolve(t).parent.inlineContent) {
                    if (i && (o < 0 || i == b(r))) {
                        var p = r.childNodes[i - 1];
                        if (1 == p.nodeType) return L(p.getBoundingClientRect(), !1)
                    }
                    if (i < b(r)) {
                        var v = r.childNodes[i];
                        if (1 == v.nodeType) return L(v.getBoundingClientRect(), !0)
                    }
                    return L(r.getBoundingClientRect(), o >= 0)
                }
                if (i && (o < 0 || i == b(r))) {
                    var g = r.childNodes[i - 1],
                        y = 3 == g.nodeType ? m(g, b(g) - (a ? 0 : 1)) : 1 != g.nodeType || "BR" == g.nodeName && g.nextSibling ? null : g;
                    if (y) return _(B(y, 1), !1)
                }
                if (i < b(r)) {
                    var w = r.childNodes[i],
                        O = 3 == w.nodeType ? m(w, 0, a ? 0 : 1) : 1 == w.nodeType ? w : null;
                    if (O) return _(B(O, -1), !0)
                }
                return _(B(3 == r.nodeType ? m(r) : r, -o), o >= 0)
            }

            function _(e, t) {
                if (0 == e.width) return e;
                var o = t ? e.left : e.right;
                return {
                    top: e.top,
                    bottom: e.bottom,
                    left: o,
                    right: o
                }
            }

            function L(e, t) {
                if (0 == e.height) return e;
                var o = t ? e.top : e.bottom;
                return {
                    top: o,
                    bottom: o,
                    left: e.left,
                    right: e.right
                }
            }

            function q(e, t, o) {
                var n = e.state,
                    r = e.root.activeElement;
                n != t && e.updateState(t), r != e.dom && e.focus();
                try {
                    return o()
                } finally {
                    n != t && e.updateState(n), r != e.dom && r && r.focus()
                }
            }
            var I = /[\u0590-\u08ac]/;
            var F = null,
                K = null,
                $ = !1;

            function W(e, t, o) {
                return F == t && K == o ? $ : (F = t, K = o, $ = "up" == o || "down" == o ? function(e, t, o) {
                    var n = t.selection,
                        r = "up" == o ? n.$from : n.$to;
                    return q(e, t, (function() {
                        for (var t = e.docView.domFromPos(r.pos, "up" == o ? -1 : 1).node;;) {
                            var n = e.docView.nearestDesc(t, !0);
                            if (!n) break;
                            if (n.node.isBlock) {
                                t = n.dom;
                                break
                            }
                            t = n.dom.parentNode
                        }
                        for (var i = z(e, r.pos, 1), s = t.firstChild; s; s = s.nextSibling) {
                            var a = void 0;
                            if (1 == s.nodeType) a = s.getClientRects();
                            else {
                                if (3 != s.nodeType) continue;
                                a = m(s, 0, s.nodeValue.length).getClientRects()
                            }
                            for (var c = 0; c < a.length; c++) {
                                var l = a[c];
                                if (l.bottom > l.top && ("up" == o ? l.bottom < i.top + 1 : l.top > i.bottom - 1)) return !1
                            }
                        }
                        return !0
                    }))
                }(e, t, o) : function(e, t, o) {
                    var n = t.selection.$head;
                    if (!n.parent.isTextblock) return !1;
                    var r = n.parentOffset,
                        i = !r,
                        s = r == n.parent.content.size,
                        a = getSelection();
                    return I.test(n.parent.textContent) && a.modify ? q(e, t, (function() {
                        var t = a.getRangeAt(0),
                            r = a.focusNode,
                            i = a.focusOffset,
                            s = a.caretBidiLevel;
                        a.modify("move", o, "character");
                        var c = !(n.depth ? e.docView.domAfterPos(n.before()) : e.dom).contains(1 == a.focusNode.nodeType ? a.focusNode : a.focusNode.parentNode) || r == a.focusNode && i == a.focusOffset;
                        return a.removeAllRanges(), a.addRange(t), null != s && (a.caretBidiLevel = s), c
                    })) : "left" == o || "backward" == o ? i : s
                }(e, t, o))
            }
            var H = function(e, t, o, n) {
                    this.parent = e, this.children = t, this.dom = o, o.pmViewDesc = this, this.contentDOM = n, this.dirty = 0
                },
                j = {
                    beforePosition: {
                        configurable: !0
                    },
                    size: {
                        configurable: !0
                    },
                    border: {
                        configurable: !0
                    },
                    posBefore: {
                        configurable: !0
                    },
                    posAtStart: {
                        configurable: !0
                    },
                    posAfter: {
                        configurable: !0
                    },
                    posAtEnd: {
                        configurable: !0
                    },
                    contentLost: {
                        configurable: !0
                    },
                    domAtom: {
                        configurable: !0
                    }
                };
            H.prototype.matchesWidget = function() {
                return !1
            }, H.prototype.matchesMark = function() {
                return !1
            }, H.prototype.matchesNode = function() {
                return !1
            }, H.prototype.matchesHack = function() {
                return !1
            }, j.beforePosition.get = function() {
                return !1
            }, H.prototype.parseRule = function() {
                return null
            }, H.prototype.stopEvent = function() {
                return !1
            }, j.size.get = function() {
                for (var e = 0, t = 0; t < this.children.length; t++) e += this.children[t].size;
                return e
            }, j.border.get = function() {
                return 0
            }, H.prototype.destroy = function() {
                this.parent = null, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = null);
                for (var e = 0; e < this.children.length; e++) this.children[e].destroy()
            }, H.prototype.posBeforeChild = function(e) {
                for (var t = 0, o = this.posAtStart; t < this.children.length; t++) {
                    var n = this.children[t];
                    if (n == e) return o;
                    o += n.size
                }
            }, j.posBefore.get = function() {
                return this.parent.posBeforeChild(this)
            }, j.posAtStart.get = function() {
                return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
            }, j.posAfter.get = function() {
                return this.posBefore + this.size
            }, j.posAtEnd.get = function() {
                return this.posAtStart + this.size - 2 * this.border
            }, H.prototype.localPosFromDOM = function(e, t, o) {
                if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                    if (o < 0) {
                        var n, r;
                        if (e == this.contentDOM) n = e.childNodes[t - 1];
                        else {
                            for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                            n = e.previousSibling
                        }
                        for (; n && (!(r = n.pmViewDesc) || r.parent != this);) n = n.previousSibling;
                        return n ? this.posBeforeChild(r) + r.size : this.posAtStart
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
                if (e == this.dom && this.contentDOM) a = t > h(this.contentDOM);
                else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) a = 2 & e.compareDocumentPosition(this.contentDOM);
                else if (this.dom.firstChild) {
                    if (0 == t)
                        for (var c = e;; c = c.parentNode) {
                            if (c == this.dom) {
                                a = !1;
                                break
                            }
                            if (c.parentNode.firstChild != c) break
                        }
                    if (null == a && t == e.childNodes.length)
                        for (var l = e;; l = l.parentNode) {
                            if (l == this.dom) {
                                a = !0;
                                break
                            }
                            if (l.parentNode.lastChild != l) break
                        }
                }
                return (null == a ? o > 0 : a) ? this.posAtEnd : this.posAtStart
            }, H.prototype.nearestDesc = function(e, t) {
                for (var o = !0, n = e; n; n = n.parentNode) {
                    var r = this.getDesc(n);
                    if (r && (!t || r.node)) {
                        if (!o || !r.nodeDOM || (1 == r.nodeDOM.nodeType ? r.nodeDOM.contains(1 == e.nodeType ? e : e.parentNode) : r.nodeDOM == e)) return r;
                        o = !1
                    }
                }
            }, H.prototype.getDesc = function(e) {
                for (var t = e.pmViewDesc, o = t; o; o = o.parent)
                    if (o == this) return t
            }, H.prototype.posFromDOM = function(e, t, o) {
                for (var n = e; n; n = n.parentNode) {
                    var r = this.getDesc(n);
                    if (r) return r.localPosFromDOM(e, t, o)
                }
                return -1
            }, H.prototype.descAt = function(e) {
                for (var t = 0, o = 0; t < this.children.length; t++) {
                    var n = this.children[t],
                        r = o + n.size;
                    if (o == e && r != o) {
                        for (; !n.border && n.children.length;) n = n.children[0];
                        return n
                    }
                    if (e < r) return n.descAt(e - o - n.border);
                    o = r
                }
            }, H.prototype.domFromPos = function(e, t) {
                if (!this.contentDOM) return {
                    node: this.dom,
                    offset: 0
                };
                for (var o = 0, n = 0, r = !0;; n++, r = !1) {
                    for (; n < this.children.length && (this.children[n].beforePosition || this.children[n].dom.parentNode != this.contentDOM);) o += this.children[n++].size;
                    var i = n == this.children.length ? null : this.children[n];
                    if (o == e && (0 == t || !i || !i.size || i.border || t < 0 && r) || i && i.domAtom && e < o + i.size) return {
                        node: this.contentDOM,
                        offset: i ? h(i.dom) : this.contentDOM.childNodes.length
                    };
                    if (!i) throw new Error("Invalid position " + e);
                    var s = o + i.size;
                    if (!i.domAtom && (t < 0 && !i.border ? s >= e : s > e) && (s > e || n + 1 >= this.children.length || !this.children[n + 1].beforePosition)) return i.domFromPos(e - o - i.border, t);
                    o = s
                }
            }, H.prototype.parseRange = function(e, t, o) {
                if (void 0 === o && (o = 0), 0 == this.children.length) return {
                    node: this.contentDOM,
                    from: e,
                    to: t,
                    fromOffset: 0,
                    toOffset: this.contentDOM.childNodes.length
                };
                for (var n = -1, r = -1, i = o, s = 0;; s++) {
                    var a = this.children[s],
                        c = i + a.size;
                    if (-1 == n && e <= c) {
                        var l = i + a.border;
                        if (e >= l && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, l);
                        e = i;
                        for (var d = s; d > 0; d--) {
                            var f = this.children[d - 1];
                            if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
                                n = h(f.dom) + 1;
                                break
                            }
                            e -= f.size
                        } - 1 == n && (n = 0)
                    }
                    if (n > -1 && (c > t || s == this.children.length - 1)) {
                        t = c;
                        for (var u = s + 1; u < this.children.length; u++) {
                            var p = this.children[u];
                            if (p.size && p.dom.parentNode == this.contentDOM && !p.emptyChildAt(-1)) {
                                r = h(p.dom);
                                break
                            }
                            t += p.size
                        } - 1 == r && (r = this.contentDOM.childNodes.length);
                        break
                    }
                    i = c
                }
                return {
                    node: this.contentDOM,
                    from: e,
                    to: t,
                    fromOffset: n,
                    toOffset: r
                }
            }, H.prototype.emptyChildAt = function(e) {
                if (this.border || !this.contentDOM || !this.children.length) return !1;
                var t = this.children[e < 0 ? 0 : this.children.length - 1];
                return 0 == t.size || t.emptyChildAt(e)
            }, H.prototype.domAfterPos = function(e) {
                var t = this.domFromPos(e, 0),
                    o = t.node,
                    n = t.offset;
                if (1 != o.nodeType || n == o.childNodes.length) throw new RangeError("No node after pos " + e);
                return o.childNodes[n]
            }, H.prototype.setSelection = function(e, t, o, n) {
                for (var r = Math.min(e, t), i = Math.max(e, t), a = 0, c = 0; a < this.children.length; a++) {
                    var l = this.children[a],
                        d = c + l.size;
                    if (r > c && i < d) return l.setSelection(e - c - l.border, t - c - l.border, o, n);
                    c = d
                }
                var f = this.domFromPos(e, e ? -1 : 1),
                    u = t == e ? f : this.domFromPos(t, t ? -1 : 1),
                    p = o.getSelection(),
                    m = !1;
                if ((s.gecko || s.safari) && e == t) {
                    var g = f.node,
                        y = f.offset;
                    if (3 == g.nodeType)(m = y && "\n" == g.nodeValue[y - 1]) && y == g.nodeValue.length && g.nextSibling && "BR" == g.nextSibling.nodeName && (f = u = {
                        node: g.parentNode,
                        offset: h(g) + 1
                    });
                    else {
                        var b = g.childNodes[y - 1];
                        m = b && ("BR" == b.nodeName || "false" == b.contentEditable)
                    }
                }
                if (n || m && s.safari || !v(f.node, f.offset, p.anchorNode, p.anchorOffset) || !v(u.node, u.offset, p.focusNode, p.focusOffset)) {
                    var w = !1;
                    if ((p.extend || e == t) && !m) {
                        p.collapse(f.node, f.offset);
                        try {
                            e != t && p.extend(u.node, u.offset), w = !0
                        } catch (N) {
                            if (!(N instanceof DOMException)) throw N
                        }
                    }
                    if (!w) {
                        if (e > t) {
                            var O = f;
                            f = u, u = O
                        }
                        var D = document.createRange();
                        D.setEnd(u.node, u.offset), D.setStart(f.node, f.offset), p.removeAllRanges(), p.addRange(D)
                    }
                }
            }, H.prototype.ignoreMutation = function(e) {
                return !this.contentDOM && "selection" != e.type
            }, j.contentLost.get = function() {
                return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
            }, H.prototype.markDirty = function(e, t) {
                for (var o = 0, n = 0; n < this.children.length; n++) {
                    var r = this.children[n],
                        i = o + r.size;
                    if (o == i ? e <= i && t >= o : e < i && t > o) {
                        var s = o + r.border,
                            a = i - r.border;
                        if (e >= s && t <= a) return this.dirty = e == o || t == i ? 2 : 1, void(e != s || t != a || !r.contentLost && r.dom.parentNode == this.contentDOM ? r.markDirty(e - s, t - s) : r.dirty = 3);
                        r.dirty = 3
                    }
                    o = i
                }
                this.dirty = 2
            }, H.prototype.markParentsDirty = function() {
                for (var e = 1, t = this.parent; t; t = t.parent, e++) {
                    var o = 1 == e ? 2 : 1;
                    t.dirty < o && (t.dirty = o)
                }
            }, j.domAtom.get = function() {
                return !1
            }, Object.defineProperties(H.prototype, j);
            var Y = [],
                U = function(e) {
                    function t(t, o, n, r) {
                        var i, s = o.type.toDOM;
                        if ("function" == typeof s && (s = s(n, (function() {
                                return i ? i.parent ? i.parent.posBeforeChild(i) : void 0 : r
                            }))), !o.type.spec.raw) {
                            if (1 != s.nodeType) {
                                var a = document.createElement("span");
                                a.appendChild(s), s = a
                            }
                            s.contentEditable = !1, s.classList.add("ProseMirror-widget")
                        }
                        e.call(this, t, Y, s, null), this.widget = o, i = this
                    }
                    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                    var o = {
                        beforePosition: {
                            configurable: !0
                        },
                        domAtom: {
                            configurable: !0
                        }
                    };
                    return o.beforePosition.get = function() {
                        return this.widget.type.side < 0
                    }, t.prototype.matchesWidget = function(e) {
                        return 0 == this.dirty && e.type.eq(this.widget.type)
                    }, t.prototype.parseRule = function() {
                        return {
                            ignore: !0
                        }
                    }, t.prototype.stopEvent = function(e) {
                        var t = this.widget.spec.stopEvent;
                        return !!t && t(e)
                    }, t.prototype.ignoreMutation = function(e) {
                        return "selection" != e.type || this.widget.spec.ignoreSelection
                    }, o.domAtom.get = function() {
                        return !0
                    }, Object.defineProperties(t.prototype, o), t
                }(H),
                G = function(e) {
                    function t(t, o, n, r) {
                        e.call(this, t, Y, o, null), this.textDOM = n, this.text = r
                    }
                    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                    var o = {
                        size: {
                            configurable: !0
                        }
                    };
                    return o.size.get = function() {
                        return this.text.length
                    }, t.prototype.localPosFromDOM = function(e, t) {
                        return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
                    }, t.prototype.domFromPos = function(e) {
                        return {
                            node: this.textDOM,
                            offset: e
                        }
                    }, t.prototype.ignoreMutation = function(e) {
                        return "characterData" === e.type && e.target.nodeValue == e.oldValue
                    }, Object.defineProperties(t.prototype, o), t
                }(H),
                X = function(e) {
                    function t(t, o, n, r) {
                        e.call(this, t, [], n, r), this.mark = o
                    }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.create = function(e, o, n, i) {
                        var s = i.nodeViews[o.type.name],
                            a = s && s(o, i, n);
                        return a && a.dom || (a = r.PW.renderSpec(document, o.type.spec.toDOM(o, n))), new t(e, o, a.dom, a.contentDOM || a.dom)
                    }, t.prototype.parseRule = function() {
                        return {
                            mark: this.mark.type.name,
                            attrs: this.mark.attrs,
                            contentElement: this.contentDOM
                        }
                    }, t.prototype.matchesMark = function(e) {
                        return 3 != this.dirty && this.mark.eq(e)
                    }, t.prototype.markDirty = function(t, o) {
                        if (e.prototype.markDirty.call(this, t, o), 0 != this.dirty) {
                            for (var n = this.parent; !n.node;) n = n.parent;
                            n.dirty < this.dirty && (n.dirty = this.dirty), this.dirty = 0
                        }
                    }, t.prototype.slice = function(e, o, n) {
                        var r = t.create(this.parent, this.mark, !0, n),
                            i = this.children,
                            s = this.size;
                        o < s && (i = ue(i, o, s, n)), e > 0 && (i = ue(i, 0, e, n));
                        for (var a = 0; a < i.length; a++) i[a].parent = r;
                        return r.children = i, r
                    }, t
                }(H),
                J = function(e) {
                    function t(t, o, n, r, i, s, a, c, l) {
                        e.call(this, t, o.isLeaf ? Y : [], i, s), this.nodeDOM = a, this.node = o, this.outerDeco = n, this.innerDeco = r, s && this.updateChildren(c, l)
                    }
                    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                    var o = {
                        size: {
                            configurable: !0
                        },
                        border: {
                            configurable: !0
                        },
                        domAtom: {
                            configurable: !0
                        }
                    };
                    return t.create = function(e, o, n, i, s, a) {
                        var c, l, d = s.nodeViews[o.type.name],
                            f = d && d(o, s, (function() {
                                return l ? l.parent ? l.parent.posBeforeChild(l) : void 0 : a
                            }), n, i),
                            h = f && f.dom,
                            u = f && f.contentDOM;
                        if (o.isText)
                            if (h) {
                                if (3 != h.nodeType) throw new RangeError("Text must be rendered as a DOM text node")
                            } else h = document.createTextNode(o.text);
                        else h || (h = (c = r.PW.renderSpec(document, o.type.spec.toDOM(o))).dom, u = c.contentDOM);
                        u || o.isText || "BR" == h.nodeName || (h.hasAttribute("contenteditable") || (h.contentEditable = !1), o.type.spec.draggable && (h.draggable = !0));
                        var p = h;
                        return h = ce(h, n, o), f ? l = new te(e, o, n, i, h, u, p, f, s, a + 1) : o.isText ? new Z(e, o, n, i, h, p, s) : new t(e, o, n, i, h, u, p, s, a + 1)
                    }, t.prototype.parseRule = function() {
                        var e = this;
                        if (this.node.type.spec.reparseInView) return null;
                        var t = {
                            node: this.node.type.name,
                            attrs: this.node.attrs
                        };
                        return this.node.type.spec.code && (t.preserveWhitespace = "full"), this.contentDOM && !this.contentLost ? t.contentElement = this.contentDOM : t.getContent = function() {
                            return e.contentDOM ? r.HY.empty : e.node.content
                        }, t
                    }, t.prototype.matchesNode = function(e, t, o) {
                        return 0 == this.dirty && e.eq(this.node) && le(t, this.outerDeco) && o.eq(this.innerDeco)
                    }, o.size.get = function() {
                        return this.node.nodeSize
                    }, o.border.get = function() {
                        return this.node.isLeaf ? 0 : 1
                    }, t.prototype.updateChildren = function(e, t) {
                        var o = this,
                            n = this.node.inlineContent,
                            i = t,
                            a = n && e.composing && this.localCompositionNode(e, t),
                            c = new fe(this, a && a.node);
                        ! function(e, t, o, n) {
                            var r = t.locals(e),
                                i = 0;
                            if (0 == r.length) {
                                for (var s = 0; s < e.childCount; s++) {
                                    var a = e.child(s);
                                    n(a, r, t.forChild(i, a), s), i += a.nodeSize
                                }
                                return
                            }
                            for (var c = 0, l = [], d = null, f = 0;;) {
                                if (c < r.length && r[c].to == i) {
                                    for (var h = r[c++], u = void 0; c < r.length && r[c].to == i;)(u || (u = [h])).push(r[c++]);
                                    if (u) {
                                        u.sort(he);
                                        for (var p = 0; p < u.length; p++) o(u[p], f, !!d)
                                    } else o(h, f, !!d)
                                }
                                var m = void 0,
                                    v = void 0;
                                if (d) v = -1, m = d, d = null;
                                else {
                                    if (!(f < e.childCount)) break;
                                    v = f, m = e.child(f++)
                                }
                                for (var g = 0; g < l.length; g++) l[g].to <= i && l.splice(g--, 1);
                                for (; c < r.length && r[c].from <= i && r[c].to > i;) l.push(r[c++]);
                                var y = i + m.nodeSize;
                                if (m.isText) {
                                    var b = y;
                                    c < r.length && r[c].from < b && (b = r[c].from);
                                    for (var w = 0; w < l.length; w++) l[w].to < b && (b = l[w].to);
                                    b < y && (d = m.cut(b - i), m = m.cut(0, b - i), y = b, v = -1)
                                }
                                n(m, l.length ? m.isInline && !m.isLeaf ? l.filter((function(e) {
                                    return !e.inline
                                })) : l.slice() : Y, t.forChild(i, m), v), i = y
                            }
                        }(this.node, this.innerDeco, (function(t, s, a) {
                            t.spec.marks ? c.syncToMarks(t.spec.marks, n, e) : t.type.side >= 0 && !a && c.syncToMarks(s == o.node.childCount ? r.vc.none : o.node.child(s).marks, n, e), c.placeWidget(t, e, i)
                        }), (function(t, o, r, s) {
                            c.syncToMarks(t.marks, n, e), c.findNodeMatch(t, o, r, s) || c.updateNextNode(t, o, r, e, s) || c.addNode(t, o, r, e, i), i += t.nodeSize
                        })), c.syncToMarks(Y, n, e), this.node.isTextblock && c.addTextblockHacks(), c.destroyRest(), (c.changed || 2 == this.dirty) && (a && this.protectLocalComposition(e, a), oe(this.contentDOM, this.children, e), s.ios && function(e) {
                            if ("UL" == e.nodeName || "OL" == e.nodeName) {
                                var t = e.style.cssText;
                                e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t
                            }
                        }(this.dom))
                    }, t.prototype.localCompositionNode = function(e, t) {
                        var o = e.state.selection,
                            r = o.from,
                            i = o.to;
                        if (!(!(e.state.selection instanceof n.Bs) || r < t || i > t + this.node.content.size)) {
                            var s = e.root.getSelection(),
                                a = function(e, t) {
                                    for (;;) {
                                        if (3 == e.nodeType) return e;
                                        if (1 == e.nodeType && t > 0) {
                                            if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType) return e.childNodes[t];
                                            t = b(e = e.childNodes[t - 1])
                                        } else {
                                            if (!(1 == e.nodeType && t < e.childNodes.length)) return null;
                                            e = e.childNodes[t], t = 0
                                        }
                                    }
                                }(s.focusNode, s.focusOffset);
                            if (a && this.dom.contains(a.parentNode)) {
                                var c = a.nodeValue,
                                    l = function(e, t, o, n) {
                                        for (var r = 0, i = 0; r < e.childCount && i <= n;) {
                                            var s = e.child(r++),
                                                a = i;
                                            if (i += s.nodeSize, s.isText) {
                                                for (var c = s.text; r < e.childCount;) {
                                                    var l = e.child(r++);
                                                    if (i += l.nodeSize, !l.isText) break;
                                                    c += l.text
                                                }
                                                if (i >= o) {
                                                    var d = c.lastIndexOf(t, n - a);
                                                    if (d >= 0 && d + t.length + a >= o) return a + d
                                                }
                                            }
                                        }
                                        return -1
                                    }(this.node.content, c, r - t, i - t);
                                return l < 0 ? null : {
                                    node: a,
                                    pos: l,
                                    text: c
                                }
                            }
                        }
                    }, t.prototype.protectLocalComposition = function(e, t) {
                        var o = t.node,
                            n = t.pos,
                            r = t.text;
                        if (!this.getDesc(o)) {
                            for (var i = o; i.parentNode != this.contentDOM; i = i.parentNode) {
                                for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
                                for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
                                i.pmViewDesc && (i.pmViewDesc = null)
                            }
                            var s = new G(this, i, o, r);
                            e.compositionNodes.push(s), this.children = ue(this.children, n, n + r.length, e, s)
                        }
                    }, t.prototype.update = function(e, t, o, n) {
                        return !(3 == this.dirty || !e.sameMarkup(this.node)) && (this.updateInner(e, t, o, n), !0)
                    }, t.prototype.updateInner = function(e, t, o, n) {
                        this.updateOuterDeco(t), this.node = e, this.innerDeco = o, this.contentDOM && this.updateChildren(n, this.posAtStart), this.dirty = 0
                    }, t.prototype.updateOuterDeco = function(e) {
                        if (!le(e, this.outerDeco)) {
                            var t = 1 != this.nodeDOM.nodeType,
                                o = this.dom;
                            this.dom = se(this.dom, this.nodeDOM, ie(this.outerDeco, this.node, t), ie(e, this.node, t)), this.dom != o && (o.pmViewDesc = null, this.dom.pmViewDesc = this), this.outerDeco = e
                        }
                    }, t.prototype.selectNode = function() {
                        this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0)
                    }, t.prototype.deselectNode = function() {
                        this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable")
                    }, o.domAtom.get = function() {
                        return this.node.isAtom
                    }, Object.defineProperties(t.prototype, o), t
                }(H);

            function Q(e, t, o, n, r) {
                return ce(n, t, e), new J(null, e, t, o, n, n, n, r, 0)
            }
            var Z = function(e) {
                    function t(t, o, n, r, i, s, a) {
                        e.call(this, t, o, n, r, i, null, s, a)
                    }
                    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                    var o = {
                        domAtom: {
                            configurable: !0
                        }
                    };
                    return t.prototype.parseRule = function() {
                        for (var e = this.nodeDOM.parentNode; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
                        return {
                            skip: e || !0
                        }
                    }, t.prototype.update = function(e, t, o, n) {
                        return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !e.sameMarkup(this.node)) && (this.updateOuterDeco(t), 0 == this.dirty && e.text == this.node.text || e.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = e.text, n.trackWrites == this.nodeDOM && (n.trackWrites = null)), this.node = e, this.dirty = 0, !0)
                    }, t.prototype.inParent = function() {
                        for (var e = this.parent.contentDOM, t = this.nodeDOM; t; t = t.parentNode)
                            if (t == e) return !0;
                        return !1
                    }, t.prototype.domFromPos = function(e) {
                        return {
                            node: this.nodeDOM,
                            offset: e
                        }
                    }, t.prototype.localPosFromDOM = function(t, o, n) {
                        return t == this.nodeDOM ? this.posAtStart + Math.min(o, this.node.text.length) : e.prototype.localPosFromDOM.call(this, t, o, n)
                    }, t.prototype.ignoreMutation = function(e) {
                        return "characterData" != e.type && "selection" != e.type
                    }, t.prototype.slice = function(e, o, n) {
                        var r = this.node.cut(e, o),
                            i = document.createTextNode(r.text);
                        return new t(this.parent, r, this.outerDeco, this.innerDeco, i, i, n)
                    }, o.domAtom.get = function() {
                        return !1
                    }, Object.defineProperties(t.prototype, o), t
                }(J),
                ee = function(e) {
                    function t() {
                        e.apply(this, arguments)
                    }
                    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                    var o = {
                        domAtom: {
                            configurable: !0
                        }
                    };
                    return t.prototype.parseRule = function() {
                        return {
                            ignore: !0
                        }
                    }, t.prototype.matchesHack = function() {
                        return 0 == this.dirty
                    }, o.domAtom.get = function() {
                        return !0
                    }, Object.defineProperties(t.prototype, o), t
                }(H),
                te = function(e) {
                    function t(t, o, n, r, i, s, a, c, l, d) {
                        e.call(this, t, o, n, r, i, s, a, l, d), this.spec = c
                    }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.update = function(t, o, n, r) {
                        if (3 == this.dirty) return !1;
                        if (this.spec.update) {
                            var i = this.spec.update(t, o, n);
                            return i && this.updateInner(t, o, n, r), i
                        }
                        return !(!this.contentDOM && !t.isLeaf) && e.prototype.update.call(this, t, o, n, r)
                    }, t.prototype.selectNode = function() {
                        this.spec.selectNode ? this.spec.selectNode() : e.prototype.selectNode.call(this)
                    }, t.prototype.deselectNode = function() {
                        this.spec.deselectNode ? this.spec.deselectNode() : e.prototype.deselectNode.call(this)
                    }, t.prototype.setSelection = function(t, o, n, r) {
                        this.spec.setSelection ? this.spec.setSelection(t, o, n) : e.prototype.setSelection.call(this, t, o, n, r)
                    }, t.prototype.destroy = function() {
                        this.spec.destroy && this.spec.destroy(), e.prototype.destroy.call(this)
                    }, t.prototype.stopEvent = function(e) {
                        return !!this.spec.stopEvent && this.spec.stopEvent(e)
                    }, t.prototype.ignoreMutation = function(t) {
                        return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : e.prototype.ignoreMutation.call(this, t)
                    }, t
                }(J);

            function oe(e, t, o) {
                for (var n = e.firstChild, r = !1, i = 0; i < t.length; i++) {
                    var s = t[i],
                        a = s.dom;
                    if (a.parentNode == e) {
                        for (; a != n;) n = de(n), r = !0;
                        n = n.nextSibling
                    } else r = !0, e.insertBefore(a, n);
                    if (s instanceof X) {
                        var c = n ? n.previousSibling : e.lastChild;
                        oe(s.contentDOM, s.children, o), n = c ? c.nextSibling : e.firstChild
                    }
                }
                for (; n;) n = de(n), r = !0;
                r && o.trackWrites == e && (o.trackWrites = null)
            }

            function ne(e) {
                e && (this.nodeName = e)
            }
            ne.prototype = Object.create(null);
            var re = [new ne];

            function ie(e, t, o) {
                if (0 == e.length) return re;
                for (var n = o ? re[0] : new ne, r = [n], i = 0; i < e.length; i++) {
                    var s = e[i].type.attrs;
                    if (s)
                        for (var a in s.nodeName && r.push(n = new ne(s.nodeName)), s) {
                            var c = s[a];
                            null != c && (o && 1 == r.length && r.push(n = new ne(t.isInline ? "span" : "div")), "class" == a ? n.class = (n.class ? n.class + " " : "") + c : "style" == a ? n.style = (n.style ? n.style + ";" : "") + c : "nodeName" != a && (n[a] = c))
                        }
                }
                return r
            }

            function se(e, t, o, n) {
                if (o == re && n == re) return t;
                for (var r = t, i = 0; i < n.length; i++) {
                    var s = n[i],
                        a = o[i];
                    if (i) {
                        var c = void 0;
                        a && a.nodeName == s.nodeName && r != e && (c = r.parentNode) && c.tagName.toLowerCase() == s.nodeName || ((c = document.createElement(s.nodeName)).pmIsDeco = !0, c.appendChild(r), a = re[0]), r = c
                    }
                    ae(r, a || re[0], s)
                }
                return r
            }

            function ae(e, t, o) {
                for (var n in t) "class" == n || "style" == n || "nodeName" == n || n in o || e.removeAttribute(n);
                for (var r in o) "class" != r && "style" != r && "nodeName" != r && o[r] != t[r] && e.setAttribute(r, o[r]);
                if (t.class != o.class) {
                    for (var i = t.class ? t.class.split(" ") : Y, s = o.class ? o.class.split(" ") : Y, a = 0; a < i.length; a++) - 1 == s.indexOf(i[a]) && e.classList.remove(i[a]);
                    for (var c = 0; c < s.length; c++) - 1 == i.indexOf(s[c]) && e.classList.add(s[c])
                }
                if (t.style != o.style) {
                    if (t.style)
                        for (var l, d = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; l = d.exec(t.style);) e.style.removeProperty(l[1]);
                    o.style && (e.style.cssText += o.style)
                }
            }

            function ce(e, t, o) {
                return se(e, e, re, ie(t, o, 1 != e.nodeType))
            }

            function le(e, t) {
                if (e.length != t.length) return !1;
                for (var o = 0; o < e.length; o++)
                    if (!e[o].type.eq(t[o].type)) return !1;
                return !0
            }

            function de(e) {
                var t = e.nextSibling;
                return e.parentNode.removeChild(e), t
            }
            var fe = function(e, t) {
                this.top = e, this.lock = t, this.index = 0, this.stack = [], this.changed = !1;
                var o = function(e, t) {
                    for (var o = [], n = e.childCount, r = t.length - 1; n > 0 && r >= 0; r--) {
                        var i = t[r],
                            s = i.node;
                        if (s) {
                            if (s != e.child(n - 1)) break;
                            o.push(i), --n
                        }
                    }
                    return {
                        nodes: o.reverse(),
                        offset: n
                    }
                }(e.node.content, e.children);
                this.preMatched = o.nodes, this.preMatchOffset = o.offset
            };

            function he(e, t) {
                return e.type.side - t.type.side
            }

            function ue(e, t, o, n, r) {
                for (var i = [], s = 0, a = 0; s < e.length; s++) {
                    var c = e[s],
                        l = a,
                        d = a += c.size;
                    l >= o || d <= t ? i.push(c) : (l < t && i.push(c.slice(0, t - l, n)), r && (i.push(r), r = null), d > o && i.push(c.slice(o - l, c.size, n)))
                }
                return i
            }

            function pe(e, t) {
                var o = e.root.getSelection(),
                    r = e.state.doc;
                if (!o.focusNode) return null;
                var i = e.docView.nearestDesc(o.focusNode),
                    s = i && 0 == i.size,
                    a = e.docView.posFromDOM(o.focusNode, o.focusOffset);
                if (a < 0) return null;
                var c, l, d = r.resolve(a);
                if (O(o)) {
                    for (c = d; i && !i.node;) i = i.parent;
                    if (i && i.node.isAtom && n.qv.isSelectable(i.node) && i.parent && (!i.node.isInline || ! function(e, t, o) {
                            for (var n = 0 == t, r = t == b(e); n || r;) {
                                if (e == o) return !0;
                                var i = h(e);
                                if (!(e = e.parentNode)) return !1;
                                n = n && 0 == i, r = r && i == b(e)
                            }
                        }(o.focusNode, o.focusOffset, i.dom))) {
                        var f = i.posBefore;
                        l = new n.qv(a == f ? d : r.resolve(f))
                    }
                } else {
                    var u = e.docView.posFromDOM(o.anchorNode, o.anchorOffset);
                    if (u < 0) return null;
                    c = r.resolve(u)
                }
                l || (l = Ne(e, c, d, "pointer" == t || e.state.selection.head < d.pos && !s ? 1 : -1));
                return l
            }

            function me(e) {
                return e.editable ? e.hasFocus() : Se(e) && document.activeElement && document.activeElement.contains(e.dom)
            }

            function ve(e, t) {
                var o = e.state.selection;
                if (Oe(e, o), me(e)) {
                    if (e.domObserver.disconnectSelection(), e.cursorWrapper) ! function(e) {
                        var t = e.root.getSelection(),
                            o = document.createRange(),
                            n = e.cursorWrapper.dom,
                            r = "IMG" == n.nodeName;
                        r ? o.setEnd(n.parentNode, h(n) + 1) : o.setEnd(n, 0);
                        o.collapse(!1), t.removeAllRanges(), t.addRange(o), !r && !e.state.selection.visible && s.ie && s.ie_version <= 11 && (n.disabled = !0, n.disabled = !1)
                    }(e);
                    else {
                        var r, i, a = o.anchor,
                            c = o.head;
                        !ge || o instanceof n.Bs || (o.$from.parent.inlineContent || (r = ye(e, o.from)), o.empty || o.$from.parent.inlineContent || (i = ye(e, o.to))), e.docView.setSelection(a, c, e.root, t), ge && (r && we(r), i && we(i)), o.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && function(e) {
                            var t = e.dom.ownerDocument;
                            t.removeEventListener("selectionchange", e.hideSelectionGuard);
                            var o = e.root.getSelection(),
                                n = o.anchorNode,
                                r = o.anchorOffset;
                            t.addEventListener("selectionchange", e.hideSelectionGuard = function() {
                                o.anchorNode == n && o.anchorOffset == r || (t.removeEventListener("selectionchange", e.hideSelectionGuard), setTimeout((function() {
                                    me(e) && !e.state.selection.visible || e.dom.classList.remove("ProseMirror-hideselection")
                                }), 20))
                            })
                        }(e))
                    }
                    e.domObserver.setCurSelection(), e.domObserver.connectSelection()
                }
            }
            fe.prototype.getPreMatch = function(e) {
                return e >= this.preMatchOffset ? this.preMatched[e - this.preMatchOffset] : null
            }, fe.prototype.destroyBetween = function(e, t) {
                if (e != t) {
                    for (var o = e; o < t; o++) this.top.children[o].destroy();
                    this.top.children.splice(e, t - e), this.changed = !0
                }
            }, fe.prototype.destroyRest = function() {
                this.destroyBetween(this.index, this.top.children.length)
            }, fe.prototype.syncToMarks = function(e, t, o) {
                for (var n = 0, r = this.stack.length >> 1, i = Math.min(r, e.length); n < i && (n == r - 1 ? this.top : this.stack[n + 1 << 1]).matchesMark(e[n]) && !1 !== e[n].type.spec.spanning;) n++;
                for (; n < r;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), r--;
                for (; r < e.length;) {
                    this.stack.push(this.top, this.index + 1);
                    for (var s = -1, a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++)
                        if (this.top.children[a].matchesMark(e[r])) {
                            s = a;
                            break
                        }
                    if (s > -1) s > this.index && (this.changed = !0, this.destroyBetween(this.index, s)), this.top = this.top.children[this.index];
                    else {
                        var c = X.create(this.top, e[r], t, o);
                        this.top.children.splice(this.index, 0, c), this.top = c, this.changed = !0
                    }
                    this.index = 0, r++
                }
            }, fe.prototype.findNodeMatch = function(e, t, o, n) {
                var r = -1,
                    i = n < 0 ? void 0 : this.getPreMatch(n),
                    s = this.top.children;
                if (i && i.matchesNode(e, t, o)) r = s.indexOf(i);
                else
                    for (var a = this.index, c = Math.min(s.length, a + 5); a < c; a++) {
                        var l = s[a];
                        if (l.matchesNode(e, t, o) && this.preMatched.indexOf(l) < 0) {
                            r = a;
                            break
                        }
                    }
                return !(r < 0) && (this.destroyBetween(this.index, r), this.index++, !0)
            }, fe.prototype.updateNextNode = function(e, t, o, n, r) {
                for (var i = this.index; i < this.top.children.length; i++) {
                    var s = this.top.children[i];
                    if (s instanceof J) {
                        var a = this.preMatched.indexOf(s);
                        if (a > -1 && a + this.preMatchOffset != r) return !1;
                        var c = s.dom;
                        if (!(this.lock && (c == this.lock || 1 == c.nodeType && c.contains(this.lock.parentNode)) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && 3 != s.dirty && le(t, s.outerDeco))) && s.update(e, t, o, n)) return this.destroyBetween(this.index, i), s.dom != c && (this.changed = !0), this.index++, !0;
                        break
                    }
                }
                return !1
            }, fe.prototype.addNode = function(e, t, o, n, r) {
                this.top.children.splice(this.index++, 0, J.create(this.top, e, t, o, n, r)), this.changed = !0
            }, fe.prototype.placeWidget = function(e, t, o) {
                var n = this.index < this.top.children.length ? this.top.children[this.index] : null;
                if (!n || !n.matchesWidget(e) || e != n.widget && n.widget.type.toDOM.parentNode) {
                    var r = new U(this.top, e, t, o);
                    this.top.children.splice(this.index++, 0, r), this.changed = !0
                } else this.index++
            }, fe.prototype.addTextblockHacks = function() {
                for (var e = this.top.children[this.index - 1]; e instanceof X;) e = e.children[e.children.length - 1];
                if (!e || !(e instanceof Z) || /\n$/.test(e.node.text))
                    if (this.index < this.top.children.length && this.top.children[this.index].matchesHack()) this.index++;
                    else {
                        var t = document.createElement("br");
                        this.top.children.splice(this.index++, 0, new ee(this.top, Y, t, null)), this.changed = !0
                    }
            };
            var ge = s.safari || s.chrome && s.chrome_version < 63;

            function ye(e, t) {
                var o = e.docView.domFromPos(t, 0),
                    n = o.node,
                    r = o.offset,
                    i = r < n.childNodes.length ? n.childNodes[r] : null,
                    a = r ? n.childNodes[r - 1] : null;
                if (s.safari && i && "false" == i.contentEditable) return be(i);
                if ((!i || "false" == i.contentEditable) && (!a || "false" == a.contentEditable)) {
                    if (i) return be(i);
                    if (a) return be(a)
                }
            }

            function be(e) {
                return e.contentEditable = "true", s.safari && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e
            }

            function we(e) {
                e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null)
            }

            function Oe(e, t) {
                if (t instanceof n.qv) {
                    var o = e.docView.descAt(t.from);
                    o != e.lastSelectedViewDesc && (De(e), o && o.selectNode(), e.lastSelectedViewDesc = o)
                } else De(e)
            }

            function De(e) {
                e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = null)
            }

            function Ne(e, t, o, r) {
                return e.someProp("createSelectionBetween", (function(n) {
                    return n(e, t, o)
                })) || n.Bs.between(t, o, r)
            }

            function Se(e) {
                var t = e.root.getSelection();
                if (!t.anchorNode) return !1;
                try {
                    return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
                } catch (o) {
                    return !1
                }
            }

            function Ce(e, t) {
                var o = e.selection,
                    r = o.$anchor,
                    i = o.$head,
                    s = t > 0 ? r.max(i) : r.min(i),
                    a = s.parent.inlineContent ? s.depth ? e.doc.resolve(t > 0 ? s.after() : s.before()) : null : s;
                return a && n.Y1.findFrom(a, t)
            }

            function Me(e, t) {
                return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0
            }

            function ke(e, t, o) {
                var r = e.state.selection;
                if (!(r instanceof n.Bs)) {
                    if (r instanceof n.qv && r.node.isInline) return Me(e, new n.Bs(t > 0 ? r.$to : r.$from));
                    var i = Ce(e.state, t);
                    return !!i && Me(e, i)
                }
                if (!r.empty || o.indexOf("s") > -1) return !1;
                if (e.endOfTextblock(t > 0 ? "right" : "left")) {
                    var a = Ce(e.state, t);
                    return !!(a && a instanceof n.qv) && Me(e, a)
                }
                if (!(s.mac && o.indexOf("m") > -1)) {
                    var c, l = r.$head,
                        d = l.textOffset ? null : t < 0 ? l.nodeBefore : l.nodeAfter;
                    if (!d || d.isText) return !1;
                    var f = t < 0 ? l.pos - d.nodeSize : l.pos;
                    return !!(d.isAtom || (c = e.docView.descAt(f)) && !c.contentDOM) && (n.qv.isSelectable(d) ? Me(e, new n.qv(t < 0 ? e.state.doc.resolve(l.pos - d.nodeSize) : l)) : !!s.webkit && Me(e, new n.Bs(e.state.doc.resolve(t < 0 ? f : f + d.nodeSize))))
                }
            }

            function xe(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
            }

            function Te(e) {
                var t = e.pmViewDesc;
                return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName)
            }

            function Ae(e) {
                var t = e.root.getSelection(),
                    o = t.focusNode,
                    n = t.focusOffset;
                if (o) {
                    var r, i, a = !1;
                    for (s.gecko && 1 == o.nodeType && n < xe(o) && Te(o.childNodes[n]) && (a = !0);;)
                        if (n > 0) {
                            if (1 != o.nodeType) break;
                            var c = o.childNodes[n - 1];
                            if (Te(c)) r = o, i = --n;
                            else {
                                if (3 != c.nodeType) break;
                                n = (o = c).nodeValue.length
                            }
                        } else {
                            if (Ee(o)) break;
                            for (var l = o.previousSibling; l && Te(l);) r = o.parentNode, i = h(l), l = l.previousSibling;
                            if (l) n = xe(o = l);
                            else {
                                if ((o = o.parentNode) == e.dom) break;
                                n = 0
                            }
                        }
                    a ? Ve(e, t, o, n) : r && Ve(e, t, r, i)
                }
            }

            function Pe(e) {
                var t = e.root.getSelection(),
                    o = t.focusNode,
                    n = t.focusOffset;
                if (o) {
                    for (var r, i, s = xe(o);;)
                        if (n < s) {
                            if (1 != o.nodeType) break;
                            if (!Te(o.childNodes[n])) break;
                            r = o, i = ++n
                        } else {
                            if (Ee(o)) break;
                            for (var a = o.nextSibling; a && Te(a);) r = a.parentNode, i = h(a) + 1, a = a.nextSibling;
                            if (a) n = 0, s = xe(o = a);
                            else {
                                if ((o = o.parentNode) == e.dom) break;
                                n = s = 0
                            }
                        }
                    r && Ve(e, t, r, i)
                }
            }

            function Ee(e) {
                var t = e.pmViewDesc;
                return t && t.node && t.node.isBlock
            }

            function Ve(e, t, o, n) {
                if (O(t)) {
                    var r = document.createRange();
                    r.setEnd(o, n), r.setStart(o, n), t.removeAllRanges(), t.addRange(r)
                } else t.extend && t.extend(o, n);
                e.domObserver.setCurSelection();
                var i = e.state;
                setTimeout((function() {
                    e.state == i && ve(e)
                }), 50)
            }

            function Be(e, t, o) {
                var r = e.state.selection;
                if (r instanceof n.Bs && !r.empty || o.indexOf("s") > -1) return !1;
                if (s.mac && o.indexOf("m") > -1) return !1;
                var i = r.$from,
                    a = r.$to;
                if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                    var c = Ce(e.state, t);
                    if (c && c instanceof n.qv) return Me(e, c)
                }
                if (!i.parent.inlineContent) {
                    var l = t < 0 ? i : a,
                        d = r instanceof n.C1 ? n.Y1.near(l, t) : n.Y1.findFrom(l, t);
                    return !!d && Me(e, d)
                }
                return !1
            }

            function Re(e, t) {
                if (!(e.state.selection instanceof n.Bs)) return !0;
                var o = e.state.selection,
                    r = o.$head,
                    i = o.$anchor,
                    s = o.empty;
                if (!r.sameParent(i)) return !0;
                if (!s) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
                var a = !r.textOffset && (t < 0 ? r.nodeBefore : r.nodeAfter);
                if (a && !a.isText) {
                    var c = e.state.tr;
                    return t < 0 ? c.delete(r.pos - a.nodeSize, r.pos) : c.delete(r.pos, r.pos + a.nodeSize), e.dispatch(c), !0
                }
                return !1
            }

            function ze(e, t, o) {
                e.domObserver.stop(), t.contentEditable = o, e.domObserver.start()
            }

            function _e(e, t) {
                var o = t.keyCode,
                    n = function(e) {
                        var t = "";
                        return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t
                    }(t);
                return 8 == o || s.mac && 72 == o && "c" == n ? Re(e, -1) || Ae(e) : 46 == o || s.mac && 68 == o && "c" == n ? Re(e, 1) || Pe(e) : 13 == o || 27 == o || (37 == o ? ke(e, -1, n) || Ae(e) : 39 == o ? ke(e, 1, n) || Pe(e) : 38 == o ? Be(e, -1, n) || Ae(e) : 40 == o ? function(e) {
                    if (s.safari && !(e.state.selection.$head.parentOffset > 0)) {
                        var t = e.root.getSelection(),
                            o = t.focusNode,
                            n = t.focusOffset;
                        if (o && 1 == o.nodeType && 0 == n && o.firstChild && "false" == o.firstChild.contentEditable) {
                            var r = o.firstChild;
                            ze(e, r, !0), setTimeout((function() {
                                return ze(e, r, !1)
                            }), 20)
                        }
                    }
                }(e) || Be(e, 1, n) || Pe(e) : n == (s.mac ? "m" : "c") && (66 == o || 73 == o || 89 == o || 90 == o))
            }

            function Le(e) {
                var t = e.pmViewDesc;
                if (t) return t.parseRule();
                if ("BR" == e.nodeName && e.parentNode) {
                    if (s.safari && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                        var o = document.createElement("div");
                        return o.appendChild(document.createElement("li")), {
                            skip: o
                        }
                    }
                    if (e.parentNode.lastChild == e || s.safari && /^(tr|table)$/i.test(e.parentNode.nodeName)) return {
                        ignore: !0
                    }
                } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return {
                    ignore: !0
                }
            }

            function qe(e, t, o, i, a) {
                if (t < 0) {
                    var c = e.lastSelectionTime > Date.now() - 50 ? e.lastSelectionOrigin : null,
                        l = pe(e, c);
                    if (l && !e.state.selection.eq(l)) {
                        var d = e.state.tr.setSelection(l);
                        "pointer" == c ? d.setMeta("pointer", !0) : "key" == c && d.scrollIntoView(), e.dispatch(d)
                    }
                } else {
                    var f = e.state.doc.resolve(t),
                        h = f.sharedDepth(o);
                    t = f.before(h + 1), o = e.state.doc.resolve(o).after(h + 1);
                    var u = e.state.selection,
                        p = function(e, t, o) {
                            var n = e.docView.parseRange(t, o),
                                i = n.node,
                                a = n.fromOffset,
                                c = n.toOffset,
                                l = n.from,
                                d = n.to,
                                f = e.root.getSelection(),
                                h = null,
                                u = f.anchorNode;
                            if (u && e.dom.contains(1 == u.nodeType ? u : u.parentNode) && (h = [{
                                    node: u,
                                    offset: f.anchorOffset
                                }], O(f) || h.push({
                                    node: f.focusNode,
                                    offset: f.focusOffset
                                })), s.chrome && 8 === e.lastKeyCode)
                                for (var p = c; p > a; p--) {
                                    var m = i.childNodes[p - 1],
                                        v = m.pmViewDesc;
                                    if ("BR" == m.nodeType && !v) {
                                        c = p;
                                        break
                                    }
                                    if (!v || v.size) break
                                }
                            var g = e.state.doc,
                                y = e.someProp("domParser") || r.aw.fromSchema(e.state.schema),
                                b = g.resolve(l),
                                w = null,
                                D = y.parse(i, {
                                    topNode: b.parent,
                                    topMatch: b.parent.contentMatchAt(b.index()),
                                    topOpen: !0,
                                    from: a,
                                    to: c,
                                    preserveWhitespace: !b.parent.type.spec.code || "full",
                                    editableContent: !0,
                                    findPositions: h,
                                    ruleFromNode: Le,
                                    context: b
                                });
                            if (h && null != h[0].pos) {
                                var N = h[0].pos,
                                    S = h[1] && h[1].pos;
                                null == S && (S = N), w = {
                                    anchor: N + l,
                                    head: S + l
                                }
                            }
                            return {
                                doc: D,
                                sel: w,
                                from: l,
                                to: d
                            }
                        }(e, t, o);
                    if (s.chrome && e.cursorWrapper && p.sel && p.sel.anchor == e.cursorWrapper.deco.from) {
                        var m = e.cursorWrapper.deco.type.toDOM.nextSibling,
                            v = m && m.nodeValue ? m.nodeValue.length : 1;
                        p.sel = {
                            anchor: p.sel.anchor + v,
                            head: p.sel.anchor + v
                        }
                    }
                    var g, y, b = e.state.doc,
                        w = b.slice(p.from, p.to);
                    8 === e.lastKeyCode && Date.now() - 100 < e.lastKeyCodeTime ? (g = e.state.selection.to, y = "end") : (g = e.state.selection.from, y = "start"), e.lastKeyCode = null;
                    var N = function(e, t, o, n, r) {
                        var i = e.findDiffStart(t, o);
                        if (null == i) return null;
                        var s = e.findDiffEnd(t, o + e.size, o + t.size),
                            a = s.a,
                            c = s.b;
                        if ("end" == r) {
                            n -= a + Math.max(0, i - Math.min(a, c)) - i
                        }
                        if (a < i && e.size < t.size) {
                            c = (i -= n <= i && n >= a ? i - n : 0) + (c - a), a = i
                        } else if (c < i) {
                            a = (i -= n <= i && n >= c ? i - n : 0) + (a - c), c = i
                        }
                        return {
                            start: i,
                            endA: a,
                            endB: c
                        }
                    }(w.content, p.doc.content, p.from, g, y);
                    if (!N) {
                        if (!(i && u instanceof n.Bs && !u.empty && u.$head.sameParent(u.$anchor)) || e.composing || p.sel && p.sel.anchor != p.sel.head) {
                            if (s.ios && e.lastIOSEnter > Date.now() - 225 && a.some((function(e) {
                                    return "DIV" == e.nodeName || "P" == e.nodeName
                                })) && e.someProp("handleKeyDown", (function(t) {
                                    return t(e, D(13, "Enter"))
                                }))) return void(e.lastIOSEnter = 0);
                            if (p.sel) {
                                var S = Ie(e, e.state.doc, p.sel);
                                S && !S.eq(e.state.selection) && e.dispatch(e.state.tr.setSelection(S))
                            }
                            return
                        }
                        N = {
                            start: u.from,
                            endA: u.to,
                            endB: u.to
                        }
                    }
                    e.domChangeCount++, e.state.selection.from < e.state.selection.to && N.start == N.endB && e.state.selection instanceof n.Bs && (N.start > e.state.selection.from && N.start <= e.state.selection.from + 2 ? N.start = e.state.selection.from : N.endA < e.state.selection.to && N.endA >= e.state.selection.to - 2 && (N.endB += e.state.selection.to - N.endA, N.endA = e.state.selection.to)), s.ie && s.ie_version <= 11 && N.endB == N.start + 1 && N.endA == N.start && N.start > p.from && " \xa0" == p.doc.textBetween(N.start - p.from - 1, N.start - p.from + 1) && (N.start--, N.endA--, N.endB--);
                    var C, M = p.doc.resolveNoCache(N.start - p.from),
                        k = p.doc.resolveNoCache(N.endB - p.from),
                        x = M.sameParent(k) && M.parent.inlineContent;
                    if ((s.ios && e.lastIOSEnter > Date.now() - 225 && (!x || a.some((function(e) {
                            return "DIV" == e.nodeName || "P" == e.nodeName
                        }))) || !x && M.pos < p.doc.content.size && (C = n.Y1.findFrom(p.doc.resolve(M.pos + 1), 1, !0)) && C.head == k.pos) && e.someProp("handleKeyDown", (function(t) {
                            return t(e, D(13, "Enter"))
                        }))) e.lastIOSEnter = 0;
                    else if (e.state.selection.anchor > N.start && function(e, t, o, n, r) {
                            if (!n.parent.isTextblock || o - t <= r.pos - n.pos || Fe(n, !0, !1) < r.pos) return !1;
                            var i = e.resolve(t);
                            if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                            var s = e.resolve(Fe(i, !0, !0));
                            if (!s.parent.isTextblock || s.pos > o || Fe(s, !0, !1) < o) return !1;
                            return n.parent.content.cut(n.parentOffset).eq(s.parent.content)
                        }(b, N.start, N.endA, M, k) && e.someProp("handleKeyDown", (function(t) {
                            return t(e, D(8, "Backspace"))
                        }))) s.android && s.chrome && e.domObserver.suppressSelectionUpdates();
                    else {
                        s.android && !x && M.start() != k.start() && 0 == k.parentOffset && M.depth == k.depth && p.sel && p.sel.anchor == p.sel.head && p.sel.head == N.endA && (N.endB -= 2, k = p.doc.resolveNoCache(N.endB - p.from), setTimeout((function() {
                            e.someProp("handleKeyDown", (function(t) {
                                return t(e, D(13, "Enter"))
                            }))
                        }), 20));
                        var T, A, P, E, V = N.start,
                            B = N.endA;
                        if (x)
                            if (M.pos == k.pos) s.ie && s.ie_version <= 11 && 0 == M.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout((function() {
                                return ve(e)
                            }), 20)), T = e.state.tr.delete(V, B), A = b.resolve(N.start).marksAcross(b.resolve(N.endA));
                            else if (N.endA == N.endB && (E = b.resolve(N.start)) && (P = function(e, t) {
                                for (var o, n, i, s = e.firstChild.marks, a = t.firstChild.marks, c = s, l = a, d = 0; d < a.length; d++) c = a[d].removeFromSet(c);
                                for (var f = 0; f < s.length; f++) l = s[f].removeFromSet(l);
                                if (1 == c.length && 0 == l.length) n = c[0], o = "add", i = function(e) {
                                    return e.mark(n.addToSet(e.marks))
                                };
                                else {
                                    if (0 != c.length || 1 != l.length) return null;
                                    n = l[0], o = "remove", i = function(e) {
                                        return e.mark(n.removeFromSet(e.marks))
                                    }
                                }
                                for (var h = [], u = 0; u < t.childCount; u++) h.push(i(t.child(u)));
                                if (r.HY.from(h).eq(e)) return {
                                    mark: n,
                                    type: o
                                }
                            }(M.parent.content.cut(M.parentOffset, k.parentOffset), E.parent.content.cut(E.parentOffset, N.endA - E.start())))) T = e.state.tr, "add" == P.type ? T.addMark(V, B, P.mark) : T.removeMark(V, B, P.mark);
                        else if (M.parent.child(M.index()).isText && M.index() == k.index() - (k.textOffset ? 0 : 1)) {
                            var R = M.parent.textBetween(M.parentOffset, k.parentOffset);
                            if (e.someProp("handleTextInput", (function(t) {
                                    return t(e, V, B, R)
                                }))) return;
                            T = e.state.tr.insertText(R, V, B)
                        }
                        if (T || (T = e.state.tr.replace(V, B, p.doc.slice(N.start - p.from, N.endB - p.from))), p.sel) {
                            var z = Ie(e, T.doc, p.sel);
                            z && !(s.chrome && s.android && e.composing && z.empty && (z.head == V || z.head == T.mapping.map(B) - 1) || s.ie && z.empty && z.head == V) && T.setSelection(z)
                        }
                        A && T.ensureMarks(A), e.dispatch(T.scrollIntoView())
                    }
                }
            }

            function Ie(e, t, o) {
                return Math.max(o.anchor, o.head) > t.content.size ? null : Ne(e, t.resolve(o.anchor), t.resolve(o.head))
            }

            function Fe(e, t, o) {
                for (var n = e.depth, r = t ? e.end() : e.pos; n > 0 && (t || e.indexAfter(n) == e.node(n).childCount);) n--, r++, t = !1;
                if (o)
                    for (var i = e.node(n).maybeChild(e.indexAfter(n)); i && !i.isLeaf;) i = i.firstChild, r++;
                return r
            }

            function Ke(e, t) {
                for (var o = [], n = t.content, i = t.openStart, s = t.openEnd; i > 1 && s > 1 && 1 == n.childCount && 1 == n.firstChild.childCount;) {
                    i--, s--;
                    var a = n.firstChild;
                    o.push(a.type.name, a.attrs != a.type.defaultAttrs ? a.attrs : null), n = a.content
                }
                var c = e.someProp("clipboardSerializer") || r.PW.fromSchema(e.state.schema),
                    l = Xe(),
                    d = l.createElement("div");
                d.appendChild(c.serializeFragment(n, {
                    document: l
                }));
                for (var f, h = d.firstChild; h && 1 == h.nodeType && (f = Ue[h.nodeName.toLowerCase()]);) {
                    for (var u = f.length - 1; u >= 0; u--) {
                        for (var p = l.createElement(f[u]); d.firstChild;) p.appendChild(d.firstChild);
                        d.appendChild(p)
                    }
                    h = d.firstChild
                }
                return h && 1 == h.nodeType && h.setAttribute("data-pm-slice", i + " " + s + " " + JSON.stringify(o)), {
                    dom: d,
                    text: e.someProp("clipboardTextSerializer", (function(e) {
                        return e(t)
                    })) || t.content.textBetween(0, t.content.size, "\n\n")
                }
            }

            function $e(e, t, o, n, i) {
                var s, a, c = i.parent.type.spec.code;
                if (!o && !t) return null;
                var l = t && (n || c || !o);
                if (l) {
                    if (e.someProp("transformPastedText", (function(e) {
                            t = e(t, c || n)
                        })), c) return new r.p2(r.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0);
                    var d = e.someProp("clipboardTextParser", (function(e) {
                        return e(t, i, n)
                    }));
                    d ? a = d : (s = document.createElement("div"), t.trim().split(/(?:\r\n?|\n)+/).forEach((function(e) {
                        s.appendChild(document.createElement("p")).textContent = e
                    })))
                } else e.someProp("transformPastedHTML", (function(e) {
                    o = e(o)
                })), s = function(e) {
                    var t = /(\s*<meta [^>]*>)*/.exec(e);
                    t && (e = e.slice(t[0].length));
                    var o, n = Xe().createElement("div"),
                        r = /(?:<meta [^>]*>)*<([a-z][^>\s]+)/i.exec(e),
                        i = 0;
                    (o = r && Ue[r[1].toLowerCase()]) && (e = o.map((function(e) {
                        return "<" + e + ">"
                    })).join("") + e + o.map((function(e) {
                        return "</" + e + ">"
                    })).reverse().join(""), i = o.length);
                    n.innerHTML = e;
                    for (var s = 0; s < i; s++) n = n.firstChild;
                    return n
                }(o);
                var f = s && s.querySelector("[data-pm-slice]"),
                    h = f && /^(\d+) (\d+) (.*)/.exec(f.getAttribute("data-pm-slice"));
                if (!a) {
                    var u = e.someProp("clipboardParser") || e.someProp("domParser") || r.aw.fromSchema(e.state.schema);
                    a = u.parseSlice(s, {
                        preserveWhitespace: !(!l && !h),
                        context: i
                    })
                }
                return a = h ? function(e, t) {
                    if (!e.size) return e;
                    var o, n = e.content.firstChild.type.schema;
                    try {
                        o = JSON.parse(t)
                    } catch (d) {
                        return e
                    }
                    for (var i = e.content, s = e.openStart, a = e.openEnd, c = o.length - 2; c >= 0; c -= 2) {
                        var l = n.nodes[o[c]];
                        if (!l || l.hasRequiredAttrs()) break;
                        i = r.HY.from(l.create(o[c + 1], i)), s++, a++
                    }
                    return new r.p2(i, s, a)
                }(function(e, t, o) {
                    t < e.openStart && (e = new r.p2(Ye(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd));
                    o < e.openEnd && (e = new r.p2(Ye(e.content, 1, o, e.openEnd, 0, 0), e.openStart, o));
                    return e
                }(a, +h[1], +h[2]), h[3]) : r.p2.maxOpen(function(e, t) {
                    if (e.childCount < 2) return e;
                    for (var o = function(o) {
                            var n = t.node(o).contentMatchAt(t.index(o)),
                                i = void 0,
                                s = [];
                            if (e.forEach((function(e) {
                                    if (s) {
                                        var t, o = n.findWrapping(e.type);
                                        if (!o) return s = null;
                                        if (t = s.length && i.length && He(o, i, e, s[s.length - 1], 0)) s[s.length - 1] = t;
                                        else {
                                            s.length && (s[s.length - 1] = je(s[s.length - 1], i.length));
                                            var r = We(e, o);
                                            s.push(r), n = n.matchType(r.type, r.attrs), i = o
                                        }
                                    }
                                })), s) return {
                                v: r.HY.from(s)
                            }
                        }, n = t.depth; n >= 0; n--) {
                        var i = o(n);
                        if (i) return i.v
                    }
                    return e
                }(a.content, i), !1), e.someProp("transformPasted", (function(e) {
                    a = e(a)
                })), a
            }

            function We(e, t, o) {
                void 0 === o && (o = 0);
                for (var n = t.length - 1; n >= o; n--) e = t[n].create(null, r.HY.from(e));
                return e
            }

            function He(e, t, o, n, i) {
                if (i < e.length && i < t.length && e[i] == t[i]) {
                    var s = He(e, t, o, n.lastChild, i + 1);
                    if (s) return n.copy(n.content.replaceChild(n.childCount - 1, s));
                    if (n.contentMatchAt(n.childCount).matchType(i == e.length - 1 ? o.type : e[i + 1])) return n.copy(n.content.append(r.HY.from(We(o, e, i + 1))))
                }
            }

            function je(e, t) {
                if (0 == t) return e;
                var o = e.content.replaceChild(e.childCount - 1, je(e.lastChild, t - 1)),
                    n = e.contentMatchAt(e.childCount).fillBefore(r.HY.empty, !0);
                return e.copy(o.append(n))
            }

            function Ye(e, t, o, n, i, s) {
                var a = t < 0 ? e.firstChild : e.lastChild,
                    c = a.content;
                return i < n - 1 && (c = Ye(c, t, o, n, i + 1, s)), i >= o && (c = t < 0 ? a.contentMatchAt(0).fillBefore(c, e.childCount > 1 || s <= i).append(c) : c.append(a.contentMatchAt(a.childCount).fillBefore(r.HY.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, a.copy(c))
            }
            var Ue = {
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
                Ge = null;

            function Xe() {
                return Ge || (Ge = document.implementation.createHTMLDocument("title"))
            }
            var Je = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                },
                Qe = s.ie && s.ie_version <= 11,
                Ze = function() {
                    this.anchorNode = this.anchorOffset = this.focusNode = this.focusOffset = null
                };
            Ze.prototype.set = function(e) {
                this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset
            }, Ze.prototype.eq = function(e) {
                return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
            };
            var et = function(e, t) {
                var o = this;
                this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = window.MutationObserver && new window.MutationObserver((function(e) {
                    for (var t = 0; t < e.length; t++) o.queue.push(e[t]);
                    s.ie && s.ie_version <= 11 && e.some((function(e) {
                        return "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length
                    })) ? o.flushSoon() : o.flush()
                })), this.currentSelection = new Ze, Qe && (this.onCharData = function(e) {
                    o.queue.push({
                        target: e.target,
                        type: "characterData",
                        oldValue: e.prevValue
                    }), o.flushSoon()
                }), this.onSelectionChange = this.onSelectionChange.bind(this), this.suppressingSelectionUpdates = !1
            };
            et.prototype.flushSoon = function() {
                var e = this;
                this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout((function() {
                    e.flushingSoon = -1, e.flush()
                }), 20))
            }, et.prototype.forceFlush = function() {
                this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
            }, et.prototype.start = function() {
                this.observer && this.observer.observe(this.view.dom, Je), Qe && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
            }, et.prototype.stop = function() {
                var e = this;
                if (this.observer) {
                    var t = this.observer.takeRecords();
                    if (t.length) {
                        for (var o = 0; o < t.length; o++) this.queue.push(t[o]);
                        window.setTimeout((function() {
                            return e.flush()
                        }), 20)
                    }
                    this.observer.disconnect()
                }
                Qe && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
            }, et.prototype.connectSelection = function() {
                this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
            }, et.prototype.disconnectSelection = function() {
                this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
            }, et.prototype.suppressSelectionUpdates = function() {
                var e = this;
                this.suppressingSelectionUpdates = !0, setTimeout((function() {
                    return e.suppressingSelectionUpdates = !1
                }), 50)
            }, et.prototype.onSelectionChange = function() {
                if ((!(e = this.view).editable || e.root.activeElement == e.dom) && Se(e)) {
                    var e;
                    if (this.suppressingSelectionUpdates) return ve(this.view);
                    if (s.ie && s.ie_version <= 11 && !this.view.state.selection.empty) {
                        var t = this.view.root.getSelection();
                        if (t.focusNode && v(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)) return this.flushSoon()
                    }
                    this.flush()
                }
            }, et.prototype.setCurSelection = function() {
                this.currentSelection.set(this.view.root.getSelection())
            }, et.prototype.ignoreSelectionChange = function(e) {
                if (0 == e.rangeCount) return !0;
                var t = e.getRangeAt(0).commonAncestorContainer,
                    o = this.view.docView.nearestDesc(t);
                return o && o.ignoreMutation({
                    type: "selection",
                    target: 3 == t.nodeType ? t.parentNode : t
                }) ? (this.setCurSelection(), !0) : void 0
            }, et.prototype.flush = function() {
                if (this.view.docView && !(this.flushingSoon > -1)) {
                    var e = this.observer ? this.observer.takeRecords() : [];
                    this.queue.length && (e = this.queue.concat(e), this.queue.length = 0);
                    var t = this.view.root.getSelection(),
                        o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(t) && Se(this.view) && !this.ignoreSelectionChange(t),
                        n = -1,
                        r = -1,
                        i = !1,
                        a = [];
                    if (this.view.editable)
                        for (var c = 0; c < e.length; c++) {
                            var l = this.registerMutation(e[c], a);
                            l && (n = n < 0 ? l.from : Math.min(l.from, n), r = r < 0 ? l.to : Math.max(l.to, r), l.typeOver && (i = !0))
                        }
                    if (s.gecko && a.length > 1) {
                        var d = a.filter((function(e) {
                            return "BR" == e.nodeName
                        }));
                        if (2 == d.length) {
                            var f = d[0],
                                h = d[1];
                            f.parentNode && f.parentNode.parentNode == h.parentNode ? h.remove() : f.remove()
                        }
                    }(n > -1 || o) && (n > -1 && (this.view.docView.markDirty(n, r), function(e) {
                        if (tt) return;
                        tt = !0, "normal" == getComputedStyle(e.dom).whiteSpace && console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.")
                    }(this.view)), this.handleDOMChange(n, r, i, a), this.view.docView.dirty ? this.view.updateState(this.view.state) : this.currentSelection.eq(t) || ve(this.view), this.currentSelection.set(t))
                }
            }, et.prototype.registerMutation = function(e, t) {
                if (t.indexOf(e.target) > -1) return null;
                var o = this.view.docView.nearestDesc(e.target);
                if ("attributes" == e.type && (o == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style"))) return null;
                if (!o || o.ignoreMutation(e)) return null;
                if ("childList" == e.type) {
                    if (o.contentDOM && o.contentDOM != o.dom && !o.contentDOM.contains(e.target)) return {
                        from: o.posBefore,
                        to: o.posAfter
                    };
                    var n = e.previousSibling,
                        r = e.nextSibling;
                    if (s.ie && s.ie_version <= 11 && e.addedNodes.length)
                        for (var i = 0; i < e.addedNodes.length; i++) {
                            var a = e.addedNodes[i],
                                c = a.previousSibling,
                                l = a.nextSibling;
                            (!c || Array.prototype.indexOf.call(e.addedNodes, c) < 0) && (n = c), (!l || Array.prototype.indexOf.call(e.addedNodes, l) < 0) && (r = l)
                        }
                    for (var d = n && n.parentNode == e.target ? h(n) + 1 : 0, f = o.localPosFromDOM(e.target, d, -1), u = r && r.parentNode == e.target ? h(r) : e.target.childNodes.length, p = 0; p < e.addedNodes.length; p++) t.push(e.addedNodes[p]);
                    return {
                        from: f,
                        to: o.localPosFromDOM(e.target, u, 1)
                    }
                }
                return "attributes" == e.type ? {
                    from: o.posAtStart - o.border,
                    to: o.posAtEnd + o.border
                } : {
                    from: o.posAtStart,
                    to: o.posAtEnd,
                    typeOver: e.target.nodeValue == e.oldValue
                }
            };
            var tt = !1;
            var ot = {},
                nt = {};

            function rt(e, t) {
                e.lastSelectionOrigin = t, e.lastSelectionTime = Date.now()
            }

            function it(e) {
                e.someProp("handleDOMEvents", (function(t) {
                    for (var o in t) e.eventHandlers[o] || e.dom.addEventListener(o, e.eventHandlers[o] = function(t) {
                        return st(e, t)
                    })
                }))
            }

            function st(e, t) {
                return e.someProp("handleDOMEvents", (function(o) {
                    var n = o[t.type];
                    return !!n && (n(e, t) || t.defaultPrevented)
                }))
            }

            function at(e) {
                return {
                    left: e.clientX,
                    top: e.clientY
                }
            }

            function ct(e, t, o, n, r) {
                if (-1 == n) return !1;
                for (var i = e.state.doc.resolve(n), s = function(n) {
                        if (e.someProp(t, (function(t) {
                                return n > i.depth ? t(e, o, i.nodeAfter, i.before(n), r, !0) : t(e, o, i.node(n), i.before(n), r, !1)
                            }))) return {
                            v: !0
                        }
                    }, a = i.depth + 1; a > 0; a--) {
                    var c = s(a);
                    if (c) return c.v
                }
                return !1
            }

            function lt(e, t, o) {
                e.focused || e.focus();
                var n = e.state.tr.setSelection(t);
                "pointer" == o && n.setMeta("pointer", !0), e.dispatch(n)
            }

            function dt(e, t, o, r, i) {
                return ct(e, "handleClickOn", t, o, r) || e.someProp("handleClick", (function(o) {
                    return o(e, t, r)
                })) || (i ? function(e, t) {
                    if (-1 == t) return !1;
                    var o, r, i = e.state.selection;
                    i instanceof n.qv && (o = i.node);
                    for (var s = e.state.doc.resolve(t), a = s.depth + 1; a > 0; a--) {
                        var c = a > s.depth ? s.nodeAfter : s.node(a);
                        if (n.qv.isSelectable(c)) {
                            r = o && i.$from.depth > 0 && a >= i.$from.depth && s.before(i.$from.depth + 1) == i.$from.pos ? s.before(i.$from.depth) : s.before(a);
                            break
                        }
                    }
                    return null != r && (lt(e, n.qv.create(e.state.doc, r), "pointer"), !0)
                }(e, o) : function(e, t) {
                    if (-1 == t) return !1;
                    var o = e.state.doc.resolve(t),
                        r = o.nodeAfter;
                    return !!(r && r.isAtom && n.qv.isSelectable(r)) && (lt(e, new n.qv(o), "pointer"), !0)
                }(e, o))
            }

            function ft(e, t, o, n) {
                return ct(e, "handleDoubleClickOn", t, o, n) || e.someProp("handleDoubleClick", (function(o) {
                    return o(e, t, n)
                }))
            }

            function ht(e, t, o, r) {
                return ct(e, "handleTripleClickOn", t, o, r) || e.someProp("handleTripleClick", (function(o) {
                    return o(e, t, r)
                })) || function(e, t) {
                    var o = e.state.doc;
                    if (-1 == t) return !!o.inlineContent && (lt(e, n.Bs.create(o, 0, o.content.size), "pointer"), !0);
                    for (var r = o.resolve(t), i = r.depth + 1; i > 0; i--) {
                        var s = i > r.depth ? r.nodeAfter : r.node(i),
                            a = r.before(i);
                        if (s.inlineContent) lt(e, n.Bs.create(o, a + 1, a + 1 + s.content.size), "pointer");
                        else {
                            if (!n.qv.isSelectable(s)) continue;
                            lt(e, n.qv.create(o, a), "pointer")
                        }
                        return !0
                    }
                }(e, o)
            }

            function ut(e) {
                return wt(e)
            }
            nt.keydown = function(e, t) {
                if (e.shiftKey = 16 == t.keyCode || t.shiftKey, !vt(e, t))
                    if (e.domObserver.forceFlush(), e.lastKeyCode = t.keyCode, e.lastKeyCodeTime = Date.now(), !s.ios || 13 != t.keyCode || t.ctrlKey || t.altKey || t.metaKey) e.someProp("handleKeyDown", (function(o) {
                        return o(e, t)
                    })) || _e(e, t) ? t.preventDefault() : rt(e, "key");
                    else {
                        var o = Date.now();
                        e.lastIOSEnter = o, e.lastIOSEnterFallbackTimeout = setTimeout((function() {
                            e.lastIOSEnter == o && (e.someProp("handleKeyDown", (function(t) {
                                return t(e, D(13, "Enter"))
                            })), e.lastIOSEnter = 0)
                        }), 200)
                    }
            }, nt.keyup = function(e, t) {
                16 == t.keyCode && (e.shiftKey = !1)
            }, nt.keypress = function(e, t) {
                if (!(vt(e, t) || !t.charCode || t.ctrlKey && !t.altKey || s.mac && t.metaKey))
                    if (e.someProp("handleKeyPress", (function(o) {
                            return o(e, t)
                        }))) t.preventDefault();
                    else {
                        var o = e.state.selection;
                        if (!(o instanceof n.Bs) || !o.$from.sameParent(o.$to)) {
                            var r = String.fromCharCode(t.charCode);
                            e.someProp("handleTextInput", (function(t) {
                                return t(e, o.$from.pos, o.$to.pos, r)
                            })) || e.dispatch(e.state.tr.insertText(r).scrollIntoView()), t.preventDefault()
                        }
                    }
            };
            var pt = s.mac ? "metaKey" : "ctrlKey";
            ot.mousedown = function(e, t) {
                e.shiftKey = t.shiftKey;
                var o = ut(e),
                    n = Date.now(),
                    r = "singleClick";
                n - e.lastClick.time < 500 && function(e, t) {
                    var o = t.x - e.clientX,
                        n = t.y - e.clientY;
                    return o * o + n * n < 100
                }(t, e.lastClick) && !t[pt] && ("singleClick" == e.lastClick.type ? r = "doubleClick" : "doubleClick" == e.lastClick.type && (r = "tripleClick")), e.lastClick = {
                    time: n,
                    x: t.clientX,
                    y: t.clientY,
                    type: r
                };
                var i = e.posAtCoords(at(t));
                i && ("singleClick" == r ? e.mouseDown = new mt(e, i, t, o) : ("doubleClick" == r ? ft : ht)(e, i.pos, i.inside, t) ? t.preventDefault() : rt(e, "pointer"))
            };
            var mt = function(e, t, o, r) {
                var i, a, c = this;
                if (this.view = e, this.startDoc = e.state.doc, this.pos = t, this.event = o, this.flushed = r, this.selectNode = o[pt], this.allowDefault = o.shiftKey, t.inside > -1) i = e.state.doc.nodeAt(t.inside), a = t.inside;
                else {
                    var l = e.state.doc.resolve(t.pos);
                    i = l.parent, a = l.depth ? l.before() : 0
                }
                this.mightDrag = null;
                var d = r ? null : o.target,
                    f = d ? e.docView.nearestDesc(d, !0) : null;
                this.target = f ? f.dom : null, (i.type.spec.draggable && !1 !== i.type.spec.selectable || e.state.selection instanceof n.qv && a == e.state.selection.from) && (this.mightDrag = {
                    node: i,
                    pos: a,
                    addAttr: this.target && !this.target.draggable,
                    setUneditable: this.target && s.gecko && !this.target.hasAttribute("contentEditable")
                }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout((function() {
                    return c.target.setAttribute("contentEditable", "false")
                }), 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), rt(e, "pointer")
            };

            function vt(e, t) {
                return !!e.composing || !!(s.safari && Math.abs(t.timeStamp - e.compositionEndedAt) < 500) && (e.compositionEndedAt = -2e8, !0)
            }
            mt.prototype.done = function() {
                this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.view.mouseDown = null
            }, mt.prototype.up = function(e) {
                if (this.done(), this.view.dom.contains(3 == e.target.nodeType ? e.target.parentNode : e.target)) {
                    var t = this.pos;
                    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(at(e))), this.allowDefault || !t ? rt(this.view, "pointer") : dt(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : this.flushed || s.safari && this.mightDrag && !this.mightDrag.node.isAtom || s.chrome && !(this.view.state.selection instanceof n.Bs) && (t.pos == this.view.state.selection.from || t.pos == this.view.state.selection.to) ? (lt(this.view, n.Y1.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : rt(this.view, "pointer")
                }
            }, mt.prototype.move = function(e) {
                !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0), rt(this.view, "pointer")
            }, ot.touchdown = function(e) {
                ut(e), rt(e, "pointer")
            }, ot.contextmenu = function(e) {
                return ut(e)
            };
            var gt = s.android ? 5e3 : -1;

            function yt(e, t) {
                clearTimeout(e.composingTimeout), t > -1 && (e.composingTimeout = setTimeout((function() {
                    return wt(e)
                }), t))
            }

            function bt(e) {
                for (e.composing = !1; e.compositionNodes.length > 0;) e.compositionNodes.pop().markParentsDirty()
            }

            function wt(e, t) {
                if (e.domObserver.forceFlush(), bt(e), t || e.docView.dirty) {
                    var o = pe(e);
                    return o && !o.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(o)) : e.updateState(e.state), !0
                }
                return !1
            }
            nt.compositionstart = nt.compositionupdate = function(e) {
                if (!e.composing) {
                    e.domObserver.flush();
                    var t = e.state,
                        o = t.selection.$from;
                    if (t.selection.empty && (t.storedMarks || !o.textOffset && o.parentOffset && o.nodeBefore.marks.some((function(e) {
                            return !1 === e.type.spec.inclusive
                        })))) e.markCursor = e.state.storedMarks || o.marks(), wt(e, !0), e.markCursor = null;
                    else if (wt(e), s.gecko && t.selection.empty && o.parentOffset && !o.textOffset && o.nodeBefore.marks.length)
                        for (var n = e.root.getSelection(), r = n.focusNode, i = n.focusOffset; r && 1 == r.nodeType && 0 != i;) {
                            var a = i < 0 ? r.lastChild : r.childNodes[i - 1];
                            if (!a) break;
                            if (3 == a.nodeType) {
                                n.collapse(a, a.nodeValue.length);
                                break
                            }
                            r = a, i = -1
                        }
                    e.composing = !0
                }
                yt(e, gt)
            }, nt.compositionend = function(e, t) {
                e.composing && (e.composing = !1, e.compositionEndedAt = t.timeStamp, yt(e, 20))
            };
            var Ot = s.ie && s.ie_version < 15 || s.ios && s.webkit_version < 604;

            function Dt(e, t, o, n) {
                var i = $e(e, t, o, e.shiftKey, e.state.selection.$from);
                if (e.someProp("handlePaste", (function(t) {
                        return t(e, n, i || r.p2.empty)
                    }))) return !0;
                if (!i) return !1;
                var s = function(e) {
                        return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null
                    }(i),
                    a = s ? e.state.tr.replaceSelectionWith(s, e.shiftKey) : e.state.tr.replaceSelection(i);
                return e.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
            }
            ot.copy = nt.cut = function(e, t) {
                var o = e.state.selection,
                    n = "cut" == t.type;
                if (!o.empty) {
                    var r = Ot ? null : t.clipboardData,
                        i = Ke(e, o.content()),
                        s = i.dom,
                        a = i.text;
                    r ? (t.preventDefault(), r.clearData(), r.setData("text/html", s.innerHTML), r.setData("text/plain", a)) : function(e, t) {
                        if (e.dom.parentNode) {
                            var o = e.dom.parentNode.appendChild(document.createElement("div"));
                            o.appendChild(t), o.style.cssText = "position: fixed; left: -10000px; top: 10px";
                            var n = getSelection(),
                                r = document.createRange();
                            r.selectNodeContents(t), e.dom.blur(), n.removeAllRanges(), n.addRange(r), setTimeout((function() {
                                o.parentNode && o.parentNode.removeChild(o), e.focus()
                            }), 50)
                        }
                    }(e, s), n && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
                }
            }, nt.paste = function(e, t) {
                var o = Ot ? null : t.clipboardData;
                o && Dt(e, o.getData("text/plain"), o.getData("text/html"), t) ? t.preventDefault() : function(e, t) {
                    if (e.dom.parentNode) {
                        var o = e.shiftKey || e.state.selection.$from.parent.type.spec.code,
                            n = e.dom.parentNode.appendChild(document.createElement(o ? "textarea" : "div"));
                        o || (n.contentEditable = "true"), n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout((function() {
                            e.focus(), n.parentNode && n.parentNode.removeChild(n), o ? Dt(e, n.value, null, t) : Dt(e, n.textContent, n.innerHTML, t)
                        }), 50)
                    }
                }(e, t)
            };
            var Nt = function(e, t) {
                    this.slice = e, this.move = t
                },
                St = s.mac ? "altKey" : "ctrlKey";
            for (var Ct in ot.dragstart = function(e, t) {
                    var o = e.mouseDown;
                    if (o && o.done(), t.dataTransfer) {
                        var r = e.state.selection,
                            i = r.empty ? null : e.posAtCoords(at(t));
                        if (i && i.pos >= r.from && i.pos <= (r instanceof n.qv ? r.to - 1 : r.to));
                        else if (o && o.mightDrag) e.dispatch(e.state.tr.setSelection(n.qv.create(e.state.doc, o.mightDrag.pos)));
                        else if (t.target && 1 == t.target.nodeType) {
                            var s = e.docView.nearestDesc(t.target, !0);
                            if (!s || !s.node.type.spec.draggable || s == e.docView) return;
                            e.dispatch(e.state.tr.setSelection(n.qv.create(e.state.doc, s.posBefore)))
                        }
                        var a = e.state.selection.content(),
                            c = Ke(e, a),
                            l = c.dom,
                            d = c.text;
                        t.dataTransfer.clearData(), t.dataTransfer.setData(Ot ? "Text" : "text/html", l.innerHTML), Ot || t.dataTransfer.setData("text/plain", d), e.dragging = new Nt(a, !t[St])
                    }
                }, ot.dragend = function(e) {
                    var t = e.dragging;
                    window.setTimeout((function() {
                        e.dragging == t && (e.dragging = null)
                    }), 50)
                }, nt.dragover = nt.dragenter = function(e, t) {
                    return t.preventDefault()
                }, nt.drop = function(e, t) {
                    var o = e.dragging;
                    if (e.dragging = null, t.dataTransfer) {
                        var s = e.posAtCoords(at(t));
                        if (s) {
                            var a = e.state.doc.resolve(s.pos);
                            if (a) {
                                var c = o && o.slice || $e(e, t.dataTransfer.getData(Ot ? "Text" : "text/plain"), Ot ? null : t.dataTransfer.getData("text/html"), !1, a),
                                    l = o && !t[St];
                                if (e.someProp("handleDrop", (function(o) {
                                        return o(e, t, c || r.p2.empty, l)
                                    }))) t.preventDefault();
                                else if (c) {
                                    t.preventDefault();
                                    var d = c ? (0, i.nj)(e.state.doc, a.pos, c) : a.pos;
                                    null == d && (d = a.pos);
                                    var f = e.state.tr;
                                    l && f.deleteSelection();
                                    var h = f.mapping.map(d),
                                        u = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
                                        p = f.doc;
                                    if (u ? f.replaceRangeWith(h, h, c.content.firstChild) : f.replaceRange(h, h, c), !f.doc.eq(p)) {
                                        var m = f.doc.resolve(h);
                                        if (u && n.qv.isSelectable(c.content.firstChild) && m.nodeAfter && m.nodeAfter.sameMarkup(c.content.firstChild)) f.setSelection(new n.qv(m));
                                        else {
                                            var v = f.mapping.map(d);
                                            f.mapping.maps[f.mapping.maps.length - 1].forEach((function(e, t, o, n) {
                                                return v = n
                                            })), f.setSelection(Ne(e, m, f.doc.resolve(v)))
                                        }
                                        e.focus(), e.dispatch(f.setMeta("uiEvent", "drop"))
                                    }
                                }
                            }
                        }
                    }
                }, ot.focus = function(e) {
                    e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout((function() {
                        e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.root.getSelection()) && ve(e)
                    }), 20))
                }, ot.blur = function(e) {
                    e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), e.domObserver.currentSelection.set({}), e.focused = !1)
                }, ot.beforeinput = function(e, t) {
                    if (s.chrome && s.android && "deleteContentBackward" == t.inputType) {
                        var o = e.domChangeCount;
                        setTimeout((function() {
                            if (e.domChangeCount == o && (e.dom.blur(), e.focus(), !e.someProp("handleKeyDown", (function(t) {
                                    return t(e, D(8, "Backspace"))
                                })))) {
                                var t = e.state.selection.$cursor;
                                t && t.pos > 0 && e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView())
                            }
                        }), 50)
                    }
                }, nt) ot[Ct] = nt[Ct];

            function Mt(e, t) {
                if (e == t) return !0;
                for (var o in e)
                    if (e[o] !== t[o]) return !1;
                for (var n in t)
                    if (!(n in e)) return !1;
                return !0
            }
            var kt = function(e, t) {
                this.spec = t || Vt, this.side = this.spec.side || 0, this.toDOM = e
            };
            kt.prototype.map = function(e, t, o, n) {
                var r = e.mapResult(t.from + n, this.side < 0 ? -1 : 1),
                    i = r.pos;
                return r.deleted ? null : new At(i - o, i - o, this)
            }, kt.prototype.valid = function() {
                return !0
            }, kt.prototype.eq = function(e) {
                return this == e || e instanceof kt && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Mt(this.spec, e.spec))
            };
            var xt = function(e, t) {
                this.spec = t || Vt, this.attrs = e
            };
            xt.prototype.map = function(e, t, o, n) {
                var r = e.map(t.from + n, this.spec.inclusiveStart ? -1 : 1) - o,
                    i = e.map(t.to + n, this.spec.inclusiveEnd ? 1 : -1) - o;
                return r >= i ? null : new At(r, i, this)
            }, xt.prototype.valid = function(e, t) {
                return t.from < t.to
            }, xt.prototype.eq = function(e) {
                return this == e || e instanceof xt && Mt(this.attrs, e.attrs) && Mt(this.spec, e.spec)
            }, xt.is = function(e) {
                return e.type instanceof xt
            };
            var Tt = function(e, t) {
                this.spec = t || Vt, this.attrs = e
            };
            Tt.prototype.map = function(e, t, o, n) {
                var r = e.mapResult(t.from + n, 1);
                if (r.deleted) return null;
                var i = e.mapResult(t.to + n, -1);
                return i.deleted || i.pos <= r.pos ? null : new At(r.pos - o, i.pos - o, this)
            }, Tt.prototype.valid = function(e, t) {
                var o = e.content.findIndex(t.from),
                    n = o.index,
                    r = o.offset;
                return r == t.from && r + e.child(n).nodeSize == t.to
            }, Tt.prototype.eq = function(e) {
                return this == e || e instanceof Tt && Mt(this.attrs, e.attrs) && Mt(this.spec, e.spec)
            };
            var At = function(e, t, o) {
                    this.from = e, this.to = t, this.type = o
                },
                Pt = {
                    spec: {
                        configurable: !0
                    },
                    inline: {
                        configurable: !0
                    }
                };
            At.prototype.copy = function(e, t) {
                return new At(e, t, this.type)
            }, At.prototype.eq = function(e, t) {
                return void 0 === t && (t = 0), this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
            }, At.prototype.map = function(e, t, o) {
                return this.type.map(e, this, t, o)
            }, At.widget = function(e, t, o) {
                return new At(e, e, new kt(t, o))
            }, At.inline = function(e, t, o, n) {
                return new At(e, t, new xt(o, n))
            }, At.node = function(e, t, o, n) {
                return new At(e, t, new Tt(o, n))
            }, Pt.spec.get = function() {
                return this.type.spec
            }, Pt.inline.get = function() {
                return this.type instanceof xt
            }, Object.defineProperties(At.prototype, Pt);
            var Et = [],
                Vt = {},
                Bt = function(e, t) {
                    this.local = e && e.length ? e : Et, this.children = t && t.length ? t : Et
                };
            Bt.create = function(e, t) {
                return t.length ? It(t, e, 0, Vt) : Rt
            }, Bt.prototype.find = function(e, t, o) {
                var n = [];
                return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, n, 0, o), n
            }, Bt.prototype.findInner = function(e, t, o, n, r) {
                for (var i = 0; i < this.local.length; i++) {
                    var s = this.local[i];
                    s.from <= t && s.to >= e && (!r || r(s.spec)) && o.push(s.copy(s.from + n, s.to + n))
                }
                for (var a = 0; a < this.children.length; a += 3)
                    if (this.children[a] < t && this.children[a + 1] > e) {
                        var c = this.children[a] + 1;
                        this.children[a + 2].findInner(e - c, t - c, o, n + c, r)
                    }
            }, Bt.prototype.map = function(e, t, o) {
                return this == Rt || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, o || Vt)
            }, Bt.prototype.mapInner = function(e, t, o, n, r) {
                for (var i, s = 0; s < this.local.length; s++) {
                    var a = this.local[s].map(e, o, n);
                    a && a.type.valid(t, a) ? (i || (i = [])).push(a) : r.onRemove && r.onRemove(this.local[s].spec)
                }
                return this.children.length ? function(e, t, o, n, r, i, s) {
                    for (var a = e.slice(), c = function(e, t, o, n) {
                            for (var s = 0; s < a.length; s += 3) {
                                var c = a[s + 1],
                                    l = void 0; - 1 == c || e > c + i || (t >= a[s] + i ? a[s + 1] = -1 : o >= r && (l = n - o - (t - e)) && (a[s] += l, a[s + 1] += l))
                            }
                        }, l = 0; l < o.maps.length; l++) o.maps[l].forEach(c);
                    for (var d = !1, f = 0; f < a.length; f += 3)
                        if (-1 == a[f + 1]) {
                            var h = o.map(e[f] + i),
                                u = h - r;
                            if (u < 0 || u >= n.content.size) {
                                d = !0;
                                continue
                            }
                            var p = o.map(e[f + 1] + i, -1) - r,
                                m = n.content.findIndex(u),
                                v = m.index,
                                g = m.offset,
                                y = n.maybeChild(v);
                            if (y && g == u && g + y.nodeSize == p) {
                                var b = a[f + 2].mapInner(o, y, h + 1, e[f] + i + 1, s);
                                b != Rt ? (a[f] = u, a[f + 1] = p, a[f + 2] = b) : (a[f + 1] = -2, d = !0)
                            } else d = !0
                        }
                    if (d) {
                        var w = function(e, t, o, n, r, i, s) {
                                function a(e, t) {
                                    for (var i = 0; i < e.local.length; i++) {
                                        var c = e.local[i].map(n, r, t);
                                        c ? o.push(c) : s.onRemove && s.onRemove(e.local[i].spec)
                                    }
                                    for (var l = 0; l < e.children.length; l += 3) a(e.children[l + 2], e.children[l] + t + 1)
                                }
                                for (var c = 0; c < e.length; c += 3) - 1 == e[c + 1] && a(e[c + 2], t[c] + i + 1);
                                return o
                            }(a, e, t || [], o, r, i, s),
                            O = It(w, n, 0, s);
                        t = O.local;
                        for (var D = 0; D < a.length; D += 3) a[D + 1] < 0 && (a.splice(D, 3), D -= 3);
                        for (var N = 0, S = 0; N < O.children.length; N += 3) {
                            for (var C = O.children[N]; S < a.length && a[S] < C;) S += 3;
                            a.splice(S, 0, O.children[N], O.children[N + 1], O.children[N + 2])
                        }
                    }
                    return new Bt(t && t.sort(Ft), a)
                }(this.children, i, e, t, o, n, r) : i ? new Bt(i.sort(Ft)) : Rt
            }, Bt.prototype.add = function(e, t) {
                return t.length ? this == Rt ? Bt.create(e, t) : this.addInner(e, t, 0) : this
            }, Bt.prototype.addInner = function(e, t, o) {
                var n, r = this,
                    i = 0;
                e.forEach((function(e, s) {
                    var a, c = s + o;
                    if (a = Lt(t, e, c)) {
                        for (n || (n = r.children.slice()); i < n.length && n[i] < s;) i += 3;
                        n[i] == s ? n[i + 2] = n[i + 2].addInner(e, a, c + 1) : n.splice(i, 0, s, s + e.nodeSize, It(a, e, c + 1, Vt)), i += 3
                    }
                }));
                for (var s = _t(i ? qt(t) : t, -o), a = 0; a < s.length; a++) s[a].type.valid(e, s[a]) || s.splice(a--, 1);
                return new Bt(s.length ? this.local.concat(s).sort(Ft) : this.local, n || this.children)
            }, Bt.prototype.remove = function(e) {
                return 0 == e.length || this == Rt ? this : this.removeInner(e, 0)
            }, Bt.prototype.removeInner = function(e, t) {
                for (var o = this.children, n = this.local, r = 0; r < o.length; r += 3) {
                    for (var i = void 0, s = o[r] + t, a = o[r + 1] + t, c = 0, l = void 0; c < e.length; c++)(l = e[c]) && l.from > s && l.to < a && (e[c] = null, (i || (i = [])).push(l));
                    if (i) {
                        o == this.children && (o = this.children.slice());
                        var d = o[r + 2].removeInner(i, s + 1);
                        d != Rt ? o[r + 2] = d : (o.splice(r, 3), r -= 3)
                    }
                }
                if (n.length)
                    for (var f = 0, h = void 0; f < e.length; f++)
                        if (h = e[f])
                            for (var u = 0; u < n.length; u++) n[u].eq(h, t) && (n == this.local && (n = this.local.slice()), n.splice(u--, 1));
                return o == this.children && n == this.local ? this : n.length || o.length ? new Bt(n, o) : Rt
            }, Bt.prototype.forChild = function(e, t) {
                if (this == Rt) return this;
                if (t.isLeaf) return Bt.empty;
                for (var o, n, r = 0; r < this.children.length; r += 3)
                    if (this.children[r] >= e) {
                        this.children[r] == e && (o = this.children[r + 2]);
                        break
                    }
                for (var i = e + 1, s = i + t.content.size, a = 0; a < this.local.length; a++) {
                    var c = this.local[a];
                    if (c.from < s && c.to > i && c.type instanceof xt) {
                        var l = Math.max(i, c.from) - i,
                            d = Math.min(s, c.to) - i;
                        l < d && (n || (n = [])).push(c.copy(l, d))
                    }
                }
                if (n) {
                    var f = new Bt(n.sort(Ft));
                    return o ? new zt([f, o]) : f
                }
                return o || Rt
            }, Bt.prototype.eq = function(e) {
                if (this == e) return !0;
                if (!(e instanceof Bt) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
                for (var t = 0; t < this.local.length; t++)
                    if (!this.local[t].eq(e.local[t])) return !1;
                for (var o = 0; o < this.children.length; o += 3)
                    if (this.children[o] != e.children[o] || this.children[o + 1] != e.children[o + 1] || !this.children[o + 2].eq(e.children[o + 2])) return !1;
                return !0
            }, Bt.prototype.locals = function(e) {
                return Kt(this.localsInner(e))
            }, Bt.prototype.localsInner = function(e) {
                if (this == Rt) return Et;
                if (e.inlineContent || !this.local.some(xt.is)) return this.local;
                for (var t = [], o = 0; o < this.local.length; o++) this.local[o].type instanceof xt || t.push(this.local[o]);
                return t
            };
            var Rt = new Bt;
            Bt.empty = Rt, Bt.removeOverlap = Kt;
            var zt = function(e) {
                this.members = e
            };

            function _t(e, t) {
                if (!t || !e.length) return e;
                for (var o = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    o.push(new At(r.from + t, r.to + t, r.type))
                }
                return o
            }

            function Lt(e, t, o) {
                if (t.isLeaf) return null;
                for (var n = o + t.nodeSize, r = null, i = 0, s = void 0; i < e.length; i++)(s = e[i]) && s.from > o && s.to < n && ((r || (r = [])).push(s), e[i] = null);
                return r
            }

            function qt(e) {
                for (var t = [], o = 0; o < e.length; o++) null != e[o] && t.push(e[o]);
                return t
            }

            function It(e, t, o, n) {
                var r = [],
                    i = !1;
                t.forEach((function(t, s) {
                    var a = Lt(e, t, s + o);
                    if (a) {
                        i = !0;
                        var c = It(a, t, o + s + 1, n);
                        c != Rt && r.push(s, s + t.nodeSize, c)
                    }
                }));
                for (var s = _t(i ? qt(e) : e, -o).sort(Ft), a = 0; a < s.length; a++) s[a].type.valid(t, s[a]) || (n.onRemove && n.onRemove(s[a].spec), s.splice(a--, 1));
                return s.length || r.length ? new Bt(s, r) : Rt
            }

            function Ft(e, t) {
                return e.from - t.from || e.to - t.to
            }

            function Kt(e) {
                for (var t = e, o = 0; o < t.length - 1; o++) {
                    var n = t[o];
                    if (n.from != n.to)
                        for (var r = o + 1; r < t.length; r++) {
                            var i = t[r];
                            if (i.from != n.from) {
                                i.from < n.to && (t == e && (t = e.slice()), t[o] = n.copy(n.from, i.from), $t(t, r, n.copy(i.from, n.to)));
                                break
                            }
                            i.to != n.to && (t == e && (t = e.slice()), t[r] = i.copy(i.from, n.to), $t(t, r + 1, i.copy(n.to, i.to)))
                        }
                }
                return t
            }

            function $t(e, t, o) {
                for (; t < e.length && Ft(o, e[t]) > 0;) t++;
                e.splice(t, 0, o)
            }

            function Wt(e) {
                var t = [];
                return e.someProp("decorations", (function(o) {
                    var n = o(e.state);
                    n && n != Rt && t.push(n)
                })), e.cursorWrapper && t.push(Bt.create(e.state.doc, [e.cursorWrapper.deco])), zt.from(t)
            }
            zt.prototype.forChild = function(e, t) {
                if (t.isLeaf) return Bt.empty;
                for (var o = [], n = 0; n < this.members.length; n++) {
                    var r = this.members[n].forChild(e, t);
                    r != Rt && (r instanceof zt ? o = o.concat(r.members) : o.push(r))
                }
                return zt.from(o)
            }, zt.prototype.eq = function(e) {
                if (!(e instanceof zt) || e.members.length != this.members.length) return !1;
                for (var t = 0; t < this.members.length; t++)
                    if (!this.members[t].eq(e.members[t])) return !1;
                return !0
            }, zt.prototype.locals = function(e) {
                for (var t, o = !0, n = 0; n < this.members.length; n++) {
                    var r = this.members[n].localsInner(e);
                    if (r.length)
                        if (t) {
                            o && (t = t.slice(), o = !1);
                            for (var i = 0; i < r.length; i++) t.push(r[i])
                        } else t = r
                }
                return t ? Kt(o ? t : t.sort(Ft)) : Et
            }, zt.from = function(e) {
                switch (e.length) {
                    case 0:
                        return Rt;
                    case 1:
                        return e[0];
                    default:
                        return new zt(e)
                }
            };
            var Ht = function(e, t) {
                    this._props = t, this.state = t.state, this.dispatch = this.dispatch.bind(this), this._root = null, this.focused = !1, this.trackWrites = null, this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : e.apply ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Gt(this), this.markCursor = null, this.cursorWrapper = null, Ut(this), this.nodeViews = Xt(this), this.docView = Q(this.state.doc, Yt(this), Wt(this), this.dom, this), this.lastSelectedViewDesc = null, this.dragging = null,
                        function(e) {
                            e.shiftKey = !1, e.mouseDown = null, e.lastKeyCode = null, e.lastKeyCodeTime = 0, e.lastClick = {
                                time: 0,
                                x: 0,
                                y: 0,
                                type: ""
                            }, e.lastSelectionOrigin = null, e.lastSelectionTime = 0, e.lastIOSEnter = 0, e.lastIOSEnterFallbackTimeout = null, e.composing = !1, e.composingTimeout = null, e.compositionNodes = [], e.compositionEndedAt = -2e8, e.domObserver = new et(e, (function(t, o, n, r) {
                                return qe(e, t, o, n, r)
                            })), e.domObserver.start(), e.domChangeCount = 0, e.eventHandlers = Object.create(null);
                            var t = function(t) {
                                var o = ot[t];
                                e.dom.addEventListener(t, e.eventHandlers[t] = function(t) {
                                    ! function(e, t) {
                                        if (!t.bubbles) return !0;
                                        if (t.defaultPrevented) return !1;
                                        for (var o = t.target; o != e.dom; o = o.parentNode)
                                            if (!o || 11 == o.nodeType || o.pmViewDesc && o.pmViewDesc.stopEvent(t)) return !1;
                                        return !0
                                    }(e, t) || st(e, t) || !e.editable && t.type in nt || o(e, t)
                                })
                            };
                            for (var o in ot) t(o);
                            s.safari && e.dom.addEventListener("input", (function() {
                                return null
                            })), it(e)
                        }(this), this.pluginViews = [], this.updatePluginViews()
                },
                jt = {
                    props: {
                        configurable: !0
                    },
                    root: {
                        configurable: !0
                    }
                };

            function Yt(e) {
                var t = Object.create(null);
                return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (function(o) {
                    if ("function" == typeof o && (o = o(e.state)), o)
                        for (var n in o) "class" == n ? t.class += " " + o[n] : t[n] || "contenteditable" == n || "nodeName" == n || (t[n] = String(o[n]))
                })), [At.node(0, e.state.doc.content.size, t)]
            }

            function Ut(e) {
                if (e.markCursor) {
                    var t = document.createElement("img");
                    t.setAttribute("mark-placeholder", "true"), e.cursorWrapper = {
                        dom: t,
                        deco: At.widget(e.state.selection.head, t, {
                            raw: !0,
                            marks: e.markCursor
                        })
                    }
                } else e.cursorWrapper = null
            }

            function Gt(e) {
                return !e.someProp("editable", (function(t) {
                    return !1 === t(e.state)
                }))
            }

            function Xt(e) {
                var t = {};
                return e.someProp("nodeViews", (function(e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(t, o) || (t[o] = e[o])
                })), t
            }
            jt.props.get = function() {
                if (this._props.state != this.state) {
                    var e = this._props;
                    for (var t in this._props = {}, e) this._props[t] = e[t];
                    this._props.state = this.state
                }
                return this._props
            }, Ht.prototype.update = function(e) {
                e.handleDOMEvents != this._props.handleDOMEvents && it(this), this._props = e, this.updateStateInner(e.state, !0)
            }, Ht.prototype.setProps = function(e) {
                var t = {};
                for (var o in this._props) t[o] = this._props[o];
                for (var n in t.state = this.state, e) t[n] = e[n];
                this.update(t)
            }, Ht.prototype.updateState = function(e) {
                this.updateStateInner(e, this.state.plugins != e.plugins)
            }, Ht.prototype.updateStateInner = function(e, t) {
                var o = this,
                    r = this.state,
                    i = !1,
                    a = !1;
                if (e.storedMarks && this.composing && (bt(this), a = !0), this.state = e, t) {
                    var c = Xt(this);
                    (function(e, t) {
                        var o = 0,
                            n = 0;
                        for (var r in e) {
                            if (e[r] != t[r]) return !0;
                            o++
                        }
                        for (var i in t) n++;
                        return o != n
                    })(c, this.nodeViews) && (this.nodeViews = c, i = !0), it(this)
                }
                this.editable = Gt(this), Ut(this);
                var l = Wt(this),
                    d = Yt(this),
                    f = t ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve",
                    h = i || !this.docView.matchesNode(e.doc, d, l);
                !h && e.selection.eq(r.selection) || (a = !0);
                var u = "preserve" == f && a && null == this.dom.style.overflowAnchor && function(e) {
                    for (var t, o, n = e.dom.getBoundingClientRect(), r = Math.max(0, n.top), i = (n.left + n.right) / 2, s = r + 1; s < Math.min(innerHeight, n.bottom); s += 5) {
                        var a = e.root.elementFromPoint(i, s);
                        if (a != e.dom && e.dom.contains(a)) {
                            var c = a.getBoundingClientRect();
                            if (c.top >= r - 20) {
                                t = a, o = c.top;
                                break
                            }
                        }
                    }
                    return {
                        refDOM: t,
                        refTop: o,
                        stack: k(e.dom)
                    }
                }(this);
                if (a) {
                    this.domObserver.stop();
                    var p = h && (s.ie || s.chrome) && !this.composing && !r.selection.empty && !e.selection.empty && function(e, t) {
                        var o = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
                        return e.$anchor.start(o) != t.$anchor.start(o)
                    }(r.selection, e.selection);
                    if (h) {
                        var m = s.chrome ? this.trackWrites = this.root.getSelection().focusNode : null;
                        !i && this.docView.update(e.doc, d, l, this) || (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Q(e.doc, d, l, this.dom, this)), m && !this.trackWrites && (p = !0)
                    }
                    p || !(this.mouseDown && this.domObserver.currentSelection.eq(this.root.getSelection()) && function(e) {
                        var t = e.docView.domFromPos(e.state.selection.anchor, 0),
                            o = e.root.getSelection();
                        return v(t.node, t.offset, o.anchorNode, o.anchorOffset)
                    }(this)) ? ve(this, p) : (Oe(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start()
                }
                if (this.updatePluginViews(r), "reset" == f) this.dom.scrollTop = 0;
                else if ("to selection" == f) {
                    var g = this.root.getSelection().focusNode;
                    this.someProp("handleScrollToSelection", (function(e) {
                        return e(o)
                    })) || (e.selection instanceof n.qv ? M(this, this.docView.domAfterPos(e.selection.from).getBoundingClientRect(), g) : M(this, this.coordsAtPos(e.selection.head, 1), g))
                } else u && function(e) {
                    var t = e.refDOM,
                        o = e.refTop,
                        n = e.stack,
                        r = t ? t.getBoundingClientRect().top : 0;
                    x(n, 0 == r ? 0 : r - o)
                }(u)
            }, Ht.prototype.destroyPluginViews = function() {
                for (var e; e = this.pluginViews.pop();) e.destroy && e.destroy()
            }, Ht.prototype.updatePluginViews = function(e) {
                if (e && e.plugins == this.state.plugins)
                    for (var t = 0; t < this.pluginViews.length; t++) {
                        var o = this.pluginViews[t];
                        o.update && o.update(this, e)
                    } else {
                        this.destroyPluginViews();
                        for (var n = 0; n < this.state.plugins.length; n++) {
                            var r = this.state.plugins[n];
                            r.spec.view && this.pluginViews.push(r.spec.view(this))
                        }
                    }
            }, Ht.prototype.someProp = function(e, t) {
                var o, n = this._props && this._props[e];
                if (null != n && (o = t ? t(n) : n)) return o;
                var r = this.state.plugins;
                if (r)
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i].props[e];
                        if (null != s && (o = t ? t(s) : s)) return o
                    }
            }, Ht.prototype.hasFocus = function() {
                return this.root.activeElement == this.dom
            }, Ht.prototype.focus = function() {
                this.domObserver.stop(), this.editable && function(e) {
                    if (e.setActive) return e.setActive();
                    if (T) return e.focus(T);
                    var t = k(e);
                    e.focus(null == T ? {
                        get preventScroll() {
                            return T = {
                                preventScroll: !0
                            }, !0
                        }
                    } : void 0), T || (T = !1, x(t, 0))
                }(this.dom), ve(this), this.domObserver.start()
            }, jt.root.get = function() {
                var e = this._root;
                if (null == e)
                    for (var t = this.dom.parentNode; t; t = t.parentNode)
                        if (9 == t.nodeType || 11 == t.nodeType && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = function() {
                            return document.getSelection()
                        }), this._root = t;
                return e || document
            }, Ht.prototype.posAtCoords = function(e) {
                return V(this, e)
            }, Ht.prototype.coordsAtPos = function(e, t) {
                return void 0 === t && (t = 1), z(this, e, t)
            }, Ht.prototype.domAtPos = function(e, t) {
                return void 0 === t && (t = 0), this.docView.domFromPos(e, t)
            }, Ht.prototype.nodeDOM = function(e) {
                var t = this.docView.descAt(e);
                return t ? t.nodeDOM : null
            }, Ht.prototype.posAtDOM = function(e, t, o) {
                void 0 === o && (o = -1);
                var n = this.docView.posFromDOM(e, t, o);
                if (null == n) throw new RangeError("DOM position not inside the editor");
                return n
            }, Ht.prototype.endOfTextblock = function(e, t) {
                return W(this, t || this.state, e)
            }, Ht.prototype.destroy = function() {
                this.docView && (! function(e) {
                    for (var t in e.domObserver.stop(), e.eventHandlers) e.dom.removeEventListener(t, e.eventHandlers[t]);
                    clearTimeout(e.composingTimeout), clearTimeout(e.lastIOSEnterFallbackTimeout)
                }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Wt(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null)
            }, Ht.prototype.dispatchEvent = function(e) {
                return function(e, t) {
                    st(e, t) || !ot[t.type] || !e.editable && t.type in nt || ot[t.type](e, t)
                }(this, e)
            }, Ht.prototype.dispatch = function(e) {
                var t = this._props.dispatchTransaction;
                t ? t.call(this, e) : this.updateState(this.state.apply(e))
            }, Object.defineProperties(Ht.prototype, jt)
        }
    }
]);