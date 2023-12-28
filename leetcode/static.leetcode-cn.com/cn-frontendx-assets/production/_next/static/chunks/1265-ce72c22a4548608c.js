"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1265, 2810], {
        48604: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return o
                }
            });
            var r = n(64386),
                o = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, r.useEffect)((function() {
                        return n(true)
                    }), [true]), t
                }
        },
        26275: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return o
                }
            });
            var r = n(64386);

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = (0, r.useState)(e),
                    n = t[0],
                    o = t[1],
                    i = (0, r.useCallback)((function() {
                        return o(!0)
                    }), []),
                    a = (0, r.useCallback)((function() {
                        return o(!1)
                    }), []);
                return {
                    visible: n,
                    showModal: i,
                    hideModal: a
                }
            }
        },
        34247: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return o
                },
                z: function() {
                    return r
                }
            });
            n(8249), n(37872), n(91518), n(29308), n(27115), n(21682), n(15084), n(72793);

            function r(e) {
                var t = "https://static.leetcode-cn.com/cn-frontendx-assets/".concat("production");
                return "." === e[0] && (e = e.substr(1)), "/" !== e[0] && (e = "/".concat(e)), t + e
            }

            function o(e) {
                if (null !== e && void 0 !== e && e.startsWith("http")) {
                    var t = new URL(e);
                    return t.searchParams.set("x-oss-process", "image/format,webp"), t.toString()
                }
                return "".concat(e, "?x-oss-process=image/format,webp")
            }
        },
        6387: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return f
                }
            });
            var r = n(21484),
                o = (n(1743), n(91518), n(58935), n(64386), n(44237)),
                i = n(44872),
                a = n(93164),
                l = n(98804),
                s = n(11754),
                c = function(e) {
                    return (0, i.yI)("fixed bottom-0 left-0 right-0 pointer-events-none z-message", e)
                },
                u = function(e) {
                    var t = document.getElementById("messages-provider");
                    if (!t) {
                        var n = document.createElement("div");
                        n.id = "messages-provider", document.body.appendChild(n), t = n, window.addEventListener("scroll", (function() {
                            t && (t.className = c(e))
                        }))
                    }
                    return t.className = c(e), t.style.top = function() {
                        var e = 54 + (0, r.Z)(document.getElementsByClassName(a.l)).reduce((function(e, t) {
                            return e + t.clientHeight
                        }), 0);
                        return window.innerWidth < 680 ? 54 : window.scrollY <= e ? e - window.scrollY : 4
                    }() + "px", t
                },
                d = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        a = arguments.length > 5 ? arguments[5] : void 0,
                        c = u(i || ""),
                        d = document.createElement("div");
                    d.className = "transition-opacity duration-500 ease-in-out z-message", c.appendChild(d);
                    var f, p = (0, o.createRoot)(d),
                        v = -1,
                        m = function(e) {
                            v = window.setTimeout((function() {
                                d.className += " opacity-0", f && f(r && r()), setTimeout((function() {
                                    p.unmount(), d.remove()
                                }), 500)
                            }), e)
                        },
                        g = function(e) {
                            -1 !== v && (clearTimeout(v), e || m(1e3 * n))
                        };
                    return p.render((0, s.jsx)(l.Z, {
                        content: t,
                        type: e,
                        onEnter: function() {
                            return g(!0)
                        },
                        onLeave: function() {
                            return g(!1)
                        },
                        className: a
                    })), new Promise((function(e) {
                        f = e, m(1e3 * n)
                    }))
                },
                f = {
                    info: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("info", e, r, o, i, a)
                    },
                    warn: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("warning", e, r, o, i, a)
                    },
                    warning: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("warning", e, r, o, i, a)
                    },
                    success: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("success", e, r, o, i, a)
                    },
                    error: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("error", e, r, o, i, a)
                    },
                    plain: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.duration,
                            r = void 0 === n ? 2 : n,
                            o = t.onClose,
                            i = t.containerClassName,
                            a = t.itemClassName;
                        return d("plain", e, r, o, i, a)
                    }
                }
        },
        98804: function(e, t, n) {
            n(64386);
            var r = n(57735),
                o = n(44872),
                i = n(96519),
                a = n(80001),
                l = n(91303),
                s = n(40007),
                c = n(11754);
            t.Z = function(e) {
                var t = e.className,
                    n = e.content,
                    u = e.type,
                    d = e.onEnter,
                    f = void 0 === d ? function() {
                        return null
                    } : d,
                    p = e.onLeave,
                    v = void 0 === p ? function() {
                        return null
                    } : p,
                    m = {
                        info: (0, c.jsx)(i.e, {
                            width: "18px",
                            height: "18px",
                            className: "mr-2 fill-blue-s dark:fill-dark-blue-s"
                        }),
                        error: (0, c.jsx)(a.X, {
                            width: "18px",
                            height: "18px",
                            className: "mr-2 fill-red-s dark:fill-dark-red-s"
                        }),
                        warning: (0, c.jsx)(i.e, {
                            width: "18px",
                            height: "18px",
                            className: "mr-2 fill-yellow dark:fill-dark-yellow"
                        }),
                        success: (0, c.jsx)(l.A, {
                            width: "18px",
                            height: "18px",
                            className: "mr-2 fill-green-s dark:fill-dark-green-s"
                        }),
                        plain: (0, c.jsx)(c.Fragment, {})
                    };
                return (0, c.jsx)(r.u, {
                    appear: !0,
                    show: !0,
                    enter: "transition duration-500 ease-out",
                    enterFrom: "transform scale-95 opacity-0",
                    enterTo: "transform scale-100 opacity-100",
                    leave: "transition duration-500 ease-out",
                    leaveFrom: "transform scale-100 opacity-100",
                    leaveTo: "transform scale-95 opacity-0",
                    children: (0, c.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, c.jsxs)("div", {
                            className: (0, o.yI)("px-4 py-1.5", s.Cj.bgPaper, s.Cj.label1, s.eq.commandBar, "pointer-events-auto my-2 flex items-center rounded-full", t),
                            onMouseEnter: f,
                            onMouseLeave: v,
                            children: [m[u], " ", (0, c.jsx)("span", {
                                children: n
                            })]
                        })
                    })
                })
            }
        },
        77535: function(e, t, n) {
            var r, o;
            n.d(t, {
                    CW: function() {
                        return i
                    },
                    NT: function() {
                        return a
                    },
                    XH: function() {
                        return r
                    },
                    pN: function() {
                        return l
                    },
                    r: function() {
                        return o
                    }
                }),
                function(e) {
                    e[e.LEFT_PANEL_MIN_SPACE = 400] = "LEFT_PANEL_MIN_SPACE", e[e.LEFT_PANEL_SNAPPING_SPACE = 200] = "LEFT_PANEL_SNAPPING_SPACE", e[e.RIGHT_PANEL_MIN_SPACE = 400] = "RIGHT_PANEL_MIN_SPACE", e[e.RIGHT_TOP_PANEL_MIN_SPACE = 186] = "RIGHT_TOP_PANEL_MIN_SPACE", e[e.RIGHT_BOTTOM_PANEL_MIN_SPACE = 186] = "RIGHT_BOTTOM_PANEL_MIN_SPACE", e[e.BOTTOM_PANEL_SNAPPING_SPACE = 93] = "BOTTOM_PANEL_SNAPPING_SPACE"
                }(r || (r = {})),
                function(e) {
                    e.Description = "description", e.Discussion = "discussion", e.Editorial = "editorial", e.Solutions = "solutions", e.Submissions = "submissions"
                }(o || (o = {}));
            o.Description, o.Editorial, o.Solutions, o.Submissions;
            var i = [o.Description, o.Discussion, o.Solutions, o.Submissions],
                a = "CONSOLE_SPLIT_LINE_HORIZONTAL",
                l = "CONSOLE_SPLIT_LINE_VERTICAL"
        },
        88755: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return s
                },
                p: function() {
                    return l
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(31793),
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
            var l = function(e) {
                    return (0, i.jsx)(o.PB, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(n), !0).forEach((function(t) {
                                (0, r.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e))
                },
                s = function() {
                    return (0, i.jsx)(o.PB, {
                        noindex: !0
                    })
                }
        },
        93164: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return r
                }
            });
            var r = "announcement-bar__container"
        },
        19759: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(7831),
                i = (n(64386), n(44872)),
                a = n(11754),
                l = ["orientation", "className"];

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
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                var t = e.orientation,
                    n = void 0 === t ? "horizontal" : t,
                    r = e.className,
                    s = (0, o.Z)(e, l);
                return "vertical" !== n ? (0, a.jsx)("hr", c({
                    className: (0, i.yI)("border-divider-2 dark:border-dark-divider-2", r)
                }, s)) : (0, a.jsx)("div", c({
                    className: (0, i.yI)("bg-divider-2 dark:bg-dark-divider-2 h-full w-px", r)
                }, s))
            }
        },
        36226: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return p
                }
            });
            var r = n(4676),
                o = n(7831),
                i = (n(8249), n(70055), n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(64386)),
                a = n(83815),
                l = n(34247);
            var s = n(11754),
                c = ["src", "errPlaceholder", "children"];

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

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = i.forwardRef((function(e, t) {
                var n = e.src,
                    r = e.errPlaceholder,
                    u = e.children,
                    f = (0, o.Z)(e, c),
                    p = n && function(e) {
                        return e.startsWith("http") || a.Oo ? e : (0, l.z)(e)
                    }(n),
                    v = (0, i.useState)(p),
                    m = v[0],
                    g = v[1],
                    h = (0, i.useCallback)((function() {
                        r && g(r)
                    }), [r, g]),
                    b = function(e, t) {
                        var n = (0, i.useRef)(null),
                            r = (0, i.useState)(!1),
                            o = r[0],
                            a = r[1],
                            l = (0, i.useCallback)((function(n) {
                                o || (n.target instanceof HTMLSourceElement ? n.target.srcset = e : n.target.src = e, a(!0), null === t || void 0 === t || t())
                            }), [e, o, t]);
                        return (0, i.useEffect)((function() {
                            if (n && n.current) {
                                var r = n.current,
                                    o = r.complete,
                                    i = r.naturalHeight;
                                o && 0 === i && (n.current instanceof HTMLSourceElement ? n.current.srcset = e : n.current.src = e, null === t || void 0 === t || t())
                            }
                        }), [e, t]), e ? {
                            ref: n,
                            onError: l
                        } : {}
                    }(r ? (0, l.s)(r) : "", h);
                return (0, i.useEffect)((function() {
                    g(p)
                }), [p]), (null === n || void 0 === n ? void 0 : n.toLowerCase().endsWith("svg")) ? (0, s.jsx)("img", d(d(d({
                    src: n,
                    ref: t
                }, b), f), {}, {
                    children: u
                })) : (0, s.jsxs)("picture", {
                    children: [(0, s.jsx)("source", d({
                        srcSet: (0, l.s)(m),
                        type: "image/webp"
                    }, b)), (0, s.jsx)("img", d(d(d({
                        src: p,
                        ref: t
                    }, f), b), {}, {
                        children: u
                    }))]
                })
            }));
            f.displayName = "LcImg";
            var p = f
        },
        40808: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return s
                }
            });
            n(64386);
            var r = n(92130),
                o = n.n(r),
                i = n(1308),
                a = n(36226),
                l = n(11754);

            function s(e) {
                var t = (0, i.F)().theme;
                return (0, l.jsx)(a.y, {
                    src: "dark" === t ? "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/null_dark-3f55ffa94690763ee68c9a2be3074a42.png" : "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png",
                    className: o()(e.className, {
                        "w-[200px]": !e.className
                    }),
                    alt: "\u6570\u636e\u4e3a\u7a7a"
                })
            }
        },
        47898: function(e, t, n) {
            var r, o, i, a, l, s;
            n.d(t, {
                    Az: function() {
                        return a
                    },
                    F4: function() {
                        return l
                    },
                    Fd: function() {
                        return r
                    },
                    Hc: function() {
                        return i
                    },
                    lr: function() {
                        return o
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(r || (r = {})),
                function(e) {
                    e.NotStarted = "NOT_STARTED", e.Ac = "AC", e.Tried = "TRIED"
                }(o || (o = {})),
                function(e) {
                    e.Html = "HTML", e.Markdown = "MARKDOWN"
                }(i || (i = {})),
                function(e) {
                    e.SIX_MONTH = "SIX_MONTH", e.ONE_YEAR = "ONE_YEAR", e.TWO_YEAR = "TWO_YEAR"
                }(a || (a = {})),
                function(e) {
                    e.Liked = "LIKED", e.Disliked = "DISLIKED", e.Neutral = "NEUTRAL"
                }(l || (l = {})),
                function(e) {
                    e.UnclearDescription = "UNCLEAR_DESCRIPTION", e.UnclearDifficulty = "UNCLEAR_DIFFICULTY", e.UnclearTestCases = "UNCLEAR_TEST_CASES", e.RuntimeStrict = "RUNTIME_STRICT", e.EdgeCases = "EDGE_CASES", e.Other = "OTHER"
                }(s || (s = {}))
        },
        41696: function(e, t, n) {
            n.d(t, {
                kF: function() {
                    return y
                },
                p2: function() {
                    return b
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = (n(1743), n(17519), n(72029), n(66128), n(11270), n(2979), n(91023), n(91518), n(82544), n(37872), n(58935), n(29308), n(27115), n(78659)),
                i = n(1308),
                a = n(90074),
                l = n(11288),
                s = n(17633),
                c = n(61420);

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

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = function(e) {
                    var t, n;
                    return {
                        questionSlug: e.questionSlug,
                        skip: 0,
                        first: e.perPage,
                        orderBy: h(e.orderBy),
                        userInput: e.query,
                        tagSlugs: null === (t = e.topicTags) || void 0 === t ? void 0 : t.concat(null !== (n = e.languageTags) && void 0 !== n ? n : [])
                    }
                },
                p = function(e) {
                    return {
                        questionSlug: e.questionSlug,
                        skip: 0,
                        first: e.perPage
                    }
                },
                v = function(e, t) {
                    var n = e.edges,
                        r = e.totalNum;
                    return null !== n && void 0 !== n && n.length && r ? {
                        total: r,
                        skip: t,
                        solutions: n.map((function(e) {
                            var t, n, r, o, i, l, s, u, d, f, p, v, m = e.node;
                            return {
                                slug: m.slug,
                                uuid: m.uuid,
                                id: Number(null === (t = m.topic) || void 0 === t ? void 0 : t.id),
                                postId: null !== (n = null === (r = m.topic) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : 0,
                                title: m.title,
                                isPinned: m.isEditorsPick,
                                isOfficial: m.byLeetcode,
                                hasVideo: m.hasVideo,
                                isPremium: !1,
                                isVideoPremium: !1,
                                isFavorite: m.isMyFavorite,
                                ipRegion: m.ipRegion,
                                voteStatus: m.reactionType === a.kt6.Upvote ? 1 : 0,
                                voteCount: null !== (o = null === (i = m.reactionsV2) || void 0 === i ? void 0 : i.reduce((function(e, t) {
                                    return t.reactionType === a.kt6.Upvote ? e + t.count : e
                                }), 0)) && void 0 !== o ? o : 0,
                                viewCount: m.hitCount,
                                commentCount: null !== (l = null === (s = m.topic) || void 0 === s ? void 0 : s.commentCount) && void 0 !== l ? l : 0,
                                creationDate: +new Date(m.createdAt) || +new Date,
                                tags: m.tags.map((function(e) {
                                    return e.nameTranslated || e.name
                                })),
                                tagSlugs: m.tags.map((function(e) {
                                    return e.slug
                                })),
                                author: {
                                    userAvatar: (null === (u = m.author) || void 0 === u ? void 0 : u.profile.userAvatar) || "",
                                    username: (null === (d = m.author) || void 0 === d ? void 0 : d.profile.userSlug) || "",
                                    realName: (null === (f = m.author) || void 0 === f ? void 0 : f.profile.realName) || "",
                                    isActive: !1,
                                    nameColor: void 0,
                                    activeBadgeIcon: "",
                                    activeBadgeName: "",
                                    reputation: null !== (p = null === (v = m.author) || void 0 === v ? void 0 : v.profile.reputation) && void 0 !== p ? p : 0
                                },
                                isHidden: Boolean(m.status === a.af_.Muted),
                                isHiddenFromTrending: !1,
                                isDeleted: Boolean(m.status === a.af_.Deleted),
                                status: g(m.status),
                                searchMeta: {
                                    content: m.summary,
                                    contentType: c.rr.Body,
                                    commentAuthor: "",
                                    replyAuthor: "",
                                    highlights: []
                                }
                            }
                        })),
                        hasDirectResults: !0
                    } : {
                        total: r || 0,
                        skip: t,
                        solutions: [],
                        hasDirectResults: !0
                    }
                },
                m = function(e, t) {
                    var n = e.solutions.map((function(e) {
                        return e.author.username
                    }));
                    return (0, s.mP)(n, t).then((function(t) {
                        return d(d({}, e), {}, {
                            solutions: e.solutions.map((function(e) {
                                var n = Object.assign({}, e),
                                    r = n.author.username.toLowerCase();
                                return n.author = d(d({}, n.author), null === t || void 0 === t ? void 0 : t[r]), n
                            }))
                        })
                    }))
                };

            function g(e) {
                switch (e) {
                    case a.af_.Deleted:
                        return c.$4.Deleted;
                    case a.af_.Draft:
                        return c.$4.Draft;
                    case a.af_.Pending:
                        return c.$4.Pending;
                    case a.af_.Muted:
                        return c.$4.Hidden;
                    case a.af_.Published:
                        return c.$4.Open;
                    case a.af_.Prepublish:
                        return c.$4.NeedUpdate;
                    case a.af_.Removed:
                        return c.$4.Deleted;
                    case a.af_.UpdateRequested:
                        return c.$4.All;
                    case a.af_.Checking:
                        return c.$4.Pending;
                    default:
                        return c.$4.Open
                }
            }

            function h(e) {
                switch (e) {
                    case c.av.Hot:
                        return a.YxA.Hot;
                    case c.av.NewestToOldest:
                        return a.YxA.NewestToOldest;
                    case c.av.OldestToNewest:
                        return a.YxA.OldestToNewest;
                    case c.av.MostVotes:
                        return a.YxA.MostUpvote;
                    default:
                        return a.YxA.Default
                }
            }
            var b = function(e, t) {
                    var n = f(e),
                        r = p(e);
                    return Promise.all([t.invalidateQueries([a.E0B.getKey(n)[0]]), t.invalidateQueries([a.JCE.getKey(r)[0]])])
                },
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (0, i.F)(),
                        r = n.theme,
                        s = f(e),
                        c = p(e),
                        u = (0, o.N)(a.E0B.getKey(s), (function(e) {
                            var t = e.pageParam,
                                n = void 0 === t ? s : t;
                            return l.f6.request(a.dMG, n).then((function(e) {
                                return v(e.questionSolutionArticles, n.skip)
                            })).then((function(e) {
                                return m(e, r)
                            }))
                        }), d(d({
                            enabled: !e.mySolution && !!e.questionSlug,
                            staleTime: 1 / 0
                        }, t), {}, {
                            getNextPageParam: function(e, t) {
                                return e.total > e.skip + s.first ? d(d({}, s), {}, {
                                    skip: t.length * s.first
                                }) : void 0
                            }
                        })),
                        g = (0, o.N)(a.JCE.getKey(c), (function(e) {
                            var t = e.pageParam,
                                n = void 0 === t ? c : t;
                            return l.f6.request(a.TDw, n).then((function(e) {
                                return v(e.questionSolutionMyArticles, n.skip)
                            })).then((function(e) {
                                return m(e, r)
                            }))
                        }), d(d({
                            enabled: e.mySolution && !!e.questionSlug,
                            staleTime: 1 / 0
                        }, t), {}, {
                            getNextPageParam: function(e, t) {
                                return e.total > e.skip + c.first ? d(d({}, c), {}, {
                                    skip: t.length * c.first
                                }) : void 0
                            }
                        }));
                    return e.mySolution ? g : u
                }
        },
        54678: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return a
                }
            });
            n(17519);
            var r = n(90074),
                o = n(11288),
                i = n(47898),
                a = function(e) {
                    return (0, r.dWZ)(o.f6, {
                        titleSlug: e
                    }, {
                        enabled: !!e,
                        select: function(e) {
                            if (!e.question) return null;
                            var t = e.question,
                                n = t.content,
                                o = t.mysqlSchemas,
                                a = t.editorType,
                                l = t.dataSchemas;
                            return {
                                content: n || "",
                                contentType: a === r.YPR.Ckeditor ? i.Hc.Html : i.Hc.Markdown,
                                mysqlSchemas: (null === o || void 0 === o ? void 0 : o.map((function(e) {
                                    return String(e)
                                }))) || [],
                                dataSchemas: (null === l || void 0 === l ? void 0 : l.map((function(e) {
                                    return String(e)
                                }))) || []
                            }
                        }
                    })
                }
        },
        56675: function(e, t, n) {
            n.d(t, {
                D: function() {
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
                        d: "M5.414 11H21a1 1 0 110 2H5.414L12 19.586A1 1 0 0110.586 21l-8.293-8.293a.997.997 0 01.003-1.417L10.586 3A1 1 0 1112 4.414L5.414 11z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        82875: function(e, t, n) {
            n.d(t, {
                E: function() {
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
                        d: "M18.586 13H3a1 1 0 110-2h15.586L12 4.414A1 1 0 0113.414 3l8.293 8.293a.997.997 0 01-.003 1.417L13.414 21A1 1 0 0112 19.586L18.586 13z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        3587: function(e, t, n) {
            n.d(t, {
                t: function() {
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
                        d: "M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        6381: function(e, t, n) {
            n.d(t, {
                I: function() {
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
                        d: "M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        58956: function(e, t, n) {
            n.d(t, {
                W: function() {
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
                        d: "M15.406 16.82a8 8 0 111.414-1.414l3.512 3.512a1 1 0 01-1.414 1.414l-3.512-3.512zM11.5 9.5H13a1 1 0 110 2h-1.5V13a1 1 0 11-2 0v-1.5H8a1 1 0 110-2h1.5V8a1 1 0 012 0v1.5zm-1 7a6 6 0 100-12 6 6 0 000 12z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        91303: function(e, t, n) {
            n.d(t, {
                A: function() {
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
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.219-8.94l-1.805-1.804a1 1 0 00-1.414 1.414l2.512 2.512a1 1 0 001.414 0l4.95-4.95a1 1 0 10-1.414-1.414l-4.243 4.243z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        80001: function(e, t, n) {
            n.d(t, {
                X: function() {
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
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.414-10l2.293-2.293a1 1 0 00-1.414-1.414L12 10.586 9.707 8.293a1 1 0 00-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 101.414 1.414L12 13.414l2.293 2.293a1 1 0 001.414-1.414L13.414 12z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        96519: function(e, t, n) {
            n.d(t, {
                e: function() {
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
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm0-3a1 1 0 100 2 1 1 0 000-2z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        40881: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(46667),
                a = n(11754);

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
            var c = (0, o.createContext)(i.T),
                u = function(e) {
                    var t = e.children,
                        n = e.value,
                        r = (0, i.z)((function(e) {
                            return e.updateState
                        })),
                        l = (0, i.z)();
                    return (0, o.useEffect)((function() {
                        r(n)
                    }), [r, n]), (0, a.jsx)(c.Provider, {
                        value: s(s({}, n), l),
                        children: t
                    })
                }
        },
        95365: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return p
                },
                x: function() {
                    return v
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(63306);
            var r = n(59679),
                o = n(4676),
                i = (n(91518), n(62217), n(83696), n(64386)),
                a = n(14176),
                l = (n(1743), n(46953));
            var s = {
                    solutionSide: {
                        getValueFromCookie: function(e) {
                            return e.indexOf("qd_sol_r=1") > -1 ? "right" : "left"
                        },
                        setValueToCookie: function(e) {
                            "right" === e ? l.Z.set("qd_sol_r", "1") : l.Z.remove("qd_sol_r")
                        }
                    }
                },
                c = n(11754);

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

            function d(e) {
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
            var f = {
                    solutionSide: "left",
                    consoleSide: "right",
                    verticalSplitterRatio: .5,
                    horizontalSplitterRatio: .5,
                    updatePreferences: function() {}
                },
                p = (0, i.createContext)(null),
                v = function(e) {
                    var t, n = e.children,
                        o = e.value,
                        l = (t = o, (0, a.M)()((function(e) {
                            return d(d(d({}, f), t), {}, {
                                updatePreferences: function(t) {
                                    return e((function(e) {
                                        return Object.entries(t).forEach((function(e) {
                                            var t, n = (0, r.Z)(e, 2),
                                                o = n[0],
                                                i = n[1];
                                            null === (t = s[o]) || void 0 === t || t.setValueToCookie(i)
                                        })), d(d({}, e), t)
                                    }))
                                }
                            })
                        }))),
                        u = (0, i.useRef)(l);
                    return (0, c.jsx)(p.Provider, {
                        value: u.current,
                        children: n
                    })
                }
        },
        33789: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return a
                },
                d: function() {
                    return l
                }
            });
            var r = n(64386),
                o = n(81757),
                i = n(95365),
                a = function(e) {
                    var t = (0, r.useContext)(i.M);
                    if (!t) throw new Error("Missing QdLayoutPreferencesContext.Provider in the tree");
                    return (0, o.oR)(t, e)
                },
                l = function() {
                    var e = (0, r.useContext)(i.M);
                    if (!e) throw new Error("Missing QdLayoutPreferencesContext.Provider in the tree");
                    return (0, o.oR)(e, (function(e) {
                        return e.updatePreferences
                    }))
                }
        },
        56103: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var r = n(30139),
                o = n(46239),
                i = n(24e3),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            panelSide: "left"
                        },
                        t = Boolean((0, r.n)()),
                        n = (0, o.v)((function(e) {
                            return e.leftPanelDom
                        })),
                        a = (0, o.v)((function(e) {
                            return e.rightPanelDom
                        })),
                        l = e.panelSide,
                        s = void 0 === l ? "left" : l,
                        c = e.threshold;
                    return (0, i.Q)({
                        domElement: "left" === s ? n : a,
                        threshold: c
                    }) || t
                }
        },
        48820: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return p
                }
            });
            var r = n(4676),
                o = n(59679),
                i = (n(1743), n(91518), n(2979), n(17519), n(72029), n(87621), n(51506), n(64386)),
                a = n(44872),
                l = n(98410),
                s = n(40007),
                c = n(98685),
                u = (n(3500), n(33789)),
                d = n(11754),
                f = function(e) {
                    var t = e.text,
                        n = e.onClick,
                        r = e.className;
                    return (0, d.jsx)("div", {
                        onClick: n,
                        className: (0, a.yI)(s.Cj.label2, s.Cj.fill3, "whitespace-nowrap rounded-[20px] px-2 py-[1px] text-xs", r),
                        children: t
                    })
                },
                p = function(e) {
                    var t = e.tags,
                        n = e.listClassName,
                        p = e.tagClassName,
                        v = e.highlightTags,
                        m = e.tagSlugs,
                        g = e.showisFavorite,
                        h = (0, i.useState)(null),
                        b = h[0],
                        y = h[1],
                        x = function(e, t) {
                            var n = (0, i.useState)(!0),
                                r = n[0],
                                o = n[1],
                                a = (0, i.useState)(Math.min(e.length, 4)),
                                l = a[0],
                                s = a[1],
                                c = (0, i.useCallback)((function() {
                                    o(!0), s(Math.min(e.length, 4))
                                }), [e.length]),
                                d = (0, u.M)((function(e) {
                                    return e.horizontalSplitterRatio
                                }));
                            return (0, i.useEffect)((function() {
                                return c()
                            }), [d, c]), (0, i.useEffect)((function() {
                                if (t && r) {
                                    if (!(t.scrollWidth > t.clientWidth) || l <= 0) return o(!1);
                                    s((function(e) {
                                        return e - 1
                                    }))
                                }
                            }), [t, r, l]), (0, i.useMemo)((function() {
                                return [e.slice(0, l), e.slice(l)]
                            }), [e, l])
                        }(t, b),
                        j = (0, o.Z)(x, 2),
                        O = j[0],
                        w = j[1],
                        P = w.reduce((function(e, t, n) {
                            return n ? "".concat(t, ", ").concat(e) : t
                        }), ""),
                        S = (0, a.yI)(c.nx.bgGray100, c.nx.labelTextReverse),
                        N = O.map((function(e, t) {
                            return {
                                name: e,
                                slug: m ? m[t] : ""
                            }
                        }));
                    return (0, d.jsxs)("div", {
                        className: (0, a.yI)("flex flex-grow flex-nowrap items-center gap-2 overflow-hidden", n),
                        ref: y,
                        children: [g && (0, d.jsx)(f, {
                            text: "Favorite",
                            className: (0, a.yI)(c.nx.labelYellow60, c.nx.bgOpacityYellow60)
                        }, "favorite"), N.map((function(e) {
                            return (0, d.jsx)(f, {
                                text: e.name,
                                className: (0, a.yI)(p, (0, r.Z)({}, S, null === v || void 0 === v ? void 0 : v.includes(e.slug)))
                            }, e.name)
                        })), w.length > 0 && (0, d.jsx)(l.J, {
                            showArrow: !1,
                            mobileEnable: !0,
                            placement: "top",
                            panelClassName: (0, a.yI)("max-w-[250px] min-w-0", s.Cj.bgLayer3),
                            contentClassName: "p-0",
                            content: (0, d.jsx)("div", {
                                className: (0, a.yI)("whitespace-normal break-all px-2 py-1.5 text-xs", s.Cj.label2),
                                children: P
                            }),
                            useHover: !0,
                            children: (0, d.jsx)("span", {
                                children: (0, d.jsx)(f, {
                                    text: "".concat(w.length, "+"),
                                    className: p
                                })
                            })
                        })]
                    })
                }
        },
        29207: function(e, t, n) {
            n.d(t, {
                mt: function() {
                    return _n
                },
                HN: function() {
                    return Ln
                },
                _v: function() {
                    return Rn
                },
                Tl: function() {
                    return Mn
                }
            });
            var r = n(4676),
                o = (n(52799), n(29092), n(73384), n(78464), n(70748), n(91518), n(96543), n(62217), n(63306), n(64386)),
                i = n(79216),
                a = n(44872),
                l = n(40007),
                s = n(79927),
                c = n(55272),
                u = n(87121),
                d = n(33789),
                f = n(40808),
                p = n(82424),
                v = n(55891),
                m = n(88755),
                g = (n(1743), n(91023), n(17519), n(72029), n(90074)),
                h = n(11288),
                b = n(61420);
            n(66128), n(11270), n(2979), n(82544), n(37872), n(58935), n(29308), n(27115), n(1308);
            var y = function(e) {
                    switch (e) {
                        case b.av.Hot:
                            return g.YxA.Hot;
                        case b.av.NewestToOldest:
                            return g.YxA.NewestToOldest;
                        case b.av.OldestToNewest:
                            return g.YxA.OldestToNewest;
                        case b.av.MostVotes:
                            return g.YxA.MostUpvote;
                        default:
                            return g.YxA.Default
                    }
                },
                x = function(e) {
                    var t, n;
                    return {
                        questionSlug: e.questionSlug,
                        skip: (e.page - 1) * e.perPage,
                        first: e.perPage,
                        orderBy: y(e.orderBy),
                        userInput: e.query,
                        tagSlugs: null === (t = e.topicTags) || void 0 === t ? void 0 : t.concat(null !== (n = e.languageTags) && void 0 !== n ? n : [])
                    }
                },
                j = function(e) {
                    return {
                        questionSlug: e.questionSlug,
                        skip: (e.page - 1) * e.perPage,
                        first: e.perPage
                    }
                };

            function O(e) {
                switch (e) {
                    case g.af_.Deleted:
                        return b.$4.Deleted;
                    case g.af_.Draft:
                        return b.$4.Draft;
                    case g.af_.Pending:
                        return b.$4.Pending;
                    case g.af_.Muted:
                        return b.$4.Hidden;
                    case g.af_.Published:
                        return b.$4.Open;
                    case g.af_.Prepublish:
                        return b.$4.NeedUpdate;
                    case g.af_.Removed:
                        return b.$4.Deleted;
                    case g.af_.UpdateRequested:
                        return b.$4.All;
                    case g.af_.Checking:
                        return b.$4.Pending;
                    default:
                        return b.$4.Open
                }
            }
            var w = function(e, t) {
                var n = x(e),
                    r = j(e);
                return Promise.all([t.invalidateQueries([g.E0B.getKey(n)[0]]), t.invalidateQueries([g.JCE.getKey(r)[0]])])
            };

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, g.ZL7)(h.f6, {
                        slug: e.slug
                    }, S(S({
                        enabled: !!e.slug
                    }, t), {}, {
                        select: function(e) {
                            var t, n, r, o, i, a, l, s, c, u, d, f, p, v, m, h, y, x, j, w, P, S, N, C, k, D, E, I, T, A, _, L, M, q, R, Z = e.solutionArticle;
                            return Z ? {
                                slug: Z.slug,
                                uuid: Z.uuid,
                                id: Number(null === (t = Z.topic) || void 0 === t ? void 0 : t.id),
                                content: (null === Z || void 0 === Z ? void 0 : Z.content) || "",
                                postId: (null === (n = Z.topic) || void 0 === n ? void 0 : n.post.id) || 0,
                                title: Z.title,
                                isPinned: Z.isEditorsPick,
                                isOfficial: null !== (r = null === Z || void 0 === Z ? void 0 : Z.byLeetcode) && void 0 !== r && r,
                                hasVideo: (null !== (o = null === Z || void 0 === Z || null === (i = Z.videosInfo) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0) > 0,
                                isPremium: !1,
                                isVideoPremium: !1,
                                ipRegion: Z.ipRegion,
                                reactionType: Z.reactionType,
                                voteCount: null !== (a = null === (l = Z.reactionsV2) || void 0 === l ? void 0 : l.reduce((function(e, t) {
                                    return t.reactionType === g.kt6.Upvote ? e + t.count : e
                                }), 0)) && void 0 !== a ? a : 0,
                                viewCount: null !== (s = null === Z || void 0 === Z ? void 0 : Z.hitCount) && void 0 !== s ? s : 0,
                                commentCount: null !== (c = null === (u = Z.topic) || void 0 === u ? void 0 : u.commentCount) && void 0 !== c ? c : 0,
                                creationDate: null !== (d = +new Date(Z.createdAt)) && void 0 !== d ? d : +new Date,
                                isSubscribed: null !== (f = null === (p = Z.topic) || void 0 === p ? void 0 : p.subscribed) && void 0 !== f && f,
                                isFavorite: Z.isMyFavorite,
                                tags: Z.tags.map((function(e) {
                                    return e.nameTranslated || e.name
                                })),
                                tagSlugs: Z.tags.map((function(e) {
                                    return e.slug
                                })),
                                author: {
                                    userAvatar: null !== (v = null === (m = Z.author) || void 0 === m ? void 0 : m.profile.userAvatar) && void 0 !== v ? v : "",
                                    username: null !== (h = null === (y = Z.author) || void 0 === y ? void 0 : y.profile.userSlug) && void 0 !== h ? h : "",
                                    realName: Z.author.profile.realName,
                                    isActive: !1,
                                    nameColor: void 0,
                                    activeBadgeIcon: "",
                                    activeBadgeName: "",
                                    isAdmin: null !== (x = null === (j = Z.author) || void 0 === j ? void 0 : j.isDiscussAdmin) && void 0 !== x && x,
                                    reputation: null !== (w = null === (P = Z.author) || void 0 === P ? void 0 : P.profile.reputation) && void 0 !== w ? w : 0
                                },
                                isOwnPost: null !== (S = null === (N = Z.topic) || void 0 === N ? void 0 : N.post.isOwnPost) && void 0 !== S && S,
                                isHidden: !1,
                                isHiddenFromTrending: !1,
                                isSunk: null !== (C = Z.sunk) && void 0 !== C && C,
                                isDeleted: Boolean((null === (k = Z.topic) || void 0 === k ? void 0 : k.post.status) === b.$4.Deleted),
                                status: O(Z.status),
                                voteStatus: Number(null !== (D = null === (E = Z.topic) || void 0 === E ? void 0 : E.post.voteStatus) && void 0 !== D ? D : 0),
                                prevPost: {
                                    questionSlug: null !== (I = null === Z || void 0 === Z || null === (T = Z.prev) || void 0 === T ? void 0 : T.slug) && void 0 !== I ? I : "",
                                    title: null !== (A = null === Z || void 0 === Z || null === (_ = Z.prev) || void 0 === _ ? void 0 : _.title) && void 0 !== A ? A : ""
                                },
                                nextPost: {
                                    questionSlug: null !== (L = null === Z || void 0 === Z || null === (M = Z.next) || void 0 === M ? void 0 : M.slug) && void 0 !== L ? L : "",
                                    title: null !== (q = null === Z || void 0 === Z || null === (R = Z.next) || void 0 === R ? void 0 : R.title) && void 0 !== q ? q : ""
                                }
                            } : null
                        }
                    }))
                },
                C = n(36291),
                k = n(46667),
                D = n(20162),
                E = function() {
                    return (0, g.$yl)(h.f6)
                },
                I = (n(72793), n(15084), n(94546), n(18854)),
                T = n.n(I),
                A = n(59787),
                _ = n(88077),
                L = n(54600),
                M = n(40682),
                q = n(26275),
                R = n(10316),
                Z = n(76411),
                F = n(21476),
                z = n(83815),
                U = n(98685),
                B = n(40473),
                G = n(6387),
                H = n(94861),
                $ = function() {
                    return (0, g.m7p)(h.f6)
                },
                V = n(41696),
                Y = n(37631),
                Q = n(92297),
                W = n(11754);

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = H.e,
                ee = function(e) {
                    var t = e.topicId,
                        n = e.updateModal,
                        r = e.slug,
                        a = (0, i.$G)("solutions", {
                            keyPrefix: "post.more"
                        }).t,
                        s = $().mutateAsync,
                        c = (0, Q.c)((function(e) {
                            return e.questionSlug
                        })),
                        u = (0, Y.n)().filters,
                        d = (0, B.NL)(),
                        f = J({
                            abName: "enableSolutionsInfiniteList",
                            enabled: !0
                        }).data,
                        v = (0, C.h)(),
                        m = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        g = (0, o.useCallback)((function() {
                            n({
                                loading: !0
                            }), s({
                                topicId: t,
                                slug: r
                            }).then((function(e) {
                                var o;
                                if ("deleteTopic" in e && (null === (o = e.deleteTopic) || void 0 === o || !o.ok || e.deleteTopic.error)) return G.y.error(a("error"), {
                                    itemClassName: l.Cj.bgLayer3
                                });
                                if (m) {
                                    var i = (0, p.dR)(r, t);
                                    null === v || void 0 === v || v.closeTab(D.r.SolutionPost, i)
                                } else T().push(A.Hb.solutionsWithLearningEnvironment(c, new URLSearchParams(window.location.search).toString()), void 0, {
                                    shallow: !0
                                });
                                f ? (0, V.p2)(X(X({}, u), {}, {
                                    questionSlug: c
                                }), d) : w(X(X({}, u), {}, {
                                    questionSlug: c
                                }), d), G.y.success(a("deleteMessage"), {
                                    itemClassName: l.Cj.bgLayer3
                                }), n({
                                    loading: !1,
                                    visible: !1
                                })
                            }))
                        }), [n, s, t, r, f, a, m, v, c, u, d]),
                        h = (0, o.useCallback)((function() {
                            n({
                                visible: !0,
                                variant: "danger",
                                confirmText: a("deleteConfirmText"),
                                confirmBtn: a("deleteConfirmBtn"),
                                onConfirm: g
                            })
                        }), [n, g, a]);
                    return (0, W.jsx)(Z.T, {
                        onClick: h,
                        children: a("delete")
                    })
                },
                te = n(49856),
                ne = n(90814),
                re = function(e) {
                    return Boolean(e.isOwnPost) || Boolean(e.isAdmin)
                },
                oe = function(e) {
                    return Boolean(e.isOwnPost)
                },
                ie = function(e) {
                    var t = e.permissions,
                        n = e.isOwnPost,
                        r = e.isAdmin,
                        i = e.isOfficial;
                    return (0, o.useMemo)((function() {
                        return {
                            canEdit: re({
                                isOwnPost: n,
                                isAdmin: r,
                                isOfficial: i,
                                permissions: t
                            }),
                            canReport: !n,
                            canPin: (0, te.F9)(t, ne.P.DiscussPinTopic),
                            canHide: (0, te.F9)(t, ne.P.DiscussHidePost),
                            canHideFromTrending: r,
                            canMoveToDiscuss: r,
                            canDelete: oe({
                                isOwnPost: n,
                                isAdmin: r,
                                isOfficial: i,
                                permissions: t
                            }),
                            canRestore: (0, te.F9)(t, ne.P.DiscussDeletePost),
                            canEditorsPick: r,
                            canOfficialPick: r,
                            canMute: r,
                            canSunk: r,
                            canRemove: r && !n
                        }
                    }), [n, t, r, i])
                },
                ae = n(86210),
                le = ae.E,
                se = function(e, t) {
                    return t ? "\u53cd\u9988" : e("report")
                },
                ce = z.ob,
                ue = function(e) {
                    var t, n = e.solution,
                        c = e.placement,
                        u = (0, i.$G)("solutions", {
                            keyPrefix: "post.more"
                        }).t,
                        d = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        f = n.isOwnPost,
                        p = n.isOfficial,
                        v = n.id,
                        m = n.slug,
                        g = n.postId,
                        h = null === (t = (0, M.U)().data) || void 0 === t ? void 0 : t.userStatus,
                        b = !(null === h || void 0 === h || !h.isSignedIn),
                        y = !(null === h || void 0 === h || !h.isAdmin),
                        x = null === h || void 0 === h ? void 0 : h.permissions,
                        j = ie({
                            permissions: x,
                            isOwnPost: f,
                            isAdmin: y,
                            isOfficial: p
                        }),
                        O = (0, o.useCallback)((function() {
                            var e = Q.c.getState().questionSlug;
                            s.d.qdEditPostClick({
                                qd_version: (0, _.in)(),
                                qd_question_slug: e
                            }), T().push(A.Hb.solutionEditor(e, v, m))
                        }), [v, m]),
                        w = (0, q.U)(),
                        P = w.visible,
                        S = w.showModal,
                        N = w.hideModal,
                        C = (0, R.t)(),
                        D = C.modal,
                        E = C.update,
                        I = se(u, n.isOfficial);
                    return !b || y && ce ? null : (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsxs)(Z.l, {
                            placement: c,
                            btnClassName: (0, a.yI)("w-5 h-5", (0, r.Z)({}, (0, a.yI)("w-8 h-8 p-2", U.nx.labelTextSecondary, U.rG.labelTextSecondary, U.rG.bgFillSecondary), d)),
                            iconClassName: (0, a.yI)(l.Cj.labelGrey6, l.M$.labelGrey7Group, "w-4 h-4", {
                                "text-current dark:text-current hover:text-current dark:hover:text-current": d
                            }),
                            children: [j.canEdit && (0, W.jsx)(Z.T, {
                                onClick: O,
                                children: u("edit")
                            }), j.canReport && (0, W.jsx)(Z.T, {
                                onClick: S,
                                children: I
                            }), j.canDelete && !n.isDeleted && (0, W.jsx)(ee, {
                                topicId: v,
                                slug: m,
                                updateModal: E
                            }), (0, W.jsx)(le, {
                                solution: n,
                                postPerm: j,
                                updateModal: E
                            })]
                        }), n.isOfficial ? (0, W.jsx)(F.a, {
                            visible: P,
                            onCancel: N,
                            slug: m
                        }) : (0, W.jsx)(F.y, {
                            postId: g,
                            articleId: n.uuid,
                            visible: P,
                            onCancel: N
                        }), D]
                    })
                },
                de = (n(87621), n(51506), n(10402)),
                fe = function(e) {
                    var t = e.status,
                        n = e.username;
                    return (0, de.v)(n) && [b.$4.Pending, g.af_.Checking].includes(t) ? (0, W.jsx)("div", {
                        className: (0, a.yI)(l.Cj.label3, "ml-auto mr-4 text-xs"),
                        children: "\u5ba1\u6838\u4e2d"
                    }) : null
                },
                pe = function() {
                    return null
                },
                ve = function(e) {
                    var t, n, r = e.className,
                        i = e.questionSlug,
                        c = e.solution,
                        u = (null === (t = (0, M.U)().data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.isAdmin) || !1,
                        d = (0, o.useMemo)((function() {
                            return new URLSearchParams(window.location.search).toString()
                        }), []),
                        f = (0, o.useCallback)((function() {
                            T().push(A.Hb.solutionsWithLearningEnvironment(i, d), void 0, {
                                shallow: !0
                            }), s.d.qdLeavePostClick({
                                qd_version: (0, _.in)(),
                                qd_question_slug: i
                            })
                        }), [i, d]);
                    return (0, W.jsxs)("div", {
                        children: [(0, W.jsxs)("div", {
                            className: (0, a.yI)("flex h-8 max-h-8 w-full items-center justify-between border-b px-4", l.Cj.divider3, r),
                            children: [(0, W.jsx)("button", {
                                className: (0, a.yI)("group flex h-5 w-5 cursor-pointer items-center justify-start gap-4 overflow-hidden"),
                                onClick: f,
                                children: (0, W.jsx)(L.F, {
                                    className: (0, a.yI)("h-4 w-4", l.Cj.labelGrey7, l.M$.labelGrey8Group)
                                })
                            }), !!c && (0, W.jsxs)(W.Fragment, {
                                children: [(0, W.jsx)(fe, {
                                    status: c.status,
                                    username: c.author.username
                                }), (0, W.jsx)("div", {
                                    className: "lc-md:block hidden",
                                    children: (0, W.jsx)(ue, {
                                        solution: c,
                                        placement: "bottom"
                                    })
                                })]
                            })]
                        }), u && !!c && (0, W.jsx)(pe, {
                            status: c.status
                        })]
                    })
                },
                me = (n(32504), n(81134)),
                ge = n(30486),
                he = function(e) {
                    var t = e.itemsCount,
                        n = Array(t).fill(null);
                    return (0, W.jsxs)(me.O, {
                        className: (0, a.yI)("flex w-full min-w-0 flex-col gap-4"),
                        children: [(0, W.jsxs)("div", {
                            className: "flex w-full justify-between",
                            children: [(0, W.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, W.jsx)(ge.a, {
                                    className: "h-6 w-[64px]"
                                }), (0, W.jsx)(ge.a, {
                                    className: "h-6 w-[64px]"
                                })]
                            }), (0, W.jsx)(ge.a, {
                                className: "h-6 w-[64px]"
                            })]
                        }), (0, W.jsx)(ge.a, {
                            className: "h-[140px] w-full"
                        }), n.map((function(e, t) {
                            return (0, W.jsxs)("div", {
                                className: "flex flex-col gap-2 pt-2",
                                children: [(0, W.jsxs)("div", {
                                    className: "flex w-full gap-3",
                                    children: [(0, W.jsx)(ge.a, {
                                        className: "h-10 w-10 min-w-[40px] rounded-full"
                                    }), (0, W.jsxs)("div", {
                                        className: "flex w-full flex-col gap-2",
                                        children: [(0, W.jsx)(ge.a, {
                                            className: "h-4 w-[20%]"
                                        }), (0, W.jsx)(ge.a, {
                                            className: "h-4 w-[25%]"
                                        })]
                                    })]
                                }), (0, W.jsx)(ge.a, {
                                    className: "h-4 w-full"
                                }), (0, W.jsx)(ge.a, {
                                    className: "h-4 w-[40%]"
                                })]
                            }, t)
                        }))]
                    })
                },
                be = function() {
                    return (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsx)(me.O, {
                            className: (0, a.yI)("relative mx-auto flex h-full w-full max-w-[732px] flex-1 flex-col overflow-y-auto"),
                            children: (0, W.jsxs)("div", {
                                className: "flex w-full flex-col gap-4 overflow-y-scroll px-5 py-4 ",
                                children: [(0, W.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [(0, W.jsx)(ge.a, {
                                        className: "h-10 w-10 max-w-[40px] rounded-full"
                                    }), (0, W.jsx)(ge.a, {
                                        className: "h-8 w-[60%]"
                                    })]
                                }), (0, W.jsx)("div", {
                                    className: "flex gap-4",
                                    children: Array(4).fill(null).map((function(e, t) {
                                        return (0, W.jsx)(ge.a, {
                                            className: "h-4 w-[15%]"
                                        }, t)
                                    }))
                                }), (0, W.jsx)("div", {
                                    className: "flex flex-col gap-4",
                                    children: Array(8).fill(null).map((function(e, t) {
                                        return (0, W.jsx)(ge.a, {
                                            className: (0, a.yI)("h-4", t % 2 === 0 ? "w-full" : "w-[50%]")
                                        }, t)
                                    }))
                                }), (0, W.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0, W.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, W.jsx)(ge.a, {
                                            className: "h-4 w-4"
                                        }), (0, W.jsx)(ge.a, {
                                            className: "h-4 w-8"
                                        }), (0, W.jsx)(ge.a, {
                                            className: "h-4 w-4"
                                        })]
                                    }), (0, W.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, W.jsx)(ge.a, {
                                            className: "h-4 w-4"
                                        }), (0, W.jsx)(ge.a, {
                                            className: "h-4 w-8"
                                        })]
                                    }), (0, W.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, W.jsx)(ge.a, {
                                            className: "h-4 w-4"
                                        }), (0, W.jsx)(ge.a, {
                                            className: "h-4 w-8"
                                        })]
                                    })]
                                }), (0, W.jsxs)("div", {
                                    className: "flex gap-5",
                                    children: [(0, W.jsx)(ge.a, {
                                        className: "h-[64px] w-full"
                                    }), (0, W.jsx)(ge.a, {
                                        className: "h-[64px] w-full"
                                    })]
                                }), (0, W.jsx)(he, {
                                    itemsCount: 2
                                })]
                            })
                        }), (0, W.jsxs)(me.O, {
                            className: (0, a.yI)(l.xy.borderFill01, "z-nav flex h-11 w-full items-center gap-4 border-t px-4"),
                            children: [(0, W.jsx)(ge.a, {
                                className: "h-[26px] w-[100px]"
                            }), [1, 2, 3].map((function(e) {
                                return (0, W.jsxs)("div", {
                                    className: "flex h-4 gap-4",
                                    children: [(0, W.jsx)(ge.a, {
                                        className: "h-4 w-4"
                                    }), (0, W.jsx)(ge.a, {
                                        className: "h-4 w-9"
                                    })]
                                }, e)
                            }))]
                        })]
                    })
                },
                ye = n(56103),
                xe = n(50546),
                je = n(30176),
                Oe = n(46239),
                we = n(59679),
                Pe = n(19129),
                Se = n(22980),
                Ne = n.n(Se),
                Ce = (n(43969), n(35420), n(31425), n(84622)),
                ke = n(84661),
                De = function(e, t, n) {
                    return [function(r) {
                        if (n) {
                            var o = (0, ke.Uy)(n, r);
                            e.setQueryData(t, o)
                        }
                    }, function() {
                        e.setQueryData(t, n)
                    }]
                },
                Ee = function(e, t) {
                    var n = g.ZL7.getKey({
                            slug: t
                        }),
                        r = e.getQueryData(n);
                    return De(e, n, r)
                },
                Ie = n(6167);

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

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _e = function(e) {
                    var t = Ie.X.getState().isSelectedMySolutionTag,
                        n = (0, Y.l)(),
                        r = Q.c.getState().questionSlug,
                        o = t ? j : x,
                        i = t ? g.JCE : g.E0B,
                        a = o(Ae(Ae({}, n), {}, {
                            questionSlug: r
                        })),
                        l = i.getKey(a),
                        s = e.getQueryData(l);
                    return De(e, l, s)
                },
                Le = function(e) {
                    var t = e.slug,
                        n = e.isFavorite,
                        r = (0, B.NL)(),
                        i = (0, g.NIt)(h.f6, {
                            onMutate: function() {
                                var e = (0, Pe.Z)(Ne().mark((function e() {
                                    var n, o, i, a, l, s, c, u;
                                    return Ne().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = Ee(r, t), o = (0, we.Z)(n, 2), i = o[0], a = o[1], l = _e(r), s = (0, we.Z)(l, 2), c = s[0], u = s[1], i((function(e) {
                                                    null !== e && void 0 !== e && e.solutionArticle && (e.solutionArticle.isMyFavorite = !0, c((function(e) {
                                                        e && e.pages.flatMap((function(e) {
                                                            return e.solutions
                                                        })).forEach((function(e) {
                                                            e && e.slug === t && (e.isFavorite = !0)
                                                        }))
                                                    })))
                                                })), e.abrupt("return", {
                                                    cancelUpdateSolution: a,
                                                    cancelUpdateSolutionList: u
                                                });
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            onSuccess: function(e, t, n) {
                                var r;
                                null !== (r = e.addFavoriteArticle) && void 0 !== r && r.ok || (null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList())
                            },
                            onError: function(e, t, n) {
                                null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList(), (0, Ce.defaultErrorHandler)(e)
                            }
                        }),
                        a = i.mutateAsync,
                        l = i.isLoading,
                        s = (0, g.RBs)(h.f6, {
                            onMutate: function() {
                                var e = (0, Pe.Z)(Ne().mark((function e() {
                                    var n, o, i, a, l, s, c, u;
                                    return Ne().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = Ee(r, t), o = (0, we.Z)(n, 2), i = o[0], a = o[1], l = _e(r), s = (0, we.Z)(l, 2), c = s[0], u = s[1], i((function(e) {
                                                    null !== e && void 0 !== e && e.solutionArticle && (e.solutionArticle.isMyFavorite = !1, c((function(e) {
                                                        e && e.pages.flatMap((function(e) {
                                                            return e.solutions
                                                        })).forEach((function(e) {
                                                            e && e.slug === t && (e.isFavorite = !1)
                                                        }))
                                                    })))
                                                })), e.abrupt("return", {
                                                    cancelUpdateSolution: a,
                                                    cancelUpdateSolutionList: u
                                                });
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            onSuccess: function(e, t, n) {
                                var r;
                                null !== (r = e.removeFavoriteArticle) && void 0 !== r && r.ok || (null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList())
                            },
                            onError: function(e, t, n) {
                                null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList(), (0, Ce.defaultErrorHandler)(e)
                            }
                        }),
                        c = s.mutateAsync,
                        u = s.isLoading;
                    return {
                        isLoading: l || u,
                        mutateAsync: (0, o.useCallback)((function() {
                            var e = {
                                data: {
                                    articleSlug: t
                                }
                            };
                            return n ? c(e).then((function(e) {
                                var t, r;
                                return {
                                    ok: null === (t = e.removeFavoriteArticle) || void 0 === t ? void 0 : t.ok,
                                    error: null === (r = e.removeFavoriteArticle) || void 0 === r ? void 0 : r.error,
                                    isFavorite: !n
                                }
                            })) : a(e).then((function(e) {
                                var t, r;
                                return {
                                    ok: null === (t = e.addFavoriteArticle) || void 0 === t ? void 0 : t.ok,
                                    error: null === (r = e.addFavoriteArticle) || void 0 === r ? void 0 : r.error,
                                    isFavorite: !n
                                }
                            }))
                        }), [a, n, c, t])
                    }
                },
                Me = n(67533),
                qe = n(6381),
                Re = n(62358),
                Ze = n(65972),
                Fe = n(72102),
                ze = n(19120),
                Ue = function(e) {
                    var t = e.solution,
                        n = e.showLabels,
                        r = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        c = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        u = t.slug,
                        d = t.isFavorite,
                        f = t.id,
                        p = (0, o.useState)(d),
                        v = p[0],
                        m = p[1];
                    (0, o.useEffect)((function() {
                        return m(d)
                    }), [d]);
                    var g = v ? Me.z : qe.I,
                        h = v ? [l.Cj.labelBrandOrange] : [l.Cj.labelGrey6, l.M$.labelBrandOrangeGroup],
                        b = v ? [l.Cj.labelBrandOrange] : [l.Cj.label3, l.M$.labelBrandOrangeGroup],
                        y = Le({
                            slug: u,
                            isFavorite: v,
                            topicId: f
                        }),
                        x = y.mutateAsync,
                        j = y.isLoading,
                        O = (0, o.useCallback)((function() {
                            x().then((function(e) {
                                var t = e.ok,
                                    n = e.error,
                                    o = e.isFavorite;
                                if (!t || n) return G.y.error(n || r("genericError"), {
                                    itemClassName: l.Cj.bgLayer3
                                });
                                G.y.success(r(o ? "addToFavoriteSuccess" : "removeFromFavoriteSuccess"), {
                                    itemClassName: l.Cj.bgLayer3
                                }), m(o), s.d.qdFavoritePostClick({
                                    qd_version: (0, _.in)(),
                                    qd_question_slug: Oe.v.getState().questionSlug,
                                    qd_favorite_pos: "bottom_bar"
                                })
                            }))
                        }), [x, r]),
                        w = r(v ? "isInCollection" : "addToCollection");
                    return c ? (0, W.jsx)(Fe.u, {
                        label: w,
                        children: (0, W.jsx)(Ze.z, {
                            icon: v ? (0, W.jsx)(ze.e, {
                                variant: "16px",
                                padding: "none",
                                icon: xe.Tab,
                                className: U.nx.labelYellow60
                            }) : (0, W.jsx)(ze.e, {
                                variant: "16px",
                                padding: "none",
                                icon: je.Tab
                            }),
                            variant: "text",
                            shape: "square",
                            className: (0, a.yI)("p-2", U.nx.labelTextSecondary, U.rG.labelTextSecondary),
                            onClick: j ? void 0 : O
                        })
                    }) : (0, W.jsx)(Re.E, {
                        icon: g,
                        iconClassName: a.yI.apply(void 0, ["h-4 w-4"].concat(h)),
                        label: n ? w : void 0,
                        labelClassName: a.yI.apply(void 0, ["text-[13px] leading-[18px] font-medium"].concat(b)),
                        className: "group cursor-pointer select-none",
                        onClick: j ? void 0 : O
                    })
                },
                Be = n(90417),
                Ge = n(36419),
                He = n(88622),
                $e = function(e) {
                    var t = e.solution,
                        n = e.showLabels,
                        r = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        o = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        c = (0, Ge.z)((function() {
                            u.S6.getState().scrollToCommentListTop(_n + t.id), s.d.qdViewPostCommentClick({
                                qd_version: (0, _.in)(),
                                qd_question_slug: Oe.v.getState().questionSlug
                            })
                        }));
                    return o ? (0, W.jsx)(Fe.u, {
                        label: r("comments"),
                        children: (0, W.jsx)(Ze.z, {
                            variant: "text",
                            label: void 0 === t.commentCount ? "" : (0, Be.ZP)(t.commentCount),
                            icon: (0, W.jsx)(ze.e, {
                                variant: "16px",
                                padding: "none",
                                icon: je.Mzg
                            }),
                            className: (0, a.yI)(U.nx.labelTextSecondary, U.rG.labelTextSecondary),
                            onClick: c
                        })
                    }) : (0, W.jsx)(Re.E, {
                        className: "group shrink-0 cursor-pointer select-none",
                        onClick: c,
                        label: n ? "".concat(r("comments"), " ").concat(t.commentCount) : t.commentCount,
                        labelClassName: (0, a.yI)("text-[13px] leading-[18px] font-medium", l.Cj.label3, l.M$.labelBlueStandardGroup),
                        icon: He.f,
                        iconClassName: (0, a.yI)("h-4 w-4", l.Cj.labelGrey6, l.M$.labelBlueStandardGroup)
                    })
                },
                Ve = n(87651),
                Ye = n(24150),
                Qe = function(e) {
                    var t = e.showLabels,
                        n = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        r = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        c = (0, Ve.c)(window.location.href, {
                            successDuration: 1e3
                        }),
                        u = (0, we.Z)(c, 2),
                        d = u[0],
                        f = u[1],
                        p = (0, o.useCallback)((function() {
                            return f()
                        }), [f]);
                    return (0, o.useEffect)((function() {
                        d && (G.y.success(n("shareCopySuccess"), {
                            itemClassName: l.Cj.bgLayer3
                        }), s.d.qdSharePostClick({
                            qd_version: (0, _.in)(),
                            qd_question_slug: Oe.v.getState().questionSlug,
                            qd_share_url: window.location.href
                        }))
                    }), [d, n]), r ? (0, W.jsx)(Fe.u, {
                        label: n("share"),
                        children: (0, W.jsx)(Ze.z, {
                            icon: (0, W.jsx)(ze.e, {
                                variant: "16px",
                                padding: "none",
                                icon: je.nNP
                            }),
                            variant: "text",
                            shape: "square",
                            className: (0, a.yI)("p-2", U.nx.labelTextSecondary, U.rG.labelTextSecondary),
                            onClick: p
                        })
                    }) : (0, W.jsx)(Re.E, {
                        icon: Ye.Q,
                        iconClassName: (0, a.yI)("h-4 w-4", l.Cj.labelGrey6, l.M$.labelBlueStandardGroup),
                        label: t ? n("share") : void 0,
                        labelClassName: (0, a.yI)("text-[13px] leading-[18px] font-medium", l.Cj.label3, l.M$.labelBlueStandardGroup),
                        className: "group cursor-pointer select-none",
                        onClick: p
                    })
                },
                We = n(21484),
                Ke = (n(36615), function(e) {
                    var t = (0, B.NL)();
                    return (0, g.ujV)(h.f6, {
                        onMutate: function() {
                            var n = (0, Pe.Z)(Ne().mark((function n(r) {
                                var o, i, a, l, s, c, u, d, f;
                                return Ne().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return o = r.reactionType, i = Ee(t, e), a = (0, we.Z)(i, 2), l = a[0], s = a[1], c = _e(t), u = (0, we.Z)(c, 2), d = u[0], f = u[1], l((function(t) {
                                                var n;
                                                if (null !== t && void 0 !== t && t.solutionArticle) {
                                                    var r = t.solutionArticle.reactionType;
                                                    t.solutionArticle.reactionType = o;
                                                    var i, a = null === (n = t.solutionArticle.reactionsV2) || void 0 === n ? void 0 : n.find((function(e) {
                                                        return e.reactionType === g.kt6.Upvote
                                                    }));
                                                    if (!a && o === g.kt6.Upvote) a = {
                                                        reactionType: g.kt6.Upvote,
                                                        count: 0
                                                    }, t.solutionArticle.reactionsV2 = [].concat((0, We.Z)(null !== (i = t.solutionArticle.reactionsV2) && void 0 !== i ? i : []), [a]);
                                                    a && r === g.kt6.Upvote && (a.count -= 1), a && o === g.kt6.Upvote && (a.count += 1), d((function(t) {
                                                        t && t.pages.flatMap((function(e) {
                                                            return e.solutions
                                                        })).forEach((function(t) {
                                                            (null === t || void 0 === t ? void 0 : t.slug) === e && (t.reactionType = o, t.voteStatus = o === g.kt6.Upvote ? b.i7.Upvote : b.i7.None, a && (t.voteCount = a.count))
                                                        }))
                                                    }))
                                                }
                                            })), n.abrupt("return", {
                                                cancelUpdateSolution: s,
                                                cancelUpdateSolutionList: f
                                            });
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        onSuccess: function(e, t, n) {
                            var r;
                            null !== (r = e.columnsAddReaction) && void 0 !== r && r.ok || (null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList())
                        },
                        onError: function(e, t, n) {
                            null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList(), (0, Ce.defaultErrorHandler)(e)
                        }
                    })
                }),
                Xe = function(e) {
                    var t = (0, B.NL)();
                    return (0, g.X0d)(h.f6, {
                        onMutate: function() {
                            var n = (0, Pe.Z)(Ne().mark((function n() {
                                var r, o, i, a, l, s, c, u;
                                return Ne().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = Ee(t, e), o = (0, we.Z)(r, 2), i = o[0], a = o[1], l = _e(t), s = (0, we.Z)(l, 2), c = s[0], u = s[1], i((function(t) {
                                                var n;
                                                if (null !== t && void 0 !== t && t.solutionArticle) {
                                                    var r = t.solutionArticle.reactionType;
                                                    t.solutionArticle.reactionType = null;
                                                    var o = null === (n = t.solutionArticle.reactionsV2) || void 0 === n ? void 0 : n.find((function(e) {
                                                        return e.reactionType === r
                                                    }));
                                                    o && (o.count -= 1), c((function(t) {
                                                        t && t.pages.flatMap((function(e) {
                                                            return e.solutions
                                                        })).forEach((function(t) {
                                                            (null === t || void 0 === t ? void 0 : t.slug) === e && (t.reactionType = null, t.voteStatus = b.i7.None, o && (t.voteCount = o.count))
                                                        }))
                                                    }))
                                                }
                                            })), n.abrupt("return", {
                                                cancelUpdateSolution: a,
                                                cancelUpdateSolutionList: u
                                            });
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        onSuccess: function(e, t, n) {
                            var r;
                            null !== (r = e.columnsRemoveReaction) && void 0 !== r && r.ok || (null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList())
                        },
                        onError: function(e, t, n) {
                            null === n || void 0 === n || n.cancelUpdateSolution(), null === n || void 0 === n || n.cancelUpdateSolutionList(), (0, Ce.defaultErrorHandler)(e)
                        }
                    })
                },
                Je = function(e) {
                    var t = e.upvoted,
                        n = e.articleId,
                        r = e.slug,
                        i = Ke(r),
                        a = i.mutateAsync,
                        l = i.isLoading,
                        s = Xe(r),
                        c = s.mutateAsync,
                        u = s.isLoading;
                    return {
                        mutateAsync: (0, o.useCallback)((function() {
                            return t ? c({
                                articleId: n
                            }).then((function(e) {
                                var t, n;
                                return {
                                    ok: null === (t = e.columnsRemoveReaction) || void 0 === t ? void 0 : t.ok,
                                    error: !(null !== (n = e.columnsRemoveReaction) && void 0 !== n && n.ok)
                                }
                            })) : a({
                                articleId: n,
                                reactionType: g.kt6.Upvote
                            }).then((function(e) {
                                var t, n;
                                return {
                                    ok: null === (t = e.columnsAddReaction) || void 0 === t ? void 0 : t.ok,
                                    error: !(null !== (n = e.columnsAddReaction) && void 0 !== n && n.ok)
                                }
                            }))
                        }), [n, c, t, a]),
                        isLoading: u || l
                    }
                },
                et = function(e) {
                    var t = e.downVoted,
                        n = e.articleId,
                        r = e.slug,
                        i = Ke(r),
                        a = i.mutateAsync,
                        l = i.isLoading,
                        s = Xe(r),
                        c = s.mutateAsync,
                        u = s.isLoading;
                    return {
                        mutateAsync: (0, o.useCallback)((function() {
                            return t ? c({
                                articleId: n
                            }).then((function(e) {
                                var t, n;
                                return {
                                    ok: null === (t = e.columnsRemoveReaction) || void 0 === t ? void 0 : t.ok,
                                    error: !(null !== (n = e.columnsRemoveReaction) && void 0 !== n && n.ok)
                                }
                            })) : a({
                                articleId: n,
                                reactionType: g.kt6.ThumbsDown
                            }).then((function(e) {
                                var t, n;
                                return {
                                    ok: null === (t = e.columnsAddReaction) || void 0 === t ? void 0 : t.ok,
                                    error: !(null !== (n = e.columnsAddReaction) && void 0 !== n && n.ok)
                                }
                            }))
                        }), [n, c, t, a]),
                        isLoading: u || l
                    }
                },
                tt = n(19759),
                nt = function(e) {
                    var t = e.reactionType;
                    return {
                        upvoted: !!t && t !== g.kt6.ThumbsDown,
                        downvoted: t === g.kt6.ThumbsDown,
                        checkIfVerified: function() {
                            return !0
                        }
                    }
                };

            function rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rt(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function it(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function at(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? it(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lt(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ct(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var dt, ft, pt, vt, mt, gt = o.forwardRef((function(e, t) {
                    return (0, W.jsx)("svg", ot(ot({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, W.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M10.24 5.832a2.274 2.274 0 013.517 0l7.668 9.156c.65.777.706 1.774.379 2.557C21.475 18.33 20.71 19 19.667 19H4.333c-1.044 0-1.809-.67-2.137-1.455a2.478 2.478 0 01.378-2.556l7.667-9.157zM12 7a.29.29 0 00-.225.116l-7.666 9.157a.478.478 0 00-.067.5c.07.17.185.227.292.227h15.334c.106 0 .22-.057.292-.227a.478.478 0 00-.068-.5l-7.668-9.157A.29.29 0 0012 7z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                ht = o.forwardRef((function(e, t) {
                    return (0, W.jsx)("svg", at(at({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, W.jsx)("path", {
                            d: "M10.925 5.783c.573-.71 1.575-.71 2.148 0l8.307 10.301c.83 1.03.172 2.666-1.074 2.666H3.694c-1.246 0-1.905-1.635-1.074-2.666l8.305-10.301z"
                        })
                    }))
                })),
                bt = o.forwardRef((function(e, t) {
                    return (0, W.jsx)("svg", st(st({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, W.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M13.759 18.168a2.274 2.274 0 01-3.516 0L2.575 9.012a2.478 2.478 0 01-.38-2.557C2.526 5.67 3.29 5 4.334 5h15.334c1.043 0 1.808.67 2.137 1.455.327.783.27 1.78-.38 2.556l-7.665 9.157zM12 17a.29.29 0 00.224-.116l7.666-9.157a.478.478 0 00.068-.5c-.072-.17-.186-.227-.292-.227H4.333c-.107 0-.221.057-.292.227a.478.478 0 00.067.5l7.668 9.157A.29.29 0 0012 17z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                yt = o.forwardRef((function(e, t) {
                    return (0, W.jsx)("svg", ut(ut({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, W.jsx)("path", {
                            d: "M13.075 18.217c-.573.71-1.575.71-2.148 0L2.62 7.916c-.83-1.03-.172-2.666 1.074-2.666h16.612c1.246 0 1.905 1.635 1.074 2.666l-8.305 10.301z"
                        })
                    }))
                })),
                xt = {
                    upvote: (0, W.jsx)(ze.e, {
                        variant: "12px",
                        padding: "roomy",
                        icon: je.BwA
                    }),
                    upvoted: (0, W.jsx)(ze.e, {
                        variant: "12px",
                        padding: "roomy",
                        icon: xe.BwA,
                        className: U.nx.labelGreen60
                    }),
                    downvote: (0, W.jsx)(ze.e, {
                        variant: "12px",
                        padding: "roomy",
                        icon: je.BwA,
                        className: "rotate-180"
                    }),
                    downvoted: (0, W.jsx)(ze.e, {
                        variant: "12px",
                        padding: "roomy",
                        icon: xe.BwA,
                        className: "rotate-180"
                    })
                },
                jt = (ze.e, je.CLC, ze.e, xe.CLC, U.nx.labelGreen60, ze.e, je.rsI, ze.e, xe.rsI, xt),
                Ot = "h-3.5 w-3.5",
                wt = function(e) {
                    var t = e.className,
                        n = e.solution,
                        c = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        u = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        d = n.voteCount,
                        f = n.postId,
                        p = n.id,
                        v = n.uuid,
                        m = n.slug,
                        g = nt(n),
                        h = g.upvoted,
                        b = g.downvoted,
                        y = g.checkIfVerified,
                        x = Je({
                            upvoted: h,
                            topicId: p,
                            articleId: v,
                            postId: f,
                            slug: m
                        }),
                        j = x.isLoading,
                        O = x.mutateAsync,
                        w = et({
                            downVoted: b,
                            topicId: p,
                            articleId: v,
                            postId: f,
                            slug: m
                        }),
                        P = w.isLoading,
                        S = w.mutateAsync,
                        N = (0, o.useCallback)((function() {
                            y() && O().then((function(e) {
                                var t = e.ok,
                                    n = e.error;
                                t ? s.d.qdUpVotePostClick({
                                    qd_version: (0, _.in)(),
                                    qd_question_slug: Oe.v.getState().questionSlug,
                                    qd_up_vote_pos: "bottom_bar"
                                }) : G.y.error(null !== n && void 0 !== n ? n : c("genericError"), {
                                    itemClassName: l.Cj.bgLayer3
                                })
                            }))
                        }), [y, O, c]),
                        C = (0, o.useCallback)((function() {
                            y() && S().then((function(e) {
                                var t = e.ok,
                                    n = e.error;
                                !t && G.y.error(null !== n && void 0 !== n ? n : c("genericError"), {
                                    itemClassName: l.Cj.bgLayer3
                                }), t && s.d.qdDownVotePostClick({
                                    qd_version: (0, _.in)(),
                                    qd_question_slug: Oe.v.getState().questionSlug
                                })
                            }))
                        }), [S, c, y]);
                    return u ? (0, W.jsxs)("div", {
                        className: (0, a.yI)("flex overflow-hidden rounded-lg", U.nx.bgFillSecondary),
                        children: [(0, W.jsx)(Ze.z, {
                            variant: "text",
                            icon: h ? jt.upvoted : jt.upvote,
                            label: (0, Be.ZP)(d),
                            onClick: j ? void 0 : N,
                            className: (0, a.yI)("rounded-none", U.nx.labelTextSecondary, U.rG.labelTextSecondary)
                        }), (0, W.jsx)("div", {
                            className: (0, a.yI)("h-8 w-px", l.xy.bgLayer01)
                        }), (0, W.jsx)(Ze.z, {
                            variant: "text",
                            icon: b ? jt.downvoted : jt.downvote,
                            onClick: P ? void 0 : C,
                            className: (0, a.yI)("rounded-none p-2", U.nx.labelTextSecondary, U.rG.labelTextSecondary)
                        })]
                    }) : (0, W.jsxs)("div", {
                        className: (0, a.yI)("mr-1 flex shrink-0 items-center justify-center gap-2 rounded px-3", l.xy.bgFill01, l.Cj.labelGreenStandardHover, t),
                        children: [(0, W.jsxs)("button", {
                            className: (0, a.yI)("group flex items-center justify-center gap-1 py-[5px]"),
                            onClick: j ? void 0 : N,
                            children: [(0, W.jsx)("div", {
                                className: (0, a.yI)(l.Cj.labelGrey6, l.M$.labelGreenStandardGroup, "flex h-4 w-4 cursor-pointer items-center justify-center", (0, r.Z)({}, l.Cj.labelGreenStandard, h)),
                                children: h ? (0, W.jsx)(ht, {
                                    className: Ot
                                }) : (0, W.jsx)(gt, {
                                    className: Ot
                                })
                            }), (0, W.jsx)("div", {
                                className: (0, a.yI)(l.M$.labelGreenStandardGroup, l.Cj.labelGrey6, "text-[13px] font-medium leading-[18px]", (0, r.Z)({}, l.Cj.labelGreenStandard, h)),
                                children: "".concat(c("upvote"), " ").concat(d)
                            })]
                        }), (0, W.jsx)(tt.i, {
                            orientation: "vertical",
                            className: "h-[10px]"
                        }), (0, W.jsx)("button", {
                            className: (0, a.yI)("flex h-4 w-4 cursor-pointer items-center justify-center py-[5px]", l.Cj.labelGrey6, l.M$.labelGrey7, (0, r.Z)({}, l.Cj.labelGrey7, b)),
                            onClick: P ? void 0 : C,
                            children: b ? (0, W.jsx)(yt, {
                                className: Ot
                            }) : (0, W.jsx)(bt, {
                                className: Ot
                            })
                        })]
                    })
                },
                Pt = n(61193),
                St = n(4383);
            var Nt = function(e) {
                    var t, n = e.solution,
                        c = e.placement,
                        u = (0, i.$G)("solutions", {
                            keyPrefix: "post.more"
                        }).t,
                        d = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        f = n.isOwnPost,
                        p = n.isOfficial,
                        v = n.id,
                        m = n.slug,
                        y = null === (t = (0, M.U)().data) || void 0 === t ? void 0 : t.userStatus,
                        x = !(null === y || void 0 === y || !y.isSignedIn),
                        j = !(null === y || void 0 === y || !y.isAdmin),
                        O = null === y || void 0 === y ? void 0 : y.permissions,
                        w = ie({
                            permissions: O,
                            isOwnPost: f,
                            isAdmin: j,
                            isOfficial: p
                        }),
                        P = (0, R.t)(),
                        S = P.modal,
                        N = P.update,
                        C = function(e) {
                            var t = e.EditorsPick,
                                n = e.OfficialPick,
                                r = e.Mute,
                                i = e.Sunk,
                                a = e.Delete,
                                l = e.slug,
                                s = e.uuid,
                                c = (0, o.useState)(t),
                                u = c[0],
                                d = c[1],
                                f = (0, o.useState)(n),
                                p = f[0],
                                v = f[1],
                                m = (0, o.useState)(r),
                                b = m[0],
                                y = m[1],
                                x = (0, o.useState)(i),
                                j = x[0],
                                O = x[1],
                                w = (0, o.useState)(a),
                                P = w[0],
                                S = w[1],
                                N = (0, B.NL)(),
                                C = _e(N),
                                k = (0, we.Z)(C, 2),
                                D = k[0],
                                E = k[1],
                                I = function() {
                                    var e = (0, Pe.Z)(Ne().mark((function e() {
                                        var t, n;
                                        return Ne().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = (0, St.gql)(dt || (dt = (0, Pt.Z)(["\n      ", "\n    "])), g.uAC), n = {
                                                        slug: l,
                                                        value: !u
                                                    }, e.next = 4, h.f6.request(t, n);
                                                case 4:
                                                    e.sent.columnsSetArticleAsEditorsPick.error ? G.y.error(u ? "\u53d6\u6d88\u8bbe\u4e3a\u7cbe\u9009\u64cd\u4f5c\u5931\u8d25" : "\u8bbe\u4e3a\u7cbe\u9009\u64cd\u4f5c\u5931\u8d25") : (G.y.success(u ? "\u53d6\u6d88\u8bbe\u4e3a\u7cbe\u9009\u64cd\u4f5c\u6210\u529f" : "\u8bbe\u4e3a\u7cbe\u9009\u64cd\u4f5c\u6210\u529f"), d(!u));
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                T = function() {
                                    var e = (0, Pe.Z)(Ne().mark((function e() {
                                        var t, n;
                                        return Ne().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = (0, St.gql)(ft || (ft = (0, Pt.Z)(["\n      ", "\n    "])), g.svk), n = {
                                                        slug: l,
                                                        value: !p
                                                    }, e.next = 4, h.f6.request(t, n);
                                                case 4:
                                                    e.sent.columnsSetArticleAsByLeetCode.error ? G.y.error(p ? "\u53d6\u6d88\u8bbe\u4e3a\u5b98\u65b9\u64cd\u4f5c\u5931\u8d25" : "\u8bbe\u4e3a\u5b98\u65b9\u64cd\u4f5c\u5931\u8d25") : (G.y.success(p ? "\u53d6\u6d88\u8bbe\u4e3a\u5b98\u65b9\u64cd\u4f5c\u6210\u529f" : "\u8bbe\u4e3a\u5b98\u65b9\u64cd\u4f5c\u6210\u529f"), v(!p));
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                A = function() {
                                    var e = (0, Pe.Z)(Ne().mark((function e() {
                                        var t, n;
                                        return Ne().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = (0, St.gql)(pt || (pt = (0, Pt.Z)(["\n      ", "\n    "])), g.zSi), n = {
                                                        uuid: s,
                                                        value: !b
                                                    }, e.next = 4, h.f6.request(t, n);
                                                case 4:
                                                    if (!e.sent.columnsSetArticleAsMuted.error) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    G.y.error(b ? "\u53d6\u6d88\u7070\u8272\u5c4f\u853d\u5931\u8d25" : "\u8bbe\u4e3a\u7070\u8272\u5c4f\u853d\u5931\u8d25"), e.next = 13;
                                                    break;
                                                case 9:
                                                    return D((function(e) {
                                                        e && e.pages.flatMap((function(e) {
                                                            return e.solutions
                                                        })).forEach((function(e) {
                                                            (null === e || void 0 === e ? void 0 : e.slug) === l && (e.isHidden = !b)
                                                        }))
                                                    })), G.y.success(b ? "\u53d6\u6d88\u7070\u8272\u5c4f\u853d\u64cd\u4f5c\u6210\u529f" : "\u8bbe\u4e3a\u7070\u8272\u5c4f\u853d\u6210\u529f"), y(!b), e.abrupt("return", {
                                                        cancelUpdateSolutionList: E
                                                    });
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                _ = function() {
                                    var e = (0, Pe.Z)(Ne().mark((function e() {
                                        var t, n;
                                        return Ne().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = (0, St.gql)(vt || (vt = (0, Pt.Z)(["\n      ", "\n    "])), g.UQN), n = {
                                                        slug: l,
                                                        sunk: !j
                                                    }, e.next = 4, h.f6.request(t, n);
                                                case 4:
                                                    e.sent.columnsToggleSunkSolution.error ? G.y.error(j ? "\u53d6\u6d88\u4e0b\u6c89\u5931\u8d25" : "\u4e0b\u6c89\u64cd\u4f5c\u5931\u8d25") : (G.y.success(j ? "\u53d6\u6d88\u4e0b\u6c89\u6210\u529f" : "\u4e0b\u6c89\u64cd\u4f5c\u6210\u529f"), O(!j));
                                                case 6:
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
                                    var e = (0, Pe.Z)(Ne().mark((function e() {
                                        var t, n;
                                        return Ne().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = (0, St.gql)(mt || (mt = (0, Pt.Z)(["\n      ", "\n    "])), g.URH), n = {
                                                        slug: l,
                                                        value: !P
                                                    }, e.next = 4, h.f6.request(t, n);
                                                case 4:
                                                    e.sent.columnsSetArticleAsRemoved.error ? G.y.error(P ? "\u6062\u590d\u5220\u9664\u5931\u8d25" : "\u5220\u9664\u64cd\u4f5c\u5931\u8d25") : (G.y.success(P ? "\u6062\u590d\u5220\u9664\u6210\u529f" : "\u5220\u9664\u64cd\u4f5c\u6210\u529f"), S(!P));
                                                case 6:
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
                                isEditorsPick: u,
                                handleEditorPick: I,
                                isOfficialPick: p,
                                handleOfficialPick: T,
                                isMute: b,
                                handleMute: A,
                                isSunk: j,
                                handleSunk: _,
                                isDelete: P,
                                handleDelete: L
                            }
                        }({
                            EditorsPick: n.isPinned,
                            OfficialPick: n.isOfficial,
                            Mute: n.status === b.$4.Hidden,
                            Sunk: n.isSunk,
                            Delete: n.isDeleted,
                            slug: n.slug,
                            uuid: n.uuid
                        }),
                        D = C.isEditorsPick,
                        E = C.handleEditorPick,
                        I = C.isOfficialPick,
                        L = C.handleOfficialPick,
                        q = C.isMute,
                        F = C.handleMute,
                        z = C.isSunk,
                        H = C.handleSunk,
                        $ = C.handleDelete,
                        V = (0, o.useCallback)((function() {
                            var e = Q.c.getState().questionSlug;
                            s.d.qdEditPostClick({
                                qd_version: (0, _.in)(),
                                qd_question_slug: e
                            }), T().push(A.Hb.solutionEditor(e, v, m))
                        }), [v, m]);
                    return x && j ? (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsxs)(Z.l, {
                            placement: c,
                            btnClassName: (0, a.yI)("w-5 h-5", (0, r.Z)({}, (0, a.yI)("w-8 h-8 p-2", U.nx.labelTextSecondary, U.rG.labelTextSecondary, U.rG.bgFillSecondary), d)),
                            iconClassName: (0, a.yI)(l.Cj.labelRed, l.M$.labelRedStandard, "w-4 h-4"),
                            children: [w.canEditorsPick && (0, W.jsx)(Z.T, {
                                onClick: E,
                                children: u(D ? "uneditorsPick" : "editorsPick")
                            }), w.canOfficialPick && (0, W.jsx)(Z.T, {
                                onClick: L,
                                children: u(I ? "unofficialPick" : "officialPick")
                            }), w.canMute && (0, W.jsx)(Z.T, {
                                onClick: F,
                                children: u(q ? "unmute" : "mute")
                            }), !I && w.canSunk && (0, W.jsx)(Z.T, {
                                onClick: H,
                                children: u(z ? "unsunk" : "sunk")
                            }), w.canEdit && (0, W.jsx)(Z.T, {
                                onClick: V,
                                children: u("edit")
                            }), w.canDelete ? !n.isDeleted && (0, W.jsx)(ee, {
                                topicId: v,
                                slug: m,
                                updateModal: N
                            }) : w.canRemove && (0, W.jsx)(Z.T, {
                                onClick: $,
                                children: u("delete")
                            })]
                        }), S]
                    }) : null
                },
                Ct = function(e) {
                    var t = e.solution,
                        n = e.solutionSide,
                        r = !(0, ye.A)({
                            panelSide: n,
                            threshold: 475
                        }),
                        o = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        }));
                    return (0, W.jsxs)("div", {
                        className: (0, a.yI)(l.xy.bgLayer01, l.xy.borderFill01, "flex h-11 w-full items-center gap-4 border-t px-4", {
                            "h-[41px] gap-2 p-1": o
                        }),
                        children: [(0, W.jsxs)("div", {
                            className: (0, a.yI)("flex items-center gap-4", {
                                "gap-1": o
                            }),
                            children: [(0, W.jsx)(wt, {
                                solution: t
                            }), (0, W.jsx)($e, {
                                solution: t,
                                showLabels: r
                            })]
                        }), o && (0, W.jsx)("div", {
                            className: "bg-sd-border h-4 w-px"
                        }), (0, W.jsxs)("div", {
                            className: (0, a.yI)("flex items-center gap-4", {
                                "gap-1": o
                            }),
                            children: [(0, W.jsx)(Ue, {
                                solution: t,
                                showLabels: r
                            }), (0, W.jsx)(Qe, {
                                showLabels: r
                            }), (0, W.jsx)(ue, {
                                solution: t,
                                placement: "top"
                            }), (0, W.jsx)(Nt, {
                                solution: t,
                                placement: "top"
                            })]
                        })]
                    })
                },
                kt = n(20456),
                Dt = n.n(kt),
                Et = n(99663),
                It = n(34573),
                Tt = (n(21682), n(95359)),
                At = n(90574),
                _t = n(97583),
                Lt = n(593),
                Mt = n(27319),
                qt = n(58956);

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

            function Zt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ft = o.forwardRef((function(e, t) {
                    return (0, W.jsx)("svg", Zt(Zt({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, W.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M15.406 16.82a8 8 0 111.414-1.414l3.512 3.512a1 1 0 01-1.414 1.414l-3.512-3.512zM10.5 16.5a6 6 0 100-12 6 6 0 000 12zm-2.5-5a1 1 0 110-2h5a1 1 0 110 2H8z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                zt = function(e) {
                    var t = e.children,
                        n = (0, Lt.O)(!1),
                        r = (0, we.Z)(n, 2),
                        i = r[0],
                        a = r[1],
                        l = a.on,
                        s = a.off,
                        c = (0, o.useState)(""),
                        u = c[0],
                        d = c[1],
                        f = (0, o.useCallback)((function(e) {
                            var t = e.target;
                            "IMG" !== t.tagName || t.classList.contains("no-preview") || function(e) {
                                var t;
                                return null === (t = e.parentElement) || void 0 === t ? void 0 : t.classList.contains("prism-progress-cursor")
                            }(t) || (d(t.src), l())
                        }), [l]);
                    return (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsx)("div", {
                            onClick: f,
                            children: t
                        }), (0, W.jsxs)(Mt.u, {
                            visible: i,
                            onCancel: s,
                            className: "children:!overflow-visible my-0 h-[100vh] w-full rounded-none bg-transparent p-0",
                            noShadow: !0,
                            stopMouseDownPropagation: At.Z,
                            closable: !1,
                            children: [(0, W.jsx)(_t.d$, {
                                minScale: .5,
                                maxScale: 5,
                                pinch: {
                                    step: 2e3
                                },
                                wheel: {
                                    step: .1
                                },
                                children: function(e) {
                                    var t = e.zoomIn,
                                        n = e.zoomOut;
                                    return (0, W.jsxs)(W.Fragment, {
                                        children: [(0, W.jsx)("figure", {
                                            className: "children:cursor-grab flex h-full w-full items-center justify-center",
                                            children: (0, W.jsx)(_t.Uv, {
                                                children: (0, W.jsx)("img", {
                                                    src: u,
                                                    alt: "",
                                                    className: "max-h-[560px] w-auto max-w-[1080px] cursor-grab transition-transform duration-300"
                                                })
                                            })
                                        }), (0, W.jsxs)("div", {
                                            className: "bg-gray-7 dark:bg-dark-gray-7 fixed bottom-4 left-[50%] flex rounded-md  p-2",
                                            children: [(0, W.jsx)(qt.W, {
                                                className: "text-paper dark:text-dark-paper h-6 w-6 cursor-pointer",
                                                onClick: function() {
                                                    return t()
                                                }
                                            }), (0, W.jsx)("div", {
                                                className: "border-dark-divider-1 dark:border-divider-1 mx-2 h-6 border-r"
                                            }), (0, W.jsx)(Ft, {
                                                className: "text-paper dark:text-dark-paper h-6 w-6 cursor-pointer",
                                                onClick: function() {
                                                    return n()
                                                }
                                            })]
                                        })]
                                    })
                                }
                            }), (0, W.jsx)("button", {
                                onClick: s,
                                className: "bg-gray-7 z-modal dark:bg-dark-gray-7 absolute right-0 top-0 m-5 cursor-pointer rounded p-2 transition-all",
                                children: (0, W.jsx)(L.F, {
                                    className: "text-paper dark:text-dark-paper h-6 w-6"
                                })
                            })]
                        })]
                    })
                },
                Ut = (n(3500), n(3688)),
                Bt = n.n(Ut),
                Gt = n(56896),
                Ht = n.n(Gt),
                $t = n(3587),
                Vt = n(17633),
                Yt = n(17696),
                Qt = n(161),
                Wt = n(91613),
                Kt = n(48820),
                Xt = n(66455),
                Jt = n(51200),
                en = function(e) {
                    var t, n, o = e.userSlug,
                        i = function(e) {
                            var t = (0, g.aT1)(h.f6, {
                                    userSlug: e
                                }, {
                                    enabled: !!e,
                                    notifyOnChangeProps: ["data"],
                                    select: function(e) {
                                        var t, n;
                                        return null !== (t = null === (n = e.userProfilePublicProfile) || void 0 === n ? void 0 : n.isFollowed) && void 0 !== t && t
                                    }
                                }).data,
                                n = void 0 !== t && t,
                                r = (0, B.NL)(),
                                o = g.aT1.getKey({
                                    userSlug: e
                                }),
                                i = (0, Oe.v)((function(e) {
                                    return e.questionSlug
                                })),
                                a = (n ? g.$i1 : g.MkQ)(h.f6, {
                                    onMutate: function() {
                                        var e = (0, Pe.Z)(Ne().mark((function e() {
                                            var t;
                                            return Ne().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return t = r.getQueryData(o), r.setQueryData(o, (function(e) {
                                                            var t;
                                                            return {
                                                                userProfilePublicProfile: {
                                                                    isFollowed: !(null !== e && void 0 !== e && null !== (t = e.userProfilePublicProfile) && void 0 !== t && t.isFollowed)
                                                                }
                                                            }
                                                        })), s.d.qdSubscribePostCnClick({
                                                            qd_version: (0, _.in)(),
                                                            qd_question_slug: i
                                                        }), e.abrupt("return", t);
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    onError: function(e, t, n) {
                                        r.setQueryData(o, n), (0, Ce.defaultErrorHandler)(e)
                                    }
                                }),
                                l = a.mutateAsync;
                            return {
                                toggleFollow: (0, Ge.z)((function() {
                                    l({
                                        userSlug: e
                                    })
                                })),
                                isFollowed: n
                            }
                        }(o),
                        c = i.toggleFollow,
                        u = i.isFollowed,
                        d = (0, M.U)(),
                        f = d.data,
                        p = d.isFetching;
                    return (null === f || void 0 === f || null === (t = f.userStatus) || void 0 === t ? void 0 : t.userSlug) === o || p ? null : (0, W.jsx)(Xt.z, {
                        variant: "plain",
                        className: (0, a.yI)("ml-auto h-[28px] select-none rounded px-5 text-[13px] leading-[18px]", (n = {}, (0, r.Z)(n, (0, a.yI)(l.Cj.label3, l.Cj.fill3, "border border-transparent"), u), (0, r.Z)(n, (0, a.yI)(l.Cj.labelGreenStandard, "border"), !u), n)),
                        onClick: c,
                        children: u ? (0, W.jsx)("span", {
                            children: "\u5df2\u5173\u6ce8"
                        }) : (0, W.jsxs)(W.Fragment, {
                            children: [(0, W.jsx)(Jt.S, {
                                className: "mr-1 h-4 w-4"
                            }), "\u5173\u6ce8"]
                        })
                    })
                },
                tn = function(e) {
                    return Ht()(e) > 120 && Bt() ? Bt()(e, 120) + "..." : e
                },
                nn = ae.E,
                rn = ae.E,
                on = function(e) {
                    var t = e.ipRegion;
                    return t ? (0, W.jsxs)("span", {
                        className: (0, a.yI)(l.Cj.label2, "flex-shrink-0 text-xs"),
                        children: ["\u53d1\u5e03\u4e8e ", t]
                    }) : null
                },
                an = function(e) {
                    var t = e.className,
                        n = e.solution,
                        r = (0, d.M)((function(e) {
                            return e.solutionSide
                        })),
                        i = (0, ye.A)({
                            panelSide: r
                        }),
                        s = (0, o.useMemo)((function() {
                            return tn(n.title)
                        }), [n.title]),
                        c = n.author,
                        u = [c.username],
                        f = (0, Vt.Ew)(u).data,
                        p = null === f || void 0 === f ? void 0 : f[c.username];
                    return (0, W.jsx)("div", {
                        className: (0, a.yI)("w-full", t),
                        children: (0, W.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-4",
                            children: [(0, W.jsxs)("div", {
                                className: "flex min-h-[32px] items-start gap-4",
                                children: [!i && (0, W.jsx)(Yt.D, {
                                    userAvatar: c.userAvatar,
                                    username: c.username
                                }), (0, W.jsx)("div", {
                                    className: (0, a.yI)("text-lg font-medium [overflow-wrap:anywhere]", l.xy.labelTextPrimary),
                                    children: s
                                }), (0, W.jsx)(en, {
                                    userSlug: c.username
                                })]
                            }), (0, W.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, W.jsx)(Qt.S, {
                                    realName: c.realName,
                                    username: c.username,
                                    badgeIcon: c.activeBadgeIcon || (null === p || void 0 === p ? void 0 : p.activeBadgeIcon) || "",
                                    badgeName: c.activeBadgeName || (null === p || void 0 === p ? void 0 : p.activeBadgeName) || "",
                                    userClassName: "font-normal",
                                    reputation: null === p || void 0 === p ? void 0 : p.reputation
                                }), (0, W.jsx)(nn, {
                                    isAdmin: c.isAdmin
                                }), (0, W.jsx)(rn, {
                                    reputation: c.reputation
                                }), (0, W.jsx)(Re.E, {
                                    icon: $t.t,
                                    label: n.viewCount,
                                    iconClassName: l.xy.labelIconSecondary,
                                    labelClassName: l.xy.labelTextSecondary
                                }), (0, W.jsx)(Wt.c, {
                                    timestamp: n.creationDate,
                                    iconClassName: l.xy.labelIconSecondary,
                                    formattedDateClassName: l.xy.labelTextSecondary
                                }), (0, W.jsx)(on, {
                                    ipRegion: n.ipRegion
                                })]
                            }), n.tags.length > 0 && (0, W.jsx)(Kt.P, {
                                tags: n.tags,
                                listClassName: "my-1",
                                tagClassName: (0, a.yI)("h-5 flex items-center px-3", l.xy.bgFill01, l.xy.labelTextSecondary)
                            })]
                        })
                    })
                };

            function ln(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function sn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ln(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var cn = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, g.ZL7)(h.f6, {
                        slug: e.topicSlug
                    }, sn(sn({}, t), {}, {
                        enabled: Boolean(e.topicSlug),
                        select: function(e) {
                            var t = e.solutionArticle,
                                n = null === t || void 0 === t ? void 0 : t.prev,
                                r = null === t || void 0 === t ? void 0 : t.next;
                            return {
                                prevSolution: n ? {
                                    topicId: 1,
                                    topicSlug: n.slug,
                                    title: n.title
                                } : void 0,
                                nextSolution: r ? {
                                    topicId: 1,
                                    topicSlug: r.slug,
                                    title: r.title
                                } : void 0
                            }
                        }
                    }))
                },
                un = n(41986),
                dn = n(56675),
                fn = n(82875),
                pn = function(e) {
                    var t = e.className,
                        n = e.placement,
                        r = e.questionSlug,
                        c = e.topicId,
                        u = e.topicSlug,
                        d = e.title,
                        f = e.currentTopicId,
                        p = e.currentTopicSlug,
                        v = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        m = (0, o.useMemo)((function() {
                            return new URLSearchParams(window.location.search).toString()
                        }), []),
                        g = A.Hb.solutionsWithLearningEnvironment(r, m, c, u),
                        h = "left" === n,
                        b = "right" === n,
                        y = h ? dn.D : fn.E,
                        x = v(h ? "prevLabel" : "nextLabel"),
                        j = (0, Oe.v)((function(e) {
                            return e.questionSlug
                        })),
                        O = (0, C.h)(),
                        w = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        })),
                        P = (0, o.useCallback)((function(e) {
                            if (e.preventDefault(), w) {
                                var t = {
                                    topicSlug: p
                                };
                                null === O || void 0 === O || O.setTabConfig(D.r.SolutionPost, {
                                    topicId: c,
                                    topicSlug: u
                                }, t)
                            } else T().push(g, void 0, {
                                shallow: !0
                            });
                            s.d.qdPrevNextPostClick({
                                qd_version: (0, _.in)(),
                                qd_question_slug: j,
                                qd_post_switch_type: h ? "prev" : "next"
                            })
                        }), [O, f, p, w, h, j, c, u, g]);
                    return (0, W.jsxs)(un.r, {
                        href: g,
                        className: (0, a.yI)(l.Cj.fill1Hover, l.Cj.borderFill2, "flex min-w-0 justify-between gap-3 rounded-lg border px-4 py-3", t),
                        onClick: P,
                        children: [(0, W.jsx)("div", {
                            className: (0, a.yI)("flex h-full items-center", {
                                "order-1": h,
                                "order-2": b
                            }),
                            children: (0, W.jsx)(y, {
                                className: (0, a.yI)(l.xy.labelIconSecondary, "h-4 w-4")
                            })
                        }), (0, W.jsxs)("div", {
                            className: (0, a.yI)("flex w-full flex-col gap-1 overflow-hidden", {
                                "order-2": h,
                                "order-1": b
                            }),
                            children: [(0, W.jsx)("div", {
                                className: (0, a.yI)(l.xy.labelTextTertiary, "text-[11px] font-medium leading-[13px]", {
                                    "text-right": h,
                                    "text-left": b
                                }),
                                children: x
                            }), (0, W.jsx)("div", {
                                className: (0, a.yI)(l.xy.labelTextPrimary, "text-md truncate font-medium", {
                                    "text-right": h,
                                    "text-left": b
                                }),
                                children: d
                            })]
                        })]
                    })
                };

            function vn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function mn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? vn(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var gn = function() {
                    return (0, W.jsxs)("div", {
                        className: "flex justify-between gap-4",
                        children: [(0, W.jsx)(ge.a, {
                            className: "h-[64px] w-full"
                        }), (0, W.jsx)(ge.a, {
                            className: "h-[64px] w-full"
                        })]
                    })
                },
                hn = function(e) {
                    var t = e.topicId,
                        n = e.topicSlug,
                        r = (0, Q.c)((function(e) {
                            return e.questionSlug
                        })),
                        o = (0, Y.n)().filters,
                        i = cn(mn(mn({}, o), {}, {
                            topicId: t,
                            topicSlug: n,
                            questionSlug: r
                        })),
                        a = i.isFetching,
                        l = i.data;
                    if (a || !l) return (0, W.jsx)(gn, {});
                    var s = l.prevSolution,
                        c = l.nextSolution;
                    return (0, W.jsxs)("div", {
                        className: "flex justify-between gap-4",
                        children: [s && (0, W.jsx)(pn, {
                            className: "w-full",
                            placement: "left",
                            questionSlug: r,
                            topicId: s.topicId,
                            title: s.title,
                            topicSlug: s.topicSlug,
                            currentTopicId: t,
                            currentTopicSlug: n
                        }), c && (0, W.jsx)(pn, {
                            className: "w-full",
                            placement: "right",
                            questionSlug: r,
                            topicId: c.topicId,
                            title: c.title,
                            topicSlug: c.topicSlug,
                            currentTopicId: t,
                            currentTopicSlug: n
                        })]
                    })
                },
                bn = n(50834),
                yn = n.n(bn);

            function xn(e, t) {
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
                    t % 2 ? xn(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var On = {
                    highlight: !0,
                    gfm: !0,
                    math: !0,
                    html: !0,
                    mcqs: z.Oo,
                    diaporama: z.Oo,
                    imageSize: !0,
                    embedVideos: z.Oo,
                    normalVideo: z.ob,
                    groupedCode: !0,
                    relAttribute: !0,
                    httpsImagesOnly: z.Oo,
                    premiumOnlyVideo: z.Oo,
                    htmlSanitization: !0,
                    nodebbImageTransformation: z.Oo,
                    brokenImageHolder: !0,
                    linkSift: z.ob,
                    linkTargetBlank: !0,
                    aliPlayerVideo: z.ob,
                    slides: z.ob,
                    toc: !0,
                    customComponent: !0
                },
                wn = (0, Et.t)(jn(jn({}, On), {}, {
                    preserveLineBreaks: !1
                })),
                Pn = function(e) {
                    return !!e.title && "\x01" === e.title[0]
                },
                Sn = function(e) {
                    var t, n = e.solution,
                        r = n.isOfficial ? null === n || void 0 === n || null === (t = n.content) || void 0 === t ? void 0 : t.replace(/\[toc\]/gi, "") : null === n || void 0 === n ? void 0 : n.content,
                        i = function() {
                            var e = (0, I.useRouter)();
                            return (0, o.useMemo)((function() {
                                return new URL("".concat(Tt.jY).concat(e.asPath))
                            }), [e.asPath])
                        }(),
                        l = (0, o.useMemo)((function() {
                            var e;
                            return {
                                author: null !== (e = n.author.realName) && void 0 !== e ? e : n.author.username,
                                link: "".concat(i.origin).concat(i.pathname)
                            }
                        }), [n.author.realName, n.author.username, i.origin, i.pathname]),
                        s = (0, It.d1)(l);
                    return (0, W.jsxs)("div", {
                        className: (0, a.yI)("flex w-full flex-col gap-4 p-4 pb-8"),
                        children: [(0, W.jsx)(an, {
                            solution: n
                        }), (0, W.jsx)("div", {
                            className: "break-words",
                            onCopy: s,
                            children: (0, W.jsx)(zt, {
                                children: (0, W.jsx)(It.yT, {
                                    value: l,
                                    children: Pn(n) ? (0, W.jsx)(Dt(), {
                                        readOnly: !0,
                                        defaultValue: r || "",
                                        onShowToast: function(e) {
                                            return G.y.info(e)
                                        },
                                        onClickLink: function(e) {
                                            var t = document.createElement("a");
                                            t.setAttribute("href", location.origin + "/link/?target=" + e), t.setAttribute("target", "_blank"), document.body.appendChild(t), t.click(), t.remove()
                                        }
                                    }) : (0, W.jsx)(wn, {
                                        content: r || "",
                                        customStyles: yn()
                                    })
                                })
                            })
                        }), (0, W.jsx)(hn, {
                            topicId: n.id,
                            topicSlug: n.slug
                        })]
                    })
                },
                Nn = function(e) {
                    var t, n = e.questionSlug,
                        o = e.topicId,
                        s = e.topicSlug,
                        c = e.commentId,
                        u = e.hideSolutionTopControls,
                        f = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        p = (0, M.U)().data,
                        m = Boolean(o && s),
                        b = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (0, g._tT)(h.f6, {
                                slug: e.slug
                            }, S(S({
                                enabled: !!e.slug
                            }, t), {}, {
                                select: function(e) {
                                    var t, n, r = e.solutionArticle;
                                    return r ? {
                                        author: {
                                            username: null !== (t = null === (n = r.author) || void 0 === n ? void 0 : n.profile.userSlug) && void 0 !== t ? t : ""
                                        },
                                        status: r.status
                                    } : null
                                }
                            }))
                        }({
                            topicId: o,
                            slug: s
                        }, {
                            enabled: m
                        }),
                        y = b.isFetching,
                        x = b.data,
                        j = null !== x && void 0 !== x ? x : {},
                        O = j.status,
                        w = j.author,
                        P = (0, d.M)((function(e) {
                            return e.solutionSide
                        })),
                        N = !m || !y && !x,
                        C = O === g.af_.Offline,
                        D = [g.af_.Pending, g.af_.Prepublish, g.af_.Checking].includes(O) && (null === w || void 0 === w ? void 0 : w.username) !== (null === p || void 0 === p || null === (t = p.userStatus) || void 0 === t ? void 0 : t.userSlug),
                        E = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        }));
                    return y || N || C || D ? (0, W.jsx)("div", {
                        className: "h-full w-full",
                        children: (0, W.jsx)("div", {
                            className: "flex h-full w-full items-start justify-center",
                            children: (0, W.jsx)("div", {
                                className: "flex h-full w-full gap-4",
                                children: (0, W.jsxs)("div", {
                                    className: (0, a.yI)("relative flex h-full w-full min-w-0 flex-col", l.Cj.bgLayer1),
                                    children: [!E && (0, W.jsx)(ve, {
                                        questionSlug: n,
                                        className: (0, a.yI)(l.Cj.bgLayer1, (0, r.Z)({}, (0, a.yI)(l.Cj.bgLayer2, "h-9 max-h-9"), "right" === P))
                                    }), (0, v.Y)(y && (0, W.jsx)(be, {}), N && (0, W.jsx)(Ln, {
                                        title: f("invalidSolutionTitle"),
                                        description: f("invalidSolutionDescription")
                                    }), C && (0, W.jsx)(Ln, {
                                        title: "\u54a6\uff1f\u5185\u5bb9\u4e0d\u89c1\u5566\uff1f",
                                        description: "\u56e0\u5185\u5bb9\u8fdd\u53cd\u300a\u4e92\u8054\u7f51\u7528\u6237\u516c\u4f17\u8d26\u53f7\u4fe1\u606f\u670d\u52a1\u7ba1\u7406\u89c4\u5b9a\u300b\u6216\u793e\u533a\u89c4\u8303 \u65e0\u6cd5\u5c55\u793a\uff0c\u656c\u8bf7\u8c05\u89e3\u3002"
                                    }), D && (0, W.jsx)(Ln, {
                                        title: "\u5185\u5bb9\u6b63\u5728\u5236\u4f5c\u4e2d",
                                        description: "\u8bf7\u7a0d\u540e\u67e5\u770b"
                                    }))]
                                })
                            })
                        })
                    }) : (0, W.jsx)(Mn, {
                        questionSlug: n,
                        topicId: o,
                        topicSlug: s,
                        commentId: c,
                        hideSolutionTopControls: u
                    })
                },
                Cn = n(78630),
                kn = n(77535),
                Dn = n(59419),
                En = n(30513),
                In = n(54678),
                Tn = function(e) {
                    var t = e.questionSlug,
                        n = (0, i.$G)("problems").t,
                        r = (0, Dn.K)(t).data,
                        o = (0, En.z)(t).data,
                        a = (0, In.k)(t).data,
                        l = "".concat((null === r || void 0 === r ? void 0 : r.questionFrontendId) || "", ". ").concat((null === o || void 0 === o ? void 0 : o.translatedTitle) || (null === r || void 0 === r ? void 0 : r.title) || ""),
                        s = (0, Cn.convert)((null === o || void 0 === o ? void 0 : o.translatedContent) || (null === a || void 0 === a ? void 0 : a.content) || n("meta.defaultDescription"), {
                            wordwrap: !1
                        }),
                        c = "https://".concat(_._d),
                        u = "".concat(c).concat(A.Hb.questionDetailWithTab(t, kn.r.Description));
                    return {
                        title: n("meta.title", {
                            title: l
                        }),
                        description: n("meta.description", {
                            title: l,
                            content: s
                        }),
                        link: u
                    }
                };

            function An(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var _n = "solution-detail",
                Ln = function(e) {
                    var t = e.title,
                        n = e.description;
                    return (0, W.jsxs)("div", {
                        className: "flex h-full w-full flex-col items-center justify-center",
                        children: [(0, W.jsx)(f.D, {}), t && (0, W.jsx)("h3", {
                            className: (0, a.yI)("mt-[32px] text-center text-base", l.Cj.labelGrey8),
                            children: t
                        }), n && (0, W.jsx)("p", {
                            className: (0, a.yI)("mt-[12px] text-center text-xs", l.Cj.label4),
                            children: n
                        })]
                    })
                },
                Mn = function(e) {
                    var t = e.topicId,
                        n = e.topicSlug,
                        f = e.commentId,
                        h = e.questionSlug,
                        b = e.hideSolutionTopControls,
                        y = (0, i.$G)("solutions", {
                            keyPrefix: "post"
                        }).t,
                        x = Boolean(t && n),
                        j = N({
                            topicId: t,
                            slug: n
                        }, {
                            enabled: x
                        }),
                        O = j.isFetching,
                        w = j.data,
                        P = (0, d.M)((function(e) {
                            return e.solutionSide
                        })),
                        S = E().mutateAsync;
                    (0, o.useEffect)((function() {
                        S && S({
                            entityId: n,
                            entityType: g.pyR.Article
                        })
                    }), [S, n]), (0, o.useEffect)((function() {
                        s.d.qdSolutionDetailExposure({
                            qd_question_slug: h,
                            qd_post_url: window.location.href,
                            qd_panel_side: P
                        })
                    }), [h, P]);
                    var I = !O && w,
                        T = !x || !O && !w,
                        A = Tn({
                            questionSlug: h,
                            topicId: t,
                            topicSlug: n
                        }),
                        _ = (0, C.h)(),
                        L = (0, k.z)((function(e) {
                            return e.isDynamicLayout
                        }));
                    return (0, o.useEffect)((function() {
                        if (!O && w && L) {
                            var e = (0, p.dR)(n, t);
                            null === _ || void 0 === _ || _.setTabCustomTitle(D.r.SolutionPost, w.title, e), null === _ || void 0 === _ || _.reselectTab(D.r.SolutionPost, e)
                        }
                    }), [L, O, w, t]), (0, W.jsxs)(W.Fragment, {
                        children: [!L && (0, W.jsx)(m.p, {
                            title: A.title,
                            description: A.description,
                            openGraph: {
                                url: A.link
                            }
                        }), (0, W.jsx)("div", {
                            className: "h-full w-full !min-w-[440px]",
                            children: (0, W.jsx)("div", {
                                className: "flex h-full w-full items-start justify-center",
                                children: (0, W.jsx)("div", {
                                    className: "flex h-full w-full gap-4",
                                    children: (0, W.jsxs)("div", {
                                        className: "relative flex h-full w-full min-w-0 flex-col",
                                        children: [!L && !b && (0, W.jsx)(ve, {
                                            solution: w,
                                            questionSlug: h,
                                            className: (0, a.yI)(l.Cj.bgLayer1, (0, r.Z)({}, (0, a.yI)(l.Cj.bgLayer2, "h-9 max-h-9"), "right" === P))
                                        }), (0, v.Y)(O && (0, W.jsx)(be, {}), T && (0, W.jsx)(Ln, {
                                            title: y("invalidSolutionTitle"),
                                            description: y("invalidSolutionDescription")
                                        }), I && (0, W.jsxs)(W.Fragment, {
                                            children: [(0, W.jsx)("div", {
                                                className: "relative flex w-full flex-1 flex-col overflow-y-auto",
                                                children: (0, W.jsxs)("div", {
                                                    className: "mx-auto w-full max-w-[732px]",
                                                    children: [(0, W.jsx)(Sn, {
                                                        solution: w
                                                    }), (0, W.jsx)("div", {
                                                        children: (0, W.jsx)(c.V, {
                                                            topicId: w.id,
                                                            questionSlug: h,
                                                            commentCount: w.commentCount,
                                                            commentId: f,
                                                            layoutType: u.Dk.Solution,
                                                            uniqueKey: _n + w.id
                                                        })
                                                    })]
                                                })
                                            }), (0, W.jsx)(Ct, {
                                                solution: w,
                                                solutionSide: P
                                            })]
                                        }), (0, W.jsx)(Ln, {
                                            title: "",
                                            description: ""
                                        }))]
                                    })
                                })
                            })
                        })]
                    })
                },
                qn = Nn,
                Rn = function(e) {
                    var t = (0, Q.c)((function(e) {
                        return e.setQuestionSlug
                    }));
                    (0, o.useEffect)((function() {
                        return t(e.questionSlug)
                    }), [t, e.questionSlug]);
                    var n = (0, k.z)((function(e) {
                            return e.addOpeningSolutionIdAndSlug
                        })),
                        i = (0, k.z)((function(e) {
                            return e.removeOpeningSolutionIdAndSlug
                        }));
                    return (0, o.useEffect)((function() {
                        return n(e.topicId, e.topicSlug),
                            function() {
                                return i(e.topicId, e.topicSlug)
                            }
                    }), [n, e.topicId, e.topicSlug, i]), (0, W.jsx)(qn, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? An(Object(n), !0).forEach((function(t) {
                                (0, r.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : An(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e))
                }
        },
        6167: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return p
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(7831),
                o = n(4676),
                i = (n(17519), n(72029), n(68158)),
                a = n(81757),
                l = n(90226),
                s = n(10450),
                c = ["page"];

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

            function d(e) {
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
            var f = {
                    query: "",
                    languageTags: [],
                    topicTags: [],
                    isSelectedMySolutionTag: !1,
                    orderBy: void 0,
                    page: 1,
                    perPage: 15
                },
                p = (0, a.Ue)((0, l.XR)((0, l.$e)(d(d({}, f), {}, {
                    tagNamesMap: {}
                }), (function(e) {
                    return {
                        updateFilters: function(t) {
                            return e((function(e) {
                                var n = t.page,
                                    o = (0, r.Z)(t, c),
                                    i = void 0 === n,
                                    a = d(d(d({}, e), o), {}, {
                                        page: i ? 1 : n
                                    });
                                return (0, s.X)(e, t) ? e : a
                            }))
                        },
                        setTagNamesMap: function(t) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    tagNamesMap: (0, i.Z)(t.map((function(e) {
                                        return [e.slug, e.name]
                                    })))
                                })
                            }))
                        },
                        resetFilters: function() {
                            return e((function(e) {
                                return d(d({}, e), f)
                            }))
                        }
                    }
                }))))
        },
        37631: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return s
                },
                n: function() {
                    return l
                }
            });
            var r = n(43182),
                o = n(64386),
                i = n(6167),
                a = ["query", "languageTags", "topicTags", "orderBy", "page", "perPage"],
                l = function() {
                    var e = (0, i.X)((function(e) {
                            return (0, r.Z)(e, a)
                        })),
                        t = (0, i.X)((function(e) {
                            return e.page
                        })),
                        n = (0, i.X)((function(e) {
                            return e.updateFilters
                        })),
                        l = (0, o.useCallback)((function(e) {
                            return n({
                                page: e
                            })
                        }), [n]);
                    return {
                        filters: e,
                        page: t,
                        onPageChange: l
                    }
                },
                s = function() {
                    return (0, r.Z)(i.X.getState(), a)
                }
        },
        19120: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return g
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(7831),
                i = n(38366),
                a = n(44872),
                l = n(11754),
                s = ["variant", "padding", "className"];

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

            function u(e) {
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
            var d = {
                    "12px": "text-[12px]",
                    "14px": "text-[14px]",
                    "16px": "text-[16px]",
                    "20px": "text-[20px]",
                    "24px": "text-[24px]",
                    "32px": "text-[32px]"
                },
                f = {
                    "12px": "before:h-3",
                    "14px": "before:h-3.5",
                    "16px": "before:h-4",
                    "20px": "before:h-5",
                    "24px": "before:h-6",
                    "32px": "before:h-8"
                },
                p = {
                    "12px": "before:w-3",
                    "14px": "before:w-3.5",
                    "16px": "before:w-4",
                    "20px": "before:w-5",
                    "24px": "before:w-6",
                    "32px": "before:w-8"
                },
                v = {
                    "12px": "p-[1px]",
                    "14px": "p-[1px]",
                    "16px": "p-0.5",
                    "20px": "p-0.5",
                    "24px": "p-[3px]",
                    "32px": "p-1"
                },
                m = {
                    "12px": "p-0.5",
                    "14px": "p-[3px]",
                    "16px": "p-1",
                    "20px": "p-[5px]",
                    "24px": "p-1.5",
                    "32px": "p-2"
                },
                g = function(e) {
                    var t, n = e.variant,
                        c = void 0 === n ? "14px" : n,
                        g = e.padding,
                        h = void 0 === g ? "square" : g,
                        b = e.className,
                        y = (0, o.Z)(e, s);
                    return (0, l.jsx)("div", {
                        className: (0, a.yI)("relative", d[c], "leading-[normal]", (t = {}, (0, r.Z)(t, v[c], "square" === h), (0, r.Z)(t, m[c], "roomy" === h), t), "before:block", f[c], p[c], b),
                        children: (0, l.jsx)(i.G, u({
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        }, y))
                    })
                }
        },
        30139: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return s
                }
            });
            var r = n(64386),
                o = n(95498),
                i = n(48604),
                a = n(21011),
                l = n(88077),
                s = function() {
                    var e = (0, i.E)() ? window.document.body : null,
                        t = (0, a.a)(e).width,
                        n = !!t;
                    return (0, r.useMemo)((function() {
                        return (0, o.tq)() && t && t < l.eg.MD
                    }), [n])
                }
        },
        55891: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return r
                }
            });
            n(29308), n(37872), n(27115);
            var r = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                for (var r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    if (i) return i
                }
                return null
            }
        }
    }
]);