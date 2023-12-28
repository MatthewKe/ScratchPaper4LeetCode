"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [276], {
        97840: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return a
                }
            });
            var r = n(1308),
                i = n(64386),
                o = n(36867),
                a = function() {
                    var e = (0, r.F)().theme,
                        t = (0, o.a)("(prefers-color-scheme: dark)"),
                        n = (0, i.useState)(!1),
                        a = n[0],
                        s = n[1];
                    return (0, i.useEffect)((function() {
                        s(!0)
                    }), []), !a || ("dark" === e || "system" === e && t)
                }
        },
        73845: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return i
                }
            });
            var r = n(40682),
                i = function() {
                    var e, t, n;
                    return Boolean(null === (e = (0, r.U)()) || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.isPremium)
                }
        },
        4521: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                J$: function() {
                    return encodeFrontendTestcase
                },
                e3: function() {
                    return decodeFrontendTestcases
                },
                gW: function() {
                    return buildFrontendTest
                },
                pj: function() {
                    return validateFrontendTestcase
                }
            });
            var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2979),
                core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),
                core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5348),
                core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__),
                core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17519),
                core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__),
                core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66128),
                core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__),
                core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76361),
                core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__),
                core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11270),
                core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),
                buildFrontendTest = function(e, t) {
                    return 'it("'.concat(e, '", async () => {\n').concat(t, "\n})")
                },
                decodeFrontendTestcase = function(e) {
                    var t = e.split("\n");
                    try {
                        var n = JSON.parse(t[0]),
                            r = JSON.parse(t[1]);
                        return buildFrontendTest(n, r)
                    } catch (i) {
                        return console.error("Error while decoding Frontend testcase", i), null
                    }
                },
                decodeFrontendTestcases = function(e) {
                    return [e.map(decodeFrontendTestcase).join("\n\n")]
                },
                TEST_FN_BODY_REGEX = /(async\s+)*(\(\)\s*=>\s*\{|function\s*\(\)\s*\{)([\s\S]*?)\}$/,
                encodeFrontendTestcase = function encodeFrontendTestcase(testcase) {
                    var lines = [];
                    try {
                        var it = function(e, t) {
                            var n = String(t).match(TEST_FN_BODY_REGEX),
                                r = n && n.length >= 3 ? n[3] : null;
                            r && (lines.push(JSON.stringify(e)), lines.push(JSON.stringify(r.replace(/^\n|\n$/g, ""))))
                        };
                        eval(testcase)
                    } catch (e) {
                        return console.error("Error while encoding Frontend testcase", e), ""
                    }
                    return lines.join("\n")
                },
                validateFrontendTestcase = function validateFrontendTestcase(testcase) {
                    try {
                        var it = function(e, t) {
                            if ("string" !== typeof e) throw new Error("test description must be a string");
                            if ("function" !== typeof t) throw new Error("test body must be a function");
                            var n = String(t).match(TEST_FN_BODY_REGEX);
                            if (!n || n.length < 3) throw new Error("test body must be a function")
                        };
                        eval(testcase)
                    } catch (e) {
                        return [!1, "Invalid testcase: ".concat(e.message)]
                    }
                    return [!0, null]
                },
                getTestcaseDescriptions = function getTestcaseDescriptions(testcase) {
                    var descriptions = [];
                    try {
                        var it = function(e) {
                            descriptions.push(JSON.stringify(e))
                        };
                        eval(testcase)
                    } catch (e) {
                        return console.error("Error while encoding Frontend testcase", e), []
                    }
                    return descriptions
                }
        },
        7705: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return q
                }
            });
            var r = n(21484),
                i = (n(2979), n(17519), n(79216)),
                o = n(64386),
                a = n(36291),
                s = n(86857),
                u = n(44872),
                c = n(97840),
                l = n(42456),
                d = n(36226),
                f = n(19769),
                v = n(50277),
                p = n(59869),
                m = n(71179),
                b = n(98685),
                h = n(94194),
                g = n(30665),
                y = n(20337),
                _ = n(13295),
                w = n(43660),
                O = n(17810),
                T = (n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(4676)),
                x = n(7831),
                E = n(72102),
                j = n(11754),
                P = ["tooltip", "children", "className"];

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        (0, T.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var k = function(e) {
                    var t = e.tooltip,
                        n = e.children,
                        r = e.className,
                        i = (0, x.Z)(e, P);
                    return (0, j.jsx)(E.u, {
                        label: t,
                        children: (0, j.jsx)("button", D(D({
                            className: (0, u.yI)(b.nx.labelTextSecondary, b.rG.bgFillSecondary, "flex h-6 w-6 shrink-0 items-center justify-center rounded", {
                                "opacity-40": i.disabled
                            }, r)
                        }, i), {}, {
                            children: n
                        }))
                    })
                },
                I = function(e) {
                    var t = e.className;
                    return (0, j.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: t,
                        children: (0, j.jsx)("path", {
                            d: "M2.99999 8.9999H21M5.99999 21.5999H18C19.9882 21.5999 21.6 19.9881 21.6 17.9999V5.9999C21.6 4.01168 19.9882 2.3999 18 2.3999H5.99999C4.01177 2.3999 2.39999 4.01168 2.39999 5.9999V17.9999C2.39999 19.9881 4.01177 21.5999 5.99999 21.5999Z",
                            stroke: "currentColor",
                            strokeWidth: "2"
                        })
                    })
                },
                A = function(e) {
                    var t = e.children,
                        n = e.isActive,
                        r = e.onClick;
                    return (0, j.jsx)("button", {
                        className: (0, u.yI)(b.rG.labelTextPrimary, "px-2", (0, T.Z)({}, b.nx.labelTextPrimary, n)),
                        onClick: r,
                        children: t
                    })
                },
                S = n(59679),
                R = n(87651),
                C = n(65972);

            function Z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        (0, T.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = o.forwardRef((function(e, t) {
                    return (0, j.jsx)("svg", L(L({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, j.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M7.2 16.8L2.4 12l4.8-4.8m9.6 0l4.8 4.8-4.8 4.8"
                        })
                    }))
                })),
                B = n(18805),
                F = n(82833),
                U = function(e) {
                    var t = e.previewUrl,
                        n = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        r = (0, o.useMemo)((function() {
                            return t ? '<iframe src="'.concat(t, '" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>') : ""
                        }), [t]),
                        a = (0, R.c)(r, {
                            successDuration: 2e3
                        }),
                        s = (0, S.Z)(a, 2),
                        c = s[0],
                        l = s[1],
                        d = (0, o.useState)(!1),
                        f = d[0],
                        v = d[1];
                    return (0, j.jsx)(F.J2, {
                        trigger: "hover",
                        open: f,
                        onOpenChange: v,
                        side: "bottom",
                        align: "end",
                        className: (0, u.yI)("w-[280px] rounded-lg p-0", b.nx.bgLayer02, b.nx.borderBorderTertiary),
                        content: (0, j.jsxs)("div", {
                            className: "flex h-full w-full flex-col gap-0.5 p-1.5",
                            children: [(0, j.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, j.jsxs)("div", {
                                    className: (0, u.yI)(b.nx.labelTextPrimary, "flex items-center"),
                                    children: [(0, j.jsx)(M, {
                                        className: "mx-1.5 inline-block h-4 w-4 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                    }), n("embedCode")]
                                }), (0, j.jsx)(C.z, {
                                    variant: "primary",
                                    size: "lg",
                                    label: (0, j.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, j.jsx)(B.L, {
                                            className: "inline-block h-3 w-3 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                        }), (0, j.jsx)("div", {
                                            className: "text-xs",
                                            children: n(c ? "copiedEmbedCode" : "copyEmbedCode")
                                        })]
                                    }),
                                    className: "text-md rounded-[5px] px-2.5 py-1",
                                    onClick: function() {
                                        return l()
                                    }
                                })]
                            }), (0, j.jsx)("div", {
                                className: (0, u.yI)(b.nx.bgFillTertiary, b.nx.labelTextTertiary, "w-full overflow-hidden whitespace-pre-wrap rounded-lg px-3 py-1"),
                                children: (0, j.jsx)("pre", {
                                    className: "m-0 whitespace-break-spaces break-all p-0 leading-[20px]",
                                    children: r
                                })
                            })]
                        }),
                        children: (0, j.jsx)("div", {
                            children: (0, j.jsx)(k, {
                                children: (0, j.jsx)(M, {
                                    className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                                })
                            })
                        })
                    })
                },
                z = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return e ? [t()] : n
                },
                W = function(e) {
                    var t = e.className,
                        n = e.url,
                        r = (0, c.G)() ? _.Z : y.Z;
                    return (0, j.jsx)("a", {
                        href: null !== n && void 0 !== n ? n : "/",
                        className: (0, u.yI)("mb-0.5 flex pl-1", t),
                        children: (0, j.jsx)(d.y, {
                            className: "h-full",
                            src: r,
                            alt: "LeetCode Logo"
                        })
                    })
                },
                q = function(e) {
                    var t, n, c = e.submissionId,
                        d = e.canOpenInPanel,
                        y = e.canOpenInNewTab,
                        _ = e.showBackToSubmission,
                        T = e.showCopyEmbedCode,
                        x = e.showNavbar,
                        E = e.dynamicallyResizeIframe,
                        P = e.className,
                        N = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        D = (0, v.P)(c, {
                            keepPreviousData: !0
                        }).data,
                        S = null !== (t = null === D || void 0 === D ? void 0 : D.questionSlug) && void 0 !== t ? t : "",
                        R = null !== (n = (0, m.x)(null !== S && void 0 !== S ? S : "").data) && void 0 !== n ? n : {},
                        C = R.hasFrontendPreview,
                        Z = R.frontendPreviews,
                        L = null === D || void 0 === D ? void 0 : D.code,
                        M = null === D || void 0 === D ? void 0 : D.lang,
                        B = null === D || void 0 === D ? void 0 : D.langName,
                        F = (0, o.useMemo)((function() {
                            var e;
                            if (M && Z) return null === (e = (0, l.a)(Z)) || void 0 === e ? void 0 : e[M]
                        }), [Z, M]),
                        q = (0, o.useState)(),
                        G = q[0],
                        J = q[1],
                        H = (0, o.useMemo)((function() {
                            return S ? (0, h.hr)() + g.Hb.questionSubmissionPreview(S, c) : ""
                        }), [S, c]),
                        V = (0, a.h)(),
                        K = (0, o.useState)(0),
                        X = K[0],
                        $ = K[1],
                        Q = (0, o.useState)(null),
                        Y = Q[0],
                        ee = Q[1];
                    (0, o.useEffect)((function() {
                        if (E && Y) {
                            var e = function(e) {
                                var t, n = Y.contentWindow;
                                if (e.source === n && "preview-height" === (null === (t = e.data) || void 0 === t ? void 0 : t.type)) {
                                    var r = Math.min(Math.max(e.data.height, 100), 500);
                                    Y.style.height = "".concat(r + 10, "px")
                                }
                            };
                            return window.addEventListener("message", e), (0, O.b)(Y.contentWindow, "stream-preview-height"),
                                function() {
                                    window.removeEventListener("message", e), (0, O.b)(Y.contentWindow, "stop-streaming-preview-height")
                                }
                        }
                    }), [E, Y]);
                    var te = !!((null === D || void 0 === D ? void 0 : D.statusCode) === p.F6.AC && C && F && M && L),
                        ne = !!L,
                        re = [].concat((0, r.Z)(z(ne, (function() {
                            return {
                                key: "submissionCode",
                                label: null !== B && void 0 !== B ? B : "Code",
                                content: (0, j.jsx)("div", {
                                    className: "px-4 py-2",
                                    children: (0, j.jsx)(f.B, {
                                        code: null !== L && void 0 !== L ? L : "",
                                        lang: "javascript",
                                        showCopyIcon: !0
                                    })
                                })
                            }
                        }))), (0, r.Z)(z(te, (function() {
                            return {
                                key: "preview",
                                label: "Preview",
                                content: (0, j.jsxs)("div", {
                                    className: "flex h-full w-full flex-col",
                                    children: [x && (0, j.jsx)(w.$, {
                                        url: H,
                                        onRefresh: function() {
                                            return $((function(e) {
                                                return e + 1
                                            }))
                                        },
                                        canOpenInNewTab: y,
                                        className: (0, u.yI)(b.nx.borderBorderQuaternary, "border-t")
                                    }), (0, j.jsx)(s.b, {
                                        framework: M,
                                        solutionCode: L,
                                        previewCode: F,
                                        className: "!mb-0 h-full rounded-b-lg",
                                        setIframe: ee
                                    }, X)]
                                })
                            }
                        }))));
                    return 0 === re.length ? null : (void 0 === G && J(re[0]), (0, j.jsxs)("div", {
                        className: (0, u.yI)(b.nx.bgFillQuaternary, b.nx.borderBorderQuaternary, "flex w-full flex-col border", P),
                        children: [te && (0, j.jsxs)("div", {
                            className: (0, u.yI)(b.nx.labelTextSecondary, "flex h-8 min-h-[32px] items-center justify-between pl-2 pr-1 text-xs"),
                            children: [(0, j.jsxs)("div", {
                                className: "flex items-center",
                                children: [_ && (0, j.jsx)(W, {
                                    className: "m-0 h-4 w-4 p-0",
                                    url: g.Hb.submissionOverview(S, String(c))
                                }), re.map((function(e, t) {
                                    return (0, j.jsxs)(o.Fragment, {
                                        children: [(0, j.jsx)(A, {
                                            isActive: e.key === (null === G || void 0 === G ? void 0 : G.key),
                                            onClick: function() {
                                                return J(e)
                                            },
                                            children: e.label
                                        }), t !== re.length - 1 && (0, j.jsx)("div", {
                                            className: (0, u.yI)(b.nx.bgBorderTertiary, "h-3 w-[1px]")
                                        })]
                                    }, e.key)
                                }))]
                            }), (0, j.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [T && (0, j.jsx)(U, {
                                    previewUrl: H
                                }), d && (0, j.jsx)(k, {
                                    onClick: function() {
                                        null === V || void 0 === V || V.openSubmissionPreviewTab({
                                            submissionId: c,
                                            title: null !== D && void 0 !== D && D.statusDisplay ? "".concat(null === D || void 0 === D ? void 0 : D.statusDisplay, " (Preview)") : void 0
                                        })
                                    },
                                    tooltip: N("openInPanelTooltip"),
                                    children: (0, j.jsx)(I, {
                                        className: "!h-[14px] !w-[14px]"
                                    })
                                })]
                            })]
                        }), re.map((function(e) {
                            return (0, j.jsx)("div", {
                                className: (0, u.yI)("h-full w-full overflow-auto", {
                                    hidden: e.key !== (null === G || void 0 === G ? void 0 : G.key)
                                }),
                                children: e.content
                            }, e.key)
                        }))]
                    }))
                }
        },
        53936: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return b
                }
            });
            var r = n(64386),
                i = n(79216),
                o = n(86857),
                a = n(44872),
                s = n(42456),
                u = n(50277),
                c = n(59869),
                l = n(71179),
                d = n(98685),
                f = n(78152),
                v = n(59787),
                p = n(41986),
                m = n(11754),
                b = function(e) {
                    var t, n, b = e.submissionId,
                        h = e.className,
                        g = e.inNewTab,
                        y = (0, i.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        _ = (0, u.P)(b, {
                            keepPreviousData: !0
                        }).data,
                        w = null !== (t = null === _ || void 0 === _ ? void 0 : _.questionSlug) && void 0 !== t ? t : "",
                        O = null !== (n = (0, l.x)(null !== w && void 0 !== w ? w : "").data) && void 0 !== n ? n : {},
                        T = O.hasFrontendPreview,
                        x = O.frontendPreviews,
                        E = null === _ || void 0 === _ ? void 0 : _.code,
                        j = null === _ || void 0 === _ ? void 0 : _.lang,
                        P = (0, r.useMemo)((function() {
                            var e;
                            if (j && x) return null === (e = (0, s.a)(x)) || void 0 === e ? void 0 : e[j]
                        }), [x, j]),
                        N = (null === _ || void 0 === _ ? void 0 : _.statusCode) === c.F6.AC || (null === _ || void 0 === _ ? void 0 : _.statusCode) === c.F6.WA;
                    return T && E && P && j && N ? (0, m.jsx)("div", {
                        className: (0, a.yI)(d.nx.borderBorderQuaternary, "flex w-full flex-col border", h),
                        children: (0, m.jsxs)("div", {
                            className: "flex h-full w-full flex-col",
                            children: [(0, m.jsx)(o.b, {
                                framework: j,
                                solutionCode: E,
                                previewCode: P,
                                className: (0, a.yI)("!mb-0 h-full rounded-lg", {
                                    "rounded-none": g
                                })
                            }), g && (0, m.jsxs)(p.r, {
                                href: v.Hb.submissionOverview(w, String(b)),
                                className: (0, a.yI)(d.nx.bgFixedBlack, d.nx.labelTextSecondary, d.rG.labelTextPrimary, "flex gap-1.5 rounded-lg px-2.5 py-1.5", "fixed bottom-1 left-1 cursor-pointer"),
                                isExternal: !0,
                                children: [(0, m.jsx)("span", {
                                    className: "text-[8px] leading-4",
                                    children: y("openIn")
                                }), (0, m.jsx)(f.q, {
                                    className: "h-[15px] w-[65px]"
                                })]
                            })]
                        })
                    }) : null
                }
        },
        32738: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return m
                }
            });
            var r = n(59679),
                i = n(79216),
                o = n(64386),
                a = n(57735),
                s = n(72102),
                u = n(87651),
                c = n(44872),
                l = n(66413),
                d = n(86209),
                f = n(34573),
                v = n(40007),
                p = n(11754),
                m = function(e) {
                    var t = e.copyValue,
                        n = e.className,
                        m = e.iconClassName,
                        b = e.showOnGroupHover,
                        h = void 0 === b || b,
                        g = e.checkClassName,
                        y = e.customCopyIcon,
                        _ = e.customCopiedIcon,
                        w = (0, i.$G)("common").t,
                        O = (0, f.Of)(),
                        T = (0, u.c)(t, {
                            successDuration: 1e3,
                            copyright: O
                        }),
                        x = (0, r.Z)(T, 2),
                        E = x[0],
                        j = x[1],
                        P = (0, o.useCallback)((function() {
                            j()
                        }), [j]);
                    return (0, p.jsx)(s.u, {
                        label: w("copied"),
                        open: E,
                        placement: "top",
                        children: (0, p.jsxs)("div", {
                            className: (0, c.yI)("relative h-4 w-4 cursor-pointer", n),
                            onClick: P,
                            children: [(0, p.jsx)(a.u, {
                                show: !E,
                                as: "div",
                                enter: "transition ease-out duration-0 delay-200",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                children: null !== y && void 0 !== y ? y : (0, p.jsx)(l.v, {
                                    className: (0, c.yI)("h-4 w-4", "text-gray-6 hover:text-gray-7 dark:text-dark-gray-6 dark:hover:text-dark-gray-7", {
                                        "hidden group-hover:block": h
                                    }, m)
                                })
                            }), (0, p.jsx)(a.u, {
                                show: E,
                                as: "div",
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-100",
                                enter: "ease-out",
                                enterFrom: "scale-0 opacity-0",
                                enterTo: "scale-100 opacity-100",
                                leave: "ease-in",
                                leaveFrom: "scale-100 opacity-100",
                                leaveTo: "scale-0 opacity-0",
                                children: null !== _ && void 0 !== _ ? _ : (0, p.jsx)(d.N, {
                                    className: (0, c.yI)("h-4 w-4", v.Cj.labelGreenStandard, g)
                                })
                            })]
                        })
                    })
                }
        },
        13672: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return a
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (n(72029), n(46442), function() {
                    function e(t, n, i, a) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "name", void 0), (0, o.Z)(this, "modelName", void 0), (0, o.Z)(this, "defaultValue", void 0), (0, o.Z)(this, "alwaysWriteJson", void 0), (0, o.Z)(this, "type", void 0), (0, o.Z)(this, "required", void 0), (0, o.Z)(this, "fixed", void 0), this.name = t, this.modelName = n, this.defaultValue = i, this.alwaysWriteJson = a, this.required = !1, this.fixed = !1, this.type = "any"
                    }
                    return (0, i.Z)(e, [{
                        key: "setType",
                        value: function(e) {
                            return this.type = e, this
                        }
                    }, {
                        key: "setRequired",
                        value: function() {
                            return this.required = !0, this
                        }
                    }, {
                        key: "setFixed",
                        value: function() {
                            return this.fixed = !0, this
                        }
                    }]), e
                }());
            (0, o.Z)(a, "NUMBER", "number"), (0, o.Z)(a, "STRING", "string"), (0, o.Z)(a, "BOOLEAN", "boolean")
        },
        80516: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return c
                }
            });
            n(52799), n(3500), n(91518), n(56806), n(66128), n(29092), n(33407);
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (n(65240), n(29308), n(37872), n(27115), n(72029), n(46442), n(5348), n(13672));

            function s(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var c = function() {
                function e() {
                    (0, r.Z)(this, e), (0, o.Z)(this, "attributes", void 0), (0, o.Z)(this, "nameToAttribute", void 0), this.attributes = [], this.nameToAttribute = {}
                }
                return (0, i.Z)(e, [{
                    key: "addWithAll",
                    value: function(e, t, n, r) {
                        var i = new a.a(e, t, n, r);
                        return this.attributes.push(i), this.nameToAttribute[e] = i, i
                    }
                }, {
                    key: "addInherited",
                    value: function(e, t) {
                        return this.addWithAll(e, t, void 0, !1)
                    }
                }, {
                    key: "add",
                    value: function(e, t, n) {
                        return this.addWithAll(e, void 0, t, n)
                    }
                }, {
                    key: "getAttributes",
                    value: function() {
                        return this.attributes
                    }
                }, {
                    key: "getModelName",
                    value: function(e) {
                        var t = this.nameToAttribute[e];
                        if (void 0 !== t) return t.modelName
                    }
                }, {
                    key: "toJson",
                    value: function(e, t) {
                        var n, r = s(this.attributes);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value,
                                    o = t[i.name];
                                (i.alwaysWriteJson || o !== i.defaultValue) && (e[i.name] = o)
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "fromJson",
                    value: function(e, t) {
                        var n, r = s(this.attributes);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value,
                                    o = e[i.name];
                                t[i.name] = void 0 === o ? i.defaultValue : o
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var n, r = s(this.attributes);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if (e.hasOwnProperty(i.name)) {
                                    var o = e[i.name];
                                    void 0 === o ? delete t[i.name] : t[i.name] = o
                                }
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "setDefaults",
                    value: function(e) {
                        var t, n = s(this.attributes);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                e[r.name] = r.defaultValue
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "toTypescriptInterface",
                    value: function(e, t) {
                        var n = [],
                            r = this.attributes.sort((function(e, t) {
                                return e.name.localeCompare(t.name)
                            }));
                        n.push("export interface I" + e + "Attributes {");
                        for (var i = 0; i < r.length; i++) {
                            var o = r[i],
                                a = o.type,
                                s = void 0,
                                u = o,
                                c = void 0;
                            void 0 !== u.defaultValue ? s = u.defaultValue : void 0 !== u.modelName && void 0 !== t && void 0 !== t.nameToAttribute[u.modelName] && (c = u.modelName, s = (u = t.nameToAttribute[u.modelName]).defaultValue, a = u.type);
                            var l = JSON.stringify(s),
                                d = u.required || u.fixed ? "" : "?";
                            if (o.fixed) n.push("\t" + o.name + ": " + l + ";");
                            else {
                                var f = (void 0 !== s ? "default: " + l : "") + (void 0 !== c ? " - inherited from global " + c : "");
                                n.push("\t" + o.name + d + ": " + a + ";" + (f.length > 0 ? " // " + f : ""))
                            }
                        }
                        return n.push("}"), n.join("\n")
                    }
                }]), e
            }()
        },
        83093: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return u
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (n(37872), n(91518), n(27115), n(12866)),
                s = n(39173),
                u = function() {
                    function e(t, n, i) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "_name", void 0), (0, o.Z)(this, "_orientation", void 0), (0, o.Z)(this, "_indexPlus", void 0), this._name = t, this._orientation = n, this._indexPlus = i, e.values[this._name] = this
                    }
                    return (0, i.Z)(e, [{
                        key: "getName",
                        value: function() {
                            return this._name
                        }
                    }, {
                        key: "getOrientation",
                        value: function() {
                            return this._orientation
                        }
                    }, {
                        key: "getDockRect",
                        value: function(t) {
                            return this === e.TOP ? new s.U(t.x, t.y, t.width, t.height / 2) : this === e.BOTTOM ? new s.U(t.x, t.getBottom() - t.height / 2, t.width, t.height / 2) : this === e.LEFT ? new s.U(t.x, t.y, t.width / 2, t.height) : this === e.RIGHT ? new s.U(t.getRight() - t.width / 2, t.y, t.width / 2, t.height) : t.clone()
                        }
                    }, {
                        key: "split",
                        value: function(t, n) {
                            return this === e.TOP ? {
                                start: new s.U(t.x, t.y, t.width, n),
                                end: new s.U(t.x, t.y + n, t.width, t.height - n)
                            } : this === e.LEFT ? {
                                start: new s.U(t.x, t.y, n, t.height),
                                end: new s.U(t.x + n, t.y, t.width - n, t.height)
                            } : this === e.RIGHT ? {
                                start: new s.U(t.getRight() - n, t.y, n, t.height),
                                end: new s.U(t.x, t.y, t.width - n, t.height)
                            } : {
                                start: new s.U(t.x, t.getBottom() - n, t.width, n),
                                end: new s.U(t.x, t.y, t.width, t.height - n)
                            }
                        }
                    }, {
                        key: "reflect",
                        value: function() {
                            return this === e.TOP ? e.BOTTOM : this === e.LEFT ? e.RIGHT : this === e.RIGHT ? e.LEFT : e.TOP
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "(DockLocation: name=" + this._name + ", orientation=" + this._orientation + ")"
                        }
                    }], [{
                        key: "getByName",
                        value: function(t) {
                            return e.values[t]
                        }
                    }, {
                        key: "getLocation",
                        value: function(t, n, r) {
                            if (n = (n - t.x) / t.width, r = (r - t.y) / t.height, n >= .25 && n < .75 && r >= .25 && r < .75) return e.CENTER;
                            var i = r >= 1 - n;
                            return r >= n ? i ? e.BOTTOM : e.LEFT : i ? e.RIGHT : e.TOP
                        }
                    }]), e
                }();
            (0, o.Z)(u, "values", {}), (0, o.Z)(u, "TOP", new u("top", a.i.VERT, 0)), (0, o.Z)(u, "BOTTOM", new u("bottom", a.i.VERT, 1)), (0, o.Z)(u, "LEFT", new u("left", a.i.HORZ, 0)), (0, o.Z)(u, "RIGHT", new u("right", a.i.HORZ, 1)), (0, o.Z)(u, "CENTER", new u("center", a.i.VERT, 0))
        },
        12866: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = function() {
                    function e(t) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "_name", void 0), this._name = t
                    }
                    return (0, i.Z)(e, [{
                        key: "getName",
                        value: function() {
                            return this._name
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this._name
                        }
                    }], [{
                        key: "flip",
                        value: function(t) {
                            return t === e.HORZ ? e.VERT : e.HORZ
                        }
                    }]), e
                }();
            (0, o.Z)(a, "HORZ", new a("horz")), (0, o.Z)(a, "VERT", new a("vert"))
        },
        39173: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return s
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = n(12866),
                s = function() {
                    function e(t, n, i, a) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "x", void 0), (0, o.Z)(this, "y", void 0), (0, o.Z)(this, "width", void 0), (0, o.Z)(this, "height", void 0), this.x = t, this.y = n, this.width = i, this.height = a
                    }
                    return (0, i.Z)(e, [{
                        key: "clone",
                        value: function() {
                            return new e(this.x, this.y, this.width, this.height)
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height
                        }
                    }, {
                        key: "getBottom",
                        value: function() {
                            return this.y + this.height
                        }
                    }, {
                        key: "getRight",
                        value: function() {
                            return this.x + this.width
                        }
                    }, {
                        key: "getCenter",
                        value: function() {
                            return {
                                x: this.x + this.width / 2,
                                y: this.y + this.height / 2
                            }
                        }
                    }, {
                        key: "positionElement",
                        value: function(e, t) {
                            this.styleWithPosition(e.style, t)
                        }
                    }, {
                        key: "styleWithPosition",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "absolute";
                            return e.left = this.x + "px", e.top = this.y + "px", e.width = Math.max(0, this.width) + "px", e.height = Math.max(0, this.height) + "px", e.position = t, e
                        }
                    }, {
                        key: "contains",
                        value: function(e, t) {
                            return this.x <= e && e <= this.getRight() && this.y <= t && t <= this.getBottom()
                        }
                    }, {
                        key: "removeInsets",
                        value: function(t) {
                            return new e(this.x + t.left, this.y + t.top, Math.max(0, this.width - t.left - t.right), Math.max(0, this.height - t.top - t.bottom))
                        }
                    }, {
                        key: "centerInRect",
                        value: function(e) {
                            this.x = (e.width - this.width) / 2, this.y = (e.height - this.height) / 2
                        }
                    }, {
                        key: "_getSize",
                        value: function(e) {
                            var t = this.width;
                            return e === a.i.VERT && (t = this.height), t
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "(Rect: x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
                        }
                    }], [{
                        key: "empty",
                        value: function() {
                            return new e(0, 0, 0, 0)
                        }
                    }, {
                        key: "fromElement",
                        value: function(t) {
                            var n = t.getBoundingClientRect();
                            return new e(n.x, n.y, n.width, n.height)
                        }
                    }]), e
                }()
        },
        99345: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return s
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (0, i.Z)((function e(t, n) {
                    (0, r.Z)(this, e), (0, o.Z)(this, "type", void 0), (0, o.Z)(this, "data", void 0), this.type = t, this.data = n
                })),
                s = function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return (0, i.Z)(e, null, [{
                        key: "addNode",
                        value: function(t, n, r, i, o) {
                            return new a(e.ADD_NODE, {
                                json: t,
                                toNode: n,
                                location: r.getName(),
                                index: i,
                                select: o
                            })
                        }
                    }, {
                        key: "moveNode",
                        value: function(t, n, r, i, o) {
                            return new a(e.MOVE_NODE, {
                                fromNode: t,
                                toNode: n,
                                location: r.getName(),
                                index: i,
                                select: o
                            })
                        }
                    }, {
                        key: "deleteTab",
                        value: function(t) {
                            return new a(e.DELETE_TAB, {
                                node: t
                            })
                        }
                    }, {
                        key: "deleteTabset",
                        value: function(t) {
                            return new a(e.DELETE_TABSET, {
                                node: t
                            })
                        }
                    }, {
                        key: "renameTab",
                        value: function(t, n) {
                            return new a(e.RENAME_TAB, {
                                node: t,
                                text: n
                            })
                        }
                    }, {
                        key: "selectTab",
                        value: function(t) {
                            return new a(e.SELECT_TAB, {
                                tabNode: t
                            })
                        }
                    }, {
                        key: "setActiveTabset",
                        value: function(t) {
                            return new a(e.SET_ACTIVE_TABSET, {
                                tabsetNode: t
                            })
                        }
                    }, {
                        key: "adjustSplit",
                        value: function(t) {
                            var n = t.node1Id,
                                r = t.node2Id;
                            return new a(e.ADJUST_SPLIT, {
                                node1: n,
                                weight1: t.weight1,
                                pixelWidth1: t.pixelWidth1,
                                node2: r,
                                weight2: t.weight2,
                                pixelWidth2: t.pixelWidth2
                            })
                        }
                    }, {
                        key: "adjustBorderSplit",
                        value: function(t, n) {
                            return new a(e.ADJUST_BORDER_SPLIT, {
                                node: t,
                                pos: n
                            })
                        }
                    }, {
                        key: "maximizeToggle",
                        value: function(t) {
                            return new a(e.MAXIMIZE_TOGGLE, {
                                node: t
                            })
                        }
                    }, {
                        key: "updateModelAttributes",
                        value: function(t) {
                            return new a(e.UPDATE_MODEL_ATTRIBUTES, {
                                json: t
                            })
                        }
                    }, {
                        key: "updateNodeAttributes",
                        value: function(t, n) {
                            return new a(e.UPDATE_NODE_ATTRIBUTES, {
                                node: t,
                                json: n
                            })
                        }
                    }, {
                        key: "floatTab",
                        value: function(t) {
                            return new a(e.FLOAT_TAB, {
                                node: t
                            })
                        }
                    }, {
                        key: "unFloatTab",
                        value: function(t) {
                            return new a(e.UNFLOAT_TAB, {
                                node: t
                            })
                        }
                    }]), e
                }();
            (0, o.Z)(s, "ADD_NODE", "FlexLayout_AddNode"), (0, o.Z)(s, "MOVE_NODE", "FlexLayout_MoveNode"), (0, o.Z)(s, "DELETE_TAB", "FlexLayout_DeleteTab"), (0, o.Z)(s, "DELETE_TABSET", "FlexLayout_DeleteTabset"), (0, o.Z)(s, "RENAME_TAB", "FlexLayout_RenameTab"), (0, o.Z)(s, "SELECT_TAB", "FlexLayout_SelectTab"), (0, o.Z)(s, "SET_ACTIVE_TABSET", "FlexLayout_SetActiveTabset"), (0, o.Z)(s, "ADJUST_SPLIT", "FlexLayout_AdjustSplit"), (0, o.Z)(s, "ADJUST_BORDER_SPLIT", "FlexLayout_AdjustBorderSplit"), (0, o.Z)(s, "MAXIMIZE_TOGGLE", "FlexLayout_MaximizeToggle"), (0, o.Z)(s, "UPDATE_MODEL_ATTRIBUTES", "FlexLayout_UpdateModelAttributes"), (0, o.Z)(s, "UPDATE_NODE_ATTRIBUTES", "FlexLayout_UpdateNodeAttributes"), (0, o.Z)(s, "FLOAT_TAB", "FlexLayout_FloatTab"), (0, o.Z)(s, "UNFLOAT_TAB", "FlexLayout_UnFloatTab")
        },
        99707: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return d
                }
            });
            n(52799), n(3500), n(91518), n(72029), n(56806), n(66128), n(29092), n(33407);
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (n(29308), n(37872), n(27115), n(38890), n(83093)),
                s = n(12866),
                u = n(39173);

            function c(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var d = function() {
                function e(t) {
                    (0, r.Z)(this, e), (0, o.Z)(this, "_model", void 0), (0, o.Z)(this, "_attributes", void 0), (0, o.Z)(this, "_parent", void 0), (0, o.Z)(this, "_children", void 0), (0, o.Z)(this, "_fixed", void 0), (0, o.Z)(this, "_rect", void 0), (0, o.Z)(this, "_visible", void 0), (0, o.Z)(this, "_listeners", void 0), (0, o.Z)(this, "_dirty", !1), (0, o.Z)(this, "_tempSize", 0), this._model = t, this._attributes = {}, this._children = [], this._fixed = !1, this._rect = u.U.empty(), this._visible = !1, this._listeners = {}
                }
                return (0, i.Z)(e, [{
                    key: "getId",
                    value: function() {
                        var e = this._attributes.id;
                        return void 0 !== e || (e = this._model._nextUniqueId(), this._setId(e)), e
                    }
                }, {
                    key: "getModel",
                    value: function() {
                        return this._model
                    }
                }, {
                    key: "getType",
                    value: function() {
                        return this._attributes.type
                    }
                }, {
                    key: "getParent",
                    value: function() {
                        return this._parent
                    }
                }, {
                    key: "getChildren",
                    value: function() {
                        return this._children
                    }
                }, {
                    key: "getRect",
                    value: function() {
                        return this._rect
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this._visible
                    }
                }, {
                    key: "getOrientation",
                    value: function() {
                        return void 0 === this._parent ? this._model.isRootOrientationVertical() ? s.i.VERT : s.i.HORZ : s.i.flip(this._parent.getOrientation())
                    }
                }, {
                    key: "setEventListener",
                    value: function(e, t) {
                        this._listeners[e] = t
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e) {
                        delete this._listeners[e]
                    }
                }, {
                    key: "_setId",
                    value: function(e) {
                        this._attributes.id = e
                    }
                }, {
                    key: "_fireEvent",
                    value: function(e, t) {
                        void 0 !== this._listeners[e] && this._listeners[e](t)
                    }
                }, {
                    key: "_getAttr",
                    value: function(e) {
                        var t = this._attributes[e];
                        if (void 0 === t) {
                            var n = this._getAttributeDefinitions().getModelName(e);
                            void 0 !== n && (t = this._model._getAttribute(n))
                        }
                        return t
                    }
                }, {
                    key: "_forEachNode",
                    value: function(e, t) {
                        e(this, t), t++;
                        var n, r = c(this._children);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                n.value._forEachNode(e, t)
                            }
                        } catch (i) {
                            r.e(i)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "_setVisible",
                    value: function(e) {
                        e !== this._visible && (this._fireEvent("visibility", {
                            visible: e
                        }), this._visible = e)
                    }
                }, {
                    key: "_getDrawChildren",
                    value: function() {
                        return this._children
                    }
                }, {
                    key: "_setParent",
                    value: function(e) {
                        this._parent = e
                    }
                }, {
                    key: "_setRect",
                    value: function(e) {
                        this._rect = e
                    }
                }, {
                    key: "_setWeight",
                    value: function(e) {
                        this._attributes.weight = e
                    }
                }, {
                    key: "_setSelected",
                    value: function(e) {
                        this._attributes.selected = e
                    }
                }, {
                    key: "_isFixed",
                    value: function() {
                        return this._fixed
                    }
                }, {
                    key: "_layout",
                    value: function(e, t) {
                        this._rect = e
                    }
                }, {
                    key: "_findDropTargetNode",
                    value: function(e, t, n) {
                        var r;
                        if (this._rect.contains(t, n))
                            if (void 0 !== this._model.getMaximizedTabset()) r = this._model.getMaximizedTabset().canDrop(e, t, n);
                            else if (void 0 === (r = this.canDrop(e, t, n)) && 0 !== this._children.length) {
                            var i, o = c(this._children);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    if (void 0 !== (r = i.value._findDropTargetNode(e, t, n))) break
                                }
                            } catch (a) {
                                o.e(a)
                            } finally {
                                o.f()
                            }
                        }
                        return r
                    }
                }, {
                    key: "canDrop",
                    value: function(e, t, n) {}
                }, {
                    key: "_canDockInto",
                    value: function(e, t) {
                        if (null != t) {
                            if (t.location === a.R.CENTER && !1 === t.node.isEnableDrop()) return !1;
                            if (t.location === a.R.CENTER && "tabset" === e.getType() && void 0 !== e.getName()) return !1;
                            if (t.location !== a.R.CENTER && !1 === t.node.isEnableDivide()) return !1;
                            if (this._model._getOnAllowDrop()) return this._model._getOnAllowDrop()(e, t)
                        }
                        return !0
                    }
                }, {
                    key: "_removeChild",
                    value: function(e) {
                        var t = this._children.indexOf(e);
                        return -1 !== t && this._children.splice(t, 1), this._dirty = !0, t
                    }
                }, {
                    key: "_addChild",
                    value: function(e, t) {
                        return null != t ? this._children.splice(t, 0, e) : (this._children.push(e), t = this._children.length - 1), e._parent = this, this._dirty = !0, t
                    }
                }, {
                    key: "_removeAll",
                    value: function() {
                        this._children = [], this._dirty = !0
                    }
                }, {
                    key: "_styleWithPosition",
                    value: function(e) {
                        return null == e && (e = {}), this._rect.styleWithPosition(e)
                    }
                }, {
                    key: "_getTempSize",
                    value: function() {
                        return this._tempSize
                    }
                }, {
                    key: "_setTempSize",
                    value: function(e) {
                        this._tempSize = e
                    }
                }, {
                    key: "isEnableDivide",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "_toAttributeString",
                    value: function() {
                        return JSON.stringify(this._attributes, void 0, "\t")
                    }
                }]), e
            }()
        },
        52516: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return p
                }
            });
            n(91518), n(94276);
            var r = n(701),
                i = n(15898),
                o = n(36428),
                a = n(81142),
                s = n(55034),
                u = n(95454),
                c = n(4676),
                l = (n(72029), n(99707)),
                d = n(13672),
                f = n(80516);

            function v(e) {
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
                    var n, r = (0, u.Z)(e);
                    if (t) {
                        var i = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var p = function(e) {
                (0, a.Z)(n, e);
                var t = v(n);

                function n(e, i) {
                    var a, s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return (0, r.Z)(this, n), a = t.call(this, e), (0, c.Z)((0, o.Z)(a), "_tabRect", void 0), (0, c.Z)((0, o.Z)(a), "_renderedName", void 0), (0, c.Z)((0, o.Z)(a), "_extra", void 0), (0, c.Z)((0, o.Z)(a), "_window", void 0), a._extra = {}, n._attributeDefinitions.fromJson(i, a._attributes), !0 === s && e._addNode((0, o.Z)(a)), a
                }
                return (0, i.Z)(n, [{
                    key: "getWindow",
                    value: function() {
                        return this._window
                    }
                }, {
                    key: "getTabRect",
                    value: function() {
                        return this._tabRect
                    }
                }, {
                    key: "_setTabRect",
                    value: function(e) {
                        this._tabRect = e
                    }
                }, {
                    key: "_setRenderedName",
                    value: function(e) {
                        this._renderedName = e
                    }
                }, {
                    key: "_getNameForOverflowMenu",
                    value: function() {
                        var e = this._getAttr("altName");
                        return void 0 !== e ? e : this._renderedName
                    }
                }, {
                    key: "getName",
                    value: function() {
                        return this._getAttr("name")
                    }
                }, {
                    key: "getHelpText",
                    value: function() {
                        return this._getAttr("helpText")
                    }
                }, {
                    key: "getComponent",
                    value: function() {
                        return this._getAttr("component")
                    }
                }, {
                    key: "getConfig",
                    value: function() {
                        return this._attributes.config
                    }
                }, {
                    key: "getExtraData",
                    value: function() {
                        return this._extra
                    }
                }, {
                    key: "isFloating",
                    value: function() {
                        return this._getAttr("floating")
                    }
                }, {
                    key: "getIcon",
                    value: function() {
                        return this._getAttr("icon")
                    }
                }, {
                    key: "isEnableClose",
                    value: function() {
                        return this._getAttr("enableClose")
                    }
                }, {
                    key: "getCloseType",
                    value: function() {
                        return this._getAttr("closeType")
                    }
                }, {
                    key: "isEnableFloat",
                    value: function() {
                        return this._getAttr("enableFloat")
                    }
                }, {
                    key: "isEnableDrag",
                    value: function() {
                        return this._getAttr("enableDrag")
                    }
                }, {
                    key: "isEnableRename",
                    value: function() {
                        return this._getAttr("enableRename")
                    }
                }, {
                    key: "getClassName",
                    value: function() {
                        return this._getAttr("className")
                    }
                }, {
                    key: "isEnableRenderOnDemand",
                    value: function() {
                        return this._getAttr("enableRenderOnDemand")
                    }
                }, {
                    key: "updateLastMovedTimestamp",
                    value: function() {
                        this.getExtraData().lastMovedTimestamp = Date.now()
                    }
                }, {
                    key: "getLastMovedTimestamp",
                    value: function() {
                        var e;
                        return null === (e = this.getExtraData()) || void 0 === e ? void 0 : e.lastMovedTimestamp
                    }
                }, {
                    key: "_setName",
                    value: function(e) {
                        this._attributes.name = e, this._window && this._window.document && (this._window.document.title = e)
                    }
                }, {
                    key: "_setFloating",
                    value: function(e) {
                        this._attributes.floating = e
                    }
                }, {
                    key: "_layout",
                    value: function(e, t) {
                        e.equals(this._rect) || this._fireEvent("resize", {
                            rect: e
                        }), this._rect = e
                    }
                }, {
                    key: "_delete",
                    value: function() {
                        this._parent._remove(this), this._fireEvent("close", {})
                    }
                }, {
                    key: "toJson",
                    value: function() {
                        var e = {};
                        return n._attributeDefinitions.toJson(e, this._attributes), e
                    }
                }, {
                    key: "_updateAttrs",
                    value: function(e) {
                        n._attributeDefinitions.update(e, this._attributes)
                    }
                }, {
                    key: "_getAttributeDefinitions",
                    value: function() {
                        return n._attributeDefinitions
                    }
                }, {
                    key: "_setWindow",
                    value: function(e) {
                        this._window = e
                    }
                }, {
                    key: "_setBorderWidth",
                    value: function(e) {
                        this._attributes.borderWidth = e
                    }
                }, {
                    key: "_setBorderHeight",
                    value: function(e) {
                        this._attributes.borderHeight = e
                    }
                }], [{
                    key: "_fromJson",
                    value: function(e, t) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = new n(t, e, r);
                        return i
                    }
                }, {
                    key: "_createAttributeDefinitions",
                    value: function() {
                        var e = new f.H;
                        return e.add("type", n.TYPE, !0).setType(d.a.STRING), e.add("id", void 0).setType(d.a.STRING), e.add("name", "[Unnamed Tab]").setType(d.a.STRING), e.add("altName", void 0).setType(d.a.STRING), e.add("helpText", void 0).setType(d.a.STRING), e.add("component", void 0).setType(d.a.STRING), e.add("config", void 0).setType("any"), e.add("floating", !1).setType(d.a.BOOLEAN), e.addInherited("enableClose", "tabEnableClose").setType(d.a.BOOLEAN), e.addInherited("closeType", "tabCloseType").setType("ICloseType"), e.addInherited("enableDrag", "tabEnableDrag").setType(d.a.BOOLEAN), e.addInherited("enableRename", "tabEnableRename").setType(d.a.BOOLEAN), e.addInherited("className", "tabClassName").setType(d.a.STRING), e.addInherited("icon", "tabIcon").setType(d.a.STRING), e.addInherited("enableRenderOnDemand", "tabEnableRenderOnDemand").setType(d.a.BOOLEAN), e.addInherited("enableFloat", "tabEnableFloat").setType(d.a.BOOLEAN), e.addInherited("borderWidth", "tabBorderWidth").setType(d.a.NUMBER), e.addInherited("borderHeight", "tabBorderHeight").setType(d.a.NUMBER), e
                    }
                }, {
                    key: "getAttributeDefinitions",
                    value: function() {
                        return n._attributeDefinitions
                    }
                }]), n
            }(l.N);
            (0, c.Z)(p, "TYPE", "tab"), (0, c.Z)(p, "_attributeDefinitions", p._createAttributeDefinitions())
        },
        19769: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return p
                }
            });
            n(82544);
            var r = n(45917),
                i = n(13810),
                o = n(37011),
                a = n(44872),
                s = n(97840),
                u = n(32738),
                c = {
                    "c#": "csharp",
                    "c++": "cpp",
                    python3: "python",
                    pythondata: "python",
                    golang: "go",
                    js: "javascript",
                    ts: "typescript",
                    mysql: "sql",
                    mssql: "sql",
                    oraclesql: "sql",
                    oracle: "sql",
                    postgresql: "sql"
                },
                l = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return null !== (e = c[t.toLowerCase()]) && void 0 !== e ? e : t.toLowerCase()
                },
                d = n(98685),
                f = n(11754),
                v = function(e) {
                    var t = e.code,
                        n = e.className;
                    return (0, f.jsx)("pre", {
                        className: (0, a.yI)(d.nx.labelTextPrimary, n),
                        style: {
                            fontSize: 13,
                            fontFamily: "Menlo, Monaco, Consolas",
                            textShadow: "none"
                        },
                        children: t
                    })
                },
                p = function(e) {
                    var t = e.lang,
                        n = e.code,
                        c = e.showCopyIcon,
                        d = e.copyButtonClassName,
                        p = e.className,
                        m = e.wrapperClassName,
                        b = (0, s.G)(),
                        h = n.length < 1e4;
                    return (0, f.jsxs)("div", {
                        className: (0, a.yI)("group relative", m),
                        translate: "no",
                        children: [h ? (0, f.jsx)(r.Z, {
                            language: l(t),
                            customStyle: {
                                background: "transparent",
                                padding: 0,
                                margin: 0,
                                fontSize: 13,
                                fontFamily: "Menlo, Monaco, Consolas",
                                textShadow: "none"
                            },
                            style: b ? i.Z : Object.assign({}, o.Z, {
                                'code[class*="language-"]': {
                                    textShadow: "none"
                                }
                            }),
                            wrapLines: !0,
                            className: p,
                            children: n
                        }) : (0, f.jsx)(v, {
                            code: n,
                            className: p
                        }), !!c && (0, f.jsx)(u.q, {
                            copyValue: n,
                            className: (0, a.yI)("fill-gray-6 hover:fill-gray-7 dark:fill-dark-gray-6 dark:hover:fill-dark-gray-7 absolute right-0 top-0", d)
                        })]
                    })
                }
        },
        50277: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return g
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(59679),
                i = n(4676),
                o = (n(91023), n(72029), n(17519), n(37872), n(91518), n(58935), n(29308), n(27115), n(21988), n(11651)),
                a = n(90074),
                s = n(62590),
                u = n(11288),
                c = n(71009),
                l = n(56609),
                d = n(42456),
                f = n(4521),
                v = n(41028),
                p = n(59869);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h(e, t) {
                var n, r, i, o, a = (0, d.a)(e);
                return {
                    lineNumber: null !== (n = null === a || void 0 === a ? void 0 : a.ln) && void 0 !== n ? n : void 0,
                    message: null !== (r = null === a || void 0 === a ? void 0 : a.shortError) && void 0 !== r ? r : void 0,
                    testCode: t,
                    codePreview: null !== (i = null === a || void 0 === a ? void 0 : a.codePreview) && void 0 !== i ? i : void 0,
                    showDiff: null !== (o = null === a || void 0 === a ? void 0 : a.showDiff) && void 0 !== o && o,
                    actual: null === a || void 0 === a ? void 0 : a.actual,
                    expected: null === a || void 0 === a ? void 0 : a.expected
                }
            }
            var g = function(e, t) {
                var n = String(e);
                return (0, o.a)(a.aUw.getKey({
                    submissionId: n
                }), (function() {
                    return Promise.all([u.f6.request(a.yd1, {
                        submissionId: n
                    }), l.K.request(s.Ii, {
                        submissionId: Number(n)
                    }), c.x1.request(c.Hv.memoryDistribution(n)), c.x1.request(c.Hv.runtimeDistribution(n))])
                }), b(b({}, t), {}, {
                    select: function(e) {
                        var t, n, i, o, a, s, u, c, l, m, b = (0, r.Z)(e, 4),
                            g = b[0].submissionDetail,
                            y = b[1].submissionComment,
                            _ = b[2],
                            w = b[3];
                        if (!g) return null;
                        var O = "outputDetail" in g ? g.outputDetail : void 0;
                        return {
                            username: g.user.userSlug,
                            realName: g.user.realName,
                            userAvatar: g.user.userAvatar,
                            timestamp: Number(g.timestamp),
                            runtime: Number.parseFloat(g.runtimeDisplay),
                            runtimeDisplay: g.runtimeDisplay,
                            runtimePercentile: g.runtimePercentile,
                            runtimeDistribution: w.runtime_distribution_formatted,
                            runtimeMergedDistribution: w.merged_distribution,
                            memory: Number(g.memory),
                            memoryDisplay: g.memoryDisplay,
                            memoryPercentile: g.memoryPercentile,
                            memoryDistribution: _.memory_distribution_formatted,
                            memoryMergedDistribution: _.merged_distribution,
                            lang: g.lang,
                            langName: g.langVerboseName,
                            code: g.code,
                            notes: (null === y || void 0 === y ? void 0 : y.comment) || "",
                            flagType: null !== (t = null === (n = g.submissionComment) || void 0 === n ? void 0 : n.flagType) && void 0 !== t ? t : p.Mj.White,
                            topicTags: null !== (i = null === y || void 0 === y ? void 0 : y.tags.map((function(e) {
                                return {
                                    slug: e.slug,
                                    name: e.nameTranslated || e.name,
                                    tagId: Number(e.id)
                                }
                            }))) && void 0 !== i ? i : [],
                            statusCode: (0, v.JR)(g.statusDisplay),
                            statusDisplay: (0, v.Ue)(g.statusDisplay),
                            questionId: Number(null === g || void 0 === g || null === (o = g.question) || void 0 === o ? void 0 : o.questionId) || -1,
                            questionSlug: (null === g || void 0 === g || null === (a = g.question) || void 0 === a ? void 0 : a.titleSlug) || "",
                            isMine: g.isMine,
                            runtimeError: null !== (s = null === O || void 0 === O ? void 0 : O.runtimeError) && void 0 !== s ? s : void 0,
                            compileError: null !== (u = null === O || void 0 === O ? void 0 : O.compileError) && void 0 !== u ? u : void 0,
                            lastTestcase: null !== (c = null === O || void 0 === O ? void 0 : O.lastTestcase) && void 0 !== c ? c : void 0,
                            totalCorrect: "number" === typeof g.passedTestCaseCnt ? g.passedTestCaseCnt : void 0,
                            totalTestcases: "number" === typeof g.totalTestCaseCnt ? g.totalTestCaseCnt : void 0,
                            frontendTestResults: null !== (l = null === (m = g.testDescriptions) || void 0 === m ? void 0 : m.map((function(e, t) {
                                var n, r, i, o, a, s = null !== (n = (0, d.a)(e)) && void 0 !== n ? n : "\u672a\u77e5\u7684\u6d4b\u8bd5\u7528\u4f8b",
                                    u = null === (r = g.fullCodeOutput) || void 0 === r ? void 0 : r[t],
                                    c = "passed" === u,
                                    l = (0, d.a)(u),
                                    v = (0, d.a)(null === (i = g.testBodies) || void 0 === i ? void 0 : i[t]),
                                    p = v ? (0, f.gW)(s, v) : void 0,
                                    m = null !== (o = null === (a = g.testInfo) || void 0 === a ? void 0 : a[t]) && void 0 !== o ? o : void 0;
                                return {
                                    title: s,
                                    passed: c,
                                    errorMessage: l,
                                    failedTestInfo: c ? void 0 : h(m, p)
                                }
                            }))) && void 0 !== l ? l : [],
                            supportsPreview: !!g.question.hasFrontendPreview
                        }
                    }
                }))
            }
        },
        41028: function(e, t, n) {
            n.d(t, {
                Hz: function() {
                    return f
                },
                JR: function() {
                    return T
                },
                Ue: function() {
                    return O
                },
                Wr: function() {
                    return E
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = (n(17519), n(36615), n(91518), n(72029), n(78659)),
                o = n(90074),
                a = n(11288),
                s = n(59869),
                u = n(25927);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = 20,
                f = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (0, u.y)(),
                        c = r.data,
                        f = null === c || void 0 === c || null === (t = c.find((function(e) {
                            return e.id === n.lang
                        }))) || void 0 === t ? void 0 : t.name,
                        v = {
                            questionSlug: e,
                            offset: 0,
                            limit: d,
                            lastKey: null,
                            status: x(n.status),
                            lang: f
                        },
                        p = !n.lang || !(null === c || void 0 === c || !c.length);
                    return (0, i.N)(o.rgQ.getKey(v), (function(t) {
                        var n = t.pageParam,
                            r = void 0 === n ? v : n;
                        return a.f6.request(o.G1I, r).then((function(t) {
                            var n, r, i = t.submissionList;
                            if (!i || null === i || void 0 === i || !i.submissions) return {
                                lastKey: null,
                                hasNext: !1,
                                submissions: []
                            };
                            var o = i.lastKey,
                                a = i.hasNext,
                                u = i.submissions;
                            return {
                                lastKey: null !== (n = String(o)) && void 0 !== n ? n : null,
                                hasNext: null !== (r = Boolean(a)) && void 0 !== r && r,
                                submissions: u.map((function(t) {
                                    var n, r, i, o, a, u;
                                    return {
                                        id: (null === t || void 0 === t ? void 0 : t.id) || "",
                                        title: (null === t || void 0 === t ? void 0 : t.title) || "",
                                        questionSlug: e || "",
                                        statusDisplay: O(null === t || void 0 === t ? void 0 : t.statusDisplay),
                                        status: null !== t && void 0 !== t && t.status && null !== (n = x(t.status)) && void 0 !== n ? n : -1,
                                        langSlug: null !== (r = null === t || void 0 === t ? void 0 : t.lang) && void 0 !== r ? r : "",
                                        langName: null !== (i = null === t || void 0 === t ? void 0 : t.langName) && void 0 !== i ? i : "",
                                        runtime: (null === t || void 0 === t ? void 0 : t.runtime) || "",
                                        timestamp: (null === t || void 0 === t ? void 0 : t.timestamp) || "",
                                        url: (null === t || void 0 === t ? void 0 : t.url) || "",
                                        isPending: !1,
                                        memory: (null === t || void 0 === t ? void 0 : t.memory) || "",
                                        hasNotes: !(null === t || void 0 === t || !t.submissionComment),
                                        notes: (null === t || void 0 === t || null === (o = t.submissionComment) || void 0 === o ? void 0 : o.comment) || "",
                                        flagType: null !== (a = null === t || void 0 === t || null === (u = t.submissionComment) || void 0 === u ? void 0 : u.flagType) && void 0 !== a ? a : s.Mj.White
                                    }
                                }))
                            }
                        }))
                    }), {
                        enabled: p,
                        getNextPageParam: function(e, t) {
                            return e.hasNext ? l(l({}, v), {}, {
                                lastKey: e.lastKey,
                                offset: t.length * d
                            }) : void 0
                        }
                    })
                },
                v = "\u901a\u8fc7",
                p = "\u7f16\u8bd1\u51fa\u9519",
                m = "\u5185\u90e8\u51fa\u9519",
                b = "\u8d85\u51fa\u5185\u5b58\u9650\u5236",
                h = "\u8d85\u51fa\u8f93\u51fa\u9650\u5236",
                g = "\u6267\u884c\u51fa\u9519",
                y = "\u8d85\u51fa\u65f6\u95f4\u9650\u5236",
                _ = "\u8d85\u65f6",
                w = "\u89e3\u7b54\u9519\u8bef";

            function O(e) {
                switch (e) {
                    case "Accepted":
                        return v;
                    case "Wrong Answer":
                        return w;
                    case "Memory Limit Exceeded":
                        return b;
                    case "Output Limit Exceeded":
                        return h;
                    case "Time Limit Exceeded":
                        return y;
                    case "Runtime Error":
                        return g;
                    case "Internal Error":
                        return m;
                    case "Compile Error":
                        return p;
                    case "Timeout":
                        return _;
                    default:
                        return e || "\u5185\u90e8\u9519\u8bef"
                }
            }

            function T(e) {
                var t = s.F6.AC,
                    n = s.F6.WA,
                    r = s.F6.MLE,
                    i = s.F6.OLE,
                    o = s.F6.TLE,
                    a = s.F6.RE,
                    u = s.F6.IE,
                    c = s.F6.CE,
                    l = s.F6.TO,
                    d = s.F6.UNKNOWN;
                switch (e) {
                    case "Accepted":
                        return t;
                    case "Wrong Answer":
                        return n;
                    case "Memory Limit Exceeded":
                        return r;
                    case "Output Limit Exceeded":
                        return i;
                    case "Time Limit Exceeded":
                        return o;
                    case "Runtime Error":
                        return a;
                    case "Internal Error":
                        return u;
                    case "Compile Error":
                        return c;
                    case "Timeout":
                        return l;
                    default:
                        return d
                }
            }

            function x(e) {
                var t;
                if (!e) return null;
                var n = o.AU0.Ac,
                    i = o.AU0.Wa,
                    a = o.AU0.Mle,
                    u = o.AU0.Ole,
                    c = o.AU0.Tle,
                    l = o.AU0.Re,
                    d = o.AU0.Ie,
                    f = o.AU0.Ce,
                    v = o.AU0.To,
                    p = s.F6.AC,
                    m = s.F6.WA,
                    b = s.F6.MLE,
                    h = s.F6.OLE,
                    g = s.F6.TLE,
                    y = s.F6.RE,
                    _ = s.F6.IE,
                    w = s.F6.CE,
                    O = s.F6.TO,
                    T = (t = {}, (0, r.Z)(t, p, n), (0, r.Z)(t, m, i), (0, r.Z)(t, b, a), (0, r.Z)(t, h, u), (0, r.Z)(t, g, c), (0, r.Z)(t, y, l), (0, r.Z)(t, _, d), (0, r.Z)(t, w, f), (0, r.Z)(t, O, v), (0, r.Z)(t, n, p), (0, r.Z)(t, i, m), (0, r.Z)(t, a, b), (0, r.Z)(t, u, h), (0, r.Z)(t, c, g), (0, r.Z)(t, l, y), (0, r.Z)(t, d, _), (0, r.Z)(t, f, w), (0, r.Z)(t, v, O), t);
                return e in T ? T[e] : null
            }
            var E = function(e) {
                return (0, o.ZM)(a.f6, e, {
                    enabled: !!e.lang,
                    cacheTime: 0,
                    staleTime: 0,
                    select: function(t) {
                        var n, r, i, o, a, u, c = t.lastSubmission;
                        return c ? {
                            id: (null === c || void 0 === c ? void 0 : c.id) || "",
                            title: (null === c || void 0 === c ? void 0 : c.title) || "",
                            questionSlug: e.questionSlug || "",
                            statusDisplay: O(null === c || void 0 === c ? void 0 : c.statusDisplay),
                            status: null !== c && void 0 !== c && c.status && null !== (n = x(c.status)) && void 0 !== n ? n : -1,
                            langSlug: null !== (r = null === c || void 0 === c ? void 0 : c.lang) && void 0 !== r ? r : "",
                            langName: null !== (i = null === c || void 0 === c ? void 0 : c.langName) && void 0 !== i ? i : "",
                            runtime: (null === c || void 0 === c ? void 0 : c.runtime) || "",
                            timestamp: (null === c || void 0 === c ? void 0 : c.timestamp) || "",
                            url: (null === c || void 0 === c ? void 0 : c.url) || "",
                            isPending: !1,
                            memory: (null === c || void 0 === c ? void 0 : c.memory) || "",
                            hasNotes: !(null === c || void 0 === c || !c.submissionComment),
                            notes: (null === c || void 0 === c || null === (o = c.submissionComment) || void 0 === o ? void 0 : o.comment) || "",
                            flagType: null !== (a = null === c || void 0 === c || null === (u = c.submissionComment) || void 0 === u ? void 0 : u.flagType) && void 0 !== a ? a : s.Mj.White
                        } : null
                    }
                })
            }
        },
        59869: function(e, t, n) {
            var r, i, o;
            n.d(t, {
                    F6: function() {
                        return r
                    },
                    Mj: function() {
                        return o
                    },
                    SQ: function() {
                        return i
                    }
                }),
                function(e) {
                    e[e.AC = 10] = "AC", e[e.WA = 11] = "WA", e[e.MLE = 12] = "MLE", e[e.OLE = 13] = "OLE", e[e.TLE = 14] = "TLE", e[e.RE = 15] = "RE", e[e.IE = 16] = "IE", e[e.CE = 20] = "CE", e[e.TO = 30] = "TO", e[e.INVALID_TESTCASE = 40] = "INVALID_TESTCASE", e[e.UNKNOWN = -1] = "UNKNOWN"
                }(r || (r = {})),
                function(e) {
                    e.NETWORK_ERROR = "NETWORK_ERROR", e.SLOWDOWN_ERROR = "SLOWDOWN_ERROR"
                }(i || (i = {})),
                function(e) {
                    e.Blue = "BLUE", e.Green = "GREEN", e.Orange = "ORANGE", e.Purple = "PURPLE", e.Red = "RED", e.White = "WHITE"
                }(o || (o = {}))
        },
        25927: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return s
                }
            });
            var r = n(61880),
                i = n(11288),
                o = n(90074),
                a = function(e) {
                    return (0, r.Z)(e.languageList)
                },
                s = function() {
                    return (0, o.PFw)(i.f6, {}, {
                        select: a
                    })
                }
        },
        71179: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(11288),
                o = n(90074);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                return (0, o.EuC)(i.f6, {
                    titleSlug: e
                }, {
                    enabled: !!e,
                    select: function(e) {
                        var t;
                        return s(s({}, e.question), {}, {
                            codeSnippets: null === e || void 0 === e || null === (t = e.question) || void 0 === t ? void 0 : t.codeSnippets
                        })
                    }
                })
            }
        },
        71009: function(e, t, n) {
            n.d(t, {
                Hv: function() {
                    return f
                },
                x1: function() {
                    return d
                }
            });
            var r = n(701),
                i = n(15898),
                o = n(4676),
                a = (n(91518), n(58935), n(2979), n(78464), n(29092), n(70748), n(96543), n(62217), n(63306), n(59006)),
                s = n(83815);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = function() {
                    function e(t) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "headers", {
                            "content-type": "application/json"
                        }), (0, o.Z)(this, "baseUrl", ""), this.baseUrl = t
                    }
                    return (0, i.Z)(e, [{
                        key: "request",
                        value: function(e, t) {
                            return this.rawRequest(e, t).then((function(e) {
                                if (!e.ok) throw new Error("Network response was not ok");
                                return e.json()
                            }))
                        }
                    }, {
                        key: "rawRequest",
                        value: function(e, t) {
                            return fetch("".concat(this.baseUrl).concat(e), c({
                                headers: new Headers(c(c({}, this.headers), {}, {
                                    "X-CSRFToken": (0, a._V)()
                                })),
                                credentials: "same-origin"
                            }, t))
                        }
                    }]), e
                }(),
                d = new l(""),
                f = (new l(s.Vq), {
                    favoriteLists: function(e) {
                        return "/api/problems/favorite_lists/".concat(e, "/")
                    },
                    problems: function(e) {
                        return "/api/problems/".concat(e, "/")
                    },
                    problemsFilter: function(e) {
                        return "/problems/api/filter-questions/".concat(encodeURIComponent(e))
                    },
                    problemsList: "/problems/api/favorites/",
                    problemsTags: "/problems/api/tags/",
                    problemsCategories: "/problems/api/card-info/",
                    banner: function(e) {
                        return "/api/banner/".concat(e, "/")
                    },
                    session: "/session/",
                    virtualContestStart: function(e) {
                        return "/contest/api/".concat(e, "/virtual_participate")
                    },
                    runcodeTaskEnqueue: function(e) {
                        return "/problems/".concat(e, "/interpret_solution/")
                    },
                    runcodeResult: function(e) {
                        return "/submissions/detail/".concat(e, "/check/")
                    },
                    submitTaskEnqueue: function(e) {
                        return "/problems/".concat(e, "/submit/")
                    },
                    submitResult: function(e) {
                        return "/submissions/detail/".concat(e, "/check/")
                    },
                    memoryDistribution: function(e) {
                        return "/submissions/api/memory_distribution/".concat(e, "/")
                    },
                    runtimeDistribution: function(e) {
                        return "/submissions/api/runtime_distribution/".concat(e, "/")
                    },
                    lastSubmittedCode: function(e, t) {
                        return "/submissions/latest/?qid=".concat(e, "&lang=").concat(t)
                    },
                    student: "/student/api/",
                    studentDiscount: "/student/api/24discount/",
                    subscribeCheckout: "/subscription/add_card_and_checkout/"
                })
        },
        65972: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return v
                },
                z: function() {
                    return p
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(7831),
                o = n(64386),
                a = n(16951),
                s = n(44872),
                u = n(11754),
                c = ["variant", "theme", "size", "shape", "label", "icon", "onClick", "isLoading", "disabled", "className"];

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = function() {
                    return (0, u.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        className: "animate-spin",
                        children: (0, u.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                            clipRule: "evenodd"
                        })
                    })
                },
                v = (0, a.j)("relative inline-flex gap-2 items-center justify-center font-medium cursor-pointer focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors", {
                    variants: {
                        variant: {
                            primary: "text-text-reverse",
                            secondary: "bg-fill-tertiary enabled:hover:bg-fill-secondary enabled:active:bg-fill-primary",
                            outline: "border",
                            text: "bg-transparent enabled:hover:bg-fill-secondary enabled:active:bg-fill-primary"
                        },
                        theme: {
                            default: "",
                            info: "",
                            success: "",
                            danger: "",
                            warning: ""
                        },
                        size: {
                            sm: "text-caption px-2 py-1",
                            md: "text-body px-3 py-1.5",
                            lg: "text-body px-4 py-2",
                            xl: "text-title-small px-5.5 py-3"
                        },
                        shape: {
                            rect: "",
                            pill: "rounded-full",
                            square: "rounded",
                            round: "rounded-full"
                        },
                        isLoading: {
                            true: "",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        size: "sm",
                        shape: "rect",
                        class: "rounded"
                    }, {
                        size: ["md", "lg"],
                        shape: "rect",
                        class: "rounded-lg"
                    }, {
                        size: "xl",
                        shape: "rect",
                        class: "rounded-[13px]"
                    }, {
                        size: "sm",
                        shape: ["square", "round"],
                        class: "p-1.5"
                    }, {
                        size: "md",
                        shape: ["square", "round"],
                        class: "p-[9px]"
                    }, {
                        size: "lg",
                        shape: ["square", "round"],
                        class: "p-[11px]"
                    }, {
                        size: "xl",
                        shape: ["square", "round"],
                        class: "p-4"
                    }, {
                        size: "sm",
                        variant: "outline",
                        class: "px-[7px] py-[3px]"
                    }, {
                        size: "md",
                        variant: "outline",
                        class: "px-[11px] py-[5px]"
                    }, {
                        size: "lg",
                        variant: "outline",
                        class: "px-[15px] py-[7px]"
                    }, {
                        size: "xl",
                        variant: "outline",
                        class: "px-[21px] py-[11px]"
                    }, {
                        size: "sm",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-[5px]"
                    }, {
                        size: "md",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-2"
                    }, {
                        size: "lg",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-2.5"
                    }, {
                        size: "xl",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-[15px]"
                    }, {
                        theme: "default",
                        variant: "primary",
                        class: "bg-gray-100 enabled:hover:bg-gray-80 enabled:active:bg-gray-60"
                    }, {
                        theme: "info",
                        variant: "primary",
                        class: "bg-blue-60 enabled:hover:bg-blue-80 enabled:active:bg-blue-100"
                    }, {
                        theme: "success",
                        variant: "primary",
                        class: "bg-green-60 enabled:hover:bg-green-80 enabled:active:bg-green-100"
                    }, {
                        theme: "danger",
                        variant: "primary",
                        class: "bg-red-60 enabled:hover:bg-red-80 enabled:active:bg-red-100"
                    }, {
                        theme: "warning",
                        variant: "primary",
                        class: "bg-yellow-60 enabled:hover:bg-yellow-80 enabled:active:bg-yellow-100"
                    }, {
                        theme: "default",
                        variant: ["secondary", "text"],
                        class: "text-text-primary"
                    }, {
                        theme: "info",
                        variant: ["secondary", "text"],
                        class: "text-blue-60"
                    }, {
                        theme: "success",
                        variant: ["secondary", "text"],
                        class: "text-green-60"
                    }, {
                        theme: "danger",
                        variant: ["secondary", "text"],
                        class: "text-red-60"
                    }, {
                        theme: "warning",
                        variant: ["secondary", "text"],
                        class: "text-yellow-60"
                    }, {
                        theme: "default",
                        variant: "outline",
                        class: (0, s.yI)("border-gray-100 text-text-primary", "enabled:hover:border-gray-80", "enabled:active:border-gray-60 enabled:active:text-text-secondary")
                    }, {
                        theme: "info",
                        variant: "outline",
                        class: (0, s.yI)("border-blue-60 text-blue-60", "enabled:hover:border-blue-80 enabled:hover:text-blue-80", "enabled:active:border-blue-100 enabled:active:text-blue-100")
                    }, {
                        theme: "success",
                        variant: "outline",
                        class: (0, s.yI)("border-green-60 text-green-60", "enabled:hover:border-green-80 enabled:hover:text-green-80", "enabled:active:border-green-100 enabled:active:text-green-100")
                    }, {
                        theme: "danger",
                        variant: "outline",
                        class: (0, s.yI)("border-red-60 text-red-60", "enabled:hover:border-red-80 enabled:hover:text-red-80", "enabled:active:border-red-100 enabled:active:text-red-100")
                    }, {
                        theme: "warning",
                        variant: "outline",
                        class: (0, s.yI)("border-yellow-60 text-yellow-60", "enabled:hover:border-yellow-80 enabled:hover:text-yellow-80", "enabled:active:border-yellow-100 enabled:active:text-yellow-100")
                    }]
                }),
                p = (0, o.forwardRef)((function(e, t) {
                    var n = e.variant,
                        r = void 0 === n ? "primary" : n,
                        o = e.theme,
                        a = void 0 === o ? "default" : o,
                        l = e.size,
                        p = void 0 === l ? "md" : l,
                        m = e.shape,
                        b = void 0 === m ? "rect" : m,
                        h = e.label,
                        g = e.icon,
                        y = e.onClick,
                        _ = e.isLoading,
                        w = void 0 !== _ && _,
                        O = e.disabled,
                        T = void 0 !== O && O,
                        x = e.className,
                        E = (0, i.Z)(e, c);
                    return (0, u.jsxs)("button", d(d({
                        className: (0, s.yI)(v({
                            variant: r,
                            theme: a,
                            size: p,
                            shape: b,
                            className: x
                        })),
                        disabled: Boolean(T || w),
                        ref: t,
                        onClick: y
                    }, E), {}, {
                        children: [!g && w && (0, u.jsx)("div", {
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                            children: (0, u.jsx)(f, {})
                        }), g && (w ? (0, u.jsx)(f, {}) : g), h && "square" !== b && "round" !== b && (0, u.jsx)("div", {
                            className: (0, s.yI)({
                                invisible: !g && w
                            }),
                            children: h
                        })]
                    }))
                }))
        },
        18805: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(64386),
                o = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = i.forwardRef((function(e, t) {
                return (0, o.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, o.jsx)("path", {
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        d: "M6 14.4H3.6a1.2 1.2 0 01-1.2-1.2V4.4a2 2 0 012-2h8.8a1.2 1.2 0 011.2 1.2V6M12 21.6h7.2a2.4 2.4 0 002.4-2.4V12a2.4 2.4 0 00-2.4-2.4H12A2.4 2.4 0 009.6 12v7.2a2.4 2.4 0 002.4 2.4z"
                    })
                }))
            }))
        },
        66413: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(64386),
                o = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = i.forwardRef((function(e, t) {
                return (0, o.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        77342: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(64386),
                o = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = i.forwardRef((function(e, t) {
                return (0, o.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12 12",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M6.01.7c-.652-.014-1.202.14-1.652.43a2.905 2.905 0 00-.996 1.121c-.449.856-.564 1.899-.564 2.692v.05a1.42 1.42 0 00-.9 1.321v3.572a1.41 1.41 0 001.4 1.414h5.4c.779 0 1.4-.643 1.4-1.414V6.314a1.42 1.42 0 00-.9-1.32v-.051c0-.794-.115-1.813-.564-2.658C8.165 1.405 7.336.73 6.01.7zm2.188 4.2h-4.4c.005-.717.117-1.55.45-2.185.166-.317.38-.571.65-.744.266-.17.616-.282 1.09-.271.923.02 1.444.456 1.763 1.055.331.622.443 1.43.447 2.145z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        45203: function(e, t, n) {
            n.d(t, {
                $M: function() {
                    return x
                },
                AR: function() {
                    return C
                },
                AT: function() {
                    return _
                },
                At: function() {
                    return Z
                },
                Cc: function() {
                    return T
                },
                GN: function() {
                    return R
                },
                JL: function() {
                    return h
                },
                Mb: function() {
                    return D
                },
                Pn: function() {
                    return O
                },
                Sf: function() {
                    return S
                },
                U1: function() {
                    return E
                },
                UI: function() {
                    return g
                },
                ZZ: function() {
                    return p
                },
                aB: function() {
                    return k
                },
                dM: function() {
                    return b
                },
                eB: function() {
                    return I
                },
                iT: function() {
                    return j
                },
                on: function() {
                    return A
                },
                vY: function() {
                    return y
                },
                wo: function() {
                    return N
                },
                x2: function() {
                    return P
                },
                zR: function() {
                    return w
                },
                zs: function() {
                    return m
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(63306);
            var r = n(4676),
                i = n(59679),
                o = (n(91518), n(62217), n(83696), n(3500), n(20162)),
                a = n(83093),
                s = n(99345),
                u = n(52516),
                c = n(82424),
                l = n(42419);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = function(e, t, n, r) {
                    var o = (0, l.nz)(e, t, r);
                    o && (Object.entries(n).forEach((function(e) {
                        var t = (0, i.Z)(e, 2),
                            n = t[0],
                            r = t[1];
                        o.getExtraData()[n] = r
                    })), e.doAction(s.e.updateNodeAttributes(o.getId(), {})))
                },
                p = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.RJ.AfterActiveTab,
                        r = t.title,
                        i = t.questionSlug,
                        a = t.topicId,
                        u = t.topicSlug,
                        d = t.commentId,
                        v = (0, c.dR)(u, a),
                        p = (0, l.nz)(e, o.r.SolutionPost, v);
                    if (p) e.doAction(s.e.selectTab(p.getId()));
                    else {
                        var m = (0, l.nz)(e, o.r.Solutions);
                        if (m) {
                            var b = n === o.RJ.AfterActiveTab ? {
                                    newTabOpenOption: n,
                                    usePrevActive: !0
                                } : {
                                    newTabOpenOption: o.RJ.AfterSimilarTab,
                                    component: o.r.SolutionPost
                                },
                                h = (0, l.s$)({
                                    model: e,
                                    defaultAnchorTabNode: m,
                                    option: b
                                }),
                                g = e.doAction(s.e.addNode(f(f({}, (0, l.DX)(o.r.SolutionPost)), {}, {
                                    config: {
                                        questionSlug: i,
                                        topicId: a,
                                        topicSlug: u,
                                        commentId: d
                                    }
                                }), h.toNodeId, h.location, h.index));
                            null !== g && void 0 !== g && g.getExtraData() && (g.getExtraData().customTitle = r)
                        }
                    }
                },
                m = function(e, t) {
                    var n = t.title,
                        r = t.id,
                        i = t.focusNotes,
                        a = (0, l.nz)(e, o.r.SubmissionDetail, {
                            isFromSubmitBtn: !0
                        });
                    if (a) return e.doAction(s.e.updateNodeAttributes(a.getId(), {
                        config: {
                            id: r,
                            focusNotes: i,
                            isFromSubmitBtn: !0
                        }
                    })), e.doAction(s.e.selectTab(a.getId())), void(null !== a && void 0 !== a && a.getExtraData() && (a.getExtraData().customTitle = n));
                    var u = (0, l.nz)(e, o.r.Submissions);
                    if (u) {
                        var c = (0, l.s$)({
                                model: e,
                                defaultAnchorTabNode: u,
                                option: {
                                    newTabOpenOption: o.RJ.AfterSimilarTab,
                                    component: o.r.SubmissionDetail
                                }
                            }),
                            d = e.doAction(s.e.addNode(f(f({}, (0, l.DX)(o.r.SubmissionDetail)), {}, {
                                config: {
                                    id: r,
                                    focusNotes: i,
                                    isFromSubmitBtn: !0
                                }
                            }), c.toNodeId, c.location, c.index));
                        null !== d && void 0 !== d && d.getExtraData() && (d.getExtraData().customTitle = n)
                    }
                },
                b = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.RJ.AfterActiveTab,
                        r = t.title,
                        i = t.id,
                        a = t.focusNotes,
                        u = (0, l.nz)(e, o.r.SubmissionDetail, {
                            id: i
                        });
                    if (u) {
                        var c, d = u.getId(),
                            v = null !== (c = u.getConfig()) && void 0 !== c ? c : {};
                        return e.doAction(s.e.updateNodeAttributes(d, {
                            config: f(f({}, v), {}, {
                                focusNotes: a
                            })
                        })), void e.doAction(s.e.selectTab(d))
                    }
                    var p = (0, l.nz)(e, o.r.Submissions);
                    if (p) {
                        var m = n === o.RJ.AfterActiveTab ? {
                                newTabOpenOption: n,
                                usePrevActive: !0
                            } : {
                                newTabOpenOption: o.RJ.AfterSimilarTab,
                                component: o.r.SubmissionDetail
                            },
                            b = (0, l.s$)({
                                model: e,
                                defaultAnchorTabNode: p,
                                option: m
                            }),
                            h = e.doAction(s.e.addNode(f(f({}, (0, l.DX)(o.r.SubmissionDetail)), {}, {
                                config: {
                                    id: i,
                                    focusNotes: a
                                }
                            }), b.toNodeId, b.location, b.index));
                        null !== h && void 0 !== h && h.getExtraData() && (h.getExtraData().customTitle = r)
                    }
                },
                h = function(e) {
                    var t = (0, l.nz)(e, o.r.Result);
                    if (t) e.doAction(s.e.selectTab(t.getId()));
                    else {
                        var n = (0, l.nz)(e, o.r.Testcase);
                        if (n) {
                            var r = e.doAction(s.e.addNode((0, l.DX)(o.r.Result), n.getParent().getId(), a.R.CENTER, -1));
                            e.doAction(s.e.selectTab(r.getId()))
                        }
                    }
                },
                g = function(e) {
                    var t = (0, l.nz)(e, o.r.Testcase);
                    t && e.doAction(s.e.selectTab(t.getId()))
                },
                y = function(e) {
                    var t = (0, l.nz)(e, o.r.Note);
                    if (t) e.doAction(s.e.selectTab(t.getId()));
                    else {
                        var n = (0, l.nz)(e, o.r.Code);
                        if (n) {
                            var r = (0, l.s$)({
                                model: e,
                                defaultAnchorTabNode: n,
                                option: {
                                    newTabOpenOption: o.RJ.AfterActiveTab,
                                    usePrevActive: !1
                                }
                            });
                            e.doAction(s.e.addNode((0, l.DX)(o.r.Note), r.toNodeId, r.location, r.index))
                        }
                    }
                },
                _ = function(e) {
                    var t = (0, l.nz)(e, o.r.Debugger);
                    if (t) e.doAction(s.e.selectTab(t.getId()));
                    else {
                        var n = (0, l.nz)(e, o.r.Code);
                        if (n) {
                            var r = n.getParent(),
                                i = r.getId(),
                                u = r.getBestNeighbor(),
                                c = null === u || void 0 === u ? void 0 : u.getId();
                            c && (i = c), e.doAction(s.e.addNode((0, l.DX)(o.r.Debugger), i, a.R.CENTER, -1))
                        }
                    }
                },
                w = function(e) {
                    var t = (0, l.nz)(e, o.r.Preview);
                    if (t) e.doAction(s.e.selectTab(t.getId()));
                    else {
                        e.doAction(s.e.addNode((0, l.DX)(o.r.Preview), e.getRoot().getId(), a.R.RIGHT, -1));
                        var n = (0, l.nz)(e, o.r.Preview);
                        n ? e.doAction(s.e.addNode((0, l.DX)(o.r.PreviewConsole), n.getParent().getId(), a.R.BOTTOM, -1)) : console.error("Failed to find Preview tab to attach Web Console tab")
                    }
                },
                O = function(e) {
                    var t = (0, l.nz)(e, o.r.Debugger);
                    t && e.doAction(s.e.deleteTab(t.getId()))
                },
                T = function(e) {
                    var t = (0, l.nz)(e, o.r.Result);
                    t && e.doAction(s.e.deleteTab(t.getId()))
                },
                x = function(e, t, n, r) {
                    var i, o = (0, l.nz)(e, t, r);
                    o && e.doAction(s.e.updateNodeAttributes(o.getId(), {
                        config: f(f({}, null !== (i = o.getConfig()) && void 0 !== i ? i : {}), n)
                    }))
                },
                E = function(e, t, n, r) {
                    v(e, t, {
                        customTitle: n
                    }, r)
                },
                j = function(e, t, n) {
                    v(e, t, {
                        disabled: n
                    })
                },
                P = function(e, t, n, r) {
                    var i = (0, l.nz)(e, t, n);
                    if (i && e.doAction(s.e.selectTab(i.getId())), r) {
                        if (t === o.r.SolutionPost) {
                            var a = null !== n && void 0 !== n ? n : {},
                                u = a.title,
                                c = a.questionSlug,
                                d = a.topicId,
                                f = a.topicSlug,
                                v = a.commentId;
                            p(e, {
                                title: u,
                                questionSlug: c,
                                topicId: d,
                                topicSlug: f,
                                commentId: v
                            })
                        }
                        if (t === o.r.SubmissionDetail) {
                            var m = null !== n && void 0 !== n ? n : {},
                                h = m.title,
                                g = m.id;
                            b(e, {
                                title: h,
                                id: g
                            })
                        }
                    }
                },
                N = function(e) {
                    e._setActiveTab(void 0), e._setActiveTabset(void 0);
                    var t = [];
                    e.visitNodes((function(e) {
                        var n;
                        e.getType() === u.B.TYPE && -1 === o.HX.indexOf(null !== (n = e.getComponent()) && void 0 !== n ? n : "") && t.push(e.getId())
                    })), t.forEach((function(t) {
                        e.doAction(s.e.deleteTab(t))
                    }));
                    var n = (0, l.nz)(e, o.r.Description);
                    n && e.doAction(s.e.selectTab(n.getId()))
                },
                D = function(e) {
                    var t = e.getActiveTabset();
                    t && e.doAction(s.e.maximizeToggle(t.getId()))
                },
                k = function(e) {
                    var t = e.getActiveTab();
                    null !== t && void 0 !== t && t.isEnableClose() && e.doAction(s.e.deleteTab(t.getId()))
                },
                I = function(e, t, n) {
                    var r, i = (0, l.nz)(e, t, n);
                    if (i) {
                        var o = i.getParent();
                        o.isActive() && (null === (r = o.getSelectedNode()) || void 0 === r ? void 0 : r.getId()) === i.getId() && (e._setActiveTabset(void 0), setTimeout((function() {
                            e._setActiveTabset(o), e.doAction(s.e.updateNodeAttributes(i.getId(), {}))
                        }), 10))
                    }
                },
                A = function(e, t, n) {
                    var r = (0, l.nz)(e, t, n);
                    r && e.doAction(s.e.deleteTab(r.getId()))
                },
                S = function(e) {
                    var t = (0, l.nz)(e, o.r.Editorial);
                    if (t) e.doAction(s.e.selectTab(t.getId()));
                    else {
                        var n = (0, l.nz)(e, o.r.Description);
                        if (n) {
                            var r = n.getParent(),
                                i = e.doAction(s.e.addNode((0, l.DX)(o.r.Editorial), r.getId(), a.R.CENTER, -1)),
                                u = null === i || void 0 === i ? void 0 : i.getParent();
                            e.doAction(s.e.updateNodeAttributes(u.getId(), {}))
                        }
                    }
                },
                R = function(e, t) {
                    var n, r = (0, l.nz)(e, o.r.RawText, {
                        rawText: t.rawText,
                        language: t.language
                    });
                    if (r) {
                        var i, u = r.getId(),
                            c = null !== (i = r.getConfig()) && void 0 !== i ? i : {};
                        return e.doAction(s.e.updateNodeAttributes(u, {
                            config: f(f({}, c), t)
                        })), void e.doAction(s.e.selectTab(r.getId()))
                    }
                    var d = (0, l.nz)(e, o.r.RawText),
                        p = d || (0, l.nz)(e, o.r.Code);
                    if (p) {
                        var m = e.doAction(s.e.addNode(f(f({}, (0, l.DX)(o.r.RawText)), {}, {
                            config: {
                                rawText: t.rawText,
                                language: t.language
                            }
                        }), p.getParent().getId(), a.R.CENTER, -1));
                        e.doAction(s.e.selectTab(m.getId())), v(e, o.r.RawText, null !== t && void 0 !== t ? t : {}), setTimeout((function() {
                            v(e, o.r.RawText, f({}, t))
                        }), 10), E(e, o.r.RawText, null !== (n = t.title) && void 0 !== n ? n : "")
                    }
                },
                C = function(e, t) {
                    var n = t.submissionId,
                        r = t.title,
                        i = (0, l.nz)(e, o.r.SubmissionPreview);
                    if (i) {
                        var a, u = i.getId(),
                            c = null !== (a = i.getConfig()) && void 0 !== a ? a : {};
                        return e.doAction(s.e.updateNodeAttributes(u, {
                            config: f(f({}, c), {}, {
                                submissionId: n
                            })
                        })), void e.doAction(s.e.selectTab(u))
                    }
                    var d = (0, l.nz)(e, o.r.Submissions);
                    if (d) {
                        var v = (0, l.s$)({
                            model: e,
                            defaultAnchorTabNode: d
                        });
                        e.doAction(s.e.addNode(f(f({}, (0, l.DX)(o.r.SubmissionPreview)), {}, {
                            config: {
                                submissionId: n
                            }
                        }), v.toNodeId, v.location, v.index)), E(e, o.r.SubmissionPreview, null !== r && void 0 !== r ? r : "Submission Preview")
                    }
                },
                Z = function(e, t) {
                    var n = (0, l.nz)(e, t);
                    if (n) {
                        var r = n._getAttr("id");
                        return document.getElementById(r.slice(1))
                    }
                }
        },
        20162: function(e, t, n) {
            n.d(t, {
                HX: function() {
                    return p
                },
                JJ: function() {
                    return h
                },
                J_: function() {
                    return b
                },
                KQ: function() {
                    return l
                },
                Lv: function() {
                    return d
                },
                RJ: function() {
                    return o
                },
                ZR: function() {
                    return v
                },
                hX: function() {
                    return m
                },
                m1: function() {
                    return c
                },
                r: function() {
                    return a
                },
                u3: function() {
                    return f
                }
            });
            var r, i, o, a, s = n(4676),
                u = n(30176),
                c = "QD_LAYOUT_JSON",
                l = "QD_LAYOUT_REALTIME_RESIZING",
                d = "QD_NEW_TAB_OPEN_OPTION";
            ! function(e) {
                e.AfterActiveTab = "afterActiveTab", e.AfterSimilarTab = "afterSimilarTab"
            }(o || (o = {})),
            function(e) {
                e.Description = "description", e.Editorial = "editorial", e.Solutions = "solutions", e.SolutionPost = "solution-post", e.Submissions = "submissions", e.SubmissionDetail = "submission-detail", e.Code = "code", e.Testcase = "testcase", e.Result = "result", e.Debugger = "debugger", e.Note = "note", e.Preview = "preview", e.PreviewConsole = "preview-console", e.RawText = "raw-text", e.PreviewCode = "preview-code", e.SubmissionPreview = "submission-preview"
            }(a || (a = {}));
            var f, v = (r = {}, (0, s.Z)(r, a.Description, {
                    icon: u.Oel,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.Editorial, {
                    icon: u.cnt,
                    className: "text-sd-yellow-500"
                }), (0, s.Z)(r, a.Solutions, {
                    icon: u.jZZ,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.SolutionPost, {
                    icon: u.jZZ,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.Submissions, {
                    icon: u.On6,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.SubmissionDetail, {
                    icon: u.On6,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.Code, {
                    icon: u.dT$,
                    className: "text-sd-green-500"
                }), (0, s.Z)(r, a.Testcase, {
                    icon: u.chG,
                    className: "text-sd-green-500"
                }), (0, s.Z)(r, a.Result, {
                    icon: u.Jw3,
                    className: "text-sd-green-500"
                }), (0, s.Z)(r, a.Debugger, {
                    icon: u.QLU,
                    className: "text-sd-brand-lc-orange"
                }), (0, s.Z)(r, a.Note, {
                    icon: u.Ykk,
                    className: "text-sd-yellow-500"
                }), (0, s.Z)(r, a.Preview, {
                    icon: u.Mdf,
                    className: "text-sd-green-500"
                }), (0, s.Z)(r, a.PreviewConsole, {
                    icon: u.dDU,
                    className: "text-sd-green-500"
                }), (0, s.Z)(r, a.RawText, {
                    icon: u.w49,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.PreviewCode, {
                    icon: u.w49,
                    className: "text-sd-blue-500"
                }), (0, s.Z)(r, a.SubmissionPreview, {
                    icon: u.On6,
                    className: "text-sd-blue-500"
                }), r),
                p = [a.Description, a.Editorial, a.Solutions, a.Submissions, a.Testcase, a.Code, a.Debugger, a.Result, a.Note],
                m = (i = {}, (0, s.Z)(i, a.Description, {}), (0, s.Z)(i, a.Editorial, {}), (0, s.Z)(i, a.Solutions, {}), (0, s.Z)(i, a.SolutionPost, {
                    enableClose: !0
                }), (0, s.Z)(i, a.Submissions, {}), (0, s.Z)(i, a.SubmissionDetail, {
                    enableClose: !0
                }), (0, s.Z)(i, a.Code, {
                    enableRenderOnDemand: !1
                }), (0, s.Z)(i, a.Testcase, {}), (0, s.Z)(i, a.Result, {}), (0, s.Z)(i, a.Debugger, {
                    enableClose: !0
                }), (0, s.Z)(i, a.Note, {
                    enableClose: !0
                }), (0, s.Z)(i, a.Preview, {
                    enableClose: !1
                }), (0, s.Z)(i, a.PreviewConsole, {
                    enableClose: !1
                }), (0, s.Z)(i, a.PreviewCode, {
                    enableClose: !1
                }), (0, s.Z)(i, a.RawText, {
                    enableClose: !0
                }), (0, s.Z)(i, a.SubmissionPreview, {
                    enableClose: !0
                }), i),
                b = "QD_LAYOUT_RUN_SUBMIT_POSITION_GUIDE",
                h = "QD_LAYOUT_RUN_SUBMIT_POSITION";
            ! function(e) {
                e.ToolBar = "toolBar", e.CodeEditor = "codeEditor"
            }(f || (f = {}))
        },
        36291: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return o
                }
            });
            var r = n(45203),
                i = n(94330),
                o = function() {
                    var e = (0, i.W)((function(e) {
                            return e.layoutRef
                        })),
                        t = (0, i.W)((function(e) {
                            return e.model
                        })),
                        n = (0, i.W)((function(e) {
                            return e.newTabOpenOption
                        }));
                    return e && t ? {
                        selectTab: function(e, n, i) {
                            return (0, r.x2)(t, e, n, i)
                        },
                        setTabConfig: function(e, n, i) {
                            return (0, r.$M)(t, e, n, i)
                        },
                        setTabCustomTitle: function(e, n, i) {
                            return (0, r.U1)(t, e, n, i)
                        },
                        openResultTab: function() {
                            return (0, r.JL)(t)
                        },
                        closeResultTab: function() {
                            return (0, r.Cc)(t)
                        },
                        openSubmissionDetailTab: function(e) {
                            return (0, r.dM)(t, e, n)
                        },
                        openSolutionPostTab: function(e) {
                            return (0, r.ZZ)(t, e, n)
                        },
                        openDebuggerTab: function() {
                            return (0, r.AT)(t)
                        },
                        closeDebuggerTab: function() {
                            return (0, r.Pn)(t)
                        },
                        cleanModelForProblemChange: function() {
                            return (0, r.wo)(t)
                        },
                        setTabDisabled: function(e, n) {
                            return (0, r.iT)(t, e, n)
                        },
                        reselectTab: function(e, n) {
                            return (0, r.eB)(t, e, n)
                        },
                        closeTab: function(e, n) {
                            return (0, r.on)(t, e, n)
                        },
                        openNoteTab: function() {
                            return (0, r.vY)(t)
                        },
                        openEditorialTab: function() {
                            return (0, r.Sf)(t)
                        },
                        openRawTextTab: function(e) {
                            return (0, r.GN)(t, e)
                        },
                        openSubmissionPreviewTab: function(e) {
                            return (0, r.AR)(t, e)
                        },
                        getTabContainerDom: function(e) {
                            return (0, r.At)(t, e)
                        },
                        openTestcaseTab: function() {
                            return (0, r.UI)(t)
                        },
                        openSubmissionDetailTabFromSubmit: function(e) {
                            return (0, r.zs)(t, e)
                        }
                    } : null
                }
        },
        94330: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return d
                }
            });
            var r = n(4676),
                i = (n(87621), n(51506), n(31628), n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(81757)),
                o = n(90226),
                a = n(20162);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = window.localStorage;
            var l = {
                    model: null,
                    layoutRef: null,
                    realtimeResize: !c || "false" !== localStorage.getItem(a.KQ),
                    newTabOpenOption: function() {
                        var e;
                        if (!c || !localStorage.getItem(a.Lv)) return a.RJ.AfterActiveTab;
                        var t = null !== (e = localStorage.getItem(a.Lv)) && void 0 !== e ? e : "";
                        return Object.values(a.RJ).includes(t) ? t : a.RJ.AfterActiveTab
                    }(),
                    runSubmitPosition: function() {
                        if (!c) return a.u3.ToolBar;
                        var e = localStorage.getItem(a.JJ);
                        return e && [a.u3.CodeEditor, a.u3.ToolBar].includes(e) ? e : a.u3.ToolBar
                    }(),
                    showRunSubmitPositionGuide: !!c && "false" !== localStorage.getItem(a.J_)
                },
                d = (0, i.Ue)((0, o.$e)(l, (function(e) {
                    return {
                        setModel: function(t) {
                            return e((function(e) {
                                return u(u({}, e), {}, {
                                    model: t
                                })
                            }))
                        },
                        setLayoutRef: function(t) {
                            return e((function(e) {
                                return u(u({}, e), {}, {
                                    layoutRef: t
                                })
                            }))
                        },
                        setRealtimeResize: function(t) {
                            return localStorage.setItem(a.KQ, JSON.stringify(t)), e((function(e) {
                                return u(u({}, e), {}, {
                                    realtimeResize: t
                                })
                            }))
                        },
                        setNewTabOpenOption: function(t) {
                            return localStorage.setItem(a.Lv, t), e((function(e) {
                                return u(u({}, e), {}, {
                                    newTabOpenOption: t
                                })
                            }))
                        },
                        setRunSubmitPosition: function(t) {
                            return localStorage.setItem(a.JJ, t), e((function(e) {
                                return u(u({}, e), {}, {
                                    runSubmitPosition: t,
                                    showRunSubmitPositionGuide: !1
                                })
                            }))
                        },
                        setRunSubmitPositionGuide: function(t) {
                            return localStorage.setItem(a.J_, JSON.stringify(t)), e((function(e) {
                                return u(u({}, e), {}, {
                                    showRunSubmitPositionGuide: t
                                })
                            }))
                        }
                    }
                })))
        },
        42419: function(e, t, n) {
            n.d(t, {
                DX: function() {
                    return b
                },
                eZ: function() {
                    return p
                },
                m: function() {
                    return m
                },
                nz: function() {
                    return d
                },
                s$: function() {
                    return v
                },
                tI: function() {
                    return h
                }
            });
            n(78464), n(29092), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = (n(39663), n(17519), n(70748), n(91518), n(7317)),
                o = n(52516),
                a = n(83093),
                s = n(99345),
                u = n(20162);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function(e, t, n) {
                    var r = null;
                    return e.visitNodes((function(e) {
                        if (e instanceof o.B && e.getComponent() === t) {
                            if (n) {
                                var a = e.getConfig();
                                if ("object" === typeof a && !(0, i.Z)(a, n)) return
                            }
                            r = e
                        }
                    })), r
                },
                f = function(e) {
                    var t = e.getParent(),
                        n = t.getChildren().indexOf(e);
                    return {
                        toNodeId: t.getId(),
                        location: a.R.CENTER,
                        index: n + 1
                    }
                },
                v = function(e) {
                    var t = e.model,
                        n = e.defaultAnchorTabNode,
                        r = e.option,
                        i = void 0 === r ? {
                            newTabOpenOption: u.RJ.AfterActiveTab,
                            usePrevActive: !0
                        } : r;
                    switch (i.newTabOpenOption) {
                        case u.RJ.AfterActiveTab:
                            var a = i.usePrevActive ? t.getPrevActiveTab() : t.getActiveTab();
                            return f(null !== a && void 0 !== a ? a : n);
                        case u.RJ.AfterSimilarTab:
                            var s = function(e, t) {
                                var n = null;
                                return e.visitNodes((function(e) {
                                    var r, i;
                                    e instanceof o.B && e.getComponent() === t && (!n || (null !== (r = e.getLastMovedTimestamp()) && void 0 !== r ? r : 0) >= (null !== (i = n.getLastMovedTimestamp()) && void 0 !== i ? i : 0)) && (n = e)
                                })), n
                            }(t, i.component);
                            return f(null !== s && void 0 !== s ? s : n)
                    }
                },
                p = function(e, t) {
                    var n, r;
                    if (t.type !== s.e.DELETE_TAB) return !1;
                    var i = null !== (n = null === (r = t.data) || void 0 === r ? void 0 : r.node) && void 0 !== n ? n : "",
                        a = e.getNodeById(i);
                    return !(!a || a.getType() !== o.B.TYPE) && a.getComponent() === u.r.Debugger
                },
                m = function e(t) {
                    var n = t.type,
                        r = t.children;
                    if ("row" === n) return l(l({}, t), {}, {
                        children: r.map(e),
                        id: void 0
                    });
                    var i = r.filter((function(e) {
                            return e.component && -1 !== u.HX.indexOf(e.component)
                        })).map((function(e) {
                            var t;
                            return l(l({}, e), {}, {
                                id: void 0,
                                name: void 0
                            }, null !== (t = u.hX[e.component]) && void 0 !== t ? t : {})
                        })),
                        o = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = t.findIndex((function(e) {
                                    return e.component === u.r.Testcase
                                }));
                            return -1 !== n ? n : Math.min(null !== e && void 0 !== e ? e : 0, t.length - 1)
                        }(t.selected, i);
                    return l(l({}, t), {}, {
                        children: i,
                        selected: o,
                        id: void 0,
                        maximized: void 0
                    })
                },
                b = function(e) {
                    return l({
                        type: "tab",
                        component: e
                    }, u.hX[e])
                },
                h = function(e) {
                    return {
                        borders: [],
                        global: {
                            splitterSize: 8,
                            splitterExtra: 0,
                            tabEnableClose: !1,
                            tabEnableRename: !1,
                            tabSetMinWidth: 36,
                            tabSetMinHeight: 36,
                            tabDragSpeed: .2
                        },
                        layout: m(e)
                    }
                }
        },
        86857: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return f
                }
            });
            var r = n(59679),
                i = (n(66128), n(11270), n(64386)),
                o = n(44872),
                a = n(98685),
                s = n(83815),
                u = n(94194),
                c = n(17810),
                l = '<!DOCTYPE html> <html lang="en"> <head> <title></title> <style>html{width:100%;height:100%;background-color:#fff}.error-message{padding:20px 0}.error-message code{font-size:1.5rem;font-weight:600}.error-message pre{white-space:pre-wrap;color:#f8615c;font-size:1rem}</style> <script src="https://unpkg.com/@babel/standalone@7.22.10/babel.min.js" integrity="sha384-j3hJyLAMgziKcMrSEvioQYE+y3XwwEqRtgJXJHaZq42wD9qbFIjRI/wm/fRH0mU3" crossorigin="anonymous"><\/script> <script src="https://unpkg.com/react@18.2.0/umd/react.development.js" integrity="sha384-0HL/VWVbwweJfp0saUL50fXRuSABCdVeinTBoJCDXprLkJ49VI0QMWNGMRt8ebnT" crossorigin="anonymous"><\/script> <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js" integrity="sha384-79Od0yhavbvtuP2nWl+Y6mwgs8AlknSIikYSw0+uOc65GTyH8SW7e2hCyCB303Y2" crossorigin="anonymous"><\/script> <script src="#CONSOLE_FEED_URL"><\/script> <script>Babel.registerPlugin("prevent-infinite-loops",preventInfiniteLoops);const ITERATIONS_LIMIT=10001;function preventInfiniteLoops({types:e,template:t}){const n=t("\\n          if (IDX++ > ITERATIONS_LIMIT) {\\n            if (!window.infiniteLoopError) {\\n              window.infiniteLoopError = new RangeError(\\n                \'Potential infinite loop detected, exceeded \' + ITERATIONS_LIMIT + \' iterations.\'\\n              );\\n            }\\n            throw window.infiniteLoopError;\\n          }\\n        ");return{visitor:{"WhileStatement|DoWhileStatement|ForStatement":(t,i)=>{const o=t.scope.parent.generateUidIdentifier("loopIt"),r=e.numericLiteral(0);t.scope.parent.push({id:o,init:r});const I=n({IDX:o,ITERATIONS_LIMIT:e.numericLiteral(ITERATIONS_LIMIT)});if(t.get("body").isBlockStatement())t.get("body").unshiftContainer("body",I);else{const n=t.get("body").node;t.get("body").replaceWith(e.blockStatement([I,n]))}}}}}<\/script> <script>Babel.registerPlugin("transform-import-export-to-global",transformImportExportToGlobalPlugin);const IMPORT_IDENFIFIER_MAP={react:"React","react-dom":"ReactDOM"};function transformImport(r,t,e,o,a){const n=e.filter((r=>"ImportDefaultSpecifier"!==r.type)).map((r=>{const t=r.imported.name;return o.objectProperty(o.identifier(t),o.identifier(t),!1,!0)})),i=o.variableDeclaration("const",[o.variableDeclarator(o.objectPattern(n),o.identifier(t))]);a.replaceWith(i)}function transformImportExportToGlobalPlugin({types:r}){return{visitor:{ImportDeclaration(t){const{node:e}=t,o=e.source.value,a=e.specifiers;if(!IMPORT_IDENFIFIER_MAP[o])throw new Error(`Imports from "${o}" are not allowed`);a.length>0&&transformImport(o,IMPORT_IDENFIFIER_MAP[o],a,r,t)},ExportNamedDeclaration(r){const{node:t}=r,e=t.declaration;e?r.replaceWith(e):r.remove()},ExportDefaultDeclaration(r){r.remove()}}}}<\/script> <script>(()=>{const e={};function n(){const e=document.getElementById("root");e&&e.remove();const n=document.createElement("div");return n.id="root",document.body.appendChild(n),n}window.mountReact=function(e){const o=n(),t=ReactDOM.createRoot(o);return t.render(React.createElement(e,{})),()=>{t.unmount()}},e.react={babelOptions:{presets:["react"],plugins:["transform-import-export-to-global","prevent-infinite-loops"]},mountFnName:"mountReact"},window.mountVanillajs=function(e){const o=n(),t=e();return o.appendChild(t),()=>null},e.vanillajs={babelOptions:{plugins:["transform-import-export-to-global","prevent-infinite-loops"]},mountFnName:"mountVanillajs"};const o="#PARENT_ORIGIN";function t(e,n={}){window.parent.postMessage({type:e,...n},o)}window.__registeredEvents=[],window.__protectedEvents=[[window,"message"]];const r=EventTarget.prototype.addEventListener;function i(){window.__unmount&&"function"==typeof window.__unmount&&window.__unmount(),window.__unmount=null,window.__registeredEvents.forEach((([e,n,o])=>{e.removeEventListener(n,o)})),window.__registeredEvents=[]}EventTarget.prototype.addEventListener=function(e,n,o){var t,i;t=this,i=e,window.__protectedEvents.some((([e,n])=>e===t&&n===i))||window.__registeredEvents.push([this,e,n]),r.call(this,e,n,o)},window.unmountCurrentSolution=i,Hook(window.console,(async e=>{t("console",{log:e})})),window.addEventListener("message",(function(n){if(n.origin!==o)return;switch(n.data&&n.data.type){case"eval":!function(e){if("string"!=typeof e)throw new Error("Invalid console command");let n=null,o=!1;try{if(e.startsWith("{"))try{const n=`(${e})`;new Function(n),e=n}catch(e){}n=(0,eval)(e)}catch(e){n=e,o=!0}const r=Parse(o?"error":"log",[n]);t("eval-result",{result:Encode(r)})}(n.data.command);break;case"render-solution":{const{framework:o,solutionCode:t,previewCode:r}=n.data;!function(n,o,t){if(!o)throw new Error("Solution code is missing");if(!t)throw new Error("Preview code is missing");const r=e[n];if(!r)throw new Error(`Framework "${n}" is not supported`);const i=r.babelOptions,s="window.unmountCurrentSolution();",d=`window.__unmount = window.${r.mountFnName}(App);`,a=[s,Babel.transform(o,i).code,Babel.transform(t,i).code,d].join("\\n\\n");(0,eval)(a)}(o,t,r);break}case"stream-preview-height":window.__resizeObserver||(window.__resizeObserver=new ResizeObserver((()=>{t("preview-height",{height:document.documentElement.scrollHeight})})),window.__resizeObserver.observe(document.documentElement));break;case"stop-streaming-preview-height":window.__resizeObserver&&(window.__resizeObserver.disconnect(),window.__resizeObserver=void 0)}})),window.onerror=function(e,o,t,r,s){console.error(e),i();const d=n();return d.innerHTML=\'<div class="error-message">\\n          <div><code>Something went wrong.</code></div>\\n          <div><pre></pre><div>\\n        </div>\',d.querySelector("pre").textContent=e,!0}})()<\/script> </head> <body></body> </html> ',
                d = n(11754),
                f = (0, i.memo)((function(e) {
                    var t = e.framework,
                        n = e.solutionCode,
                        f = e.previewCode,
                        p = e.onSolutionRender,
                        m = e.setIframe,
                        b = e.className,
                        h = (0, i.useState)(null),
                        g = h[0],
                        y = h[1],
                        _ = (0, i.useMemo)((function() {
                            return l.replace("#CONSOLE_FEED_URL", s.xf).replace("#PARENT_ORIGIN", (0, u.hr)())
                        }), []);
                    (0, i.useEffect)((function() {
                        return function() {
                            m && m(null)
                        }
                    }), [m]);
                    var w = (0, i.useRef)(!1),
                        O = (0, i.useRef)(!1),
                        T = (0, i.useRef)({
                            framework: void 0,
                            solutionCode: void 0,
                            previewCode: void 0
                        }),
                        x = v(n, 1e3),
                        E = (0, r.Z)(x, 2),
                        j = E[0],
                        P = E[1],
                        N = v(f, 1e3),
                        D = (0, r.Z)(N, 2),
                        k = D[0],
                        I = D[1];
                    t !== T.current.framework && (w.current = !1, O.current = !1, T.current.framework = t, T.current.solutionCode = j, T.current.previewCode = k);
                    var A = null === g || void 0 === g ? void 0 : g.contentWindow;
                    return (0, i.useEffect)((function() {
                        var e = w.current && void 0 !== j,
                            n = O.current && void 0 !== k;
                        e && n && t && ((0, c.b)(A, "render-solution", {
                            framework: t,
                            solutionCode: j,
                            previewCode: k
                        }), p && p(t, j, k))
                    }), [k, j, t, A, p]), (0, i.useEffect)((function() {
                        w.current && O.current || (void 0 !== n && n !== T.current.solutionCode && (T.current.solutionCode = n, P(n), w.current = !0), void 0 !== f && f !== T.current.previewCode && (T.current.previewCode = f, I(f), O.current = !0))
                    }), [n, P, f, I]), (0, d.jsx)("iframe", {
                        className: (0, o.yI)(a.nx.bgFixedWhite, "h-full w-full !min-w-[auto] border-0", b),
                        onLoad: function(e) {
                            y(e.currentTarget), m && m(e.currentTarget)
                        },
                        srcDoc: _,
                        sandbox: "allow-scripts allow-forms"
                    })
                }));

            function v(e, t) {
                var n = (0, i.useRef)(!0),
                    r = (0, i.useState)(),
                    o = r[0],
                    a = r[1];
                return (0, i.useEffect)((function() {
                    n.current && (n.current = !1, a(e));
                    var r = setTimeout((function() {
                        return a(e)
                    }), t);
                    return function() {
                        return clearTimeout(r)
                    }
                }), [e, t]), [o, a]
            }
        },
        43660: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return j
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                i = n(7831),
                o = n(64386),
                a = n(79216),
                s = n(72102),
                u = n(98685),
                c = n(44872),
                l = n(73845),
                d = n(11754);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = o.forwardRef((function(e, t) {
                return (0, d.jsx)("svg", v(v({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, d.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M16 20l-8-8 8-8"
                    })
                }))
            }));

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = o.forwardRef((function(e, t) {
                    return (0, d.jsx)("svg", b(b({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, d.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M20.822 15a9.604 9.604 0 01-9.122 6.6A9.6 9.6 0 1119.329 6.17m.687 1.029a9.62 9.62 0 00-.687-1.029m0 0L17.1 8.4h4.8V3.6L19.329 6.17zM19.5 8L21 6"
                        })
                    }))
                })),
                g = n(77342),
                y = n(18805),
                _ = n(46239),
                w = n(79927),
                O = ["children", "className", "tooltip"];

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var E = function(e) {
                    var t = e.children,
                        n = e.className,
                        r = e.tooltip,
                        o = (0, i.Z)(e, O);
                    return (0, d.jsx)(s.u, {
                        label: r,
                        isDisabled: o.disabled,
                        children: (0, d.jsx)("button", x(x({
                            className: (0, c.yI)(u.nx.labelTextSecondary, u.rG.bgFillSecondary, "flex h-6 w-6 shrink-0 items-center justify-center rounded", {
                                "opacity-40": o.disabled
                            }, n)
                        }, o), {}, {
                            children: t
                        }))
                    })
                },
                j = function(e) {
                    var t, n = e.url,
                        i = e.onRefresh,
                        f = e.canOpenInNewTab,
                        v = e.className,
                        m = (0, a.$G)("problems", {
                            keyPrefix: "preview"
                        }).t,
                        b = (0, l.E)(),
                        O = (0, _.v)((function(e) {
                            return e.questionSlug
                        })),
                        T = (0, o.useMemo)((function() {
                            return b ? n : location.href
                        }), [b, n]),
                        x = (0, o.useRef)(null),
                        j = !!x.current && x.current.offsetWidth < x.current.scrollWidth;
                    return (0, d.jsxs)("div", {
                        className: (0, c.yI)("flex h-8 min-h-[32px] w-full items-center p-1", v),
                        children: [(0, d.jsx)(E, {
                            disabled: !0,
                            tooltip: m("goBackTooltip"),
                            children: (0, d.jsx)(p, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, d.jsx)(E, {
                            disabled: !0,
                            tooltip: m("goForwardTooltip"),
                            children: (0, d.jsx)(p, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 -scale-x-100 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, d.jsx)(E, {
                            onClick: i,
                            tooltip: m("refreshTooltip"),
                            children: (0, d.jsx)(h, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 -scale-x-100 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        }), (0, d.jsx)(s.u, {
                            label: b ? T : m("upgradeToGetUrl"),
                            placement: "top",
                            isDisabled: !!b && !j,
                            children: (0, d.jsxs)("div", {
                                ref: x,
                                className: (0, c.yI)(u.nx.bgFillTertiary, u.rG.bgFillPrimary, (t = {}, (0, r.Z)(t, u.nx.labelTextSecondary, !b), (0, r.Z)(t, "flex items-center gap-1", !b), (0, r.Z)(t, u.nx.labelTextPrimary, b), t), "relative mx-1 w-full rounded px-2 py-0.5 text-sm", "overflow-hidden text-ellipsis whitespace-nowrap"),
                                children: [!b && (0, d.jsx)("div", {
                                    className: (0, c.yI)("absolute left-0 top-0 h-full w-full", "bg-gradient-to-l via-40%", "from-[#E7E7E7] via-[#E7E7E7] to-[#E7E7E7]/20", "dark:from-[#373737] dark:via-[#373737] dark:to-[#373737]/20")
                                }), !b && (0, d.jsx)(g.A, {
                                    className: (0, c.yI)("h-3 w-3 shrink-0")
                                }), T]
                            })
                        }), f && b && (0, d.jsx)(E, {
                            tooltip: m("openInNewTabTooltip"),
                            onClick: function() {
                                window.open(T, "_blank"), w.d.qdQdLivePreviewOpenNewTabClick({
                                    qd_question_slug: O
                                })
                            },
                            children: (0, d.jsx)(y.L, {
                                className: "inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current [&>path]:stroke-[2px]"
                            })
                        })]
                    })
                }
        },
        78152: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return a
                }
            });
            var r = n(44872),
                i = n(97840),
                o = n(11754),
                a = function(e) {
                    var t = e.className,
                        n = e.alt,
                        a = (0, i.G)() ? "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/logo-cn-dark-9543443b4c28d3bd9057151b2527cc76.svg" : "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/logo-cn-light-b71029650e8cc83547a07d08db836272.svg";
                    return (0, o.jsx)("img", {
                        className: (0, r.yI)("h-8", t),
                        src: a,
                        alt: null !== n && void 0 !== n ? n : ""
                    })
                }
        },
        30665: function(e, t, n) {
            n.d(t, {
                Hb: function() {
                    return s
                }
            });
            n(66128), n(94546), n(91518), n(72793), n(37872), n(29308), n(27115), n(15084), n(2979);
            var r = n(8740),
                i = n(83815),
                o = "https://github.com/LeetCode-Feedback/LeetCode-Feedback",
                a = function() {
                    return location.pathname + location.search + location.hash
                },
                s = {
                    notFound: function() {
                        return "/404/"
                    },
                    internal: {
                        dbTestcase: function() {
                            return "/internal/db-testcase/"
                        }
                    },
                    library: function() {
                        return "/library"
                    },
                    internalContest: function() {
                        return "/contest/dashboard/internal-contest"
                    },
                    contestDashboard: function() {
                        return "/contest/dashboard"
                    },
                    contestAdmin: function() {
                        return "/contest/admin"
                    },
                    emailBatch: function() {
                        return "/email_batch/"
                    },
                    contestDetail: function(e) {
                        return "/contest/".concat(e)
                    },
                    contestSponsor: function() {
                        return "/business/contact/"
                    },
                    contributeDashboard: function() {
                        return "/contribute/dashboard"
                    },
                    adminBackend: function() {
                        return "/mystic/pluto"
                    },
                    otpManager: function() {
                        return "/mystic/charon/otp"
                    },
                    review: function() {
                        return "/manage"
                    },
                    dangerZone: function() {
                        return "/danger_zone"
                    },
                    signIn: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = (0, r.stringify)({
                                next: e || a()
                            });
                        return "/accounts/login/?".concat(t)
                    },
                    register: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = (0, r.stringify)({
                                next: e || a()
                            });
                        return "/accounts/signup/?".concat(t)
                    },
                    profile: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Oo;
                        return "".concat(t ? "" : "/u", "/").concat(e)
                    },
                    profileWithBadgeModal: function(e, t) {
                        return "/u/".concat(e, "/?medal=").concat(t)
                    },
                    USRankingCNProfile: function(e) {
                        return "https://leetcode.cn/u/".concat(e)
                    },
                    logOut: function() {
                        return "/accounts/logout"
                    },
                    newPlayground: function(e) {
                        return "/playground/new/".concat(e)
                    },
                    problemList: function(e) {
                        return "/problem-list/".concat(e)
                    },
                    problemset: function(e) {
                        return "/problemset/".concat(e)
                    },
                    problemsetList: function(e) {
                        return "/problem-list/".concat(e)
                    },
                    questionDetail: function(e) {
                        return "/problems/".concat(e, "/")
                    },
                    questionDetailWithLearningEnvironment: function(e, t) {
                        return "/problems/".concat(e).concat(t ? "?".concat(t) : "")
                    },
                    questionDetailWithTab: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "description";
                        return "/problems/".concat(e, "/").concat(t)
                    },
                    solutions: function(e, t, n, r) {
                        return "/problems/".concat(e, "/solutions").concat(t ? "/".concat(t) : "").concat(n ? "/".concat(n).concat(r ? "/comments/".concat(r) : "") : "")
                    },
                    discussion: function(e, t) {
                        return "/problems/".concat(e, "/discussion").concat(t ? "/comments/".concat(t) : "")
                    },
                    solutionEditor: function(e, t, n, r) {
                        return "/problems/".concat(e, "/post-solution").concat(n ? "/".concat(n) : "").concat(r ? "?submissionId=".concat(r) : "")
                    },
                    submissionOverview: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return "/problems/".concat(e, "/submissions/").concat(t).concat(location.search)
                    },
                    questionSolution: function(e) {
                        return "/problems/".concat(e, "/solution")
                    },
                    questionSolutionPreview: function(e) {
                        return "/problems/".concat(e, "/solution-preview")
                    },
                    questionSubmissionPreview: function(e, t) {
                        return "/problems/".concat(e, "/submission-preview/").concat(t)
                    },
                    randomOneQuestion: function() {
                        return "/problems/random-one-question/"
                    },
                    premium: function() {
                        return "/premium/"
                    },
                    premiumDetail: function(e) {
                        return e ? "/premium-detail/?".concat((t = e, new URLSearchParams("string" === typeof t ? {
                            source: t
                        } : t).toString())) : "/premium-detail/";
                        var t
                    },
                    subscription: function() {
                        return "/premium/subscription/"
                    },
                    subscriptionSuccess: function() {
                        return "/premium/subscription/success/"
                    },
                    eduAuth: function() {
                        return "/premium/edu-auth/"
                    },
                    studyPlan: function() {
                        return "/study-plan"
                    },
                    studyPlanV2: "/studyplan",
                    studyPlanV2MyPlan: "/studyplan/my-plan",
                    studyPlanV2Detail: function(e) {
                        return "/studyplan/".concat(e)
                    },
                    studyPlanV2HistoryDetail: function(e, t) {
                        return "/studyplan/".concat(e, "?historyId=").concat(t)
                    },
                    profileHome: function() {
                        return "/profile/info/"
                    },
                    profileResume: function() {
                        return "/profile/resume/"
                    },
                    profilePreview: function() {
                        return "/profile/preview-resume/"
                    },
                    chat: function() {
                        return "/chat/"
                    },
                    account: function() {
                        return "/profile/account/"
                    },
                    order: function(e) {
                        return "/premium/order/".concat(e, "/")
                    },
                    premiumPaymentSuccess: function() {
                        return "/premium/success"
                    },
                    premiumSurvey: function() {
                        return "/premium/survey/"
                    },
                    orderList: function() {
                        return "/order/"
                    },
                    serviceAgreement: function() {
                        return "/agreement/"
                    },
                    subscriptionAgreement: function() {
                        return "/subscription-agreement/"
                    },
                    store: function() {
                        return "/store/"
                    },
                    submissionDetail: function(e) {
                        return "/submissions/detail/".concat(e, "/")
                    },
                    home: function() {
                        return "/"
                    },
                    onboarding: function() {
                        return "/onboarding/start/"
                    },
                    company: function(e) {
                        return "/company/".concat(e, "/problemset")
                    },
                    companyTag: function(e) {
                        return "/company/".concat(e)
                    },
                    discussDetail: function(e) {
                        return "/circle/discuss/".concat(e, "/")
                    },
                    articleDetail: function(e) {
                        return "/circle/article/".concat(e, "/")
                    },
                    leetbookDetail: function(e) {
                        return "/leetbook/detail/".concat(e, "/")
                    },
                    globalRankings: function() {
                        return "/contest/globalranking"
                    },
                    feedback: function() {
                        return "".concat(o, "/issues/")
                    },
                    communityRules: function() {
                        return "/discuss/general-discussion/324861/LeetCode-Community-Rules"
                    },
                    contributeTestcase: function(e) {
                        return "".concat(o, "/issues/new?assignees=&labels=&template=bug-report--english-.md&title=").concat(e)
                    },
                    topicTag: function(e) {
                        return "/tag/".concat(e, "/")
                    },
                    favoriteList: function() {
                        return "/list/"
                    },
                    uploadImage: function() {
                        return "/storage/upload/image"
                    },
                    markdownGuide: function() {
                        return "https://leetcode.cn/circle/discuss/hipGkf/"
                    },
                    supportLink: function() {
                        return "https://support.leetcode.com/hc/en-us/requests/new"
                    }
                }
        },
        17810: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return a
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null === e || void 0 === e || e.postMessage(o({
                    type: t
                }, n), "*")
            }
        },
        13295: function(e, t) {
            t.Z = "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
        },
        20337: function(e, t) {
            t.Z = "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png"
        }
    }
]);