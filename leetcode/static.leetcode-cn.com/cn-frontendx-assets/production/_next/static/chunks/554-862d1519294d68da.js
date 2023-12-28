(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [554], {
        66455: function(e, t, r) {
            "use strict";
            r.d(t, {
                Q: function() {
                    return O
                },
                z: function() {
                    return m
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                o = r(7831),
                c = r(64386),
                i = r(44872),
                a = r(12229),
                l = r(40007),
                s = r(11754),
                u = ["variant", "readonly", "onClick", "loading", "className", "block"],
                d = ["variant", "loading", "className"];

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var m = (0, c.forwardRef)((function(e, t) {
                    var r, c = e.variant,
                        d = void 0 === c ? "secondary" : c,
                        p = e.readonly,
                        m = e.onClick,
                        O = e.loading,
                        b = e.className,
                        y = e.block,
                        v = (0, o.Z)(e, u),
                        _ = v.disabled || O;
                    return (0, s.jsxs)("button", f(f({}, v), {}, {
                        onClick: p ? void 0 : m,
                        ref: t,
                        disabled: _,
                        className: (0, i.yI)("rounded px-3 py-1.5 font-medium", "items-center whitespace-nowrap", "focus:outline-none", {
                            "cursor-not-allowed opacity-50": _ || p
                        }, {
                            "inline-flex": !y,
                            flex: y
                        }, (r = {}, (0, n.Z)(r, (0, i.yI)("text-label-r", l.Cj.bgGreenStandard, l.Cj.bgGreen3Hover), "primary" === d), (0, n.Z)(r, (0, i.yI)(l.Cj.fill3, !_ && l.Cj.fill2Hover, l.Cj.label2), "secondary" === d), (0, n.Z)(r, (0, i.yI)("bg-gray-8 dark:bg-brand-orange", l.Cj.labelReverse), "black" === d), (0, n.Z)(r, (0, i.yI)(l.Cj.bgBrandOrange, l.Cj.labelReverse), "premium" === d), (0, n.Z)(r, (0, i.yI)(l.Cj.bgRedStandard, l.Cj.labelReverse), "danger" === d), (0, n.Z)(r, (0, i.yI)(l.Cj.bgBlueStandard, "hover:bg-dark-blue-s", l.Cj.labelReverse), "blue" === d), r), b),
                        children: [O && (0, s.jsx)(a.V, {
                            className: "mr-2 animate-spin"
                        }), e.children]
                    }))
                })),
                O = (0, c.forwardRef)((function(e, t) {
                    var r, c = e.variant,
                        u = void 0 === c ? "secondary" : c,
                        p = e.loading,
                        m = e.className,
                        O = (0, o.Z)(e, d),
                        b = O.disabled || p;
                    return (0, s.jsxs)("a", f(f({}, O), {}, {
                        ref: t,
                        className: (0, i.yI)("rounded px-3 py-1.5 font-medium", "inline-flex items-center whitespace-nowrap", "transition-all focus:outline-none", {
                            "cursor-not-allowed opacity-50": b
                        }, (r = {}, (0, n.Z)(r, (0, i.yI)(l.Cj.labelReverse, l.Cj.labelReverseHover, l.Cj.fillBlueStandard), "primary" === u), (0, n.Z)(r, (0, i.yI)(l.Cj.fill3, !b && l.Cj.fill2Hover, l.Cj.label2, l.Cj.label2Hover), "secondary" === u), r), m),
                        children: [p && (0, s.jsx)(a.V, {
                            className: "mr-2 animate-spin"
                        }), e.children]
                    }))
                }))
        },
        44487: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return v
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(7831),
                o = r(4676),
                c = (r(82544), r(64386)),
                i = r(44872),
                a = r(40007),
                l = r(11754);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = c.forwardRef((function(e, t) {
                    return (0, l.jsx)("svg", u(u({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.414-8l2.293 2.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 111.414 1.414L13.414 12z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                p = r(32528),
                f = r.n(p),
                m = ["leftIcon", "leftIconClassName", "leftIconClick", "rightIcon", "rightIconClassName", "rightIconClick", "variant", "className", "disabled", "wrapperClassName", "autoComplete", "handleClear", "value"];

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = function(e) {
                    var t = e.icon,
                        r = e.onClick,
                        n = e.className,
                        o = c.isValidElement(t),
                        a = o ? t.props : {},
                        s = o ? c.cloneElement(t, Object.assign({}, b(b({}, a), {}, {
                            className: (0, i.yI)("w-4 h-4", a.className)
                        }))) : c.createElement(t, {
                            className: "w-4 h-4"
                        });
                    return (0, l.jsx)("div", {
                        className: (0, i.yI)("absolute inset-y-0 flex items-center pl-3 text-gray-6 dark:text-dark-gray-6", {
                            "pointer-events-none": !o
                        }, n),
                        onClick: r,
                        children: (0, l.jsx)("span", {
                            children: s
                        })
                    })
                },
                v = c.forwardRef((function(e, t) {
                    var r, c = e.leftIcon,
                        s = e.leftIconClassName,
                        u = e.leftIconClick,
                        p = e.rightIcon,
                        O = e.rightIconClassName,
                        v = e.rightIconClick,
                        _ = e.variant,
                        g = void 0 === _ ? "default" : _,
                        V = e.className,
                        j = e.disabled,
                        k = e.wrapperClassName,
                        C = e.autoComplete,
                        X = void 0 === C ? "off" : C,
                        h = e.handleClear,
                        S = e.value,
                        E = (0, n.Z)(e, m),
                        w = !!c,
                        I = !!p,
                        N = !!h && !!S;
                    return (0, l.jsxs)("div", {
                        className: (0, i.yI)(" relative rounded-md ".concat(f()["input-container"]), k),
                        children: [w ? (0, l.jsx)(y, {
                            icon: c,
                            onClick: u,
                            className: (0, i.yI)("left-0", s)
                        }) : null, (0, l.jsx)("input", b({
                            ref: t,
                            className: (0, i.yI)("block w-full rounded-md pr-3 leading-5 outline-none", a.Cj.placeholderLabel4, (r = {
                                "border-none py-1.5": "default" === g
                            }, (0, o.Z)(r, a.Cj.label2, "default" === g), (0, o.Z)(r, a.Cj.fill3, "default" === g), (0, o.Z)(r, "focus:bg-fill-2 dark:focus:bg-dark-fill-2", "default" === g), r), {
                                "border border-green-s py-[5px] transition-all focus:shadow-form": "border" === g
                            }, {
                                "pl-3": !w,
                                "pl-9": w,
                                "pr-3": !I,
                                "pr-12": I
                            }, V),
                            disabled: j,
                            autoComplete: X,
                            value: S
                        }, E)), I ? (0, l.jsx)(y, {
                            icon: p,
                            onClick: v,
                            className: (0, i.yI)("right-4", (0, o.Z)({}, "".concat(f()["right-icon"]), N), (0, o.Z)({}, a.Cj.label4, j), O)
                        }) : null, N ? (0, l.jsx)(y, {
                            icon: (0, l.jsx)(d, {
                                className: (0, i.yI)("hidden cursor-pointer ".concat(f()["clear-icon"], " right-3"))
                            }),
                            onClick: function(e) {
                                e.stopPropagation(), h()
                            },
                            className: (0, i.yI)("right-4", O)
                        }) : null]
                    })
                }))
        },
        86128: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return a
                }
            });
            var n = r(64386),
                o = r(72102),
                c = r(44872),
                i = r(11754),
                a = function(e) {
                    var t = e.children,
                        r = e.title,
                        a = e.className,
                        l = (0, n.useRef)(null),
                        s = (0, n.useState)(!1),
                        u = s[0],
                        d = s[1],
                        p = function() {
                            var e, t, r = (null === (e = l.current) || void 0 === e ? void 0 : e.scrollWidth) || 0,
                                n = (null === (t = l.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                            d(r > n)
                        };
                    return (0, n.useEffect)((function() {
                        return p(), window.addEventListener("resize", p),
                            function() {
                                window.removeEventListener("resize", p)
                            }
                    }), []), (0, i.jsx)(o.u, {
                        label: u && (0, i.jsx)(i.Fragment, {
                            children: r || t
                        }),
                        children: (0, i.jsx)("div", {
                            ref: l,
                            className: (0, c.yI)("truncate", a),
                            children: t
                        })
                    })
                }
        },
        50385: function(e, t, r) {
            "use strict";
            r.d(t, {
                C: function() {
                    return l
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                o = r(64386),
                c = r(11754);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = o.forwardRef((function(e, t) {
                return (0, c.jsx)("svg", a(a({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        65766: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return l
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                o = r(64386),
                c = r(11754);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = o.forwardRef((function(e, t) {
                return (0, c.jsx)("svg", a(a({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        55156: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return l
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                o = r(64386),
                c = r(11754);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = o.forwardRef((function(e, t) {
                return (0, c.jsx)("svg", a(a({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        12229: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return l
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                o = r(64386),
                c = r(11754);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = o.forwardRef((function(e, t) {
                return (0, c.jsx)("svg", a(a({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        43106: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return O
                }
            });
            var n = r(4676),
                o = (r(17519), r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306), r(64386)),
                c = r(84193),
                i = r(57735),
                a = r(44872),
                l = r(50385),
                s = r(86209),
                u = r(86128),
                d = r(38046),
                p = r(11754);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var O = function(e) {
                var t = e.text,
                    r = e.items,
                    f = e.selected,
                    O = e.setSelected,
                    b = e.className,
                    y = e.wrapperClassName,
                    v = e.disabled,
                    _ = void 0 !== v && v;
                return (0, p.jsxs)(c.v, {
                    as: "div",
                    className: (0, a.yI)("relative", y),
                    children: [(0, p.jsx)("div", {
                        className: "w-full",
                        children: (0, p.jsx)(c.v.Button, {
                            disabled: _,
                            className: (0, a.yI)(d.W.menuButton, d.W.menuButtonBg, _ ? [d.W.menuButtonDisabled, "!cursor-default"] : [d.W.menuButtonText, d.W.menuButtonHover, d.W.menuButtonActive], "flex w-full justify-between", b),
                            children: function(e) {
                                var r = e.open;
                                return (0, p.jsxs)(p.Fragment, {
                                    children: [t, (0, p.jsx)(l.C, {
                                        className: (0, a.yI)(d.W.menuButtonIcon, (0, n.Z)({
                                            "rotate-180 transform": r
                                        }, d.W.menuButtonDisabled, _)),
                                        "aria-hidden": "true"
                                    })]
                                })
                            }
                        })
                    }), !_ && (0, p.jsx)(i.u, m(m({
                        as: o.Fragment
                    }, d.W.dropdownTransition), {}, {
                        children: (0, p.jsx)(c.v.Items, {
                            className: (0, a.yI)(d.W.menuItems, d.W.menuItemsBg, d.W.menuItemsMaxH),
                            children: r.map((function(e, t) {
                                var r = e.value,
                                    o = e.text;
                                return (0, p.jsx)(c.v.Item, {
                                    children: function(e) {
                                        var t = e.active;
                                        return (0, p.jsxs)("div", {
                                            className: (0, a.yI)(d.W.menuItem, d.W.menuItemText, (0, n.Z)({}, d.W.menuItemActive, t)),
                                            onClick: function() {
                                                return O(f !== r ? r : void 0)
                                            },
                                            children: [(0, p.jsx)("div", {
                                                className: "flex h-5 items-center",
                                                children: (0, p.jsx)(u.J, {
                                                    children: o
                                                })
                                            }), f === r ? (0, p.jsx)("span", {
                                                className: d.W.menuItemSelectedIconWrapper,
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
        },
        42010: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return d
                },
                z: function() {
                    return p
                }
            });
            var n = r(79216),
                o = r(64386),
                c = r(40007),
                i = r(70297),
                a = r(75409),
                l = r(6120),
                s = r(43106),
                u = r(11754),
                d = function(e) {
                    var t = e.difficulty,
                        r = (0, n.$G)("common", {
                            keyPrefix: "difficulty"
                        }).t;
                    return t === l.Fd.Easy || "Easy" === t ? (0, u.jsx)("span", {
                        className: c.Cj.labelOlive,
                        children: r("easy")
                    }) : t === l.Fd.Medium || "Medium" === t ? (0, u.jsx)("span", {
                        className: c.Cj.labelYellow,
                        children: r("medium")
                    }) : t === l.Fd.Hard || "Hard" === t ? (0, u.jsx)("span", {
                        className: c.Cj.labelPink,
                        children: r("hard")
                    }) : null
                },
                p = function(e) {
                    var t = e.selected,
                        r = e.setSelected,
                        c = e.className,
                        p = e.translationNamespace,
                        f = void 0 === p ? "question-list" : p,
                        m = e.disabled,
                        O = void 0 !== m && m,
                        b = e.trackName,
                        y = void 0 === b ? "problemset" : b,
                        v = (0, n.$G)(f).t,
                        _ = o.useMemo((function() {
                            return [{
                                value: l.Fd.Easy,
                                text: (0, u.jsx)(d, {
                                    difficulty: l.Fd.Easy
                                })
                            }, {
                                value: l.Fd.Medium,
                                text: (0, u.jsx)(d, {
                                    difficulty: l.Fd.Medium
                                })
                            }, {
                                value: l.Fd.Hard,
                                text: (0, u.jsx)(d, {
                                    difficulty: l.Fd.Hard
                                })
                            }]
                        }), []),
                        g = (0, o.useCallback)((function(e) {
                            "problemset" === y && i.z.problemsetFilterDifficultyClick({
                                problemset_difficulty: e
                            }), "progress" === y && a.g.progressDifficultyFilterClick({
                                progress_difficulty: e
                            }), r(e)
                        }), [r, y]);
                    return (0, u.jsx)(s.q, {
                        text: v("filter.difficulty"),
                        items: _,
                        setSelected: g,
                        selected: t,
                        disabled: O,
                        wrapperClassName: c
                    })
                }
        },
        38046: function(e, t, r) {
            "use strict";
            r.d(t, {
                W: function() {
                    return o
                }
            });
            var n = r(40007),
                o = {
                    menuButton: "flex items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5",
                    menuButtonBg: n.Cj.fill3,
                    menuButtonText: n.Cj.label2,
                    menuButtonHover: n.Cj.fill2Hover,
                    menuButtonActive: "active:bg-fill-3 dark:active:bg-dark-fill-3",
                    menuButtonIcon: "w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 ".concat(n.Cj.label3),
                    menuButtonDisabled: n.Cj.label4,
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95 hidden",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95 hidden"
                    },
                    menuItems: "max-w-[15rem] min-w-[8.75rem] absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none ".concat(n.eq.commandBar),
                    menuItemsMaxH: "max-h-[600px]",
                    menuItemsBg: n.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12",
                    menuItemText: n.Cj.label1,
                    menuItemActive: "rounded ".concat(n.Cj.fill4),
                    menuItemHover: n.Cj.fill4Hover,
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
                }
        },
        6120: function(e, t, r) {
            "use strict";
            var n, o, c, i, a;
            r.d(t, {
                    Fd: function() {
                        return n
                    },
                    S5: function() {
                        return i
                    },
                    lr: function() {
                        return o
                    },
                    mZ: function() {
                        return c
                    },
                    sQ: function() {
                        return a
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(n || (n = {})),
                function(e) {
                    e.NotStarted = "NOT_STARTED", e.Ac = "AC", e.Tried = "TRIED"
                }(o || (o = {})),
                function(e) {
                    e.Ascending = "ASCENDING", e.Descending = "DESCENDING"
                }(c || (c = {})),
                function(e) {
                    e.FrontendId = "FRONTEND_ID", e.SolutionNum = "SOLUTION_NUM", e.AcRate = "AC_RATE", e.Frequency = "FREQUENCY", e.Difficulty = "DIFFICULTY"
                }(i || (i = {})),
                function(e) {
                    e.FRONTEND_ID = "title", e.SOLUTION_NUM = "solution", e.AC_RATE = "acRate", e.FREQUENCY = "frequency", e.DIFFICULTY = "difficulty"
                }(a || (a = {}))
        },
        70297: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return c
                }
            });
            var n = r(77527),
                o = r(27654),
                c = {
                    problemsetPageExposure: function() {
                        var e = {
                            key: "problemset_page_exposure",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetTopicTagsClick: function(e) {
                        var t = {
                            key: "problemset_topic_tags_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetTopicTagsExpandClick: function() {
                        var e = {
                            key: "problemset_topic_tags_expand_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetSwitchCategoryClick: function(e) {
                        var t = {
                            key: "problemset_switch_category_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetFilterStatusClick: function(e) {
                        var t = {
                            key: "problemset_filter_status_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetFilterListClick: function(e) {
                        var t = {
                            key: "problemset_filter_list_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetFilterDifficultyClick: function(e) {
                        var t = {
                            key: "problemset_filter_difficulty_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetFilterTagClick: function(e) {
                        var t = {
                            key: "problemset_filter_tag_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetSearchClick: function() {
                        var e = {
                            key: "problemset_search_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetShowTopicTagsClick: function(e) {
                        var t = {
                            key: "problemset_show_topic_tags_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetShowCompanyTagsClick: function(e) {
                        var t = {
                            key: "problemset_show_company_tags_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetShowPremiumOnlyClick: function(e) {
                        var t = {
                            key: "problemset_show_premium_only_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetRandomQuestionClick: function() {
                        var e = {
                            key: "problemset_random_question_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetSelectQuestionClick: function(e) {
                        var t = {
                            key: "problemset_select_question_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetQuestionNextPageClick: function() {
                        var e = {
                            key: "problemset_question_next_page_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetDccMedalClick: function() {
                        var e = {
                            key: "problemset_dcc_medal_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetDccCalendarDateClick: function(e) {
                        var t = {
                            key: "problemset_dcc_calendar_date_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetDccTttRedeemClick: function() {
                        var e = {
                            key: "problemset_dcc_ttt_redeem_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetStudyPlanClick: function() {
                        var e = {
                            key: "problemset_study_plan_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetProgressSessionsClick: function() {
                        var e = {
                            key: "problemset_progress_sessions_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetFeaturedListClick: function(e) {
                        var t = {
                            key: "problemset_featured_list_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetPopularCompanyClick: function(e) {
                        var t = {
                            key: "problemset_popular_company_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetPopularCompanyMoreClick: function() {
                        var e = {
                            key: "problemset_popular_company_more_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetFeedbackIconClick: function() {
                        var e = {
                            key: "problemset_feedback_icon_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetBackToOldClick: function() {
                        var e = {
                            key: "problemset_back_to_old_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetQuestionOrderClick: function() {
                        var e = {
                            key: "problemset_question_order_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetDifficultyOrderClick: function() {
                        var e = {
                            key: "problemset_difficulty_order_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetStatusOrderClick: function() {
                        var e = {
                            key: "problemset_status_order_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetFrequencyOrderClick: function() {
                        var e = {
                            key: "problemset_frequency_order_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    problemsetAdClick: function(e) {
                        var t = {
                            key: "problemset_ad_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetAdExposure: function(e) {
                        var t = {
                            key: "problemset_ad_exposure",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    problemsetPopularCompanySearchClick: function(e) {
                        var t = {
                            key: "problemset_popular_company_search_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    }
                }
        },
        75409: function(e, t, r) {
            "use strict";
            r.d(t, {
                g: function() {
                    return c
                }
            });
            var n = r(77527),
                o = r(27654),
                c = {
                    progressPageExposure: function() {
                        var e = {
                            key: "progress_page_exposure",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressDifficultyFilterClick: function(e) {
                        var t = {
                            key: "progress_difficulty_filter_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    progressTopicsFilterClick: function(e) {
                        var t = {
                            key: "progress_topics_filter_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    progressSearchFilterClick: function(e) {
                        var t = {
                            key: "progress_search_filter_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    },
                    progressSortByLastSolvedClick: function() {
                        var e = {
                            key: "progress_sort_by_last_solved_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressSortByQuestionClick: function() {
                        var e = {
                            key: "progress_sort_by_question_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressSortByDifficultyClick: function() {
                        var e = {
                            key: "progress_sort_by_difficulty_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressSortByRejectedClick: function() {
                        var e = {
                            key: "progress_sort_by_rejected_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressSortByAcceptedClick: function() {
                        var e = {
                            key: "progress_sort_by_accepted_click",
                            data: {}
                        };
                        n.V[o.X.GIO](e), n.V[o.X.GA4](e), n.V[o.X.CONSOLE](e), n.V[o.X.SELF_DB](e)
                    },
                    progressQuestionLinkClick: function(e) {
                        var t = {
                            key: "progress_question_link_click",
                            data: e
                        };
                        n.V[o.X.GIO](t), n.V[o.X.GA4](t), n.V[o.X.CONSOLE](t), n.V[o.X.SELF_DB](t)
                    }
                }
        },
        32528: function(e) {
            e.exports = {
                "input-container": "input_input-container__SZzNg",
                "clear-icon": "input_clear-icon__WR5Cb",
                "right-icon": "input_right-icon__DWVxd"
            }
        }
    }
]);