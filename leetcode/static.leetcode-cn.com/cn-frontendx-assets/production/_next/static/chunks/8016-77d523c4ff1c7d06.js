(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8016], {
        8458: function(e, t, n) {
            var r = n(4635),
                o = n(16370)(r);
            o.push([e.id, ".WRmCx p,.WRmCx summary{font-size:1rem!important;line-height:1.5rem!important}", "", {
                version: 3,
                sources: ["webpack://./modules/problems/solutions/solution-details/body/solution-markdown.iso.css"],
                names: [],
                mappings: "AAKE,wBAAA,wBAAiB,CAAjB,4BAAiB",
                sourcesContent: [".markdown p {\n  @apply !text-base;\n}\n\n.markdown summary {\n  @apply !text-base;\n}\n"],
                sourceRoot: ""
            }]), o.locals = {
                markdown: "WRmCx"
            }, e.exports = o
        },
        10460: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return a
                },
                w: function() {
                    return i
                }
            });
            n(17519), n(70748), n(91518), n(87621), n(51506), n(5348), n(3500), n(39663), n(2979);
            var r = n(10298),
                o = n(46455),
                i = function(e, t) {
                    return e.diff(t, "h", !0) < 24
                },
                a = function(e, t) {
                    var n = t || {},
                        i = n.hiddenFields,
                        a = void 0 === i ? [] : i,
                        l = n.prefix,
                        s = {
                            days: "\u5929",
                            hours: "\u5c0f\u65f6",
                            minutes: "\u5206",
                            seconds: "\u79d2"
                        },
                        c = ["days", "hours", "minutes", "seconds"].filter((function(e) {
                            return !a.includes(e)
                        })).map((function(t, n) {
                            return 0 !== n ? {
                                timeKey: t,
                                value: e[t]()
                            } : {
                                timeKey: t,
                                value: Math.floor(e["as".concat((0, r.default)(t))]())
                            }
                        }));
                    return c.slice(c.findIndex((function(e) {
                        return 0 !== e.value
                    })) || 0).map((function(e) {
                        return "".concat(e.value, " ").concat((0, o.Z)(l, s)[e.timeKey])
                    })).join(" ")
                }
        },
        15395: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return r
                }
            });
            var r = {
                "data-gramm": !1,
                "data-gramm_editor": !1,
                "data-enable-grammarly": !1
            }
        },
        84622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FilteredGraphQLErrorEnum: function() {
                    return r
                },
                defaultErrorHandler: function() {
                    return l
                },
                filterGraphQLError: function() {
                    return i
                },
                handleErrorWithFallback: function() {
                    return a
                }
            });
            n(3500);
            var r, o = n(6387);

            function i(e) {
                var t = Array.isArray(e) ? e[0] : e;
                if (function(e) {
                        return e && "object" === typeof e && "string" === typeof e.message
                    }(t)) {
                    var n = t.message.indexOf("\ud83d\udc38\u2615");
                    return n > -1 ? {
                        errorType: r.frogTea,
                        message: t.message.slice(n + "\ud83d\udc38\u2615".length)
                    } : {
                        errorType: r.unknown,
                        message: t.message
                    }
                }
                return null
            }! function(e) {
                e.frogTea = "frog-tea", e.unknown = "unknown"
            }(r || (r = {}));
            var a = function(e) {
                    return function(t) {
                        var n, a, l = i(null === t || void 0 === t || null === (n = t.response) || void 0 === n ? void 0 : n.errors);
                        (null === t || void 0 === t || null === (a = t.response) || void 0 === a ? void 0 : a.status) >= 400 || ((null === l || void 0 === l ? void 0 : l.errorType) === r.frogTea || (null === l || void 0 === l ? void 0 : l.errorType) === r.unknown ? o.y.error(l.message).then() : e && o.y.error(e).then())
                    }
                },
                l = a()
        },
        593: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return i
                }
            });
            var r = n(64386),
                o = n(36419);

            function i(e, t) {
                var n = (0, r.useState)(e),
                    i = n[0],
                    a = n[1],
                    l = (0, o.z)(t),
                    s = (0, r.useCallback)((function(e) {
                        a((function(t) {
                            var n = "function" === typeof e ? e(t) : e;
                            return n !== t && l(n), n
                        }))
                    }), [l]);
                return [i, (0, r.useMemo)((function() {
                    return {
                        on: function() {
                            return s(!0)
                        },
                        off: function() {
                            return s(!1)
                        },
                        toggle: function() {
                            return s((function(e) {
                                return !e
                            }))
                        },
                        setBool: s
                    }
                }), [s])]
            }
        },
        10316: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return x
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(39157),
                a = n(79216),
                l = n(44872),
                s = n(40007),
                c = n(27319),
                u = n(66455),
                d = n(96519),
                f = n(72400),
                m = n(11754),
                p = function(e) {
                    var t, n = e.visible,
                        r = e.loading,
                        o = e.variant,
                        p = e.className,
                        v = e.modalClassName,
                        y = e.title,
                        b = e.titleClassName,
                        h = e.confirmText,
                        j = e.confirmClassName,
                        g = e.icon,
                        x = e.iconClassName,
                        C = e.confirmBtn,
                        O = e.confirmBtnCls,
                        w = e.onConfirm,
                        N = e.cancelBtn,
                        I = e.cancelBtnCls,
                        S = e.onCancel,
                        P = (0, a.$G)("common", {
                            keyPrefix: "confirmModal"
                        }).t,
                        k = function(e) {
                            switch (e) {
                                case "info":
                                    return {
                                        icon: d.e,
                                        iconClassName: s.Cj.labelBlueStandard,
                                        confirmBtnCls: (0, l.yI)(s.Cj.bgBlueStandard, s.Cj.bgBlue3Hover, s.Cj.labelWhite)
                                    };
                                case "danger":
                                    return {
                                        icon: f.Q,
                                        iconClassName: s.Cj.labelRedStandard,
                                        confirmBtnCls: (0, l.yI)(s.Cj.bgRedStandard, s.Cj.bgRed3Hover, s.Cj.labelWhite)
                                    };
                                default:
                                    return {}
                            }
                        }(o),
                        D = null !== (t = null !== g && void 0 !== g ? g : k.icon) && void 0 !== t ? t : d.e;
                    return (0, i.createPortal)((0, m.jsx)(c.u, {
                        visible: n,
                        onCancel: S,
                        closable: !1,
                        maskClosable: !0,
                        className: p,
                        modalClassName: v,
                        children: (0, m.jsxs)("div", {
                            className: "flex space-x-5",
                            children: [(0, m.jsx)("div", {
                                className: (0, l.yI)("h-10 w-10", k.iconClassName, x),
                                children: (0, m.jsx)(D, {
                                    className: "h-full w-full"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [(0, m.jsx)("div", {
                                    className: (0, l.yI)(s.Cj.label1, "text-lg font-medium", b),
                                    children: y || P("title")
                                }), h && (0, m.jsx)("div", {
                                    className: (0, l.yI)(s.Cj.label2, "mt-4 text-sm", j),
                                    children: h
                                }), (0, m.jsxs)("div", {
                                    className: "mt-4 flex items-center justify-end space-x-4 text-sm font-medium",
                                    children: [(0, m.jsx)(u.z, {
                                        className: (0, l.yI)("cursor-pointer rounded-lg px-4 py-[5px]", s.Cj.label2, s.Cj.fill3, s.Cj.fill2Hover, I),
                                        onClick: S,
                                        children: N || P("cancelBtn")
                                    }), (0, m.jsx)(u.z, {
                                        loading: r,
                                        disabled: r,
                                        className: (0, l.yI)("cursor-pointer rounded-lg px-4 py-[5px]", s.Cj.labelWhite, k.confirmBtnCls, O),
                                        onClick: w,
                                        children: C || P("confirmBtn")
                                    })]
                                })]
                            })]
                        })
                    }), document.querySelector("#modal-root"))
                };

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = {
                    visible: !1,
                    title: "",
                    confirmText: "",
                    icon: void 0,
                    iconClassName: "",
                    confirmBtn: "",
                    confirmBtnCls: "",
                    onConfirm: function() {
                        return null
                    },
                    cancelBtn: "",
                    cancelBtnCls: "",
                    onCancel: function() {
                        return null
                    }
                },
                h = function(e, t) {
                    switch (t.type) {
                        case "update":
                            return y(y({}, e), t.payload);
                        case "reset":
                            return b;
                        default:
                            throw new Error
                    }
                };

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                var t = (0, o.useReducer)(h, g(g({}, b), e)),
                    n = t[0],
                    r = t[1],
                    i = (0, o.useCallback)((function(e) {
                        return r({
                            type: "update",
                            payload: e
                        })
                    }), [r]),
                    a = (0, o.useCallback)((function() {
                        return r({
                            type: "reset"
                        })
                    }), [r]),
                    l = (0, o.useCallback)((function() {
                        return r({
                            type: "update",
                            payload: {
                                visible: !0
                            }
                        })
                    }), [r]),
                    s = (0, o.useCallback)((function() {
                        return r({
                            type: "update",
                            payload: {
                                visible: !1
                            }
                        })
                    }), [r]),
                    c = n.onCancel,
                    u = (0, o.useCallback)((function() {
                        s(), null === c || void 0 === c || c()
                    }), [s, c]);
                return {
                    modal: (0, m.jsx)(p, g(g({}, n), {}, {
                        onCancel: u
                    })),
                    control: (0, o.useMemo)((function() {
                        return {
                            update: i,
                            reset: a,
                            show: l,
                            hide: s
                        }
                    }), [i, a, l, s]),
                    visible: n.visible,
                    update: i,
                    reset: a,
                    show: l,
                    hide: s
                }
            }
        },
        70963: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return i
                }
            });
            var r = n(59679),
                o = (n(87621), n(51506), n(91518), n(62217), n(64386));

            function i(e) {
                var t = e.onTriggered,
                    n = e.disableClick,
                    i = e.disableTouch,
                    a = e.disableKeys,
                    l = e.allowAnyKey,
                    s = e.triggerKeys,
                    c = (0, o.useRef)(null),
                    u = (0, o.useCallback)((function(e) {
                        l ? t(e) : s ? s.includes(e.key) && t(e) : "Escape" === e.key && t(e)
                    }), [l, s, t]),
                    d = (0, o.useCallback)((function(e) {
                        c && c.current && (c.current.contains(e.target) || null === t || void 0 === t || t(e))
                    }), [c, t]),
                    f = (0, o.useMemo)((function() {
                        return [
                            [n, "click", d],
                            [i, "touchstart", d],
                            [a, "keyup", u]
                        ]
                    }), [n, i, a, d, u]);
                return (0, o.useEffect)((function() {
                    return f.forEach((function(e) {
                            var t = (0, r.Z)(e, 3),
                                n = t[0],
                                o = t[1],
                                i = t[2];
                            n || document.addEventListener(o, i)
                        })),
                        function() {
                            f.forEach((function(e) {
                                var t = (0, r.Z)(e, 3),
                                    n = t[0],
                                    o = t[1],
                                    i = t[2];
                                n || document.removeEventListener(o, i)
                            }))
                        }
                }), [f]), c
            }
        },
        10402: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return o
                }
            });
            var r = n(40682),
                o = function(e) {
                    var t, n = (0, r.U)().data;
                    return e === (null === n || void 0 === n || null === (t = n.userStatus) || void 0 === t ? void 0 : t.username)
                }
        },
        21011: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return c
                }
            });
            var r = n(64386),
                o = n(35105),
                i = n(59006),
                a = n(43076),
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            leading: !0,
                            trailing: !0
                        },
                        o = (0, r.useRef)(e);
                    (0, r.useEffect)((function() {
                        o.current = e
                    }), [e]);
                    var i = n.leading,
                        l = n.trailing;
                    return (0, r.useCallback)(t ? (0, a.Z)((function() {
                        return o.current.apply(o, arguments)
                    }), t, {
                        leading: i,
                        trailing: l
                    }) : function() {}, [t, i, l])
                },
                s = n(78559),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (0, r.useState)(void 0),
                        a = n[0],
                        c = n[1],
                        u = (0, r.useState)(void 0),
                        d = u[0],
                        f = u[1],
                        m = (0, r.useCallback)((function() {
                            if (e) {
                                var t = e.getBoundingClientRect(),
                                    n = t.width,
                                    r = t.height;
                                c(n), f(r)
                            }
                        }), [e]),
                        p = t || {},
                        v = p.throttle,
                        y = l(m, v),
                        b = v ? y : m;
                    return (0, s.L)((function() {
                        if (e && (0, i.jU)()) {
                            b();
                            var t = new o.ResizeObserver(b);
                            return t.observe(e),
                                function() {
                                    t.unobserve(e)
                                }
                        }
                    }), [b, e]), {
                        width: a,
                        height: d
                    }
                }
        },
        22183: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return r
                }
            });
            n(66128), n(11270);
            var r = function(e) {
                var t = function(e) {
                    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-+)|(-+$)/g, "")
                }(e);
                return "" === t ? "topic" : t
            }
        },
        49429: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return c
                }
            });
            var r = n(92130),
                o = n.n(r),
                i = n(64386),
                a = "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/default_avatar-e9984af6de73f121d0e6801af2749ca5.jpg",
                l = n(36226),
                s = n(11754),
                c = i.forwardRef((function(e, t) {
                    var n = e.src,
                        r = void 0 === n ? "" : n,
                        i = e.alt,
                        c = void 0 === i ? "avatar" : i,
                        u = e.className;
                    return (0, s.jsx)(l.y, {
                        ref: t,
                        src: r || a,
                        alt: c,
                        errPlaceholder: a,
                        className: o()("rounded-1/2 object-cover", u)
                    })
                }))
        },
        91510: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return I
                }
            });
            n(2979), n(72029), n(81248);
            var r = n(15035),
                o = n(79216),
                i = n(64386),
                a = n(44872),
                l = n(70963),
                s = n(59787),
                c = n(44487),
                u = n(83815),
                d = n(40007),
                f = n(4676),
                m = (n(17519), n(42010)),
                p = n(11754),
                v = function(e) {
                    var t = e.problem,
                        n = e.active,
                        r = e.onSelect,
                        o = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var e;
                        n && (null === (e = o.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        }))
                    }), [n]), (0, p.jsxs)("div", {
                        onClick: function() {
                            r({
                                insertedContent: "[".concat(t.frontendQuestionId, ". ").concat(t.title, "](").concat(s.Hb.questionDetail(t.titleSlug), ")")
                            })
                        },
                        ref: o,
                        className: (0, a.yI)(d.Cj.fill3Hover, (0, f.Z)({}, d.Cj.fill3, n), "flex cursor-pointer flex-col rounded-[5px] py-1.5 pl-3 transition-all"),
                        children: [(0, p.jsx)("h3", {
                            className: "truncate",
                            children: t.title
                        }), (0, p.jsx)(m.v, {
                            difficulty: t.difficulty
                        })]
                    })
                },
                y = function(e) {
                    var t = e.problems,
                        n = e.selectIndex,
                        r = e.onSelect;
                    return (0, p.jsx)("div", {
                        className: "space-y-1 px-2",
                        children: t.map((function(e, t) {
                            return (0, p.jsx)(v, {
                                problem: e,
                                active: n === t,
                                onSelect: r
                            }, e.frontendQuestionId)
                        }))
                    })
                },
                b = n(78559);
            var h = n(61880),
                j = n(11288),
                g = n(90074),
                x = function(e) {
                    return (0, g.YQp)(j.f6, {
                        usernamePrefix: e
                    }, {
                        enabled: !!e,
                        select: function(e) {
                            return (0, h.Z)(e.users).map((function(e) {
                                return {
                                    username: e.username,
                                    name: e.profile.realName || e.username,
                                    userAvatar: e.profile.userAvatar || "",
                                    userSlug: e.profile.userSlug || ""
                                }
                            }))
                        }
                    })
                },
                C = n(49429),
                O = function(e) {
                    var t = e.user,
                        n = e.active,
                        r = e.onSelect,
                        o = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var e;
                        n && (null === (e = o.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        }))
                    }), [n]), (0, p.jsxs)("div", {
                        ref: o,
                        onClick: function() {
                            r({
                                insertedContent: "[@".concat(t.name, "](").concat(s.Hb.profile(t.userSlug), ")")
                            })
                        },
                        className: (0, a.yI)(d.Cj.fill3Hover, (0, f.Z)({}, d.Cj.fill3, n), "flex h-12 cursor-pointer items-center rounded-[5px] px-2 py-1.5"),
                        children: [(0, p.jsx)(C.q, {
                            className: "h-9 w-9",
                            src: t.userAvatar,
                            alt: "avatar"
                        }), (0, p.jsxs)("div", {
                            className: "ml-2",
                            children: [(0, p.jsx)("h3", {
                                children: t.name
                            }), (0, p.jsx)("div", {
                                className: (0, a.yI)(d.Cj.label4, "mt-0.5 text-xs font-medium"),
                                children: t.userSlug
                            })]
                        })]
                    })
                },
                w = function(e) {
                    var t = e.users,
                        n = e.selectIndex,
                        r = e.onSelect;
                    return (0, p.jsx)("div", {
                        className: "max-h-[250px] space-y-1 overflow-auto px-2",
                        children: t.map((function(e, t) {
                            return (0, p.jsx)(O, {
                                user: e,
                                active: n === t,
                                onSelect: r
                            }, e.userSlug)
                        }))
                    })
                },
                N = function(e) {
                    var t = e.children,
                        n = e.active;
                    return (0, p.jsxs)("div", {
                        className: (0, a.yI)(n ? d.Cj.label1 : d.Cj.label3, {
                            "font-medium": n
                        }),
                        children: [t, (0, p.jsx)("div", {
                            className: (0, a.yI)("mt-2 h-0.5 rounded-full bg-gray-8 dark:bg-dark-gray-8", {
                                "opacity-0": !n
                            })
                        })]
                    })
                },
                I = (0, i.memo)((function(e) {
                    var t = e.onBlur,
                        n = e.onSelect,
                        f = e.topicId,
                        m = (0, l.I)({
                            onTriggered: t
                        }),
                        v = (0, o.$G)("common", {
                            keyPrefix: "mentions"
                        }).t,
                        C = function() {
                            var e = (0, i.useRef)(null);
                            return (0, b.L)((function() {
                                setTimeout((function() {
                                    e.current && e.current.focus()
                                }), 100)
                            }), []), e
                        }(),
                        O = (0, i.useState)(0),
                        I = O[0],
                        S = O[1],
                        P = (0, i.useState)(0),
                        k = P[0],
                        D = P[1],
                        E = function(e) {
                            S(0), D(e)
                        },
                        T = (0, i.useState)(""),
                        R = T[0],
                        q = T[1],
                        Z = x(R, f || 0),
                        L = Z.data,
                        B = void 0 === L ? [] : L,
                        M = (Z.isFetching, function(e, t) {
                            var n = t.enabled,
                                r = void 0 === n || n;
                            return (0, g.iSL)(j.f6, {
                                filters: {
                                    searchKeywords: e,
                                    sortOrder: null,
                                    orderBy: null
                                }
                            }, {
                                enabled: !!e && r,
                                select: function(e) {
                                    return (0, h.Z)(e.problems.questions).map((function(e) {
                                        return {
                                            frontendQuestionId: e.frontendQuestionId,
                                            title: e.titleCn || e.title,
                                            titleSlug: e.titleSlug,
                                            difficulty: e.difficulty
                                        }
                                    }))
                                }
                            })
                        }(R, {
                            enabled: !u.Oo
                        })),
                        _ = M.data,
                        A = void 0 === _ ? [] : _,
                        H = 0 === k ? B : A,
                        z = H.length,
                        G = function(e) {
                            var t = e.onEnter,
                                n = e.onArrowDown,
                                r = e.onArrowUp,
                                o = e.onEscape,
                                a = e.onTab,
                                l = e.onBackSpace;
                            return (0, i.useCallback)((function(e) {
                                var i = e.key;
                                switch (!0) {
                                    case "Enter" === i:
                                        return e.preventDefault(), void t();
                                    case "ArrowDown" === i:
                                        return e.preventDefault(), void n();
                                    case "ArrowUp" === i:
                                        return e.preventDefault(), void r();
                                    case "Escape" === i:
                                        return e.preventDefault(), void o();
                                    case "Tab" === i:
                                        return void a();
                                    case "Backspace" === i:
                                        return void l(e.currentTarget.value);
                                    default:
                                        return
                                }
                            }), [t, n, r, o, a, l])
                        }({
                            onEscape: t,
                            onEnter: function() {
                                var e = H[I];
                                n("userSlug" in e ? {
                                    insertedContent: "[@".concat(e.name, "](").concat(s.Hb.profile(e.userSlug), ")")
                                } : {
                                    insertedContent: "[".concat(e.frontendQuestionId, ". ").concat(e.title, "](").concat(s.Hb.questionDetail(e.titleSlug), ")")
                                })
                            },
                            onArrowUp: function() {
                                S((function(e) {
                                    return (e + z - 1) % z
                                }))
                            },
                            onArrowDown: function() {
                                S((function(e) {
                                    return (e + 1) % z
                                }))
                            },
                            onTab: function() {
                                E((function(e) {
                                    return (e + 1) % 2
                                }))
                            },
                            onBackSpace: function(e) {
                                e || t()
                            }
                        });
                    return (0, p.jsxs)("div", {
                        ref: m,
                        className: (0, a.yI)("flex w-[250px] flex-col gap-2 rounded-lg py-2 z-base-2", d.eq.dropdown, d.Cj.bgLayer3),
                        children: [(0, p.jsx)("div", {
                            className: "rounded-[5px] px-2",
                            children: (0, p.jsx)(c.I, {
                                ref: C,
                                onKeyDown: G,
                                value: R,
                                onChange: function(e) {
                                    return q(e.target.value)
                                }
                            })
                        }), (0, p.jsxs)(r.O.Group, {
                            selectedIndex: k,
                            onChange: E,
                            children: [(0, p.jsxs)(r.O.List, {
                                className: "mb-2 flex space-x-4 px-3",
                                children: [(0, p.jsx)(r.O, {
                                    children: function(e) {
                                        var t = e.selected;
                                        return (0, p.jsx)(N, {
                                            active: t,
                                            children: v("users")
                                        })
                                    }
                                }), (0, p.jsx)(r.O, {
                                    children: function(e) {
                                        var t = e.selected;
                                        return (0, p.jsx)(N, {
                                            active: t,
                                            children: v("problems")
                                        })
                                    }
                                })]
                            }), (0, p.jsxs)(r.O.Panels, {
                                className: "max-h-[250px] overflow-auto",
                                onWheel: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, p.jsx)(r.O.Panel, {
                                    children: (0, p.jsx)(w, {
                                        users: B,
                                        selectIndex: I,
                                        onSelect: n
                                    })
                                }), (0, p.jsx)(r.O.Panel, {
                                    children: (0, p.jsx)(y, {
                                        problems: A,
                                        selectIndex: I,
                                        onSelect: n
                                    })
                                })]
                            })]
                        })]
                    })
                }))
        },
        38089: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return x
                }
            });
            var r = n(4676),
                o = (n(17519), n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(64386)),
                i = n(84193),
                a = n(57735),
                l = n(44872),
                s = n(86209),
                c = n(86128),
                u = n(40007),
                d = {
                    menuButton: "flex items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5",
                    menuButtonBg: u.Cj.fill3,
                    menuButtonText: u.Cj.label2,
                    menuButtonHover: u.Cj.fill2Hover,
                    menuButtonActive: "active:bg-fill-3 dark:active:bg-dark-fill-3",
                    menuButtonIcon: "w-4.5 h-4.5 flex items-center ml-3 pointer-events-none transition duration-300 ".concat(u.Cj.label3),
                    menuButtonDisabled: u.Cj.label4,
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95"
                    },
                    menuItems: "max-w-[240px] min-w-[140px] absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none ".concat(u.eq.commandBar),
                    menuItemsBg: u.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12",
                    menuItemText: u.Cj.label1,
                    menuItemActive: "rounded ".concat(u.Cj.fill4),
                    menuItemHover: u.Cj.fill4Hover,
                    menuItemSelectedIconWrapper: "absolute inset-y-0 right-0 flex items-center pr-2 text-blue dark:text-dark-blue",
                    popoverTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    popoverPanel: "absolute w-max max-w-xs z-dropdown mt-1 p-2.5 rounded-lg focus:outline-none"
                },
                f = n(7831),
                m = n(50385),
                p = n(11754),
                v = ["disabled", "className", "icon", "iconClassName", "isOpen", "children"];

            function y(e, t) {
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
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = (0, o.forwardRef)((function(e, t) {
                var n = e.disabled,
                    o = e.className,
                    i = e.icon,
                    a = e.iconClassName,
                    s = e.isOpen,
                    c = e.children,
                    u = (0, f.Z)(e, v);
                return (0, p.jsxs)("button", b(b({
                    disabled: n,
                    className: (0, l.yI)(d.menuButton, d.menuButtonBg, n ? [d.menuButtonDisabled, "cursor-default"] : [d.menuButtonText, d.menuButtonHover, d.menuButtonActive], o),
                    ref: t
                }, u), {}, {
                    type: "button",
                    children: [c, (0, p.jsx)("div", {
                        className: (0, l.yI)(d.menuButtonIcon, (0, r.Z)({
                            "rotate-180 transform": s
                        }, d.menuButtonDisabled, n), a),
                        "aria-hidden": "true",
                        children: i || (0, p.jsx)(m.C, {})
                    })]
                }))
            }));

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                var t = e.btnText,
                    n = e.btnClassName,
                    f = e.placeholder,
                    m = e.icon,
                    v = e.iconClassName,
                    y = e.items,
                    b = e.itemsClassName,
                    j = e.itemClassName,
                    x = e.itemSelectedClassName,
                    C = e.placeholderClassName,
                    O = void 0 === C ? u.Cj.label4 : C,
                    w = e.selected,
                    N = e.setSelected,
                    I = e.wrapperClassName,
                    S = e.disabled;
                return (0, p.jsx)(i.v, {
                    as: "div",
                    className: (0, l.yI)("relative", I),
                    children: function(e) {
                        var u = e.open;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(i.v.Button, {
                                as: h,
                                className: (0, l.yI)(n, (0, r.Z)({}, O, !t)),
                                isOpen: u,
                                icon: m,
                                iconClassName: v,
                                disabled: S,
                                children: t || f
                            }), !S && (0, p.jsx)(a.u, g(g({
                                as: o.Fragment
                            }, d.dropdownTransition), {}, {
                                children: (0, p.jsx)(i.v.Items, {
                                    className: (0, l.yI)(d.menuItems, d.menuItemsBg, b),
                                    children: y.map((function(e, t) {
                                        var n = e.value,
                                            o = e.text;
                                        return (0, p.jsx)(i.v.Item, {
                                            children: function(e) {
                                                var t, i = e.active;
                                                return (0, p.jsxs)("div", {
                                                    className: (0, l.yI)(d.menuItem, d.menuItemText, j, (t = {}, (0, r.Z)(t, d.menuItemActive, i), (0, r.Z)(t, null !== x && void 0 !== x ? x : "", w === n), t)),
                                                    onClick: function() {
                                                        return N(w !== n ? n : void 0)
                                                    },
                                                    children: [(0, p.jsx)("div", {
                                                        className: "flex h-5 items-center",
                                                        children: (0, p.jsx)(c.J, {
                                                            children: o
                                                        })
                                                    }), w === n ? (0, p.jsx)("span", {
                                                        className: d.menuItemSelectedIconWrapper,
                                                        children: (0, p.jsx)(s.N, {
                                                            className: "h-5 w-5",
                                                            "aria-hidden": "true"
                                                        })
                                                    }) : null]
                                                })
                                            }
                                        }, t)
                                    }))
                                })
                            }))]
                        })
                    }
                })
            }
        },
        52114: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return l
                }
            });
            n(91023);
            var r = n(72102),
                o = n(10460),
                i = n(63282),
                a = n(11754),
                l = function(e) {
                    var t = e.datetime,
                        n = e.className,
                        l = e.unix,
                        s = void 0 !== l && l,
                        c = e.displayDetail,
                        u = void 0 !== c && c,
                        d = e.needDetailTooltip,
                        f = void 0 === d || d,
                        m = e.dateFormat,
                        p = void 0 === m ? "YYYY.MM.DD" : m,
                        v = e.detailFormat,
                        y = void 0 === v ? "YYYY.MM.DD HH:mm" : v,
                        b = e.placement,
                        h = void 0 === b ? "top" : b,
                        j = (0, i.B)(),
                        g = s ? i.B.unix(Number(t)) : (0, i.B)(t),
                        x = (0, o.w)(j, g) ? j.to(g) : g.local().format(p),
                        C = g.local().format(y),
                        O = u ? C : x;
                    return f && !u ? (0, a.jsx)(r.u, {
                        placement: h,
                        label: C,
                        children: (0, a.jsx)("span", {
                            className: n,
                            children: O
                        })
                    }) : (0, a.jsx)("span", {
                        className: n,
                        children: O
                    })
                }
        },
        27319: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return f
                }
            });
            var r = n(4676),
                o = (n(17519), n(87621), n(51506), n(57735)),
                i = n(64386),
                a = n(18854),
                l = n.n(a),
                s = n(44872),
                c = n(40007),
                u = n(54600),
                d = n(11754);

            function f(e) {
                var t = e.visible,
                    n = e.onCancel,
                    a = e.title,
                    f = e.children,
                    m = e.afterClose,
                    p = e.className,
                    v = e.modalClassName,
                    y = e.closeIconClassName,
                    b = e.closeBtnClassName,
                    h = e.titleRowClass,
                    j = e.titleClassName,
                    g = e.closable,
                    x = void 0 === g || g,
                    C = e.showCloseIcon,
                    O = void 0 === C || C,
                    w = e.maskClosable,
                    N = void 0 !== w && w,
                    I = e.stopMouseDownPropagation,
                    S = e.shouldCloseOnEsc,
                    P = void 0 === S || S,
                    k = e.renderPrefixChildren,
                    D = e.noShadow,
                    E = void 0 !== D && D,
                    T = e.beforeHistoryChangeEnable,
                    R = void 0 === T || T,
                    q = e.customRef,
                    Z = e.customTransition,
                    L = void 0 === Z ? {} : Z,
                    B = e.customStyle,
                    M = e.beforeLeave;
                (0, i.useEffect)((function() {
                    return l().events.on("beforeHistoryChange", (function() {
                            R && n()
                        })),
                        function() {
                            return l().events.off("beforeHistoryChange", (function() {
                                return R && n()
                            }))
                        }
                }), [R, n]), (0, i.useEffect)((function() {
                    if (P) {
                        var e = function(e) {
                            "Escape" === e.key && n()
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                return window.removeEventListener("keyup", e)
                            }
                    }
                }), [n, P]);
                var _ = (0, i.useCallback)((function(e) {
                    return e.stopPropagation()
                }), []);
                return (0, d.jsx)(o.u, {
                    appear: !0,
                    show: t,
                    afterLeave: m,
                    children: (0, d.jsx)("div", {
                        "aria-modal": "true",
                        role: "dialog",
                        className: (0, s.yI)("z-modal fixed inset-0 overflow-y-auto", v),
                        onMouseDown: null !== I && void 0 !== I ? I : _,
                        children: (0, d.jsxs)("div", {
                            className: "flex min-h-screen items-center justify-center px-4",
                            children: [(0, d.jsx)(o.u.Child, {
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, d.jsx)("div", {
                                    "aria-hidden": "true",
                                    onClick: N ? n : void 0,
                                    className: "bg-gray-8 fixed inset-0 opacity-60"
                                })
                            }), null === k || void 0 === k ? void 0 : k.map((function(e, t) {
                                return e ? (0, d.jsx)(o.u.Child, {
                                    as: i.Fragment,
                                    enter: (0, s.yI)("ease-out duration-300", L.enter),
                                    enterFrom: (0, s.yI)("opacity-0 scale-95", L.enterFrom),
                                    enterTo: (0, s.yI)("opacity-100 scale-100", L.enterTo),
                                    leave: (0, s.yI)("ease-in duration-200", L.leave),
                                    leaveFrom: (0, s.yI)("opacity-100 scale-100", L.leaveFrom),
                                    leaveTo: (0, s.yI)("opacity-0 scale-95", L.leaveTo),
                                    children: e
                                }, "prefix-child-".concat(t)) : null
                            })), (0, d.jsx)(o.u.Child, {
                                as: i.Fragment,
                                enter: (0, s.yI)("ease-out duration-300", L.enter),
                                enterFrom: (0, s.yI)("opacity-0 scale-95", L.enterFrom),
                                enterTo: (0, s.yI)("opacity-100 scale-100", L.enterTo),
                                leave: (0, s.yI)("ease-in duration-200", L.leave),
                                leaveFrom: (0, s.yI)("opacity-100 scale-100", L.leaveFrom),
                                leaveTo: (0, s.yI)("opacity-0 scale-95", L.leaveTo),
                                beforeLeave: M,
                                children: (0, d.jsxs)("div", {
                                    className: (0, s.yI)("my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] p-5 text-left transition-all", c.Cj.bgOverlay3, (0, r.Z)({
                                        "md:min-w-[420px]": !(null !== p && void 0 !== p && p.includes("md:min-w-"))
                                    }, c.eq.modal, !E), p),
                                    ref: q,
                                    style: B,
                                    children: [a ? (0, d.jsxs)("div", {
                                        className: (0, s.yI)("flex items-center justify-between", h),
                                        children: [(0, d.jsx)("h3", {
                                            className: (0, s.yI)("text-lg font-medium", j),
                                            children: a
                                        }), x && O && (0, d.jsx)("button", {
                                            onClick: n,
                                            className: (0, s.yI)("cursor-pointer rounded transition-all", c.Cj.fill3Hover, b),
                                            children: (0, d.jsx)(u.F, {
                                                className: (0, s.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", y)
                                            })
                                        })]
                                    }) : (0, d.jsx)(d.Fragment, {
                                        children: x && (0, d.jsx)("button", {
                                            onClick: n,
                                            className: (0, s.yI)("cursor-pointer rounded transition-all", "z-modal absolute right-0 top-0 m-5", b),
                                            children: (0, d.jsx)(u.F, {
                                                className: (0, s.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", y)
                                            })
                                        })
                                    }), f]
                                })
                            })]
                        })
                    })
                })
            }
        },
        38350: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(21484),
                o = (n(17519), n(64386)),
                i = n(44872),
                a = n(40007),
                l = n(65766),
                s = n(16321),
                c = n(55156),
                u = (n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(4676)),
                d = n(7831),
                f = {
                    pagination: "flex flex-nowrap items-center space-x-2",
                    itemBase: "flex items-center justify-center px-3 h-8 rounded select-none focus:outline-none",
                    itemDefault: "bg-fill-3 dark:bg-dark-fill-3 text-label-2 dark:text-dark-label-2",
                    itemDisabled: "disabled:opacity-40 disabled:pointer-events-none",
                    itemHover: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    itemActive: "pointer-events-none bg-paper dark:bg-dark-gray-5 text-label-1 dark:text-dark-label-1 ".concat(a.eq.card)
                },
                m = n(11754),
                p = ["children", "className", "current", "page", "onClickHandler"];

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                    var t, n = e.children,
                        r = e.className,
                        o = e.current,
                        a = e.page,
                        l = e.onClickHandler,
                        s = (0, d.Z)(e, p);
                    return (0, m.jsx)("button", y(y({
                        className: (0, i.yI)(f.itemBase, r, (t = {}, (0, u.Z)(t, f.itemDefault, !o), (0, u.Z)(t, f.itemHover, !o), (0, u.Z)(t, f.itemActive, o), (0, u.Z)(t, f.itemDisabled, s.disabled), t))
                    }, s), {}, {
                        onClick: function() {
                            l && l(a)
                        },
                        children: a || n
                    }))
                },
                h = function(e) {
                    var t = e.className,
                        n = e.currentPage,
                        u = e.totalItems,
                        d = e.onChange,
                        p = e.pageItemClassName,
                        v = e.chevronClassName,
                        y = e.arrowButtonClassName,
                        h = e.itemsPerPage,
                        j = void 0 === h ? 50 : h,
                        g = e.maxPageItems,
                        x = void 0 === g ? 8 : g,
                        C = e.disabled,
                        O = void 0 !== C && C,
                        w = Math.ceil(u / j) || 0,
                        N = x > w ? w : x,
                        I = (0, r.Z)(Array(N)).map((function(e, t) {
                            return function(e, t, n, r) {
                                var o = (n = n < 1 ? 1 : n) - 2,
                                    i = o,
                                    a = r - o + 1,
                                    l = r - n,
                                    s = t - Math.ceil((n - 4) / 2) - 2,
                                    c = n - 1;
                                return 1 === n ? t : n === 1 / 0 || r <= n ? e + 1 : n < 5 ? t + c > r ? l + e + 1 : t + e : 0 === e ? 1 : e + 1 === n ? r : t < i ? e < i ? e + 1 : "gap" : t > a ? e > 1 ? l + e + 1 : "gap" : 1 === e || e + 1 === c ? "gap" : e + s + 1
                            }(t, n, x, w)
                        })),
                        S = n > 1,
                        P = n < w,
                        k = (0, o.useCallback)((function(e) {
                            null != e && d(e)
                        }), [d]);
                    return (0, o.useEffect)((function() {
                        n > w && w ? k(w) : n || k(1)
                    }), [w, k, n]), (0, m.jsxs)("nav", {
                        role: "navigation",
                        className: (0, i.yI)(t, f.pagination),
                        children: [(0, m.jsx)(b, {
                            "aria-label": "prev",
                            disabled: !S || O,
                            onClickHandler: function() {
                                S && k(n - 1)
                            },
                            className: (0, i.yI)(p, y),
                            children: (0, m.jsx)(l.e, {
                                className: (0, i.yI)(a.Cj.label2, v)
                            })
                        }, "prev"), I.map((function(e, t) {
                            return "gap" === e ? (0, m.jsx)(b, {
                                "aria-label": "gap",
                                disabled: !0,
                                className: p,
                                children: (0, m.jsx)(s.q, {
                                    className: a.Cj.label2
                                })
                            }, t) : (0, m.jsx)(b, {
                                current: e === n,
                                page: e,
                                onClickHandler: k,
                                className: p,
                                disabled: O
                            }, t)
                        })), (0, m.jsx)(b, {
                            "aria-label": "next",
                            disabled: !P || O,
                            onClickHandler: function() {
                                P && k(n + 1)
                            },
                            className: (0, i.yI)(p, y),
                            children: (0, m.jsx)(c.V, {
                                className: (0, i.yI)(a.Cj.label2, v)
                            })
                        }, "next")]
                    })
                }
        },
        81134: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                }
            });
            n(64386);
            var r = n(92130),
                o = n.n(r),
                i = n(11754),
                a = function(e) {
                    var t = e.className,
                        n = e.children;
                    return (0, i.jsx)("div", {
                        className: o()("animate-pulse", t),
                        children: n
                    })
                }
        },
        30486: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return a
                }
            });
            n(64386);
            var r = n(44872),
                o = n(40007),
                i = n(11754),
                a = function(e) {
                    var t = e.className,
                        n = e.style;
                    return (0, i.jsx)("div", {
                        className: (0, r.yI)("h-3 rounded-[5px]", o.Cj.fill3, t),
                        style: n
                    })
                }
        },
        38162: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return m
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(59679),
                i = n(7831),
                a = n(64386),
                l = n(44872),
                s = n(40007),
                c = n(11754),
                u = ["value", "autoSize", "onChange", "className", "maxLength", "showRecord", "rows", "wrapperClassName"];

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
            var m = a.forwardRef((function(e, t) {
                var n = e.value,
                    r = void 0 === n ? "" : n,
                    d = e.autoSize,
                    m = void 0 !== d && d,
                    p = e.onChange,
                    v = e.className,
                    y = e.maxLength,
                    b = e.showRecord,
                    h = e.rows,
                    j = e.wrapperClassName,
                    g = (0, i.Z)(e, u),
                    x = (0, a.useCallback)((function(e) {
                        null === p || void 0 === p || p(e.target.value)
                    }), [p]),
                    C = (0, a.useRef)(null),
                    O = (0, a.useCallback)((function(e) {
                        C.current = e, "function" === typeof t ? t(e) : null !== t && void 0 !== t && t.current && (t.current = e)
                    }), []),
                    w = (0, a.useState)(1),
                    N = w[0],
                    I = w[1],
                    S = (0, a.useRef)(null);
                return (0, a.useEffect)((function() {
                    if (m) {
                        var e = S.current;
                        if (e) {
                            var t = new ResizeObserver((function(e) {
                                var t = (0, o.Z)(e, 1)[0];
                                I(t.target.scrollHeight / 20 | 0)
                            }));
                            return t.observe(e),
                                function() {
                                    t.disconnect()
                                }
                        }
                    }
                }), [m]), (0, a.useEffect)((function() {
                    var e = S.current;
                    e && m && I(e.scrollHeight / 20 | 0)
                }), [r, m]), (0, c.jsxs)("div", {
                    className: (0, l.yI)("relative", j),
                    children: [(0, c.jsx)("div", {
                        className: "h-0 overflow-hidden",
                        children: (0, c.jsx)("textarea", {
                            ref: S,
                            className: "w-full resize-none overflow-hidden px-2 leading-5 outline-none",
                            rows: 1,
                            value: r,
                            disabled: !0
                        })
                    }), (0, c.jsx)("textarea", f(f({}, g), {}, {
                        ref: O,
                        maxLength: y,
                        value: r,
                        onChange: x,
                        rows: m ? N : h,
                        className: (0, l.yI)({
                            "overflow-hidden": m
                        }, "w-full rounded-lg px-2 py-2.5 leading-5", "focus:border-green-s border border-transparent outline-none transition-[border-color]", v)
                    })), y && y > 0 && b && (0, c.jsxs)("div", {
                        className: (0, l.yI)("absolute bottom-2 right-2 text-xs", s.Cj.label3),
                        children: [r.length, " / ", y]
                    })]
                })
            }))
        },
        17633: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ew: function() {
                    return f
                },
                mP: function() {
                    return d
                }
            });
            var r = n(59679),
                o = (n(1743), n(91518), n(72029), n(17519), n(61880)),
                i = n(39009),
                a = n(1308),
                l = n(11288),
                s = n(90074),
                c = n(83815),
                u = function(e, t, n) {
                    var i = e.reputationUserReputations,
                        a = e.userProfileUserColors,
                        l = e.userProfileUserPendants,
                        c = i.reduce((function(e, t) {
                            t && (e[t.user.userSlug.toLowerCase()] = {
                                level: t.level,
                                reputation: t.reputation
                            });
                            return e
                        }), {}),
                        u = a.reduce((function(e, n, r) {
                            var i = t[r];
                            return n && i && (e[i] = (0, o.Z)(n)), e
                        }), {}),
                        d = l.reduce((function(e, n, r) {
                            var o = t[r];
                            if (n && o) {
                                var i = n.category === s.mdI.DailyQuestionMedal ? "".concat(n.month, " \u6708\u6253\u5361\u52cb\u7ae0") : n.name;
                                e[o] = {
                                    name: i,
                                    icon: n.config.iconWearing || ""
                                }
                            }
                            return e
                        }), {});
                    return t.reduce((function(e, t) {
                        var o, i, a, l = t.toLowerCase(),
                            s = d[l],
                            f = null !== (o = u[l]) && void 0 !== o ? o : ["", ""],
                            m = (0, r.Z)(f, 2),
                            p = m[0],
                            v = m[1],
                            y = "dark" === n ? v : p;
                        return e[l] = {
                            nameColor: y,
                            activeBadgeIcon: (null === s || void 0 === s ? void 0 : s.icon) || "",
                            activeBadgeName: (null === s || void 0 === s ? void 0 : s.name) || "",
                            reputation: null !== (i = null === (a = c[l]) || void 0 === a ? void 0 : a.level) && void 0 !== i ? i : 0
                        }, e
                    }), {})
                },
                d = function(e, t) {
                    var n = (0, i.Z)((0, o.Z)(e)).map((function(e) {
                        return e.toLowerCase()
                    }));
                    return l.f6.request(s.M2N, {
                        slugs: (0, i.Z)(e)
                    }).then((function(e) {
                        return u(e, n, t)
                    }))
                },
                f = function(e) {
                    var t = (0, i.Z)((0, o.Z)(e)).map((function(e) {
                            return e.toLowerCase()
                        })),
                        n = (0, a.F)().theme;
                    return (0, s.VaZ)(l.f6, {
                        slugs: (0, i.Z)(e)
                    }, {
                        enabled: t.length > 0 && c.ob,
                        select: function(e) {
                            return u(e, t, n)
                        }
                    })
                }
        },
        61420: function(e, t, n) {
            "use strict";
            var r, o, i, a;
            n.d(t, {
                    $4: function() {
                        return o
                    },
                    av: function() {
                        return r
                    },
                    i7: function() {
                        return i
                    },
                    rr: function() {
                        return a
                    }
                }),
                function(e) {
                    e.Hot = "hot", e.MostPosts = "most_posts", e.MostRelevant = "most_relevant", e.MostVotes = "most_votes", e.NewestToOldest = "newest_to_oldest", e.OldestToNewest = "oldest_to_newest", e.RecentActivity = "recent_activity"
                }(r || (r = {})),
                function(e) {
                    e.All = "All", e.Deleted = "Deleted", e.Hidden = "Hidden", e.NeedUpdate = "NeedUpdate", e.Open = "Open", e.Pending = "Pending", e.Reviewed = "Reviewed", e.Muted = "Muted", e.Draft = "Draft"
                }(o || (o = {})),
                function(e) {
                    e[e.Upvote = 1] = "Upvote", e[e.None = 0] = "None", e[e.Downvote = -1] = "Downvote"
                }(i || (i = {})),
                function(e) {
                    e.Body = "BODY", e.Comment = "COMMENT", e.Reply = "REPLY", e.Title = "TITLE"
                }(a || (a = {}))
        },
        59419: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return c
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = (n(91023), n(90074)),
                i = n(11288),
                a = n(74431);

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

            function s(e) {
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
            var c = function(e, t) {
                return (0, o.nV5)(i.f6, {
                    titleSlug: e
                }, s(s({}, t), {}, {
                    enabled: !!e && (null === t || void 0 === t ? void 0 : t.enabled),
                    select: function(e) {
                        if (!e.question) return null;
                        var t = e.question,
                            n = t.questionId,
                            r = t.questionFrontendId,
                            o = t.title,
                            i = t.titleSlug,
                            l = t.isPaidOnly,
                            s = t.difficulty,
                            c = t.likes,
                            u = t.dislikes,
                            d = t.categoryTitle;
                        return {
                            questionId: n || "",
                            questionFrontendId: r || "",
                            title: o,
                            titleSlug: i,
                            isPaidOnly: Boolean(l),
                            difficulty: (0, a.P)(s),
                            likes: Number(c),
                            dislikes: Number(u),
                            categoryTitle: d || ""
                        }
                    }
                }))
            }
        },
        30513: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(90074),
                o = n(11288),
                i = function(e) {
                    return (0, r.Gj3)(o.f6, {
                        titleSlug: e
                    }, {
                        enabled: !!e,
                        select: function(e) {
                            if (!e.question) return null;
                            var t = e.question;
                            return {
                                translatedTitle: t.translatedTitle || "",
                                translatedContent: t.translatedContent || ""
                            }
                        }
                    })
                }
        },
        74431: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return o
                },
                P: function() {
                    return i
                }
            });
            var r = n(6120);

            function o(e) {
                switch (e) {
                    case "ac":
                        return r.lr.Ac;
                    case "notac":
                        return r.lr.Tried;
                    default:
                        return r.lr.NotStarted
                }
            }

            function i(e) {
                switch (e) {
                    case "E":
                    case "Easy":
                        return r.Fd.Easy;
                    case "M":
                    case "Medium":
                        return r.Fd.Medium;
                    case "H":
                    case "Hard":
                        return r.Fd.Hard;
                    default:
                        return console.error("Invalid Question difficulty: ".concat(e)), r.Fd.Easy
                }
            }
        },
        16321: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        46819: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M16.293 9.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 13.586l4.293-4.293z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        19275: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 101.414 1.414L12 10.414l4.293 4.293z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        29965: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        24150: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 14 14",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        d: "M12.44 7.586a.6.6 0 10-1.2 0h1.2zm-6.734 5.035l.117-.588-.117.588zm-2.628-1.405l.424-.424-.424.424zM1.673 8.588l.588-.117-.588.117zm.292-2.966l.554.23-.554-.23zm1.89-2.304l-.333-.499.334.5zm2.853-.265a.6.6 0 000-1.2v1.2zm.25 3.434a.6.6 0 00.848.849l-.849-.849zm5.154-3.457a.6.6 0 10-.849-.849l.849.849zm-2.82-1.197a.6.6 0 000 1.2v-1.2zm2.546.6h.6a.6.6 0 00-.6-.6v.6zm-.6 2.566a.6.6 0 001.2 0h-1.2zm.003 2.587c0 .897-.266 1.774-.764 2.52l.998.666c.63-.943.966-2.052.966-3.186h-1.2zm-.764 2.52a4.533 4.533 0 01-2.035 1.669l.46 1.108a5.733 5.733 0 002.573-2.111l-.998-.667zm-2.035 1.669a4.534 4.534 0 01-2.619.258L5.59 13.21a5.733 5.733 0 003.313-.327l-.46-1.108zm-2.619.258a4.533 4.533 0 01-2.321-1.241l-.849.849A5.733 5.733 0 005.59 13.21l.234-1.177zm-2.321-1.241a4.533 4.533 0 01-1.24-2.321l-1.178.234a5.734 5.734 0 001.57 2.936l.848-.849zm-1.24-2.321a4.533 4.533 0 01.257-2.62l-1.108-.459a5.733 5.733 0 00-.327 3.313l1.177-.234zm.257-2.62a4.533 4.533 0 011.67-2.034l-.667-.998a5.733 5.733 0 00-2.111 2.573l1.108.46zm1.67-2.034a4.533 4.533 0 012.519-.764v-1.2a5.733 5.733 0 00-3.186.966l.667.998zm3.617 3.519l4.306-4.306-.849-.849-4.306 4.306.849.849zm1.487-4.303h2.545v-1.2H9.293v1.2zm1.945-.6v2.566h1.2V2.433h-1.2z"
                    })
                }))
            }))
        },
        91430: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        11148: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        42670: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M20 5h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H4a1 1 0 000 2h1v12a3 3 0 003 3h8a3 3 0 003-3V7h1a1 1 0 100-2zm-6-1v1h-4V4h4zm-5 6a1 1 0 012 0v7a1 1 0 11-2 0v-7zm4 0a1 1 0 112 0v7a1 1 0 11-2 0v-7zM7 7h10v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        88622: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        72400: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.944 9.835a1.25 1.25 0 012.429.417c0 .253-.226.555-.68.857a4.039 4.039 0 01-.886.446 1 1 0 10.632 1.897c.358-.12.855-.34 1.364-.679.952-.635 1.57-1.458 1.57-2.52a3.25 3.25 0 00-6.316-1.081 1 1 0 001.887.663zM11.186 16v.135a1 1 0 102 0V16a1 1 0 10-2 0z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        32829: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        d: "M11.27 6.799l.146-.438c.075-.259.178-.437.308-.534.14-.108.345-.06.615.145.065.054.124.114.178.179a.45.45 0 01.114.226.976.976 0 01.032.373 2.21 2.21 0 01-.13.535l-1.182 3.434c-.054.151-.043.28.032.389a.399.399 0 00.308.146c.087 0 .232-.081.438-.243.205-.173.41-.405.615-.697.216-.292.405-.637.567-1.037a3.63 3.63 0 00.243-1.344c0-.519-.108-1-.324-1.442a3.458 3.458 0 00-.907-1.15 4.033 4.033 0 00-1.345-.778 4.76 4.76 0 00-1.684-.292 4.55 4.55 0 00-1.766.373 5.343 5.343 0 00-2.77 2.738c-.292.659-.438 1.393-.438 2.203 0 .691.13 1.296.389 1.814.26.519.616.95 1.07 1.296.453.335.982.589 1.587.762a7.555 7.555 0 001.96.243 9.97 9.97 0 001.328-.081c.4-.054.783-.151 1.15-.292a5.269 5.269 0 001.07-.6c.345-.258.707-.582 1.085-.971.076-.108.162-.162.26-.162.107-.011.21.01.307.065a.567.567 0 01.243.21.5.5 0 01.13.276.857.857 0 01-.081.55c-.076.162-.26.378-.551.648-.292.27-.61.524-.956.762a6.538 6.538 0 01-1.118.632c-.4.172-.837.307-1.312.405a7.016 7.016 0 01-1.555.162 8.817 8.817 0 01-2.527-.324 6.147 6.147 0 01-2.122-1.021 5.098 5.098 0 01-1.442-1.814c-.357-.735-.535-1.61-.535-2.625 0-1.09.19-2.057.567-2.9.389-.853.891-1.566 1.507-2.138a6.371 6.371 0 012.09-1.328A6.646 6.646 0 019.26 2.7c.875 0 1.674.13 2.398.389.734.259 1.36.62 1.879 1.085.518.465.918 1.02 1.199 1.669.291.648.437 1.36.437 2.138 0 .627-.119 1.237-.356 1.83a5.638 5.638 0 01-.94 1.556c-.389.454-.826.82-1.312 1.102-.486.27-.977.405-1.474.405-.378 0-.675-.087-.891-.26-.216-.172-.378-.437-.486-.793-.346.28-.637.496-.875.648-.238.15-.545.221-.923.21-.443-.01-.8-.102-1.07-.275a1.905 1.905 0 01-.631-.648 2.547 2.547 0 01-.308-.859 5.625 5.625 0 01-.081-.923c0-.465.092-.967.275-1.507.195-.55.46-1.053.794-1.506a4.519 4.519 0 011.247-1.15 2.928 2.928 0 011.62-.47c.227 0 .422.037.584.113.172.076.313.184.42.324.12.13.217.286.292.47.076.173.146.356.211.55zm-2.657 4.374c.324 0 .637-.12.94-.357.313-.248.578-.723.794-1.425.14-.432.243-.746.307-.94.065-.205.103-.373.114-.502.01-.205-.07-.389-.243-.551-.173-.173-.357-.26-.551-.26-.346 0-.659.087-.94.26-.27.173-.502.394-.696.664a3.53 3.53 0 00-.438.907 3.563 3.563 0 00-.178.972c0 .476.092.8.276.972.183.173.388.26.615.26z"
                    })
                }))
            }))
        },
        31956: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13 7a1 1 0 011-1h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 000-8h-2a1 1 0 01-1-1zm-3 10a1 1 0 01-1 1H8A6 6 0 018 6h1a1 1 0 010 2H8a4 4 0 100 8h1a1 1 0 011 1zm-1-6h6a1 1 0 110 2H9a1 1 0 110-2z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        61018: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        26690: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.707 2.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.15 1.221l1.5 2.5a1 1 0 001.714-1.029l-.454-.757a8 8 0 11-6.347 1.119 1 1 0 00-1.112-1.662A9.991 9.991 0 002 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.775-3.347-8.769-7.823-9.762l.53-.53zM13 10a1 1 0 10-2 0v4a1 1 0 00.445.832l3 2a1 1 0 001.11-1.664L13 13.465V10z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        69033: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

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

            function l(e) {
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
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", l(l({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13.27 5.02c.456.1.764.562.727 1.06l-.015.116-2.181 12c-.099.541-.578.893-1.07.784-.457-.1-.765-.562-.728-1.06l.015-.116 2.181-12c.099-.541.578-.893 1.07-.784zm4.65.37l.07.096 3.857 6c.178.277.2.614.067.906l-.067.123-3.857 6c-.304.473-.962.627-1.47.342-.47-.264-.646-.812-.425-1.268l.058-.104L19.678 12l-3.525-5.485c-.283-.44-.161-1.001.264-1.307l.103-.065a1.123 1.123 0 011.4.246zm-11.84 0c.3-.365.83-.49 1.28-.305l.12.058.103.065a.96.96 0 01.326 1.194l-.062.113L4.322 12l3.525 5.485.058.104c.221.456.046 1.005-.425 1.268a1.123 1.123 0 01-1.4-.246l-.07-.097-3.857-6-.067-.122a.939.939 0 010-.784l.067-.123 3.857-6 .07-.096z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        10473: function(e, t, n) {
            "use strict";
            var r, o, i;
            n.d(t, {
                    ZL: function() {
                        return i
                    },
                    f: function() {
                        return r
                    },
                    i6: function() {
                        return o
                    }
                }),
                function(e) {
                    e.Best = "best", e.Hot = "hot", e.MostRelevant = "most_relevant", e.MostVotes = "most_votes", e.NewestToOldest = "newest_to_oldest", e.OldestToNewest = "oldest_to_newest"
                }(r || (r = {})),
                function(e) {
                    e.Up = "up", e.Down = "down", e.None = "none"
                }(o || (o = {})),
                function(e) {
                    e.Abuse = "ABUSE", e.Advertising = "ADVERTISING", e.All = "ALL", e.Fake = "FAKE", e.Illegal = "ILLEGAL", e.NonEnglish = "NON_ENGLISH", e.Other = "OTHER", e.Politics = "POLITICS", e.Sexual = "SEXUAL", e.Terrorism = "TERRORISM", e.Violent = "VIOLENT"
                }(i || (i = {}))
        },
        55272: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return dr
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(19129),
                o = n(4676),
                i = n(22980),
                a = n.n(i),
                l = (n(43969), n(91518), n(58935), n(64386)),
                s = n(79216),
                c = n(40682),
                u = n(6387),
                d = n(38350),
                f = n(88077),
                m = n(36419),
                p = n(44872),
                v = n(46667),
                y = n(79927),
                b = n(24e3),
                h = n(59679),
                j = (n(17519), n(10316)),
                g = n(40007),
                x = n(21476);

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = function() {
                    var e = (0, l.useState)({
                            visible: !1,
                            comment: void 0
                        }),
                        t = e[0],
                        n = e[1];
                    return [t, (0, l.useCallback)((function(e) {
                        return n((function(t) {
                            return O(O({}, t), e)
                        }))
                    }), [n])]
                },
                N = (n(72029), n(57735)),
                I = n(61420),
                S = n(10402),
                P = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (e) {
                        var n = e.value.length || 0;
                        e.setSelectionRange(n, n), t ? setTimeout((function() {
                            return e.focus()
                        }), t) : e.focus()
                    }
                },
                k = n(78559),
                D = n(88620),
                E = n(95498),
                T = function() {
                    var e = (0, l.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, l.useState)(null),
                        o = r[0],
                        i = r[1],
                        a = function() {
                            return n(!0)
                        },
                        s = function() {
                            return n(!1)
                        };
                    return (0, l.useEffect)((function() {
                        if (o) return o.addEventListener("mouseover", a), o.addEventListener("mouseleave", s),
                            function() {
                                o.removeEventListener("mouseover", a), o.removeEventListener("mouseleave", s)
                            }
                    }), [o]), [i, t]
                },
                R = n(17696),
                q = n(161),
                Z = n(91613),
                L = n(59787),
                B = (n(2979), n(90417)),
                M = n(91430),
                _ = n(11148),
                A = n(62358),
                H = n(11754),
                z = function(e) {
                    var t, n = e.voteCount,
                        r = e.disabled,
                        i = e.hasLike,
                        a = e.onLikeClick;
                    return (0, H.jsx)("div", {
                        className: "flex gap-2",
                        children: (0, H.jsx)(A.E, {
                            label: (0, B.ZP)(n),
                            labelClassName: (0, p.yI)("cursor-pointer", i ? [g.Cj.labelGreenStandard, g.Cj.labelGreenStandardHover] : [g.Cj.label3, g.Cj.label2GroupHover]),
                            disabled: r,
                            onIconClick: function() {
                                a()
                            },
                            icon: i ? M.C : _.h,
                            iconClassName: (0, p.yI)("w-[18px] h-[18px] cursor-pointer", (t = {}, (0, o.Z)(t, "".concat(g.Cj.label4), !i && r), (0, o.Z)(t, "".concat(g.Cj.labelGrey6, " ").concat(g.Cj.labelGrey7GroupHover), !i && !r), (0, o.Z)(t, "".concat(g.Cj.labelGreenStandard, " ").concat(g.Cj.labelGreenStandardHover, " "), i), t)),
                            className: (0, p.yI)("group gap-1 transition-colors")
                        })
                    })
                },
                G = (n(37872), n(86003), n(29308), n(27115), n(87121));

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function $(e, t) {
                var n = t.type,
                    r = t.payload;
                switch (n) {
                    case "resetState":
                        return U(U({}, e), {}, {
                            topicId: null,
                            highlightedCommentId: void 0,
                            parentOfHighlightedCommentId: void 0
                        });
                    case "setIntentionTags":
                        return U(U({}, e), {}, {
                            tagNamesMap: new Map(r.map((function(e) {
                                return [e.slug, e.name]
                            })))
                        });
                    default:
                        return U(U({}, e), {}, (0, o.Z)({}, n, r))
                }
            }
            var V = {
                    topicId: null,
                    isModerator: !1,
                    highlightedCommentId: void 0,
                    parentOfHighlightedCommentId: void 0,
                    layoutType: G.Dk.Discuss,
                    commentsTopAnchor: null,
                    tagNamesMap: new Map,
                    content: "",
                    intentionTag: void 0,
                    panelSide: "left",
                    panelIsSmall: !1,
                    containerDom: null,
                    questionSlug: void 0
                },
                Q = (0, l.createContext)({
                    state: V,
                    dispatch: function() {
                        return null
                    }
                });

            function K() {
                return (0, l.useContext)(Q)
            }
            var W = function(e) {
                    var t = e.children,
                        n = e.value,
                        r = (0, l.useReducer)($, U(U({}, V), n)),
                        o = r[0],
                        i = r[1],
                        a = (0, l.useMemo)((function() {
                            return {
                                state: o,
                                dispatch: i
                            }
                        }), [o]);
                    return (0, H.jsx)(Q.Provider, {
                        value: a,
                        children: t
                    })
                },
                Y = n(40473),
                J = n(75881),
                X = n(90074),
                ee = n(11288),
                te = n(84622);

            function ne(e, t) {
                return 1 === t && 1 != e ? -1 : 1 != t && 1 === e ? 1 : 0
            }
            var re, oe, ie, ae = function(e) {
                    var t = (0, Y.NL)();
                    return (0, X.xi3)(ee.f6, {
                        onMutate: function(n) {
                            var r = n.postId,
                                o = n.voteStatus,
                                i = t.getQueryData(e);
                            return t.setQueriesData(e, (function(e) {
                                var t, n = (0, J.Z)(e);
                                if ("commonTopicComments" in n) null === (t = n.commonTopicComments) || void 0 === t || t.edges.forEach((function(e) {
                                    var t = null === e || void 0 === e ? void 0 : e.node;
                                    if (t && t.post.id === r) {
                                        var n, i = null !== (n = t.post.voteStatus) && void 0 !== n ? n : 0;
                                        t.post.voteUpCount = t.post.voteUpCount + ne(o, i), t.post.voteStatus = o
                                    }
                                }));
                                else if ("commentReplyConnection" in n) {
                                    var i;
                                    null === (i = n.commentReplyConnection) || void 0 === i || i.edges.forEach((function(e) {
                                        var t = null === e || void 0 === e ? void 0 : e.node;
                                        if (t && t.post.id === r) {
                                            var n, i = null !== (n = t.post.voteStatus) && void 0 !== n ? n : 0;
                                            t.post.voteUpCount = t.post.voteUpCount + ne(o, i), t.post.voteStatus = o
                                        }
                                    }))
                                }
                                return null !== n && void 0 !== n ? n : {}
                            })), i
                        },
                        onError: function(n, r, o) {
                            t.setQueryData(e, o), (0, te.defaultErrorHandler)(n)
                        },
                        onSuccess: function(e, n) {
                            var r = n.postId;
                            t.setQueriesData(["questionDiscussComments"], (function(t) {
                                var n, o = (0, J.Z)(t);
                                return null === (n = o.commonTopicComments) || void 0 === n || n.edges.forEach((function(t) {
                                    var n, o, i, a, l, s, c = null === t || void 0 === t ? void 0 : t.node;
                                    c && c.post.id === r && (c.post.voteUpCount = null !== (n = null === (o = e.votePost) || void 0 === o || null === (i = o.post) || void 0 === i ? void 0 : i.voteUpCount) && void 0 !== n ? n : 0, c.post.voteStatus = null !== (a = null === (l = e.votePost) || void 0 === l || null === (s = l.post) || void 0 === s ? void 0 : s.voteStatus) && void 0 !== a ? a : 0)
                                })), o
                            }))
                        }
                    })
                },
                le = n(10473);
            ! function(e) {
                e.QdSolutionTab = "QD_Solution_Tab", e.QdDiscussTab = "QD_Discuss_Tab", e.QdSolutionTabComment = "QD_Solution_Tab_comment", e.QdDiscussTabComment = "QD_Discuss_Tab_comment", e.QdSolutionTabReply = "QD_Solution_Tab_reply", e.QdDiscussTabReply = "QD_Discuss_Tab_reply"
            }(re || (re = {})),
            function(e) {
                e.Comment = "comment", e.Reply = "reply"
            }(oe || (oe = {})),
            function(e) {
                e.SolutionTab = "solution_tab", e.DiscussTab = "discuss_tab", e.DescriptionTab = "description_tab"
            }(ie || (ie = {}));
            var se = function(e) {
                    switch (e) {
                        case G.Dk.Solution:
                        case G.Dk.OfficialSolution:
                            return ie.SolutionTab;
                        case G.Dk.Discuss:
                            return ie.DiscussTab;
                        case G.Dk.Description:
                            return ie.DescriptionTab;
                        default:
                            return ""
                    }
                },
                ce = function(e) {
                    var t, n, r, o, i, a, d = e.comment,
                        m = e.isMyself,
                        v = e.trackingCommentType,
                        b = (0, s.$G)("comments").t,
                        h = ae(d.queryKey),
                        j = h.mutateAsync,
                        x = h.isLoading,
                        C = Boolean(null === (t = (0, c.U)()) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.userStatus) || void 0 === r ? void 0 : r.isSignedIn),
                        O = Boolean(null === (o = (0, c.U)()) || void 0 === o || null === (i = o.data) || void 0 === i || null === (a = i.userStatus) || void 0 === a ? void 0 : a.isVerified),
                        w = K().state,
                        N = w.layoutType,
                        I = w.questionSlug,
                        S = d.voteCount,
                        P = d.voteStatus,
                        k = d.postId,
                        D = (0, l.useCallback)((function() {
                            return C ? O || u.y.error((0, H.jsxs)("span", {
                                children: [b("youMust"), " ", (0, H.jsx)("a", {
                                    href: L.Hb.profileHome(),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: (0, p.yI)(g.Cj.labelBlueStandard),
                                    children: b("verifyYourEmail")
                                }), " ", b("first"), "."]
                            }), {
                                itemClassName: g.Cj.bgLayer3
                            }) : u.y.error(b("common:loginRequired"), {
                                itemClassName: g.Cj.bgLayer3
                            }), C && O
                        }), [C, O, b]),
                        E = (0, l.useCallback)((function(e) {
                            D() && j({
                                postId: k,
                                voteStatus: e
                            }).then((function(t) {
                                var n, r;
                                null !== t && void 0 !== t && null !== (n = t.votePost) && void 0 !== n && n.ok ? I && (1 === e && y.d.qdUpVoteCommentClick({
                                    qd_version: (0, f.in)(),
                                    qd_question_slug: I,
                                    qd_comment_pos: se(N),
                                    qd_comment_type: v
                                }), -1 === e && y.d.qdDownVoteCommentClick({
                                    qd_version: (0, f.in)(),
                                    qd_question_slug: I,
                                    qd_comment_pos: se(N),
                                    qd_comment_type: v
                                })) : u.y.error((null === t || void 0 === t || null === (r = t.votePost) || void 0 === r ? void 0 : r.error) || b("somethingWentWrong"), {
                                    itemClassName: g.Cj.bgLayer3
                                })
                            }))
                        }), [D, j, k, b, N, I, v]),
                        T = P === le.i6.Up,
                        R = P === le.i6.Down,
                        q = (0, l.useCallback)((function() {
                            E(T ? 0 : 1)
                        }), [E, T]),
                        Z = (0, l.useCallback)((function() {
                            E(R ? 0 : -1)
                        }), [E, R]);
                    return (0, H.jsx)(z, {
                        disabled: x,
                        isMyself: m,
                        hasLike: T,
                        onLikeClick: q,
                        hasDislike: R,
                        onDislikeClick: Z,
                        voteCount: S
                    })
                },
                ue = n(88622),
                de = function(e) {
                    var t = e.onClick,
                        n = e.showReplies,
                        r = e.showLabel,
                        o = e.repliesNum,
                        i = void 0 === o ? 0 : o,
                        a = (0, s.$G)("comments").t,
                        l = String((0, B.ZP)(i)),
                        c = r ? n ? a("hideReplies") : a("showReplies", {
                            num: l
                        }) : "".concat(l);
                    return i < 1 ? null : (0, H.jsx)(A.E, {
                        label: c,
                        icon: ue.f,
                        iconClassName: (0, p.yI)("w-4.5 h-4.5", g.Cj.labelGrey6, g.Cj.labelGrey7GroupHover),
                        labelClassName: (0, p.yI)(g.Cj.label3, g.Cj.label2GroupHover),
                        className: (0, p.yI)("group shrink-0 cursor-pointer transition-colors"),
                        onClick: t
                    })
                };

            function fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fe(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var pe = l.forwardRef((function(e, t) {
                    return (0, H.jsx)("svg", me(me({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, H.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.83 2.106c.628-.634 1.71-.189 1.71.704v2.065c4.821.94 6.97 4.547 7.73 8.085l-.651.14.652-.134c.157.757-.83 1.192-1.284.565l-.007-.009c-1.528-2.055-3.576-3.332-6.44-3.502v2.352c0 .893-1.082 1.338-1.71.704L1.091 8.295a1 1 0 010-1.408l4.737-4.78zm7.303 8.617C12.08 8.495 10.204 6.68 7.046 6.14c-.47-.08-.84-.486-.84-.99V3.62L2.271 7.591l3.934 3.971V9.667a.993.993 0 011.018-.995c2.397.065 4.339.803 5.909 2.051z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                ve = function(e) {
                    var t = e.onClick,
                        n = e.showLabel,
                        r = (0, s.$G)("comments").t;
                    return (0, H.jsx)(A.E, {
                        onClick: t,
                        label: n ? r("reply") : void 0,
                        icon: pe,
                        iconClassName: (0, p.yI)("w-4.5 h-4.5", g.Cj.labelGrey6, g.Cj.labelGrey7GroupHover),
                        labelClassName: (0, p.yI)(g.Cj.label3, g.Cj.label2GroupHover),
                        className: (0, p.yI)("group cursor-pointer gap-1 transition-colors")
                    })
                },
                ye = n(29965),
                be = function(e) {
                    var t = e.isOwnPost,
                        n = e.onClick,
                        r = e.showLabel,
                        o = (0, s.$G)("comments").t;
                    return K().state.isModerator || t ? (0, H.jsx)(A.E, {
                        onClick: n,
                        label: r ? o("edit") : void 0,
                        icon: ye.P,
                        iconClassName: (0, p.yI)("w-4.5 h-4.5", g.Cj.labelGrey6, g.Cj.labelGrey7GroupHover),
                        labelClassName: (0, p.yI)(g.Cj.label3, g.Cj.label2GroupHover),
                        className: (0, p.yI)("group cursor-pointer gap-1 transition-colors")
                    }) : null
                },
                he = (n(87621), n(51506), n(87651)),
                je = n(24150),
                ge = function(e) {
                    var t = e.commentId,
                        n = e.showLabel,
                        r = e.onShareClick,
                        o = (0, s.$G)("comments").t,
                        i = (0, he.c)(window.location.href, {
                            successDuration: 1e3
                        }),
                        a = (0, h.Z)(i, 2),
                        c = a[0],
                        d = a[1],
                        f = K().state.layoutType;
                    (0, l.useEffect)((function() {
                        c && u.y.success(o("shareCopySuccess"), {
                            itemClassName: g.Cj.bgLayer3
                        })
                    }), [c, o]);
                    var m = (0, l.useCallback)((function() {
                        var e = function(e) {
                            var t = window.location.href.includes("/comments/") ? "".concat(window.location.href.split("/comments/")[0], "/") : window.location.href.split("?")[0];
                            return e !== G.Dk.Description || t.includes("/description/") ? t : "".concat(t, "description/")
                        }(f);
                        d("".concat(e, "comments/").concat(t)), r && r()
                    }), [f, d, t, r]);
                    return (0, H.jsxs)("div", {
                        className: (0, p.yI)("group flex cursor-pointer items-center space-x-1"),
                        onClick: m,
                        children: [(0, H.jsx)("span", {
                            children: (0, H.jsx)(je.Q, {
                                className: (0, p.yI)(g.Cj.labelGrey6, g.Cj.labelGrey7GroupHover, "h-4.5 w-4.5")
                            })
                        }), n && (0, H.jsx)("span", {
                            className: (0, p.yI)(g.Cj.label3, g.Cj.label2GroupHover),
                            children: o("share")
                        })]
                    })
                },
                xe = n(76411),
                Ce = n(86210);
            var Oe = function(e) {
                    var t = (0, Y.NL)();
                    return (0, X.Rhf)(ee.f6, {
                        onMutate: function(n) {
                            var r = t.getQueryData(e);
                            return r && t.setQueryData(e, (function(e) {
                                var t, r = (0, J.Z)(e);
                                return null === (t = r.commonTopicComments) || void 0 === t || t.edges.forEach((function(e) {
                                    var t, r;
                                    (null === e || void 0 === e || null === (t = e.node) || void 0 === t ? void 0 : t.id) === String(n.id) && null !== e && void 0 !== e && null !== (r = e.node) && void 0 !== r && r.post && (e.node.post.status = n.hide ? I.$4.Muted : I.$4.Open)
                                })), r
                            })), r
                        },
                        onError: function(n, r, o) {
                            t.setQueryData(e, o)
                        },
                        onSuccess: function() {
                            t.invalidateQueries(e)
                        }
                    })
                },
                we = function(e) {
                    var t = e.comment,
                        n = e.updateModal,
                        r = (0, s.$G)("comments").t,
                        o = Oe(t.queryKey).mutateAsync,
                        i = t.isHidden,
                        a = r(i ? "showComment" : "hideComment"),
                        c = (0, l.useCallback)((function() {
                            n({
                                loading: !0
                            }), o({
                                postId: t.postId,
                                hide: !i,
                                id: t.id
                            }).then((function(e) {
                                if ("hidePost" in e) {
                                    var t, o, a, l;
                                    if (null === (t = e.hidePost) || void 0 === t || !t.ok) return void u.y.error((null === (l = e.hidePost) || void 0 === l ? void 0 : l.error) || r("somethingWentWrong"), {
                                        itemClassName: g.Cj.bgLayer3
                                    });
                                    var s = !(null === (o = e.hidePost) || void 0 === o || null === (a = o.post) || void 0 === a || !a.isHidden);
                                    u.y.success(r(s ? "hideSuccess" : "showSuccess"), {
                                        itemClassName: g.Cj.bgLayer3
                                    })
                                } else u.y.success(r(i ? "showSuccess" : "hideSuccess"), {
                                    itemClassName: g.Cj.bgLayer3
                                });
                                n({
                                    loading: !1,
                                    visible: !1
                                })
                            }))
                        }), [n, o, t.postId, t.id, i, r]),
                        d = (0, l.useCallback)((function() {
                            n({
                                visible: !0,
                                variant: i ? "info" : "danger",
                                confirmText: r(i ? "confirmShowComment" : "confirmHideComment"),
                                confirmBtn: r(i ? "showComment" : "hideComment"),
                                onConfirm: c
                            })
                        }), [n, c, i, r]);
                    return (0, H.jsx)(xe.T, {
                        onClick: d,
                        children: a
                    })
                };
            var Ne, Ie = function(e) {
                    var t = e.queryClient,
                        n = e.key,
                        r = e.parentKey;
                    t.invalidateQueries(n), t.invalidateQueries(["tabsStatus"]), r && t.invalidateQueries(r)
                },
                Se = function() {
                    var e = (0, Y.NL)();
                    return (0, X.soE)(ee.f6, {
                        onSuccess: function() {
                            e.invalidateQueries(["questionDiscussComments"])
                        }
                    })
                },
                Pe = n(61291);

            function ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ke(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }! function(e) {
                e.QuestionComment = "questionDiscussComments", e.Reply = "commentReplies"
            }(Ne || (Ne = {}));
            var Ee = function(e) {
                var t = e.postId,
                    n = e.commentId,
                    r = e.changeComment,
                    o = e.queryClient,
                    i = e.key;
                o.setQueryData(i, (function(e) {
                    var o = function(e, t) {
                            var n;
                            switch (e[0]) {
                                case Ne.QuestionComment:
                                    return (null === t || void 0 === t || null === (n = t.topicComments) || void 0 === n ? void 0 : n.data) || [];
                                case Ne.Reply:
                                    return (null === t || void 0 === t ? void 0 : t.commentReplies) || []
                            }
                        }(i, e),
                        a = null === o || void 0 === o ? void 0 : o.map((function(e) {
                            return e.post.id === t || e.id === n ? r(e) : e
                        })),
                        l = function(e, t, n) {
                            switch (e[0]) {
                                case Ne.QuestionComment:
                                    return {
                                        topicComments: De(De({}, n.topicComments), {}, {
                                            data: t
                                        })
                                    };
                                case Ne.Reply:
                                    return {
                                        commentReplies: t
                                    }
                            }
                        }(i, a, e);
                    return De({}, l)
                }))
            };

            function Te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var qe = function(e) {
                    var t = e.postId,
                        n = e.queryClient,
                        r = e.key,
                        o = e.status;
                    Ee({
                        postId: t,
                        changeComment: function(e) {
                            var t = Re({}, e);
                            return t.post = Re(Re({}, t.post), {}, {
                                status: o,
                                isHidden: !1
                            }), t
                        },
                        queryClient: n,
                        key: r
                    })
                },
                Ze = Pe.AG,
                Le = function(e) {
                    var t = e.comment,
                        n = e.parentComment,
                        r = e.topicId,
                        o = e.updateModal,
                        i = (0, s.$G)("comments").t,
                        a = (0, Y.NL)(),
                        c = Se().mutateAsync,
                        d = Ze().mutateAsync,
                        f = t.status === I.$4.Deleted,
                        m = i(f ? "restore" : "delete"),
                        p = (0, l.useCallback)((function() {
                            if (o({
                                    loading: !0
                                }), f) {
                                if (!d) return;
                                d({
                                    commentId: t.id
                                }).then((function(e) {
                                    var n, r, l;
                                    if (null !== (n = e.approveComment) && void 0 !== n && n.ok) {
                                        u.y.success(i("restoreSuccess"), {
                                            itemClassName: g.Cj.bgLayer3
                                        });
                                        var s = (null === (r = e.approveComment) || void 0 === r || null === (l = r.post) || void 0 === l ? void 0 : l.status) || I.$4.All;
                                        qe({
                                            postId: t.postId,
                                            queryClient: a,
                                            key: t.queryKey,
                                            status: s
                                        }), o({
                                            loading: !1,
                                            visible: !1
                                        })
                                    } else {
                                        var c;
                                        u.y.error(!(null !== (c = e.approveComment) && void 0 !== c && c.error) || i("deleteCommentError"), {
                                            itemClassName: g.Cj.bgLayer3
                                        })
                                    }
                                }))
                            } else c({
                                commentId: t.id
                            }).then((function(e) {
                                var l, s;
                                null !== (l = e.deleteComment) && void 0 !== l && l.ok ? (u.y.success(i("deleteSuccess"), {
                                    itemClassName: g.Cj.bgLayer3
                                }), Ie({
                                    postId: t.postId,
                                    queryClient: a,
                                    key: t.queryKey,
                                    parentKey: null === n || void 0 === n ? void 0 : n.queryKey,
                                    topicId: r
                                }), o({
                                    loading: !1,
                                    visible: !1
                                })) : u.y.error(!(null !== (s = e.deleteComment) && void 0 !== s && s.error) || i("deleteCommentError"), {
                                    itemClassName: g.Cj.bgLayer3
                                })
                            }))
                        }), [o, c, d, a, f, t.id, t.postId, t.queryKey, null === n || void 0 === n ? void 0 : n.queryKey, r, i]),
                        v = (0, l.useCallback)((function() {
                            o({
                                visible: !0,
                                variant: f ? "info" : "danger",
                                confirmText: i(f ? "confirmRestoreComment" : "confirmDeleteComment"),
                                confirmBtn: i(f ? "restore" : "delete"),
                                onConfirm: p
                            })
                        }), [o, p, f, i]);
                    return (0, H.jsx)(xe.T, {
                        onClick: v,
                        children: m
                    })
                },
                Be = function(e) {
                    var t;
                    return {
                        hiddenCls: (0, p.yI)((t = {}, (0, o.Z)(t, "opacity-1", e.isOwnPost || !e.isHidden && e.status !== I.$4.Deleted), (0, o.Z)(t, "opacity-40", !e.isOwnPost && (e.isHidden || e.status === I.$4.Deleted)), t)),
                        authorCls: "text-[14px]",
                        CreatedAtCls: e.ipRegion ? "!min-w-fit" : "",
                        moreActionsHiddenCls: ""
                    }
                },
                Me = Ce.E,
                _e = Ce.E,
                Ae = function(e) {
                    var t = e.comment,
                        n = e.updateConfirmModal,
                        r = e.updateReportModal,
                        o = e.updateMoveToSolutionsModal,
                        i = e.isPinnable,
                        a = void 0 === i || i,
                        c = (0, s.$G)("comments").t,
                        d = (0, D.r)().isSignedIn,
                        f = (0, l.useCallback)((function() {
                            d ? r({
                                visible: !0,
                                comment: t
                            }) : u.y.error(c("common:loginRequired"))
                        }), [d, r, t, c]),
                        m = (0, l.useCallback)((function() {
                            o({
                                visible: !0,
                                comment: t
                            })
                        }), [o, t]),
                        v = Be(t).moreActionsHiddenCls,
                        y = K().state.isModerator;
                    return !y && t.isOwnPost ? null : (0, H.jsxs)(xe.l, {
                        btnClassName: (0, p.yI)("w-4.5 h-4.5", v),
                        iconClassName: "w-4.5 h-4.5",
                        children: [y && a && (0, H.jsx)(Me, {
                            comment: t,
                            updateModal: n
                        }), y && (0, H.jsx)(we, {
                            comment: t,
                            updateModal: n
                        }), !t.isOwnPost && (0, H.jsx)(xe.T, {
                            onClick: f,
                            children: c("report")
                        }), y && (0, H.jsx)(Le, {
                            comment: t,
                            updateModal: n
                        }), y && (0, H.jsx)(_e, {
                            onClick: m,
                            children: c("move")
                        })]
                    })
                },
                He = n(19275),
                ze = n(17633),
                Ge = function(e) {
                    var t = e.status,
                        n = e.isHidden,
                        r = (0, s.$G)("comments").t,
                        o = K().state.isModerator,
                        i = n ? r("hidden") : t;
                    return o ? (0, H.jsx)("div", {
                        className: (0, p.yI)(g.Cj.label4, "text-xs capitalize"),
                        children: i
                    }) : null
                },
                Fe = n(26690),
                Ue = n(42670),
                $e = function(e) {
                    var t = e.comment,
                        n = e.parentComment,
                        r = e.topicId,
                        o = e.updateModal,
                        i = (0, s.$G)("comments").t,
                        a = (0, Y.NL)(),
                        c = Se().mutateAsync,
                        d = Ze().mutateAsync,
                        f = t.status === I.$4.Deleted,
                        m = (0, l.useMemo)((function() {
                            return f ? Fe.H : Ue.j
                        }), [f]),
                        v = (0, l.useCallback)((function() {
                            if (o({
                                    loading: !0
                                }), f) {
                                if (!d) return;
                                d({
                                    commentId: t.id
                                }).then((function(e) {
                                    var n, r, l;
                                    if (null !== (n = e.approveComment) && void 0 !== n && n.ok) {
                                        u.y.success(i("restoreSuccess"), {
                                            itemClassName: g.Cj.bgLayer3
                                        });
                                        var s = (null === (r = e.approveComment) || void 0 === r || null === (l = r.post) || void 0 === l ? void 0 : l.status) || I.$4.All;
                                        qe({
                                            postId: t.postId,
                                            queryClient: a,
                                            key: t.queryKey,
                                            status: s
                                        }), o({
                                            loading: !1,
                                            visible: !1
                                        })
                                    } else {
                                        var c;
                                        u.y.error(!(null !== (c = e.approveComment) && void 0 !== c && c.error) || i("deleteCommentError"), {
                                            itemClassName: g.Cj.bgLayer3
                                        })
                                    }
                                }))
                            } else c({
                                commentId: t.id
                            }).then((function(e) {
                                var l, s;
                                null !== (l = e.deleteComment) && void 0 !== l && l.ok ? (u.y.success(i("deleteSuccess"), {
                                    itemClassName: g.Cj.bgLayer3
                                }), Ie({
                                    postId: t.postId,
                                    queryClient: a,
                                    key: t.queryKey,
                                    parentKey: null === n || void 0 === n ? void 0 : n.queryKey,
                                    topicId: r
                                }), o({
                                    loading: !1,
                                    visible: !1
                                })) : u.y.error(!(null !== (s = e.deleteComment) && void 0 !== s && s.error) || i("deleteCommentError"), {
                                    itemClassName: g.Cj.bgLayer3
                                })
                            }))
                        }), [o, c, d, a, f, t.id, t.postId, t.queryKey, null === n || void 0 === n ? void 0 : n.queryKey, r, i]),
                        y = i(f ? "restore" : "delete"),
                        b = (0, l.useCallback)((function() {
                            o({
                                visible: !0,
                                variant: f ? "info" : "danger",
                                confirmText: i(f ? "confirmRestoreComment" : "confirmDeleteComment"),
                                confirmBtn: i(f ? "restore" : "delete"),
                                onConfirm: v
                            })
                        }), [o, v, f, i]);
                    return (0, H.jsx)(A.E, {
                        onClick: b,
                        icon: m,
                        label: y,
                        labelClassName: (0, p.yI)(g.M$.label1Group),
                        iconClassName: (0, p.yI)(g.M$.labelGrey7Group, "h-4.5 w-4.5"),
                        className: (0, p.yI)("group cursor-pointer gap-1")
                    })
                };
            n(81248), n(91023), n(59545), n(55699), n(52799), n(66128), n(6755), n(56806), n(3500), n(33407);

            function Ve(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return Qe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qe(e, t)
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

            function Qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Ke = function(e) {
                    var t, n = e.matchAll(/\[\@[^\]]+\]\(\/u\/([^/]+)\)/g),
                        r = new Set,
                        o = Ve(n);
                    try {
                        for (o.s(); !(t = o.n()).done;) {
                            var i = t.value;
                            null !== i && void 0 !== i && i[1] && r.add(i[1])
                        }
                    } catch (a) {
                        o.e(a)
                    } finally {
                        o.f()
                    }
                    return Array.from(r)
                },
                We = n(21484);

            function Ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Xe = function(e) {
                    var t = e.comment,
                        n = e.queryClient,
                        r = e.key,
                        o = e.parentComment;
                    if ((r[0] === Ne.QuestionComment ? Ne.QuestionComment : Ne.Reply) === Ne.QuestionComment) {
                        var i = r[1],
                            a = [r[0], Je(Je({}, i), {}, {
                                skip: 0
                            })],
                            l = t;
                        n.setQueryData(a, (function(e) {
                            var t, n = (0, J.Z)(e);
                            return null !== n && void 0 !== n && null !== (t = n.commonTopicComments) && void 0 !== t && t.edges && (n.commonTopicComments.edges = [{
                                node: l
                            }].concat((0, We.Z)(n.commonTopicComments.edges))), n
                        }))
                    } else n.invalidateQueries(r);
                    o && n.setQueryData(o.queryKey, (function(e) {
                        var t, n = (0, J.Z)(e);
                        n && (null === (t = n.commonTopicComments) || void 0 === t || t.edges.forEach((function(e) {
                            var t;
                            if (Number(null === e || void 0 === e || null === (t = e.node) || void 0 === t ? void 0 : t.id) === o.id) {
                                var n = e.node.numChildren || 0;
                                e.node.numChildren = n + 1
                            }
                        })));
                        return n
                    }))
                },
                et = function() {
                    return (0, X.sHn)(ee.f6)
                };
            var tt, nt, rt, ot = function(e) {
                    var t = e.queryClient,
                        n = e.key;
                    t.invalidateQueries(n)
                },
                it = function() {
                    return (0, X.oRU)(ee.f6)
                },
                at = function(e) {
                    return e.trim().length < 3
                },
                lt = function(e) {
                    return e
                },
                st = function(e) {
                    var t = e.queryKey,
                        n = e.parentComment,
                        o = e.existingComment,
                        i = e.initialContent,
                        c = e.initialIntentionTag,
                        d = e.saveDraft,
                        f = e.setPageNo,
                        m = (0, s.$G)("comments").t,
                        p = (0, l.useState)((null === o || void 0 === o ? void 0 : o.content) || i || ""),
                        v = p[0],
                        y = p[1],
                        b = (0, l.useState)(c || void 0),
                        h = b[0],
                        j = b[1],
                        x = (0, l.useState)(!1),
                        C = x[0],
                        O = x[1],
                        w = K(),
                        N = w.state,
                        I = N.topicId,
                        S = N.questionSlug,
                        P = w.dispatch,
                        k = Number(I),
                        D = (0, Y.NL)(),
                        E = et().mutateAsync,
                        T = it().mutateAsync,
                        R = (0, l.useCallback)((function(e) {
                            y(e), d && P({
                                type: "content",
                                payload: e
                            })
                        }), [d, P]),
                        q = (0, l.useCallback)((function(e) {
                            j(e), d && P({
                                type: "intentionTag",
                                payload: e
                            })
                        }), [d, P]),
                        Z = function() {
                            var e = (0, r.Z)(a().mark((function e() {
                                var r;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!C) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                ok: !1
                                            });
                                        case 2:
                                            if (!at(v)) {
                                                e.next = 5;
                                                break
                                            }
                                            return u.y.error(m("tooShort"), {
                                                itemClassName: g.Cj.bgLayer3
                                            }), e.abrupt("return", {
                                                ok: !1
                                            });
                                        case 5:
                                            return O(!0), r = (null === n || void 0 === n ? void 0 : n.id) || 0, e.abrupt("return", E({
                                                topicId: k,
                                                intentionTagSlug: h,
                                                parentCommentId: r,
                                                content: lt(v),
                                                mentionedUserSlugs: Ke(v)
                                            }).then((function(e) {
                                                var r, o, i;
                                                if (null === e || void 0 === e || null === (r = e.createComment) || void 0 === r || !r.ok || null === e || void 0 === e || null === (o = e.createComment) || void 0 === o || !o.comment) return u.y.error((null === e || void 0 === e || null === (i = e.createComment) || void 0 === i ? void 0 : i.error) || m("somethingWentWrong"), {
                                                    itemClassName: g.Cj.bgLayer3
                                                }), {
                                                    ok: !1
                                                };
                                                var a = e.createComment.comment;
                                                return u.y.success(m("postSuccess"), {
                                                    itemClassName: g.Cj.bgLayer3
                                                }), Xe({
                                                    comment: a,
                                                    queryClient: D,
                                                    key: t,
                                                    parentComment: n,
                                                    questionSlug: S,
                                                    topicId: k
                                                }), R(""), q(void 0), f && f(1), {
                                                    ok: !0
                                                }
                                            })).finally((function() {
                                                return O(!1)
                                            })));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        L = function() {
                            var e = (0, r.Z)(a().mark((function e() {
                                var n;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!C) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                ok: !1
                                            });
                                        case 2:
                                            if (!at(v)) {
                                                e.next = 5;
                                                break
                                            }
                                            return u.y.error(m("tooShort"), {
                                                itemClassName: g.Cj.bgLayer3
                                            }), e.abrupt("return", {
                                                ok: !1
                                            });
                                        case 5:
                                            return O(!0), n = (null === o || void 0 === o ? void 0 : o.id) || 0, e.abrupt("return", T({
                                                commentId: n,
                                                content: v,
                                                mentionedUserSlugs: Ke(v)
                                            }).then((function(e) {
                                                var r, o, i, a, l;
                                                if (O(!1), null === e || void 0 === e || null === (r = e.updateComment) || void 0 === r || !r.ok || null === e || void 0 === e || null === (o = e.updateComment) || void 0 === o || !o.comment) return u.y.error((null === e || void 0 === e || null === (l = e.updateComment) || void 0 === l ? void 0 : l.error) || m("somethingWentWrong"), {
                                                    itemClassName: g.Cj.bgLayer3
                                                }), {
                                                    ok: !1
                                                };
                                                var s = (null === (i = e.updateComment.comment) || void 0 === i || null === (a = i.post) || void 0 === a ? void 0 : a.content) || "";
                                                return ot({
                                                    content: s,
                                                    commentId: n,
                                                    queryClient: D,
                                                    key: t
                                                }), {
                                                    ok: !0
                                                }
                                            })));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return {
                        onSave: Z,
                        onEdit: L,
                        isSaving: C,
                        value: v,
                        onCommentChange: R,
                        intentionTag: h,
                        onIntentionTagChange: q
                    }
                },
                ct = n(7831),
                ut = n(81245),
                dt = n.n(ut),
                ft = n(91510),
                mt = function(e) {
                    var t = e.mentionInfo,
                        n = e.hideSelf,
                        r = e.onMentionSelect,
                        o = e.topicId,
                        i = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        s = (0, l.useRef)(!1),
                        c = t.top,
                        u = t.left,
                        d = t.right,
                        f = t.visible,
                        m = (0, l.useCallback)((function(e) {
                            var t = e.insertedContent;
                            r(t), n()
                        }), [n, r]);
                    return (0, l.useEffect)((function() {
                        var e = i.current;
                        f && e && (e.style.top = "".concat(c, "px"), e.style.left = void 0 !== u ? "".concat(u, "px") : "", e.style.right = void 0 !== d ? "".concat(d, "px") : "")
                    }), [c, u, d, f]), (0, l.useEffect)((function() {
                        var e = s.current;
                        f && i.current && a.current && !e && a.current.focus(), s.current = f
                    }), [f]), (0, H.jsx)("div", {
                        ref: i,
                        className: (0, p.yI)("z-base-1 absolute box-content rounded-lg", {
                            block: f,
                            hidden: !f
                        }),
                        children: f && (0, H.jsx)(ft.p, {
                            onBlur: n,
                            onSelect: m,
                            topicId: o
                        })
                    })
                };
            ! function(e) {
                e.Full = "full", e.Slim = "slim"
            }(tt || (tt = {})),
            function(e) {
                e.InlineCode = "code-inline", e.CodeBlock = "code", e.Link = "link", e.BulletList = "list", e.NumberList = "number-list", e.Mention = "@", e.Problem = "#"
            }(nt || (nt = {})),
            function(e) {
                e.User = "user", e.Problem = "problem"
            }(rt || (rt = {}));
            var pt = n(25590),
                vt = n(593),
                yt = n(15395),
                bt = n(69033),
                ht = n(31956),
                jt = n(32829),
                gt = n(83815),
                xt = (0, n(99663).t)({
                    highlight: !0,
                    gfm: !0,
                    math: !0,
                    html: !0,
                    mcqs: gt.Oo,
                    diaporama: gt.Oo,
                    imageSize: !0,
                    embedVideos: gt.Oo,
                    normalVideo: !0,
                    groupedCode: !0,
                    relAttribute: !0,
                    httpsImagesOnly: !0,
                    premiumOnlyVideo: gt.Oo,
                    htmlSanitization: !0,
                    preserveLineBreaks: gt.Oo,
                    nodebbImageTransformation: gt.Oo,
                    brokenImageHolder: !0,
                    linkSift: gt.ob,
                    linkTargetBlank: !0,
                    aliPlayerVideo: gt.ob,
                    slides: gt.ob,
                    toc: !0,
                    customComponent: !0
                }),
                Ct = (0, l.memo)((function(e) {
                    var t = e.content;
                    return t ? (0, H.jsx)(xt, {
                        content: t
                    }) : null
                })),
                Ot = n(66455),
                wt = ["onInsertRule", "onCancel", "className", "placeholder", "onSave", "intentionTag", "onIntentionTagChange", "onSaveText", "disabled", "onChange", "value", "defaultValue"];

            function Nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function It(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Nt(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var St = (0, p.yI)("transition-colors cursor-pointer py-[5px] px-3 rounded-lg"),
                Pt = Ce.E,
                kt = function(e) {
                    var t = e.rule,
                        n = e.onClick,
                        r = e.icon,
                        o = e.className,
                        i = (0, l.useCallback)((function() {
                            return n(t)
                        }), [n, t]);
                    return (0, H.jsx)("div", {
                        className: (0, p.yI)("flex cursor-pointer items-center rounded-[5px] p-1 text-base", g.Cj.labelGrey7, g.Cj.fill4Hover, o),
                        onClick: i,
                        children: r
                    })
                },
                Dt = (0, l.forwardRef)((function(e, t) {
                    var n, i, c, u = e.onInsertRule,
                        d = e.onCancel,
                        m = e.className,
                        v = e.placeholder,
                        b = e.onSave,
                        j = e.intentionTag,
                        x = e.onIntentionTagChange,
                        C = e.onSaveText,
                        O = e.disabled,
                        w = e.onChange,
                        N = e.value,
                        I = e.defaultValue,
                        S = (0, ct.Z)(e, wt),
                        P = (0, s.$G)("comments").t,
                        k = (0, l.useRef)(null),
                        D = K().state,
                        E = D.layoutType,
                        T = D.questionSlug,
                        R = (0, vt.O)(!1),
                        q = (0, h.Z)(R, 2),
                        Z = q[0],
                        L = q[1],
                        B = (0, l.useCallback)((function() {
                            T && !Z && y.d.qdPreviewCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: T,
                                qd_comment_pos: se(E)
                            }), L.toggle()
                        }), [L, E, T, Z]),
                        M = [G.Dk.Discuss, G.Dk.Description].includes(E),
                        _ = M && !Z && !I,
                        A = (0, p.yI)("w-full resize-none bg-transparent p-4 text-md outline-0 outline-none dark:bg-transparent min-h-[80px]", g.Cj.placeholderLabel4, m),
                        z = (0, p.yI)({
                            hidden: Z,
                            inherit: !Z
                        }),
                        F = O || 0 === (null === N || void 0 === N ? void 0 : N.trim().length),
                        U = (0, l.useCallback)((0, r.Z)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b();
                                    case 2:
                                        L.off();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [b, L]);
                    return (0, H.jsxs)("div", {
                        className: (0, p.yI)("flex w-full flex-col rounded-[13px]", g.Cj.bgLayer2, g.eq.card),
                        ref: k,
                        children: [Z && (0, H.jsx)("div", {
                            className: (0, p.yI)("min-h-[80px]", A),
                            children: (0, H.jsx)(Ct, {
                                content: N
                            })
                        }), (0, H.jsx)(pt.Z, It(It(It({
                            disabled: O,
                            value: N,
                            onChange: w
                        }, S), yt.g), {}, {
                            ref: t,
                            placeholder: v || P("typeCommentHere"),
                            className: (0, p.yI)(A, z)
                        })), (0, H.jsxs)("div", {
                            className: "relative box-content flex h-8 items-end p-4",
                            children: [(0, H.jsxs)("div", {
                                className: "flex flex-1 flex-col",
                                children: [M && !Z && _ && (0, H.jsx)(Pt, {
                                    intentionTag: j,
                                    setIntentionTag: x
                                }), (0, H.jsxs)("div", {
                                    className: (0, p.yI)("flex h-8 items-end gap-2", z),
                                    children: [(0, H.jsx)(kt, {
                                        onClick: u,
                                        icon: (0, H.jsx)(bt.w, {}),
                                        rule: nt.InlineCode
                                    }), (0, H.jsx)(kt, {
                                        onClick: u,
                                        icon: (0, H.jsx)(ht.J, {}),
                                        rule: nt.Link
                                    }), (0, H.jsx)(kt, {
                                        onClick: u,
                                        icon: (0, H.jsx)(jt.Z, {}),
                                        rule: nt.Mention
                                    })]
                                })]
                            }), (0, H.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, H.jsx)(Ot.z, {
                                    disabled: F,
                                    className: (0, p.yI)(St, g.Cj.label3, (n = {}, (0, o.Z)(n, g.Cj.label2Hover, !F), (0, o.Z)(n, (0, p.yI)(g.Cj.labelBlueStandard, g.Cj.labelBlue3Hover), Z), (0, o.Z)(n, "cursor-not-allowed", F), n), "bg-transparent hover:!bg-transparent dark:bg-transparent"),
                                    onClick: B,
                                    children: P(Z ? "editor" : "preview")
                                }), d && (0, H.jsx)(Ot.z, {
                                    disabled: O,
                                    onClick: d,
                                    className: (0, p.yI)(St, g.Cj.fill2, g.Cj.fill3Hover, "text-label-1 dark:text-white", (i = {}, (0, o.Z)(i, "opacity-40", O), (0, o.Z)(i, "opacty-100", !O), i)),
                                    children: P("cancel")
                                }), (0, H.jsx)(Ot.z, {
                                    disabled: O || 0 === (null === N || void 0 === N ? void 0 : N.trim().length),
                                    onClick: U,
                                    className: (0, p.yI)(St, g.Cj.bgGreenStandard, g.Cj.bgGreen3Hover, g.Cj.labelWhite, (c = {}, (0, o.Z)(c, "opacity-40", O), (0, o.Z)(c, "opacty-100", !O), c)),
                                    children: C || P("comment")
                                })]
                            })]
                        })]
                    })
                })),
                Et = n(4499),
                Tt = ["onCancel", "className", "placeholder", "onSave", "onChange", "onSaveText", "disabled", "value"];

            function Rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Zt = (0, p.yI)("transition-colors cursor-pointer py-[4px] px-3 rounded-[20px]"),
                Lt = (0, l.forwardRef)((function(e, t) {
                    var n, r, i = e.onCancel,
                        a = e.className,
                        l = e.placeholder,
                        c = e.onSave,
                        u = e.onChange,
                        d = e.onSaveText,
                        f = e.disabled,
                        m = e.value,
                        v = (0, ct.Z)(e, Tt),
                        y = (0, s.$G)("comments").t,
                        b = (0, Et.Z)(v, ["intentionTag", "onInsertRule", "onIntentionTagChange"]);
                    return (0, H.jsxs)("div", {
                        children: [(0, H.jsx)("div", {
                            children: (0, H.jsx)(pt.Z, qt(qt(qt({}, b), yt.g), {}, {
                                ref: t,
                                disabled: f,
                                value: m,
                                onChange: u,
                                placeholder: l || y("typeCommentHere"),
                                className: (0, p.yI)("w-full resize-none rounded-[13px] bg-transparent p-2.5 text-sm outline-none dark:bg-transparent", g.Cj.bgLayer2, g.eq.card, g.Cj.placeholderLabel4, a),
                                rows: 1
                            }))
                        }), (0, H.jsx)("div", {
                            className: "ml-2 mt-2 flex",
                            children: (0, H.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end space-x-4",
                                children: [(0, H.jsx)(Ot.z, {
                                    onClick: i,
                                    disabled: f,
                                    className: (0, p.yI)(Zt, g.Cj.fill3, g.Cj.label2, (n = {}, (0, o.Z)(n, "opacity-40", f), (0, o.Z)(n, "opacty-100", !f), n)),
                                    children: y("cancel")
                                }), (0, H.jsx)(Ot.z, {
                                    onClick: c,
                                    disabled: f || 0 === (null === m || void 0 === m ? void 0 : m.trim().length),
                                    className: (0, p.yI)(Zt, g.Cj.bgGreenStandard, g.Cj.bgGreen3Hover, g.Cj.labelWhite, (r = {}, (0, o.Z)(r, "opacity-40", f), (0, o.Z)(r, "opacty-100", !f), r)),
                                    children: d || y("comment")
                                })]
                            })
                        })]
                    })
                })),
                Bt = n(55407),
                Mt = new Map([
                    [nt.InlineCode, function(e) {
                        return "`".concat(e, "`")
                    }],
                    [nt.CodeBlock, function(e) {
                        return "```".concat(e, "```")
                    }],
                    [nt.Link, function(e) {
                        return "[".concat(e, "](").concat(e, ")")
                    }]
                ]),
                _t = function(e) {
                    var t = e.rule,
                        n = e.textareaEle,
                        r = e.defaultTemplate,
                        o = Bt.Mf(n),
                        i = r;
                    if (o && function(e) {
                            return !!Mt.has(e)
                        }(t)) {
                        var a = function(e) {
                            return Mt.get(e)
                        }(t);
                        i = a ? a(o) : r
                    }
                    Bt.$T(n, i)
                },
                At = ["className", "variation", "disabled", "value", "onSave", "onSaveText", "topicId", "placeholder", "defaultValue", "innerRef", "onCancel", "intentionTag", "onIntentionTagChange"],
                Ht = function(e) {
                    var t = e.className,
                        n = e.variation,
                        o = void 0 === n ? tt.Full : n,
                        i = e.disabled,
                        c = void 0 !== i && i,
                        u = e.value,
                        d = e.onSave,
                        f = e.onSaveText,
                        m = e.topicId,
                        p = e.placeholder,
                        v = e.defaultValue,
                        y = e.innerRef,
                        b = e.onCancel,
                        h = e.intentionTag,
                        j = e.onIntentionTagChange,
                        g = (0, ct.Z)(e, At),
                        x = (0, l.useCallback)((function(e) {
                            j && j(e)
                        }), [j]),
                        C = (0, s.$G)("comments").t,
                        O = (0, l.useState)({
                            top: 0,
                            left: 0,
                            visible: !1
                        }),
                        w = O[0],
                        N = O[1],
                        I = y,
                        S = (0, l.useRef)((v || "").length),
                        P = (0, l.useCallback)((function(e) {
                            switch (e) {
                                case nt.InlineCode:
                                    return " `".concat(C("mdRules.inlineCode"), "your inline code...`");
                                case nt.CodeBlock:
                                    return "\n```\n".concat(C("mdRules.codeBlock"), "\n```\n");
                                case nt.Link:
                                    return "[".concat(C("mdRules.link"), "](").concat(C("mdRules.href"), ")");
                                case nt.Mention:
                                    return " @";
                                default:
                                    return ""
                            }
                        }), [C]),
                        k = function() {
                            var e = I.current;
                            e && (S.current = e.selectionEnd)
                        },
                        D = function() {
                            N({
                                visible: !1,
                                top: 0,
                                left: 0
                            })
                        },
                        E = K().state.containerDom,
                        T = function() {
                            var e = I.current;
                            if (e && E) {
                                var t = dt()(e, S.current),
                                    n = t.top,
                                    r = t.left,
                                    o = r + 250 + 5 + 16 > E.clientWidth;
                                N(o ? {
                                    top: n + 20,
                                    right: 0,
                                    visible: !0
                                } : {
                                    top: n - 5,
                                    left: r + 5,
                                    visible: !0
                                })
                            }
                        },
                        R = function() {
                            var e = I.current;
                            e && (e.focus(), e.selectionEnd = S.current)
                        },
                        q = function(e) {
                            switch (e) {
                                case tt.Full:
                                    return Dt;
                                case tt.Slim:
                                    return Lt;
                                default:
                                    return Dt
                            }
                        }(o);
                    return (0, H.jsxs)("div", {
                        className: "relative",
                        children: [(0, H.jsx)(q, {
                            value: u,
                            disabled: c,
                            onInsertRule: function(e) {
                                var t = I.current;
                                if (t) {
                                    var n = P(e);
                                    _t({
                                        rule: e,
                                        textareaEle: t,
                                        defaultTemplate: n
                                    }), e === nt.Mention ? setTimeout((function() {
                                        return T()
                                    }), 0) : R()
                                }
                            },
                            className: t,
                            ref: I,
                            placeholder: p,
                            onChange: function(e) {
                                ! function(e) {
                                    g.onChange(e)
                                }(e.currentTarget.value)
                            },
                            onFocus: function() {
                                D()
                            },
                            onBlur: function() {
                                k()
                            },
                            innerRef: y,
                            onKeyDown: function(e) {
                                var t = e.key,
                                    n = e.metaKey;
                                setTimeout((0, r.Z)(a().mark((function e() {
                                    return a().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                k(), e.t0 = t, e.next = e.t0 === nt.Mention ? 4 : "Enter" === e.t0 ? 6 : 11;
                                                break;
                                            case 4:
                                                return T(), e.abrupt("break", 13);
                                            case 6:
                                                if (n) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.abrupt("break", 13);
                                            case 8:
                                                return e.next = 10, d();
                                            case 10:
                                                return e.abrupt("break", 13);
                                            case 11:
                                                return w.visible && D(), e.abrupt("break", 13);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), 18)
                            },
                            defaultValue: v,
                            onCancel: b,
                            onSave: d,
                            onSaveText: f,
                            intentionTag: h,
                            onIntentionTagChange: x
                        }), (0, H.jsx)(mt, {
                            mentionInfo: w,
                            topicId: m,
                            hideSelf: function() {
                                D(), R()
                            },
                            onMentionSelect: function(e) {
                                var t, n, r = I.current;
                                r && (r.selectionStart = r.selectionEnd - 1, t = e, n = r, Bt.$T(n, t))
                            }
                        })]
                    })
                };

            function zt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? zt(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ft = function(e) {
                    return (0, H.jsx)("div", {
                        children: (0, H.jsx)(Ht, Gt({}, e))
                    })
                },
                Ut = n(43076),
                $t = n(21011),
                Vt = function(e) {
                    var t, n, r = e.content,
                        i = (0, s.$G)("comments").t,
                        a = (0, l.useState)(!1),
                        c = a[0],
                        u = a[1],
                        d = (0, l.useState)(null),
                        f = d[0],
                        m = d[1],
                        v = (0, l.useState)(!1),
                        y = v[0],
                        b = v[1];
                    (0, k.L)((function() {
                        setTimeout((function() {
                            b(((null === f || void 0 === f ? void 0 : f.scrollHeight) || 0) >= 140)
                        }), 1)
                    }), [f, r]);
                    var h = (0, l.useMemo)((function() {
                            return y && !c
                        }), [y, c]),
                        j = (0, l.useCallback)((function() {
                            b(((null === f || void 0 === f ? void 0 : f.scrollHeight) || 0) >= 140)
                        }), [null === f || void 0 === f ? void 0 : f.scrollHeight]),
                        x = (0, l.useMemo)((function() {
                            return (0, Ut.Z)(j, 250)
                        }), [j]),
                        C = (0, $t.a)(f).width;
                    return (0, l.useEffect)((function() {
                        C && x()
                    }), [C, x]), (0, H.jsx)("div", {
                        className: "flex flex-col items-start",
                        children: (0, H.jsxs)("div", {
                            className: (0, p.yI)("relative w-full", (t = {}, (0, o.Z)(t, "overflow-hidden", h), (0, o.Z)(t, "block", !h), (0, o.Z)(t, "max-h-[140px]", !c), (0, o.Z)(t, "max-h-full", c), t)),
                            children: [(0, H.jsx)("div", {
                                className: "px-2.5",
                                ref: m,
                                children: (0, H.jsx)(Ct, {
                                    content: r
                                })
                            }), (0, H.jsx)("div", {
                                className: (0, p.yI)("cursor-pointer", (n = {}, (0, o.Z)(n, "absolute top-0 flex h-full w-full items-end bg-gradient-to-t from-[#F2F2F2] dark:from-[#393939]", h), (0, o.Z)(n, "hidden", !h), n)),
                                onClick: function() {
                                    return u(!0)
                                },
                                children: (0, H.jsx)("div", {
                                    className: (0, p.yI)("text-md flex w-full items-center justify-center", g.Cj.label2),
                                    children: i("readMore")
                                })
                            })]
                        })
                    })
                },
                Qt = (n(39663), n(61880));
            n(65240), n(8249), n(5348);

            function Kt(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return Wt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wt(e, t)
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

            function Wt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Yt = function(e, t) {
                    return t.length - e.length
                },
                Jt = function(e, t) {
                    if (!t.length) return e;
                    var n, r = e.length,
                        o = 0,
                        i = new Map,
                        a = [],
                        l = 1e4,
                        s = 0,
                        c = Kt(t);
                    try {
                        for (c.s(); !(n = c.n()).done;) {
                            var u = n.value,
                                d = u.nickName,
                                f = u.slug;
                            if (!i.has(d)) {
                                i.set(d, f), a.push(d);
                                var m = d.length;
                                m < l && (l = m), m > s && (s = m)
                            }
                        }
                    } catch (g) {
                        c.e(g)
                    } finally {
                        c.f()
                    }
                    a.sort(Yt);
                    for (var p = function(t) {
                            var n = e.substring(t, t + s);
                            if (n.length < l) return null;
                            var r, o = Kt(a);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var i = r.value;
                                    if (n.startsWith(i)) return i
                                }
                            } catch (g) {
                                o.e(g)
                            } finally {
                                o.f()
                            }
                            return null
                        }, v = []; o < r;) {
                        var y = e.indexOf("@", o);
                        if (y < 0) {
                            v.push(e.substring(o));
                            break
                        }
                        v.push(e.substring(o, y));
                        var b = p(y + 1);
                        if (b) {
                            var h = y + b.length + 1;
                            if (y > 0 && "[" === e.charAt(y - 1)) v.push(e.substring(y, h));
                            else {
                                var j = i.get(b);
                                v.push("[@".concat(b, "](/u/").concat(j, ")"))
                            }
                            o = h
                        } else v.push("@"), o = y + 1
                    }
                    return v.join("")
                },
                Xt = function(e) {
                    return 1 === e ? le.i6.Up : -1 === e ? le.i6.Down : le.i6.None
                };

            function en(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? en(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var nn = function(e) {
                    var t = e.commentId;
                    return X.EcN.getKey({
                        commentId: String(t)
                    })
                },
                rn = function(e, t, n) {
                    if (!n) return t ? e.slice(0, t) : e;
                    var r = e.findIndex((function(e) {
                        return e.id === n
                    }));
                    return e.slice(0, r + 1)
                },
                on = function(e, t) {
                    var n = e.commentId,
                        r = e.pageNo,
                        o = e.numPerPage,
                        i = e.upToReplyId,
                        a = X.EcN.getKey({
                            commentId: String(n)
                        });
                    return (0, X.EcN)(ee.f6, {
                        commentId: String(n),
                        first: o,
                        skip: r && o ? (r - 1) * o : 0
                    }, tn(tn({}, t), {}, {
                        select: function(e) {
                            var t, n = e.commentReplyConnection,
                                l = (0, Qt.Z)(null === n || void 0 === n ? void 0 : n.edges.map((function(e) {
                                    return null === e || void 0 === e ? void 0 : e.node
                                })));
                            if (null === l || void 0 === l || !l.length) return {
                                total: 0,
                                comments: []
                            };
                            var s = l.map((function(e) {
                                    var t, n, r, o, i, l;
                                    return {
                                        id: Number(e.id),
                                        pinned: !1,
                                        content: Jt(e.post.content || "", (e.post.mentionedUsers || []).filter(Boolean).map((function(e) {
                                            return {
                                                nickName: e.nickName,
                                                slug: e.userSlug
                                            }
                                        }))),
                                        pinnedBy: {
                                            username: ""
                                        },
                                        voteCount: e.post.voteUpCount,
                                        voteStatus: Xt(e.post.voteStatus || 0),
                                        status: e.post.status,
                                        isHidden: e.post.status === I.$4.Muted,
                                        postId: e.post.id,
                                        creationDate: e.post.creationDate || 0,
                                        isDiscussAdmin: (null === (t = e.post.author) || void 0 === t ? void 0 : t.isDiscussAdmin) || !1,
                                        isDiscussStaff: (null === (n = e.post.author) || void 0 === n ? void 0 : n.isDiscussStaff) || !1,
                                        userAvatar: (null === (r = e.post.author) || void 0 === r ? void 0 : r.profile.userAvatar) || "",
                                        username: (null === (o = e.post.author) || void 0 === o ? void 0 : o.username) || "",
                                        realName: null === (i = e.post.author) || void 0 === i ? void 0 : i.profile.realName,
                                        userSlug: (null === (l = e.post.author) || void 0 === l ? void 0 : l.profile.userSlug) || "",
                                        isActive: !1,
                                        nameColor: "",
                                        activeBadgeIcon: "",
                                        activeBadgeName: "",
                                        queryKey: a,
                                        isOwnPost: e.post.isOwnPost || !1,
                                        numChildren: 0,
                                        ipRegion: e.ipRegion
                                    }
                                })),
                                c = void 0 !== o ? o * (r || 1) : 0;
                            return {
                                total: null !== (t = null === n || void 0 === n ? void 0 : n.totalNum) && void 0 !== t ? t : 0,
                                comments: rn(s, c, i)
                            }
                        }
                    }))
                },
                an = function(e) {
                    var t = e.isMyself,
                        n = e.commentStatus;
                    return t && [I.$4.Pending, X.af_.Checking].includes(n) ? (0, H.jsxs)(H.Fragment, {
                        children: [(0, H.jsx)("span", {
                            className: (0, p.yI)("h-[3px] w-[3px] rounded", g.Cj.fillGray5)
                        }), (0, H.jsx)("div", {
                            className: (0, p.yI)(g.Cj.label3, "whitespace-nowrap text-[11px] leading-[13px]"),
                            children: "\u5ba1\u6838\u4e2d"
                        })]
                    }) : null
                },
                ln = function(e) {
                    var t = e.isMyself,
                        n = e.commentStatus;
                    return t && n === I.$4.Pending ? (0, H.jsx)("div", {
                        className: (0, p.yI)(g.Cj.label3, "shrink-0 whitespace-nowrap text-[11px] leading-[13px]"),
                        children: "\u5ba1\u6838\u4e2d"
                    }) : null
                },
                sn = Ce.E,
                cn = function(e) {
                    var t = e.commentIpRegion,
                        n = e.panelIsSmall;
                    return t && !n ? (0, H.jsxs)("span", {
                        className: (0, p.yI)("whitespace-nowrap text-xs leading-[13px]", g.Cj.label3),
                        children: ["\u53d1\u5e03\u4e8e ", t]
                    }) : null
                },
                un = function(e) {
                    var t = e.commentIpRegion,
                        n = e.panelIsSmall;
                    return t && !n ? (0, H.jsxs)("span", {
                        className: (0, p.yI)("shrink-0 whitespace-nowrap text-[11px] leading-[13px]", g.Cj.label3),
                        children: [" ", "\u53d1\u5e03\u4e8e ", t]
                    }) : null
                },
                dn = function(e) {
                    var t;
                    return (0, p.yI)((t = {}, (0, o.Z)(t, "opacity-1", e.isOwnPost || !e.isHidden && e.status !== I.$4.Deleted), (0, o.Z)(t, "opacity-40", !e.isOwnPost && (e.isHidden || e.status === I.$4.Deleted)), t))
                },
                fn = function(e) {
                    var t, n, i, d = e.parentComment,
                        m = e.comment,
                        v = e.updateConfirmModal,
                        b = e.updateReportModal,
                        j = e.updateMoveToSolutionsModal,
                        x = (0, s.$G)("comments").t,
                        C = K(),
                        O = C.state,
                        w = O.highlightedCommentId,
                        E = O.layoutType,
                        B = O.isModerator,
                        M = O.panelIsSmall,
                        _ = O.topicId,
                        A = O.questionSlug,
                        z = C.dispatch,
                        G = w === m.id,
                        F = (0, l.useRef)(null);
                    (0, k.L)((function() {
                        G && F.current && F.current.scrollIntoView()
                    }), [G]), (0, k.L)((function() {
                        if (w) {
                            var e = function() {
                                return z({
                                    type: "highlightedCommentId",
                                    payload: void 0
                                })
                            };
                            return document.addEventListener("click", e),
                                function() {
                                    return document.removeEventListener("click", e)
                                }
                        }
                    }), [w, z]);
                    var U = nn({
                            commentId: d.id
                        }),
                        $ = st({
                            queryKey: m.queryKey,
                            existingComment: m
                        }),
                        V = $.value,
                        Q = $.onEdit,
                        W = $.onCommentChange,
                        Y = $.isSaving,
                        J = (0, l.useMemo)((function() {
                            return "[@".concat(m.realName || m.username, "](").concat(L.Hb.profile((null === m || void 0 === m ? void 0 : m.userSlug) || m.username), ") ")
                        }), [m.realName, m.username, m.userSlug]),
                        X = st({
                            queryKey: U,
                            parentComment: d,
                            initialContent: J
                        }),
                        ee = X.value,
                        te = X.onSave,
                        ne = X.onCommentChange,
                        re = X.isSaving,
                        ie = (0, l.useRef)(null),
                        ae = (0, l.useState)(!1),
                        le = ae[0],
                        ue = ae[1],
                        de = T(),
                        fe = (0, h.Z)(de, 2),
                        me = fe[0],
                        pe = fe[1];
                    (0, l.useEffect)((function() {
                        me(le ? null : F.current), le && P(ie.current)
                    }), [me, le]);
                    var ye = (0, l.useCallback)((0, r.Z)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Q().then((function(e) {
                                            var t = e.ok;
                                            return t && ue(!1), {
                                                ok: t
                                            }
                                        })));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [Q]),
                        he = (0, l.useState)(!1),
                        je = he[0],
                        xe = he[1],
                        Ce = (0, l.useRef)(null);
                    (0, l.useEffect)((function() {
                        return je ? P(Ce.current) : void 0
                    }), [je]);
                    var Oe = (0, l.useCallback)((function() {
                            return ue(!0)
                        }), []),
                        we = (0, l.useCallback)((function() {
                            return ue(!1)
                        }), []),
                        Ne = (0, D.r)().isSignedIn,
                        Ie = (0, l.useCallback)((function() {
                            Ne ? (xe((function(e) {
                                return !e
                            })), !je && A && y.d.qdReplyCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: A,
                                qd_comment_pos: se(E),
                                qd_comment_type: oe.Reply
                            })) : u.y.error(x("common:loginRequired"))
                        }), [Ne, x, A, je, E]),
                        Se = (0, l.useCallback)((function() {
                            return xe(!1)
                        }), []),
                        Pe = on({
                            commentId: d.id
                        }, {
                            enabled: !0
                        }).refetch,
                        ke = function() {
                            var e = (0, r.Z)(a().mark((function e() {
                                var t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, te();
                                        case 2:
                                            return (t = e.sent).ok && (xe(!1), Pe(), A && y.d.qdSubmitCommentClick({
                                                qd_version: (0, f.in)(),
                                                qd_question_slug: A,
                                                qd_comment_pos: se(E),
                                                qd_comment_type: oe.Reply
                                            })), e.abrupt("return", t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        De = (0, l.useCallback)((function() {
                            A && y.d.qdShareCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: A,
                                qd_comment_pos: se(E),
                                qd_comment_type: oe.Reply
                            })
                        }), [A, E]),
                        Ee = dn(m),
                        Te = !M,
                        Re = !(m.status === I.$4.Deleted) && (m.isOwnPost && !B),
                        qe = (0, c.U)().data,
                        Ze = (null === qe || void 0 === qe || null === (t = qe.userStatus) || void 0 === t ? void 0 : t.name) || (null === qe || void 0 === qe || null === (n = qe.userStatus) || void 0 === n ? void 0 : n.username) || "",
                        Le = (null === qe || void 0 === qe || null === (i = qe.userStatus) || void 0 === i ? void 0 : i.avatar) || "",
                        Me = "max-w-[24px] max-h-[24px] min-h-[24px] min-w-[24px] h-6 w-6",
                        _e = (0, S.v)(m.username),
                        He = Be(m).CreatedAtCls;
                    return le ? (0, H.jsxs)("div", {
                        className: "flex w-full gap-2 px-3 pb-2 pt-4",
                        children: [(0, H.jsx)(R.D, {
                            userAvatar: m.userAvatar,
                            username: m.username,
                            imgClassName: Me
                        }), (0, H.jsx)("div", {
                            className: "w-full",
                            children: (0, H.jsx)(Ft, {
                                value: V,
                                onSave: ye,
                                defaultValue: m.content,
                                disabled: Y,
                                innerRef: ie,
                                topicId: _ || 0,
                                onChange: W,
                                onSaveText: String(x("edit")),
                                onCancel: we,
                                variation: tt.Slim
                            })
                        })]
                    }) : (0, H.jsxs)("div", {
                        className: "flex flex-col",
                        ref: F,
                        children: [(0, H.jsxs)("div", {
                            className: (0, p.yI)("flex w-full px-3 pb-2 pt-4 transition-[background] duration-500", (0, o.Z)({}, (0, p.yI)(g.Cj.bgBlue0, "rounded-lg"), G)),
                            children: [(0, H.jsx)(R.D, {
                                userAvatar: m.userAvatar,
                                username: m.username,
                                imgClassName: (0, p.yI)("mr-2", Me, Ee)
                            }), (0, H.jsxs)("div", {
                                className: "flex w-full min-w-0 flex-col",
                                children: [(0, H.jsxs)("div", {
                                    className: (0, p.yI)("flex w-full flex-col gap-1 overflow-hidden rounded-[13px]", g.Cj.label2, g.Cj.fill3),
                                    children: [(0, H.jsxs)("div", {
                                        className: (0, p.yI)("mt-2.5 flex w-full items-center gap-2 px-2.5", Ee),
                                        children: [(0, H.jsx)(q.S, {
                                            username: m.username,
                                            badgeIcon: m.activeBadgeIcon,
                                            badgeName: m.activeBadgeName,
                                            badgeClassName: (0, p.yI)("ml-1"),
                                            realName: m.realName,
                                            reputation: m.reputation,
                                            userClassName: (0, p.yI)(g.Cj.label1, "text-xs font-medium")
                                        }), (0, H.jsx)("div", {
                                            children: (0, H.jsx)(Ge, {
                                                status: m.status,
                                                isHidden: m.isHidden
                                            })
                                        }), (0, H.jsxs)("div", {
                                            className: "flex flex-1 justify-end space-x-2",
                                            children: [(0, H.jsx)(un, {
                                                panelIsSmall: M,
                                                commentIpRegion: m.ipRegion
                                            }), (0, H.jsx)(Z.c, {
                                                timestamp: m.creationDate,
                                                useCalendarIcon: !1,
                                                createdAtClassName: (0, p.yI)("justify-end", He),
                                                formattedDateClassName: (0, p.yI)(g.Cj.label3, "text-[11px] leading-[13px]")
                                            }), (0, H.jsx)(ln, {
                                                isMyself: _e,
                                                commentStatus: m.status
                                            })]
                                        })]
                                    }), (0, H.jsx)("div", {
                                        className: (0, p.yI)(g.Cj.label1, "mb-2.5 text-xs", Ee),
                                        children: (0, H.jsx)(Vt, {
                                            content: m.content
                                        })
                                    })]
                                }), (0, H.jsx)("div", {
                                    className: (0, p.yI)("mt-4 flex items-center gap-4 text-xs", g.Cj.label2),
                                    children: (0, H.jsxs)("div", {
                                        className: (0, p.yI)("flex items-center gap-4", Ee),
                                        children: [(0, H.jsx)(ce, {
                                            comment: m,
                                            isMyself: _e,
                                            trackingCommentType: oe.Reply
                                        }), (0, H.jsx)(ve, {
                                            showLabel: Te,
                                            onClick: Ie
                                        }), (0, H.jsxs)(N.u, {
                                            className: "flex items-center gap-4 text-xs",
                                            show: pe,
                                            enter: "transition ease-out duration-200",
                                            leave: "transition ease-in duration-200",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: [(0, H.jsx)(be, {
                                                showLabel: Te,
                                                isOwnPost: m.isOwnPost,
                                                onClick: Oe
                                            }), (0, H.jsx)(ge, {
                                                showLabel: Te,
                                                commentId: m.id,
                                                onShareClick: De
                                            }), Re && (0, H.jsx)($e, {
                                                comment: m,
                                                parentComment: d,
                                                updateModal: v
                                            }), (0, H.jsx)(Ae, {
                                                comment: m,
                                                isPinnable: !1,
                                                updateConfirmModal: v,
                                                updateReportModal: b,
                                                updateMoveToSolutionsModal: j
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), je && (0, H.jsxs)("div", {
                            className: "mt-4 flex px-3",
                            children: [(0, H.jsx)(R.D, {
                                userAvatar: Le,
                                username: Ze,
                                imgClassName: (0, p.yI)("mr-2 max-w-[24px] max-h-[24px] min-h-[24px] min-w-[24px] h-6 w-6")
                            }), (0, H.jsx)("div", {
                                className: "flex-1",
                                children: (0, H.jsx)(Ft, {
                                    value: ee,
                                    onSave: ke,
                                    disabled: re,
                                    innerRef: Ce,
                                    topicId: _ || 0,
                                    onChange: ne,
                                    onCancel: Se,
                                    variation: tt.Slim
                                })
                            })]
                        })]
                    })
                },
                mn = (n(32504), n(81134)),
                pn = n(30486),
                vn = function() {
                    return (0, H.jsx)("div", {
                        className: (0, p.yI)("flex h-full w-full"),
                        children: (0, H.jsxs)(mn.O, {
                            className: "flex w-full flex-col space-y-5",
                            children: [(0, H.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [(0, H.jsx)("div", {
                                    className: "h-8",
                                    children: (0, H.jsx)(pn.a, {
                                        className: "!h-full w-8 rounded-full"
                                    })
                                }), (0, H.jsxs)("div", {
                                    className: "flex w-[80px] flex-col space-y-2",
                                    children: [(0, H.jsx)(pn.a, {
                                        className: "h-4 w-3/4"
                                    }), (0, H.jsx)(pn.a, {
                                        className: "h-[14px] w-full"
                                    })]
                                })]
                            }), (0, H.jsxs)("div", {
                                className: "flex flex-col space-y-2.5",
                                children: [(0, H.jsx)(pn.a, {
                                    className: "h-4 w-full"
                                }), (0, H.jsx)(pn.a, {
                                    className: "h-4 w-1/3"
                                })]
                            })]
                        })
                    })
                },
                yn = function() {
                    return (0, H.jsx)("div", {
                        className: (0, p.yI)("flex h-full w-full"),
                        children: (0, H.jsxs)(mn.O, {
                            className: "flex w-full",
                            children: [(0, H.jsxs)("div", {
                                className: "flex w-full space-x-3",
                                children: [(0, H.jsx)("div", {
                                    className: "h-6",
                                    children: (0, H.jsx)(pn.a, {
                                        className: "!h-full w-6 rounded-full"
                                    })
                                }), (0, H.jsxs)("div", {
                                    className: "flex flex-1 flex-col space-y-2",
                                    children: [(0, H.jsxs)("div", {
                                        className: "flex w-full justify-between",
                                        children: [(0, H.jsx)(pn.a, {
                                            className: "h-3 w-1/3"
                                        }), (0, H.jsx)(pn.a, {
                                            className: "h-3 w-[80px]"
                                        })]
                                    }), (0, H.jsx)(pn.a, {
                                        className: "h-[12px] w-full"
                                    }), (0, H.jsx)(pn.a, {
                                        className: "h-[12px] w-2/3"
                                    })]
                                })]
                            }), (0, H.jsxs)("div", {
                                className: "flex flex-col space-y-2.5",
                                children: [(0, H.jsx)(pn.a, {
                                    className: "h-3 w-full"
                                }), (0, H.jsx)(pn.a, {
                                    className: "h-3 w-1/3"
                                })]
                            })]
                        })
                    })
                },
                bn = function(e) {
                    var t = e.itemsCount,
                        n = Array(t).fill(null);
                    return (0, H.jsx)("div", {
                        className: "flex flex-col gap-8 px-1 py-3",
                        children: n.map((function(e, t) {
                            return (0, H.jsx)(vn, {}, t)
                        }))
                    })
                };

            function hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function jn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hn(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var gn = function(e, t) {
                    return null === e || void 0 === e ? void 0 : e.map((function(e) {
                        var n, r, o = null !== (n = null === (r = e.userSlug) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== n ? n : "",
                            i = null === t || void 0 === t ? void 0 : t[o];
                        return jn(jn({}, e), i)
                    }))
                },
                xn = function(e) {
                    var t, n = e.parentComment,
                        r = e.highlightedReplyId,
                        o = e.hideReplies,
                        i = e.updateConfirmModal,
                        a = e.updateReportModal,
                        c = e.updateMoveToSolutionsModal,
                        u = (0, l.useState)(5),
                        d = u[0],
                        m = u[1],
                        v = K().state.questionSlug,
                        b = on({
                            commentId: n.id,
                            pageNo: 1,
                            numPerPage: d,
                            upToReplyId: r
                        }),
                        h = b.isFetching,
                        j = b.data,
                        x = (null !== j && void 0 !== j ? j : {}).comments;
                    (0, l.useEffect)((function() {
                        return m((function(e) {
                            return null !== x && void 0 !== x && x.length ? x.length : e
                        }))
                    }), [null === x || void 0 === x ? void 0 : x.length]);
                    var C = (0, s.$G)("comments").t,
                        O = ((null === j || void 0 === j ? void 0 : j.total) || 0) > d,
                        w = (0, l.useCallback)((function() {
                            O && (m(d + 5), v && y.d.qdExpandCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: v
                            }))
                        }), [d, O, v]),
                        N = (0, l.useCallback)((function() {
                            o(), m(5)
                        }), [o]),
                        I = null !== (t = null === x || void 0 === x ? void 0 : x.map((function(e) {
                            return e.userSlug
                        }))) && void 0 !== t ? t : [],
                        S = (0, ze.Ew)(I).data,
                        P = gn(x, S);
                    return h ? (0, H.jsx)("div", {
                        className: "mx-5",
                        children: (0, H.jsx)(yn, {})
                    }) : (0, H.jsxs)("div", {
                        className: "flex flex-col",
                        children: [P && P.map((function(e) {
                            return (0, H.jsx)(fn, {
                                parentComment: n,
                                comment: e,
                                updateConfirmModal: i,
                                updateReportModal: a,
                                updateMoveToSolutionsModal: c
                            }, e.id)
                        })), (0, H.jsxs)("div", {
                            className: "flex w-full justify-between px-3 pt-2",
                            children: [(0, H.jsx)("div", {
                                onClick: w,
                                className: (0, p.yI)("cursor-pointer text-xs font-medium", g.Cj.labelBlueStandard, {
                                    flex: O,
                                    invisible: !O
                                }),
                                children: C("showMoreReplies")
                            }), (0, H.jsx)("div", {
                                onClick: N,
                                className: (0, p.yI)("group cursor-pointer pb-3 pr-3"),
                                children: (0, H.jsx)(A.E, {
                                    icon: He.S,
                                    label: String(C("hide")),
                                    labelClassName: (0, p.yI)(g.Cj.label1GroupHover),
                                    iconClassName: (0, p.yI)("w-4 h-4", g.Cj.label1GroupHover)
                                })
                            })]
                        })]
                    })
                },
                Cn = function(e) {
                    var t, n, r = e.content,
                        i = (0, s.$G)("comments").t,
                        a = (0, l.useState)(!1),
                        c = a[0],
                        u = a[1],
                        d = (0, l.useState)(null),
                        f = d[0],
                        m = d[1],
                        v = (0, l.useState)(!1),
                        y = v[0],
                        b = v[1],
                        h = (0, $t.a)(f),
                        j = h.width,
                        x = h.height;
                    (0, k.L)((function() {
                        setTimeout((function() {
                            b(((null === f || void 0 === f ? void 0 : f.scrollHeight) || 0) >= 230)
                        }), 1)
                    }), [f, r, x]);
                    var C = (0, l.useMemo)((function() {
                            return y && !c
                        }), [y, c]),
                        O = (0, l.useCallback)((function() {
                            b(((null === f || void 0 === f ? void 0 : f.scrollHeight) || 0) >= 230)
                        }), [null === f || void 0 === f ? void 0 : f.scrollHeight]),
                        w = (0, l.useMemo)((function() {
                            return (0, Ut.Z)(O, 250)
                        }), [O]);
                    return (0, l.useEffect)((function() {
                        j && w()
                    }), [j, w]), (0, H.jsxs)("div", {
                        className: (0, p.yI)("relative", (t = {}, (0, o.Z)(t, "overflow-hidden", C), (0, o.Z)(t, "block", !C), (0, o.Z)(t, "max-h-[230px]", !c), (0, o.Z)(t, "max-h-full", c), t)),
                        children: [(0, H.jsx)("div", {
                            ref: m,
                            children: (0, H.jsx)(Ct, {
                                content: r
                            })
                        }), (0, H.jsx)("div", {
                            className: (0, p.yI)("cursor-pointer", (n = {}, (0, o.Z)(n, "from-layer-1 dark:from-dark-layer-1 absolute top-0 flex h-full w-full items-end bg-gradient-to-t", C), (0, o.Z)(n, "hidden", !C), n)),
                            onClick: function() {
                                return u(!0)
                            },
                            children: (0, H.jsx)("div", {
                                className: (0, p.yI)("text-md flex w-full items-center justify-center", g.Cj.label1),
                                children: i("readMore")
                            })
                        })]
                    })
                },
                On = n(72102);

            function wn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wn(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var In = l.forwardRef((function(e, t) {
                    return (0, H.jsx)("svg", Nn(Nn({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, H.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12.93 3.586a2 2 0 012.829 0l4.849 4.849a2 2 0 010 2.828l-4.497 4.496a2 2 0 00-.558 1.086l-.586 3.512a1 1 0 01-1.693.543L8.99 16.617l-3.879 3.879a1 1 0 01-1.414-1.415l3.879-3.878-4.283-4.283a1 1 0 01.543-1.694l3.512-.585a2 2 0 001.085-.559l4.497-4.496z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Sn = function(e) {
                    var t = e.pinnedBy,
                        n = (0, s.$G)("comments").t;
                    return (0, H.jsx)("div", {
                        className: "w-fit",
                        children: (0, H.jsx)(On.u, {
                            label: n("pinnedBy", {
                                pinnedBy: t
                            }),
                            children: (0, H.jsxs)("div", {
                                className: (0, p.yI)(g.Cj.labelBlueStandard, "flex items-center space-x-1.5 text-xs font-medium"),
                                children: [(0, H.jsx)(In, {}), (0, H.jsx)("span", {
                                    children: n("pinned")
                                })]
                            })
                        })
                    })
                },
                Pn = function(e) {
                    var t, n = e.type,
                        r = K().state.tagNamesMap;
                    return (0, H.jsx)("div", {
                        className: "inline-block",
                        children: (0, H.jsx)("div", {
                            className: (0, p.yI)(g.Cj.fill3, g.Cj.label2, "rounded-[38px] px-2.5 py-0.5 text-xs font-medium"),
                            children: null !== (t = r.get(n)) && void 0 !== t ? t : "Unknown"
                        })
                    })
                },
                kn = function(e) {
                    var t, n, i, d = e.comment,
                        m = e.updateConfirmModal,
                        v = e.updateReportModal,
                        b = e.updateMoveToSolutionsModal,
                        j = (0, s.$G)("comments").t,
                        x = (0, S.v)(d.username),
                        C = (0, l.useState)(!1),
                        O = C[0],
                        w = C[1],
                        L = (0, l.useRef)(null),
                        B = (0, l.useRef)(null),
                        M = (0, l.useRef)(null),
                        _ = K(),
                        A = _.state,
                        z = A.topicId,
                        G = A.highlightedCommentId,
                        F = A.parentOfHighlightedCommentId,
                        U = A.layoutType,
                        $ = A.isModerator,
                        V = A.panelIsSmall,
                        Q = A.questionSlug,
                        W = _.dispatch,
                        Y = (0, l.useState)(!1),
                        J = Y[0],
                        X = Y[1],
                        ee = T(),
                        te = (0, h.Z)(ee, 2),
                        ne = te[0],
                        re = te[1];
                    (0, l.useEffect)((function() {
                        ne(J ? null : M.current), J && P(L.current)
                    }), [ne, J]);
                    var ie = G === d.id,
                        ae = F === d.id,
                        le = G !== d.id ? G : void 0,
                        ue = (0, c.U)().data,
                        fe = (null === ue || void 0 === ue || null === (t = ue.userStatus) || void 0 === t ? void 0 : t.name) || (null === ue || void 0 === ue || null === (n = ue.userStatus) || void 0 === n ? void 0 : n.username) || "",
                        me = (null === ue || void 0 === ue || null === (i = ue.userStatus) || void 0 === i ? void 0 : i.avatar) || "";
                    (0, k.L)((function() {
                        ie && B.current && B.current.scrollIntoView()
                    }), [ie]), (0, k.L)((function() {
                        if (G) {
                            ae && w(!0);
                            var e = function() {
                                return W({
                                    type: "highlightedCommentId",
                                    payload: void 0
                                })
                            };
                            return document.addEventListener("click", e),
                                function() {
                                    return document.removeEventListener("click", e)
                                }
                        }
                    }), [G, ae, W]);
                    var pe = (0, l.useState)(!1),
                        ye = pe[0],
                        he = pe[1];
                    (0, l.useEffect)((function() {
                        return ye ? P(L.current) : void 0
                    }), [ye]);
                    var je = (0, l.useCallback)((function() {
                            w(!O), Q && (!O && y.d.qdShowRepliesClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: Q
                            }), O && y.d.qdHideRepliesClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: Q
                            }))
                        }), [O, Q]),
                        xe = (0, D.r)().isSignedIn,
                        Ce = (0, l.useCallback)((function() {
                            xe ? (he((function(e) {
                                return !e
                            })), !ye && Q && y.d.qdReplyCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: Q,
                                qd_comment_pos: se(U),
                                qd_comment_type: oe.Comment
                            })) : u.y.error(j("common:loginRequired"))
                        }), [xe, j, Q, U, ye]),
                        Oe = (0, l.useCallback)((function() {
                            w(!1), Q && y.d.qdHideRepliesClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: Q
                            })
                        }), [Q]),
                        we = (0, l.useCallback)((function() {
                            return he(!1)
                        }), []),
                        Ne = (0, l.useCallback)((function() {
                            return X(!1)
                        }), []),
                        Ie = nn({
                            commentId: d.id
                        }),
                        Se = st({
                            queryKey: Ie,
                            parentComment: d
                        }),
                        Pe = Se.value,
                        ke = Se.onSave,
                        De = Se.onCommentChange,
                        Ee = Se.isSaving,
                        Te = st({
                            queryKey: d.queryKey,
                            existingComment: d
                        }),
                        Re = Te.value,
                        qe = Te.onEdit,
                        Ze = Te.onCommentChange,
                        Le = Te.isSaving,
                        Me = function() {
                            var e = (0, r.Z)(a().mark((function e() {
                                var t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ke();
                                        case 2:
                                            return (t = e.sent).ok && (w(!0), he(!1), Q && y.d.qdSubmitCommentClick({
                                                qd_version: (0, f.in)(),
                                                qd_question_slug: Q,
                                                qd_comment_pos: se(U),
                                                qd_comment_type: oe.Reply
                                            })), e.abrupt("return", t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _e = (0, l.useCallback)((function() {
                            Q && y.d.qdShareCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: Q,
                                qd_comment_pos: se(U),
                                qd_comment_type: oe.Comment
                            })
                        }), [Q, U]),
                        He = (0, l.useCallback)((function() {
                            return X(!0)
                        }), []),
                        ze = function() {
                            var e = (0, r.Z)(a().mark((function e() {
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", qe().then((function(e) {
                                                var t = e.ok;
                                                return t && X(!1), {
                                                    ok: t
                                                }
                                            })));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ge = Be(d),
                        Fe = Ge.hiddenCls,
                        Ue = (0, E.tq)(),
                        Ve = !Ue && !V,
                        Qe = !(d.status === I.$4.Deleted) && (d.isOwnPost && !$);
                    return J ? (0, H.jsx)("div", {
                        className: (0, p.yI)("mx-2 px-3 py-3"),
                        children: (0, H.jsx)(Ft, {
                            value: Re,
                            onSave: ze,
                            onSaveText: j("edit"),
                            defaultValue: d.content,
                            disabled: Le,
                            innerRef: L,
                            topicId: z || 0,
                            onChange: Ze,
                            onCancel: Ne,
                            variation: tt.Full
                        })
                    }) : (0, H.jsxs)("div", {
                        className: (0, p.yI)("px-1 transition-[background] duration-500", (0, o.Z)({}, (0, p.yI)(g.Cj.bgBlue0, "rounded-lg"), ie)),
                        ref: B,
                        children: [(0, H.jsxs)("div", {
                            className: (0, p.yI)("flex w-full flex-col py-3"),
                            ref: M,
                            children: [(0, H.jsxs)("div", {
                                className: (0, p.yI)("flex w-full items-center gap-3", Fe),
                                children: [(0, H.jsx)(R.D, {
                                    userAvatar: d.userAvatar,
                                    username: d.username
                                }), (0, H.jsxs)("div", {
                                    className: "flex w-full",
                                    children: [(0, H.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [d.pinned && (0, H.jsx)(Sn, {
                                            pinnedBy: d.pinnedBy.username
                                        }), (0, H.jsxs)("div", {
                                            className: "flex w-full items-center gap-2",
                                            children: [(0, H.jsx)(q.S, {
                                                realName: d.realName,
                                                username: d.username,
                                                badgeIcon: d.activeBadgeIcon,
                                                badgeName: d.activeBadgeName,
                                                reputation: d.reputation,
                                                badgeClassName: (0, p.yI)("h-4 w-4 ml-1"),
                                                userClassName: (0, p.yI)(g.Cj.label1, "font-medium", Ge.authorCls)
                                            }), (0, H.jsx)(sn, {
                                                comment: d
                                            })]
                                        })]
                                    }), (0, H.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-end gap-2",
                                        children: [(0, H.jsx)(cn, {
                                            commentIpRegion: d.ipRegion,
                                            panelIsSmall: V
                                        }), d.isEdited && !V && (0, H.jsxs)(H.Fragment, {
                                            children: [(0, H.jsx)("span", {
                                                className: (0, p.yI)("h-[3px] w-[3px] rounded", g.Cj.fillGray5)
                                            }), (0, H.jsx)("span", {
                                                className: (0, p.yI)("text-xs leading-[13px]", g.Cj.label3),
                                                children: j("edited")
                                            }), (0, H.jsx)("span", {
                                                className: (0, p.yI)("h-[3px] w-[3px] rounded", g.Cj.fillGray5)
                                            })]
                                        }), (0, H.jsx)(Z.c, {
                                            timestamp: d.creationDate,
                                            useCalendarIcon: !1,
                                            createdAtClassName: (0, p.yI)("justify-end", Ge.CreatedAtCls),
                                            formattedDateClassName: (0, p.yI)(g.Cj.label3, "text-[11px] leading-[13px]")
                                        }), (0, H.jsx)(an, {
                                            isMyself: x,
                                            commentStatus: d.status
                                        })]
                                    })]
                                })]
                            }), (0, H.jsxs)("div", {
                                className: (0, p.yI)("mt-2 flex w-full flex-col", g.Cj.label2),
                                children: [(0, H.jsx)("div", {
                                    className: (0, p.yI)(Fe),
                                    children: (0, H.jsx)(Cn, {
                                        content: d.content
                                    })
                                }), d.intentionTag && (0, H.jsx)("div", {
                                    className: "mt-2.5",
                                    children: (0, H.jsx)(Pn, {
                                        type: d.intentionTag
                                    })
                                }), (0, H.jsx)("div", {
                                    className: "mt-4 flex items-center gap-4",
                                    children: (0, H.jsxs)("div", {
                                        className: (0, p.yI)("flex items-center gap-4 text-xs", Fe),
                                        children: [(0, H.jsx)(ce, {
                                            comment: d,
                                            isMyself: x,
                                            trackingCommentType: oe.Comment
                                        }), (0, H.jsx)(de, {
                                            onClick: je,
                                            showLabel: Ve,
                                            showReplies: O,
                                            repliesNum: d.numChildren
                                        }), (0, H.jsx)(ve, {
                                            showLabel: Ve,
                                            onClick: Ce
                                        }), (0, H.jsxs)(N.u, {
                                            className: "flex items-center gap-4 text-xs",
                                            show: re || Ue,
                                            enter: "transition ease-out duration-200",
                                            leave: "transition ease-in duration-200",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: [(0, H.jsxs)("div", {
                                                className: (0, p.yI)("flex items-center gap-4", Fe),
                                                children: [(0, H.jsx)(be, {
                                                    showLabel: Ve,
                                                    isOwnPost: d.isOwnPost,
                                                    onClick: He
                                                }), (0, H.jsx)(ge, {
                                                    showLabel: Ve,
                                                    commentId: d.id,
                                                    onShareClick: _e
                                                }), Qe ? (0, H.jsx)($e, {
                                                    comment: d,
                                                    updateModal: m,
                                                    topicId: null !== z && void 0 !== z ? z : void 0
                                                }) : null]
                                            }), (0, H.jsx)(Ae, {
                                                comment: d,
                                                updateConfirmModal: m,
                                                updateReportModal: v,
                                                updateMoveToSolutionsModal: b
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), ye && (0, H.jsxs)("div", {
                            className: "mt-3 flex px-3",
                            children: [(0, H.jsx)(R.D, {
                                userAvatar: me,
                                username: fe,
                                imgClassName: (0, p.yI)("mr-2 max-w-[24px] max-h-[24px] min-h-[24px] min-w-[24px] h-6 w-6")
                            }), (0, H.jsx)("div", {
                                className: "flex-1",
                                children: (0, H.jsx)(Ft, {
                                    value: Pe,
                                    onSave: Me,
                                    disabled: Ee,
                                    innerRef: L,
                                    topicId: z || 0,
                                    onChange: De,
                                    onCancel: we,
                                    variation: tt.Slim
                                })
                            })]
                        }), O && (0, H.jsx)(xn, {
                            parentComment: d,
                            highlightedReplyId: le,
                            hideReplies: Oe,
                            updateConfirmModal: m,
                            updateReportModal: v,
                            updateMoveToSolutionsModal: b
                        })]
                    })
                },
                Dn = n(22183),
                En = n(54600),
                Tn = n(27319),
                Rn = n(44487);

            function qn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Zn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qn(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ln = Pe.AG,
                Bn = function(e) {
                    var t = e.visible,
                        n = e.onCancel,
                        r = e.comment,
                        o = (0, s.$G)("comments").t,
                        i = (0, Y.NL)(),
                        a = (0, l.useState)(""),
                        c = a[0],
                        d = a[1],
                        m = Ln(),
                        v = m.isLoading,
                        y = m.mutateAsync,
                        b = 0 === c.trim().length || v,
                        h = K().state.questionSlug;
                    (0, l.useEffect)((function() {
                        t && d("")
                    }), [t]);
                    var j = (0, l.useCallback)((function(e) {
                            var t = e.currentTarget.value || "";
                            d(t)
                        }), [d]),
                        x = (0, l.useCallback)((function() {
                            r && y && y({
                                commentId: r.id,
                                title: c
                            }).then((function(e) {
                                var t, a, l, s;
                                if (null === e || void 0 === e || null === (t = e.migrateDiscussionToSolution) || void 0 === t || !t.ok) return u.y.error(o("genericError"), {
                                    itemClassName: g.Cj.bgLayer3
                                });
                                ! function(e) {
                                    var t = e.commentId,
                                        n = e.queryClient,
                                        r = e.key;
                                    Ee({
                                        commentId: t,
                                        changeComment: function(e) {
                                            return Zn(Zn({}, e), {}, {
                                                status: I.$4.Deleted
                                            })
                                        },
                                        queryClient: n,
                                        key: r
                                    })
                                }({
                                    commentId: r.id,
                                    key: r.queryKey,
                                    queryClient: i
                                });
                                var c = null === (a = e.migrateDiscussionToSolution.topic) || void 0 === a ? void 0 : a.id,
                                    d = (0, Dn.o)(null !== (l = null === (s = e.migrateDiscussionToSolution.topic) || void 0 === s ? void 0 : s.title) && void 0 !== l ? l : "topic");
                                h && c && d && window.open(L.Hb.solutions(h, c, d), "_blank"), u.y.success(o("moveSuccess"), {
                                    itemClassName: g.Cj.bgLayer3
                                }), n()
                            }))
                        }), [r, y, c, o, i, h, n]);
                    return (0, H.jsxs)(Tn.u, {
                        visible: t,
                        onCancel: n,
                        closable: !1,
                        maskClosable: !0,
                        className: (0, p.yI)("w-[480px] p-0 text-base", g.Cj.bgLayer2),
                        children: [(0, H.jsxs)("div", {
                            className: (0, p.yI)("flex items-center border-b px-6 py-4 text-lg font-medium", g.Cj.label1, g.Cj.dividerBorder2),
                            children: [o("move"), (0, H.jsx)("button", {
                                onClick: n,
                                className: (0, p.yI)("ml-auto cursor-pointer rounded transition-all", g.Cj.fill3Hover),
                                children: (0, H.jsx)(En.F, {
                                    className: (0, p.yI)("h-6 w-6", g.Cj.labelGrey6)
                                })
                            })]
                        }), (0, H.jsxs)("div", {
                            className: (0, p.yI)("flex flex-col gap-2 px-6 py-4"),
                            children: [(0, H.jsx)("div", {
                                className: (0, p.yI)("text-sm", g.Cj.label2),
                                children: o("moveTitle")
                            }), (0, H.jsx)(Rn.I, {
                                className: (0, p.yI)("rounded-lg px-3 py-1 text-sm focus:border-transparent", g.Cj.fill4, g.Cj.placeholderLabel4, f.UG),
                                value: c,
                                onChange: j,
                                placeholder: o("moveTitlePlaceholder")
                            })]
                        }), (0, H.jsxs)("div", {
                            className: (0, p.yI)("flex justify-end gap-4 px-6 py-4 text-sm"),
                            children: [(0, H.jsx)(Ot.z, {
                                onClick: n,
                                className: "rounded-lg px-4 py-1.5",
                                children: o("cancel")
                            }), (0, H.jsx)(Ot.z, {
                                variant: "primary",
                                disabled: b,
                                loading: v,
                                onClick: x,
                                className: "rounded-lg px-4 py-1.5",
                                children: o("confirm")
                            })]
                        })]
                    })
                };

            function Mn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Mn(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var An, Hn = function(e) {
                    var t, n = null !== (t = null === e || void 0 === e ? void 0 : e.map((function(e) {
                            return e.username
                        }))) && void 0 !== t ? t : [],
                        r = (0, ze.Ew)(n).data;
                    return (0, l.useMemo)((function() {
                        return null === e || void 0 === e ? void 0 : e.map((function(e) {
                            var t, n, o = null !== (t = null === (n = e.userSlug) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== t ? t : "",
                                i = null === r || void 0 === r ? void 0 : r[o];
                            return _n(_n({}, e), i)
                        }))
                    }), [e, r])
                },
                zn = function(e) {
                    var t, n, r = e.comments,
                        o = e.isFetching,
                        i = e.commentsCountToLoad,
                        a = (0, s.$G)("comments").t,
                        c = (0, j.t)({
                            className: "z-modal",
                            cancelBtnCls: "py-1.5",
                            confirmBtnCls: "py-1.5"
                        }),
                        u = c.modal,
                        d = c.update,
                        f = w(),
                        m = (0, h.Z)(f, 2),
                        v = m[0],
                        y = m[1],
                        b = (0, l.useCallback)((function() {
                            return y({
                                visible: !1,
                                comment: void 0
                            })
                        }), [y]),
                        C = w(),
                        O = (0, h.Z)(C, 2),
                        N = O[0],
                        I = O[1],
                        S = (0, l.useCallback)((function() {
                            return I({
                                visible: !1,
                                comment: void 0
                            })
                        }), [I]),
                        P = Hn(r);
                    return o ? (0, H.jsx)(bn, {
                        itemsCount: i
                    }) : P && P.length > 0 ? (0, H.jsxs)("div", {
                        children: [P.map((function(e) {
                            return (0, H.jsx)(kn, {
                                comment: e,
                                updateConfirmModal: d,
                                updateReportModal: y,
                                updateMoveToSolutionsModal: I
                            }, e.id)
                        })), u, (0, H.jsx)(x.y, {
                            visible: v.visible,
                            postId: (null === (t = v.comment) || void 0 === t ? void 0 : t.postId) || 0,
                            commentId: null === (n = v.comment) || void 0 === n ? void 0 : n.id,
                            onCancel: b
                        }), (0, H.jsx)(Bn, {
                            onCancel: S,
                            visible: N.visible,
                            comment: N.comment
                        })]
                    }) : (0, H.jsx)("div", {
                        className: (0, p.yI)("w-full p-5 text-center", g.Cj.label4),
                        children: a("noComments")
                    })
                },
                Gn = n(84071),
                Fn = (n(36615), n(38089)),
                Un = n(46819),
                $n = function(e) {
                    return (0, Qt.Z)([{
                        value: le.f.Best,
                        text: e("best")
                    }, {
                        value: le.f.NewestToOldest,
                        text: e("newestToOldest")
                    }, {
                        value: le.f.OldestToNewest,
                        text: e("oldestToNewest")
                    }])
                },
                Vn = function(e) {
                    var t = e.className,
                        n = e.sortBy,
                        r = e.setSortBy,
                        o = (0, s.$G)("comments").t,
                        i = (0, l.useMemo)((function() {
                            return $n(o)
                        }), [o]),
                        a = i.find((function(e) {
                            return e.value === n
                        }));
                    return (0, H.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, H.jsx)(Fn.L, {
                            selected: null === a || void 0 === a ? void 0 : a.value,
                            icon: (0, H.jsx)(Un.h, {}),
                            btnClassName: (0, p.yI)("p-0 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent active:bg-transparent dark:active:bg-transparent", g.Cj.label2),
                            itemsClassName: t,
                            itemClassName: (0, p.yI)("font-normal", g.Cj.label2),
                            itemSelectedClassName: (0, p.yI)("font-medium", g.Cj.label1),
                            setSelected: function(e) {
                                e && r(e)
                            },
                            items: i,
                            btnText: (0, H.jsxs)("div", {
                                className: (0, p.yI)("text-xs", g.Cj.label2),
                                children: [(0, H.jsxs)("span", {
                                    className: "mr-2",
                                    children: [o("sortBy"), ":"]
                                }), (0, H.jsx)("span", {
                                    className: (0, p.yI)(g.Cj.label1, "font-medium"),
                                    children: null === a || void 0 === a ? void 0 : a.text
                                })]
                            })
                        })
                    })
                },
                Qn = function(e) {
                    var t = e.total,
                        n = e.sortBy,
                        r = e.setSortBy,
                        o = (0, s.$G)("comments").t;
                    return (0, H.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [(0, H.jsx)("div", {
                            children: (0, H.jsx)(Gn.h, {
                                className: (0, p.yI)("h-6 w-6", g.Cj.labelGrey6)
                            })
                        }), (0, H.jsxs)("div", {
                            className: (0, p.yI)("flex-1 text-base font-medium", g.Cj.label1),
                            children: [o("comments"), " (", (0, B.ZP)(t), ")"]
                        }), (0, H.jsx)("div", {
                            children: (0, H.jsx)(Vn, {
                                sortBy: n,
                                setSortBy: r,
                                className: "right-0"
                            })
                        })]
                    })
                },
                Kn = n(41002),
                Wn = n(63282);
            ! function(e) {
                e.Discussion = "discussion", e.OfficialSolution = "officialSolution"
            }(An || (An = {}));
            var Yn = function(e) {
                    var t = e.title,
                        n = e.onClose,
                        r = e.children,
                        o = e.className;
                    return (0, H.jsx)("div", {
                        className: (0, p.yI)("w-full rounded-[13px] border p-4", g.Cj.fill4, g.Cj.divider4, o),
                        children: (0, H.jsxs)("div", {
                            className: "flex w-full flex-col items-start gap-3",
                            children: [(0, H.jsxs)("div", {
                                className: "flex w-full items-center justify-between",
                                children: [(0, H.jsx)("div", {
                                    className: (0, p.yI)("font-medium", g.Cj.label1),
                                    children: t
                                }), (0, H.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: n,
                                    children: (0, H.jsx)(En.F, {
                                        className: (0, p.yI)("h-4 w-4", g.Cj.labelGrey6, g.Cj.labelGrey7Hover)
                                    })
                                })]
                            }), (0, H.jsx)("div", {
                                className: (0, p.yI)("flex w-full flex-col items-start gap-4 text-xs", g.Cj.label2),
                                children: r
                            })]
                        })
                    })
                },
                Jn = function(e) {
                    var t = (0, Kn._)("".concat(e, "CommentingRulesExpiration"), void 0),
                        n = (0, h.Z)(t, 2),
                        r = n[0],
                        o = n[1],
                        i = (0, l.useCallback)((function() {
                            var e = (0, Wn.B)().add(7, "d").valueOf();
                            o(e)
                        }), [o]);
                    return {
                        isExpired: !!(!r || !(0, Wn.B)(Number(r)).isValid()) || (0, Wn.B)(r).isBefore((0, Wn.B)()),
                        setToExpire: i
                    }
                },
                Xn = function(e) {
                    var t = e.discussionType,
                        n = e.className,
                        r = Jn(t),
                        o = r.isExpired,
                        i = r.setToExpire,
                        a = (0, l.useState)(!1),
                        s = a[0],
                        c = a[1];
                    return (0, l.useEffect)((function() {
                        return c(o)
                    }), [o]), s ? t === An.OfficialSolution ? null : (0, H.jsxs)(Yn, {
                        title: "\ud83d\udca1 \u8ba8\u8bba\u533a\u89c4\u5219",
                        onClose: i,
                        className: n,
                        children: [(0, H.jsx)("p", {
                            children: "1. \u8bf7\u4e0d\u8981\u5728\u8bc4\u8bba\u533a\u53d1\u8868\u9898\u89e3\uff01"
                        }), (0, H.jsx)("p", {
                            children: "2. \u8bc4\u8bba\u533a\u53ef\u4ee5\u53d1\u8868\u5173\u4e8e\u5bf9\u7ffb\u8bd1\u7684\u5efa\u8bae\u3001\u5bf9\u9898\u76ee\u7684\u7591\u95ee\u53ca\u5176\u5ef6\u4f38\u8ba8\u8bba\u3002"
                        }), (0, H.jsx)("p", {
                            children: "3. \u5982\u679c\u4f60\u9700\u8981\u6574\u7406\u9898\u89e3\u601d\u8def\uff0c\u83b7\u5f97\u53cd\u9988\u4ece\u800c\u8fdb\u9636\u63d0\u5347\uff0c\u53ef\u4ee5\u53bb\u9898\u89e3\u533a\u8fdb\u884c\u3002"
                        })]
                    }) : null
                },
                er = le.f.Best;
            var tr = function(e) {
                    return X.zCE.getKey(function(e) {
                        var t = e.topicId,
                            n = e.orderBy,
                            r = e.pageNo,
                            o = e.numPerPage;
                        return {
                            topicId: t,
                            orderBy: n ? rr(n) : void 0,
                            skip: r && o ? (r - 1) * o : 0,
                            numPerPage: o
                        }
                    }(e))
                },
                nr = tr;

            function rr(e) {
                var t = le.f.NewestToOldest,
                    n = le.f.OldestToNewest;
                switch (e) {
                    case t:
                        return X.sTy.NewToOld;
                    case n:
                        return X.sTy.OldToNew;
                    default:
                        return X.sTy.Hot
                }
            }
            var or = function(e) {
                var t = e.topicId,
                    n = e.orderBy,
                    r = void 0 === n ? er : n,
                    o = e.pageNo,
                    i = void 0 === o ? 1 : o,
                    a = e.numPerPage,
                    l = void 0 === a ? 10 : a,
                    s = tr({
                        topicId: t,
                        pageNo: i,
                        numPerPage: l,
                        orderBy: r
                    });
                return (0, X.zCE)(ee.f6, {
                    topicId: t,
                    skip: (i - 1) * l,
                    numPerPage: l,
                    orderBy: rr(r)
                }, {
                    enabled: Boolean(t),
                    select: function(e) {
                        var t = e.commonTopicComments || {},
                            n = t.edges,
                            r = t.totalNum,
                            o = (0, Qt.Z)(n).map((function(e) {
                                return e.node
                            })) || [];
                        return o ? {
                            total: r || 0,
                            comments: (0, Qt.Z)(o).map((function(e) {
                                var t, n, r, o, i, a, l, c = Jt(e.post.content || "", (e.post.mentionedUsers || []).filter(Boolean).map((function(e) {
                                    return {
                                        nickName: e.nickName,
                                        slug: e.userSlug
                                    }
                                })));
                                return {
                                    id: Number(e.id),
                                    ipRegion: e.ipRegion,
                                    pinned: !1,
                                    content: c,
                                    pinnedBy: {
                                        username: ""
                                    },
                                    isEdited: e.isEdited,
                                    postId: e.post.id,
                                    voteCount: e.post.voteUpCount || 0,
                                    voteStatus: Xt(e.post.voteStatus || 0),
                                    status: e.post.status,
                                    isHidden: e.post.status === I.$4.Muted,
                                    creationDate: e.post.creationDate || 0,
                                    isDiscussAdmin: (null === (t = e.post.author) || void 0 === t ? void 0 : t.isDiscussAdmin) || !1,
                                    isDiscussStaff: (null === (n = e.post.author) || void 0 === n ? void 0 : n.isDiscussStaff) || !1,
                                    userAvatar: (null === (r = e.post.author) || void 0 === r ? void 0 : r.profile.userAvatar) || "",
                                    username: (null === (o = e.post.author) || void 0 === o ? void 0 : o.username) || "",
                                    realName: null === (i = e.post.author) || void 0 === i ? void 0 : i.profile.realName,
                                    userSlug: (null === (a = e.post.author) || void 0 === a ? void 0 : a.profile.userSlug) || "",
                                    isActive: !1,
                                    nameColor: "",
                                    activeBadgeIcon: "",
                                    activeBadgeName: "",
                                    queryKey: s,
                                    isOwnPost: e.post.isOwnPost || !1,
                                    numChildren: null !== (l = e.numChildren) && void 0 !== l ? l : 0,
                                    intentionTag: void 0
                                }
                            }))
                        } : {
                            total: r || 0,
                            comments: []
                        }
                    }
                })
            };

            function ir(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ar(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ir(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ir(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var lr = function(e, t) {
                var n = e.commentId;
                return (0, X.Pcv)(ee.f6, {
                    commentId: String(n)
                }, ar(ar({}, t), {}, {
                    select: function(e) {
                        if (!e.commentPage) return null;
                        var t = e.commentPage,
                            n = t.pageNum,
                            r = t.parentId;
                        return {
                            pageNo: n,
                            parentCommentId: Number(r)
                        }
                    }
                }))
            };

            function sr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sr(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ur = function(e) {
                    var t, n, o, i, h, j, g, x = e.topicId,
                        C = e.commentCount,
                        O = e.commentId,
                        w = e.layoutType,
                        N = e.hideComments,
                        I = e.uniqueKey,
                        S = (0, l.useRef)(null),
                        P = (0, s.$G)("common").t,
                        k = K(),
                        D = k.state,
                        E = k.dispatch,
                        T = (0, v.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        R = D.topicId,
                        q = D.isModerator,
                        Z = D.highlightedCommentId,
                        L = D.parentOfHighlightedCommentId,
                        B = D.content,
                        M = D.intentionTag,
                        _ = D.containerDom,
                        A = D.questionSlug,
                        z = (0, G.S6)((function(e) {
                            return e.setCommentsTopAnchor
                        }));
                    (0, l.useEffect)((function() {
                        return E({
                            type: "layoutType",
                            payload: w
                        })
                    }), [E, w]);
                    var F = null === (t = (0, c.U)()) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.userStatus,
                        U = null === (o = (0, c.U)()) || void 0 === o || null === (i = o.data) || void 0 === i || null === (h = i.userStatus) || void 0 === h ? void 0 : h.isSignedIn,
                        $ = Boolean(null === F || void 0 === F ? void 0 : F.isAdmin),
                        V = (0, l.useState)(le.f.Best),
                        Q = V[0],
                        W = V[1],
                        Y = (0, l.useCallback)((function(e) {
                            A && y.d.qdSortCommentClick({
                                qd_version: (0, f.in)(),
                                qd_question_slug: A,
                                qd_sort_type: e,
                                qd_comment_pos: w
                            }), W(e)
                        }), [A, w]),
                        J = (0, l.useState)(1),
                        X = J[0],
                        ee = J[1],
                        te = {
                            topicId: x,
                            orderBy: Q,
                            pageNo: X,
                            numPerPage: 10
                        },
                        ne = nr(te),
                        re = w === G.Dk.Description,
                        ie = w === G.Dk.Discuss || re,
                        ae = (0, b.Q)({
                            domElement: _,
                            threshold: 475
                        });
                    (0, l.useEffect)((function() {
                        return E({
                            type: "panelIsSmall",
                            payload: ae
                        })
                    }), [E, ae]);
                    var ce = st({
                            queryKey: ne,
                            initialContent: ie ? B : void 0,
                            initialIntentionTag: ie ? M : void 0,
                            saveDraft: ie,
                            setPageNo: ee
                        }),
                        ue = ce.value,
                        de = ce.onSave,
                        fe = ce.onCommentChange,
                        me = ce.isSaving,
                        pe = ce.intentionTag,
                        ve = ce.onIntentionTagChange,
                        ye = Boolean(x && !N && 0 !== C),
                        be = or(cr(cr({}, te), {}, {
                            isDiscuss: ie
                        }), {
                            enabled: ye
                        }),
                        he = be.data,
                        je = be.isFetching,
                        ge = lr({
                            commentId: O,
                            orderBy: Q,
                            topicId: x
                        }, {
                            enabled: Boolean(O && ye)
                        }).data,
                        xe = (0, l.useRef)(null),
                        Ce = (0, l.useRef)(null),
                        Oe = (0, l.useCallback)((function(e) {
                            var t;
                            ee(e), null === (t = Ce.current) || void 0 === t || t.scrollIntoView()
                        }), []);
                    (0, l.useEffect)((function() {
                        q !== $ && E({
                            type: "isModerator",
                            payload: $
                        }), Z !== O && E({
                            type: "highlightedCommentId",
                            payload: O
                        }), L !== O && E({
                            type: "parentOfHighlightedCommentId",
                            payload: O
                        }), L !== (null === ge || void 0 === ge ? void 0 : ge.parentCommentId) && E({
                            type: "parentOfHighlightedCommentId",
                            payload: null === ge || void 0 === ge ? void 0 : ge.parentCommentId
                        })
                    }), [x, R, $, q, ge]), (0, l.useEffect)((function() {
                        ge && ee(ge.pageNo)
                    }), [ge]);
                    var we = null !== (j = null !== (g = null === he || void 0 === he ? void 0 : he.total) && void 0 !== g ? g : C) && void 0 !== j ? j : 0,
                        Ne = Math.min(we - 10 * (X - 1), 10),
                        Ie = (0, m.z)((0, r.Z)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (U) {
                                            e.next = 3;
                                            break
                                        }
                                        return u.y.error(P("loginRequired")), e.abrupt("return", Promise.resolve({
                                            ok: !1
                                        }));
                                    case 3:
                                        return e.abrupt("return", de().then((function(e) {
                                            var t = e.ok;
                                            return t && A && y.d.qdSubmitCommentClick({
                                                qd_version: (0, f.in)(),
                                                qd_question_slug: A,
                                                qd_comment_pos: se(w),
                                                qd_comment_type: oe.Comment
                                            }), {
                                                ok: t
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))));
                    return (0, l.useLayoutEffect)((function() {
                        E({
                            type: "containerDom",
                            payload: xe.current
                        }), I && z(I, Ce.current)
                    }), [E, I, z]), (0, H.jsxs)("div", {
                        className: (0, p.yI)("flex h-full flex-col px-4", {
                            "px-5": re,
                            "px-1": T && re
                        }),
                        ref: xe,
                        children: [!ie && (0, H.jsx)(Qn, {
                            total: we,
                            sortBy: Q,
                            setSortBy: Y
                        }), (0, H.jsx)("div", {
                            className: (0, p.yI)("mt-3"),
                            children: (0, H.jsx)(Ft, {
                                value: ue,
                                disabled: me,
                                onSave: Ie,
                                topicId: x,
                                innerRef: S,
                                onChange: fe,
                                variation: tt.Full,
                                intentionTag: pe,
                                onIntentionTagChange: ve
                            })
                        }), ie && (0, H.jsxs)("div", {
                            className: (0, p.yI)("mt-3"),
                            children: [(0, H.jsx)(Xn, {
                                discussionType: An.Discussion,
                                className: "mb-3"
                            }), (0, H.jsx)("div", {
                                className: "pt-3",
                                children: (0, H.jsx)(Vn, {
                                    sortBy: Q,
                                    setSortBy: Y,
                                    className: "left-0"
                                })
                            })]
                        }), w === G.Dk.OfficialSolution && (0, H.jsx)("div", {
                            className: "mt-3",
                            children: (0, H.jsx)(Xn, {
                                discussionType: An.OfficialSolution
                            })
                        }), (0, H.jsx)("div", {
                            className: "mt-4 flex-1",
                            ref: Ce,
                            children: (0, H.jsx)(zn, {
                                comments: null === he || void 0 === he ? void 0 : he.comments,
                                commentsCountToLoad: Ne,
                                isFetching: je
                            })
                        }), we > 0 && (0, H.jsx)("div", {
                            className: (0, p.yI)("mb-4 mt-7 flex justify-center pb-4"),
                            children: (0, H.jsx)(d.Z, {
                                disabled: je || me,
                                currentPage: X,
                                totalItems: we,
                                maxPageItems: ae ? X < 99 ? 6 : 5 : void 0,
                                itemsPerPage: 10,
                                onChange: Oe,
                                pageItemClassName: "text-sm",
                                chevronClassName: "w-4 h-4",
                                arrowButtonClassName: "px-2"
                            })
                        })]
                    })
                },
                dr = function(e) {
                    var t = cr(cr({}, V), {}, {
                        topicId: e.topicId,
                        questionSlug: e.questionSlug,
                        layoutType: e.layoutType
                    });
                    return (0, H.jsx)(W, {
                        value: t,
                        children: (0, H.jsx)(ur, cr({}, e))
                    })
                }
        },
        87121: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dk: function() {
                    return o
                },
                S6: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r, o, i = n(4676),
                a = n(81757),
                l = n(90226);

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

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }! function(e) {
                e.UpdateState = "UpdateState"
            }(r || (r = {})),
            function(e) {
                e.Discuss = "Discuss", e.Solution = "Solution", e.OfficialSolution = "OfficialSolution", e.Description = "Description", e.MarkdownGuide = "MarkdownGuide"
            }(o || (o = {}));
            var u = (0, a.Ue)((0, l.$e)({
                commentsTopAnchorMap: {}
            }, (function(e, t) {
                return {
                    setCommentsTopAnchor: function(t, n) {
                        return e((function(e) {
                            return c(c({}, e), {}, {
                                commentsTopAnchorMap: c(c({}, e.commentsTopAnchorMap), {}, (0, i.Z)({}, t, n))
                            })
                        }))
                    },
                    scrollToCommentListTop: function(e) {
                        var n;
                        null === (n = t().commentsTopAnchorMap[e]) || void 0 === n || n.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
            })))
        },
        62358: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(44872),
                o = n(40007),
                i = n(11754),
                a = function(e) {
                    var t = e.className,
                        n = e.onClick,
                        a = e.icon,
                        l = e.iconClassName,
                        s = e.label,
                        c = e.labelClassName,
                        u = e.onIconClick,
                        d = e.disabled,
                        f = void 0 !== s,
                        m = void 0 !== a;
                    return (0, i.jsxs)("div", {
                        className: (0, r.yI)("flex items-center gap-1", t),
                        onClick: n,
                        children: [m && (0, i.jsx)(a, {
                            onClick: d ? void 0 : u,
                            className: (0, r.yI)("h-4 w-4", {
                                "pointer-events-none": d
                            }, l)
                        }), f && (0, i.jsx)("div", {
                            className: (0, r.yI)(o.Cj.label2, "text-xs", c),
                            children: s
                        })]
                    })
                }
        },
        76411: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return f
                },
                l: function() {
                    return m
                }
            });
            var r = n(84193),
                o = n(57735),
                i = n(64386),
                a = n(44872),
                l = n(40682),
                s = n(77403),
                c = n(16321),
                u = n(40007),
                d = n(11754),
                f = function(e) {
                    var t = e.onClick,
                        n = e.className,
                        o = e.children;
                    return (0, d.jsx)(r.v.Item, {
                        as: "div",
                        onClick: t,
                        className: (0, a.yI)("text-md w-full cursor-pointer select-none rounded px-3 py-[5px]", u.Cj.label2, u.Cj.label1Hover, u.Cj.fill3Hover, n),
                        children: o
                    })
                },
                m = function(e) {
                    var t, n = e.children,
                        f = e.btnClassName,
                        m = e.iconClassName,
                        p = e.placement,
                        v = void 0 === p ? "top" : p,
                        y = null === (t = (0, l.U)().data) || void 0 === t ? void 0 : t.userStatus,
                        b = Boolean(null === y || void 0 === y ? void 0 : y.isAdmin) ? s.k : c.q;
                    return (0, d.jsxs)(r.v, {
                        as: "div",
                        className: "relative",
                        children: [(0, d.jsx)("div", {
                            children: (0, d.jsx)(r.v.Button, {
                                className: (0, a.yI)(u.Cj.label1Hover, "flex h-6 w-6 cursor-pointer items-center justify-center rounded-md", f),
                                children: (0, d.jsx)(b, {
                                    className: (0, a.yI)(u.Cj.labelGrey6, u.Cj.labelGrey7Hover, "h-5 w-5", m)
                                })
                            })
                        }), (0, d.jsx)(o.u, {
                            as: i.Fragment,
                            enter: "transition ease-out duration-100",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: (0, d.jsx)(r.v.Items, {
                                style: {
                                    zIndex: 100
                                },
                                className: (0, a.yI)(u.Cj.bgLayer3, u.Cj.divider4, u.eq.card, "absolute right-0 min-w-[200px] rounded-lg p-2 outline-none", {
                                    "top-8": "bottom" === v,
                                    "bottom-8": "top" === v
                                }),
                                children: (0, d.jsx)("div", {
                                    children: n
                                })
                            })
                        })]
                    })
                }
        },
        17696: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return f
                }
            });
            var r = n(44872),
                o = n(36419),
                i = n(88077),
                a = n(59787),
                l = n(49429),
                s = n(46239),
                c = n(41986),
                u = n(79927),
                d = n(11754),
                f = function(e) {
                    var t = e.userAvatar,
                        n = e.username,
                        f = e.imgClassName,
                        m = e.dontTriggerParentClickEvent,
                        p = e.clickable,
                        v = void 0 === p || p,
                        y = (0, d.jsx)(l.q, {
                            src: t,
                            alt: "",
                            className: "h-full w-full rounded-full"
                        }),
                        b = (0, r.yI)("h-8 min-h-[32px] w-8 min-w-[32px]", f),
                        h = (0, s.v)((function(e) {
                            return e.questionSlug
                        })),
                        j = (0, o.z)((function(e) {
                            u.d.qdEnterAuthorProfileClick({
                                qd_version: (0, i.in)(),
                                qd_question_slug: h,
                                qd_post_article_author: n
                            }), m && e.stopPropagation()
                        }));
                    return v ? (0, d.jsx)(c.r, {
                        className: b,
                        href: a.Hb.profile(n),
                        onClick: j,
                        isExternal: !0,
                        children: y
                    }) : (0, d.jsx)("div", {
                        className: b,
                        children: y
                    })
                }
        },
        161: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return m
                }
            });
            var r = n(72102),
                o = n(44872),
                i = n(36419),
                a = n(88077),
                l = n(59787),
                s = n(46239),
                c = n(41986),
                u = n(40007),
                d = n(79927),
                f = n(11754),
                m = function(e) {
                    var t = e.realName,
                        n = e.username,
                        m = e.badgeIcon,
                        p = e.badgeName,
                        v = e.isLink,
                        y = void 0 === v || v,
                        b = e.badgeClassName,
                        h = e.userClassName,
                        j = e.dontTriggerParentClickEvent,
                        g = (0, o.yI)(u.xy.labelTextSecondary, "text-xs font-medium overflow-hidden max-w-[100px] md:max-w-[200px] text-ellipsis"),
                        x = (0, s.v)((function(e) {
                            return e.questionSlug
                        })),
                        C = (0, i.z)((function(e) {
                            d.d.qdEnterAuthorProfileClick({
                                qd_version: (0, a.in)(),
                                qd_question_slug: x,
                                qd_post_article_author: n
                            }), j && e.stopPropagation()
                        }));
                    return (0, f.jsxs)("div", {
                        className: "flex items-center gap-1 truncate",
                        translate: "no",
                        children: [y ? (0, f.jsx)(c.r, {
                            onClick: C,
                            href: l.Hb.profile(n),
                            className: (0, o.yI)(g, u.M$.labelBlueS, "truncate", h),
                            isExternal: !0,
                            children: t || n
                        }) : (0, f.jsx)("div", {
                            className: (0, o.yI)(g, h),
                            children: n
                        }), m && p && (0, f.jsx)(r.u, {
                            label: p,
                            placement: "top",
                            children: (0, f.jsx)("div", {
                                className: (0, o.yI)("h-3 w-3", b),
                                children: (0, f.jsx)("img", {
                                    src: m,
                                    alt: p,
                                    className: "h-full w-full"
                                })
                            })
                        })]
                    })
                }
        },
        91613: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return s
                }
            });
            var r = n(44872),
                o = n(52114),
                i = n(61018),
                a = n(40007),
                l = n(11754),
                s = function(e) {
                    var t = e.timestamp,
                        n = e.useCalendarIcon,
                        s = void 0 === n || n,
                        c = e.createdAtClassName,
                        u = e.formattedDateClassName,
                        d = e.iconClassName,
                        f = e.needDetailTooltip,
                        m = t < 1e10 ? 1e3 * t : t;
                    return (0, l.jsxs)("div", {
                        className: (0, r.yI)("flex items-center gap-1.5", c),
                        children: [s && (0, l.jsx)(i.j, {
                            className: (0, r.yI)(a.Cj.labelGrey5, "h-4 w-4", d)
                        }), (0, l.jsx)("div", {
                            className: (0, r.yI)(a.Cj.label3, "min-w-max text-xs", u),
                            children: (0, l.jsx)(o.J, {
                                datetime: m,
                                needDetailTooltip: f
                            })
                        })]
                    })
                }
        },
        21476: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return B
                },
                a: function() {
                    return M
                }
            });
            var r = n(59679),
                o = n(4676),
                i = (n(81248), n(17519), n(64386)),
                a = n(39157),
                l = n(39270),
                s = n(79216),
                c = n(44872),
                u = n(59787),
                d = n(41986),
                f = n(36226),
                m = n(27319),
                p = n(66455),
                v = n(54600),
                y = n(40007),
                b = n(38162),
                h = n(19129),
                j = n(22980),
                g = n.n(j),
                x = (n(43969), n(37872), n(86003), n(91518), n(29308), n(27115), n(58935), n(90074)),
                C = n(11288),
                O = new Map([
                    [x.ZLU.Advertising, "1"],
                    [x.ZLU.Sexual, "2"],
                    [x.ZLU.Violent, "3"],
                    [x.ZLU.Terrorism, "4"],
                    [x.ZLU.Politics, "5"],
                    [x.ZLU.Fake, "6"],
                    [x.ZLU.Illegal, "7"],
                    [x.ZLU.Other, void 0]
                ]),
                w = function() {
                    var e = (0, x.gu3)(C.f6),
                        t = e.mutateAsync,
                        n = e.isLoading,
                        r = (0, i.useCallback)(function() {
                            var e = (0, h.Z)(g().mark((function e(n) {
                                var r, o, i, a;
                                return g().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = n.postId, o = n.flagType, i = n.content, a = n.articleId, e.abrupt("return", t({
                                                data: {
                                                    resourceId: a || String(r),
                                                    reasonId: O.get(o),
                                                    resourceType: a ? x.H0r.Article : x.H0r.Comment,
                                                    description: i
                                                }
                                            }).then((function(e) {
                                                return e.flagSomething
                                            })));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [t]);
                    return {
                        isLoading: n,
                        mutateAsync: r
                    }
                },
                N = n(59419),
                I = n(30513),
                S = n(10473),
                P = n(6387),
                k = n(95359),
                D = n(92297),
                E = n(11754),
                T = function(e) {
                    var t = e.value,
                        n = e.label;
                    return (0, E.jsx)(l.E.Option, {
                        value: t,
                        as: i.Fragment,
                        children: function(e) {
                            var t, r = e.checked;
                            return (0, E.jsx)("div", {
                                className: (0, c.yI)("flex cursor-pointer flex-col rounded-lg p-2", (t = {}, (0, o.Z)(t, y.Cj.label2, !r), (0, o.Z)(t, y.Cj.labelBlueStandard, r), (0, o.Z)(t, y.Cj.fill4, !r), (0, o.Z)(t, y.Cj.bgBlue0, r), t)),
                                children: (0, E.jsx)("div", {
                                    className: (0, c.yI)("flex items-center justify-between", {
                                        "": r
                                    }),
                                    children: (0, E.jsx)("span", {
                                        children: n
                                    })
                                })
                            })
                        }
                    })
                },
                R = function(e) {
                    return [
                        [S.ZL.Advertising, e("advertising")],
                        [S.ZL.Sexual, e("sexual")],
                        [S.ZL.Violent, e("violent")],
                        [S.ZL.Terrorism, e("terrorism")],
                        [S.ZL.Politics, e("politics")],
                        [S.ZL.Fake, e("fake")],
                        [S.ZL.Illegal, e("illegal")],
                        [S.ZL.Other, e("other")]
                    ]
                },
                q = function() {
                    return (0, E.jsx)("div", {
                        className: (0, c.yI)(y.Cj.dividerBorder2, "mt-4 border-t px-6 py-4"),
                        children: (0, E.jsxs)(d.r, {
                            href: "".concat(k.jY, "/complaint-guidelines"),
                            isExternal: !0,
                            className: (0, c.yI)(y.Cj.fill4, y.Cj.label2, "flex cursor-pointer items-center rounded-lg px-3 py-1"),
                            children: [(0, E.jsx)(f.y, {
                                src: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/complaint-56e08a401042a9e8aa3bcc60a686bb4d.svg",
                                alt: "",
                                className: "h-6"
                            }), (0, E.jsx)("span", {
                                className: "ml-3 text-sm",
                                children: "\u4fb5\u6743\u6295\u8bc9"
                            })]
                        })
                    })
                },
                Z = {
                    headerBorder: "",
                    radioGroup: "gap-4",
                    textArea: "mt-4"
                },
                L = function(e) {
                    return e.commentId || 0
                },
                B = function(e) {
                    var t = e.visible,
                        n = e.onCancel,
                        o = e.articleId,
                        u = (0, s.$G)("solutions", {
                            keyPrefix: "report"
                        }).t,
                        d = (0, i.useState)(null),
                        f = d[0],
                        h = d[1],
                        j = (0, i.useState)(""),
                        g = j[0],
                        x = j[1],
                        C = w(),
                        O = C.mutateAsync,
                        N = C.isLoading,
                        I = null === f || f === S.ZL.Other && 0 === g.trim().length,
                        k = R(u);
                    (0, i.useEffect)((function() {
                        t && (x(""), h(null))
                    }), [t]);
                    var D = (0, i.useCallback)((function() {
                        var t = f === S.ZL.Other ? g : "";
                        O({
                            postId: L(e),
                            flagType: f,
                            content: null !== t && void 0 !== t ? t : void 0,
                            articleId: o
                        }).then((function(e) {
                            null !== e && void 0 !== e && e.ok ? (P.y.success(u("reportSuccess"), {
                                itemClassName: y.Cj.bgLayer3
                            }), n()) : P.y.error(u("reportError"), {
                                itemClassName: y.Cj.bgLayer3
                            })
                        }))
                    }), [f, g, O, e, o, u, n]);
                    return (0, a.createPortal)((0, E.jsxs)(m.u, {
                        visible: t,
                        onCancel: n,
                        closable: !1,
                        maskClosable: !0,
                        className: (0, c.yI)("w-[480px] p-0 text-base", y.Cj.bgLayer2),
                        children: [(0, E.jsxs)("div", {
                            className: (0, c.yI)("flex items-center px-6 py-4 text-lg font-medium", y.Cj.label1, Z.headerBorder),
                            children: [u("reportModalTitle"), (0, E.jsx)("button", {
                                onClick: n,
                                className: (0, c.yI)("ml-auto cursor-pointer rounded transition-all", y.Cj.fill3Hover),
                                children: (0, E.jsx)(v.F, {
                                    className: (0, c.yI)("h-6 w-6", y.Cj.labelGrey6)
                                })
                            })]
                        }), (0, E.jsxs)("div", {
                            className: (0, c.yI)("px-6 py-2 text-xs"),
                            children: [(0, E.jsx)(l.E, {
                                value: f,
                                onChange: h,
                                className: (0, c.yI)("flex flex-wrap", Z.radioGroup),
                                children: k.map((function(e) {
                                    var t = (0, r.Z)(e, 2),
                                        n = t[0],
                                        o = t[1];
                                    return (0, E.jsx)(T, {
                                        value: n,
                                        label: o
                                    }, n)
                                }))
                            }), f === S.ZL.Other && (0, E.jsx)(b.g, {
                                className: (0, c.yI)("h-[90px] rounded-lg px-3 py-2 text-sm focus:border-transparent", y.Cj.fill4, y.Cj.placeholderLabel4, y.Cj.label1, Z.textArea),
                                placeholder: u("contentPlaceholder"),
                                value: g,
                                onChange: x,
                                autoSize: !0
                            })]
                        }), (0, E.jsx)(q, {}), (0, E.jsxs)("div", {
                            className: (0, c.yI)("flex justify-end gap-4 p-4 text-sm"),
                            children: [(0, E.jsx)(p.z, {
                                onClick: n,
                                className: "rounded-lg px-4 py-1.5",
                                children: u("cancel")
                            }), (0, E.jsx)(p.z, {
                                variant: "primary",
                                disabled: I,
                                loading: N,
                                onClick: D,
                                className: "rounded-lg px-4 py-1.5",
                                children: u("confirm")
                            })]
                        })]
                    }), document.querySelector("#modal-root"))
                },
                M = function(e) {
                    var t, n = e.visible,
                        r = e.onCancel,
                        l = e.slug,
                        s = (0, i.useState)(""),
                        f = s[0],
                        h = s[1],
                        j = (0, D.c)((function(e) {
                            return e.questionSlug
                        })),
                        g = (0, N.K)(j).data,
                        O = (0, I.z)(j).data,
                        w = (0, x.r0Q)(C.f6),
                        S = w.mutateAsync,
                        k = w.isLoading,
                        T = 0 === f.trim().length,
                        R = (0, i.useCallback)((function() {
                            S({
                                detail: f,
                                slug: l
                            }).then((function() {
                                P.y.success("\u8c22\u8c22\u60a8\u7684\u53cd\u9988\uff01", {
                                    itemClassName: y.Cj.bgLayer3
                                }), r()
                            }))
                        }), [f, r, l, S]);
                    return (0, a.createPortal)((0, E.jsxs)(m.u, {
                        visible: n,
                        onCancel: r,
                        closable: !1,
                        maskClosable: !0,
                        className: (0, c.yI)("w-[480px] p-0 text-base", y.Cj.bgLayer2),
                        children: [(0, E.jsxs)("div", {
                            className: (0, c.yI)("flex items-center px-6 py-4 text-lg font-medium", y.Cj.label1, (0, o.Z)({}, (0, c.yI)(y.Cj.dividerBorder2, "border-b"), !0)),
                            children: ["\u8bf7\u586b\u5199\u53cd\u9988\u5185\u5bb9", (0, E.jsx)("button", {
                                onClick: r,
                                className: (0, c.yI)("ml-auto cursor-pointer rounded transition-all", y.Cj.fill3Hover),
                                children: (0, E.jsx)(v.F, {
                                    className: (0, c.yI)("h-6 w-6", y.Cj.labelGrey6)
                                })
                            })]
                        }), (0, E.jsxs)("div", {
                            className: (0, c.yI)("px-6 py-4 text-sm"),
                            children: [(0, E.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, E.jsx)("span", {
                                    className: (0, c.yI)(y.Cj.label3, "w-[100px] flex-shrink-0 text-right"),
                                    children: "\u9898\u76ee:"
                                }), (0, E.jsx)("span", {
                                    className: (0, c.yI)(y.Cj.label1, "grow truncate"),
                                    children: null !== (t = null === O || void 0 === O ? void 0 : O.translatedTitle) && void 0 !== t ? t : null === g || void 0 === g ? void 0 : g.title
                                })]
                            }), (0, E.jsxs)("div", {
                                className: "mt-2 flex gap-2",
                                children: [(0, E.jsxs)("span", {
                                    className: (0, c.yI)(y.Cj.label3, "w-[100px] flex-shrink-0 text-right"),
                                    children: [(0, E.jsx)("span", {
                                        className: (0, c.yI)(y.Cj.labelRedStandard),
                                        children: "* "
                                    }), "\u53cd\u9988\u5185\u5bb9:"]
                                }), (0, E.jsx)("div", {
                                    className: "grow truncate",
                                    children: (0, E.jsx)(b.g, {
                                        className: (0, c.yI)("h-[90px] rounded-lg px-3 py-2 text-sm focus:border-transparent", y.Cj.fill4, y.Cj.placeholderLabel4),
                                        value: f,
                                        onChange: h,
                                        autoSize: !0
                                    })
                                })]
                            }), (0, E.jsxs)("div", {
                                className: (0, c.yI)(y.Cj.label2, "mt-4 pl-10 text-xs"),
                                children: ["\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7", " ", (0, E.jsx)(d.r, {
                                    className: (0, c.yI)(y.Cj.labelBlueStandard, "cursor-pointer"),
                                    isExternal: !0,
                                    href: u.Hb.feedback(),
                                    children: "Github \u5feb\u901f\u53cd\u9988\u901a\u9053"
                                }), " ", "\u8fdb\u884c\u63d0\u4ea4"]
                            })]
                        }), (0, E.jsxs)("div", {
                            className: (0, c.yI)("flex justify-end gap-4 p-4 text-sm"),
                            children: [(0, E.jsx)(p.z, {
                                onClick: r,
                                className: "rounded-lg px-4 py-1.5",
                                children: "\u53d6\u6d88"
                            }), (0, E.jsx)(p.z, {
                                variant: "primary",
                                disabled: T,
                                loading: k,
                                onClick: R,
                                className: "rounded-lg px-4 py-1.5",
                                children: "\u786e\u8ba4"
                            })]
                        })]
                    }), document.querySelector("#modal-root"))
                }
        },
        92297: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(81757),
                i = n(90226),
                a = n(10450);

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

            function s(e) {
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
            var c = {
                    questionSlug: "",
                    topicId: void 0,
                    topicTitleSlug: void 0,
                    commentId: void 0
                },
                u = (0, o.Ue)((0, i.XR)((0, i.$e)(c, (function(e) {
                    return {
                        setQuestionSlug: function(t) {
                            return e((function(e) {
                                return s(s({}, e), {}, {
                                    questionSlug: t
                                })
                            }))
                        },
                        update: function(t) {
                            return e((function(e) {
                                return (0, a.X)(e, t) ? e : s(s({}, e), t)
                            }))
                        },
                        reset: function() {
                            return e((function(e) {
                                return s(s({}, e), {}, {
                                    topicId: void 0,
                                    topicTitleSlug: void 0,
                                    commentId: void 0
                                })
                            }))
                        }
                    }
                }))))
        },
        46667: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return s
                },
                z: function() {
                    return c
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = (n(37872), n(91518), n(6755), n(29308), n(27115), n(91023), n(81757)),
                i = n(90226);

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

            function l(e) {
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
            var s = {
                    questionSlug: "",
                    problemType: n(18336).tn.Algorithm,
                    isDynamicLayout: !1,
                    openingSolutionIdSet: new Set,
                    openingSolutionSlugSet: new Set,
                    openingSubmissionIdSet: new Set,
                    openSettingModal: !1
                },
                c = (0, o.Ue)((0, i.$e)(s, (function(e) {
                    return {
                        setQuestionSlug: function(t) {
                            return e((function(e) {
                                return l(l({}, e), {}, {
                                    questionSlug: t
                                })
                            }))
                        },
                        setProblemType: function(t) {
                            return e((function(e) {
                                return l(l({}, e), {}, {
                                    problemType: t
                                })
                            }))
                        },
                        updateState: function(t) {
                            return e((function(e) {
                                return l(l({}, e), t)
                            }))
                        },
                        addOpeningSolutionIdAndSlug: function(t, n) {
                            return e((function(e) {
                                var r = new Set(e.openingSolutionIdSet),
                                    o = new Set(e.openingSolutionSlugSet);
                                return r.add(Number(t)), o.add(n), l(l({}, e), {}, {
                                    openingSolutionIdSet: r,
                                    openingSolutionSlugSet: o
                                })
                            }))
                        },
                        removeOpeningSolutionIdAndSlug: function(t, n) {
                            return e((function(e) {
                                var r = new Set(e.openingSolutionIdSet),
                                    o = new Set(e.openingSolutionSlugSet);
                                return r.delete(Number(t)), o.delete(n), l(l({}, e), {}, {
                                    openingSolutionIdSet: r,
                                    openingSolutionSlugSet: o
                                })
                            }))
                        },
                        addOpeningSubmissionId: function(t) {
                            return e((function(e) {
                                var n = new Set(e.openingSubmissionIdSet);
                                return n.add(Number(t)), l(l({}, e), {}, {
                                    openingSubmissionIdSet: n
                                })
                            }))
                        },
                        removeOpeningSubmissionId: function(t) {
                            return e((function(e) {
                                var n = new Set(e.openingSubmissionIdSet);
                                return n.delete(Number(t)), l(l({}, e), {}, {
                                    openingSubmissionIdSet: n
                                })
                            }))
                        },
                        setOpenSettingModal: function(t) {
                            return e((function(e) {
                                return l(l({}, e), {}, {
                                    openSettingModal: t
                                })
                            }))
                        }
                    }
                })))
        },
        86210: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return o
                },
                R: function() {
                    return a
                }
            });
            var r = n(64386),
                o = function(e) {
                    return null
                };
            o.displayName = "NullComponent";
            var i = function(e, t) {
                    return null
                },
                a = (0, r.forwardRef)(i);
            a.displayName = "ForwardRefNullComponent"
        },
        61291: function(e, t, n) {
            "use strict";
            n.d(t, {
                AG: function() {
                    return o
                },
                dE: function() {
                    return i
                }
            });
            var r = n(11651),
                o = function() {
                    return {
                        mutate: null,
                        mutateAsync: null,
                        isLoading: !1,
                        isFetching: !1
                    }
                },
                i = function() {
                    return (0, r.a)([], (function() {
                        return null
                    }))
                }
        },
        24e3: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return o
                }
            });
            var r = n(64386),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.domElement,
                        n = e.threshold,
                        o = void 0 === n ? 475 : n,
                        i = !(null === t || void 0 === t || !t.clientWidth) && (null === t || void 0 === t ? void 0 : t.clientWidth) < o,
                        a = (0, r.useState)(i),
                        l = a[0],
                        s = a[1];
                    return (0, r.useEffect)((function() {
                        if (t) {
                            var e = new ResizeObserver((function() {
                                return s((null === t || void 0 === t ? void 0 : t.clientWidth) < o)
                            }));
                            return e.observe(t),
                                function() {
                                    return e.unobserve(t)
                                }
                        }
                    }), [t, o]), l
                }
        },
        95359: function(e, t, n) {
            "use strict";
            n.d(t, {
                DI: function() {
                    return a
                },
                LE: function() {
                    return l
                },
                Ts: function() {
                    return o
                },
                jY: function() {
                    return i
                }
            });
            var r = n(15164),
                o = "",
                i = (r.env.UGC_OSS_REGION, "https://leetcode.cn"),
                a = "https://c-pay.lingkou.com",
                l = "wxadf3350b709be02e"
        },
        50834: function(e, t, n) {
            var r = n(8458),
                o = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (t = e.exports = r.locals || {})._getContent = function() {
                return o
            }, t._getCss = function() {
                return "" + r
            }
        }
    }
]);