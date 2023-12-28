! function() {
    "use strict";
    var e = {},
        t = {};

    function n(r) {
        var c = t[r];
        if (void 0 !== c) return c.exports;
        var o = t[r] = {
                id: r,
                loaded: !1,
                exports: {}
            },
            f = !0;
        try {
            e[r].call(o.exports, o, o.exports, n), f = !1
        } finally {
            f && delete t[r]
        }
        return o.loaded = !0, o.exports
    }
    n.m = e, n.amdO = {},
        function() {
            var e = [];
            n.O = function(t, r, c, o) {
                if (!r) {
                    var f = 1 / 0;
                    for (d = 0; d < e.length; d++) {
                        r = e[d][0], c = e[d][1], o = e[d][2];
                        for (var a = !0, i = 0; i < r.length; i++)(!1 & o || f >= o) && Object.keys(n.O).every((function(e) {
                            return n.O[e](r[i])
                        })) ? r.splice(i--, 1) : (a = !1, o < f && (f = o));
                        if (a) {
                            e.splice(d--, 1);
                            var u = c();
                            void 0 !== u && (t = u)
                        }
                    }
                    return t
                }
                o = o || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                e[d] = [r, c, o]
            }
        }(), n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        },
        function() {
            var e, t = Object.getPrototypeOf ? function(e) {
                return Object.getPrototypeOf(e)
            } : function(e) {
                return e.__proto__
            };
            n.t = function(r, c) {
                if (1 & c && (r = this(r)), 8 & c) return r;
                if ("object" === typeof r && r) {
                    if (4 & c && r.__esModule) return r;
                    if (16 & c && "function" === typeof r.then) return r
                }
                var o = Object.create(null);
                n.r(o);
                var f = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var a = 2 & c && r;
                    "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach((function(e) {
                    f[e] = function() {
                        return r[e]
                    }
                }));
                return f.default = function() {
                    return r
                }, n.d(o, f), o
            }
        }(), n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function(e) {
            return 7283 === e ? "static/chunks/7283-96aa015dc21a1bbe.js" : 296 === e ? "static/chunks/ea88be26-1c70e31ba8a3c741.js" : 9299 === e ? "static/chunks/9299-7015b4b1f8b22a50.js" : 172 === e ? "static/chunks/172-f7f26662635222ff.js" : 1850 === e ? "static/chunks/1850-59101104a81f063c.js" : 9930 === e ? "static/chunks/9930-13446a69c64536c2.js" : 1242 === e ? "static/chunks/1242-a7b925e9367fb0dc.js" : "static/chunks/" + ({
                3126: "f65a48b9",
                3714: "fec483df",
                6122: "e39c296e",
                7113: "50c9ee44",
                7934: "61905917"
            }[e] || e) + "." + {
                410: "6dd567b11fe8a6bd",
                1009: "4073de76abcb818e",
                1291: "0f744876bb28065f",
                1355: "8a2819cf40374e7c",
                2282: "c35be9297cd61df5",
                2530: "702140c952900322",
                2694: "6409065ab81c4e7d",
                3003: "fdd4cf909d3041f9",
                3126: "31f1a807df54c32f",
                3198: "28cc0378d8612eac",
                3714: "a37c9020eb1a4f03",
                4383: "e178e187f1db6700",
                4622: "a9d85872dd7f70e2",
                4813: "c2785c5fb77e71d1",
                5214: "4e57955e54694f2e",
                5462: "5b9c5d2fdc7eac58",
                5642: "a9161aae50e80781",
                6014: "4f3da3c628abe0fd",
                6122: "ff0892321cb16e8c",
                7113: "ad228b3384b9b5d3",
                7934: "c6efd489d790d097",
                8073: "acfdbcb48d3beb59",
                8346: "f024611b9e0c1b2e",
                8617: "83289180fa164012",
                9604: "98ae01ee1e3398f7",
                9838: "585167763307def4"
            }[e] + ".js"
        }, n.miniCssF = function(e) {
            return "static/css/" + {
                367: "1a915bcc4ae86671",
                882: "1a915bcc4ae86671",
                1970: "d90eccc0b7f494d4",
                2365: "d90eccc0b7f494d4",
                2888: "4fd8f9d3f440b60e",
                4965: "d90eccc0b7f494d4",
                5524: "1ea076906c506339",
                5603: "1a915bcc4ae86671",
                5749: "1a915bcc4ae86671",
                5886: "1a915bcc4ae86671",
                7339: "1a915bcc4ae86671",
                7383: "d90eccc0b7f494d4",
                7519: "902858f631f6c86b",
                8008: "1a915bcc4ae86671",
                8015: "d90eccc0b7f494d4",
                8017: "cd6375f01386aa0f",
                8652: "7c08c952b10d1234",
                9597: "339748c17acb53ad"
            }[e] + ".css"
        }, n.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), n.hmd = function(e) {
            return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: function() {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                }
            }), e
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {},
                t = "_N_E:";
            n.l = function(r, c, o, f) {
                if (e[r]) e[r].push(c);
                else {
                    var a, i;
                    if (void 0 !== o)
                        for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                            var s = u[d];
                            if (s.getAttribute("src") == r || s.getAttribute("data-webpack") == t + o) {
                                a = s;
                                break
                            }
                        }
                    a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, n.nc && a.setAttribute("nonce", n.nc), a.setAttribute("data-webpack", t + o), a.src = n.tu(r)), e[r] = [c];
                    var b = function(t, n) {
                            a.onerror = a.onload = null, clearTimeout(l);
                            var c = e[r];
                            if (delete e[r], a.parentNode && a.parentNode.removeChild(a), c && c.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        l = setTimeout(b.bind(null, void 0, {
                            type: "timeout",
                            target: a
                        }), 12e4);
                    a.onerror = b.bind(null, a.onerror), a.onload = b.bind(null, a.onload), i && document.head.appendChild(a)
                }
            }
        }(), n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            var e;
            n.tt = function() {
                return void 0 === e && (e = {
                    createScriptURL: function(e) {
                        return e
                    }
                }, "undefined" !== typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e
            }
        }(), n.tu = function(e) {
            return n.tt().createScriptURL(e)
        }, n.p = "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/",
        function() {
            var e = {
                2272: 0
            };
            n.f.j = function(t, r) {
                var c = n.o(e, t) ? e[t] : void 0;
                if (0 !== c)
                    if (c) r.push(c[2]);
                    else if (2272 != t) {
                    var o = new Promise((function(n, r) {
                        c = e[t] = [n, r]
                    }));
                    r.push(c[2] = o);
                    var f = n.p + n.u(t),
                        a = new Error;
                    n.l(f, (function(r) {
                        if (n.o(e, t) && (0 !== (c = e[t]) && (e[t] = void 0), c)) {
                            var o = r && ("load" === r.type ? "missing" : r.type),
                                f = r && r.target && r.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + f + ")", a.name = "ChunkLoadError", a.type = o, a.request = f, c[1](a)
                        }
                    }), "chunk-" + t, t)
                } else e[t] = 0
            }, n.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, r) {
                    var c, o, f = r[0],
                        a = r[1],
                        i = r[2],
                        u = 0;
                    if (f.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (c in a) n.o(a, c) && (n.m[c] = a[c]);
                        if (i) var d = i(n)
                    }
                    for (t && t(r); u < f.length; u++) o = f[u], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return n.O(d)
                },
                r = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(), n.nc = void 0
}();