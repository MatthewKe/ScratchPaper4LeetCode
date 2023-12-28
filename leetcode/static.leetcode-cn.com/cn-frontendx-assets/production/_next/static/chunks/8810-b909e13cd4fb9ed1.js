"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8810], {
        36032: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return i
                }
            });
            var n = r(64386);
            var i = function(e, t) {
                var r = function() {
                    var e = (0, n.useRef)(!0);
                    return e.current ? (e.current = !1, !0) : e.current
                }();
                (0, n.useEffect)((function() {
                    if (!r) return e()
                }), t)
            }
        },
        94846: function(e, t, r) {
            r.d(t, {
                X: function() {
                    return c
                }
            });
            var n = r(64386),
                i = r(61941),
                l = r(86209),
                s = r(40007),
                o = r(44872),
                a = r(11754),
                c = function(e) {
                    var t = e.checked,
                        r = e.onChange,
                        c = e.className,
                        u = e.boxClassName,
                        d = e.label,
                        f = e.disabled,
                        p = e.afterClassName,
                        v = e.labelClassName,
                        m = e.iconClassName,
                        y = e.isNew,
                        x = (0, n.useCallback)((function(e) {
                            !f && r(e)
                        }), [f, r]);
                    return (0, a.jsx)(i.r, {
                        as: n.Fragment,
                        checked: t,
                        onChange: x,
                        children: (0, a.jsxs)("div", {
                            className: (0, o.yI)(c, "group flex cursor-pointer outline-none", {
                                "cursor-not-allowed opacity-40": f,
                                "h-5 items-center": !c && !p
                            }, p),
                            children: [(0, a.jsx)("span", {
                                className: (0, o.yI)("mr-2 flex h-4 w-4 items-center justify-center rounded text-paper", {
                                    "bg-fill-3 dark:bg-dark-fill-2": !t,
                                    "group-hover:bg-fill-2 dark:group-hover:bg-dark-fill-2": !f && !t,
                                    "bg-blue dark:bg-dark-blue": t && !u,
                                    "hover:bg-blue-3 dark:hover:bg-dark-blue-1": !f && t && !u,
                                    "border border-fill-1 bg-layer-3 group-hover:bg-fill-4 dark:border-fill-1 dark:bg-dark-layer-3 dark:group-hover:bg-dark-fill-4": y && !t && !f && !u
                                }, u),
                                children: (0, a.jsx)(l.N, {
                                    className: (0, o.yI)("h-3.5 w-3.5", {
                                        hidden: !t
                                    }, m),
                                    "aria-hidden": "true"
                                })
                            }), (0, a.jsx)("span", {
                                className: (0, o.yI)("block truncate leading-5", s.Cj.label2, {
                                    "group-hover:text-label-1 dark:group-hover:text-dark-label-1": !f
                                }, v),
                                children: d
                            })]
                        })
                    })
                }
        },
        67901: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return ie
                }
            });
            var n = r(7831),
                i = r(79216),
                l = r(64386),
                s = r(44872),
                o = r(66455),
                a = r(54600),
                c = r(40007),
                u = r(59564),
                d = r(11754),
                f = function(e) {
                    var t = e.closeDelay,
                        r = void 0 === t ? 3e3 : t,
                        n = e.onClose,
                        o = e.leetCoinsReward,
                        a = e.className,
                        f = (0, i.$G)("common", {
                            keyPrefix: "survey"
                        }).t;
                    return (0, l.useEffect)((function() {
                        var e = setTimeout((function() {
                            return n()
                        }), r);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [r, n]), (0, d.jsxs)("div", {
                        className: (0, s.yI)("flex items-center justify-between", "w-[366px] rounded-lg border-[1px] border-solid p-4", c.Cj.divider4, c.Cj.bgLayer3, a),
                        children: [(0, d.jsx)("div", {
                            className: (0, s.yI)("text-xs font-medium", c.Cj.label1),
                            children: f("thanksMsg")
                        }), (0, d.jsx)("div", {
                            className: (0, s.yI)("text-sm font-medium leading-[22px]", c.Cj.labelBrandOrange),
                            children: o && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)("img", {
                                    src: u.Z,
                                    className: "mr-2 inline-block h-4 w-4",
                                    alt: f("thanksMsg")
                                }), (0, d.jsx)("span", {
                                    children: "+".concat(o)
                                })]
                            })
                        })]
                    })
                },
                p = (r(72029), function(e) {
                    var t = e.question,
                        r = e.onNext,
                        n = e.className,
                        i = t.html;
                    return (0, l.useEffect)((function() {
                        return i ? void 0 : r()
                    }), [i, r]), (0, d.jsx)("div", {
                        className: (0, s.yI)("w-full", n),
                        children: (0, d.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            },
                            className: (0, s.yI)("", c.Cj.label1)
                        })
                    })
                }),
                v = (r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306), r(4676));
            r(17519);

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x = l.forwardRef((function(e, t) {
                return (0, d.jsxs)("svg", y(y({
                    width: "42",
                    height: "43",
                    viewBox: "0 0 42 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t
                }, e), {}, {
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_di_15326_3236)",
                        children: (0, d.jsx)("circle", {
                            cx: "21",
                            cy: "17.9999",
                            r: "14.5385",
                            fill: "url(#paint0_radial_15326_3236)"
                        })
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M27.2031 22.5229C27.6314 23.0582 27.5156 23.8176 26.9447 24.2191C26.3737 24.6205 25.5637 24.512 25.1355 23.9767C24.9647 23.7633 24.5866 23.3934 24.0362 23.0181C23.1316 22.4014 22.115 22.0383 21.0001 22.0383C19.8852 22.0383 18.8687 22.4014 17.9641 23.0181C17.4137 23.3934 17.0355 23.7633 16.8648 23.9767C16.4366 24.512 15.6266 24.6205 15.0556 24.219C14.4846 23.8176 14.3689 23.0582 14.7971 22.5229C15.111 22.1306 15.6617 21.5918 16.4439 21.0585C17.7605 20.1609 19.2881 19.6153 21.0001 19.6153C22.7121 19.6153 24.2398 20.1609 25.5563 21.0585C26.3386 21.5918 26.8893 22.1306 27.2031 22.5229Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("circle", {
                        cx: "16.5578",
                        cy: "14.3654",
                        r: "2.01923",
                        fill: "#532E05"
                    }), (0, d.jsx)("circle", {
                        cx: "25.4424",
                        cy: "14.3654",
                        r: "2.01923",
                        fill: "#532E05"
                    }), (0, d.jsxs)("defs", {
                        children: [(0, d.jsxs)("filter", {
                            id: "filter0_di_15326_3236",
                            x: "9.53674e-06",
                            y: "0.230657",
                            width: "42",
                            height: "42.0002",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "3.23077"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "3.23077"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3236"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3236",
                                result: "shape"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "1.21154"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect2_innerShadow_15326_3236"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint0_radial_15326_3236",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(21 11.9363) rotate(90) scale(20.6021)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFD391"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFB24D"
                            })]
                        })]
                    })]
                }))
            }));

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var j = l.forwardRef((function(e, t) {
                return (0, d.jsxs)("svg", g(g({
                    width: "42",
                    height: "43",
                    viewBox: "0 0 42 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t
                }, e), {}, {
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_di_15326_3268)",
                        children: (0, d.jsx)("circle", {
                            cx: "20.9999",
                            cy: "17.9999",
                            r: "14.5385",
                            fill: "url(#paint0_radial_15326_3268)"
                        })
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M25.5101 11.4254C25.5101 11.4254 29.2638 11.113 30.842 11.8919C30.9265 11.9336 31.1971 12.0778 31.1999 12.2765L31.1978 12.3236L31.197 12.3305C31.1688 12.5587 30.9472 12.4903 30.029 12.3373C29.1108 12.1842 25.4129 12.5273 25.4129 12.5273C25.1153 12.5165 24.8827 12.2666 24.8934 11.969L24.8951 11.9414C24.9224 11.6291 25.1978 11.3981 25.5101 11.4254Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("ellipse", {
                        cx: "17.1205",
                        cy: "14.3918",
                        rx: "1.68065",
                        ry: "2.1843",
                        fill: "#532E05"
                    }), (0, d.jsx)("ellipse", {
                        cx: "26.4222",
                        cy: "16.0158",
                        rx: "1.68065",
                        ry: "2.1843",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.6502 8.85889C18.4779 8.85889 19.9287 9.73549 19.9595 10.4165C19.9722 10.695 19.6243 10.8323 19.374 10.7093C18.8346 10.4441 17.8913 10.0859 16.6502 10.0284C15.2793 9.96496 14.2717 10.87 13.7705 11.4503C13.6332 11.6093 13.3397 11.5447 13.3409 11.3347C13.3481 10.0416 14.8225 8.85889 16.6502 8.85889Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.8308 22.8263C16.8531 22.5917 17.0168 22.3962 17.2487 22.3543C17.8681 22.2427 19.1981 22.0945 20.9062 22.4289C22.6447 22.7693 24.0767 23.487 24.7278 23.8527C24.9561 23.981 25.0563 24.2489 24.9839 24.5005C24.8868 24.8382 24.5202 25.0205 24.1898 24.901C23.3686 24.6041 21.8646 24.0943 20.5689 23.841C19.1974 23.5729 18.0985 23.5036 17.4416 23.491C17.0876 23.4842 16.7973 23.1787 16.8308 22.8263Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.8488 21.6435C12.9021 21.6768 12.9522 21.7152 12.9983 21.758L13.1078 21.8598C13.6401 22.3545 13.787 23.1387 13.4696 23.7924L12.8525 25.0638L13.7641 25.1597C13.8757 25.1714 13.9855 25.1883 14.0933 25.2101C14.156 25.2063 14.2201 25.2076 14.2849 25.2144L20.5311 25.8709C21.1666 25.9377 21.6276 26.507 21.5608 27.1425C21.494 27.7779 20.9247 28.239 20.2893 28.1722L16.7777 27.8029C16.8671 28.1762 16.8956 28.5708 16.8532 28.9743C16.6528 30.8808 14.9449 32.2638 13.0385 32.0634L11.3948 31.8906C9.3976 31.6807 7.94873 29.8915 8.15864 27.8943L8.17592 27.7299C8.25479 26.9795 8.58443 26.3161 9.07282 25.8143L11.4823 21.959C11.7725 21.4945 12.3843 21.3533 12.8488 21.6435Z",
                        fill: "url(#paint1_radial_15326_3268)"
                    }), (0, d.jsxs)("defs", {
                        children: [(0, d.jsxs)("filter", {
                            id: "filter0_di_15326_3268",
                            x: "0.00142574",
                            y: "0.231426",
                            width: "41.9969",
                            height: "41.9971",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "3.23"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "3.23"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3268"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3268",
                                result: "shape"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.81"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "1.21"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect2_innerShadow_15326_3268"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint0_radial_15326_3268",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFD391"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFB24D"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint1_radial_15326_3268",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(12.4394 25.114) rotate(94.2786) scale(7.52138 13.7666)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFE5A4"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFD193"
                            })]
                        })]
                    })]
                }))
            }));

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var w = l.forwardRef((function(e, t) {
                return (0, d.jsxs)("svg", O(O({
                    width: "42",
                    height: "43",
                    viewBox: "0 0 42 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t
                }, e), {}, {
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_di_15326_3243)",
                        children: (0, d.jsx)("circle", {
                            cx: "20.9999",
                            cy: "17.9999",
                            r: "14.5385",
                            fill: "url(#paint0_radial_15326_3243)"
                        })
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.7969 22.3614C14.3686 21.8261 14.4844 21.0667 15.0553 20.6652C15.6263 20.2638 16.4363 20.3722 16.8645 20.9075C17.0353 21.1209 17.4134 21.4909 17.9639 21.8662C18.8684 22.4829 19.885 22.846 20.9999 22.846C22.1148 22.846 23.1313 22.4829 24.0359 21.8662C24.5863 21.4909 24.9645 21.1209 25.1352 20.9075C25.5634 20.3722 26.3734 20.2638 26.9444 20.6652C27.5154 21.0667 27.6311 21.8261 27.2029 22.3614C26.889 22.7537 26.3383 23.2924 25.5561 23.8258C24.2395 24.7234 22.7119 25.269 20.9999 25.269C19.2879 25.269 17.7602 24.7234 16.4437 23.8258C15.6614 23.2924 15.1107 22.7537 14.7969 22.3614Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.5475 16.3641C15.4379 16.3641 14.5383 15.4645 14.5383 14.3549C14.5383 13.2452 15.4379 12.3457 16.5475 12.3457H16.5676C17.6772 12.3457 18.5768 13.2452 18.5768 14.3549C18.5768 15.4645 17.6772 16.3641 16.5676 16.3641H16.5475Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M25.432 16.3842C24.3224 16.3842 23.4229 15.4801 23.4229 14.3649C23.4229 13.2497 24.3224 12.3457 25.432 12.3457H25.4521C26.5618 12.3457 27.4613 13.2497 27.4613 14.3649C27.4613 15.4801 26.5618 16.3842 25.4521 16.3842H25.432Z",
                        fill: "#532E05"
                    }), (0, d.jsxs)("defs", {
                        children: [(0, d.jsxs)("filter", {
                            id: "filter0_di_15326_3243",
                            x: "-0.000112534",
                            y: "0.230657",
                            width: "42",
                            height: "42.0002",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "3.23077"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "3.23077"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3243"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3243",
                                result: "shape"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "1.21154"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect2_innerShadow_15326_3243"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint0_radial_15326_3243",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFD391"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFB24D"
                            })]
                        })]
                    })]
                }))
            }));

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var P = l.forwardRef((function(e, t) {
                return (0, d.jsxs)("svg", C(C({
                    width: "42",
                    height: "43",
                    viewBox: "0 0 42 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t
                }, e), {}, {
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_di_15326_3260)",
                        children: (0, d.jsx)("circle", {
                            cx: "21.0001",
                            cy: "17.9999",
                            r: "14.5385",
                            fill: "url(#paint0_radial_15326_3260)"
                        })
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.7971 22.3614C14.3689 21.8261 14.4846 21.0667 15.0556 20.6652C15.6265 20.2638 16.4365 20.3722 16.8648 20.9075C17.0355 21.1209 17.4136 21.4909 17.9641 21.8662C18.8687 22.4829 19.8852 22.846 21.0001 22.846C22.115 22.846 23.1316 22.4829 24.0361 21.8662C24.5866 21.4909 24.9647 21.1209 25.1354 20.9075C25.5637 20.3722 26.3737 20.2638 26.9447 20.6652C27.5156 21.0667 27.6313 21.8261 27.2031 22.3614C26.8892 22.7537 26.3385 23.2924 25.5563 23.8258C24.2397 24.7234 22.7121 25.269 21.0001 25.269C19.2881 25.269 17.7605 24.7234 16.4439 23.8258C15.6617 23.2924 15.111 22.7537 14.7971 22.3614Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        d: "M14.8281 12.359C14.4926 12.407 14.1899 12.5864 13.9866 12.8577C13.7833 13.1291 13.696 13.4701 13.7439 13.8059C13.7918 14.1417 13.971 14.4446 14.2421 14.6481L15.4342 15.5433L14.2421 16.4385C14.1079 16.5393 13.9948 16.6655 13.9093 16.81C13.8238 16.9545 13.7675 17.1145 13.7438 17.2807C13.7201 17.447 13.7293 17.6163 13.7709 17.779C13.8126 17.9417 13.8858 18.0946 13.9865 18.229C14.0872 18.3633 14.2133 18.4765 14.3577 18.5621C14.5021 18.6477 14.6619 18.7039 14.828 18.7277C14.9941 18.7514 15.1633 18.7422 15.3259 18.7005C15.4884 18.6588 15.6412 18.5854 15.7754 18.4847L18.3308 16.5664C18.4895 16.4473 18.6183 16.2928 18.707 16.1152C18.7957 15.9377 18.8419 15.7418 18.8419 15.5433C18.8419 15.3448 18.7957 15.149 18.707 14.9714C18.6183 14.7938 18.4895 14.6394 18.3308 14.5202L15.7754 12.602C15.5043 12.3985 15.1635 12.3111 14.8281 12.359Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("path", {
                        d: "M28.2566 13.8059C28.3045 13.4701 28.2172 13.1291 28.0139 12.8577C27.8106 12.5864 27.5079 12.407 27.1724 12.359C26.8369 12.3111 26.4962 12.3985 26.2251 12.602L23.6697 14.5202C23.511 14.6394 23.3822 14.7938 23.2935 14.9714C23.2048 15.149 23.1586 15.3448 23.1586 15.5433C23.1586 15.7418 23.2048 15.9377 23.2935 16.1152C23.3822 16.2928 23.511 16.4473 23.6697 16.5664L26.2251 18.4847C26.4962 18.6881 26.8369 18.7755 27.1724 18.7275C27.5078 18.6795 27.8105 18.5001 28.0138 18.2288C28.2171 17.9575 28.3044 17.6165 28.2565 17.2807C28.2086 16.945 28.0294 16.642 27.7583 16.4385L26.5662 15.5433L27.7583 14.6481C28.0294 14.4446 28.2086 14.1417 28.2566 13.8059Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("circle", {
                        opacity: "0.6",
                        cx: "11.7116",
                        cy: "20.8268",
                        r: "2.01923",
                        fill: "#DB4246"
                    }), (0, d.jsx)("circle", {
                        opacity: "0.6",
                        cx: "30.2885",
                        cy: "20.8268",
                        r: "2.01923",
                        fill: "#DB4246"
                    }), (0, d.jsxs)("defs", {
                        children: [(0, d.jsxs)("filter", {
                            id: "filter0_di_15326_3260",
                            x: "0.000131607",
                            y: "0.230657",
                            width: "42",
                            height: "42.0002",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "3.23077"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "3.23077"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3260"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3260",
                                result: "shape"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "1.21154"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect2_innerShadow_15326_3260"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint0_radial_15326_3260",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(21.0001 11.9363) rotate(90) scale(20.6021)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFD391"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFB24D"
                            })]
                        })]
                    })]
                }))
            }));

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var N = l.forwardRef((function(e, t) {
                return (0, d.jsxs)("svg", k(k({
                    width: "42",
                    height: "43",
                    viewBox: "0 0 42 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t
                }, e), {}, {
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_di_15326_3249)",
                        children: (0, d.jsx)("circle", {
                            cx: "20.9999",
                            cy: "17.9999",
                            r: "14.5385",
                            fill: "url(#paint0_radial_15326_3249)"
                        })
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.9133 19.817C17.7301 17.4007 24.2697 17.4007 30.0864 19.817V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V19.817Z",
                        fill: "#6B3C09"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.9133 19.817C17.7301 17.4007 24.2697 17.4007 30.0864 19.817V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V19.817Z",
                        fill: "#532E05"
                    }), (0, d.jsx)("mask", {
                        id: "mask0_15326_3249",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "11",
                        y: "17",
                        width: "20",
                        height: "13",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.9133 20.1032C11.9133 19.9299 12.0176 19.7737 12.1777 19.7072L12.4987 19.5738C17.9407 17.3132 24.059 17.3132 29.501 19.5738L29.8221 19.7072C29.9821 19.7737 30.0864 19.9299 30.0864 20.1032V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V20.1032Z",
                            fill: "white"
                        })
                    }), (0, d.jsx)("g", {
                        mask: "url(#mask0_15326_3249)",
                        children: (0, d.jsx)("circle", {
                            cx: "20.9999",
                            cy: "37.3847",
                            r: "14.5385",
                            fill: "#C23F43"
                        })
                    }), (0, d.jsx)("g", {
                        filter: "url(#filter1_d_15326_3249)",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.4329 14.9185C15.3153 14.8567 15.1747 14.8567 15.0571 14.9185L12.9427 16.0301C12.6465 16.1859 12.3002 15.9343 12.3568 15.6044L12.7606 13.2501C12.7831 13.1191 12.7396 12.9854 12.6444 12.8926L10.9339 11.2253C10.6942 10.9916 10.8265 10.5846 11.1577 10.5364L13.5216 10.1929C13.6532 10.1738 13.7669 10.0912 13.8257 9.97201L14.8828 7.82997C15.031 7.52982 15.459 7.52982 15.6071 7.82997L16.6643 9.97201C16.7231 10.0912 16.8368 10.1738 16.9684 10.1929L19.3322 10.5364C19.6635 10.5846 19.7957 10.9916 19.5561 11.2253L17.8455 12.8926C17.7504 12.9854 17.7069 13.1191 17.7294 13.2501L18.1332 15.6044C18.1898 15.9343 17.8435 16.1859 17.5472 16.0301L15.4329 14.9185Z",
                            fill: "#FFF9F0"
                        })
                    }), (0, d.jsx)("g", {
                        filter: "url(#filter2_d_15326_3249)",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.5484 14.9185C27.4307 14.8567 27.2902 14.8567 27.1725 14.9185L25.0582 16.0301C24.762 16.1859 24.4157 15.9343 24.4723 15.6044L24.8761 13.2501C24.8985 13.1191 24.8551 12.9854 24.7599 12.8926L23.0494 11.2253C22.8097 10.9916 22.942 10.5846 23.2732 10.5364L25.6371 10.1929C25.7686 10.1738 25.8823 10.0912 25.9412 9.97201L26.9983 7.82997C27.1465 7.52982 27.5745 7.52982 27.7226 7.82997L28.7798 9.97201C28.8386 10.0912 28.9523 10.1738 29.0838 10.1929L31.4477 10.5364C31.779 10.5846 31.9112 10.9916 31.6715 11.2253L29.961 12.8926C29.8658 12.9854 29.8224 13.1191 29.8449 13.2501L30.2487 15.6044C30.3052 15.9343 29.959 16.1859 29.6627 16.0301L27.5484 14.9185Z",
                            fill: "#FFF9F0"
                        })
                    }), (0, d.jsxs)("defs", {
                        children: [(0, d.jsxs)("filter", {
                            id: "filter0_di_15326_3249",
                            x: "-0.000112534",
                            y: "0.230657",
                            width: "42",
                            height: "42.0002",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "3.23077"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "3.23077"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3249"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3249",
                                result: "shape"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "1.21154"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect2_innerShadow_15326_3249"
                            })]
                        }), (0, d.jsxs)("filter", {
                            id: "filter1_d_15326_3249",
                            x: "10.0038",
                            y: "7.60498",
                            width: "10.4823",
                            height: "10.088",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "0.403846"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3249"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3249",
                                result: "shape"
                            })]
                        }), (0, d.jsxs)("filter", {
                            id: "filter2_d_15326_3249",
                            x: "22.1193",
                            y: "7.60498",
                            width: "10.4823",
                            height: "10.088",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "0.807692"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "0.403846"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_15326_3249"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_15326_3249",
                                result: "shape"
                            })]
                        }), (0, d.jsxs)("radialGradient", {
                            id: "paint0_radial_15326_3249",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                            children: [(0, d.jsx)("stop", {
                                stopColor: "#FFE091"
                            }), (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFAA3C"
                            })]
                        })]
                    })]
                }))
            }));

            function V(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var I = function(e) {
                    var t = e.rating,
                        r = e.className,
                        n = "w-11 h-11";
                    switch (t) {
                        case 1:
                            return (0, d.jsx)(x, {
                                className: (0, s.yI)(n, r)
                            });
                        case 2:
                            return (0, d.jsx)(j, {
                                className: (0, s.yI)(n, r)
                            });
                        case 3:
                            return (0, d.jsx)(w, {
                                className: (0, s.yI)(n, r)
                            });
                        case 4:
                            return (0, d.jsx)(P, {
                                className: (0, s.yI)(n, r)
                            });
                        case 5:
                            return (0, d.jsx)(N, {
                                className: (0, s.yI)(n, r)
                            });
                        default:
                            return null
                    }
                },
                E = function(e) {
                    var t = e.question,
                        r = e.answers,
                        n = e.onChange,
                        o = e.onNext,
                        a = e.className,
                        u = (0, i.$G)("common", {
                            keyPrefix: "survey"
                        }).t,
                        f = function(e) {
                            var t, r, n, i, l;
                            return D(D({}, e), {}, {
                                title: null !== (t = e.title) && void 0 !== t ? t : "How satisfied are you?",
                                rateMin: null !== (r = e.rateMin) && void 0 !== r ? r : 1,
                                rateMax: null !== (n = e.rateMax) && void 0 !== n ? n : 5,
                                rateStep: null !== (i = e.rateStep) && void 0 !== i ? i : 1,
                                isRequired: null !== (l = e.isRequired) && void 0 !== l && l
                            })
                        }(t),
                        p = f.name,
                        m = f.rateMin,
                        y = f.rateMax,
                        x = f.rateStep,
                        h = f.minRateDescription,
                        g = f.maxRateDescription,
                        j = function(e, t, r) {
                            for (var n = [], i = e; i <= t; i += r) n.push(i);
                            return n
                        }(m, y, x),
                        b = r[p];
                    (0, l.useEffect)((function() {
                        return null !== b ? o() : void 0
                    }), [b, o]);
                    var O = (0, l.useCallback)((function(e) {
                        return n((0, v.Z)({}, p, e))
                    }), [n, p]);
                    return (0, d.jsxs)("div", {
                        className: (0, s.yI)("w-full", a),
                        children: [(0, d.jsx)("div", {
                            className: "flex w-full items-center justify-center",
                            children: j.map((function(e, t) {
                                return (0, d.jsx)("button", {
                                    className: (0, s.yI)("flex h-[66px] w-[66px] items-center justify-center border-[1px] border-solid", {
                                        "rounded-l-md": 0 === t,
                                        "rounded-r-md": t === j.length - 1,
                                        "border-l-0": 0 !== t
                                    }, c.Cj.dividerGray4, c.M$.fill3, c.M$.bgBlueStandardFocus),
                                    onClick: function() {
                                        return O(e)
                                    },
                                    children: (0, d.jsx)(I, {
                                        rating: e
                                    })
                                }, "r" + e)
                            }))
                        }), (0, d.jsxs)("div", {
                            className: (0, s.yI)("mt-4 flex w-full justify-between text-xs", c.Cj.label1),
                            children: [(0, d.jsx)("div", {
                                children: null !== h && void 0 !== h ? h : u("veryDissatisfied")
                            }), (0, d.jsx)("div", {
                                children: null !== g && void 0 !== g ? g : u("verySatisfied")
                            })]
                        })]
                    })
                },
                L = r(38162),
                F = function(e) {
                    var t = e.question,
                        r = e.onChange,
                        n = e.className,
                        i = t.name,
                        o = t.placeholder,
                        a = (0, l.useCallback)((function(e) {
                            return r((0, v.Z)({}, i, e))
                        }), [r, i]),
                        u = (0, l.useState)(""),
                        f = u[0],
                        p = u[1],
                        m = (0, l.useCallback)((function(e) {
                            p(e), a(e)
                        }), [p, a]);
                    return (0, d.jsx)("div", {
                        className: (0, s.yI)("w-full", n),
                        children: (0, d.jsx)(L.g, {
                            className: (0, s.yI)("w-full border-0 text-xs", c.Cj.fill3, c.Cj.label1, c.Cj.placeholderLabel4),
                            value: f,
                            cols: 3,
                            onChange: m,
                            placeholder: null !== o && void 0 !== o ? o : "Additional feedback"
                        })
                    })
                },
                X = r(21484);
            r(87621), r(51506), r(2979);

            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Z, A = function(e) {
                    var t = e.value,
                        r = e.text,
                        n = e.isSelected,
                        i = e.disabled,
                        l = e.onClick;
                    return (0, d.jsx)(o.z, {
                        className: (0, s.yI)("rounded-md border-[1px] border-solid p-2 text-xs font-normal", c.Cj.bgTransparent, c.Cj.fill3Hover, c.Cj.label1, c.Cj.dividerGray4, (0, v.Z)({}, (0, s.yI)(c.Cj.bgBlueStandard, c.Cj.bgBlueSHover, c.xy.labelFixedWhite), n)),
                        disabled: i,
                        onClick: function() {
                            return l(t)
                        },
                        children: r
                    }, "c-" + t)
                },
                B = function(e) {
                    var t, r, n = e.question,
                        i = e.answers,
                        o = e.onChange,
                        a = e.className,
                        u = function(e) {
                            var t, r, n, i, l, s;
                            return T(T({}, e), {}, {
                                isRequired: null !== (t = e.isRequired) && void 0 !== t && t,
                                choices: null !== (r = e.choices) && void 0 !== r ? r : [],
                                maxSelectedChoices: null !== (n = e.maxSelectedChoices) && void 0 !== n ? n : 1 / 0,
                                other: e.showOtherItem ? null !== (i = e.otherText) && void 0 !== i ? i : "Other" : void 0,
                                otherPlaceholder: e.showOtherItem ? null !== (l = e.otherPlaceholder) && void 0 !== l ? l : "Please specify" : void 0,
                                none: e.showNoneItem ? null !== (s = e.noneText) && void 0 !== s ? s : "None" : void 0
                            })
                        }(n),
                        f = u.name,
                        p = u.choices,
                        m = u.maxSelectedChoices,
                        y = u.other,
                        x = u.otherPlaceholder,
                        h = u.none,
                        g = i[f],
                        j = (0, l.useCallback)((function(e) {
                            if ("none" === e) return o((0, v.Z)({}, f, null !== g && void 0 !== g && g.includes("none") ? null : ["none"]));
                            if (null === g || g.includes("none")) return o((0, v.Z)({}, f, [e]));
                            var t = g.includes(e) ? g.filter((function(t) {
                                return t !== e
                            })) : [].concat((0, X.Z)(g), [e]);
                            if (0 === t.length) return o((0, v.Z)({}, f, null));
                            o((0, v.Z)({}, f, t))
                        }), [o, f, g]),
                        b = null === g || void 0 === g ? void 0 : g.includes("none"),
                        O = null !== g && g.length >= m,
                        w = function(e) {
                            return b || O && !(null !== g && void 0 !== g && g.includes(e))
                        },
                        _ = "".concat(f, "__other"),
                        C = (0, l.useCallback)((function(e) {
                            return o((0, v.Z)({}, _, e))
                        }), [o, _]),
                        P = (0, l.useState)(""),
                        S = P[0],
                        k = P[1],
                        N = (0, l.useCallback)((function(e) {
                            k(e), C(e)
                        }), [k, C]),
                        V = null === g || void 0 === g ? void 0 : g.includes("other");
                    return (0, l.useEffect)((function() {
                        return V ? void 0 : C(void 0)
                    }), [V, C]), (0, d.jsxs)("div", {
                        className: (0, s.yI)("w-full", a),
                        children: [(0, d.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center gap-3",
                            children: [p.map((function(e) {
                                var t;
                                return (0, d.jsx)(A, {
                                    value: e.value,
                                    text: e.text,
                                    isSelected: null !== (t = null === g || void 0 === g ? void 0 : g.includes(e.value)) && void 0 !== t && t,
                                    disabled: w(e.value),
                                    onClick: j
                                }, "c-" + e.value)
                            })), h && (0, d.jsx)(A, {
                                value: "none",
                                text: h,
                                isSelected: null !== (t = null === g || void 0 === g ? void 0 : g.includes("none")) && void 0 !== t && t,
                                disabled: O,
                                onClick: j
                            }), y && (0, d.jsx)(A, {
                                value: "other",
                                text: y,
                                isSelected: null !== (r = null === g || void 0 === g ? void 0 : g.includes("other")) && void 0 !== r && r,
                                disabled: w("other"),
                                onClick: j
                            })]
                        }), V && (0, d.jsx)("div", {
                            className: "mt-3 w-full",
                            children: (0, d.jsx)(L.g, {
                                className: (0, s.yI)("w-full border-0 text-xs", c.Cj.fill3, c.Cj.label1, c.Cj.placeholderLabel4),
                                cols: 3,
                                value: S,
                                onChange: N,
                                placeholder: x
                            })
                        })]
                    })
                };
            ! function(e) {
                e.Rating = "rating", e.Html = "html", e.Checkbox = "checkbox", e.Tags = "tagbox", e.Text = "text"
            }(Z || (Z = {}));
            var R = function(e) {
                    var t = e.question,
                        r = e.answers,
                        n = e.onChange,
                        i = e.onNext,
                        l = t.name;
                    switch (t.type) {
                        case Z.Html:
                            return (0, d.jsx)(p, {
                                question: t,
                                onNext: i
                            }, l);
                        case Z.Rating:
                            return (0, d.jsx)(E, {
                                question: t,
                                answers: r,
                                onChange: n,
                                onNext: i
                            }, l);
                        case Z.Text:
                            return (0, d.jsx)(F, {
                                question: t,
                                onChange: n
                            }, l);
                        case Z.Tags:
                            return (0, d.jsx)(B, {
                                question: t,
                                onChange: n,
                                answers: r
                            }, l);
                        default:
                            return null
                    }
                },
                M = r(7221),
                Q = r(90854);
            r(1743), r(65240), r(36615), r(3500), r(66128), r(11270), r(8249);

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var U, H = function(e, t) {
                    return e.map((function(e) {
                        return z(z({}, e), {}, {
                            visible: !e.visibleIf || K(t, e.visibleIf)
                        })
                    }))
                },
                J = function(e) {
                    return e.filter((function(e) {
                        return e.visible && e.type !== Z.Html && e.type !== Z.Rating
                    })).length
                };

            function $(e, t) {
                return "object" === typeof t ? e.includes(t.value) : e.includes(t)
            }

            function W(e, t) {
                var r = e.replace(/{([^}]+)}/g, "$1").split(" "),
                    n = (0, Q.Z)(r),
                    i = n[0],
                    l = n.slice(1);
                if (!t.hasOwnProperty(i)) return !1;
                var s = t[i];
                if ("notempty" === l[0]) return void 0 !== s && null !== s;
                if (["=", "<>"].includes(l[0]) && 2 === l.length) {
                    var o = [l[1], l[1].startsWith("[")],
                        a = o[0],
                        c = o[1],
                        u = "=" === l[0] ? function(e) {
                            return e
                        } : function(e) {
                            return !e
                        };
                    return u(c ? function(e, t) {
                        if (!Array.isArray(t)) return !1;
                        if (e === t) return !0;
                        if (null == e || null == t) return !1;
                        if (e.length !== t.length) return !1;
                        for (var r = e.sort(), n = t.sort(), i = 0; i < e.length; ++i)
                            if (r[i] !== n[i]) return !1;
                        return !0
                    }(a.replace(/\[|\]|\'/g, "").split(","), s) : s === a)
                }
                return !1
            }

            function K(e, t) {
                return !t || t.split(" and ").map((function(e) {
                    return e.split(" or ")
                })).every((function(t) {
                    return t.some((function(t) {
                        return W(t, e)
                    }))
                }))
            }

            function Y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(r), !0).forEach((function(t) {
                        (0, v.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }! function(e) {
                e.Rating = "Rating", e.MoreQuestions = "MoreQuestions"
            }(U || (U = {}));
            var te = function(e, t) {
                    switch (t.type) {
                        case "update":
                            var r = (0, M.Z)(ee(ee({}, e.answers), t.payload), (function(e) {
                                    return void 0 === e
                                })),
                                n = H(e.questions, r);
                            return ee(ee({}, e), {}, {
                                answers: r,
                                questions: n,
                                totalQuestions: J(n)
                            });
                        case "next":
                            var i = e.questions[e.curQuestionIndex].type !== Z.Html,
                                l = H(e.questions, e.answers);
                            return ee(ee({}, e), {}, {
                                currentStep: U.MoreQuestions,
                                questions: l,
                                curQuestionIndex: e.curQuestionIndex + 1,
                                curQuestionId: i ? e.curQuestionId + 1 : e.curQuestionId,
                                totalQuestions: J(l)
                            });
                        default:
                            return e
                    }
                },
                re = function(e) {
                    var t, r, n = (0, l.useState)((function() {
                            var t = function(e) {
                                    var t, r = e.pages[0];
                                    return r ? (null !== (t = null === r || void 0 === r ? void 0 : r.elements) && void 0 !== t ? t : []).map((function(e) {
                                        var t, r = e.type === Z.Checkbox || e.type === Z.Tags ? {
                                            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map((function(e) {
                                                return "object" === typeof e ? e : {
                                                    value: e,
                                                    text: e
                                                }
                                            }))
                                        } : {};
                                        return z(z({}, e), r)
                                    })) : []
                                }(e),
                                r = function(e) {
                                    return e.filter((function(e) {
                                        return e.type !== Z.Html
                                    })).reduce((function(e, t) {
                                        return z(z({}, e), {}, (0, v.Z)({}, t.name, null))
                                    }), {})
                                }(t);
                            return {
                                questions: H(t, r),
                                answers: r,
                                currentStep: U.Rating,
                                totalQuestions: J(t),
                                curQuestionIndex: 0,
                                curQuestionId: t.length > 1 ? 0 : -1
                            }
                        })),
                        i = n[0],
                        s = (0, l.useReducer)(te, i),
                        o = s[0],
                        a = s[1],
                        c = (0, l.useCallback)((function(e) {
                            return a({
                                type: "update",
                                payload: e
                            })
                        }), []),
                        u = (0, l.useCallback)((function() {
                            return a({
                                type: "next"
                            })
                        }), []),
                        d = (0, l.useState)((function() {
                            return 0 !== o.questions.length
                        }))[0],
                        f = (0, l.useMemo)((function() {
                            return function(e, t, r) {
                                var n = e[t];
                                if (!n) return n;
                                if (n.type !== Z.Checkbox && n.type !== Z.Tags || !n.choicesFromQuestion) return n;
                                var i = e.find((function(e) {
                                    return e.name === n.choicesFromQuestion
                                }));
                                if (!i || !i.choices) return n;
                                if (!n.choicesFromQuestionMode) return z(z({}, n), {}, {
                                    choices: (0, X.Z)(i.choices)
                                });
                                var l = r[i.name];
                                return "unselected" === n.choicesFromQuestionMode ? z(z({}, n), {}, {
                                    choices: i.choices.filter((function(e) {
                                        return !$(l, e)
                                    }))
                                }) : "selected" === n.choicesFromQuestionMode ? z(z({}, n), {}, {
                                    choices: i.choices.filter((function(e) {
                                        return $(l, e)
                                    }))
                                }) : n
                            }(o.questions, o.curQuestionIndex, o.answers)
                        }), [o.curQuestionIndex]),
                        p = (t = o.questions, r = o.curQuestionIndex, t.slice(r + 1).some((function(e) {
                            return e.visible
                        }))),
                        m = null === f || void 0 === f || !f.isRequired || !!o.answers[f.name];
                    return {
                        isValid: d,
                        currentQuestion: f,
                        currentQuestionId: o.curQuestionId,
                        totalQuestions: o.totalQuestions,
                        allAnswers: o.answers,
                        hasNext: p,
                        hasValidAnswer: m,
                        submitAnswer: c,
                        nextQuestion: u
                    }
                },
                ne = ["surveyJson", "onSubmit", "onCancel", "onClose", "className"],
                ie = function(e) {
                    var t = e.surveyJson,
                        r = e.onSubmit,
                        u = e.onCancel,
                        p = e.onClose,
                        v = e.className,
                        m = (0, n.Z)(e, ne),
                        y = re(t),
                        x = y.isValid,
                        h = y.currentQuestion,
                        g = y.currentQuestionId,
                        j = y.totalQuestions,
                        b = y.allAnswers,
                        O = y.hasNext,
                        w = y.hasValidAnswer,
                        _ = y.submitAnswer,
                        C = y.nextQuestion,
                        P = (0, l.useState)(!1),
                        S = P[0],
                        k = P[1],
                        N = (0, l.useCallback)((function() {
                            k(!0), p && p()
                        }), [p]),
                        V = (0, l.useCallback)((function() {
                            u(b), N()
                        }), [u, N, b]),
                        D = (0, l.useState)(!1),
                        I = D[0],
                        E = D[1],
                        L = (0, l.useCallback)((function() {
                            w && (O ? C() : E(!0), r(b, !O))
                        }), [C, r, w, O, b]),
                        F = (null === h || void 0 === h ? void 0 : h.type) !== Z.Rating,
                        X = (null === h || void 0 === h ? void 0 : h.type) === Z.Html,
                        G = (0, i.$G)("common", {
                            keyPrefix: "survey"
                        }).t,
                        T = m.submitBtnText,
                        A = void 0 === T ? G("submit") : T,
                        B = m.nextBtnText,
                        M = void 0 === B ? G("next") : B,
                        Q = m.continueBtnText,
                        q = void 0 === Q ? G("continue") : Q,
                        z = O ? X ? q : M : A;
                    return !x || S ? null : I ? (0, d.jsx)(f, {
                        closeDelay: 5e3,
                        onClose: N,
                        leetCoinsReward: m.leetCoinsReward,
                        className: v
                    }) : (0, d.jsxs)("div", {
                        className: (0, s.yI)("relative w-[366px] rounded-lg border-[1px] border-solid p-4", c.Cj.divider4, c.Cj.bgLayer3, v),
                        children: [(0, d.jsx)("button", {
                            className: "absolute right-4 top-4",
                            children: (0, d.jsx)(a.F, {
                                className: (0, s.yI)("h-5 w-5", c.Cj.labelGrey6),
                                onClick: V
                            })
                        }), h.title && (0, d.jsx)("div", {
                            className: (0, s.yI)("mb-4 pr-8 text-xs", c.Cj.label1),
                            children: h.title
                        }), (0, d.jsx)("div", {
                            children: (0, d.jsx)(R, {
                                question: h,
                                answers: b,
                                onChange: _,
                                onNext: L
                            })
                        }), F && (0, d.jsxs)("div", {
                            className: (0, s.yI)("-mx-4 mt-4 flex items-center justify-between border-t-[1px] border-solid px-4 pt-4", c.Cj.divider3),
                            children: [X ? (0, d.jsx)("div", {}) : (0, d.jsx)("div", {
                                className: (0, s.yI)("text-xs", c.Cj.label3),
                                children: G("questionNo", {
                                    current: g,
                                    total: j
                                })
                            }), (0, d.jsx)(o.z, {
                                variant: "primary",
                                className: "px-3 py-1 text-xs",
                                onClick: L,
                                disabled: !w,
                                children: z
                            })]
                        })]
                    })
                }
        },
        9416: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        74945: function(e, t, r) {
            r.d(t, {
                i: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M6.793 3C4.635 3 2.737 4.35 2.055 6.325a1 1 0 101.89.652C4.349 5.81 5.489 5 6.794 5c1.663 0 3 1.3 3 2.889V10H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-6.207V7.889c0-2.707-2.244-4.889-5-4.889zM12 14a2 2 0 100 4 2 2 0 000-4z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        39922: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
                    })
                }))
            }))
        },
        79509: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsxs)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: [(0, l.jsx)("path", {
                        strokeWidth: 2,
                        d: "M18 12a6.002 6.002 0 01-5.004 5.918c-.545.09-.996-.366-.996-.918V7c0-.552.451-1.009.996-.918A6.002 6.002 0 0118 12z"
                    }), (0, l.jsx)("path", {
                        strokeWidth: 2,
                        d: "M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 119.6-9.6z",
                        clipRule: "evenodd"
                    })]
                }))
            }))
        },
        35952: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M12.293 16.293L16.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zM9.586 12L5.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        56018: function(e, t, r) {
            r.d(t, {
                P: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.707 16.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L10.414 12l4.293 4.293z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        32258: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M9.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        6064: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return a
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
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

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var a = i.forwardRef((function(e, t) {
                return (0, l.jsx)("svg", o(o({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        22755: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return u
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(64386),
                l = r(40473),
                s = r(90074),
                o = r(11288);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var u = function() {
                var e = (0, l.NL)(),
                    t = (0, i.useCallback)((function(t) {
                        e.setQueriesData(s.sqj.getKey({
                            surveySlug: t
                        }), {
                            showSurvey: !1
                        })
                    }), [e]);
                return c(c({}, (0, s.zNW)(o.f6)), {}, {
                    completeSurvey: t
                })
            }
        },
        40422: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(90074),
                i = r(11288),
                l = r(42456);
            var s = function(e) {
                    var t, r = e.surveyV2;
                    if (!r.showSurvey) return {
                        showSurvey: !1
                    };
                    var n = (0, l.a)(r.surveyJson);
                    return n ? {
                        showSurvey: !0,
                        surveyJson: n,
                        leetcoinAmount: null !== (t = null === r || void 0 === r ? void 0 : r.leetcoinAmount) && void 0 !== t ? t : 10
                    } : {
                        showSurvey: !1
                    }
                },
                o = function(e) {
                    return (0, n.sqj)(i.f6, {
                        surveySlug: e
                    }, {
                        select: s
                    })
                }
        },
        54845: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return n
                }
            });
            var n = function(e) {
                e.invalidateQueries(["GetMyStudyPlan"]), e.invalidateQueries(["GetProblemSetStudyPlanAds"]), e.invalidateQueries(["GetStudyPlanByCatalog"]), e.invalidateQueries(["GetStudyPlanListAds"]), e.invalidateQueries(["GetStudyPlanV2WeeklyTaskRecords"])
            }
        },
        98127: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return n
                }
            });
            r(91518), r(62217);
            var n = function(e) {
                var t = e.problemGroupList,
                    r = e.problemGroupStatuses;
                return t && r ? (t.forEach((function(e) {
                    r.forEach((function(t) {
                        e.slug === t.slug && e.problemList.forEach((function(e) {
                            t.problemStatuses.forEach((function(t) {
                                e.slug === t.slug && (e.status = t.status)
                            }))
                        }))
                    }))
                })), t) : t
            }
        },
        20209: function(e, t, r) {
            var n, i, l;
            r.d(t, {
                    CV: function() {
                        return i
                    },
                    FT: function() {
                        return n
                    },
                    VR: function() {
                        return l
                    }
                }),
                function(e) {
                    e.NONE = "none", e.RED = "red", e.ORANGE = "orange", e.YELLOW = "yellow", e.GREEN = "green", e.BLUE = "blue", e.PURPLE = "purple"
                }(n || (n = {})),
                function(e) {
                    e.TO_DO = "TO_DO", e.ATTEMPTED = "ATTEMPTED", e.PAST_SOLVED = "PAST_SOLVED", e.SOLVED = "SOLVED"
                }(i || (i = {})),
                function(e) {
                    e.NOT_START = "NOT_START", e.ONGOING = "ON_GOING", e.COMPLETED = "COMPLETED", e.QUITTED = "QUITTED", e.DELETED = "DELETED"
                }(l || (l = {}))
        },
        3148: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return o
                }
            });
            var n = r(40473),
                i = r(11288),
                l = r(90074),
                s = r(54845),
                o = function() {
                    var e = (0, n.NL)();
                    return (0, l.Jll)(i.f6, {
                        onSuccess: function(t, r) {
                            var n = r.slug;
                            e.refetchQueries(l.fJ6.getKey({
                                slug: n
                            })), (0, s.I)(e)
                        }
                    })
                }
        },
        98865: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return u
                }
            });
            r(91518), r(62217);
            var n = r(79216),
                i = r(40473),
                l = r(75881),
                s = r(11288),
                o = r(90074),
                a = r(34745),
                c = r(54845),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.onSuccess,
                        r = e.onPlanCompleted,
                        u = (0, n.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }),
                        d = u.t,
                        f = (0, i.NL)(),
                        p = (0, a.pm)(),
                        v = p.toast;
                    return (0, o.Ios)(s.f6, {
                        onSuccess: function(e, n) {
                            var i, s, a = n.titleSlug,
                                u = n.planSlug;
                            null !== (i = e.markSolvedQuestion) && void 0 !== i && i.ok ? ("COMPLETED" === (null === (s = e.markSolvedQuestion) || void 0 === s ? void 0 : s.progressDetail.status) && (f.refetchQueries(o.g6L.getKey({
                                slug: u
                            })), f.refetchQueries(o.wHx.getKey({
                                planSlug: u
                            })), null === r || void 0 === r || r()), (0, c.I)(f), f.setQueryData(o.fJ6.getKey({
                                slug: u
                            }), (function(t) {
                                var r = e.markSolvedQuestion;
                                if (r && r.ok) {
                                    var n = r.progressDetail,
                                        i = n.finishedQuestionNum,
                                        s = n.status,
                                        c = (0, l.Z)(t);
                                    if (null !== c && void 0 !== c && c.studyPlanV2ProgressDetail) return c.studyPlanV2ProgressDetail.finishedQuestionNum = i, c.studyPlanV2ProgressDetail.status = s, c.studyPlanV2ProgressDetail.studyPlanDetail.planSubGroups.forEach((function(e) {
                                        e.questions.forEach((function(e) {
                                            e.titleSlug === a && (e.status = o.i$l.Solved)
                                        }))
                                    })), c
                                }
                            })), null === t || void 0 === t || t()) : v({
                                variant: "error",
                                description: d("errorTip"),
                                duration: 2e3
                            })
                        }
                    })
                }
        },
        7229: function(e, t, r) {
            r.d(t, {
                DT: function() {
                    return a
                },
                MB: function() {
                    return o
                }
            });
            r(52799), r(72029), r(29092), r(17519);
            var n = r(11288),
                i = r(90074),
                l = r(94811),
                s = r(20209),
                o = function(e) {
                    return (0, i.NHc)(n.f6, {
                        slug: e
                    }, {
                        enabled: !!e,
                        select: function(e) {
                            var t, r, n, i, o, a, c, u, d, f, p, v, m, y, x, h, g, j, b, O, w, _, C, P, S, k;
                            return {
                                slug: (null === e || void 0 === e || null === (t = e.studyPlanV2Detail) || void 0 === t ? void 0 : t.slug) || "",
                                title: (null === e || void 0 === e || null === (r = e.studyPlanV2Detail) || void 0 === r ? void 0 : r.name) || "",
                                highlight: (null === e || void 0 === e || null === (n = e.studyPlanV2Detail) || void 0 === n ? void 0 : n.highlight) || "",
                                summary: (null === e || void 0 === e || null === (i = e.studyPlanV2Detail) || void 0 === i ? void 0 : i.description) || "",
                                needShowTags: (null === e || void 0 === e || null === (o = e.studyPlanV2Detail) || void 0 === o ? void 0 : o.needShowTags) || !0,
                                colorPalette: (null === e || void 0 === e || null === (a = e.studyPlanV2Detail) || void 0 === a ? void 0 : a.colorPalette) || s.FT.NONE,
                                cover: (null === e || void 0 === e || null === (c = e.studyPlanV2Detail) || void 0 === c ? void 0 : c.staticCoverPicture) || "",
                                splineUrl: (null === e || void 0 === e || null === (u = e.studyPlanV2Detail) || void 0 === u ? void 0 : u.threeDimensionUrl) || void 0,
                                isPaidOnly: (null === e || void 0 === e || null === (d = e.studyPlanV2Detail) || void 0 === d ? void 0 : d.premiumOnly) || !1,
                                defaultLanguage: (null === e || void 0 === e || null === (f = e.studyPlanV2Detail) || void 0 === f ? void 0 : f.defaultLanguage) || void 0,
                                award: {
                                    title: (null === e || void 0 === e || null === (p = e.studyPlanV2Detail) || void 0 === p || null === (v = p.award) || void 0 === v ? void 0 : v.name) || "",
                                    description: (null === e || void 0 === e || null === (m = e.studyPlanV2Detail) || void 0 === m ? void 0 : m.awardDescription) || "",
                                    img: (null === e || void 0 === e || null === (y = e.studyPlanV2Detail) || void 0 === y || null === (x = y.award) || void 0 === x || null === (h = x.config) || void 0 === h ? void 0 : h.icon) || "",
                                    gif: (null === e || void 0 === e || null === (g = e.studyPlanV2Detail) || void 0 === g || null === (j = g.award) || void 0 === j || null === (b = j.config) || void 0 === b ? void 0 : b.iconGif) || "",
                                    gifBackground: (null === e || void 0 === e || null === (O = e.studyPlanV2Detail) || void 0 === O || null === (w = O.award) || void 0 === w || null === (_ = w.config) || void 0 === _ ? void 0 : _.iconGifBackground) || ""
                                },
                                relatedPlans: null === e || void 0 === e || null === (C = e.studyPlanV2Detail) || void 0 === C || null === (P = C.relatedStudyPlans) || void 0 === P ? void 0 : P.map((function(e) {
                                    return {
                                        slug: e.slug || "",
                                        title: e.name || "",
                                        description: e.highlight || "",
                                        cover: e.cover || "",
                                        isPaidOnly: e.premiumOnly || !1
                                    }
                                })),
                                problemGroupList: (null === e || void 0 === e || null === (S = e.studyPlanV2Detail) || void 0 === S || null === (k = S.planSubGroups) || void 0 === k ? void 0 : k.map((function(e) {
                                    var t;
                                    return {
                                        slug: e.slug || "",
                                        title: e.name || "",
                                        allProblemsAmount: e.questionNum || 0,
                                        isPaidOnly: e.premiumOnly || !1,
                                        problemList: (null === (t = e.questions) || void 0 === t ? void 0 : t.map((function(e) {
                                            var t, r, n, i, o;
                                            return {
                                                slug: e.titleSlug || "",
                                                title: e.title || "",
                                                translatedTitle: e.translatedTitle || "",
                                                questionFrontendId: e.questionFrontendId || "",
                                                questionId: e.questionFrontendId || "",
                                                difficulty: e.difficulty || l.F.Easy,
                                                isPaidOnly: e.paidOnly || !1,
                                                status: s.CV.TO_DO,
                                                tags: (null === (t = e.topicTags) || void 0 === t ? void 0 : t.map((function(e) {
                                                    return {
                                                        name: e.name || "",
                                                        nameTranslated: e.nameTranslated || "",
                                                        slug: e.slug || ""
                                                    }
                                                }))) || [],
                                                solutionInfo: {
                                                    solutionSlug: null !== (r = null === (n = e.solutionInfo) || void 0 === n ? void 0 : n.solutionSlug) && void 0 !== r ? r : void 0,
                                                    solutionTopicId: null !== (i = null === (o = e.solutionInfo) || void 0 === o ? void 0 : o.solutionTopicId) && void 0 !== i ? i : void 0
                                                }
                                            }
                                        }))) || []
                                    }
                                }))) || []
                            }
                        }
                    })
                },
                a = function(e) {
                    var t = e.queryClient,
                        r = e.slug;
                    t.refetchQueries(i.NHc.getKey({
                        slug: r
                    }))
                }
        },
        87320: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return s
                }
            });
            r(17519);
            var n = r(11288),
                i = r(90074),
                l = r(20209),
                s = function(e) {
                    return (0, i.m7T)(n.f6, {
                        slug: e
                    }, {
                        select: function(e) {
                            var t, r;
                            return (null === e || void 0 === e || null === (t = e.studyPlanV2Detail) || void 0 === t || null === (r = t.planSubGroups) || void 0 === r ? void 0 : r.map((function(e) {
                                var t;
                                return {
                                    slug: e.slug || "",
                                    problemStatuses: (null === (t = e.questions) || void 0 === t ? void 0 : t.map((function(e) {
                                        return {
                                            slug: e.titleSlug || "",
                                            status: e.status || l.CV.TO_DO
                                        }
                                    }))) || []
                                }
                            }))) || []
                        }
                    })
                }
        },
        31235: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return o
                },
                y: function() {
                    return s
                }
            });
            r(17519);
            var n = r(11288),
                i = r(90074),
                l = r(20209),
                s = function(e, t) {
                    return (0, i.fJ6)(n.f6, {
                        slug: e,
                        historyId: t
                    }, {
                        select: function(e) {
                            var t, r, n, i, s, o, a, c, u;
                            return {
                                weeklyTaskScheduleResettable: !(null === e || void 0 === e || null === (t = e.studyPlanV2ProgressDetail) || void 0 === t || !t.weeklyTaskScheduleResettable),
                                progressId: (null === e || void 0 === e || null === (r = e.studyPlanV2ProgressDetail) || void 0 === r ? void 0 : r.id) || "",
                                joinStatus: (null === e || void 0 === e || null === (n = e.studyPlanV2ProgressDetail) || void 0 === n ? void 0 : n.status) || l.VR.NOT_START,
                                allProblemsAmount: (null === e || void 0 === e || null === (i = e.studyPlanV2ProgressDetail) || void 0 === i || null === (s = i.studyPlanDetail) || void 0 === s ? void 0 : s.questionNum) || 0,
                                completedProblemsAmount: (null === e || void 0 === e || null === (o = e.studyPlanV2ProgressDetail) || void 0 === o ? void 0 : o.finishedQuestionNum) || 0,
                                problemGroupStatuses: (null === e || void 0 === e || null === (a = e.studyPlanV2ProgressDetail) || void 0 === a || null === (c = a.studyPlanDetail) || void 0 === c || null === (u = c.planSubGroups) || void 0 === u ? void 0 : u.map((function(e) {
                                    var t;
                                    return {
                                        slug: e.slug || "",
                                        problemStatuses: (null === (t = e.questions) || void 0 === t ? void 0 : t.map((function(e) {
                                            return {
                                                slug: e.titleSlug || "",
                                                status: e.status || l.CV.TO_DO
                                            }
                                        }))) || []
                                    }
                                }))) || []
                            }
                        }
                    })
                },
                o = function(e, t) {
                    e.invalidateQueries(i.fJ6.getKey(t))
                }
        },
        36597: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return i
                }
            });
            var n = r(11754),
                i = function(e) {
                    var t = e.gif,
                        r = e.background;
                    return (0, n.jsxs)("div", {
                        className: "relative flex h-[160px] w-[160px] items-center justify-center",
                        children: [!!r && (0, n.jsx)("img", {
                            className: "z-base-negative-1 absolute left-0 top-0 w-full",
                            src: r,
                            alt: ""
                        }), (0, n.jsx)("img", {
                            className: "h-[120px] w-[120px]",
                            src: t,
                            alt: ""
                        })]
                    })
                }
        },
        26197: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return m
                }
            });
            var n = r(57735),
                i = r(79216),
                l = r(64386),
                s = r(44872),
                o = r(41986),
                a = r(40682),
                c = r(54600),
                u = r(40007),
                d = r(82424),
                f = r(47792),
                p = r(36597),
                v = r(11754),
                m = function(e) {
                    var t = e.visible,
                        r = e.planTitle,
                        m = e.badgeGif,
                        y = e.badgeBackground,
                        x = e.onClose,
                        h = e.onConfirm,
                        g = e.isShowInQD,
                        j = (0, i.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }).t,
                        b = (0, i.$G)("common").t,
                        O = (0, a.U)().data,
                        w = null !== O && void 0 !== O && O.userStatus ? (0, d.DU)(null === O || void 0 === O ? void 0 : O.userStatus) : "";
                    return (0, v.jsx)(n.u, {
                        as: l.Fragment,
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        show: t,
                        children: (0, v.jsx)("div", {
                            className: "z-modal-5 fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] px-4",
                            children: (0, v.jsxs)("div", {
                                className: "relative flex flex-col items-center gap-6 px-4",
                                children: [(0, v.jsx)(c.F, {
                                    className: (0, s.yI)(u.xy.labelFixedWhite, "absolute bottom-[100%] right-0 h-6 w-6 cursor-pointer opacity-40"),
                                    onClick: x
                                }), (0, v.jsx)("div", {
                                    className: (0, s.yI)("text-xl font-medium", u.xy.labelFixedWhite),
                                    children: j("congratulation")
                                }), (0, v.jsxs)("div", {
                                    className: (0, s.yI)("flex flex-col items-center gap-1 text-center text-xs", u.xy.labelFixedWhite),
                                    children: [(0, v.jsx)("div", {
                                        children: j("solvedAllProblemsText", {
                                            title: r
                                        })
                                    }), !!m && (0, v.jsxs)("div", {
                                        children: [j("checkBadge"), " ", (0, v.jsx)(o.r, {
                                            href: (0, d.Lw)(w || ""),
                                            className: "text-lc-support-success hover:text-lc-support-success underline hover:underline",
                                            isExternal: !0,
                                            children: j("profilePage")
                                        }), " ", j("wearGlory")]
                                    })]
                                }), !!m && (0, v.jsx)(p.e, {
                                    gif: m,
                                    background: y
                                }), (0, v.jsx)(f.z, {
                                    variant: "success",
                                    onClick: null !== h && void 0 !== h ? h : x,
                                    size: "sm",
                                    className: "rounded-[4px]",
                                    children: g ? j("checkMyStudyPlan") : b("confirm")
                                })]
                            })
                        })
                    })
                }
        },
        38555: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return x
                },
                Y: function() {
                    return y
                }
            });
            r(17519), r(3500);
            var n = r(92369),
                i = r(79216),
                l = r(18854),
                s = r(44872),
                o = r(59787),
                a = r(41986),
                c = r(40682),
                u = r(40007),
                d = r(9416),
                f = r(74945),
                p = r(99024),
                v = r(11754),
                m = function(e) {
                    return o.Hb.premiumDetail({
                        sourceType: "study-plan-new",
                        sourceId: e || ""
                    })
                },
                y = function(e) {
                    var t, r = e.data,
                        o = e.showTags,
                        y = e.isHistoryPlan,
                        x = e.joinStatus,
                        h = e.studyPlanSlug,
                        g = e.historyId,
                        j = e.type,
                        b = void 0 === j ? "spDetail" : j,
                        O = e.onClose,
                        w = e.defaultLanguage,
                        _ = (0, i.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }).t,
                        C = (0, l.useRouter)().query.slug,
                        P = (0, c.U)().data,
                        S = null === P || void 0 === P || null === (t = P.userStatus) || void 0 === t ? void 0 : t.isPremium;
                    return (0, v.jsx)("div", {
                        className: "flex w-full flex-col gap-4",
                        children: null === r || void 0 === r ? void 0 : r.map((function(e) {
                            var t, r = e.isPaidOnly,
                                i = !S && e.isPaidOnly,
                                l = (0, n.Z)(e.allProblemsAmount).slice(0, 3);
                            return (0, v.jsxs)("div", {
                                className: (0, s.yI)("w-full overflow-hidden rounded-lg border-[1.5px]", u.xy.borderFill02),
                                children: [(0, v.jsxs)("div", {
                                    className: (0, s.yI)("flex h-10 items-center justify-between px-4 font-medium", u.xy.labelTextPrimary, r ? u.Cj.bgOrange2 : u.xy.bgFill01),
                                    children: [(0, v.jsxs)("div", {
                                        className: "text-[12px] font-medium",
                                        children: [i && (0, v.jsx)(d.Z, {
                                            className: "mb-1 mr-3.5 inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                                        }), r && S && (0, v.jsx)(f.i, {
                                            className: "mb-1 mr-3.5 inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                                        }), e.title]
                                    }), i && (0, v.jsx)(a.r, {
                                        href: m(null !== h && void 0 !== h ? h : "", e.slug),
                                        children: (0, v.jsx)("span", {
                                            className: (0, s.yI)("cursor-pointer text-[12px] font-medium underline", u.Cj.labelBrandOrange),
                                            children: _("subscribeToUnlock")
                                        })
                                    })]
                                }), i ? (0, v.jsxs)("div", {
                                    className: "relative overflow-hidden",
                                    children: [l.map((function(e, t) {
                                        return (0, v.jsx)(p.Ij, {
                                            className: t === l.length - 1 ? "" : "border-b"
                                        }, e)
                                    })), e.allProblemsAmount > 3 && (0, v.jsx)("div", {
                                        className: (0, s.yI)("absolute bottom-0 h-[160px] w-full blur-md", "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%]", "dark:bg-[linear-gradient(180deg,rgba(26,26,26,0)_0%,#1A1A1A_100%)]")
                                    })]
                                }) : null === (t = e.problemList) || void 0 === t ? void 0 : t.map((function(e) {
                                    return (0, v.jsx)(p.HC, {
                                        id: "qd" === b && e.slug === C ? "activeItem" : "",
                                        data: e,
                                        planSlug: h,
                                        showTags: o,
                                        joinStatus: x,
                                        historyId: g,
                                        className: (0, s.yI)({
                                            "opacity-60": y
                                        }),
                                        type: b,
                                        onDrawerClose: O,
                                        isActive: e.slug === C,
                                        defaultLanguage: w
                                    }, e.slug)
                                }))]
                            }, e.title)
                        }))
                    })
                },
                x = function(e) {
                    var t = e.data,
                        r = e.showTags,
                        n = e.currentQuestionSlug,
                        i = e.onClose;
                    return (0, v.jsx)("div", {
                        className: "flex w-full flex-col gap-4",
                        children: (0, v.jsx)("div", {
                            className: (0, s.yI)("w-full overflow-hidden rounded-lg border-[1.5px]", u.xy.borderFill02),
                            children: null === t || void 0 === t ? void 0 : t.map((function(e) {
                                var t = e.slug;
                                return (0, v.jsx)(p.HC, {
                                    id: t === n ? "activeItem" : "",
                                    data: e,
                                    showTags: r,
                                    type: "qd",
                                    isActive: t === n,
                                    onDrawerClose: i
                                }, e.slug)
                            }))
                        })
                    })
                }
        },
        99024: function(e, t, r) {
            r.d(t, {
                HC: function() {
                    return z
                },
                Ij: function() {
                    return U
                }
            });
            var n = r(4676),
                i = (r(3500), r(17519), r(72029), r(5348), r(2979), r(37872), r(91518), r(29308), r(27115), r(15084), r(72793), r(77495)),
                l = r(79216),
                s = r(64386),
                o = r(18854),
                a = r(63029),
                c = r.n(a),
                u = r(20209),
                d = r(98865),
                f = r(44872),
                p = r(86128),
                v = r(40682),
                m = r(94811),
                y = r(59787),
                x = r(88077),
                h = r(40007),
                g = r(98685),
                j = r(54998),
                b = r(28102),
                O = r(79927),
                w = r(95498),
                _ = (r(78464), r(29092), r(70748), r(96543), r(62217), r(63306), r(11754));

            function C(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var S = s.forwardRef((function(e, t) {
                return (0, _.jsx)("svg", P(P({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, _.jsx)("path", {
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        d: "M12.001 7.972h2.994m-5.989 0h.021m-.021 4.018h.021m-.021 4.018h.021m2.974-4.018h2.994m-2.994 4.018h2.994M7.098 20.98h9.927a2 2 0 002-2V4.78a2 2 0 00-2-2H7.098a2 2 0 00-2 2v14.2a2 2 0 002 2z"
                    })
                }))
            }));

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var V = s.forwardRef((function(e, t) {
                    return (0, _.jsx)("svg", N(N({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, _.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                D = r(79509),
                I = r(39922),
                E = r(74945),
                L = r(9416);

            function F(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var G = s.forwardRef((function(e, t) {
                return (0, _.jsx)("svg", X(X({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, _.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                        clipRule: "evenodd"
                    })
                }))
            }));

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var A = s.forwardRef((function(e, t) {
                    return (0, _.jsx)("svg", Z(Z({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, _.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7 10V8a5 5 0 0110 0v2h1a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6a3 3 0 013-3h1zm2 0h6V8a3 3 0 10-6 0v2zm-3 2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1H6z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                B = r(72102),
                R = r(82833),
                M = r(47792);
            var Q = function(e) {
                    var t = e.className,
                        r = e.children;
                    return (0, _.jsx)("span", {
                        className: (0, f.yI)("inline-flex min-h-[24px] min-w-[24px] max-w-full items-center rounded-full px-2 text-xs", h.xy.bgFill02, h.xy.labelTextPrimary, t),
                        children: r
                    })
                },
                q = function(e) {
                    var t, r, n, i = e.data,
                        s = e.type,
                        o = e.spDetailQueryString,
                        a = (0, l.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }).t,
                        u = "spDetail" === s && !(null === (t = i.solutionInfo) || void 0 === t || !t.solutionTopicId),
                        d = y.Hb.solutionsWithLearningEnvironment(i.slug, o, null === (r = i.solutionInfo) || void 0 === r ? void 0 : r.solutionTopicId, null === (n = i.solutionInfo) || void 0 === n ? void 0 : n.solutionSlug);
                    return u ? (0, _.jsx)(c(), {
                        href: d,
                        passHref: !0,
                        children: (0, _.jsxs)("a", {
                            className: (0, f.yI)("absolute right-[15%] top-0 flex h-[52px] cursor-pointer items-center justify-center overflow-hidden px-2", g.nx.labelTextSecondary, g.rG.labelTextSecondary),
                            onClick: function(e) {
                                return function(e) {
                                    e.stopPropagation(), b.m.spV2SolutionClick({
                                        sp_v_2_solution_link: d
                                    })
                                }(e)
                            },
                            target: "_blank",
                            children: [(0, _.jsx)(S, {
                                className: (0, f.yI)("mr-1 inline-block h-4 w-4 shrink-0 fill-none stroke-current", h.xy.labelIconSecondary)
                            }), (0, _.jsx)("span", {
                                className: "lc-md:flex hidden",
                                children: a("solution")
                            })]
                        })
                    }) : null
                },
                z = function(e) {
                    var t, r, i, a, c, g = e.data,
                        b = e.planSlug,
                        C = e.className,
                        P = e.showTags,
                        S = e.joinStatus,
                        k = e.historyId,
                        N = e.type,
                        F = void 0 === N ? "spDetail" : N,
                        X = e.isActive,
                        G = e.onDrawerClose,
                        T = e.id,
                        Z = void 0 === T ? "" : T,
                        A = e.defaultLanguage,
                        z = (0, o.useRouter)(),
                        U = (0, l.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }).t,
                        H = (0, l.$G)("common").t,
                        J = (0, d.h)().mutate,
                        $ = "qd" === F && X,
                        W = "spDetail" === F ? 3 : 4,
                        K = g.status,
                        Y = g.title,
                        ee = g.difficulty,
                        te = g.slug,
                        re = g.tags,
                        ne = g.translatedTitle,
                        ie = void 0 === ne ? "" : ne,
                        le = g.questionFrontendId,
                        se = (0, v.U)().data,
                        oe = null === se || void 0 === se || null === (t = se.userStatus) || void 0 === t ? void 0 : t.isPremium,
                        ae = null === se || void 0 === se || null === (r = se.userStatus) || void 0 === r ? void 0 : r.useTranslation,
                        ce = (0, s.useMemo)((function() {
                            return g.tags.slice(W).map((function(e) {
                                return ae && e.nameTranslated || e.name
                            })).join(",")
                        }), [g.tags, ae, W]),
                        ue = (0, s.useMemo)((function() {
                            var e = ae && ie || Y;
                            return "qd" === F && (e = "".concat(le, ". ").concat(e)), e
                        }), [ae, le, Y, ie, F]),
                        de = (i = {}, (0, n.Z)(i, m.F.Easy, "text-lc-green-60 dark:text-dark-lc-green-60"), (0, n.Z)(i, m.F.Medium, "text-lc-yellow-60 dark:text-dark-lc-yellow-60"), (0, n.Z)(i, m.F.Hard, "text-lc-red-60 dark:text-dark-lc-red-60"), i),
                        fe = (a = {}, (0, n.Z)(a, u.CV.TO_DO, "todo"), (0, n.Z)(a, u.CV.ATTEMPTED, "attempted"), (0, n.Z)(a, u.CV.SOLVED, "solved"), (0, n.Z)(a, u.CV.PAST_SOLVED, "past solved"), a),
                        pe = re.length > W,
                        ve = S === u.VR.ONGOING,
                        me = S === u.VR.COMPLETED || S === u.VR.QUITTED,
                        ye = (0, s.useState)(!1),
                        xe = ye[0],
                        he = ye[1],
                        ge = (0, j.eb)().queryString,
                        je = new URLSearchParams({
                            envType: x.Zw.StudyPlanV2,
                            envId: b || ""
                        });
                    A && je.append("lang", A), (0, w.Nd)() && je.append("id", b || "");
                    var be = je.toString();
                    return (0, _.jsxs)("div", {
                        className: (0, f.yI)("flex flex-col border-b-[1.5px] duration-300 last:border-b-0", h.xy.borderFill02, C, !me && !X && h.qV.bgFill02, (0, n.Z)({
                            "cursor-pointer": !me
                        }, h.xy.bgFill02, X)),
                        onClick: function() {
                            k || ("spDetail" === F ? window.open("".concat(y.Hb.questionDetailWithLearningEnvironment(te || "", be))) : (z.push(y.Hb.questionDetailWithLearningEnvironment(te || "", ge)), O.d.qdDrawerQuestionClick({
                                qd_question_slug: te
                            }), G && G()))
                        },
                        id: Z,
                        children: [(0, _.jsxs)("div", {
                            className: (0, f.yI)("flex h-[52px] w-full items-center space-x-3 px-4"),
                            children: [(0, _.jsxs)("div", {
                                children: [(0, _.jsx)(B.u, {
                                    placement: "top",
                                    label: U(fe[K]),
                                    children: (0, _.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [K === u.CV.TO_DO && (0, _.jsx)(V, {
                                            className: (0, f.yI)("w-4.5 h-4.5 inline-block shrink-0", h.xy.labelIconTertiary)
                                        }), K === u.CV.ATTEMPTED && (0, _.jsx)(D.V, {
                                            className: "h-4.5 w-4.5 text-lc-yellow-60 dark:text-dark-lc-yellow-60 inline-block shrink-0 fill-none stroke-current"
                                        }), K === u.CV.SOLVED && (0, _.jsx)(I.A, {
                                            className: "h-4.5 w-4.5 text-lc-green-60 dark:text-dark-lc-green-60 inline-block shrink-0 fill-none stroke-current"
                                        })]
                                    })
                                }), K === u.CV.PAST_SOLVED && (ve ? (0, _.jsx)("div", {
                                    onClick: function(e) {
                                        return e.stopPropagation()
                                    },
                                    children: (0, _.jsx)(R.J2, {
                                        trigger: "hover",
                                        open: xe,
                                        onOpenChange: he,
                                        side: "bottom",
                                        align: "start",
                                        className: "w-[320px] rounded-[4px]",
                                        content: (0, _.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0, _.jsx)("div", {
                                                className: (0, f.yI)("text-sm", h.xy.labelTextSecondary),
                                                children: U("markAsSolvedTip")
                                            }), (0, _.jsxs)("div", {
                                                className: "flex justify-end gap-2",
                                                children: [(0, _.jsx)(M.z, {
                                                    size: "xs",
                                                    variant: "secondary",
                                                    className: "rounded-[4px]",
                                                    onClick: function() {
                                                        return he(!1)
                                                    },
                                                    children: H("cancel")
                                                }), (0, _.jsx)(M.z, {
                                                    size: "xs",
                                                    variant: "success",
                                                    className: "rounded-[4px]",
                                                    onClick: function() {
                                                        he(!1), b && ve && J({
                                                            titleSlug: te,
                                                            planSlug: b
                                                        })
                                                    },
                                                    children: U("markAsSolved")
                                                })]
                                            })]
                                        }),
                                        children: (0, _.jsx)("div", {
                                            className: "!ml-0 cursor-pointer text-[0px]",
                                            children: (0, _.jsx)(I.A, {
                                                className: (0, f.yI)("h-4.5 w-4.5 inline-block shrink-0 fill-none stroke-current", h.xy.labelIconSecondary, h.qV.labelIconPrimary)
                                            })
                                        })
                                    })
                                }) : (0, _.jsx)(B.u, {
                                    placement: "top",
                                    label: U("pastSolved"),
                                    children: (0, _.jsx)("div", {
                                        className: "!ml-0 text-[0px]",
                                        children: (0, _.jsx)(I.A, {
                                            className: (0, f.yI)("h-4.5 w-4.5 inline-block shrink-0 fill-none stroke-current", h.xy.labelIconSecondary)
                                        })
                                    })
                                }))]
                            }), (0, _.jsxs)("div", {
                                className: (0, f.yI)("relative flex h-full w-full items-center"),
                                children: [(0, _.jsxs)("div", {
                                    className: " flex w-0 flex-1 items-center space-x-2",
                                    children: [(0, _.jsx)("div", {
                                        className: (0, f.yI)("text-body max-w-[75%] font-medium", (c = {}, (0, n.Z)(c, h.xy.labelSystemPrimary, $), (0, n.Z)(c, h.xy.labelTextPrimary, !$), c)),
                                        children: (0, _.jsx)(p.J, {
                                            title: ue,
                                            children: ue
                                        })
                                    }), g.isPaidOnly && (oe ? (0, _.jsx)(E.i, {
                                        className: "inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                                    }) : (0, _.jsx)(L.Z, {
                                        className: "inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                                    })), (0, _.jsx)(q, {
                                        data: g,
                                        type: F,
                                        spDetailQueryString: be
                                    })]
                                }), (0, _.jsx)("p", {
                                    className: (0, f.yI)("text-[14px]", de[ee]),
                                    children: H("difficulty.".concat(ee.toLocaleLowerCase()))
                                })]
                            })]
                        }), P && (0, _.jsxs)("div", {
                            className: "-mt-2 mb-4 ml-11 space-x-1",
                            children: ["spDetail" === F && (0, _.jsxs)(Q, {
                                children: ["# ", g.questionId]
                            }), g.tags.slice(0, W).map((function(e) {
                                return (0, _.jsx)(Q, {
                                    children: ae ? e.nameTranslated : e.name
                                }, e.slug)
                            })), pe && (0, _.jsx)(B.u, {
                                placement: "top",
                                label: ce,
                                children: (0, _.jsx)("span", {
                                    children: (0, _.jsxs)(Q, {
                                        children: [g.tags.length - W, "+"]
                                    })
                                })
                            })]
                        })]
                    })
                },
                U = function(e) {
                    var t = e.className,
                        r = (0, s.useMemo)((function() {
                            return (0, i.Z)(60, 160)
                        }), []);
                    return (0, _.jsxs)("div", {
                        className: (0, f.yI)("flex h-[52px] w-full items-center justify-between space-x-3 px-4", h.xy.borderFill02, t),
                        children: [(0, _.jsxs)("div", {
                            className: "flex w-0 flex-1 space-x-3",
                            children: [(0, _.jsx)("div", {
                                className: "flex items-center",
                                children: (0, _.jsx)(G, {
                                    className: (0, f.yI)("w-4.5 h-4.5 inline-block shrink-0", h.xy.labelIconTertiary)
                                })
                            }), (0, _.jsx)("div", {
                                className: (0, f.yI)("h-4 rounded-[4px]", h.xy.bgFill02),
                                style: {
                                    width: "".concat(r, "px")
                                }
                            })]
                        }), (0, _.jsx)("div", {
                            children: (0, _.jsx)(A, {
                                className: (0, f.yI)("w-4.5 h-4.5 inline-block shrink-0", h.xy.labelIconTertiary)
                            })
                        })]
                    })
                }
        },
        59596: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return u
                },
                f: function() {
                    return d
                }
            });
            r(52799), r(7502), r(29092), r(64386);
            var n = r(79216),
                i = r(40007),
                l = r(44872),
                s = r(86128),
                o = r(72102),
                a = r(16183),
                c = r(11754),
                u = function(e) {
                    var t = e.current,
                        r = e.total,
                        n = e.badge,
                        s = e.isHistoryPlan,
                        u = t / r * 100;
                    return (0, c.jsxs)("div", {
                        className: (0, l.yI)("lc-lg:w-auto lc-lg:px-0 mt-5 flex w-full max-w-[600px] items-center gap-3 px-12"),
                        children: [(0, c.jsx)(o.u, {
                            placement: "top",
                            label: "".concat(u.toFixed(0), "%"),
                            children: (0, c.jsx)("div", {
                                className: (0, l.yI)("lc-lg:w-[240px] w-full cursor-pointer"),
                                children: (0, c.jsx)(a.E, {
                                    className: (0, l.yI)("h-2 w-full", i.xy.bgFill03),
                                    barClassName: "bg-[linear-gradient(90deg,#007AFF_0%,#75B7FF_100%)]",
                                    value: u
                                })
                            })
                        }), (0, c.jsxs)("div", {
                            className: (0, l.yI)("flex gap-1 text-base", !s && t < r ? i.xy.labelTextTertiary : i.xy.labelTextPrimary),
                            children: [(0, c.jsx)("div", {
                                className: (0, l.yI)("font-medium", i.xy.labelTextPrimary),
                                children: t
                            }), (0, c.jsx)("div", {
                                children: "/"
                            }), (0, c.jsx)("div", {
                                children: r
                            })]
                        }), n && (0, c.jsx)("img", {
                            className: (0, l.yI)("h-6", {
                                "opacity-40": t < r
                            }),
                            src: n,
                            alt: ""
                        })]
                    })
                },
                d = function(e) {
                    var t = e.current,
                        r = e.total,
                        u = e.badge,
                        d = e.title,
                        f = e.description,
                        p = (0, n.$G)("new-study-plan", {
                            keyPrefix: "common"
                        }).t,
                        v = t / r * 100;
                    return (0, c.jsxs)("div", {
                        className: (0, l.yI)("mb-[18px] flex items-center gap-3"),
                        children: [u && (0, c.jsx)("img", {
                            className: (0, l.yI)("h-12", {
                                "opacity-40": t < r
                            }),
                            src: u,
                            alt: ""
                        }), 0 === r ? (0, c.jsxs)("div", {
                            className: "flex flex-1 flex-col items-start gap-1 overflow-hidden",
                            children: [(0, c.jsx)("div", {
                                className: (0, l.yI)("flex w-full items-center gap-1", i.xy.labelSupportSuccess),
                                children: (0, c.jsx)(s.J, {
                                    className: (0, l.yI)("text-sm font-medium", i.xy.labelTextPrimary),
                                    title: d,
                                    children: d
                                })
                            }), (0, c.jsx)("div", {
                                className: (0, l.yI)("text-xs", i.xy.labelTextTertiary),
                                children: f
                            })]
                        }) : (0, c.jsxs)("div", {
                            className: "pt-1",
                            children: [(0, c.jsx)("div", {
                                className: (0, l.yI)("mb-2 text-[16px] font-medium", i.xy.labelTextPrimary),
                                children: p("totalProgress")
                            }), (0, c.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, c.jsx)(o.u, {
                                    placement: "top",
                                    label: "".concat(v.toFixed(0), "%"),
                                    children: (0, c.jsx)("div", {
                                        className: (0, l.yI)("w-[200px] cursor-pointer"),
                                        children: (0, c.jsx)(a.E, {
                                            className: (0, l.yI)("h-2 w-full", i.xy.bgFill03),
                                            barClassName: "bg-[linear-gradient(90deg,#007AFF_0%,#75B7FF_100%)]",
                                            value: v
                                        })
                                    })
                                }), (0, c.jsxs)("div", {
                                    className: (0, l.yI)("ml-3 flex gap-1 text-base", t < r ? i.xy.labelTextTertiary : i.xy.labelTextPrimary),
                                    children: [(0, c.jsx)("div", {
                                        className: (0, l.yI)("font-medium", i.xy.labelTextPrimary),
                                        children: t
                                    }), (0, c.jsx)("div", {
                                        children: "/"
                                    }), (0, c.jsx)("div", {
                                        children: r
                                    })]
                                })]
                            })]
                        })]
                    })
                }
        },
        55483: function(e, t, r) {
            r.d(t, {
                AM: function() {
                    return s
                },
                Ni: function() {
                    return a
                },
                Sm: function() {
                    return c
                },
                jQ: function() {
                    return o
                },
                yf: function() {
                    return l
                },
                zE: function() {
                    return u
                }
            });
            var n = r(57027),
                i = r(28102),
                l = function(e) {
                    n.Z.report({
                        event_key: "sp_detail_view",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2DetailViewExposure({
                        sp_v_2_plan_slug: e
                    })
                },
                s = function(e) {
                    n.Z.report({
                        event_key: "sp_detail_start_click",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2DetailStartClick({
                        sp_v_2_plan_slug: e
                    })
                },
                o = function(e) {
                    n.Z.report({
                        event_key: "sp_detail_share_click",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2DetailShareClick({
                        sp_v_2_plan_slug: e
                    })
                },
                a = function(e) {
                    n.Z.report({
                        event_key: "sp_detail_tag_click",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2DetailTagClick({
                        sp_v_2_plan_slug: e
                    })
                },
                c = function(e) {
                    n.Z.report({
                        event_key: "sp_detail_related_click",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2DetailRelatedClick({
                        sp_v_2_plan_slug: e
                    })
                },
                u = function(e) {
                    n.Z.report({
                        event_key: "premium_sp_coversion_click",
                        extra: JSON.stringify({
                            planSlug: e
                        })
                    }), i.m.spV2PremiumSpCoversionClick({
                        sp_v_2_plan_slug: e
                    })
                }
        },
        58731: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return s
                }
            });
            r(37872), r(91518), r(29308), r(27115), r(15084), r(66128), r(94546), r(87621), r(51506);
            var n = r(64386),
                i = r(88077),
                l = r(59006),
                s = function() {
                    var e, t = (0, n.useMemo)((function() {
                            return new URLSearchParams(window.location.search)
                        }), []),
                        r = null !== (e = null === t || void 0 === t ? void 0 : t.get("envType")) && void 0 !== e ? e : "";
                    return (0, n.useMemo)((function() {
                        return (0, l.jU)() ? r === i.Zw.StudyPlan ? i.Zw.StudyPlan : r === i.Zw.StudyPlanV2 ? i.Zw.StudyPlanV2 : r === i.Zw.List ? i.Zw.List : r === i.Zw.FeaturedList ? i.Zw.FeaturedList : r === i.Zw.DailyQuestion ? i.Zw.DailyQuestion : document.referrer.includes("/contest/") ? i.Zw.Contest : document.referrer.includes("/company/") ? i.Zw.Company : document.referrer.includes("/tag/") ? i.Zw.Tag : document.referrer.includes("/problemset/") ? i.Zw.Problemset : i.Zw.Default : i.Zw.Default
                    }), [r])
                }
        },
        54998: function(e, t, r) {
            r.d(t, {
                eb: function() {
                    return y
                }
            });
            var n = r(4676),
                i = r(59679),
                l = (r(66128), r(76361), r(37872), r(91518), r(29308), r(27115), r(15084), r(94546), r(72793), r(78464), r(29092), r(70748), r(96543), r(62217), r(63306), r(72150)),
                s = r(7221),
                o = r(18854),
                a = r(64386),
                c = r(88077),
                u = r(58731);

            function d(e, t) {
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
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var p = function() {
                    var e, t = document.referrer.split("?");
                    return (null === (e = (0, i.Z)(t, 1)[0].match(/\/company\/((\w|-)+)\/problemset\//)) || void 0 === e ? void 0 : e[1]) || ""
                },
                v = function() {
                    var e, t, r, n, o, a = document.referrer.split("?"),
                        c = (0, i.Z)(a, 2),
                        u = c[0],
                        d = c[1],
                        f = new URLSearchParams(d),
                        p = f.get("sorting") ? (0, l.Jx)(f.get("sorting")) : null,
                        v = JSON.parse(null !== p && void 0 !== p ? p : "[]"),
                        m = {
                            orderBy: null === (e = v[0]) || void 0 === e ? void 0 : e.orderBy,
                            sortOrder: null === (t = v[0]) || void 0 === t ? void 0 : t.sortOrder,
                            difficulty: f.get("difficulty"),
                            status: f.get("status"),
                            tags: null === (r = f.get("topicSlugs")) || void 0 === r ? void 0 : r.split(","),
                            companies: null === (n = f.get("companySlugs")) || void 0 === n ? void 0 : n.split(","),
                            searchKeywords: f.get("search"),
                            listId: f.get("listId"),
                            premiumOnly: f.get("premium")
                        };
                    return {
                        categorySlug: null === (o = u.match(/\/problemset\/(?!all)(\w+)\//)) || void 0 === o ? void 0 : o[1],
                        filters: (0, s.Z)(m, (function(e) {
                            return void 0 === e || null === e
                        })),
                        envId: f.get("envId") || "",
                        envType: f.get("envType") || ""
                    }
                },
                m = function() {
                    var e, t = document.referrer.split("?"),
                        r = (0, i.Z)(t, 2),
                        n = r[0],
                        l = r[1],
                        o = new URLSearchParams(l),
                        a = o.get("difficulty"),
                        c = {
                            difficulty: a && a.toUpperCase(),
                            status: o.get("status"),
                            premiumOnly: o.get("premiumOnly")
                        };
                    return {
                        envId: (null === (e = n.match(/\/tag\/((\w|-)+)\//)) || void 0 === e ? void 0 : e[1]) || "",
                        filters: (0, s.Z)(c, (function(e) {
                            return void 0 === e || null === e
                        }))
                    }
                },
                y = function() {
                    var e, t, r, n = (0, o.useRouter)().query.slug,
                        l = (0, u.L)(),
                        s = (0, a.useMemo)((function() {
                            return new URLSearchParams(window.location.search)
                        }), []),
                        d = null !== (e = null === s || void 0 === s ? void 0 : s.get("envType")) && void 0 !== e ? e : "",
                        y = null !== (t = null === s || void 0 === s ? void 0 : s.get("envId")) && void 0 !== t ? t : "",
                        x = null !== (r = null === s || void 0 === s ? void 0 : s.toString()) && void 0 !== r ? r : "";
                    if (l === c.Zw.StudyPlan || l === c.Zw.StudyPlanV2 || l === c.Zw.List || l === c.Zw.FeaturedList || l === c.Zw.DailyQuestion) return {
                        params: {
                            envType: d,
                            envId: y,
                            currentQuestionSlug: n
                        },
                        queryString: x
                    };
                    if (l === c.Zw.Company) {
                        var h = p();
                        return {
                            params: {
                                envType: c.Zw.Company,
                                envId: h,
                                currentQuestionSlug: n
                            },
                            queryString: x
                        }
                    }
                    if (l === c.Zw.Tag) return {
                        params: f({
                            envType: c.Zw.Tag,
                            currentQuestionSlug: n
                        }, m()),
                        queryString: x
                    };
                    if (l === c.Zw.Contest) {
                        var g = function() {
                            var e, t = document.referrer.split("?");
                            return (null === (e = (0, i.Z)(t, 1)[0].match(/\/contest\/((\w|-)+)/)) || void 0 === e ? void 0 : e[1]) || ""
                        }();
                        return {
                            params: {
                                envType: c.Zw.Contest,
                                envId: g,
                                currentQuestionSlug: n
                            },
                            queryString: x
                        }
                    }
                    return l === c.Zw.Problemset ? {
                        params: f(f({
                            currentQuestionSlug: n
                        }, v()), {}, {
                            envType: c.Zw.Problemset
                        }),
                        queryString: x
                    } : {
                        params: {
                            envType: "",
                            envId: "",
                            currentQuestionSlug: n
                        },
                        queryString: ""
                    }
                }
        },
        29063: function(e, t, r) {
            r.d(t, {
                _T: function() {
                    return S
                },
                aR: function() {
                    return _
                },
                f$: function() {
                    return I
                },
                fY: function() {
                    return k
                },
                xo: function() {
                    return N
                },
                yT: function() {
                    return E
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(7831),
                l = (r(82544), r(64386)),
                s = r(52870),
                o = r(38366),
                a = r(1980),
                c = r(44872),
                u = r(47792),
                d = r(11754),
                f = ["variant", "children"],
                p = ["className"],
                v = ["className", "overlayClassName"],
                m = ["className"],
                y = ["className"],
                x = ["className", "children"],
                h = ["className"],
                g = ["className"],
                j = ["className"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var w = l.createContext("default"),
                _ = function(e) {
                    var t = e.variant,
                        r = void 0 === t ? "default" : t,
                        n = e.children,
                        l = (0, i.Z)(e, f);
                    return (0, d.jsx)(w.Provider, {
                        value: r,
                        children: (0, d.jsx)(s.fC, O(O({}, l), {}, {
                            children: n
                        }))
                    })
                },
                C = (s.xz, function(e) {
                    var t = Object.assign({}, e);
                    return (0, d.jsx)(s.h_, O({}, t))
                });
            C.displayName = s.h_.displayName;
            var P = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, p);
                return (0, d.jsx)(s.aV, O(O({
                    className: (0, c.yI)("bg-sd-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-modal fixed inset-0 backdrop-blur-sm", r)
                }, n), {}, {
                    ref: t
                }))
            }));
            P.displayName = s.aV.displayName;
            var S = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = e.overlayClassName,
                    l = (0, i.Z)(e, v);
                return (0, d.jsxs)(C, {
                    children: [(0, d.jsx)(P, {
                        className: n
                    }), (0, d.jsx)(s.VY, O({
                        ref: t,
                        className: (0, c.yI)("bg-sd-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sd-sm:rounded-sd-lg sd-md:w-full shadow-sd-lg border-sd-border z-modal animate-duration-200 fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 duration-200", r)
                    }, l))]
                })
            }));
            S.displayName = s.VY.displayName;
            var k = function(e) {
                var t = e.className,
                    r = (0, i.Z)(e, m);
                return (0, d.jsx)("div", O({
                    className: (0, c.yI)("sd-sm:text-left flex flex-col space-y-2 text-center", t)
                }, r))
            };
            k.displayName = "AlertDialogHeader";
            var N = function(e) {
                var t = e.className,
                    r = (0, i.Z)(e, y);
                return (0, d.jsx)("div", O({
                    className: (0, c.yI)("sd-sm:flex-row sd-sm:justify-end sd-sm:space-x-2 flex flex-col-reverse", t)
                }, r))
            };
            N.displayName = "AlertDialogFooter";
            var V = {
                    default: null,
                    danger: a.xHz,
                    warning: a.xHz,
                    info: a.DBf,
                    success: a.fV7
                },
                D = function(e) {
                    var t = e.variant;
                    return "default" === t ? null : (0, d.jsx)(o.G, {
                        icon: V[t],
                        className: "h-6 w-6",
                        style: {
                            "--fa-primary-color": "hsl(var(--sd-fixed-white))",
                            "--fa-secondary-color": "hsl(var(--sd-".concat(t, "))"),
                            "--fa-secondary-opacity": 1
                        }
                    })
                },
                I = l.forwardRef((function(e, t) {
                    var r = e.className,
                        n = e.children,
                        o = (0, i.Z)(e, x),
                        a = l.useContext(w);
                    return (0, d.jsxs)(s.Dx, O(O({
                        ref: t,
                        className: (0, c.yI)("flex items-center gap-3 text-lg font-semibold", r)
                    }, o), {}, {
                        children: [(0, d.jsx)(D, {
                            variant: a
                        }), n]
                    }))
                }));
            I.displayName = s.Dx.displayName;
            var E = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, h),
                    o = l.useContext(w);
                return (0, d.jsx)(s.dk, O({
                    ref: t,
                    className: (0, c.yI)("text-sd-muted-foreground text-sm", {
                        "pl-9": "default" !== o
                    }, r)
                }, n))
            }));
            E.displayName = s.dk.displayName, l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, g),
                    o = l.useContext(w);
                return (0, d.jsx)(s.aU, O({
                    ref: t,
                    className: (0, c.yI)((0, u.d)({
                        variant: o
                    }), r)
                }, n))
            })).displayName = s.aU.displayName, l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, j);
                return (0, d.jsx)(s.$j, O({
                    ref: t,
                    className: (0, c.yI)((0, u.d)({
                        variant: "outline"
                    }), "sd-sm:mt-0 mt-2", r)
                }, n))
            })).displayName = s.$j.displayName
        },
        47792: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return v
                },
                z: function() {
                    return m
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(7831),
                l = r(64386),
                s = r(97772),
                o = r(16951),
                a = r(44872),
                c = r(11754),
                u = ["className", "variant", "size", "onlyIcon", "asChild", "isLoading", "children"];

            function d(e, t) {
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
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var p = function() {
                    return (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        className: "animate-spin",
                        children: (0, c.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                            clipRule: "evenodd"
                        })
                    })
                },
                v = (0, o.j)("relative inline-flex items-center justify-center rounded-sd-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sd-ring disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-sd-primary text-sd-primary-foreground shadow-sd hover:bg-sd-primary/90",
                            outline: "border border-sd-input bg-transparent shadow-sm hover:bg-sd-accent text-sd-foreground hover:text-sd-accent-foreground",
                            secondary: "bg-sd-secondary text-sd-secondary-foreground shadow-sm hover:bg-sd-secondary/80",
                            ghost: "text-sd-foreground hover:bg-sd-accent hover:text-sd-accent-foreground",
                            link: "text-sd-primary underline-offset-4 hover:underline",
                            danger: "bg-sd-danger text-sd-fixed-white shadow-sm hover:bg-sd-danger/80",
                            warning: "bg-sd-warning text-sd-fixed-white shadow-sm hover:bg-sd-warning/80",
                            info: "bg-sd-info text-sd-fixed-white shadow-sm hover:bg-sd-info/80",
                            success: "bg-sd-success text-sd-fixed-white shadow-sm hover:bg-sd-success/80"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            xs: "h-7 rounded-sd-md px-2 text-xs",
                            sm: "h-8 rounded-sd-md px-3 text-sm",
                            lg: "h-10 rounded-sd-md px-8"
                        },
                        onlyIcon: {
                            true: "p-0",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        size: "xs",
                        onlyIcon: !0,
                        class: "h-7 w-7"
                    }, {
                        size: "sm",
                        onlyIcon: !0,
                        class: "h-8 w-8"
                    }, {
                        size: "default",
                        onlyIcon: !0,
                        class: "h-9 w-9"
                    }, {
                        size: "lg",
                        onlyIcon: !0,
                        class: "h-10 w-10"
                    }],
                    defaultVariants: {
                        variant: "default",
                        size: "default",
                        onlyIcon: !1
                    }
                }),
                m = l.forwardRef((function(e, t) {
                    var r = e.className,
                        n = e.variant,
                        l = e.size,
                        o = e.onlyIcon,
                        d = e.asChild,
                        m = void 0 !== d && d,
                        y = e.isLoading,
                        x = e.children,
                        h = (0, i.Z)(e, u),
                        g = m ? s.g7 : "button";
                    return (0, c.jsx)(g, f(f({
                        className: (0, a.yI)(v({
                            variant: n,
                            size: l,
                            onlyIcon: o,
                            className: r
                        })),
                        ref: t
                    }, h), {}, {
                        disabled: y || h.disabled,
                        children: y ? (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)("span", {
                                className: "opacity-0",
                                children: x
                            }), (0, c.jsx)("div", {
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: (0, c.jsx)(p, {})
                            })]
                        }) : x
                    }))
                }));
            m.displayName = "Button"
        },
        70684: function(e, t, r) {
            r.d(t, {
                $N: function() {
                    return _
                },
                Vq: function() {
                    return h
                },
                cN: function() {
                    return w
                },
                cZ: function() {
                    return b
                },
                fK: function() {
                    return O
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(7831),
                i = r(4676),
                l = (r(82544), r(64386)),
                s = r(91198),
                o = r(68715),
                a = r(44872),
                c = r(11754),
                u = ["className"],
                d = ["className", "overlayClassName", "children"],
                f = ["className"],
                p = ["className"],
                v = ["className"],
                m = ["className"];

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = s.fC,
                g = (s.xz, function(e) {
                    var t = Object.assign({}, e);
                    return (0, c.jsx)(s.h_, x({}, t))
                });
            g.displayName = s.h_.displayName;
            var j = l.forwardRef((function(e, t) {
                var r = e.className,
                    i = (0, n.Z)(e, u);
                return (0, c.jsx)(s.aV, x({
                    ref: t,
                    className: (0, a.yI)("bg-sd-background/80 z-modal fixed inset-0 backdrop-blur-sm", "data-[state=open]:animate-from-to data-[state=open]:fade-from-0 data-[state=open]:fade-to-1", "data-[state=closed]:animate-out data-[state=closed]:fade-out-0", r)
                }, i))
            }));
            j.displayName = s.aV.displayName;
            var b = l.forwardRef((function(e, t) {
                var r = e.className,
                    i = e.overlayClassName,
                    l = e.children,
                    u = (0, n.Z)(e, d);
                return (0, c.jsxs)(g, {
                    children: [(0, c.jsx)(j, {
                        className: i
                    }), (0, c.jsxs)(s.VY, x(x({
                        ref: t,
                        className: (0, a.yI)("bg-sd-card text-sd-card-foreground sd-sm:rounded-sd-lg sd-md:w-full shadow-sd-lg border-sd-border z-modal fixed grid w-full max-w-lg gap-4 border p-6 duration-200", "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]", "animate-duration-200", "data-[state=open]:animate-from-to data-[state=open]:fade-from-0 data-[state=open]:fade-to-1 data-[state=open]:zoom-from-95 data-[state=open]:zoom-to-100", "data-[state=open]:slide-from-left-1/2 data-[state=open]:slide-from-top-[48%] data-[state=open]:slide-to-left-1/2 data-[state=open]:slide-to-top-1/2", "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]", r)
                    }, u), {}, {
                        children: [l, (0, c.jsxs)(s.x8, {
                            className: "ring-offset-sd-background focus:ring-sd-ring data-[state=open]:bg-sd-accent data-[state=open]:text-sd-muted-foreground rounded-sd-sm absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
                            children: [(0, c.jsx)(o.Pxu, {
                                className: "h-4 w-4"
                            }), (0, c.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    }))]
                })
            }));
            b.displayName = s.VY.displayName;
            var O = function(e) {
                var t = e.className,
                    r = (0, n.Z)(e, f);
                return (0, c.jsx)("div", x({
                    className: (0, a.yI)("sd-sm:text-left flex flex-col space-y-1.5 text-center", t)
                }, r))
            };
            O.displayName = "DialogHeader";
            var w = function(e) {
                var t = e.className,
                    r = (0, n.Z)(e, p);
                return (0, c.jsx)("div", x({
                    className: (0, a.yI)("sd-sm:flex-row sd-sm:justify-end sd-sm:space-x-2 flex flex-col-reverse", t)
                }, r))
            };
            w.displayName = "DialogFooter";
            var _ = l.forwardRef((function(e, t) {
                var r = e.className,
                    i = (0, n.Z)(e, v);
                return (0, c.jsx)(s.Dx, x({
                    ref: t,
                    className: (0, a.yI)("text-lg font-semibold leading-none tracking-tight", r)
                }, i))
            }));
            _.displayName = s.Dx.displayName, l.forwardRef((function(e, t) {
                var r = e.className,
                    i = (0, n.Z)(e, m);
                return (0, c.jsx)(s.dk, x({
                    ref: t,
                    className: (0, a.yI)("text-sd-muted-foreground text-sm", r)
                }, i))
            })).displayName = s.dk.displayName
        },
        16183: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return f
                }
            });
            r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306);
            var n = r(4676),
                i = r(7831),
                l = r(64386),
                s = r(68535),
                o = r(44872),
                a = r(11754),
                c = ["className", "barClassName", "value"];

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var f = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = e.barClassName,
                    l = e.value,
                    u = (0, i.Z)(e, c);
                return (0, a.jsx)(s.fC, d(d({
                    ref: t,
                    className: (0, o.yI)("bg-sd-primary/20 relative h-2 w-full overflow-hidden rounded-full", r)
                }, u), {}, {
                    children: (0, a.jsx)(s.z$, {
                        className: (0, o.yI)("bg-sd-primary h-full flex-1 rounded-full transition-all", n),
                        style: {
                            width: "".concat(l, "%")
                        }
                    })
                }))
            }));
            f.displayName = s.fC.displayName
        },
        94811: function(e, t, r) {
            var n, i;
            r.d(t, {
                    F: function() {
                        return n
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(n || (n = {})),
                function(e) {
                    e.Mon = "monday", e.Tue = "tuesday", e.Wed = "wednesday", e.Thu = "thursday", e.Fri = "friday", e.Sat = "saturday", e.Sun = "sunday"
                }(i || (i = {}))
        },
        35067: function(e, t, r) {
            r.d(t, {
                g: function() {
                    return i
                }
            });
            var n, i, l = r(4676);
            r(2979), r(78464), r(29092), r(70748), r(91518), r(96543), r(62217), r(63306), r(82205);
            ! function(e) {
                e.Home = "home", e.QuestionList = "ql", e.QuestionDetail = "qd", e.Explore = "ex", e.Discussion = "ds", e.Contest = "co", e.Assessment = "as", e.StudyPlan = "sp", e.Others = "ot"
            }(i || (i = {}));
            var s = "nav-premium",
                o = "nav-shop-premium",
                a = "navbar-dropdown-context",
                c = "study-plan-card";
            i.Home, i.QuestionList, i.QuestionDetail, i.Explore, i.Discussion, i.Contest, i.Assessment, i.StudyPlan, i.Others, n = {}, (0, l.Z)(n, s, "lp_pl"), (0, l.Z)(n, o, "nb_npl"), (0, l.Z)(n, a, "um_pl"), (0, l.Z)(n, c, "sp_cd")
        },
        28102: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return l
                }
            });
            var n = r(77527),
                i = r(27654),
                l = {
                    spV2MyPlanViewExposure: function() {
                        var e = {
                            key: "sp_v_2_my_plan_view_exposure",
                            data: {}
                        };
                        n.V[i.X.GIO](e), n.V[i.X.GA4](e), n.V[i.X.CONSOLE](e), n.V[i.X.SELF_DB](e)
                    },
                    spV2DetailViewExposure: function(e) {
                        var t = {
                            key: "sp_v_2_detail_view_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2DetailStartClick: function(e) {
                        var t = {
                            key: "sp_v_2_detail_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ListViewExposure: function() {
                        var e = {
                            key: "sp_v_2_list_view_exposure",
                            data: {}
                        };
                        n.V[i.X.GIO](e), n.V[i.X.GA4](e), n.V[i.X.CONSOLE](e), n.V[i.X.SELF_DB](e)
                    },
                    spV2ListOngoingClick: function(e) {
                        var t = {
                            key: "sp_v_2_list_ongoing_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ListGroupClick: function(e) {
                        var t = {
                            key: "sp_v_2_list_group_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ListFeatureClick: function(e) {
                        var t = {
                            key: "sp_v_2_list_feature_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ListMyspClick: function(e) {
                        var t = {
                            key: "sp_v_2_list_mysp_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ListRevertClick: function(e) {
                        var t = {
                            key: "sp_v_2_list_revert_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetAdClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_ad_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetTopCardClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_top_card_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetTopCardDescClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_top_card_desc_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetSeeMoreClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_see_more_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetPopoverTryNowClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_popover_try_now_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsetPopoverCancelClick: function(e) {
                        var t = {
                            key: "sp_v_2_problemset_popover_cancel_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2MyPlanOngoingClick: function(e) {
                        var t = {
                            key: "sp_v_2_my_plan_ongoing_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2MyPlanHistoryClick: function(e) {
                        var t = {
                            key: "sp_v_2_my_plan_history_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2QdPanelClick: function(e) {
                        var t = {
                            key: "sp_v_2_qd_panel_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2QdPpTagClick: function(e) {
                        var t = {
                            key: "sp_v_2_qd_pp_tag_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2DetailShareClick: function(e) {
                        var t = {
                            key: "sp_v_2_detail_share_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2DetailTagClick: function(e) {
                        var t = {
                            key: "sp_v_2_detail_tag_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2DetailRelatedClick: function(e) {
                        var t = {
                            key: "sp_v_2_detail_related_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2PremiumSpCoversionClick: function(e) {
                        var t = {
                            key: "sp_v_2_premium_sp_coversion_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2PremiumSpGroupCoversionClick: function(e) {
                        var t = {
                            key: "sp_v_2_premium_sp_group_coversion_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsRpQdClick: function(e) {
                        var t = {
                            key: "sp_v_2_problems_rp_qd_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ProblemsRpSpdetialClick: function(e) {
                        var t = {
                            key: "sp_v_2_problems_rp_spdetial_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2PlanSettingExposure: function(e) {
                        var t = {
                            key: "sp_v_2_plan_setting_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2PlanSettingCloseClick: function(e) {
                        var t = {
                            key: "sp_v_2_plan_setting_close_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2PlanSettingStartClick: function(e) {
                        var t = {
                            key: "sp_v_2_plan_setting_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ConfirmPlanExposure: function(e) {
                        var t = {
                            key: "sp_v_2_confirm_plan_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ConfirmPlanModifyClick: function(e) {
                        var t = {
                            key: "sp_v_2_confirm_plan_modify_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2ConfirmPlanStartClick: function(e) {
                        var t = {
                            key: "sp_v_2_confirm_plan_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2CalendarExposure: function(e) {
                        var t = {
                            key: "sp_v_2_calendar_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2CalendarFlipPageClick: function(e) {
                        var t = {
                            key: "sp_v_2_calendar_flip_page_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2CalendarDateClick: function(e) {
                        var t = {
                            key: "sp_v_2_calendar_date_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2WeeklyRankingExposure: function(e) {
                        var t = {
                            key: "sp_v_2_weekly_ranking_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2WeeklyRankingUserClick: function(e) {
                        var t = {
                            key: "sp_v_2_weekly_ranking_user_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    },
                    spV2SolutionClick: function(e) {
                        var t = {
                            key: "sp_v_2_solution_click",
                            data: e
                        };
                        n.V[i.X.GIO](t), n.V[i.X.GA4](t), n.V[i.X.CONSOLE](t), n.V[i.X.SELF_DB](t)
                    }
                }
        }
    }
]);