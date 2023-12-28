"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9289], {
        69163: function(e, t, n) {
            n.d(t, {
                EC: function() {
                    return l
                },
                fn: function() {
                    return _
                },
                qN: function() {
                    return u
                }
            });
            var i = n(4676),
                a = (n(37872), n(86003), n(91518), n(29308), n(27115), n(78464), n(29092), n(70748), n(96543), n(62217), n(63306), n(77738)),
                o = n(83815);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = new Map,
                _ = function(e) {
                    (0, a.o)("https://analysis.".concat(o.TQ ? "lingkou.xyz" : "leetcode.cn", "/i/event"), {
                        method: "POST",
                        headers: {
                            "x-timezone": o.aB
                        },
                        data: r(r({}, e), {}, {
                            referer: document.referrer,
                            href: window.location.href
                        }),
                        withCredentials: !0
                    })
                },
                l = function() {
                    return Math.floor(Math.random() * Math.pow(10, 6))
                },
                u = function(e, t) {
                    void 0 === d.get(e) && (_({
                        ename: 10,
                        tid: t
                    }), d.set(e, !0))
                }
        },
        87651: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return r
                }
            });
            var i = n(64386),
                a = n(85165),
                o = n.n(a),
                c = n(34573);

            function r(e, t) {
                var n = (0, i.useState)(!1),
                    a = n[0],
                    r = n[1],
                    d = t && t.successDuration;
                return (0, i.useEffect)((function() {
                    if (a && d) {
                        var e = setTimeout((function() {
                            r(!1)
                        }), d);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [a, d]), [a, function() {
                    var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                        a = i || e;
                    a.length >= 80 && (a += (0, c.Ou)(null !== (n = null === t || void 0 === t ? void 0 : t.copyright) && void 0 !== n ? n : null));
                    var d = o()(a);
                    r(d)
                }]
            }
        },
        34573: function(e, t, n) {
            n.d(t, {
                Of: function() {
                    return l
                },
                Ou: function() {
                    return r
                },
                d1: function() {
                    return u
                },
                yT: function() {
                    return _
                }
            });
            n(5348), n(73384), n(91518), n(72793);
            var i = n(61880),
                a = n(64386),
                o = n(83815),
                c = n(11754),
                r = function(e) {
                    return e ? "\n\n" + (0, i.Z)([(null === e || void 0 === e ? void 0 : e.author) && "\u4f5c\u8005\uff1a".concat(e.author), (null === e || void 0 === e ? void 0 : e.link) && "\u94fe\u63a5\uff1a".concat(e.link), "\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09", "\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"]).join("\n") : ""
                },
                d = (0, a.createContext)(null),
                _ = function(e) {
                    var t = e.value,
                        n = e.children;
                    return (0, c.jsx)(d.Provider, {
                        value: t,
                        children: n
                    })
                },
                l = function() {
                    return (0, a.useContext)(d)
                },
                u = function(e) {
                    return (0, a.useCallback)((function(t) {
                        if (t.clipboardData && o.ob) {
                            var n, i, a = null !== (n = null === (i = getSelection()) || void 0 === i ? void 0 : i.toString()) && void 0 !== n ? n : "";
                            a.length >= 80 && (t.clipboardData.setData("text/plain", a + r(e)), t.preventDefault())
                        }
                    }), [e])
                }
        },
        46239: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return _
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var i = n(4676),
                a = n(81757),
                o = n(90226),
                c = n(69163);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = (0, a.Ue)((0, o.$e)({
                questionId: "",
                questionSlug: "",
                todayRecord: [],
                satisfactionSurveyIsOpen: !1,
                randomEId: (0, c.EC)(),
                leftPanelDom: null,
                rightPanelDom: null
            }, (function(e) {
                return {
                    setQuestionSlug: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                questionSlug: t
                            })
                        }))
                    },
                    setQuestionId: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                questionId: t
                            })
                        }))
                    },
                    setTodayRecord: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                todayRecord: t
                            })
                        }))
                    },
                    setSatisfactionSurveyIsOpen: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                satisfactionSurveyIsOpen: t
                            })
                        }))
                    },
                    updateRandomEId: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                randomEId: t
                            })
                        }))
                    },
                    setLeftPanelDom: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                leftPanelDom: t
                            })
                        }))
                    },
                    setRightPanelDom: function(t) {
                        return e((function(e) {
                            return d(d({}, e), {}, {
                                rightPanelDom: t
                            })
                        }))
                    }
                }
            })))
        },
        77738: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var i = n(4676),
                a = n(90921),
                o = n.n(a),
                c = n(46953),
                r = n(4499);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                var n = c.Z.get("__appToken__");
                return o()(e, _({
                    headers: _(_({
                        "content-type": "application/json"
                    }, n ? {
                        Authorization: "Bearer ".concat(n)
                    } : {}), t && t.headers),
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: "X-CSRFToken"
                }, t && (0, r.Z)(t, "headers")))
            }
        },
        86209: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return d
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var i = n(4676),
                a = n(64386),
                o = n(11754);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = a.forwardRef((function(e, t) {
                return (0, o.jsx)("svg", r(r({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        82833: function(e, t, n) {
            n.d(t, {
                J2: function() {
                    return f
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var i = n(59679),
                a = n(4676),
                o = n(7831),
                c = n(64386),
                r = n(53268),
                d = n(44872),
                _ = n(11754),
                l = ["className", "align", "sideOffset", "collisionPadding"],
                u = ["defaultOpen", "open", "onOpenChange", "modal", "children", "content", "trigger", "openDelay", "closeDelay"];

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var X = r.fC,
                O = r.xz,
                k = c.forwardRef((function(e, t) {
                    var n = e.className,
                        i = e.align,
                        a = void 0 === i ? "center" : i,
                        c = e.sideOffset,
                        u = void 0 === c ? 8 : c,
                        V = e.collisionPadding,
                        X = void 0 === V ? 8 : V,
                        O = (0, o.Z)(e, l);
                    return (0, _.jsx)(r.h_, {
                        children: (0, _.jsx)(r.VY, s({
                            ref: t,
                            align: a,
                            sideOffset: u,
                            collisionPadding: X,
                            className: (0, d.yI)("bg-sd-popover text-sd-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-sd-md shadow-sd-md border-sd-border z-modal border p-4 outline-none", n)
                        }, O))
                    })
                }));
            k.displayName = r.VY.displayName;
            var f = function(e) {
                var t = e.defaultOpen,
                    n = e.open,
                    a = e.onOpenChange,
                    r = e.modal,
                    d = e.children,
                    l = e.content,
                    V = e.trigger,
                    f = void 0 === V ? "click" : V,
                    S = e.openDelay,
                    C = void 0 === S ? 100 : S,
                    E = e.closeDelay,
                    p = void 0 === E ? 300 : E,
                    q = (0, o.Z)(e, u),
                    v = c.useState(null),
                    L = (0, i.Z)(v, 2),
                    G = L[0],
                    y = L[1],
                    m = c.useState(null),
                    D = (0, i.Z)(m, 2),
                    b = D[0],
                    h = D[1],
                    N = c.useCallback((function() {
                        b && clearTimeout(b);
                        var e = setTimeout((function() {
                            return null === a || void 0 === a ? void 0 : a(!0)
                        }), C);
                        y(e)
                    }), [b, a, C]),
                    I = c.useCallback((function() {
                        G && clearTimeout(G);
                        var e = setTimeout((function() {
                            return null === a || void 0 === a ? void 0 : a(!1)
                        }), p);
                        h(e)
                    }), [G, a, p]),
                    g = c.useCallback((function(e) {
                        return e.preventDefault()
                    }), []);
                c.useEffect((function() {
                    return function() {
                        G && clearTimeout(G), b && clearTimeout(b)
                    }
                }), [G, b]);
                var A = c.useMemo((function() {
                    return "hover" === f ? {
                        onMouseEnter: N,
                        onMouseLeave: I,
                        onClick: g
                    } : {}
                }), [N, I, g, f]);
                return (0, _.jsxs)(X, {
                    defaultOpen: t,
                    open: n,
                    onOpenChange: a,
                    modal: r,
                    children: [(0, _.jsx)(O, s(s({
                        asChild: !0
                    }, A), {}, {
                        children: d
                    })), (0, _.jsx)(k, s(s(s({}, q), A), {}, {
                        children: l
                    }))]
                })
            }
        },
        72102: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return E
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var i = n(4676),
                a = n(7831),
                o = n(64386),
                c = n(58774),
                r = n(44872),
                d = n(11754),
                _ = ["className", "sideOffset", "collisionPadding", "hasBorder", "children"],
                l = ["className", "hasBorder"],
                u = ["defaultOpen", "open", "onOpenChange", "delayDuration", "disableHoverableContent", "children", "label", "hasBorder", "hasArrow", "arrowClassName", "placement", "isDisabled"];

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var X = c.zt,
                O = c.fC,
                k = c.h_,
                f = c.xz,
                S = o.forwardRef((function(e, t) {
                    var n = e.className,
                        i = e.sideOffset,
                        o = void 0 === i ? 6 : i,
                        l = e.collisionPadding,
                        u = void 0 === l ? 8 : l,
                        V = e.hasBorder,
                        X = e.children,
                        O = (0, a.Z)(e, _);
                    return (0, d.jsx)(c.VY, s(s({
                        ref: t,
                        sideOffset: o,
                        collisionPadding: u,
                        className: (0, r.yI)("bg-sd-popover text-sd-popover-foreground shadow-sd rounded-sd-md z-modal text-xs", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", "data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", "max-w-[300px]", {
                            "border-sd-border border": V
                        }, n)
                    }, O), {}, {
                        children: (0, d.jsx)("div", {
                            className: "rounded-sd-md relative px-3 py-1.5",
                            children: X
                        })
                    }))
                }));
            S.displayName = c.VY.displayName;
            var C = o.forwardRef((function(e, t) {
                var n = e.className,
                    i = e.hasBorder,
                    o = (0, a.Z)(e, l);
                return (0, d.jsx)(c.Eh, s(s({
                    ref: t,
                    asChild: !0
                }, o), {}, {
                    children: (0, d.jsx)("div", {
                        className: (0, r.yI)("absolute h-2 w-4 -translate-x-1/2 overflow-hidden", n),
                        children: (0, d.jsx)("div", {
                            className: (0, r.yI)("bg-sd-popover shadow-sd absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-br-[1px]", {
                                "border-sd-border border": i
                            })
                        })
                    })
                }))
            }));
            C.displayName = c.Eh.displayName;
            var E = function(e) {
                var t, n = e.defaultOpen,
                    i = e.open,
                    o = e.onOpenChange,
                    c = e.delayDuration,
                    r = void 0 === c ? 100 : c,
                    _ = e.disableHoverableContent,
                    l = void 0 === _ || _,
                    V = e.children,
                    E = e.label,
                    p = e.hasBorder,
                    q = void 0 === p || p,
                    v = e.hasArrow,
                    L = e.arrowClassName,
                    G = e.placement,
                    y = void 0 === G ? "bottom" : G,
                    m = e.isDisabled,
                    D = (0, a.Z)(e, u),
                    b = y.split("-")[0],
                    h = null !== (t = y.split("-")[1]) && void 0 !== t ? t : "center";
                return m || !E ? (0, d.jsx)(d.Fragment, {
                    children: V
                }) : (0, d.jsx)(X, {
                    children: (0, d.jsxs)(O, {
                        defaultOpen: n,
                        open: i,
                        onOpenChange: o,
                        delayDuration: r,
                        disableHoverableContent: l,
                        children: [(0, d.jsx)(f, {
                            asChild: !0,
                            children: V
                        }), (0, d.jsx)(k, {
                            children: (0, d.jsxs)(S, s(s({
                                side: b,
                                align: h,
                                hasBorder: q
                            }, D), {}, {
                                children: [E, v && (0, d.jsx)(C, {
                                    className: L,
                                    hasBorder: q
                                })]
                            }))
                        })]
                    })
                })
            }
        },
        82424: function(e, t, n) {
            n.d(t, {
                DU: function() {
                    return a
                },
                Lw: function() {
                    return o
                },
                dR: function() {
                    return c
                }
            });
            var i = n(59787),
                a = function(e) {
                    return e.userSlug
                },
                o = function(e) {
                    return i.Hb.profile(e, !1)
                },
                c = function(e) {
                    return {
                        topicSlug: e
                    }
                }
        },
        79927: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var i = n(77527),
                a = n(27654),
                o = {
                    qdPageExposure: function(e) {
                        var t = {
                            key: "qd_page_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdListClick: function(e) {
                        var t = {
                            key: "qd_list_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPrevQuestionClick: function(e) {
                        var t = {
                            key: "qd_prev_question_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdNextQuestionClick: function(e) {
                        var t = {
                            key: "qd_next_question_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRandomQuestionClick: function(e) {
                        var t = {
                            key: "qd_random_question_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdOpenPanelClick: function(e) {
                        var t = {
                            key: "qd_qd_open_panel_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDrawerQuestionClick: function(e) {
                        var t = {
                            key: "qd_drawer_question_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdShowTagsClick: function(e) {
                        var t = {
                            key: "qd_show_tags_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdShowTimeClick: function(e) {
                        var t = {
                            key: "qd_show_time_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdHideTimeClick: function(e) {
                        var t = {
                            key: "qd_hide_time_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdResetTimeClick: function(e) {
                        var t = {
                            key: "qd_reset_time_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchOldClick: function() {
                        var e = {
                            key: "qd_switch_old_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdSwitchTabClick: function(e) {
                        var t = {
                            key: "qd_switch_tab_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDescHintsClick: function(e) {
                        var t = {
                            key: "qd_desc_hints_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDescHintsSwitchClick: function(e) {
                        var t = {
                            key: "qd_desc_hints_switch_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDescHintsContentExposure: function(e) {
                        var t = {
                            key: "qd_desc_hints_content_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQuestionVoteClick: function(e) {
                        var t = {
                            key: "qd_question_vote_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchPageLangClick: function(e) {
                        var t = {
                            key: "qd_switch_page_lang_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAddToListClick: function(e) {
                        var t = {
                            key: "qd_add_to_list_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCompanyPageExposure: function(e) {
                        var t = {
                            key: "qd_company_page_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCompanyPopupExposure: function(e) {
                        var t = {
                            key: "qd_company_popup_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCompanyIconClick: function(e) {
                        var t = {
                            key: "qd_company_icon_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdShareQuestionClick: function(e) {
                        var t = {
                            key: "qd_share_question_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdKeywordExposure: function(e) {
                        var t = {
                            key: "qd_keyword_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAnswerSeenInInterviewClick: function(e) {
                        var t = {
                            key: "qd_answer_seen_in_interview_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAnswerCompanyClick: function(e) {
                        var t = {
                            key: "qd_answer_company_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAnswerEncounterClick: function(e) {
                        var t = {
                            key: "qd_answer_encounter_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAnswerStageClick: function(e) {
                        var t = {
                            key: "qd_answer_stage_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSurveyCompleteExposure: function(e) {
                        var t = {
                            key: "qd_survey_complete_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRelatedTopicsClick: function(e) {
                        var t = {
                            key: "qd_related_topics_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRelatedCompaniesClick: function(e) {
                        var t = {
                            key: "qd_related_companies_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchLangClick: function(e) {
                        var t = {
                            key: "qd_switch_lang_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdEnableLspClick: function(e) {
                        var t = {
                            key: "qd_enable_lsp_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDisableLspClick: function(e) {
                        var t = {
                            key: "qd_disable_lsp_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdLspButtonClick: function(e) {
                        var t = {
                            key: "qd_lsp_button_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdEditorToolbarClick: function(e) {
                        var t = {
                            key: "qd_editor_toolbar_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdResetCodeConfirmClick: function(e) {
                        var t = {
                            key: "qd_reset_code_confirm_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdInsertFlagCodeClick: function(e) {
                        var t = {
                            key: "qd_insert_flag_code_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdConsoleExposure: function(e) {
                        var t = {
                            key: "qd_console_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchTestcaseModeClick: function(e) {
                        var t = {
                            key: "qd_switch_testcase_mode_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPopoverTestcaseModeClick: function(e) {
                        var t = {
                            key: "qd_popover_testcase_mode_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchConsolePosClick: function(e) {
                        var t = {
                            key: "qd_switch_console_pos_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAddCaseTabClick: function(e) {
                        var t = {
                            key: "qd_add_case_tab_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRemoveCaseTabClick: function(e) {
                        var t = {
                            key: "qd_remove_case_tab_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCreateCaseHintClick: function(e) {
                        var t = {
                            key: "qd_create_case_hint_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdVisualizationBtnExposure: function(e) {
                        var t = {
                            key: "qd_visualization_btn_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdVisualizerBtnClick: function(e) {
                        var t = {
                            key: "qd_visualizer_btn_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCheckAllTreeClick: function(e) {
                        var t = {
                            key: "qd_check_all_tree_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCaseTagClick: function(e) {
                        var t = {
                            key: "qd_case_tag_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCaseTagExposure: function(e) {
                        var t = {
                            key: "qd_case_tag_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdResultInfoClick: function(e) {
                        var t = {
                            key: "qd_result_info_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDiffBtnClick: function(e) {
                        var t = {
                            key: "qd_diff_btn_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdConsoleBtnClick: function(e) {
                        var t = {
                            key: "qd_console_btn_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdResetTestcasesClick: function(e) {
                        var t = {
                            key: "qd_reset_testcases_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubmitCodeClick: function(e) {
                        var t = {
                            key: "qd_submit_code_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRunCodeClick: function(e) {
                        var t = {
                            key: "qd_run_code_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQuickTestClick: function(e) {
                        var t = {
                            key: "qd_quick_test_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQuickDebugClick: function(e) {
                        var t = {
                            key: "qd_quick_debug_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdEnterDebugModeClick: function(e) {
                        var t = {
                            key: "qd_enter_debug_mode_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdStartDebugClick: function(e) {
                        var t = {
                            key: "qd_start_debug_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdStopDebugClick: function(e) {
                        var t = {
                            key: "qd_stop_debug_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdExitDebugClick: function(e) {
                        var t = {
                            key: "qd_exit_debug_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAddWatchExpClick: function(e) {
                        var t = {
                            key: "qd_add_watch_exp_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdRmWatchExpClick: function(e) {
                        var t = {
                            key: "qd_rm_watch_exp_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDebugControlsClick: function(e) {
                        var t = {
                            key: "qd_debug_controls_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionSearchClick: function(e) {
                        var t = {
                            key: "qd_solution_search_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdResetSearchTagsClick: function(e) {
                        var t = {
                            key: "qd_reset_search_tags_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSortSolutionClick: function(e) {
                        var t = {
                            key: "qd_sort_solution_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionItemExposure: function(e) {
                        var t = {
                            key: "qd_solution_item_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionItemClick: function(e) {
                        var t = {
                            key: "qd_solution_item_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdEnterAuthorProfileClick: function(e) {
                        var t = {
                            key: "qd_enter_author_profile_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdLeavePostClick: function(e) {
                        var t = {
                            key: "qd_leave_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdEditPostClick: function(e) {
                        var t = {
                            key: "qd_edit_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdUpVotePostClick: function(e) {
                        var t = {
                            key: "qd_up_vote_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDownVotePostClick: function(e) {
                        var t = {
                            key: "qd_down_vote_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdFavoritePostClick: function(e) {
                        var t = {
                            key: "qd_favorite_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdViewPostCommentClick: function(e) {
                        var t = {
                            key: "qd_view_post_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSharePostClick: function(e) {
                        var t = {
                            key: "qd_share_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubscribePostCnClick: function(e) {
                        var t = {
                            key: "qd_subscribe_post_cn_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubscribePostClick: function(e) {
                        var t = {
                            key: "qd_subscribe_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPrevNextPostClick: function(e) {
                        var t = {
                            key: "qd_prev_next_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionPaginationClick: function(e) {
                        var t = {
                            key: "qd_solution_pagination_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionDetailExposure: function(e) {
                        var t = {
                            key: "qd_solution_detail_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSolutionSideSwitchClick: function(e) {
                        var t = {
                            key: "qd_solution_side_switch_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPublishPostClick: function(e) {
                        var t = {
                            key: "qd_publish_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdCancelPostEditClick: function(e) {
                        var t = {
                            key: "qd_cancel_post_edit_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdUpdatePostClick: function(e) {
                        var t = {
                            key: "qd_update_post_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdMarkdownGuideClick: function(e) {
                        var t = {
                            key: "qd_markdown_guide_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdOverwriteWithLatestAcClick: function(e) {
                        var t = {
                            key: "qd_overwrite_with_latest_ac_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSortCommentClick: function(e) {
                        var t = {
                            key: "qd_sort_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPreviewCommentClick: function(e) {
                        var t = {
                            key: "qd_preview_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubmitCommentClick: function(e) {
                        var t = {
                            key: "qd_submit_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdUpVoteCommentClick: function(e) {
                        var t = {
                            key: "qd_up_vote_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDownVoteCommentClick: function(e) {
                        var t = {
                            key: "qd_down_vote_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdShareCommentClick: function(e) {
                        var t = {
                            key: "qd_share_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdReplyCommentClick: function(e) {
                        var t = {
                            key: "qd_reply_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdExpandCommentClick: function(e) {
                        var t = {
                            key: "qd_expand_comment_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdShowRepliesClick: function(e) {
                        var t = {
                            key: "qd_show_replies_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdHideRepliesClick: function(e) {
                        var t = {
                            key: "qd_hide_replies_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdStatusFilterClick: function(e) {
                        var t = {
                            key: "qd_status_filter_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdLangFilterClick: function(e) {
                        var t = {
                            key: "qd_lang_filter_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubmissionListClick: function(e) {
                        var t = {
                            key: "qd_submission_list_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAddNoteClick: function(e) {
                        var t = {
                            key: "qd_add_note_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubmissionCloseClick: function() {
                        var e = {
                            key: "qd_submission_close_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdNextChallengeClick: function(e) {
                        var t = {
                            key: "qd_next_challenge_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdMoreChallengeClick: function(e) {
                        var t = {
                            key: "qd_more_challenge_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSubmissionViewDetailClick: function(e) {
                        var t = {
                            key: "qd_submission_view_detail_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPostSolutionClick: function(e) {
                        var t = {
                            key: "qd_post_solution_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPostSolutionExposure: function(e) {
                        var t = {
                            key: "qd_post_solution_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdDistributionExposure: function(e) {
                        var t = {
                            key: "qd_distribution_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdViewSampleCodeClick: function(e) {
                        var t = {
                            key: "qd_view_sample_code_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdSwitchSampleCodeClick: function(e) {
                        var t = {
                            key: "qd_switch_sample_code_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAcceptDetailsClick: function(e) {
                        var t = {
                            key: "qd_accept_details_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdFeatureGuideExposure: function(e) {
                        var t = {
                            key: "qd_feature_guide_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdFinishDailyChallengeExposure: function(e) {
                        var t = {
                            key: "qd_finish_daily_challenge_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdMakeUpChallengeExposure: function(e) {
                        var t = {
                            key: "qd_make_up_challenge_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdIdeExpModalExposure: function() {
                        var e = {
                            key: "qd_ide_exp_modal_exposure",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdIdeExpModalCancelClick: function() {
                        var e = {
                            key: "qd_ide_exp_modal_cancel_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdIdeExpModalConfirmClick: function() {
                        var e = {
                            key: "qd_ide_exp_modal_confirm_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdNavbarOpenIdeClick: function() {
                        var e = {
                            key: "qd_navbar_open_ide_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdSettingBackQdClick: function() {
                        var e = {
                            key: "qd_setting_back_qd_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdDragChangeLayoutClick: function(e) {
                        var t = {
                            key: "qd_drag_change_layout_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAiToggleButtonClick: function(e) {
                        var t = {
                            key: "qd_ai_toggle_button_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAiCodeResponseExposure: function(e) {
                        var t = {
                            key: "qd_ai_code_response_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAiPremiumModalExposure: function(e) {
                        var t = {
                            key: "qd_ai_premium_modal_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAiPremiumSubscribeClick: function(e) {
                        var t = {
                            key: "qd_ai_premium_subscribe_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdAiHintSuccessExposure: function(e) {
                        var t = {
                            key: "qd_ai_hint_success_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPremiumCloudSavingRestoredClick: function(e) {
                        var t = {
                            key: "qd_premium_cloud_saving_restored_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPremiumUpgradeCloudSavingClick: function(e) {
                        var t = {
                            key: "qd_premium_upgrade_cloud_saving_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdPremiumCloudSavingToastClick: function(e) {
                        var t = {
                            key: "qd_premium_cloud_saving_toast_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdUpgradeToDynamicLayoutExposure: function() {
                        var e = {
                            key: "qd_qd_upgrade_to_dynamic_layout_exposure",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdQdUpgradeToDynamicLayoutTryClick: function() {
                        var e = {
                            key: "qd_qd_upgrade_to_dynamic_layout_try_click",
                            data: {}
                        };
                        i.V[a.X.GIO](e), i.V[a.X.GA4](e), i.V[a.X.CONSOLE](e), i.V[a.X.SELF_DB](e)
                    },
                    qdQdLivePreviewExposure: function(e) {
                        var t = {
                            key: "qd_qd_live_preview_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdLivePreviewRefreshClick: function(e) {
                        var t = {
                            key: "qd_qd_live_preview_refresh_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdLivePreviewOpenNewTabClick: function(e) {
                        var t = {
                            key: "qd_qd_live_preview_open_new_tab_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdWebConsoleExposure: function(e) {
                        var t = {
                            key: "qd_qd_web_console_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdWebConsoleClearClick: function(e) {
                        var t = {
                            key: "qd_qd_web_console_clear_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdWebConsoleInputClick: function(e) {
                        var t = {
                            key: "qd_qd_web_console_input_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdFrameworkSwitcherExposure: function(e) {
                        var t = {
                            key: "qd_qd_framework_switcher_exposure",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdFrameworkSwitcherClickClick: function(e) {
                        var t = {
                            key: "qd_qd_framework_switcher_click_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    },
                    qdQdFrameworkSwitcherCloseClick: function(e) {
                        var t = {
                            key: "qd_qd_framework_switcher_close_click",
                            data: e
                        };
                        i.V[a.X.GIO](t), i.V[a.X.GA4](t), i.V[a.X.CONSOLE](t), i.V[a.X.SELF_DB](t)
                    }
                }
        }
    }
]);