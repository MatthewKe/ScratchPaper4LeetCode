(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7865], {
        73840: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSP: function() {
                    return f
                },
                default: function() {
                    return a
                }
            });
            var n = t(4676),
                c = (t(66128), t(94546), t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306), t(64386)),
                o = t(8740);

            function i(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function u(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? i(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var f = !0;

            function a(e) {
                var r = e.iframe;
                return (0, c.useEffect)((function() {
                    if (r) {
                        var e = (0, o.parse)(window.parent.location.search, {
                            ignoreQueryPrefix: !0
                        });
                        window.parent.location.href = "https://leetcode.cn/pay-redirect/?".concat((0, o.stringify)(u({}, e)))
                    } else {
                        var t = (0, o.parse)(window.location.search, {
                            ignoreQueryPrefix: !0
                        });
                        window.location.href = "https://leetcode.cn/pay-redirect/?".concat((0, o.stringify)(u({}, t)))
                    }
                }), [r]), null
            }
        },
        88317: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/premium-detail", function() {
                return t(73840)
            }])
        },
        24654: function() {}
    },
    function(e) {
        var r = function(r) {
            return e(e.s = r)
        };
        e.O(0, [8740, 9774, 2888, 179], (function() {
            return r(80023), r(88317)
        }));
        var t = e.O();
        _N_E = t
    }
]);