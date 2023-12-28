(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4228], {
        23474: function(e) {
            var t;
            "undefined" !== typeof self && self, t = function() {
                return function() {
                    "use strict";
                    var e = {
                            d: function(t, r) {
                                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                                    enumerable: !0,
                                    get: r[n]
                                })
                            },
                            o: function(e, t) {
                                return Object.prototype.hasOwnProperty.call(e, t)
                            }
                        },
                        t = {};
                    e.d(t, {
                        default: function() {
                            return Jn
                        }
                    });
                    var r = function e(t, r) {
                        this.position = void 0;
                        var n, a = "KaTeX parse error: " + t,
                            i = r && r.loc;
                        if (i && i.start <= i.end) {
                            var o = i.lexer.input;
                            n = i.start;
                            var s = i.end;
                            n === o.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
                            var l = o.slice(n, s).replace(/[^]/g, "$&\u0332");
                            a += (n > 15 ? "\u2026" + o.slice(n - 15, n) : o.slice(0, n)) + l + (s + 15 < o.length ? o.slice(s, s + 15) + "\u2026" : o.slice(s))
                        }
                        var h = new Error(a);
                        return h.name = "ParseError", h.__proto__ = e.prototype, h.position = n, h
                    };
                    r.prototype.__proto__ = Error.prototype;
                    var n = r,
                        a = /([A-Z])/g,
                        i = {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#x27;"
                        },
                        o = /[&><"']/g,
                        s = function e(t) {
                            return "ordgroup" === t.type || "color" === t.type ? 1 === t.body.length ? e(t.body[0]) : t : "font" === t.type ? e(t.body) : t
                        },
                        l = {
                            contains: function(e, t) {
                                return -1 !== e.indexOf(t)
                            },
                            deflt: function(e, t) {
                                return void 0 === e ? t : e
                            },
                            escape: function(e) {
                                return String(e).replace(o, (function(e) {
                                    return i[e]
                                }))
                            },
                            hyphenate: function(e) {
                                return e.replace(a, "-$1").toLowerCase()
                            },
                            getBaseElem: s,
                            isCharacterBox: function(e) {
                                var t = s(e);
                                return "mathord" === t.type || "textord" === t.type || "atom" === t.type
                            },
                            protocolFromUrl: function(e) {
                                var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
                                return null != t ? t[1] : "_relative"
                            }
                        },
                        h = {
                            displayMode: {
                                type: "boolean",
                                description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
                                cli: "-d, --display-mode"
                            },
                            output: {
                                type: {
                                    enum: ["htmlAndMathml", "html", "mathml"]
                                },
                                description: "Determines the markup language of the output.",
                                cli: "-F, --format <type>"
                            },
                            leqno: {
                                type: "boolean",
                                description: "Render display math in leqno style (left-justified tags)."
                            },
                            fleqn: {
                                type: "boolean",
                                description: "Render display math flush left."
                            },
                            throwOnError: {
                                type: "boolean",
                                default: !0,
                                cli: "-t, --no-throw-on-error",
                                cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
                            },
                            errorColor: {
                                type: "string",
                                default: "#cc0000",
                                cli: "-c, --error-color <color>",
                                cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
                                cliProcessor: function(e) {
                                    return "#" + e
                                }
                            },
                            macros: {
                                type: "object",
                                cli: "-m, --macro <def>",
                                cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
                                cliDefault: [],
                                cliProcessor: function(e, t) {
                                    return t.push(e), t
                                }
                            },
                            minRuleThickness: {
                                type: "number",
                                description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
                                processor: function(e) {
                                    return Math.max(0, e)
                                },
                                cli: "--min-rule-thickness <size>",
                                cliProcessor: parseFloat
                            },
                            colorIsTextColor: {
                                type: "boolean",
                                description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
                                cli: "-b, --color-is-text-color"
                            },
                            strict: {
                                type: [{
                                    enum: ["warn", "ignore", "error"]
                                }, "boolean", "function"],
                                description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
                                cli: "-S, --strict",
                                cliDefault: !1
                            },
                            trust: {
                                type: ["boolean", "function"],
                                description: "Trust the input, enabling all HTML features such as \\url.",
                                cli: "-T, --trust"
                            },
                            maxSize: {
                                type: "number",
                                default: 1 / 0,
                                description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
                                processor: function(e) {
                                    return Math.max(0, e)
                                },
                                cli: "-s, --max-size <n>",
                                cliProcessor: parseInt
                            },
                            maxExpand: {
                                type: "number",
                                default: 1e3,
                                description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
                                processor: function(e) {
                                    return Math.max(0, e)
                                },
                                cli: "-e, --max-expand <n>",
                                cliProcessor: function(e) {
                                    return "Infinity" === e ? 1 / 0 : parseInt(e)
                                }
                            },
                            globalGroup: {
                                type: "boolean",
                                cli: !1
                            }
                        };

                    function c(e) {
                        if (e.default) return e.default;
                        var t = e.type,
                            r = Array.isArray(t) ? t[0] : t;
                        if ("string" !== typeof r) return r.enum[0];
                        switch (r) {
                            case "boolean":
                                return !1;
                            case "string":
                                return "";
                            case "number":
                                return 0;
                            case "object":
                                return {}
                        }
                    }
                    var m = function() {
                            function e(e) {
                                for (var t in this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {}, h)
                                    if (h.hasOwnProperty(t)) {
                                        var r = h[t];
                                        this[t] = void 0 !== e[t] ? r.processor ? r.processor(e[t]) : e[t] : c(r)
                                    }
                            }
                            var t = e.prototype;
                            return t.reportNonstrict = function(e, t, r) {
                                var a = this.strict;
                                if ("function" === typeof a && (a = a(e, t, r)), a && "ignore" !== a) {
                                    if (!0 === a || "error" === a) throw new n("LaTeX-incompatible input and strict mode is set to 'error': " + t + " [" + e + "]", r);
                                    "warn" === a ? "undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]") : "undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + a + "': " + t + " [" + e + "]")
                                }
                            }, t.useStrictBehavior = function(e, t, r) {
                                var n = this.strict;
                                if ("function" === typeof n) try {
                                    n = n(e, t, r)
                                } catch (a) {
                                    n = "error"
                                }
                                return !(!n || "ignore" === n) && (!0 === n || "error" === n || ("warn" === n ? ("undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]"), !1) : ("undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]"), !1)))
                            }, t.isTrusted = function(e) {
                                e.url && !e.protocol && (e.protocol = l.protocolFromUrl(e.url));
                                var t = "function" === typeof this.trust ? this.trust(e) : this.trust;
                                return Boolean(t)
                            }, e
                        }(),
                        u = function() {
                            function e(e, t, r) {
                                this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r
                            }
                            var t = e.prototype;
                            return t.sup = function() {
                                return p[d[this.id]]
                            }, t.sub = function() {
                                return p[f[this.id]]
                            }, t.fracNum = function() {
                                return p[g[this.id]]
                            }, t.fracDen = function() {
                                return p[v[this.id]]
                            }, t.cramp = function() {
                                return p[b[this.id]]
                            }, t.text = function() {
                                return p[y[this.id]]
                            }, t.isTight = function() {
                                return this.size >= 2
                            }, e
                        }(),
                        p = [new u(0, 0, !1), new u(1, 0, !0), new u(2, 1, !1), new u(3, 1, !0), new u(4, 2, !1), new u(5, 2, !0), new u(6, 3, !1), new u(7, 3, !0)],
                        d = [4, 5, 4, 5, 6, 7, 6, 7],
                        f = [5, 5, 5, 5, 7, 7, 7, 7],
                        g = [2, 3, 4, 5, 6, 7, 6, 7],
                        v = [3, 3, 5, 5, 7, 7, 7, 7],
                        b = [1, 1, 3, 3, 5, 5, 7, 7],
                        y = [0, 1, 2, 3, 2, 3, 2, 3],
                        x = {
                            DISPLAY: p[0],
                            TEXT: p[2],
                            SCRIPT: p[4],
                            SCRIPTSCRIPT: p[6]
                        },
                        w = [{
                            name: "latin",
                            blocks: [
                                [256, 591],
                                [768, 879]
                            ]
                        }, {
                            name: "cyrillic",
                            blocks: [
                                [1024, 1279]
                            ]
                        }, {
                            name: "armenian",
                            blocks: [
                                [1328, 1423]
                            ]
                        }, {
                            name: "brahmic",
                            blocks: [
                                [2304, 4255]
                            ]
                        }, {
                            name: "georgian",
                            blocks: [
                                [4256, 4351]
                            ]
                        }, {
                            name: "cjk",
                            blocks: [
                                [12288, 12543],
                                [19968, 40879],
                                [65280, 65376]
                            ]
                        }, {
                            name: "hangul",
                            blocks: [
                                [44032, 55215]
                            ]
                        }],
                        k = [];

                    function S(e) {
                        for (var t = 0; t < k.length; t += 2)
                            if (e >= k[t] && e <= k[t + 1]) return !0;
                        return !1
                    }
                    w.forEach((function(e) {
                        return e.blocks.forEach((function(e) {
                            return k.push.apply(k, e)
                        }))
                    }));
                    var M = 80,
                        z = {
                            doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                            doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                            leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                            leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                            leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                            leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                            leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                            leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                            leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                            leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                            leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                            lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                            leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                            leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                            leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                            longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                            midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                            midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                            oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                            oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                            oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                            oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                            rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                            rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                            rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                            rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                            rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                            rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                            rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                            rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                            rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                            righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                            rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                            rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                            twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                            twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                            tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                            tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                            tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                            tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                            vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                            widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                            widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                            widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                            rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                            baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                            rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                            shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                            shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
                        },
                        A = function() {
                            function e(e) {
                                this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return l.contains(this.classes, e)
                            }, t.toNode = function() {
                                for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
                                return e
                            }, t.toMarkup = function() {
                                for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
                                return e
                            }, t.toText = function() {
                                var e = function(e) {
                                    return e.toText()
                                };
                                return this.children.map(e).join("")
                            }, e
                        }(),
                        T = {
                            "AMS-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68889, 0, 0, .72222],
                                66: [0, .68889, 0, 0, .66667],
                                67: [0, .68889, 0, 0, .72222],
                                68: [0, .68889, 0, 0, .72222],
                                69: [0, .68889, 0, 0, .66667],
                                70: [0, .68889, 0, 0, .61111],
                                71: [0, .68889, 0, 0, .77778],
                                72: [0, .68889, 0, 0, .77778],
                                73: [0, .68889, 0, 0, .38889],
                                74: [.16667, .68889, 0, 0, .5],
                                75: [0, .68889, 0, 0, .77778],
                                76: [0, .68889, 0, 0, .66667],
                                77: [0, .68889, 0, 0, .94445],
                                78: [0, .68889, 0, 0, .72222],
                                79: [.16667, .68889, 0, 0, .77778],
                                80: [0, .68889, 0, 0, .61111],
                                81: [.16667, .68889, 0, 0, .77778],
                                82: [0, .68889, 0, 0, .72222],
                                83: [0, .68889, 0, 0, .55556],
                                84: [0, .68889, 0, 0, .66667],
                                85: [0, .68889, 0, 0, .72222],
                                86: [0, .68889, 0, 0, .72222],
                                87: [0, .68889, 0, 0, 1],
                                88: [0, .68889, 0, 0, .72222],
                                89: [0, .68889, 0, 0, .72222],
                                90: [0, .68889, 0, 0, .66667],
                                107: [0, .68889, 0, 0, .55556],
                                160: [0, 0, 0, 0, .25],
                                165: [0, .675, .025, 0, .75],
                                174: [.15559, .69224, 0, 0, .94666],
                                240: [0, .68889, 0, 0, .55556],
                                295: [0, .68889, 0, 0, .54028],
                                710: [0, .825, 0, 0, 2.33334],
                                732: [0, .9, 0, 0, 2.33334],
                                770: [0, .825, 0, 0, 2.33334],
                                771: [0, .9, 0, 0, 2.33334],
                                989: [.08167, .58167, 0, 0, .77778],
                                1008: [0, .43056, .04028, 0, .66667],
                                8245: [0, .54986, 0, 0, .275],
                                8463: [0, .68889, 0, 0, .54028],
                                8487: [0, .68889, 0, 0, .72222],
                                8498: [0, .68889, 0, 0, .55556],
                                8502: [0, .68889, 0, 0, .66667],
                                8503: [0, .68889, 0, 0, .44445],
                                8504: [0, .68889, 0, 0, .66667],
                                8513: [0, .68889, 0, 0, .63889],
                                8592: [-.03598, .46402, 0, 0, .5],
                                8594: [-.03598, .46402, 0, 0, .5],
                                8602: [-.13313, .36687, 0, 0, 1],
                                8603: [-.13313, .36687, 0, 0, 1],
                                8606: [.01354, .52239, 0, 0, 1],
                                8608: [.01354, .52239, 0, 0, 1],
                                8610: [.01354, .52239, 0, 0, 1.11111],
                                8611: [.01354, .52239, 0, 0, 1.11111],
                                8619: [0, .54986, 0, 0, 1],
                                8620: [0, .54986, 0, 0, 1],
                                8621: [-.13313, .37788, 0, 0, 1.38889],
                                8622: [-.13313, .36687, 0, 0, 1],
                                8624: [0, .69224, 0, 0, .5],
                                8625: [0, .69224, 0, 0, .5],
                                8630: [0, .43056, 0, 0, 1],
                                8631: [0, .43056, 0, 0, 1],
                                8634: [.08198, .58198, 0, 0, .77778],
                                8635: [.08198, .58198, 0, 0, .77778],
                                8638: [.19444, .69224, 0, 0, .41667],
                                8639: [.19444, .69224, 0, 0, .41667],
                                8642: [.19444, .69224, 0, 0, .41667],
                                8643: [.19444, .69224, 0, 0, .41667],
                                8644: [.1808, .675, 0, 0, 1],
                                8646: [.1808, .675, 0, 0, 1],
                                8647: [.1808, .675, 0, 0, 1],
                                8648: [.19444, .69224, 0, 0, .83334],
                                8649: [.1808, .675, 0, 0, 1],
                                8650: [.19444, .69224, 0, 0, .83334],
                                8651: [.01354, .52239, 0, 0, 1],
                                8652: [.01354, .52239, 0, 0, 1],
                                8653: [-.13313, .36687, 0, 0, 1],
                                8654: [-.13313, .36687, 0, 0, 1],
                                8655: [-.13313, .36687, 0, 0, 1],
                                8666: [.13667, .63667, 0, 0, 1],
                                8667: [.13667, .63667, 0, 0, 1],
                                8669: [-.13313, .37788, 0, 0, 1],
                                8672: [-.064, .437, 0, 0, 1.334],
                                8674: [-.064, .437, 0, 0, 1.334],
                                8705: [0, .825, 0, 0, .5],
                                8708: [0, .68889, 0, 0, .55556],
                                8709: [.08167, .58167, 0, 0, .77778],
                                8717: [0, .43056, 0, 0, .42917],
                                8722: [-.03598, .46402, 0, 0, .5],
                                8724: [.08198, .69224, 0, 0, .77778],
                                8726: [.08167, .58167, 0, 0, .77778],
                                8733: [0, .69224, 0, 0, .77778],
                                8736: [0, .69224, 0, 0, .72222],
                                8737: [0, .69224, 0, 0, .72222],
                                8738: [.03517, .52239, 0, 0, .72222],
                                8739: [.08167, .58167, 0, 0, .22222],
                                8740: [.25142, .74111, 0, 0, .27778],
                                8741: [.08167, .58167, 0, 0, .38889],
                                8742: [.25142, .74111, 0, 0, .5],
                                8756: [0, .69224, 0, 0, .66667],
                                8757: [0, .69224, 0, 0, .66667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8765: [-.13313, .37788, 0, 0, .77778],
                                8769: [-.13313, .36687, 0, 0, .77778],
                                8770: [-.03625, .46375, 0, 0, .77778],
                                8774: [.30274, .79383, 0, 0, .77778],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8778: [.08167, .58167, 0, 0, .77778],
                                8782: [.06062, .54986, 0, 0, .77778],
                                8783: [.06062, .54986, 0, 0, .77778],
                                8785: [.08198, .58198, 0, 0, .77778],
                                8786: [.08198, .58198, 0, 0, .77778],
                                8787: [.08198, .58198, 0, 0, .77778],
                                8790: [0, .69224, 0, 0, .77778],
                                8791: [.22958, .72958, 0, 0, .77778],
                                8796: [.08198, .91667, 0, 0, .77778],
                                8806: [.25583, .75583, 0, 0, .77778],
                                8807: [.25583, .75583, 0, 0, .77778],
                                8808: [.25142, .75726, 0, 0, .77778],
                                8809: [.25142, .75726, 0, 0, .77778],
                                8812: [.25583, .75583, 0, 0, .5],
                                8814: [.20576, .70576, 0, 0, .77778],
                                8815: [.20576, .70576, 0, 0, .77778],
                                8816: [.30274, .79383, 0, 0, .77778],
                                8817: [.30274, .79383, 0, 0, .77778],
                                8818: [.22958, .72958, 0, 0, .77778],
                                8819: [.22958, .72958, 0, 0, .77778],
                                8822: [.1808, .675, 0, 0, .77778],
                                8823: [.1808, .675, 0, 0, .77778],
                                8828: [.13667, .63667, 0, 0, .77778],
                                8829: [.13667, .63667, 0, 0, .77778],
                                8830: [.22958, .72958, 0, 0, .77778],
                                8831: [.22958, .72958, 0, 0, .77778],
                                8832: [.20576, .70576, 0, 0, .77778],
                                8833: [.20576, .70576, 0, 0, .77778],
                                8840: [.30274, .79383, 0, 0, .77778],
                                8841: [.30274, .79383, 0, 0, .77778],
                                8842: [.13597, .63597, 0, 0, .77778],
                                8843: [.13597, .63597, 0, 0, .77778],
                                8847: [.03517, .54986, 0, 0, .77778],
                                8848: [.03517, .54986, 0, 0, .77778],
                                8858: [.08198, .58198, 0, 0, .77778],
                                8859: [.08198, .58198, 0, 0, .77778],
                                8861: [.08198, .58198, 0, 0, .77778],
                                8862: [0, .675, 0, 0, .77778],
                                8863: [0, .675, 0, 0, .77778],
                                8864: [0, .675, 0, 0, .77778],
                                8865: [0, .675, 0, 0, .77778],
                                8872: [0, .69224, 0, 0, .61111],
                                8873: [0, .69224, 0, 0, .72222],
                                8874: [0, .69224, 0, 0, .88889],
                                8876: [0, .68889, 0, 0, .61111],
                                8877: [0, .68889, 0, 0, .61111],
                                8878: [0, .68889, 0, 0, .72222],
                                8879: [0, .68889, 0, 0, .72222],
                                8882: [.03517, .54986, 0, 0, .77778],
                                8883: [.03517, .54986, 0, 0, .77778],
                                8884: [.13667, .63667, 0, 0, .77778],
                                8885: [.13667, .63667, 0, 0, .77778],
                                8888: [0, .54986, 0, 0, 1.11111],
                                8890: [.19444, .43056, 0, 0, .55556],
                                8891: [.19444, .69224, 0, 0, .61111],
                                8892: [.19444, .69224, 0, 0, .61111],
                                8901: [0, .54986, 0, 0, .27778],
                                8903: [.08167, .58167, 0, 0, .77778],
                                8905: [.08167, .58167, 0, 0, .77778],
                                8906: [.08167, .58167, 0, 0, .77778],
                                8907: [0, .69224, 0, 0, .77778],
                                8908: [0, .69224, 0, 0, .77778],
                                8909: [-.03598, .46402, 0, 0, .77778],
                                8910: [0, .54986, 0, 0, .76042],
                                8911: [0, .54986, 0, 0, .76042],
                                8912: [.03517, .54986, 0, 0, .77778],
                                8913: [.03517, .54986, 0, 0, .77778],
                                8914: [0, .54986, 0, 0, .66667],
                                8915: [0, .54986, 0, 0, .66667],
                                8916: [0, .69224, 0, 0, .66667],
                                8918: [.0391, .5391, 0, 0, .77778],
                                8919: [.0391, .5391, 0, 0, .77778],
                                8920: [.03517, .54986, 0, 0, 1.33334],
                                8921: [.03517, .54986, 0, 0, 1.33334],
                                8922: [.38569, .88569, 0, 0, .77778],
                                8923: [.38569, .88569, 0, 0, .77778],
                                8926: [.13667, .63667, 0, 0, .77778],
                                8927: [.13667, .63667, 0, 0, .77778],
                                8928: [.30274, .79383, 0, 0, .77778],
                                8929: [.30274, .79383, 0, 0, .77778],
                                8934: [.23222, .74111, 0, 0, .77778],
                                8935: [.23222, .74111, 0, 0, .77778],
                                8936: [.23222, .74111, 0, 0, .77778],
                                8937: [.23222, .74111, 0, 0, .77778],
                                8938: [.20576, .70576, 0, 0, .77778],
                                8939: [.20576, .70576, 0, 0, .77778],
                                8940: [.30274, .79383, 0, 0, .77778],
                                8941: [.30274, .79383, 0, 0, .77778],
                                8994: [.19444, .69224, 0, 0, .77778],
                                8995: [.19444, .69224, 0, 0, .77778],
                                9416: [.15559, .69224, 0, 0, .90222],
                                9484: [0, .69224, 0, 0, .5],
                                9488: [0, .69224, 0, 0, .5],
                                9492: [0, .37788, 0, 0, .5],
                                9496: [0, .37788, 0, 0, .5],
                                9585: [.19444, .68889, 0, 0, .88889],
                                9586: [.19444, .74111, 0, 0, .88889],
                                9632: [0, .675, 0, 0, .77778],
                                9633: [0, .675, 0, 0, .77778],
                                9650: [0, .54986, 0, 0, .72222],
                                9651: [0, .54986, 0, 0, .72222],
                                9654: [.03517, .54986, 0, 0, .77778],
                                9660: [0, .54986, 0, 0, .72222],
                                9661: [0, .54986, 0, 0, .72222],
                                9664: [.03517, .54986, 0, 0, .77778],
                                9674: [.11111, .69224, 0, 0, .66667],
                                9733: [.19444, .69224, 0, 0, .94445],
                                10003: [0, .69224, 0, 0, .83334],
                                10016: [0, .69224, 0, 0, .83334],
                                10731: [.11111, .69224, 0, 0, .66667],
                                10846: [.19444, .75583, 0, 0, .61111],
                                10877: [.13667, .63667, 0, 0, .77778],
                                10878: [.13667, .63667, 0, 0, .77778],
                                10885: [.25583, .75583, 0, 0, .77778],
                                10886: [.25583, .75583, 0, 0, .77778],
                                10887: [.13597, .63597, 0, 0, .77778],
                                10888: [.13597, .63597, 0, 0, .77778],
                                10889: [.26167, .75726, 0, 0, .77778],
                                10890: [.26167, .75726, 0, 0, .77778],
                                10891: [.48256, .98256, 0, 0, .77778],
                                10892: [.48256, .98256, 0, 0, .77778],
                                10901: [.13667, .63667, 0, 0, .77778],
                                10902: [.13667, .63667, 0, 0, .77778],
                                10933: [.25142, .75726, 0, 0, .77778],
                                10934: [.25142, .75726, 0, 0, .77778],
                                10935: [.26167, .75726, 0, 0, .77778],
                                10936: [.26167, .75726, 0, 0, .77778],
                                10937: [.26167, .75726, 0, 0, .77778],
                                10938: [.26167, .75726, 0, 0, .77778],
                                10949: [.25583, .75583, 0, 0, .77778],
                                10950: [.25583, .75583, 0, 0, .77778],
                                10955: [.28481, .79383, 0, 0, .77778],
                                10956: [.28481, .79383, 0, 0, .77778],
                                57350: [.08167, .58167, 0, 0, .22222],
                                57351: [.08167, .58167, 0, 0, .38889],
                                57352: [.08167, .58167, 0, 0, .77778],
                                57353: [0, .43056, .04028, 0, .66667],
                                57356: [.25142, .75726, 0, 0, .77778],
                                57357: [.25142, .75726, 0, 0, .77778],
                                57358: [.41951, .91951, 0, 0, .77778],
                                57359: [.30274, .79383, 0, 0, .77778],
                                57360: [.30274, .79383, 0, 0, .77778],
                                57361: [.41951, .91951, 0, 0, .77778],
                                57366: [.25142, .75726, 0, 0, .77778],
                                57367: [.25142, .75726, 0, 0, .77778],
                                57368: [.25142, .75726, 0, 0, .77778],
                                57369: [.25142, .75726, 0, 0, .77778],
                                57370: [.13597, .63597, 0, 0, .77778],
                                57371: [.13597, .63597, 0, 0, .77778]
                            },
                            "Caligraphic-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68333, 0, .19445, .79847],
                                66: [0, .68333, .03041, .13889, .65681],
                                67: [0, .68333, .05834, .13889, .52653],
                                68: [0, .68333, .02778, .08334, .77139],
                                69: [0, .68333, .08944, .11111, .52778],
                                70: [0, .68333, .09931, .11111, .71875],
                                71: [.09722, .68333, .0593, .11111, .59487],
                                72: [0, .68333, .00965, .11111, .84452],
                                73: [0, .68333, .07382, 0, .54452],
                                74: [.09722, .68333, .18472, .16667, .67778],
                                75: [0, .68333, .01445, .05556, .76195],
                                76: [0, .68333, 0, .13889, .68972],
                                77: [0, .68333, 0, .13889, 1.2009],
                                78: [0, .68333, .14736, .08334, .82049],
                                79: [0, .68333, .02778, .11111, .79611],
                                80: [0, .68333, .08222, .08334, .69556],
                                81: [.09722, .68333, 0, .11111, .81667],
                                82: [0, .68333, 0, .08334, .8475],
                                83: [0, .68333, .075, .13889, .60556],
                                84: [0, .68333, .25417, 0, .54464],
                                85: [0, .68333, .09931, .08334, .62583],
                                86: [0, .68333, .08222, 0, .61278],
                                87: [0, .68333, .08222, .08334, .98778],
                                88: [0, .68333, .14643, .13889, .7133],
                                89: [.09722, .68333, .08222, .08334, .66834],
                                90: [0, .68333, .07944, .13889, .72473],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Fraktur-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69141, 0, 0, .29574],
                                34: [0, .69141, 0, 0, .21471],
                                38: [0, .69141, 0, 0, .73786],
                                39: [0, .69141, 0, 0, .21201],
                                40: [.24982, .74947, 0, 0, .38865],
                                41: [.24982, .74947, 0, 0, .38865],
                                42: [0, .62119, 0, 0, .27764],
                                43: [.08319, .58283, 0, 0, .75623],
                                44: [0, .10803, 0, 0, .27764],
                                45: [.08319, .58283, 0, 0, .75623],
                                46: [0, .10803, 0, 0, .27764],
                                47: [.24982, .74947, 0, 0, .50181],
                                48: [0, .47534, 0, 0, .50181],
                                49: [0, .47534, 0, 0, .50181],
                                50: [0, .47534, 0, 0, .50181],
                                51: [.18906, .47534, 0, 0, .50181],
                                52: [.18906, .47534, 0, 0, .50181],
                                53: [.18906, .47534, 0, 0, .50181],
                                54: [0, .69141, 0, 0, .50181],
                                55: [.18906, .47534, 0, 0, .50181],
                                56: [0, .69141, 0, 0, .50181],
                                57: [.18906, .47534, 0, 0, .50181],
                                58: [0, .47534, 0, 0, .21606],
                                59: [.12604, .47534, 0, 0, .21606],
                                61: [-.13099, .36866, 0, 0, .75623],
                                63: [0, .69141, 0, 0, .36245],
                                65: [0, .69141, 0, 0, .7176],
                                66: [0, .69141, 0, 0, .88397],
                                67: [0, .69141, 0, 0, .61254],
                                68: [0, .69141, 0, 0, .83158],
                                69: [0, .69141, 0, 0, .66278],
                                70: [.12604, .69141, 0, 0, .61119],
                                71: [0, .69141, 0, 0, .78539],
                                72: [.06302, .69141, 0, 0, .7203],
                                73: [0, .69141, 0, 0, .55448],
                                74: [.12604, .69141, 0, 0, .55231],
                                75: [0, .69141, 0, 0, .66845],
                                76: [0, .69141, 0, 0, .66602],
                                77: [0, .69141, 0, 0, 1.04953],
                                78: [0, .69141, 0, 0, .83212],
                                79: [0, .69141, 0, 0, .82699],
                                80: [.18906, .69141, 0, 0, .82753],
                                81: [.03781, .69141, 0, 0, .82699],
                                82: [0, .69141, 0, 0, .82807],
                                83: [0, .69141, 0, 0, .82861],
                                84: [0, .69141, 0, 0, .66899],
                                85: [0, .69141, 0, 0, .64576],
                                86: [0, .69141, 0, 0, .83131],
                                87: [0, .69141, 0, 0, 1.04602],
                                88: [0, .69141, 0, 0, .71922],
                                89: [.18906, .69141, 0, 0, .83293],
                                90: [.12604, .69141, 0, 0, .60201],
                                91: [.24982, .74947, 0, 0, .27764],
                                93: [.24982, .74947, 0, 0, .27764],
                                94: [0, .69141, 0, 0, .49965],
                                97: [0, .47534, 0, 0, .50046],
                                98: [0, .69141, 0, 0, .51315],
                                99: [0, .47534, 0, 0, .38946],
                                100: [0, .62119, 0, 0, .49857],
                                101: [0, .47534, 0, 0, .40053],
                                102: [.18906, .69141, 0, 0, .32626],
                                103: [.18906, .47534, 0, 0, .5037],
                                104: [.18906, .69141, 0, 0, .52126],
                                105: [0, .69141, 0, 0, .27899],
                                106: [0, .69141, 0, 0, .28088],
                                107: [0, .69141, 0, 0, .38946],
                                108: [0, .69141, 0, 0, .27953],
                                109: [0, .47534, 0, 0, .76676],
                                110: [0, .47534, 0, 0, .52666],
                                111: [0, .47534, 0, 0, .48885],
                                112: [.18906, .52396, 0, 0, .50046],
                                113: [.18906, .47534, 0, 0, .48912],
                                114: [0, .47534, 0, 0, .38919],
                                115: [0, .47534, 0, 0, .44266],
                                116: [0, .62119, 0, 0, .33301],
                                117: [0, .47534, 0, 0, .5172],
                                118: [0, .52396, 0, 0, .5118],
                                119: [0, .52396, 0, 0, .77351],
                                120: [.18906, .47534, 0, 0, .38865],
                                121: [.18906, .47534, 0, 0, .49884],
                                122: [.18906, .47534, 0, 0, .39054],
                                160: [0, 0, 0, 0, .25],
                                8216: [0, .69141, 0, 0, .21471],
                                8217: [0, .69141, 0, 0, .21471],
                                58112: [0, .62119, 0, 0, .49749],
                                58113: [0, .62119, 0, 0, .4983],
                                58114: [.18906, .69141, 0, 0, .33328],
                                58115: [.18906, .69141, 0, 0, .32923],
                                58116: [.18906, .47534, 0, 0, .50343],
                                58117: [0, .69141, 0, 0, .33301],
                                58118: [0, .62119, 0, 0, .33409],
                                58119: [0, .47534, 0, 0, .50073]
                            },
                            "Main-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .35],
                                34: [0, .69444, 0, 0, .60278],
                                35: [.19444, .69444, 0, 0, .95833],
                                36: [.05556, .75, 0, 0, .575],
                                37: [.05556, .75, 0, 0, .95833],
                                38: [0, .69444, 0, 0, .89444],
                                39: [0, .69444, 0, 0, .31944],
                                40: [.25, .75, 0, 0, .44722],
                                41: [.25, .75, 0, 0, .44722],
                                42: [0, .75, 0, 0, .575],
                                43: [.13333, .63333, 0, 0, .89444],
                                44: [.19444, .15556, 0, 0, .31944],
                                45: [0, .44444, 0, 0, .38333],
                                46: [0, .15556, 0, 0, .31944],
                                47: [.25, .75, 0, 0, .575],
                                48: [0, .64444, 0, 0, .575],
                                49: [0, .64444, 0, 0, .575],
                                50: [0, .64444, 0, 0, .575],
                                51: [0, .64444, 0, 0, .575],
                                52: [0, .64444, 0, 0, .575],
                                53: [0, .64444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [0, .64444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [0, .64444, 0, 0, .575],
                                58: [0, .44444, 0, 0, .31944],
                                59: [.19444, .44444, 0, 0, .31944],
                                60: [.08556, .58556, 0, 0, .89444],
                                61: [-.10889, .39111, 0, 0, .89444],
                                62: [.08556, .58556, 0, 0, .89444],
                                63: [0, .69444, 0, 0, .54305],
                                64: [0, .69444, 0, 0, .89444],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, 0, 0, .81805],
                                67: [0, .68611, 0, 0, .83055],
                                68: [0, .68611, 0, 0, .88194],
                                69: [0, .68611, 0, 0, .75555],
                                70: [0, .68611, 0, 0, .72361],
                                71: [0, .68611, 0, 0, .90416],
                                72: [0, .68611, 0, 0, .9],
                                73: [0, .68611, 0, 0, .43611],
                                74: [0, .68611, 0, 0, .59444],
                                75: [0, .68611, 0, 0, .90138],
                                76: [0, .68611, 0, 0, .69166],
                                77: [0, .68611, 0, 0, 1.09166],
                                78: [0, .68611, 0, 0, .9],
                                79: [0, .68611, 0, 0, .86388],
                                80: [0, .68611, 0, 0, .78611],
                                81: [.19444, .68611, 0, 0, .86388],
                                82: [0, .68611, 0, 0, .8625],
                                83: [0, .68611, 0, 0, .63889],
                                84: [0, .68611, 0, 0, .8],
                                85: [0, .68611, 0, 0, .88472],
                                86: [0, .68611, .01597, 0, .86944],
                                87: [0, .68611, .01597, 0, 1.18888],
                                88: [0, .68611, 0, 0, .86944],
                                89: [0, .68611, .02875, 0, .86944],
                                90: [0, .68611, 0, 0, .70277],
                                91: [.25, .75, 0, 0, .31944],
                                92: [.25, .75, 0, 0, .575],
                                93: [.25, .75, 0, 0, .31944],
                                94: [0, .69444, 0, 0, .575],
                                95: [.31, .13444, .03194, 0, .575],
                                97: [0, .44444, 0, 0, .55902],
                                98: [0, .69444, 0, 0, .63889],
                                99: [0, .44444, 0, 0, .51111],
                                100: [0, .69444, 0, 0, .63889],
                                101: [0, .44444, 0, 0, .52708],
                                102: [0, .69444, .10903, 0, .35139],
                                103: [.19444, .44444, .01597, 0, .575],
                                104: [0, .69444, 0, 0, .63889],
                                105: [0, .69444, 0, 0, .31944],
                                106: [.19444, .69444, 0, 0, .35139],
                                107: [0, .69444, 0, 0, .60694],
                                108: [0, .69444, 0, 0, .31944],
                                109: [0, .44444, 0, 0, .95833],
                                110: [0, .44444, 0, 0, .63889],
                                111: [0, .44444, 0, 0, .575],
                                112: [.19444, .44444, 0, 0, .63889],
                                113: [.19444, .44444, 0, 0, .60694],
                                114: [0, .44444, 0, 0, .47361],
                                115: [0, .44444, 0, 0, .45361],
                                116: [0, .63492, 0, 0, .44722],
                                117: [0, .44444, 0, 0, .63889],
                                118: [0, .44444, .01597, 0, .60694],
                                119: [0, .44444, .01597, 0, .83055],
                                120: [0, .44444, 0, 0, .60694],
                                121: [.19444, .44444, .01597, 0, .60694],
                                122: [0, .44444, 0, 0, .51111],
                                123: [.25, .75, 0, 0, .575],
                                124: [.25, .75, 0, 0, .31944],
                                125: [.25, .75, 0, 0, .575],
                                126: [.35, .34444, 0, 0, .575],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .86853],
                                168: [0, .69444, 0, 0, .575],
                                172: [0, .44444, 0, 0, .76666],
                                176: [0, .69444, 0, 0, .86944],
                                177: [.13333, .63333, 0, 0, .89444],
                                184: [.17014, 0, 0, 0, .51111],
                                198: [0, .68611, 0, 0, 1.04166],
                                215: [.13333, .63333, 0, 0, .89444],
                                216: [.04861, .73472, 0, 0, .89444],
                                223: [0, .69444, 0, 0, .59722],
                                230: [0, .44444, 0, 0, .83055],
                                247: [.13333, .63333, 0, 0, .89444],
                                248: [.09722, .54167, 0, 0, .575],
                                305: [0, .44444, 0, 0, .31944],
                                338: [0, .68611, 0, 0, 1.16944],
                                339: [0, .44444, 0, 0, .89444],
                                567: [.19444, .44444, 0, 0, .35139],
                                710: [0, .69444, 0, 0, .575],
                                711: [0, .63194, 0, 0, .575],
                                713: [0, .59611, 0, 0, .575],
                                714: [0, .69444, 0, 0, .575],
                                715: [0, .69444, 0, 0, .575],
                                728: [0, .69444, 0, 0, .575],
                                729: [0, .69444, 0, 0, .31944],
                                730: [0, .69444, 0, 0, .86944],
                                732: [0, .69444, 0, 0, .575],
                                733: [0, .69444, 0, 0, .575],
                                915: [0, .68611, 0, 0, .69166],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, 0, 0, .89444],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, 0, 0, .76666],
                                928: [0, .68611, 0, 0, .9],
                                931: [0, .68611, 0, 0, .83055],
                                933: [0, .68611, 0, 0, .89444],
                                934: [0, .68611, 0, 0, .83055],
                                936: [0, .68611, 0, 0, .89444],
                                937: [0, .68611, 0, 0, .83055],
                                8211: [0, .44444, .03194, 0, .575],
                                8212: [0, .44444, .03194, 0, 1.14999],
                                8216: [0, .69444, 0, 0, .31944],
                                8217: [0, .69444, 0, 0, .31944],
                                8220: [0, .69444, 0, 0, .60278],
                                8221: [0, .69444, 0, 0, .60278],
                                8224: [.19444, .69444, 0, 0, .51111],
                                8225: [.19444, .69444, 0, 0, .51111],
                                8242: [0, .55556, 0, 0, .34444],
                                8407: [0, .72444, .15486, 0, .575],
                                8463: [0, .69444, 0, 0, .66759],
                                8465: [0, .69444, 0, 0, .83055],
                                8467: [0, .69444, 0, 0, .47361],
                                8472: [.19444, .44444, 0, 0, .74027],
                                8476: [0, .69444, 0, 0, .83055],
                                8501: [0, .69444, 0, 0, .70277],
                                8592: [-.10889, .39111, 0, 0, 1.14999],
                                8593: [.19444, .69444, 0, 0, .575],
                                8594: [-.10889, .39111, 0, 0, 1.14999],
                                8595: [.19444, .69444, 0, 0, .575],
                                8596: [-.10889, .39111, 0, 0, 1.14999],
                                8597: [.25, .75, 0, 0, .575],
                                8598: [.19444, .69444, 0, 0, 1.14999],
                                8599: [.19444, .69444, 0, 0, 1.14999],
                                8600: [.19444, .69444, 0, 0, 1.14999],
                                8601: [.19444, .69444, 0, 0, 1.14999],
                                8636: [-.10889, .39111, 0, 0, 1.14999],
                                8637: [-.10889, .39111, 0, 0, 1.14999],
                                8640: [-.10889, .39111, 0, 0, 1.14999],
                                8641: [-.10889, .39111, 0, 0, 1.14999],
                                8656: [-.10889, .39111, 0, 0, 1.14999],
                                8657: [.19444, .69444, 0, 0, .70277],
                                8658: [-.10889, .39111, 0, 0, 1.14999],
                                8659: [.19444, .69444, 0, 0, .70277],
                                8660: [-.10889, .39111, 0, 0, 1.14999],
                                8661: [.25, .75, 0, 0, .70277],
                                8704: [0, .69444, 0, 0, .63889],
                                8706: [0, .69444, .06389, 0, .62847],
                                8707: [0, .69444, 0, 0, .63889],
                                8709: [.05556, .75, 0, 0, .575],
                                8711: [0, .68611, 0, 0, .95833],
                                8712: [.08556, .58556, 0, 0, .76666],
                                8715: [.08556, .58556, 0, 0, .76666],
                                8722: [.13333, .63333, 0, 0, .89444],
                                8723: [.13333, .63333, 0, 0, .89444],
                                8725: [.25, .75, 0, 0, .575],
                                8726: [.25, .75, 0, 0, .575],
                                8727: [-.02778, .47222, 0, 0, .575],
                                8728: [-.02639, .47361, 0, 0, .575],
                                8729: [-.02639, .47361, 0, 0, .575],
                                8730: [.18, .82, 0, 0, .95833],
                                8733: [0, .44444, 0, 0, .89444],
                                8734: [0, .44444, 0, 0, 1.14999],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .31944],
                                8741: [.25, .75, 0, 0, .575],
                                8743: [0, .55556, 0, 0, .76666],
                                8744: [0, .55556, 0, 0, .76666],
                                8745: [0, .55556, 0, 0, .76666],
                                8746: [0, .55556, 0, 0, .76666],
                                8747: [.19444, .69444, .12778, 0, .56875],
                                8764: [-.10889, .39111, 0, 0, .89444],
                                8768: [.19444, .69444, 0, 0, .31944],
                                8771: [.00222, .50222, 0, 0, .89444],
                                8773: [.027, .638, 0, 0, .894],
                                8776: [.02444, .52444, 0, 0, .89444],
                                8781: [.00222, .50222, 0, 0, .89444],
                                8801: [.00222, .50222, 0, 0, .89444],
                                8804: [.19667, .69667, 0, 0, .89444],
                                8805: [.19667, .69667, 0, 0, .89444],
                                8810: [.08556, .58556, 0, 0, 1.14999],
                                8811: [.08556, .58556, 0, 0, 1.14999],
                                8826: [.08556, .58556, 0, 0, .89444],
                                8827: [.08556, .58556, 0, 0, .89444],
                                8834: [.08556, .58556, 0, 0, .89444],
                                8835: [.08556, .58556, 0, 0, .89444],
                                8838: [.19667, .69667, 0, 0, .89444],
                                8839: [.19667, .69667, 0, 0, .89444],
                                8846: [0, .55556, 0, 0, .76666],
                                8849: [.19667, .69667, 0, 0, .89444],
                                8850: [.19667, .69667, 0, 0, .89444],
                                8851: [0, .55556, 0, 0, .76666],
                                8852: [0, .55556, 0, 0, .76666],
                                8853: [.13333, .63333, 0, 0, .89444],
                                8854: [.13333, .63333, 0, 0, .89444],
                                8855: [.13333, .63333, 0, 0, .89444],
                                8856: [.13333, .63333, 0, 0, .89444],
                                8857: [.13333, .63333, 0, 0, .89444],
                                8866: [0, .69444, 0, 0, .70277],
                                8867: [0, .69444, 0, 0, .70277],
                                8868: [0, .69444, 0, 0, .89444],
                                8869: [0, .69444, 0, 0, .89444],
                                8900: [-.02639, .47361, 0, 0, .575],
                                8901: [-.02639, .47361, 0, 0, .31944],
                                8902: [-.02778, .47222, 0, 0, .575],
                                8968: [.25, .75, 0, 0, .51111],
                                8969: [.25, .75, 0, 0, .51111],
                                8970: [.25, .75, 0, 0, .51111],
                                8971: [.25, .75, 0, 0, .51111],
                                8994: [-.13889, .36111, 0, 0, 1.14999],
                                8995: [-.13889, .36111, 0, 0, 1.14999],
                                9651: [.19444, .69444, 0, 0, 1.02222],
                                9657: [-.02778, .47222, 0, 0, .575],
                                9661: [.19444, .69444, 0, 0, 1.02222],
                                9667: [-.02778, .47222, 0, 0, .575],
                                9711: [.19444, .69444, 0, 0, 1.14999],
                                9824: [.12963, .69444, 0, 0, .89444],
                                9825: [.12963, .69444, 0, 0, .89444],
                                9826: [.12963, .69444, 0, 0, .89444],
                                9827: [.12963, .69444, 0, 0, .89444],
                                9837: [0, .75, 0, 0, .44722],
                                9838: [.19444, .69444, 0, 0, .44722],
                                9839: [.19444, .69444, 0, 0, .44722],
                                10216: [.25, .75, 0, 0, .44722],
                                10217: [.25, .75, 0, 0, .44722],
                                10815: [0, .68611, 0, 0, .9],
                                10927: [.19667, .69667, 0, 0, .89444],
                                10928: [.19667, .69667, 0, 0, .89444],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Main-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .11417, 0, .38611],
                                34: [0, .69444, .07939, 0, .62055],
                                35: [.19444, .69444, .06833, 0, .94444],
                                37: [.05556, .75, .12861, 0, .94444],
                                38: [0, .69444, .08528, 0, .88555],
                                39: [0, .69444, .12945, 0, .35555],
                                40: [.25, .75, .15806, 0, .47333],
                                41: [.25, .75, .03306, 0, .47333],
                                42: [0, .75, .14333, 0, .59111],
                                43: [.10333, .60333, .03306, 0, .88555],
                                44: [.19444, .14722, 0, 0, .35555],
                                45: [0, .44444, .02611, 0, .41444],
                                46: [0, .14722, 0, 0, .35555],
                                47: [.25, .75, .15806, 0, .59111],
                                48: [0, .64444, .13167, 0, .59111],
                                49: [0, .64444, .13167, 0, .59111],
                                50: [0, .64444, .13167, 0, .59111],
                                51: [0, .64444, .13167, 0, .59111],
                                52: [.19444, .64444, .13167, 0, .59111],
                                53: [0, .64444, .13167, 0, .59111],
                                54: [0, .64444, .13167, 0, .59111],
                                55: [.19444, .64444, .13167, 0, .59111],
                                56: [0, .64444, .13167, 0, .59111],
                                57: [0, .64444, .13167, 0, .59111],
                                58: [0, .44444, .06695, 0, .35555],
                                59: [.19444, .44444, .06695, 0, .35555],
                                61: [-.10889, .39111, .06833, 0, .88555],
                                63: [0, .69444, .11472, 0, .59111],
                                64: [0, .69444, .09208, 0, .88555],
                                65: [0, .68611, 0, 0, .86555],
                                66: [0, .68611, .0992, 0, .81666],
                                67: [0, .68611, .14208, 0, .82666],
                                68: [0, .68611, .09062, 0, .87555],
                                69: [0, .68611, .11431, 0, .75666],
                                70: [0, .68611, .12903, 0, .72722],
                                71: [0, .68611, .07347, 0, .89527],
                                72: [0, .68611, .17208, 0, .8961],
                                73: [0, .68611, .15681, 0, .47166],
                                74: [0, .68611, .145, 0, .61055],
                                75: [0, .68611, .14208, 0, .89499],
                                76: [0, .68611, 0, 0, .69777],
                                77: [0, .68611, .17208, 0, 1.07277],
                                78: [0, .68611, .17208, 0, .8961],
                                79: [0, .68611, .09062, 0, .85499],
                                80: [0, .68611, .0992, 0, .78721],
                                81: [.19444, .68611, .09062, 0, .85499],
                                82: [0, .68611, .02559, 0, .85944],
                                83: [0, .68611, .11264, 0, .64999],
                                84: [0, .68611, .12903, 0, .7961],
                                85: [0, .68611, .17208, 0, .88083],
                                86: [0, .68611, .18625, 0, .86555],
                                87: [0, .68611, .18625, 0, 1.15999],
                                88: [0, .68611, .15681, 0, .86555],
                                89: [0, .68611, .19803, 0, .86555],
                                90: [0, .68611, .14208, 0, .70888],
                                91: [.25, .75, .1875, 0, .35611],
                                93: [.25, .75, .09972, 0, .35611],
                                94: [0, .69444, .06709, 0, .59111],
                                95: [.31, .13444, .09811, 0, .59111],
                                97: [0, .44444, .09426, 0, .59111],
                                98: [0, .69444, .07861, 0, .53222],
                                99: [0, .44444, .05222, 0, .53222],
                                100: [0, .69444, .10861, 0, .59111],
                                101: [0, .44444, .085, 0, .53222],
                                102: [.19444, .69444, .21778, 0, .4],
                                103: [.19444, .44444, .105, 0, .53222],
                                104: [0, .69444, .09426, 0, .59111],
                                105: [0, .69326, .11387, 0, .35555],
                                106: [.19444, .69326, .1672, 0, .35555],
                                107: [0, .69444, .11111, 0, .53222],
                                108: [0, .69444, .10861, 0, .29666],
                                109: [0, .44444, .09426, 0, .94444],
                                110: [0, .44444, .09426, 0, .64999],
                                111: [0, .44444, .07861, 0, .59111],
                                112: [.19444, .44444, .07861, 0, .59111],
                                113: [.19444, .44444, .105, 0, .53222],
                                114: [0, .44444, .11111, 0, .50167],
                                115: [0, .44444, .08167, 0, .48694],
                                116: [0, .63492, .09639, 0, .385],
                                117: [0, .44444, .09426, 0, .62055],
                                118: [0, .44444, .11111, 0, .53222],
                                119: [0, .44444, .11111, 0, .76777],
                                120: [0, .44444, .12583, 0, .56055],
                                121: [.19444, .44444, .105, 0, .56166],
                                122: [0, .44444, .13889, 0, .49055],
                                126: [.35, .34444, .11472, 0, .59111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, .11473, 0, .59111],
                                176: [0, .69444, 0, 0, .94888],
                                184: [.17014, 0, 0, 0, .53222],
                                198: [0, .68611, .11431, 0, 1.02277],
                                216: [.04861, .73472, .09062, 0, .88555],
                                223: [.19444, .69444, .09736, 0, .665],
                                230: [0, .44444, .085, 0, .82666],
                                248: [.09722, .54167, .09458, 0, .59111],
                                305: [0, .44444, .09426, 0, .35555],
                                338: [0, .68611, .11431, 0, 1.14054],
                                339: [0, .44444, .085, 0, .82666],
                                567: [.19444, .44444, .04611, 0, .385],
                                710: [0, .69444, .06709, 0, .59111],
                                711: [0, .63194, .08271, 0, .59111],
                                713: [0, .59444, .10444, 0, .59111],
                                714: [0, .69444, .08528, 0, .59111],
                                715: [0, .69444, 0, 0, .59111],
                                728: [0, .69444, .10333, 0, .59111],
                                729: [0, .69444, .12945, 0, .35555],
                                730: [0, .69444, 0, 0, .94888],
                                732: [0, .69444, .11472, 0, .59111],
                                733: [0, .69444, .11472, 0, .59111],
                                915: [0, .68611, .12903, 0, .69777],
                                916: [0, .68611, 0, 0, .94444],
                                920: [0, .68611, .09062, 0, .88555],
                                923: [0, .68611, 0, 0, .80666],
                                926: [0, .68611, .15092, 0, .76777],
                                928: [0, .68611, .17208, 0, .8961],
                                931: [0, .68611, .11431, 0, .82666],
                                933: [0, .68611, .10778, 0, .88555],
                                934: [0, .68611, .05632, 0, .82666],
                                936: [0, .68611, .10778, 0, .88555],
                                937: [0, .68611, .0992, 0, .82666],
                                8211: [0, .44444, .09811, 0, .59111],
                                8212: [0, .44444, .09811, 0, 1.18221],
                                8216: [0, .69444, .12945, 0, .35555],
                                8217: [0, .69444, .12945, 0, .35555],
                                8220: [0, .69444, .16772, 0, .62055],
                                8221: [0, .69444, .07939, 0, .62055]
                            },
                            "Main-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .12417, 0, .30667],
                                34: [0, .69444, .06961, 0, .51444],
                                35: [.19444, .69444, .06616, 0, .81777],
                                37: [.05556, .75, .13639, 0, .81777],
                                38: [0, .69444, .09694, 0, .76666],
                                39: [0, .69444, .12417, 0, .30667],
                                40: [.25, .75, .16194, 0, .40889],
                                41: [.25, .75, .03694, 0, .40889],
                                42: [0, .75, .14917, 0, .51111],
                                43: [.05667, .56167, .03694, 0, .76666],
                                44: [.19444, .10556, 0, 0, .30667],
                                45: [0, .43056, .02826, 0, .35778],
                                46: [0, .10556, 0, 0, .30667],
                                47: [.25, .75, .16194, 0, .51111],
                                48: [0, .64444, .13556, 0, .51111],
                                49: [0, .64444, .13556, 0, .51111],
                                50: [0, .64444, .13556, 0, .51111],
                                51: [0, .64444, .13556, 0, .51111],
                                52: [.19444, .64444, .13556, 0, .51111],
                                53: [0, .64444, .13556, 0, .51111],
                                54: [0, .64444, .13556, 0, .51111],
                                55: [.19444, .64444, .13556, 0, .51111],
                                56: [0, .64444, .13556, 0, .51111],
                                57: [0, .64444, .13556, 0, .51111],
                                58: [0, .43056, .0582, 0, .30667],
                                59: [.19444, .43056, .0582, 0, .30667],
                                61: [-.13313, .36687, .06616, 0, .76666],
                                63: [0, .69444, .1225, 0, .51111],
                                64: [0, .69444, .09597, 0, .76666],
                                65: [0, .68333, 0, 0, .74333],
                                66: [0, .68333, .10257, 0, .70389],
                                67: [0, .68333, .14528, 0, .71555],
                                68: [0, .68333, .09403, 0, .755],
                                69: [0, .68333, .12028, 0, .67833],
                                70: [0, .68333, .13305, 0, .65277],
                                71: [0, .68333, .08722, 0, .77361],
                                72: [0, .68333, .16389, 0, .74333],
                                73: [0, .68333, .15806, 0, .38555],
                                74: [0, .68333, .14028, 0, .525],
                                75: [0, .68333, .14528, 0, .76888],
                                76: [0, .68333, 0, 0, .62722],
                                77: [0, .68333, .16389, 0, .89666],
                                78: [0, .68333, .16389, 0, .74333],
                                79: [0, .68333, .09403, 0, .76666],
                                80: [0, .68333, .10257, 0, .67833],
                                81: [.19444, .68333, .09403, 0, .76666],
                                82: [0, .68333, .03868, 0, .72944],
                                83: [0, .68333, .11972, 0, .56222],
                                84: [0, .68333, .13305, 0, .71555],
                                85: [0, .68333, .16389, 0, .74333],
                                86: [0, .68333, .18361, 0, .74333],
                                87: [0, .68333, .18361, 0, .99888],
                                88: [0, .68333, .15806, 0, .74333],
                                89: [0, .68333, .19383, 0, .74333],
                                90: [0, .68333, .14528, 0, .61333],
                                91: [.25, .75, .1875, 0, .30667],
                                93: [.25, .75, .10528, 0, .30667],
                                94: [0, .69444, .06646, 0, .51111],
                                95: [.31, .12056, .09208, 0, .51111],
                                97: [0, .43056, .07671, 0, .51111],
                                98: [0, .69444, .06312, 0, .46],
                                99: [0, .43056, .05653, 0, .46],
                                100: [0, .69444, .10333, 0, .51111],
                                101: [0, .43056, .07514, 0, .46],
                                102: [.19444, .69444, .21194, 0, .30667],
                                103: [.19444, .43056, .08847, 0, .46],
                                104: [0, .69444, .07671, 0, .51111],
                                105: [0, .65536, .1019, 0, .30667],
                                106: [.19444, .65536, .14467, 0, .30667],
                                107: [0, .69444, .10764, 0, .46],
                                108: [0, .69444, .10333, 0, .25555],
                                109: [0, .43056, .07671, 0, .81777],
                                110: [0, .43056, .07671, 0, .56222],
                                111: [0, .43056, .06312, 0, .51111],
                                112: [.19444, .43056, .06312, 0, .51111],
                                113: [.19444, .43056, .08847, 0, .46],
                                114: [0, .43056, .10764, 0, .42166],
                                115: [0, .43056, .08208, 0, .40889],
                                116: [0, .61508, .09486, 0, .33222],
                                117: [0, .43056, .07671, 0, .53666],
                                118: [0, .43056, .10764, 0, .46],
                                119: [0, .43056, .10764, 0, .66444],
                                120: [0, .43056, .12042, 0, .46389],
                                121: [.19444, .43056, .08847, 0, .48555],
                                122: [0, .43056, .12292, 0, .40889],
                                126: [.35, .31786, .11585, 0, .51111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .66786, .10474, 0, .51111],
                                176: [0, .69444, 0, 0, .83129],
                                184: [.17014, 0, 0, 0, .46],
                                198: [0, .68333, .12028, 0, .88277],
                                216: [.04861, .73194, .09403, 0, .76666],
                                223: [.19444, .69444, .10514, 0, .53666],
                                230: [0, .43056, .07514, 0, .71555],
                                248: [.09722, .52778, .09194, 0, .51111],
                                338: [0, .68333, .12028, 0, .98499],
                                339: [0, .43056, .07514, 0, .71555],
                                710: [0, .69444, .06646, 0, .51111],
                                711: [0, .62847, .08295, 0, .51111],
                                713: [0, .56167, .10333, 0, .51111],
                                714: [0, .69444, .09694, 0, .51111],
                                715: [0, .69444, 0, 0, .51111],
                                728: [0, .69444, .10806, 0, .51111],
                                729: [0, .66786, .11752, 0, .30667],
                                730: [0, .69444, 0, 0, .83129],
                                732: [0, .66786, .11585, 0, .51111],
                                733: [0, .69444, .1225, 0, .51111],
                                915: [0, .68333, .13305, 0, .62722],
                                916: [0, .68333, 0, 0, .81777],
                                920: [0, .68333, .09403, 0, .76666],
                                923: [0, .68333, 0, 0, .69222],
                                926: [0, .68333, .15294, 0, .66444],
                                928: [0, .68333, .16389, 0, .74333],
                                931: [0, .68333, .12028, 0, .71555],
                                933: [0, .68333, .11111, 0, .76666],
                                934: [0, .68333, .05986, 0, .71555],
                                936: [0, .68333, .11111, 0, .76666],
                                937: [0, .68333, .10257, 0, .71555],
                                8211: [0, .43056, .09208, 0, .51111],
                                8212: [0, .43056, .09208, 0, 1.02222],
                                8216: [0, .69444, .12417, 0, .30667],
                                8217: [0, .69444, .12417, 0, .30667],
                                8220: [0, .69444, .1685, 0, .51444],
                                8221: [0, .69444, .06961, 0, .51444],
                                8463: [0, .68889, 0, 0, .54028]
                            },
                            "Main-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .27778],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .77778],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.19444, .10556, 0, 0, .27778],
                                45: [0, .43056, 0, 0, .33333],
                                46: [0, .10556, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .64444, 0, 0, .5],
                                49: [0, .64444, 0, 0, .5],
                                50: [0, .64444, 0, 0, .5],
                                51: [0, .64444, 0, 0, .5],
                                52: [0, .64444, 0, 0, .5],
                                53: [0, .64444, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [0, .64444, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [0, .64444, 0, 0, .5],
                                58: [0, .43056, 0, 0, .27778],
                                59: [.19444, .43056, 0, 0, .27778],
                                60: [.0391, .5391, 0, 0, .77778],
                                61: [-.13313, .36687, 0, 0, .77778],
                                62: [.0391, .5391, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .77778],
                                65: [0, .68333, 0, 0, .75],
                                66: [0, .68333, 0, 0, .70834],
                                67: [0, .68333, 0, 0, .72222],
                                68: [0, .68333, 0, 0, .76389],
                                69: [0, .68333, 0, 0, .68056],
                                70: [0, .68333, 0, 0, .65278],
                                71: [0, .68333, 0, 0, .78472],
                                72: [0, .68333, 0, 0, .75],
                                73: [0, .68333, 0, 0, .36111],
                                74: [0, .68333, 0, 0, .51389],
                                75: [0, .68333, 0, 0, .77778],
                                76: [0, .68333, 0, 0, .625],
                                77: [0, .68333, 0, 0, .91667],
                                78: [0, .68333, 0, 0, .75],
                                79: [0, .68333, 0, 0, .77778],
                                80: [0, .68333, 0, 0, .68056],
                                81: [.19444, .68333, 0, 0, .77778],
                                82: [0, .68333, 0, 0, .73611],
                                83: [0, .68333, 0, 0, .55556],
                                84: [0, .68333, 0, 0, .72222],
                                85: [0, .68333, 0, 0, .75],
                                86: [0, .68333, .01389, 0, .75],
                                87: [0, .68333, .01389, 0, 1.02778],
                                88: [0, .68333, 0, 0, .75],
                                89: [0, .68333, .025, 0, .75],
                                90: [0, .68333, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .27778],
                                92: [.25, .75, 0, 0, .5],
                                93: [.25, .75, 0, 0, .27778],
                                94: [0, .69444, 0, 0, .5],
                                95: [.31, .12056, .02778, 0, .5],
                                97: [0, .43056, 0, 0, .5],
                                98: [0, .69444, 0, 0, .55556],
                                99: [0, .43056, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .55556],
                                101: [0, .43056, 0, 0, .44445],
                                102: [0, .69444, .07778, 0, .30556],
                                103: [.19444, .43056, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .55556],
                                105: [0, .66786, 0, 0, .27778],
                                106: [.19444, .66786, 0, 0, .30556],
                                107: [0, .69444, 0, 0, .52778],
                                108: [0, .69444, 0, 0, .27778],
                                109: [0, .43056, 0, 0, .83334],
                                110: [0, .43056, 0, 0, .55556],
                                111: [0, .43056, 0, 0, .5],
                                112: [.19444, .43056, 0, 0, .55556],
                                113: [.19444, .43056, 0, 0, .52778],
                                114: [0, .43056, 0, 0, .39167],
                                115: [0, .43056, 0, 0, .39445],
                                116: [0, .61508, 0, 0, .38889],
                                117: [0, .43056, 0, 0, .55556],
                                118: [0, .43056, .01389, 0, .52778],
                                119: [0, .43056, .01389, 0, .72222],
                                120: [0, .43056, 0, 0, .52778],
                                121: [.19444, .43056, .01389, 0, .52778],
                                122: [0, .43056, 0, 0, .44445],
                                123: [.25, .75, 0, 0, .5],
                                124: [.25, .75, 0, 0, .27778],
                                125: [.25, .75, 0, 0, .5],
                                126: [.35, .31786, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .76909],
                                167: [.19444, .69444, 0, 0, .44445],
                                168: [0, .66786, 0, 0, .5],
                                172: [0, .43056, 0, 0, .66667],
                                176: [0, .69444, 0, 0, .75],
                                177: [.08333, .58333, 0, 0, .77778],
                                182: [.19444, .69444, 0, 0, .61111],
                                184: [.17014, 0, 0, 0, .44445],
                                198: [0, .68333, 0, 0, .90278],
                                215: [.08333, .58333, 0, 0, .77778],
                                216: [.04861, .73194, 0, 0, .77778],
                                223: [0, .69444, 0, 0, .5],
                                230: [0, .43056, 0, 0, .72222],
                                247: [.08333, .58333, 0, 0, .77778],
                                248: [.09722, .52778, 0, 0, .5],
                                305: [0, .43056, 0, 0, .27778],
                                338: [0, .68333, 0, 0, 1.01389],
                                339: [0, .43056, 0, 0, .77778],
                                567: [.19444, .43056, 0, 0, .30556],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .62847, 0, 0, .5],
                                713: [0, .56778, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .66786, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .75],
                                732: [0, .66786, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .68333, 0, 0, .625],
                                916: [0, .68333, 0, 0, .83334],
                                920: [0, .68333, 0, 0, .77778],
                                923: [0, .68333, 0, 0, .69445],
                                926: [0, .68333, 0, 0, .66667],
                                928: [0, .68333, 0, 0, .75],
                                931: [0, .68333, 0, 0, .72222],
                                933: [0, .68333, 0, 0, .77778],
                                934: [0, .68333, 0, 0, .72222],
                                936: [0, .68333, 0, 0, .77778],
                                937: [0, .68333, 0, 0, .72222],
                                8211: [0, .43056, .02778, 0, .5],
                                8212: [0, .43056, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5],
                                8224: [.19444, .69444, 0, 0, .44445],
                                8225: [.19444, .69444, 0, 0, .44445],
                                8230: [0, .123, 0, 0, 1.172],
                                8242: [0, .55556, 0, 0, .275],
                                8407: [0, .71444, .15382, 0, .5],
                                8463: [0, .68889, 0, 0, .54028],
                                8465: [0, .69444, 0, 0, .72222],
                                8467: [0, .69444, 0, .11111, .41667],
                                8472: [.19444, .43056, 0, .11111, .63646],
                                8476: [0, .69444, 0, 0, .72222],
                                8501: [0, .69444, 0, 0, .61111],
                                8592: [-.13313, .36687, 0, 0, 1],
                                8593: [.19444, .69444, 0, 0, .5],
                                8594: [-.13313, .36687, 0, 0, 1],
                                8595: [.19444, .69444, 0, 0, .5],
                                8596: [-.13313, .36687, 0, 0, 1],
                                8597: [.25, .75, 0, 0, .5],
                                8598: [.19444, .69444, 0, 0, 1],
                                8599: [.19444, .69444, 0, 0, 1],
                                8600: [.19444, .69444, 0, 0, 1],
                                8601: [.19444, .69444, 0, 0, 1],
                                8614: [.011, .511, 0, 0, 1],
                                8617: [.011, .511, 0, 0, 1.126],
                                8618: [.011, .511, 0, 0, 1.126],
                                8636: [-.13313, .36687, 0, 0, 1],
                                8637: [-.13313, .36687, 0, 0, 1],
                                8640: [-.13313, .36687, 0, 0, 1],
                                8641: [-.13313, .36687, 0, 0, 1],
                                8652: [.011, .671, 0, 0, 1],
                                8656: [-.13313, .36687, 0, 0, 1],
                                8657: [.19444, .69444, 0, 0, .61111],
                                8658: [-.13313, .36687, 0, 0, 1],
                                8659: [.19444, .69444, 0, 0, .61111],
                                8660: [-.13313, .36687, 0, 0, 1],
                                8661: [.25, .75, 0, 0, .61111],
                                8704: [0, .69444, 0, 0, .55556],
                                8706: [0, .69444, .05556, .08334, .5309],
                                8707: [0, .69444, 0, 0, .55556],
                                8709: [.05556, .75, 0, 0, .5],
                                8711: [0, .68333, 0, 0, .83334],
                                8712: [.0391, .5391, 0, 0, .66667],
                                8715: [.0391, .5391, 0, 0, .66667],
                                8722: [.08333, .58333, 0, 0, .77778],
                                8723: [.08333, .58333, 0, 0, .77778],
                                8725: [.25, .75, 0, 0, .5],
                                8726: [.25, .75, 0, 0, .5],
                                8727: [-.03472, .46528, 0, 0, .5],
                                8728: [-.05555, .44445, 0, 0, .5],
                                8729: [-.05555, .44445, 0, 0, .5],
                                8730: [.2, .8, 0, 0, .83334],
                                8733: [0, .43056, 0, 0, .77778],
                                8734: [0, .43056, 0, 0, 1],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .27778],
                                8741: [.25, .75, 0, 0, .5],
                                8743: [0, .55556, 0, 0, .66667],
                                8744: [0, .55556, 0, 0, .66667],
                                8745: [0, .55556, 0, 0, .66667],
                                8746: [0, .55556, 0, 0, .66667],
                                8747: [.19444, .69444, .11111, 0, .41667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8768: [.19444, .69444, 0, 0, .27778],
                                8771: [-.03625, .46375, 0, 0, .77778],
                                8773: [-.022, .589, 0, 0, .778],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8781: [-.03625, .46375, 0, 0, .77778],
                                8784: [-.133, .673, 0, 0, .778],
                                8801: [-.03625, .46375, 0, 0, .77778],
                                8804: [.13597, .63597, 0, 0, .77778],
                                8805: [.13597, .63597, 0, 0, .77778],
                                8810: [.0391, .5391, 0, 0, 1],
                                8811: [.0391, .5391, 0, 0, 1],
                                8826: [.0391, .5391, 0, 0, .77778],
                                8827: [.0391, .5391, 0, 0, .77778],
                                8834: [.0391, .5391, 0, 0, .77778],
                                8835: [.0391, .5391, 0, 0, .77778],
                                8838: [.13597, .63597, 0, 0, .77778],
                                8839: [.13597, .63597, 0, 0, .77778],
                                8846: [0, .55556, 0, 0, .66667],
                                8849: [.13597, .63597, 0, 0, .77778],
                                8850: [.13597, .63597, 0, 0, .77778],
                                8851: [0, .55556, 0, 0, .66667],
                                8852: [0, .55556, 0, 0, .66667],
                                8853: [.08333, .58333, 0, 0, .77778],
                                8854: [.08333, .58333, 0, 0, .77778],
                                8855: [.08333, .58333, 0, 0, .77778],
                                8856: [.08333, .58333, 0, 0, .77778],
                                8857: [.08333, .58333, 0, 0, .77778],
                                8866: [0, .69444, 0, 0, .61111],
                                8867: [0, .69444, 0, 0, .61111],
                                8868: [0, .69444, 0, 0, .77778],
                                8869: [0, .69444, 0, 0, .77778],
                                8872: [.249, .75, 0, 0, .867],
                                8900: [-.05555, .44445, 0, 0, .5],
                                8901: [-.05555, .44445, 0, 0, .27778],
                                8902: [-.03472, .46528, 0, 0, .5],
                                8904: [.005, .505, 0, 0, .9],
                                8942: [.03, .903, 0, 0, .278],
                                8943: [-.19, .313, 0, 0, 1.172],
                                8945: [-.1, .823, 0, 0, 1.282],
                                8968: [.25, .75, 0, 0, .44445],
                                8969: [.25, .75, 0, 0, .44445],
                                8970: [.25, .75, 0, 0, .44445],
                                8971: [.25, .75, 0, 0, .44445],
                                8994: [-.14236, .35764, 0, 0, 1],
                                8995: [-.14236, .35764, 0, 0, 1],
                                9136: [.244, .744, 0, 0, .412],
                                9137: [.244, .745, 0, 0, .412],
                                9651: [.19444, .69444, 0, 0, .88889],
                                9657: [-.03472, .46528, 0, 0, .5],
                                9661: [.19444, .69444, 0, 0, .88889],
                                9667: [-.03472, .46528, 0, 0, .5],
                                9711: [.19444, .69444, 0, 0, 1],
                                9824: [.12963, .69444, 0, 0, .77778],
                                9825: [.12963, .69444, 0, 0, .77778],
                                9826: [.12963, .69444, 0, 0, .77778],
                                9827: [.12963, .69444, 0, 0, .77778],
                                9837: [0, .75, 0, 0, .38889],
                                9838: [.19444, .69444, 0, 0, .38889],
                                9839: [.19444, .69444, 0, 0, .38889],
                                10216: [.25, .75, 0, 0, .38889],
                                10217: [.25, .75, 0, 0, .38889],
                                10222: [.244, .744, 0, 0, .412],
                                10223: [.244, .745, 0, 0, .412],
                                10229: [.011, .511, 0, 0, 1.609],
                                10230: [.011, .511, 0, 0, 1.638],
                                10231: [.011, .511, 0, 0, 1.859],
                                10232: [.024, .525, 0, 0, 1.609],
                                10233: [.024, .525, 0, 0, 1.638],
                                10234: [.024, .525, 0, 0, 1.858],
                                10236: [.011, .511, 0, 0, 1.638],
                                10815: [0, .68333, 0, 0, .75],
                                10927: [.13597, .63597, 0, 0, .77778],
                                10928: [.13597, .63597, 0, 0, .77778],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Math-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .44444, 0, 0, .575],
                                49: [0, .44444, 0, 0, .575],
                                50: [0, .44444, 0, 0, .575],
                                51: [.19444, .44444, 0, 0, .575],
                                52: [.19444, .44444, 0, 0, .575],
                                53: [.19444, .44444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [.19444, .44444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [.19444, .44444, 0, 0, .575],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, .04835, 0, .8664],
                                67: [0, .68611, .06979, 0, .81694],
                                68: [0, .68611, .03194, 0, .93812],
                                69: [0, .68611, .05451, 0, .81007],
                                70: [0, .68611, .15972, 0, .68889],
                                71: [0, .68611, 0, 0, .88673],
                                72: [0, .68611, .08229, 0, .98229],
                                73: [0, .68611, .07778, 0, .51111],
                                74: [0, .68611, .10069, 0, .63125],
                                75: [0, .68611, .06979, 0, .97118],
                                76: [0, .68611, 0, 0, .75555],
                                77: [0, .68611, .11424, 0, 1.14201],
                                78: [0, .68611, .11424, 0, .95034],
                                79: [0, .68611, .03194, 0, .83666],
                                80: [0, .68611, .15972, 0, .72309],
                                81: [.19444, .68611, 0, 0, .86861],
                                82: [0, .68611, .00421, 0, .87235],
                                83: [0, .68611, .05382, 0, .69271],
                                84: [0, .68611, .15972, 0, .63663],
                                85: [0, .68611, .11424, 0, .80027],
                                86: [0, .68611, .25555, 0, .67778],
                                87: [0, .68611, .15972, 0, 1.09305],
                                88: [0, .68611, .07778, 0, .94722],
                                89: [0, .68611, .25555, 0, .67458],
                                90: [0, .68611, .06979, 0, .77257],
                                97: [0, .44444, 0, 0, .63287],
                                98: [0, .69444, 0, 0, .52083],
                                99: [0, .44444, 0, 0, .51342],
                                100: [0, .69444, 0, 0, .60972],
                                101: [0, .44444, 0, 0, .55361],
                                102: [.19444, .69444, .11042, 0, .56806],
                                103: [.19444, .44444, .03704, 0, .5449],
                                104: [0, .69444, 0, 0, .66759],
                                105: [0, .69326, 0, 0, .4048],
                                106: [.19444, .69326, .0622, 0, .47083],
                                107: [0, .69444, .01852, 0, .6037],
                                108: [0, .69444, .0088, 0, .34815],
                                109: [0, .44444, 0, 0, 1.0324],
                                110: [0, .44444, 0, 0, .71296],
                                111: [0, .44444, 0, 0, .58472],
                                112: [.19444, .44444, 0, 0, .60092],
                                113: [.19444, .44444, .03704, 0, .54213],
                                114: [0, .44444, .03194, 0, .5287],
                                115: [0, .44444, 0, 0, .53125],
                                116: [0, .63492, 0, 0, .41528],
                                117: [0, .44444, 0, 0, .68102],
                                118: [0, .44444, .03704, 0, .56666],
                                119: [0, .44444, .02778, 0, .83148],
                                120: [0, .44444, 0, 0, .65903],
                                121: [.19444, .44444, .03704, 0, .59028],
                                122: [0, .44444, .04213, 0, .55509],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68611, .15972, 0, .65694],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, .03194, 0, .86722],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, .07458, 0, .84125],
                                928: [0, .68611, .08229, 0, .98229],
                                931: [0, .68611, .05451, 0, .88507],
                                933: [0, .68611, .15972, 0, .67083],
                                934: [0, .68611, 0, 0, .76666],
                                936: [0, .68611, .11653, 0, .71402],
                                937: [0, .68611, .04835, 0, .8789],
                                945: [0, .44444, 0, 0, .76064],
                                946: [.19444, .69444, .03403, 0, .65972],
                                947: [.19444, .44444, .06389, 0, .59003],
                                948: [0, .69444, .03819, 0, .52222],
                                949: [0, .44444, 0, 0, .52882],
                                950: [.19444, .69444, .06215, 0, .50833],
                                951: [.19444, .44444, .03704, 0, .6],
                                952: [0, .69444, .03194, 0, .5618],
                                953: [0, .44444, 0, 0, .41204],
                                954: [0, .44444, 0, 0, .66759],
                                955: [0, .69444, 0, 0, .67083],
                                956: [.19444, .44444, 0, 0, .70787],
                                957: [0, .44444, .06898, 0, .57685],
                                958: [.19444, .69444, .03021, 0, .50833],
                                959: [0, .44444, 0, 0, .58472],
                                960: [0, .44444, .03704, 0, .68241],
                                961: [.19444, .44444, 0, 0, .6118],
                                962: [.09722, .44444, .07917, 0, .42361],
                                963: [0, .44444, .03704, 0, .68588],
                                964: [0, .44444, .13472, 0, .52083],
                                965: [0, .44444, .03704, 0, .63055],
                                966: [.19444, .44444, 0, 0, .74722],
                                967: [.19444, .44444, 0, 0, .71805],
                                968: [.19444, .69444, .03704, 0, .75833],
                                969: [0, .44444, .03704, 0, .71782],
                                977: [0, .69444, 0, 0, .69155],
                                981: [.19444, .69444, 0, 0, .7125],
                                982: [0, .44444, .03194, 0, .975],
                                1009: [.19444, .44444, 0, 0, .6118],
                                1013: [0, .44444, 0, 0, .48333],
                                57649: [0, .44444, 0, 0, .39352],
                                57911: [.19444, .44444, 0, 0, .43889]
                            },
                            "Math-Italic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .43056, 0, 0, .5],
                                49: [0, .43056, 0, 0, .5],
                                50: [0, .43056, 0, 0, .5],
                                51: [.19444, .43056, 0, 0, .5],
                                52: [.19444, .43056, 0, 0, .5],
                                53: [.19444, .43056, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [.19444, .43056, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [.19444, .43056, 0, 0, .5],
                                65: [0, .68333, 0, .13889, .75],
                                66: [0, .68333, .05017, .08334, .75851],
                                67: [0, .68333, .07153, .08334, .71472],
                                68: [0, .68333, .02778, .05556, .82792],
                                69: [0, .68333, .05764, .08334, .7382],
                                70: [0, .68333, .13889, .08334, .64306],
                                71: [0, .68333, 0, .08334, .78625],
                                72: [0, .68333, .08125, .05556, .83125],
                                73: [0, .68333, .07847, .11111, .43958],
                                74: [0, .68333, .09618, .16667, .55451],
                                75: [0, .68333, .07153, .05556, .84931],
                                76: [0, .68333, 0, .02778, .68056],
                                77: [0, .68333, .10903, .08334, .97014],
                                78: [0, .68333, .10903, .08334, .80347],
                                79: [0, .68333, .02778, .08334, .76278],
                                80: [0, .68333, .13889, .08334, .64201],
                                81: [.19444, .68333, 0, .08334, .79056],
                                82: [0, .68333, .00773, .08334, .75929],
                                83: [0, .68333, .05764, .08334, .6132],
                                84: [0, .68333, .13889, .08334, .58438],
                                85: [0, .68333, .10903, .02778, .68278],
                                86: [0, .68333, .22222, 0, .58333],
                                87: [0, .68333, .13889, 0, .94445],
                                88: [0, .68333, .07847, .08334, .82847],
                                89: [0, .68333, .22222, 0, .58056],
                                90: [0, .68333, .07153, .08334, .68264],
                                97: [0, .43056, 0, 0, .52859],
                                98: [0, .69444, 0, 0, .42917],
                                99: [0, .43056, 0, .05556, .43276],
                                100: [0, .69444, 0, .16667, .52049],
                                101: [0, .43056, 0, .05556, .46563],
                                102: [.19444, .69444, .10764, .16667, .48959],
                                103: [.19444, .43056, .03588, .02778, .47697],
                                104: [0, .69444, 0, 0, .57616],
                                105: [0, .65952, 0, 0, .34451],
                                106: [.19444, .65952, .05724, 0, .41181],
                                107: [0, .69444, .03148, 0, .5206],
                                108: [0, .69444, .01968, .08334, .29838],
                                109: [0, .43056, 0, 0, .87801],
                                110: [0, .43056, 0, 0, .60023],
                                111: [0, .43056, 0, .05556, .48472],
                                112: [.19444, .43056, 0, .08334, .50313],
                                113: [.19444, .43056, .03588, .08334, .44641],
                                114: [0, .43056, .02778, .05556, .45116],
                                115: [0, .43056, 0, .05556, .46875],
                                116: [0, .61508, 0, .08334, .36111],
                                117: [0, .43056, 0, .02778, .57246],
                                118: [0, .43056, .03588, .02778, .48472],
                                119: [0, .43056, .02691, .08334, .71592],
                                120: [0, .43056, 0, .02778, .57153],
                                121: [.19444, .43056, .03588, .05556, .49028],
                                122: [0, .43056, .04398, .05556, .46505],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68333, .13889, .08334, .61528],
                                916: [0, .68333, 0, .16667, .83334],
                                920: [0, .68333, .02778, .08334, .76278],
                                923: [0, .68333, 0, .16667, .69445],
                                926: [0, .68333, .07569, .08334, .74236],
                                928: [0, .68333, .08125, .05556, .83125],
                                931: [0, .68333, .05764, .08334, .77986],
                                933: [0, .68333, .13889, .05556, .58333],
                                934: [0, .68333, 0, .08334, .66667],
                                936: [0, .68333, .11, .05556, .61222],
                                937: [0, .68333, .05017, .08334, .7724],
                                945: [0, .43056, .0037, .02778, .6397],
                                946: [.19444, .69444, .05278, .08334, .56563],
                                947: [.19444, .43056, .05556, 0, .51773],
                                948: [0, .69444, .03785, .05556, .44444],
                                949: [0, .43056, 0, .08334, .46632],
                                950: [.19444, .69444, .07378, .08334, .4375],
                                951: [.19444, .43056, .03588, .05556, .49653],
                                952: [0, .69444, .02778, .08334, .46944],
                                953: [0, .43056, 0, .05556, .35394],
                                954: [0, .43056, 0, 0, .57616],
                                955: [0, .69444, 0, 0, .58334],
                                956: [.19444, .43056, 0, .02778, .60255],
                                957: [0, .43056, .06366, .02778, .49398],
                                958: [.19444, .69444, .04601, .11111, .4375],
                                959: [0, .43056, 0, .05556, .48472],
                                960: [0, .43056, .03588, 0, .57003],
                                961: [.19444, .43056, 0, .08334, .51702],
                                962: [.09722, .43056, .07986, .08334, .36285],
                                963: [0, .43056, .03588, 0, .57141],
                                964: [0, .43056, .1132, .02778, .43715],
                                965: [0, .43056, .03588, .02778, .54028],
                                966: [.19444, .43056, 0, .08334, .65417],
                                967: [.19444, .43056, 0, .05556, .62569],
                                968: [.19444, .69444, .03588, .11111, .65139],
                                969: [0, .43056, .03588, 0, .62245],
                                977: [0, .69444, 0, .08334, .59144],
                                981: [.19444, .69444, 0, .08334, .59583],
                                982: [0, .43056, .02778, 0, .82813],
                                1009: [.19444, .43056, 0, .08334, .51702],
                                1013: [0, .43056, 0, .05556, .4059],
                                57649: [0, .43056, 0, .02778, .32246],
                                57911: [.19444, .43056, 0, .08334, .38403]
                            },
                            "SansSerif-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .36667],
                                34: [0, .69444, 0, 0, .55834],
                                35: [.19444, .69444, 0, 0, .91667],
                                36: [.05556, .75, 0, 0, .55],
                                37: [.05556, .75, 0, 0, 1.02912],
                                38: [0, .69444, 0, 0, .83056],
                                39: [0, .69444, 0, 0, .30556],
                                40: [.25, .75, 0, 0, .42778],
                                41: [.25, .75, 0, 0, .42778],
                                42: [0, .75, 0, 0, .55],
                                43: [.11667, .61667, 0, 0, .85556],
                                44: [.10556, .13056, 0, 0, .30556],
                                45: [0, .45833, 0, 0, .36667],
                                46: [0, .13056, 0, 0, .30556],
                                47: [.25, .75, 0, 0, .55],
                                48: [0, .69444, 0, 0, .55],
                                49: [0, .69444, 0, 0, .55],
                                50: [0, .69444, 0, 0, .55],
                                51: [0, .69444, 0, 0, .55],
                                52: [0, .69444, 0, 0, .55],
                                53: [0, .69444, 0, 0, .55],
                                54: [0, .69444, 0, 0, .55],
                                55: [0, .69444, 0, 0, .55],
                                56: [0, .69444, 0, 0, .55],
                                57: [0, .69444, 0, 0, .55],
                                58: [0, .45833, 0, 0, .30556],
                                59: [.10556, .45833, 0, 0, .30556],
                                61: [-.09375, .40625, 0, 0, .85556],
                                63: [0, .69444, 0, 0, .51945],
                                64: [0, .69444, 0, 0, .73334],
                                65: [0, .69444, 0, 0, .73334],
                                66: [0, .69444, 0, 0, .73334],
                                67: [0, .69444, 0, 0, .70278],
                                68: [0, .69444, 0, 0, .79445],
                                69: [0, .69444, 0, 0, .64167],
                                70: [0, .69444, 0, 0, .61111],
                                71: [0, .69444, 0, 0, .73334],
                                72: [0, .69444, 0, 0, .79445],
                                73: [0, .69444, 0, 0, .33056],
                                74: [0, .69444, 0, 0, .51945],
                                75: [0, .69444, 0, 0, .76389],
                                76: [0, .69444, 0, 0, .58056],
                                77: [0, .69444, 0, 0, .97778],
                                78: [0, .69444, 0, 0, .79445],
                                79: [0, .69444, 0, 0, .79445],
                                80: [0, .69444, 0, 0, .70278],
                                81: [.10556, .69444, 0, 0, .79445],
                                82: [0, .69444, 0, 0, .70278],
                                83: [0, .69444, 0, 0, .61111],
                                84: [0, .69444, 0, 0, .73334],
                                85: [0, .69444, 0, 0, .76389],
                                86: [0, .69444, .01528, 0, .73334],
                                87: [0, .69444, .01528, 0, 1.03889],
                                88: [0, .69444, 0, 0, .73334],
                                89: [0, .69444, .0275, 0, .73334],
                                90: [0, .69444, 0, 0, .67223],
                                91: [.25, .75, 0, 0, .34306],
                                93: [.25, .75, 0, 0, .34306],
                                94: [0, .69444, 0, 0, .55],
                                95: [.35, .10833, .03056, 0, .55],
                                97: [0, .45833, 0, 0, .525],
                                98: [0, .69444, 0, 0, .56111],
                                99: [0, .45833, 0, 0, .48889],
                                100: [0, .69444, 0, 0, .56111],
                                101: [0, .45833, 0, 0, .51111],
                                102: [0, .69444, .07639, 0, .33611],
                                103: [.19444, .45833, .01528, 0, .55],
                                104: [0, .69444, 0, 0, .56111],
                                105: [0, .69444, 0, 0, .25556],
                                106: [.19444, .69444, 0, 0, .28611],
                                107: [0, .69444, 0, 0, .53056],
                                108: [0, .69444, 0, 0, .25556],
                                109: [0, .45833, 0, 0, .86667],
                                110: [0, .45833, 0, 0, .56111],
                                111: [0, .45833, 0, 0, .55],
                                112: [.19444, .45833, 0, 0, .56111],
                                113: [.19444, .45833, 0, 0, .56111],
                                114: [0, .45833, .01528, 0, .37222],
                                115: [0, .45833, 0, 0, .42167],
                                116: [0, .58929, 0, 0, .40417],
                                117: [0, .45833, 0, 0, .56111],
                                118: [0, .45833, .01528, 0, .5],
                                119: [0, .45833, .01528, 0, .74445],
                                120: [0, .45833, 0, 0, .5],
                                121: [.19444, .45833, .01528, 0, .5],
                                122: [0, .45833, 0, 0, .47639],
                                126: [.35, .34444, 0, 0, .55],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, 0, 0, .55],
                                176: [0, .69444, 0, 0, .73334],
                                180: [0, .69444, 0, 0, .55],
                                184: [.17014, 0, 0, 0, .48889],
                                305: [0, .45833, 0, 0, .25556],
                                567: [.19444, .45833, 0, 0, .28611],
                                710: [0, .69444, 0, 0, .55],
                                711: [0, .63542, 0, 0, .55],
                                713: [0, .63778, 0, 0, .55],
                                728: [0, .69444, 0, 0, .55],
                                729: [0, .69444, 0, 0, .30556],
                                730: [0, .69444, 0, 0, .73334],
                                732: [0, .69444, 0, 0, .55],
                                733: [0, .69444, 0, 0, .55],
                                915: [0, .69444, 0, 0, .58056],
                                916: [0, .69444, 0, 0, .91667],
                                920: [0, .69444, 0, 0, .85556],
                                923: [0, .69444, 0, 0, .67223],
                                926: [0, .69444, 0, 0, .73334],
                                928: [0, .69444, 0, 0, .79445],
                                931: [0, .69444, 0, 0, .79445],
                                933: [0, .69444, 0, 0, .85556],
                                934: [0, .69444, 0, 0, .79445],
                                936: [0, .69444, 0, 0, .85556],
                                937: [0, .69444, 0, 0, .79445],
                                8211: [0, .45833, .03056, 0, .55],
                                8212: [0, .45833, .03056, 0, 1.10001],
                                8216: [0, .69444, 0, 0, .30556],
                                8217: [0, .69444, 0, 0, .30556],
                                8220: [0, .69444, 0, 0, .55834],
                                8221: [0, .69444, 0, 0, .55834]
                            },
                            "SansSerif-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .05733, 0, .31945],
                                34: [0, .69444, .00316, 0, .5],
                                35: [.19444, .69444, .05087, 0, .83334],
                                36: [.05556, .75, .11156, 0, .5],
                                37: [.05556, .75, .03126, 0, .83334],
                                38: [0, .69444, .03058, 0, .75834],
                                39: [0, .69444, .07816, 0, .27778],
                                40: [.25, .75, .13164, 0, .38889],
                                41: [.25, .75, .02536, 0, .38889],
                                42: [0, .75, .11775, 0, .5],
                                43: [.08333, .58333, .02536, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, .01946, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, .13164, 0, .5],
                                48: [0, .65556, .11156, 0, .5],
                                49: [0, .65556, .11156, 0, .5],
                                50: [0, .65556, .11156, 0, .5],
                                51: [0, .65556, .11156, 0, .5],
                                52: [0, .65556, .11156, 0, .5],
                                53: [0, .65556, .11156, 0, .5],
                                54: [0, .65556, .11156, 0, .5],
                                55: [0, .65556, .11156, 0, .5],
                                56: [0, .65556, .11156, 0, .5],
                                57: [0, .65556, .11156, 0, .5],
                                58: [0, .44444, .02502, 0, .27778],
                                59: [.125, .44444, .02502, 0, .27778],
                                61: [-.13, .37, .05087, 0, .77778],
                                63: [0, .69444, .11809, 0, .47222],
                                64: [0, .69444, .07555, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, .08293, 0, .66667],
                                67: [0, .69444, .11983, 0, .63889],
                                68: [0, .69444, .07555, 0, .72223],
                                69: [0, .69444, .11983, 0, .59722],
                                70: [0, .69444, .13372, 0, .56945],
                                71: [0, .69444, .11983, 0, .66667],
                                72: [0, .69444, .08094, 0, .70834],
                                73: [0, .69444, .13372, 0, .27778],
                                74: [0, .69444, .08094, 0, .47222],
                                75: [0, .69444, .11983, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, .08094, 0, .875],
                                78: [0, .69444, .08094, 0, .70834],
                                79: [0, .69444, .07555, 0, .73611],
                                80: [0, .69444, .08293, 0, .63889],
                                81: [.125, .69444, .07555, 0, .73611],
                                82: [0, .69444, .08293, 0, .64584],
                                83: [0, .69444, .09205, 0, .55556],
                                84: [0, .69444, .13372, 0, .68056],
                                85: [0, .69444, .08094, 0, .6875],
                                86: [0, .69444, .1615, 0, .66667],
                                87: [0, .69444, .1615, 0, .94445],
                                88: [0, .69444, .13372, 0, .66667],
                                89: [0, .69444, .17261, 0, .66667],
                                90: [0, .69444, .11983, 0, .61111],
                                91: [.25, .75, .15942, 0, .28889],
                                93: [.25, .75, .08719, 0, .28889],
                                94: [0, .69444, .0799, 0, .5],
                                95: [.35, .09444, .08616, 0, .5],
                                97: [0, .44444, .00981, 0, .48056],
                                98: [0, .69444, .03057, 0, .51667],
                                99: [0, .44444, .08336, 0, .44445],
                                100: [0, .69444, .09483, 0, .51667],
                                101: [0, .44444, .06778, 0, .44445],
                                102: [0, .69444, .21705, 0, .30556],
                                103: [.19444, .44444, .10836, 0, .5],
                                104: [0, .69444, .01778, 0, .51667],
                                105: [0, .67937, .09718, 0, .23889],
                                106: [.19444, .67937, .09162, 0, .26667],
                                107: [0, .69444, .08336, 0, .48889],
                                108: [0, .69444, .09483, 0, .23889],
                                109: [0, .44444, .01778, 0, .79445],
                                110: [0, .44444, .01778, 0, .51667],
                                111: [0, .44444, .06613, 0, .5],
                                112: [.19444, .44444, .0389, 0, .51667],
                                113: [.19444, .44444, .04169, 0, .51667],
                                114: [0, .44444, .10836, 0, .34167],
                                115: [0, .44444, .0778, 0, .38333],
                                116: [0, .57143, .07225, 0, .36111],
                                117: [0, .44444, .04169, 0, .51667],
                                118: [0, .44444, .10836, 0, .46111],
                                119: [0, .44444, .10836, 0, .68334],
                                120: [0, .44444, .09169, 0, .46111],
                                121: [.19444, .44444, .10836, 0, .46111],
                                122: [0, .44444, .08752, 0, .43472],
                                126: [.35, .32659, .08826, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, .06385, 0, .5],
                                176: [0, .69444, 0, 0, .73752],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, .04169, 0, .23889],
                                567: [.19444, .44444, .04169, 0, .26667],
                                710: [0, .69444, .0799, 0, .5],
                                711: [0, .63194, .08432, 0, .5],
                                713: [0, .60889, .08776, 0, .5],
                                714: [0, .69444, .09205, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, .09483, 0, .5],
                                729: [0, .67937, .07774, 0, .27778],
                                730: [0, .69444, 0, 0, .73752],
                                732: [0, .67659, .08826, 0, .5],
                                733: [0, .69444, .09205, 0, .5],
                                915: [0, .69444, .13372, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, .07555, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, .12816, 0, .66667],
                                928: [0, .69444, .08094, 0, .70834],
                                931: [0, .69444, .11983, 0, .72222],
                                933: [0, .69444, .09031, 0, .77778],
                                934: [0, .69444, .04603, 0, .72222],
                                936: [0, .69444, .09031, 0, .77778],
                                937: [0, .69444, .08293, 0, .72222],
                                8211: [0, .44444, .08616, 0, .5],
                                8212: [0, .44444, .08616, 0, 1],
                                8216: [0, .69444, .07816, 0, .27778],
                                8217: [0, .69444, .07816, 0, .27778],
                                8220: [0, .69444, .14205, 0, .5],
                                8221: [0, .69444, .00316, 0, .5]
                            },
                            "SansSerif-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .31945],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .75834],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, 0, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .65556, 0, 0, .5],
                                49: [0, .65556, 0, 0, .5],
                                50: [0, .65556, 0, 0, .5],
                                51: [0, .65556, 0, 0, .5],
                                52: [0, .65556, 0, 0, .5],
                                53: [0, .65556, 0, 0, .5],
                                54: [0, .65556, 0, 0, .5],
                                55: [0, .65556, 0, 0, .5],
                                56: [0, .65556, 0, 0, .5],
                                57: [0, .65556, 0, 0, .5],
                                58: [0, .44444, 0, 0, .27778],
                                59: [.125, .44444, 0, 0, .27778],
                                61: [-.13, .37, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, 0, 0, .66667],
                                67: [0, .69444, 0, 0, .63889],
                                68: [0, .69444, 0, 0, .72223],
                                69: [0, .69444, 0, 0, .59722],
                                70: [0, .69444, 0, 0, .56945],
                                71: [0, .69444, 0, 0, .66667],
                                72: [0, .69444, 0, 0, .70834],
                                73: [0, .69444, 0, 0, .27778],
                                74: [0, .69444, 0, 0, .47222],
                                75: [0, .69444, 0, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, 0, 0, .875],
                                78: [0, .69444, 0, 0, .70834],
                                79: [0, .69444, 0, 0, .73611],
                                80: [0, .69444, 0, 0, .63889],
                                81: [.125, .69444, 0, 0, .73611],
                                82: [0, .69444, 0, 0, .64584],
                                83: [0, .69444, 0, 0, .55556],
                                84: [0, .69444, 0, 0, .68056],
                                85: [0, .69444, 0, 0, .6875],
                                86: [0, .69444, .01389, 0, .66667],
                                87: [0, .69444, .01389, 0, .94445],
                                88: [0, .69444, 0, 0, .66667],
                                89: [0, .69444, .025, 0, .66667],
                                90: [0, .69444, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .28889],
                                93: [.25, .75, 0, 0, .28889],
                                94: [0, .69444, 0, 0, .5],
                                95: [.35, .09444, .02778, 0, .5],
                                97: [0, .44444, 0, 0, .48056],
                                98: [0, .69444, 0, 0, .51667],
                                99: [0, .44444, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .51667],
                                101: [0, .44444, 0, 0, .44445],
                                102: [0, .69444, .06944, 0, .30556],
                                103: [.19444, .44444, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .51667],
                                105: [0, .67937, 0, 0, .23889],
                                106: [.19444, .67937, 0, 0, .26667],
                                107: [0, .69444, 0, 0, .48889],
                                108: [0, .69444, 0, 0, .23889],
                                109: [0, .44444, 0, 0, .79445],
                                110: [0, .44444, 0, 0, .51667],
                                111: [0, .44444, 0, 0, .5],
                                112: [.19444, .44444, 0, 0, .51667],
                                113: [.19444, .44444, 0, 0, .51667],
                                114: [0, .44444, .01389, 0, .34167],
                                115: [0, .44444, 0, 0, .38333],
                                116: [0, .57143, 0, 0, .36111],
                                117: [0, .44444, 0, 0, .51667],
                                118: [0, .44444, .01389, 0, .46111],
                                119: [0, .44444, .01389, 0, .68334],
                                120: [0, .44444, 0, 0, .46111],
                                121: [.19444, .44444, .01389, 0, .46111],
                                122: [0, .44444, 0, 0, .43472],
                                126: [.35, .32659, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, 0, 0, .5],
                                176: [0, .69444, 0, 0, .66667],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, 0, 0, .23889],
                                567: [.19444, .44444, 0, 0, .26667],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .63194, 0, 0, .5],
                                713: [0, .60889, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .67937, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .66667],
                                732: [0, .67659, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .69444, 0, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, 0, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, 0, 0, .66667],
                                928: [0, .69444, 0, 0, .70834],
                                931: [0, .69444, 0, 0, .72222],
                                933: [0, .69444, 0, 0, .77778],
                                934: [0, .69444, 0, 0, .72222],
                                936: [0, .69444, 0, 0, .77778],
                                937: [0, .69444, 0, 0, .72222],
                                8211: [0, .44444, .02778, 0, .5],
                                8212: [0, .44444, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5]
                            },
                            "Script-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .7, .22925, 0, .80253],
                                66: [0, .7, .04087, 0, .90757],
                                67: [0, .7, .1689, 0, .66619],
                                68: [0, .7, .09371, 0, .77443],
                                69: [0, .7, .18583, 0, .56162],
                                70: [0, .7, .13634, 0, .89544],
                                71: [0, .7, .17322, 0, .60961],
                                72: [0, .7, .29694, 0, .96919],
                                73: [0, .7, .19189, 0, .80907],
                                74: [.27778, .7, .19189, 0, 1.05159],
                                75: [0, .7, .31259, 0, .91364],
                                76: [0, .7, .19189, 0, .87373],
                                77: [0, .7, .15981, 0, 1.08031],
                                78: [0, .7, .3525, 0, .9015],
                                79: [0, .7, .08078, 0, .73787],
                                80: [0, .7, .08078, 0, 1.01262],
                                81: [0, .7, .03305, 0, .88282],
                                82: [0, .7, .06259, 0, .85],
                                83: [0, .7, .19189, 0, .86767],
                                84: [0, .7, .29087, 0, .74697],
                                85: [0, .7, .25815, 0, .79996],
                                86: [0, .7, .27523, 0, .62204],
                                87: [0, .7, .27523, 0, .80532],
                                88: [0, .7, .26006, 0, .94445],
                                89: [0, .7, .2939, 0, .70961],
                                90: [0, .7, .24037, 0, .8212],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Size1-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.35001, .85, 0, 0, .45834],
                                41: [.35001, .85, 0, 0, .45834],
                                47: [.35001, .85, 0, 0, .57778],
                                91: [.35001, .85, 0, 0, .41667],
                                92: [.35001, .85, 0, 0, .57778],
                                93: [.35001, .85, 0, 0, .41667],
                                123: [.35001, .85, 0, 0, .58334],
                                125: [.35001, .85, 0, 0, .58334],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .72222, 0, 0, .55556],
                                732: [0, .72222, 0, 0, .55556],
                                770: [0, .72222, 0, 0, .55556],
                                771: [0, .72222, 0, 0, .55556],
                                8214: [-99e-5, .601, 0, 0, .77778],
                                8593: [1e-5, .6, 0, 0, .66667],
                                8595: [1e-5, .6, 0, 0, .66667],
                                8657: [1e-5, .6, 0, 0, .77778],
                                8659: [1e-5, .6, 0, 0, .77778],
                                8719: [.25001, .75, 0, 0, .94445],
                                8720: [.25001, .75, 0, 0, .94445],
                                8721: [.25001, .75, 0, 0, 1.05556],
                                8730: [.35001, .85, 0, 0, 1],
                                8739: [-.00599, .606, 0, 0, .33333],
                                8741: [-.00599, .606, 0, 0, .55556],
                                8747: [.30612, .805, .19445, 0, .47222],
                                8748: [.306, .805, .19445, 0, .47222],
                                8749: [.306, .805, .19445, 0, .47222],
                                8750: [.30612, .805, .19445, 0, .47222],
                                8896: [.25001, .75, 0, 0, .83334],
                                8897: [.25001, .75, 0, 0, .83334],
                                8898: [.25001, .75, 0, 0, .83334],
                                8899: [.25001, .75, 0, 0, .83334],
                                8968: [.35001, .85, 0, 0, .47222],
                                8969: [.35001, .85, 0, 0, .47222],
                                8970: [.35001, .85, 0, 0, .47222],
                                8971: [.35001, .85, 0, 0, .47222],
                                9168: [-99e-5, .601, 0, 0, .66667],
                                10216: [.35001, .85, 0, 0, .47222],
                                10217: [.35001, .85, 0, 0, .47222],
                                10752: [.25001, .75, 0, 0, 1.11111],
                                10753: [.25001, .75, 0, 0, 1.11111],
                                10754: [.25001, .75, 0, 0, 1.11111],
                                10756: [.25001, .75, 0, 0, .83334],
                                10758: [.25001, .75, 0, 0, .83334]
                            },
                            "Size2-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.65002, 1.15, 0, 0, .59722],
                                41: [.65002, 1.15, 0, 0, .59722],
                                47: [.65002, 1.15, 0, 0, .81111],
                                91: [.65002, 1.15, 0, 0, .47222],
                                92: [.65002, 1.15, 0, 0, .81111],
                                93: [.65002, 1.15, 0, 0, .47222],
                                123: [.65002, 1.15, 0, 0, .66667],
                                125: [.65002, 1.15, 0, 0, .66667],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1],
                                732: [0, .75, 0, 0, 1],
                                770: [0, .75, 0, 0, 1],
                                771: [0, .75, 0, 0, 1],
                                8719: [.55001, 1.05, 0, 0, 1.27778],
                                8720: [.55001, 1.05, 0, 0, 1.27778],
                                8721: [.55001, 1.05, 0, 0, 1.44445],
                                8730: [.65002, 1.15, 0, 0, 1],
                                8747: [.86225, 1.36, .44445, 0, .55556],
                                8748: [.862, 1.36, .44445, 0, .55556],
                                8749: [.862, 1.36, .44445, 0, .55556],
                                8750: [.86225, 1.36, .44445, 0, .55556],
                                8896: [.55001, 1.05, 0, 0, 1.11111],
                                8897: [.55001, 1.05, 0, 0, 1.11111],
                                8898: [.55001, 1.05, 0, 0, 1.11111],
                                8899: [.55001, 1.05, 0, 0, 1.11111],
                                8968: [.65002, 1.15, 0, 0, .52778],
                                8969: [.65002, 1.15, 0, 0, .52778],
                                8970: [.65002, 1.15, 0, 0, .52778],
                                8971: [.65002, 1.15, 0, 0, .52778],
                                10216: [.65002, 1.15, 0, 0, .61111],
                                10217: [.65002, 1.15, 0, 0, .61111],
                                10752: [.55001, 1.05, 0, 0, 1.51112],
                                10753: [.55001, 1.05, 0, 0, 1.51112],
                                10754: [.55001, 1.05, 0, 0, 1.51112],
                                10756: [.55001, 1.05, 0, 0, 1.11111],
                                10758: [.55001, 1.05, 0, 0, 1.11111]
                            },
                            "Size3-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.95003, 1.45, 0, 0, .73611],
                                41: [.95003, 1.45, 0, 0, .73611],
                                47: [.95003, 1.45, 0, 0, 1.04445],
                                91: [.95003, 1.45, 0, 0, .52778],
                                92: [.95003, 1.45, 0, 0, 1.04445],
                                93: [.95003, 1.45, 0, 0, .52778],
                                123: [.95003, 1.45, 0, 0, .75],
                                125: [.95003, 1.45, 0, 0, .75],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1.44445],
                                732: [0, .75, 0, 0, 1.44445],
                                770: [0, .75, 0, 0, 1.44445],
                                771: [0, .75, 0, 0, 1.44445],
                                8730: [.95003, 1.45, 0, 0, 1],
                                8968: [.95003, 1.45, 0, 0, .58334],
                                8969: [.95003, 1.45, 0, 0, .58334],
                                8970: [.95003, 1.45, 0, 0, .58334],
                                8971: [.95003, 1.45, 0, 0, .58334],
                                10216: [.95003, 1.45, 0, 0, .75],
                                10217: [.95003, 1.45, 0, 0, .75]
                            },
                            "Size4-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [1.25003, 1.75, 0, 0, .79167],
                                41: [1.25003, 1.75, 0, 0, .79167],
                                47: [1.25003, 1.75, 0, 0, 1.27778],
                                91: [1.25003, 1.75, 0, 0, .58334],
                                92: [1.25003, 1.75, 0, 0, 1.27778],
                                93: [1.25003, 1.75, 0, 0, .58334],
                                123: [1.25003, 1.75, 0, 0, .80556],
                                125: [1.25003, 1.75, 0, 0, .80556],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .825, 0, 0, 1.8889],
                                732: [0, .825, 0, 0, 1.8889],
                                770: [0, .825, 0, 0, 1.8889],
                                771: [0, .825, 0, 0, 1.8889],
                                8730: [1.25003, 1.75, 0, 0, 1],
                                8968: [1.25003, 1.75, 0, 0, .63889],
                                8969: [1.25003, 1.75, 0, 0, .63889],
                                8970: [1.25003, 1.75, 0, 0, .63889],
                                8971: [1.25003, 1.75, 0, 0, .63889],
                                9115: [.64502, 1.155, 0, 0, .875],
                                9116: [1e-5, .6, 0, 0, .875],
                                9117: [.64502, 1.155, 0, 0, .875],
                                9118: [.64502, 1.155, 0, 0, .875],
                                9119: [1e-5, .6, 0, 0, .875],
                                9120: [.64502, 1.155, 0, 0, .875],
                                9121: [.64502, 1.155, 0, 0, .66667],
                                9122: [-99e-5, .601, 0, 0, .66667],
                                9123: [.64502, 1.155, 0, 0, .66667],
                                9124: [.64502, 1.155, 0, 0, .66667],
                                9125: [-99e-5, .601, 0, 0, .66667],
                                9126: [.64502, 1.155, 0, 0, .66667],
                                9127: [1e-5, .9, 0, 0, .88889],
                                9128: [.65002, 1.15, 0, 0, .88889],
                                9129: [.90001, 0, 0, 0, .88889],
                                9130: [0, .3, 0, 0, .88889],
                                9131: [1e-5, .9, 0, 0, .88889],
                                9132: [.65002, 1.15, 0, 0, .88889],
                                9133: [.90001, 0, 0, 0, .88889],
                                9143: [.88502, .915, 0, 0, 1.05556],
                                10216: [1.25003, 1.75, 0, 0, .80556],
                                10217: [1.25003, 1.75, 0, 0, .80556],
                                57344: [-.00499, .605, 0, 0, 1.05556],
                                57345: [-.00499, .605, 0, 0, 1.05556],
                                57680: [0, .12, 0, 0, .45],
                                57681: [0, .12, 0, 0, .45],
                                57682: [0, .12, 0, 0, .45],
                                57683: [0, .12, 0, 0, .45]
                            },
                            "Typewriter-Regular": {
                                32: [0, 0, 0, 0, .525],
                                33: [0, .61111, 0, 0, .525],
                                34: [0, .61111, 0, 0, .525],
                                35: [0, .61111, 0, 0, .525],
                                36: [.08333, .69444, 0, 0, .525],
                                37: [.08333, .69444, 0, 0, .525],
                                38: [0, .61111, 0, 0, .525],
                                39: [0, .61111, 0, 0, .525],
                                40: [.08333, .69444, 0, 0, .525],
                                41: [.08333, .69444, 0, 0, .525],
                                42: [0, .52083, 0, 0, .525],
                                43: [-.08056, .53055, 0, 0, .525],
                                44: [.13889, .125, 0, 0, .525],
                                45: [-.08056, .53055, 0, 0, .525],
                                46: [0, .125, 0, 0, .525],
                                47: [.08333, .69444, 0, 0, .525],
                                48: [0, .61111, 0, 0, .525],
                                49: [0, .61111, 0, 0, .525],
                                50: [0, .61111, 0, 0, .525],
                                51: [0, .61111, 0, 0, .525],
                                52: [0, .61111, 0, 0, .525],
                                53: [0, .61111, 0, 0, .525],
                                54: [0, .61111, 0, 0, .525],
                                55: [0, .61111, 0, 0, .525],
                                56: [0, .61111, 0, 0, .525],
                                57: [0, .61111, 0, 0, .525],
                                58: [0, .43056, 0, 0, .525],
                                59: [.13889, .43056, 0, 0, .525],
                                60: [-.05556, .55556, 0, 0, .525],
                                61: [-.19549, .41562, 0, 0, .525],
                                62: [-.05556, .55556, 0, 0, .525],
                                63: [0, .61111, 0, 0, .525],
                                64: [0, .61111, 0, 0, .525],
                                65: [0, .61111, 0, 0, .525],
                                66: [0, .61111, 0, 0, .525],
                                67: [0, .61111, 0, 0, .525],
                                68: [0, .61111, 0, 0, .525],
                                69: [0, .61111, 0, 0, .525],
                                70: [0, .61111, 0, 0, .525],
                                71: [0, .61111, 0, 0, .525],
                                72: [0, .61111, 0, 0, .525],
                                73: [0, .61111, 0, 0, .525],
                                74: [0, .61111, 0, 0, .525],
                                75: [0, .61111, 0, 0, .525],
                                76: [0, .61111, 0, 0, .525],
                                77: [0, .61111, 0, 0, .525],
                                78: [0, .61111, 0, 0, .525],
                                79: [0, .61111, 0, 0, .525],
                                80: [0, .61111, 0, 0, .525],
                                81: [.13889, .61111, 0, 0, .525],
                                82: [0, .61111, 0, 0, .525],
                                83: [0, .61111, 0, 0, .525],
                                84: [0, .61111, 0, 0, .525],
                                85: [0, .61111, 0, 0, .525],
                                86: [0, .61111, 0, 0, .525],
                                87: [0, .61111, 0, 0, .525],
                                88: [0, .61111, 0, 0, .525],
                                89: [0, .61111, 0, 0, .525],
                                90: [0, .61111, 0, 0, .525],
                                91: [.08333, .69444, 0, 0, .525],
                                92: [.08333, .69444, 0, 0, .525],
                                93: [.08333, .69444, 0, 0, .525],
                                94: [0, .61111, 0, 0, .525],
                                95: [.09514, 0, 0, 0, .525],
                                96: [0, .61111, 0, 0, .525],
                                97: [0, .43056, 0, 0, .525],
                                98: [0, .61111, 0, 0, .525],
                                99: [0, .43056, 0, 0, .525],
                                100: [0, .61111, 0, 0, .525],
                                101: [0, .43056, 0, 0, .525],
                                102: [0, .61111, 0, 0, .525],
                                103: [.22222, .43056, 0, 0, .525],
                                104: [0, .61111, 0, 0, .525],
                                105: [0, .61111, 0, 0, .525],
                                106: [.22222, .61111, 0, 0, .525],
                                107: [0, .61111, 0, 0, .525],
                                108: [0, .61111, 0, 0, .525],
                                109: [0, .43056, 0, 0, .525],
                                110: [0, .43056, 0, 0, .525],
                                111: [0, .43056, 0, 0, .525],
                                112: [.22222, .43056, 0, 0, .525],
                                113: [.22222, .43056, 0, 0, .525],
                                114: [0, .43056, 0, 0, .525],
                                115: [0, .43056, 0, 0, .525],
                                116: [0, .55358, 0, 0, .525],
                                117: [0, .43056, 0, 0, .525],
                                118: [0, .43056, 0, 0, .525],
                                119: [0, .43056, 0, 0, .525],
                                120: [0, .43056, 0, 0, .525],
                                121: [.22222, .43056, 0, 0, .525],
                                122: [0, .43056, 0, 0, .525],
                                123: [.08333, .69444, 0, 0, .525],
                                124: [.08333, .69444, 0, 0, .525],
                                125: [.08333, .69444, 0, 0, .525],
                                126: [0, .61111, 0, 0, .525],
                                127: [0, .61111, 0, 0, .525],
                                160: [0, 0, 0, 0, .525],
                                176: [0, .61111, 0, 0, .525],
                                184: [.19445, 0, 0, 0, .525],
                                305: [0, .43056, 0, 0, .525],
                                567: [.22222, .43056, 0, 0, .525],
                                711: [0, .56597, 0, 0, .525],
                                713: [0, .56555, 0, 0, .525],
                                714: [0, .61111, 0, 0, .525],
                                715: [0, .61111, 0, 0, .525],
                                728: [0, .61111, 0, 0, .525],
                                730: [0, .61111, 0, 0, .525],
                                770: [0, .61111, 0, 0, .525],
                                771: [0, .61111, 0, 0, .525],
                                776: [0, .61111, 0, 0, .525],
                                915: [0, .61111, 0, 0, .525],
                                916: [0, .61111, 0, 0, .525],
                                920: [0, .61111, 0, 0, .525],
                                923: [0, .61111, 0, 0, .525],
                                926: [0, .61111, 0, 0, .525],
                                928: [0, .61111, 0, 0, .525],
                                931: [0, .61111, 0, 0, .525],
                                933: [0, .61111, 0, 0, .525],
                                934: [0, .61111, 0, 0, .525],
                                936: [0, .61111, 0, 0, .525],
                                937: [0, .61111, 0, 0, .525],
                                8216: [0, .61111, 0, 0, .525],
                                8217: [0, .61111, 0, 0, .525],
                                8242: [0, .61111, 0, 0, .525],
                                9251: [.11111, .21944, 0, 0, .525]
                            }
                        },
                        B = {
                            slant: [.25, .25, .25],
                            space: [0, 0, 0],
                            stretch: [0, 0, 0],
                            shrink: [0, 0, 0],
                            xHeight: [.431, .431, .431],
                            quad: [1, 1.171, 1.472],
                            extraSpace: [0, 0, 0],
                            num1: [.677, .732, .925],
                            num2: [.394, .384, .387],
                            num3: [.444, .471, .504],
                            denom1: [.686, .752, 1.025],
                            denom2: [.345, .344, .532],
                            sup1: [.413, .503, .504],
                            sup2: [.363, .431, .404],
                            sup3: [.289, .286, .294],
                            sub1: [.15, .143, .2],
                            sub2: [.247, .286, .4],
                            supDrop: [.386, .353, .494],
                            subDrop: [.05, .071, .1],
                            delim1: [2.39, 1.7, 1.98],
                            delim2: [1.01, 1.157, 1.42],
                            axisHeight: [.25, .25, .25],
                            defaultRuleThickness: [.04, .049, .049],
                            bigOpSpacing1: [.111, .111, .111],
                            bigOpSpacing2: [.166, .166, .166],
                            bigOpSpacing3: [.2, .2, .2],
                            bigOpSpacing4: [.6, .611, .611],
                            bigOpSpacing5: [.1, .143, .143],
                            sqrtRuleThickness: [.04, .04, .04],
                            ptPerEm: [10, 10, 10],
                            doubleRuleSep: [.2, .2, .2],
                            arrayRuleWidth: [.04, .04, .04],
                            fboxsep: [.3, .3, .3],
                            fboxrule: [.04, .04, .04]
                        },
                        C = {
                            "\xc5": "A",
                            "\xd0": "D",
                            "\xde": "o",
                            "\xe5": "a",
                            "\xf0": "d",
                            "\xfe": "o",
                            "\u0410": "A",
                            "\u0411": "B",
                            "\u0412": "B",
                            "\u0413": "F",
                            "\u0414": "A",
                            "\u0415": "E",
                            "\u0416": "K",
                            "\u0417": "3",
                            "\u0418": "N",
                            "\u0419": "N",
                            "\u041a": "K",
                            "\u041b": "N",
                            "\u041c": "M",
                            "\u041d": "H",
                            "\u041e": "O",
                            "\u041f": "N",
                            "\u0420": "P",
                            "\u0421": "C",
                            "\u0422": "T",
                            "\u0423": "y",
                            "\u0424": "O",
                            "\u0425": "X",
                            "\u0426": "U",
                            "\u0427": "h",
                            "\u0428": "W",
                            "\u0429": "W",
                            "\u042a": "B",
                            "\u042b": "X",
                            "\u042c": "B",
                            "\u042d": "3",
                            "\u042e": "X",
                            "\u042f": "R",
                            "\u0430": "a",
                            "\u0431": "b",
                            "\u0432": "a",
                            "\u0433": "r",
                            "\u0434": "y",
                            "\u0435": "e",
                            "\u0436": "m",
                            "\u0437": "e",
                            "\u0438": "n",
                            "\u0439": "n",
                            "\u043a": "n",
                            "\u043b": "n",
                            "\u043c": "m",
                            "\u043d": "n",
                            "\u043e": "o",
                            "\u043f": "n",
                            "\u0440": "p",
                            "\u0441": "c",
                            "\u0442": "o",
                            "\u0443": "y",
                            "\u0444": "b",
                            "\u0445": "x",
                            "\u0446": "n",
                            "\u0447": "n",
                            "\u0448": "w",
                            "\u0449": "w",
                            "\u044a": "a",
                            "\u044b": "m",
                            "\u044c": "a",
                            "\u044d": "e",
                            "\u044e": "m",
                            "\u044f": "r"
                        };

                    function N(e, t, r) {
                        if (!T[t]) throw new Error("Font metrics not found for font: " + t + ".");
                        var n = e.charCodeAt(0),
                            a = T[t][n];
                        if (!a && e[0] in C && (n = C[e[0]].charCodeAt(0), a = T[t][n]), a || "text" !== r || S(n) && (a = T[t][77]), a) return {
                            depth: a[0],
                            height: a[1],
                            italic: a[2],
                            skew: a[3],
                            width: a[4]
                        }
                    }
                    var q = {},
                        I = [
                            [1, 1, 1],
                            [2, 1, 1],
                            [3, 1, 1],
                            [4, 2, 1],
                            [5, 2, 1],
                            [6, 3, 1],
                            [7, 4, 2],
                            [8, 6, 3],
                            [9, 7, 6],
                            [10, 8, 7],
                            [11, 10, 9]
                        ],
                        R = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
                        H = function(e, t) {
                            return t.size < 2 ? e : I[e - 1][t.size - 1]
                        },
                        O = function() {
                            function e(t) {
                                this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = R[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0
                            }
                            var t = e.prototype;
                            return t.extend = function(t) {
                                var r = {
                                    style: this.style,
                                    size: this.size,
                                    textSize: this.textSize,
                                    color: this.color,
                                    phantom: this.phantom,
                                    font: this.font,
                                    fontFamily: this.fontFamily,
                                    fontWeight: this.fontWeight,
                                    fontShape: this.fontShape,
                                    maxSize: this.maxSize,
                                    minRuleThickness: this.minRuleThickness
                                };
                                for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                                return new e(r)
                            }, t.havingStyle = function(e) {
                                return this.style === e ? this : this.extend({
                                    style: e,
                                    size: H(this.textSize, e)
                                })
                            }, t.havingCrampedStyle = function() {
                                return this.havingStyle(this.style.cramp())
                            }, t.havingSize = function(e) {
                                return this.size === e && this.textSize === e ? this : this.extend({
                                    style: this.style.text(),
                                    size: e,
                                    textSize: e,
                                    sizeMultiplier: R[e - 1]
                                })
                            }, t.havingBaseStyle = function(t) {
                                t = t || this.style.text();
                                var r = H(e.BASESIZE, t);
                                return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
                                    style: t,
                                    size: r
                                })
                            }, t.havingBaseSizing = function() {
                                var e;
                                switch (this.style.id) {
                                    case 4:
                                    case 5:
                                        e = 3;
                                        break;
                                    case 6:
                                    case 7:
                                        e = 1;
                                        break;
                                    default:
                                        e = 6
                                }
                                return this.extend({
                                    style: this.style.text(),
                                    size: e
                                })
                            }, t.withColor = function(e) {
                                return this.extend({
                                    color: e
                                })
                            }, t.withPhantom = function() {
                                return this.extend({
                                    phantom: !0
                                })
                            }, t.withFont = function(e) {
                                return this.extend({
                                    font: e
                                })
                            }, t.withTextFontFamily = function(e) {
                                return this.extend({
                                    fontFamily: e,
                                    font: ""
                                })
                            }, t.withTextFontWeight = function(e) {
                                return this.extend({
                                    fontWeight: e,
                                    font: ""
                                })
                            }, t.withTextFontShape = function(e) {
                                return this.extend({
                                    fontShape: e,
                                    font: ""
                                })
                            }, t.sizingClasses = function(e) {
                                return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
                            }, t.baseSizingClasses = function() {
                                return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : []
                            }, t.fontMetrics = function() {
                                return this._fontMetrics || (this._fontMetrics = function(e) {
                                    var t;
                                    if (!q[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
                                        var r = q[t] = {
                                            cssEmPerMu: B.quad[t] / 18
                                        };
                                        for (var n in B) B.hasOwnProperty(n) && (r[n] = B[n][t])
                                    }
                                    return q[t]
                                }(this.size)), this._fontMetrics
                            }, t.getColor = function() {
                                return this.phantom ? "transparent" : this.color
                            }, e
                        }();
                    O.BASESIZE = 6;
                    var E = O,
                        L = {
                            pt: 1,
                            mm: 7227 / 2540,
                            cm: 7227 / 254,
                            in: 72.27,
                            bp: 1.00375,
                            pc: 12,
                            dd: 1238 / 1157,
                            cc: 14856 / 1157,
                            nd: 685 / 642,
                            nc: 1370 / 107,
                            sp: 1 / 65536,
                            px: 1.00375
                        },
                        D = {
                            ex: !0,
                            em: !0,
                            mu: !0
                        },
                        V = function(e) {
                            return "string" !== typeof e && (e = e.unit), e in L || e in D || "ex" === e
                        },
                        P = function(e, t) {
                            var r;
                            if (e.unit in L) r = L[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
                            else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
                            else {
                                var a;
                                if (a = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = a.fontMetrics().xHeight;
                                else {
                                    if ("em" !== e.unit) throw new n("Invalid unit: '" + e.unit + "'");
                                    r = a.fontMetrics().quad
                                }
                                a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier)
                            }
                            return Math.min(e.number * r, t.maxSize)
                        },
                        F = function(e) {
                            return +e.toFixed(4) + "em"
                        },
                        G = function(e) {
                            return e.filter((function(e) {
                                return e
                            })).join(" ")
                        },
                        U = function(e, t, r) {
                            if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
                                t.style.isTight() && this.classes.push("mtight");
                                var n = t.getColor();
                                n && (this.style.color = n)
                            }
                        },
                        Y = function(e) {
                            var t = document.createElement(e);
                            for (var r in t.className = G(this.classes), this.style) this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
                            for (var n in this.attributes) this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
                            for (var a = 0; a < this.children.length; a++) t.appendChild(this.children[a].toNode());
                            return t
                        },
                        X = function(e) {
                            var t = "<" + e;
                            this.classes.length && (t += ' class="' + l.escape(G(this.classes)) + '"');
                            var r = "";
                            for (var n in this.style) this.style.hasOwnProperty(n) && (r += l.hyphenate(n) + ":" + this.style[n] + ";");
                            for (var a in r && (t += ' style="' + l.escape(r) + '"'), this.attributes) this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + l.escape(this.attributes[a]) + '"');
                            t += ">";
                            for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup();
                            return t += "</" + e + ">"
                        },
                        W = function() {
                            function e(e, t, r, n) {
                                this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, U.call(this, e, r, n), this.children = t || []
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.hasClass = function(e) {
                                return l.contains(this.classes, e)
                            }, t.toNode = function() {
                                return Y.call(this, "span")
                            }, t.toMarkup = function() {
                                return X.call(this, "span")
                            }, e
                        }(),
                        _ = function() {
                            function e(e, t, r, n) {
                                this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, U.call(this, t, n), this.children = r || [], this.setAttribute("href", e)
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.hasClass = function(e) {
                                return l.contains(this.classes, e)
                            }, t.toNode = function() {
                                return Y.call(this, "a")
                            }, t.toMarkup = function() {
                                return X.call(this, "a")
                            }, e
                        }(),
                        j = function() {
                            function e(e, t, r) {
                                this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return l.contains(this.classes, e)
                            }, t.toNode = function() {
                                var e = document.createElement("img");
                                for (var t in e.src = this.src, e.alt = this.alt, e.className = "mord", this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
                                return e
                            }, t.toMarkup = function() {
                                var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ",
                                    t = "";
                                for (var r in this.style) this.style.hasOwnProperty(r) && (t += l.hyphenate(r) + ":" + this.style[r] + ";");
                                return t && (e += ' style="' + l.escape(t) + '"'), e += "'/>"
                            }, e
                        }(),
                        $ = {
                            "\xee": "\u0131\u0302",
                            "\xef": "\u0131\u0308",
                            "\xed": "\u0131\u0301",
                            "\xec": "\u0131\u0300"
                        },
                        Z = function() {
                            function e(e, t, r, n, a, i, o, s) {
                                this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = a || 0, this.width = i || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
                                var l = function(e) {
                                    for (var t = 0; t < w.length; t++)
                                        for (var r = w[t], n = 0; n < r.blocks.length; n++) {
                                            var a = r.blocks[n];
                                            if (e >= a[0] && e <= a[1]) return r.name
                                        }
                                    return null
                                }(this.text.charCodeAt(0));
                                l && this.classes.push(l + "_fallback"), /[\xee\xef\xed\xec]/.test(this.text) && (this.text = $[this.text])
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return l.contains(this.classes, e)
                            }, t.toNode = function() {
                                var e = document.createTextNode(this.text),
                                    t = null;
                                for (var r in this.italic > 0 && ((t = document.createElement("span")).style.marginRight = F(this.italic)), this.classes.length > 0 && ((t = t || document.createElement("span")).className = G(this.classes)), this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
                                return t ? (t.appendChild(e), t) : e
                            }, t.toMarkup = function() {
                                var e = !1,
                                    t = "<span";
                                this.classes.length && (e = !0, t += ' class="', t += l.escape(G(this.classes)), t += '"');
                                var r = "";
                                for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(n) && (r += l.hyphenate(n) + ":" + this.style[n] + ";");
                                r && (e = !0, t += ' style="' + l.escape(r) + '"');
                                var a = l.escape(this.text);
                                return e ? (t += ">", t += a, t += "</span>") : a
                            }, e
                        }(),
                        K = function() {
                            function e(e, t) {
                                this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {}
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                                return e
                            }, t.toMarkup = function() {
                                var e = '<svg xmlns="http://www.w3.org/2000/svg"';
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
                                e += ">";
                                for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
                                return e += "</svg>"
                            }, e
                        }(),
                        J = function() {
                            function e(e, t) {
                                this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", z[this.pathName]), e
                            }, t.toMarkup = function() {
                                return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + z[this.pathName] + "'/>"
                            }, e
                        }(),
                        Q = function() {
                            function e(e) {
                                this.attributes = void 0, this.attributes = e || {}
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                return e
                            }, t.toMarkup = function() {
                                var e = "<line";
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
                                return e += "/>"
                            }, e
                        }();

                    function ee(e) {
                        if (e instanceof Z) return e;
                        throw new Error("Expected symbolNode but got " + String(e) + ".")
                    }
                    var te = {
                            bin: 1,
                            close: 1,
                            inner: 1,
                            open: 1,
                            punct: 1,
                            rel: 1
                        },
                        re = {
                            "accent-token": 1,
                            mathord: 1,
                            "op-token": 1,
                            spacing: 1,
                            textord: 1
                        },
                        ne = {
                            math: {},
                            text: {}
                        },
                        ae = ne;

                    function ie(e, t, r, n, a, i) {
                        ne[e][a] = {
                            font: t,
                            group: r,
                            replace: n
                        }, i && n && (ne[e][n] = ne[e][a])
                    }
                    var oe = "math",
                        se = "text",
                        le = "main",
                        he = "ams",
                        ce = "accent-token",
                        me = "bin",
                        ue = "close",
                        pe = "inner",
                        de = "mathord",
                        fe = "op-token",
                        ge = "open",
                        ve = "punct",
                        be = "rel",
                        ye = "spacing",
                        xe = "textord";
                    ie(oe, le, be, "\u2261", "\\equiv", !0), ie(oe, le, be, "\u227a", "\\prec", !0), ie(oe, le, be, "\u227b", "\\succ", !0), ie(oe, le, be, "\u223c", "\\sim", !0), ie(oe, le, be, "\u22a5", "\\perp"), ie(oe, le, be, "\u2aaf", "\\preceq", !0), ie(oe, le, be, "\u2ab0", "\\succeq", !0), ie(oe, le, be, "\u2243", "\\simeq", !0), ie(oe, le, be, "\u2223", "\\mid", !0), ie(oe, le, be, "\u226a", "\\ll", !0), ie(oe, le, be, "\u226b", "\\gg", !0), ie(oe, le, be, "\u224d", "\\asymp", !0), ie(oe, le, be, "\u2225", "\\parallel"), ie(oe, le, be, "\u22c8", "\\bowtie", !0), ie(oe, le, be, "\u2323", "\\smile", !0), ie(oe, le, be, "\u2291", "\\sqsubseteq", !0), ie(oe, le, be, "\u2292", "\\sqsupseteq", !0), ie(oe, le, be, "\u2250", "\\doteq", !0), ie(oe, le, be, "\u2322", "\\frown", !0), ie(oe, le, be, "\u220b", "\\ni", !0), ie(oe, le, be, "\u221d", "\\propto", !0), ie(oe, le, be, "\u22a2", "\\vdash", !0), ie(oe, le, be, "\u22a3", "\\dashv", !0), ie(oe, le, be, "\u220b", "\\owns"), ie(oe, le, ve, ".", "\\ldotp"), ie(oe, le, ve, "\u22c5", "\\cdotp"), ie(oe, le, xe, "#", "\\#"), ie(se, le, xe, "#", "\\#"), ie(oe, le, xe, "&", "\\&"), ie(se, le, xe, "&", "\\&"), ie(oe, le, xe, "\u2135", "\\aleph", !0), ie(oe, le, xe, "\u2200", "\\forall", !0), ie(oe, le, xe, "\u210f", "\\hbar", !0), ie(oe, le, xe, "\u2203", "\\exists", !0), ie(oe, le, xe, "\u2207", "\\nabla", !0), ie(oe, le, xe, "\u266d", "\\flat", !0), ie(oe, le, xe, "\u2113", "\\ell", !0), ie(oe, le, xe, "\u266e", "\\natural", !0), ie(oe, le, xe, "\u2663", "\\clubsuit", !0), ie(oe, le, xe, "\u2118", "\\wp", !0), ie(oe, le, xe, "\u266f", "\\sharp", !0), ie(oe, le, xe, "\u2662", "\\diamondsuit", !0), ie(oe, le, xe, "\u211c", "\\Re", !0), ie(oe, le, xe, "\u2661", "\\heartsuit", !0), ie(oe, le, xe, "\u2111", "\\Im", !0), ie(oe, le, xe, "\u2660", "\\spadesuit", !0), ie(oe, le, xe, "\xa7", "\\S", !0), ie(se, le, xe, "\xa7", "\\S"), ie(oe, le, xe, "\xb6", "\\P", !0), ie(se, le, xe, "\xb6", "\\P"), ie(oe, le, xe, "\u2020", "\\dag"), ie(se, le, xe, "\u2020", "\\dag"), ie(se, le, xe, "\u2020", "\\textdagger"), ie(oe, le, xe, "\u2021", "\\ddag"), ie(se, le, xe, "\u2021", "\\ddag"), ie(se, le, xe, "\u2021", "\\textdaggerdbl"), ie(oe, le, ue, "\u23b1", "\\rmoustache", !0), ie(oe, le, ge, "\u23b0", "\\lmoustache", !0), ie(oe, le, ue, "\u27ef", "\\rgroup", !0), ie(oe, le, ge, "\u27ee", "\\lgroup", !0), ie(oe, le, me, "\u2213", "\\mp", !0), ie(oe, le, me, "\u2296", "\\ominus", !0), ie(oe, le, me, "\u228e", "\\uplus", !0), ie(oe, le, me, "\u2293", "\\sqcap", !0), ie(oe, le, me, "\u2217", "\\ast"), ie(oe, le, me, "\u2294", "\\sqcup", !0), ie(oe, le, me, "\u25ef", "\\bigcirc", !0), ie(oe, le, me, "\u2219", "\\bullet", !0), ie(oe, le, me, "\u2021", "\\ddagger"), ie(oe, le, me, "\u2240", "\\wr", !0), ie(oe, le, me, "\u2a3f", "\\amalg"), ie(oe, le, me, "&", "\\And"), ie(oe, le, be, "\u27f5", "\\longleftarrow", !0), ie(oe, le, be, "\u21d0", "\\Leftarrow", !0), ie(oe, le, be, "\u27f8", "\\Longleftarrow", !0), ie(oe, le, be, "\u27f6", "\\longrightarrow", !0), ie(oe, le, be, "\u21d2", "\\Rightarrow", !0), ie(oe, le, be, "\u27f9", "\\Longrightarrow", !0), ie(oe, le, be, "\u2194", "\\leftrightarrow", !0), ie(oe, le, be, "\u27f7", "\\longleftrightarrow", !0), ie(oe, le, be, "\u21d4", "\\Leftrightarrow", !0), ie(oe, le, be, "\u27fa", "\\Longleftrightarrow", !0), ie(oe, le, be, "\u21a6", "\\mapsto", !0), ie(oe, le, be, "\u27fc", "\\longmapsto", !0), ie(oe, le, be, "\u2197", "\\nearrow", !0), ie(oe, le, be, "\u21a9", "\\hookleftarrow", !0), ie(oe, le, be, "\u21aa", "\\hookrightarrow", !0), ie(oe, le, be, "\u2198", "\\searrow", !0), ie(oe, le, be, "\u21bc", "\\leftharpoonup", !0), ie(oe, le, be, "\u21c0", "\\rightharpoonup", !0), ie(oe, le, be, "\u2199", "\\swarrow", !0), ie(oe, le, be, "\u21bd", "\\leftharpoondown", !0), ie(oe, le, be, "\u21c1", "\\rightharpoondown", !0), ie(oe, le, be, "\u2196", "\\nwarrow", !0), ie(oe, le, be, "\u21cc", "\\rightleftharpoons", !0), ie(oe, he, be, "\u226e", "\\nless", !0), ie(oe, he, be, "\ue010", "\\@nleqslant"), ie(oe, he, be, "\ue011", "\\@nleqq"), ie(oe, he, be, "\u2a87", "\\lneq", !0), ie(oe, he, be, "\u2268", "\\lneqq", !0), ie(oe, he, be, "\ue00c", "\\@lvertneqq"), ie(oe, he, be, "\u22e6", "\\lnsim", !0), ie(oe, he, be, "\u2a89", "\\lnapprox", !0), ie(oe, he, be, "\u2280", "\\nprec", !0), ie(oe, he, be, "\u22e0", "\\npreceq", !0), ie(oe, he, be, "\u22e8", "\\precnsim", !0), ie(oe, he, be, "\u2ab9", "\\precnapprox", !0), ie(oe, he, be, "\u2241", "\\nsim", !0), ie(oe, he, be, "\ue006", "\\@nshortmid"), ie(oe, he, be, "\u2224", "\\nmid", !0), ie(oe, he, be, "\u22ac", "\\nvdash", !0), ie(oe, he, be, "\u22ad", "\\nvDash", !0), ie(oe, he, be, "\u22ea", "\\ntriangleleft"), ie(oe, he, be, "\u22ec", "\\ntrianglelefteq", !0), ie(oe, he, be, "\u228a", "\\subsetneq", !0), ie(oe, he, be, "\ue01a", "\\@varsubsetneq"), ie(oe, he, be, "\u2acb", "\\subsetneqq", !0), ie(oe, he, be, "\ue017", "\\@varsubsetneqq"), ie(oe, he, be, "\u226f", "\\ngtr", !0), ie(oe, he, be, "\ue00f", "\\@ngeqslant"), ie(oe, he, be, "\ue00e", "\\@ngeqq"), ie(oe, he, be, "\u2a88", "\\gneq", !0), ie(oe, he, be, "\u2269", "\\gneqq", !0), ie(oe, he, be, "\ue00d", "\\@gvertneqq"), ie(oe, he, be, "\u22e7", "\\gnsim", !0), ie(oe, he, be, "\u2a8a", "\\gnapprox", !0), ie(oe, he, be, "\u2281", "\\nsucc", !0), ie(oe, he, be, "\u22e1", "\\nsucceq", !0), ie(oe, he, be, "\u22e9", "\\succnsim", !0), ie(oe, he, be, "\u2aba", "\\succnapprox", !0), ie(oe, he, be, "\u2246", "\\ncong", !0), ie(oe, he, be, "\ue007", "\\@nshortparallel"), ie(oe, he, be, "\u2226", "\\nparallel", !0), ie(oe, he, be, "\u22af", "\\nVDash", !0), ie(oe, he, be, "\u22eb", "\\ntriangleright"), ie(oe, he, be, "\u22ed", "\\ntrianglerighteq", !0), ie(oe, he, be, "\ue018", "\\@nsupseteqq"), ie(oe, he, be, "\u228b", "\\supsetneq", !0), ie(oe, he, be, "\ue01b", "\\@varsupsetneq"), ie(oe, he, be, "\u2acc", "\\supsetneqq", !0), ie(oe, he, be, "\ue019", "\\@varsupsetneqq"), ie(oe, he, be, "\u22ae", "\\nVdash", !0), ie(oe, he, be, "\u2ab5", "\\precneqq", !0), ie(oe, he, be, "\u2ab6", "\\succneqq", !0), ie(oe, he, be, "\ue016", "\\@nsubseteqq"), ie(oe, he, me, "\u22b4", "\\unlhd"), ie(oe, he, me, "\u22b5", "\\unrhd"), ie(oe, he, be, "\u219a", "\\nleftarrow", !0), ie(oe, he, be, "\u219b", "\\nrightarrow", !0), ie(oe, he, be, "\u21cd", "\\nLeftarrow", !0), ie(oe, he, be, "\u21cf", "\\nRightarrow", !0), ie(oe, he, be, "\u21ae", "\\nleftrightarrow", !0), ie(oe, he, be, "\u21ce", "\\nLeftrightarrow", !0), ie(oe, he, be, "\u25b3", "\\vartriangle"), ie(oe, he, xe, "\u210f", "\\hslash"), ie(oe, he, xe, "\u25bd", "\\triangledown"), ie(oe, he, xe, "\u25ca", "\\lozenge"), ie(oe, he, xe, "\u24c8", "\\circledS"), ie(oe, he, xe, "\xae", "\\circledR"), ie(se, he, xe, "\xae", "\\circledR"), ie(oe, he, xe, "\u2221", "\\measuredangle", !0), ie(oe, he, xe, "\u2204", "\\nexists"), ie(oe, he, xe, "\u2127", "\\mho"), ie(oe, he, xe, "\u2132", "\\Finv", !0), ie(oe, he, xe, "\u2141", "\\Game", !0), ie(oe, he, xe, "\u2035", "\\backprime"), ie(oe, he, xe, "\u25b2", "\\blacktriangle"), ie(oe, he, xe, "\u25bc", "\\blacktriangledown"), ie(oe, he, xe, "\u25a0", "\\blacksquare"), ie(oe, he, xe, "\u29eb", "\\blacklozenge"), ie(oe, he, xe, "\u2605", "\\bigstar"), ie(oe, he, xe, "\u2222", "\\sphericalangle", !0), ie(oe, he, xe, "\u2201", "\\complement", !0), ie(oe, he, xe, "\xf0", "\\eth", !0), ie(se, le, xe, "\xf0", "\xf0"), ie(oe, he, xe, "\u2571", "\\diagup"), ie(oe, he, xe, "\u2572", "\\diagdown"), ie(oe, he, xe, "\u25a1", "\\square"), ie(oe, he, xe, "\u25a1", "\\Box"), ie(oe, he, xe, "\u25ca", "\\Diamond"), ie(oe, he, xe, "\xa5", "\\yen", !0), ie(se, he, xe, "\xa5", "\\yen", !0), ie(oe, he, xe, "\u2713", "\\checkmark", !0), ie(se, he, xe, "\u2713", "\\checkmark"), ie(oe, he, xe, "\u2136", "\\beth", !0), ie(oe, he, xe, "\u2138", "\\daleth", !0), ie(oe, he, xe, "\u2137", "\\gimel", !0), ie(oe, he, xe, "\u03dd", "\\digamma", !0), ie(oe, he, xe, "\u03f0", "\\varkappa"), ie(oe, he, ge, "\u250c", "\\@ulcorner", !0), ie(oe, he, ue, "\u2510", "\\@urcorner", !0), ie(oe, he, ge, "\u2514", "\\@llcorner", !0), ie(oe, he, ue, "\u2518", "\\@lrcorner", !0), ie(oe, he, be, "\u2266", "\\leqq", !0), ie(oe, he, be, "\u2a7d", "\\leqslant", !0), ie(oe, he, be, "\u2a95", "\\eqslantless", !0), ie(oe, he, be, "\u2272", "\\lesssim", !0), ie(oe, he, be, "\u2a85", "\\lessapprox", !0), ie(oe, he, be, "\u224a", "\\approxeq", !0), ie(oe, he, me, "\u22d6", "\\lessdot"), ie(oe, he, be, "\u22d8", "\\lll", !0), ie(oe, he, be, "\u2276", "\\lessgtr", !0), ie(oe, he, be, "\u22da", "\\lesseqgtr", !0), ie(oe, he, be, "\u2a8b", "\\lesseqqgtr", !0), ie(oe, he, be, "\u2251", "\\doteqdot"), ie(oe, he, be, "\u2253", "\\risingdotseq", !0), ie(oe, he, be, "\u2252", "\\fallingdotseq", !0), ie(oe, he, be, "\u223d", "\\backsim", !0), ie(oe, he, be, "\u22cd", "\\backsimeq", !0), ie(oe, he, be, "\u2ac5", "\\subseteqq", !0), ie(oe, he, be, "\u22d0", "\\Subset", !0), ie(oe, he, be, "\u228f", "\\sqsubset", !0), ie(oe, he, be, "\u227c", "\\preccurlyeq", !0), ie(oe, he, be, "\u22de", "\\curlyeqprec", !0), ie(oe, he, be, "\u227e", "\\precsim", !0), ie(oe, he, be, "\u2ab7", "\\precapprox", !0), ie(oe, he, be, "\u22b2", "\\vartriangleleft"), ie(oe, he, be, "\u22b4", "\\trianglelefteq"), ie(oe, he, be, "\u22a8", "\\vDash", !0), ie(oe, he, be, "\u22aa", "\\Vvdash", !0), ie(oe, he, be, "\u2323", "\\smallsmile"), ie(oe, he, be, "\u2322", "\\smallfrown"), ie(oe, he, be, "\u224f", "\\bumpeq", !0), ie(oe, he, be, "\u224e", "\\Bumpeq", !0), ie(oe, he, be, "\u2267", "\\geqq", !0), ie(oe, he, be, "\u2a7e", "\\geqslant", !0), ie(oe, he, be, "\u2a96", "\\eqslantgtr", !0), ie(oe, he, be, "\u2273", "\\gtrsim", !0), ie(oe, he, be, "\u2a86", "\\gtrapprox", !0), ie(oe, he, me, "\u22d7", "\\gtrdot"), ie(oe, he, be, "\u22d9", "\\ggg", !0), ie(oe, he, be, "\u2277", "\\gtrless", !0), ie(oe, he, be, "\u22db", "\\gtreqless", !0), ie(oe, he, be, "\u2a8c", "\\gtreqqless", !0), ie(oe, he, be, "\u2256", "\\eqcirc", !0), ie(oe, he, be, "\u2257", "\\circeq", !0), ie(oe, he, be, "\u225c", "\\triangleq", !0), ie(oe, he, be, "\u223c", "\\thicksim"), ie(oe, he, be, "\u2248", "\\thickapprox"), ie(oe, he, be, "\u2ac6", "\\supseteqq", !0), ie(oe, he, be, "\u22d1", "\\Supset", !0), ie(oe, he, be, "\u2290", "\\sqsupset", !0), ie(oe, he, be, "\u227d", "\\succcurlyeq", !0), ie(oe, he, be, "\u22df", "\\curlyeqsucc", !0), ie(oe, he, be, "\u227f", "\\succsim", !0), ie(oe, he, be, "\u2ab8", "\\succapprox", !0), ie(oe, he, be, "\u22b3", "\\vartriangleright"), ie(oe, he, be, "\u22b5", "\\trianglerighteq"), ie(oe, he, be, "\u22a9", "\\Vdash", !0), ie(oe, he, be, "\u2223", "\\shortmid"), ie(oe, he, be, "\u2225", "\\shortparallel"), ie(oe, he, be, "\u226c", "\\between", !0), ie(oe, he, be, "\u22d4", "\\pitchfork", !0), ie(oe, he, be, "\u221d", "\\varpropto"), ie(oe, he, be, "\u25c0", "\\blacktriangleleft"), ie(oe, he, be, "\u2234", "\\therefore", !0), ie(oe, he, be, "\u220d", "\\backepsilon"), ie(oe, he, be, "\u25b6", "\\blacktriangleright"), ie(oe, he, be, "\u2235", "\\because", !0), ie(oe, he, be, "\u22d8", "\\llless"), ie(oe, he, be, "\u22d9", "\\gggtr"), ie(oe, he, me, "\u22b2", "\\lhd"), ie(oe, he, me, "\u22b3", "\\rhd"), ie(oe, he, be, "\u2242", "\\eqsim", !0), ie(oe, le, be, "\u22c8", "\\Join"), ie(oe, he, be, "\u2251", "\\Doteq", !0), ie(oe, he, me, "\u2214", "\\dotplus", !0), ie(oe, he, me, "\u2216", "\\smallsetminus"), ie(oe, he, me, "\u22d2", "\\Cap", !0), ie(oe, he, me, "\u22d3", "\\Cup", !0), ie(oe, he, me, "\u2a5e", "\\doublebarwedge", !0), ie(oe, he, me, "\u229f", "\\boxminus", !0), ie(oe, he, me, "\u229e", "\\boxplus", !0), ie(oe, he, me, "\u22c7", "\\divideontimes", !0), ie(oe, he, me, "\u22c9", "\\ltimes", !0), ie(oe, he, me, "\u22ca", "\\rtimes", !0), ie(oe, he, me, "\u22cb", "\\leftthreetimes", !0), ie(oe, he, me, "\u22cc", "\\rightthreetimes", !0), ie(oe, he, me, "\u22cf", "\\curlywedge", !0), ie(oe, he, me, "\u22ce", "\\curlyvee", !0), ie(oe, he, me, "\u229d", "\\circleddash", !0), ie(oe, he, me, "\u229b", "\\circledast", !0), ie(oe, he, me, "\u22c5", "\\centerdot"), ie(oe, he, me, "\u22ba", "\\intercal", !0), ie(oe, he, me, "\u22d2", "\\doublecap"), ie(oe, he, me, "\u22d3", "\\doublecup"), ie(oe, he, me, "\u22a0", "\\boxtimes", !0), ie(oe, he, be, "\u21e2", "\\dashrightarrow", !0), ie(oe, he, be, "\u21e0", "\\dashleftarrow", !0), ie(oe, he, be, "\u21c7", "\\leftleftarrows", !0), ie(oe, he, be, "\u21c6", "\\leftrightarrows", !0), ie(oe, he, be, "\u21da", "\\Lleftarrow", !0), ie(oe, he, be, "\u219e", "\\twoheadleftarrow", !0), ie(oe, he, be, "\u21a2", "\\leftarrowtail", !0), ie(oe, he, be, "\u21ab", "\\looparrowleft", !0), ie(oe, he, be, "\u21cb", "\\leftrightharpoons", !0), ie(oe, he, be, "\u21b6", "\\curvearrowleft", !0), ie(oe, he, be, "\u21ba", "\\circlearrowleft", !0), ie(oe, he, be, "\u21b0", "\\Lsh", !0), ie(oe, he, be, "\u21c8", "\\upuparrows", !0), ie(oe, he, be, "\u21bf", "\\upharpoonleft", !0), ie(oe, he, be, "\u21c3", "\\downharpoonleft", !0), ie(oe, le, be, "\u22b6", "\\origof", !0), ie(oe, le, be, "\u22b7", "\\imageof", !0), ie(oe, he, be, "\u22b8", "\\multimap", !0), ie(oe, he, be, "\u21ad", "\\leftrightsquigarrow", !0), ie(oe, he, be, "\u21c9", "\\rightrightarrows", !0), ie(oe, he, be, "\u21c4", "\\rightleftarrows", !0), ie(oe, he, be, "\u21a0", "\\twoheadrightarrow", !0), ie(oe, he, be, "\u21a3", "\\rightarrowtail", !0), ie(oe, he, be, "\u21ac", "\\looparrowright", !0), ie(oe, he, be, "\u21b7", "\\curvearrowright", !0), ie(oe, he, be, "\u21bb", "\\circlearrowright", !0), ie(oe, he, be, "\u21b1", "\\Rsh", !0), ie(oe, he, be, "\u21ca", "\\downdownarrows", !0), ie(oe, he, be, "\u21be", "\\upharpoonright", !0), ie(oe, he, be, "\u21c2", "\\downharpoonright", !0), ie(oe, he, be, "\u21dd", "\\rightsquigarrow", !0), ie(oe, he, be, "\u21dd", "\\leadsto"), ie(oe, he, be, "\u21db", "\\Rrightarrow", !0), ie(oe, he, be, "\u21be", "\\restriction"), ie(oe, le, xe, "\u2018", "`"), ie(oe, le, xe, "$", "\\$"), ie(se, le, xe, "$", "\\$"), ie(se, le, xe, "$", "\\textdollar"), ie(oe, le, xe, "%", "\\%"), ie(se, le, xe, "%", "\\%"), ie(oe, le, xe, "_", "\\_"), ie(se, le, xe, "_", "\\_"), ie(se, le, xe, "_", "\\textunderscore"), ie(oe, le, xe, "\u2220", "\\angle", !0), ie(oe, le, xe, "\u221e", "\\infty", !0), ie(oe, le, xe, "\u2032", "\\prime"), ie(oe, le, xe, "\u25b3", "\\triangle"), ie(oe, le, xe, "\u0393", "\\Gamma", !0), ie(oe, le, xe, "\u0394", "\\Delta", !0), ie(oe, le, xe, "\u0398", "\\Theta", !0), ie(oe, le, xe, "\u039b", "\\Lambda", !0), ie(oe, le, xe, "\u039e", "\\Xi", !0), ie(oe, le, xe, "\u03a0", "\\Pi", !0), ie(oe, le, xe, "\u03a3", "\\Sigma", !0), ie(oe, le, xe, "\u03a5", "\\Upsilon", !0), ie(oe, le, xe, "\u03a6", "\\Phi", !0), ie(oe, le, xe, "\u03a8", "\\Psi", !0), ie(oe, le, xe, "\u03a9", "\\Omega", !0), ie(oe, le, xe, "A", "\u0391"), ie(oe, le, xe, "B", "\u0392"), ie(oe, le, xe, "E", "\u0395"), ie(oe, le, xe, "Z", "\u0396"), ie(oe, le, xe, "H", "\u0397"), ie(oe, le, xe, "I", "\u0399"), ie(oe, le, xe, "K", "\u039a"), ie(oe, le, xe, "M", "\u039c"), ie(oe, le, xe, "N", "\u039d"), ie(oe, le, xe, "O", "\u039f"), ie(oe, le, xe, "P", "\u03a1"), ie(oe, le, xe, "T", "\u03a4"), ie(oe, le, xe, "X", "\u03a7"), ie(oe, le, xe, "\xac", "\\neg", !0), ie(oe, le, xe, "\xac", "\\lnot"), ie(oe, le, xe, "\u22a4", "\\top"), ie(oe, le, xe, "\u22a5", "\\bot"), ie(oe, le, xe, "\u2205", "\\emptyset"), ie(oe, he, xe, "\u2205", "\\varnothing"), ie(oe, le, de, "\u03b1", "\\alpha", !0), ie(oe, le, de, "\u03b2", "\\beta", !0), ie(oe, le, de, "\u03b3", "\\gamma", !0), ie(oe, le, de, "\u03b4", "\\delta", !0), ie(oe, le, de, "\u03f5", "\\epsilon", !0), ie(oe, le, de, "\u03b6", "\\zeta", !0), ie(oe, le, de, "\u03b7", "\\eta", !0), ie(oe, le, de, "\u03b8", "\\theta", !0), ie(oe, le, de, "\u03b9", "\\iota", !0), ie(oe, le, de, "\u03ba", "\\kappa", !0), ie(oe, le, de, "\u03bb", "\\lambda", !0), ie(oe, le, de, "\u03bc", "\\mu", !0), ie(oe, le, de, "\u03bd", "\\nu", !0), ie(oe, le, de, "\u03be", "\\xi", !0), ie(oe, le, de, "\u03bf", "\\omicron", !0), ie(oe, le, de, "\u03c0", "\\pi", !0), ie(oe, le, de, "\u03c1", "\\rho", !0), ie(oe, le, de, "\u03c3", "\\sigma", !0), ie(oe, le, de, "\u03c4", "\\tau", !0), ie(oe, le, de, "\u03c5", "\\upsilon", !0), ie(oe, le, de, "\u03d5", "\\phi", !0), ie(oe, le, de, "\u03c7", "\\chi", !0), ie(oe, le, de, "\u03c8", "\\psi", !0), ie(oe, le, de, "\u03c9", "\\omega", !0), ie(oe, le, de, "\u03b5", "\\varepsilon", !0), ie(oe, le, de, "\u03d1", "\\vartheta", !0), ie(oe, le, de, "\u03d6", "\\varpi", !0), ie(oe, le, de, "\u03f1", "\\varrho", !0), ie(oe, le, de, "\u03c2", "\\varsigma", !0), ie(oe, le, de, "\u03c6", "\\varphi", !0), ie(oe, le, me, "\u2217", "*", !0), ie(oe, le, me, "+", "+"), ie(oe, le, me, "\u2212", "-", !0), ie(oe, le, me, "\u22c5", "\\cdot", !0), ie(oe, le, me, "\u2218", "\\circ", !0), ie(oe, le, me, "\xf7", "\\div", !0), ie(oe, le, me, "\xb1", "\\pm", !0), ie(oe, le, me, "\xd7", "\\times", !0), ie(oe, le, me, "\u2229", "\\cap", !0), ie(oe, le, me, "\u222a", "\\cup", !0), ie(oe, le, me, "\u2216", "\\setminus", !0), ie(oe, le, me, "\u2227", "\\land"), ie(oe, le, me, "\u2228", "\\lor"), ie(oe, le, me, "\u2227", "\\wedge", !0), ie(oe, le, me, "\u2228", "\\vee", !0), ie(oe, le, xe, "\u221a", "\\surd"), ie(oe, le, ge, "\u27e8", "\\langle", !0), ie(oe, le, ge, "\u2223", "\\lvert"), ie(oe, le, ge, "\u2225", "\\lVert"), ie(oe, le, ue, "?", "?"), ie(oe, le, ue, "!", "!"), ie(oe, le, ue, "\u27e9", "\\rangle", !0), ie(oe, le, ue, "\u2223", "\\rvert"), ie(oe, le, ue, "\u2225", "\\rVert"), ie(oe, le, be, "=", "="), ie(oe, le, be, ":", ":"), ie(oe, le, be, "\u2248", "\\approx", !0), ie(oe, le, be, "\u2245", "\\cong", !0), ie(oe, le, be, "\u2265", "\\ge"), ie(oe, le, be, "\u2265", "\\geq", !0), ie(oe, le, be, "\u2190", "\\gets"), ie(oe, le, be, ">", "\\gt", !0), ie(oe, le, be, "\u2208", "\\in", !0), ie(oe, le, be, "\ue020", "\\@not"), ie(oe, le, be, "\u2282", "\\subset", !0), ie(oe, le, be, "\u2283", "\\supset", !0), ie(oe, le, be, "\u2286", "\\subseteq", !0), ie(oe, le, be, "\u2287", "\\supseteq", !0), ie(oe, he, be, "\u2288", "\\nsubseteq", !0), ie(oe, he, be, "\u2289", "\\nsupseteq", !0), ie(oe, le, be, "\u22a8", "\\models"), ie(oe, le, be, "\u2190", "\\leftarrow", !0), ie(oe, le, be, "\u2264", "\\le"), ie(oe, le, be, "\u2264", "\\leq", !0), ie(oe, le, be, "<", "\\lt", !0), ie(oe, le, be, "\u2192", "\\rightarrow", !0), ie(oe, le, be, "\u2192", "\\to"), ie(oe, he, be, "\u2271", "\\ngeq", !0), ie(oe, he, be, "\u2270", "\\nleq", !0), ie(oe, le, ye, "\xa0", "\\ "), ie(oe, le, ye, "\xa0", "\\space"), ie(oe, le, ye, "\xa0", "\\nobreakspace"), ie(se, le, ye, "\xa0", "\\ "), ie(se, le, ye, "\xa0", " "), ie(se, le, ye, "\xa0", "\\space"), ie(se, le, ye, "\xa0", "\\nobreakspace"), ie(oe, le, ye, null, "\\nobreak"), ie(oe, le, ye, null, "\\allowbreak"), ie(oe, le, ve, ",", ","), ie(oe, le, ve, ";", ";"), ie(oe, he, me, "\u22bc", "\\barwedge", !0), ie(oe, he, me, "\u22bb", "\\veebar", !0), ie(oe, le, me, "\u2299", "\\odot", !0), ie(oe, le, me, "\u2295", "\\oplus", !0), ie(oe, le, me, "\u2297", "\\otimes", !0), ie(oe, le, xe, "\u2202", "\\partial", !0), ie(oe, le, me, "\u2298", "\\oslash", !0), ie(oe, he, me, "\u229a", "\\circledcirc", !0), ie(oe, he, me, "\u22a1", "\\boxdot", !0), ie(oe, le, me, "\u25b3", "\\bigtriangleup"), ie(oe, le, me, "\u25bd", "\\bigtriangledown"), ie(oe, le, me, "\u2020", "\\dagger"), ie(oe, le, me, "\u22c4", "\\diamond"), ie(oe, le, me, "\u22c6", "\\star"), ie(oe, le, me, "\u25c3", "\\triangleleft"), ie(oe, le, me, "\u25b9", "\\triangleright"), ie(oe, le, ge, "{", "\\{"), ie(se, le, xe, "{", "\\{"), ie(se, le, xe, "{", "\\textbraceleft"), ie(oe, le, ue, "}", "\\}"), ie(se, le, xe, "}", "\\}"), ie(se, le, xe, "}", "\\textbraceright"), ie(oe, le, ge, "{", "\\lbrace"), ie(oe, le, ue, "}", "\\rbrace"), ie(oe, le, ge, "[", "\\lbrack", !0), ie(se, le, xe, "[", "\\lbrack", !0), ie(oe, le, ue, "]", "\\rbrack", !0), ie(se, le, xe, "]", "\\rbrack", !0), ie(oe, le, ge, "(", "\\lparen", !0), ie(oe, le, ue, ")", "\\rparen", !0), ie(se, le, xe, "<", "\\textless", !0), ie(se, le, xe, ">", "\\textgreater", !0), ie(oe, le, ge, "\u230a", "\\lfloor", !0), ie(oe, le, ue, "\u230b", "\\rfloor", !0), ie(oe, le, ge, "\u2308", "\\lceil", !0), ie(oe, le, ue, "\u2309", "\\rceil", !0), ie(oe, le, xe, "\\", "\\backslash"), ie(oe, le, xe, "\u2223", "|"), ie(oe, le, xe, "\u2223", "\\vert"), ie(se, le, xe, "|", "\\textbar", !0), ie(oe, le, xe, "\u2225", "\\|"), ie(oe, le, xe, "\u2225", "\\Vert"), ie(se, le, xe, "\u2225", "\\textbardbl"), ie(se, le, xe, "~", "\\textasciitilde"), ie(se, le, xe, "\\", "\\textbackslash"), ie(se, le, xe, "^", "\\textasciicircum"), ie(oe, le, be, "\u2191", "\\uparrow", !0), ie(oe, le, be, "\u21d1", "\\Uparrow", !0), ie(oe, le, be, "\u2193", "\\downarrow", !0), ie(oe, le, be, "\u21d3", "\\Downarrow", !0), ie(oe, le, be, "\u2195", "\\updownarrow", !0), ie(oe, le, be, "\u21d5", "\\Updownarrow", !0), ie(oe, le, fe, "\u2210", "\\coprod"), ie(oe, le, fe, "\u22c1", "\\bigvee"), ie(oe, le, fe, "\u22c0", "\\bigwedge"), ie(oe, le, fe, "\u2a04", "\\biguplus"), ie(oe, le, fe, "\u22c2", "\\bigcap"), ie(oe, le, fe, "\u22c3", "\\bigcup"), ie(oe, le, fe, "\u222b", "\\int"), ie(oe, le, fe, "\u222b", "\\intop"), ie(oe, le, fe, "\u222c", "\\iint"), ie(oe, le, fe, "\u222d", "\\iiint"), ie(oe, le, fe, "\u220f", "\\prod"), ie(oe, le, fe, "\u2211", "\\sum"), ie(oe, le, fe, "\u2a02", "\\bigotimes"), ie(oe, le, fe, "\u2a01", "\\bigoplus"), ie(oe, le, fe, "\u2a00", "\\bigodot"), ie(oe, le, fe, "\u222e", "\\oint"), ie(oe, le, fe, "\u222f", "\\oiint"), ie(oe, le, fe, "\u2230", "\\oiiint"), ie(oe, le, fe, "\u2a06", "\\bigsqcup"), ie(oe, le, fe, "\u222b", "\\smallint"), ie(se, le, pe, "\u2026", "\\textellipsis"), ie(oe, le, pe, "\u2026", "\\mathellipsis"), ie(se, le, pe, "\u2026", "\\ldots", !0), ie(oe, le, pe, "\u2026", "\\ldots", !0), ie(oe, le, pe, "\u22ef", "\\@cdots", !0), ie(oe, le, pe, "\u22f1", "\\ddots", !0), ie(oe, le, xe, "\u22ee", "\\varvdots"), ie(oe, le, ce, "\u02ca", "\\acute"), ie(oe, le, ce, "\u02cb", "\\grave"), ie(oe, le, ce, "\xa8", "\\ddot"), ie(oe, le, ce, "~", "\\tilde"), ie(oe, le, ce, "\u02c9", "\\bar"), ie(oe, le, ce, "\u02d8", "\\breve"), ie(oe, le, ce, "\u02c7", "\\check"), ie(oe, le, ce, "^", "\\hat"), ie(oe, le, ce, "\u20d7", "\\vec"), ie(oe, le, ce, "\u02d9", "\\dot"), ie(oe, le, ce, "\u02da", "\\mathring"), ie(oe, le, de, "\ue131", "\\@imath"), ie(oe, le, de, "\ue237", "\\@jmath"), ie(oe, le, xe, "\u0131", "\u0131"), ie(oe, le, xe, "\u0237", "\u0237"), ie(se, le, xe, "\u0131", "\\i", !0), ie(se, le, xe, "\u0237", "\\j", !0), ie(se, le, xe, "\xdf", "\\ss", !0), ie(se, le, xe, "\xe6", "\\ae", !0), ie(se, le, xe, "\u0153", "\\oe", !0), ie(se, le, xe, "\xf8", "\\o", !0), ie(se, le, xe, "\xc6", "\\AE", !0), ie(se, le, xe, "\u0152", "\\OE", !0), ie(se, le, xe, "\xd8", "\\O", !0), ie(se, le, ce, "\u02ca", "\\'"), ie(se, le, ce, "\u02cb", "\\`"), ie(se, le, ce, "\u02c6", "\\^"), ie(se, le, ce, "\u02dc", "\\~"), ie(se, le, ce, "\u02c9", "\\="), ie(se, le, ce, "\u02d8", "\\u"), ie(se, le, ce, "\u02d9", "\\."), ie(se, le, ce, "\xb8", "\\c"), ie(se, le, ce, "\u02da", "\\r"), ie(se, le, ce, "\u02c7", "\\v"), ie(se, le, ce, "\xa8", '\\"'), ie(se, le, ce, "\u02dd", "\\H"), ie(se, le, ce, "\u25ef", "\\textcircled");
                    var we = {
                        "--": !0,
                        "---": !0,
                        "``": !0,
                        "''": !0
                    };
                    ie(se, le, xe, "\u2013", "--", !0), ie(se, le, xe, "\u2013", "\\textendash"), ie(se, le, xe, "\u2014", "---", !0), ie(se, le, xe, "\u2014", "\\textemdash"), ie(se, le, xe, "\u2018", "`", !0), ie(se, le, xe, "\u2018", "\\textquoteleft"), ie(se, le, xe, "\u2019", "'", !0), ie(se, le, xe, "\u2019", "\\textquoteright"), ie(se, le, xe, "\u201c", "``", !0), ie(se, le, xe, "\u201c", "\\textquotedblleft"), ie(se, le, xe, "\u201d", "''", !0), ie(se, le, xe, "\u201d", "\\textquotedblright"), ie(oe, le, xe, "\xb0", "\\degree", !0), ie(se, le, xe, "\xb0", "\\degree"), ie(se, le, xe, "\xb0", "\\textdegree", !0), ie(oe, le, xe, "\xa3", "\\pounds"), ie(oe, le, xe, "\xa3", "\\mathsterling", !0), ie(se, le, xe, "\xa3", "\\pounds"), ie(se, le, xe, "\xa3", "\\textsterling", !0), ie(oe, he, xe, "\u2720", "\\maltese"), ie(se, he, xe, "\u2720", "\\maltese");
                    for (var ke = '0123456789/@."', Se = 0; Se < ke.length; Se++) {
                        var Me = ke.charAt(Se);
                        ie(oe, le, xe, Me, Me)
                    }
                    for (var ze = '0123456789!@*()-=+";:?/.,', Ae = 0; Ae < ze.length; Ae++) {
                        var Te = ze.charAt(Ae);
                        ie(se, le, xe, Te, Te)
                    }
                    for (var Be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", Ce = 0; Ce < Be.length; Ce++) {
                        var Ne = Be.charAt(Ce);
                        ie(oe, le, de, Ne, Ne), ie(se, le, xe, Ne, Ne)
                    }
                    ie(oe, he, xe, "C", "\u2102"), ie(se, he, xe, "C", "\u2102"), ie(oe, he, xe, "H", "\u210d"), ie(se, he, xe, "H", "\u210d"), ie(oe, he, xe, "N", "\u2115"), ie(se, he, xe, "N", "\u2115"), ie(oe, he, xe, "P", "\u2119"), ie(se, he, xe, "P", "\u2119"), ie(oe, he, xe, "Q", "\u211a"), ie(se, he, xe, "Q", "\u211a"), ie(oe, he, xe, "R", "\u211d"), ie(se, he, xe, "R", "\u211d"), ie(oe, he, xe, "Z", "\u2124"), ie(se, he, xe, "Z", "\u2124"), ie(oe, le, de, "h", "\u210e"), ie(se, le, de, "h", "\u210e");
                    for (var qe = "", Ie = 0; Ie < Be.length; Ie++) {
                        var Re = Be.charAt(Ie);
                        ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56320 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56372 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56424 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56580 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56736 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56788 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56840 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56944 + Ie)), ie(se, le, xe, Re, qe), Ie < 26 && (ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56632 + Ie)), ie(se, le, xe, Re, qe), ie(oe, le, de, Re, qe = String.fromCharCode(55349, 56476 + Ie)), ie(se, le, xe, Re, qe))
                    }
                    ie(oe, le, de, "k", qe = String.fromCharCode(55349, 56668)), ie(se, le, xe, "k", qe);
                    for (var He = 0; He < 10; He++) {
                        var Oe = He.toString();
                        ie(oe, le, de, Oe, qe = String.fromCharCode(55349, 57294 + He)), ie(se, le, xe, Oe, qe), ie(oe, le, de, Oe, qe = String.fromCharCode(55349, 57314 + He)), ie(se, le, xe, Oe, qe), ie(oe, le, de, Oe, qe = String.fromCharCode(55349, 57324 + He)), ie(se, le, xe, Oe, qe), ie(oe, le, de, Oe, qe = String.fromCharCode(55349, 57334 + He)), ie(se, le, xe, Oe, qe)
                    }
                    for (var Ee = "\xd0\xde\xfe", Le = 0; Le < Ee.length; Le++) {
                        var De = Ee.charAt(Le);
                        ie(oe, le, de, De, De), ie(se, le, xe, De, De)
                    }
                    var Ve = [
                            ["mathbf", "textbf", "Main-Bold"],
                            ["mathbf", "textbf", "Main-Bold"],
                            ["mathnormal", "textit", "Math-Italic"],
                            ["mathnormal", "textit", "Math-Italic"],
                            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                            ["mathscr", "textscr", "Script-Regular"],
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathfrak", "textfrak", "Fraktur-Regular"],
                            ["mathfrak", "textfrak", "Fraktur-Regular"],
                            ["mathbb", "textbb", "AMS-Regular"],
                            ["mathbb", "textbb", "AMS-Regular"],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathitsf", "textitsf", "SansSerif-Italic"],
                            ["mathitsf", "textitsf", "SansSerif-Italic"],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathtt", "texttt", "Typewriter-Regular"],
                            ["mathtt", "texttt", "Typewriter-Regular"]
                        ],
                        Pe = [
                            ["mathbf", "textbf", "Main-Bold"],
                            ["", "", ""],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathtt", "texttt", "Typewriter-Regular"]
                        ],
                        Fe = function(e, t, r) {
                            return ae[r][e] && ae[r][e].replace && (e = ae[r][e].replace), {
                                value: e,
                                metrics: N(e, t, r)
                            }
                        },
                        Ge = function(e, t, r, n, a) {
                            var i, o = Fe(e, t, r),
                                s = o.metrics;
                            if (e = o.value, s) {
                                var l = s.italic;
                                ("text" === r || n && "mathit" === n.font) && (l = 0), i = new Z(e, s.height, s.depth, l, s.skew, s.width, a)
                            } else "undefined" !== typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "' and mode '" + r + "'"), i = new Z(e, 0, 0, 0, 0, 0, a);
                            if (n) {
                                i.maxFontSize = n.sizeMultiplier, n.style.isTight() && i.classes.push("mtight");
                                var h = n.getColor();
                                h && (i.style.color = h)
                            }
                            return i
                        },
                        Ue = function(e, t) {
                            if (G(e.classes) !== G(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1;
                            if (1 === e.classes.length) {
                                var r = e.classes[0];
                                if ("mbin" === r || "mord" === r) return !1
                            }
                            for (var n in e.style)
                                if (e.style.hasOwnProperty(n) && e.style[n] !== t.style[n]) return !1;
                            for (var a in t.style)
                                if (t.style.hasOwnProperty(a) && e.style[a] !== t.style[a]) return !1;
                            return !0
                        },
                        Ye = function(e) {
                            for (var t = 0, r = 0, n = 0, a = 0; a < e.children.length; a++) {
                                var i = e.children[a];
                                i.height > t && (t = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize)
                            }
                            e.height = t, e.depth = r, e.maxFontSize = n
                        },
                        Xe = function(e, t, r, n) {
                            var a = new W(e, t, r, n);
                            return Ye(a), a
                        },
                        We = function(e, t, r, n) {
                            return new W(e, t, r, n)
                        },
                        _e = function(e) {
                            var t = new A(e);
                            return Ye(t), t
                        },
                        je = function(e, t, r) {
                            var n = "";
                            switch (e) {
                                case "amsrm":
                                    n = "AMS";
                                    break;
                                case "textrm":
                                    n = "Main";
                                    break;
                                case "textsf":
                                    n = "SansSerif";
                                    break;
                                case "texttt":
                                    n = "Typewriter";
                                    break;
                                default:
                                    n = e
                            }
                            return n + "-" + ("textbf" === t && "textit" === r ? "BoldItalic" : "textbf" === t ? "Bold" : "textit" === t ? "Italic" : "Regular")
                        },
                        $e = {
                            mathbf: {
                                variant: "bold",
                                fontName: "Main-Bold"
                            },
                            mathrm: {
                                variant: "normal",
                                fontName: "Main-Regular"
                            },
                            textit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathnormal: {
                                variant: "italic",
                                fontName: "Math-Italic"
                            },
                            mathbb: {
                                variant: "double-struck",
                                fontName: "AMS-Regular"
                            },
                            mathcal: {
                                variant: "script",
                                fontName: "Caligraphic-Regular"
                            },
                            mathfrak: {
                                variant: "fraktur",
                                fontName: "Fraktur-Regular"
                            },
                            mathscr: {
                                variant: "script",
                                fontName: "Script-Regular"
                            },
                            mathsf: {
                                variant: "sans-serif",
                                fontName: "SansSerif-Regular"
                            },
                            mathtt: {
                                variant: "monospace",
                                fontName: "Typewriter-Regular"
                            }
                        },
                        Ze = {
                            vec: ["vec", .471, .714],
                            oiintSize1: ["oiintSize1", .957, .499],
                            oiintSize2: ["oiintSize2", 1.472, .659],
                            oiiintSize1: ["oiiintSize1", 1.304, .499],
                            oiiintSize2: ["oiiintSize2", 1.98, .659]
                        },
                        Ke = {
                            fontMap: $e,
                            makeSymbol: Ge,
                            mathsym: function(e, t, r, n) {
                                return void 0 === n && (n = []), "boldsymbol" === r.font && Fe(e, "Main-Bold", t).metrics ? Ge(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === ae[t][e].font ? Ge(e, "Main-Regular", t, r, n) : Ge(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
                            },
                            makeSpan: Xe,
                            makeSvgSpan: We,
                            makeLineSpan: function(e, t, r) {
                                var n = Xe([e], [], t);
                                return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = F(n.height), n.maxFontSize = 1, n
                            },
                            makeAnchor: function(e, t, r, n) {
                                var a = new _(e, t, r, n);
                                return Ye(a), a
                            },
                            makeFragment: _e,
                            wrapFragment: function(e, t) {
                                return e instanceof A ? Xe([], [e], t) : e
                            },
                            makeVList: function(e, t) {
                                for (var r = function(e) {
                                        if ("individualShift" === e.positionType) {
                                            for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                                                var o = -t[i].shift - a - t[i].elem.depth,
                                                    s = o - (t[i - 1].elem.height + t[i - 1].elem.depth);
                                                a += o, r.push({
                                                    type: "kern",
                                                    size: s
                                                }), r.push(t[i])
                                            }
                                            return {
                                                children: r,
                                                depth: n
                                            }
                                        }
                                        var l;
                                        if ("top" === e.positionType) {
                                            for (var h = e.positionData, c = 0; c < e.children.length; c++) {
                                                var m = e.children[c];
                                                h -= "kern" === m.type ? m.size : m.elem.height + m.elem.depth
                                            }
                                            l = h
                                        } else if ("bottom" === e.positionType) l = -e.positionData;
                                        else {
                                            var u = e.children[0];
                                            if ("elem" !== u.type) throw new Error('First child must have type "elem".');
                                            if ("shift" === e.positionType) l = -u.elem.depth - e.positionData;
                                            else {
                                                if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                                                l = -u.elem.depth
                                            }
                                        }
                                        return {
                                            children: e.children,
                                            depth: l
                                        }
                                    }(e), n = r.children, a = r.depth, i = 0, o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    if ("elem" === s.type) {
                                        var l = s.elem;
                                        i = Math.max(i, l.maxFontSize, l.height)
                                    }
                                }
                                i += 2;
                                var h = Xe(["pstrut"], []);
                                h.style.height = F(i);
                                for (var c = [], m = a, u = a, p = a, d = 0; d < n.length; d++) {
                                    var f = n[d];
                                    if ("kern" === f.type) p += f.size;
                                    else {
                                        var g = f.elem,
                                            v = f.wrapperClasses || [],
                                            b = f.wrapperStyle || {},
                                            y = Xe(v, [h, g], void 0, b);
                                        y.style.top = F(-i - p - g.depth), f.marginLeft && (y.style.marginLeft = f.marginLeft), f.marginRight && (y.style.marginRight = f.marginRight), c.push(y), p += g.height + g.depth
                                    }
                                    m = Math.min(m, p), u = Math.max(u, p)
                                }
                                var x, w = Xe(["vlist"], c);
                                if (w.style.height = F(u), m < 0) {
                                    var k = Xe([], []),
                                        S = Xe(["vlist"], [k]);
                                    S.style.height = F(-m);
                                    var M = Xe(["vlist-s"], [new Z("\u200b")]);
                                    x = [Xe(["vlist-r"], [w, M]), Xe(["vlist-r"], [S])]
                                } else x = [Xe(["vlist-r"], [w])];
                                var z = Xe(["vlist-t"], x);
                                return 2 === x.length && z.classes.push("vlist-t2"), z.height = u, z.depth = -m, z
                            },
                            makeOrd: function(e, t, r) {
                                var a = e.mode,
                                    i = e.text,
                                    o = ["mord"],
                                    s = "math" === a || "text" === a && t.font,
                                    l = s ? t.font : t.fontFamily;
                                if (55349 === i.charCodeAt(0)) {
                                    var h = function(e, t) {
                                            var r = 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536,
                                                a = "math" === t ? 0 : 1;
                                            if (119808 <= r && r < 120484) {
                                                var i = Math.floor((r - 119808) / 26);
                                                return [Ve[i][2], Ve[i][a]]
                                            }
                                            if (120782 <= r && r <= 120831) {
                                                var o = Math.floor((r - 120782) / 10);
                                                return [Pe[o][2], Pe[o][a]]
                                            }
                                            if (120485 === r || 120486 === r) return [Ve[0][2], Ve[0][a]];
                                            if (120486 < r && r < 120782) return ["", ""];
                                            throw new n("Unsupported character: " + e)
                                        }(i, a),
                                        c = h[0],
                                        m = h[1];
                                    return Ge(i, c, a, t, o.concat(m))
                                }
                                if (l) {
                                    var u, p;
                                    if ("boldsymbol" === l) {
                                        var d = function(e, t, r, n, a) {
                                            return "textord" !== a && Fe(e, "Math-BoldItalic", t).metrics ? {
                                                fontName: "Math-BoldItalic",
                                                fontClass: "boldsymbol"
                                            } : {
                                                fontName: "Main-Bold",
                                                fontClass: "mathbf"
                                            }
                                        }(i, a, 0, 0, r);
                                        u = d.fontName, p = [d.fontClass]
                                    } else s ? (u = $e[l].fontName, p = [l]) : (u = je(l, t.fontWeight, t.fontShape), p = [l, t.fontWeight, t.fontShape]);
                                    if (Fe(i, u, a).metrics) return Ge(i, u, a, t, o.concat(p));
                                    if (we.hasOwnProperty(i) && "Typewriter" === u.slice(0, 10)) {
                                        for (var f = [], g = 0; g < i.length; g++) f.push(Ge(i[g], u, a, t, o.concat(p)));
                                        return _e(f)
                                    }
                                }
                                if ("mathord" === r) return Ge(i, "Math-Italic", a, t, o.concat(["mathnormal"]));
                                if ("textord" === r) {
                                    var v = ae[a][i] && ae[a][i].font;
                                    if ("ams" === v) {
                                        var b = je("amsrm", t.fontWeight, t.fontShape);
                                        return Ge(i, b, a, t, o.concat("amsrm", t.fontWeight, t.fontShape))
                                    }
                                    if ("main" !== v && v) {
                                        var y = je(v, t.fontWeight, t.fontShape);
                                        return Ge(i, y, a, t, o.concat(y, t.fontWeight, t.fontShape))
                                    }
                                    var x = je("textrm", t.fontWeight, t.fontShape);
                                    return Ge(i, x, a, t, o.concat(t.fontWeight, t.fontShape))
                                }
                                throw new Error("unexpected type: " + r + " in makeOrd")
                            },
                            makeGlue: function(e, t) {
                                var r = Xe(["mspace"], [], t),
                                    n = P(e, t);
                                return r.style.marginRight = F(n), r
                            },
                            staticSvg: function(e, t) {
                                var r = Ze[e],
                                    n = r[0],
                                    a = r[1],
                                    i = r[2],
                                    o = new J(n),
                                    s = new K([o], {
                                        width: F(a),
                                        height: F(i),
                                        style: "width:" + F(a),
                                        viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
                                        preserveAspectRatio: "xMinYMin"
                                    }),
                                    l = We(["overlay"], [s], t);
                                return l.height = i, l.style.height = F(i), l.style.width = F(a), l
                            },
                            svgData: Ze,
                            tryCombineChars: function(e) {
                                for (var t = 0; t < e.length - 1; t++) {
                                    var r = e[t],
                                        n = e[t + 1];
                                    r instanceof Z && n instanceof Z && Ue(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, e.splice(t + 1, 1), t--)
                                }
                                return e
                            }
                        },
                        Je = {
                            number: 3,
                            unit: "mu"
                        },
                        Qe = {
                            number: 4,
                            unit: "mu"
                        },
                        et = {
                            number: 5,
                            unit: "mu"
                        },
                        tt = {
                            mord: {
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                minner: Je
                            },
                            mop: {
                                mord: Je,
                                mop: Je,
                                mrel: et,
                                minner: Je
                            },
                            mbin: {
                                mord: Qe,
                                mop: Qe,
                                mopen: Qe,
                                minner: Qe
                            },
                            mrel: {
                                mord: et,
                                mop: et,
                                mopen: et,
                                minner: et
                            },
                            mopen: {},
                            mclose: {
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                minner: Je
                            },
                            mpunct: {
                                mord: Je,
                                mop: Je,
                                mrel: et,
                                mopen: Je,
                                mclose: Je,
                                mpunct: Je,
                                minner: Je
                            },
                            minner: {
                                mord: Je,
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                mopen: Je,
                                mpunct: Je,
                                minner: Je
                            }
                        },
                        rt = {
                            mord: {
                                mop: Je
                            },
                            mop: {
                                mord: Je,
                                mop: Je
                            },
                            mbin: {},
                            mrel: {},
                            mopen: {},
                            mclose: {
                                mop: Je
                            },
                            mpunct: {},
                            minner: {
                                mop: Je
                            }
                        },
                        nt = {},
                        at = {},
                        it = {};

                    function ot(e) {
                        for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
                                type: t,
                                numArgs: n.numArgs,
                                argTypes: n.argTypes,
                                allowedInArgument: !!n.allowedInArgument,
                                allowedInText: !!n.allowedInText,
                                allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
                                numOptionalArgs: n.numOptionalArgs || 0,
                                infix: !!n.infix,
                                primitive: !!n.primitive,
                                handler: a
                            }, l = 0; l < r.length; ++l) nt[r[l]] = s;
                        t && (i && (at[t] = i), o && (it[t] = o))
                    }

                    function st(e) {
                        ot({
                            type: e.type,
                            names: [],
                            props: {
                                numArgs: 0
                            },
                            handler: function() {
                                throw new Error("Should never be called.")
                            },
                            htmlBuilder: e.htmlBuilder,
                            mathmlBuilder: e.mathmlBuilder
                        })
                    }
                    var lt = function(e) {
                            return "ordgroup" === e.type && 1 === e.body.length ? e.body[0] : e
                        },
                        ht = function(e) {
                            return "ordgroup" === e.type ? e.body : [e]
                        },
                        ct = Ke.makeSpan,
                        mt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
                        ut = ["rightmost", "mrel", "mclose", "mpunct"],
                        pt = {
                            display: x.DISPLAY,
                            text: x.TEXT,
                            script: x.SCRIPT,
                            scriptscript: x.SCRIPTSCRIPT
                        },
                        dt = {
                            mord: "mord",
                            mop: "mop",
                            mbin: "mbin",
                            mrel: "mrel",
                            mopen: "mopen",
                            mclose: "mclose",
                            mpunct: "mpunct",
                            minner: "minner"
                        },
                        ft = function(e, t, r, n) {
                            void 0 === n && (n = [null, null]);
                            for (var a = [], i = 0; i < e.length; i++) {
                                var o = wt(e[i], t);
                                if (o instanceof A) {
                                    var s = o.children;
                                    a.push.apply(a, s)
                                } else a.push(o)
                            }
                            if (Ke.tryCombineChars(a), !r) return a;
                            var h = t;
                            if (1 === e.length) {
                                var c = e[0];
                                "sizing" === c.type ? h = t.havingSize(c.size) : "styling" === c.type && (h = t.havingStyle(pt[c.style]))
                            }
                            var m = ct([n[0] || "leftmost"], [], t),
                                u = ct([n[1] || "rightmost"], [], t),
                                p = "root" === r;
                            return gt(a, (function(e, t) {
                                var r = t.classes[0],
                                    n = e.classes[0];
                                "mbin" === r && l.contains(ut, n) ? t.classes[0] = "mord" : "mbin" === n && l.contains(mt, r) && (e.classes[0] = "mord")
                            }), {
                                node: m
                            }, u, p), gt(a, (function(e, t) {
                                var r = yt(t),
                                    n = yt(e),
                                    a = r && n ? e.hasClass("mtight") ? rt[r][n] : tt[r][n] : null;
                                if (a) return Ke.makeGlue(a, h)
                            }), {
                                node: m
                            }, u, p), a
                        },
                        gt = function e(t, r, n, a, i) {
                            a && t.push(a);
                            for (var o = 0; o < t.length; o++) {
                                var s = t[o],
                                    l = vt(s);
                                if (l) e(l.children, r, n, null, i);
                                else {
                                    var h = !s.hasClass("mspace");
                                    if (h) {
                                        var c = r(s, n.node);
                                        c && (n.insertAfter ? n.insertAfter(c) : (t.unshift(c), o++))
                                    }
                                    h ? n.node = s : i && s.hasClass("newline") && (n.node = ct(["leftmost"])), n.insertAfter = function(e) {
                                        return function(r) {
                                            t.splice(e + 1, 0, r), o++
                                        }
                                    }(o)
                                }
                            }
                            a && t.pop()
                        },
                        vt = function(e) {
                            return e instanceof A || e instanceof _ || e instanceof W && e.hasClass("enclosing") ? e : null
                        },
                        bt = function e(t, r) {
                            var n = vt(t);
                            if (n) {
                                var a = n.children;
                                if (a.length) {
                                    if ("right" === r) return e(a[a.length - 1], "right");
                                    if ("left" === r) return e(a[0], "left")
                                }
                            }
                            return t
                        },
                        yt = function(e, t) {
                            return e ? (t && (e = bt(e, t)), dt[e.classes[0]] || null) : null
                        },
                        xt = function(e, t) {
                            var r = ["nulldelimiter"].concat(e.baseSizingClasses());
                            return ct(t.concat(r))
                        },
                        wt = function(e, t, r) {
                            if (!e) return ct();
                            if (at[e.type]) {
                                var a = at[e.type](e, t);
                                if (r && t.size !== r.size) {
                                    a = ct(t.sizingClasses(r), [a], t);
                                    var i = t.sizeMultiplier / r.sizeMultiplier;
                                    a.height *= i, a.depth *= i
                                }
                                return a
                            }
                            throw new n("Got group of unknown type: '" + e.type + "'")
                        };

                    function kt(e, t) {
                        var r = ct(["base"], e, t),
                            n = ct(["strut"]);
                        return n.style.height = F(r.height + r.depth), r.depth && (n.style.verticalAlign = F(-r.depth)), r.children.unshift(n), r
                    }

                    function St(e, t) {
                        var r = null;
                        1 === e.length && "tag" === e[0].type && (r = e[0].tag, e = e[0].body);
                        var n, a = ft(e, t, "root");
                        2 === a.length && a[1].hasClass("tag") && (n = a.pop());
                        for (var i, o = [], s = [], l = 0; l < a.length; l++)
                            if (s.push(a[l]), a[l].hasClass("mbin") || a[l].hasClass("mrel") || a[l].hasClass("allowbreak")) {
                                for (var h = !1; l < a.length - 1 && a[l + 1].hasClass("mspace") && !a[l + 1].hasClass("newline");) l++, s.push(a[l]), a[l].hasClass("nobreak") && (h = !0);
                                h || (o.push(kt(s, t)), s = [])
                            } else a[l].hasClass("newline") && (s.pop(), s.length > 0 && (o.push(kt(s, t)), s = []), o.push(a[l]));
                        s.length > 0 && o.push(kt(s, t)), r ? ((i = kt(ft(r, t, !0))).classes = ["tag"], o.push(i)) : n && o.push(n);
                        var c = ct(["katex-html"], o);
                        if (c.setAttribute("aria-hidden", "true"), i) {
                            var m = i.children[0];
                            m.style.height = F(c.height + c.depth), c.depth && (m.style.verticalAlign = F(-c.depth))
                        }
                        return c
                    }

                    function Mt(e) {
                        return new A(e)
                    }
                    var zt = function() {
                            function e(e, t, r) {
                                this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || []
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.getAttribute = function(e) {
                                return this.attributes[e]
                            }, t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                this.classes.length > 0 && (e.className = G(this.classes));
                                for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                                return e
                            }, t.toMarkup = function() {
                                var e = "<" + this.type;
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += l.escape(this.attributes[t]), e += '"');
                                this.classes.length > 0 && (e += ' class ="' + l.escape(G(this.classes)) + '"'), e += ">";
                                for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
                                return e += "</" + this.type + ">"
                            }, t.toText = function() {
                                return this.children.map((function(e) {
                                    return e.toText()
                                })).join("")
                            }, e
                        }(),
                        At = function() {
                            function e(e) {
                                this.text = void 0, this.text = e
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                return document.createTextNode(this.text)
                            }, t.toMarkup = function() {
                                return l.escape(this.toText())
                            }, t.toText = function() {
                                return this.text
                            }, e
                        }(),
                        Tt = {
                            MathNode: zt,
                            TextNode: At,
                            SpaceNode: function() {
                                function e(e) {
                                    this.width = void 0, this.character = void 0, this.width = e, this.character = e >= .05555 && e <= .05556 ? "\u200a" : e >= .1666 && e <= .1667 ? "\u2009" : e >= .2222 && e <= .2223 ? "\u2005" : e >= .2777 && e <= .2778 ? "\u2005\u200a" : e >= -.05556 && e <= -.05555 ? "\u200a\u2063" : e >= -.1667 && e <= -.1666 ? "\u2009\u2063" : e >= -.2223 && e <= -.2222 ? "\u205f\u2063" : e >= -.2778 && e <= -.2777 ? "\u2005\u2063" : null
                                }
                                var t = e.prototype;
                                return t.toNode = function() {
                                    if (this.character) return document.createTextNode(this.character);
                                    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                                    return e.setAttribute("width", F(this.width)), e
                                }, t.toMarkup = function() {
                                    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + F(this.width) + '"/>'
                                }, t.toText = function() {
                                    return this.character ? this.character : " "
                                }, e
                            }(),
                            newDocumentFragment: Mt
                        },
                        Bt = function(e, t, r) {
                            return !ae[t][e] || !ae[t][e].replace || 55349 === e.charCodeAt(0) || we.hasOwnProperty(e) && r && (r.fontFamily && "tt" === r.fontFamily.slice(4, 6) || r.font && "tt" === r.font.slice(4, 6)) || (e = ae[t][e].replace), new Tt.TextNode(e)
                        },
                        Ct = function(e) {
                            return 1 === e.length ? e[0] : new Tt.MathNode("mrow", e)
                        },
                        Nt = function(e, t) {
                            if ("texttt" === t.fontFamily) return "monospace";
                            if ("textsf" === t.fontFamily) return "textit" === t.fontShape && "textbf" === t.fontWeight ? "sans-serif-bold-italic" : "textit" === t.fontShape ? "sans-serif-italic" : "textbf" === t.fontWeight ? "bold-sans-serif" : "sans-serif";
                            if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "bold-italic";
                            if ("textit" === t.fontShape) return "italic";
                            if ("textbf" === t.fontWeight) return "bold";
                            var r = t.font;
                            if (!r || "mathnormal" === r) return null;
                            var n = e.mode;
                            if ("mathit" === r) return "italic";
                            if ("boldsymbol" === r) return "textord" === e.type ? "bold" : "bold-italic";
                            if ("mathbf" === r) return "bold";
                            if ("mathbb" === r) return "double-struck";
                            if ("mathfrak" === r) return "fraktur";
                            if ("mathscr" === r || "mathcal" === r) return "script";
                            if ("mathsf" === r) return "sans-serif";
                            if ("mathtt" === r) return "monospace";
                            var a = e.text;
                            return l.contains(["\\imath", "\\jmath"], a) ? null : (ae[n][a] && ae[n][a].replace && (a = ae[n][a].replace), N(a, Ke.fontMap[r].fontName, n) ? Ke.fontMap[r].variant : null)
                        },
                        qt = function(e, t, r) {
                            if (1 === e.length) {
                                var n = Rt(e[0], t);
                                return r && n instanceof zt && "mo" === n.type && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n]
                            }
                            for (var a, i = [], o = 0; o < e.length; o++) {
                                var s = Rt(e[o], t);
                                if (s instanceof zt && a instanceof zt) {
                                    if ("mtext" === s.type && "mtext" === a.type && s.getAttribute("mathvariant") === a.getAttribute("mathvariant")) {
                                        var l;
                                        (l = a.children).push.apply(l, s.children);
                                        continue
                                    }
                                    if ("mn" === s.type && "mn" === a.type) {
                                        var h;
                                        (h = a.children).push.apply(h, s.children);
                                        continue
                                    }
                                    if ("mi" === s.type && 1 === s.children.length && "mn" === a.type) {
                                        var c = s.children[0];
                                        if (c instanceof At && "." === c.text) {
                                            var m;
                                            (m = a.children).push.apply(m, s.children);
                                            continue
                                        }
                                    } else if ("mi" === a.type && 1 === a.children.length) {
                                        var u = a.children[0];
                                        if (u instanceof At && "\u0338" === u.text && ("mo" === s.type || "mi" === s.type || "mn" === s.type)) {
                                            var p = s.children[0];
                                            p instanceof At && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "\u0338" + p.text.slice(1), i.pop())
                                        }
                                    }
                                }
                                i.push(s), a = s
                            }
                            return i
                        },
                        It = function(e, t, r) {
                            return Ct(qt(e, t, r))
                        },
                        Rt = function(e, t) {
                            if (!e) return new Tt.MathNode("mrow");
                            if (it[e.type]) return it[e.type](e, t);
                            throw new n("Got group of unknown type: '" + e.type + "'")
                        };

                    function Ht(e, t, r, n, a) {
                        var i, o = qt(e, r);
                        i = 1 === o.length && o[0] instanceof zt && l.contains(["mrow", "mtable"], o[0].type) ? o[0] : new Tt.MathNode("mrow", o);
                        var s = new Tt.MathNode("annotation", [new Tt.TextNode(t)]);
                        s.setAttribute("encoding", "application/x-tex");
                        var h = new Tt.MathNode("semantics", [i, s]),
                            c = new Tt.MathNode("math", [h]);
                        c.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && c.setAttribute("display", "block");
                        var m = a ? "katex" : "katex-mathml";
                        return Ke.makeSpan([m], [c])
                    }
                    var Ot = function(e) {
                            return new E({
                                style: e.displayMode ? x.DISPLAY : x.TEXT,
                                maxSize: e.maxSize,
                                minRuleThickness: e.minRuleThickness
                            })
                        },
                        Et = function(e, t) {
                            if (t.displayMode) {
                                var r = ["katex-display"];
                                t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = Ke.makeSpan(r, [e])
                            }
                            return e
                        },
                        Lt = {
                            widehat: "^",
                            widecheck: "\u02c7",
                            widetilde: "~",
                            utilde: "~",
                            overleftarrow: "\u2190",
                            underleftarrow: "\u2190",
                            xleftarrow: "\u2190",
                            overrightarrow: "\u2192",
                            underrightarrow: "\u2192",
                            xrightarrow: "\u2192",
                            underbrace: "\u23df",
                            overbrace: "\u23de",
                            overgroup: "\u23e0",
                            undergroup: "\u23e1",
                            overleftrightarrow: "\u2194",
                            underleftrightarrow: "\u2194",
                            xleftrightarrow: "\u2194",
                            Overrightarrow: "\u21d2",
                            xRightarrow: "\u21d2",
                            overleftharpoon: "\u21bc",
                            xleftharpoonup: "\u21bc",
                            overrightharpoon: "\u21c0",
                            xrightharpoonup: "\u21c0",
                            xLeftarrow: "\u21d0",
                            xLeftrightarrow: "\u21d4",
                            xhookleftarrow: "\u21a9",
                            xhookrightarrow: "\u21aa",
                            xmapsto: "\u21a6",
                            xrightharpoondown: "\u21c1",
                            xleftharpoondown: "\u21bd",
                            xrightleftharpoons: "\u21cc",
                            xleftrightharpoons: "\u21cb",
                            xtwoheadleftarrow: "\u219e",
                            xtwoheadrightarrow: "\u21a0",
                            xlongequal: "=",
                            xtofrom: "\u21c4",
                            xrightleftarrows: "\u21c4",
                            xrightequilibrium: "\u21cc",
                            xleftequilibrium: "\u21cb",
                            "\\cdrightarrow": "\u2192",
                            "\\cdleftarrow": "\u2190",
                            "\\cdlongequal": "="
                        },
                        Dt = {
                            overrightarrow: [
                                ["rightarrow"], .888, 522, "xMaxYMin"
                            ],
                            overleftarrow: [
                                ["leftarrow"], .888, 522, "xMinYMin"
                            ],
                            underrightarrow: [
                                ["rightarrow"], .888, 522, "xMaxYMin"
                            ],
                            underleftarrow: [
                                ["leftarrow"], .888, 522, "xMinYMin"
                            ],
                            xrightarrow: [
                                ["rightarrow"], 1.469, 522, "xMaxYMin"
                            ],
                            "\\cdrightarrow": [
                                ["rightarrow"], 3, 522, "xMaxYMin"
                            ],
                            xleftarrow: [
                                ["leftarrow"], 1.469, 522, "xMinYMin"
                            ],
                            "\\cdleftarrow": [
                                ["leftarrow"], 3, 522, "xMinYMin"
                            ],
                            Overrightarrow: [
                                ["doublerightarrow"], .888, 560, "xMaxYMin"
                            ],
                            xRightarrow: [
                                ["doublerightarrow"], 1.526, 560, "xMaxYMin"
                            ],
                            xLeftarrow: [
                                ["doubleleftarrow"], 1.526, 560, "xMinYMin"
                            ],
                            overleftharpoon: [
                                ["leftharpoon"], .888, 522, "xMinYMin"
                            ],
                            xleftharpoonup: [
                                ["leftharpoon"], .888, 522, "xMinYMin"
                            ],
                            xleftharpoondown: [
                                ["leftharpoondown"], .888, 522, "xMinYMin"
                            ],
                            overrightharpoon: [
                                ["rightharpoon"], .888, 522, "xMaxYMin"
                            ],
                            xrightharpoonup: [
                                ["rightharpoon"], .888, 522, "xMaxYMin"
                            ],
                            xrightharpoondown: [
                                ["rightharpoondown"], .888, 522, "xMaxYMin"
                            ],
                            xlongequal: [
                                ["longequal"], .888, 334, "xMinYMin"
                            ],
                            "\\cdlongequal": [
                                ["longequal"], 3, 334, "xMinYMin"
                            ],
                            xtwoheadleftarrow: [
                                ["twoheadleftarrow"], .888, 334, "xMinYMin"
                            ],
                            xtwoheadrightarrow: [
                                ["twoheadrightarrow"], .888, 334, "xMaxYMin"
                            ],
                            overleftrightarrow: [
                                ["leftarrow", "rightarrow"], .888, 522
                            ],
                            overbrace: [
                                ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
                            ],
                            underbrace: [
                                ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
                            ],
                            underleftrightarrow: [
                                ["leftarrow", "rightarrow"], .888, 522
                            ],
                            xleftrightarrow: [
                                ["leftarrow", "rightarrow"], 1.75, 522
                            ],
                            xLeftrightarrow: [
                                ["doubleleftarrow", "doublerightarrow"], 1.75, 560
                            ],
                            xrightleftharpoons: [
                                ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
                            ],
                            xleftrightharpoons: [
                                ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
                            ],
                            xhookleftarrow: [
                                ["leftarrow", "righthook"], 1.08, 522
                            ],
                            xhookrightarrow: [
                                ["lefthook", "rightarrow"], 1.08, 522
                            ],
                            overlinesegment: [
                                ["leftlinesegment", "rightlinesegment"], .888, 522
                            ],
                            underlinesegment: [
                                ["leftlinesegment", "rightlinesegment"], .888, 522
                            ],
                            overgroup: [
                                ["leftgroup", "rightgroup"], .888, 342
                            ],
                            undergroup: [
                                ["leftgroupunder", "rightgroupunder"], .888, 342
                            ],
                            xmapsto: [
                                ["leftmapsto", "rightarrow"], 1.5, 522
                            ],
                            xtofrom: [
                                ["leftToFrom", "rightToFrom"], 1.75, 528
                            ],
                            xrightleftarrows: [
                                ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
                            ],
                            xrightequilibrium: [
                                ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
                            ],
                            xleftequilibrium: [
                                ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
                            ]
                        },
                        Vt = function(e, t, r, n, a) {
                            var i, o = e.height + e.depth + r + n;
                            if (/fbox|color|angl/.test(t)) {
                                if (i = Ke.makeSpan(["stretchy", t], [], a), "fbox" === t) {
                                    var s = a.color && a.getColor();
                                    s && (i.style.borderColor = s)
                                }
                            } else {
                                var l = [];
                                /^[bx]cancel$/.test(t) && l.push(new Q({
                                    x1: "0",
                                    y1: "0",
                                    x2: "100%",
                                    y2: "100%",
                                    "stroke-width": "0.046em"
                                })), /^x?cancel$/.test(t) && l.push(new Q({
                                    x1: "0",
                                    y1: "100%",
                                    x2: "100%",
                                    y2: "0",
                                    "stroke-width": "0.046em"
                                }));
                                var h = new K(l, {
                                    width: "100%",
                                    height: F(o)
                                });
                                i = Ke.makeSvgSpan([], [h], a)
                            }
                            return i.height = o, i.style.height = F(o), i
                        },
                        Pt = function(e) {
                            var t = new Tt.MathNode("mo", [new Tt.TextNode(Lt[e.replace(/^\\/, "")])]);
                            return t.setAttribute("stretchy", "true"), t
                        },
                        Ft = function(e, t) {
                            var r = function() {
                                    var r = 4e5,
                                        n = e.label.slice(1);
                                    if (l.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                                        var a, i, o, s = "ordgroup" === (d = e.base).type ? d.body.length : 1;
                                        if (s > 5) "widehat" === n || "widecheck" === n ? (a = 420, r = 2364, o = .42, i = n + "4") : (a = 312, r = 2340, o = .34, i = "tilde4");
                                        else {
                                            var h = [1, 1, 2, 2, 3, 3][s];
                                            "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][h], a = [0, 239, 300, 360, 420][h], o = [0, .24, .3, .3, .36, .42][h], i = n + h) : (r = [0, 600, 1033, 2339, 2340][h], a = [0, 260, 286, 306, 312][h], o = [0, .26, .286, .3, .306, .34][h], i = "tilde" + h)
                                        }
                                        var c = new J(i),
                                            m = new K([c], {
                                                width: "100%",
                                                height: F(o),
                                                viewBox: "0 0 " + r + " " + a,
                                                preserveAspectRatio: "none"
                                            });
                                        return {
                                            span: Ke.makeSvgSpan([], [m], t),
                                            minWidth: 0,
                                            height: o
                                        }
                                    }
                                    var u, p, d, f = [],
                                        g = Dt[n],
                                        v = g[0],
                                        b = g[1],
                                        y = g[2],
                                        x = y / 1e3,
                                        w = v.length;
                                    if (1 === w) u = ["hide-tail"], p = [g[3]];
                                    else if (2 === w) u = ["halfarrow-left", "halfarrow-right"], p = ["xMinYMin", "xMaxYMin"];
                                    else {
                                        if (3 !== w) throw new Error("Correct katexImagesData or update code here to support\n                    " + w + " children.");
                                        u = ["brace-left", "brace-center", "brace-right"], p = ["xMinYMin", "xMidYMin", "xMaxYMin"]
                                    }
                                    for (var k = 0; k < w; k++) {
                                        var S = new J(v[k]),
                                            M = new K([S], {
                                                width: "400em",
                                                height: F(x),
                                                viewBox: "0 0 " + r + " " + y,
                                                preserveAspectRatio: p[k] + " slice"
                                            }),
                                            z = Ke.makeSvgSpan([u[k]], [M], t);
                                        if (1 === w) return {
                                            span: z,
                                            minWidth: b,
                                            height: x
                                        };
                                        z.style.height = F(x), f.push(z)
                                    }
                                    return {
                                        span: Ke.makeSpan(["stretchy"], f, t),
                                        minWidth: b,
                                        height: x
                                    }
                                }(),
                                n = r.span,
                                a = r.minWidth,
                                i = r.height;
                            return n.height = i, n.style.height = F(i), a > 0 && (n.style.minWidth = F(a)), n
                        };

                    function Gt(e, t) {
                        if (!e || e.type !== t) throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
                        return e
                    }

                    function Ut(e) {
                        var t = Yt(e);
                        if (!t) throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
                        return t
                    }

                    function Yt(e) {
                        return e && ("atom" === e.type || re.hasOwnProperty(e.type)) ? e : null
                    }
                    var Xt = function(e, t) {
                            var r, n, a;
                            e && "supsub" === e.type ? (r = (n = Gt(e.base, "accent")).base, e.base = r, a = function(e) {
                                if (e instanceof W) return e;
                                throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".")
                            }(wt(e, t)), e.base = n) : r = (n = Gt(e, "accent")).base;
                            var i = wt(r, t.havingCrampedStyle()),
                                o = 0;
                            if (n.isShifty && l.isCharacterBox(r)) {
                                var s = l.getBaseElem(r);
                                o = ee(wt(s, t.havingCrampedStyle())).skew
                            }
                            var h, c = "\\c" === n.label,
                                m = c ? i.height + i.depth : Math.min(i.height, t.fontMetrics().xHeight);
                            if (n.isStretchy) h = Ft(n, t), h = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: i
                                }, {
                                    type: "elem",
                                    elem: h,
                                    wrapperClasses: ["svg-align"],
                                    wrapperStyle: o > 0 ? {
                                        width: "calc(100% - " + F(2 * o) + ")",
                                        marginLeft: F(2 * o)
                                    } : void 0
                                }]
                            }, t);
                            else {
                                var u, p;
                                "\\vec" === n.label ? (u = Ke.staticSvg("vec", t), p = Ke.svgData.vec[1]) : ((u = ee(u = Ke.makeOrd({
                                    mode: n.mode,
                                    text: n.label
                                }, t, "textord"))).italic = 0, p = u.width, c && (m += u.depth)), h = Ke.makeSpan(["accent-body"], [u]);
                                var d = "\\textcircled" === n.label;
                                d && (h.classes.push("accent-full"), m = i.height);
                                var f = o;
                                d || (f -= p / 2), h.style.left = F(f), "\\textcircled" === n.label && (h.style.top = ".2em"), h = Ke.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: i
                                    }, {
                                        type: "kern",
                                        size: -m
                                    }, {
                                        type: "elem",
                                        elem: h
                                    }]
                                }, t)
                            }
                            var g = Ke.makeSpan(["mord", "accent"], [h], t);
                            return a ? (a.children[0] = g, a.height = Math.max(g.height, a.height), a.classes[0] = "mord", a) : g
                        },
                        Wt = function(e, t) {
                            var r = e.isStretchy ? Pt(e.label) : new Tt.MathNode("mo", [Bt(e.label, e.mode)]),
                                n = new Tt.MathNode("mover", [Rt(e.base, t), r]);
                            return n.setAttribute("accent", "true"), n
                        },
                        _t = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((function(e) {
                            return "\\" + e
                        })).join("|"));
                    ot({
                        type: "accent",
                        names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = lt(t[0]),
                                n = !_t.test(e.funcName),
                                a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName || "\\widecheck" === e.funcName;
                            return {
                                type: "accent",
                                mode: e.parser.mode,
                                label: e.funcName,
                                isStretchy: n,
                                isShifty: a,
                                base: r
                            }
                        },
                        htmlBuilder: Xt,
                        mathmlBuilder: Wt
                    }), ot({
                        type: "accent",
                        names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0,
                            allowedInMath: !0,
                            argTypes: ["primitive"]
                        },
                        handler: function(e, t) {
                            var r = t[0],
                                n = e.parser.mode;
                            return "math" === n && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), n = "text"), {
                                type: "accent",
                                mode: n,
                                label: e.funcName,
                                isStretchy: !1,
                                isShifty: !0,
                                base: r
                            }
                        },
                        htmlBuilder: Xt,
                        mathmlBuilder: Wt
                    }), ot({
                        type: "accentUnder",
                        names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "accentUnder",
                                mode: r.mode,
                                label: n,
                                base: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.base, t),
                                n = Ft(e, t),
                                a = "\\utilde" === e.label ? .12 : 0,
                                i = Ke.makeVList({
                                    positionType: "top",
                                    positionData: r.height,
                                    children: [{
                                        type: "elem",
                                        elem: n,
                                        wrapperClasses: ["svg-align"]
                                    }, {
                                        type: "kern",
                                        size: a
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "accentunder"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Pt(e.label),
                                n = new Tt.MathNode("munder", [Rt(e.base, t), r]);
                            return n.setAttribute("accentunder", "true"), n
                        }
                    });
                    var jt = function(e) {
                        var t = new Tt.MathNode("mpadded", e ? [e] : []);
                        return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t
                    };
                    ot({
                        type: "xArrow",
                        names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName;
                            return {
                                type: "xArrow",
                                mode: n.mode,
                                label: a,
                                body: t[0],
                                below: r[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r, n = t.style,
                                a = t.havingStyle(n.sup()),
                                i = Ke.wrapFragment(wt(e.body, a, t), t),
                                o = "\\x" === e.label.slice(0, 2) ? "x" : "cd";
                            i.classes.push(o + "-arrow-pad"), e.below && (a = t.havingStyle(n.sub()), (r = Ke.wrapFragment(wt(e.below, a, t), t)).classes.push(o + "-arrow-pad"));
                            var s, l = Ft(e, t),
                                h = -t.fontMetrics().axisHeight + .5 * l.height,
                                c = -t.fontMetrics().axisHeight - .5 * l.height - .111;
                            if ((i.depth > .25 || "\\xleftequilibrium" === e.label) && (c -= i.depth), r) {
                                var m = -t.fontMetrics().axisHeight + r.height + .5 * l.height + .111;
                                s = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: i,
                                        shift: c
                                    }, {
                                        type: "elem",
                                        elem: l,
                                        shift: h
                                    }, {
                                        type: "elem",
                                        elem: r,
                                        shift: m
                                    }]
                                }, t)
                            } else s = Ke.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: i,
                                    shift: c
                                }, {
                                    type: "elem",
                                    elem: l,
                                    shift: h
                                }]
                            }, t);
                            return s.children[0].children[0].children[1].classes.push("svg-align"), Ke.makeSpan(["mrel", "x-arrow"], [s], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = Pt(e.label);
                            if (n.setAttribute("minsize", "x" === e.label.charAt(0) ? "1.75em" : "3.0em"), e.body) {
                                var a = jt(Rt(e.body, t));
                                if (e.below) {
                                    var i = jt(Rt(e.below, t));
                                    r = new Tt.MathNode("munderover", [n, i, a])
                                } else r = new Tt.MathNode("mover", [n, a])
                            } else if (e.below) {
                                var o = jt(Rt(e.below, t));
                                r = new Tt.MathNode("munder", [n, o])
                            } else r = jt(), r = new Tt.MathNode("mover", [n, r]);
                            return r
                        }
                    });
                    var $t = Ke.makeSpan;

                    function Zt(e, t) {
                        var r = ft(e.body, t, !0);
                        return $t([e.mclass], r, t)
                    }

                    function Kt(e, t) {
                        var r, n = qt(e.body, t);
                        return "minner" === e.mclass ? r = new Tt.MathNode("mpadded", n) : "mord" === e.mclass ? e.isCharacterBox ? (r = n[0]).type = "mi" : r = new Tt.MathNode("mi", n) : (e.isCharacterBox ? (r = n[0]).type = "mo" : r = new Tt.MathNode("mo", n), "mbin" === e.mclass ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : "mpunct" === e.mclass ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : "mopen" === e.mclass || "mclose" === e.mclass ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : "minner" === e.mclass && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r
                    }
                    ot({
                        type: "mclass",
                        names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
                        props: {
                            numArgs: 1,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "mclass",
                                mode: r.mode,
                                mclass: "m" + n.slice(5),
                                body: ht(a),
                                isCharacterBox: l.isCharacterBox(a)
                            }
                        },
                        htmlBuilder: Zt,
                        mathmlBuilder: Kt
                    });
                    var Jt = function(e) {
                        var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e;
                        return "atom" !== t.type || "bin" !== t.family && "rel" !== t.family ? "mord" : "m" + t.family
                    };
                    ot({
                        type: "mclass",
                        names: ["\\@binrel"],
                        props: {
                            numArgs: 2
                        },
                        handler: function(e, t) {
                            return {
                                type: "mclass",
                                mode: e.parser.mode,
                                mclass: Jt(t[0]),
                                body: ht(t[1]),
                                isCharacterBox: l.isCharacterBox(t[1])
                            }
                        }
                    }), ot({
                        type: "mclass",
                        names: ["\\stackrel", "\\overset", "\\underset"],
                        props: {
                            numArgs: 2
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = e.funcName,
                                i = t[1],
                                o = t[0];
                            r = "\\stackrel" !== a ? Jt(i) : "mrel";
                            var s = {
                                    type: "op",
                                    mode: i.mode,
                                    limits: !0,
                                    alwaysHandleSupSub: !0,
                                    parentIsSupSub: !1,
                                    symbol: !1,
                                    suppressBaseShift: "\\stackrel" !== a,
                                    body: ht(i)
                                },
                                h = {
                                    type: "supsub",
                                    mode: o.mode,
                                    base: s,
                                    sup: "\\underset" === a ? null : o,
                                    sub: "\\underset" === a ? o : null
                                };
                            return {
                                type: "mclass",
                                mode: n.mode,
                                mclass: r,
                                body: [h],
                                isCharacterBox: l.isCharacterBox(h)
                            }
                        },
                        htmlBuilder: Zt,
                        mathmlBuilder: Kt
                    }), ot({
                        type: "pmb",
                        names: ["\\pmb"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "pmb",
                                mode: e.parser.mode,
                                mclass: Jt(t[0]),
                                body: ht(t[0])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.body, t, !0),
                                n = Ke.makeSpan([e.mclass], r, t);
                            return n.style.textShadow = "0.02em 0.01em 0.04px", n
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(e.body, t),
                                n = new Tt.MathNode("mstyle", r);
                            return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n
                        }
                    });
                    var Qt = {
                            ">": "\\\\cdrightarrow",
                            "<": "\\\\cdleftarrow",
                            "=": "\\\\cdlongequal",
                            A: "\\uparrow",
                            V: "\\downarrow",
                            "|": "\\Vert",
                            ".": "no arrow"
                        },
                        er = function(e) {
                            return "textord" === e.type && "@" === e.text
                        };

                    function tr(e, t, r) {
                        var n = Qt[e];
                        switch (n) {
                            case "\\\\cdrightarrow":
                            case "\\\\cdleftarrow":
                                return r.callFunction(n, [t[0]], [t[1]]);
                            case "\\uparrow":
                            case "\\downarrow":
                                var a = {
                                        type: "atom",
                                        text: n,
                                        mode: "math",
                                        family: "rel"
                                    },
                                    i = {
                                        type: "ordgroup",
                                        mode: "math",
                                        body: [r.callFunction("\\\\cdleft", [t[0]], []), r.callFunction("\\Big", [a], []), r.callFunction("\\\\cdright", [t[1]], [])]
                                    };
                                return r.callFunction("\\\\cdparent", [i], []);
                            case "\\\\cdlongequal":
                                return r.callFunction("\\\\cdlongequal", [], []);
                            case "\\Vert":
                                return r.callFunction("\\Big", [{
                                    type: "textord",
                                    text: "\\Vert",
                                    mode: "math"
                                }], []);
                            default:
                                return {
                                    type: "textord",
                                    text: " ",
                                    mode: "math"
                                }
                        }
                    }
                    ot({
                        type: "cdlabel",
                        names: ["\\\\cdleft", "\\\\cdright"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName;
                            return {
                                type: "cdlabel",
                                mode: r.mode,
                                side: n.slice(4),
                                label: t[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = t.havingStyle(t.style.sup()),
                                n = Ke.wrapFragment(wt(e.label, r, t), t);
                            return n.classes.push("cd-label-" + e.side), n.style.bottom = F(.8 - n.depth), n.height = 0, n.depth = 0, n
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mrow", [Rt(e.label, t)]);
                            return (r = new Tt.MathNode("mpadded", [r])).setAttribute("width", "0"), "left" === e.side && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), (r = new Tt.MathNode("mstyle", [r])).setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r
                        }
                    }), ot({
                        type: "cdlabelparent",
                        names: ["\\\\cdparent"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            return {
                                type: "cdlabelparent",
                                mode: e.parser.mode,
                                fragment: t[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.wrapFragment(wt(e.fragment, t), t);
                            return r.classes.push("cd-vert-arrow"), r
                        },
                        mathmlBuilder: function(e, t) {
                            return new Tt.MathNode("mrow", [Rt(e.fragment, t)])
                        }
                    }), ot({
                        type: "textord",
                        names: ["\\@char"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            for (var r = e.parser, a = Gt(t[0], "ordgroup").body, i = "", o = 0; o < a.length; o++) i += Gt(a[o], "textord").text;
                            var s, l = parseInt(i);
                            if (isNaN(l)) throw new n("\\@char has non-numeric argument " + i);
                            if (l < 0 || l >= 1114111) throw new n("\\@char with invalid code point " + i);
                            return l <= 65535 ? s = String.fromCharCode(l) : (l -= 65536, s = String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l))), {
                                type: "textord",
                                mode: r.mode,
                                text: s
                            }
                        }
                    });
                    var rr = function(e, t) {
                            var r = ft(e.body, t.withColor(e.color), !1);
                            return Ke.makeFragment(r)
                        },
                        nr = function(e, t) {
                            var r = qt(e.body, t.withColor(e.color)),
                                n = new Tt.MathNode("mstyle", r);
                            return n.setAttribute("mathcolor", e.color), n
                        };
                    ot({
                        type: "color",
                        names: ["\\textcolor"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0,
                            argTypes: ["color", "original"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Gt(t[0], "color-token").color,
                                a = t[1];
                            return {
                                type: "color",
                                mode: r.mode,
                                color: n,
                                body: ht(a)
                            }
                        },
                        htmlBuilder: rr,
                        mathmlBuilder: nr
                    }), ot({
                        type: "color",
                        names: ["\\color"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0,
                            argTypes: ["color"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.breakOnTokenText,
                                a = Gt(t[0], "color-token").color;
                            r.gullet.macros.set("\\current@color", a);
                            var i = r.parseExpression(!0, n);
                            return {
                                type: "color",
                                mode: r.mode,
                                color: a,
                                body: i
                            }
                        },
                        htmlBuilder: rr,
                        mathmlBuilder: nr
                    }), ot({
                        type: "cr",
                        names: ["\\\\"],
                        props: {
                            numArgs: 0,
                            numOptionalArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = "[" === n.gullet.future().text ? n.parseSizeGroup(!0) : null,
                                i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
                            return {
                                type: "cr",
                                mode: n.mode,
                                newLine: i,
                                size: a && Gt(a, "size").value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan(["mspace"], [], t);
                            return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = F(P(e.size, t)))), r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mspace");
                            return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", F(P(e.size, t)))), r
                        }
                    });
                    var ar = {
                            "\\global": "\\global",
                            "\\long": "\\\\globallong",
                            "\\\\globallong": "\\\\globallong",
                            "\\def": "\\gdef",
                            "\\gdef": "\\gdef",
                            "\\edef": "\\xdef",
                            "\\xdef": "\\xdef",
                            "\\let": "\\\\globallet",
                            "\\futurelet": "\\\\globalfuture"
                        },
                        ir = function(e) {
                            var t = e.text;
                            if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new n("Expected a control sequence", e);
                            return t
                        },
                        or = function(e, t, r, n) {
                            var a = e.gullet.macros.get(r.text);
                            null == a && (r.noexpand = !0, a = {
                                tokens: [r],
                                numArgs: 0,
                                unexpandable: !e.gullet.isExpandable(r.text)
                            }), e.gullet.macros.set(t, a, n)
                        };
                    ot({
                        type: "internal",
                        names: ["\\global", "\\long", "\\\\globallong"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            t.consumeSpaces();
                            var a = t.fetch();
                            if (ar[a.text]) return "\\global" !== r && "\\\\globallong" !== r || (a.text = ar[a.text]), Gt(t.parseFunction(), "internal");
                            throw new n("Invalid token after macro prefix", a)
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            primitive: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                a = t.gullet.popToken(),
                                i = a.text;
                            if (/^(?:[\\{}$&#^_]|EOF)$/.test(i)) throw new n("Expected a control sequence", a);
                            for (var o, s = 0, l = [
                                    []
                                ];
                                "{" !== t.gullet.future().text;)
                                if ("#" === (a = t.gullet.popToken()).text) {
                                    if ("{" === t.gullet.future().text) {
                                        o = t.gullet.future(), l[s].push("{");
                                        break
                                    }
                                    if (a = t.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new n('Invalid argument number "' + a.text + '"');
                                    if (parseInt(a.text) !== s + 1) throw new n('Argument number "' + a.text + '" out of order');
                                    s++, l.push([])
                                } else {
                                    if ("EOF" === a.text) throw new n("Expected a macro definition");
                                    l[s].push(a.text)
                                }
                            var h = t.gullet.consumeArg().tokens;
                            return o && h.unshift(o), "\\edef" !== r && "\\xdef" !== r || (h = t.gullet.expandTokens(h)).reverse(), t.gullet.macros.set(i, {
                                tokens: h,
                                numArgs: s,
                                delimiters: l
                            }, r === ar[r]), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\let", "\\\\globallet"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            primitive: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                n = ir(t.gullet.popToken());
                            t.gullet.consumeSpaces();
                            var a = function(e) {
                                var t = e.gullet.popToken();
                                return "=" === t.text && " " === (t = e.gullet.popToken()).text && (t = e.gullet.popToken()), t
                            }(t);
                            return or(t, n, a, "\\\\globallet" === r), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\futurelet", "\\\\globalfuture"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            primitive: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                n = ir(t.gullet.popToken()),
                                a = t.gullet.popToken(),
                                i = t.gullet.popToken();
                            return or(t, n, i, "\\\\globalfuture" === r), t.gullet.pushToken(i), t.gullet.pushToken(a), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    });
                    var sr = function(e, t, r) {
                            var n = N(ae.math[e] && ae.math[e].replace || e, t, r);
                            if (!n) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
                            return n
                        },
                        lr = function(e, t, r, n) {
                            var a = r.havingBaseStyle(t),
                                i = Ke.makeSpan(n.concat(a.sizingClasses(r)), [e], r),
                                o = a.sizeMultiplier / r.sizeMultiplier;
                            return i.height *= o, i.depth *= o, i.maxFontSize = a.sizeMultiplier, i
                        },
                        hr = function(e, t, r) {
                            var n = t.havingBaseStyle(r),
                                a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
                            e.classes.push("delimcenter"), e.style.top = F(a), e.height -= a, e.depth += a
                        },
                        cr = function(e, t, r, n, a, i) {
                            var o = function(e, t, r, n) {
                                    return Ke.makeSymbol(e, "Size" + t + "-Regular", r, n)
                                }(e, t, a, n),
                                s = lr(Ke.makeSpan(["delimsizing", "size" + t], [o], n), x.TEXT, n, i);
                            return r && hr(s, n, x.TEXT), s
                        },
                        mr = function(e, t, r) {
                            var n;
                            return n = "Size1-Regular" === t ? "delim-size1" : "delim-size4", {
                                type: "elem",
                                elem: Ke.makeSpan(["delimsizinginner", n], [Ke.makeSpan([], [Ke.makeSymbol(e, t, r)])])
                            }
                        },
                        ur = function(e, t, r) {
                            var n = T["Size4-Regular"][e.charCodeAt(0)] ? T["Size4-Regular"][e.charCodeAt(0)][4] : T["Size1-Regular"][e.charCodeAt(0)][4],
                                a = new J("inner", function(e, t) {
                                    switch (e) {
                                        case "\u239c":
                                            return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
                                        case "\u2223":
                                            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
                                        case "\u2225":
                                            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145zM367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z";
                                        case "\u239f":
                                            return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
                                        case "\u23a2":
                                            return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
                                        case "\u23a5":
                                            return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
                                        case "\u23aa":
                                            return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
                                        case "\u23d0":
                                            return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
                                        case "\u2016":
                                            return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257zM478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z";
                                        default:
                                            return ""
                                    }
                                }(e, Math.round(1e3 * t))),
                                i = new K([a], {
                                    width: F(n),
                                    height: F(t),
                                    style: "width:" + F(n),
                                    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
                                    preserveAspectRatio: "xMinYMin"
                                }),
                                o = Ke.makeSvgSpan([], [i], r);
                            return o.height = t, o.style.height = F(t), o.style.width = F(n), {
                                type: "elem",
                                elem: o
                            }
                        },
                        pr = {
                            type: "kern",
                            size: -.008
                        },
                        dr = ["|", "\\lvert", "\\rvert", "\\vert"],
                        fr = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
                        gr = function(e, t, r, n, a, i) {
                            var o, s, h, c, m = "",
                                u = 0;
                            o = h = c = e, s = null;
                            var p = "Size1-Regular";
                            "\\uparrow" === e ? h = c = "\u23d0" : "\\Uparrow" === e ? h = c = "\u2016" : "\\downarrow" === e ? o = h = "\u23d0" : "\\Downarrow" === e ? o = h = "\u2016" : "\\updownarrow" === e ? (o = "\\uparrow", h = "\u23d0", c = "\\downarrow") : "\\Updownarrow" === e ? (o = "\\Uparrow", h = "\u2016", c = "\\Downarrow") : l.contains(dr, e) ? (h = "\u2223", m = "vert", u = 333) : l.contains(fr, e) ? (h = "\u2225", m = "doublevert", u = 556) : "[" === e || "\\lbrack" === e ? (o = "\u23a1", h = "\u23a2", c = "\u23a3", p = "Size4-Regular", m = "lbrack", u = 667) : "]" === e || "\\rbrack" === e ? (o = "\u23a4", h = "\u23a5", c = "\u23a6", p = "Size4-Regular", m = "rbrack", u = 667) : "\\lfloor" === e || "\u230a" === e ? (h = o = "\u23a2", c = "\u23a3", p = "Size4-Regular", m = "lfloor", u = 667) : "\\lceil" === e || "\u2308" === e ? (o = "\u23a1", h = c = "\u23a2", p = "Size4-Regular", m = "lceil", u = 667) : "\\rfloor" === e || "\u230b" === e ? (h = o = "\u23a5", c = "\u23a6", p = "Size4-Regular", m = "rfloor", u = 667) : "\\rceil" === e || "\u2309" === e ? (o = "\u23a4", h = c = "\u23a5", p = "Size4-Regular", m = "rceil", u = 667) : "(" === e || "\\lparen" === e ? (o = "\u239b", h = "\u239c", c = "\u239d", p = "Size4-Regular", m = "lparen", u = 875) : ")" === e || "\\rparen" === e ? (o = "\u239e", h = "\u239f", c = "\u23a0", p = "Size4-Regular", m = "rparen", u = 875) : "\\{" === e || "\\lbrace" === e ? (o = "\u23a7", s = "\u23a8", c = "\u23a9", h = "\u23aa", p = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (o = "\u23ab", s = "\u23ac", c = "\u23ad", h = "\u23aa", p = "Size4-Regular") : "\\lgroup" === e || "\u27ee" === e ? (o = "\u23a7", c = "\u23a9", h = "\u23aa", p = "Size4-Regular") : "\\rgroup" === e || "\u27ef" === e ? (o = "\u23ab", c = "\u23ad", h = "\u23aa", p = "Size4-Regular") : "\\lmoustache" === e || "\u23b0" === e ? (o = "\u23a7", c = "\u23ad", h = "\u23aa", p = "Size4-Regular") : "\\rmoustache" !== e && "\u23b1" !== e || (o = "\u23ab", c = "\u23a9", h = "\u23aa", p = "Size4-Regular");
                            var d = sr(o, p, a),
                                f = d.height + d.depth,
                                g = sr(h, p, a),
                                v = g.height + g.depth,
                                b = sr(c, p, a),
                                y = b.height + b.depth,
                                w = 0,
                                k = 1;
                            if (null !== s) {
                                var S = sr(s, p, a);
                                w = S.height + S.depth, k = 2
                            }
                            var M = f + y + w,
                                z = M + Math.max(0, Math.ceil((t - M) / (k * v))) * k * v,
                                A = n.fontMetrics().axisHeight;
                            r && (A *= n.sizeMultiplier);
                            var T = z / 2 - A,
                                B = [];
                            if (m.length > 0) {
                                var C = z - f - y,
                                    N = Math.round(1e3 * z),
                                    q = function(e, t) {
                                        switch (e) {
                                            case "lbrack":
                                                return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + t + " v1759 h84z";
                                            case "rbrack":
                                                return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + t + " v1759 h84z";
                                            case "vert":
                                                return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z";
                                            case "doublevert":
                                                return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z\nM367 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + t + " v585 h43z";
                                            case "lfloor":
                                                return "M319 602 V0 H403 V602 v" + t + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
                                            case "rfloor":
                                                return "M319 602 V0 H403 V602 v" + t + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
                                            case "lceil":
                                                return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v602 h84z\nM403 1759 V0 H319 V1759 v" + t + " v602 h84z";
                                            case "rceil":
                                                return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + t + " v602 h84z";
                                            case "lparen":
                                                return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (t + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (t + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
                                            case "rparen":
                                                return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (t + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (t + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
                                            default:
                                                throw new Error("Unknown stretchy delimiter.")
                                        }
                                    }(m, Math.round(1e3 * C)),
                                    I = new J(m, q),
                                    R = (u / 1e3).toFixed(3) + "em",
                                    H = (N / 1e3).toFixed(3) + "em",
                                    O = new K([I], {
                                        width: R,
                                        height: H,
                                        viewBox: "0 0 " + u + " " + N
                                    }),
                                    E = Ke.makeSvgSpan([], [O], n);
                                E.height = N / 1e3, E.style.width = R, E.style.height = H, B.push({
                                    type: "elem",
                                    elem: E
                                })
                            } else {
                                if (B.push(mr(c, p, a)), B.push(pr), null === s) {
                                    var L = z - f - y + .016;
                                    B.push(ur(h, L, n))
                                } else {
                                    var D = (z - f - y - w) / 2 + .016;
                                    B.push(ur(h, D, n)), B.push(pr), B.push(mr(s, p, a)), B.push(pr), B.push(ur(h, D, n))
                                }
                                B.push(pr), B.push(mr(o, p, a))
                            }
                            var V = n.havingBaseStyle(x.TEXT),
                                P = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: T,
                                    children: B
                                }, V);
                            return lr(Ke.makeSpan(["delimsizing", "mult"], [P], V), x.TEXT, n, i)
                        },
                        vr = .08,
                        br = function(e, t, r, n, a) {
                            var i = function(e, t, r) {
                                    t *= 1e3;
                                    var n = "";
                                    switch (e) {
                                        case "sqrtMain":
                                            n = function(e, t) {
                                                return "M95," + (622 + e + t) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + e / 2.075 + " -" + e + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + e) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, M);
                                            break;
                                        case "sqrtSize1":
                                            n = function(e, t) {
                                                return "M263," + (601 + e + t) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + e / 2.084 + " -" + e + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + e) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, M);
                                            break;
                                        case "sqrtSize2":
                                            n = function(e, t) {
                                                return "M983 " + (10 + e + t) + "\nl" + e / 3.13 + " -" + e + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + e) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, M);
                                            break;
                                        case "sqrtSize3":
                                            n = function(e, t) {
                                                return "M424," + (2398 + e + t) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + e / 4.223 + " -" + e + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + e) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + e) + " " + t + "\nh400000v" + (40 + e) + "h-400000z"
                                            }(t, M);
                                            break;
                                        case "sqrtSize4":
                                            n = function(e, t) {
                                                return "M473," + (2713 + e + t) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + e / 5.298 + " -" + e + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + e) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z"
                                            }(t, M);
                                            break;
                                        case "sqrtTall":
                                            n = function(e, t, r) {
                                                return "M702 " + (e + t) + "H400000" + (40 + e) + "\nH742v" + (r - 54 - t - e) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + t + "H400000v" + (40 + e) + "H742z"
                                            }(t, M, r)
                                    }
                                    return n
                                }(e, n, r),
                                o = new J(e, i),
                                s = new K([o], {
                                    width: "400em",
                                    height: F(t),
                                    viewBox: "0 0 400000 " + r,
                                    preserveAspectRatio: "xMinYMin slice"
                                });
                            return Ke.makeSvgSpan(["hide-tail"], [s], a)
                        },
                        yr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"],
                        xr = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1"],
                        wr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
                        kr = [0, 1.2, 1.8, 2.4, 3],
                        Sr = [{
                            type: "small",
                            style: x.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: x.SCRIPT
                        }, {
                            type: "small",
                            style: x.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }],
                        Mr = [{
                            type: "small",
                            style: x.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: x.SCRIPT
                        }, {
                            type: "small",
                            style: x.TEXT
                        }, {
                            type: "stack"
                        }],
                        zr = [{
                            type: "small",
                            style: x.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: x.SCRIPT
                        }, {
                            type: "small",
                            style: x.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }, {
                            type: "stack"
                        }],
                        Ar = function(e) {
                            if ("small" === e.type) return "Main-Regular";
                            if ("large" === e.type) return "Size" + e.size + "-Regular";
                            if ("stack" === e.type) return "Size4-Regular";
                            throw new Error("Add support for delim type '" + e.type + "' here.")
                        },
                        Tr = function(e, t, r, n) {
                            for (var a = Math.min(2, 3 - n.style.size); a < r.length && "stack" !== r[a].type; a++) {
                                var i = sr(e, Ar(r[a]), "math"),
                                    o = i.height + i.depth;
                                if ("small" === r[a].type && (o *= n.havingBaseStyle(r[a].style).sizeMultiplier), o > t) return r[a]
                            }
                            return r[r.length - 1]
                        },
                        Br = function(e, t, r, n, a, i) {
                            var o;
                            "<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), o = l.contains(wr, e) ? Sr : l.contains(yr, e) ? zr : Mr;
                            var s = Tr(e, t, o, n);
                            return "small" === s.type ? function(e, t, r, n, a, i) {
                                var o = Ke.makeSymbol(e, "Main-Regular", a, n),
                                    s = lr(o, t, n, i);
                                return r && hr(s, n, t), s
                            }(e, s.style, r, n, a, i) : "large" === s.type ? cr(e, s.size, r, n, a, i) : gr(e, t, r, n, a, i)
                        },
                        Cr = {
                            sqrtImage: function(e, t) {
                                var r, n, a = t.havingBaseSizing(),
                                    i = Tr("\\surd", e * a.sizeMultiplier, zr, a),
                                    o = a.sizeMultiplier,
                                    s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
                                    l = 0,
                                    h = 0,
                                    c = 0;
                                return "small" === i.type ? (e < 1 ? o = 1 : e < 1.4 && (o = .7), h = (1 + s) / o, (r = br("sqrtMain", l = (1 + s + vr) / o, c = 1e3 + 1e3 * s + 80, s, t)).style.minWidth = "0.853em", n = .833 / o) : "large" === i.type ? (c = 1080 * kr[i.size], h = (kr[i.size] + s) / o, l = (kr[i.size] + s + vr) / o, (r = br("sqrtSize" + i.size, l, c, s, t)).style.minWidth = "1.02em", n = 1 / o) : (l = e + s + vr, h = e + s, c = Math.floor(1e3 * e + s) + 80, (r = br("sqrtTall", l, c, s, t)).style.minWidth = "0.742em", n = 1.056), r.height = h, r.style.height = F(l), {
                                    span: r,
                                    advanceWidth: n,
                                    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * o
                                }
                            },
                            sizedDelim: function(e, t, r, a, i) {
                                if ("<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), l.contains(yr, e) || l.contains(wr, e)) return cr(e, t, !1, r, a, i);
                                if (l.contains(xr, e)) return gr(e, kr[t], !1, r, a, i);
                                throw new n("Illegal delimiter: '" + e + "'")
                            },
                            sizeToMaxHeight: kr,
                            customSizedDelim: Br,
                            leftRightDelim: function(e, t, r, n, a, i) {
                                var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
                                    s = 5 / n.fontMetrics().ptPerEm,
                                    l = Math.max(t - o, r + o),
                                    h = Math.max(l / 500 * 901, 2 * l - s);
                                return Br(e, h, !0, n, a, i)
                            }
                        },
                        Nr = {
                            "\\bigl": {
                                mclass: "mopen",
                                size: 1
                            },
                            "\\Bigl": {
                                mclass: "mopen",
                                size: 2
                            },
                            "\\biggl": {
                                mclass: "mopen",
                                size: 3
                            },
                            "\\Biggl": {
                                mclass: "mopen",
                                size: 4
                            },
                            "\\bigr": {
                                mclass: "mclose",
                                size: 1
                            },
                            "\\Bigr": {
                                mclass: "mclose",
                                size: 2
                            },
                            "\\biggr": {
                                mclass: "mclose",
                                size: 3
                            },
                            "\\Biggr": {
                                mclass: "mclose",
                                size: 4
                            },
                            "\\bigm": {
                                mclass: "mrel",
                                size: 1
                            },
                            "\\Bigm": {
                                mclass: "mrel",
                                size: 2
                            },
                            "\\biggm": {
                                mclass: "mrel",
                                size: 3
                            },
                            "\\Biggm": {
                                mclass: "mrel",
                                size: 4
                            },
                            "\\big": {
                                mclass: "mord",
                                size: 1
                            },
                            "\\Big": {
                                mclass: "mord",
                                size: 2
                            },
                            "\\bigg": {
                                mclass: "mord",
                                size: 3
                            },
                            "\\Bigg": {
                                mclass: "mord",
                                size: 4
                            }
                        },
                        qr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

                    function Ir(e, t) {
                        var r = Yt(e);
                        if (r && l.contains(qr, r.text)) return r;
                        throw new n(r ? "Invalid delimiter '" + r.text + "' after '" + t.funcName + "'" : "Invalid delimiter type '" + e.type + "'", e)
                    }

                    function Rr(e) {
                        if (!e.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
                    }
                    ot({
                        type: "delimsizing",
                        names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                        props: {
                            numArgs: 1,
                            argTypes: ["primitive"]
                        },
                        handler: function(e, t) {
                            var r = Ir(t[0], e);
                            return {
                                type: "delimsizing",
                                mode: e.parser.mode,
                                size: Nr[e.funcName].size,
                                mclass: Nr[e.funcName].mclass,
                                delim: r.text
                            }
                        },
                        htmlBuilder: function(e, t) {
                            return "." === e.delim ? Ke.makeSpan([e.mclass]) : Cr.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass])
                        },
                        mathmlBuilder: function(e) {
                            var t = [];
                            "." !== e.delim && t.push(Bt(e.delim, e.mode));
                            var r = new Tt.MathNode("mo", t);
                            "mopen" === e.mclass || "mclose" === e.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
                            var n = F(Cr.sizeToMaxHeight[e.size]);
                            return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r
                        }
                    }), ot({
                        type: "leftright-right",
                        names: ["\\right"],
                        props: {
                            numArgs: 1,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser.gullet.macros.get("\\current@color");
                            if (r && "string" !== typeof r) throw new n("\\current@color set to non-string in \\right");
                            return {
                                type: "leftright-right",
                                mode: e.parser.mode,
                                delim: Ir(t[0], e).text,
                                color: r
                            }
                        }
                    }), ot({
                        type: "leftright",
                        names: ["\\left"],
                        props: {
                            numArgs: 1,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = Ir(t[0], e),
                                n = e.parser;
                            ++n.leftrightDepth;
                            var a = n.parseExpression(!1);
                            --n.leftrightDepth, n.expect("\\right", !1);
                            var i = Gt(n.parseFunction(), "leftright-right");
                            return {
                                type: "leftright",
                                mode: n.mode,
                                body: a,
                                left: r.text,
                                right: i.delim,
                                rightColor: i.color
                            }
                        },
                        htmlBuilder: function(e, t) {
                            Rr(e);
                            for (var r, n, a = ft(e.body, t, !0, ["mopen", "mclose"]), i = 0, o = 0, s = !1, l = 0; l < a.length; l++) a[l].isMiddle ? s = !0 : (i = Math.max(a[l].height, i), o = Math.max(a[l].depth, o));
                            if (i *= t.sizeMultiplier, o *= t.sizeMultiplier, r = "." === e.left ? xt(t, ["mopen"]) : Cr.leftRightDelim(e.left, i, o, t, e.mode, ["mopen"]), a.unshift(r), s)
                                for (var h = 1; h < a.length; h++) {
                                    var c = a[h].isMiddle;
                                    c && (a[h] = Cr.leftRightDelim(c.delim, i, o, c.options, e.mode, []))
                                }
                            if ("." === e.right) n = xt(t, ["mclose"]);
                            else {
                                var m = e.rightColor ? t.withColor(e.rightColor) : t;
                                n = Cr.leftRightDelim(e.right, i, o, m, e.mode, ["mclose"])
                            }
                            return a.push(n), Ke.makeSpan(["minner"], a, t)
                        },
                        mathmlBuilder: function(e, t) {
                            Rr(e);
                            var r = qt(e.body, t);
                            if ("." !== e.left) {
                                var n = new Tt.MathNode("mo", [Bt(e.left, e.mode)]);
                                n.setAttribute("fence", "true"), r.unshift(n)
                            }
                            if ("." !== e.right) {
                                var a = new Tt.MathNode("mo", [Bt(e.right, e.mode)]);
                                a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a)
                            }
                            return Ct(r)
                        }
                    }), ot({
                        type: "middle",
                        names: ["\\middle"],
                        props: {
                            numArgs: 1,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = Ir(t[0], e);
                            if (!e.parser.leftrightDepth) throw new n("\\middle without preceding \\left", r);
                            return {
                                type: "middle",
                                mode: e.parser.mode,
                                delim: r.text
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r;
                            if ("." === e.delim) r = xt(t, []);
                            else {
                                r = Cr.sizedDelim(e.delim, 1, t, e.mode, []);
                                var n = {
                                    delim: e.delim,
                                    options: t
                                };
                                r.isMiddle = n
                            }
                            return r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = "\\vert" === e.delim || "|" === e.delim ? Bt("|", "text") : Bt(e.delim, e.mode),
                                n = new Tt.MathNode("mo", [r]);
                            return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n
                        }
                    });
                    var Hr = function(e, t) {
                            var r, n, a, i = Ke.wrapFragment(wt(e.body, t), t),
                                o = e.label.slice(1),
                                s = t.sizeMultiplier,
                                h = 0,
                                c = l.isCharacterBox(e.body);
                            if ("sout" === o)(r = Ke.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / s, h = -.5 * t.fontMetrics().xHeight;
                            else if ("phase" === o) {
                                var m = P({
                                        number: .6,
                                        unit: "pt"
                                    }, t),
                                    u = P({
                                        number: .35,
                                        unit: "ex"
                                    }, t);
                                s /= t.havingBaseSizing().sizeMultiplier;
                                var p = i.height + i.depth + m + u;
                                i.style.paddingLeft = F(p / 2 + m);
                                var d = Math.floor(1e3 * p * s),
                                    f = "M400000 " + (n = d) + " H0 L" + n / 2 + " 0 l65 45 L145 " + (n - 80) + " H400000z",
                                    g = new K([new J("phase", f)], {
                                        width: "400em",
                                        height: F(d / 1e3),
                                        viewBox: "0 0 400000 " + d,
                                        preserveAspectRatio: "xMinYMin slice"
                                    });
                                (r = Ke.makeSvgSpan(["hide-tail"], [g], t)).style.height = F(p), h = i.depth + m + u
                            } else {
                                /cancel/.test(o) ? c || i.classes.push("cancel-pad") : "angl" === o ? i.classes.push("anglpad") : i.classes.push("boxpad");
                                var v = 0,
                                    b = 0,
                                    y = 0;
                                /box/.test(o) ? (y = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), b = v = t.fontMetrics().fboxsep + ("colorbox" === o ? 0 : y)) : "angl" === o ? (v = 4 * (y = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness)), b = Math.max(0, .25 - i.depth)) : b = v = c ? .2 : 0, r = Vt(i, o, v, b, t), /fbox|boxed|fcolorbox/.test(o) ? (r.style.borderStyle = "solid", r.style.borderWidth = F(y)) : "angl" === o && .049 !== y && (r.style.borderTopWidth = F(y), r.style.borderRightWidth = F(y)), h = i.depth + b, e.backgroundColor && (r.style.backgroundColor = e.backgroundColor, e.borderColor && (r.style.borderColor = e.borderColor))
                            }
                            if (e.backgroundColor) a = Ke.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    shift: h
                                }, {
                                    type: "elem",
                                    elem: i,
                                    shift: 0
                                }]
                            }, t);
                            else {
                                var x = /cancel|phase/.test(o) ? ["svg-align"] : [];
                                a = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: i,
                                        shift: 0
                                    }, {
                                        type: "elem",
                                        elem: r,
                                        shift: h,
                                        wrapperClasses: x
                                    }]
                                }, t)
                            }
                            return /cancel/.test(o) && (a.height = i.height, a.depth = i.depth), /cancel/.test(o) && !c ? Ke.makeSpan(["mord", "cancel-lap"], [a], t) : Ke.makeSpan(["mord"], [a], t)
                        },
                        Or = function(e, t) {
                            var r = 0,
                                n = new Tt.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Rt(e.body, t)]);
                            switch (e.label) {
                                case "\\cancel":
                                    n.setAttribute("notation", "updiagonalstrike");
                                    break;
                                case "\\bcancel":
                                    n.setAttribute("notation", "downdiagonalstrike");
                                    break;
                                case "\\phase":
                                    n.setAttribute("notation", "phasorangle");
                                    break;
                                case "\\sout":
                                    n.setAttribute("notation", "horizontalstrike");
                                    break;
                                case "\\fbox":
                                    n.setAttribute("notation", "box");
                                    break;
                                case "\\angl":
                                    n.setAttribute("notation", "actuarial");
                                    break;
                                case "\\fcolorbox":
                                case "\\colorbox":
                                    if (r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), "\\fcolorbox" === e.label) {
                                        var a = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
                                        n.setAttribute("style", "border: " + a + "em solid " + String(e.borderColor))
                                    }
                                    break;
                                case "\\xcancel":
                                    n.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
                            }
                            return e.backgroundColor && n.setAttribute("mathbackground", e.backgroundColor), n
                        };
                    ot({
                        type: "enclose",
                        names: ["\\colorbox"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0,
                            argTypes: ["color", "text"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = Gt(t[0], "color-token").color,
                                o = t[1];
                            return {
                                type: "enclose",
                                mode: n.mode,
                                label: a,
                                backgroundColor: i,
                                body: o
                            }
                        },
                        htmlBuilder: Hr,
                        mathmlBuilder: Or
                    }), ot({
                        type: "enclose",
                        names: ["\\fcolorbox"],
                        props: {
                            numArgs: 3,
                            allowedInText: !0,
                            argTypes: ["color", "color", "text"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = Gt(t[0], "color-token").color,
                                o = Gt(t[1], "color-token").color,
                                s = t[2];
                            return {
                                type: "enclose",
                                mode: n.mode,
                                label: a,
                                backgroundColor: o,
                                borderColor: i,
                                body: s
                            }
                        },
                        htmlBuilder: Hr,
                        mathmlBuilder: Or
                    }), ot({
                        type: "enclose",
                        names: ["\\fbox"],
                        props: {
                            numArgs: 1,
                            argTypes: ["hbox"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "enclose",
                                mode: e.parser.mode,
                                label: "\\fbox",
                                body: t[0]
                            }
                        }
                    }), ot({
                        type: "enclose",
                        names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "enclose",
                                mode: r.mode,
                                label: n,
                                body: a
                            }
                        },
                        htmlBuilder: Hr,
                        mathmlBuilder: Or
                    }), ot({
                        type: "enclose",
                        names: ["\\angl"],
                        props: {
                            numArgs: 1,
                            argTypes: ["hbox"],
                            allowedInText: !1
                        },
                        handler: function(e, t) {
                            return {
                                type: "enclose",
                                mode: e.parser.mode,
                                label: "\\angl",
                                body: t[0]
                            }
                        }
                    });
                    var Er = {};

                    function Lr(e) {
                        for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
                                type: t,
                                numArgs: n.numArgs || 0,
                                allowedInText: !1,
                                numOptionalArgs: 0,
                                handler: a
                            }, l = 0; l < r.length; ++l) Er[r[l]] = s;
                        i && (at[t] = i), o && (it[t] = o)
                    }
                    var Dr = {};

                    function Vr(e, t) {
                        Dr[e] = t
                    }
                    var Pr = function() {
                            function e(e, t, r) {
                                this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r
                            }
                            return e.range = function(t, r) {
                                return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc
                            }, e
                        }(),
                        Fr = function() {
                            function e(e, t) {
                                this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t
                            }
                            return e.prototype.range = function(t, r) {
                                return new e(r, Pr.range(this, t))
                            }, e
                        }();

                    function Gr(e) {
                        var t = [];
                        e.consumeSpaces();
                        var r = e.fetch().text;
                        for ("\\relax" === r && (e.consume(), e.consumeSpaces(), r = e.fetch().text);
                            "\\hline" === r || "\\hdashline" === r;) e.consume(), t.push("\\hdashline" === r), e.consumeSpaces(), r = e.fetch().text;
                        return t
                    }
                    var Ur = function(e) {
                        if (!e.parser.settings.displayMode) throw new n("{" + e.envName + "} can be used only in display mode.")
                    };

                    function Yr(e) {
                        if (-1 === e.indexOf("ed")) return -1 === e.indexOf("*")
                    }

                    function Xr(e, t, r) {
                        var a = t.hskipBeforeAndAfter,
                            i = t.addJot,
                            o = t.cols,
                            s = t.arraystretch,
                            l = t.colSeparationType,
                            h = t.autoTag,
                            c = t.singleRow,
                            m = t.emptySingleRow,
                            u = t.maxNumCols,
                            p = t.leqno;
                        if (e.gullet.beginGroup(), c || e.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
                            var d = e.gullet.expandMacroAsText("\\arraystretch");
                            if (null == d) s = 1;
                            else if (!(s = parseFloat(d)) || s < 0) throw new n("Invalid \\arraystretch: " + d)
                        }
                        e.gullet.beginGroup();
                        var f = [],
                            g = [f],
                            v = [],
                            b = [],
                            y = null != h ? [] : void 0;

                        function x() {
                            h && e.gullet.macros.set("\\@eqnsw", "1", !0)
                        }

                        function w() {
                            y && (e.gullet.macros.get("\\df@tag") ? (y.push(e.subparse([new Fr("\\df@tag")])), e.gullet.macros.set("\\df@tag", void 0, !0)) : y.push(Boolean(h) && "1" === e.gullet.macros.get("\\@eqnsw")))
                        }
                        for (x(), b.push(Gr(e));;) {
                            var k = e.parseExpression(!1, c ? "\\end" : "\\\\");
                            e.gullet.endGroup(), e.gullet.beginGroup(), k = {
                                type: "ordgroup",
                                mode: e.mode,
                                body: k
                            }, r && (k = {
                                type: "styling",
                                mode: e.mode,
                                style: r,
                                body: [k]
                            }), f.push(k);
                            var S = e.fetch().text;
                            if ("&" === S) {
                                if (u && f.length === u) {
                                    if (c || l) throw new n("Too many tab characters: &", e.nextToken);
                                    e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.")
                                }
                                e.consume()
                            } else {
                                if ("\\end" === S) {
                                    w(), 1 === f.length && "styling" === k.type && 0 === k.body[0].body.length && (g.length > 1 || !m) && g.pop(), b.length < g.length + 1 && b.push([]);
                                    break
                                }
                                if ("\\\\" !== S) throw new n("Expected & or \\\\ or \\cr or \\end", e.nextToken);
                                e.consume();
                                var M = void 0;
                                " " !== e.gullet.future().text && (M = e.parseSizeGroup(!0)), v.push(M ? M.value : null), w(), b.push(Gr(e)), f = [], g.push(f), x()
                            }
                        }
                        return e.gullet.endGroup(), e.gullet.endGroup(), {
                            type: "array",
                            mode: e.mode,
                            addJot: i,
                            arraystretch: s,
                            body: g,
                            cols: o,
                            rowGaps: v,
                            hskipBeforeAndAfter: a,
                            hLinesBeforeRow: b,
                            colSeparationType: l,
                            tags: y,
                            leqno: p
                        }
                    }

                    function Wr(e) {
                        return "d" === e.slice(0, 1) ? "display" : "text"
                    }
                    var _r = function(e, t) {
                            var r, a, i = e.body.length,
                                o = e.hLinesBeforeRow,
                                s = 0,
                                h = new Array(i),
                                c = [],
                                m = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
                                u = 1 / t.fontMetrics().ptPerEm,
                                p = 5 * u;
                            e.colSeparationType && "small" === e.colSeparationType && (p = t.havingStyle(x.SCRIPT).sizeMultiplier / t.sizeMultiplier * .2778);
                            var d = "CD" === e.colSeparationType ? P({
                                    number: 3,
                                    unit: "ex"
                                }, t) : 12 * u,
                                f = 3 * u,
                                g = e.arraystretch * d,
                                v = .7 * g,
                                b = .3 * g,
                                y = 0;

                            function w(e) {
                                for (var t = 0; t < e.length; ++t) t > 0 && (y += .25), c.push({
                                    pos: y,
                                    isDashed: e[t]
                                })
                            }
                            for (w(o[0]), r = 0; r < e.body.length; ++r) {
                                var k = e.body[r],
                                    S = v,
                                    M = b;
                                s < k.length && (s = k.length);
                                var z = new Array(k.length);
                                for (a = 0; a < k.length; ++a) {
                                    var A = wt(k[a], t);
                                    M < A.depth && (M = A.depth), S < A.height && (S = A.height), z[a] = A
                                }
                                var T = e.rowGaps[r],
                                    B = 0;
                                T && (B = P(T, t)) > 0 && (M < (B += b) && (M = B), B = 0), e.addJot && (M += f), z.height = S, z.depth = M, y += S, z.pos = y, y += M + B, h[r] = z, w(o[r + 1])
                            }
                            var C, N, q = y / 2 + t.fontMetrics().axisHeight,
                                I = e.cols || [],
                                R = [],
                                H = [];
                            if (e.tags && e.tags.some((function(e) {
                                    return e
                                })))
                                for (r = 0; r < i; ++r) {
                                    var O = h[r],
                                        E = O.pos - q,
                                        L = e.tags[r],
                                        D = void 0;
                                    (D = !0 === L ? Ke.makeSpan(["eqn-num"], [], t) : !1 === L ? Ke.makeSpan([], [], t) : Ke.makeSpan([], ft(L, t, !0), t)).depth = O.depth, D.height = O.height, H.push({
                                        type: "elem",
                                        elem: D,
                                        shift: E
                                    })
                                }
                            for (a = 0, N = 0; a < s || N < I.length; ++a, ++N) {
                                for (var V = I[N] || {}, G = !0;
                                    "separator" === V.type;) {
                                    if (G || ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = F(t.fontMetrics().doubleRuleSep), R.push(C)), "|" !== V.separator && ":" !== V.separator) throw new n("Invalid separator type: " + V.separator);
                                    var U = "|" === V.separator ? "solid" : "dashed",
                                        Y = Ke.makeSpan(["vertical-separator"], [], t);
                                    Y.style.height = F(y), Y.style.borderRightWidth = F(m), Y.style.borderRightStyle = U, Y.style.margin = "0 " + F(-m / 2);
                                    var X = y - q;
                                    X && (Y.style.verticalAlign = F(-X)), R.push(Y), V = I[++N] || {}, G = !1
                                }
                                if (!(a >= s)) {
                                    var W = void 0;
                                    (a > 0 || e.hskipBeforeAndAfter) && 0 !== (W = l.deflt(V.pregap, p)) && ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = F(W), R.push(C));
                                    var _ = [];
                                    for (r = 0; r < i; ++r) {
                                        var j = h[r],
                                            $ = j[a];
                                        if ($) {
                                            var Z = j.pos - q;
                                            $.depth = j.depth, $.height = j.height, _.push({
                                                type: "elem",
                                                elem: $,
                                                shift: Z
                                            })
                                        }
                                    }
                                    _ = Ke.makeVList({
                                        positionType: "individualShift",
                                        children: _
                                    }, t), _ = Ke.makeSpan(["col-align-" + (V.align || "c")], [_]), R.push(_), (a < s - 1 || e.hskipBeforeAndAfter) && 0 !== (W = l.deflt(V.postgap, p)) && ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = F(W), R.push(C))
                                }
                            }
                            if (h = Ke.makeSpan(["mtable"], R), c.length > 0) {
                                for (var K = Ke.makeLineSpan("hline", t, m), J = Ke.makeLineSpan("hdashline", t, m), Q = [{
                                        type: "elem",
                                        elem: h,
                                        shift: 0
                                    }]; c.length > 0;) {
                                    var ee = c.pop(),
                                        te = ee.pos - q;
                                    ee.isDashed ? Q.push({
                                        type: "elem",
                                        elem: J,
                                        shift: te
                                    }) : Q.push({
                                        type: "elem",
                                        elem: K,
                                        shift: te
                                    })
                                }
                                h = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: Q
                                }, t)
                            }
                            if (0 === H.length) return Ke.makeSpan(["mord"], [h], t);
                            var re = Ke.makeVList({
                                positionType: "individualShift",
                                children: H
                            }, t);
                            return re = Ke.makeSpan(["tag"], [re], t), Ke.makeFragment([h, re])
                        },
                        jr = {
                            c: "center ",
                            l: "left ",
                            r: "right "
                        },
                        $r = function(e, t) {
                            for (var r = [], n = new Tt.MathNode("mtd", [], ["mtr-glue"]), a = new Tt.MathNode("mtd", [], ["mml-eqn-num"]), i = 0; i < e.body.length; i++) {
                                for (var o = e.body[i], s = [], l = 0; l < o.length; l++) s.push(new Tt.MathNode("mtd", [Rt(o[l], t)]));
                                e.tags && e.tags[i] && (s.unshift(n), s.push(n), e.leqno ? s.unshift(a) : s.push(a)), r.push(new Tt.MathNode("mtr", s))
                            }
                            var h = new Tt.MathNode("mtable", r),
                                c = .5 === e.arraystretch ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
                            h.setAttribute("rowspacing", F(c));
                            var m = "",
                                u = "";
                            if (e.cols && e.cols.length > 0) {
                                var p = e.cols,
                                    d = "",
                                    f = !1,
                                    g = 0,
                                    v = p.length;
                                "separator" === p[0].type && (m += "top ", g = 1), "separator" === p[p.length - 1].type && (m += "bottom ", v -= 1);
                                for (var b = g; b < v; b++) "align" === p[b].type ? (u += jr[p[b].align], f && (d += "none "), f = !0) : "separator" === p[b].type && f && (d += "|" === p[b].separator ? "solid " : "dashed ", f = !1);
                                h.setAttribute("columnalign", u.trim()), /[sd]/.test(d) && h.setAttribute("columnlines", d.trim())
                            }
                            if ("align" === e.colSeparationType) {
                                for (var y = e.cols || [], x = "", w = 1; w < y.length; w++) x += w % 2 ? "0em " : "1em ";
                                h.setAttribute("columnspacing", x.trim())
                            } else "alignat" === e.colSeparationType || "gather" === e.colSeparationType ? h.setAttribute("columnspacing", "0em") : "small" === e.colSeparationType ? h.setAttribute("columnspacing", "0.2778em") : "CD" === e.colSeparationType ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
                            var k = "",
                                S = e.hLinesBeforeRow;
                            m += S[0].length > 0 ? "left " : "", m += S[S.length - 1].length > 0 ? "right " : "";
                            for (var M = 1; M < S.length - 1; M++) k += 0 === S[M].length ? "none " : S[M][0] ? "dashed " : "solid ";
                            return /[sd]/.test(k) && h.setAttribute("rowlines", k.trim()), "" !== m && (h = new Tt.MathNode("menclose", [h])).setAttribute("notation", m.trim()), e.arraystretch && e.arraystretch < 1 && (h = new Tt.MathNode("mstyle", [h])).setAttribute("scriptlevel", "1"), h
                        },
                        Zr = function(e, t) {
                            -1 === e.envName.indexOf("ed") && Ur(e);
                            var r, a = [],
                                i = e.envName.indexOf("at") > -1 ? "alignat" : "align",
                                o = "split" === e.envName,
                                s = Xr(e.parser, {
                                    cols: a,
                                    addJot: !0,
                                    autoTag: o ? void 0 : Yr(e.envName),
                                    emptySingleRow: !0,
                                    colSeparationType: i,
                                    maxNumCols: o ? 2 : void 0,
                                    leqno: e.parser.settings.leqno
                                }, "display"),
                                l = 0,
                                h = {
                                    type: "ordgroup",
                                    mode: e.mode,
                                    body: []
                                };
                            if (t[0] && "ordgroup" === t[0].type) {
                                for (var c = "", m = 0; m < t[0].body.length; m++) c += Gt(t[0].body[m], "textord").text;
                                r = Number(c), l = 2 * r
                            }
                            var u = !l;
                            s.body.forEach((function(e) {
                                for (var t = 1; t < e.length; t += 2) {
                                    var a = Gt(e[t], "styling");
                                    Gt(a.body[0], "ordgroup").body.unshift(h)
                                }
                                if (u) l < e.length && (l = e.length);
                                else {
                                    var i = e.length / 2;
                                    if (r < i) throw new n("Too many math in a row: expected " + r + ", but got " + i, e[0])
                                }
                            }));
                            for (var p = 0; p < l; ++p) {
                                var d = "r",
                                    f = 0;
                                p % 2 === 1 ? d = "l" : p > 0 && u && (f = 1), a[p] = {
                                    type: "align",
                                    align: d,
                                    pregap: f,
                                    postgap: 0
                                }
                            }
                            return s.colSeparationType = u ? "align" : "alignat", s
                        };
                    Lr({
                        type: "array",
                        names: ["array", "darray"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = (Yt(t[0]) ? [t[0]] : Gt(t[0], "ordgroup").body).map((function(e) {
                                    var t = Ut(e).text;
                                    if (-1 !== "lcr".indexOf(t)) return {
                                        type: "align",
                                        align: t
                                    };
                                    if ("|" === t) return {
                                        type: "separator",
                                        separator: "|"
                                    };
                                    if (":" === t) return {
                                        type: "separator",
                                        separator: ":"
                                    };
                                    throw new n("Unknown column alignment: " + t, e)
                                })),
                                a = {
                                    cols: r,
                                    hskipBeforeAndAfter: !0,
                                    maxNumCols: r.length
                                };
                            return Xr(e.parser, a, Wr(e.envName))
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = {
                                    matrix: null,
                                    pmatrix: ["(", ")"],
                                    bmatrix: ["[", "]"],
                                    Bmatrix: ["\\{", "\\}"],
                                    vmatrix: ["|", "|"],
                                    Vmatrix: ["\\Vert", "\\Vert"]
                                }[e.envName.replace("*", "")],
                                r = "c",
                                a = {
                                    hskipBeforeAndAfter: !1,
                                    cols: [{
                                        type: "align",
                                        align: r
                                    }]
                                };
                            if ("*" === e.envName.charAt(e.envName.length - 1)) {
                                var i = e.parser;
                                if (i.consumeSpaces(), "[" === i.fetch().text) {
                                    if (i.consume(), i.consumeSpaces(), r = i.fetch().text, -1 === "lcr".indexOf(r)) throw new n("Expected l or c or r", i.nextToken);
                                    i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), a.cols = [{
                                        type: "align",
                                        align: r
                                    }]
                                }
                            }
                            var o = Xr(e.parser, a, Wr(e.envName)),
                                s = Math.max.apply(Math, [0].concat(o.body.map((function(e) {
                                    return e.length
                                }))));
                            return o.cols = new Array(s).fill({
                                type: "align",
                                align: r
                            }), t ? {
                                type: "leftright",
                                mode: e.mode,
                                body: [o],
                                left: t[0],
                                right: t[1],
                                rightColor: void 0
                            } : o
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["smallmatrix"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = Xr(e.parser, {
                                arraystretch: .5
                            }, "script");
                            return t.colSeparationType = "small", t
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["subarray"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = (Yt(t[0]) ? [t[0]] : Gt(t[0], "ordgroup").body).map((function(e) {
                                var t = Ut(e).text;
                                if (-1 !== "lc".indexOf(t)) return {
                                    type: "align",
                                    align: t
                                };
                                throw new n("Unknown column alignment: " + t, e)
                            }));
                            if (r.length > 1) throw new n("{subarray} can contain only one column");
                            var a = {
                                cols: r,
                                hskipBeforeAndAfter: !1,
                                arraystretch: .5
                            };
                            if ((a = Xr(e.parser, a, "script")).body.length > 0 && a.body[0].length > 1) throw new n("{subarray} can contain only one column");
                            return a
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["cases", "dcases", "rcases", "drcases"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = Xr(e.parser, {
                                arraystretch: 1.2,
                                cols: [{
                                    type: "align",
                                    align: "l",
                                    pregap: 0,
                                    postgap: 1
                                }, {
                                    type: "align",
                                    align: "l",
                                    pregap: 0,
                                    postgap: 0
                                }]
                            }, Wr(e.envName));
                            return {
                                type: "leftright",
                                mode: e.mode,
                                body: [t],
                                left: e.envName.indexOf("r") > -1 ? "." : "\\{",
                                right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
                                rightColor: void 0
                            }
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["align", "align*", "aligned", "split"],
                        props: {
                            numArgs: 0
                        },
                        handler: Zr,
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["gathered", "gather", "gather*"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            l.contains(["gather", "gather*"], e.envName) && Ur(e);
                            var t = {
                                cols: [{
                                    type: "align",
                                    align: "c"
                                }],
                                addJot: !0,
                                colSeparationType: "gather",
                                autoTag: Yr(e.envName),
                                emptySingleRow: !0,
                                leqno: e.parser.settings.leqno
                            };
                            return Xr(e.parser, t, "display")
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["alignat", "alignat*", "alignedat"],
                        props: {
                            numArgs: 1
                        },
                        handler: Zr,
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["equation", "equation*"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            Ur(e);
                            var t = {
                                autoTag: Yr(e.envName),
                                emptySingleRow: !0,
                                singleRow: !0,
                                maxNumCols: 1,
                                leqno: e.parser.settings.leqno
                            };
                            return Xr(e.parser, t, "display")
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Lr({
                        type: "array",
                        names: ["CD"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            return Ur(e),
                                function(e) {
                                    var t = [];
                                    for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup();;) {
                                        t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
                                        var r = e.fetch().text;
                                        if ("&" !== r && "\\\\" !== r) {
                                            if ("\\end" === r) {
                                                0 === t[t.length - 1].length && t.pop();
                                                break
                                            }
                                            throw new n("Expected \\\\ or \\cr or \\end", e.nextToken)
                                        }
                                        e.consume()
                                    }
                                    for (var a, i, o = [], s = [o], l = 0; l < t.length; l++) {
                                        for (var h = t[l], c = {
                                                type: "styling",
                                                body: [],
                                                mode: "math",
                                                style: "display"
                                            }, m = 0; m < h.length; m++)
                                            if (er(h[m])) {
                                                o.push(c);
                                                var u = Ut(h[m += 1]).text,
                                                    p = new Array(2);
                                                if (p[0] = {
                                                        type: "ordgroup",
                                                        mode: "math",
                                                        body: []
                                                    }, p[1] = {
                                                        type: "ordgroup",
                                                        mode: "math",
                                                        body: []
                                                    }, "=|.".indexOf(u) > -1);
                                                else {
                                                    if (!("<>AV".indexOf(u) > -1)) throw new n('Expected one of "<>AV=|." after @', h[m]);
                                                    for (var d = 0; d < 2; d++) {
                                                        for (var f = !0, g = m + 1; g < h.length; g++) {
                                                            if (i = u, ("mathord" === (a = h[g]).type || "atom" === a.type) && a.text === i) {
                                                                f = !1, m = g;
                                                                break
                                                            }
                                                            if (er(h[g])) throw new n("Missing a " + u + " character to complete a CD arrow.", h[g]);
                                                            p[d].body.push(h[g])
                                                        }
                                                        if (f) throw new n("Missing a " + u + " character to complete a CD arrow.", h[m])
                                                    }
                                                }
                                                var v = {
                                                    type: "styling",
                                                    body: [tr(u, p, e)],
                                                    mode: "math",
                                                    style: "display"
                                                };
                                                o.push(v), c = {
                                                    type: "styling",
                                                    body: [],
                                                    mode: "math",
                                                    style: "display"
                                                }
                                            } else c.body.push(h[m]);
                                        l % 2 === 0 ? o.push(c) : o.shift(), o = [], s.push(o)
                                    }
                                    return e.gullet.endGroup(), e.gullet.endGroup(), {
                                        type: "array",
                                        mode: "math",
                                        body: s,
                                        arraystretch: 1,
                                        addJot: !0,
                                        rowGaps: [null],
                                        cols: new Array(s[0].length).fill({
                                            type: "align",
                                            align: "c",
                                            pregap: .25,
                                            postgap: .25
                                        }),
                                        colSeparationType: "CD",
                                        hLinesBeforeRow: new Array(s.length + 1).fill([])
                                    }
                                }(e.parser)
                        },
                        htmlBuilder: _r,
                        mathmlBuilder: $r
                    }), Vr("\\nonumber", "\\gdef\\@eqnsw{0}"), Vr("\\notag", "\\nonumber"), ot({
                        type: "text",
                        names: ["\\hline", "\\hdashline"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !0
                        },
                        handler: function(e, t) {
                            throw new n(e.funcName + " valid only within array environment")
                        }
                    });
                    var Kr = Er;
                    ot({
                        type: "environment",
                        names: ["\\begin", "\\end"],
                        props: {
                            numArgs: 1,
                            argTypes: ["text"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                a = e.funcName,
                                i = t[0];
                            if ("ordgroup" !== i.type) throw new n("Invalid environment name", i);
                            for (var o = "", s = 0; s < i.body.length; ++s) o += Gt(i.body[s], "textord").text;
                            if ("\\begin" === a) {
                                if (!Kr.hasOwnProperty(o)) throw new n("No such environment: " + o, i);
                                var l = Kr[o],
                                    h = r.parseArguments("\\begin{" + o + "}", l),
                                    c = h.args,
                                    m = h.optArgs,
                                    u = {
                                        mode: r.mode,
                                        envName: o,
                                        parser: r
                                    },
                                    p = l.handler(u, c, m);
                                r.expect("\\end", !1);
                                var d = r.nextToken,
                                    f = Gt(r.parseFunction(), "environment");
                                if (f.name !== o) throw new n("Mismatch: \\begin{" + o + "} matched by \\end{" + f.name + "}", d);
                                return p
                            }
                            return {
                                type: "environment",
                                mode: r.mode,
                                name: o,
                                nameGroup: i
                            }
                        }
                    });
                    var Jr = function(e, t) {
                            var r = e.font,
                                n = t.withFont(r);
                            return wt(e.body, n)
                        },
                        Qr = function(e, t) {
                            var r = e.font,
                                n = t.withFont(r);
                            return Rt(e.body, n)
                        },
                        en = {
                            "\\Bbb": "\\mathbb",
                            "\\bold": "\\mathbf",
                            "\\frak": "\\mathfrak",
                            "\\bm": "\\boldsymbol"
                        };
                    ot({
                        type: "font",
                        names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
                        props: {
                            numArgs: 1,
                            allowedInArgument: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = lt(t[0]),
                                i = n;
                            return i in en && (i = en[i]), {
                                type: "font",
                                mode: r.mode,
                                font: i.slice(1),
                                body: a
                            }
                        },
                        htmlBuilder: Jr,
                        mathmlBuilder: Qr
                    }), ot({
                        type: "mclass",
                        names: ["\\boldsymbol", "\\bm"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0],
                                a = l.isCharacterBox(n);
                            return {
                                type: "mclass",
                                mode: r.mode,
                                mclass: Jt(n),
                                body: [{
                                    type: "font",
                                    mode: r.mode,
                                    font: "boldsymbol",
                                    body: n
                                }],
                                isCharacterBox: a
                            }
                        }
                    }), ot({
                        type: "font",
                        names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = e.breakOnTokenText,
                                i = r.mode,
                                o = r.parseExpression(!0, a);
                            return {
                                type: "font",
                                mode: i,
                                font: "math" + n.slice(1),
                                body: {
                                    type: "ordgroup",
                                    mode: r.mode,
                                    body: o
                                }
                            }
                        },
                        htmlBuilder: Jr,
                        mathmlBuilder: Qr
                    });
                    var tn = function(e, t) {
                            var r = t;
                            return "display" === e ? r = r.id >= x.SCRIPT.id ? r.text() : x.DISPLAY : "text" === e && r.size === x.DISPLAY.size ? r = x.TEXT : "script" === e ? r = x.SCRIPT : "scriptscript" === e && (r = x.SCRIPTSCRIPT), r
                        },
                        rn = function(e, t) {
                            var r, n = tn(e.size, t.style),
                                a = n.fracNum(),
                                i = n.fracDen();
                            r = t.havingStyle(a);
                            var o = wt(e.numer, r, t);
                            if (e.continued) {
                                var s = 8.5 / t.fontMetrics().ptPerEm,
                                    l = 3.5 / t.fontMetrics().ptPerEm;
                                o.height = o.height < s ? s : o.height, o.depth = o.depth < l ? l : o.depth
                            }
                            r = t.havingStyle(i);
                            var h, c, m, u, p, d, f, g, v, b, y = wt(e.denom, r, t);
                            if (e.hasBarLine ? (e.barSize ? (c = P(e.barSize, t), h = Ke.makeLineSpan("frac-line", t, c)) : h = Ke.makeLineSpan("frac-line", t), c = h.height, m = h.height) : (h = null, c = 0, m = t.fontMetrics().defaultRuleThickness), n.size === x.DISPLAY.size || "display" === e.size ? (u = t.fontMetrics().num1, p = c > 0 ? 3 * m : 7 * m, d = t.fontMetrics().denom1) : (c > 0 ? (u = t.fontMetrics().num2, p = m) : (u = t.fontMetrics().num3, p = 3 * m), d = t.fontMetrics().denom2), h) {
                                var w = t.fontMetrics().axisHeight;
                                u - o.depth - (w + .5 * c) < p && (u += p - (u - o.depth - (w + .5 * c))), w - .5 * c - (y.height - d) < p && (d += p - (w - .5 * c - (y.height - d)));
                                var k = -(w - .5 * c);
                                f = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: y,
                                        shift: d
                                    }, {
                                        type: "elem",
                                        elem: h,
                                        shift: k
                                    }, {
                                        type: "elem",
                                        elem: o,
                                        shift: -u
                                    }]
                                }, t)
                            } else {
                                var S = u - o.depth - (y.height - d);
                                S < p && (u += .5 * (p - S), d += .5 * (p - S)), f = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: y,
                                        shift: d
                                    }, {
                                        type: "elem",
                                        elem: o,
                                        shift: -u
                                    }]
                                }, t)
                            }
                            return r = t.havingStyle(n), f.height *= r.sizeMultiplier / t.sizeMultiplier, f.depth *= r.sizeMultiplier / t.sizeMultiplier, g = n.size === x.DISPLAY.size ? t.fontMetrics().delim1 : n.size === x.SCRIPTSCRIPT.size ? t.havingStyle(x.SCRIPT).fontMetrics().delim2 : t.fontMetrics().delim2, v = null == e.leftDelim ? xt(t, ["mopen"]) : Cr.customSizedDelim(e.leftDelim, g, !0, t.havingStyle(n), e.mode, ["mopen"]), b = e.continued ? Ke.makeSpan([]) : null == e.rightDelim ? xt(t, ["mclose"]) : Cr.customSizedDelim(e.rightDelim, g, !0, t.havingStyle(n), e.mode, ["mclose"]), Ke.makeSpan(["mord"].concat(r.sizingClasses(t)), [v, Ke.makeSpan(["mfrac"], [f]), b], t)
                        },
                        nn = function(e, t) {
                            var r = new Tt.MathNode("mfrac", [Rt(e.numer, t), Rt(e.denom, t)]);
                            if (e.hasBarLine) {
                                if (e.barSize) {
                                    var n = P(e.barSize, t);
                                    r.setAttribute("linethickness", F(n))
                                }
                            } else r.setAttribute("linethickness", "0px");
                            var a = tn(e.size, t.style);
                            if (a.size !== t.style.size) {
                                r = new Tt.MathNode("mstyle", [r]);
                                var i = a.size === x.DISPLAY.size ? "true" : "false";
                                r.setAttribute("displaystyle", i), r.setAttribute("scriptlevel", "0")
                            }
                            if (null != e.leftDelim || null != e.rightDelim) {
                                var o = [];
                                if (null != e.leftDelim) {
                                    var s = new Tt.MathNode("mo", [new Tt.TextNode(e.leftDelim.replace("\\", ""))]);
                                    s.setAttribute("fence", "true"), o.push(s)
                                }
                                if (o.push(r), null != e.rightDelim) {
                                    var l = new Tt.MathNode("mo", [new Tt.TextNode(e.rightDelim.replace("\\", ""))]);
                                    l.setAttribute("fence", "true"), o.push(l)
                                }
                                return Ct(o)
                            }
                            return r
                        };
                    ot({
                        type: "genfrac",
                        names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
                        props: {
                            numArgs: 2,
                            allowedInArgument: !0
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = e.funcName,
                                i = t[0],
                                o = t[1],
                                s = null,
                                l = null,
                                h = "auto";
                            switch (a) {
                                case "\\dfrac":
                                case "\\frac":
                                case "\\tfrac":
                                    r = !0;
                                    break;
                                case "\\\\atopfrac":
                                    r = !1;
                                    break;
                                case "\\dbinom":
                                case "\\binom":
                                case "\\tbinom":
                                    r = !1, s = "(", l = ")";
                                    break;
                                case "\\\\bracefrac":
                                    r = !1, s = "\\{", l = "\\}";
                                    break;
                                case "\\\\brackfrac":
                                    r = !1, s = "[", l = "]";
                                    break;
                                default:
                                    throw new Error("Unrecognized genfrac command")
                            }
                            switch (a) {
                                case "\\dfrac":
                                case "\\dbinom":
                                    h = "display";
                                    break;
                                case "\\tfrac":
                                case "\\tbinom":
                                    h = "text"
                            }
                            return {
                                type: "genfrac",
                                mode: n.mode,
                                continued: !1,
                                numer: i,
                                denom: o,
                                hasBarLine: r,
                                leftDelim: s,
                                rightDelim: l,
                                size: h,
                                barSize: null
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    }), ot({
                        type: "genfrac",
                        names: ["\\cfrac"],
                        props: {
                            numArgs: 2
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = (e.funcName, t[0]),
                                a = t[1];
                            return {
                                type: "genfrac",
                                mode: r.mode,
                                continued: !0,
                                numer: n,
                                denom: a,
                                hasBarLine: !0,
                                leftDelim: null,
                                rightDelim: null,
                                size: "display",
                                barSize: null
                            }
                        }
                    }), ot({
                        type: "infix",
                        names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                        props: {
                            numArgs: 0,
                            infix: !0
                        },
                        handler: function(e) {
                            var t, r = e.parser,
                                n = e.funcName,
                                a = e.token;
                            switch (n) {
                                case "\\over":
                                    t = "\\frac";
                                    break;
                                case "\\choose":
                                    t = "\\binom";
                                    break;
                                case "\\atop":
                                    t = "\\\\atopfrac";
                                    break;
                                case "\\brace":
                                    t = "\\\\bracefrac";
                                    break;
                                case "\\brack":
                                    t = "\\\\brackfrac";
                                    break;
                                default:
                                    throw new Error("Unrecognized infix genfrac command")
                            }
                            return {
                                type: "infix",
                                mode: r.mode,
                                replaceWith: t,
                                token: a
                            }
                        }
                    });
                    var an = ["display", "text", "script", "scriptscript"],
                        on = function(e) {
                            var t = null;
                            return e.length > 0 && (t = "." === (t = e) ? null : t), t
                        };
                    ot({
                        type: "genfrac",
                        names: ["\\genfrac"],
                        props: {
                            numArgs: 6,
                            allowedInArgument: !0,
                            argTypes: ["math", "math", "size", "text", "math", "math"]
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = t[4],
                                i = t[5],
                                o = lt(t[0]),
                                s = "atom" === o.type && "open" === o.family ? on(o.text) : null,
                                l = lt(t[1]),
                                h = "atom" === l.type && "close" === l.family ? on(l.text) : null,
                                c = Gt(t[2], "size"),
                                m = null;
                            r = !!c.isBlank || (m = c.value).number > 0;
                            var u = "auto",
                                p = t[3];
                            if ("ordgroup" === p.type) {
                                if (p.body.length > 0) {
                                    var d = Gt(p.body[0], "textord");
                                    u = an[Number(d.text)]
                                }
                            } else p = Gt(p, "textord"), u = an[Number(p.text)];
                            return {
                                type: "genfrac",
                                mode: n.mode,
                                numer: a,
                                denom: i,
                                continued: !1,
                                hasBarLine: r,
                                barSize: m,
                                leftDelim: s,
                                rightDelim: h,
                                size: u
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    }), ot({
                        type: "infix",
                        names: ["\\above"],
                        props: {
                            numArgs: 1,
                            argTypes: ["size"],
                            infix: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = (e.funcName, e.token);
                            return {
                                type: "infix",
                                mode: r.mode,
                                replaceWith: "\\\\abovefrac",
                                size: Gt(t[0], "size").value,
                                token: n
                            }
                        }
                    }), ot({
                        type: "genfrac",
                        names: ["\\\\abovefrac"],
                        props: {
                            numArgs: 3,
                            argTypes: ["math", "size", "math"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = (e.funcName, t[0]),
                                a = function(e) {
                                    if (!e) throw new Error("Expected non-null, but got " + String(e));
                                    return e
                                }(Gt(t[1], "infix").size),
                                i = t[2],
                                o = a.number > 0;
                            return {
                                type: "genfrac",
                                mode: r.mode,
                                numer: n,
                                denom: i,
                                continued: !1,
                                hasBarLine: o,
                                barSize: a,
                                leftDelim: null,
                                rightDelim: null,
                                size: "auto"
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    });
                    var sn = function(e, t) {
                        var r, n, a = t.style;
                        "supsub" === e.type ? (r = e.sup ? wt(e.sup, t.havingStyle(a.sup()), t) : wt(e.sub, t.havingStyle(a.sub()), t), n = Gt(e.base, "horizBrace")) : n = Gt(e, "horizBrace");
                        var i, o = wt(n.base, t.havingBaseStyle(x.DISPLAY)),
                            s = Ft(n, t);
                        if (n.isOver ? (i = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: o
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: s
                                }]
                            }, t)).children[0].children[0].children[1].classes.push("svg-align") : (i = Ke.makeVList({
                                positionType: "bottom",
                                positionData: o.depth + .1 + s.height,
                                children: [{
                                    type: "elem",
                                    elem: s
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: o
                                }]
                            }, t)).children[0].children[0].children[0].classes.push("svg-align"), r) {
                            var l = Ke.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t);
                            i = n.isOver ? Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: l
                                }, {
                                    type: "kern",
                                    size: .2
                                }, {
                                    type: "elem",
                                    elem: r
                                }]
                            }, t) : Ke.makeVList({
                                positionType: "bottom",
                                positionData: l.depth + .2 + r.height + r.depth,
                                children: [{
                                    type: "elem",
                                    elem: r
                                }, {
                                    type: "kern",
                                    size: .2
                                }, {
                                    type: "elem",
                                    elem: l
                                }]
                            }, t)
                        }
                        return Ke.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t)
                    };
                    ot({
                        type: "horizBrace",
                        names: ["\\overbrace", "\\underbrace"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName;
                            return {
                                type: "horizBrace",
                                mode: r.mode,
                                label: n,
                                isOver: /^\\over/.test(n),
                                base: t[0]
                            }
                        },
                        htmlBuilder: sn,
                        mathmlBuilder: function(e, t) {
                            var r = Pt(e.label);
                            return new Tt.MathNode(e.isOver ? "mover" : "munder", [Rt(e.base, t), r])
                        }
                    }), ot({
                        type: "href",
                        names: ["\\href"],
                        props: {
                            numArgs: 2,
                            argTypes: ["url", "original"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[1],
                                a = Gt(t[0], "url").url;
                            return r.settings.isTrusted({
                                command: "\\href",
                                url: a
                            }) ? {
                                type: "href",
                                mode: r.mode,
                                href: a,
                                body: ht(n)
                            } : r.formatUnsupportedCmd("\\href")
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.body, t, !1);
                            return Ke.makeAnchor(e.href, [], r, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = It(e.body, t);
                            return r instanceof zt || (r = new zt("mrow", [r])), r.setAttribute("href", e.href), r
                        }
                    }), ot({
                        type: "href",
                        names: ["\\url"],
                        props: {
                            numArgs: 1,
                            argTypes: ["url"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Gt(t[0], "url").url;
                            if (!r.settings.isTrusted({
                                    command: "\\url",
                                    url: n
                                })) return r.formatUnsupportedCmd("\\url");
                            for (var a = [], i = 0; i < n.length; i++) {
                                var o = n[i];
                                "~" === o && (o = "\\textasciitilde"), a.push({
                                    type: "textord",
                                    mode: "text",
                                    text: o
                                })
                            }
                            var s = {
                                type: "text",
                                mode: r.mode,
                                font: "\\texttt",
                                body: a
                            };
                            return {
                                type: "href",
                                mode: r.mode,
                                href: n,
                                body: ht(s)
                            }
                        }
                    }), ot({
                        type: "hbox",
                        names: ["\\hbox"],
                        props: {
                            numArgs: 1,
                            argTypes: ["text"],
                            allowedInText: !0,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "hbox",
                                mode: e.parser.mode,
                                body: ht(t[0])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.body, t, !1);
                            return Ke.makeFragment(r)
                        },
                        mathmlBuilder: function(e, t) {
                            return new Tt.MathNode("mrow", qt(e.body, t))
                        }
                    }), ot({
                        type: "html",
                        names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
                        props: {
                            numArgs: 2,
                            argTypes: ["raw", "original"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r, a = e.parser,
                                i = e.funcName,
                                o = (e.token, Gt(t[0], "raw").string),
                                s = t[1];
                            a.settings.strict && a.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                            var l = {};
                            switch (i) {
                                case "\\htmlClass":
                                    l.class = o, r = {
                                        command: "\\htmlClass",
                                        class: o
                                    };
                                    break;
                                case "\\htmlId":
                                    l.id = o, r = {
                                        command: "\\htmlId",
                                        id: o
                                    };
                                    break;
                                case "\\htmlStyle":
                                    l.style = o, r = {
                                        command: "\\htmlStyle",
                                        style: o
                                    };
                                    break;
                                case "\\htmlData":
                                    for (var h = o.split(","), c = 0; c < h.length; c++) {
                                        var m = h[c].split("=");
                                        if (2 !== m.length) throw new n("Error parsing key-value for \\htmlData");
                                        l["data-" + m[0].trim()] = m[1].trim()
                                    }
                                    r = {
                                        command: "\\htmlData",
                                        attributes: l
                                    };
                                    break;
                                default:
                                    throw new Error("Unrecognized html command")
                            }
                            return a.settings.isTrusted(r) ? {
                                type: "html",
                                mode: a.mode,
                                attributes: l,
                                body: ht(s)
                            } : a.formatUnsupportedCmd(i)
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.body, t, !1),
                                n = ["enclosing"];
                            e.attributes.class && n.push.apply(n, e.attributes.class.trim().split(/\s+/));
                            var a = Ke.makeSpan(n, r, t);
                            for (var i in e.attributes) "class" !== i && e.attributes.hasOwnProperty(i) && a.setAttribute(i, e.attributes[i]);
                            return a
                        },
                        mathmlBuilder: function(e, t) {
                            return It(e.body, t)
                        }
                    }), ot({
                        type: "htmlmathml",
                        names: ["\\html@mathml"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "htmlmathml",
                                mode: e.parser.mode,
                                html: ht(t[0]),
                                mathml: ht(t[1])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.html, t, !1);
                            return Ke.makeFragment(r)
                        },
                        mathmlBuilder: function(e, t) {
                            return It(e.mathml, t)
                        }
                    });
                    var ln = function(e) {
                        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
                            number: +e,
                            unit: "bp"
                        };
                        var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
                        if (!t) throw new n("Invalid size: '" + e + "' in \\includegraphics");
                        var r = {
                            number: +(t[1] + t[2]),
                            unit: t[3]
                        };
                        if (!V(r)) throw new n("Invalid unit: '" + r.unit + "' in \\includegraphics.");
                        return r
                    };
                    ot({
                        type: "includegraphics",
                        names: ["\\includegraphics"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1,
                            argTypes: ["raw", "url"],
                            allowedInText: !1
                        },
                        handler: function(e, t, r) {
                            var a = e.parser,
                                i = {
                                    number: 0,
                                    unit: "em"
                                },
                                o = {
                                    number: .9,
                                    unit: "em"
                                },
                                s = {
                                    number: 0,
                                    unit: "em"
                                },
                                l = "";
                            if (r[0])
                                for (var h = Gt(r[0], "raw").string.split(","), c = 0; c < h.length; c++) {
                                    var m = h[c].split("=");
                                    if (2 === m.length) {
                                        var u = m[1].trim();
                                        switch (m[0].trim()) {
                                            case "alt":
                                                l = u;
                                                break;
                                            case "width":
                                                i = ln(u);
                                                break;
                                            case "height":
                                                o = ln(u);
                                                break;
                                            case "totalheight":
                                                s = ln(u);
                                                break;
                                            default:
                                                throw new n("Invalid key: '" + m[0] + "' in \\includegraphics.")
                                        }
                                    }
                                }
                            var p = Gt(t[0], "url").url;
                            return "" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))), a.settings.isTrusted({
                                command: "\\includegraphics",
                                url: p
                            }) ? {
                                type: "includegraphics",
                                mode: a.mode,
                                alt: l,
                                width: i,
                                height: o,
                                totalheight: s,
                                src: p
                            } : a.formatUnsupportedCmd("\\includegraphics")
                        },
                        htmlBuilder: function(e, t) {
                            var r = P(e.height, t),
                                n = 0;
                            e.totalheight.number > 0 && (n = P(e.totalheight, t) - r);
                            var a = 0;
                            e.width.number > 0 && (a = P(e.width, t));
                            var i = {
                                height: F(r + n)
                            };
                            a > 0 && (i.width = F(a)), n > 0 && (i.verticalAlign = F(-n));
                            var o = new j(e.src, e.alt, i);
                            return o.height = r, o.depth = n, o
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mglyph", []);
                            r.setAttribute("alt", e.alt);
                            var n = P(e.height, t),
                                a = 0;
                            if (e.totalheight.number > 0 && (a = P(e.totalheight, t) - n, r.setAttribute("valign", F(-a))), r.setAttribute("height", F(n + a)), e.width.number > 0) {
                                var i = P(e.width, t);
                                r.setAttribute("width", F(i))
                            }
                            return r.setAttribute("src", e.src), r
                        }
                    }), ot({
                        type: "kern",
                        names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                        props: {
                            numArgs: 1,
                            argTypes: ["size"],
                            primitive: !0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = Gt(t[0], "size");
                            if (r.settings.strict) {
                                var i = "m" === n[1],
                                    o = "mu" === a.value.unit;
                                i ? (o || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + a.value.unit + " units"), "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : o && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
                            }
                            return {
                                type: "kern",
                                mode: r.mode,
                                dimension: a.value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            return Ke.makeGlue(e.dimension, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = P(e.dimension, t);
                            return new Tt.SpaceNode(r)
                        }
                    }), ot({
                        type: "lap",
                        names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "lap",
                                mode: r.mode,
                                alignment: n.slice(5),
                                body: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r;
                            "clap" === e.alignment ? (r = Ke.makeSpan([], [wt(e.body, t)]), r = Ke.makeSpan(["inner"], [r], t)) : r = Ke.makeSpan(["inner"], [wt(e.body, t)]);
                            var n = Ke.makeSpan(["fix"], []),
                                a = Ke.makeSpan([e.alignment], [r, n], t),
                                i = Ke.makeSpan(["strut"]);
                            return i.style.height = F(a.height + a.depth), a.depth && (i.style.verticalAlign = F(-a.depth)), a.children.unshift(i), a = Ke.makeSpan(["thinbox"], [a], t), Ke.makeSpan(["mord", "vbox"], [a], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mpadded", [Rt(e.body, t)]);
                            if ("rlap" !== e.alignment) {
                                var n = "llap" === e.alignment ? "-1" : "-0.5";
                                r.setAttribute("lspace", n + "width")
                            }
                            return r.setAttribute("width", "0px"), r
                        }
                    }), ot({
                        type: "styling",
                        names: ["\\(", "$"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !1
                        },
                        handler: function(e, t) {
                            var r = e.funcName,
                                n = e.parser,
                                a = n.mode;
                            n.switchMode("math");
                            var i = "\\(" === r ? "\\)" : "$",
                                o = n.parseExpression(!1, i);
                            return n.expect(i), n.switchMode(a), {
                                type: "styling",
                                mode: n.mode,
                                style: "text",
                                body: o
                            }
                        }
                    }), ot({
                        type: "text",
                        names: ["\\)", "\\]"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !1
                        },
                        handler: function(e, t) {
                            throw new n("Mismatched " + e.funcName)
                        }
                    });
                    var hn = function(e, t) {
                        switch (t.style.size) {
                            case x.DISPLAY.size:
                                return e.display;
                            case x.TEXT.size:
                                return e.text;
                            case x.SCRIPT.size:
                                return e.script;
                            case x.SCRIPTSCRIPT.size:
                                return e.scriptscript;
                            default:
                                return e.text
                        }
                    };
                    ot({
                        type: "mathchoice",
                        names: ["\\mathchoice"],
                        props: {
                            numArgs: 4,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "mathchoice",
                                mode: e.parser.mode,
                                display: ht(t[0]),
                                text: ht(t[1]),
                                script: ht(t[2]),
                                scriptscript: ht(t[3])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = hn(e, t),
                                n = ft(r, t, !1);
                            return Ke.makeFragment(n)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = hn(e, t);
                            return It(r, t)
                        }
                    });
                    var cn = function(e, t, r, n, a, i, o) {
                            e = Ke.makeSpan([], [e]);
                            var s, h, c, m = r && l.isCharacterBox(r);
                            if (t) {
                                var u = wt(t, n.havingStyle(a.sup()), n);
                                h = {
                                    elem: u,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - u.depth)
                                }
                            }
                            if (r) {
                                var p = wt(r, n.havingStyle(a.sub()), n);
                                s = {
                                    elem: p,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - p.height)
                                }
                            }
                            if (h && s) {
                                var d = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + e.depth + o;
                                c = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: d,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: F(-i)
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: e
                                    }, {
                                        type: "kern",
                                        size: h.kern
                                    }, {
                                        type: "elem",
                                        elem: h.elem,
                                        marginLeft: F(i)
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            } else if (s) {
                                var f = e.height - o;
                                c = Ke.makeVList({
                                    positionType: "top",
                                    positionData: f,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: F(-i)
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: e
                                    }]
                                }, n)
                            } else {
                                if (!h) return e;
                                var g = e.depth + o;
                                c = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: g,
                                    children: [{
                                        type: "elem",
                                        elem: e
                                    }, {
                                        type: "kern",
                                        size: h.kern
                                    }, {
                                        type: "elem",
                                        elem: h.elem,
                                        marginLeft: F(i)
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            }
                            var v = [c];
                            if (s && 0 !== i && !m) {
                                var b = Ke.makeSpan(["mspace"], [], n);
                                b.style.marginRight = F(i), v.unshift(b)
                            }
                            return Ke.makeSpan(["mop", "op-limits"], v, n)
                        },
                        mn = ["\\smallint"],
                        un = function(e, t) {
                            var r, n, a, i = !1;
                            "supsub" === e.type ? (r = e.sup, n = e.sub, a = Gt(e.base, "op"), i = !0) : a = Gt(e, "op");
                            var o, s = t.style,
                                h = !1;
                            if (s.size === x.DISPLAY.size && a.symbol && !l.contains(mn, a.name) && (h = !0), a.symbol) {
                                var c = h ? "Size2-Regular" : "Size1-Regular",
                                    m = "";
                                if ("\\oiint" !== a.name && "\\oiiint" !== a.name || (m = a.name.slice(1), a.name = "oiint" === m ? "\\iint" : "\\iiint"), o = Ke.makeSymbol(a.name, c, "math", t, ["mop", "op-symbol", h ? "large-op" : "small-op"]), m.length > 0) {
                                    var u = o.italic,
                                        p = Ke.staticSvg(m + "Size" + (h ? "2" : "1"), t);
                                    o = Ke.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: o,
                                            shift: 0
                                        }, {
                                            type: "elem",
                                            elem: p,
                                            shift: h ? .08 : 0
                                        }]
                                    }, t), a.name = "\\" + m, o.classes.unshift("mop"), o.italic = u
                                }
                            } else if (a.body) {
                                var d = ft(a.body, t, !0);
                                1 === d.length && d[0] instanceof Z ? (o = d[0]).classes[0] = "mop" : o = Ke.makeSpan(["mop"], d, t)
                            } else {
                                for (var f = [], g = 1; g < a.name.length; g++) f.push(Ke.mathsym(a.name[g], a.mode, t));
                                o = Ke.makeSpan(["mop"], f, t)
                            }
                            var v = 0,
                                b = 0;
                            return (o instanceof Z || "\\oiint" === a.name || "\\oiiint" === a.name) && !a.suppressBaseShift && (v = (o.height - o.depth) / 2 - t.fontMetrics().axisHeight, b = o.italic), i ? cn(o, r, n, t, s, b, v) : (v && (o.style.position = "relative", o.style.top = F(v)), o)
                        },
                        pn = function(e, t) {
                            var r;
                            if (e.symbol) r = new zt("mo", [Bt(e.name, e.mode)]), l.contains(mn, e.name) && r.setAttribute("largeop", "false");
                            else if (e.body) r = new zt("mo", qt(e.body, t));
                            else {
                                r = new zt("mi", [new At(e.name.slice(1))]);
                                var n = new zt("mo", [Bt("\u2061", "text")]);
                                r = e.parentIsSupSub ? new zt("mrow", [r, n]) : Mt([r, n])
                            }
                            return r
                        },
                        dn = {
                            "\u220f": "\\prod",
                            "\u2210": "\\coprod",
                            "\u2211": "\\sum",
                            "\u22c0": "\\bigwedge",
                            "\u22c1": "\\bigvee",
                            "\u22c2": "\\bigcap",
                            "\u22c3": "\\bigcup",
                            "\u2a00": "\\bigodot",
                            "\u2a01": "\\bigoplus",
                            "\u2a02": "\\bigotimes",
                            "\u2a04": "\\biguplus",
                            "\u2a06": "\\bigsqcup"
                        };
                    ot({
                        type: "op",
                        names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220f", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName;
                            return 1 === n.length && (n = dn[n]), {
                                type: "op",
                                mode: r.mode,
                                limits: !0,
                                parentIsSupSub: !1,
                                symbol: !0,
                                name: n
                            }
                        },
                        htmlBuilder: un,
                        mathmlBuilder: pn
                    }), ot({
                        type: "op",
                        names: ["\\mathop"],
                        props: {
                            numArgs: 1,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "op",
                                mode: r.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !1,
                                body: ht(n)
                            }
                        },
                        htmlBuilder: un,
                        mathmlBuilder: pn
                    });
                    var fn = {
                        "\u222b": "\\int",
                        "\u222c": "\\iint",
                        "\u222d": "\\iiint",
                        "\u222e": "\\oint",
                        "\u222f": "\\oiint",
                        "\u2230": "\\oiiint"
                    };
                    ot({
                        type: "op",
                        names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return {
                                type: "op",
                                mode: t.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !1,
                                name: r
                            }
                        },
                        htmlBuilder: un,
                        mathmlBuilder: pn
                    }), ot({
                        type: "op",
                        names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return {
                                type: "op",
                                mode: t.mode,
                                limits: !0,
                                parentIsSupSub: !1,
                                symbol: !1,
                                name: r
                            }
                        },
                        htmlBuilder: un,
                        mathmlBuilder: pn
                    }), ot({
                        type: "op",
                        names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return 1 === r.length && (r = fn[r]), {
                                type: "op",
                                mode: t.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !0,
                                name: r
                            }
                        },
                        htmlBuilder: un,
                        mathmlBuilder: pn
                    });
                    var gn = function(e, t) {
                        var r, n, a, i, o = !1;
                        if ("supsub" === e.type ? (r = e.sup, n = e.sub, a = Gt(e.base, "operatorname"), o = !0) : a = Gt(e, "operatorname"), a.body.length > 0) {
                            for (var s = a.body.map((function(e) {
                                    var t = e.text;
                                    return "string" === typeof t ? {
                                        type: "textord",
                                        mode: e.mode,
                                        text: t
                                    } : e
                                })), l = ft(s, t.withFont("mathrm"), !0), h = 0; h < l.length; h++) {
                                var c = l[h];
                                c instanceof Z && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                            }
                            i = Ke.makeSpan(["mop"], l, t)
                        } else i = Ke.makeSpan(["mop"], [], t);
                        return o ? cn(i, r, n, t, t.style, 0, 0) : i
                    };

                    function vn(e, t, r) {
                        for (var n = ft(e, t, !1), a = t.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
                            var o = n[i].classes.indexOf("sizing");
                            o < 0 ? Array.prototype.push.apply(n[i].classes, t.sizingClasses(r)) : n[i].classes[o + 1] === "reset-size" + t.size && (n[i].classes[o + 1] = "reset-size" + r.size), n[i].height *= a, n[i].depth *= a
                        }
                        return Ke.makeFragment(n)
                    }
                    ot({
                        type: "operatorname",
                        names: ["\\operatorname@", "\\operatornamewithlimits"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "operatorname",
                                mode: r.mode,
                                body: ht(a),
                                alwaysHandleSupSub: "\\operatornamewithlimits" === n,
                                limits: !1,
                                parentIsSupSub: !1
                            }
                        },
                        htmlBuilder: gn,
                        mathmlBuilder: function(e, t) {
                            for (var r = qt(e.body, t.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) {
                                var i = r[a];
                                if (i instanceof Tt.SpaceNode);
                                else if (i instanceof Tt.MathNode) switch (i.type) {
                                    case "mi":
                                    case "mn":
                                    case "ms":
                                    case "mspace":
                                    case "mtext":
                                        break;
                                    case "mo":
                                        var o = i.children[0];
                                        1 === i.children.length && o instanceof Tt.TextNode ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                                        break;
                                    default:
                                        n = !1
                                } else n = !1
                            }
                            if (n) {
                                var s = r.map((function(e) {
                                    return e.toText()
                                })).join("");
                                r = [new Tt.TextNode(s)]
                            }
                            var l = new Tt.MathNode("mi", r);
                            l.setAttribute("mathvariant", "normal");
                            var h = new Tt.MathNode("mo", [Bt("\u2061", "text")]);
                            return e.parentIsSupSub ? new Tt.MathNode("mrow", [l, h]) : Tt.newDocumentFragment([l, h])
                        }
                    }), Vr("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), st({
                        type: "ordgroup",
                        htmlBuilder: function(e, t) {
                            return e.semisimple ? Ke.makeFragment(ft(e.body, t, !1)) : Ke.makeSpan(["mord"], ft(e.body, t, !0), t)
                        },
                        mathmlBuilder: function(e, t) {
                            return It(e.body, t, !0)
                        }
                    }), ot({
                        type: "overline",
                        names: ["\\overline"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "overline",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.body, t.havingCrampedStyle()),
                                n = Ke.makeLineSpan("overline-line", t),
                                a = t.fontMetrics().defaultRuleThickness,
                                i = Ke.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: r
                                    }, {
                                        type: "kern",
                                        size: 3 * a
                                    }, {
                                        type: "elem",
                                        elem: n
                                    }, {
                                        type: "kern",
                                        size: a
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "overline"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mo", [new Tt.TextNode("\u203e")]);
                            r.setAttribute("stretchy", "true");
                            var n = new Tt.MathNode("mover", [Rt(e.body, t), r]);
                            return n.setAttribute("accent", "true"), n
                        }
                    }), ot({
                        type: "phantom",
                        names: ["\\phantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "phantom",
                                mode: r.mode,
                                body: ht(n)
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = ft(e.body, t.withPhantom(), !1);
                            return Ke.makeFragment(r)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(e.body, t);
                            return new Tt.MathNode("mphantom", r)
                        }
                    }), ot({
                        type: "hphantom",
                        names: ["\\hphantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "hphantom",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan([], [wt(e.body, t.withPhantom())]);
                            if (r.height = 0, r.depth = 0, r.children)
                                for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
                            return r = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t), Ke.makeSpan(["mord"], [r], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(ht(e.body), t),
                                n = new Tt.MathNode("mphantom", r),
                                a = new Tt.MathNode("mpadded", [n]);
                            return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a
                        }
                    }), ot({
                        type: "vphantom",
                        names: ["\\vphantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "vphantom",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan(["inner"], [wt(e.body, t.withPhantom())]),
                                n = Ke.makeSpan(["fix"], []);
                            return Ke.makeSpan(["mord", "rlap"], [r, n], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(ht(e.body), t),
                                n = new Tt.MathNode("mphantom", r),
                                a = new Tt.MathNode("mpadded", [n]);
                            return a.setAttribute("width", "0px"), a
                        }
                    }), ot({
                        type: "raisebox",
                        names: ["\\raisebox"],
                        props: {
                            numArgs: 2,
                            argTypes: ["size", "hbox"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Gt(t[0], "size").value,
                                a = t[1];
                            return {
                                type: "raisebox",
                                mode: r.mode,
                                dy: n,
                                body: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.body, t),
                                n = P(e.dy, t);
                            return Ke.makeVList({
                                positionType: "shift",
                                positionData: -n,
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mpadded", [Rt(e.body, t)]),
                                n = e.dy.number + e.dy.unit;
                            return r.setAttribute("voffset", n), r
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\relax"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            return {
                                type: "internal",
                                mode: e.parser.mode
                            }
                        }
                    }), ot({
                        type: "rule",
                        names: ["\\rule"],
                        props: {
                            numArgs: 2,
                            numOptionalArgs: 1,
                            argTypes: ["size", "size", "size"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = r[0],
                                i = Gt(t[0], "size"),
                                o = Gt(t[1], "size");
                            return {
                                type: "rule",
                                mode: n.mode,
                                shift: a && Gt(a, "size").value,
                                width: i.value,
                                height: o.value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan(["mord", "rule"], [], t),
                                n = P(e.width, t),
                                a = P(e.height, t),
                                i = e.shift ? P(e.shift, t) : 0;
                            return r.style.borderRightWidth = F(n), r.style.borderTopWidth = F(a), r.style.bottom = F(i), r.width = n, r.height = a + i, r.depth = -i, r.maxFontSize = 1.125 * a * t.sizeMultiplier, r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = P(e.width, t),
                                n = P(e.height, t),
                                a = e.shift ? P(e.shift, t) : 0,
                                i = t.color && t.getColor() || "black",
                                o = new Tt.MathNode("mspace");
                            o.setAttribute("mathbackground", i), o.setAttribute("width", F(r)), o.setAttribute("height", F(n));
                            var s = new Tt.MathNode("mpadded", [o]);
                            return a >= 0 ? s.setAttribute("height", F(a)) : (s.setAttribute("height", F(a)), s.setAttribute("depth", F(-a))), s.setAttribute("voffset", F(a)), s
                        }
                    });
                    var bn = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
                    ot({
                        type: "sizing",
                        names: bn,
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.breakOnTokenText,
                                n = e.funcName,
                                a = e.parser,
                                i = a.parseExpression(!1, r);
                            return {
                                type: "sizing",
                                mode: a.mode,
                                size: bn.indexOf(n) + 1,
                                body: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = t.havingSize(e.size);
                            return vn(e.body, r, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = t.havingSize(e.size),
                                n = qt(e.body, r),
                                a = new Tt.MathNode("mstyle", n);
                            return a.setAttribute("mathsize", F(r.sizeMultiplier)), a
                        }
                    }), ot({
                        type: "smash",
                        names: ["\\smash"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = !1,
                                i = !1,
                                o = r[0] && Gt(r[0], "ordgroup");
                            if (o)
                                for (var s = "", l = 0; l < o.body.length; ++l)
                                    if ("t" === (s = o.body[l].text)) a = !0;
                                    else {
                                        if ("b" !== s) {
                                            a = !1, i = !1;
                                            break
                                        }
                                        i = !0
                                    }
                            else a = !0, i = !0;
                            var h = t[0];
                            return {
                                type: "smash",
                                mode: n.mode,
                                body: h,
                                smashHeight: a,
                                smashDepth: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan([], [wt(e.body, t)]);
                            if (!e.smashHeight && !e.smashDepth) return r;
                            if (e.smashHeight && (r.height = 0, r.children))
                                for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
                            if (e.smashDepth && (r.depth = 0, r.children))
                                for (var a = 0; a < r.children.length; a++) r.children[a].depth = 0;
                            var i = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t);
                            return Ke.makeSpan(["mord"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mpadded", [Rt(e.body, t)]);
                            return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r
                        }
                    }), ot({
                        type: "sqrt",
                        names: ["\\sqrt"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = r[0],
                                i = t[0];
                            return {
                                type: "sqrt",
                                mode: n.mode,
                                body: i,
                                index: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.body, t.havingCrampedStyle());
                            0 === r.height && (r.height = t.fontMetrics().xHeight), r = Ke.wrapFragment(r, t);
                            var n = t.fontMetrics().defaultRuleThickness,
                                a = n;
                            t.style.id < x.TEXT.id && (a = t.fontMetrics().xHeight);
                            var i = n + a / 4,
                                o = r.height + r.depth + i + n,
                                s = Cr.sqrtImage(o, t),
                                l = s.span,
                                h = s.ruleWidth,
                                c = s.advanceWidth,
                                m = l.height - h;
                            m > r.height + r.depth + i && (i = (i + m - r.height - r.depth) / 2);
                            var u = l.height - r.height - i - h;
                            r.style.paddingLeft = F(c);
                            var p = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    wrapperClasses: ["svg-align"]
                                }, {
                                    type: "kern",
                                    size: -(r.height + u)
                                }, {
                                    type: "elem",
                                    elem: l
                                }, {
                                    type: "kern",
                                    size: h
                                }]
                            }, t);
                            if (e.index) {
                                var d = t.havingStyle(x.SCRIPTSCRIPT),
                                    f = wt(e.index, d, t),
                                    g = .6 * (p.height - p.depth),
                                    v = Ke.makeVList({
                                        positionType: "shift",
                                        positionData: -g,
                                        children: [{
                                            type: "elem",
                                            elem: f
                                        }]
                                    }, t),
                                    b = Ke.makeSpan(["root"], [v]);
                                return Ke.makeSpan(["mord", "sqrt"], [b, p], t)
                            }
                            return Ke.makeSpan(["mord", "sqrt"], [p], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = e.body,
                                n = e.index;
                            return n ? new Tt.MathNode("mroot", [Rt(r, t), Rt(n, t)]) : new Tt.MathNode("msqrt", [Rt(r, t)])
                        }
                    });
                    var yn = {
                        display: x.DISPLAY,
                        text: x.TEXT,
                        script: x.SCRIPT,
                        scriptscript: x.SCRIPTSCRIPT
                    };
                    ot({
                        type: "styling",
                        names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            primitive: !0
                        },
                        handler: function(e, t) {
                            var r = e.breakOnTokenText,
                                n = e.funcName,
                                a = e.parser,
                                i = a.parseExpression(!0, r),
                                o = n.slice(1, n.length - 5);
                            return {
                                type: "styling",
                                mode: a.mode,
                                style: o,
                                body: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = yn[e.style],
                                n = t.havingStyle(r).withFont("");
                            return vn(e.body, n, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = yn[e.style],
                                n = t.havingStyle(r),
                                a = qt(e.body, n),
                                i = new Tt.MathNode("mstyle", a),
                                o = {
                                    display: ["0", "true"],
                                    text: ["0", "false"],
                                    script: ["1", "false"],
                                    scriptscript: ["2", "false"]
                                }[e.style];
                            return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i
                        }
                    });
                    var xn = function(e, t) {
                        var r = e.base;
                        return r ? "op" === r.type ? r.limits && (t.style.size === x.DISPLAY.size || r.alwaysHandleSupSub) ? un : null : "operatorname" === r.type ? r.alwaysHandleSupSub && (t.style.size === x.DISPLAY.size || r.limits) ? gn : null : "accent" === r.type ? l.isCharacterBox(r.base) ? Xt : null : "horizBrace" === r.type && !e.sub === r.isOver ? sn : null : null
                    };
                    st({
                        type: "supsub",
                        htmlBuilder: function(e, t) {
                            var r = xn(e, t);
                            if (r) return r(e, t);
                            var n, a, i, o = e.base,
                                s = e.sup,
                                h = e.sub,
                                c = wt(o, t),
                                m = t.fontMetrics(),
                                u = 0,
                                p = 0,
                                d = o && l.isCharacterBox(o);
                            if (s) {
                                var f = t.havingStyle(t.style.sup());
                                n = wt(s, f, t), d || (u = c.height - f.fontMetrics().supDrop * f.sizeMultiplier / t.sizeMultiplier)
                            }
                            if (h) {
                                var g = t.havingStyle(t.style.sub());
                                a = wt(h, g, t), d || (p = c.depth + g.fontMetrics().subDrop * g.sizeMultiplier / t.sizeMultiplier)
                            }
                            i = t.style === x.DISPLAY ? m.sup1 : t.style.cramped ? m.sup3 : m.sup2;
                            var v, b = t.sizeMultiplier,
                                y = F(.5 / m.ptPerEm / b),
                                w = null;
                            if (a) {
                                var k = e.base && "op" === e.base.type && e.base.name && ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
                                (c instanceof Z || k) && (w = F(-c.italic))
                            }
                            if (n && a) {
                                u = Math.max(u, i, n.depth + .25 * m.xHeight), p = Math.max(p, m.sub2);
                                var S = 4 * m.defaultRuleThickness;
                                if (u - n.depth - (a.height - p) < S) {
                                    p = S - (u - n.depth) + a.height;
                                    var M = .8 * m.xHeight - (u - n.depth);
                                    M > 0 && (u += M, p -= M)
                                }
                                var z = [{
                                    type: "elem",
                                    elem: a,
                                    shift: p,
                                    marginRight: y,
                                    marginLeft: w
                                }, {
                                    type: "elem",
                                    elem: n,
                                    shift: -u,
                                    marginRight: y
                                }];
                                v = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: z
                                }, t)
                            } else if (a) {
                                p = Math.max(p, m.sub1, a.height - .8 * m.xHeight);
                                var A = [{
                                    type: "elem",
                                    elem: a,
                                    marginLeft: w,
                                    marginRight: y
                                }];
                                v = Ke.makeVList({
                                    positionType: "shift",
                                    positionData: p,
                                    children: A
                                }, t)
                            } else {
                                if (!n) throw new Error("supsub must have either sup or sub.");
                                u = Math.max(u, i, n.depth + .25 * m.xHeight), v = Ke.makeVList({
                                    positionType: "shift",
                                    positionData: -u,
                                    children: [{
                                        type: "elem",
                                        elem: n,
                                        marginRight: y
                                    }]
                                }, t)
                            }
                            var T = yt(c, "right") || "mord";
                            return Ke.makeSpan([T], [c, Ke.makeSpan(["msupsub"], [v])], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = !1;
                            e.base && "horizBrace" === e.base.type && !!e.sup === e.base.isOver && (n = !0, r = e.base.isOver), !e.base || "op" !== e.base.type && "operatorname" !== e.base.type || (e.base.parentIsSupSub = !0);
                            var a, i = [Rt(e.base, t)];
                            if (e.sub && i.push(Rt(e.sub, t)), e.sup && i.push(Rt(e.sup, t)), n) a = r ? "mover" : "munder";
                            else if (e.sub)
                                if (e.sup) {
                                    var o = e.base;
                                    a = o && "op" === o.type && o.limits && t.style === x.DISPLAY || o && "operatorname" === o.type && o.alwaysHandleSupSub && (t.style === x.DISPLAY || o.limits) ? "munderover" : "msubsup"
                                } else {
                                    var s = e.base;
                                    a = s && "op" === s.type && s.limits && (t.style === x.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || t.style === x.DISPLAY) ? "munder" : "msub"
                                }
                            else {
                                var l = e.base;
                                a = l && "op" === l.type && l.limits && (t.style === x.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || t.style === x.DISPLAY) ? "mover" : "msup"
                            }
                            return new Tt.MathNode(a, i)
                        }
                    }), st({
                        type: "atom",
                        htmlBuilder: function(e, t) {
                            return Ke.mathsym(e.text, e.mode, t, ["m" + e.family])
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mo", [Bt(e.text, e.mode)]);
                            if ("bin" === e.family) {
                                var n = Nt(e, t);
                                "bold-italic" === n && r.setAttribute("mathvariant", n)
                            } else "punct" === e.family ? r.setAttribute("separator", "true") : "open" !== e.family && "close" !== e.family || r.setAttribute("stretchy", "false");
                            return r
                        }
                    });
                    var wn = {
                        mi: "italic",
                        mn: "normal",
                        mtext: "normal"
                    };
                    st({
                        type: "mathord",
                        htmlBuilder: function(e, t) {
                            return Ke.makeOrd(e, t, "mathord")
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mi", [Bt(e.text, e.mode, t)]),
                                n = Nt(e, t) || "italic";
                            return n !== wn[r.type] && r.setAttribute("mathvariant", n), r
                        }
                    }), st({
                        type: "textord",
                        htmlBuilder: function(e, t) {
                            return Ke.makeOrd(e, t, "textord")
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = Bt(e.text, e.mode, t),
                                a = Nt(e, t) || "normal";
                            return r = "text" === e.mode ? new Tt.MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? new Tt.MathNode("mn", [n]) : "\\prime" === e.text ? new Tt.MathNode("mo", [n]) : new Tt.MathNode("mi", [n]), a !== wn[r.type] && r.setAttribute("mathvariant", a), r
                        }
                    });
                    var kn = {
                            "\\nobreak": "nobreak",
                            "\\allowbreak": "allowbreak"
                        },
                        Sn = {
                            " ": {},
                            "\\ ": {},
                            "~": {
                                className: "nobreak"
                            },
                            "\\space": {},
                            "\\nobreakspace": {
                                className: "nobreak"
                            }
                        };
                    st({
                        type: "spacing",
                        htmlBuilder: function(e, t) {
                            if (Sn.hasOwnProperty(e.text)) {
                                var r = Sn[e.text].className || "";
                                if ("text" === e.mode) {
                                    var a = Ke.makeOrd(e, t, "textord");
                                    return a.classes.push(r), a
                                }
                                return Ke.makeSpan(["mspace", r], [Ke.mathsym(e.text, e.mode, t)], t)
                            }
                            if (kn.hasOwnProperty(e.text)) return Ke.makeSpan(["mspace", kn[e.text]], [], t);
                            throw new n('Unknown type of space "' + e.text + '"')
                        },
                        mathmlBuilder: function(e, t) {
                            if (!Sn.hasOwnProperty(e.text)) {
                                if (kn.hasOwnProperty(e.text)) return new Tt.MathNode("mspace");
                                throw new n('Unknown type of space "' + e.text + '"')
                            }
                            return new Tt.MathNode("mtext", [new Tt.TextNode("\xa0")])
                        }
                    });
                    var Mn = function() {
                        var e = new Tt.MathNode("mtd", []);
                        return e.setAttribute("width", "50%"), e
                    };
                    st({
                        type: "tag",
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mtable", [new Tt.MathNode("mtr", [Mn(), new Tt.MathNode("mtd", [It(e.body, t)]), Mn(), new Tt.MathNode("mtd", [It(e.tag, t)])])]);
                            return r.setAttribute("width", "100%"), r
                        }
                    });
                    var zn = {
                            "\\text": void 0,
                            "\\textrm": "textrm",
                            "\\textsf": "textsf",
                            "\\texttt": "texttt",
                            "\\textnormal": "textrm"
                        },
                        An = {
                            "\\textbf": "textbf",
                            "\\textmd": "textmd"
                        },
                        Tn = {
                            "\\textit": "textit",
                            "\\textup": "textup"
                        },
                        Bn = function(e, t) {
                            var r = e.font;
                            return r ? zn[r] ? t.withTextFontFamily(zn[r]) : An[r] ? t.withTextFontWeight(An[r]) : t.withTextFontShape(Tn[r]) : t
                        };
                    ot({
                        type: "text",
                        names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"],
                        props: {
                            numArgs: 1,
                            argTypes: ["text"],
                            allowedInArgument: !0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "text",
                                mode: r.mode,
                                body: ht(a),
                                font: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Bn(e, t),
                                n = ft(e.body, r, !0);
                            return Ke.makeSpan(["mord", "text"], n, r)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Bn(e, t);
                            return It(e.body, r)
                        }
                    }), ot({
                        type: "underline",
                        names: ["\\underline"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "underline",
                                mode: e.parser.mode,
                                body: t[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.body, t),
                                n = Ke.makeLineSpan("underline-line", t),
                                a = t.fontMetrics().defaultRuleThickness,
                                i = Ke.makeVList({
                                    positionType: "top",
                                    positionData: r.height,
                                    children: [{
                                        type: "kern",
                                        size: a
                                    }, {
                                        type: "elem",
                                        elem: n
                                    }, {
                                        type: "kern",
                                        size: 3 * a
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "underline"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.MathNode("mo", [new Tt.TextNode("\u203e")]);
                            r.setAttribute("stretchy", "true");
                            var n = new Tt.MathNode("munder", [Rt(e.body, t), r]);
                            return n.setAttribute("accentunder", "true"), n
                        }
                    }), ot({
                        type: "vcenter",
                        names: ["\\vcenter"],
                        props: {
                            numArgs: 1,
                            argTypes: ["original"],
                            allowedInText: !1
                        },
                        handler: function(e, t) {
                            return {
                                type: "vcenter",
                                mode: e.parser.mode,
                                body: t[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = wt(e.body, t),
                                n = t.fontMetrics().axisHeight,
                                a = .5 * (r.height - n - (r.depth + n));
                            return Ke.makeVList({
                                positionType: "shift",
                                positionData: a,
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t)
                        },
                        mathmlBuilder: function(e, t) {
                            return new Tt.MathNode("mpadded", [Rt(e.body, t)], ["vcenter"])
                        }
                    }), ot({
                        type: "verb",
                        names: ["\\verb"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            throw new n("\\verb ended by end of line instead of matching delimiter")
                        },
                        htmlBuilder: function(e, t) {
                            for (var r = Cn(e), n = [], a = t.havingStyle(t.style.text()), i = 0; i < r.length; i++) {
                                var o = r[i];
                                "~" === o && (o = "\\textasciitilde"), n.push(Ke.makeSymbol(o, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]))
                            }
                            return Ke.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), Ke.tryCombineChars(n), a)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new Tt.TextNode(Cn(e)),
                                n = new Tt.MathNode("mtext", [r]);
                            return n.setAttribute("mathvariant", "monospace"), n
                        }
                    });
                    var Cn = function(e) {
                            return e.body.replace(/ /g, e.star ? "\u2423" : "\xa0")
                        },
                        Nn = nt,
                        qn = new RegExp("[\u0300-\u036f]+$"),
                        In = function() {
                            function e(e, t) {
                                this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp("([ \r\n\t]+)|\\\\(\n|[ \r\t]+\n?)[ \r\t]*|([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff][\u0300-\u036f]*|[\ud800-\udbff][\udc00-\udfff][\u0300-\u036f]*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|(\\\\[a-zA-Z@]+)[ \r\n\t]*|\\\\[^\ud800-\udfff])", "g"), this.catcodes = {
                                    "%": 14,
                                    "~": 13
                                }
                            }
                            var t = e.prototype;
                            return t.setCatcode = function(e, t) {
                                this.catcodes[e] = t
                            }, t.lex = function() {
                                var e = this.input,
                                    t = this.tokenRegex.lastIndex;
                                if (t === e.length) return new Fr("EOF", new Pr(this, t, t));
                                var r = this.tokenRegex.exec(e);
                                if (null === r || r.index !== t) throw new n("Unexpected character: '" + e[t] + "'", new Fr(e[t], new Pr(this, t, t + 1)));
                                var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
                                if (14 === this.catcodes[a]) {
                                    var i = e.indexOf("\n", this.tokenRegex.lastIndex);
                                    return -1 === i ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex()
                                }
                                return new Fr(a, new Pr(this, t, this.tokenRegex.lastIndex))
                            }, e
                        }(),
                        Rn = function() {
                            function e(e, t) {
                                void 0 === e && (e = {}), void 0 === t && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = []
                            }
                            var t = e.prototype;
                            return t.beginGroup = function() {
                                this.undefStack.push({})
                            }, t.endGroup = function() {
                                if (0 === this.undefStack.length) throw new n("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                                var e = this.undefStack.pop();
                                for (var t in e) e.hasOwnProperty(t) && (null == e[t] ? delete this.current[t] : this.current[t] = e[t])
                            }, t.endGroups = function() {
                                for (; this.undefStack.length > 0;) this.endGroup()
                            }, t.has = function(e) {
                                return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e)
                            }, t.get = function(e) {
                                return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e]
                            }, t.set = function(e, t, r) {
                                if (void 0 === r && (r = !1), r) {
                                    for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
                                    this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t)
                                } else {
                                    var a = this.undefStack[this.undefStack.length - 1];
                                    a && !a.hasOwnProperty(e) && (a[e] = this.current[e])
                                }
                                null == t ? delete this.current[e] : this.current[e] = t
                            }, e
                        }(),
                        Hn = Dr;
                    Vr("\\noexpand", (function(e) {
                        var t = e.popToken();
                        return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
                            tokens: [t],
                            numArgs: 0
                        }
                    })), Vr("\\expandafter", (function(e) {
                        var t = e.popToken();
                        return e.expandOnce(!0), {
                            tokens: [t],
                            numArgs: 0
                        }
                    })), Vr("\\@firstoftwo", (function(e) {
                        return {
                            tokens: e.consumeArgs(2)[0],
                            numArgs: 0
                        }
                    })), Vr("\\@secondoftwo", (function(e) {
                        return {
                            tokens: e.consumeArgs(2)[1],
                            numArgs: 0
                        }
                    })), Vr("\\@ifnextchar", (function(e) {
                        var t = e.consumeArgs(3);
                        e.consumeSpaces();
                        var r = e.future();
                        return 1 === t[0].length && t[0][0].text === r.text ? {
                            tokens: t[1],
                            numArgs: 0
                        } : {
                            tokens: t[2],
                            numArgs: 0
                        }
                    })), Vr("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), Vr("\\TextOrMath", (function(e) {
                        var t = e.consumeArgs(2);
                        return "text" === e.mode ? {
                            tokens: t[0],
                            numArgs: 0
                        } : {
                            tokens: t[1],
                            numArgs: 0
                        }
                    }));
                    var On = {
                        0: 0,
                        1: 1,
                        2: 2,
                        3: 3,
                        4: 4,
                        5: 5,
                        6: 6,
                        7: 7,
                        8: 8,
                        9: 9,
                        a: 10,
                        A: 10,
                        b: 11,
                        B: 11,
                        c: 12,
                        C: 12,
                        d: 13,
                        D: 13,
                        e: 14,
                        E: 14,
                        f: 15,
                        F: 15
                    };
                    Vr("\\char", (function(e) {
                        var t, r = e.popToken(),
                            a = "";
                        if ("'" === r.text) t = 8, r = e.popToken();
                        else if ('"' === r.text) t = 16, r = e.popToken();
                        else if ("`" === r.text)
                            if ("\\" === (r = e.popToken()).text[0]) a = r.text.charCodeAt(1);
                            else {
                                if ("EOF" === r.text) throw new n("\\char` missing argument");
                                a = r.text.charCodeAt(0)
                            }
                        else t = 10;
                        if (t) {
                            if (null == (a = On[r.text]) || a >= t) throw new n("Invalid base-" + t + " digit " + r.text);
                            for (var i; null != (i = On[e.future().text]) && i < t;) a *= t, a += i, e.popToken()
                        }
                        return "\\@char{" + a + "}"
                    }));
                    var En = function(e, t, r) {
                        var a = e.consumeArg().tokens;
                        if (1 !== a.length) throw new n("\\newcommand's first argument must be a macro name");
                        var i = a[0].text,
                            o = e.isDefined(i);
                        if (o && !t) throw new n("\\newcommand{" + i + "} attempting to redefine " + i + "; use \\renewcommand");
                        if (!o && !r) throw new n("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
                        var s = 0;
                        if (1 === (a = e.consumeArg().tokens).length && "[" === a[0].text) {
                            for (var l = "", h = e.expandNextToken();
                                "]" !== h.text && "EOF" !== h.text;) l += h.text, h = e.expandNextToken();
                            if (!l.match(/^\s*[0-9]+\s*$/)) throw new n("Invalid number of arguments: " + l);
                            s = parseInt(l), a = e.consumeArg().tokens
                        }
                        return e.macros.set(i, {
                            tokens: a,
                            numArgs: s
                        }), ""
                    };
                    Vr("\\newcommand", (function(e) {
                        return En(e, !1, !0)
                    })), Vr("\\renewcommand", (function(e) {
                        return En(e, !0, !1)
                    })), Vr("\\providecommand", (function(e) {
                        return En(e, !0, !0)
                    })), Vr("\\message", (function(e) {
                        var t = e.consumeArgs(1)[0];
                        return console.log(t.reverse().map((function(e) {
                            return e.text
                        })).join("")), ""
                    })), Vr("\\errmessage", (function(e) {
                        var t = e.consumeArgs(1)[0];
                        return console.error(t.reverse().map((function(e) {
                            return e.text
                        })).join("")), ""
                    })), Vr("\\show", (function(e) {
                        var t = e.popToken(),
                            r = t.text;
                        return console.log(t, e.macros.get(r), Nn[r], ae.math[r], ae.text[r]), ""
                    })), Vr("\\bgroup", "{"), Vr("\\egroup", "}"), Vr("~", "\\nobreakspace"), Vr("\\lq", "`"), Vr("\\rq", "'"), Vr("\\aa", "\\r a"), Vr("\\AA", "\\r A"), Vr("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xa9}"), Vr("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), Vr("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xae}"), Vr("\u212c", "\\mathscr{B}"), Vr("\u2130", "\\mathscr{E}"), Vr("\u2131", "\\mathscr{F}"), Vr("\u210b", "\\mathscr{H}"), Vr("\u2110", "\\mathscr{I}"), Vr("\u2112", "\\mathscr{L}"), Vr("\u2133", "\\mathscr{M}"), Vr("\u211b", "\\mathscr{R}"), Vr("\u212d", "\\mathfrak{C}"), Vr("\u210c", "\\mathfrak{H}"), Vr("\u2128", "\\mathfrak{Z}"), Vr("\\Bbbk", "\\Bbb{k}"), Vr("\xb7", "\\cdotp"), Vr("\\llap", "\\mathllap{\\textrm{#1}}"), Vr("\\rlap", "\\mathrlap{\\textrm{#1}}"), Vr("\\clap", "\\mathclap{\\textrm{#1}}"), Vr("\\mathstrut", "\\vphantom{(}"), Vr("\\underbar", "\\underline{\\text{#1}}"), Vr("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), Vr("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), Vr("\\ne", "\\neq"), Vr("\u2260", "\\neq"), Vr("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), Vr("\u2209", "\\notin"), Vr("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), Vr("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), Vr("\u225a", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225a}}"), Vr("\u225b", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225b}}"), Vr("\u225d", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225d}}"), Vr("\u225e", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225e}}"), Vr("\u225f", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225f}}"), Vr("\u27c2", "\\perp"), Vr("\u203c", "\\mathclose{!\\mkern-0.8mu!}"), Vr("\u220c", "\\notni"), Vr("\u231c", "\\ulcorner"), Vr("\u231d", "\\urcorner"), Vr("\u231e", "\\llcorner"), Vr("\u231f", "\\lrcorner"), Vr("\xa9", "\\copyright"), Vr("\xae", "\\textregistered"), Vr("\ufe0f", "\\textregistered"), Vr("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), Vr("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), Vr("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), Vr("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), Vr("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), Vr("\u22ee", "\\vdots"), Vr("\\varGamma", "\\mathit{\\Gamma}"), Vr("\\varDelta", "\\mathit{\\Delta}"), Vr("\\varTheta", "\\mathit{\\Theta}"), Vr("\\varLambda", "\\mathit{\\Lambda}"), Vr("\\varXi", "\\mathit{\\Xi}"), Vr("\\varPi", "\\mathit{\\Pi}"), Vr("\\varSigma", "\\mathit{\\Sigma}"), Vr("\\varUpsilon", "\\mathit{\\Upsilon}"), Vr("\\varPhi", "\\mathit{\\Phi}"), Vr("\\varPsi", "\\mathit{\\Psi}"), Vr("\\varOmega", "\\mathit{\\Omega}"), Vr("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), Vr("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), Vr("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), Vr("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), Vr("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), Vr("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
                    var Ln = {
                        ",": "\\dotsc",
                        "\\not": "\\dotsb",
                        "+": "\\dotsb",
                        "=": "\\dotsb",
                        "<": "\\dotsb",
                        ">": "\\dotsb",
                        "-": "\\dotsb",
                        "*": "\\dotsb",
                        ":": "\\dotsb",
                        "\\DOTSB": "\\dotsb",
                        "\\coprod": "\\dotsb",
                        "\\bigvee": "\\dotsb",
                        "\\bigwedge": "\\dotsb",
                        "\\biguplus": "\\dotsb",
                        "\\bigcap": "\\dotsb",
                        "\\bigcup": "\\dotsb",
                        "\\prod": "\\dotsb",
                        "\\sum": "\\dotsb",
                        "\\bigotimes": "\\dotsb",
                        "\\bigoplus": "\\dotsb",
                        "\\bigodot": "\\dotsb",
                        "\\bigsqcup": "\\dotsb",
                        "\\And": "\\dotsb",
                        "\\longrightarrow": "\\dotsb",
                        "\\Longrightarrow": "\\dotsb",
                        "\\longleftarrow": "\\dotsb",
                        "\\Longleftarrow": "\\dotsb",
                        "\\longleftrightarrow": "\\dotsb",
                        "\\Longleftrightarrow": "\\dotsb",
                        "\\mapsto": "\\dotsb",
                        "\\longmapsto": "\\dotsb",
                        "\\hookrightarrow": "\\dotsb",
                        "\\doteq": "\\dotsb",
                        "\\mathbin": "\\dotsb",
                        "\\mathrel": "\\dotsb",
                        "\\relbar": "\\dotsb",
                        "\\Relbar": "\\dotsb",
                        "\\xrightarrow": "\\dotsb",
                        "\\xleftarrow": "\\dotsb",
                        "\\DOTSI": "\\dotsi",
                        "\\int": "\\dotsi",
                        "\\oint": "\\dotsi",
                        "\\iint": "\\dotsi",
                        "\\iiint": "\\dotsi",
                        "\\iiiint": "\\dotsi",
                        "\\idotsint": "\\dotsi",
                        "\\DOTSX": "\\dotsx"
                    };
                    Vr("\\dots", (function(e) {
                        var t = "\\dotso",
                            r = e.expandAfterFuture().text;
                        return r in Ln ? t = Ln[r] : ("\\not" === r.slice(0, 4) || r in ae.math && l.contains(["bin", "rel"], ae.math[r].group)) && (t = "\\dotsb"), t
                    }));
                    var Dn = {
                        ")": !0,
                        "]": !0,
                        "\\rbrack": !0,
                        "\\}": !0,
                        "\\rbrace": !0,
                        "\\rangle": !0,
                        "\\rceil": !0,
                        "\\rfloor": !0,
                        "\\rgroup": !0,
                        "\\rmoustache": !0,
                        "\\right": !0,
                        "\\bigr": !0,
                        "\\biggr": !0,
                        "\\Bigr": !0,
                        "\\Biggr": !0,
                        $: !0,
                        ";": !0,
                        ".": !0,
                        ",": !0
                    };
                    Vr("\\dotso", (function(e) {
                        return e.future().text in Dn ? "\\ldots\\," : "\\ldots"
                    })), Vr("\\dotsc", (function(e) {
                        var t = e.future().text;
                        return t in Dn && "," !== t ? "\\ldots\\," : "\\ldots"
                    })), Vr("\\cdots", (function(e) {
                        return e.future().text in Dn ? "\\@cdots\\," : "\\@cdots"
                    })), Vr("\\dotsb", "\\cdots"), Vr("\\dotsm", "\\cdots"), Vr("\\dotsi", "\\!\\cdots"), Vr("\\dotsx", "\\ldots\\,"), Vr("\\DOTSI", "\\relax"), Vr("\\DOTSB", "\\relax"), Vr("\\DOTSX", "\\relax"), Vr("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), Vr("\\,", "\\tmspace+{3mu}{.1667em}"), Vr("\\thinspace", "\\,"), Vr("\\>", "\\mskip{4mu}"), Vr("\\:", "\\tmspace+{4mu}{.2222em}"), Vr("\\medspace", "\\:"), Vr("\\;", "\\tmspace+{5mu}{.2777em}"), Vr("\\thickspace", "\\;"), Vr("\\!", "\\tmspace-{3mu}{.1667em}"), Vr("\\negthinspace", "\\!"), Vr("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), Vr("\\negthickspace", "\\tmspace-{5mu}{.277em}"), Vr("\\enspace", "\\kern.5em "), Vr("\\enskip", "\\hskip.5em\\relax"), Vr("\\quad", "\\hskip1em\\relax"), Vr("\\qquad", "\\hskip2em\\relax"), Vr("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), Vr("\\tag@paren", "\\tag@literal{({#1})}"), Vr("\\tag@literal", (function(e) {
                        if (e.macros.get("\\df@tag")) throw new n("Multiple \\tag");
                        return "\\gdef\\df@tag{\\text{#1}}"
                    })), Vr("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), Vr("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), Vr("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), Vr("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), Vr("\\newline", "\\\\\\relax"), Vr("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
                    var Vn = F(T["Main-Regular"]["T".charCodeAt(0)][1] - .7 * T["Main-Regular"]["A".charCodeAt(0)][1]);
                    Vr("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + Vn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"), Vr("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + Vn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"), Vr("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), Vr("\\@hspace", "\\hskip #1\\relax"), Vr("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), Vr("\\ordinarycolon", ":"), Vr("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), Vr("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), Vr("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), Vr("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), Vr("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), Vr("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), Vr("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), Vr("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), Vr("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), Vr("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), Vr("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), Vr("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), Vr("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), Vr("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), Vr("\u2237", "\\dblcolon"), Vr("\u2239", "\\eqcolon"), Vr("\u2254", "\\coloneqq"), Vr("\u2255", "\\eqqcolon"), Vr("\u2a74", "\\Coloneqq"), Vr("\\ratio", "\\vcentcolon"), Vr("\\coloncolon", "\\dblcolon"), Vr("\\colonequals", "\\coloneqq"), Vr("\\coloncolonequals", "\\Coloneqq"), Vr("\\equalscolon", "\\eqqcolon"), Vr("\\equalscoloncolon", "\\Eqqcolon"), Vr("\\colonminus", "\\coloneq"), Vr("\\coloncolonminus", "\\Coloneq"), Vr("\\minuscolon", "\\eqcolon"), Vr("\\minuscoloncolon", "\\Eqcolon"), Vr("\\coloncolonapprox", "\\Colonapprox"), Vr("\\coloncolonsim", "\\Colonsim"), Vr("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Vr("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Vr("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Vr("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Vr("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220c}}"), Vr("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), Vr("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), Vr("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), Vr("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), Vr("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), Vr("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), Vr("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), Vr("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), Vr("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), Vr("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), Vr("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), Vr("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), Vr("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), Vr("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), Vr("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), Vr("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), Vr("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), Vr("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), Vr("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228a}"), Vr("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2acb}"), Vr("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228b}"), Vr("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2acc}"), Vr("\\imath", "\\html@mathml{\\@imath}{\u0131}"), Vr("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), Vr("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27e6}}"), Vr("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27e7}}"), Vr("\u27e6", "\\llbracket"), Vr("\u27e7", "\\rrbracket"), Vr("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), Vr("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), Vr("\u2983", "\\lBrace"), Vr("\u2984", "\\rBrace"), Vr("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29b5}}"), Vr("\u29b5", "\\minuso"), Vr("\\darr", "\\downarrow"), Vr("\\dArr", "\\Downarrow"), Vr("\\Darr", "\\Downarrow"), Vr("\\lang", "\\langle"), Vr("\\rang", "\\rangle"), Vr("\\uarr", "\\uparrow"), Vr("\\uArr", "\\Uparrow"), Vr("\\Uarr", "\\Uparrow"), Vr("\\N", "\\mathbb{N}"), Vr("\\R", "\\mathbb{R}"), Vr("\\Z", "\\mathbb{Z}"), Vr("\\alef", "\\aleph"), Vr("\\alefsym", "\\aleph"), Vr("\\Alpha", "\\mathrm{A}"), Vr("\\Beta", "\\mathrm{B}"), Vr("\\bull", "\\bullet"), Vr("\\Chi", "\\mathrm{X}"), Vr("\\clubs", "\\clubsuit"), Vr("\\cnums", "\\mathbb{C}"), Vr("\\Complex", "\\mathbb{C}"), Vr("\\Dagger", "\\ddagger"), Vr("\\diamonds", "\\diamondsuit"), Vr("\\empty", "\\emptyset"), Vr("\\Epsilon", "\\mathrm{E}"), Vr("\\Eta", "\\mathrm{H}"), Vr("\\exist", "\\exists"), Vr("\\harr", "\\leftrightarrow"), Vr("\\hArr", "\\Leftrightarrow"), Vr("\\Harr", "\\Leftrightarrow"), Vr("\\hearts", "\\heartsuit"), Vr("\\image", "\\Im"), Vr("\\infin", "\\infty"), Vr("\\Iota", "\\mathrm{I}"), Vr("\\isin", "\\in"), Vr("\\Kappa", "\\mathrm{K}"), Vr("\\larr", "\\leftarrow"), Vr("\\lArr", "\\Leftarrow"), Vr("\\Larr", "\\Leftarrow"), Vr("\\lrarr", "\\leftrightarrow"), Vr("\\lrArr", "\\Leftrightarrow"), Vr("\\Lrarr", "\\Leftrightarrow"), Vr("\\Mu", "\\mathrm{M}"), Vr("\\natnums", "\\mathbb{N}"), Vr("\\Nu", "\\mathrm{N}"), Vr("\\Omicron", "\\mathrm{O}"), Vr("\\plusmn", "\\pm"), Vr("\\rarr", "\\rightarrow"), Vr("\\rArr", "\\Rightarrow"), Vr("\\Rarr", "\\Rightarrow"), Vr("\\real", "\\Re"), Vr("\\reals", "\\mathbb{R}"), Vr("\\Reals", "\\mathbb{R}"), Vr("\\Rho", "\\mathrm{P}"), Vr("\\sdot", "\\cdot"), Vr("\\sect", "\\S"), Vr("\\spades", "\\spadesuit"), Vr("\\sub", "\\subset"), Vr("\\sube", "\\subseteq"), Vr("\\supe", "\\supseteq"), Vr("\\Tau", "\\mathrm{T}"), Vr("\\thetasym", "\\vartheta"), Vr("\\weierp", "\\wp"), Vr("\\Zeta", "\\mathrm{Z}"), Vr("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), Vr("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), Vr("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), Vr("\\bra", "\\mathinner{\\langle{#1}|}"), Vr("\\ket", "\\mathinner{|{#1}\\rangle}"), Vr("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), Vr("\\Bra", "\\left\\langle#1\\right|"), Vr("\\Ket", "\\left|#1\\right\\rangle");
                    var Pn = function(e) {
                        return function(t) {
                            var r = t.consumeArg().tokens,
                                n = t.consumeArg().tokens,
                                a = t.consumeArg().tokens,
                                i = t.consumeArg().tokens,
                                o = t.macros.get("|"),
                                s = t.macros.get("\\|");
                            t.macros.beginGroup();
                            var l = function(t) {
                                return function(r) {
                                    e && (r.macros.set("|", o), a.length && r.macros.set("\\|", s));
                                    var i = t;
                                    return !t && a.length && "|" === r.future().text && (r.popToken(), i = !0), {
                                        tokens: i ? a : n,
                                        numArgs: 0
                                    }
                                }
                            };
                            t.macros.set("|", l(!1)), a.length && t.macros.set("\\|", l(!0));
                            var h = t.consumeArg().tokens,
                                c = t.expandTokens([].concat(i, h, r));
                            return t.macros.endGroup(), {
                                tokens: c.reverse(),
                                numArgs: 0
                            }
                        }
                    };
                    Vr("\\bra@ket", Pn(!1)), Vr("\\bra@set", Pn(!0)), Vr("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), Vr("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), Vr("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), Vr("\\angln", "{\\angl n}"), Vr("\\blue", "\\textcolor{##6495ed}{#1}"), Vr("\\orange", "\\textcolor{##ffa500}{#1}"), Vr("\\pink", "\\textcolor{##ff00af}{#1}"), Vr("\\red", "\\textcolor{##df0030}{#1}"), Vr("\\green", "\\textcolor{##28ae7b}{#1}"), Vr("\\gray", "\\textcolor{gray}{#1}"), Vr("\\purple", "\\textcolor{##9d38bd}{#1}"), Vr("\\blueA", "\\textcolor{##ccfaff}{#1}"), Vr("\\blueB", "\\textcolor{##80f6ff}{#1}"), Vr("\\blueC", "\\textcolor{##63d9ea}{#1}"), Vr("\\blueD", "\\textcolor{##11accd}{#1}"), Vr("\\blueE", "\\textcolor{##0c7f99}{#1}"), Vr("\\tealA", "\\textcolor{##94fff5}{#1}"), Vr("\\tealB", "\\textcolor{##26edd5}{#1}"), Vr("\\tealC", "\\textcolor{##01d1c1}{#1}"), Vr("\\tealD", "\\textcolor{##01a995}{#1}"), Vr("\\tealE", "\\textcolor{##208170}{#1}"), Vr("\\greenA", "\\textcolor{##b6ffb0}{#1}"), Vr("\\greenB", "\\textcolor{##8af281}{#1}"), Vr("\\greenC", "\\textcolor{##74cf70}{#1}"), Vr("\\greenD", "\\textcolor{##1fab54}{#1}"), Vr("\\greenE", "\\textcolor{##0d923f}{#1}"), Vr("\\goldA", "\\textcolor{##ffd0a9}{#1}"), Vr("\\goldB", "\\textcolor{##ffbb71}{#1}"), Vr("\\goldC", "\\textcolor{##ff9c39}{#1}"), Vr("\\goldD", "\\textcolor{##e07d10}{#1}"), Vr("\\goldE", "\\textcolor{##a75a05}{#1}"), Vr("\\redA", "\\textcolor{##fca9a9}{#1}"), Vr("\\redB", "\\textcolor{##ff8482}{#1}"), Vr("\\redC", "\\textcolor{##f9685d}{#1}"), Vr("\\redD", "\\textcolor{##e84d39}{#1}"), Vr("\\redE", "\\textcolor{##bc2612}{#1}"), Vr("\\maroonA", "\\textcolor{##ffbde0}{#1}"), Vr("\\maroonB", "\\textcolor{##ff92c6}{#1}"), Vr("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), Vr("\\maroonD", "\\textcolor{##ca337c}{#1}"), Vr("\\maroonE", "\\textcolor{##9e034e}{#1}"), Vr("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), Vr("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), Vr("\\purpleC", "\\textcolor{##aa87ff}{#1}"), Vr("\\purpleD", "\\textcolor{##7854ab}{#1}"), Vr("\\purpleE", "\\textcolor{##543b78}{#1}"), Vr("\\mintA", "\\textcolor{##f5f9e8}{#1}"), Vr("\\mintB", "\\textcolor{##edf2df}{#1}"), Vr("\\mintC", "\\textcolor{##e0e5cc}{#1}"), Vr("\\grayA", "\\textcolor{##f6f7f7}{#1}"), Vr("\\grayB", "\\textcolor{##f0f1f2}{#1}"), Vr("\\grayC", "\\textcolor{##e3e5e6}{#1}"), Vr("\\grayD", "\\textcolor{##d6d8da}{#1}"), Vr("\\grayE", "\\textcolor{##babec2}{#1}"), Vr("\\grayF", "\\textcolor{##888d93}{#1}"), Vr("\\grayG", "\\textcolor{##626569}{#1}"), Vr("\\grayH", "\\textcolor{##3b3e40}{#1}"), Vr("\\grayI", "\\textcolor{##21242c}{#1}"), Vr("\\kaBlue", "\\textcolor{##314453}{#1}"), Vr("\\kaGreen", "\\textcolor{##71B307}{#1}");
                    var Fn = {
                            "^": !0,
                            _: !0,
                            "\\limits": !0,
                            "\\nolimits": !0
                        },
                        Gn = function() {
                            function e(e, t, r) {
                                this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Rn(Hn, t.macros), this.mode = r, this.stack = []
                            }
                            var t = e.prototype;
                            return t.feed = function(e) {
                                this.lexer = new In(e, this.settings)
                            }, t.switchMode = function(e) {
                                this.mode = e
                            }, t.beginGroup = function() {
                                this.macros.beginGroup()
                            }, t.endGroup = function() {
                                this.macros.endGroup()
                            }, t.endGroups = function() {
                                this.macros.endGroups()
                            }, t.future = function() {
                                return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
                            }, t.popToken = function() {
                                return this.future(), this.stack.pop()
                            }, t.pushToken = function(e) {
                                this.stack.push(e)
                            }, t.pushTokens = function(e) {
                                var t;
                                (t = this.stack).push.apply(t, e)
                            }, t.scanArgument = function(e) {
                                var t, r, n;
                                if (e) {
                                    if (this.consumeSpaces(), "[" !== this.future().text) return null;
                                    t = this.popToken();
                                    var a = this.consumeArg(["]"]);
                                    n = a.tokens, r = a.end
                                } else {
                                    var i = this.consumeArg();
                                    n = i.tokens, t = i.start, r = i.end
                                }
                                return this.pushToken(new Fr("EOF", r.loc)), this.pushTokens(n), t.range(r, "")
                            }, t.consumeSpaces = function() {
                                for (;
                                    " " === this.future().text;) this.stack.pop()
                            }, t.consumeArg = function(e) {
                                var t = [],
                                    r = e && e.length > 0;
                                r || this.consumeSpaces();
                                var a, i = this.future(),
                                    o = 0,
                                    s = 0;
                                do {
                                    if (a = this.popToken(), t.push(a), "{" === a.text) ++o;
                                    else if ("}" === a.text) {
                                        if (-1 === --o) throw new n("Extra }", a)
                                    } else if ("EOF" === a.text) throw new n("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", a);
                                    if (e && r)
                                        if ((0 === o || 1 === o && "{" === e[s]) && a.text === e[s]) {
                                            if (++s === e.length) {
                                                t.splice(-s, s);
                                                break
                                            }
                                        } else s = 0
                                } while (0 !== o || r);
                                return "{" === i.text && "}" === t[t.length - 1].text && (t.pop(), t.shift()), t.reverse(), {
                                    tokens: t,
                                    start: i,
                                    end: a
                                }
                            }, t.consumeArgs = function(e, t) {
                                if (t) {
                                    if (t.length !== e + 1) throw new n("The length of delimiters doesn't match the number of args!");
                                    for (var r = t[0], a = 0; a < r.length; a++) {
                                        var i = this.popToken();
                                        if (r[a] !== i.text) throw new n("Use of the macro doesn't match its definition", i)
                                    }
                                }
                                for (var o = [], s = 0; s < e; s++) o.push(this.consumeArg(t && t[s + 1]).tokens);
                                return o
                            }, t.expandOnce = function(e) {
                                var t = this.popToken(),
                                    r = t.text,
                                    a = t.noexpand ? null : this._getExpansion(r);
                                if (null == a || e && a.unexpandable) {
                                    if (e && null == a && "\\" === r[0] && !this.isDefined(r)) throw new n("Undefined control sequence: " + r);
                                    return this.pushToken(t), !1
                                }
                                if (this.expansionCount++, this.expansionCount > this.settings.maxExpand) throw new n("Too many expansions: infinite loop or need to increase maxExpand setting");
                                var i = a.tokens,
                                    o = this.consumeArgs(a.numArgs, a.delimiters);
                                if (a.numArgs)
                                    for (var s = (i = i.slice()).length - 1; s >= 0; --s) {
                                        var l = i[s];
                                        if ("#" === l.text) {
                                            if (0 === s) throw new n("Incomplete placeholder at end of macro body", l);
                                            if ("#" === (l = i[--s]).text) i.splice(s + 1, 1);
                                            else {
                                                if (!/^[1-9]$/.test(l.text)) throw new n("Not a valid argument number", l);
                                                var h;
                                                (h = i).splice.apply(h, [s, 2].concat(o[+l.text - 1]))
                                            }
                                        }
                                    }
                                return this.pushTokens(i), i.length
                            }, t.expandAfterFuture = function() {
                                return this.expandOnce(), this.future()
                            }, t.expandNextToken = function() {
                                for (;;)
                                    if (!1 === this.expandOnce()) {
                                        var e = this.stack.pop();
                                        return e.treatAsRelax && (e.text = "\\relax"), e
                                    }
                                throw new Error
                            }, t.expandMacro = function(e) {
                                return this.macros.has(e) ? this.expandTokens([new Fr(e)]) : void 0
                            }, t.expandTokens = function(e) {
                                var t = [],
                                    r = this.stack.length;
                                for (this.pushTokens(e); this.stack.length > r;)
                                    if (!1 === this.expandOnce(!0)) {
                                        var n = this.stack.pop();
                                        n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(n)
                                    }
                                return t
                            }, t.expandMacroAsText = function(e) {
                                var t = this.expandMacro(e);
                                return t ? t.map((function(e) {
                                    return e.text
                                })).join("") : t
                            }, t._getExpansion = function(e) {
                                var t = this.macros.get(e);
                                if (null == t) return t;
                                if (1 === e.length) {
                                    var r = this.lexer.catcodes[e];
                                    if (null != r && 13 !== r) return
                                }
                                var n = "function" === typeof t ? t(this) : t;
                                if ("string" === typeof n) {
                                    var a = 0;
                                    if (-1 !== n.indexOf("#"))
                                        for (var i = n.replace(/##/g, ""); - 1 !== i.indexOf("#" + (a + 1));) ++a;
                                    for (var o = new In(n, this.settings), s = [], l = o.lex();
                                        "EOF" !== l.text;) s.push(l), l = o.lex();
                                    return s.reverse(), {
                                        tokens: s,
                                        numArgs: a
                                    }
                                }
                                return n
                            }, t.isDefined = function(e) {
                                return this.macros.has(e) || Nn.hasOwnProperty(e) || ae.math.hasOwnProperty(e) || ae.text.hasOwnProperty(e) || Fn.hasOwnProperty(e)
                            }, t.isExpandable = function(e) {
                                var t = this.macros.get(e);
                                return null != t ? "string" === typeof t || "function" === typeof t || !t.unexpandable : Nn.hasOwnProperty(e) && !Nn[e].primitive
                            }, e
                        }(),
                        Un = /^[\u208a\u208b\u208c\u208d\u208e\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089\u2090\u2091\u2095\u1d62\u2c7c\u2096\u2097\u2098\u2099\u2092\u209a\u1d63\u209b\u209c\u1d64\u1d65\u2093\u1d66\u1d67\u1d68\u1d69\u1d6a]/,
                        Yn = Object.freeze({
                            "\u208a": "+",
                            "\u208b": "-",
                            "\u208c": "=",
                            "\u208d": "(",
                            "\u208e": ")",
                            "\u2080": "0",
                            "\u2081": "1",
                            "\u2082": "2",
                            "\u2083": "3",
                            "\u2084": "4",
                            "\u2085": "5",
                            "\u2086": "6",
                            "\u2087": "7",
                            "\u2088": "8",
                            "\u2089": "9",
                            "\u2090": "a",
                            "\u2091": "e",
                            "\u2095": "h",
                            "\u1d62": "i",
                            "\u2c7c": "j",
                            "\u2096": "k",
                            "\u2097": "l",
                            "\u2098": "m",
                            "\u2099": "n",
                            "\u2092": "o",
                            "\u209a": "p",
                            "\u1d63": "r",
                            "\u209b": "s",
                            "\u209c": "t",
                            "\u1d64": "u",
                            "\u1d65": "v",
                            "\u2093": "x",
                            "\u1d66": "\u03b2",
                            "\u1d67": "\u03b3",
                            "\u1d68": "\u03c1",
                            "\u1d69": "\u03d5",
                            "\u1d6a": "\u03c7",
                            "\u207a": "+",
                            "\u207b": "-",
                            "\u207c": "=",
                            "\u207d": "(",
                            "\u207e": ")",
                            "\u2070": "0",
                            "\xb9": "1",
                            "\xb2": "2",
                            "\xb3": "3",
                            "\u2074": "4",
                            "\u2075": "5",
                            "\u2076": "6",
                            "\u2077": "7",
                            "\u2078": "8",
                            "\u2079": "9",
                            "\u1d2c": "A",
                            "\u1d2e": "B",
                            "\u1d30": "D",
                            "\u1d31": "E",
                            "\u1d33": "G",
                            "\u1d34": "H",
                            "\u1d35": "I",
                            "\u1d36": "J",
                            "\u1d37": "K",
                            "\u1d38": "L",
                            "\u1d39": "M",
                            "\u1d3a": "N",
                            "\u1d3c": "O",
                            "\u1d3e": "P",
                            "\u1d3f": "R",
                            "\u1d40": "T",
                            "\u1d41": "U",
                            "\u2c7d": "V",
                            "\u1d42": "W",
                            "\u1d43": "a",
                            "\u1d47": "b",
                            "\u1d9c": "c",
                            "\u1d48": "d",
                            "\u1d49": "e",
                            "\u1da0": "f",
                            "\u1d4d": "g",
                            "\u02b0": "h",
                            "\u2071": "i",
                            "\u02b2": "j",
                            "\u1d4f": "k",
                            "\u02e1": "l",
                            "\u1d50": "m",
                            "\u207f": "n",
                            "\u1d52": "o",
                            "\u1d56": "p",
                            "\u02b3": "r",
                            "\u02e2": "s",
                            "\u1d57": "t",
                            "\u1d58": "u",
                            "\u1d5b": "v",
                            "\u02b7": "w",
                            "\u02e3": "x",
                            "\u02b8": "y",
                            "\u1dbb": "z",
                            "\u1d5d": "\u03b2",
                            "\u1d5e": "\u03b3",
                            "\u1d5f": "\u03b4",
                            "\u1d60": "\u03d5",
                            "\u1d61": "\u03c7",
                            "\u1dbf": "\u03b8"
                        }),
                        Xn = {
                            "\u0301": {
                                text: "\\'",
                                math: "\\acute"
                            },
                            "\u0300": {
                                text: "\\`",
                                math: "\\grave"
                            },
                            "\u0308": {
                                text: '\\"',
                                math: "\\ddot"
                            },
                            "\u0303": {
                                text: "\\~",
                                math: "\\tilde"
                            },
                            "\u0304": {
                                text: "\\=",
                                math: "\\bar"
                            },
                            "\u0306": {
                                text: "\\u",
                                math: "\\breve"
                            },
                            "\u030c": {
                                text: "\\v",
                                math: "\\check"
                            },
                            "\u0302": {
                                text: "\\^",
                                math: "\\hat"
                            },
                            "\u0307": {
                                text: "\\.",
                                math: "\\dot"
                            },
                            "\u030a": {
                                text: "\\r",
                                math: "\\mathring"
                            },
                            "\u030b": {
                                text: "\\H"
                            },
                            "\u0327": {
                                text: "\\c"
                            }
                        },
                        Wn = {
                            "\xe1": "a\u0301",
                            "\xe0": "a\u0300",
                            "\xe4": "a\u0308",
                            "\u01df": "a\u0308\u0304",
                            "\xe3": "a\u0303",
                            "\u0101": "a\u0304",
                            "\u0103": "a\u0306",
                            "\u1eaf": "a\u0306\u0301",
                            "\u1eb1": "a\u0306\u0300",
                            "\u1eb5": "a\u0306\u0303",
                            "\u01ce": "a\u030c",
                            "\xe2": "a\u0302",
                            "\u1ea5": "a\u0302\u0301",
                            "\u1ea7": "a\u0302\u0300",
                            "\u1eab": "a\u0302\u0303",
                            "\u0227": "a\u0307",
                            "\u01e1": "a\u0307\u0304",
                            "\xe5": "a\u030a",
                            "\u01fb": "a\u030a\u0301",
                            "\u1e03": "b\u0307",
                            "\u0107": "c\u0301",
                            "\u1e09": "c\u0327\u0301",
                            "\u010d": "c\u030c",
                            "\u0109": "c\u0302",
                            "\u010b": "c\u0307",
                            "\xe7": "c\u0327",
                            "\u010f": "d\u030c",
                            "\u1e0b": "d\u0307",
                            "\u1e11": "d\u0327",
                            "\xe9": "e\u0301",
                            "\xe8": "e\u0300",
                            "\xeb": "e\u0308",
                            "\u1ebd": "e\u0303",
                            "\u0113": "e\u0304",
                            "\u1e17": "e\u0304\u0301",
                            "\u1e15": "e\u0304\u0300",
                            "\u0115": "e\u0306",
                            "\u1e1d": "e\u0327\u0306",
                            "\u011b": "e\u030c",
                            "\xea": "e\u0302",
                            "\u1ebf": "e\u0302\u0301",
                            "\u1ec1": "e\u0302\u0300",
                            "\u1ec5": "e\u0302\u0303",
                            "\u0117": "e\u0307",
                            "\u0229": "e\u0327",
                            "\u1e1f": "f\u0307",
                            "\u01f5": "g\u0301",
                            "\u1e21": "g\u0304",
                            "\u011f": "g\u0306",
                            "\u01e7": "g\u030c",
                            "\u011d": "g\u0302",
                            "\u0121": "g\u0307",
                            "\u0123": "g\u0327",
                            "\u1e27": "h\u0308",
                            "\u021f": "h\u030c",
                            "\u0125": "h\u0302",
                            "\u1e23": "h\u0307",
                            "\u1e29": "h\u0327",
                            "\xed": "i\u0301",
                            "\xec": "i\u0300",
                            "\xef": "i\u0308",
                            "\u1e2f": "i\u0308\u0301",
                            "\u0129": "i\u0303",
                            "\u012b": "i\u0304",
                            "\u012d": "i\u0306",
                            "\u01d0": "i\u030c",
                            "\xee": "i\u0302",
                            "\u01f0": "j\u030c",
                            "\u0135": "j\u0302",
                            "\u1e31": "k\u0301",
                            "\u01e9": "k\u030c",
                            "\u0137": "k\u0327",
                            "\u013a": "l\u0301",
                            "\u013e": "l\u030c",
                            "\u013c": "l\u0327",
                            "\u1e3f": "m\u0301",
                            "\u1e41": "m\u0307",
                            "\u0144": "n\u0301",
                            "\u01f9": "n\u0300",
                            "\xf1": "n\u0303",
                            "\u0148": "n\u030c",
                            "\u1e45": "n\u0307",
                            "\u0146": "n\u0327",
                            "\xf3": "o\u0301",
                            "\xf2": "o\u0300",
                            "\xf6": "o\u0308",
                            "\u022b": "o\u0308\u0304",
                            "\xf5": "o\u0303",
                            "\u1e4d": "o\u0303\u0301",
                            "\u1e4f": "o\u0303\u0308",
                            "\u022d": "o\u0303\u0304",
                            "\u014d": "o\u0304",
                            "\u1e53": "o\u0304\u0301",
                            "\u1e51": "o\u0304\u0300",
                            "\u014f": "o\u0306",
                            "\u01d2": "o\u030c",
                            "\xf4": "o\u0302",
                            "\u1ed1": "o\u0302\u0301",
                            "\u1ed3": "o\u0302\u0300",
                            "\u1ed7": "o\u0302\u0303",
                            "\u022f": "o\u0307",
                            "\u0231": "o\u0307\u0304",
                            "\u0151": "o\u030b",
                            "\u1e55": "p\u0301",
                            "\u1e57": "p\u0307",
                            "\u0155": "r\u0301",
                            "\u0159": "r\u030c",
                            "\u1e59": "r\u0307",
                            "\u0157": "r\u0327",
                            "\u015b": "s\u0301",
                            "\u1e65": "s\u0301\u0307",
                            "\u0161": "s\u030c",
                            "\u1e67": "s\u030c\u0307",
                            "\u015d": "s\u0302",
                            "\u1e61": "s\u0307",
                            "\u015f": "s\u0327",
                            "\u1e97": "t\u0308",
                            "\u0165": "t\u030c",
                            "\u1e6b": "t\u0307",
                            "\u0163": "t\u0327",
                            "\xfa": "u\u0301",
                            "\xf9": "u\u0300",
                            "\xfc": "u\u0308",
                            "\u01d8": "u\u0308\u0301",
                            "\u01dc": "u\u0308\u0300",
                            "\u01d6": "u\u0308\u0304",
                            "\u01da": "u\u0308\u030c",
                            "\u0169": "u\u0303",
                            "\u1e79": "u\u0303\u0301",
                            "\u016b": "u\u0304",
                            "\u1e7b": "u\u0304\u0308",
                            "\u016d": "u\u0306",
                            "\u01d4": "u\u030c",
                            "\xfb": "u\u0302",
                            "\u016f": "u\u030a",
                            "\u0171": "u\u030b",
                            "\u1e7d": "v\u0303",
                            "\u1e83": "w\u0301",
                            "\u1e81": "w\u0300",
                            "\u1e85": "w\u0308",
                            "\u0175": "w\u0302",
                            "\u1e87": "w\u0307",
                            "\u1e98": "w\u030a",
                            "\u1e8d": "x\u0308",
                            "\u1e8b": "x\u0307",
                            "\xfd": "y\u0301",
                            "\u1ef3": "y\u0300",
                            "\xff": "y\u0308",
                            "\u1ef9": "y\u0303",
                            "\u0233": "y\u0304",
                            "\u0177": "y\u0302",
                            "\u1e8f": "y\u0307",
                            "\u1e99": "y\u030a",
                            "\u017a": "z\u0301",
                            "\u017e": "z\u030c",
                            "\u1e91": "z\u0302",
                            "\u017c": "z\u0307",
                            "\xc1": "A\u0301",
                            "\xc0": "A\u0300",
                            "\xc4": "A\u0308",
                            "\u01de": "A\u0308\u0304",
                            "\xc3": "A\u0303",
                            "\u0100": "A\u0304",
                            "\u0102": "A\u0306",
                            "\u1eae": "A\u0306\u0301",
                            "\u1eb0": "A\u0306\u0300",
                            "\u1eb4": "A\u0306\u0303",
                            "\u01cd": "A\u030c",
                            "\xc2": "A\u0302",
                            "\u1ea4": "A\u0302\u0301",
                            "\u1ea6": "A\u0302\u0300",
                            "\u1eaa": "A\u0302\u0303",
                            "\u0226": "A\u0307",
                            "\u01e0": "A\u0307\u0304",
                            "\xc5": "A\u030a",
                            "\u01fa": "A\u030a\u0301",
                            "\u1e02": "B\u0307",
                            "\u0106": "C\u0301",
                            "\u1e08": "C\u0327\u0301",
                            "\u010c": "C\u030c",
                            "\u0108": "C\u0302",
                            "\u010a": "C\u0307",
                            "\xc7": "C\u0327",
                            "\u010e": "D\u030c",
                            "\u1e0a": "D\u0307",
                            "\u1e10": "D\u0327",
                            "\xc9": "E\u0301",
                            "\xc8": "E\u0300",
                            "\xcb": "E\u0308",
                            "\u1ebc": "E\u0303",
                            "\u0112": "E\u0304",
                            "\u1e16": "E\u0304\u0301",
                            "\u1e14": "E\u0304\u0300",
                            "\u0114": "E\u0306",
                            "\u1e1c": "E\u0327\u0306",
                            "\u011a": "E\u030c",
                            "\xca": "E\u0302",
                            "\u1ebe": "E\u0302\u0301",
                            "\u1ec0": "E\u0302\u0300",
                            "\u1ec4": "E\u0302\u0303",
                            "\u0116": "E\u0307",
                            "\u0228": "E\u0327",
                            "\u1e1e": "F\u0307",
                            "\u01f4": "G\u0301",
                            "\u1e20": "G\u0304",
                            "\u011e": "G\u0306",
                            "\u01e6": "G\u030c",
                            "\u011c": "G\u0302",
                            "\u0120": "G\u0307",
                            "\u0122": "G\u0327",
                            "\u1e26": "H\u0308",
                            "\u021e": "H\u030c",
                            "\u0124": "H\u0302",
                            "\u1e22": "H\u0307",
                            "\u1e28": "H\u0327",
                            "\xcd": "I\u0301",
                            "\xcc": "I\u0300",
                            "\xcf": "I\u0308",
                            "\u1e2e": "I\u0308\u0301",
                            "\u0128": "I\u0303",
                            "\u012a": "I\u0304",
                            "\u012c": "I\u0306",
                            "\u01cf": "I\u030c",
                            "\xce": "I\u0302",
                            "\u0130": "I\u0307",
                            "\u0134": "J\u0302",
                            "\u1e30": "K\u0301",
                            "\u01e8": "K\u030c",
                            "\u0136": "K\u0327",
                            "\u0139": "L\u0301",
                            "\u013d": "L\u030c",
                            "\u013b": "L\u0327",
                            "\u1e3e": "M\u0301",
                            "\u1e40": "M\u0307",
                            "\u0143": "N\u0301",
                            "\u01f8": "N\u0300",
                            "\xd1": "N\u0303",
                            "\u0147": "N\u030c",
                            "\u1e44": "N\u0307",
                            "\u0145": "N\u0327",
                            "\xd3": "O\u0301",
                            "\xd2": "O\u0300",
                            "\xd6": "O\u0308",
                            "\u022a": "O\u0308\u0304",
                            "\xd5": "O\u0303",
                            "\u1e4c": "O\u0303\u0301",
                            "\u1e4e": "O\u0303\u0308",
                            "\u022c": "O\u0303\u0304",
                            "\u014c": "O\u0304",
                            "\u1e52": "O\u0304\u0301",
                            "\u1e50": "O\u0304\u0300",
                            "\u014e": "O\u0306",
                            "\u01d1": "O\u030c",
                            "\xd4": "O\u0302",
                            "\u1ed0": "O\u0302\u0301",
                            "\u1ed2": "O\u0302\u0300",
                            "\u1ed6": "O\u0302\u0303",
                            "\u022e": "O\u0307",
                            "\u0230": "O\u0307\u0304",
                            "\u0150": "O\u030b",
                            "\u1e54": "P\u0301",
                            "\u1e56": "P\u0307",
                            "\u0154": "R\u0301",
                            "\u0158": "R\u030c",
                            "\u1e58": "R\u0307",
                            "\u0156": "R\u0327",
                            "\u015a": "S\u0301",
                            "\u1e64": "S\u0301\u0307",
                            "\u0160": "S\u030c",
                            "\u1e66": "S\u030c\u0307",
                            "\u015c": "S\u0302",
                            "\u1e60": "S\u0307",
                            "\u015e": "S\u0327",
                            "\u0164": "T\u030c",
                            "\u1e6a": "T\u0307",
                            "\u0162": "T\u0327",
                            "\xda": "U\u0301",
                            "\xd9": "U\u0300",
                            "\xdc": "U\u0308",
                            "\u01d7": "U\u0308\u0301",
                            "\u01db": "U\u0308\u0300",
                            "\u01d5": "U\u0308\u0304",
                            "\u01d9": "U\u0308\u030c",
                            "\u0168": "U\u0303",
                            "\u1e78": "U\u0303\u0301",
                            "\u016a": "U\u0304",
                            "\u1e7a": "U\u0304\u0308",
                            "\u016c": "U\u0306",
                            "\u01d3": "U\u030c",
                            "\xdb": "U\u0302",
                            "\u016e": "U\u030a",
                            "\u0170": "U\u030b",
                            "\u1e7c": "V\u0303",
                            "\u1e82": "W\u0301",
                            "\u1e80": "W\u0300",
                            "\u1e84": "W\u0308",
                            "\u0174": "W\u0302",
                            "\u1e86": "W\u0307",
                            "\u1e8c": "X\u0308",
                            "\u1e8a": "X\u0307",
                            "\xdd": "Y\u0301",
                            "\u1ef2": "Y\u0300",
                            "\u0178": "Y\u0308",
                            "\u1ef8": "Y\u0303",
                            "\u0232": "Y\u0304",
                            "\u0176": "Y\u0302",
                            "\u1e8e": "Y\u0307",
                            "\u0179": "Z\u0301",
                            "\u017d": "Z\u030c",
                            "\u1e90": "Z\u0302",
                            "\u017b": "Z\u0307",
                            "\u03ac": "\u03b1\u0301",
                            "\u1f70": "\u03b1\u0300",
                            "\u1fb1": "\u03b1\u0304",
                            "\u1fb0": "\u03b1\u0306",
                            "\u03ad": "\u03b5\u0301",
                            "\u1f72": "\u03b5\u0300",
                            "\u03ae": "\u03b7\u0301",
                            "\u1f74": "\u03b7\u0300",
                            "\u03af": "\u03b9\u0301",
                            "\u1f76": "\u03b9\u0300",
                            "\u03ca": "\u03b9\u0308",
                            "\u0390": "\u03b9\u0308\u0301",
                            "\u1fd2": "\u03b9\u0308\u0300",
                            "\u1fd1": "\u03b9\u0304",
                            "\u1fd0": "\u03b9\u0306",
                            "\u03cc": "\u03bf\u0301",
                            "\u1f78": "\u03bf\u0300",
                            "\u03cd": "\u03c5\u0301",
                            "\u1f7a": "\u03c5\u0300",
                            "\u03cb": "\u03c5\u0308",
                            "\u03b0": "\u03c5\u0308\u0301",
                            "\u1fe2": "\u03c5\u0308\u0300",
                            "\u1fe1": "\u03c5\u0304",
                            "\u1fe0": "\u03c5\u0306",
                            "\u03ce": "\u03c9\u0301",
                            "\u1f7c": "\u03c9\u0300",
                            "\u038e": "\u03a5\u0301",
                            "\u1fea": "\u03a5\u0300",
                            "\u03ab": "\u03a5\u0308",
                            "\u1fe9": "\u03a5\u0304",
                            "\u1fe8": "\u03a5\u0306",
                            "\u038f": "\u03a9\u0301",
                            "\u1ffa": "\u03a9\u0300"
                        },
                        _n = function() {
                            function e(e, t) {
                                this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Gn(e, t, this.mode), this.settings = t, this.leftrightDepth = 0
                            }
                            var t = e.prototype;
                            return t.expect = function(e, t) {
                                if (void 0 === t && (t = !0), this.fetch().text !== e) throw new n("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
                                t && this.consume()
                            }, t.consume = function() {
                                this.nextToken = null
                            }, t.fetch = function() {
                                return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()), this.nextToken
                            }, t.switchMode = function(e) {
                                this.mode = e, this.gullet.switchMode(e)
                            }, t.parse = function() {
                                this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
                                try {
                                    var e = this.parseExpression(!1);
                                    return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e
                                } finally {
                                    this.gullet.endGroups()
                                }
                            }, t.subparse = function(e) {
                                var t = this.nextToken;
                                this.consume(), this.gullet.pushToken(new Fr("}")), this.gullet.pushTokens(e);
                                var r = this.parseExpression(!1);
                                return this.expect("}"), this.nextToken = t, r
                            }, t.parseExpression = function(t, r) {
                                for (var n = [];;) {
                                    "math" === this.mode && this.consumeSpaces();
                                    var a = this.fetch();
                                    if (-1 !== e.endOfExpression.indexOf(a.text)) break;
                                    if (r && a.text === r) break;
                                    if (t && Nn[a.text] && Nn[a.text].infix) break;
                                    var i = this.parseAtom(r);
                                    if (!i) break;
                                    "internal" !== i.type && n.push(i)
                                }
                                return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
                            }, t.handleInfixNodes = function(e) {
                                for (var t, r = -1, a = 0; a < e.length; a++)
                                    if ("infix" === e[a].type) {
                                        if (-1 !== r) throw new n("only one infix operator per group", e[a].token);
                                        r = a, t = e[a].replaceWith
                                    }
                                if (-1 !== r && t) {
                                    var i, o, s = e.slice(0, r),
                                        l = e.slice(r + 1);
                                    return i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        body: s
                                    }, o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        body: l
                                    }, ["\\\\abovefrac" === t ? this.callFunction(t, [i, e[r], o], []) : this.callFunction(t, [i, o], [])]
                                }
                                return e
                            }, t.handleSupSubscript = function(e) {
                                var t = this.fetch(),
                                    r = t.text;
                                this.consume(), this.consumeSpaces();
                                var a = this.parseGroup(e);
                                if (!a) throw new n("Expected group after '" + r + "'", t);
                                return a
                            }, t.formatUnsupportedCmd = function(e) {
                                for (var t = [], r = 0; r < e.length; r++) t.push({
                                    type: "textord",
                                    mode: "text",
                                    text: e[r]
                                });
                                var n = {
                                    type: "text",
                                    mode: this.mode,
                                    body: t
                                };
                                return {
                                    type: "color",
                                    mode: this.mode,
                                    color: this.settings.errorColor,
                                    body: [n]
                                }
                            }, t.parseAtom = function(t) {
                                var r, a, i = this.parseGroup("atom", t);
                                if ("text" === this.mode) return i;
                                for (;;) {
                                    this.consumeSpaces();
                                    var o = this.fetch();
                                    if ("\\limits" === o.text || "\\nolimits" === o.text) {
                                        if (i && "op" === i.type) {
                                            var s = "\\limits" === o.text;
                                            i.limits = s, i.alwaysHandleSupSub = !0
                                        } else {
                                            if (!i || "operatorname" !== i.type) throw new n("Limit controls must follow a math operator", o);
                                            i.alwaysHandleSupSub && (i.limits = "\\limits" === o.text)
                                        }
                                        this.consume()
                                    } else if ("^" === o.text) {
                                        if (r) throw new n("Double superscript", o);
                                        r = this.handleSupSubscript("superscript")
                                    } else if ("_" === o.text) {
                                        if (a) throw new n("Double subscript", o);
                                        a = this.handleSupSubscript("subscript")
                                    } else if ("'" === o.text) {
                                        if (r) throw new n("Double superscript", o);
                                        var l = {
                                                type: "textord",
                                                mode: this.mode,
                                                text: "\\prime"
                                            },
                                            h = [l];
                                        for (this.consume();
                                            "'" === this.fetch().text;) h.push(l), this.consume();
                                        "^" === this.fetch().text && h.push(this.handleSupSubscript("superscript")), r = {
                                            type: "ordgroup",
                                            mode: this.mode,
                                            body: h
                                        }
                                    } else {
                                        if (!Yn[o.text]) break;
                                        var c = Yn[o.text],
                                            m = Un.test(o.text);
                                        for (this.consume();;) {
                                            var u = this.fetch().text;
                                            if (!Yn[u]) break;
                                            if (Un.test(u) !== m) break;
                                            this.consume(), c += Yn[u]
                                        }
                                        var p = new e(c, this.settings).parse();
                                        m ? a = {
                                            type: "ordgroup",
                                            mode: "math",
                                            body: p
                                        } : r = {
                                            type: "ordgroup",
                                            mode: "math",
                                            body: p
                                        }
                                    }
                                }
                                return r || a ? {
                                    type: "supsub",
                                    mode: this.mode,
                                    base: i,
                                    sup: r,
                                    sub: a
                                } : i
                            }, t.parseFunction = function(e, t) {
                                var r = this.fetch(),
                                    a = r.text,
                                    i = Nn[a];
                                if (!i) return null;
                                if (this.consume(), t && "atom" !== t && !i.allowedInArgument) throw new n("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
                                if ("text" === this.mode && !i.allowedInText) throw new n("Can't use function '" + a + "' in text mode", r);
                                if ("math" === this.mode && !1 === i.allowedInMath) throw new n("Can't use function '" + a + "' in math mode", r);
                                var o = this.parseArguments(a, i),
                                    s = o.args,
                                    l = o.optArgs;
                                return this.callFunction(a, s, l, r, e)
                            }, t.callFunction = function(e, t, r, a, i) {
                                var o = {
                                        funcName: e,
                                        parser: this,
                                        token: a,
                                        breakOnTokenText: i
                                    },
                                    s = Nn[e];
                                if (s && s.handler) return s.handler(o, t, r);
                                throw new n("No function handler for " + e)
                            }, t.parseArguments = function(e, t) {
                                var r = t.numArgs + t.numOptionalArgs;
                                if (0 === r) return {
                                    args: [],
                                    optArgs: []
                                };
                                for (var a = [], i = [], o = 0; o < r; o++) {
                                    var s = t.argTypes && t.argTypes[o],
                                        l = o < t.numOptionalArgs;
                                    (t.primitive && null == s || "sqrt" === t.type && 1 === o && null == i[0]) && (s = "primitive");
                                    var h = this.parseGroupOfType("argument to '" + e + "'", s, l);
                                    if (l) i.push(h);
                                    else {
                                        if (null == h) throw new n("Null argument, please report this as a bug");
                                        a.push(h)
                                    }
                                }
                                return {
                                    args: a,
                                    optArgs: i
                                }
                            }, t.parseGroupOfType = function(e, t, r) {
                                switch (t) {
                                    case "color":
                                        return this.parseColorGroup(r);
                                    case "size":
                                        return this.parseSizeGroup(r);
                                    case "url":
                                        return this.parseUrlGroup(r);
                                    case "math":
                                    case "text":
                                        return this.parseArgumentGroup(r, t);
                                    case "hbox":
                                        var a = this.parseArgumentGroup(r, "text");
                                        return null != a ? {
                                            type: "styling",
                                            mode: a.mode,
                                            body: [a],
                                            style: "text"
                                        } : null;
                                    case "raw":
                                        var i = this.parseStringGroup("raw", r);
                                        return null != i ? {
                                            type: "raw",
                                            mode: "text",
                                            string: i.text
                                        } : null;
                                    case "primitive":
                                        if (r) throw new n("A primitive argument cannot be optional");
                                        var o = this.parseGroup(e);
                                        if (null == o) throw new n("Expected group as " + e, this.fetch());
                                        return o;
                                    case "original":
                                    case null:
                                    case void 0:
                                        return this.parseArgumentGroup(r);
                                    default:
                                        throw new n("Unknown group type as " + e, this.fetch())
                                }
                            }, t.consumeSpaces = function() {
                                for (;
                                    " " === this.fetch().text;) this.consume()
                            }, t.parseStringGroup = function(e, t) {
                                var r = this.gullet.scanArgument(t);
                                if (null == r) return null;
                                for (var n, a = "";
                                    "EOF" !== (n = this.fetch()).text;) a += n.text, this.consume();
                                return this.consume(), r.text = a, r
                            }, t.parseRegexGroup = function(e, t) {
                                for (var r, a = this.fetch(), i = a, o = "";
                                    "EOF" !== (r = this.fetch()).text && e.test(o + r.text);) o += (i = r).text, this.consume();
                                if ("" === o) throw new n("Invalid " + t + ": '" + a.text + "'", a);
                                return a.range(i, o)
                            }, t.parseColorGroup = function(e) {
                                var t = this.parseStringGroup("color", e);
                                if (null == t) return null;
                                var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
                                if (!r) throw new n("Invalid color: '" + t.text + "'", t);
                                var a = r[0];
                                return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
                                    type: "color-token",
                                    mode: this.mode,
                                    color: a
                                }
                            }, t.parseSizeGroup = function(e) {
                                var t, r = !1;
                                if (this.gullet.consumeSpaces(), !(t = e || "{" === this.gullet.future().text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
                                e || 0 !== t.text.length || (t.text = "0pt", r = !0);
                                var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
                                if (!a) throw new n("Invalid size: '" + t.text + "'", t);
                                var i = {
                                    number: +(a[1] + a[2]),
                                    unit: a[3]
                                };
                                if (!V(i)) throw new n("Invalid unit: '" + i.unit + "'", t);
                                return {
                                    type: "size",
                                    mode: this.mode,
                                    value: i,
                                    isBlank: r
                                }
                            }, t.parseUrlGroup = function(e) {
                                this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
                                var t = this.parseStringGroup("url", e);
                                if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), null == t) return null;
                                var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
                                return {
                                    type: "url",
                                    mode: this.mode,
                                    url: r
                                }
                            }, t.parseArgumentGroup = function(e, t) {
                                var r = this.gullet.scanArgument(e);
                                if (null == r) return null;
                                var n = this.mode;
                                t && this.switchMode(t), this.gullet.beginGroup();
                                var a = this.parseExpression(!1, "EOF");
                                this.expect("EOF"), this.gullet.endGroup();
                                var i = {
                                    type: "ordgroup",
                                    mode: this.mode,
                                    loc: r.loc,
                                    body: a
                                };
                                return t && this.switchMode(n), i
                            }, t.parseGroup = function(e, t) {
                                var r, a = this.fetch(),
                                    i = a.text;
                                if ("{" === i || "\\begingroup" === i) {
                                    this.consume();
                                    var o = "{" === i ? "}" : "\\endgroup";
                                    this.gullet.beginGroup();
                                    var s = this.parseExpression(!1, o),
                                        l = this.fetch();
                                    this.expect(o), this.gullet.endGroup(), r = {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        loc: Pr.range(a, l),
                                        body: s,
                                        semisimple: "\\begingroup" === i || void 0
                                    }
                                } else if (null == (r = this.parseFunction(t, e) || this.parseSymbol()) && "\\" === i[0] && !Fn.hasOwnProperty(i)) {
                                    if (this.settings.throwOnError) throw new n("Undefined control sequence: " + i, a);
                                    r = this.formatUnsupportedCmd(i), this.consume()
                                }
                                return r
                            }, t.formLigatures = function(e) {
                                for (var t = e.length - 1, r = 0; r < t; ++r) {
                                    var n = e[r],
                                        a = n.text;
                                    "-" === a && "-" === e[r + 1].text && (r + 1 < t && "-" === e[r + 2].text ? (e.splice(r, 3, {
                                        type: "textord",
                                        mode: "text",
                                        loc: Pr.range(n, e[r + 2]),
                                        text: "---"
                                    }), t -= 2) : (e.splice(r, 2, {
                                        type: "textord",
                                        mode: "text",
                                        loc: Pr.range(n, e[r + 1]),
                                        text: "--"
                                    }), t -= 1)), "'" !== a && "`" !== a || e[r + 1].text !== a || (e.splice(r, 2, {
                                        type: "textord",
                                        mode: "text",
                                        loc: Pr.range(n, e[r + 1]),
                                        text: a + a
                                    }), t -= 1)
                                }
                            }, t.parseSymbol = function() {
                                var e = this.fetch(),
                                    t = e.text;
                                if (/^\\verb[^a-zA-Z]/.test(t)) {
                                    this.consume();
                                    var r = t.slice(5),
                                        a = "*" === r.charAt(0);
                                    if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new n("\\verb assertion failed --\n                    please report what input caused this bug");
                                    return {
                                        type: "verb",
                                        mode: "text",
                                        body: r = r.slice(1, -1),
                                        star: a
                                    }
                                }
                                Wn.hasOwnProperty(t[0]) && !ae[this.mode][t[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Wn[t[0]] + t.slice(1));
                                var i, o = qn.exec(t);
                                if (o && ("i" === (t = t.substring(0, o.index)) ? t = "\u0131" : "j" === t && (t = "\u0237")), ae[this.mode][t]) {
                                    this.settings.strict && "math" === this.mode && Ee.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
                                    var s, l = ae[this.mode][t].group,
                                        h = Pr.range(e);
                                    if (te.hasOwnProperty(l)) {
                                        var c = l;
                                        s = {
                                            type: "atom",
                                            mode: this.mode,
                                            family: c,
                                            loc: h,
                                            text: t
                                        }
                                    } else s = {
                                        type: l,
                                        mode: this.mode,
                                        loc: h,
                                        text: t
                                    };
                                    i = s
                                } else {
                                    if (!(t.charCodeAt(0) >= 128)) return null;
                                    this.settings.strict && (S(t.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '" (' + t.charCodeAt(0) + ")", e)), i = {
                                        type: "textord",
                                        mode: "text",
                                        loc: Pr.range(e),
                                        text: t
                                    }
                                }
                                if (this.consume(), o)
                                    for (var m = 0; m < o[0].length; m++) {
                                        var u = o[0][m];
                                        if (!Xn[u]) throw new n("Unknown accent ' " + u + "'", e);
                                        var p = Xn[u][this.mode] || Xn[u].text;
                                        if (!p) throw new n("Accent " + u + " unsupported in " + this.mode + " mode", e);
                                        i = {
                                            type: "accent",
                                            mode: this.mode,
                                            loc: Pr.range(e),
                                            label: p,
                                            isStretchy: !1,
                                            isShifty: !0,
                                            base: i
                                        }
                                    }
                                return i
                            }, e
                        }();
                    _n.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
                    var jn = function(e, t) {
                            if (!("string" === typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
                            var r = new _n(e, t);
                            delete r.gullet.macros.current["\\df@tag"];
                            var a = r.parse();
                            if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
                                if (!t.displayMode) throw new n("\\tag works only in display equations");
                                a = [{
                                    type: "tag",
                                    mode: "text",
                                    body: a,
                                    tag: r.subparse([new Fr("\\df@tag")])
                                }]
                            }
                            return a
                        },
                        $n = function(e, t, r) {
                            t.textContent = "";
                            var n = Kn(e, r).toNode();
                            t.appendChild(n)
                        };
                    "undefined" !== typeof document && "CSS1Compat" !== document.compatMode && ("undefined" !== typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), $n = function() {
                        throw new n("KaTeX doesn't work in quirks mode.")
                    });
                    var Zn = function(e, t, r) {
                            if (r.throwOnError || !(e instanceof n)) throw e;
                            var a = Ke.makeSpan(["katex-error"], [new Z(t)]);
                            return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a
                        },
                        Kn = function(e, t) {
                            var r = new m(t);
                            try {
                                return function(e, t, r) {
                                    var n, a = Ot(r);
                                    if ("mathml" === r.output) return Ht(e, t, a, r.displayMode, !0);
                                    if ("html" === r.output) {
                                        var i = St(e, a);
                                        n = Ke.makeSpan(["katex"], [i])
                                    } else {
                                        var o = Ht(e, t, a, r.displayMode, !1),
                                            s = St(e, a);
                                        n = Ke.makeSpan(["katex"], [o, s])
                                    }
                                    return Et(n, r)
                                }(jn(e, r), e, r)
                            } catch (n) {
                                return Zn(n, e, r)
                            }
                        },
                        Jn = {
                            version: "0.16.7",
                            render: $n,
                            renderToString: function(e, t) {
                                return Kn(e, t).toMarkup()
                            },
                            ParseError: n,
                            SETTINGS_SCHEMA: h,
                            __parse: function(e, t) {
                                var r = new m(t);
                                return jn(e, r)
                            },
                            __renderToDomTree: Kn,
                            __renderToHTMLTree: function(e, t) {
                                var r = new m(t);
                                try {
                                    return function(e, t, r) {
                                        var n = St(e, Ot(r)),
                                            a = Ke.makeSpan(["katex"], [n]);
                                        return Et(a, r)
                                    }(jn(e, r), 0, r)
                                } catch (n) {
                                    return Zn(n, e, r)
                                }
                            },
                            __setFontMetrics: function(e, t) {
                                T[e] = t
                            },
                            __defineSymbol: ie,
                            __defineFunction: ot,
                            __defineMacro: Vr,
                            __domTree: {
                                Span: W,
                                Anchor: _,
                                SymbolNode: Z,
                                SvgNode: K,
                                PathNode: J,
                                LineNode: Q
                            }
                        };
                    return t = t.default
                }()
            }, e.exports = t()
        }
    }
]);