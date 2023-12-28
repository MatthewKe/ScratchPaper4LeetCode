(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3082], {
        20456: function(e, t, n) {
            var r, o, i, a, l, s, c, u, d, p, f, h, m, g, v, k, y, b, w, x, C, S, M, E, L, A, I, T, O, R, P, D, N, _, B, z, H, j, V, $, W, F, U, Z, q, G, K, J, X = n(15164),
                Y = n(80983),
                Q = n(1513),
                ee = n(22980),
                te = n(17902),
                ne = n(89200),
                re = n(84371),
                oe = n(14556),
                ie = n(31377),
                ae = n(55667),
                le = n(6309),
                se = n(74610);

            function ce(e) {
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
                    var n, r = ae(e);
                    if (t) {
                        var o = ae(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ie(this, n)
                }
            }

            function ue(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return de(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return de(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
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
                        l = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function de(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n(43969), n(52799), n(80829), n(9397), n(1743), n(52799), n(80829), n(9397), n(1743);
            var pe, fe = Object.create,
                he = Object.defineProperty,
                me = Object.defineProperties,
                ge = Object.getOwnPropertyDescriptor,
                ve = Object.getOwnPropertyDescriptors,
                ke = Object.getOwnPropertyNames,
                ye = Object.getOwnPropertySymbols,
                be = Object.getPrototypeOf,
                we = Object.prototype.hasOwnProperty,
                xe = Object.prototype.propertyIsEnumerable,
                Ce = function(e, t, n) {
                    return t in e ? he(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Se = function(e, t) {
                    for (var n in t || (t = {})) we.call(t, n) && Ce(e, n, t[n]);
                    if (ye) {
                        var r, o = ue(ye(t));
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                n = r.value;
                                xe.call(t, n) && Ce(e, n, t[n])
                            }
                        } catch (i) {
                            o.e(i)
                        } finally {
                            o.f()
                        }
                    }
                    return e
                },
                Me = function(e, t) {
                    return me(e, ve(t))
                },
                Ee = function(e, t) {
                    var n = {};
                    for (var r in e) we.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && ye) {
                        var o, i = ue(ye(e));
                        try {
                            for (i.s(); !(o = i.n()).done;) {
                                r = o.value;
                                t.indexOf(r) < 0 && xe.call(e, r) && (n[r] = e[r])
                            }
                        } catch (a) {
                            i.e(a)
                        } finally {
                            i.f()
                        }
                    }
                    return n
                },
                Le = function(e, t) {
                    return function() {
                        return t || (0, e[ke(e)[0]])((t = {
                            exports: {}
                        }).exports, t), t.exports
                    }
                },
                Ae = function(e, t, n, r) {
                    if (t && "object" === typeof t || "function" === typeof t) {
                        var o, i = ue(ke(t));
                        try {
                            var a = function() {
                                var i = o.value;
                                we.call(e, i) || i === n || he(e, i, {
                                    get: function() {
                                        return t[i]
                                    },
                                    enumerable: !(r = ge(t, i)) || r.enumerable
                                })
                            };
                            for (i.s(); !(o = i.n()).done;) a()
                        } catch (l) {
                            i.e(l)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                Ie = function(e, t, n) {
                    return n = null != e ? fe(be(e)) : {}, Ae(!t && e && e.__esModule ? n : he(n, "default", {
                        value: e,
                        enumerable: !0
                    }), e)
                },
                Te = Le({
                    "node_modules/react-is/cjs/react-is.production.min.js": function(e) {
                        "use strict";
                        var t, n = 60103,
                            r = 60106,
                            o = 60107,
                            i = 60108,
                            a = 60114,
                            l = 60109,
                            s = 60110,
                            c = 60112,
                            u = 60113,
                            d = 60120,
                            p = 60115,
                            f = 60116,
                            h = 60121,
                            m = 60122,
                            g = 60117,
                            v = 60129,
                            k = 60131;

                        function y(e) {
                            if ("object" === typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case n:
                                        switch (e = e.type) {
                                            case o:
                                            case a:
                                            case i:
                                            case u:
                                            case d:
                                                return e;
                                            default:
                                                switch (e = e && e.$$typeof) {
                                                    case s:
                                                    case c:
                                                    case f:
                                                    case p:
                                                    case l:
                                                        return e;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case r:
                                        return t
                                }
                            }
                        }
                        "function" === typeof Symbol && Symbol.for && (t = Symbol.for, n = t("react.element"), r = t("react.portal"), o = t("react.fragment"), i = t("react.strict_mode"), a = t("react.profiler"), l = t("react.provider"), s = t("react.context"), c = t("react.forward_ref"), u = t("react.suspense"), d = t("react.suspense_list"), p = t("react.memo"), f = t("react.lazy"), h = t("react.block"), m = t("react.server.block"), g = t("react.fundamental"), v = t("react.debug_trace_mode"), k = t("react.legacy_hidden"));
                        var b = l,
                            w = n,
                            x = c,
                            C = o,
                            S = f,
                            M = p,
                            E = r,
                            L = a,
                            A = i,
                            I = u;
                        e.ContextConsumer = s, e.ContextProvider = b, e.Element = w, e.ForwardRef = x, e.Fragment = C, e.Lazy = S, e.Memo = M, e.Portal = E, e.Profiler = L, e.StrictMode = A, e.Suspense = I, e.isAsyncMode = function() {
                            return !1
                        }, e.isConcurrentMode = function() {
                            return !1
                        }, e.isContextConsumer = function(e) {
                            return y(e) === s
                        }, e.isContextProvider = function(e) {
                            return y(e) === l
                        }, e.isElement = function(e) {
                            return "object" === typeof e && null !== e && e.$$typeof === n
                        }, e.isForwardRef = function(e) {
                            return y(e) === c
                        }, e.isFragment = function(e) {
                            return y(e) === o
                        }, e.isLazy = function(e) {
                            return y(e) === f
                        }, e.isMemo = function(e) {
                            return y(e) === p
                        }, e.isPortal = function(e) {
                            return y(e) === r
                        }, e.isProfiler = function(e) {
                            return y(e) === a
                        }, e.isStrictMode = function(e) {
                            return y(e) === i
                        }, e.isSuspense = function(e) {
                            return y(e) === u
                        }, e.isValidElementType = function(e) {
                            return "string" === typeof e || "function" === typeof e || e === o || e === a || e === v || e === i || e === u || e === d || e === k || "object" === typeof e && null !== e && (e.$$typeof === f || e.$$typeof === p || e.$$typeof === l || e.$$typeof === s || e.$$typeof === c || e.$$typeof === g || e.$$typeof === h || e[0] === m)
                        }, e.typeOf = y
                    }
                }),
                Oe = (Le({
                    "node_modules/react-is/cjs/react-is.development.js": function(e) {
                        "use strict"
                    }
                }), Le({
                    "node_modules/react-is/index.js": function(e, t) {
                        "use strict";
                        t.exports = Te()
                    }
                })),
                Re = Le({
                    "node_modules/shallowequal/index.js": function(e, t) {
                        t.exports = function(e, t, n, r) {
                            var o = n ? n.call(r, e, t) : void 0;
                            if (void 0 !== o) return !!o;
                            if (e === t) return !0;
                            if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                            var i = Object.keys(e),
                                a = Object.keys(t);
                            if (i.length !== a.length) return !1;
                            for (var l = Object.prototype.hasOwnProperty.bind(t), s = 0; s < i.length; s++) {
                                var c = i[s];
                                if (!l(c)) return !1;
                                var u = e[c],
                                    d = t[c];
                                if (!1 === (o = n ? n.call(r, u, d, c) : void 0) || void 0 === o && u !== d) return !1
                            }
                            return !0
                        }
                    }
                }),
                Pe = Le({
                    "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js": function(e) {
                        "use strict";
                        var t = "function" === typeof Symbol && Symbol.for,
                            n = t ? Symbol.for("react.element") : 60103,
                            r = t ? Symbol.for("react.portal") : 60106,
                            o = t ? Symbol.for("react.fragment") : 60107,
                            i = t ? Symbol.for("react.strict_mode") : 60108,
                            a = t ? Symbol.for("react.profiler") : 60114,
                            l = t ? Symbol.for("react.provider") : 60109,
                            s = t ? Symbol.for("react.context") : 60110,
                            c = t ? Symbol.for("react.async_mode") : 60111,
                            u = t ? Symbol.for("react.concurrent_mode") : 60111,
                            d = t ? Symbol.for("react.forward_ref") : 60112,
                            p = t ? Symbol.for("react.suspense") : 60113,
                            f = t ? Symbol.for("react.suspense_list") : 60120,
                            h = t ? Symbol.for("react.memo") : 60115,
                            m = t ? Symbol.for("react.lazy") : 60116,
                            g = t ? Symbol.for("react.block") : 60121,
                            v = t ? Symbol.for("react.fundamental") : 60117,
                            k = t ? Symbol.for("react.responder") : 60118,
                            y = t ? Symbol.for("react.scope") : 60119;

                        function b(e) {
                            if ("object" === typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case n:
                                        switch (e = e.type) {
                                            case c:
                                            case u:
                                            case o:
                                            case a:
                                            case i:
                                            case p:
                                                return e;
                                            default:
                                                switch (e = e && e.$$typeof) {
                                                    case s:
                                                    case d:
                                                    case m:
                                                    case h:
                                                    case l:
                                                        return e;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case r:
                                        return t
                                }
                            }
                        }

                        function w(e) {
                            return b(e) === u
                        }
                        e.AsyncMode = c, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = l, e.Element = n, e.ForwardRef = d, e.Fragment = o, e.Lazy = m, e.Memo = h, e.Portal = r, e.Profiler = a, e.StrictMode = i, e.Suspense = p, e.isAsyncMode = function(e) {
                            return w(e) || b(e) === c
                        }, e.isConcurrentMode = w, e.isContextConsumer = function(e) {
                            return b(e) === s
                        }, e.isContextProvider = function(e) {
                            return b(e) === l
                        }, e.isElement = function(e) {
                            return "object" === typeof e && null !== e && e.$$typeof === n
                        }, e.isForwardRef = function(e) {
                            return b(e) === d
                        }, e.isFragment = function(e) {
                            return b(e) === o
                        }, e.isLazy = function(e) {
                            return b(e) === m
                        }, e.isMemo = function(e) {
                            return b(e) === h
                        }, e.isPortal = function(e) {
                            return b(e) === r
                        }, e.isProfiler = function(e) {
                            return b(e) === a
                        }, e.isStrictMode = function(e) {
                            return b(e) === i
                        }, e.isSuspense = function(e) {
                            return b(e) === p
                        }, e.isValidElementType = function(e) {
                            return "string" === typeof e || "function" === typeof e || e === o || e === u || e === a || e === i || e === p || e === f || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === s || e.$$typeof === d || e.$$typeof === v || e.$$typeof === k || e.$$typeof === y || e.$$typeof === g)
                        }, e.typeOf = b
                    }
                }),
                De = (Le({
                    "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js": function(e) {
                        "use strict"
                    }
                }), Le({
                    "node_modules/hoist-non-react-statics/node_modules/react-is/index.js": function(e, t) {
                        "use strict";
                        t.exports = Pe()
                    }
                })),
                Ne = Le({
                    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js": function(e, t) {
                        "use strict";
                        var n = De(),
                            r = {
                                childContextTypes: !0,
                                contextType: !0,
                                contextTypes: !0,
                                defaultProps: !0,
                                displayName: !0,
                                getDefaultProps: !0,
                                getDerivedStateFromError: !0,
                                getDerivedStateFromProps: !0,
                                mixins: !0,
                                propTypes: !0,
                                type: !0
                            },
                            o = {
                                name: !0,
                                length: !0,
                                prototype: !0,
                                caller: !0,
                                callee: !0,
                                arguments: !0,
                                arity: !0
                            },
                            i = {
                                $$typeof: !0,
                                compare: !0,
                                defaultProps: !0,
                                displayName: !0,
                                propTypes: !0,
                                type: !0
                            },
                            a = {};

                        function l(e) {
                            return n.isMemo(e) ? i : a[e.$$typeof] || r
                        }
                        a[n.ForwardRef] = {
                            $$typeof: !0,
                            render: !0,
                            defaultProps: !0,
                            displayName: !0,
                            propTypes: !0
                        }, a[n.Memo] = i;
                        var s = Object.defineProperty,
                            c = Object.getOwnPropertyNames,
                            u = Object.getOwnPropertySymbols,
                            d = Object.getOwnPropertyDescriptor,
                            p = Object.getPrototypeOf,
                            f = Object.prototype;
                        t.exports = function e(t, n, r) {
                            if ("string" !== typeof n) {
                                if (f) {
                                    var i = p(n);
                                    i && i !== f && e(t, i, r)
                                }
                                var a = c(n);
                                u && (a = a.concat(u(n)));
                                for (var h = l(t), m = l(n), g = 0; g < a.length; ++g) {
                                    var v = a[g];
                                    if (!o[v] && (!r || !r[v]) && (!m || !m[v]) && (!h || !h[v])) {
                                        var k = d(n, v);
                                        try {
                                            s(t, v, k)
                                        } catch (y) {}
                                    }
                                }
                            }
                            return t
                        }
                    }
                }),
                _e = {};
            ! function(e, t) {
                for (var n in t) he(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            }(_e, {
                Extension: function() {
                    return $a
                },
                default: function() {
                    return zd
                },
                parser: function() {
                    return Pd
                },
                renderToHtml: function() {
                    return Nd
                },
                schema: function() {
                    return Rd
                },
                serializer: function() {
                    return Dd
                },
                theme: function() {
                    return _d
                }
            }), e.exports = (pe = _e, Ae(he({}, "__esModule", {
                value: !0
            }), pe));
            var Be = Ie(n(64386)),
                ze = Ie(n(49925)),
                He = n(80796),
                je = n(38556),
                Ve = n(71665),
                $e = n(65271),
                We = n(15899),
                Fe = n(87309),
                Ue = n(45574),
                Ze = n(26158),
                qe = n(35406),
                Ge = n(35285),
                Ke = Ie(Oe()),
                Je = Ie(n(64386)),
                Xe = Ie(Re());
            var Ye = function(e) {
                    function t(e, r, s, c, p) {
                        for (var f, h, m, g, b, x = 0, C = 0, S = 0, M = 0, E = 0, R = 0, D = m = f = 0, _ = 0, B = 0, z = 0, H = 0, j = s.length, V = j - 1, $ = "", W = "", F = "", U = ""; _ < j;) {
                            if (h = s.charCodeAt(_), _ === V && 0 !== C + M + S + x && (0 !== C && (h = 47 === C ? 10 : 47), M = S = x = 0, j++, V++), 0 === C + M + S + x) {
                                if (_ === V && (0 < B && ($ = $.replace(d, "")), 0 < $.trim().length)) {
                                    switch (h) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            $ += s.charAt(_)
                                    }
                                    h = 59
                                }
                                switch (h) {
                                    case 123:
                                        for (f = ($ = $.trim()).charCodeAt(0), m = 1, H = ++_; _ < j;) {
                                            switch (h = s.charCodeAt(_)) {
                                                case 123:
                                                    m++;
                                                    break;
                                                case 125:
                                                    m--;
                                                    break;
                                                case 47:
                                                    switch (h = s.charCodeAt(_ + 1)) {
                                                        case 42:
                                                        case 47:
                                                            e: {
                                                                for (D = _ + 1; D < V; ++D) switch (s.charCodeAt(D)) {
                                                                    case 47:
                                                                        if (42 === h && 42 === s.charCodeAt(D - 1) && _ + 2 !== D) {
                                                                            _ = D + 1;
                                                                            break e
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === h) {
                                                                            _ = D + 1;
                                                                            break e
                                                                        }
                                                                }
                                                                _ = D
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    h++;
                                                case 40:
                                                    h++;
                                                case 34:
                                                case 39:
                                                    for (; _++ < V && s.charCodeAt(_) !== h;);
                                            }
                                            if (0 === m) break;
                                            _++
                                        }
                                        if (m = s.substring(H, _), 0 === f && (f = ($ = $.replace(u, "").trim()).charCodeAt(0)), 64 === f) {
                                            switch (0 < B && ($ = $.replace(d, "")), h = $.charCodeAt(1)) {
                                                case 100:
                                                case 109:
                                                case 115:
                                                case 45:
                                                    B = r;
                                                    break;
                                                default:
                                                    B = O
                                            }
                                            if (H = (m = t(r, B, m, h, p + 1)).length, 0 < P && (b = l(3, m, B = n(O, $, z), r, A, L, H, h, p, c), $ = B.join(""), void 0 !== b && 0 === (H = (m = b.trim()).length) && (h = 0, m = "")), 0 < H) switch (h) {
                                                case 115:
                                                    $ = $.replace(w, a);
                                                case 100:
                                                case 109:
                                                case 45:
                                                    m = $ + "{" + m + "}";
                                                    break;
                                                case 107:
                                                    m = ($ = $.replace(v, "$1 $2")) + "{" + m + "}", m = 1 === T || 2 === T && i("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                    break;
                                                default:
                                                    m = $ + m, 112 === c && (W += m, m = "")
                                            } else m = ""
                                        } else m = t(r, n(r, $, z), m, c, p + 1);
                                        F += m, m = z = B = D = f = 0, $ = "", h = s.charCodeAt(++_);
                                        break;
                                    case 125:
                                    case 59:
                                        if (1 < (H = ($ = (0 < B ? $.replace(d, "") : $).trim()).length)) switch (0 === D && (f = $.charCodeAt(0), 45 === f || 96 < f && 123 > f) && (H = ($ = $.replace(" ", ":")).length), 0 < P && void 0 !== (b = l(1, $, r, e, A, L, W.length, c, p, c)) && 0 === (H = ($ = b.trim()).length) && ($ = "\0\0"), f = $.charCodeAt(0), h = $.charCodeAt(1), f) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === h || 99 === h) {
                                                    U += $ + s.charAt(_);
                                                    break
                                                }
                                            default:
                                                58 !== $.charCodeAt(H - 1) && (W += o($, f, h, $.charCodeAt(2)))
                                        }
                                        z = B = D = f = 0, $ = "", h = s.charCodeAt(++_)
                                }
                            }
                            switch (h) {
                                case 13:
                                case 10:
                                    47 === C ? C = 0 : 0 === 1 + f && 107 !== c && 0 < $.length && (B = 1, $ += "\0"), 0 < P * N && l(0, $, r, e, A, L, W.length, c, p, c), L = 1, A++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === C + M + S + x) {
                                        L++;
                                        break
                                    }
                                default:
                                    switch (L++, g = s.charAt(_), h) {
                                        case 9:
                                        case 32:
                                            if (0 === M + x + C) switch (E) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    g = "";
                                                    break;
                                                default:
                                                    32 !== h && (g = " ")
                                            }
                                            break;
                                        case 0:
                                            g = "\\0";
                                            break;
                                        case 12:
                                            g = "\\f";
                                            break;
                                        case 11:
                                            g = "\\v";
                                            break;
                                        case 38:
                                            0 === M + C + x && (B = z = 1, g = "\f" + g);
                                            break;
                                        case 108:
                                            if (0 === M + C + x + I && 0 < D) switch (_ - D) {
                                                case 2:
                                                    112 === E && 58 === s.charCodeAt(_ - 3) && (I = E);
                                                case 8:
                                                    111 === R && (I = R)
                                            }
                                            break;
                                        case 58:
                                            0 === M + C + x && (D = _);
                                            break;
                                        case 44:
                                            0 === C + S + M + x && (B = 1, g += "\r");
                                            break;
                                        case 34:
                                        case 39:
                                            0 === C && (M = M === h ? 0 : 0 === M ? h : M);
                                            break;
                                        case 91:
                                            0 === M + C + S && x++;
                                            break;
                                        case 93:
                                            0 === M + C + S && x--;
                                            break;
                                        case 41:
                                            0 === M + C + x && S--;
                                            break;
                                        case 40:
                                            if (0 === M + C + x) {
                                                if (0 === f)
                                                    if (2 * E + 3 * R === 533);
                                                    else f = 1;
                                                S++
                                            }
                                            break;
                                        case 64:
                                            0 === C + S + M + x + D + m && (m = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < M + x + S)) switch (C) {
                                                case 0:
                                                    switch (2 * h + 3 * s.charCodeAt(_ + 1)) {
                                                        case 235:
                                                            C = 47;
                                                            break;
                                                        case 220:
                                                            H = _, C = 42
                                                    }
                                                    break;
                                                case 42:
                                                    47 === h && 42 === E && H + 2 !== _ && (33 === s.charCodeAt(H + 2) && (W += s.substring(H, _ + 1)), g = "", C = 0)
                                            }
                                    }
                                    0 === C && ($ += g)
                            }
                            R = E, E = h, _++
                        }
                        if (0 < (H = W.length)) {
                            if (B = r, 0 < P && (void 0 !== (b = l(2, W, B, e, A, L, H, c, p, c)) && 0 === (W = b).length)) return U + W + F;
                            if (W = B.join(",") + "{" + W + "}", 0 !== T * I) {
                                switch (2 !== T || i(W, 2) || (I = 0), I) {
                                    case 111:
                                        W = W.replace(y, ":-moz-$1") + W;
                                        break;
                                    case 112:
                                        W = W.replace(k, "::-webkit-input-$1") + W.replace(k, "::-moz-$1") + W.replace(k, ":-ms-input-$1") + W
                                }
                                I = 0
                            }
                        }
                        return U + W + F
                    }

                    function n(e, t, n) {
                        var o = t.trim().split(m);
                        t = o;
                        var i = o.length,
                            a = e.length;
                        switch (a) {
                            case 0:
                            case 1:
                                var l = 0;
                                for (e = 0 === a ? "" : e[0] + " "; l < i; ++l) t[l] = r(e, t[l], n).trim();
                                break;
                            default:
                                var s = l = 0;
                                for (t = []; l < i; ++l)
                                    for (var c = 0; c < a; ++c) t[s++] = r(e[c] + " ", o[l], n).trim()
                        }
                        return t
                    }

                    function r(e, t, n) {
                        var r = t.charCodeAt(0);
                        switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                            case 38:
                                return t.replace(g, "$1" + e.trim());
                            case 58:
                                return e.trim() + t.replace(g, "$1" + e.trim());
                            default:
                                if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                        }
                        return e + t
                    }

                    function o(e, t, n, r) {
                        var a = e + ";",
                            l = 2 * t + 3 * n + 4 * r;
                        if (944 === l) {
                            e = a.indexOf(":", 9) + 1;
                            var s = a.substring(e, a.length - 1).trim();
                            return s = a.substring(0, e).trim() + s + ";", 1 === T || 2 === T && i(s, 1) ? "-webkit-" + s + s : s
                        }
                        if (0 === T || 2 === T && !i(a, 1)) return a;
                        switch (l) {
                            case 1015:
                                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                            case 951:
                                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                            case 963:
                                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                            case 1009:
                                if (100 !== a.charCodeAt(4)) break;
                            case 969:
                            case 942:
                                return "-webkit-" + a + a;
                            case 978:
                                return "-webkit-" + a + "-moz-" + a + a;
                            case 1019:
                            case 983:
                                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                            case 883:
                                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                                if (0 < a.indexOf("image-set(", 11)) return a.replace(E, "$1-webkit-$2") + a;
                                break;
                            case 932:
                                if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
                                    case 103:
                                        return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                                    case 115:
                                        return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                                    case 98:
                                        return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                                }
                                return "-webkit-" + a + "-ms-" + a + a;
                            case 964:
                                return "-webkit-" + a + "-ms-flex-" + a + a;
                            case 1023:
                                if (99 !== a.charCodeAt(8)) break;
                                return "-webkit-box-pack" + (s = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + s + a;
                            case 1005:
                                return f.test(a) ? a.replace(p, ":-webkit-") + a.replace(p, ":-moz-") + a : a;
                            case 1e3:
                                switch (t = (s = a.substring(13).trim()).indexOf("-") + 1, s.charCodeAt(0) + s.charCodeAt(t)) {
                                    case 226:
                                        s = a.replace(b, "tb");
                                        break;
                                    case 232:
                                        s = a.replace(b, "tb-rl");
                                        break;
                                    case 220:
                                        s = a.replace(b, "lr");
                                        break;
                                    default:
                                        return a
                                }
                                return "-webkit-" + a + "-ms-" + s + a;
                            case 1017:
                                if (-1 === a.indexOf("sticky", 9)) break;
                            case 975:
                                switch (t = (a = e).length - 10, l = (s = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | s.charCodeAt(7))) {
                                    case 203:
                                        if (111 > s.charCodeAt(8)) break;
                                    case 115:
                                        a = a.replace(s, "-webkit-" + s) + ";" + a;
                                        break;
                                    case 207:
                                    case 102:
                                        a = a.replace(s, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + a.replace(s, "-webkit-" + s) + ";" + a.replace(s, "-ms-" + s + "box") + ";" + a
                                }
                                return a + ";";
                            case 938:
                                if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
                                    case 105:
                                        return s = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + s + "-ms-flex-" + s + a;
                                    case 115:
                                        return "-webkit-" + a + "-ms-flex-item-" + a.replace(C, "") + a;
                                    default:
                                        return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(C, "") + a
                                }
                                break;
                            case 973:
                            case 989:
                                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                            case 931:
                            case 953:
                                if (!0 === M.test(e)) return 115 === (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : a.replace(s, "-webkit-" + s) + a.replace(s, "-moz-" + s.replace("fill-", "")) + a;
                                break;
                            case 962:
                                if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + a
                        }
                        return a
                    }

                    function i(e, t) {
                        var n = e.indexOf(1 === t ? ":" : "{"),
                            r = e.substring(0, 3 !== t ? n : 10);
                        return n = e.substring(n + 1, e.length - 1), D(2 !== t ? r : r.replace(S, "$1"), n, t)
                    }

                    function a(e, t) {
                        var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                        return n !== t + ";" ? n.replace(x, " or ($1)").substring(4) : "(" + t + ")"
                    }

                    function l(e, t, n, r, o, i, a, l, s, u) {
                        for (var d, p = 0, f = t; p < P; ++p) switch (d = R[p].call(c, e, f, n, r, o, i, a, l, s, u)) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                f = d
                        }
                        if (f !== t) return f
                    }

                    function s(e) {
                        return void 0 !== (e = e.prefix) && (D = null, e ? "function" !== typeof e ? T = 1 : (T = 2, D = e) : T = 0), s
                    }

                    function c(e, n) {
                        var r = e;
                        if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < P) {
                            var o = l(-1, n, r, r, A, L, 0, 0, 0, 0);
                            void 0 !== o && "string" === typeof o && (n = o)
                        }
                        var i = t(O, r, n, 0, 0);
                        return 0 < P && (void 0 !== (o = l(-2, i, r, r, A, L, i.length, 0, 0, 0)) && (i = o)), "", I = 0, L = A = 1, i
                    }
                    var u = /^\0+/g,
                        d = /[\0\r\f]/g,
                        p = /: */g,
                        f = /zoo|gra/,
                        h = /([,: ])(transform)/g,
                        m = /,\r+?/g,
                        g = /([\t\r\n ])*\f?&/g,
                        v = /@(k\w+)\s*(\S*)\s*/,
                        k = /::(place)/g,
                        y = /:(read-only)/g,
                        b = /[svh]\w+-[tblr]{2}/,
                        w = /\(\s*(.*)\s*\)/g,
                        x = /([\s\S]*?);/g,
                        C = /-self|flex-/g,
                        S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                        M = /stretch|:\s*\w+\-(?:conte|avail)/,
                        E = /([^-])(image-set\()/,
                        L = 1,
                        A = 1,
                        I = 0,
                        T = 1,
                        O = [],
                        R = [],
                        P = 0,
                        D = null,
                        N = 0;
                    return c.use = function e(t) {
                        switch (t) {
                            case void 0:
                            case null:
                                P = R.length = 0;
                                break;
                            default:
                                if ("function" === typeof t) R[P++] = t;
                                else if ("object" === typeof t)
                                    for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                                else N = 0 | !!t
                        }
                        return e
                    }, c.set = s, void 0 !== e && s(e), c
                },
                Qe = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };
            var et = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                tt = function(e) {
                    var t = Object.create(null);
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }((function(e) {
                    return et.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
                })),
                nt = Ie(Ne());

            function rt() {
                return (rt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ot = function(e, t) {
                    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
                    return n
                },
                it = function(e) {
                    return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, Ke.typeOf)(e)
                },
                at = Object.freeze([]),
                lt = Object.freeze({});

            function st(e) {
                return "function" == typeof e
            }

            function ct(e) {
                return e.displayName || e.name || "Component"
            }

            function ut(e) {
                return e && "string" == typeof e.styledComponentId
            }
            var dt = "undefined" != typeof X && (X.env.REACT_APP_SC_ATTR || X.env.SC_ATTR) || "data-styled",
                pt = "undefined" != typeof window && "HTMLElement" in window,
                ft = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof X && void 0 !== X.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== X.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== X.env.REACT_APP_SC_DISABLE_SPEEDY && X.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof X && void 0 !== X.env.SC_DISABLE_SPEEDY && "" !== X.env.SC_DISABLE_SPEEDY && ("false" !== X.env.SC_DISABLE_SPEEDY && X.env.SC_DISABLE_SPEEDY)),
                ht = {};

            function mt(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
            }
            var gt = function() {
                    function e(e) {
                        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                    }
                    var t = e.prototype;
                    return t.indexOfGroup = function(e) {
                        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                        return t
                    }, t.insertRules = function(e, t) {
                        if (e >= this.groupSizes.length) {
                            for (var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && mt(16, "" + e);
                            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                            for (var i = r; i < o; i++) this.groupSizes[i] = 0
                        }
                        for (var a = this.indexOfGroup(e + 1), l = 0, s = t.length; l < s; l++) this.tag.insertRule(a, t[l]) && (this.groupSizes[e]++, a++)
                    }, t.clearGroup = function(e) {
                        if (e < this.length) {
                            var t = this.groupSizes[e],
                                n = this.indexOfGroup(e),
                                r = n + t;
                            this.groupSizes[e] = 0;
                            for (var o = n; o < r; o++) this.tag.deleteRule(n)
                        }
                    }, t.getGroup = function(e) {
                        var t = "";
                        if (e >= this.length || 0 === this.groupSizes[e]) return t;
                        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r; i < o; i++) t += this.tag.getRule(i) + "/*!sc*/\n";
                        return t
                    }, e
                }(),
                vt = new Map,
                kt = new Map,
                yt = 1,
                bt = function(e) {
                    if (vt.has(e)) return vt.get(e);
                    for (; kt.has(yt);) yt++;
                    var t = yt++;
                    return vt.set(e, t), kt.set(t, e), t
                },
                wt = function(e) {
                    return kt.get(e)
                },
                xt = function(e, t) {
                    t >= yt && (yt = t + 1), vt.set(e, t), kt.set(t, e)
                },
                Ct = "style[" + dt + '][data-styled-version="5.3.6"]',
                St = new RegExp("^" + dt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                Mt = function(e, t, n) {
                    for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)(r = o[i]) && e.registerName(t, r)
                },
                Et = function(e, t) {
                    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++) {
                        var a = n[o].trim();
                        if (a) {
                            var l = a.match(St);
                            if (l) {
                                var s = 0 | parseInt(l[1], 10),
                                    c = l[2];
                                0 !== s && (xt(c, s), Mt(e, c, l[3]), e.getTag().insertRules(s, r)), r.length = 0
                            } else r.push(a)
                        }
                    }
                },
                Lt = function() {
                    return n.nc
                },
                At = function(e) {
                    var t = document.head,
                        n = e || t,
                        r = document.createElement("style"),
                        o = function(e) {
                            for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                                var r = t[n];
                                if (r && 1 === r.nodeType && r.hasAttribute(dt)) return r
                            }
                        }(n),
                        i = void 0 !== o ? o.nextSibling : null;
                    r.setAttribute(dt, "active"), r.setAttribute("data-styled-version", "5.3.6");
                    var a = Lt();
                    return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r
                },
                It = function() {
                    function e(e) {
                        var t = this.element = At(e);
                        t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                if (o.ownerNode === e) return o
                            }
                            mt(17)
                        }(t), this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        try {
                            return this.sheet.insertRule(t, e), this.length++, !0
                        } catch (n) {
                            return !1
                        }
                    }, t.deleteRule = function(e) {
                        this.sheet.deleteRule(e), this.length--
                    }, t.getRule = function(e) {
                        var t = this.sheet.cssRules[e];
                        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
                    }, e
                }(),
                Tt = function() {
                    function e(e) {
                        var t = this.element = At(e);
                        this.nodes = t.childNodes, this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        if (e <= this.length && e >= 0) {
                            var n = document.createTextNode(t),
                                r = this.nodes[e];
                            return this.element.insertBefore(n, r || null), this.length++, !0
                        }
                        return !1
                    }, t.deleteRule = function(e) {
                        this.element.removeChild(this.nodes[e]), this.length--
                    }, t.getRule = function(e) {
                        return e < this.length ? this.nodes[e].textContent : ""
                    }, e
                }(),
                Ot = function() {
                    function e(e) {
                        this.rules = [], this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                    }, t.deleteRule = function(e) {
                        this.rules.splice(e, 1), this.length--
                    }, t.getRule = function(e) {
                        return e < this.length ? this.rules[e] : ""
                    }, e
                }(),
                Rt = pt,
                Pt = {
                    isServer: !pt,
                    useCSSOMInjection: !ft
                },
                Dt = function() {
                    function e(e, t, n) {
                        void 0 === e && (e = lt), void 0 === t && (t = {}), this.options = rt({}, Pt, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && pt && Rt && (Rt = !1, function(e) {
                            for (var t = document.querySelectorAll(Ct), n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                o && "active" !== o.getAttribute(dt) && (Et(e, o), o.parentNode && o.parentNode.removeChild(o))
                            }
                        }(this))
                    }
                    e.registerId = function(e) {
                        return bt(e)
                    };
                    var t = e.prototype;
                    return t.reconstructWithOptions = function(t, n) {
                        return void 0 === n && (n = !0), new e(rt({}, this.options, {}, t), this.gs, n && this.names || void 0)
                    }, t.allocateGSInstance = function(e) {
                        return this.gs[e] = (this.gs[e] || 0) + 1
                    }, t.getTag = function() {
                        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new Ot(o) : r ? new It(o) : new Tt(o), new gt(e)));
                        var e, t, n, r, o
                    }, t.hasNameForId = function(e, t) {
                        return this.names.has(e) && this.names.get(e).has(t)
                    }, t.registerName = function(e, t) {
                        if (bt(e), this.names.has(e)) this.names.get(e).add(t);
                        else {
                            var n = new Set;
                            n.add(t), this.names.set(e, n)
                        }
                    }, t.insertRules = function(e, t, n) {
                        this.registerName(e, t), this.getTag().insertRules(bt(e), n)
                    }, t.clearNames = function(e) {
                        this.names.has(e) && this.names.get(e).clear()
                    }, t.clearRules = function(e) {
                        this.getTag().clearGroup(bt(e)), this.clearNames(e)
                    }, t.clearTag = function() {
                        this.tag = void 0
                    }, t.toString = function() {
                        return function(e) {
                            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                                var i = wt(o);
                                if (void 0 !== i) {
                                    var a = e.names.get(i),
                                        l = t.getGroup(o);
                                    if (a && l && a.size) {
                                        var s = dt + ".g" + o + '[id="' + i + '"]',
                                            c = "";
                                        void 0 !== a && a.forEach((function(e) {
                                            e.length > 0 && (c += e + ",")
                                        })), r += "" + l + s + '{content:"' + c + '"}/*!sc*/\n'
                                    }
                                }
                            }
                            return r
                        }(this)
                    }, e
                }(),
                Nt = /(a)(d)/gi,
                _t = function(e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97))
                };

            function Bt(e) {
                var t, n = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = _t(t % 52) + n;
                return (_t(t % 52) + n).replace(Nt, "$1-$2")
            }
            var zt = function(e, t) {
                    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                    return e
                },
                Ht = function(e) {
                    return zt(5381, e)
                };

            function jt(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (st(n) && !ut(n)) return !1
                }
                return !0
            }
            var Vt = Ht("5.3.6"),
                $t = function() {
                    function e(e, t, n) {
                        this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && jt(e), this.componentId = t, this.baseHash = zt(Vt, t), this.baseStyle = n, Dt.registerId(t)
                    }
                    return e.prototype.generateAndInjectStyles = function(e, t, n) {
                        var r = this.componentId,
                            o = [];
                        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                            else {
                                var i = ln(this.rules, e, t, n).join(""),
                                    a = Bt(zt(this.baseHash, i) >>> 0);
                                if (!t.hasNameForId(r, a)) {
                                    var l = n(i, "." + a, void 0, r);
                                    t.insertRules(r, a, l)
                                }
                                o.push(a), this.staticRulesId = a
                            }
                        else {
                            for (var s = this.rules.length, c = zt(this.baseHash, n.hash), u = "", d = 0; d < s; d++) {
                                var p = this.rules[d];
                                if ("string" == typeof p) u += p;
                                else if (p) {
                                    var f = ln(p, e, t, n),
                                        h = Array.isArray(f) ? f.join("") : f;
                                    c = zt(c, h + d), u += h
                                }
                            }
                            if (u) {
                                var m = Bt(c >>> 0);
                                if (!t.hasNameForId(r, m)) {
                                    var g = n(u, "." + m, void 0, r);
                                    t.insertRules(r, m, g)
                                }
                                o.push(m)
                            }
                        }
                        return o.join(" ")
                    }, e
                }(),
                Wt = /^\s*\/\/.*$/gm,
                Ft = [":", "[", ".", "#"];

            function Ut(e) {
                var t, n, r, o, i = void 0 === e ? lt : e,
                    a = i.options,
                    l = void 0 === a ? lt : a,
                    s = i.plugins,
                    c = void 0 === s ? at : s,
                    u = new Ye(l),
                    d = [],
                    p = function(e) {
                        function t(t) {
                            if (t) try {
                                e(t + "}")
                            } catch (n) {}
                        }
                        return function(n, r, o, i, a, l, s, c, u, d) {
                            switch (n) {
                                case 1:
                                    if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                    break;
                                case 2:
                                    if (0 === c) return r + "/*|*/";
                                    break;
                                case 3:
                                    switch (c) {
                                        case 102:
                                        case 112:
                                            return e(o[0] + r), "";
                                        default:
                                            return r + (0 === d ? "/*|*/" : "")
                                    }
                                case -2:
                                    r.split("/*|*/}").forEach(t)
                            }
                        }
                    }((function(e) {
                        d.push(e)
                    })),
                    f = function(e, r, i) {
                        return 0 === r && -1 !== Ft.indexOf(i[n.length]) || i.match(o) ? e : "." + t
                    };

                function h(e, i, a, l) {
                    void 0 === l && (l = "&");
                    var s = e.replace(Wt, ""),
                        c = i && a ? a + " " + i + " { " + s + " }" : s;
                    return t = l, n = i, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), u(a || !i ? "" : i, c)
                }
                return u.use([].concat(c, [function(e, t, o) {
                    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f))
                }, p, function(e) {
                    if (-2 === e) {
                        var t = d;
                        return d = [], t
                    }
                }])), h.hash = c.length ? c.reduce((function(e, t) {
                    return t.name || mt(15), zt(e, t.name)
                }), 5381).toString() : "", h
            }
            var Zt = Je.default.createContext(),
                qt = (Zt.Consumer, Je.default.createContext()),
                Gt = (qt.Consumer, new Dt),
                Kt = Ut();

            function Jt() {
                return (0, Je.useContext)(Zt) || Gt
            }

            function Xt() {
                return (0, Je.useContext)(qt) || Kt
            }

            function Yt(e) {
                var t = (0, Je.useState)(e.stylisPlugins),
                    n = t[0],
                    r = t[1],
                    o = Jt(),
                    i = (0, Je.useMemo)((function() {
                        var t = o;
                        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                            target: e.target
                        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                            useCSSOMInjection: !1
                        })), t
                    }), [e.disableCSSOMInjection, e.sheet, e.target]),
                    a = (0, Je.useMemo)((function() {
                        return Ut({
                            options: {
                                prefix: !e.disableVendorPrefixes
                            },
                            plugins: n
                        })
                    }), [e.disableVendorPrefixes, n]);
                return (0, Je.useEffect)((function() {
                    (0, Xe.default)(n, e.stylisPlugins) || r(e.stylisPlugins)
                }), [e.stylisPlugins]), Je.default.createElement(Zt.Provider, {
                    value: i
                }, Je.default.createElement(qt.Provider, {
                    value: a
                }, e.children))
            }
            var Qt = function() {
                    function e(e, t) {
                        var n = this;
                        this.inject = function(e, t) {
                            void 0 === t && (t = Kt);
                            var r = n.name + t.hash;
                            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                        }, this.toString = function() {
                            return mt(12, String(n.name))
                        }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
                    }
                    return e.prototype.getName = function(e) {
                        return void 0 === e && (e = Kt), this.name + e.hash
                    }, e
                }(),
                en = /([A-Z])/,
                tn = /([A-Z])/g,
                nn = /^ms-/,
                rn = function(e) {
                    return "-" + e.toLowerCase()
                };

            function on(e) {
                return en.test(e) ? e.replace(tn, rn).replace(nn, "-ms-") : e
            }
            var an = function(e) {
                return null == e || !1 === e || "" === e
            };

            function ln(e, t, n, r) {
                if (Array.isArray(e)) {
                    for (var o, i = [], a = 0, l = e.length; a < l; a += 1) "" !== (o = ln(e[a], t, n, r)) && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
                    return i
                }
                return an(e) ? "" : ut(e) ? "." + e.styledComponentId : st(e) ? "function" != typeof(s = e) || s.prototype && s.prototype.isReactComponent || !t ? e : ln(e(t), t, n, r) : e instanceof Qt ? n ? (e.inject(n, r), e.getName(r)) : e : it(e) ? function e(t, n) {
                    var r, o, i = [];
                    for (var a in t) t.hasOwnProperty(a) && !an(t[a]) && (Array.isArray(t[a]) && t[a].isCss || st(t[a]) ? i.push(on(a) + ":", t[a], ";") : it(t[a]) ? i.push.apply(i, e(t[a], a)) : i.push(on(a) + ": " + (r = a, (null == (o = t[a]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in Qe ? String(o).trim() : o + "px") + ";")));
                    return n ? [n + " {"].concat(i, ["}"]) : i
                }(e) : e.toString();
                var s
            }
            var sn = function(e) {
                return Array.isArray(e) && (e.isCss = !0), e
            };

            function cn(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return st(e) || it(e) ? sn(ln(ot(at, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : sn(ln(ot(e, n)))
            }
            var un = function(e, t, n) {
                    return void 0 === n && (n = lt), e.theme !== n.theme && e.theme || t || n.theme
                },
                dn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                pn = /(^-|-$)/g;

            function fn(e) {
                return e.replace(dn, "-").replace(pn, "")
            }
            var hn = function(e) {
                return Bt(Ht(e) >>> 0)
            };

            function mn(e) {
                return "string" == typeof e && !0
            }
            var gn = function(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
                },
                vn = function(e) {
                    return "__proto__" !== e && "constructor" !== e && "prototype" !== e
                };

            function kn(e, t, n) {
                var r = e[n];
                gn(t) && gn(r) ? yn(r, t) : e[n] = t
            }

            function yn(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var o = 0, i = n; o < i.length; o++) {
                    var a = i[o];
                    if (gn(a))
                        for (var l in a) vn(l) && kn(e, a[l], l)
                }
                return e
            }
            var bn = Je.default.createContext();
            bn.Consumer;

            function wn(e) {
                var t = (0, Je.useContext)(bn),
                    n = (0, Je.useMemo)((function() {
                        return n = e.theme, r = t, n ? st(n) ? n(r) : Array.isArray(n) || "object" != typeof n ? mt(8) : r ? rt({}, r, {}, n) : n : mt(14);
                        var n, r
                    }), [e.theme, t]);
                return e.children ? Je.default.createElement(bn.Provider, {
                    value: n
                }, e.children) : null
            }
            var xn = {};

            function Cn(e, t, n) {
                var r, o = ut(e),
                    i = !mn(e),
                    a = t.attrs,
                    l = void 0 === a ? at : a,
                    s = t.componentId,
                    c = void 0 === s ? function(e, t) {
                        var n = "string" != typeof e ? "sc" : fn(e);
                        xn[n] = (xn[n] || 0) + 1;
                        var r = n + "-" + hn("5.3.6" + n + xn[n]);
                        return t ? t + "-" + r : r
                    }(t.displayName, t.parentComponentId) : s,
                    u = t.displayName,
                    d = void 0 === u ? mn(r = e) ? "styled." + r : "Styled(" + ct(r) + ")" : u,
                    p = t.displayName && t.componentId ? fn(t.displayName) + "-" + t.componentId : t.componentId || c,
                    f = o && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
                    h = t.shouldForwardProp;
                o && e.shouldForwardProp && (h = t.shouldForwardProp ? function(n, r, o) {
                    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o)
                } : e.shouldForwardProp);
                var m, g = new $t(n, p, o ? e.componentStyle : void 0),
                    v = g.isStatic && 0 === l.length,
                    k = function(e, t) {
                        return function(e, t, n, r) {
                            var o = e.attrs,
                                i = e.componentStyle,
                                a = e.defaultProps,
                                l = e.foldedComponentIds,
                                s = e.shouldForwardProp,
                                c = e.styledComponentId,
                                u = e.target,
                                d = function(e, t, n) {
                                    void 0 === e && (e = lt);
                                    var r = rt({}, t, {
                                            theme: e
                                        }),
                                        o = {};
                                    return n.forEach((function(e) {
                                        var t, n, i, a = e;
                                        for (t in st(a) && (a = a(r)), a) r[t] = o[t] = "className" === t ? (n = o[t], i = a[t], n && i ? n + " " + i : n || i) : a[t]
                                    })), [r, o]
                                }(un(t, (0, Je.useContext)(bn), a) || lt, t, o),
                                p = d[0],
                                f = d[1],
                                h = function(e, t, n, r) {
                                    var o = Jt(),
                                        i = Xt();
                                    return t ? e.generateAndInjectStyles(lt, o, i) : e.generateAndInjectStyles(n, o, i)
                                }(i, r, p),
                                m = n,
                                g = f.$as || t.$as || f.as || t.as || u,
                                v = mn(g),
                                k = f !== t ? rt({}, t, {}, f) : t,
                                y = {};
                            for (var b in k) "$" !== b[0] && "as" !== b && ("forwardedAs" === b ? y.as = k[b] : (s ? s(b, tt, g) : !v || tt(b)) && (y[b] = k[b]));
                            return t.style && f.style !== t.style && (y.style = rt({}, t.style, {}, f.style)), y.className = Array.prototype.concat(l, c, h !== c ? h : null, t.className, f.className).filter(Boolean).join(" "), y.ref = m, (0, Je.createElement)(g, y)
                        }(m, e, t, v)
                    };
                return k.displayName = d, (m = Je.default.forwardRef(k)).attrs = f, m.componentStyle = g, m.displayName = d, m.shouldForwardProp = h, m.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : at, m.styledComponentId = p, m.target = o ? e.target : e, m.withComponent = function(e) {
                    var r = t.componentId,
                        o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(t, ["componentId"]),
                        i = r && r + "-" + (mn(e) ? e : fn(ct(e)));
                    return Cn(e, rt({}, o, {
                        attrs: f,
                        componentId: i
                    }), n)
                }, Object.defineProperty(m, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps
                    },
                    set: function(t) {
                        this._foldedDefaultProps = o ? yn({}, e.defaultProps, t) : t
                    }
                }), m.toString = function() {
                    return "." + m.styledComponentId
                }, i && (0, nt.default)(m, e, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }), m
            }
            var Sn = function(e) {
                return function e(t, n, r) {
                    if (void 0 === r && (r = lt), !(0, Ke.isValidElementType)(n)) return mt(1, String(n));
                    var o = function() {
                        return t(n, r, cn.apply(void 0, arguments))
                    };
                    return o.withConfig = function(o) {
                        return e(t, n, rt({}, r, {}, o))
                    }, o.attrs = function(o) {
                        return e(t, n, rt({}, r, {
                            attrs: Array.prototype.concat(r.attrs, o).filter(Boolean)
                        }))
                    }, o
                }(Cn, e)
            };
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
                Sn[e] = Sn(e)
            }));
            var Mn = function() {
                function e(e, t) {
                    this.rules = e, this.componentId = t, this.isStatic = jt(e), Dt.registerId(this.componentId + 1)
                }
                var t = e.prototype;
                return t.createStyles = function(e, t, n, r) {
                    var o = r(ln(this.rules, t, n, r).join(""), ""),
                        i = this.componentId + e;
                    n.insertRules(i, i, o)
                }, t.removeStyles = function(e, t) {
                    t.clearRules(this.componentId + e)
                }, t.renderStyles = function(e, t, n, r) {
                    e > 2 && Dt.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                }, e
            }();

            function En(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var o = cn.apply(void 0, [e].concat(n)),
                    i = "sc-global-" + hn(JSON.stringify(o)),
                    a = new Mn(o, i);

                function l(e) {
                    var t = Jt(),
                        n = Xt(),
                        r = (0, Je.useContext)(bn),
                        o = (0, Je.useRef)(t.allocateGSInstance(i)).current;
                    return t.server && s(o, e, t, r, n), null
                }

                function s(e, t, n, r, o) {
                    if (a.isStatic) a.renderStyles(e, ht, n, o);
                    else {
                        var i = rt({}, t, {
                            theme: un(t, r, l.defaultProps)
                        });
                        a.renderStyles(e, i, n, o)
                    }
                }
                return Je.default.memo(l)
            }
            var Ln = /^\s*<\/[a-z]/i,
                An = (function() {
                    function e() {
                        var e = this;
                        this._emitSheetCSS = function() {
                            var t = e.instance.toString();
                            if (!t) return "";
                            var n = Lt();
                            return "<style " + [n && 'nonce="' + n + '"', dt + '="true"', 'data-styled-version="5.3.6"'].filter(Boolean).join(" ") + ">" + t + "</style>"
                        }, this.getStyleTags = function() {
                            return e.sealed ? mt(2) : e._emitSheetCSS()
                        }, this.getStyleElement = function() {
                            var t;
                            if (e.sealed) return mt(2);
                            var n = ((t = {})[dt] = "", t["data-styled-version"] = "5.3.6", t.dangerouslySetInnerHTML = {
                                    __html: e.instance.toString()
                                }, t),
                                r = Lt();
                            return r && (n.nonce = r), [Je.default.createElement("style", rt({}, n, {
                                key: "sc-0-0"
                            }))]
                        }, this.seal = function() {
                            e.sealed = !0
                        }, this.instance = new Dt({
                            isServer: !0
                        }), this.sealed = !1
                    }
                    var t = e.prototype;
                    t.collectStyles = function(e) {
                        return this.sealed ? mt(2) : Je.default.createElement(Yt, {
                            sheet: this.instance
                        }, e)
                    }, t.interleaveWithNodeStream = function(e) {
                        if (pt) return mt(3);
                        if (this.sealed) return mt(2);
                        this.seal();
                        var t = n(61242),
                            r = (t.Readable, t.Transform),
                            o = e,
                            i = this.instance,
                            a = this._emitSheetCSS,
                            l = new r({
                                transform: function(e, t, n) {
                                    var r = e.toString(),
                                        o = a();
                                    if (i.clearTag(), Ln.test(r)) {
                                        var l = r.indexOf(">") + 1,
                                            s = r.slice(0, l),
                                            c = r.slice(l);
                                        this.push(s + o + c)
                                    } else this.push(o + r);
                                    n()
                                }
                            });
                        return o.on("error", (function(e) {
                            l.emit("error", e)
                        })), o.pipe(l)
                    }
                }(), function(e) {
                    var t = Je.default.forwardRef((function(t, n) {
                        var r = (0, Je.useContext)(bn),
                            o = e.defaultProps,
                            i = un(t, r, o);
                        return Je.default.createElement(e, rt({}, t, {
                            theme: i,
                            ref: n
                        }))
                    }));
                    return (0, nt.default)(t, e), t.displayName = "WithTheme(" + ct(e) + ")", t
                }),
                In = Sn,
                Tn = {
                    almostBlack: "#181A1B",
                    lightBlack: "#2F3336",
                    almostWhite: "#E6E6E6",
                    white: "#FFF",
                    white10: "rgba(255, 255, 255, 0.1)",
                    black: "#000",
                    black10: "rgba(0, 0, 0, 0.1)",
                    primary: "#007AFF",
                    greyLight: "#F4F7FA",
                    grey: "#E8EBED",
                    greyMid: "#C5CCD3",
                    greyDark: "#DAE1E9"
                },
                On = Me(Se({}, Tn), {
                    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
                    fontFamilyMono: "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
                    fontWeight: 400,
                    zIndex: 100,
                    link: Tn.primary,
                    placeholder: "rgba(82,82,82,0.6)",
                    textSecondary: "#4E5C6E",
                    textLight: Tn.white,
                    textHighlight: "#b3e7ff",
                    textHighlightForeground: Tn.black,
                    selected: Tn.primary,
                    codeComment: "#6a737d",
                    codePunctuation: "#5e6687",
                    codeNumber: "#d73a49",
                    codeProperty: "#c08b30",
                    codeTag: "#3d8fd1",
                    codeString: "#032f62",
                    codeSelector: "#6679cc",
                    codeAttr: "#c76b29",
                    codeEntity: "#22a2c9",
                    codeKeyword: "#d73a49",
                    codeFunction: "#6f42c1",
                    codeStatement: "#22a2c9",
                    codePlaceholder: "#3d8fd1",
                    codeInserted: "#202746",
                    codeImportant: "#c94922",
                    blockToolbarBackground: Tn.white,
                    blockToolbarTrigger: Tn.greyMid,
                    blockToolbarTriggerIcon: Tn.white,
                    blockToolbarItem: Tn.almostBlack,
                    blockToolbarIcon: void 0,
                    blockToolbarIconSelected: Tn.black,
                    blockToolbarText: Tn.almostBlack,
                    blockToolbarTextSelected: Tn.black,
                    blockToolbarSelectedBackground: Tn.greyMid,
                    blockToolbarHoverBackground: Tn.greyLight,
                    blockToolbarDivider: Tn.greyMid,
                    noticeInfoBackground: "#fEd4A4",
                    noticeInfoText: Tn.almostBlack,
                    noticeTipBackground: "#9E5CF7",
                    noticeTipText: Tn.white,
                    noticeWarningBackground: "#FF5C80",
                    noticeWarningText: Tn.white
                }),
                Rn = Me(Se({}, On), {
                    background: Tn.white,
                    text: Tn.almostBlack,
                    code: Tn.lightBlack,
                    cursor: Tn.black,
                    divider: Tn.greyMid,
                    toolbarBackground: Tn.lightBlack,
                    toolbarHoverBackground: Tn.black,
                    toolbarInput: Tn.white10,
                    toolbarItem: Tn.white,
                    tableDivider: "#EBEBEB",
                    tableSelected: Tn.primary,
                    tableSelectedBackground: "#E5F7FF",
                    quote: Tn.greyDark,
                    codeBackground: Tn.greyLight,
                    codeBorder: Tn.grey,
                    horizontalRule: Tn.greyMid,
                    imageErrorBackground: Tn.greyLight,
                    scrollbarBackground: Tn.greyLight,
                    scrollbarThumb: Tn.greyMid
                }),
                Pn = Me(Se({}, On), {
                    background: Tn.almostBlack,
                    text: Tn.almostWhite,
                    code: Tn.almostWhite,
                    cursor: Tn.white,
                    divider: "#4E5C6E",
                    placeholder: "#52657A",
                    toolbarBackground: Tn.white,
                    toolbarHoverBackground: Tn.greyMid,
                    toolbarInput: Tn.black10,
                    toolbarItem: Tn.lightBlack,
                    tableDivider: Tn.lightBlack,
                    tableSelected: Tn.primary,
                    tableSelectedBackground: "#002333",
                    quote: Tn.greyDark,
                    codeBackground: Tn.black,
                    codeBorder: Tn.lightBlack,
                    codeString: "#3d8fd1",
                    horizontalRule: Tn.lightBlack,
                    imageErrorBackground: "rgba(0, 0, 0, 0.5)",
                    scrollbarBackground: Tn.black,
                    scrollbarThumb: Tn.lightBlack
                }),
                Dn = Rn,
                Nn = {
                    addColumnAfter: "\u53f3\u4fa7\u63d2\u5165\u5217",
                    addColumnBefore: "\u5de6\u4fa7\u63d2\u5165\u5217",
                    addRowAfter: "\u4e0b\u65b9\u63d2\u5165\u884c",
                    addRowBefore: "\u4e0a\u65b9\u63d2\u5165\u884c",
                    alignCenter: "\u5c45\u4e2d\u5bf9\u9f50",
                    alignLeft: "\u5de6\u5bf9\u9f50",
                    alignRight: "\u53f3\u5bf9\u9f50",
                    originWidth: "\u539f\u672c\u5bbd\u5ea6",
                    fullWidth: "\u5168\u5bbd",
                    bulletList: "\u65e0\u5e8f\u5217\u8868",
                    checkboxList: "\u5f85\u529e\u4efb\u52a1",
                    codeBlock: "\u4ee3\u7801\u5757",
                    codeCopied: "\u590d\u5236\u6210\u529f",
                    codeInline: "Code",
                    createLink: "Create link",
                    createLinkError: "Sorry, an error occurred creating the link",
                    createTexError: "Sorry, an error occurred creating the tex",
                    createNewDoc: "Create a new doc",
                    deleteColumn: "Delete column",
                    deleteRow: "Delete row",
                    deleteTable: "Delete table",
                    deleteImage: "Delete image",
                    downloadImage: "Download image",
                    replaceImage: "Replace image",
                    alignImageLeft: "Float left half width",
                    alignImageRight: "Float right half width",
                    alignImageDefault: "Center large",
                    em: "Italic",
                    embedInvalidLink: "Sorry, that link won\u2019t work for this embed type",
                    findOrCreateDoc: "Find or create a doc\u2026",
                    h1: "\u4e00\u7ea7\u6807\u9898",
                    h2: "\u4e8c\u7ea7\u6807\u9898",
                    h3: "\u4e09\u7ea7\u6807\u9898",
                    h4: "\u56db\u7ea7\u6807\u9898",
                    h5: "\u4e94\u7ea7\u6807\u9898",
                    h6: "\u516d\u7ea7\u6807\u9898",
                    custom: "\u81ea\u5b9a\u4e49\u6807\u9898",
                    heading: "Heading",
                    hr: "\u5206\u9694\u7ebf",
                    image: "\u56fe\u7247",
                    video: "\u89c6\u9891",
                    imageUploadError: "Sorry, an error occurred uploading the image",
                    videoUploadError: "Sorry, an error occurred uploading the video",
                    imageCaptionPlaceholder: "Write a caption",
                    info: "Info",
                    infoNotice: "\u9ad8\u4eae\u5757(info)",
                    link: "\u94fe\u63a5",
                    linkCopied: "Link copied to clipboard",
                    mark: "Highlight",
                    newLineEmpty: "\u8f93\u5165 \u201c/\u201d \u5feb\u901f\u6dfb\u52a0\u5185\u5bb9",
                    newLineWithSlash: "\u5feb\u901f\u6dfb\u52a0\u5185\u5bb9",
                    noResults: "No results",
                    openLink: "Open link",
                    orderedList: "\u6709\u5e8f\u5217\u8868",
                    pageBreak: "\u5206\u9875\u7ebf",
                    pasteLink: "Paste a link\u2026",
                    pasteLinkWithTitle: function(e) {
                        return "Paste a ".concat(e, " link\u2026")
                    },
                    placeholder: "Placeholder",
                    quote: "\u5f15\u7528",
                    removeLink: "Remove link",
                    searchOrPasteLink: "\u8f93\u5165\u94fe\u63a5URL",
                    linkTitle: "\u8f93\u5165\u94fe\u63a5\u6587\u672c",
                    strikethrough: "Strikethrough",
                    strong: "Bold",
                    subheading: "Subheading",
                    table: "\u8868\u683c",
                    tip: "Tip",
                    tipNotice: "\u9ad8\u4eae\u5757(notice)",
                    warning: "Warning",
                    warningNotice: "\u9ad8\u4eae\u5757(warning)",
                    blockEquation: "\u516c\u5f0f",
                    inputOrPasteTeX: "\u8f93\u5165\u516c\u5f0f",
                    commonText: "\u6b63\u6587"
                },
                _n = In.div(r || (r = se(["\n  display: flex;\n  flex: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n"])), (function(e) {
                    return e.auto ? "1 1 auto" : "initial"
                }), (function(e) {
                    return e.column ? "column" : "row"
                }), (function(e) {
                    return e.align
                }), (function(e) {
                    return e.justify
                })),
                Bn = Ie(n(64386)),
                zn = n(44454),
                Hn = Ie(n(55123)),
                jn = n(38556),
                Vn = Ie(n(64386)),
                $n = Vn.default.forwardRef((function() {
                    return Vn.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Vn.default.createElement("path", {
                        d: "M5.41333 4H14M5.41333 8.32H14M5.41333 12.64H14M2 4V4.00853M2 8.32V8.32853M2 12.64V12.6485",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Wn = Ie(n(64386)),
                Fn = Wn.default.forwardRef((function() {
                    return Wn.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Wn.default.createElement("g", {
                        clipPath: "url(#clip0_36_15267)"
                    }, Wn.default.createElement("path", {
                        d: "M7.2001 3.2001H14.4001M7.2001 8.0001H14.4001M8.0001 12.8001H14.4001M1.6001 11.2001C1.6001 10.7758 1.76867 10.3688 2.06873 10.0687C2.36878 9.76867 2.77575 9.6001 3.2001 9.6001C3.62444 9.6001 4.03141 9.76867 4.33147 10.0687C4.63153 10.3688 4.8001 10.7758 4.8001 11.2001C4.8001 11.6729 4.4001 12.0001 4.0001 12.4001L1.6001 14.4001H4.8001M3.2001 6.4001V1.6001L1.6001 3.2001",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), Wn.default.createElement("defs", null, Wn.default.createElement("clipPath", {
                        id: "clip0_36_15267"
                    }, Wn.default.createElement("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    }))))
                })),
                Un = Ie(n(64386)),
                Zn = Un.default.forwardRef((function() {
                    return Un.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Un.default.createElement("path", {
                        d: "M1.6001 14.4001V12.3244C1.6001 11.5602 2.22813 10.9406 3.00284 10.9406L12.9974 10.9406C13.7721 10.9406 14.4001 11.5602 14.4001 12.3244V14.4001M1.6001 1.6001V3.67577C1.6001 4.44002 2.22813 5.05956 3.00284 5.05956H12.9974C13.7721 5.05956 14.4001 4.44002 14.4001 3.67577V1.6001M1.6001 8.00014H1.64281M4.74671 8.00014H4.78942M7.97874 8.00014H8.02146M11.1681 8.00014H11.2108M14.3574 8.00014H14.4001",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                qn = Ie(n(64386)),
                Gn = qn.default.forwardRef((function() {
                    return qn.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, qn.default.createElement("path", {
                        d: "M2.10254 13.3334V8.00008M2.10254 8.00008V2.66675M2.10254 8.00008H9.23074M9.23074 8.00008V13.3334M9.23074 8.00008V2.66675M13.6 13.4667V11.0667V8.66675L12 10.2667",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Kn = Ie(n(64386)),
                Jn = Kn.default.forwardRef((function() {
                    return Kn.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Kn.default.createElement("path", {
                        d: "M11.3333 10.0001C11.3333 9.5758 11.5019 9.16883 11.802 8.86878C12.102 8.56872 12.509 8.40015 12.9333 8.40015C13.3577 8.40015 13.7646 8.56872 14.0647 8.86878C14.3648 9.16883 14.5333 9.5758 14.5333 10.0001C14.5333 10.4729 14.1333 10.8001 13.7333 11.2001L11.3333 13.2001H14.5333M2.10254 13.3334V8.00008M2.10254 8.00008V2.66675M2.10254 8.00008H9.23074M9.23074 8.00008V13.3334M9.23074 8.00008V2.66675",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Xn = Ie(n(64386)),
                Yn = Xn.default.forwardRef((function() {
                    return Xn.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Xn.default.createElement("path", {
                        d: "M11.2667 9.33348C11.2667 8.90913 11.4352 8.50217 11.7353 8.20211C12.0354 7.90205 12.4423 7.73348 12.8667 7.73348C13.291 7.73348 13.698 7.90205 13.998 8.20211C14.2981 8.50217 14.4667 8.90913 14.4667 9.33348C14.4667 9.80628 14.0667 10.1335 13.6667 10.5335C14.0667 10.9335 14.4667 11.2606 14.4667 11.7334C14.4667 12.1578 14.2981 12.5647 13.998 12.8648C13.698 13.1648 13.291 13.3334 12.8667 13.3334C12.4423 13.3334 12.0354 13.1648 11.7353 12.8648C11.4352 12.5647 11.2667 12.1578 11.2667 11.7334M2.10254 13.3334V8.00008M2.10254 8.00008V2.66675M2.10254 8.00008H9.23074M9.23074 8.00008V13.3334M9.23074 8.00008V2.66675",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Qn = Ie(n(64386)),
                er = Qn.default.forwardRef((function() {
                    return Qn.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Qn.default.createElement("path", {
                        d: "M3.91901 5.79375L2.43004 7.28272C1.87395 7.83881 1.55416 8.59545 1.56 9.39066C1.56585 10.1859 1.87864 10.9471 2.46111 11.5116C3.02557 12.0941 3.78699 12.4069 4.58207 12.4127C5.39529 12.4187 6.13402 12.1169 6.69014 11.5608L8.17911 10.0719M10.081 8.20636L11.57 6.71739C12.126 6.1613 12.4458 5.40466 12.44 4.60945C12.4341 3.81424 12.1214 3.05299 11.5389 2.4885C10.9746 1.92417 10.2133 1.61137 9.41806 1.60552C8.62285 1.59968 7.86611 1.90131 7.30999 2.45742L5.82102 3.94639M4.74207 9.21817L9.20898 4.75126",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                tr = Ie(n(64386)),
                nr = tr.default.forwardRef((function() {
                    return tr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, tr.default.createElement("rect", {
                        width: "14",
                        height: "14",
                        transform: "translate(0 0.00463867)",
                        fill: "#F2F2F2"
                    }), tr.default.createElement("path", {
                        d: "M7.00005 2.80469L7.00005 11.2047M11.2 7.00469L2.80005 7.00469",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round"
                    }))
                })),
                rr = Ie(n(64386)),
                or = rr.default.forwardRef((function() {
                    return rr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, rr.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.3335 4.5C1.3335 4.22386 1.54669 4 1.80969 4H2.62382C5.23678 4 7.355 5.96995 7.355 8.4V11.5C7.355 11.7761 7.1418 12 6.87881 12H5.25055C4.98755 12 4.77436 11.7761 4.77436 11.5V8.4C4.77436 7.29543 3.81153 6.4 2.62382 6.4H1.80969C1.54669 6.4 1.3335 6.17614 1.3335 5.9V4.5ZM8.64532 4.5C8.64532 4.22386 8.85852 4 9.12151 4H9.93565C12.5486 4 14.6668 5.96995 14.6668 8.4V11.5C14.6668 11.7761 14.4536 12 14.1906 12H12.5624C12.2994 12 12.0862 11.7761 12.0862 11.5V8.4C12.0862 7.29543 11.1234 6.4 9.93565 6.4H9.12151C8.85852 6.4 8.64532 6.17614 8.64532 5.9V4.5Z",
                        stroke: "#525252",
                        strokeWidth: "1.33"
                    }))
                })),
                ir = Ie(n(64386)),
                ar = ir.default.forwardRef((function() {
                    return ir.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, ir.default.createElement("path", {
                        d: "M6.6651 1.6001C6.6651 1.23283 6.36737 0.935098 6.0001 0.935098C5.63283 0.935098 5.3351 1.23283 5.3351 1.6001H6.6651ZM5.3351 14.4001C5.3351 14.7674 5.63283 15.0651 6.0001 15.0651C6.36737 15.0651 6.6651 14.7674 6.6651 14.4001H5.3351ZM4.0001 2.2651H12.0001V0.935098H4.0001V2.2651ZM13.7351 4.0001V12.0001H15.0651V4.0001H13.7351ZM12.0001 13.7351H4.0001V15.0651H12.0001V13.7351ZM2.2651 12.0001V4.0001H0.935098V12.0001H2.2651ZM4.0001 13.7351C3.04188 13.7351 2.2651 12.9583 2.2651 12.0001H0.935098C0.935098 13.6929 2.30735 15.0651 4.0001 15.0651V13.7351ZM13.7351 12.0001C13.7351 12.9583 12.9583 13.7351 12.0001 13.7351V15.0651C13.6929 15.0651 15.0651 13.6929 15.0651 12.0001H13.7351ZM12.0001 2.2651C12.9583 2.2651 13.7351 3.04188 13.7351 4.0001H15.0651C15.0651 2.30735 13.6929 0.935098 12.0001 0.935098V2.2651ZM4.0001 0.935098C2.30735 0.935098 0.935098 2.30735 0.935098 4.0001H2.2651C2.2651 3.04188 3.04188 2.2651 4.0001 2.2651V0.935098ZM5.3351 1.6001V14.4001H6.6651V1.6001H5.3351ZM2.0001 6.6651H14.0001V5.3351H2.0001V6.6651Z",
                        fill: "#525252"
                    }))
                })),
                lr = Ie(n(64386)),
                sr = lr.default.forwardRef((function() {
                    return lr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, lr.default.createElement("path", {
                        d: "M4.72617 13.4918H4.38822C3.45498 13.4918 2.69845 12.7353 2.69845 11.802V8.42249C2.69845 7.90194 1.6001 7.6621 1.6001 7.6621C1.6001 7.6621 2.69845 7.46164 2.69845 6.9017V4.19807C2.69845 3.26484 3.45498 2.5083 4.38822 2.5083H4.72617M11.274 2.5083H11.612C12.5452 2.5083 13.3017 3.26484 13.3017 4.19807V7.57761C13.3017 8.09816 14.4001 8.338 14.4001 8.338C14.4001 8.338 13.3017 8.53846 13.3017 9.0984L13.3017 11.802C13.3017 12.7353 12.5452 13.4918 11.612 13.4918H11.274",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                cr = Ie(n(64386)),
                ur = cr.default.forwardRef((function() {
                    return cr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, cr.default.createElement("path", {
                        d: "M1.98794 13.0089C1.72825 13.2686 1.72825 13.6897 1.98794 13.9494C2.24764 14.2091 2.6687 14.2091 2.9284 13.9494L1.98794 13.0089ZM5.62484 10.3125L6.09506 9.84227C5.97035 9.71756 5.80121 9.6475 5.62484 9.6475C5.44847 9.6475 5.27932 9.71756 5.15461 9.84227L5.62484 10.3125ZM7.20817 11.8958L6.73794 12.3661C6.86266 12.4908 7.0318 12.5608 7.20817 12.5608C7.38454 12.5608 7.55368 12.4908 7.6784 12.3661L7.20817 11.8958ZM10.7707 8.33333L11.2409 7.86311C11.1162 7.7384 10.947 7.66833 10.7707 7.66833C10.5943 7.66833 10.4252 7.7384 10.3004 7.86311L10.7707 8.33333ZM13.4671 11.9702C13.7268 12.2299 14.1479 12.2299 14.4076 11.9702C14.6673 11.7105 14.6673 11.2895 14.4076 11.0298L13.4671 11.9702ZM2.9284 13.9494L6.09506 10.7827L5.15461 9.84227L1.98794 13.0089L2.9284 13.9494ZM5.15461 10.7827L6.73794 12.3661L7.6784 11.4256L6.09506 9.84227L5.15461 10.7827ZM7.6784 12.3661L11.2409 8.80356L10.3004 7.86311L6.73794 11.4256L7.6784 12.3661ZM10.3004 8.80356L13.4671 11.9702L14.4076 11.0298L11.2409 7.86311L10.3004 8.80356ZM4.0415 2.665H11.9582V1.335H4.0415V2.665ZM13.6682 4.375V12.2917H14.9982V4.375H13.6682ZM11.9582 14.0017H4.0415V15.3317H11.9582V14.0017ZM2.3315 12.2917V4.375H1.0015V12.2917H2.3315ZM4.0415 14.0017C3.0971 14.0017 2.3315 13.2361 2.3315 12.2917H1.0015C1.0015 13.9706 2.36256 15.3317 4.0415 15.3317V14.0017ZM13.6682 12.2917C13.6682 13.2361 12.9026 14.0017 11.9582 14.0017V15.3317C13.6371 15.3317 14.9982 13.9706 14.9982 12.2917H13.6682ZM11.9582 2.665C12.9026 2.665 13.6682 3.43059 13.6682 4.375H14.9982C14.9982 2.69605 13.6371 1.335 11.9582 1.335V2.665ZM4.0415 1.335C2.36256 1.335 1.0015 2.69605 1.0015 4.375H2.3315C2.3315 3.43059 3.0971 2.665 4.0415 2.665V1.335ZM5.7515 5.5625C5.7515 5.85107 5.51757 6.085 5.229 6.085V7.415C6.25211 7.415 7.0815 6.58561 7.0815 5.5625H5.7515ZM5.229 6.085C4.94043 6.085 4.7065 5.85107 4.7065 5.5625H3.3765C3.3765 6.58561 4.2059 7.415 5.229 7.415V6.085ZM4.7065 5.5625C4.7065 5.27393 4.94043 5.04 5.229 5.04V3.71C4.2059 3.71 3.3765 4.53939 3.3765 5.5625H4.7065ZM5.229 5.04C5.51757 5.04 5.7515 5.27393 5.7515 5.5625H7.0815C7.0815 4.53939 6.25211 3.71 5.229 3.71V5.04Z",
                        fill: "#525252"
                    }))
                })),
                dr = Ie(n(64386)),
                pr = (dr.default.forwardRef((function() {
                    return dr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, dr.default.createElement("path", {
                        d: "M2.15869 13C3.0423 11.5262 4.97888 10.5175 8.00021 10.5175C11.0215 10.5175 12.9581 11.5262 13.8417 13M10.4002 5.4C10.4002 6.72548 9.32569 7.8 8.00021 7.8C6.67472 7.8 5.60021 6.72548 5.60021 5.4C5.60021 4.07452 6.67472 3 8.00021 3C9.32569 3 10.4002 4.07452 10.4002 5.4Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round"
                    }))
                })), Ie(n(64386))),
                fr = (pr.default.forwardRef((function() {
                    return pr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, pr.default.createElement("path", {
                        d: "M7.16531 12.4522H14.4001M1.6001 3.54785L6.05227 8.00003L1.6001 12.4522",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })), Ie(n(64386))),
                hr = fr.default.forwardRef((function() {
                    return fr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, fr.default.createElement("path", {
                        d: "M9.19961 11.2001V4.8001M6.79961 11.2001V4.8001M11.9996 1.6001L3.99961 1.6001C2.67413 1.6001 1.59961 2.67461 1.59961 4.0001L1.59961 12.0001C1.59961 13.3256 2.67413 14.4001 3.99961 14.4001H11.9996C13.3251 14.4001 14.3996 13.3256 14.3996 12.0001V4.0001C14.3996 2.67462 13.3251 1.6001 11.9996 1.6001Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                mr = Ie(n(64386)),
                gr = mr.default.forwardRef((function() {
                    return mr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, mr.default.createElement("path", {
                        d: "M4.79961 4.8001L4.79961 11.2001M7.19961 4.8001L7.19961 11.2001M3.99961 14.4001H11.9996C13.3251 14.4001 14.3996 13.3256 14.3996 12.0001V4.0001C14.3996 2.67461 13.3251 1.6001 11.9996 1.6001H3.99961C2.67413 1.6001 1.59961 2.67461 1.59961 4.0001V12.0001C1.59961 13.3256 2.67413 14.4001 3.99961 14.4001Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                vr = Ie(n(64386)),
                kr = vr.default.forwardRef((function() {
                    return vr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, vr.default.createElement("path", {
                        d: "M11.1996 11.2001V4.8001M8.79961 11.2001V4.8001M11.9996 1.6001L3.99961 1.6001C2.67413 1.6001 1.59961 2.67461 1.59961 4.0001L1.59961 12.0001C1.59961 13.3256 2.67413 14.4001 3.99961 14.4001H11.9996C13.3251 14.4001 14.3996 13.3256 14.3996 12.0001V4.0001C14.3996 2.67462 13.3251 1.6001 11.9996 1.6001Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                yr = Ie(n(64386)),
                br = yr.default.forwardRef((function() {
                    return yr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, yr.default.createElement("path", {
                        d: "M5.13372 1.3999H2.64484C1.95755 1.3999 1.40039 1.95706 1.40039 2.64435V5.13324M5.13372 12.5999H2.64484C1.95755 12.5999 1.40039 12.0427 1.40039 11.3555V8.86657M8.86706 1.3999H11.3559C12.0432 1.3999 12.6004 1.95706 12.6004 2.64435V5.13324M12.6004 8.86657V11.3555C12.6004 12.0427 12.0432 12.5999 11.3559 12.5999H8.86706",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round"
                    }))
                })),
                wr = Ie(n(64386)),
                xr = wr.default.forwardRef((function() {
                    return wr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, wr.default.createElement("path", {
                        d: "M1.85347 8.7499C2.58833 10.9857 4.69296 12.5999 7.17461 12.5999C10.2674 12.5999 12.7746 10.0927 12.7746 6.9999C12.7746 3.90711 10.2674 1.3999 7.17461 1.3999C5.10182 1.3999 3.29206 2.52606 2.32379 4.1999M4.02461 4.8999H1.22461V2.0999",
                        stroke: "#525252",
                        strokeWidth: "1.17",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Cr = Ie(n(64386)),
                Sr = Cr.default.forwardRef((function() {
                    return Cr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Cr.default.createElement("path", {
                        d: "M6.2999 10.3295L7.6999 3.6795M3.4999 9.27951L1.3999 7.17951L3.4999 5.0795M10.4999 5.0795L12.5999 7.17951L10.4999 9.27951",
                        stroke: "#525252",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Mr = Ie(n(64386)),
                Er = Mr.default.forwardRef((function() {
                    return Mr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Mr.default.createElement("path", {
                        d: "M2.7998 7.00466V12.6047H8.61519C10.1616 12.6047 11.4152 11.3511 11.4152 9.80466C11.4152 8.25826 10.1616 7.00466 8.61519 7.00466H2.7998ZM2.7998 7.00466H7.75365C9.30005 7.00466 10.5537 5.75106 10.5537 4.20466C10.5537 2.65827 9.30005 1.40466 7.75365 1.40466H2.7998V7.00466Z",
                        stroke: "#525252",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Lr = Ie(n(64386)),
                Ar = Lr.default.forwardRef((function() {
                    return Lr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Lr.default.createElement("path", {
                        d: "M5.74613 11.9047L8.57724 2.10468M5.74613 11.9047H2.80029M5.74613 11.9047H8.69196M8.57724 2.10468H5.6314M8.57724 2.10468H11.5231",
                        stroke: "#525252",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Ir = Ie(n(64386)),
                Tr = Ir.default.forwardRef((function() {
                    return Ir.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Ir.default.createElement("path", {
                        d: "M6.05714 12.8001H8.23529M8.23529 12.8001H10.5143M8.23529 12.8001V3.20007M8.23529 3.20007H4.68571C4.307 3.20007 4 3.50708 4 3.88579V4.89419M8.23529 3.20007H11.5025C11.8812 3.20007 12.1882 3.50708 12.1882 3.88579V5.17654",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Or = Ie(n(64386)),
                Rr = (Or.default.forwardRef((function() {
                    return Or.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Or.default.createElement("path", {
                        d: "M4.72617 13.4918H4.38822C3.45498 13.4918 2.69845 12.7353 2.69845 11.802V8.42249C2.69845 7.90194 1.6001 7.6621 1.6001 7.6621C1.6001 7.6621 2.69845 7.46164 2.69845 6.9017V4.19807C2.69845 3.26484 3.45498 2.5083 4.38822 2.5083H4.72617M11.274 2.5083H11.612C12.5452 2.5083 13.3017 3.26484 13.3017 4.19807V7.57761C13.3017 8.09816 14.4001 8.338 14.4001 8.338C14.4001 8.338 13.3017 8.53846 13.3017 9.0984L13.3017 11.802C13.3017 12.7353 12.5452 13.4918 11.612 13.4918H11.274",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })), Ie(n(64386))),
                Pr = Rr.default.forwardRef((function() {
                    return Rr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Rr.default.createElement("path", {
                        d: "M1.59961 3.60459H14.3996M5.59961 1.20459H10.3996M6.39961 11.6046V6.80459M9.59961 11.6046V6.80459M10.7996 14.8046H5.19961C4.31595 14.8046 3.59961 14.0882 3.59961 13.2046L3.23433 4.43789C3.21539 3.98339 3.57874 3.60459 4.03364 3.60459H11.9656C12.4205 3.60459 12.7838 3.98339 12.7649 4.43789L12.3996 13.2046C12.3996 14.0882 11.6833 14.8046 10.7996 14.8046Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Dr = Ie(n(64386)),
                Nr = Dr.default.forwardRef((function() {
                    return Dr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Dr.default.createElement("path", {
                        d: "M7 13.3334L2 8.00008M2 8.00008L7 2.66675M2 8.00008H14",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                _r = Ie(n(64386)),
                Br = _r.default.forwardRef((function() {
                    return _r.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, _r.default.createElement("path", {
                        d: "M9 2.66675L14 8.00008M14 8.00008L9 13.3334M14 8.00008L2 8.00008",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                zr = Ie(n(64386)),
                Hr = zr.default.forwardRef((function() {
                    return zr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, zr.default.createElement("path", {
                        d: "M3.88672 7.19995L8.001 3.19995M8.001 3.19995L12.1153 7.19995M8.001 3.19995V12.8",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                jr = Ie(n(64386)),
                Vr = jr.default.forwardRef((function() {
                    return jr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, jr.default.createElement("path", {
                        d: "M12.1153 8.79995L8.001 12.8M8.001 12.8L3.88672 8.79995M8.001 12.8L8.00101 3.19995",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                $r = Ie(n(64386)),
                Wr = $r.default.forwardRef((function() {
                    return $r.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, $r.default.createElement("path", {
                        d: "M1.6001 4.26676C1.6001 2.794 2.794 1.6001 4.26676 1.6001H11.7334C13.2062 1.6001 14.4001 2.794 14.4001 4.26676V11.7334C14.4001 13.2062 13.2062 14.4001 11.7334 14.4001H4.26676C2.794 14.4001 1.6001 13.2062 1.6001 11.7334V4.26676Z",
                        stroke: "#525252",
                        strokeWidth: "1.33"
                    }), $r.default.createElement("path", {
                        d: "M10.3996 7.7556C10.8681 8.02635 10.8699 8.36695 10.3996 8.67305L6.76638 11.2142C6.30987 11.4668 5.99982 11.3176 5.96727 10.771L5.95185 5.45248C5.94158 4.94891 6.34156 4.80664 6.7227 5.04807L10.3996 7.7556Z",
                        stroke: "#525252",
                        strokeWidth: "1.33"
                    }))
                })),
                Fr = Ie(n(64386)),
                Ur = Fr.default.forwardRef((function() {
                    return Fr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Fr.default.createElement("path", {
                        d: "M9.10039 7.0042H7.00039M7.00039 7.0042H4.90039M7.00039 7.0042V9.1042M7.00039 7.0042L7.00039 4.9042M12.6004 7.00454C12.6004 10.0973 10.0932 12.6045 7.00039 12.6045C3.9076 12.6045 1.40039 10.0973 1.40039 7.00454C1.40039 3.91175 3.9076 1.40454 7.00039 1.40454C10.0932 1.40454 12.6004 3.91175 12.6004 7.00454Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round"
                    }))
                })),
                Zr = Ie(n(64386)),
                qr = Zr.default.forwardRef((function() {
                    return Zr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Zr.default.createElement("path", {
                        d: "M1.6001 5.47483L5.39133 9.26607M5.39133 9.26607L9.18257 13.0573M5.39133 9.26607L9.18257 5.47483M5.39133 9.26607L1.6001 13.0573M11.2688 4.73159C11.2688 4.30725 11.4374 3.90028 11.7375 3.60022C12.0375 3.30016 12.4445 3.13159 12.8688 3.13159C13.2932 3.13159 13.7002 3.30016 14.0002 3.60022C14.3003 3.90028 14.4688 4.30725 14.4688 4.73159C14.4688 5.20439 14.0688 5.53159 13.6688 5.93159L11.2688 7.93159H14.4688",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Gr = Ie(n(64386)),
                Kr = Gr.default.forwardRef((function() {
                    return Gr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Gr.default.createElement("path", {
                        d: "M5.50747 11.1999V7.87678M5.50747 7.87678V4.5537M5.50747 7.87678H10.4921M10.4921 7.87678V11.1999M10.4921 7.87678V4.5537M3.19985 14.4H12.7999C13.6835 14.4 14.3999 13.6836 14.3999 12.8V3.19998C14.3999 2.31632 13.6835 1.59998 12.7999 1.59998H3.19985C2.3162 1.59998 1.59985 2.31632 1.59985 3.19998V12.8C1.59985 13.6836 2.3162 14.4 3.19985 14.4Z",
                        stroke: "#525252",
                        strokeWidth: "1.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Jr = Ie(n(64386)),
                Xr = Jr.default.forwardRef((function() {
                    return Jr.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Jr.default.createElement("path", {
                        d: "M1.40039 3.15469H12.6004M4.90039 1.05469H9.10039M5.60039 10.1547V5.95469M8.40039 10.1547V5.95469M9.45039 12.9547H4.55039C3.77719 12.9547 3.15039 12.3279 3.15039 11.5547L2.83077 3.88383C2.8142 3.48614 3.13213 3.15469 3.53016 3.15469H10.4706C10.8686 3.15469 11.1866 3.48614 11.17 3.88383L10.8504 11.5547C10.8504 12.3279 10.2236 12.9547 9.45039 12.9547Z",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                Yr = Ie(n(64386)),
                Qr = Yr.default.forwardRef((function() {
                    return Yr.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Yr.default.createElement("path", {
                        d: "M14.3996 13.2H1.59961M13.1996 9.73328H3.78352M14.3996 6.26662H1.59961M11.5996 3.19995L4.75823 3.19995",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                eo = Ie(n(64386)),
                to = eo.default.forwardRef((function() {
                    return eo.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, eo.default.createElement("path", {
                        d: "M1.60039 2.3999L14.4004 2.3999M1.60039 5.86657L11.0165 5.86657M1.60039 9.33324L14.4004 9.33324M1.60039 12.7999L8.44177 12.7999",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                no = Ie(n(64386)),
                ro = no.default.forwardRef((function() {
                    return no.default.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, no.default.createElement("path", {
                        d: "M14.3996 12.7999H1.59961M14.3996 9.33324H4.98352M14.3996 5.86657H1.59961M14.3996 2.3999L7.55823 2.3999",
                        stroke: "#525252",
                        strokeWidth: "1.33",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                oo = n(35285),
                io = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return function(n) {
                        if (!e) return !1;
                        var r = (0, oo.findSelectedNodeOfType)(e)(n.selection) || (0, oo.findParentNode)((function(t) {
                            return t.type === e
                        }))(n.selection);
                        return Object.keys(t).length && r ? r.node.hasMarkup(e, Se(Se({}, r.node.attrs), t)) : !!r
                    }
                };

            function ao(e) {
                return [{
                    name: "deleteTable",
                    tooltip: e.deleteTable,
                    icon: Xr,
                    active: function() {
                        return !1
                    }
                }]
            }
            var lo = n(95580);

            function so(e) {
                for (var t = e.selection.$head, n = t.depth; n > 0; n--)
                    if (["ordered_list", "bullet_list", "checkbox_list"].includes(t.node(n).type.name)) return !0;
                return !1
            }
            var co = function(e) {
                    return function(t) {
                        if (!e) return !1;
                        var n = t.selection,
                            r = n.from,
                            o = n.$from,
                            i = n.to;
                        return n.empty ? e.isInSet(t.storedMarks || o.marks()) : t.doc.rangeHasMark(r, i, e)
                    }
                },
                uo = function(e) {
                    var t = e.selection,
                        n = t.from,
                        r = t.to,
                        o = e.doc.childAfter(n);
                    return e.doc.childBefore(r).index === o.index
                };
            var po = Ie(n(64386)),
                fo = n(44454),
                ho = n(35105),
                mo = n(64386);
            var go = n(64386);
            var vo = n(64386);

            function ko(e) {
                if (e.isColSelection && e.isColSelection()) {
                    var t = e.$from.path;
                    return t[t.length - 5]
                }
            }

            function yo(e) {
                if (e.isRowSelection && e.isRowSelection()) {
                    var t = e.$from.path;
                    return t[t.length - 8]
                }
            }
            var bo = n(35285),
                wo = "undefined" === typeof window,
                xo = {
                    left: -1e3,
                    top: 0,
                    offset: 0,
                    visible: !1
                };

            function Co(e) {
                var t, n, r = e.menuRef,
                    o = e.isSelectingText,
                    i = e.props,
                    a = i.view,
                    l = i.active,
                    s = a.state.selection,
                    c = function(e) {
                        var t = (0, mo.useState)({
                                width: 0,
                                height: 0
                            }),
                            n = le(t, 2),
                            r = n[0],
                            o = n[1];
                        return (0, mo.useEffect)((function() {
                            var t = new ho.ResizeObserver((function(e) {
                                e.forEach((function(e) {
                                    var t = e.target;
                                    r.width === t.clientWidth && r.height === t.clientHeight || o({
                                        width: t.clientWidth,
                                        height: t.clientHeight
                                    })
                                }))
                            }));
                            return t.observe(e.current),
                                function() {
                                    return t.disconnect()
                                }
                        }), [e]), r
                    }(r),
                    u = c.width,
                    d = c.height,
                    p = function() {
                        var e = (0, vo.useState)((function() {
                                var e;
                                return (null == (e = window.visualViewport) ? void 0 : e.height) || window.innerHeight
                            })),
                            t = le(e, 2),
                            n = t[0],
                            r = t[1];
                        return (0, vo.useLayoutEffect)((function() {
                            var e, t = function() {
                                r((function() {
                                    var e;
                                    return (null == (e = window.visualViewport) ? void 0 : e.height) || window.innerHeight
                                }))
                            };
                            return null == (e = window.visualViewport) || e.addEventListener("resize", t),
                                function() {
                                    var e;
                                    null == (e = window.visualViewport) || e.removeEventListener("resize", t)
                                }
                        }), []), n
                    }(),
                    f = function(e) {
                        var t = (0, go.useState)(!1),
                            n = le(t, 2),
                            r = n[0],
                            o = n[1];
                        return (0, go.useEffect)((function() {
                            if (window.matchMedia) {
                                var t = window.matchMedia(e);
                                t.matches !== r && o(t.matches);
                                var n = function() {
                                    o(t.matches)
                                };
                                return t.addListener(n),
                                    function() {
                                        return t.removeListener(n)
                                    }
                            }
                        }), [r, e]), r
                    }("(hover: none) and (pointer: coarse)");
                if (!l || !u || !d || wo || o) return xo;
                if (f && p) return {
                    left: 0,
                    right: 0,
                    top: p - d,
                    offset: 0,
                    visible: !0
                };
                try {
                    t = a.coordsAtPos(s.from), n = a.coordsAtPos(s.to, -1)
                } catch (fe) {
                    return console.warn(fe), xo
                }
                var h = {
                    top: Math.min(t.top, n.top),
                    bottom: Math.max(t.bottom, n.bottom),
                    left: Math.min(t.left, n.left),
                    right: Math.max(t.right, n.right)
                };
                if (io(a.state.schema.nodes.code_block)(a.state)) {
                    var m = a.domAtPos(s.from),
                        g = a.state.doc.cut(a.state.selection.from, a.state.selection.to).textContent;
                    if (m.node && !g) {
                        for (var v = m.node;
                            "PRE" !== v.tagName && v.parentElement;) v = v.parentElement;
                        var k = v.getBoundingClientRect(),
                            y = k.left,
                            b = k.top,
                            w = k.width;
                        return h.top = b, h.left = y, {
                            left: Math.round(y + w + 5),
                            top: Math.round(b + window.scrollY - d + 38),
                            offset: 0,
                            visible: !0
                        }
                    }
                }
                var x = ko(s),
                    C = yo(s),
                    S = (0, bo.getCellsInRow)(0)(s),
                    M = (0, bo.getCellsInColumn)(0)(s);
                if (void 0 === C && void 0 === x && S && M) {
                    var E = a.domAtPos(s.from),
                        L = a.state.doc.cut(a.state.selection.from, a.state.selection.to).textContent;
                    if (E.node && !L) {
                        for (var A = E.node;
                            ("DIV" !== A.tagName || "scrollable" !== A.className) && A.parentElement;) A = A.parentElement;
                        var I = A.getBoundingClientRect(),
                            T = I.left,
                            O = I.top,
                            R = I.width;
                        return h.top = O, h.left = T, {
                            left: Math.round(T + R + 5),
                            top: Math.round(O + window.scrollY - d + 45),
                            offset: 0,
                            visible: !0
                        }
                    }
                }
                var P = s.isColSelection && s.isColSelection(),
                    D = s.isRowSelection && s.isRowSelection();
                if (P) {
                    var N = a.domAtPos(s.from).node.getBoundingClientRect().width;
                    h.top -= 20, h.right = h.left + N
                }
                D && (h.right = h.left = h.left - 18);
                var _ = s.node && "image" === s.node.type.name,
                    B = s.node && "video" === s.node.type.name,
                    z = s.node && "block_equation" === s.node.type.name,
                    H = co(a.state.schema.marks.link)(a.state);
                if (_) {
                    var j = a.nodeDOM(s.from).getElementsByTagName("img")[0].getBoundingClientRect(),
                        V = j.left,
                        $ = j.top,
                        W = j.width;
                    return {
                        left: Math.round(V + W / 2 + window.scrollX - u / 2),
                        top: Math.round($ + window.scrollY - d - 2),
                        offset: 0,
                        visible: !0
                    }
                }
                if (B) {
                    var F = a.nodeDOM(s.from).querySelector(".video-wrapper").getBoundingClientRect(),
                        U = F.left,
                        Z = F.top,
                        q = F.width;
                    return {
                        left: Math.round(U + q / 2 + window.scrollX - u / 2),
                        top: Math.round(Z + window.scrollY - d - 5),
                        offset: 0,
                        visible: !0
                    }
                }
                if (z) {
                    var G = Math.min(window.innerWidth - u - 8, Math.max(8, h.left)),
                        K = Math.min(window.innerHeight - d - 8, Math.max(8, h.bottom - d)),
                        J = a.nodeDOM(s.from).getBoundingClientRect(),
                        X = J.width,
                        Y = J.height;
                    return {
                        left: G + X / 2 - 160,
                        top: Math.round(K + window.scrollY + Y + 120),
                        offset: 120,
                        visible: !0
                    }
                }
                if (i.ifCreate) {
                    var Q = h.left,
                        ee = Math.min(window.innerWidth - u - 12, Math.max(12, Q)),
                        te = Math.min(window.innerHeight - d - 12, Math.max(12, h.top - d)),
                        ne = ee - (Q - u / 2);
                    return {
                        left: Math.round(ee + window.scrollX),
                        top: Math.round(te + window.scrollY),
                        offset: Math.round(ne),
                        visible: !0
                    }
                }
                if (H) {
                    var re = h.left,
                        oe = Math.min(window.innerWidth - u - 12, Math.max(12, re)),
                        ie = Math.min(window.innerHeight - d - 12, Math.max(12, h.bottom + 15)),
                        ae = oe - (re - u / 2);
                    return {
                        left: Math.round(oe + window.scrollX),
                        top: Math.round(ie + window.scrollY),
                        offset: Math.round(ae),
                        visible: !0
                    }
                }
                var se = Math.abs(h.right - h.left) / 2,
                    ce = h.left + se,
                    ue = Math.min(window.innerWidth - u - 12, Math.max(12, ce - u / 2)),
                    de = Math.min(window.innerHeight - d - 12, Math.max(12, h.top - d)),
                    pe = ue - (ce - u / 2);
                return {
                    left: Math.round(ue + window.scrollX),
                    top: Math.round(de + window.scrollY),
                    offset: Math.round(pe),
                    visible: !0
                }
            }

            function So(e) {
                var t = e.forwardedRef || po.createRef(),
                    n = po.useState(!1),
                    r = le(n, 2),
                    o = r[0],
                    i = r[1],
                    a = Co({
                        menuRef: t,
                        isSelectingText: o,
                        props: e
                    });
                return po.useEffect((function() {
                    var t = function() {
                            e.active || i(!0)
                        },
                        n = function() {
                            i(!1)
                        };
                    return window.addEventListener("mousedown", t), window.addEventListener("mouseup", n),
                        function() {
                            window.removeEventListener("mousedown", t), window.removeEventListener("mouseup", n)
                        }
                }), [e.active]), po.createElement(fo.Portal, null, po.createElement(Mo, {
                    active: e.active && a.visible,
                    ref: t,
                    offset: a.offset,
                    style: {
                        top: "".concat(a.top, "px"),
                        left: "".concat(a.left, "px"),
                        height: e.height ? e.height : void 0
                    }
                }, a.visible && e.children))
            }
            var Mo = In.div(o || (o = se(["\n  will-change: opacity, transform;\n  padding: 4px;\n  position: absolute;\n  z-index: ", ";\n  opacity: 0;\n  // background-color: ", ';\n  background: #FFFFFF;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04), 0px 12px 48px rgba(0, 0, 0, 0.04);\n  border-radius: 5px;\n  height: 32px;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n  transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  box-sizing: border-box;\n  pointer-events: all;\n  white-space: nowrap;\n\n  // &::before {\n  //   content: "";\n  //   display: block;\n  //   width: 24px;\n  //   height: 24px;\n  //   transform: translateX(-50%) rotate(45deg);\n  //   background: ', ";\n  //   border-radius: 3px;\n  //   z-index: -1;\n  //   position: absolute;\n  //   bottom: -2px;\n  //   left: calc(50% - ", "px);\n  //   pointer-events: none;\n  // }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ", ";\n\n  @media print {\n    display: none;\n  }\n\n  @media (hover: none) and (pointer: coarse) {\n    &:before {\n      display: none;\n    }\n\n    transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transform: scale(1);\n    border-radius: 0;\n    width: 100vw;\n    position: fixed;\n  }\n"])), (function(e) {
                    return e.theme.zIndex + 1e3
                }), (function(e) {
                    return e.theme.toolbarBackground
                }), (function(e) {
                    return e.theme.toolbarBackground
                }), (function(e) {
                    return e.offset || 0
                }), (function(e) {
                    return e.active && "\n    transform: translateY(-6px) scale(1);\n    opacity: 1;\n  "
                })),
                Eo = po.forwardRef((function(e, t) {
                    return po.createElement(So, Me(Se({}, e), {
                        forwardedRef: t
                    }))
                })),
                Lo = Ie(n(64386)),
                Ao = n(35285);

            function Io(e) {
                if (e.match(/\n/)) return !1;
                try {
                    return "" !== new URL(e).hostname
                } catch (t) {
                    return !1
                }
            }
            var To = In.input(i || (i = se(["\n  font-size: 15px;\n  background: ", ";\n  color: ", ";\n  border-radius: 2px;\n  padding: 3px 8px;\n  border: 0;\n  margin: 0;\n  outline: none;\n  flex-grow: 1;\n  @media (hover: none) and (pointer: coarse) {\n    font-size: 16px;\n  }\n  &::placeholder {\n    color: rgba(82, 82, 82, 0.6);\n  }\n  &:focus {\n    background: #fff;\n  }\n"])), (function(e) {
                    return e.theme.toolbarInput
                }), (function(e) {
                    return e.theme.toolbarItem
                })),
                Oo = En(a || (a = se(["\n  .hover-a-tag-el {\n    display:none !important;\n  }\n"]))),
                Ro = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).discardInputValue = !1, e.initialValue = e.href, e.initialSelectionLength = e.props.to - e.props.from, e.state = {
                            selectedIndex: -1,
                            value: e.href,
                            previousValue: "",
                            title: e.title,
                            results: {}
                        }, e.componentWillUnmount = function() {
                            (window.gokuEditorHoverLinkEdit && (window.gokuEditorHoverLinkEdit = !1), e.discardInputValue) || (e.state.value !== e.initialValue ? e.state.value && e.state.title && e.save(e.state.value, e.state.title) : !(e.state.value || "").trim() && e.state.title && e.handleRemoveLink())
                        }, e.save = function(t, n) {
                            if (0 !== (t = t.trim()).length) {
                                e.discardInputValue = !0;
                                var r = e.props,
                                    o = r.from,
                                    i = r.to;
                                Io(t) || t.startsWith("/") || t.startsWith("#") || t.startsWith("mailto:") || (t = "https://".concat(t)), e.props.onSelectLink({
                                    href: t,
                                    title: n,
                                    from: o,
                                    to: i
                                })
                            }
                        }, e.handleConfirm = function() {
                            var t = e.state,
                                n = t.selectedIndex,
                                r = t.value,
                                o = t.title,
                                i = e.state.results[r] || [],
                                a = e.props.onCreateLink;
                            if (r && o) {
                                if (n >= 0) {
                                    var l = i[n];
                                    l ? e.save(l.url, l.title) : a && n === i.length && e.handleCreateLink(e.suggestedLinkTitle)
                                } else e.save(r, o);
                                e.initialSelectionLength && e.moveSelectionToEnd()
                            }
                        }, e.handleKeyDown = function(t) {
                            switch (t.key) {
                                case "Enter":
                                    t.preventDefault();
                                    var n = e.state,
                                        r = n.selectedIndex,
                                        o = n.value,
                                        i = n.title,
                                        a = e.state.results[o] || [],
                                        l = e.props.onCreateLink;
                                    if (!o || !i) return;
                                    if (r >= 0) {
                                        var s = a[r];
                                        s ? e.save(s.url, s.title) : l && r === a.length && e.handleCreateLink(e.suggestedLinkTitle)
                                    } else e.save(o, i);
                                    return void(e.initialSelectionLength && e.moveSelectionToEnd());
                                case "Escape":
                                    return t.preventDefault(), void(e.initialValue ? e.setState({
                                        value: e.initialValue
                                    }, e.moveSelectionToEnd) : e.handleRemoveLink())
                            }
                        }, e.handleFocusLink = function(t) {
                            e.setState({
                                selectedIndex: t
                            })
                        }, e.handleChange = function() {
                            var t = te(ee.mark((function t(n) {
                                var r;
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            r = n.target.value, e.setState({
                                                value: r,
                                                selectedIndex: -1
                                            });
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e.handleChangeTitle = function() {
                            var t = te(ee.mark((function t(n) {
                                var r;
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            r = n.target.value, e.setState({
                                                title: r,
                                                selectedIndex: -1
                                            });
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e.handleCreateLink = function(t) {
                            e.discardInputValue = !0;
                            var n = e.props.onCreateLink;
                            if (0 !== (t = t.trim()).length) return n ? n(t) : void 0
                        }, e.handleRemoveLink = function() {
                            e.discardInputValue = !0;
                            var t = e.props,
                                n = t.from,
                                r = t.to,
                                o = t.mark,
                                i = t.view,
                                a = t.onRemoveLink,
                                l = e.props.view,
                                s = l.state,
                                c = l.dispatch;
                            o && c(s.tr.removeMark(n, r, o)), a && a(), i.focus()
                        }, e.moveSelectionToEnd = function() {
                            var t = e.props,
                                n = t.to,
                                r = t.view,
                                o = r.state;
                            (0, r.dispatch)((0, Ao.setTextSelection)(n)(o.tr)), r.focus()
                        }, e
                    }
                    return re(n, [{
                        key: "href",
                        get: function() {
                            return this.props.mark ? this.props.mark.attrs.href : ""
                        }
                    }, {
                        key: "title",
                        get: function() {
                            return this.props.title || ""
                        }
                    }, {
                        key: "suggestedLinkTitle",
                        get: function() {
                            var e = this.props.view.state,
                                t = this.state.value,
                                n = e.doc.cut(e.selection.from, e.selection.to).textContent;
                            return t.trim() || n.trim()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.dictionary,
                                n = e.ifSelect,
                                r = this.state,
                                o = r.value,
                                i = r.title,
                                a = this.props.tooltip;
                            return n && !window.gokuEditorHoverLinkEdit ? Lo.createElement(Do, null, Lo.createElement(No, {
                                style: {
                                    margin: "0px 8px 0px -2px"
                                }
                            }, Lo.createElement(To, {
                                value: o,
                                style: {
                                    width: "236px"
                                },
                                placeholder: t.searchOrPasteLink,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                autoFocus: "" === this.href
                            })), Lo.createElement(Bo, {
                                onClick: this.handleConfirm,
                                className: this.state.value && this.state.title ? "" : "disabled"
                            }, Lo.createElement(a, {
                                tooltip: t.removeLink,
                                placement: "top"
                            }, Lo.createElement("span", {
                                style: {
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 500
                                }
                            }, "\u786e\u8ba4"))), Lo.createElement(Oo, null)) : Lo.createElement(Po, null, Lo.createElement(_o, null, "\u6587\u672c"), Lo.createElement(No, null, Lo.createElement(To, {
                                value: i,
                                placeholder: t.linkTitle,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChangeTitle,
                                autoFocus: !0
                            })), Lo.createElement(_o, null, "\u94fe\u63a5"), Lo.createElement(No, null, Lo.createElement(To, {
                                value: o,
                                placeholder: t.searchOrPasteLink,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange
                            })), Lo.createElement(Bo, {
                                onClick: this.handleConfirm,
                                className: this.state.value && this.state.title ? "" : "disabled"
                            }, Lo.createElement(a, {
                                tooltip: t.removeLink,
                                placement: "top"
                            }, Lo.createElement("span", {
                                style: {
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 500
                                }
                            }, "\u786e\u8ba4"))), Lo.createElement(Oo, null))
                        }
                    }]), n
                }(Lo.Component),
                Po = In(_n)(l || (l = se(["\n  width: 312px;\n  padding: 12px;\n  pointer-events: all;\n  flex-flow: row wrap;\n  .disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"]))),
                Do = In(_n)(s || (s = se(["\n  width: 314px;\n  padding: 4px;\n  pointer-events: all;\n  flex-flow: row wrap;\n  .disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"]))),
                No = In.div(c || (c = se(["\n  margin-top: 8px;\n  margin-bottom: 16px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 2px;\n  input {\n    height: 28px;\n    // line-height: 32px;\n    width: 288px;\n    color: #1a1a1a;\n  }\n"]))),
                _o = In.div(u || (u = se(["\n  width: 100%;\n  line-height: 20px;\n  height: 20p;\n  color: #1a1a1a;\n  font-size: 14px;\n"]))),
                Bo = In.div(d || (d = se(["\n  width: 60px;\n  height: 32px;\n  background: #212121;\n  border-radius: 4px;\n  line-height: 32px;\n  text-align: center;\n  cursor: pointer;\n"]))),
                zo = An(Ro),
                Ho = Ie(n(64386)),
                jo = Ie(n(64386)),
                Vo = In.div(p || (p = se(["\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  margin-left: 8px;\n  border-radius: 3px;\n  border: none;\n  transition: opacity 100ms ease-in-out;\n  padding: 5px 0px 0px 5px;\n  outline: none;\n  pointer-events: all;\n  position: relative;\n  font-size: 12px;\n  line-height: 16px;\n  // opacity: 0.7;\n\n  &:nth-of-type(1) {\n    margin-left: 0px;\n  }\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:hover {\n    // opacity: 1;\n    background: rgba(0, 0, 0, 0.05);\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: default;\n  }\n\n  ", '\n\n  // &:before {\n  //   position: absolute;\n  //   content: "";\n  //   top: -4px;\n  //   right: -4px;\n  //   left: -4px;\n  //   bottom: -4px;\n  // }\n\n  ', ';\n\n  // .editor-selection-tooltip {\n  //   position: absolute;\n  //   top: -40px;\n  //   left: 50%;\n  //   transform: translateX(-50%);\n  //   background: #2A2A2A;\n  //   border-radius: 4px;\n  //   display: none;\n  //   font-weight: 400;\n  //   font-size: 14px;\n  //   line-height: 20px;\n  //   color: #fff;\n  //   padding: 6px 12px;\n  //   &::after {\n  //     content: "";\n  //     display: block;\n  //     position: absolute;\n  //     width: 0;\n  //     height: 0;\n  //     border-color: transparent;\n  //     border-width: 8px;\n  //     border-style: solid;\n  //     top: 100%;\n  //     left: 50%;\n  //     margin-left: -8px;\n  //     border-top-color: #2A2A2A;\n  //   }\n  // }\n\n  &:hover .editor-selection-tooltip {\n    display: inline-block;\n  }\n'])), (function(e) {
                    return e.iconExplain && "width: auto; padding-right: 8px;"
                }), (function(e) {
                    return e.active && "background: rgba(0, 0, 0, 0.03); \n     & svg {\n      path {\n        stroke: #1A1A1A\n      }\n     }\n    "
                })),
                $o = function(e) {
                    var t = e.children,
                        n = e.onClick,
                        r = e.active,
                        o = e.item;
                    return jo.default.createElement(Vo, {
                        onClick: n,
                        active: r,
                        iconExplain: !!o.iconExplain,
                        id: o.name
                    }, t, o.floatExplain ? jo.default.createElement("div", {
                        className: "editor-selection-tooltip"
                    }, o.floatExplain) : null)
                },
                Wo = In.div(f || (f = se(["\n  height: 16px;\n  width: 1px;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  margin-left: 8px;\n  margin-top: 4px;\n  &:nth-of-type(1) {\n    opacity: 0;\n    margin-left: -8px;\n  }\n  &:nth-last-of-type(1) {\n    display: none;\n  }\n"]))),
                Fo = Ie(n(64386)),
                Uo = function(e) {
                    var t = e.item,
                        n = e.commands,
                        r = e.state,
                        o = (0, Fo.useRef)(null),
                        i = (0, Fo.useRef)(null),
                        a = (0, Fo.useState)(!1),
                        l = le(a, 2),
                        s = l[0],
                        c = l[1],
                        u = (0, Fo.useCallback)((function() {
                            i.current && (i.current.style = "display: none", o.current && o.current.firstChild && o.current.firstChild.lastChild && (o.current.firstChild.lastChild.style = "none"))
                        }), []);
                    (0, Fo.useEffect)((function() {
                        var e = function() {
                                i.current && (i.current.style = "display: block", o.current && o.current.firstChild && o.current.firstChild.lastChild && (o.current.firstChild.lastChild.style = "transform: rotate(180deg)"))
                            },
                            t = u;
                        return o.current && i.current && (o.current.addEventListener("mouseover", e), o.current.addEventListener("mouseout", t), i.current.addEventListener("mouseover", e), i.current.addEventListener("mouseout", t)),
                            function() {
                                o.current && i.current && (o.current.removeEventListener("mouseover", e), o.current.removeEventListener("mouseout", t), i.current.removeEventListener("mouseover", e), i.current.removeEventListener("mouseout", t))
                            }
                    }), []);
                    var d = t.children.filter((function(e) {
                        return e.visible
                    }));
                    if (!d.length) return null;
                    var p = Kr,
                        f = t.icon && "no-value-bind" === t.title;
                    f && (p = t.icon), (0, Fo.useEffect)((function() {
                        if (o.current) {
                            var e = o.current.getBoundingClientRect().top;
                            window.innerHeight - e < 250 && !s ? c(!0) : window.innerHeight - e >= 250 && s && c(!1)
                        }
                    }), []);
                    var h = Fo.default.createElement(Go, {
                        ref: i,
                        directionDown: s
                    }, d.map((function(e, t) {
                        if (!e) return null;
                        var o = !!e.active && e.active(r);
                        o && !f && (p = e.icon);
                        var i = e.icon;
                        return Fo.default.createElement(Ko, {
                            key: t,
                            onClick: function() {
                                e.name && n[e.name](e.attrs), u()
                            },
                            isActive: o
                        }, Fo.default.createElement("div", {
                            style: {
                                transform: "translateY(1px)",
                                display: "inline-block",
                                marginLeft: f ? "-20px" : "unset"
                            }
                        }, Fo.default.createElement(i, null)), Fo.default.createElement(Jo, null, e.tooltip))
                    })));
                    return Fo.default.createElement(qo, {
                        ref: o,
                        noValueBind: f
                    }, Fo.default.createElement(Yo, {
                        noValueBind: f
                    }, Fo.default.createElement(Zo, null, Fo.default.createElement(p, null)), f ? null : Fo.default.createElement(Xo, null)), h)
                },
                Zo = In.div(h || (h = se(["\n  display: inline-block;\n  margin: 1px 0px 0px 1px;\n  height: 14px;\n  width: 14px;\n  & svg {\n    height: 14px !important;\n    width: 14px !important;\n  }\n"]))),
                qo = In.div(m || (m = se(["\n  width: 40px;\n  height: 24px;\n  position: relative;\n  margin-left: 8px;\n  &:nth-of-type(1) {\n    margin-left: 0px;\n  }\n  ", "\n"])), (function(e) {
                    return e.noValueBind ? "width: 24px;" : null
                })),
                Go = In.div(g || (g = se(["\n  display: none;\n  width: 180px;\n  max-height: 282px;\n  padding: 6px;\n  position: absolute;\n  ", '\n  left: -4px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04),\n    0px 12px 48px rgba(0, 0, 0, 0.04);\n  border-radius: 5px;\n  background: #ffffff;\n  z-index: 1001;\n  pointer-events: all;\n  &::before {\n    display: block;\n    content: "";\n    background: rgba(0, 0, 0, 0);\n    height: 10px;\n    width: 180px;\n    left: -2px;\n    top: -10px;\n    position: absolute;\n  }\n'])), (function(e) {
                    return e.directionDown ? "bottom: 32px;" : "top: 32px;"
                })),
                Ko = In("div")(v || (v = se(["\n  width: 168px;\n  height: 32px;\n  pointer-events: all;\n  border-radius: 3px;\n  ", ';\n  font-size: 14px;\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n  }\n  &::before {\n    content: "";\n    display: inline-block;\n    ', ";\n    height: 14px;\n    width: 14px;\n    margin-top: 9px;\n    margin-left: 4px;\n    margin-right: 8px;\n  }\n"])), (function(e) {
                    return e.isActive ? "font-weight: 500;" : null
                }), (function(e) {
                    return e.isActive ? "background-image: url('https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorSelected.png'); background-size: 100% 100%;" : null
                })),
                Jo = In.div(k || (k = se(["\n  display: inline-block;\n  margin-left: 8px;\n  line-height: 32px;\n  height: 32px;\n  transform: translateY(-1px);\n"]))),
                Xo = In.div(y || (y = se(['\n  height: 14px;\n  width: 14px;\n  background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorClickDown.png");\n  background-size: 100% 100%;\n  display: inline-block;\n  margin-left: 2px;\n  vertical-align: top;\n  transition: transform 0.2s;\n']))),
                Yo = In.div(b || (b = se(["\n  width: 40px;\n  height: 24px;\n  padding: 4px;\n  border-radius: 3px;\n  pointer-events: all;\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n  }\n  ", "\n"])), (function(e) {
                    return e.noValueBind ? "width: 24px;" : null
                })),
                Qo = In.div(w || (w = se(["\n  display: flex;\n"]))),
                ei = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.view,
                                r = t.items,
                                o = n.state;
                            return Ho.createElement(Qo, null, r.map((function(t, n) {
                                if ("separator" === t.name && !1 !== t.visible) return Ho.createElement(Wo, {
                                    key: n
                                });
                                if ("drop-down" === t.name) return Ho.createElement(Uo, {
                                    key: n,
                                    item: t,
                                    commands: e.props.commands,
                                    state: o
                                });
                                if (!1 === t.visible || !t.icon) return null;
                                var r = t.icon,
                                    i = !!t.active && t.active(o);
                                return t.iconExplain ? Ho.createElement($o, {
                                    key: n,
                                    onClick: function() {
                                        return t.name && e.props.commands[t.name](t.attrs)
                                    },
                                    item: t,
                                    active: i
                                }, Ho.createElement(r, {
                                    color: e.props.theme.toolbarItem
                                }), Ho.createElement("span", {
                                    style: {
                                        display: "inline-block",
                                        transform: "translateY(-3px)",
                                        lineHeight: "14px",
                                        fontSize: "12px",
                                        marginLeft: "9px",
                                        color: "#1a1a1a",
                                        fontWeight: 500
                                    }
                                }, " ", t.iconExplain)) : Ho.createElement($o, {
                                    key: n,
                                    onClick: function() {
                                        return t.name && e.props.commands[t.name](t.attrs)
                                    },
                                    active: i,
                                    item: t
                                }, Ho.createElement(r, {
                                    color: e.props.theme.toolbarItem
                                }), t.iconExplain ? Ho.createElement("span", {
                                    style: {
                                        display: "inline-block",
                                        transform: "translateY(-3px)",
                                        lineHeight: "14px",
                                        fontSize: "12px",
                                        marginLeft: "9px",
                                        color: "#1a1a1a",
                                        fontWeight: 500
                                    }
                                }, " ", t.iconExplain) : null)
                            })))
                        }
                    }]), n
                }(Ho.Component),
                ti = An(ei);

            function ni(e) {
                return e.reduce((function(t, n, r) {
                    if ("separator" === n.name && 0 === r) return t;
                    if ("separator" === n.name && r === e.length - 1) return t;
                    var o = e[r - 1];
                    if (o && "separator" === o.name && "separator" === n.name) return t;
                    var i = e[r + 1];
                    return i && "separator" === i.name && "separator" === n.name ? t : [].concat(Q(t), [n])
                }), [])
            }

            function ri(e, t) {
                if (!e || !t) return !1;
                var n = e.parent.childAfter(e.parentOffset);
                if (!n.node) return !1;
                var r = n.node.marks.find((function(e) {
                    return e.type === t
                }));
                if (!r) return !1;
                for (var o = e.index(), i = e.start() + n.offset, a = o + 1, l = i + n.node.nodeSize; o > 0 && r.isInSet(e.parent.child(o - 1).marks);) o -= 1, i -= e.parent.child(o).nodeSize;
                for (; a < e.parent.childCount && r.isInSet(e.parent.child(a).marks);) l += e.parent.child(a).nodeSize, a += 1;
                return {
                    from: i,
                    to: l,
                    mark: r
                }
            }

            function oi(e, t) {
                var n;
                return function e(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    "text" === r.type.name && r.marks.forEach((function(e) {
                        if ("link" === e.type.name && e.attrs.href === t && (n = {
                                node: r,
                                pos: o
                            })) return !1
                    })), r.content.size && r.descendants(e)
                }(e), n
            }
            var ii = function() {
                    var e = te(ee.mark((function e(t, n, r, o) {
                        var i, a, l, s, c, u, d;
                        return ee.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = t.dispatch, a = t.state, l = o.onCreateLink, s = o.onShowToast, e.prev = 2, e.next = 5, l(n);
                                case 5:
                                    if (c = e.sent, u = oi(t.state.doc, r)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    i(t.state.tr.removeMark(u.pos, u.pos + u.node.nodeSize, a.schema.marks.link).addMark(u.pos, u.pos + u.node.nodeSize, a.schema.marks.link.create({
                                        href: c
                                    }))), e.next = 19;
                                    break;
                                case 12:
                                    if (e.prev = 12, e.t0 = e.catch(2), d = oi(t.state.doc, r)) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 17:
                                    i(t.state.tr.removeMark(d.pos, d.pos + d.node.nodeSize, a.schema.marks.link)), s && s(o.dictionary.createLinkError, "error");
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 12]
                        ])
                    })));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                ai = ii,
                li = n(35285);

            function si(e) {
                var t = e.view,
                    n = t.state.selection,
                    r = ko(n),
                    o = yo(n),
                    i = (0, li.getCellsInRow)(0)(n);
                if ((0, li.getCellsInColumn)(0)(n) && i && void 0 === o && void 0 === r) return !0;
                if (io(t.state.schema.nodes.code_block)(t.state)) return n.from === n.to;
                if (!n) return !1;
                if (n.empty) return !1;
                if (n.node && "hr" === n.node.type.name) return !0;
                if (n.node && "image" === n.node.type.name) return !0;
                if (n.node && "video" === n.node.type.name) return !0;
                if (n.node) return !1;
                var a = n.content().content.content;
                return (0, Hn.default)(a, (function(e) {
                    return e.content.size
                }))
            }
            var ci = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).isActive = !1, e.menuRef = Bn.createRef(), e.handleClickOutside = function(t) {
                            if (!(t.target instanceof Node && e.menuRef.current && e.menuRef.current.contains(t.target)) && e.isActive) {
                                var n = e.props.view;
                                if (!n.hasFocus())(0, n.dispatch)(n.state.tr.setSelection(new jn.TextSelection(n.state.doc.resolve(0))))
                            }
                        }, e.handleOnCreateLink = function() {
                            var t = te(ee.mark((function t(n) {
                                var r, o, i, a, l, s, c, u, d, p, f, h;
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (r = e.props, o = r.dictionary, i = r.onCreateLink, a = r.view, l = r.onShowToast, i) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            if (s = a.dispatch, c = a.state, u = c.selection, d = u.from, p = u.to, d !== p) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 7:
                                            f = "creating#".concat(n, "\u2026"), h = c.schema.marks.link, s(a.state.tr.removeMark(d, p, h).addMark(d, p, h.create({
                                                href: f
                                            }))), ai(a, n, f, {
                                                onCreateLink: i,
                                                onShowToast: l,
                                                dictionary: o
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e.handleOnSelectLink = function(t) {
                            var n = t.href,
                                r = t.title,
                                o = t.from,
                                i = t.to,
                                a = e.props.view,
                                l = a.state,
                                s = a.dispatch,
                                c = l.schema.marks.link;
                            s(l.tr.insertText(r, o, i).removeMark(o, o + r.length, c).addMark(o, o + r.length, c.create({
                                href: n
                            })))
                        }, e
                    }
                    return re(n, [{
                        key: "componentDidUpdate",
                        value: function() {
                            var e = si(this.props);
                            this.isActive && !e && (this.isActive = !1, this.props.onClose()), !this.isActive && e && (this.isActive = !0, this.props.onOpen())
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("mouseup", this.handleClickOutside)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("mouseup", this.handleClickOutside)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.dictionary,
                                r = t.onCreateLink,
                                o = t.rtl,
                                i = Ee(t, ["dictionary", "onCreateLink", "rtl"]),
                                a = i.view,
                                l = a.state,
                                s = l.selection,
                                c = io(l.schema.nodes.code_block)(l),
                                u = io(l.schema.nodes.hr)(l),
                                d = ko(l.selection),
                                p = yo(l.selection),
                                f = (0, li.getCellsInRow)(0)(s),
                                h = (0, li.getCellsInColumn)(0)(s),
                                m = void 0 !== d && void 0 !== p,
                                g = co(l.schema.marks.link)(l),
                                v = ri(s.$from, l.schema.marks.link),
                                k = s.node && "image" === s.node.type.name,
                                y = s.node && "video" === s.node.type.name,
                                b = !1,
                                w = [];
                            if (m ? w = ao(n) : void 0 !== d && l.selection.ranges.length === (null == h ? void 0 : h.length) ? w = function(e, t, n, r) {
                                    var o = e.schema;
                                    return [{
                                        name: "drop-down",
                                        icon: Ur,
                                        title: "no-value-bind",
                                        children: [{
                                            name: n ? "addColumnAfter" : "addColumnBefore",
                                            tooltip: n ? r.addColumnAfter : r.addColumnBefore,
                                            icon: Nr,
                                            visible: !0,
                                            active: function() {
                                                return !1
                                            }
                                        }, {
                                            name: n ? "addColumnBefore" : "addColumnAfter",
                                            tooltip: n ? r.addColumnBefore : r.addColumnAfter,
                                            icon: Br,
                                            visible: !0,
                                            active: function() {
                                                return !1
                                            }
                                        }]
                                    }, {
                                        name: "separator"
                                    }, {
                                        name: "drop-down",
                                        children: [{
                                            name: "setColumnAttr",
                                            tooltip: r.alignLeft,
                                            icon: to,
                                            attrs: {
                                                index: t,
                                                alignment: "left"
                                            },
                                            visible: !0,
                                            active: function(e) {
                                                return io(o.nodes.th, {
                                                    colspan: 1,
                                                    rowspan: 1,
                                                    alignment: "left"
                                                })(e) || io(o.nodes.th, {
                                                    colspan: 1,
                                                    rowspan: 1,
                                                    alignment: null
                                                })(e) || io(o.nodes.th, {
                                                    colspan: 1,
                                                    rowspan: 1,
                                                    alignment: ""
                                                })(e)
                                            }
                                        }, {
                                            name: "setColumnAttr",
                                            tooltip: r.alignCenter,
                                            icon: Qr,
                                            attrs: {
                                                index: t,
                                                alignment: "center"
                                            },
                                            visible: !0,
                                            active: io(o.nodes.th, {
                                                colspan: 1,
                                                rowspan: 1,
                                                alignment: "center"
                                            })
                                        }, {
                                            name: "setColumnAttr",
                                            tooltip: r.alignRight,
                                            icon: ro,
                                            attrs: {
                                                index: t,
                                                alignment: "right"
                                            },
                                            visible: !0,
                                            active: io(o.nodes.th, {
                                                colspan: 1,
                                                rowspan: 1,
                                                alignment: "right"
                                            })
                                        }]
                                    }, {
                                        name: "separator"
                                    }, {
                                        name: "deleteColumn",
                                        tooltip: r.deleteColumn,
                                        icon: Xr,
                                        active: function() {
                                            return !1
                                        },
                                        floatExplain: "\u5220\u9664\u5217"
                                    }]
                                }(l, d, o, n) : void 0 !== p && l.selection.ranges.length === (null == f ? void 0 : f.length) ? w = function(e, t, n) {
                                    return [{
                                        name: "drop-down",
                                        icon: Ur,
                                        title: "no-value-bind",
                                        children: [{
                                            name: "addRowAfter",
                                            tooltip: n.addRowBefore,
                                            icon: Hr,
                                            attrs: {
                                                index: t - 1
                                            },
                                            active: function() {
                                                return !1
                                            },
                                            visible: 0 !== t
                                        }, {
                                            name: "addRowAfter",
                                            tooltip: n.addRowAfter,
                                            icon: Vr,
                                            attrs: {
                                                index: t
                                            },
                                            active: function() {
                                                return !1
                                            },
                                            visible: !0
                                        }]
                                    }, {
                                        name: "separator"
                                    }, {
                                        name: "deleteRow",
                                        tooltip: n.deleteRow,
                                        icon: Xr,
                                        active: function() {
                                            return !1
                                        },
                                        floatExplain: "\u5220\u9664\u884c"
                                    }]
                                }(0, p, n) : k ? w = function(e, t) {
                                    var n, r, o = e.schema,
                                        i = io(o.nodes.image, {
                                            layoutClass: "left"
                                        }),
                                        a = io(o.nodes.image, {
                                            layoutClass: "right"
                                        }),
                                        l = Boolean((null == (n = null == e ? void 0 : e.selection) ? void 0 : n.node.attrs.width) && "99999" === (null == (r = null == e ? void 0 : e.selection) ? void 0 : r.node.attrs.width));
                                    return [{
                                        name: "drop-down",
                                        children: [{
                                            name: "alignLeft",
                                            tooltip: t.alignLeft,
                                            icon: gr,
                                            visible: !0,
                                            active: i
                                        }, {
                                            name: "alignCenter",
                                            tooltip: t.alignCenter,
                                            icon: hr,
                                            visible: !0,
                                            active: function(e) {
                                                return io(o.nodes.image)(e) && !i(e) && !a(e)
                                            }
                                        }, {
                                            name: "alignRight",
                                            tooltip: t.alignRight,
                                            icon: kr,
                                            visible: !0,
                                            active: a
                                        }]
                                    }, {
                                        name: "separator",
                                        visible: !0
                                    }, {
                                        name: "fullWidth",
                                        tooltip: t.fullWidth,
                                        icon: br,
                                        visible: !l,
                                        iconExplain: "\u5168\u5bbd",
                                        active: function() {
                                            return !1
                                        }
                                    }, {
                                        name: "originWidth",
                                        tooltip: t.originWidth,
                                        icon: xr,
                                        visible: l,
                                        iconExplain: "\u9ed8\u8ba4\u5bbd\u5ea6",
                                        active: function() {
                                            return !1
                                        }
                                    }]
                                }(l, n) : y ? w = function(e, t) {
                                    var n, r, o = e.schema,
                                        i = io(o.nodes.video, {
                                            layoutClass: "left"
                                        }),
                                        a = io(o.nodes.video, {
                                            layoutClass: "right"
                                        }),
                                        l = Boolean((null == (n = null == e ? void 0 : e.selection) ? void 0 : n.node.attrs.width) && "99999" === (null == (r = null == e ? void 0 : e.selection) ? void 0 : r.node.attrs.width));
                                    return [{
                                        name: "drop-down",
                                        children: [{
                                            name: "alignLeft",
                                            tooltip: t.alignLeft,
                                            icon: gr,
                                            visible: !0,
                                            active: i
                                        }, {
                                            name: "alignCenter",
                                            tooltip: t.alignCenter,
                                            icon: hr,
                                            visible: !0,
                                            active: function(e) {
                                                return io(o.nodes.video)(e) && !i(e) && !a(e)
                                            }
                                        }, {
                                            name: "alignRight",
                                            tooltip: t.alignRight,
                                            icon: kr,
                                            visible: !0,
                                            active: a
                                        }]
                                    }, {
                                        name: "separator",
                                        visible: !0
                                    }, {
                                        name: "fullWidth",
                                        tooltip: t.fullWidth,
                                        icon: br,
                                        visible: !l,
                                        iconExplain: "\u5168\u5bbd",
                                        active: function() {
                                            return !1
                                        }
                                    }, {
                                        name: "originWidth",
                                        tooltip: t.originWidth,
                                        icon: xr,
                                        visible: l,
                                        iconExplain: "\u9ed8\u8ba4\u5bbd\u5ea6",
                                        active: function() {
                                            return !1
                                        }
                                    }]
                                }(l, n) : u ? w = [] : c ? w = function(e) {
                                    return [{
                                        name: "deleteCodeBlock",
                                        tooltip: e.deleteTable,
                                        icon: Xr,
                                        active: function() {
                                            return !1
                                        }
                                    }]
                                }(n) : (w = function(e, t) {
                                    var n = e.schema,
                                        r = (0, lo.isInTable)(e),
                                        o = so(e),
                                        i = !r && !o;
                                    return [{
                                        name: "drop-down",
                                        children: [{
                                            name: "toggleBlockInitial",
                                            tooltip: t.commonText,
                                            icon: Tr,
                                            active: io(n.nodes.paragraph),
                                            title: "\u6b63\u6587",
                                            visible: i
                                        }, {
                                            name: "heading",
                                            tooltip: t.h1,
                                            icon: Gn,
                                            active: io(n.nodes.heading, {
                                                level: 1
                                            }),
                                            attrs: {
                                                level: 1
                                            },
                                            visible: i
                                        }, {
                                            name: "heading",
                                            tooltip: t.h2,
                                            icon: Jn,
                                            active: io(n.nodes.heading, {
                                                level: 2
                                            }),
                                            attrs: {
                                                level: 2
                                            },
                                            visible: i
                                        }, {
                                            name: "heading",
                                            tooltip: t.h3,
                                            icon: Yn,
                                            active: io(n.nodes.heading, {
                                                level: 3
                                            }),
                                            attrs: {
                                                level: 3
                                            },
                                            visible: i
                                        }, {
                                            name: "heading",
                                            tooltip: t.custom,
                                            icon: Kr,
                                            active: function(e) {
                                                return io(n.nodes.heading, {
                                                    level: 4
                                                })(e) || io(n.nodes.heading, {
                                                    level: 5
                                                })(e) || io(n.nodes.heading, {
                                                    level: 6
                                                })(e)
                                            },
                                            attrs: {
                                                level: 0
                                            },
                                            visible: io(n.nodes.heading, {
                                                level: 4
                                            })(e) || io(n.nodes.heading, {
                                                level: 5
                                            })(e) || io(n.nodes.heading, {
                                                level: 6
                                            })(e)
                                        }, {
                                            name: "ordered_list",
                                            tooltip: t.orderedList,
                                            icon: Fn,
                                            active: io(n.nodes.ordered_list),
                                            visible: (i || o) && uo(e)
                                        }, {
                                            name: "bullet_list",
                                            tooltip: t.bulletList,
                                            icon: $n,
                                            active: io(n.nodes.bullet_list),
                                            visible: (i || o) && uo(e)
                                        }, {
                                            name: "blockquote",
                                            tooltip: t.quote,
                                            icon: or,
                                            active: io(n.nodes.blockquote),
                                            attrs: {
                                                level: 2
                                            },
                                            visible: i,
                                            floatExplain: "\u5f15\u7528"
                                        }]
                                    }, {
                                        name: "separator"
                                    }, {
                                        name: "strong",
                                        tooltip: t.strong,
                                        icon: Er,
                                        active: co(n.marks.strong),
                                        floatExplain: "\u52a0\u7c97"
                                    }, {
                                        name: "em",
                                        tooltip: t.em,
                                        icon: Ar,
                                        active: co(n.marks.em),
                                        floatExplain: "\u659c\u4f53"
                                    }, {
                                        name: "code_inline",
                                        tooltip: t.codeInline,
                                        icon: Sr,
                                        active: co(n.marks.code_inline),
                                        floatExplain: "\u884c\u5185\u4ee3\u7801"
                                    }, {
                                        name: "link",
                                        tooltip: t.createLink,
                                        icon: er,
                                        active: co(n.marks.link),
                                        attrs: {
                                            href: ""
                                        },
                                        floatExplain: "\u94fe\u63a5",
                                        visible: uo(e)
                                    }]
                                }(l, n), b = !0), !(w = ni(w = w.filter((function(t) {
                                    return "separator" === t.name || ("drop-down" === t.name || !(t.name && !e.props.commands[t.name]))
                                })))).length) return null;
                            var x = l.doc.cut(l.selection.from, l.selection.to).textContent;
                            if (void 0 === p && void 0 === d && f && h && !x) w = ao(n);
                            else if (b && !x) return null;
                            var C = v ? l.doc.cut(v.from, v.to).textContent : "";
                            return Bn.createElement(zn.Portal, null, Bn.createElement(Eo, {
                                view: a,
                                active: si(this.props),
                                ref: this.menuRef,
                                height: g ? "auto" : void 0
                            }, g && v ? Bn.createElement(zo, Se({
                                dictionary: n,
                                title: C,
                                ifSelect: !0,
                                mark: v.mark,
                                from: v.from,
                                to: v.to,
                                onCreateLink: r ? this.handleOnCreateLink : void 0,
                                onSelectLink: this.handleOnSelectLink
                            }, i)) : Bn.createElement(ti, Se({
                                items: w
                            }, i))))
                        }
                    }]), n
                }(Bn.Component),
                ui = Ie(n(64386)),
                di = n(35285),
                pi = Ie(n(64386)),
                fi = Ie(n(10298)),
                hi = n(44454),
                mi = n(35285),
                gi = In.span(x || (x = se(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n"])));

            function vi(e) {
                var t = [];
                if (e.dataTransfer) {
                    var n = e.dataTransfer;
                    n.files && n.files.length ? t = n.files : n.items && n.items.length && (t = n.items)
                } else e.target && e.target.files && (t = e.target.files);
                return Array.prototype.slice.call(t)
            }
            var ki = n(38556),
                yi = n(15899),
                bi = new ki.Plugin({
                    state: {
                        init: function() {
                            return yi.DecorationSet.empty
                        },
                        apply: function(e, t) {
                            var n;
                            t = t.map(e.mapping, e.doc);
                            var r = e.getMeta(this);
                            if (null == r ? void 0 : r.add)
                                if (r.add.replaceExisting) {
                                    var o = e.doc.resolve(r.add.pos);
                                    if ("image" === (null == (n = o.nodeAfter) ? void 0 : n.type.name)) {
                                        var i = yi.Decoration.node(o.pos, o.pos + o.nodeAfter.nodeSize, {
                                            class: "image-replacement-uploading"
                                        }, {
                                            id: r.add.id
                                        });
                                        t = t.add(e.doc, [i])
                                    }
                                } else {
                                    var a = document.createElement("div");
                                    a.className = "image placeholder";
                                    var l = document.createElement("img");
                                    l.src = "https://static.leetcode.cn/cn-mono-assets/development-02/assets/light-loading.9d7b0f1c.gif";
                                    var s = document.createElement("div");
                                    s.className = "editor-uploading-img";
                                    var c = document.createElement("div");
                                    c.innerText = "\u4e0a\u4f20\u4e2d", s.appendChild(l), s.appendChild(c), a.appendChild(s);
                                    var u = yi.Decoration.widget(r.add.pos, a, {
                                        id: r.add.id
                                    });
                                    t = t.add(e.doc, [u])
                                }
                            return (null == r ? void 0 : r.remove) && (t = t.remove(t.find(null, null, (function(e) {
                                return e.id === r.remove.id
                            })))), t
                        }
                    },
                    props: {
                        decorations: function(e) {
                            return this.getState(e)
                        }
                    }
                }),
                wi = bi;

            function xi(e, t) {
                var n = bi.getState(e).find(null, null, (function(e) {
                    return e.id === t
                }));
                return n.length ? [n[0].from, n[0].to] : null
            }
            var Ci = n(38556),
                Si = 0,
                Mi = function(e, t, n, r, o) {
                    var i = r.filter((function(e) {
                        return /image/i.test(e.type)
                    }));
                    if (0 !== i.length) {
                        var a = o.dictionary,
                            l = o.uploadImage,
                            s = o.onImageUploadStart,
                            c = o.onImageUploadStop,
                            u = o.onShowToast;
                        if (l) {
                            t.preventDefault(), s && s();
                            var d, p = e.state.schema,
                                f = 0,
                                h = ue(i);
                            try {
                                var m = function() {
                                    var t = d.value,
                                        r = "upload-".concat(Si++),
                                        s = e.state.tr;
                                    s.setMeta(wi, {
                                        add: {
                                            id: r,
                                            file: t,
                                            pos: n,
                                            replaceExisting: o.replaceExisting
                                        }
                                    }), e.dispatch(s), l(t).then((function(t) {
                                        var n = t.src,
                                            o = t.alt,
                                            i = new Image;
                                        i.onload = function() {
                                            var t = xi(e.state, r);
                                            if (null !== t) {
                                                var i = le(t, 2),
                                                    a = i[0],
                                                    l = i[1];
                                                e.dispatch(e.state.tr.replaceWith(a, l || a, p.nodes.image.create(o ? {
                                                    src: n,
                                                    alt: o
                                                } : {
                                                    src: n
                                                })).setMeta(wi, {
                                                    remove: {
                                                        id: r
                                                    }
                                                })), e.state.selection.from === a && e.dispatch(e.state.tr.setSelection(new Ci.NodeSelection(e.state.doc.resolve(a))))
                                            }
                                        }, i.onerror = function(e) {
                                            throw e
                                        }, i.src = n
                                    })).catch((function(t) {
                                        console.error(t);
                                        var n = e.state.tr.setMeta(wi, {
                                            remove: {
                                                id: r
                                            }
                                        });
                                        e.dispatch(n), u && u(a.videoUploadError, "error")
                                    })).finally((function() {
                                        ++f === i.length && c && c()
                                    }))
                                };
                                for (h.s(); !(d = h.n()).done;) m()
                            } catch (g) {
                                h.e(g)
                            } finally {
                                h.f()
                            }
                        } else console.warn("uploadImage callback must be defined to handle image uploads.")
                    }
                },
                Ei = n(80796),
                Li = n(38556),
                Ai = 0,
                Ii = function(e, t, n, r, o) {
                    var i = r.filter((function(e) {
                        return /video/i.test(e.type)
                    }));
                    if (0 !== i.length) {
                        var a = o.uploadVideo,
                            l = o.onImageUploadStart,
                            s = o.onImageUploadStop;
                        if (a) {
                            t.preventDefault(), l && l();
                            var c, u = e.state.schema,
                                d = 0,
                                p = ue(i);
                            try {
                                var f = function() {
                                    var t = c.value,
                                        r = "upload-".concat(Ai++),
                                        l = e.state.tr;
                                    l.setMeta(wi, {
                                        add: {
                                            id: r,
                                            file: t,
                                            pos: n,
                                            replaceExisting: o.replaceExisting
                                        }
                                    }), e.dispatch(l), a(t).then((function(t) {
                                        var n = t.src,
                                            o = t.alt,
                                            i = xi(e.state, r);
                                        if (null !== i) {
                                            var a = le(i, 2),
                                                l = a[0],
                                                s = a[1];
                                            e.dispatch(e.state.tr.replaceWith(l, s || l, u.nodes.video.create(o ? {
                                                src: n,
                                                alt: o
                                            } : {
                                                src: n
                                            })).setMeta(wi, {
                                                remove: {
                                                    id: r
                                                }
                                            })), e.state.selection.from === l && e.dispatch(e.state.tr.setSelection(new Li.NodeSelection(e.state.doc.resolve(l))))
                                        }
                                    })).catch((function(t) {
                                        console.error(t);
                                        var n = e.state.tr.setMeta(wi, {
                                            remove: {
                                                id: r
                                            }
                                        });
                                        e.dispatch(n)
                                    })).finally((function() {
                                        ++d === i.length && s && s()
                                    }))
                                };
                                for (p.s(); !(c = p.n()).done;) f()
                            } catch (h) {
                                p.e(h)
                            } finally {
                                p.f()
                            }
                        } else console.warn("uploadVideo callback must be defined to handle video uploads.")
                    }
                },
                Ti = "/graphql/",
                Oi = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
                Ri = ["video/mp4", "video/webm", "video/quicktime", "video/mpeg", "video/3gpp", "video/x-m4v", "video/x-flv", "video/x-msvideo", "video/x-ms-asf", "video/x-ms-wmv", "video/x-matroska", "video/vnd.dlna.mpeg-tts"],
                Pi = "undefined" === typeof window,
                Di = {
                    left: -1e3,
                    top: 0,
                    bottom: void 0,
                    isAbove: !1
                },
                Ni = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).menuRef = pi.createRef(), e.inputRef = pi.createRef(), e.inputVideoRef = pi.createRef(), e.state = {
                            left: -1e3,
                            top: 0,
                            bottom: void 0,
                            isAbove: !1,
                            selectedIndex: 0,
                            insertItem: void 0
                        }, e.handleKeyDown = function(t) {
                            if (e.props.isActive) {
                                if ("Enter" === t.key) {
                                    t.preventDefault(), t.stopPropagation();
                                    var n = e.filtered[e.state.selectedIndex];
                                    n ? e.insertItem(n) : e.props.onClose()
                                }
                                if ("ArrowUp" === t.key || "Tab" === t.key && t.shiftKey || t.ctrlKey && "p" === t.key)
                                    if (t.preventDefault(), t.stopPropagation(), e.filtered.length) {
                                        for (var r = e.state.selectedIndex - 1; e.filtered[r] && ("separator" === e.filtered[r].name || "modul" === e.filtered[r].name);) r--;
                                        e.setState({
                                            selectedIndex: Math.max(0, r)
                                        })
                                    } else e.close();
                                if ("ArrowDown" === t.key || "Tab" === t.key && !t.shiftKey || t.ctrlKey && "n" === t.key)
                                    if (t.preventDefault(), t.stopPropagation(), e.filtered.length) {
                                        for (var o = e.filtered.length - 1, i = e.state.selectedIndex + 1; e.filtered[i] && ("separator" === e.filtered[i].name || "modul" === e.filtered[i].name);) i++;
                                        e.setState({
                                            selectedIndex: Math.min(i, o)
                                        })
                                    } else e.close();
                                "Escape" === t.key && e.close()
                            }
                        }, e.insertItem = function(t) {
                            var n, r, o, i;
                            switch (t.name) {
                                case "image":
                                    return e.triggerImagePick();
                                case "video":
                                    return e.triggerVideoPick();
                                case "embed":
                                    return e.triggerLinkInput(t);
                                case "link":
                                    return e.clearSearch(), e.props.onClose(), void(null == (r = (n = e.props).onLinkToolbarOpen) || r.call(n));
                                case "block_equation":
                                    return e.clearSearch(), e.props.onClose(), void(null == (i = (o = e.props).onTeXToolbarOpen) || i.call(o));
                                default:
                                    e.insertBlock(t)
                            }
                        }, e.close = function() {
                            e.props.onClose(), e.props.view.focus()
                        }, e.handleLinkInputKeydown = function(t) {
                            if (e.props.isActive && e.state.insertItem) {
                                if ("Enter" === t.key) {
                                    t.preventDefault(), t.stopPropagation();
                                    var n = t.currentTarget.value;
                                    if (!e.state.insertItem.matcher(n) && e.props.onShowToast) return void e.props.onShowToast(e.props.dictionary.embedInvalidLink, "error");
                                    e.insertBlock({
                                        name: "embed",
                                        attrs: {
                                            href: n
                                        }
                                    })
                                }
                                "Escape" === t.key && (e.props.onClose(), e.props.view.focus())
                            }
                        }, e.handleLinkInputPaste = function(t) {
                            if (e.props.isActive && e.state.insertItem) {
                                var n = t.clipboardData.getData("text/plain");
                                e.state.insertItem.matcher(n) && (t.preventDefault(), t.stopPropagation(), e.insertBlock({
                                    name: "embed",
                                    attrs: {
                                        href: n
                                    }
                                }))
                            }
                        }, e.triggerImagePick = function() {
                            e.inputRef.current && e.inputRef.current.click()
                        }, e.triggerVideoPick = function() {
                            e.inputVideoRef.current && e.inputVideoRef.current.click()
                        }, e.triggerLinkInput = function(t) {
                            e.setState({
                                insertItem: t
                            })
                        }, e.handleImagePicked = function(t) {
                            var n = vi(t),
                                r = e.props,
                                o = r.view,
                                i = r.uploadImage,
                                a = r.onImageUploadStart,
                                l = r.onImageUploadStop,
                                s = r.onShowToast,
                                c = o.state,
                                u = (0, mi.findParentNode)((function(e) {
                                    return !!e
                                }))(c.selection);
                            if (e.clearSearch(), !i) throw new Error("uploadImage prop is required to replace images");
                            u && Mi(o, t, u.pos, n, {
                                uploadImage: i,
                                onImageUploadStart: a,
                                onImageUploadStop: l,
                                onShowToast: s,
                                dictionary: e.props.dictionary
                            }), e.inputRef.current && (e.inputRef.current.value = ""), e.props.onClose()
                        }, e.handleVideoPicked = function(t) {
                            var n = vi(t),
                                r = e.props,
                                o = r.view,
                                i = r.uploadVideo,
                                a = r.onImageUploadStart,
                                l = r.onImageUploadStop,
                                s = r.onShowToast,
                                c = o.state,
                                u = (0, mi.findParentNode)((function(e) {
                                    return !!e
                                }))(c.selection);
                            if (e.clearSearch(), !i) throw new Error("uploadVideo prop is required to replace Video");
                            u && Ii(o, t, u.pos, n, {
                                uploadVideo: i,
                                onImageUploadStart: a,
                                onImageUploadStop: l,
                                onShowToast: s,
                                dictionary: e.props.dictionary
                            }), e.inputVideoRef.current && (e.inputVideoRef.current.value = ""), e.props.onClose()
                        }, e.clearSearch = function() {
                            e.props.onClearSearch()
                        }, e.handleMouseOver = (0, Ei.throttle)((function() {
                            0 !== e.state.selectedIndex && e.setState({
                                selectedIndex: 0
                            })
                        }), 500), e
                    }
                    return re(n, [{
                        key: "componentDidMount",
                        value: function() {
                            Pi || window.addEventListener("keydown", this.handleKeyDown)
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return e.search !== this.props.search || e.isActive !== this.props.isActive || t !== this.state
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (!e.isActive && this.props.isActive) {
                                var t = this.calculatePosition(this.props);
                                this.setState(Se({
                                    insertItem: void 0,
                                    selectedIndex: 0
                                }, t))
                            } else e.search !== this.props.search && this.setState({
                                selectedIndex: 0
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Pi || window.removeEventListener("keydown", this.handleKeyDown)
                        }
                    }, {
                        key: "insertBlock",
                        value: function(e) {
                            this.clearSearch();
                            var t = this.props.commands[e.name];
                            t ? t(e.attrs) : this.props.commands["create".concat((0, fi.default)(e.name))](e.attrs), this.props.onClose()
                        }
                    }, {
                        key: "caretPosition",
                        get: function() {
                            var e = window.document.getSelection();
                            if (!e || !e.anchorNode || !e.focusNode) return {
                                top: 0,
                                left: 0
                            };
                            var t = window.document.createRange();
                            t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), 0 === t.getClientRects().length && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
                            var n = t.getBoundingClientRect();
                            return {
                                top: n.top,
                                left: n.left
                            }
                        }
                    }, {
                        key: "calculatePosition",
                        value: function(e) {
                            var t, n = e.view,
                                r = n.state.selection;
                            try {
                                t = n.coordsAtPos(r.from)
                            } catch (h) {
                                return console.warn(h), Di
                            }
                            var o = n.domAtPos.bind(n),
                                i = this.menuRef.current,
                                a = i ? i.offsetHeight : 0,
                                l = {
                                    node: (0, mi.findDomRefAtPos)(r.from, o)
                                };
                            if (!e.isActive || !l.node || !l.node.getBoundingClientRect || Pi) return Di;
                            var s = this.caretPosition.left,
                                c = l.node.getBoundingClientRect(),
                                u = c.top,
                                d = c.bottom,
                                p = c.right,
                                f = s + window.scrollX;
                            return e.rtl && i && (f = p - i.scrollWidth), t.top - a > 24 ? {
                                left: f,
                                top: void 0,
                                bottom: window.innerHeight - u - window.scrollY,
                                isAbove: !1
                            } : {
                                left: f,
                                top: d + window.scrollY,
                                bottom: void 0,
                                isAbove: !0
                            }
                        }
                    }, {
                        key: "filtered",
                        get: function() {
                            var e, t = this.props,
                                n = t.embeds,
                                r = void 0 === n ? [] : n,
                                o = t.search,
                                i = void 0 === o ? "" : o,
                                a = t.uploadImage,
                                l = t.uploadVideo,
                                s = t.commands,
                                c = t.filterable,
                                u = void 0 === c || c,
                                d = this.props.items,
                                p = [],
                                f = ue(r);
                            try {
                                for (f.s(); !(e = f.n()).done;) {
                                    var h = e.value;
                                    h.title && h.icon && p.push(Me(Se({}, h), {
                                        name: "embed"
                                    }))
                                }
                            } catch (m) {
                                f.e(m)
                            } finally {
                                f.f()
                            }
                            return p.length && (d.push({
                                name: "separator"
                            }), d = d.concat(p)), ni(d.filter((function(e) {
                                if ("separator" === e.name) return !i;
                                if ("modul" === e.name) return !i;
                                if (e.name && !s[e.name] && !s["create".concat((0, fi.default)(e.name))]) return !1;
                                if (!a && "image" === e.name) return !1;
                                if (!l && "video" === e.name) return !1;
                                if (!i) return !e.defaultHidden;
                                var t = i.toLowerCase();
                                return u ? (e.title || "").toLowerCase().includes(t) || (e.keywords || "").toLowerCase().includes(t) : e
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.dictionary,
                                r = t.isActive,
                                o = t.uploadImage,
                                i = t.uploadVideo,
                                a = this.filtered,
                                l = this.state,
                                s = l.insertItem,
                                c = Ee(l, ["insertItem"]);
                            return pi.createElement(hi.Portal, null, pi.createElement(Wi, Se({
                                active: r,
                                ref: this.menuRef
                            }, c), pi.createElement($i, {
                                id: this.props.id || "block-menu-container"
                            }, s ? pi.createElement(_i, null, pi.createElement(Bi, {
                                type: "text",
                                placeholder: s.title ? n.pasteLinkWithTitle(s.title) : n.pasteLink,
                                onKeyDown: this.handleLinkInputKeydown,
                                onPaste: this.handleLinkInputPaste,
                                autoFocus: !0
                            })) : pi.createElement(zi, {
                                selectedIndex: !!this.state.selectedIndex
                            }, a.map((function(t, n) {
                                if ("separator" === t.name) return pi.createElement(Hi, {
                                    key: n
                                }, pi.createElement("hr", {
                                    style: {
                                        borderColor: "rgba(0, 0, 0, 0.08)"
                                    }
                                }));
                                if ("modul" === t.name) return pi.createElement(Hi, {
                                    key: n
                                }, pi.createElement(ji, null, t.title));
                                var o = n === e.state.selectedIndex && r;
                                return t.title ? pi.createElement(Hi, {
                                    key: n,
                                    style: {
                                        marginBottom: "2px"
                                    }
                                }, e.props.renderMenuItem(t, n, {
                                    selected: o,
                                    onClick: function() {
                                        return e.insertItem(t)
                                    },
                                    onMouseOver: e.handleMouseOver
                                })) : null
                            })), 0 === a.length && pi.createElement(Hi, null, pi.createElement(Vi, null, n.noResults))), o && pi.createElement(gi, null, pi.createElement("input", {
                                type: "file",
                                ref: this.inputRef,
                                onChange: this.handleImagePicked,
                                accept: "image/*"
                            })), i && pi.createElement(gi, null, pi.createElement("input", {
                                type: "file",
                                ref: this.inputVideoRef,
                                onChange: this.handleVideoPicked,
                                accept: Ri.join(",")
                            })))))
                        }
                    }]), n
                }(pi.Component),
                _i = In.div(C || (C = se(["\n  margin: 8px;\n"]))),
                Bi = In(To)(S || (S = se(["\n  height: 36px;\n  width: 100%;\n  color: ", ";\n"])), (function(e) {
                    return e.theme.blockToolbarText
                })),
                zi = In.ol(M || (M = se(["\n  list-style: none;\n  text-align: left;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  ", ";\n"])), (function(e) {
                    return e.selectedIndex ? "\n      & .editor-menu-item {\n        &:hover,\n        &:active {\n          background: none;\n        }\n      }\n    " : ""
                })),
                Hi = In.li(E || (E = se(["\n  padding: 0;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.08);\n"]))),
                ji = In.div(L || (L = se(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 2px;\n  width: 100%;\n  line-height: 28px;\n  height: 28px;\n  padding-left: 4px;\n  color: rgba(82, 82, 82, 0.6);\n"]))),
                Vi = In.div(A || (A = se(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-weight: 500;\n  font-size: 14px;\n  height: 36px;\n  padding: 0 16px;\n"])), (function(e) {
                    return e.theme.textSecondary
                })),
                $i = In.div(I || (I = se(["\n  overflow: hidden;\n  overflow-y: auto;\n  width: 220px;\n  max-height: 405px;\n  padding: 8px;\n  border-radius: 8px;\n"]))),
                Wi = In.div(T || (T = se(["\n  color: ", ";\n  font-family: ", ";\n  position: absolute;\n  z-index: ", ";\n  ", ";\n  ", ";\n  left: ", "px;\n  background-color: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04),\n    0px 12px 48px rgba(0, 0, 0, 0.04);\n  opacity: 0;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  white-space: nowrap;\n  overflow: hidden;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  hr {\n    border: 0;\n    height: 0;\n    border-top: 1px solid ", ";\n  }\n\n  ", ";\n\n  @media print {\n    display: none;\n  }\n"])), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.theme.fontFamily
                }), (function(e) {
                    return e.theme.zIndex + 1e3
                }), (function(e) {
                    return void 0 !== e.top && "top: ".concat(e.top, "px")
                }), (function(e) {
                    return void 0 !== e.bottom && "bottom: ".concat(e.bottom, "px")
                }), (function(e) {
                    return e.left
                }), (function(e) {
                    return e.theme.blockToolbarBackground
                }), (function(e) {
                    return e.theme.blockToolbarDivider
                }), (function(e) {
                    var t = e.active,
                        n = e.isAbove;
                    return t && "\n    transform: translateY(".concat(n ? "6px" : "-6px", ") scale(1);\n    pointer-events: all;\n    opacity: 1;\n  ")
                })),
                Fi = Ni,
                Ui = Ie(n(64386)),
                Zi = Ie(n(69722));
            var qi = In.button(O || (O = se(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1;\n  width: 100%;\n  height: 32px;\n  cursor: pointer;\n  border: none;\n  opacity: ", ";\n  color: #1a1a1a;\n  padding: 0 4px;\n  outline: none;\n  border-radius: 4px;\n  background: ", ";\n  &:hover,\n  &:active {\n    background: rgba(0, 0, 0, 0.08);\n  }\n"])), (function(e) {
                    return e.disabled ? ".5" : "1"
                }), (function(e) {
                    return e.selected ? "rgba(0, 0, 0, 0.08)" : "none"
                })),
                Gi = In.span(R || (R = se(["\n  margin-right: 12px;\n  height: 16px;\n  width: 16px;\n"]))),
                Ki = In.span(P || (P = se(["\n  color: ", ";\n  flex-grow: 1;\n  text-align: right;\n"])), (function(e) {
                    return e.theme.textSecondary
                })),
                Ji = An((function(e) {
                    var t = e.selected,
                        n = e.disabled,
                        r = e.onClick,
                        o = e.onMouseOver,
                        i = e.title,
                        a = e.shortcut,
                        l = e.icon,
                        s = e.containerId,
                        c = void 0 === s ? "block-menu-container" : s,
                        u = l,
                        d = Ui.useCallback((function(e) {
                            t && e && (0, Zi.default)(e, {
                                scrollMode: "if-needed",
                                block: "center",
                                boundary: function(e) {
                                    return e.id !== c
                                }
                            })
                        }), [t, c]);
                    return Ui.createElement(qi, {
                        selected: t,
                        onClick: n ? void 0 : r,
                        onMouseOver: n && o ? void 0 : o,
                        ref: d,
                        className: "editor-menu-item"
                    }, u && Ui.createElement(Gi, null, Ui.createElement(u, {
                        color: t ? Dn.blockToolbarIconSelected : Dn.blockToolbarIcon
                    })), i, a && Ui.createElement(Ki, null, a))
                }));
            var Xi = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).clearSearch = function() {
                            var t = e.props.view,
                                n = t.state,
                                r = t.dispatch,
                                o = (0, di.findParentNode)((function(e) {
                                    return !!e
                                }))(n.selection);
                            o && r(n.tr.insertText("", o.pos, n.selection.to))
                        }, e
                    }
                    return re(n, [{
                        key: "items",
                        get: function() {
                            return [{
                                name: "modul",
                                title: "\u57fa\u7840"
                            }, {
                                name: "heading",
                                title: (e = this.props.dictionary).h1,
                                keywords: "h1 heading1 title",
                                icon: Gn,
                                attrs: {
                                    level: 1
                                }
                            }, {
                                name: "heading",
                                title: e.h2,
                                keywords: "h2 heading2",
                                icon: Jn,
                                attrs: {
                                    level: 2
                                }
                            }, {
                                name: "heading",
                                title: e.h3,
                                keywords: "h3 heading3",
                                icon: Yn,
                                attrs: {
                                    level: 3
                                }
                            }, {
                                name: "ordered_list",
                                title: e.orderedList,
                                icon: Fn,
                                keywords: "ordered"
                            }, {
                                name: "bullet_list",
                                title: e.bulletList,
                                icon: $n,
                                keywords: "bullet"
                            }, {
                                name: "blockquote",
                                title: e.quote,
                                icon: or,
                                keywords: "quote"
                            }, {
                                name: "hr",
                                title: e.hr,
                                icon: Zn,
                                keywords: "divider horizontal rule break line"
                            }, {
                                name: "separator"
                            }, {
                                name: "modul",
                                title: "\u5e38\u7528"
                            }, {
                                name: "code_block",
                                title: e.codeBlock,
                                icon: sr,
                                keywords: "script code"
                            }, {
                                name: "block_equation",
                                title: e.blockEquation,
                                icon: qr,
                                keywords: "math tex latex"
                            }, {
                                name: "image",
                                title: e.image,
                                icon: ur,
                                keywords: "picture photo image img"
                            }, {
                                name: "video",
                                title: e.video,
                                icon: Wr,
                                keywords: "video"
                            }, {
                                name: "link",
                                title: e.link,
                                icon: er,
                                keywords: "link url uri href"
                            }, {
                                name: "table",
                                title: e.table,
                                icon: ar,
                                keywords: "table",
                                attrs: {
                                    rowsCount: 3,
                                    colsCount: 3
                                }
                            }];
                            var e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return ui.default.createElement(Fi, Me(Se({}, this.props), {
                                filterable: !0,
                                onClearSearch: this.clearSearch,
                                renderMenuItem: function(e, t, n) {
                                    return ui.default.createElement(Ji, {
                                        onClick: n.onClick,
                                        onMouseOver: n.onMouseOver,
                                        selected: n.selected,
                                        icon: e.icon,
                                        title: e.title,
                                        shortcut: e.shortcut
                                    })
                                },
                                items: this.items
                            }))
                        }
                    }]), n
                }(ui.default.Component),
                Yi = Xi,
                Qi = Ie(n(64386)),
                ea = Ie(n(77997)),
                ta = Ie(n(39021)),
                na = Ie(n(64386)),
                ra = In.span(D || (D = se(["\n  font-size: 16px;\n"]))),
                oa = function(e) {
                    var t = e.emoji,
                        n = e.title;
                    return na.createElement("p", null, na.createElement(ra, {
                        className: "emoji"
                    }, t), "\xa0\xa0", n)
                };

            function ia(e) {
                return na.createElement(Ji, Me(Se({}, e), {
                    title: na.createElement(oa, {
                        emoji: e.emoji,
                        title: e.title
                    })
                }))
            }
            var aa = new ta.default(ea.default, ["names"], {
                    caseSensitive: !0,
                    sort: !0
                }),
                la = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).clearSearch = function() {
                            var t, n = e.props.view,
                                r = n.state;
                            (0, n.dispatch)(r.tr.insertText("", r.selection.$from.pos - (null != (t = e.props.search) ? t : "").length - 1, r.selection.to))
                        }, e
                    }
                    return re(n, [{
                        key: "items",
                        get: function() {
                            var e = this.props.search,
                                t = (void 0 === e ? "" : e).toLowerCase();
                            return aa.search(t).map((function(e) {
                                var t = e.description,
                                    n = e.names[0];
                                return Me(Se({}, e), {
                                    name: "emoji",
                                    title: n,
                                    description: t,
                                    attrs: {
                                        markup: n,
                                        "data-name": n
                                    }
                                })
                            })).slice(0, 10)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Qi.default.createElement(Fi, Me(Se({}, this.props), {
                                id: "emoji-menu-container",
                                filterable: !1,
                                onClearSearch: this.clearSearch,
                                renderMenuItem: function(e, t, n) {
                                    return Qi.default.createElement(ia, {
                                        onClick: n.onClick,
                                        selected: n.selected,
                                        title: e.description,
                                        emoji: e.emoji,
                                        containerId: "emoji-menu-container"
                                    })
                                },
                                items: this.items
                            }))
                        }
                    }]), n
                }(Qi.default.Component),
                sa = la,
                ca = Ie(n(64386));
            var ua = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).menuRef = ca.createRef(), e.state = {
                            left: -1e3,
                            top: void 0
                        }, e.handleClickOutside = function(t) {
                            t.target && e.menuRef.current && e.menuRef.current.contains(t.target) || e.props.onClose()
                        }, e.handleOnCreateLink = function() {
                            var t = te(ee.mark((function t(n) {
                                var r, o, i, a, l, s, c, u, d, p, f, h;
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (r = e.props, o = r.dictionary, i = r.onCreateLink, a = r.view, l = r.onClose, s = r.onShowToast, l(), e.props.view.focus(), i) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 5:
                                            if (c = a.dispatch, u = a.state, d = u.selection, p = d.from, f = d.to, p === f) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 9:
                                            h = "creating#".concat(n, "\u2026"), c(a.state.tr.insertText(n, p, f).addMark(p, f + n.length, u.schema.marks.link.create({
                                                href: h
                                            }))), ai(a, n, h, {
                                                onCreateLink: i,
                                                onShowToast: s,
                                                dictionary: o
                                            });
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e.handleOnSelectLink = function(t) {
                            var n = t.href,
                                r = t.title,
                                o = e.props,
                                i = o.view;
                            (0, o.onClose)(), e.props.view.focus();
                            var a = i.dispatch,
                                l = i.state,
                                s = l.selection,
                                c = s.from,
                                u = s.to;
                            c === u && a(i.state.tr.insertText(r, c, u).addMark(c, u + r.length, l.schema.marks.link.create({
                                href: n
                            })))
                        }, e
                    }
                    return re(n, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onCreateLink,
                                n = e.onClose,
                                r = Ee(e, ["onCreateLink", "onClose"]),
                                o = this.props.view.state.selection,
                                i = function(e) {
                                    var t = e.view,
                                        n = t.state.selection;
                                    try {
                                        var r = t.domAtPos(n.from);
                                        return e.isActive && !!r.node
                                    } catch (o) {
                                        return !1
                                    }
                                }(this.props);
                            return ca.createElement(Eo, Me(Se({
                                ref: this.menuRef,
                                active: i
                            }, r), {
                                ifCreate: !0,
                                height: "auto"
                            }), i && ca.createElement(zo, Se({
                                from: o.from,
                                to: o.to,
                                onCreateLink: t ? this.handleOnCreateLink : void 0,
                                onSelectLink: this.handleOnSelectLink,
                                onRemoveLink: n
                            }, r)))
                        }
                    }]), n
                }(ca.Component),
                da = Ie(n(64386)),
                pa = Ie(n(64386)),
                fa = In.textarea(N || (N = se(["\n  font-size: 14px;\n  background: ", ";\n  color: ", ";\n  border-radius: 2px;\n  width: 296px;\n  height: 72px;\n  padding: 3px 8px;\n  color: #1a1a1a;\n  margin: 0;\n  outline: none;\n  flex-grow: 1;\n  resize: none;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  line-height: normal;\n  @media (hover: none) and (pointer: coarse) {\n    font-size: 16px;\n  }\n"])), (function(e) {
                    return e.theme.toolbarInput
                }), (function(e) {
                    return e.theme.toolbarItem
                })),
                ha = Ie(n(23474)),
                ma = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).state = {
                            selectedIndex: -1,
                            value: e.value,
                            previousValue: "",
                            results: {}
                        }, e.save = function(t) {
                            try {
                                e.props.onCreateTeX({
                                    value: t
                                })
                            } catch (n) {
                                e.props.onShowToast && e.props.onShowToast(e.props.dictionary.createTexError, "error")
                            }
                        }, e.componentWillUnmount = function() {
                            e.props.view.focus()
                        }, e.componentDidMount = function() {
                            var t = document.querySelector("#texEditor");
                            t && (e.value ? (t.focus(), t.setSelectionRange(0, e.value.length)) : t.focus())
                        }, e.handleKeyDown = function(t) {
                            switch (t.key) {
                                case "Enter":
                                    return t.preventDefault(), void e.confirm();
                                case "Escape":
                                    t.preventDefault();
                                    var n = e.props.onClose;
                                    return void(n && n())
                            }
                        }, e.handleChange = function() {
                            var t = te(ee.mark((function t(n) {
                                var r;
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            r = n.target.value, e.setState({
                                                value: r,
                                                selectedIndex: -1
                                            });
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e.handleRemove = function() {
                            var t = e.props,
                                n = t.view,
                                r = t.onClose;
                            (0, e.props.view.dispatch)(n.state.tr.deleteSelection()), r && r()
                        }, e.confirm = function() {
                            var t = e.state.value,
                                n = e.props.onClose;
                            if (!t) return e.handleRemove(), void(n && n());
                            e.invalidFormula(t) && e.save(t)
                        }, e.invalidFormula = function(e) {
                            try {
                                return ha.default.renderToString(e, {
                                    output: "mathml"
                                }), !0
                            } catch (t) {
                                return !1
                            }
                        }, e
                    }
                    return re(n, [{
                        key: "value",
                        get: function() {
                            return this.props.selection.node ? this.props.selection.node.attrs.tex : ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.dictionary,
                                n = this.state.value;
                            return pa.createElement(ga, null, pa.createElement(fa, {
                                id: "texEditor",
                                value: n,
                                placeholder: t.inputOrPasteTeX,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                rows: 3
                            }), pa.createElement(va, null, pa.createElement(ka, {
                                onClick: this.confirm,
                                style: this.invalidFormula(n) ? {} : {
                                    opacity: .4,
                                    cursor: "not-allowed"
                                }
                            }, "\u786e\u5b9a"), this.invalidFormula(n) ? null : pa.createElement(ba, null, "\u65e0\u6548\u516c\u5f0f"), pa.createElement(ya, {
                                onClick: function() {
                                    e.handleRemove(), e.props.onClose && e.props.onClose()
                                }
                            }, pa.createElement(Pr, null))))
                        }
                    }]), n
                }(pa.Component),
                ga = In.div(_ || (_ = se(["\n  width: 312px;\n  pointer-events: all;\n  padding: 8px;\n  display: block;\n"]))),
                va = In.div(B || (B = se(["\n  margin-top: 8px;\n  width: 100%;\n  height: 32px;\n"]))),
                ka = In.div(z || (z = se(["\n  float: left;\n  background: #212121;\n  border-radius: 5px;\n  height: 32px;\n  width: 60px;\n  line-height: 32px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n"]))),
                ya = In.div(H || (H = se(["\n  float: right;\n  height: 32px;\n  width: 32px;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #fff;\n  &:hover {\n    color: rgba(0, 0, 0, 0);\n    background: rgba(0, 0, 0, 0.05);\n  }\n"]))),
                ba = In.div(j || (j = se(["\n  color: rgb(255, 77, 79);\n  font-size: 14px;\n  float: left;\n  line-height: 32px;\n  margin-left: 8px;\n"]))),
                wa = An(ma);
            var xa = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).menuRef = da.createRef(), e.state = {
                            left: -1e3,
                            top: void 0
                        }, e.handleClickOutside = function(t) {
                            t.target && e.menuRef.current && e.menuRef.current.contains(t.target) || e.props.onClose()
                        }, e.handleCreateTeX = function(t) {
                            var n, r = t.value,
                                o = e.props,
                                i = o.view,
                                a = o.onClose,
                                l = i.state;
                            a();
                            var s = i.dispatch,
                                c = i.state.selection,
                                u = c.$cursor ? c.$cursor.pos : c.$to.pos,
                                d = i.state.schema.nodes.block_equation.create({
                                    tex: r
                                }),
                                p = "block_equation" === (null == (n = c.$anchor.nodeAfter) ? void 0 : n.type.name);
                            s(l.tr.insert(p ? u : u - 1, d).deleteSelection())
                        }, e
                    }
                    return re(n, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onClose,
                                n = Ee(e, ["onClose"]),
                                r = this.props.view.state.selection,
                                o = function(e) {
                                    var t = e.view,
                                        n = t.state.selection;
                                    try {
                                        var r = t.domAtPos(n.from);
                                        return e.isActive && !!r.node
                                    } catch (o) {
                                        return !1
                                    }
                                }(this.props);
                            return da.createElement(Eo, Me(Se({
                                ref: this.menuRef,
                                active: o
                            }, n), {
                                ifCreate: !0,
                                height: "auto"
                            }), o && da.createElement(wa, Se({
                                selection: r,
                                onCreateTeX: this.handleCreateTeX,
                                onClose: t
                            }, n)))
                        }
                    }]), n
                }(da.Component),
                Ca = Ie(n(64386));
            var Sa = n(26158),
                Ma = n(37309),
                Ea = function() {
                    "use strict";

                    function e(t, n) {
                        ne(this, e), this.nodes = t, this.marks = n
                    }
                    return re(e, [{
                        key: "serialize",
                        value: function(e, t) {
                            var n = new La(this.nodes, this.marks, t);
                            return n.renderContent(e), n.out
                        }
                    }]), e
                }(),
                La = function() {
                    "use strict";

                    function e(t, n, r) {
                        ne(this, e), this.nodes = t, this.marks = n, this.delim = this.out = "", this.closed = !1, this.inTightList = !1, this.options = r || {}, "undefined" === typeof this.options.tightLists && (this.options.tightLists = !0)
                    }
                    return re(e, [{
                        key: "flushClose",
                        value: function(e) {
                            if (this.closed) {
                                if (this.atBlank() || (this.out += "\n"), null !== e && void 0 !== e || (e = 2), e > 1) {
                                    var t = this.delim,
                                        n = /\s+$/.exec(t);
                                    n && (t = t.slice(0, t.length - n[0].length));
                                    for (var r = 1; r < e; r++) this.out += t + "\n"
                                }
                                this.closed = !1
                            }
                        }
                    }, {
                        key: "wrapBlock",
                        value: function(e, t, n, r) {
                            var o = this.delim;
                            this.write(t || e), this.delim += e, r(), this.delim = o, this.closeBlock(n)
                        }
                    }, {
                        key: "atBlank",
                        value: function() {
                            return /(^|\n)$/.test(this.out)
                        }
                    }, {
                        key: "ensureNewLine",
                        value: function() {
                            this.atBlank() || (this.out += "\n")
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            this.flushClose(), this.delim && this.atBlank() && (this.out += this.delim), e && (this.out += e)
                        }
                    }, {
                        key: "closeBlock",
                        value: function(e) {
                            this.closed = e
                        }
                    }, {
                        key: "text",
                        value: function(e, t) {
                            for (var n = e.split("\n"), r = 0; r < n.length; r++) {
                                var o = this.atBlank() || this.closed;
                                this.write(), this.out += !1 !== t ? this.esc(n[r], o) : n[r], r !== n.length - 1 && (this.out += "\n")
                            }
                        }
                    }, {
                        key: "render",
                        value: function(e, t, n) {
                            if ("number" === typeof t) throw new Error("!");
                            this.nodes[e.type.name](this, e, t, n)
                        }
                    }, {
                        key: "renderContent",
                        value: function(e) {
                            var t = this;
                            e.forEach((function(n, r, o) {
                                return t.render(n, e, o)
                            }))
                        }
                    }, {
                        key: "renderInline",
                        value: function(e) {
                            var t = this,
                                n = [],
                                r = "",
                                o = function(o, i, a) {
                                    var l = o ? o.marks : [];
                                    o && "hard_break" === o.type.name && (l = l.filter((function(t) {
                                        if (a + 1 === e.childCount) return !1;
                                        var n = e.child(a + 1);
                                        return t.isInSet(n.marks) && (!n.isText || /\S/.test(n.text))
                                    })));
                                    var s = r;
                                    if (r = "", o && o.isText && l.some((function(e) {
                                            var n = t.marks[e.type.name];
                                            return n && n.expelEnclosingWhitespace
                                        }))) {
                                        var c = /^(\s*)(.*?)(\s*)$/m.exec(o.text),
                                            u = le(c, 4),
                                            d = (u[0], u[1]),
                                            p = u[2],
                                            f = u[3];
                                        s += d, r = f, (d || f) && ((o = p ? o.withText(p) : null) || (l = n))
                                    }
                                    var h = l.length && l[l.length - 1],
                                        m = h && !1 === t.marks[h.type.name].escape,
                                        g = l.length - (m ? 1 : 0);
                                    e: for (var v = 0; v < g; v++) {
                                        var k = l[v];
                                        if (!t.marks[k.type.name].mixable) break;
                                        for (var y = 0; y < n.length; y++) {
                                            var b = n[y];
                                            if (!t.marks[b.type.name].mixable) break;
                                            if (k.eq(b)) {
                                                v > y ? l = l.slice(0, y).concat(k).concat(l.slice(y, v)).concat(l.slice(v + 1, g)) : y > v && (l = l.slice(0, v).concat(l.slice(v + 1, y)).concat(k).concat(l.slice(y, g)));
                                                continue e
                                            }
                                        }
                                    }
                                    for (var w = 0; w < Math.min(n.length, g) && l[w].eq(n[w]);) ++w;
                                    for (; w < n.length;) t.text(t.markString(n.pop(), !1, e, a), !1);
                                    if (s && t.text(s), o) {
                                        for (; n.length < g;) {
                                            var x = l[n.length];
                                            n.push(x), t.text(t.markString(x, !0, e, a), !1)
                                        }
                                        m && o.isText ? t.text(t.markString(h, !0, e, a) + o.text + t.markString(h, !1, e, a + 1), !1) : t.render(o, e, a)
                                    }
                                };
                            e.forEach(o), o(null, 0, e.childCount)
                        }
                    }, {
                        key: "renderList",
                        value: function(e, t, n) {
                            var r = this;
                            this.closed && this.closed.type === e.type ? this.flushClose(3) : this.inTightList && this.flushClose(1);
                            var o = "undefined" !== typeof e.attrs.tight ? e.attrs.tight : this.options.tightLists,
                                i = this.inTightList,
                                a = this.inList;
                            this.inList = !0, this.inTightList = o, e.forEach((function(i, a, l) {
                                l && o && r.flushClose(1), r.wrapBlock(t, n(l), e, (function() {
                                    return r.render(i, e, l)
                                }))
                            })), this.inList = a, this.inTightList = i
                        }
                    }, {
                        key: "renderTable",
                        value: function(e) {
                            var t = this;
                            this.flushClose(1);
                            var n = "",
                                r = this.inTable;
                            this.inTable = !0, this.out += "\n", e.forEach((function(e, r, o) {
                                e.forEach((function(r, i, a) {
                                    t.out += 0 === a ? "| " : " | ", r.forEach((function(n) {
                                        "" === n.textContent && 0 === n.content.size ? t.out += "  " : (t.closed = !1, t.render(n, e, a))
                                    })), 0 === o && ("center" === r.attrs.alignment ? n += "|:---:" : "left" === r.attrs.alignment ? n += "|:---" : "right" === r.attrs.alignment ? n += "|---:" : n += "|----")
                                })), t.out += " |\n", n && (t.out += "".concat(n, "|\n"), n = void 0)
                            })), this.inTable = r
                        }
                    }, {
                        key: "esc",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            return e = e.replace(/[`*\\~\[\]]/g, "\\$&"), t && (e = e.replace(/^[:#\-*+]/, "\\$&").replace(/^(\d+)\./, "$1\\.")), this.inTable && (e = e.replace(/\|/gi, "\\$&")), e
                        }
                    }, {
                        key: "quote",
                        value: function(e) {
                            var t = -1 === e.indexOf('"') ? '""' : -1 === e.indexOf("'") ? "''" : "()";
                            return t[0] + e + t[1]
                        }
                    }, {
                        key: "repeat",
                        value: function(e, t) {
                            for (var n = "", r = 0; r < t; r++) n += e;
                            return n
                        }
                    }, {
                        key: "markString",
                        value: function(e, t, n, r) {
                            var o = this.marks[e.type.name],
                                i = t ? o.open : o.close;
                            return "string" === typeof i ? i : i(this, e, n, r)
                        }
                    }, {
                        key: "getEnclosingWhitespace",
                        value: function(e) {
                            return {
                                leading: (e.match(/^(\s+)/) || [])[0],
                                trailing: (e.match(/(\s+)$/) || [])[0]
                            }
                        }
                    }]), e
                }(),
                Aa = Ie(n(78174)),
                Ia = Ie(n(99547));

            function Ta(e) {
                var t = e.rules,
                    n = void 0 === t ? {} : t,
                    r = e.plugins,
                    o = void 0 === r ? [] : r,
                    i = (0, Aa.default)("default", Se({
                        breaks: !1,
                        html: !1,
                        linkify: !1
                    }, n));
                return o.forEach((function(e) {
                    return i.use(e).use(Ia.default, {
                        leftDelimiter: "{:",
                        rightDelimiter: "}",
                        allowedAttributes: ["width", "height"]
                    })
                })), i
            }
            var Oa = function() {
                    "use strict";

                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        ne(this, e), n && t.forEach((function(e) {
                            e.bindEditor(n)
                        })), this.extensions = t
                    }
                    return re(e, [{
                        key: "nodes",
                        get: function() {
                            return this.extensions.filter((function(e) {
                                return "node" === e.type
                            })).reduce((function(e, t) {
                                return Me(Se({}, e), Y({}, t.name, t.schema))
                            }), {})
                        }
                    }, {
                        key: "serializer",
                        value: function() {
                            var e = this.extensions.filter((function(e) {
                                    return "node" === e.type
                                })).reduce((function(e, t) {
                                    return Me(Se({}, e), Y({}, t.name, t.toMarkdown))
                                }), {}),
                                t = this.extensions.filter((function(e) {
                                    return "mark" === e.type
                                })).reduce((function(e, t) {
                                    return Me(Se({}, e), Y({}, t.name, t.toMarkdown))
                                }), {});
                            return new Ea(e, t)
                        }
                    }, {
                        key: "parser",
                        value: function(e) {
                            var t = e.schema,
                                n = e.rules,
                                r = e.plugins,
                                o = this.extensions.filter((function(e) {
                                    return "mark" === e.type || "node" === e.type
                                })).reduce((function(e, t) {
                                    var n = t.parseMarkdown();
                                    return n ? Me(Se({}, e), Y({}, t.markdownToken || t.name, n)) : e
                                }), {});
                            return new Ma.MarkdownParser(t, Ta({
                                rules: n,
                                plugins: r
                            }), o)
                        }
                    }, {
                        key: "marks",
                        get: function() {
                            return this.extensions.filter((function(e) {
                                return "mark" === e.type
                            })).reduce((function(e, t) {
                                var n = t.name,
                                    r = t.schema;
                                return Me(Se({}, e), Y({}, n, r))
                            }), {})
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return this.extensions.filter((function(e) {
                                return "plugins" in e
                            })).reduce((function(e, t) {
                                var n = t.plugins;
                                return [].concat(Q(e), Q(n))
                            }), [])
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return this.extensions.filter((function(e) {
                                return "rulePlugins" in e
                            })).reduce((function(e, t) {
                                var n = t.rulePlugins;
                                return [].concat(Q(e), Q(n))
                            }), [])
                        }
                    }, {
                        key: "keymaps",
                        value: function(e) {
                            var t = e.schema,
                                n = this.extensions.filter((function(e) {
                                    return ["extension"].includes(e.type)
                                })).filter((function(e) {
                                    return e.keys
                                })).map((function(e) {
                                    return e.keys({
                                        schema: t
                                    })
                                })),
                                r = this.extensions.filter((function(e) {
                                    return ["node", "mark"].includes(e.type)
                                })).filter((function(e) {
                                    return e.keys
                                })).map((function(e) {
                                    return e.keys({
                                        type: t["".concat(e.type, "s")][e.name],
                                        schema: t
                                    })
                                }));
                            return [].concat(Q(n), Q(r), [{
                                Tab: function() {
                                    return !0
                                },
                                "Shift-Tab": function() {
                                    return !0
                                }
                            }]).map((function(e) {
                                return (0, Sa.keymap)(e)
                            }))
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.schema,
                                n = this.extensions.filter((function(e) {
                                    return ["extension"].includes(e.type)
                                })).filter((function(e) {
                                    return e.inputRules
                                })).map((function(e) {
                                    return e.inputRules({
                                        schema: t
                                    })
                                })),
                                r = this.extensions.filter((function(e) {
                                    return ["node", "mark"].includes(e.type)
                                })).filter((function(e) {
                                    return e.inputRules
                                })).map((function(e) {
                                    return e.inputRules({
                                        type: t["".concat(e.type, "s")][e.name],
                                        schema: t
                                    })
                                }));
                            return [].concat(Q(n), Q(r)).reduce((function(e, t) {
                                return [].concat(Q(e), Q(t))
                            }), [])
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.schema,
                                n = e.view;
                            return this.extensions.filter((function(e) {
                                return e.commands
                            })).reduce((function(e, r) {
                                var o = r.name,
                                    i = r.type,
                                    a = {},
                                    l = r.commands(Se({
                                        schema: t
                                    }, ["node", "mark"].includes(i) ? {
                                        type: t["".concat(i, "s")][o]
                                    } : {})),
                                    s = function(e, t) {
                                        return !!n.editable && (n.focus(), e(t)(n.state, n.dispatch, n))
                                    },
                                    c = function(e, t) {
                                        Array.isArray(t) ? a[e] = function(e) {
                                            return t.forEach((function(t) {
                                                return s(t, e)
                                            }))
                                        } : "function" === typeof t && (a[e] = function(e) {
                                            return s(t, e)
                                        })
                                    };
                                return "object" === typeof l ? Object.entries(l).forEach((function(e) {
                                    var t = le(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    c(n, r)
                                })) : c(o, l), Se(Se({}, e), a)
                            }), {})
                        }
                    }]), e
                }(),
                Ra = Ie(n(64386)),
                Pa = Ie(n(39157)),
                Da = function() {
                    "use strict";

                    function e(t, n) {
                        var r = n.editor,
                            o = n.extension,
                            i = n.node,
                            a = n.view,
                            l = n.getPos,
                            s = n.decorations;
                        ne(this, e), this.isSelected = !1, this.component = t, this.editor = r, this.extension = o, this.getPos = l, this.decorations = s, this.node = i, this.view = a, this.dom = i.type.spec.inline ? document.createElement("span") : document.createElement("div"), this.renderElement()
                    }
                    return re(e, [{
                        key: "renderElement",
                        value: function() {
                            var e = this.editor.props.dark,
                                t = this.editor.props.theme || (e ? Pn : Rn),
                                n = this.component({
                                    theme: t,
                                    node: this.node,
                                    isSelected: this.isSelected,
                                    isEditable: this.view.editable,
                                    getPos: this.getPos
                                });
                            Pa.default.render(Ra.createElement(wn, {
                                theme: t
                            }, n), this.dom)
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            return e.type === this.node.type && (this.node = e, this.renderElement(), !0)
                        }
                    }, {
                        key: "selectNode",
                        value: function() {
                            this.view.editable && (this.isSelected = !0, this.renderElement())
                        }
                    }, {
                        key: "deselectNode",
                        value: function() {
                            this.view.editable && (this.isSelected = !1, this.renderElement())
                        }
                    }, {
                        key: "stopEvent",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.dom && Pa.default.unmountComponentAtNode(this.dom), this.dom = null
                        }
                    }, {
                        key: "ignoreMutation",
                        value: function() {
                            return !0
                        }
                    }]), e
                }(),
                Na = Ie(n(33528)),
                _a = Ie(n(30839));

            function Ba(e) {
                return "h-".concat((0, Na.default)((0, _a.default)(e, {
                    remove: /[!"#$%&'\.()*+,\/:;<=>?@\[\]\\^_`{|}~]/g,
                    lower: !0
                })))
            }

            function za(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = Ba(e.textContent);
                return 0 === t ? n : "".concat(n, "-").concat(t)
            }

            function Ha(e, t) {
                var n = za(e);
                return "rme-".concat(t || (null == window ? void 0 : window.location.pathname), "\u2013").concat(n)
            }
            var ja = In("div")(V || (V = se(["\n  color: ", ";\n  background: ", ";\n  font-family: ", ";\n  font-weight: ", ';\n  font-size: 1em;\n  line-height: 1.7em;\n  width: 100%;\n\n  .ProseMirror {\n    position: relative;\n    outline: none;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    white-space: break-spaces;\n    -webkit-font-variant-ligatures: none;\n    font-variant-ligatures: none;\n    font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n  }\n\n  pre {\n    white-space: pre-wrap;\n  }\n\n  li {\n    position: relative;\n  }\n\n  .image {\n    text-align: center;\n    max-width: 100%;\n    clear: both;\n    margin: 12px 0px 12px 0px;\n\n    img {\n      pointer-events: ', ";\n      display: inline-block;\n    }\n  }\n\n  .video {\n    text-align: center;\n    max-width: 100%;\n    margin: 12px 0px 12px 0px;\n    clear: both;\n  }\n\n  .image.placeholder {\n    position: relative;\n    background: ", ";\n    // margin-bottom: calc(28px + 1.2em);\n    img {\n      opacity: 0.5;\n    }\n  }\n\n  .image-replacement-uploading {\n    img {\n      opacity: 0.5;\n    }\n  }\n\n  .image-right {\n    // float: right;\n    text-align: right;\n    width: 100%;\n    clear: initial;\n  }\n\n  .image-left {\n    // float: left;\n    text-align: left;\n    width: 100%;\n    clear: initial;\n  }\n\n  .video-right {\n    // float: right;\n    text-align: right;\n    width: 100%;\n    clear: initial;\n  }\n\n  .video-left {\n    // float: left;\n    text-align: left;\n    width: 100%;\n    clear: initial;\n  }\n\n  .ProseMirror-hideselection *::selection {\n    background: transparent;\n  }\n  .ProseMirror-hideselection *::-moz-selection {\n    background: transparent;\n  }\n  .ProseMirror-hideselection {\n    caret-color: transparent;\n  }\n\n  .ProseMirror-selectednode {\n    outline: 2px solid\n      ", ';\n  }\n\n  hr.ProseMirror-selectednode {\n    outline: none;\n    border-radius: 3px;\n    background: rgba(0, 0, 0, 0.05);\n  }\n  .ProseMirror-selectednode[tex] {\n    outline: none;\n    border-radius: 4px;\n    background: rgba(0, 0, 0, 0.05);\n  }\n\n  /* Make sure li selections wrap around markers */\n\n  li.ProseMirror-selectednode {\n    outline: none;\n  }\n\n  li.ProseMirror-selectednode:after {\n    content: "";\n    position: absolute;\n    left: ', ";\n    right: ", ";\n    top: -2px;\n    bottom: -2px;\n    border: 2px solid ", ';\n    pointer-events: none;\n  }\n\n  .ProseMirror[contenteditable="false"] {\n    .caption {\n      pointer-events: none;\n    }\n    .caption:empty {\n      visibility: hidden;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 1em 0 0.5em;\n    font-weight: bold;\n    cursor: text;\n\n    &:not(.placeholder):before {\n      display: ', ";\n      font-family: ", ";\n      color: ", ";\n      font-size: 13px;\n      line-height: 0;\n      margin-", ': -24px;\n      transition: opacity 150ms ease-in-out;\n      opacity: 0;\n      width: 24px;\n    }\n\n    &:hover,\n    &:focus-within {\n      .heading-actions {\n        // \u4e0b\u62c9\u529f\u80fd\u5148\u9690\u85cf\n        // opacity: 1;\n      }\n    }\n  }\n\n  blockquote h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 500\n  }\n\n  h4,\n  h5,\n  h6 {\n    font-size: 16px;\n  }\n\n  h5 {\n    color: rgb(140,140,140);\n  }\n\n  h6 {\n    color: rgb(140,140,140);\n    font-weight: 500;\n  }\n\n  .heading-content {\n    &:before {\n      content: "\u200b";\n      display: inline;\n    }\n  }\n\n  .heading-name {\n    color: ', ';\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  a:first-child {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n\n  // h1:not(.placeholder):before {\n  //   content: "H1";\n  // }\n  // h2:not(.placeholder):before {\n  //   content: "H2";\n  // }\n  // h3:not(.placeholder):before {\n  //   content: "H3";\n  // }\n  // h4:not(.placeholder):before {\n  //   content: "H4";\n  // }\n  // h5:not(.placeholder):before {\n  //   content: "H5";\n  // }\n  // h6:not(.placeholder):before {\n  //   content: "H6";\n  // }\n\n  .ProseMirror-focused {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      &:not(.placeholder):before {\n        opacity: 1;\n      }\n    }\n  }\n\n  .with-emoji {\n    margin-', ": -1em;\n  }\n\n  .heading-anchor,\n  .heading-fold {\n    display: inline-block;\n    color: ", ";\n    opacity: .75;\n    cursor: pointer;\n    background: none;\n    outline: none;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    text-align: left;\n    font-family: ", ";\n    font-size: 14px;\n    line-height: 0;\n    width: 12px;\n    height: 24px;\n\n    &:focus,\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .heading-anchor {\n    opacity: 0 !important;\n  }\n\n  .heading-actions {\n    opacity: 0;\n    pointer-events: none;\n    background: ", ";\n    margin-", ": -26px;\n    flex-direction: ", ";\n    display: inline-flex;\n    position: relative;\n    top: -2px;\n    width: 26px;\n    height: 24px;\n\n    &.collapsed {\n      opacity: 1;\n    }\n\n    &.collapsed .heading-anchor {\n      opacity: 0;\n    }\n\n    &.collapsed .heading-fold {\n      opacity: 1;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    &:hover {\n      .heading-anchor {\n        // opacity: 0.75 !important;\n      }\n      .heading-anchor:hover {\n        // opacity: 1 !important;\n      }\n    }\n  }\n\n  h1 {\n    line-height: 44px;\n    margin: 28px 0px 0px;\n  }\n\n  h2 {\n    line-height: 36px;\n    margin: 16px 0px 0px;\n  }\n\n  h3 {\n    line-height: 26px;\n    margin: 12px 0px 0px;\n  }\n\n  .heading-fold {\n    display: inline-block;\n    transform-origin: center;\n    padding: 0;\n\n    &.collapsed {\n      transform: rotate(", ");\n      transition-delay: 0.1s;\n      opacity: 1;\n    }\n  }\n\n  .placeholder:before {\n    display: block;\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n    content: ", ";\n    pointer-events: none;\n    height: 0;\n    color: ", ";\n  }\n\n  /** Show the placeholder if focused or the first visible item nth(2) accounts for block insert trigger */\n  .ProseMirror-focused .placeholder:before,\n  .placeholder:nth-child(1):before,\n  .placeholder:nth-child(2):before {\n    opacity: 1;\n  }\n\n  .notice-block {\n    display: flex;\n    align-items: center;\n    background: ", ";\n    color: ", ";\n    border-radius: 4px;\n    padding: 8px 16px;\n    margin: 8px 0;\n\n    a {\n      color: ", ";\n    }\n\n    a:not(.heading-name) {\n      text-decoration: underline;\n    }\n  }\n\n  .notice-block .content {\n    flex-grow: 1;\n    min-width: 0;\n  }\n\n  .notice-block .icon {\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin-", ": 4px;\n    position: relative;\n    top: 1px;\n  }\n\n  .notice-block.tip {\n    background: ", ";\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n\n  .notice-block.warning {\n    background: ", ";\n    color: ", ";\n\n    a {\n      color: ", ';\n    }\n  }\n\n  blockquote {\n    margin: 8px 0;\n    padding-left: 12px;\n    // font-style: italic;\n    overflow: hidden;\n    position: relative;\n\n    &:before {\n      content: "";\n      display: inline-block;\n      width: 2px;\n      border-radius: 1px;\n      position: absolute;\n      margin-', ": -12px;\n      top: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.14);\n    }\n  }\n\n  b,\n  strong {\n    font-weight: 600;\n  }\n\n  .template-placeholder {\n    color: ", ";\n    border-bottom: 1px dotted ", ";\n    border-radius: 2px;\n    cursor: text;\n\n    &:hover {\n      border-bottom: 1px dotted\n        ", ";\n    }\n  }\n\n  p {\n    margin: 0;\n    span:first-child + br:last-child {\n      display: none;\n    }\n  }\n\n  & p{\n    margin: 7px 0px 3px;\n  }\n\n  a {\n    color: ", ";\n    cursor: pointer;\n  }\n\n  a:hover {\n    text-decoration: ", ";\n  }\n\n  ul,\n  ol {\n    margin: ", ";\n    padding: ", ";\n  }\n\n  ol ol {\n    list-style: lower-alpha;\n  }\n\n  ol ol ol {\n    list-style: lower-roman;\n  }\n\n  ul.checkbox_list {\n    list-style: none;\n    padding: 0;\n    margin: ", ";\n  }\n\n  ul li,\n  ol li {\n    position: relative;\n    white-space: initial;\n\n    p {\n      white-space: pre-wrap;\n    }\n\n    > div {\n      width: 100%;\n    }\n  }\n\n  ul.checkbox_list li {\n    display: flex;\n    padding-", ": 24px;\n  }\n\n  ul.checkbox_list li.checked > div > p {\n    color: ", ';\n    text-decoration: line-through;\n  }\n\n  // \u62d6\u62fd\n  // ul li::before,\n  // ol li::before {\n  //   background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOCIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iOCIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+CjxyZWN0IHg9IjgiIHk9IjE1IiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iMTMiIHk9IjExIiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iMTUiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+Cjwvc3ZnPgo=") no-repeat;\n  //   background-position: 0 2px;\n  //   content: "";\n  //   display: ', ";\n  //   cursor: grab;\n  //   width: 24px;\n  //   height: 24px;\n  //   position: absolute;\n  //   ", ": -40px;\n  //   opacity: 0;\n  //   transition: opacity 200ms ease-in-out;\n  // }\n\n  ul li[draggable=true]::before,\n  ol li[draggable=true]::before {\n    cursor: grabbing;\n  }\n\n  ul > li.counter-2::before,\n  ol li.counter-2::before {\n    ", ": -50px;\n  }\n\n  ul > li.hovering::before,\n  ol li.hovering::before {\n    opacity: 0.5;\n  }\n\n  ul li.ProseMirror-selectednode::after,\n  ol li.ProseMirror-selectednode::after {\n    display: none;\n  }\n\n  ul.checkbox_list li::before {\n    ", ": 0;\n  }\n\n  ul.checkbox_list li input {\n    cursor: pointer;\n    pointer-events: ", ";\n    opacity: ", ";\n    margin: ", ';\n    width: 14px;\n    height: 14px;\n  }\n\n  li p:first-child {\n    margin: 0;\n    word-break: break-word;\n  }\n\n  hr {\n    position: relative;\n    height: 17px;\n    border: 0;\n  }\n\n  hr:before {\n    content: "";\n    display: block;\n    position: absolute;\n    border-top: 1px solid rgba(0, 0, 0, 0.14);\n    top: 0.5em;\n    left: 0;\n    right: 0;\n  }\n\n  hr.page-break {\n    page-break-after: always;\n  }\n\n  hr.page-break:before {\n    border-top: 1px dashed ', ";\n  }\n\n  code {\n    border-radius: 3px;\n    vertical-align: top;\n    background: rgba(0, 0, 0, 0.05);\n    padding: 3px 4px;\n    font-family: ", ";\n    font-size: 80%;\n  }\n\n  mark {\n    border-radius: 1px;\n    color: ", ";\n    background: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n\n  .code-block {\n    margin: 12px 0px;\n  }\n\n  .code-block,\n  .notice-block {\n    position: relative;\n\n    select,\n    button {\n      background: ", ";\n      color: ", ";\n      border-width: 1px;\n      font-size: 13px;\n      display: none;\n      position: absolute;\n      border-radius: 4px;\n      padding: 2px;\n      z-index: 1;\n      top: 4px;\n    }\n\n    &.code-block {\n      select {\n        left: 8px;\n        top: 8px;\n        width: 120px;\n        height: 24px;\n        background;\n        display: inline;\n        background-color: rgba(0,0,0,0);\n        border: none;\n        ", "\n        &:hover {\n          background: rgba(0, 0, 0, 0.05);\n        }\n      }\n      button {\n        top: 8px;\n        right: 12px;\n        display: inline;\n        background-color: rgba(0,0,0,0);\n        border: none;\n        &:hover {\n          background: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n\n    &.notice-block {\n      select,\n      button {\n        ", ": 4px;\n      }\n    }\n\n    button {\n      padding: 2px 4px;\n    }\n\n    &:hover {\n      // select {\n      //   display: ", ";\n      // }\n\n      // button {\n      //   display: ", ";\n      // }\n    }\n\n    select:focus,\n    select:active {\n      display: inline;\n    }\n  }\n\n  pre {\n    display: block;\n    overflow-x: auto;\n    padding: 56px 20px 24px;\n    line-height: 1.4em;\n    position: relative;\n    // background: ", ";\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 4px;\n    // border: 1px solid ", ";\n\n    -webkit-font-smoothing: initial;\n    font-family: ", ";\n    font-size: 13px;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    color: ", ";\n    margin: 0;\n\n    code {\n      font-size: 13px;\n      background: none;\n      padding: 0;\n      border: 0;\n    }\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: ", ";\n  }\n\n  .token.punctuation {\n    color: ", ";\n  }\n\n  .token.namespace {\n    opacity: 0.7;\n  }\n\n  .token.operator,\n  .token.boolean,\n  .token.number {\n    color: ", ";\n  }\n\n  .token.property {\n    color: ", ";\n  }\n\n  .token.tag {\n    color: ", ";\n  }\n\n  .token.string {\n    color: ", ";\n  }\n\n  .token.selector {\n    color: ", ";\n  }\n\n  .token.attr-name {\n    color: ", ";\n  }\n\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: ", ";\n  }\n\n  .token.attr-value,\n  .token.keyword,\n  .token.control,\n  .token.directive,\n  .token.unit {\n    color: ", ";\n  }\n\n  .token.function {\n    color: ", ";\n  }\n\n  .token.statement,\n  .token.regex,\n  .token.atrule {\n    color: ", ";\n  }\n\n  .token.placeholder,\n  .token.variable {\n    color: ", ";\n  }\n\n  .token.deleted {\n    text-decoration: line-through;\n  }\n\n  .token.inserted {\n    border-bottom: 1px dotted ", ";\n    text-decoration: none;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.important {\n    color: ", ";\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 4px;\n    margin-top: 1em;\n    box-sizing: border-box;\n\n    * {\n      box-sizing: border-box;\n    }\n\n    tr {\n      position: relative;\n      border-bottom: 1px solid ", ";\n    }\n\n    th {\n      background: ", ";\n      & strong {\n        font-weight: bold !important;\n      }\n    }\n\n    td,\n    th {\n      position: relative;\n      vertical-align: top;\n      border: 1px solid ", ";\n      position: relative;\n      padding: 4px 8px;\n      text-align: ", ";\n      min-width: 100px;\n    }\n\n    .selectedCell {\n      background: ", ';\n\n      /* fixes Firefox background color painting over border:\n       * https://bugzilla.mozilla.org/show_bug.cgi?id=688556 */\n      background-clip: padding-box;\n    }\n\n    .grip-column {\n      /* usage of ::after for all of the table grips works around a bug in\n       * prosemirror-tables that causes Safari to hang when selecting a cell\n       * in an empty table:\n       * https://github.com/ProseMirror/prosemirror/issues/947 */\n      &::after {\n        content: "";\n        cursor: pointer;\n        position: absolute;\n        top: -9px;\n        ', ": 0;\n        width: 100%;\n        height: 8px;\n        background: rgba(0, 0, 0, 0.08);\n        // border-bottom: 3px solid ", ";\n        display: ", ";\n        box-sizing: content-box;\n      }\n\n      &:hover::after {\n        background: rgba(0, 0, 0, 0.14);\n      }\n      &.first::after {\n        border-top-", "-radius: 5px;\n      }\n      &.last::after {\n        border-top-", '-radius: 5px;\n      }\n      &.selected::after {\n        background: #007AFF\n      }\n    }\n\n    .grip-row {\n      &::after {\n        content: "";\n        cursor: pointer;\n        position: absolute;\n        ', ": -9px;\n        top: 0;\n        height: 100%;\n        width: 8px;\n        background: rgba(0, 0, 0, 0.08);\n        // border-", ": 3px solid;\n        // border-color: ", ";\n        display: ", ";\n        box-sizing: content-box;\n      }\n\n      &:hover::after {\n        background: rgba(0, 0, 0, 0.14);\n      }\n      &.first::after {\n        border-top-", "-radius: 5px;\n      }\n      &.last::after {\n        border-bottom-", '-radius: 5px;\n      }\n      &.selected::after {\n        background: #007AFF\n      }\n    }\n\n    .grip-table {\n      &::after {\n        content: "";\n        cursor: pointer;\n        background: ', ";\n        width: 13px;\n        height: 13px;\n        border-radius: 13px;\n        border: 2px solid ", ";\n        position: absolute;\n        top: -18px;\n        ", ": -18px;\n        display: ", ";\n      }\n\n      &:hover::after {\n        background: ", ";\n      }\n      &.selected::after {\n        background: ", ";\n      }\n    }\n  }\n\n  .scrollable-wrapper {\n    position: relative;\n    margin: 16px 0px;\n    scrollbar-width: thin;\n    scrollbar-color: transparent transparent;\n\n    &:hover {\n      scrollbar-color: ", " ", ";\n    }\n\n    & ::-webkit-scrollbar {\n      height: 14px;\n      background-color: transparent;\n    }\n\n    &:hover ::-webkit-scrollbar {\n      background-color: ", ";\n    }\n\n    & ::-webkit-scrollbar-thumb {\n      background-color: transparent;\n      border: 3px solid transparent;\n      border-radius: 7px;\n    }\n\n    &:hover ::-webkit-scrollbar-thumb {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n\n  .scrollable {\n    overflow-y: hidden;\n    overflow-x: auto;\n    padding-", ": 1em;\n    margin-", ": -1em;\n    border-", ": 1px solid transparent;\n    border-", ": 1px solid transparent;\n    transition: border 250ms ease-in-out 0s;\n  }\n\n  .scrollable-shadow {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    ", ": -1em;\n    width: 16px;\n    transition: box-shadow 250ms ease-in-out;\n    border: 0px solid transparent;\n    border-", "-width: 1em;\n    pointer-events: none;\n\n    &.left {\n      box-shadow: 16px 0 16px -16px inset rgba(0, 0, 0, 0.25);\n      border-left: 1em solid ", ";\n    }\n\n    &.right {\n      right: 0;\n      left: auto;\n      box-shadow: -16px 0 16px -16px inset rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  .block-menu-trigger {\n    opacity: 0;\n    pointer-events: none;\n    display: ", ";\n    width: 24px;\n    height: 24px;\n    color: #525252;\n    background: rgba(0, 0, 0, 0.05);\n    position: absolute;\n    border-radius: 4px;\n    transition: color 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n      transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n      opacity 150ms ease-in-out;\n    outline: none;\n    border: 0;\n    padding: 5px;\n    margin-top: 1px;\n    margin-", ": -30px;\n\n    & svg {\n      float: left;\n    }\n\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      transform: scale(1.1);\n      color: ", ';\n    }\n  }\n\n  .ProseMirror-focused .block-menu-trigger,\n  .block-menu-trigger:active,\n  .block-menu-trigger:focus {\n    opacity: 1;\n    pointer-events: initial;\n  }\n\n  .ProseMirror-gapcursor {\n    display: none;\n    pointer-events: none;\n    position: absolute;\n  }\n\n  .ProseMirror-gapcursor:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -2px;\n    width: 20px;\n    border-top: 1px solid ', ';\n    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n  }\n\n  .folded-content {\n    display: none;\n  }\n\n  @keyframes ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }\n\n  .ProseMirror-focused .ProseMirror-gapcursor {\n    display: block;\n  }\n\n  @media print {\n    .placeholder:before,\n    .block-menu-trigger,\n    .heading-actions,\n    h1:not(.placeholder):before,\n    h2:not(.placeholder):before,\n    h3:not(.placeholder):before,\n    h4:not(.placeholder):before,\n    h5:not(.placeholder):before,\n    h6:not(.placeholder):before {\n      display: none;\n    }\n\n    .page-break {\n      opacity: 0;\n    }\n\n    em,\n    blockquote {\n      font-family: "SF Pro Text", ', ';\n    }\n  }\n\n  .goku-editor-code-select {\n    margin-left: 12px;\n    height: 24px;\n    font-size: 12px;\n    line-height: 16px;\n    display: inline-block;\n    border: none;\n    box-sizing: border-box;\n    padding: 4px 8px 4px 8px;\n    pointer-events: all;\n    position: relative;\n    border-radius: 4px;\n    z-index: 1;\n    cursor: pointer;\n    &:hover {\n      background: rgba(0, 0, 0, 0.08);\n    }\n    &::selection {\n      background: rgba(0,0,0,0);\n    }\n  }\n\n  .current .goku-editor-code-select {\n    background: rgba(0, 0, 0, 0.05);\n    padding: 4px 22px 4px 8px;\n    border-radius: 4px 0px 0px 4px;\n    &:hover {\n      background: rgba(0, 0, 0, 0.08);\n    }\n    &::after {\n      content: "";\n      display: inline-block;\n      background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorClickDown.svg");\n      background-size: 100% 100%;\n      height: 14px;\n      width: 14px;\n      box-sizing: content-box;\n      position: absolute;\n      top: 5px;\n      right: 4px;\n    }\n  }\n\n  .current .goku-editor-code-select.edit-readonly {\n    padding: 4px 8px 4px 8px;\n    border-radius: 4px;\n    &::after {\n      content: "";\n      display: none;\n    }\n  }\n\n  .goku-editor-code-select-add {\n    height: 14px;\n    width: 14px;\n    padding: 3px;\n    transform: translateY(6px);\n    margin-left: 12px;\n    display: inline-block;\n    border: none;\n    ', '\n    position: relative;\n    border-radius: 4px;\n    box-sizing: content-box;\n    z-index: 1;\n    cursor: pointer;\n    background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorSelectedAdd.svg");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 14px 14px;\n  }\n\n  .goku-editor-code-select-add.edit-readonly {\n    display:none;\n  }\n\n  .goku-editor-code-copy {\n    top: 0px !important;\n    right: 12px;\n    padding: 5px;\n    height: 24px;\n    width: 24px;\n    display: inline-block;\n    background-color: rgba(0,0,0,0);\n    border: none;\n    cursor: pointer;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n    &::after {\n      content: "";\n      background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorCodeCopy.svg");\n      background-size: 100% 100%;\n      display: inline-block;\n      height: 14px;\n      width: 14px;\n      box-sizing: content-box;\n      position: absolute;\n      top: 5px;\n      right: 5px;\n    }\n  }\n\n  .goku-editor-code-select-box {\n    height: 24px;\n    display: inline-block;\n    position: relative;\n    font-size: 16px;\n  }\n\n  .goku-editor-code-tab-delete {\n    display: none;\n    height: 24px;\n    width: 24px;\n    box-sizing: border-box;\n    margin-left: 1px;\n    z-index: 20;\n    border-radius: 0px 4px 4px 0px;\n    background: rgba(0, 0, 0, 0.05);\n    background-size: 100% 100%;\n    position: relative;\n    font-size: 14px;\n    cursor: pointer;\n    vertical-align: middle;\n    &:hover {\n      background: rgba(0, 0, 0, 0.08);\n    }\n    &::after {\n      content: "";\n      background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorTabDelete.svg");\n      background-size: 100% 100%;\n      display: inline-block;\n      height: 12px;\n      width: 12px;\n      box-sizing: content-box;\n      position: absolute;\n      top: 6px;\n      right: 6px;\n    }\n  }\n\n  .current .goku-editor-code-tab-delete {\n    display: inline-block;\n    cursor: pointer;\n  }\n\n  .goku-editor-code-select-option-container {\n    position: absolute;\n    top: 32px;\n    left: 12px;\n    display: none;\n    width: 180px;\n    box-sizing: border-box;\n    z-index: 100;\n    height: 248px;\n    padding: 6px;\n    overflow: auto;\n    background: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.03);\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04), 0px 12px 48px rgba(0, 0, 0, 0.04);\n    border-radius: 4px;\n  }\n\n  .show.goku-editor-code-select-option-container {\n    display: block;\n  }\n\n  .goku-editor-code-select-option {\n    height: 32px;\n    width: 168px;\n    cursor: pointer;\n    padding-left: 26px;\n    line-height: 32px;\n    position: relative;\n  }\n\n  .goku-editor-code-select-option.selected {\n    font-weight: 500;\n    &::before {\n      content: "";\n      display: inline-block;\n      background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorSelected.png");\n      background-size: 100% 100%;\n      position: absolute;\n      height: 14px;\n      width: 14px;\n      margin-top: 9px;\n      line-height: 32px;\n      left: 4px;\n    }\n  }\n\n  .editor-uploading-img {\n    height: 300px;\n    width: 480px;\n    text-align: center;\n    background: #F5F5F5;\n    border-radius: 4px;\n    color: rgba(26, 26, 26, 0.75);\n    margin: auto;\n    img {\n      height: 60px;\n      margin-top: 112px;\n    }\n  }\n\n  .prism-player {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%!important;\n    height: 100%!important;\n  }\n\n  .editor-selection-tooltip {\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    // width: 80px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: #2A2A2A;\n    border-radius: 4px;\n    display: none;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    color: #fff;\n    padding: 6px 12px;\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-width: 8px;\n      border-style: solid;\n      top: 100%;\n      left: 50%;\n      margin-left: -8px;\n      border-top-color: #2A2A2A;\n    }\n  }\n\n  .goku-editor-link-icon:hover .editor-selection-tooltip {\n    display: inline-block;\n  }\n\n  .prism-player {\n    &:focus-visible {\n      outline: #fff auto 2px;\n    }\n  }\n\n  // .editor-normal-video {\n  //   &:focus-visible {\n  //     outline: #fff auto 4px;\n  //   }\n  // }\n'])), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.theme.fontFamily
                }), (function(e) {
                    return e.theme.fontWeight
                }), (function(e) {
                    return e.readOnly ? "initial" : "none"
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.readOnly ? "transparent" : "#007AFF"
                }), (function(e) {
                    return e.rtl ? "-2px" : "-32px"
                }), (function(e) {
                    return e.rtl ? "-32px" : "-2px"
                }), (function(e) {
                    return e.theme.selected
                }), (function(e) {
                    return e.readOnly ? "none" : "inline-block"
                }), (function(e) {
                    return e.theme.fontFamilyMono
                }), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.theme.fontFamilyMono
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "row-reverse" : "row"
                }), (function(e) {
                    return e.rtl ? "90deg" : "-90deg"
                }), (function(e) {
                    return e.readOnly ? "" : "attr(data-empty-text)"
                }), (function(e) {
                    return e.theme.placeholder
                }), (function(e) {
                    return e.theme.noticeInfoBackground
                }), (function(e) {
                    return e.theme.noticeInfoText
                }), (function(e) {
                    return e.theme.noticeInfoText
                }), (function(e) {
                    return e.rtl ? "left" : "right"
                }), (function(e) {
                    return e.theme.noticeTipBackground
                }), (function(e) {
                    return e.theme.noticeTipText
                }), (function(e) {
                    return e.theme.noticeTipText
                }), (function(e) {
                    return e.theme.noticeWarningBackground
                }), (function(e) {
                    return e.theme.noticeWarningText
                }), (function(e) {
                    return e.theme.noticeWarningText
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.placeholder
                }), (function(e) {
                    return e.theme.placeholder
                }), (function(e) {
                    return e.readOnly ? e.theme.placeholder : e.theme.textSecondary
                }), (function(e) {
                    return e.theme.link
                }), (function(e) {
                    return e.readOnly ? "underline" : "none"
                }), (function(e) {
                    return e.rtl ? "3px -26px 3px 0.1em" : "3px 0.1em 3px -26px"
                }), (function(e) {
                    return e.rtl ? "0 44px 0 0" : "0 0 0 44px"
                }), (function(e) {
                    return e.rtl ? "0 -24px 0 0" : "0 0 0 -24px"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.readOnly ? "none" : "inline-block"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.readOnly && !e.readOnlyWriteCheckboxes ? "none" : "initial"
                }), (function(e) {
                    return e.readOnly && !e.readOnlyWriteCheckboxes ? .75 : 1
                }), (function(e) {
                    return e.rtl ? "0.5em 0 0 0.5em" : "0.5em 0.5em 0 0"
                }), (function(e) {
                    return e.theme.horizontalRule
                }), (function(e) {
                    return e.theme.fontFamilyMono
                }), (function(e) {
                    return e.theme.textHighlightForeground
                }), (function(e) {
                    return e.theme.textHighlight
                }), (function(e) {
                    return e.theme.textHighlightForeground
                }), (function(e) {
                    return e.theme.blockToolbarBackground
                }), (function(e) {
                    return e.theme.blockToolbarItem
                }), (function(e) {
                    return e.readOnly ? "pointer-events:none;" : ""
                }), (function(e) {
                    return e.rtl ? "left" : "right"
                }), (function(e) {
                    return e.readOnly ? "none" : "inline"
                }), (function(e) {
                    return e.readOnly ? "inline" : "none"
                }), (function(e) {
                    return e.theme.codeBackground
                }), (function(e) {
                    return e.theme.codeBorder
                }), (function(e) {
                    return e.theme.fontFamilyMono
                }), (function(e) {
                    return e.theme.code
                }), (function(e) {
                    return e.theme.codeComment
                }), (function(e) {
                    return e.theme.codePunctuation
                }), (function(e) {
                    return e.theme.codeNumber
                }), (function(e) {
                    return e.theme.codeProperty
                }), (function(e) {
                    return e.theme.codeTag
                }), (function(e) {
                    return e.theme.codeString
                }), (function(e) {
                    return e.theme.codeSelector
                }), (function(e) {
                    return e.theme.codeAttr
                }), (function(e) {
                    return e.theme.codeEntity
                }), (function(e) {
                    return e.theme.codeKeyword
                }), (function(e) {
                    return e.theme.codeFunction
                }), (function(e) {
                    return e.theme.codeStatement
                }), (function(e) {
                    return e.theme.codePlaceholder
                }), (function(e) {
                    return e.theme.codeInserted
                }), (function(e) {
                    return e.theme.codeImportant
                }), (function(e) {
                    return e.theme.tableDivider
                }), (function(e) {
                    return e.theme.tableHeaderBackground
                }), (function(e) {
                    return e.theme.tableDivider
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.readOnly ? "inherit" : "rgba(0, 122, 255, 0.08)"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.readOnly ? "none" : "block"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "left" : "right"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "left" : "right"
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.readOnly ? "none" : "block"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.tableDivider
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.readOnly ? "none" : "block"
                }), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.theme.tableSelected
                }), (function(e) {
                    return e.theme.scrollbarThumb
                }), (function(e) {
                    return e.theme.scrollbarBackground
                }), (function(e) {
                    return e.theme.scrollbarBackground
                }), (function(e) {
                    return e.theme.scrollbarThumb
                }), (function(e) {
                    return e.theme.scrollbarBackground
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "left" : "right"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.readOnly ? "none" : "inline"
                }), (function(e) {
                    return e.rtl ? "right" : "left"
                }), (function(e) {
                    return e.theme.text
                }), (function(e) {
                    return e.theme.cursor
                }), (function(e) {
                    return e.theme.fontFamily
                }), (function(e) {
                    return e.readOnly ? "pointer-events:none;" : ""
                })),
                Va = In("div")($ || ($ = se(["\n  width: 100%;\n  height: ", "px;\n"])), (function(e) {
                    return e.spaceHeight ? Math.max(e.spaceHeight, 400) : "400"
                })),
                $a = (En(W || (W = se(['\n  .hover-a-tag-el {\n    position: absolute;\n    white-space:nowrap;\n    \n    height: 32px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04), 0px 12px 48px rgba(0, 0, 0, 0.04);\n    border-radius: 5px;\n    display: none;\n    transform: translateX(-50%);\n    padding: 6px 8px;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    color: #1A1A1A;\n    box-sizing: border-box;\n    z-index: 100;\n    & .hover-a-tag-el-value {\n      max-width: 240px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    &::before {\n      content: "";\n      display: inline-block;\n      height: 10px;\n      width: 100%;\n      position: absolute;\n      top: -10px;\n      left: 0px;\n    }\n  }\n  .goku-editor-link-a {\n    position: relative;\n    text-selectable: true;\n    &:hover {\n      .hover-a-tag-el {\n        display:flex;\n      }\n    }\n  }\n\n\n  .goku-editor-separator {\n    height: 16px;\n    width: 1px;\n    background: rgba(0, 0, 0, 0.05);\n    display: inline-block;\n    margin-left: 8px;\n    margin-top: 4px;\n    box-sizing: border-box;\n    margin-left: 10px;\n  }\n\n  .goku-editor-link-icon {\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    display: inline-block;\n    padding: 5px;\n    pointer-events: all;\n    box-sizing: border-box;\n    margin-left: 10px;\n    position: relative;\n    margin-top: -2px;\n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  }\n\n  .goku-editor-link-delete {\n    &::after {\n      content: "";\n      display: inline-block;\n      background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/1680780981787Icon.png");\n      background-size: 100% 100%;\n      height: 14px;\n      width: 14px;\n      position: absolute;\n      top: 4px;\n      left: 5px;\n    }\n  }\n\n  .editor-selection-tooltip {\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    // width: 80px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: #2A2A2A;\n    border-radius: 4px;\n    display: none;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    color: #fff;\n    padding: 6px 12px;\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-width: 8px;\n      border-style: solid;\n      top: 100%;\n      left: 50%;\n      margin-left: -8px;\n      border-top-color: #2A2A2A;\n    }\n  }\n\n  .goku-editor-link-icon:hover .editor-selection-tooltip {\n    display: inline-block;\n  }\n}']))), function() {
                    "use strict";

                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        ne(this, e), this.options = Se(Se({}, this.defaultOptions), t)
                    }
                    return re(e, [{
                        key: "bindEditor",
                        value: function(e) {
                            this.editor = e
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "extension"
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return ""
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return []
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return []
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            return {}
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return []
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            return function(e) {
                                return function() {
                                    return !1
                                }
                            }
                        }
                    }, {
                        key: "defaultOptions",
                        get: function() {
                            return {}
                        }
                    }]), e
                }()),
                Wa = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "type",
                        get: function() {
                            return "node"
                        }
                    }, {
                        key: "markdownToken",
                        get: function() {
                            return ""
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            console.error("toMarkdown not implemented", e, t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {}
                    }]), n
                }($a),
                Fa = n(35406);
            var Ua = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "doc"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "block+"
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.schema;
                            return {
                                toggleBlockInitial: function() {
                                    return e = t.nodes.paragraph,
                                        function(t, n) {
                                            return (0, Fa.setBlockType)(e)(t, n)
                                        };
                                    var e
                                },
                                deleteCodeBlock: function() {
                                    return function(e, t) {
                                        for (var n = e.selection.$anchor, r = n.depth; r > 0; r--) {
                                            if ("code_block" === n.node(r).type.name) return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0
                                        }
                                        return !1
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Za = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "text"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                group: "inline"
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.text(t.text)
                        }
                    }, {
                        key: "keys",
                        value: function() {
                            return {
                                Tab: function(e, t) {
                                    for (var n = e.tr, r = e.selection, o = e.selection.$head, i = "", a = o.depth; a > 0; a--) o.node(a).type && (i += o.node(a).type.name);
                                    return "paragraph" === i && (t(n.insertText("  ", r.from, r.to)), !0)
                                }
                            }
                        }
                    }]), n
                }(Wa),
                qa = n(45574),
                Ga = n(35406);

            function Ka(e, t) {
                return function(n, r) {
                    return io(e)(n) ? (0, Ga.lift)(n, r) : (0, Ga.wrapIn)(e, t)(n, r)
                }
            }
            var Ja = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "blockquote"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "block+",
                                group: "block",
                                defining: !0,
                                parseDOM: [{
                                    tag: "blockquote"
                                }],
                                toDOM: function() {
                                    return ["blockquote", 0]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, qa.wrappingInputRule)(/^\s*>\s$/, t)]
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function() {
                                return Ka(t)
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Ctrl->": Ka(t),
                                "Mod-]": Ka(t),
                                "Shift-Enter": function(e, n) {
                                    if (!io(t)(e)) return !1;
                                    var r = e.tr,
                                        o = e.selection;
                                    return n(r.split(o.to)), !0
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.wrapBlock("> ", null, t, (function() {
                                return e.renderContent(t)
                            }))
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "blockquote"
                            }
                        }
                    }]), n
                }(Wa),
                Xa = n(45574),
                Ya = n(19449),
                Qa = n(35285);

            function el(e, t) {
                return e.type === t.nodes.bullet_list || e.type === t.nodes.ordered_list || e.type === t.nodes.checkbox_list
            }

            function tl(e, t) {
                return function(n, r) {
                    var o = n.schema,
                        i = n.selection,
                        a = i.$from,
                        l = i.$to,
                        s = a.blockRange(l);
                    if (!s) return !1;
                    var c = (0, Qa.findParentNode)((function(e) {
                        return el(e, o)
                    }))(i);
                    if (s.depth >= 1 && c && s.depth - c.depth <= 1) {
                        if (c.node.type === e) return (0, Ya.liftListItem)(t)(n, r);
                        if (el(c.node, o) && e.validContent(c.node.content)) {
                            var u = n.tr;
                            return u.setNodeMarkup(c.pos, e), r && r(u), !1
                        }
                    }
                    if ("heading" === i.$anchor.parent.type.name) {
                        var d = i.$anchor.path,
                            p = 0,
                            f = 0,
                            h = "";
                        d.forEach((function(e, t) {
                            e.type && "heading" === e.type.name && "number" === typeof d[t - 1] && (p = d[t - 1], f = e.nodeSize, h = e.textContent)
                        }));
                        var m = p + f;
                        return r(n.tr.replaceRangeWith(p, m, e.create(null, n.schema.nodes.list_item.create(null, n.schema.nodes.paragraph.create(null, n.schema.text(h)))))), !1
                    }
                    return (0, Ya.wrapInList)(e)(n, r)
                }
            }
            var nl = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "bullet_list"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "list_item+",
                                group: "block",
                                parseDOM: [{
                                    tag: "ul"
                                }],
                                toDOM: function() {
                                    return ["ul", 0]
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema;
                            return function() {
                                return tl(t, n.nodes.list_item)
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            return {
                                "Shift-Ctrl-8": tl(e.type, e.schema.nodes.list_item)
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, Xa.wrappingInputRule)(/^\s*([-+*])\s$/, t)]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.renderList(t, "  ", (function() {
                                return (t.attrs.bullet || "*") + " "
                            }))
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "bullet_list"
                            }
                        }
                    }]), n
                }(Wa),
                rl = Ie(n(41029)),
                ol = Ie(n(17275)),
                il = Ie(n(59081)),
                al = Ie(n(26319)),
                ll = Ie(n(45778)),
                sl = Ie(n(59034)),
                cl = Ie(n(191)),
                ul = Ie(n(59906)),
                dl = Ie(n(91792)),
                pl = Ie(n(77108)),
                fl = Ie(n(88079)),
                hl = Ie(n(68814)),
                ml = Ie(n(72353)),
                gl = Ie(n(93019)),
                vl = Ie(n(75093)),
                kl = Ie(n(37404)),
                yl = Ie(n(28731)),
                bl = Ie(n(48954)),
                wl = Ie(n(88939)),
                xl = Ie(n(73956)),
                Cl = Ie(n(20351)),
                Sl = n(38556),
                Ml = n(45574),
                El = Ie(n(85165)),
                Ll = Ie(n(41029)),
                Al = Ie(n(64670)),
                Il = n(38556),
                Tl = n(15899),
                Ol = n(35285),
                Rl = {
                    none: "Plain Text",
                    "c++": "C++",
                    c: "C",
                    csharp: "C#",
                    java: "Java",
                    go: "Go",
                    python: "Python",
                    python3: "Python3",
                    javascript: "JavaScript",
                    objectivec: "Objective-C",
                    php: "PHP",
                    css: "CSS",
                    markup: "HTML",
                    bash: "Bash",
                    json: "JSON",
                    perl: "Perl",
                    powershell: "Powershell",
                    ruby: "Ruby",
                    rust: "Rust",
                    sql: "SQL",
                    typescript: "TypeScript",
                    yaml: "YAML",
                    markdown: "Markdown"
                },
                Pl = {};

            function Dl(e) {
                var t = e.doc,
                    n = e.name,
                    r = [],
                    o = (0, Ol.findBlockNodes)(t).filter((function(e) {
                        return e.node.type.name === n
                    }));

                function i(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e.map((function(e) {
                        if ("element" === e.type) {
                            var n = [].concat(Q(t), Q(e.properties.className || []));
                            return i(e.children, n)
                        }
                        return {
                            text: e.value,
                            classes: t
                        }
                    }))
                }
                return o.forEach((function(e) {
                    var t = e.pos + 1,
                        n = e.node.attrs.language;
                    if (n && "none" !== n && Ll.default.registered(n)) {
                        if (!Pl[e.pos] || !Pl[e.pos].node.eq(e.node)) {
                            var o = Ll.default.highlight(e.node.textContent, n),
                                a = (0, Al.default)(i(o)).map((function(e) {
                                    var n = t,
                                        r = n + e.text.length;
                                    return t = r, Me(Se({}, e), {
                                        from: n,
                                        to: r
                                    })
                                })).filter((function(e) {
                                    return e.classes && e.classes.length
                                })).map((function(e) {
                                    return Tl.Decoration.inline(e.from, e.to, {
                                        class: e.classes.join(" ")
                                    })
                                }));
                            Pl[e.pos] = {
                                node: e.node,
                                decorations: a
                            }
                        }
                        Pl[e.pos].decorations.forEach((function(e) {
                            r.push(e)
                        }))
                    }
                })), Object.keys(Pl).filter((function(e) {
                    return !o.find((function(t) {
                        return t.pos === Number(e)
                    }))
                })).forEach((function(e) {
                    delete Pl[Number(e)]
                })), Tl.DecorationSet.create(t, r)
            }

            function Nl(e) {
                var t = e.name,
                    n = !1;
                return new Il.Plugin({
                    key: new Il.PluginKey("prism"),
                    state: {
                        init: function(e, t) {
                            var n = t.doc;
                            return Tl.DecorationSet.create(n, [])
                        },
                        apply: function(e, r, o, i) {
                            var a = i.selection.$head.parent.type.name,
                                l = o.selection.$head.parent.type.name,
                                s = e.docChanged && [a, l].includes(t),
                                c = !!e.getMeta("y-sync$");
                            return !n || s || c ? (n = !0, Dl({
                                doc: e.doc,
                                name: t
                            })) : r.map(e.mapping, e.doc)
                        }
                    },
                    view: function(e) {
                        return n || setTimeout((function() {
                            e.dispatch(e.state.tr.setMeta("prism", {
                                loaded: !0
                            }))
                        }), 10), {}
                    },
                    props: {
                        decorations: function(e) {
                            return this.getState(e)
                        }
                    }
                })
            }
            var _l = n(35406);

            function Bl(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return function(r, o) {
                    return io(e, n)(r) ? (0, _l.setBlockType)(t)(r, o) : (0, _l.setBlockType)(e, n)(r, o)
                }
            }

            function zl(e) {
                if (e.schema.nodes.code_block)
                    for (var t = e.selection.$head, n = t.depth; n > 0; n--)
                        if (t.node(n).type === e.schema.nodes.code_block) return !0;
                return co(e.schema.marks.code_inline)(e)
            }
            var Hl = "rme-code-language",
                jl = "c++";

            function Vl(e) {
                e.languages["c++"] = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    boolean: /\b(?:true|false)\b/,
                    function: /\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/
                }
            }

            function $l(e) {
                e.languages.python3 = {
                    comment: {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0
                    },
                    "string-interpolation": {
                        pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                                lookbehind: !0,
                                inside: {
                                    "format-spec": {
                                        pattern: /(:)[^:(){}]+(?=}$)/,
                                        lookbehind: !0
                                    },
                                    "conversion-option": {
                                        pattern: /![sra](?=[:}]$)/,
                                        alias: "punctuation"
                                    },
                                    rest: null
                                }
                            },
                            string: /[\s\S]+/
                        }
                    },
                    "triple-quoted-string": {
                        pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
                        greedy: !0,
                        alias: "string"
                    },
                    string: {
                        pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                        greedy: !0
                    },
                    function: {
                        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                        lookbehind: !0
                    },
                    "class-name": {
                        pattern: /(\bclass\s+)\w+/i,
                        lookbehind: !0
                    },
                    decorator: {
                        pattern: /(^\s*)@\w+(?:\.\w+)*/im,
                        lookbehind: !0,
                        alias: ["annotation", "punctuation"],
                        inside: {
                            punctuation: /\./
                        }
                    },
                    keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                    boolean: /\b(?:True|False|None)\b/,
                    number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
                    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                    punctuation: /[{}[\];(),.:]/
                }, e.languages.python3["string-interpolation"].inside.interpolation.inside.rest = e.languages.python3
            }
            Vl.displayName = "c++", Vl.aliases = [], $l.displayName = "python3", $l.aliases = [""], [ol.default, il.default, al.default, Vl, ll.default, sl.default, cl.default, ul.default, dl.default, pl.default, fl.default, hl.default, ml.default, gl.default, $l, vl.default, kl.default, yl.default, bl.default, wl.default, xl.default, Cl.default].forEach(rl.default.register);
            var Wl = function(e) {
                    var t = (e || "Plain Text").toLowerCase();
                    return "golang" === t && (t = "go"), "md" === t && (t = "markdown"), "c#" === t && (t = "csharp"), "cpp" === t && (t = "c++"), t
                },
                Fl = function(e) {
                    var t = e;
                    return "Csharp" === t && (t = "C#"), "Objectivec" === t && (t = "Objective-C"), "Css" === t && (t = "CSS"), "Markup" === t && (t = "HTML"), "Php" === t && (t = "PHP"), "" !== t && "None" !== t && "Null" !== t && t || (t = "Plain Text"), t
                },
                Ul = function() {
                    window.showSelectNode = void 0, document.querySelectorAll(".goku-editor-code-select-option-container").forEach((function(e) {
                        -1 !== e.className.indexOf("show") && (e.style = "opacity:0")
                    }))
                },
                Zl = function(e) {
                    return e.preventDefault(), e.stopPropagation(), !1
                },
                ql = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleCopyToClipboard = function(t) {
                            var n = e.editor.view,
                                r = t.target.getBoundingClientRect(),
                                o = r.top,
                                i = r.left,
                                a = n.posAtCoords({
                                    top: o,
                                    left: i
                                });
                            if (a) {
                                var l = n.state.doc.nodeAt(a.pos);
                                l && ((0, El.default)(l.textContent), e.options.onShowToast && e.options.onShowToast(e.options.dictionary.codeCopied, "info"))
                            }
                        }, e.handleShow = function(e, t, n, r) {
                            n.attrs.index !== t || r.props.readOnly || (e.target.style = "opacity: 0", window.showSelectNode ? Ul() : window.showSelectNode = JSON.stringify(n))
                        }, e.handleTabChange = function(t, n, r) {
                            var o = e.editor.view,
                                i = o.state.tr,
                                a = t.target,
                                l = a.getBoundingClientRect(),
                                s = l.top,
                                c = l.left,
                                u = o.posAtCoords({
                                    top: s,
                                    left: c
                                }),
                                d = a.parentNode.parentNode.parentNode.lastChild.firstChild.innerText.length;
                            "\n" === a.parentNode.parentNode.parentNode.lastChild.firstChild.innerText && (d = 0);
                            var p = o.posAtDOM(a, 0);
                            if (u) {
                                if (n === r.index) return;
                                var f = n,
                                    h = JSON.parse(r.contentList),
                                    m = JSON.parse(r.tabList),
                                    g = Wl(m[f]),
                                    v = "";
                                v = "\n" === h[f][h[f].length - 1] ? h[f].slice(0, h[f].length - 1) : h[f];
                                var k = i.setSelection(new Sl.TextSelection(o.state.doc.resolve(p + d))).setNodeMarkup(u.inside, void 0, Me(Se({}, r), {
                                    index: f,
                                    language: g
                                })).insertText(v, p, p + d);
                                o.dispatch(k), Ul()
                            }
                        }, e.handleLanguageChange = function(t, n, r) {
                            var o = e.editor.view,
                                i = o.state.tr,
                                a = t.target.getBoundingClientRect(),
                                l = a.top,
                                s = a.left,
                                c = o.posAtCoords({
                                    top: l,
                                    left: s
                                });
                            if (c) {
                                var u = n || "None",
                                    d = JSON.parse(r.tabList);
                                d[r.index] = "Plain Text" === u ? "None" : u;
                                var p = i.setSelection(Sl.Selection.near(o.state.doc.resolve(c.inside))).setNodeMarkup(c.inside, void 0, Me(Se({}, r), {
                                    tabList: JSON.stringify(d),
                                    language: u
                                }));
                                o.dispatch(p), null == localStorage || localStorage.setItem(Hl, u)
                            }
                        }, e
                    }
                    return re(n, [{
                        key: "languageOptions",
                        get: function() {
                            return Object.entries(Rl)
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "code_fence"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    language: {
                                        default: jl
                                    },
                                    contentList: {
                                        default: JSON.stringify([""])
                                    },
                                    tabList: {
                                        default: JSON.stringify([jl])
                                    },
                                    index: {
                                        default: 0
                                    },
                                    codeId: {
                                        default: null
                                    }
                                },
                                content: "text*",
                                marks: "",
                                group: "block",
                                code: !0,
                                defining: !0,
                                draggable: !1,
                                parseDOM: [{
                                    tag: "pre",
                                    preserveWhitespace: "full"
                                }, {
                                    tag: ".code-block",
                                    preserveWhitespace: "full",
                                    contentElement: "code",
                                    getAttrs: function(e) {
                                        return {
                                            language: e.dataset.language
                                        }
                                    }
                                }],
                                toDOM: function(t) {
                                    var n = document.createElement("button");
                                    n.type = "button", n.className = "goku-editor-code-copy", n.addEventListener("click", e.handleCopyToClipboard);
                                    var r = [];
                                    JSON.parse(t.attrs.tabList).forEach((function(n, o) {
                                        var i = document.createElement("div");
                                        i.className = "goku-editor-code-select", e.editor.props.readOnly && (i.className = "goku-editor-code-select edit-readonly");
                                        var a = n.toLowerCase(),
                                            l = Fl(a.slice(0, 1).toUpperCase() + a.slice(1));
                                        i.innerText = l, i.addEventListener("click", (function(n) {
                                            n.preventDefault(), n.stopPropagation(), e.handleShow(n, o, t, e.editor), e.handleTabChange(n, o, t.attrs)
                                        })), i.addEventListener("selectstart", Zl);
                                        var s = document.createElement("div");
                                        if (s.className = t.attrs.index === o ? "goku-editor-code-select-box current" : "goku-editor-code-select-box", s.appendChild(i), !e.editor.props.readOnly) {
                                            var c = document.createElement("div");
                                            c.className = "goku-editor-code-tab-delete", c.addEventListener("click", (function(n) {
                                                e.handleDeleteTab(n, o, t.attrs)
                                            })), c.addEventListener("selectstart", Zl), s.appendChild(c)
                                        }
                                        r.push(s)
                                    }));
                                    var o = document.createElement("div");
                                    o.className = "goku-editor-code-select-add", e.editor.props.readOnly && (o.className = "goku-editor-code-select-add edit-readonly"), o.addEventListener("click", (function(n) {
                                        e.handleAddTab(n, t.attrs)
                                    }));
                                    var i = document.createElement("div");
                                    i.className = window.showSelectNode ? "goku-editor-code-select-option-container show" : "goku-editor-code-select-option-container";
                                    var a = function(e) {
                                        var t = e.attrs.index;
                                        if (t > 0) {
                                            for (var n = JSON.parse(e.attrs.tabList), r = "", o = t - 1; o >= 0; o--) {
                                                var i = n[o] ? n[o].toLowerCase() : "";
                                                r += i = Fl(i.slice(0, 1).toUpperCase() + i.slice(1))
                                            }
                                            var a = document.createElement("span");
                                            a.style = "font-size: 12px; line-height: 16px; display: inline-block", a.innerText = r, document.body.appendChild(a);
                                            var l = a.clientWidth;
                                            return document.body.removeChild(a), 12 + l + 28 * t
                                        }
                                        return 12
                                    }(t);
                                    return i.style = "left: " + a + "px;", e.languageOptions.forEach((function(n) {
                                        var r = le(n, 2),
                                            o = r[0],
                                            a = r[1],
                                            l = document.createElement("div"),
                                            s = "Plain Text" !== o && "null" !== o && "" !== o && o ? o : "none";
                                        l.addEventListener("click", (function(n) {
                                            e.handleLanguageChange(n, s, t.attrs)
                                        })), l.innerText = a;
                                        var c = Wl(t.attrs.language);
                                        l.className = c === s ? "goku-editor-code-select-option selected" : "goku-editor-code-select-option", i.appendChild(l)
                                    })), ["div", {
                                            class: "code-block",
                                            "data-language": t.attrs.language
                                        },
                                        ["div", {
                                            contentEditable: !1,
                                            style: "position: absolute; width: 100%; top: 9px;"
                                        }, i].concat(r, [o, n]), ["pre", ["code", {
                                            spellCheck: !1
                                        }, 0]]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema;
                            return function(e) {
                                return Bl(t, n.nodes.paragraph, Se({
                                    language: (null == localStorage ? void 0 : localStorage.getItem(Hl)) || jl
                                }, e))
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            return {
                                "Shift-Ctrl-\\": Bl(e.type, e.schema.nodes.paragraph),
                                "Shift-Enter": function(e, t) {
                                    var n, r;
                                    if (!zl(e)) return !1;
                                    var o = e.tr,
                                        i = e.selection,
                                        a = null == (r = null == (n = null == i ? void 0 : i.$anchor) ? void 0 : n.nodeBefore) ? void 0 : r.text,
                                        l = "\n";
                                    if (a) {
                                        var s = a.split("\n"),
                                            c = s[s.length - 1].search(/\S|$/);
                                        l += " ".repeat(c)
                                    }
                                    return t(o.insertText(l, i.from, i.to)), !0
                                },
                                Tab: function(e, t) {
                                    if (!zl(e)) return !1;
                                    var n = e.tr,
                                        r = e.selection;
                                    return t(n.insertText("  ", r.from, r.to)), !0
                                },
                                Backspace: function(e) {
                                    var t, n, r;
                                    return !!zl(e) && !(null == (r = null == (n = null == (t = e.selection) ? void 0 : t.$anchor) ? void 0 : n.nodeBefore) ? void 0 : r.text)
                                }
                            }
                        }
                    }, {
                        key: "handleAddTab",
                        value: function(e, t) {
                            if (!this.editor.props.readOnly) {
                                var n = this.editor.view,
                                    r = n.state.tr,
                                    o = e.target,
                                    i = o.getBoundingClientRect(),
                                    a = i.top,
                                    l = i.left,
                                    s = n.posAtCoords({
                                        top: a,
                                        left: l
                                    }),
                                    c = n.state.selection,
                                    u = c.from,
                                    d = c.to;
                                if (s) {
                                    var p = JSON.parse(t.tabList),
                                        f = JSON.parse(t.contentList),
                                        h = t.index,
                                        m = t.codeId;
                                    if (m || (m = String((new Date).getTime())), p.push(jl), f.push(""), h = p.length - 1, u !== d) return;
                                    var g = Wl(p[h]),
                                        v = o.parentNode.parentNode.lastChild.firstChild.innerText.length;
                                    "\n" === o.parentNode.parentNode.lastChild.firstChild.innerText && (v = 0);
                                    var k = "";
                                    k = "\n" === f[h][f[h].length - 1] ? f[h].slice(0, f[h].length - 1) : f[h];
                                    var y = r.setSelection(Sl.Selection.near(n.state.doc.resolve(s.inside))).setNodeMarkup(s.inside, void 0, Me(Se({}, t), {
                                        tabList: JSON.stringify(p),
                                        index: h,
                                        contentList: JSON.stringify(f),
                                        language: g,
                                        codeId: m
                                    })).insertText(k, u, u + v);
                                    n.dispatch(y), Ul()
                                }
                            }
                        }
                    }, {
                        key: "handleDeleteTab",
                        value: function(e, t, n) {
                            if (!this.editor.props.readOnly) {
                                var r = this.editor.view,
                                    o = r.state.tr,
                                    i = e.target,
                                    a = i.getBoundingClientRect(),
                                    l = a.top,
                                    s = a.left,
                                    c = r.posAtCoords({
                                        top: l,
                                        left: s
                                    });
                                if (c) {
                                    var u = JSON.parse(n.tabList);
                                    u.splice(t, 1);
                                    var d = JSON.parse(n.contentList);
                                    d.splice(t, 1);
                                    var p = n.index,
                                        f = r.posAtDOM(i, 0);
                                    if (0 === u.length) {
                                        var h = r.state.tr.setSelection(new Sl.NodeSelection(r.state.doc.resolve(f - 1)));
                                        return r.dispatch(h.deleteSelection()), void r.focus()
                                    }
                                    p + 1 > u.length && (p = u.length - 1);
                                    var m = Wl(u[p]),
                                        g = i.parentNode.parentNode.parentNode.lastChild.firstChild.innerText.length;
                                    "\n" === i.parentNode.parentNode.parentNode.lastChild.firstChild.innerText && (g = 0);
                                    var v = "";
                                    v = "\n" === d[p][d[p].length - 1] ? d[p].slice(0, d[p].length - 1) : d[p];
                                    var k = o.setSelection(new Sl.TextSelection(r.state.doc.resolve(f + g))).setNodeMarkup(c.inside, void 0, Me(Se({}, n), {
                                        tabList: JSON.stringify(u),
                                        index: p,
                                        contentList: JSON.stringify(d),
                                        language: m
                                    })).insertText(v, f, f + g);
                                    r.dispatch(k), Ul()
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return [Nl({
                                name: this.name
                            }), new Sl.Plugin({
                                props: {
                                    handleDOMEvents: {
                                        click: function(e, t) {
                                            return t.target && void 0 !== window.showSelectNode && Ul(), !1
                                        }
                                    }
                                }
                            })]
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, Ml.textblockTypeInputRule)(/^```$/, t)]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            var n = JSON.parse(t.attrs.tabList),
                                r = JSON.parse(t.attrs.contentList);
                            if (n.length > 1) n.forEach((function(n, o) {
                                var i;
                                if (e.write("```" + (n || "") + " [" + t.attrs.codeId + "]\n"), o === t.attrs.index) {
                                    var a = (null == (i = t.content) ? void 0 : i.content) || [];
                                    r[o] = a.length ? a[0].text : "", t.attrs.contentList = JSON.stringify(r)
                                }
                                e.text(r[o], !1), e.ensureNewLine(), e.write("```"), e.ensureNewLine()
                            })), e.closeBlock(t);
                            else {
                                var o = JSON.parse(t.attrs.tabList);
                                e.write("```" + (o[0] || "") + "\n"), r[0] = t.textContent, t.attrs.contentList = JSON.stringify(r), e.text(t.textContent, !1), e.ensureNewLine(), e.write("```"), e.closeBlock(t)
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "code_block",
                                getAttrs: function(e) {
                                    return {
                                        index: 0,
                                        language: Wl(e.info || jl),
                                        tabList: e.tabList || JSON.stringify([jl]),
                                        contentList: e.contentList || JSON.stringify([jl]),
                                        codeId: "string" === typeof e.codeId ? e.codeId : null
                                    }
                                }
                            }
                        }
                    }, {
                        key: "markdownToken",
                        get: function() {
                            return "fence"
                        }
                    }]), n
                }(Wa);

            function Gl(e) {
                e.core.ruler.after("inline", "codeMerge", (function(e) {
                    var t = e.tokens,
                        n = [];
                    return t.forEach((function(e) {
                        if ("fence" === e.type) {
                            e.info.replace(/^(.+)(\s)(\[(.*)])$/, (function(t, n, r, o, i) {
                                if (n && (e.info = n), "string" === typeof i)
                                    if (/(.+)-.+/.test(i)) {
                                        var a = i.match(/(.+)-.+/)[1];
                                        e.codeId = a
                                    } else e.codeId = i
                            }));
                            var t = n.length;
                            if (n[t - 1] && "fence" === n[t - 1].type && void 0 !== n[t - 1].codeId && n[t - 1].codeId === e.codeId) {
                                var r = JSON.parse(n[t - 1].tabList);
                                r.push(e.info), n[t - 1].tabList = JSON.stringify(r);
                                var o = JSON.parse(n[t - 1].contentList);
                                o.push(e.content), n[t - 1].contentList = JSON.stringify(o)
                            } else n.push(e);
                            e.tabList = JSON.stringify([e.info]), e.contentList = JSON.stringify([e.content])
                        } else n.push(e)
                    })), e.tokens = n, !1
                }))
            }
            var Kl = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "code_block"
                        }
                    }, {
                        key: "markdownToken",
                        get: function() {
                            return "code_block"
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [Gl]
                        }
                    }]), n
                }(ql),
                Jl = n(45574),
                Xl = Ie(n(67639)),
                Yl = Ie(n(67639)),
                Ql = Ie(n(19931));

            function es(e) {
                return (0, Ql.default)(e, {
                    defs: Yl.default,
                    shortcuts: {}
                })
            }
            var ts = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "emoji"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                attrs: {
                                    style: {
                                        default: ""
                                    },
                                    "data-name": {
                                        default: void 0
                                    }
                                },
                                inline: !0,
                                content: "text*",
                                marks: "",
                                group: "inline",
                                selectable: !1,
                                parseDOM: [{
                                    tag: "span.emoji",
                                    preserveWhitespace: "full",
                                    getAttrs: function(e) {
                                        return {
                                            "data-name": e.dataset.name
                                        }
                                    }
                                }],
                                toDOM: function(e) {
                                    if (Xl.default[e.attrs["data-name"]]) {
                                        var t = document.createTextNode(Xl.default[e.attrs["data-name"]]);
                                        return ["span", {
                                            class: "emoji ".concat(e.attrs["data-name"]),
                                            "data-name": e.attrs["data-name"]
                                        }, t]
                                    }
                                    return ["span", {
                                        class: "emoji"
                                    }, document.createTextNode(":".concat(e.attrs["data-name"], ":"))]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [es]
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function(e) {
                                return function(n, r) {
                                    var o = n.selection,
                                        i = o.$cursor ? o.$cursor.pos : o.$to.pos,
                                        a = t.create(e);
                                    return r(n.tr.insert(i, a)), !0
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [new Jl.InputRule(/^\:([a-zA-Z0-9_+-]+)\:$/, (function(e, n, r, o) {
                                var i = le(n, 2),
                                    a = i[0],
                                    l = i[1],
                                    s = e.tr;
                                return a && s.replaceWith(r - 1, o, t.create({
                                    "data-name": l,
                                    markup: l
                                })), s
                            }))]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            var n = t.attrs["data-name"];
                            n && e.write(":".concat(n, ":"))
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "emoji",
                                getAttrs: function(e) {
                                    return {
                                        "data-name": e.markup.trim()
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                ns = Ie(n(64386)),
                rs = Ie(n(66980));

            function os(e) {
                return "paragraph_open" === e.type
            }

            function is(e) {
                return "inline" === e.type && 1 === e.level
            }

            function as(e) {
                return "link_open" === e.type
            }

            function ls(e) {
                return "link_close" === e.type
            }

            function ss(e) {
                function t(t, n) {
                    var r = n.attrs ? n.attrs[0][1] : "";
                    if (!(r === t.content)) return !1;
                    if (!e) return !1;
                    var o, i = ue(e);
                    try {
                        for (i.s(); !(o = i.n()).done;) {
                            var a = o.value,
                                l = a.matcher(r);
                            if (l) return Me(Se({}, a), {
                                matches: l
                            })
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                }
                return function(e) {
                    e.core.ruler.after("inline", "embeds", (function(e) {
                        for (var n, r = e.tokens, o = 0; o < r.length - 1; o++)
                            if (is(r[o]) && os(r[o - 1]))
                                for (var i = r[o].children || [], a = 0; a < i.length - 1; a++) {
                                    var l = i[a];
                                    if (l)
                                        if (as(l)) n = l;
                                        else if (ls(l)) n = null;
                                    else if (n)
                                        if (t(l, n)) {
                                            var s = l.content,
                                                c = new rs.default("embed", "iframe", 0);
                                            c.attrSet("href", s), r.splice(o - 1, 3, c);
                                            break
                                        }
                                }
                        return !1
                    }))
                }
            }
            var cs = {},
                us = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "embed"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                content: "inline*",
                                group: "block",
                                atom: !0,
                                attrs: {
                                    href: {}
                                },
                                parseDOM: [{
                                    tag: "iframe[class=embed]",
                                    getAttrs: function(t) {
                                        var n = e.editor.props.embeds,
                                            r = t.getAttribute("src") || "";
                                        if (n) {
                                            var o, i = ue(n);
                                            try {
                                                for (i.s(); !(o = i.n()).done;) {
                                                    if (o.value.matcher(r)) return {
                                                        href: r
                                                    }
                                                }
                                            } catch (a) {
                                                i.e(a)
                                            } finally {
                                                i.f()
                                            }
                                        }
                                        return {}
                                    }
                                }],
                                toDOM: function(e) {
                                    return ["iframe", {
                                        class: "embed",
                                        src: e.attrs.href,
                                        contentEditable: !1
                                    }, 0]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [ss(this.options.embeds)]
                        }
                    }, {
                        key: "component",
                        value: function(e) {
                            var t = e.isEditable,
                                n = e.isSelected,
                                r = e.theme,
                                o = e.node,
                                i = this.editor.props.embeds,
                                a = cs[o.attrs.href],
                                l = a ? a.Component : void 0,
                                s = a ? a.matches : void 0;
                            if (!l) {
                                var c, u = ue(i);
                                try {
                                    for (u.s(); !(c = u.n()).done;) {
                                        var d = c.value,
                                            p = d.matcher(o.attrs.href);
                                        p && (l = d.component, s = p, cs[o.attrs.href] = {
                                            Component: l,
                                            matches: s
                                        })
                                    }
                                } catch (f) {
                                    u.e(f)
                                } finally {
                                    u.f()
                                }
                            }
                            return l ? ns.createElement(l, {
                                attrs: Me(Se({}, o.attrs), {
                                    matches: s
                                }),
                                isEditable: t,
                                isSelected: n,
                                theme: r
                            }) : null
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function(e) {
                                return function(n, r) {
                                    return r(n.tr.replaceSelectionWith(t.create(e)).scrollIntoView()), !0
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.ensureNewLine(), e.write("[" + e.esc(t.attrs.href) + "](" + e.esc(t.attrs.href) + ")"), e.write("\n\n")
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "embed",
                                getAttrs: function(e) {
                                    return {
                                        href: e.attrGet("href")
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                ds = n(95580);

            function ps(e) {
                return "hardbreak" === e.type || "text" === e.type && "\\" === e.content
            }

            function fs(e) {
                e.core.ruler.after("inline", "breaks", (function(e) {
                    for (var t = e.Token, n = e.tokens, r = n.length - 1; r > 0; r--) {
                        var o = n[r].children || [],
                            i = o.filter(ps);
                        if (i.length) {
                            var a = void 0,
                                l = [],
                                s = o.filter((function(e) {
                                    return !ps(e)
                                })),
                                c = i.length;
                            s.length && c++;
                            for (var u = 0; u < c; u++) {
                                var d = u === c - 1;
                                a = new t("paragraph_open", "p", 1), l.push(a);
                                var p = new t("text", "", 0);
                                p.content = "", (a = new t("inline", "", 0)).level = 1, a.children = d ? [p].concat(Q(s)) : [p], a.content = "", l.push(a), a = new t("paragraph_close", "p", -1), l.push(a)
                            }
                            n.splice.apply(n, [r - 1, 3].concat(l))
                        }
                    }
                    return !1
                }))
            }
            var hs = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "br"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                inline: !0,
                                group: "inline",
                                selectable: !1,
                                parseDOM: [{
                                    tag: "br"
                                }],
                                toDOM: function() {
                                    return ["br"]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [fs]
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function() {
                                return function(e, n) {
                                    return n(e.tr.replaceSelectionWith(t.create()).scrollIntoView()), !0
                                }
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Shift-Enter": function(e, n) {
                                    return !!(0, ds.isInTable)(e) && (n(e.tr.replaceSelectionWith(t.create()).scrollIntoView()), !0)
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e) {
                            e.write(" \\n ")
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "br"
                            }
                        }
                    }]), n
                }(Wa),
                ms = n(38556),
                gs = Ie(n(85165)),
                vs = n(15899),
                ks = n(45574);

            function ys(e) {
                return function(t, n) {
                    var r = t.selection,
                        o = r.$from,
                        i = r.from,
                        a = r.to;
                    return r.empty ? o.parent.type !== e || t.doc.resolve(i - 1).parent === o.parent ? null : (n(t.tr.setBlockType(i, a, e.schema.nodes.paragraph).scrollIntoView()), !0) : null
                }
            }
            var bs = n(38556),
                ws = n(35285),
                xs = n(35285);

            function Cs(e) {
                var t, n, r = [],
                    o = ue((0, xs.findBlockNodes)(e));
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var i = n.value;
                        "heading" !== i.node.type.name || t && !(i.node.attrs.level <= t) ? t && r.push(i) : i.node.attrs.collapsed ? t || (t = i.node.attrs.level) : t = void 0
                    }
                } catch (a) {
                    o.e(a)
                } finally {
                    o.f()
                }
                return r
            }

            function Ss(e) {
                return function(t, n) {
                    var r = t.selection,
                        o = r.$from,
                        i = r.from,
                        a = r.$to,
                        l = r.to;
                    if (o.parent.type !== e) return !1;
                    if (a.after() - 1 !== l) return !1;
                    if (!o.parent.attrs.collapsed) return !1;
                    var s = (0, ws.findBlockNodes)(t.doc),
                        c = Cs(t.doc),
                        u = s.filter((function(e) {
                            return !c.find((function(t) {
                                return t.pos === e.pos
                            }))
                        })).find((function(e) {
                            return e.pos > i
                        })),
                        d = u ? u.pos : t.doc.content.size,
                        p = t.tr.insert(d, e.create(Me(Se({}, o.parent.attrs), {
                            collapsed: !1
                        })));
                    return n(p.setSelection(bs.TextSelection.near(p.doc.resolve(Math.min(d + 1, p.doc.content.size)))).scrollIntoView()), !0
                }
            }
            var Ms = n(35406),
                Es = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).className = "heading-name", e.handleFoldContent = function(t) {
                            t.preventDefault();
                            var n = e.editor.view,
                                r = n.hasFocus(),
                                o = n.state.tr,
                                i = t.target.getBoundingClientRect(),
                                a = i.top,
                                l = i.left,
                                s = n.posAtCoords({
                                    top: a,
                                    left: l
                                });
                            if (s) {
                                var c = n.state.doc.nodeAt(s.inside);
                                if (c) {
                                    var u = s.inside + c.nodeSize,
                                        d = n.state.doc.resolve(u),
                                        p = !c.attrs.collapsed;
                                    p && n.state.selection.to > u && o.setSelection(ms.Selection.near(d, -1));
                                    var f = o.setNodeMarkup(s.inside, void 0, Me(Se({}, c.attrs), {
                                            collapsed: p
                                        })),
                                        h = Ha(c, e.editor.props.id);
                                    p ? null == localStorage || localStorage.setItem(h, "collapsed") : null == localStorage || localStorage.removeItem(h), n.dispatch(f), r && n.focus()
                                }
                            }
                        }, e.handleCopyLink = function(t) {
                            var n = t.currentTarget.parentNode.parentNode.previousSibling;
                            if (!n.className.includes(e.className)) throw new Error("Did not find anchor as previous sibling of heading");
                            var r = "#".concat(n.id),
                                o = window.location.href.split("#")[0];
                            (0, gs.default)(o + r), e.options.onShowToast && e.options.onShowToast(e.options.dictionary.linkCopied, "info")
                        }, e
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "heading"
                        }
                    }, {
                        key: "defaultOptions",
                        get: function() {
                            return {
                                levels: [1, 2, 3, 4, 5, 6],
                                collapsed: void 0
                            }
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    level: {
                                        default: 1
                                    },
                                    collapsed: {
                                        default: void 0
                                    }
                                },
                                content: "inline*",
                                group: "block",
                                defining: !0,
                                draggable: !1,
                                parseDOM: this.options.levels.map((function(e) {
                                    return {
                                        tag: "h".concat(e),
                                        attrs: {
                                            level: e
                                        },
                                        contentElement: ".heading-content"
                                    }
                                })),
                                toDOM: function(t) {
                                    var n = document.createElement("button");
                                    n.innerText = "#", n.type = "button", n.className = "heading-anchor";
                                    var r = document.createElement("button");
                                    return r.innerText = "", r.innerHTML = '<svg fill="currentColor" width="12" height="24" viewBox="6 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.23823905,10.6097108 L11.207376,14.4695888 L11.207376,14.4695888 C11.54411,14.907343 12.1719566,14.989236 12.6097108,14.652502 C12.6783439,14.5997073 12.7398293,14.538222 12.792624,14.4695888 L15.761761,10.6097108 L15.761761,10.6097108 C16.0984949,10.1719566 16.0166019,9.54410997 15.5788477,9.20737601 C15.4040391,9.07290785 15.1896811,9 14.969137,9 L9.03086304,9 L9.03086304,9 C8.47857829,9 8.03086304,9.44771525 8.03086304,10 C8.03086304,10.2205442 8.10377089,10.4349022 8.23823905,10.6097108 Z" /></svg>', r.type = "button", r.className = "heading-fold ".concat(t.attrs.collapsed ? "collapsed" : ""), r.addEventListener("mousedown", (function(t) {
                                        return e.handleFoldContent(t)
                                    })), ["h".concat(t.attrs.level + (e.options.offset || 0)), ["span", {
                                            contentEditable: !1,
                                            class: "heading-actions ".concat(t.attrs.collapsed ? "collapsed" : "")
                                        }, n, r],
                                        ["span", {
                                            class: "heading-content"
                                        }, 0]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write(e.repeat("#", t.attrs.level) + " "), e.renderInline(t), e.closeBlock(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "heading",
                                getAttrs: function(e) {
                                    return {
                                        level: +e.tag.slice(1)
                                    }
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema;
                            return function(e) {
                                return 0 === e.level ? function(e, t) {
                                    (0, Ms.setBlockType)(n.nodes.paragraph)(e, t)
                                } : Bl(t, n.nodes.paragraph, e)
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema,
                                r = this.options.levels.reduce((function(e, r) {
                                    return Se(Se({}, e), Y({}, "Shift-Ctrl-".concat(r), Bl(t, n.nodes.paragraph, {
                                        level: r
                                    })))
                                }), {});
                            return Me(Se({}, r), {
                                Backspace: ys(t),
                                Tab: function(e, t) {
                                    if (e.schema.nodes.heading)
                                        for (var n = e.selection.$head, r = n.depth; r > 0; r--)
                                            if (n.node(r).type === e.schema.nodes.heading) {
                                                var o = e.tr,
                                                    i = e.selection;
                                                return t(o.insertText("  ", i.from, i.to)), !0
                                            }
                                    return !1
                                },
                                Enter: Ss(t)
                            })
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this,
                                t = function(t) {
                                    var n = [],
                                        r = {};
                                    return t.descendants((function(t, o) {
                                        if (t.type.name === e.name) {
                                            var i = za(t),
                                                a = i;
                                            r[i] > 0 && (a = za(t, r[i])), r[i] = void 0 !== r[i] ? r[i] + 1 : 1, n.push(vs.Decoration.widget(o, (function() {
                                                var t = document.createElement("a");
                                                return t.id = a, t.className = e.className, t
                                            }), {
                                                side: -1,
                                                key: a
                                            }))
                                        }
                                    })), vs.DecorationSet.create(t, n)
                                },
                                n = new ms.Plugin({
                                    state: {
                                        init: function(e, n) {
                                            return t(n.doc)
                                        },
                                        apply: function(e, n) {
                                            return e.docChanged ? t(e.doc) : n
                                        }
                                    },
                                    props: {
                                        decorations: function(e) {
                                            return n.getState(e)
                                        }
                                    }
                                });
                            return [n]
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return this.options.levels.map((function(e) {
                                return (0, ks.textblockTypeInputRule)(new RegExp("^(#{1,".concat(e, "})\\s$")), t, (function() {
                                    return {
                                        level: e
                                    }
                                }))
                            }))
                        }
                    }]), n
                }(Wa),
                Ls = n(45574),
                As = n(38556),
                Is = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "hr"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                attrs: {
                                    markup: {
                                        default: "---"
                                    }
                                },
                                group: "block",
                                parseDOM: [{
                                    tag: "hr"
                                }],
                                toDOM: function(e) {
                                    return ["hr", {
                                        class: "***" === e.attrs.markup ? "page-break" : ""
                                    }]
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function(e) {
                                return function(n, r) {
                                    return r(n.tr.replaceSelectionWith(t.create(e)).scrollIntoView()), !0
                                }
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-_": function(e, n) {
                                    return n(e.tr.replaceSelectionWith(t.create()).scrollIntoView()), !0
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [new Ls.InputRule(/^(?:---|___\s|\*\*\*\s)$/, (function(e, n, r) {
                                var o = e.tr;
                                if (n[0]) {
                                    var i = n[0].trim();
                                    o.setSelection(new As.NodeSelection(e.doc.resolve(r))).replaceSelectionWith(t.create({
                                        markup: i
                                    })).scrollIntoView()
                                }
                                return o
                            }))]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write("\n".concat(t.attrs.markup)), e.closeBlock(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "hr",
                                getAttrs: function(e) {
                                    return {
                                        markup: e.markup
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Ts = Ie(n(64386)),
                Os = n(38556),
                Rs = Ie(n(64386)),
                Ps = Ie(n(38142)),
                Ds = In.button(F || (F = se(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 100ms ease-in-out;\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:hover {\n    color: ", ";\n    opacity: 1;\n  }\n"])), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.theme.text
                })),
                Ns = In.p(U || (U = se(["\n  border: 0;\n  display: block;\n  font-size: 13px;\n  font-style: italic;\n  font-weight: normal;\n  color: ", ";\n  padding: 2px 0;\n  line-height: 16px;\n  text-align: center;\n  min-height: 1em;\n  outline: none;\n  background: none;\n  resize: none;\n  user-select: text;\n  cursor: text;\n\n  &:empty:not(:focus) {\n    visibility: hidden;\n  }\n\n  &:empty:before {\n    color: ", ";\n    content: attr(data-caption);\n    pointer-events: none;\n  }\n"])), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.theme.placeholder
                })),
                _s = In.div(Z || (Z = se(["\n  line-height: 0;\n  display: inline-block;\n  position: relative;\n  // padding: 10px;\n  // pointer-events: none;\n  &:hover {\n    ", " {\n      opacity: 0.9;\n    }\n  }\n\n  // &.ProseMirror-selectednode + ", " {\n  //   visibility: visible;\n  // }\n\n  &.ProseMirror-selectednode img{\n    pointer-events: all;\n  }\n"])), Ds, Ns),
                Bs = function(e) {
                    var t = e.isSelected,
                        n = (e.downLoad, e.defaultStyles),
                        r = e.image;
                    if (!e.editor) return null;
                    var o = (0, Rs.useState)("0px"),
                        i = le(o, 2),
                        a = i[0],
                        l = i[1],
                        s = (0, Rs.useRef)(null),
                        c = (0, Rs.useState)("100%"),
                        u = le(c, 1)[0];
                    return Rs.default.useEffect((function() {
                        s.current && s.current.image && (s.current.image.onerror = function(e) {
                            e.target.src = "data:image/svg+xml,%3Csvg height='150' viewBox='0 0 150 150' width='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z' fill='%23eee' fill-rule='evenodd' transform='translate(-2315 -2217)'/%3E%3C/svg%3E"
                        }), r.width && "99999" === r.width ? l("100%") : l("480px")
                    }), [r.width]), Rs.default.createElement(_s, {
                        className: t ? "ProseMirror-selectednode" : "",
                        style: {
                            width: a,
                            maxWidth: u
                        }
                    }, Rs.default.createElement(Ps.default, {
                        ref: s,
                        image: {
                            src: r.src,
                            alt: r.alt,
                            title: r.title,
                            style: {
                                width: a,
                                maxWidth: u
                            },
                            draggable: !1
                        },
                        defaultStyles: Me(Se({}, n), {
                            zoomContainer: {
                                zIndex: 2e3
                            }
                        }),
                        shouldRespectMaxDimension: !0
                    }))
                },
                zs = ["right", "left"],
                Hs = function() {
                    var e = te(ee.mark((function e(t) {
                        var n, r, o, i, a, l;
                        return ee.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(t.attrs.src);
                                case 2:
                                    return n = e.sent, e.next = 5, n.blob();
                                case 5:
                                    r = e.sent, o = URL.createObjectURL(r), i = r.type.split("/")[1], a = t.attrs.alt || "image", (l = document.createElement("a")).href = o, l.download = "".concat(a, ".").concat(i), document.body.appendChild(l), l.click(), document.body.removeChild(l);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                js = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleKeyDown = function(t) {
                            var n = t.node,
                                r = t.getPos;
                            return function(t) {
                                if ("Enter" === t.key) {
                                    t.preventDefault();
                                    var o = e.editor.view,
                                        i = o.state.doc.resolve(r() + n.nodeSize);
                                    return o.dispatch(o.state.tr.setSelection(new Os.TextSelection(i)).split(i.pos)), void o.focus()
                                }
                                if ("Backspace" === t.key && "" === t.target.innerText) {
                                    var a = e.editor.view,
                                        l = a.state.doc.resolve(r()),
                                        s = a.state.tr.setSelection(new Os.NodeSelection(l));
                                    return a.dispatch(s.deleteSelection()), void a.focus()
                                }
                            }
                        }, e.handleBlur = function(t) {
                            var n = t.node,
                                r = t.getPos;
                            return function(t) {
                                var o = t.target.innerText,
                                    i = n.attrs,
                                    a = i.src,
                                    l = i.title,
                                    s = i.layoutClass;
                                if (o !== n.attrs.alt) {
                                    var c = e.editor.view,
                                        u = c.state.tr,
                                        d = r(),
                                        p = u.setNodeMarkup(d, void 0, {
                                            src: a,
                                            alt: o,
                                            title: l,
                                            layoutClass: s
                                        });
                                    c.dispatch(p)
                                }
                            }
                        }, e.handleSelect = function(t) {
                            var n = t.getPos;
                            return function(t) {
                                t.preventDefault();
                                var r = e.editor.view,
                                    o = r.state.doc.resolve(n()),
                                    i = r.state.tr.setSelection(new Os.NodeSelection(o));
                                r.dispatch(i)
                            }
                        }, e.handleDownload = function(e) {
                            var t = e.node;
                            return function(e) {
                                e.preventDefault(), e.stopPropagation(), Hs(t)
                            }
                        }, e.component = function(t) {
                            var n = t.theme,
                                r = t.isSelected,
                                o = t.node.attrs,
                                i = o.alt,
                                a = o.src,
                                l = o.title,
                                s = o.layoutClass,
                                c = o.width,
                                u = o.height,
                                d = s ? "image image-".concat(s) : "image";
                            return Ts.createElement("div", {
                                contentEditable: !1,
                                className: d,
                                onClick: e.handleSelect(t)
                            }, Ts.createElement(Bs, {
                                isSelected: r,
                                downLoad: e.handleDownload(t),
                                editor: e.editor,
                                image: {
                                    src: a,
                                    alt: i,
                                    title: l,
                                    width: c,
                                    height: u
                                },
                                defaultStyles: {
                                    overlay: {
                                        backgroundColor: n.background
                                    }
                                }
                            }))
                        }, e.commands = function(e) {
                            var t = e.type;
                            return {
                                alignRight: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                title: null,
                                                layoutClass: "right"
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                alignLeft: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                title: null,
                                                layoutClass: "left"
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                fullWidth: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                width: "99999",
                                                title: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                originWidth: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                width: "480",
                                                title: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                alignCenter: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                layoutClass: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                createImage: function(e) {
                                    return function(n, r) {
                                        var o = n.selection,
                                            i = o.$cursor ? o.$cursor.pos : o.$to.pos,
                                            a = t.create(e);
                                        return r(n.tr.insert(i, a)), !0
                                    }
                                }
                            }
                        }, e
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "image"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                inline: !0,
                                attrs: {
                                    src: {},
                                    alt: {
                                        default: null
                                    },
                                    layoutClass: {
                                        default: null
                                    },
                                    title: {
                                        default: null
                                    },
                                    width: {
                                        default: null
                                    },
                                    height: {
                                        default: null
                                    }
                                },
                                content: "text*",
                                marks: "",
                                group: "inline",
                                selectable: !0,
                                draggable: !1,
                                parseDOM: [{
                                    tag: "div[class~=image]",
                                    getAttrs: function(e) {
                                        var t = e.getElementsByTagName("img")[0],
                                            n = e.className,
                                            r = n && n.match(/image-(.*)$/),
                                            o = r ? r[1] : null;
                                        return {
                                            src: null == t ? void 0 : t.getAttribute("src"),
                                            alt: null == t ? void 0 : t.getAttribute("alt"),
                                            width: null == t ? void 0 : t.getAttribute("width"),
                                            height: null == t ? void 0 : t.getAttribute("height"),
                                            title: null == t ? void 0 : t.getAttribute("title"),
                                            layoutClass: o
                                        }
                                    }
                                }, {
                                    tag: "img",
                                    getAttrs: function(e) {
                                        return {
                                            src: e.getAttribute("src"),
                                            alt: e.getAttribute("alt"),
                                            width: e.getAttribute("width"),
                                            height: e.getAttribute("height"),
                                            title: e.getAttribute("title")
                                        }
                                    }
                                }],
                                toDOM: function(e) {
                                    return ["div", {
                                            class: e.attrs.layoutClass ? "image image-".concat(e.attrs.layoutClass) : "image"
                                        },
                                        ["img", Me(Se({}, e.attrs), {
                                            contentEditable: !1
                                        })],
                                        ["p", {
                                            class: "caption"
                                        }, 0]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            var n = " ![" + e.esc((t.attrs.alt || "").replace("\n", "") || "") + "](" + e.esc(t.attrs.src);
                            (t.attrs.layoutClass ? n += ' "' + e.esc(t.attrs.layoutClass) + '"' : t.attrs.title && (n += ' "' + e.esc(t.attrs.title) + '"'), n += ")", t.attrs.width) && (n += "{:width=" + t.attrs.width + "}");
                            t.attrs.height && (n += "{:height=" + t.attrs.height + "}");
                            e.write(n)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "image",
                                getAttrs: function(e) {
                                    return Se({
                                        src: e.attrGet("src"),
                                        width: e.attrGet("width"),
                                        height: e.attrGet("height"),
                                        alt: e.children[0] && e.children[0].content || null
                                    }, (t = e.attrGet("title")) ? zs.includes(t) ? {
                                        layoutClass: t
                                    } : {
                                        title: t
                                    } : {});
                                    var t
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return [wi, (e = this.options, new Os.Plugin({
                                props: {
                                    handleDOMEvents: {
                                        paste: function(t, n) {
                                            if (t.props.editable && !t.props.editable(t.state) || !e.uploadImage) return !1;
                                            if (!n.clipboardData) return !1;
                                            var r = Array.prototype.slice.call(n.clipboardData.items).map((function(e) {
                                                return e.getAsFile()
                                            })).filter((function(e) {
                                                return e
                                            }));
                                            if (0 === r.length) return !1;
                                            var o = t.state.tr;
                                            o.selection.empty || o.deleteSelection();
                                            var i = o.selection.from;
                                            return Mi(t, n, i, r, e), !0
                                        },
                                        drop: function(t, n) {
                                            if (t.props.editable && !t.props.editable(t.state) || !e.uploadImage) return !1;
                                            var r = vi(n).filter((function(e) {
                                                return /image/i.test(e.type)
                                            }));
                                            if (0 === r.length) return !1;
                                            var o = t.posAtCoords({
                                                left: n.clientX,
                                                top: n.clientY
                                            });
                                            return !!o && (Mi(t, n, o.pos, r, e), !0)
                                        }
                                    }
                                }
                            }))];
                            var e
                        }
                    }]), n
                }(Wa),
                Vs = Ie(n(64386)),
                $s = n(38556);

            function Ws(e) {
                e.core.ruler.after("inline", "video", (function(e) {
                    for (var t, n, r = e.tokens, o = function(e) {
                            null == (n = null == (t = r[e]) ? void 0 : t.children) || n.forEach((function(t, n) {
                                var o, i, a, l;
                                if ("image" === t.type) {
                                    r[e].content = r[e].content.replace(/\{\:width=(\d+)\}/, (function(t, o) {
                                        var i;
                                        return null == (i = r[e].children[n].attrs) || i.push(["width", o || ""]), ""
                                    })), r[e].content = r[e].content.replace(/\{\:height=(\d+)\}/, (function(t, o) {
                                        var i;
                                        return null == (i = r[e].children[n].attrs) || i.push(["height", o || ""]), ""
                                    }));
                                    var s = "";
                                    null == (o = t.attrs) || o.forEach((function(e) {
                                        "src" === e[0] && (s = e[1])
                                    })), (/(\.mp4|\.avi|\.webm|\.mov|\.mpg|\.3gp|\.m4v|\.flv|\.asf|\.wmv|\.mkv)$/.test(s) || /^(\w{8})-\w{4}-\w{4}-\w{4}-(\w{12})$/.test(s)) && (r[e].children[n].type = "video"), r[e].content = r[e].content.replace(/\{\:(width|height)=(\d+)\}/g, (function() {
                                        return ""
                                    })), (null == (i = r[e]) ? void 0 : i.children[n + 1]) && "text" === (null == (a = r[e]) ? void 0 : a.children[n + 1].type) && (r[e].children[n + 1].content = null == (l = r[e]) ? void 0 : l.children[n + 1].content.replace(/\{\:(width|height)=(\d+)\}/g, (function(e, t) {
                                        return ""
                                    })))
                                }
                            }))
                        }, i = r.length - 1; i > 0; i--) o(i);
                    return !1
                }))
            }
            var Fs = Ie(n(64386)),
                Us = Ie(n(64386)),
                Zs = Ie(n(64386)),
                qs = Ie(n(64386)),
                Gs = n(80796),
                Ks = Ie(n(64386)),
                Js = n(412),
                Xs = n(80796);
            var Ys = (0, Xs.once)((function() {
                return Promise.all([new Promise((function(e, t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.src = "//g.alicdn.com/de/prismplayer/2.8.7/aliplayer-min.js", n.onload = function() {
                        e(window.Aliplayer)
                    }, n.onerror = t, document.head.appendChild(n)
                })), new Promise((function(e, t) {
                    var n = document.createElement("link");
                    n.rel = "stylesheet", n.href = "//g.alicdn.com/de/prismplayer/2.8.7/skins/default/aliplayer-min.css", n.onload = function() {
                        e()
                    }, n.onerror = t, document.head.appendChild(n)
                }))]).then((function(e) {
                    return le(e, 1)[0]
                }))
            }));
            var Qs = new Js.Subject;
            Qs.asObservable();

            function ec(e) {
                var t = e.uuid,
                    n = e.videoId,
                    r = e.playAuth,
                    o = e.coverUrl,
                    i = e.containerElm,
                    a = e.videoSize;
                return Ks.default.useEffect((function() {
                    var e, l = !1;
                    return Ys().then((function(s) {
                            if (!l) {
                                var c = i.current.parentElement;
                                if (c) {
                                    var u = function(e) {
                                            var t = document.createElement("div"),
                                                n = document.createElement("div");
                                            if (t.setAttribute("data-has-size", "".concat(!!e)), t.appendChild(n), e) {
                                                var r = e.height / e.width;
                                                t.style.maxWidth = "".concat(e.width, "px"), n.style.padding = "".concat(50 * r, "% 50%")
                                            }
                                            return t
                                        }(a),
                                        d = document.createElement("div"),
                                        p = (0, Gs.uniqueId)("aliPlayer");
                                    d.setAttribute("id", p), u.appendChild(d), c.replaceChild(u, i.current),
                                        function(e) {
                                            e.on("ready", (function() {
                                                var t = e._el;
                                                t.tabIndex = 1, t.onkeydown = function(t) {
                                                    var n = t.code;
                                                    "Tab" !== n && (t.preventDefault(), t.stopPropagation());
                                                    var r = e.getStatus();
                                                    if ("Space" === n && ("playing" === r ? e.pause() : e.play()), "ArrowLeft" === n || "ArrowRight" === n) {
                                                        var o = e.getCurrentTime();
                                                        e.seek("ArrowLeft" === n ? o - 3 : o + 3)
                                                    }
                                                }
                                            }))
                                        }(e = new s({
                                            id: p,
                                            vid: n,
                                            playauth: r,
                                            encryptType: 1,
                                            cover: o,
                                            autoplay: !1,
                                            preload: !0,
                                            playsinline: !0,
                                            keyShortCuts: !0
                                        })),
                                        function(e) {
                                            for (var t = e.getElementsByTagName("img"), n = t.length, r = 0; r < n; r++) {
                                                var o = t.item(r),
                                                    i = o.parentNode;
                                                if (i && "prism-progress-cursor" === i.className) {
                                                    o.className = (o.className || "") + " no-preview";
                                                    break
                                                }
                                            }
                                        }(d), e.on("play", (function() {
                                            Qs.next(t)
                                        })), e.on("ready", (function() {
                                            var t;
                                            d.setAttribute("data-is-ready", "true"), null == (t = d.querySelector("video")) || t.addEventListener("click", (function() {
                                                "playing" === e.getStatus() ? e.pause() : e.play()
                                            }))
                                        }))
                                }
                            }
                        })),
                        function() {
                            l = !0
                        }
                }), [t, a, n, r, o, i]), Ks.default.createElement("div", null)
            }
            var tc = Ie(n(64386));

            function nc(e) {
                e.icon;
                var t = e.text;
                return tc.default.createElement(tc.default.Fragment, null, tc.default.createElement("div", {
                    style: {
                        height: "300px",
                        width: "100%",
                        margin: "0 auto",
                        background: "rgb(240,240,240)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(140,140,140)",
                        overflow: "hidden",
                        fontSize: "12px",
                        fontWeight: "bold"
                    }
                }, t))
            }
            var rc = Ie(n(64386)),
                oc = function(e) {
                    e.uuid;
                    var t = e.coverUrl,
                        n = e.showPremiumTips,
                        r = rc.default.useRef(null);
                    return rc.default.createElement("div", {
                        style: {
                            position: "relative",
                            display: "inline-block",
                            overflow: "hidden",
                            borderRadius: "3px"
                        }
                    }, rc.default.createElement("img", {
                        src: encodeURI(t),
                        alt: "video cover",
                        style: {
                            filter: n ? "blur(1px)" : void 0,
                            width: "100%",
                            maxWidth: "640px"
                        }
                    }), rc.default.createElement("div", {
                        style: {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            right: "0px",
                            bottom: "0px",
                            background: "rgba(255,255,255, 0.8)",
                            color: "rgba(200,200,200, 0.8)",
                            display: n ? "flex" : "none",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            lineHeight: "20px"
                        }
                    }, "\u5f53\u524d\u89c6\u9891\u4e3a\u529b\u6263 Plus \u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u5347\u7ea7\u529b\u6263 Plus \u4f1a\u5458\u5373\u53ef\u89e3\u9501", rc.default.createElement("a", {
                        href: "vip",
                        ref: r,
                        style: {
                            borderRadius: "3px",
                            marginTop: "19px",
                            padding: "4px 8px",
                            backgroundColor: "DLS_COLORS.brand(orange)",
                            color: "DLS_COLORS.grey(0)",
                            textDecoration: "none",
                            fontSize: "12px",
                            lineHeight: "20px"
                        }
                    }, "\u5347\u7ea7 Plus \u4f1a\u5458")))
                };

            function ic(e) {
                var t = e.uuid,
                    n = e.containerElm,
                    r = e.state;
                if (r.isUpdating) return qs.default.createElement(nc, {
                    text: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u4e2d...",
                    icon: "loading"
                });
                if (!r.canSee) switch (r.chargeType) {
                    case "FREE":
                        break;
                    case "PREMIUM":
                        return r.coverUrl ? qs.default.createElement(oc, {
                            coverUrl: r.coverUrl,
                            showPremiumTips: !1,
                            uuid: t
                        }) : qs.default.createElement(nc, {
                            text: "\u4f1a\u5458\u89c6\u9891",
                            icon: "close-c"
                        });
                    case "VIDEO_PREMIUM":
                        return r.coverUrl ? qs.default.createElement(oc, {
                            coverUrl: r.coverUrl,
                            showPremiumTips: !0,
                            uuid: t
                        }) : qs.default.createElement(nc, {
                            text: "\u4f1a\u5458\u89c6\u9891",
                            icon: "close-c"
                        })
                }
                switch (r.status) {
                    case "PENDING":
                        return qs.default.createElement("div", {
                            style: {
                                height: "300px",
                                width: "100%",
                                margin: "0 auto",
                                background: "rgb(240,240,240)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "rgb(140,140,140)",
                                overflow: "hidden",
                                fontSize: "12px",
                                fontWeight: "bold"
                            }
                        }, qs.default.createElement("img", {
                            src: "https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/%E9%A3%9E%E4%B9%A620230515-161316.png",
                            alt: "",
                            style: {
                                width: "58px",
                                height: "58px",
                                margin: "0px auto 20px"
                            }
                        }), qs.default.createElement("div", {
                            style: {
                                color: "#525252",
                                textAlign: "center"
                            }
                        }, "\u89c6\u9891\u5ba1\u6838\u4e2d"));
                    case "REJECTED":
                        return qs.default.createElement(nc, {
                            text: "\u89c6\u9891\u5ba1\u6838\u4e0d\u901a\u8fc7",
                            icon: "close-c"
                        });
                    case "APPROVED":
                        return r.videoId && r.playAuth ? qs.default.createElement(ec, {
                            containerElm: n,
                            uuid: t,
                            videoId: r.videoId,
                            playAuth: r.playAuth,
                            coverUrl: r.coverUrl,
                            videoSize: r.videoSize
                        }) : qs.default.createElement(nc, {
                            text: "\u89c6\u9891\u4fe1\u606f\u6709\u8bef",
                            icon: "close-c"
                        });
                    case "TRANSCODING":
                        return qs.default.createElement(nc, {
                            text: "\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d...",
                            icon: "video-transcoding"
                        });
                    case "TRANSCODE_FAILED":
                        return qs.default.createElement(nc, {
                            text: "\u89c6\u9891\u8f6c\u7801\u5931\u8d25",
                            icon: "close-c"
                        });
                    default:
                        return qs.default.createElement(nc, {
                            text: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25",
                            icon: "close"
                        })
                }
            }
            var ac = function(e) {
                    var t = e.src,
                        n = (0, Zs.useRef)(null),
                        r = (0, Zs.useRef)(void 0),
                        o = (0, Zs.useState)({
                            isUpdating: !0
                        }),
                        i = le(o, 2),
                        a = i[0],
                        l = i[1];
                    (0, Zs.useEffect)((function() {
                        l({
                            isUpdating: !0
                        }), window.videoTimerList || (window.videoTimerList = []), s(t)
                    }), [t]), (0, Zs.useEffect)((function() {
                        return function() {
                            clearTimeout(r.current)
                        }
                    }), []);
                    var s = (0, Zs.useCallback)((function(e) {
                        fetch(Ti, Me(Se({
                            method: "POST"
                        }, Oi), {
                            body: JSON.stringify({
                                query: "query videoInfo($uuid: UUID!) {\n  videosVideoInfo(uuid: $uuid, fetchType: PLAY_AUTH) {\n    playAuth\n    status\n    videoInfo {\n      videoId\n      coverUrl\n      __typename\n    }\n    videoSize {\n      width\n      height\n      __typename\n    }\n    articleChargeType\n    canSee\n    __typename\n  }\n}",
                                variables: {
                                    uuid: e
                                }
                            })
                        })).then(function() {
                            var t = te(ee.mark((function t(n) {
                                return ee.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            n.json().then((function(t) {
                                                var n, o, i, a, c, u, d, p, f, h, m, g, v, k;
                                                if (t.errors) {
                                                    var y = t.errors[0].message;
                                                    throw new Error(y)
                                                }
                                                var b = t.data;
                                                b.videosVideoInfo || (r.current = setTimeout((function() {
                                                    s(e)
                                                }), 5e3), window.videoTimerList.push(r.current));
                                                var w = {
                                                    isUpdating: !1,
                                                    playAuth: null != (o = null == (n = b.videosVideoInfo) ? void 0 : n.playAuth) ? o : null,
                                                    coverUrl: null != (a = null == (i = b.videosVideoInfo) ? void 0 : i.videoInfo.coverUrl) ? a : null,
                                                    videoId: null != (u = null == (c = b.videosVideoInfo) ? void 0 : c.videoInfo.videoId) ? u : null,
                                                    chargeType: null != (p = null == (d = b.videosVideoInfo) ? void 0 : d.articleChargeType) ? p : null,
                                                    status: null != (h = null == (f = b.videosVideoInfo) ? void 0 : f.status) ? h : "PENDING",
                                                    videoSize: null != (g = null == (m = b.videosVideoInfo) ? void 0 : m.videoSize) ? g : null,
                                                    canSee: null != (k = null == (v = b.videosVideoInfo) ? void 0 : v.canSee) && k
                                                };
                                                l(w)
                                            }));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }), []);
                    return Zs.default.createElement(lc, {
                        className: "ccc"
                    }, Zs.default.createElement("div", {
                        ref: n
                    }, Zs.default.createElement(ic, {
                        uuid: t,
                        containerElm: n,
                        state: a
                    })))
                },
                lc = In.div(q || (q = se(['\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n\n  .prism-player {\n    background-color: rgb(255, 255, 255) !important;\n    border-radius: 5px;\n\n    video {\n      border-radius: 5px;\n    }\n\n    .prism-liveshift-progress {\n      .prism-progress-loaded {\n        background: rgba(50, 50, 50, 0.1);\n        -webkit-backdrop-filter: blur(2px);\n        backdrop-filter: blur(2px);\n      }\n\n      .prism-progress-played {\n        background-color: #fea115;\n      }\n    }\n\n    .prism-progress {\n      .prism-progress-loaded {\n        background: rgba(50, 50, 50, 0.1);\n        -webkit-backdrop-filter: blur(2px);\n        backdrop-filter: blur(2px);\n      }\n      .prism-progress-played {\n        background-color: #fea115;\n      }\n    }\n\n    .prism-controlbar {\n      z-index: 11 !important;\n\n      .prism-cc-btn {\n        display: none;\n      }\n\n      .prism-controlbar-bg {\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n        background: rgba(0, 0, 0, 0.8);\n        backdrop-filter: blur(2px);\n      }\n\n      .prism-volume {\n        margin-right: 15px !important;\n        transform: scale(0.8);\n      }\n\n      .prism-setting-btn {\n        transform: scale(0.8);\n      }\n    }\n\n    .prism-cover {\n      z-index: 10 !important;\n      pointer-events: none;\n      border-radius: 5px;\n    }\n\n    .prism-big-play-btn.pause {\n      border-radius: 100%;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n    }\n\n    .prism-tooltip {\n      border-radius: 10px;\n      line-height: 19px;\n      height: 20px;\n      padding: 0 8px;\n      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n    }\n\n    .prism-thumbnail {\n      img ~ span {\n        border-radius: 10px;\n        line-height: 19px;\n        height: 20px;\n        padding: 0 8px;\n        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n      }\n    }\n  }\n\n  &[data-has-size="true"] {\n    position: relative;\n\n    .prism-player {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n\n  &[data-has-size="false"] {\n    .prism-player[data-is-ready="true"] {\n      display: inline-block;\n      width: auto !important;\n      height: auto !important;\n\n      video {\n        position: static !important;\n        width: auto !important;\n        height: auto !important;\n        transform: none !important;\n        max-width: 100%;\n        display: block;\n      }\n    }\n  }\n']))),
                sc = Ie(n(64386)),
                cc = function(e) {
                    var t = e.src;
                    return sc.default.createElement(sc.default.Fragment, null, sc.default.createElement("video", {
                        style: {
                            width: "100%",
                            height: "100%",
                            pointerEvents: "auto"
                        },
                        className: "editor-normal-video",
                        controls: !0
                    }, sc.default.createElement("source", {
                        src: t,
                        type: "video/mp4"
                    }), "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u89c6\u9891\u683c\u5f0f\u7684\u64ad\u653e"))
                },
                uc = function(e) {
                    return e.src && (t = e.src, /^.*\.mp4$/.test(t)) ? Us.default.createElement(cc, {
                        src: e.src
                    }) : e.src && function(e) {
                        return new RegExp("^".concat("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}", "$")).test(e)
                    }(e.src) ? Us.default.createElement(ac, {
                        src: e.src
                    }) : null;
                    var t
                },
                dc = In.button(G || (G = se(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 100ms ease-in-out;\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:hover {\n    color: ", ";\n    opacity: 1;\n  }\n"])), (function(e) {
                    return e.theme.background
                }), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.theme.text
                })),
                pc = In.p(K || (K = se(["\n  border: 0;\n  display: block;\n  font-size: 13px;\n  font-style: italic;\n  font-weight: normal;\n  color: ", ";\n  padding: 2px 0;\n  line-height: 16px;\n  text-align: center;\n  min-height: 1em;\n  outline: none;\n  background: none;\n  resize: none;\n  user-select: text;\n  cursor: text;\n\n  &:empty:not(:focus) {\n    visibility: hidden;\n  }\n\n  &:empty:before {\n    color: ", ";\n    content: attr(data-caption);\n    pointer-events: none;\n  }\n"])), (function(e) {
                    return e.theme.textSecondary
                }), (function(e) {
                    return e.theme.placeholder
                })),
                fc = In.div(J || (J = se(["\n  line-height: 0;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n\n  &:hover {\n    ", " {\n      opacity: 0.9;\n    }\n  }\n\n  &.ProseMirror-selectednode + ", " {\n    visibility: visible;\n  }\n"])), dc, pc),
                hc = function(e) {
                    var t = e.options,
                        n = e.isSelected,
                        r = e.width;
                    e.height, e.editor;
                    if (!t.sources[0].src) return null;
                    var o = t.sources[0].src,
                        i = (0, Fs.useState)("0px"),
                        a = le(i, 2),
                        l = a[0],
                        s = a[1],
                        c = (0, Fs.useState)("100%"),
                        u = le(c, 1)[0];
                    return Fs.default.useEffect((function() {
                        s("99999" === r ? "100%" : "480px")
                    }), [r]), Fs.default.createElement(fc, {
                        className: n ? "ProseMirror-selectednode video-wrapper" : "unselectednode video-wrapper",
                        style: {
                            width: l,
                            maxWidth: u,
                            borderRadius: "5px"
                        }
                    }, Fs.default.createElement(uc, {
                        src: o
                    }))
                },
                mc = ["right", "left"],
                gc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleKeyDown = function(t) {
                            var n = t.node,
                                r = t.getPos;
                            return function(t) {
                                if ("Enter" === t.key) {
                                    t.preventDefault();
                                    var o = e.editor.view,
                                        i = o.state.doc.resolve(r() + n.nodeSize);
                                    return o.dispatch(o.state.tr.setSelection(new $s.TextSelection(i)).split(i.pos)), void o.focus()
                                }
                                if ("Backspace" === t.key && "" === t.target.innerText) {
                                    var a = e.editor.view,
                                        l = a.state.doc.resolve(r()),
                                        s = a.state.tr.setSelection(new $s.NodeSelection(l));
                                    return a.dispatch(s.deleteSelection()), void a.focus()
                                }
                            }
                        }, e.handleSelect = function(t) {
                            var n = t.getPos;
                            return function(t) {
                                setTimeout((function() {
                                    null == t || t.preventDefault();
                                    var r = e.editor.view,
                                        o = r.state.doc.resolve(n()),
                                        i = r.state.tr.setSelection(new $s.NodeSelection(o));
                                    r.dispatch(i)
                                }), 0)
                            }
                        }, e.component = function(t) {
                            t.theme;
                            var n = t.isSelected,
                                r = t.node.attrs,
                                o = r.src,
                                i = (r.title, r.layoutClass),
                                a = r.width,
                                l = r.height,
                                s = i ? "video video-".concat(i) : "video",
                                c = {
                                    controls: !0,
                                    responsive: !0,
                                    fluid: !0,
                                    sources: [{
                                        src: o
                                    }]
                                };
                            return Vs.createElement("div", {
                                contentEditable: !1,
                                className: s,
                                onClick: e.handleSelect(t),
                                onKeyDown: function(t) {
                                    if ("Backspace" === t.key) {
                                        var n = e.editor.view;
                                        return n.dispatch(n.state.tr.deleteSelection()), void n.focus()
                                    }
                                }
                            }, Vs.createElement(hc, {
                                isSelected: n,
                                options: c,
                                editor: e.editor,
                                width: a,
                                height: l
                            }))
                        }, e
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "video"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                inline: !0,
                                attrs: {
                                    src: {},
                                    alt: {
                                        default: null
                                    },
                                    layoutClass: {
                                        default: null
                                    },
                                    title: {
                                        default: null
                                    },
                                    width: {
                                        default: null
                                    },
                                    height: {
                                        default: null
                                    }
                                },
                                content: "text*",
                                marks: "",
                                group: "inline",
                                selectable: !0,
                                draggable: !1,
                                parseDOM: [{
                                    tag: "div[class~=video]",
                                    getAttrs: function(e) {
                                        var t = e.getElementsByTagName("video")[0],
                                            n = e.className,
                                            r = n && n.match(/video-(.*)$/),
                                            o = r ? r[1] : null;
                                        return {
                                            src: null == t ? void 0 : t.getAttribute("src"),
                                            alt: null == t ? void 0 : t.getAttribute("alt"),
                                            width: null == t ? void 0 : t.getAttribute("width"),
                                            height: null == t ? void 0 : t.getAttribute("height"),
                                            title: null == t ? void 0 : t.getAttribute("title"),
                                            layoutClass: o
                                        }
                                    }
                                }, {
                                    tag: "video",
                                    getAttrs: function(e) {
                                        return {
                                            src: e.getAttribute("src"),
                                            alt: e.getAttribute("alt"),
                                            width: e.getAttribute("width"),
                                            height: e.getAttribute("height"),
                                            title: e.getAttribute("title")
                                        }
                                    }
                                }],
                                toDOM: function(e) {
                                    return ["div", {
                                            class: e.attrs.layoutClass ? "video video-".concat(e.attrs.layoutClass) : "video"
                                        },
                                        ["video", Me(Se({}, e.attrs), {
                                            contentEditable: !1
                                        })],
                                        ["p", {
                                            class: "caption"
                                        }, 0]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [Ws]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            var n = " ![" + e.esc((t.attrs.alt || "").replace("\n", "") || "") + "](" + e.esc(t.attrs.src);
                            (t.attrs.layoutClass ? n += ' "' + e.esc(t.attrs.layoutClass) + '"' : t.attrs.title && (n += ' "' + e.esc(t.attrs.title) + '"'), n += ")", t.attrs.width) && (n += "{:width=" + t.attrs.width + "}");
                            t.attrs.height && (n += "{:height=" + t.attrs.height + "}");
                            e.write(n)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                node: "video",
                                getAttrs: function(e) {
                                    return Se({
                                        src: e.attrGet("src"),
                                        width: e.attrGet("width"),
                                        height: e.attrGet("height"),
                                        alt: e.children[0] && e.children[0].content || null
                                    }, (t = e.attrGet("title")) ? mc.includes(t) ? {
                                        layoutClass: t
                                    } : {
                                        title: t
                                    } : {});
                                    var t
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return {
                                alignRight: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                title: null,
                                                layoutClass: "right"
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                alignLeft: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                title: null,
                                                layoutClass: "left"
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                fullWidth: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                width: "99999",
                                                title: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                originWidth: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                width: "480",
                                                title: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                alignCenter: function() {
                                    return function(e, t) {
                                        var n = Me(Se({}, e.selection.node.attrs), {
                                                layoutClass: null
                                            }),
                                            r = e.selection;
                                        return t(e.tr.setNodeMarkup(r.from, void 0, n)), !0
                                    }
                                },
                                createVideo: function(e) {
                                    return function(n, r) {
                                        var o = n.selection,
                                            i = o.$cursor ? o.$cursor.pos : o.$to.pos,
                                            a = t.create(e);
                                        return r(n.tr.insert(i, a)), !0
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                vc = Ie(n(64386)),
                kc = Ie(n(23474)),
                yc = n(45574),
                bc = n(38556),
                wc = Ie(n(66980));

            function xc(e) {
                e.core.ruler.after("inline", "block_equation", (function(e) {
                    for (var t = e.tokens, n = function(e) {
                            var n = [t[e]].concat(t[e].children),
                                o = [],
                                i = !1,
                                a = 0;
                            if (n.forEach((function(e) {
                                    e && e.content && /^(\$\$).+(\$\$)$/.test(e.content) && (o = [
                                        ["tex", e.content.slice(2, e.content.length - 2)]
                                    ], i = !0), e && "hardbreak" === e.type && a++
                                })), i) {
                                var l = new wc.default("block_equation_open", "", 1);
                                l.attrs = o;
                                var s = new wc.default("block_equation_close", "", 0);
                                l.block = !0, s.block = !0;
                                var c = [];
                                if (a) {
                                    var u = [new wc.default("paragraph_open", "p", 1), new wc.default("inline", "", 0), new wc.default("paragraph_close", "p", -1)];
                                    u[1].children = [new wc.default("text", "", 0)];
                                    for (var d = 1; d <= a; d++) c.splice.apply(c, [3 * (e - 1), 0].concat(u))
                                }
                                t.splice.apply(t, [e - 1, 3].concat(c, [l, s])), e--
                            }
                            r = e
                        }, r = t.length - 1; r > 0; r--) n(r);
                    return !1
                }))
            }
            var Cc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleSelect = function(t) {
                            var n = t.getPos;
                            return function(t) {
                                t.preventDefault();
                                var r = e.editor.view,
                                    o = r.state.doc.resolve(n()),
                                    i = r.state.tr.setSelection(new bc.NodeSelection(o));
                                r.dispatch(i), e.options.onClick()
                            }
                        }, e.component = function(t) {
                            var n = t.node.attrs,
                                r = t.isSelected,
                                o = kc.default.renderToString(n.tex, {
                                    output: "mathml"
                                });
                            return vc.createElement("div", {
                                contentEditable: !1,
                                tex: n.tex,
                                className: r ? "ProseMirror-selectednode" : "",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: e.handleSelect(t)
                            }, vc.createElement("div", {
                                style: {
                                    textAlign: "center"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: o
                                }
                            }))
                        }, e
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "block_equation"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    tex: {
                                        default: ""
                                    }
                                },
                                content: "block+",
                                group: "block",
                                selectable: !0,
                                draggable: !0,
                                defining: !0,
                                isolating: !0,
                                parseDOM: [{
                                    tag: "div[tex]",
                                    getAttrs: function(e) {
                                        return {
                                            tex: e.getAttribute("tex")
                                        }
                                    }
                                }],
                                toDOM: function(t) {
                                    var n = document.createElement("div");
                                    return n.innerHTML = kc.default.renderToString(t.attrs.tex, {
                                        output: "mathml"
                                    }), n.onclick = e.options.onClick, ["div", {
                                        tex: t.attrs.tex,
                                        style: "cursor: pointer"
                                    }, n]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [xc]
                        }
                    }, {
                        key: "commands",
                        value: function() {
                            return function() {
                                return function() {
                                    return !0
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, yc.wrappingInputRule)(/^(?:\$\$)([^*]+)(?:\$\$)$/, t, (function(e) {
                                return {
                                    tex: e[1]
                                }
                            }), (function() {
                                return !1
                            }))]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write("$$".concat(t.attrs.tex, "$$")), e.closeBlock(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "block_equation",
                                getAttrs: function(e) {
                                    return {
                                        tex: e.attrGet("tex") || void 0
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Sc = n(19449),
                Mc = n(38556),
                Ec = n(15899),
                Lc = n(35285);

            function Ac(e) {
                for (var t = e.selection.$head, n = t.depth; n > 0; n--) {
                    var r = t.node(n);
                    if (["list_item", "checkbox_item"].includes(r.type.name)) return [r, t.before(n)]
                }
            }
            var Ic = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "list_item"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "paragraph block*",
                                defining: !0,
                                draggable: !0,
                                parseDOM: [{
                                    tag: "li"
                                }],
                                toDOM: function() {
                                    return ["li", 0]
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new Mc.Plugin({
                                state: {
                                    init: function() {
                                        return Ec.DecorationSet.empty
                                    },
                                    apply: function(t, n, r, o) {
                                        var i = t.getMeta("li");
                                        if (!i && !t.docChanged) return n;
                                        switch (n = n.map(t.mapping, t.doc), null == i ? void 0 : i.event) {
                                            case "mouseover":
                                                var a = (0, Lc.findParentNodeClosestToPos)(o.doc.resolve(i.pos), (function(t) {
                                                    return t.type.name === e.name || "checkbox_item" === t.type.name
                                                }));
                                                if (!a) return n;
                                                var l = (0, Lc.findParentNodeClosestToPos)(o.doc.resolve(i.pos), (function(t) {
                                                    return el(t, e.editor.schema)
                                                }));
                                                if (!l) return n;
                                                var s = l.node.attrs.order || 1,
                                                    c = 0;
                                                l.node.content.forEach((function(e, t, n) {
                                                    e === a.node && (c = n)
                                                }));
                                                var u = String(s + c).length;
                                                return n.add(t.doc, [Ec.Decoration.node(a.pos, a.pos + a.node.nodeSize, {
                                                    class: "hovering"
                                                }, {
                                                    hover: !0
                                                }), Ec.Decoration.node(a.pos, a.pos + a.node.nodeSize, {
                                                    class: "counter-".concat(u)
                                                })]);
                                            case "mouseout":
                                                var d = (0, Lc.findParentNodeClosestToPos)(o.doc.resolve(i.pos), (function(t) {
                                                    return t.type.name === e.name || "checkbox_item" === t.type.name
                                                }));
                                                return d ? n.remove(n.find(d.pos, d.pos + d.node.nodeSize, (function(e) {
                                                    return e.hover
                                                }))) : n
                                        }
                                        return n
                                    }
                                },
                                props: {
                                    decorations: function(e) {
                                        return this.getState(e)
                                    },
                                    handleDOMEvents: {
                                        mouseover: function(e, t) {
                                            var n = e.state,
                                                r = e.dispatch,
                                                o = t.target,
                                                i = null == o ? void 0 : o.closest("li");
                                            if (!i) return !1;
                                            if (!e.dom.contains(i)) return !1;
                                            var a = e.posAtDOM(i, 0);
                                            return !!a && (r(n.tr.setMeta("li", {
                                                event: "mouseover",
                                                pos: a
                                            })), !1)
                                        },
                                        mouseout: function(e, t) {
                                            var n = e.state,
                                                r = e.dispatch,
                                                o = t.target,
                                                i = null == o ? void 0 : o.closest("li");
                                            if (!i) return !1;
                                            if (!e.dom.contains(i)) return !1;
                                            var a = e.posAtDOM(i, 0);
                                            return !!a && (r(n.tr.setMeta("li", {
                                                event: "mouseout",
                                                pos: a
                                            })), !1)
                                        }
                                    }
                                }
                            })]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                Enter: (0, Sc.splitListItem)(t),
                                Tab: (0, Sc.sinkListItem)(t),
                                "Shift-Tab": (0, Sc.liftListItem)(t),
                                "Mod-]": (0, Sc.sinkListItem)(t),
                                "Mod-[": (0, Sc.liftListItem)(t),
                                "Shift-Enter": function(e, t) {
                                    if (!so(e)) return !1;
                                    if (!e.selection.empty) return !1;
                                    var n = e.tr,
                                        r = e.selection;
                                    return t(n.split(r.to)), !0
                                },
                                "Alt-ArrowUp": function(e, t) {
                                    if (!e.selection.empty) return !1;
                                    var n = Ac(e);
                                    if (!n) return !1;
                                    var r = le(n, 2),
                                        o = r[0],
                                        i = r[1],
                                        a = e.doc.resolve(i);
                                    if (!a.nodeBefore || !["list_item", "checkbox_item"].includes(a.nodeBefore.type.name)) return console.log("Node before not a list item"), !1;
                                    var l = e.tr,
                                        s = i - a.nodeBefore.nodeSize;
                                    return t(l.delete(i, i + o.nodeSize).insert(s, o).setSelection(Mc.TextSelection.near(l.doc.resolve(s)))), !0
                                },
                                "Alt-ArrowDown": function(e, t) {
                                    if (!e.selection.empty) return !1;
                                    var n = Ac(e);
                                    if (!n) return !1;
                                    var r = le(n, 2),
                                        o = r[0],
                                        i = r[1],
                                        a = e.doc.resolve(i + o.nodeSize);
                                    if (!a.nodeAfter || !["list_item", "checkbox_item"].includes(a.nodeAfter.type.name)) return console.log("Node after not a list item"), !1;
                                    var l = e.tr,
                                        s = i + o.nodeSize + a.nodeAfter.nodeSize;
                                    return t(l.insert(s, o).setSelection(Mc.TextSelection.near(l.doc.resolve(s))).delete(i, i + o.nodeSize)), !0
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.renderContent(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "list_item"
                            }
                        }
                    }]), n
                }(Wa),
                Tc = n(45574),
                Oc = n(77576),
                Rc = Ie(n(64386)),
                Pc = Ie(n(39157)),
                Dc = Ie(n(71005));

            function Nc(e) {
                return (0, Dc.default)(e, "notice", {
                    marker: ":",
                    validate: function() {
                        return !0
                    },
                    render: function(t, n) {
                        var r = t[n].info;
                        return 1 === t[n].nesting ? '<div class="notice notice-'.concat(e.utils.escapeHtml(r), '">\n') : "</div>\n"
                    }
                })
            }
            var _c = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleStyleChange = function(t) {
                            var n = e.editor.view,
                                r = n.state.tr,
                                o = t.target,
                                i = o.getBoundingClientRect(),
                                a = i.top,
                                l = i.left,
                                s = n.posAtCoords({
                                    top: a,
                                    left: l
                                });
                            if (s) {
                                var c = r.setNodeMarkup(s.inside, void 0, {
                                    style: o.value
                                });
                                n.dispatch(c)
                            }
                        }, e
                    }
                    return re(n, [{
                        key: "styleOptions",
                        get: function() {
                            return Object.entries({
                                info: this.options.dictionary.info,
                                warning: this.options.dictionary.warning,
                                tip: this.options.dictionary.tip
                            })
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "container_notice"
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [Nc]
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    style: {
                                        default: "info"
                                    }
                                },
                                content: "block+",
                                group: "block",
                                defining: !0,
                                draggable: !0,
                                parseDOM: [{
                                    tag: "div.notice-block",
                                    preserveWhitespace: "full",
                                    contentElement: "div:last-child",
                                    getAttrs: function(e) {
                                        return {
                                            style: e.className.includes("tip") ? "tip" : e.className.includes("warning") ? "warning" : void 0
                                        }
                                    }
                                }],
                                toDOM: function(t) {
                                    var n, r = document.createElement("select");
                                    r.addEventListener("change", e.handleStyleChange), e.styleOptions.forEach((function(e) {
                                        var n = le(e, 2),
                                            o = n[0],
                                            i = n[1],
                                            a = document.createElement("option");
                                        a.value = o, a.innerText = i, a.selected = t.attrs.style === o, r.appendChild(a)
                                    })), n = "tip" === t.attrs.style ? Rc.createElement(Oc.StarredIcon, {
                                        color: "currentColor"
                                    }) : "warning" === t.attrs.style ? Rc.createElement(Oc.WarningIcon, {
                                        color: "currentColor"
                                    }) : Rc.createElement(Oc.InfoIcon, {
                                        color: "currentColor"
                                    });
                                    var o = document.createElement("div");
                                    return o.className = "icon", Pc.default.render(n, o), ["div", {
                                            class: "notice-block ".concat(t.attrs.style)
                                        }, o, ["div", {
                                            contentEditable: !1
                                        }, r],
                                        ["div", {
                                            class: "content"
                                        }, 0]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function(e) {
                                return Ka(t, e)
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, Tc.wrappingInputRule)(/^:::$/, t)]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write("\n:::" + (t.attrs.style || "info") + "\n"), e.renderContent(t), e.ensureNewLine(), e.write(":::"), e.closeBlock(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "container_notice",
                                getAttrs: function(e) {
                                    return {
                                        style: e.info
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Bc = n(45574),
                zc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "ordered_list"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                attrs: {
                                    order: {
                                        default: 1
                                    }
                                },
                                content: "list_item+",
                                group: "block",
                                parseDOM: [{
                                    tag: "ol",
                                    getAttrs: function(e) {
                                        return {
                                            order: e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "1", 10) : 1
                                        }
                                    }
                                }],
                                toDOM: function(e) {
                                    return 1 === e.attrs.order ? ["ol", 0] : ["ol", {
                                        start: e.attrs.order
                                    }, 0]
                                }
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema;
                            return function() {
                                return tl(t, n.nodes.list_item)
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            return {
                                "Shift-Ctrl-9": tl(e.type, e.schema.nodes.list_item)
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, Bc.wrappingInputRule)(/^(\d+)\.\s$/, t, (function(e) {
                                return {
                                    order: +e[1]
                                }
                            }), (function(e, t) {
                                return t.childCount + t.attrs.order === +e[1]
                            }))]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write("\n");
                            var n = void 0 !== t.attrs.order ? t.attrs.order : 1,
                                r = "".concat(n + t.childCount - 1).length,
                                o = e.repeat(" ", r + 2);
                            e.renderList(t, o, (function(t) {
                                var o = "".concat(n + t);
                                return e.repeat(" ", r - o.length) + o + ". "
                            }))
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "ordered_list",
                                getAttrs: function(e) {
                                    return {
                                        order: parseInt(e.attrGet("start") || "1", 10)
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Hc = n(35406),
                jc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "paragraph"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "inline*",
                                group: "block",
                                parseDOM: [{
                                    tag: "p"
                                }],
                                toDOM: function() {
                                    return ["p", 0]
                                }
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Shift-Ctrl-0": (0, Hc.setBlockType)(t)
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function() {
                                return (0, Hc.setBlockType)(t)
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            "" !== t.textContent.trim() || 0 !== t.childCount || e.inTable ? (e.renderInline(t), e.closeBlock(t)) : e.write("\\\n")
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "paragraph"
                            }
                        }
                    }]), n
                }(Wa),
                Vc = n(15899),
                $c = n(95580),
                Wc = n(35285),
                Fc = n(38556),
                Uc = Ie(n(66980)),
                Zc = /(?:^|[^\\])\\n/;

            function qc(e) {
                e.core.ruler.after("inline", "tables-pm", (function(e) {
                    for (var t = e.tokens, n = !1, r = function(e) {
                            if (n && t[e].level--, "inline" === t[e].type && t[e].content.match(Zc)) {
                                var r = t[e].children || [];
                                t[e].children = [], r.forEach((function(n) {
                                    var r, o = n.content.split(Zc);
                                    o.length > 1 && "code_inline" !== n.type ? o.forEach((function(n, r) {
                                        var i, a, l = new Uc.default("text", "", 1);
                                        if (l.content = n.trim(), null == (i = t[e].children) || i.push(l), r < o.length - 1) {
                                            var s = new Uc.default("br", "br", 1);
                                            null == (a = t[e].children) || a.push(s)
                                        }
                                    })) : null == (r = t[e].children) || r.push(n)
                                }))
                            }
                            if (["thead_open", "thead_close", "tbody_open", "tbody_close"].includes(t[e].type) && (n = !n, t.splice(e, 1)), ["th_open", "td_open"].includes(t[e].type)) {
                                t.splice(e + 1, 0, new Uc.default("paragraph_open", "p", 1));
                                var o = t[e].attrs;
                                if (o) {
                                    var i = o[0][1];
                                    t[e].info = i.split(":")[1]
                                }
                            }["th_close", "td_close"].includes(t[e].type) && t.splice(e, 0, new Uc.default("paragraph_close", "p", -1))
                        }, o = t.length - 1; o > 0; o--) r(o);
                    return !1
                }))
            }
            var Gc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "table"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "tr+",
                                tableRole: "table",
                                isolating: !0,
                                group: "block",
                                parseDOM: [{
                                    tag: "table"
                                }],
                                toDOM: function() {
                                    return ["div", {
                                            class: "scrollable-wrapper"
                                        },
                                        ["div", {
                                                class: "scrollable"
                                            },
                                            ["table", {
                                                    class: "rme-table"
                                                },
                                                ["tbody", 0]
                                            ]
                                        ]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [qc]
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.schema;
                            return {
                                createTable: function(e) {
                                    var n = e.rowsCount,
                                        r = e.colsCount;
                                    return function(e, o) {
                                        var i = e.tr.selection.anchor + 1,
                                            a = (0, Wc.createTable)(t, n, r),
                                            l = e.tr.replaceSelectionWith(a).scrollIntoView(),
                                            s = l.doc.resolve(i);
                                        l.setSelection(Fc.TextSelection.near(s)), o(l)
                                    }
                                },
                                setColumnAttr: function(e) {
                                    var t = e.index,
                                        n = e.alignment;
                                    return function(e, r) {
                                        var o = (0, Wc.getCellsInColumn)(t)(e.selection) || [],
                                            i = e.tr;
                                        o.forEach((function(e) {
                                            var t = e.pos;
                                            i = i.setNodeMarkup(t, null, {
                                                alignment: n
                                            })
                                        })), r(i)
                                    }
                                },
                                addColumnBefore: function() {
                                    return $c.addColumnBefore
                                },
                                addColumnAfter: function() {
                                    return $c.addColumnAfter
                                },
                                deleteColumn: function() {
                                    return $c.deleteColumn
                                },
                                addRowAfter: function(e) {
                                    var t = e.index;
                                    return function(e, n) {
                                        if (0 === t) {
                                            var r = (0, Wc.addRowAt)(t + 2, !0)(e.tr);
                                            n((0, Wc.moveRow)(t + 2, t + 1)(r))
                                        } else n((0, Wc.addRowAt)(t + 1, !0)(e.tr))
                                    }
                                },
                                deleteRow: function() {
                                    return $c.deleteRow
                                },
                                deleteTable: function() {
                                    return $c.deleteTable
                                },
                                toggleHeaderColumn: function() {
                                    return $c.toggleHeaderColumn
                                },
                                toggleHeaderRow: function() {
                                    return $c.toggleHeaderRow
                                },
                                toggleHeaderCell: function() {
                                    return $c.toggleHeaderCell
                                },
                                setCellAttr: function() {
                                    return $c.setCellAttr
                                },
                                fixTables: function() {
                                    return $c.fixTables
                                }
                            }
                        }
                    }, {
                        key: "keys",
                        value: function() {
                            return {
                                Tab: (0, $c.goToNextCell)(1),
                                "Shift-Tab": (0, $c.goToNextCell)(-1),
                                Enter: function(e, t) {
                                    if (!(0, $c.isInTable)(e)) return !1;
                                    var n = (0, Wc.getCellsInColumn)(0)(e.selection) || [];
                                    return t((0, Wc.addRowAt)(n.length, !0)(e.tr)), !0
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.renderTable(t), e.closeBlock(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "table"
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [(0, $c.tableEditing)(), new Fc.Plugin({
                                props: {
                                    decorations: function(t) {
                                        var n = t.doc,
                                            r = [],
                                            o = 0;
                                        return n.descendants((function(t, n) {
                                            if (t.type.name === e.name) {
                                                var i = document.getElementsByClassName("rme-table")[o];
                                                if (i) {
                                                    var a = i.parentElement;
                                                    !!(a && a.scrollWidth > a.clientWidth) && r.push(Vc.Decoration.widget(n + 1, (function() {
                                                        var e = document.createElement("div");
                                                        return e.className = "scrollable-shadow right", e
                                                    }))), o++
                                                }
                                            }
                                        })), Vc.DecorationSet.create(n, r)
                                    }
                                }
                            })]
                        }
                    }]), n
                }(Wa),
                Kc = n(15899),
                Jc = n(38556),
                Xc = n(35285),
                Yc = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "td"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "paragraph+",
                                tableRole: "cell",
                                isolating: !0,
                                parseDOM: [{
                                    tag: "td"
                                }],
                                toDOM: function(e) {
                                    return ["td", e.attrs.alignment ? {
                                        style: "text-align: ".concat(e.attrs.alignment)
                                    } : {}, 0]
                                },
                                attrs: {
                                    colspan: {
                                        default: 1
                                    },
                                    rowspan: {
                                        default: 1
                                    },
                                    alignment: {
                                        default: null
                                    }
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function() {}
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "td",
                                getAttrs: function(e) {
                                    return {
                                        alignment: e.info
                                    }
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new Jc.Plugin({
                                props: {
                                    decorations: function(t) {
                                        var n = t.doc,
                                            r = t.selection,
                                            o = [],
                                            i = (0, Xc.getCellsInColumn)(0)(r);
                                        return i && i.forEach((function(n, a) {
                                            var l = n.pos;
                                            o.push(Kc.Decoration.widget(l + 1, (function() {
                                                var n = "grip-row";
                                                (0, Xc.isRowSelected)(a)(r) && (n += " selected"), 0 === a && (n += " first"), a === i.length - 1 && (n += " last");
                                                var o = document.createElement("a");
                                                return o.className = n, o.addEventListener("mousedown", (function(n) {
                                                    n.preventDefault(), n.stopImmediatePropagation(), e.options.onSelectRow(a, t)
                                                })), o
                                            })))
                                        })), Kc.DecorationSet.create(n, o)
                                    }
                                }
                            })]
                        }
                    }]), n
                }(Wa),
                Qc = n(15899),
                eu = n(38556),
                tu = n(35285),
                nu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "th"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "paragraph+",
                                tableRole: "header_cell",
                                isolating: !0,
                                parseDOM: [{
                                    tag: "th"
                                }],
                                toDOM: function(e) {
                                    return ["th", e.attrs.alignment ? {
                                        style: "text-align: ".concat(e.attrs.alignment)
                                    } : {}, 0]
                                },
                                attrs: {
                                    colspan: {
                                        default: 1
                                    },
                                    rowspan: {
                                        default: 1
                                    },
                                    alignment: {
                                        default: null
                                    }
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function() {}
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "th",
                                getAttrs: function(e) {
                                    return {
                                        alignment: e.info
                                    }
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new eu.Plugin({
                                props: {
                                    decorations: function(t) {
                                        var n = t.doc,
                                            r = t.selection,
                                            o = [],
                                            i = (0, tu.getCellsInRow)(0)(r);
                                        return i && i.forEach((function(n, a) {
                                            var l = n.pos;
                                            o.push(Qc.Decoration.widget(l + 1, (function() {
                                                var n = "grip-column";
                                                (0, tu.isColumnSelected)(a)(r) && (n += " selected"), 0 === a ? n += " first" : a === i.length - 1 && (n += " last");
                                                var o = document.createElement("a");
                                                return o.className = n, o.addEventListener("mousedown", (function(n) {
                                                    n.preventDefault(), n.stopImmediatePropagation(), e.options.onSelectColumn(a, t)
                                                })), o
                                            })))
                                        })), Qc.DecorationSet.create(n, o)
                                    }
                                }
                            })]
                        }
                    }]), n
                }(Wa),
                ru = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "tr"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                content: "(th | td)*",
                                tableRole: "row",
                                parseDOM: [{
                                    tag: "tr"
                                }],
                                toDOM: function() {
                                    return ["tr", 0]
                                }
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "tr"
                            }
                        }
                    }]), n
                }(Wa),
                ou = n(35406),
                iu = n(45574);

            function au(e, t, n) {
                return new iu.InputRule(e, (function(e, r, o, i) {
                    var a = n instanceof Function ? n(r) : n,
                        l = e.tr,
                        s = r.length - 1,
                        c = i,
                        u = o;
                    if (r[s]) {
                        var d = o + r[0].indexOf(r[s - 1]),
                            p = d + r[s - 1].length - 1,
                            f = d + r[s - 1].lastIndexOf(r[s]),
                            h = f + r[s].length,
                            m = function(e, t, n) {
                                var r = [];
                                return n.doc.nodesBetween(e, t, (function(e, t) {
                                    r = [].concat(Q(r), Q(e.marks.map((function(n) {
                                        return {
                                            start: t,
                                            end: t + e.nodeSize,
                                            mark: n
                                        }
                                    }))))
                                })), r
                            }(o, i, e).filter((function(e) {
                                return e.mark.type.excludes(t)
                            })).filter((function(e) {
                                return e.end > d
                            }));
                        if (m.length) return null;
                        h < p && l.delete(h, p), f > d && l.delete(d, f), c = (u = d) + r[s].length
                    }
                    return l.addMark(u, c, t.create(a)), l.removeStoredMark(t), l
                }))
            }
            var lu = n(35406),
                su = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "type",
                        get: function() {
                            return "mark"
                        }
                    }, {
                        key: "markdownToken",
                        get: function() {
                            return ""
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {}
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {}
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function() {
                                return (0, lu.toggleMark)(t)
                            }
                        }
                    }]), n
                }($a),
                cu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "strong"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "b"
                                }, {
                                    tag: "strong"
                                }, {
                                    style: "font-style",
                                    getAttrs: function(e) {
                                        return "bold" === e
                                    }
                                }],
                                toDOM: function() {
                                    return ["strong"]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return [au(/(?:\*\*)([^*]+)(?:\*\*)$/, e.type)]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-b": (0, ou.toggleMark)(t),
                                "Mod-B": (0, ou.toggleMark)(t)
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "**",
                                close: "**",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "strong"
                            }
                        }
                    }]), n
                }(su),
                uu = n(35406),
                du = n(38556);

            function pu(e, t) {
                var n = e.schema.marks.code_inline,
                    r = t >= 0 && e.doc.nodeAt(t);
                return !!r && !!r.marks.filter((function(e) {
                    return e.type === n
                })).length
            }

            function fu(e, t) {
                var n, r = /`+/g,
                    o = 0;
                if (e.isText)
                    for (; n = r.exec(e.text);) o = Math.max(o, n[0].length);
                for (var i = o > 0 && t > 0 ? " `" : "`", a = 0; a < o; a++) i += "`";
                return o > 0 && t < 0 && (i += " "), i
            }
            var hu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "code_inline"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                excludes: "_",
                                parseDOM: [{
                                    tag: "code",
                                    preserveWhitespace: !0
                                }],
                                toDOM: function() {
                                    return ["code", {
                                        spellCheck: !1
                                    }]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return [au(/(?:^|[^`])(`([^`]+)`)$/, e.type)]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod`": (0, uu.toggleMark)(t),
                                ArrowLeft: function(e, t) {
                                    var n = e.schema.marks.code_inline,
                                        r = e.selection,
                                        o = r.empty,
                                        i = r.$cursor;
                                    if (!o || !i) return !1;
                                    var a = e.tr.storedMarks;
                                    if (n) {
                                        var l = n && co(n)(e),
                                            s = pu(e, i.pos),
                                            c = pu(e, i.pos - 1),
                                            u = pu(e, i.pos - 2),
                                            d = s && !c && Array.isArray(a),
                                            p = c && !u && (null === a || Array.isArray(a) && !!a.length),
                                            f = (d && Array.isArray(a) && !a.length || !d && null === a) && !c && u,
                                            h = !s && c && Array.isArray(a) && !a.length;
                                        if (!l && f) return t(e.tr.setSelection(du.Selection.near(e.doc.resolve(i.pos - 1))).removeStoredMark(n)), !0;
                                        if (!l && h) return t(e.tr.addStoredMark(n.create())), !0;
                                        if (l && p) return t(e.tr.setSelection(du.Selection.near(e.doc.resolve(i.pos - 1))).addStoredMark(n.create())), !0;
                                        var m = 0 === i.index(i.depth - 1);
                                        if (l && (d || !i.nodeBefore && m)) return t(e.tr.removeStoredMark(n)), !0
                                    }
                                    return !1
                                },
                                ArrowRight: function(e, t) {
                                    var n = e.schema.marks.code_inline,
                                        r = e.selection,
                                        o = r.empty,
                                        i = r.$cursor;
                                    if (!o || !i) return !1;
                                    var a = e.tr.storedMarks;
                                    if (n) {
                                        var l = co(n)(e),
                                            s = e.doc.rangeHasMark(i.pos, i.pos, n),
                                            c = e.doc.rangeHasMark(i.pos, i.pos + 1, n),
                                            u = !s && !c && (!a || !!a.length),
                                            d = !s && c && (!a || !a.length);
                                        if (!l && d) return t(e.tr.addStoredMark(n.create())), !0;
                                        if (l && u) return t(e.tr.removeStoredMark(n)), !0
                                    }
                                    return !1
                                }
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: function(e, t, n, r) {
                                    return fu(n.child(r), -1)
                                },
                                close: function(e, t, n, r) {
                                    return fu(n.child(r - 1), 1)
                                },
                                escape: !1
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "code_inline"
                            }
                        }
                    }]), n
                }(su),
                mu = n(35406);

            function gu(e) {
                var t = e.delim.charCodeAt(0);
                return function(n) {
                    function r(n, r) {
                        var o, i, a, l, s, c = [],
                            u = r.length;
                        for (o = 0; o < u; o++)(a = r[o]).marker === t && -1 !== a.end && (l = r[a.end], (s = n.tokens[a.token]).type = "".concat(e.mark, "_open"), s.tag = "span", s.attrs = [
                            ["class", e.mark]
                        ], s.nesting = 1, s.markup = e.delim, s.content = "", (s = n.tokens[l.token]).type = "".concat(e.mark, "_close"), s.tag = "span", s.nesting = -1, s.markup = e.delim, s.content = "", "text" === n.tokens[l.token - 1].type && n.tokens[l.token - 1].content === e.delim[0] && c.push(l.token - 1));
                        for (; c.length;) {
                            for (i = (o = c.pop()) + 1; i < n.tokens.length && n.tokens[i].type === "".concat(e.mark, "_close");) i++;
                            o !== --i && (s = n.tokens[i], n.tokens[i] = n.tokens[o], n.tokens[o] = s)
                        }
                    }
                    n.inline.ruler.before("emphasis", e.mark, (function(e, n) {
                        var r, o = e.pos,
                            i = e.src.charCodeAt(o);
                        if (n) return !1;
                        if (i !== t) return !1;
                        var a = e.scanDelims(e.pos, !0),
                            l = String.fromCharCode(i),
                            s = a.length;
                        if (s < 2) return !1;
                        for (s % 2 && (e.push("text", "", 0).content = l, s--), r = 0; r < s; r += 2) e.push("text", "", 0).content = l + l, (a.can_open || a.can_close) && e.delimiters.push({
                            marker: i,
                            length: 0,
                            jump: r,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: a.can_open,
                            close: a.can_close
                        });
                        return e.pos += a.length, !0
                    })), n.inline.ruler2.before("emphasis", e.mark, (function(e) {
                        var t, n = e.tokens_meta,
                            o = (e.tokens_meta || []).length;
                        for (r(e, e.delimiters), t = 0; t < o; t++) n[t] && n[t].delimiters && r(e, n[t].delimiters)
                    }))
                }
            }
            var vu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "highlight"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "mark"
                                }],
                                toDOM: function() {
                                    return ["mark"]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return [au(/(?:==)([^=]+)(?:==)$/, e.type)]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-Ctrl-h": (0, mu.toggleMark)(t)
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [gu({
                                delim: "==",
                                mark: "highlight"
                            })]
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "==",
                                close: "==",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "highlight"
                            }
                        }
                    }]), n
                }(su),
                ku = n(35406),
                yu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "em"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "i"
                                }, {
                                    tag: "em"
                                }, {
                                    style: "font-style",
                                    getAttrs: function(e) {
                                        return "italic" === e
                                    }
                                }],
                                toDOM: function() {
                                    return ["em"]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [au(/(?:^|[\s])(_([^_]+)_)$/, t), au(/(?:^|[^*])(\*([^*]+)\*)$/, t)]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-i": (0, ku.toggleMark)(t),
                                "Mod-I": (0, ku.toggleMark)(t)
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "*",
                                close: "*",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "em"
                            }
                        }
                    }]), n
                }(su),
                bu = n(35406),
                wu = n(38556),
                xu = n(45574),
                Cu = n(80796),
                Su = /\[([^[]+)]\((\S+)\)$/;

            function Mu(e, t, n, r) {
                if (e.attrs.title || !/^\w+:/.test(e.attrs.href)) return !1;
                var o = t.child(n + (r < 0 ? -1 : 0));
                if (!o.isText || o.text !== e.attrs.href || o.marks[o.marks.length - 1] !== e) return !1;
                if (n === (r < 0 ? 1 : t.childCount - 1)) return !0;
                var i = t.child(n + (r < 0 ? -2 : 1));
                return !e.isInSet(i.marks)
            }
            var Eu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "link"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    href: {
                                        default: ""
                                    }
                                },
                                inclusive: !1,
                                parseDOM: [{
                                    tag: "a[href]",
                                    getAttrs: function(e) {
                                        return {
                                            href: e.getAttribute("href")
                                        }
                                    }
                                }],
                                toDOM: function(t) {
                                    var n = (new Date).getTime() + (0, Cu.uniqueId)();
                                    if (!e.editor.props.readOnly) {
                                        var r = document.createElement("div");
                                        r.id = "editor-hover-".concat(n);
                                        var o = document.createElement("div");
                                        o.className = "hover-a-tag-el-value", o.innerText = t.attrs.href, r.className = "hover-a-tag-el", r.appendChild(o);
                                        var i = document.createElement("div");
                                        i.className = "goku-editor-separator";
                                        var a = document.createElement("div");
                                        a.className = "goku-editor-link-icon goku-editor-link-edit", a.addEventListener("click", (function(t) {
                                            if (t.target && t.target.parentElement && t.target.parentElement.parentElement) {
                                                t.stopPropagation(), window.gokuEditorHoverLinkEdit = !0;
                                                var r = e.editor.view,
                                                    o = document.querySelector("#editor-a-".concat(n));
                                                if (o) {
                                                    var i = e.editor.view.posAtDOM(o, 0),
                                                        a = o.lastChild.textContent.length,
                                                        l = r.state.doc.resolve(i),
                                                        s = r.state.doc.resolve(i + a),
                                                        c = r.state.tr.setSelection(new wu.TextSelection(l, s));
                                                    r.dispatch(c)
                                                }
                                            }
                                        }));
                                        var l = document.createElement("div");
                                        l.className = "editor-selection-tooltip", l.innerText = "\u7f16\u8f91\u94fe\u63a5", a.appendChild(l);
                                        var s = document.createElement("div");
                                        s.className = "goku-editor-link-icon goku-editor-link-delete", s.addEventListener("click", (function(t) {
                                            if (t.target && t.target.parentElement && t.target.parentElement.parentElement) {
                                                t.stopPropagation();
                                                var r = e.editor.view,
                                                    o = document.querySelector("#editor-a-".concat(n));
                                                if (o) {
                                                    o.removeAttribute("href");
                                                    var i = e.editor.view.posAtDOM(o, 0),
                                                        a = o.lastChild.textContent.length;
                                                    r.dispatch(r.state.tr.removeMark(i, i + a, r.state.schema.marks.link))
                                                }
                                            }
                                        }));
                                        var c = document.createElement("div");
                                        c.className = "editor-selection-tooltip", c.innerText = "\u79fb\u9664\u94fe\u63a5", s.appendChild(c), r.appendChild(i), r.appendChild(a), r.appendChild(s), r.onmouseenter = function(e) {
                                            e.target && (r.style.display = "flex")
                                        }, r.onmouseleave = function(e) {
                                            e.target && (r.style = "display:none;")
                                        }, document.body.appendChild(r)
                                    }
                                    return ["a", Me(Se({}, t.attrs), {
                                        rel: "noopener noreferrer nofollow",
                                        class: "goku-editor-link-a",
                                        id: "editor-a-".concat(n)
                                    }), ["span", 0]]
                                }
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = this,
                                n = e.type;
                            return [new xu.InputRule(Su, (function(e, r, o, i) {
                                var a = le(r, 3),
                                    l = a[0],
                                    s = a[1],
                                    c = a[2],
                                    u = e.tr;
                                return l && u.replaceWith(o, i, t.editor.schema.text(s)).addMark(o, o + s.length, n.create({
                                    href: c
                                })), u
                            }))]
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type;
                            return function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                        href: ""
                                    },
                                    n = e.href;
                                return (0, bu.toggleMark)(t, {
                                    href: n
                                })
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = this,
                                n = e.type;
                            return {
                                "Mod-k": function(e, r) {
                                    return e.selection.empty ? (t.options.onKeyboardShortcut(), !0) : (0, bu.toggleMark)(n, {
                                        href: ""
                                    })(e, r)
                                }
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new wu.Plugin({
                                props: {
                                    handleDOMEvents: {
                                        mouseover: function(t, n) {
                                            if (n.target instanceof HTMLAnchorElement && !n.target.className.includes("ProseMirror-widget") && e.options.onHoverLink) return e.options.onHoverLink(n);
                                            if (n.target && n.target.parentElement && "A" === n.target.parentElement.tagName && !e.editor.props.readOnly) {
                                                var r = n.target.parentElement,
                                                    o = r.getBoundingClientRect(),
                                                    i = o.left,
                                                    a = o.top,
                                                    l = o.width,
                                                    s = o.height,
                                                    c = r.id.match(/^editor-a-(\d{14,18})$/),
                                                    u = le(c, 2)[1],
                                                    d = document.querySelector("#editor-hover-".concat(u)),
                                                    p = a + window.scrollY + s + 7,
                                                    f = i + l / 2;
                                                d.style = "display:flex;top:".concat(p, "px;left:").concat(f, "px")
                                            }
                                            return !1
                                        },
                                        mouseout: function(t, n) {
                                            var r;
                                            if (n.target && n.target.parentElement && "A" === n.target.parentElement.tagName && !e.editor.props.readOnly) {
                                                var o = n.target.parentElement,
                                                    i = o.getBoundingClientRect(),
                                                    a = i.left,
                                                    l = i.height,
                                                    s = i.width,
                                                    c = o.id.match(/^editor-a-(\d{14,18})$/),
                                                    u = le(c, 2)[1],
                                                    d = document.querySelector("#editor-hover-".concat(u));
                                                if (d) {
                                                    var p = document.querySelector(".ProseMirror").getBoundingClientRect(),
                                                        f = d.getBoundingClientRect(),
                                                        h = function(e, t) {
                                                            for (var n = e;
                                                                "BODY" !== n.tagName;) {
                                                                if (-1 !== t.indexOf(n.tagName)) return !0;
                                                                n = n.parentElement
                                                            }
                                                            return !1
                                                        }(null == (r = n.target) ? void 0 : r.parentElement, ["H1", "H2", "H3"]) ? l - 3 : l - 1;
                                                    (n.layerY < h + 2 || s > f.width && Math.abs(n.layerX - a + p.left - s / 2) > f.width / 2) && (d.style = "display:none")
                                                }
                                            }
                                            return !1
                                        },
                                        click: function(t, n) {
                                            if (n.stopPropagation(), n.preventDefault(), n.target instanceof HTMLAnchorElement || n.target.parentElement instanceof HTMLAnchorElement) {
                                                var r = n.target.href || (n.target.parentNode instanceof HTMLAnchorElement ? n.target.parentNode.href : "");
                                                if (r.startsWith("#") && e.options.onClickHashtag) return n.stopPropagation(), n.preventDefault(), e.options.onClickHashtag(r, n), !0;
                                                if (e.options.onClickLink) return n.stopPropagation(), n.preventDefault(), e.options.onClickLink(r, n), !0
                                            }
                                            return !1
                                        }
                                    }
                                }
                            })]
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: function(e, t, n, r) {
                                    return Mu(t, n, r, 1) ? "<" : "["
                                },
                                close: function(e, t, n, r) {
                                    return Mu(t, n, r, -1) ? ">" : "](" + e.esc(t.attrs.href) + (t.attrs.title ? " " + e.quote(t.attrs.title) : "") + ")"
                                }
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "link",
                                getAttrs: function(e) {
                                    return {
                                        href: e.attrGet("href"),
                                        title: e.attrGet("title") || null
                                    }
                                }
                            }
                        }
                    }]), n
                }(su),
                Lu = n(35406),
                Au = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "strikethrough"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "s"
                                }, {
                                    tag: "del"
                                }, {
                                    tag: "strike"
                                }],
                                toDOM: function() {
                                    return ["del", 0]
                                }
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-d": (0, Lu.toggleMark)(t)
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return [au(/~([^~]+)~$/, e.type)]
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "~~",
                                close: "~~",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "markdownToken",
                        get: function() {
                            return "s"
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "strikethrough"
                            }
                        }
                    }]), n
                }(su),
                Iu = n(38556),
                Tu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "placeholder"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "span.template-placeholder"
                                }],
                                toDOM: function() {
                                    return ["span", {
                                        class: "template-placeholder"
                                    }]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [gu({
                                delim: "!!",
                                mark: "placeholder"
                            })]
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "!!",
                                close: "!!",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "placeholder"
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new Iu.Plugin({
                                props: {
                                    handleTextInput: function(t, n, r, o) {
                                        if (e.editor.props.template) return !1;
                                        var i = t.state,
                                            a = t.dispatch,
                                            l = ri(i.doc.resolve(n), i.schema.marks.placeholder);
                                        if (!l) return !1;
                                        var s = Math.min(n, l.from),
                                            c = Math.max(r, l.to);
                                        a(i.tr.removeMark(l.from, l.to, i.schema.marks.placeholder).insertText(o, s, c));
                                        var u = t.state.doc.resolve(s + o.length);
                                        return a(t.state.tr.setSelection(Iu.TextSelection.near(u))), !0
                                    },
                                    handleKeyDown: function(t, n) {
                                        if (!t.props.editable || !t.props.editable(t.state)) return !1;
                                        if (e.editor.props.template) return !1;
                                        if ("ArrowLeft" !== n.key && "ArrowRight" !== n.key && "Backspace" !== n.key) return !1;
                                        var r = t.state,
                                            o = t.dispatch;
                                        if ("Backspace" === n.key) {
                                            var i = ri(r.doc.resolve(Math.max(0, r.selection.from - 1)), r.schema.marks.placeholder);
                                            return !!i && (o(r.tr.removeMark(i.from, i.to, r.schema.marks.placeholder).insertText("", i.from, i.to)), !0)
                                        }
                                        if ("ArrowLeft" === n.key) {
                                            var a = ri(r.doc.resolve(Math.max(0, r.selection.from - 1)), r.schema.marks.placeholder);
                                            if (!a) return !1;
                                            var l = r.doc.resolve(a.from);
                                            return o(r.tr.setSelection(Iu.TextSelection.near(l))), !0
                                        }
                                        if ("ArrowRight" === n.key) {
                                            var s = ri(r.selection.$from, r.schema.marks.placeholder);
                                            if (!s) return !1;
                                            var c = r.doc.resolve(s.to);
                                            return o(r.tr.setSelection(Iu.TextSelection.near(c))), !0
                                        }
                                        return !1
                                    },
                                    handleClick: function(t, n, r) {
                                        if (!t.props.editable || !t.props.editable(t.state)) return !1;
                                        if (e.editor.props.template) return !1;
                                        if (r.target instanceof HTMLSpanElement && r.target.className.includes("template-placeholder")) {
                                            var o = t.state,
                                                i = t.dispatch,
                                                a = ri(o.selection.$from, o.schema.marks.placeholder);
                                            if (!a) return !1;
                                            r.stopPropagation(), r.preventDefault();
                                            var l = o.doc.resolve(a.from);
                                            return i(o.tr.setSelection(Iu.TextSelection.near(l))), !0
                                        }
                                        return !1
                                    }
                                }
                            })]
                        }
                    }]), n
                }(su),
                Ou = n(35406);

            function Ru(e) {
                e.inline.ruler2.after("emphasis", "underline", (function(e) {
                    for (var t = e.tokens, n = t.length - 1; n > 0; n--) {
                        var r = t[n];
                        "__" === r.markup && ("strong_open" === r.type && (t[n].tag = "underline", t[n].type = "underline_open"), "strong_close" === r.type && (t[n].tag = "underline", t[n].type = "underline_close"))
                    }
                    return !1
                }))
            }
            var Pu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "underline"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            return {
                                parseDOM: [{
                                    tag: "u"
                                }, {
                                    style: "text-decoration",
                                    getAttrs: function(e) {
                                        return "underline" === e
                                    }
                                }],
                                toDOM: function() {
                                    return ["u", 0]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [Ru]
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            return [au(/(?:__)([^_]+)(?:__)$/, e.type)]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                "Mod-u": (0, Ou.toggleMark)(t)
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        get: function() {
                            return {
                                open: "__",
                                close: "__",
                                mixable: !0,
                                expelEnclosingWhitespace: !0
                            }
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                mark: "underline"
                            }
                        }
                    }]), n
                }(su),
                Du = n(45574),
                Nu = Ie(n(39157)),
                _u = Ie(n(64386)),
                Bu = n(38556),
                zu = n(95580),
                Hu = n(35285),
                ju = n(15899),
                Vu = /^\/([\u4e00-\u9fa5_a-zA-Z0-9]+)?$/,
                $u = /(^(?!\/(\w+)?)(.*)$|^\/(([\w\W]+)\s.*|\s)$|^\/(([^\u4e00-\u9fa5_a-zA-Z0-9])+)$)/;

            function Wu(e, t, n, r, o) {
                if (e.composing) return !1;
                var i = e.state,
                    a = i.doc.resolve(t);
                if (a.parent.type.spec.code) return !1;
                var l = a.parent.textBetween(Math.max(0, a.parentOffset - 500), a.parentOffset, null, "\ufffc"),
                    s = r.exec(l);
                return !!o(i, s, s ? t - s[0].length : t, n)
            }
            var Fu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "blockmenu"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this,
                                t = document.createElement("button");
                            return t.className = "block-menu-trigger", t.type = "button", Nu.default.render(_u.createElement(nr, {
                                style: {
                                    float: "left"
                                }
                            }), t), [new Bu.Plugin({
                                props: {
                                    handleClick: function() {
                                        return e.options.onClose(), !1
                                    },
                                    handleKeyDown: function(t, n) {
                                        var r, o, i, a, l, s, c, u, d, p, f, h;
                                        if ("Backspace" === n.key) {
                                            if ("image" === (null == (o = null == (r = t.state.doc.resolve(Math.max(0, t.state.selection.from - 4))) ? void 0 : r.nodeAfter) ? void 0 : o.type.name) || "video" === (null == (a = null == (i = t.state.doc.resolve(Math.max(0, t.state.selection.from - 4))) ? void 0 : i.nodeAfter) ? void 0 : a.type.name)) {
                                                var m = t.state.doc.resolve(Math.max(0, t.state.selection.from - 4)),
                                                    g = t.state.tr.setSelection(new Bu.NodeSelection(m));
                                                return t.dispatch(g), !0
                                            }
                                            setTimeout((function() {
                                                var n = t.state.selection.$from.pos;
                                                return Wu(t, n, n, Vu, (function(t, n) {
                                                    return n ? e.options.onOpen(n[1]) : e.options.onClose(), null
                                                }))
                                            }))
                                        }
                                        if ("ArrowLeft" === n.key && (null == (l = t.state.selection) ? void 0 : l.node) && ("image" === (null == (s = t.state.selection) ? void 0 : s.node.type.name) || "video" === (null == (c = t.state.selection) ? void 0 : c.node.type.name))) {
                                            var v = t.state.tr.setSelection(Bu.Selection.near(t.state.doc.resolve(t.state.selection.from - 2)));
                                            return t.dispatch(v), !0
                                        }
                                        if ("ArrowRight" === n.key && (null == (u = t.state.selection) ? void 0 : u.node) && ("image" === (null == (d = t.state.selection) ? void 0 : d.node.type.name) || "video" === (null == (p = t.state.selection) ? void 0 : p.node.type.name))) {
                                            var k = t.state.tr.setSelection(Bu.Selection.near(t.state.doc.resolve(t.state.selection.from + 3)));
                                            return t.dispatch(k), !0
                                        }
                                        if ("Enter" === n.key || "ArrowUp" === n.key || "ArrowDown" === n.key || "Tab" === n.key) {
                                            var y = t.state.selection.$from.pos;
                                            if ("ArrowUp" === n.key) try {
                                                var b = t.state.doc.child(t.state.doc.childAfter(y).index - 1);
                                                if (b && b.lastChild && ("image" === b.lastChild.type.name || "video" === b.lastChild.type.name)) {
                                                    var w = (null == (f = t.state.doc.resolve(y).nodeBefore) ? void 0 : f.nodeSize) || 0,
                                                        x = t.state.doc.resolve(Math.max(0, y - w - 4)),
                                                        C = t.state.tr.setSelection(new Bu.NodeSelection(x));
                                                    return t.dispatch(C), !0
                                                }
                                            } catch (A) {}
                                            if ("ArrowDown" === n.key) try {
                                                var S = t.state.doc.child(t.state.doc.childAfter(y).index + 1);
                                                if (S && S.lastChild && ("image" === S.lastChild.type.name || "video" === S.lastChild.type.name)) {
                                                    var M = (null == (h = t.state.doc.resolve(y).nodeAfter) ? void 0 : h.nodeSize) || 0,
                                                        E = t.state.doc.resolve(Math.max(0, y + M + 2)),
                                                        L = t.state.tr.setSelection(new Bu.NodeSelection(E));
                                                    return t.dispatch(L), !0
                                                }
                                            } catch (A) {}
                                            return Wu(t, y, y, Vu, (function(t, n) {
                                                return !(!n || !e.options.getBlockMenuOpen()) || null
                                            }))
                                        }
                                        return !1
                                    },
                                    decorations: function(n) {
                                        var r = (0, Hu.findParentNode)((function(e) {
                                            return "paragraph" === e.type.name
                                        }))(n.selection);
                                        if (r) {
                                            var o = [],
                                                i = r && 0 === r.node.content.size,
                                                a = r && "/" === r.node.textContent;
                                            return 1 === n.selection.$from.depth ? (i && (o.push(ju.Decoration.widget(r.pos, (function() {
                                                return t.addEventListener("click", (function() {
                                                    e.options.onOpen("")
                                                })), t
                                            }))), o.push(ju.Decoration.node(r.pos, r.pos + r.node.nodeSize, {
                                                class: "placeholder",
                                                "data-empty-text": e.options.dictionary.newLineEmpty
                                            }))), a && o.push(ju.Decoration.node(r.pos, r.pos + r.node.nodeSize, {
                                                class: "placeholder",
                                                "data-empty-text": "  ".concat(e.options.dictionary.newLineWithSlash)
                                            })), ju.DecorationSet.create(n.doc, o)) : void 0
                                        }
                                    }
                                }
                            })]
                        }
                    }, {
                        key: "inputRules",
                        value: function() {
                            var e = this;
                            return [new Du.InputRule(Vu, (function(t, n) {
                                return n && "paragraph" === t.selection.$from.parent.type.name && !(0, zu.isInTable)(t) && e.options.onOpen(n[1]), null
                            })), new Du.InputRule($u, (function(t, n) {
                                return n && e.options.onClose(), null
                            }))]
                        }
                    }]), n
                }($a),
                Uu = n(45574),
                Zu = n(38556),
                qu = /(?:^|\s):([0-9a-zA-Z_+-]+)?$/,
                Gu = /(?:^|\s):(([0-9a-zA-Z_+-]*\s+)|(\s+[0-9a-zA-Z_+-]+)|[^0-9a-zA-Z_+-]+)$/,
                Ku = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "emojimenu"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new Zu.Plugin({
                                props: {
                                    handleClick: function() {
                                        return e.options.onClose(), !1
                                    },
                                    handleKeyDown: function(t, n) {
                                        if ("Backspace" === n.key && setTimeout((function() {
                                                var n = t.state.selection.$from.pos;
                                                return Wu(t, n, n, qu, (function(t, n) {
                                                    return n ? e.options.onOpen(n[1]) : e.options.onClose(), null
                                                }))
                                            })), "Enter" === n.key || "ArrowUp" === n.key || "ArrowDown" === n.key || "Tab" === n.key) {
                                            var r = t.state.selection.$from.pos;
                                            return Wu(t, r, r, qu, (function(t, n) {
                                                return !(!n || !e.options.getBlockMenuOpen()) || null
                                            }))
                                        }
                                        return !1
                                    }
                                }
                            })]
                        }
                    }, {
                        key: "inputRules",
                        value: function() {
                            var e = this;
                            return [new Uu.InputRule(qu, (function(t, n) {
                                return n && "paragraph" === t.selection.$from.parent.type.name && !zl(t) && e.options.onOpen(n[1]), null
                            })), new Uu.InputRule(Gu, (function(t, n) {
                                return n && e.options.onClose(), null
                            }))]
                        }
                    }]), n
                }($a),
                Ju = n(38556),
                Xu = n(15899),
                Yu = n(35285),
                Qu = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "folding"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this,
                                t = !1;
                            return [new Ju.Plugin({
                                view: function(e) {
                                    return t = !1, e.dispatch(e.state.tr.setMeta("folding", {
                                        loaded: !0
                                    })), {}
                                },
                                appendTransaction: function(n, r, o) {
                                    if (!t && n.some((function(e) {
                                            return e.getMeta("folding")
                                        }))) {
                                        var i, a = !1,
                                            l = o.tr,
                                            s = ue((0, Yu.findBlockNodes)(o.doc));
                                        try {
                                            for (s.s(); !(i = s.n()).done;) {
                                                var c = i.value;
                                                if ("heading" === c.node.type.name) {
                                                    var u = Ha(c.node, e.editor.props.id);
                                                    "collapsed" === (null == localStorage ? void 0 : localStorage.getItem(u)) && (l.setNodeMarkup(c.pos, void 0, Me(Se({}, c.node.attrs), {
                                                        collapsed: !0
                                                    })), a = !0)
                                                }
                                            }
                                        } catch (d) {
                                            s.e(d)
                                        } finally {
                                            s.f()
                                        }
                                        return t = !0, a ? l : null
                                    }
                                },
                                props: {
                                    decorations: function(e) {
                                        var t = e.doc,
                                            n = Cs(t).map((function(e) {
                                                return Xu.Decoration.node(e.pos, e.pos + e.node.nodeSize, {
                                                    class: "folded-content"
                                                })
                                            }));
                                        return Xu.DecorationSet.create(t, n)
                                    }
                                }
                            })]
                        }
                    }]), n
                }($a),
                ed = n(45574),
                td = n(72146),
                nd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "history"
                        }
                    }, {
                        key: "keys",
                        value: function() {
                            return {
                                "Mod-z": td.undo,
                                "Mod-y": td.redo,
                                "Shift-Mod-z": td.redo,
                                Backspace: ed.undoInputRule
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            return [(0, td.history)()]
                        }
                    }]), n
                }($a),
                rd = n(38556),
                od = n(65271),
                id = !("undefined" === typeof window) && "MacIntel" === window.navigator.platform;
            var ad = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "keys"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new rd.Plugin({
                                props: {
                                    handleDOMEvents: {
                                        blur: this.options.onBlur,
                                        focus: this.options.onFocus
                                    },
                                    handleKeyDown: function(t, n) {
                                        if (t.state.selection instanceof rd.AllSelection) {
                                            if ("ArrowUp" === n.key) {
                                                var r = rd.Selection.atStart(t.state.doc);
                                                return t.dispatch(t.state.tr.setSelection(r)), !0
                                            }
                                            if ("ArrowDown" === n.key) {
                                                var o = rd.Selection.atEnd(t.state.doc);
                                                return t.dispatch(t.state.tr.setSelection(o)), !0
                                            }
                                        }
                                        return t.state.selection instanceof od.GapCursor && "Enter" === n.key ? (t.dispatch(t.state.tr.insert(t.state.selection.from, t.state.schema.nodes.paragraph.create({}))), t.dispatch(t.state.tr.setSelection(rd.TextSelection.near(t.state.doc.resolve(t.state.selection.from), -1))), !0) : !! function(e) {
                                            return id ? e.metaKey : e.ctrlKey
                                        }(n) && ("s" === n.key ? (n.preventDefault(), e.options.onSave(), !0) : "Enter" === n.key ? (n.preventDefault(), e.options.onSaveAndExit(), !0) : "Escape" === n.key && (n.preventDefault(), e.options.onCancel(), !0))
                                    }
                                }
                            })]
                        }
                    }]), n
                }($a),
                ld = n(38556),
                sd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "maxlength"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new ld.Plugin({
                                filterTransaction: function(t) {
                                    return !e.options.maxLength || !(t.doc && t.doc.nodeSize > e.options.maxLength)
                                }
                            })]
                        }
                    }]), n
                }($a),
                cd = n(38556),
                ud = n(15899),
                dd = (0, n(80796).throttle)((function() {
                    var e = setTimeout((function() {
                        var t = document.querySelector(".ProseMirror"),
                            n = document.querySelector(".block-menu-trigger"),
                            r = document.querySelector(".placeholder");
                        if (n && r && t) {
                            var o = (null == t ? void 0 : t.getBoundingClientRect()).top,
                                i = r.getBoundingClientRect().top;
                            n.style = "top:".concat(i - o, "px")
                        }
                        clearTimeout(e)
                    }), 0)
                }), 100),
                pd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "empty-placeholder"
                        }
                    }, {
                        key: "defaultOptions",
                        get: function() {
                            return {
                                emptyNodeClass: "placeholder",
                                placeholder: ""
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new cd.Plugin({
                                props: {
                                    decorations: function(t) {
                                        var n = t.doc,
                                            r = [],
                                            o = "" === n.textContent && n.childCount <= 1 && n.content.size <= 2;
                                        return n.descendants((function(t, n) {
                                            if (o && 0 === n && "paragraph" === t.type.name) {
                                                var i = ud.Decoration.node(n, n + t.nodeSize, {
                                                    class: e.options.emptyNodeClass,
                                                    "data-empty-text": e.options.placeholder
                                                });
                                                r.push(i)
                                            }
                                        })), dd(), ud.DecorationSet.create(n, r)
                                    }
                                }
                            })]
                        }
                    }]), n
                }($a),
                fd = n(45574),
                hd = new fd.InputRule(/->$/, "\u2192"),
                md = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "smart_text"
                        }
                    }, {
                        key: "inputRules",
                        value: function() {
                            return [hd, fd.ellipsis].concat(Q(fd.smartQuotes))
                        }
                    }]), n
                }($a),
                gd = n(38556),
                vd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "trailing_node"
                        }
                    }, {
                        key: "defaultOptions",
                        get: function() {
                            return {
                                node: "paragraph",
                                notAfter: ["paragraph", "heading"]
                            }
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this,
                                t = new gd.PluginKey(this.name),
                                n = Object.entries(this.editor.schema.nodes).map((function(e) {
                                    return le(e, 2)[1]
                                })).filter((function(t) {
                                    return e.options.notAfter.includes(t.name)
                                }));
                            return [new gd.Plugin({
                                key: t,
                                view: function() {
                                    return {
                                        update: function(n) {
                                            var r = n.state;
                                            if (t.getState(r)) {
                                                var o = r.doc,
                                                    i = r.schema,
                                                    a = r.tr,
                                                    l = i.nodes[e.options.node],
                                                    s = a.insert(o.content.size, l.create());
                                                n.dispatch(s)
                                            }
                                        }
                                    }
                                },
                                state: {
                                    init: function(e, t) {
                                        var r = t.tr.doc.lastChild;
                                        return !!r && !n.includes(r.type)
                                    },
                                    apply: function(e, t) {
                                        if (!e.docChanged) return t;
                                        var r = e.doc.lastChild;
                                        return !!r && !n.includes(r.type)
                                    }
                                }
                            })]
                        }
                    }]), n
                }($a),
                kd = n(38556),
                yd = n(95580),
                bd = n(35406);
            var wd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "markdown-paste"
                        }
                    }, {
                        key: "plugins",
                        get: function() {
                            var e = this;
                            return [new kd.Plugin({
                                props: {
                                    handlePaste: function(t, n) {
                                        if (t.props.editable && !t.props.editable(t.state)) return !1;
                                        if (!n.clipboardData) return !1;
                                        var r = n.clipboardData.getData("text/plain"),
                                            o = n.clipboardData.getData("text/html"),
                                            i = n.clipboardData.getData("vscode-editor-data"),
                                            a = t.state,
                                            l = t.dispatch;
                                        if (Io(r)) {
                                            if (!a.selection.empty) return (0, bd.toggleMark)(e.editor.schema.marks.link, {
                                                href: r
                                            })(a, l), !0;
                                            var s = e.editor.props.embeds;
                                            if (s && !(0, yd.isInTable)(a)) {
                                                var c, u = ue(s);
                                                try {
                                                    for (u.s(); !(c = u.n()).done;) {
                                                        if (c.value.matcher(r)) return e.editor.commands.embed({
                                                            href: r
                                                        }), !0
                                                    }
                                                } catch (C) {
                                                    u.e(C)
                                                } finally {
                                                    u.f()
                                                }
                                            }
                                            var d = t.state.tr.insertText(r, a.selection.from, a.selection.to).addMark(a.selection.from, a.selection.to + r.length, a.schema.marks.link.create({
                                                href: r
                                            }));
                                            return t.dispatch(d), !0
                                        }
                                        if (zl(t.state)) return n.preventDefault(), t.dispatch(t.state.tr.insertText(r)), !0;
                                        var p = i ? JSON.parse(i) : void 0,
                                            f = null == p ? void 0 : p.mode;
                                        if (f && "markdown" !== f) return n.preventDefault(), t.dispatch(t.state.tr.replaceSelectionWith(t.state.schema.nodes.code_fence.create({
                                            language: Object.keys(Rl).includes(p.mode) ? p.mode : null
                                        })).insertText(r)), !0;
                                        if (o && /<div class="hover-a-tag-el">/.test(o)) {
                                            var h = o.match(/<span>(.+)<\/span>/),
                                                m = o.match(/<a href="(.+)" rel="noopener noreferrer nofollow" class="goku-editor-link-a">/);
                                            if ((null == h ? void 0 : h.length) && (null == m ? void 0 : m.length)) {
                                                var g = h[1],
                                                    v = m[1],
                                                    k = t.state.tr.insertText(g, a.selection.from, a.selection.to).addMark(a.selection.from, a.selection.to + g.length, a.schema.marks.link.create({
                                                        href: v
                                                    }));
                                                return t.dispatch(k), !0
                                            }
                                        }
                                        if (null == o ? void 0 : o.includes("data-pm-slice")) return !1;
                                        if (r && !o && !i) {
                                            var y = t.state.tr.insertText(r, a.selection.from, a.selection.to);
                                            return t.dispatch(y), !0
                                        }
                                        if (function(e) {
                                                var t = e.match(/^```/gm);
                                                if (t && t.length > 1) return !0;
                                                if (e.match(/\[[^]+\]\(https?:\/\/\S+\)/gm)) return !0;
                                                if (e.match(/\[[^]+\]\(\/\S+\)/gm)) return !0;
                                                if (e.match(/^#{1,6}\s+\S+/gm)) return !0;
                                                var n = e.match(/^[\d-*].?\s\S+/gm);
                                                return !!(n && n.length > 1)
                                            }(r) || 0 === o.length || "markdown" === f) {
                                            n.preventDefault();
                                            var b = e.editor.pasteParser.parse(function(e) {
                                                    for (var t = /^\s?(\[(X|\s|_|-)\]\s(.*)?)/gim; e.match(t);) e = e.replace(t, (function(e) {
                                                        return "- ".concat(e.trim())
                                                    }));
                                                    return e
                                                }(r)),
                                                w = b.slice(0),
                                                x = t.state.tr.replaceSelection(w);
                                            return t.dispatch(x), !0
                                        }
                                        return !1
                                    }
                                }
                            })]
                        }
                    }]), n
                }($a),
                xd = n(87309),
                Cd = /\[(X|\s|_|-)\]\s(.*)?/i;

            function Sd(e, t) {
                return !!(n = e[t]) && "inline" === n.type && function(e) {
                    return !!e && ("list_item_open" === e.type || "checkbox_item_open" === e.type)
                }(e[t - 2]) && function(e) {
                    return !!e && "paragraph_open" === e.type
                }(e[t - 1]) && function(e) {
                    return e && e.content.match(Cd)
                }(e[t]);
                var n
            }

            function Md(e) {
                function t(e, t) {
                    var n = e[t],
                        r = !!n.attrGet("checked");
                    return 1 === n.nesting ? '<li class="checkbox-list-item"><span class="checkbox '.concat(r ? "checked" : "", '">').concat(r ? "[x]" : "[ ]", "</span>") : "</li>\n"
                }
                e.renderer.rules.checkbox_item_open = t, e.renderer.rules.checkbox_item_close = t, e.core.ruler.after("inline", "checkboxes", (function(e) {
                    for (var t = e.tokens, n = t.length - 1; n > 0; n--) {
                        var r = Sd(t, n);
                        if (r) {
                            var o = "x" === r[1].toLowerCase();
                            "bullet_list_open" === t[n - 3].type && (t[n - 3].type = "checkbox_list_open"), "bullet_list_close" === t[n + 3].type && (t[n + 3].type = "checkbox_list_close");
                            var i = t[n].children;
                            if (i) {
                                var a = i[0].content.match(Cd);
                                if (a) {
                                    var l = a[2];
                                    t[n].content = l, i[0].content = l
                                }
                            }
                            t[n - 2].type = "checkbox_item_open", !0 === o && (t[n - 2].attrs = [
                                ["checked", "true"]
                            ]);
                            for (var s = n;
                                "list_item_close" !== t[s].type;) s++;
                            t[s].type = "checkbox_item_close"
                        }
                    }
                    return !1
                }))
            }
            var Ed = [ss, fs, Md, gu({
                delim: "==",
                mark: "highlight"
            }), gu({
                delim: "!!",
                mark: "placeholder"
            }), Ru, qc, Nc, es];
            var Ld = n(45574),
                Ad = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        return ne(this, n), t.apply(this, arguments)
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "checkbox_list"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                group: "block",
                                content: "checkbox_item+",
                                toDOM: function() {
                                    return ["ul", {
                                        class: e.name
                                    }, 0]
                                },
                                parseDOM: [{
                                    tag: '[class="'.concat(this.name, '"]')
                                }]
                            }
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            return {
                                "Shift-Ctrl-7": tl(e.type, e.schema.nodes.checkbox_item)
                            }
                        }
                    }, {
                        key: "commands",
                        value: function(e) {
                            var t = e.type,
                                n = e.schema;
                            return function() {
                                return tl(t, n.nodes.checkbox_item)
                            }
                        }
                    }, {
                        key: "inputRules",
                        value: function(e) {
                            var t = e.type;
                            return [(0, Ld.wrappingInputRule)(/^-?\s*(\[ \])\s$/i, t)]
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.renderList(t, "  ", (function() {
                                return "- "
                            }))
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "checkbox_list"
                            }
                        }
                    }]), n
                }(Wa),
                Id = n(19449),
                Td = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).handleChange = function(t) {
                            var n = e.editor.view,
                                r = n.state.tr,
                                o = t.target.getBoundingClientRect(),
                                i = o.top,
                                a = o.left,
                                l = n.posAtCoords({
                                    top: i,
                                    left: a
                                });
                            if (l) {
                                var s = r.setNodeMarkup(l.inside, void 0, {
                                    checked: t.target.checked
                                });
                                n.dispatch(s)
                            }
                        }, e
                    }
                    return re(n, [{
                        key: "name",
                        get: function() {
                            return "checkbox_item"
                        }
                    }, {
                        key: "schema",
                        get: function() {
                            var e = this;
                            return {
                                attrs: {
                                    checked: {
                                        default: !1
                                    }
                                },
                                content: "paragraph block*",
                                defining: !0,
                                draggable: !0,
                                parseDOM: [{
                                    tag: 'li[data-type="'.concat(this.name, '"]'),
                                    getAttrs: function(e) {
                                        return {
                                            checked: e.className.includes("checked")
                                        }
                                    }
                                }],
                                toDOM: function(t) {
                                    var n = document.createElement("input");
                                    return n.type = "checkbox", n.tabIndex = -1, n.addEventListener("change", e.handleChange), t.attrs.checked && (n.checked = !0), ["li", {
                                            "data-type": e.name,
                                            class: t.attrs.checked ? "checked" : void 0
                                        },
                                        ["span", {
                                            contentEditable: !1
                                        }, n],
                                        ["div", 0]
                                    ]
                                }
                            }
                        }
                    }, {
                        key: "rulePlugins",
                        get: function() {
                            return [Md]
                        }
                    }, {
                        key: "keys",
                        value: function(e) {
                            var t = e.type;
                            return {
                                Enter: (0, Id.splitListItem)(t),
                                Tab: (0, Id.sinkListItem)(t),
                                "Shift-Tab": (0, Id.liftListItem)(t),
                                "Mod-]": (0, Id.sinkListItem)(t),
                                "Mod-[": (0, Id.liftListItem)(t)
                            }
                        }
                    }, {
                        key: "toMarkdown",
                        value: function(e, t) {
                            e.write(t.attrs.checked ? "[x] " : "[ ] "), e.renderContent(t)
                        }
                    }, {
                        key: "parseMarkdown",
                        value: function() {
                            return {
                                block: "checkbox_item",
                                getAttrs: function(e) {
                                    return {
                                        checked: !!e.attrGet("checked") || void 0
                                    }
                                }
                            }
                        }
                    }]), n
                }(Wa),
                Od = new Oa([new Ua, new Za, new hs, new jc, new Ja, new ts, new nl, new Kl, new ql, new Ad, new Td, new us, new Ic, new _c, new Es, new Is, new js, new Gc, new Yc, new nu, new ru, new cu, new hu, new vu, new yu, new Eu, new Au, new Tu, new Pu, new zc]),
                Rd = new xd.Schema({
                    nodes: Od.nodes,
                    marks: Od.marks
                }),
                Pd = Od.parser({
                    schema: Rd,
                    plugins: Od.rulePlugins
                }),
                Dd = Od.serializer(),
                Nd = function(e) {
                    return function(e) {
                        return Ta({
                            plugins: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ed
                        }).render(e).trim()
                    }(e, Od.rulePlugins)
                },
                _d = Rn,
                Bd = function(e) {
                    "use strict";
                    oe(n, e);
                    var t = ce(n);

                    function n() {
                        var e;
                        return ne(this, n), (e = t.apply(this, arguments)).state = {
                            isRTL: !1,
                            isEditorFocused: !1,
                            selectionMenuOpen: !1,
                            blockMenuOpen: !1,
                            linkMenuOpen: !1,
                            teXMenuOpen: !1,
                            blockMenuSearch: "",
                            emojiMenuOpen: !1,
                            spaceHeight: 60
                        }, e.windowClickEvent = function(t) {
                            t.target && void 0 !== window.showSelectNode && (window.showSelectNode = void 0, document.querySelectorAll(".goku-editor-code-select-option-container").forEach((function(e) {
                                -1 !== e.className.indexOf("show") && (e.style = "opacity:0")
                            })));
                            var n = document.querySelector(".ProseMirror");
                            t.target && !(null == n ? void 0 : n.contains(t.target)) && e.handleCloseBlockMenu()
                        }, e.calculateDir = function() {
                            if (e.element) {
                                var t = "rtl" === e.props.dir || "rtl" === getComputedStyle(e.element).direction;
                                e.state.isRTL !== t && e.setState({
                                    isRTL: t
                                })
                            }
                        }, e.value = function() {
                            return e.serializer.serialize(e.view.state.doc)
                        }, e.handleChange = function() {
                            e.props.onChange && e.props.onChange((function() {
                                return e.value()
                            }))
                        }, e.handleSave = function() {
                            var t = e.props.onSave;
                            t && t({
                                done: !1
                            })
                        }, e.handleSaveAndExit = function() {
                            var t = e.props.onSave;
                            t && t({
                                done: !0
                            })
                        }, e.handleEditorBlur = function() {
                            e.setState({
                                isEditorFocused: !1
                            })
                        }, e.handleEditorFocus = function() {
                            e.setState({
                                isEditorFocused: !0
                            })
                        }, e.handleOpenSelectionMenu = function() {
                            e.setState({
                                blockMenuOpen: !1,
                                selectionMenuOpen: !0
                            })
                        }, e.handleCloseSelectionMenu = function() {
                            e.setState({
                                selectionMenuOpen: !1
                            })
                        }, e.handleOpenLinkMenu = function() {
                            e.setState({
                                blockMenuOpen: !1,
                                linkMenuOpen: !0
                            })
                        }, e.handleCloseLinkMenu = function() {
                            e.setState({
                                linkMenuOpen: !1
                            })
                        }, e.handleOpenTeXMenu = function() {
                            e.setState({
                                blockMenuOpen: !1,
                                teXMenuOpen: !0
                            })
                        }, e.handleCloseTeXMenu = function() {
                            e.setState({
                                teXMenuOpen: !1
                            })
                        }, e.handleOpenBlockMenu = function(t) {
                            e.setState({
                                blockMenuOpen: !0,
                                blockMenuSearch: t
                            });
                            try {
                                var n = document.querySelector("#block-menu-container");
                                n && (null == n ? void 0 : n.scrollTop) && (n.scrollTop = 0)
                            } catch (r) {}
                        }, e.handleCloseBlockMenu = function() {
                            e.state.blockMenuOpen && e.setState({
                                blockMenuOpen: !1
                            })
                        }, e.handleSelectRow = function(t, n) {
                            e.view.dispatch((0, Ge.selectRow)(t)(n.tr))
                        }, e.handleSelectColumn = function(t, n) {
                            e.view.dispatch((0, Ge.selectColumn)(t)(n.tr))
                        }, e.handleSelectTable = function(t) {
                            e.view.dispatch((0, Ge.selectTable)(t.tr))
                        }, e.handleSpaceHeight = function() {
                            if (e.element && e.props.wrapperHeight) {
                                var t = e.element.getBoundingClientRect().height;
                                t <= e.props.wrapperHeight ? e.setState({
                                    spaceHeight: e.props.wrapperHeight - t
                                }) : t > e.props.wrapperHeight && 60 !== e.state.spaceHeight && e.setState({
                                    spaceHeight: 60
                                })
                            }
                        }, e.throttleSpaceHeight = (0, He.throttle)(e.handleSpaceHeight, 500), e.getBlockMenuOpen = function() {
                            return e.state.blockMenuOpen
                        }, e.getEmojiMenuOpen = function() {
                            return e.state.emojiMenuOpen
                        }, e.focusAtStart = function() {
                            var t = je.Selection.atStart(e.view.state.doc),
                                n = e.view.state.tr.setSelection(t);
                            e.view.dispatch(n), e.view.focus()
                        }, e.focusAtEnd = function() {
                            var t = je.Selection.atEnd(e.view.state.doc),
                                n = e.view.state.tr.setSelection(t);
                            e.view.dispatch(n), e.view.focus()
                        }, e.getHeadings = function() {
                            var t = [],
                                n = {};
                            return e.view.state.doc.forEach((function(e) {
                                if ("heading" === e.type.name) {
                                    var r = za(e),
                                        o = r;
                                    n[r] > 0 && (o = za(e, n[r])), n[r] = void 0 !== n[r] ? n[r] + 1 : 1, t.push({
                                        title: e.textContent,
                                        level: e.attrs.level,
                                        id: o
                                    })
                                }
                            })), t
                        }, e.theme = function() {
                            return e.props.theme || (e.props.dark ? Pn : Rn)
                        }, e.dictionary = (0, ze.default)((function(e) {
                            return Se(Se({}, Nn), e)
                        })), e
                    }
                    return re(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e;
                            if (this.init(), this.props.scrollTo && this.scrollToAnchor(this.props.scrollTo), this.calculateDir(), !this.props.readOnly) {
                                this.props.autoFocus && this.focusAtEnd();
                                var t = document.createElement("style");
                                t.type = "text/css", t.innerHTML = '\n.hover-a-tag-el {\n  position: absolute;\n  white-space:nowrap;\n  \n  height: 32px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04), 0px 12px 48px rgba(0, 0, 0, 0.04);\n  border-radius: 5px;\n  display: none;\n  transform: translateX(-50%);\n  padding: 6px 8px;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #1A1A1A;\n  box-sizing: border-box;\n  z-index: 100;\n}\n\n.hover-a-tag-el .hover-a-tag-el-value {\n  max-width: 240px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.hover-a-tag-el::before {\n  content: "";\n  display: inline-block;\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  top: -10px;\n  left: 0px;\n}\n\n.goku-editor-link-a {\n  position: relative;\n  text-selectable: true;\n}\n\n.goku-editor-link-a:hover {\n  .hover-a-tag-el {\n    display:flex;\n  }\n}\n\n.goku-editor-separator {\n  height: 16px;\n  width: 1px;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  margin-left: 8px;\n  margin-top: 4px;\n  box-sizing: border-box;\n  margin-left: 10px;\n}\n\n.goku-editor-link-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px;\n  pointer-events: all;\n  box-sizing: border-box;\n  margin-left: 10px;\n  position: relative;\n  margin-top: -2px;\n}\n\n.goku-editor-link-icon:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.goku-editor-link-edit::after {\n  content: "";\n  display: inline-block;\n  background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorEditLink.svg");\n  background-size: 100% 100%;\n  height: 14px;\n  width: 14px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.goku-editor-link-delete::after {\n  content: "";\n  display: inline-block;\n  background-image: url("https://static.leetcode.cn/upload-data/ou_b0be940575e78591b48f9caa4e4aad78/editorDeleteLittle.svg");\n  background-size: 100% 100%;\n  height: 14px;\n  width: 14px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.editor-selection-tooltip {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  // width: 80px;\n  box-sizing: border-box;\n  transform: translateX(-50%);\n  background: #2A2A2A;\n  border-radius: 4px;\n  display: none;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #fff;\n  padding: 6px 12px;\n}\n\n.editor-selection-tooltip::after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-width: 8px;\n  border-style: solid;\n  top: 100%;\n  left: 50%;\n  margin-left: -8px;\n  border-top-color: #2A2A2A;\n}\n\n.goku-editor-link-icon:hover .editor-selection-tooltip {\n  display: inline-block;\n}\n';
                                var n = null == (e = document.getElementsByTagName("HEAD")) ? void 0 : e.item(0);
                                n && n.appendChild(t), window.addEventListener("click", this.windowClickEvent)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.videoTimerList && window.videoTimerList.length && (window.videoTimerList.forEach((function(e) {
                                clearTimeout(e)
                            })), window.videoTimerList = void 0), window.removeEventListener("click", this.windowClickEvent)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this;
                            if (this.throttleSpaceHeight(), this.props.value && e.value !== this.props.value) {
                                var n = this.createState(this.props.value);
                                this.view.updateState(n)
                            }
                            e.readOnly !== this.props.readOnly && this.view.update(Me(Se({}, this.view.props), {
                                editable: function() {
                                    return !t.props.readOnly
                                }
                            })), this.props.scrollTo && this.props.scrollTo !== e.scrollTo && this.scrollToAnchor(this.props.scrollTo), e.readOnly && !this.props.readOnly && this.props.autoFocus && this.focusAtEnd(), e.dir !== this.props.dir && this.calculateDir(), this.isBlurred || this.state.isEditorFocused || this.state.blockMenuOpen || this.state.linkMenuOpen || this.state.teXMenuOpen || this.state.selectionMenuOpen || (this.isBlurred = !0, this.props.onBlur && this.props.onBlur()), this.isBlurred && (this.state.isEditorFocused || this.state.blockMenuOpen || this.state.linkMenuOpen || this.state.teXMenuOpen || this.state.selectionMenuOpen) && (this.isBlurred = !1, this.props.onFocus && this.props.onFocus())
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.extensions = this.createExtensions(), this.nodes = this.createNodes(), this.marks = this.createMarks(), this.schema = this.createSchema(), this.plugins = this.createPlugins(), this.rulePlugins = this.createRulePlugins(), this.keymaps = this.createKeymaps(), this.serializer = this.createSerializer(), this.parser = this.createParser(), this.pasteParser = this.createPasteParser(), this.inputRules = this.createInputRules(), this.nodeViews = this.createNodeViews(), this.view = this.createView(), this.commands = this.createCommands()
                        }
                    }, {
                        key: "createExtensions",
                        value: function() {
                            var e = this,
                                t = this.dictionary(this.props.dictionary);
                            return new Oa([].concat(Q([new Ua, new hs, new jc, new Ja, new Kl({
                                dictionary: t,
                                onShowToast: this.props.onShowToast
                            }), new ql({
                                dictionary: t,
                                onShowToast: this.props.onShowToast
                            }), new ts, new Za, new nl, new us({
                                embeds: this.props.embeds
                            }), new Ic, new _c({
                                dictionary: t
                            }), new Es({
                                dictionary: t,
                                onShowToast: this.props.onShowToast,
                                offset: this.props.headingsOffset
                            }), new Is, new js({
                                dictionary: t,
                                uploadImage: this.props.uploadImage,
                                onImageUploadStart: this.props.onImageUploadStart,
                                onImageUploadStop: this.props.onImageUploadStop,
                                onShowToast: this.props.onShowToast
                            }), new gc({
                                dictionary: t,
                                uploadImage: this.props.uploadImage,
                                onImageUploadStart: this.props.onImageUploadStart,
                                onImageUploadStop: this.props.onImageUploadStop,
                                onShowToast: this.props.onShowToast
                            }), new Gc, new Yc({
                                onSelectTable: this.handleSelectTable,
                                onSelectRow: this.handleSelectRow
                            }), new nu({
                                onSelectColumn: this.handleSelectColumn
                            }), new ru, new cu, new hu, new vu, new yu, new Tu, new Pu, new Eu({
                                onKeyboardShortcut: this.handleOpenLinkMenu,
                                onClickLink: this.props.onClickLink,
                                onClickHashtag: this.props.onClickHashtag,
                                onHoverLink: this.props.onHoverLink
                            }), new Cc({
                                onClick: this.handleOpenTeXMenu
                            }), new Au, new zc, new nd, new Qu, new md, new vd, new wd, new ad({
                                onBlur: this.handleEditorBlur,
                                onFocus: this.handleEditorFocus,
                                onSave: this.handleSave,
                                onSaveAndExit: this.handleSaveAndExit,
                                onCancel: this.props.onCancel
                            }), new Fu({
                                dictionary: t,
                                onOpen: this.handleOpenBlockMenu,
                                onClose: this.handleCloseBlockMenu,
                                getBlockMenuOpen: this.getBlockMenuOpen
                            }), new Ku({
                                onOpen: function(t) {
                                    e.setState({
                                        emojiMenuOpen: !0,
                                        blockMenuSearch: t
                                    })
                                },
                                onClose: function() {
                                    e.setState({
                                        emojiMenuOpen: !1
                                    })
                                },
                                getEmojiMenuOpen: this.getEmojiMenuOpen
                            }), new pd({
                                placeholder: this.props.placeholder
                            }), new sd({
                                maxLength: this.props.maxLength
                            })].filter((function(t) {
                                return !e.props.disableExtensions || !e.props.disableExtensions.includes(t.name)
                            }))), Q(this.props.extensions || [])), this)
                        }
                    }, {
                        key: "createPlugins",
                        value: function() {
                            return this.extensions.plugins
                        }
                    }, {
                        key: "createRulePlugins",
                        value: function() {
                            return this.extensions.rulePlugins
                        }
                    }, {
                        key: "createKeymaps",
                        value: function() {
                            return this.extensions.keymaps({
                                schema: this.schema
                            })
                        }
                    }, {
                        key: "createInputRules",
                        value: function() {
                            return this.extensions.inputRules({
                                schema: this.schema
                            })
                        }
                    }, {
                        key: "createNodeViews",
                        value: function() {
                            var e = this;
                            return this.extensions.extensions.filter((function(e) {
                                return e.component
                            })).reduce((function(t, n) {
                                return Me(Se({}, t), Y({}, n.name, (function(t, r, o, i) {
                                    return new Da(n.component, {
                                        editor: e,
                                        extension: n,
                                        node: t,
                                        view: r,
                                        getPos: o,
                                        decorations: i
                                    })
                                })))
                            }), {})
                        }
                    }, {
                        key: "createCommands",
                        value: function() {
                            return this.extensions.commands({
                                schema: this.schema,
                                view: this.view
                            })
                        }
                    }, {
                        key: "createNodes",
                        value: function() {
                            return this.extensions.nodes
                        }
                    }, {
                        key: "createMarks",
                        value: function() {
                            return this.extensions.marks
                        }
                    }, {
                        key: "createSchema",
                        value: function() {
                            return new Fe.Schema({
                                nodes: this.nodes,
                                marks: this.marks
                            })
                        }
                    }, {
                        key: "createSerializer",
                        value: function() {
                            return this.extensions.serializer()
                        }
                    }, {
                        key: "createParser",
                        value: function() {
                            return this.extensions.parser({
                                schema: this.schema,
                                plugins: this.rulePlugins
                            })
                        }
                    }, {
                        key: "createPasteParser",
                        value: function() {
                            return this.extensions.parser({
                                schema: this.schema,
                                rules: {
                                    linkify: !0
                                },
                                plugins: this.rulePlugins
                            })
                        }
                    }, {
                        key: "createState",
                        value: function(e) {
                            var t = e || this.props.defaultValue,
                                n = this.createDocument("\n" !== t[t.length - 1] ? t + "\n\n\\\n" : t);
                            return je.EditorState.create({
                                schema: this.schema,
                                doc: n,
                                plugins: [].concat(Q(this.plugins), Q(this.keymaps), [(0, Ve.dropCursor)({
                                    color: this.theme().cursor
                                }), (0, $e.gapCursor)(), (0, Ue.inputRules)({
                                    rules: this.inputRules
                                }), (0, Ze.keymap)(qe.baseKeymap)])
                            })
                        }
                    }, {
                        key: "createDocument",
                        value: function(e) {
                            return this.parser.parse(e)
                        }
                    }, {
                        key: "createView",
                        value: function() {
                            var e = this;
                            if (!this.element) throw new Error("createView called before ref available");
                            var t = function(t) {
                                    return t.steps.some((function(t) {
                                        var n, r, o;
                                        return (null == (o = null == (r = null == (n = t.slice) ? void 0 : n.content) ? void 0 : r.firstChild) ? void 0 : o.type.name) === e.schema.nodes.checkbox_item.name
                                    }))
                                },
                                n = this,
                                r = new We.EditorView(this.element, {
                                    state: this.createState(this.props.value),
                                    editable: function() {
                                        return !e.props.readOnly
                                    },
                                    nodeViews: this.nodeViews,
                                    handleDOMEvents: this.props.handleDOMEvents,
                                    dispatchTransaction: function(e) {
                                        var r, o, i, a, l, s, c, u;
                                        e.selectionSet && !e.docChanged && e.selection.from === e.selection.to && ("image" !== (null == (o = null == (r = this.state.doc.resolve(Math.max(0, e.selection.from - 2))) ? void 0 : r.nodeAfter) ? void 0 : o.type.name) && "video" !== (null == (a = null == (i = this.state.doc.resolve(Math.max(0, e.selection.from - 2))) ? void 0 : i.nodeAfter) ? void 0 : a.type.name) || e.setSelection(new je.NodeSelection(this.state.doc.resolve(Math.max(0, e.selection.from - 2)))), "image" !== (null == (s = null == (l = this.state.doc.resolve(Math.max(0, e.selection.from))) ? void 0 : l.nodeAfter) ? void 0 : s.type.name) && "video" !== (null == (u = null == (c = this.state.doc.resolve(Math.max(0, e.selection.from))) ? void 0 : c.nodeAfter) ? void 0 : u.type.name) || e.setSelection(new je.NodeSelection(this.state.doc.resolve(Math.max(0, e.selection.from)))));
                                        var d = this.state.applyTransaction(e),
                                            p = d.state,
                                            f = d.transactions;
                                        this.updateState(p), f.some((function(e) {
                                            return e.docChanged
                                        })) && (!n.props.readOnly || n.props.readOnlyWriteCheckboxes && f.some(t)) && n.handleChange(), n.calculateDir(), n.forceUpdate()
                                    }
                                });
                            return r.dom.setAttribute("role", "textbox"), r
                        }
                    }, {
                        key: "scrollToAnchor",
                        value: function(e) {
                            if (e) try {
                                var t = document.querySelector(e);
                                t && t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (n) {
                                console.warn("Attempted to scroll to invalid hash: ".concat(e), n)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.dir,
                                r = t.readOnly,
                                o = t.readOnlyWriteCheckboxes,
                                i = t.style,
                                a = t.tooltip,
                                l = t.className,
                                s = t.onKeyDown,
                                c = this.state.isRTL,
                                u = this.dictionary(this.props.dictionary);
                            return Be.createElement(_n, {
                                onKeyDown: s,
                                style: i,
                                className: l,
                                align: "flex-start",
                                justify: "center",
                                dir: n,
                                column: !0
                            }, Be.createElement(wn, {
                                theme: this.theme()
                            }, Be.createElement(Be.Fragment, null, Be.createElement(ja, {
                                dir: n,
                                rtl: c,
                                readOnly: r,
                                readOnlyWriteCheckboxes: o,
                                ref: function(t) {
                                    return e.element = t
                                }
                            }), !r && this.view && Be.createElement(Be.Fragment, null, Be.createElement(Va, {
                                spaceHeight: this.state.spaceHeight,
                                onClick: function() {
                                    e.focusAtEnd(), e.handleCloseBlockMenu()
                                }
                            }), Be.createElement(Be.Fragment, null, Be.createElement(ci, {
                                view: this.view,
                                dictionary: u,
                                commands: this.commands,
                                rtl: c,
                                isTemplate: !0 === this.props.template,
                                onOpen: this.handleOpenSelectionMenu,
                                onClose: this.handleCloseSelectionMenu,
                                onSearchLink: this.props.onSearchLink,
                                onClickLink: this.props.onClickLink,
                                onCreateLink: this.props.onCreateLink,
                                tooltip: a
                            }), Be.createElement(ua, {
                                view: this.view,
                                dictionary: u,
                                isActive: this.state.linkMenuOpen,
                                onCreateLink: this.props.onCreateLink,
                                onSearchLink: this.props.onSearchLink,
                                onClickLink: this.props.onClickLink,
                                onShowToast: this.props.onShowToast,
                                onClose: this.handleCloseLinkMenu,
                                tooltip: a
                            }), Be.createElement(xa, {
                                view: this.view,
                                dictionary: u,
                                isActive: this.state.teXMenuOpen,
                                onShowToast: this.props.onShowToast,
                                onClose: this.handleCloseTeXMenu,
                                tooltip: a
                            }), Be.createElement(sa, {
                                view: this.view,
                                commands: this.commands,
                                dictionary: u,
                                rtl: c,
                                isActive: this.state.emojiMenuOpen,
                                search: this.state.blockMenuSearch,
                                onClose: function() {
                                    return e.setState({
                                        emojiMenuOpen: !1
                                    })
                                }
                            }), Be.createElement(Yi, {
                                view: this.view,
                                commands: this.commands,
                                dictionary: u,
                                rtl: c,
                                isActive: this.state.blockMenuOpen,
                                search: this.state.blockMenuSearch,
                                onClose: this.handleCloseBlockMenu,
                                uploadImage: this.props.uploadImage,
                                uploadVideo: this.props.uploadVideo,
                                onLinkToolbarOpen: this.handleOpenLinkMenu,
                                onTeXToolbarOpen: this.handleOpenTeXMenu,
                                onImageUploadStart: this.props.onImageUploadStart,
                                onImageUploadStop: this.props.onImageUploadStop,
                                onShowToast: this.props.onShowToast,
                                embeds: this.props.embeds
                            }))))))
                        }
                    }]), n
                }(Be.PureComponent);
            Bd.defaultProps = {
                defaultValue: "",
                dir: "auto",
                placeholder: "\u8f93\u5165 \u201c/\u201d \u5feb\u901f\u6dfb\u52a0\u5185\u5bb9",
                onImageUploadStart: function() {},
                onImageUploadStop: function() {},
                onClickLink: function(e) {
                    window.open(e, "_blank")
                },
                embeds: [],
                extensions: [],
                tooltip: function(e) {
                    var t = e.tooltip,
                        n = e.children;
                    return Ca.createElement("span", {
                        title: t
                    }, n)
                }
            };
            var zd = Bd
        }
    }
]);