(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [906], {
        31628: function(t, i, s) {
            var e = s(25806),
                n = s(82170).values;
            e({
                target: "Object",
                stat: !0
            }, {
                values: function(t) {
                    return n(t)
                }
            })
        },
        25768: function(t) {
            "use strict";
            var i = "%[a-f0-9]{2}",
                s = new RegExp("(" + i + ")|([^%]+?)", "gi"),
                e = new RegExp("(" + i + ")+", "gi");

            function n(t, i) {
                try {
                    return [decodeURIComponent(t.join(""))]
                } catch (o) {}
                if (1 === t.length) return t;
                i = i || 1;
                var s = t.slice(0, i),
                    e = t.slice(i);
                return Array.prototype.concat.call([], n(s), n(e))
            }

            function o(t) {
                try {
                    return decodeURIComponent(t)
                } catch (o) {
                    for (var i = t.match(s) || [], e = 1; e < i.length; e++) i = (t = n(i, e).join("")).match(s) || [];
                    return t
                }
            }
            t.exports = function(t) {
                if ("string" !== typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                } catch (i) {
                    return function(t) {
                        for (var s = {
                                "%FE%FF": "\ufffd\ufffd",
                                "%FF%FE": "\ufffd\ufffd"
                            }, n = e.exec(t); n;) {
                            try {
                                s[n[0]] = decodeURIComponent(n[0])
                            } catch (i) {
                                var a = o(n[0]);
                                a !== n[0] && (s[n[0]] = a)
                            }
                            n = e.exec(t)
                        }
                        s["%C2"] = "\ufffd";
                        for (var r = Object.keys(s), l = 0; l < r.length; l++) {
                            var h = r[l];
                            t = t.replace(new RegExp(h, "g"), s[h])
                        }
                        return t
                    }(t)
                }
            }
        },
        16180: function(t) {
            "use strict";
            t.exports = function(t, i) {
                for (var s = {}, e = Object.keys(t), n = Array.isArray(i), o = 0; o < e.length; o++) {
                    var a = e[o],
                        r = t[a];
                    (n ? -1 !== i.indexOf(a) : i(a, r, t)) && (s[a] = r)
                }
                return s
            }
        },
        9982: function(t, i, s) {
            var e;
            "undefined" != typeof self && self, t.exports = (e = s(64386), function(t) {
                function i(e) {
                    if (s[e]) return s[e].exports;
                    var n = s[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                }
                var s = {};
                return i.m = t, i.c = s, i.d = function(t, s, e) {
                    i.o(t, s) || Object.defineProperty(t, s, {
                        configurable: !1,
                        enumerable: !0,
                        get: e
                    })
                }, i.n = function(t) {
                    var s = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return i.d(s, "a", s), s
                }, i.o = function(t, i) {
                    return Object.prototype.hasOwnProperty.call(t, i)
                }, i.p = "", i(i.s = 0)
            }([function(t, i, s) {
                "use strict";

                function e() {
                    return e = Object.assign || function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var s = arguments[i];
                            for (var e in s) Object.prototype.hasOwnProperty.call(s, e) && (t[e] = s[e])
                        }
                        return t
                    }, e.apply(this, arguments)
                }

                function n(t) {
                    return l(t) || r(t) || a(t) || o()
                }

                function o() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function a(t, i) {
                    if (t) {
                        if ("string" == typeof t) return h(t, i);
                        var s = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === s && t.constructor && (s = t.constructor.name), "Map" === s || "Set" === s ? Array.from(t) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? h(t, i) : void 0
                    }
                }

                function r(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }

                function l(t) {
                    if (Array.isArray(t)) return h(t)
                }

                function h(t, i) {
                    (null == i || i > t.length) && (i = t.length);
                    for (var s = 0, e = new Array(i); s < i; s++) e[s] = t[s];
                    return e
                }

                function c(t) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var p = s(1),
                    d = s.n(p),
                    u = "undefined" != typeof window ? p.useLayoutEffect : p.useEffect,
                    g = Object(p.forwardRef)((function(t, i) {
                        var s = Object(p.useRef)(),
                            o = Object(p.useRef)();
                        return u((function() {
                            function i() {
                                var i = t.highcharts || "object" === ("undefined" == typeof window ? "undefined" : c(window)) && window.Highcharts,
                                    e = t.constructorType || "chart";
                                i ? i[e] ? t.options ? o.current = i[e](s.current, t.options, t.callback ? t.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                            }
                            if (o.current) {
                                if (!1 !== t.allowChartUpdate)
                                    if (!t.immutable && o.current) {
                                        var e;
                                        (e = o.current).update.apply(e, [t.options].concat(n(t.updateArgs || [!0, !0])))
                                    } else i()
                            } else i()
                        })), u((function() {
                            return function() {
                                o.current && (o.current.destroy(), o.current = null)
                            }
                        }), []), Object(p.useImperativeHandle)(i, (function() {
                            return {
                                get chart() {
                                    return o.current
                                },
                                container: s
                            }
                        }), []), d.a.createElement("div", e({}, t.containerProps, {
                            ref: s
                        }))
                    }));
                i.default = Object(p.memo)(g)
            }, function(t, i) {
                t.exports = e
            }]))
        },
        39602: function(t, i, s) {
            "use strict";
            var e, n, o;
            o = function(t) {
                function i(t, i, s, e) {
                    t.hasOwnProperty(i) || (t[i] = e.apply(null, s), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                        detail: {
                            path: i,
                            module: t[i]
                        }
                    })))
                }
                i(t = t ? t._modules : {}, "Extensions/Annotations/AnnotationChart.js", [t["Core/Utilities.js"]], (function(t) {
                    function i(t, i) {
                        return t = this.initAnnotation(t), this.options.annotations.push(t.options), p(i, !0) && (t.redraw(), t.graphic.attr({
                            opacity: 1
                        })), t
                    }

                    function s() {
                        const t = this;
                        t.plotBoxClip = this.renderer.clipRect(this.plotBox), t.controlPointsGroup = t.renderer.g("control-points").attr({
                            zIndex: 99
                        }).clip(t.plotBoxClip).add(), t.options.annotations.forEach(((i, s) => {
                            if (!t.annotations.some((t => t.options === i))) {
                                const e = t.initAnnotation(i);
                                t.options.annotations[s] = e.options
                            }
                        })), t.drawAnnotations(), r(t, "redraw", t.drawAnnotations), r(t, "destroy", (function() {
                            t.plotBoxClip.destroy(), t.controlPointsGroup.destroy()
                        })), r(t, "exportData", (function(i) {
                            const s = (this.options.exporting && this.options.exporting.csv || {}).columnHeaderFormatter,
                                e = !i.dataRows[1].xValues,
                                n = t.options.lang && t.options.lang.exportData && t.options.lang.exportData.annotationHeader,
                                o = function(t) {
                                    let i;
                                    return s && (i = s(t), !1 !== i) ? i : (i = n + " " + t, e ? {
                                        columnTitle: i,
                                        topLevelColumnTitle: i
                                    } : i)
                                },
                                a = i.dataRows[0].length,
                                r = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.itemDelimiter,
                                l = t.options.exporting && t.options.exporting.csv && t.options.exporting.csv.annotations && t.options.exporting.csv.annotations.join;
                            t.annotations.forEach((t => {
                                t.options.labelOptions && t.options.labelOptions.includeInDataExport && t.labels.forEach((t => {
                                    if (t.options.text) {
                                        const s = t.options.text;
                                        t.points.forEach((t => {
                                            const e = t.x,
                                                n = t.series.xAxis ? t.series.xAxis.index : -1;
                                            let o = !1;
                                            if (-1 === n) {
                                                t = i.dataRows[0].length;
                                                for (var h = Array(t), c = 0; c < t; ++c) h[c] = "";
                                                h.push(s), h.xValues = [], h.xValues[n] = e, i.dataRows.push(h), o = !0
                                            }
                                            if (o || i.dataRows.forEach((t => {
                                                    !o && t.xValues && void 0 !== n && e === t.xValues[n] && (l && t.length > a ? t[t.length - 1] += r + s : t.push(s), o = !0)
                                                })), !o) {
                                                for (t = i.dataRows[0].length, h = Array(t), c = 0; c < t; ++c) h[c] = "";
                                                h[0] = e, h.push(s), h.xValues = [], void 0 !== n && (h.xValues[n] = e), i.dataRows.push(h)
                                            }
                                        }))
                                    }
                                }))
                            }));
                            let h = 0;
                            i.dataRows.forEach((t => {
                                h = Math.max(h, t.length)
                            }));
                            const c = h - i.dataRows[0].length;
                            for (let t = 0; t < c; t++) {
                                const s = o(t + 1);
                                e ? (i.dataRows[0].push(s.topLevelColumnTitle), i.dataRows[1].push(s.columnTitle)) : i.dataRows[0].push(s)
                            }
                        }))
                    }

                    function e() {
                        this.plotBoxClip.attr(this.plotBox), this.annotations.forEach((t => {
                            t.redraw(), t.graphic.animate({
                                opacity: 1
                            }, t.animationConfig)
                        }))
                    }

                    function n(t) {
                        const i = this.annotations,
                            s = "annotations" === t.coll ? t : h(i, (function(i) {
                                return i.options.id === t
                            }));
                        s && (c(s, "remove"), l(this.options.annotations, s.options), l(i, s), s.destroy())
                    }

                    function o() {
                        this.annotations = [], this.options.annotations || (this.options.annotations = [])
                    }

                    function a(t) {
                        this.chart.hasDraggedAnnotation || t.apply(this, Array.prototype.slice.call(arguments, 1))
                    }
                    const {
                        addEvent: r,
                        erase: l,
                        find: h,
                        fireEvent: c,
                        pick: p,
                        wrap: d
                    } = t, u = [];
                    var g;
                    return function(l) {
                        l.compose = function(l, h, c) {
                            t.pushUnique(u, h) && (r(h, "afterInit", o), (h = h.prototype).addAnnotation = i, h.callbacks.push(s), h.collectionsWithInit.annotations = [i], h.collectionsWithUpdate.push("annotations"), h.drawAnnotations = e, h.removeAnnotation = n, h.initAnnotation = function(t) {
                                return t = new(l.types[t.type] || l)(this, t), this.annotations.push(t), t
                            }), t.pushUnique(u, c) && d(c.prototype, "onContainerMouseDown", a)
                        }
                    }(g || (g = {})), g
                })), i(t, "Extensions/Annotations/AnnotationDefaults.js", [t["Core/Utilities.js"]], (function(t) {
                    const {
                        defined: i
                    } = t;
                    return {
                        visible: !0,
                        animation: {},
                        crop: !0,
                        draggable: "xy",
                        labelOptions: {
                            align: "center",
                            allowOverlap: !1,
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            borderColor: "#000000",
                            borderRadius: 3,
                            borderWidth: 1,
                            className: "highcharts-no-tooltip",
                            crop: !1,
                            formatter: function() {
                                return i(this.y) ? "" + this.y : "Annotation label"
                            },
                            includeInDataExport: !0,
                            overflow: "justify",
                            padding: 5,
                            shadow: !1,
                            shape: "callout",
                            style: {
                                fontSize: "0.7em",
                                fontWeight: "normal",
                                color: "contrast"
                            },
                            useHTML: !1,
                            verticalAlign: "bottom",
                            x: 0,
                            y: -16
                        },
                        shapeOptions: {
                            stroke: "rgba(0, 0, 0, 0.75)",
                            strokeWidth: 1,
                            fill: "rgba(0, 0, 0, 0.75)",
                            r: 0,
                            snap: 2
                        },
                        controlPointOptions: {
                            events: {},
                            style: {
                                cursor: "pointer",
                                fill: "#ffffff",
                                stroke: "#000000",
                                "stroke-width": 2
                            },
                            height: 10,
                            symbol: "circle",
                            visible: !1,
                            width: 10
                        },
                        events: {},
                        zIndex: 6
                    }
                })), i(t, "Extensions/Annotations/EventEmitter.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        doc: s,
                        isTouchDevice: e
                    } = t, {
                        addEvent: n,
                        fireEvent: o,
                        objectEach: a,
                        pick: r,
                        removeEvent: l
                    } = i;
                    return class {
                        addEvents() {
                            const t = this,
                                i = function(i) {
                                    n(i, e ? "touchstart" : "mousedown", (i => {
                                        t.onMouseDown(i)
                                    }), {
                                        passive: !1
                                    })
                                };
                            if (i(this.graphic.element), (t.labels || []).forEach((t => {
                                    t.options.useHTML && t.graphic.text && i(t.graphic.text.element)
                                })), a(t.options.events, ((i, s) => {
                                    const e = function(e) {
                                        "click" === s && t.cancelClick || i.call(t, t.chart.pointer.normalize(e), t.target)
                                    }; - 1 === (t.nonDOMEvents || []).indexOf(s) ? t.graphic.on(s, e) : n(t, s, e, {
                                        passive: !1
                                    })
                                })), t.options.draggable && (n(t, "drag", t.onDrag), !t.graphic.renderer.styledMode)) {
                                const i = {
                                    cursor: {
                                        x: "ew-resize",
                                        y: "ns-resize",
                                        xy: "move"
                                    }[t.options.draggable]
                                };
                                t.graphic.css(i), (t.labels || []).forEach((t => {
                                    t.options.useHTML && t.graphic.text && t.graphic.text.css(i)
                                }))
                            }
                            t.isUpdating || o(t, "add")
                        }
                        destroy() {
                            this.removeDocEvents(), l(this), this.hcEvents = null
                        }
                        mouseMoveToRadians(t, i, s) {
                            let e = t.prevChartY - s,
                                n = t.prevChartX - i;
                            return s = t.chartY - s, t = t.chartX - i, this.chart.inverted && (i = n, n = e, e = i, i = t, t = s, s = i), Math.atan2(s, t) - Math.atan2(e, n)
                        }
                        mouseMoveToScale(t, i, s) {
                            return i = (t.chartX - i || 1) / (t.prevChartX - i || 1), t = (t.chartY - s || 1) / (t.prevChartY - s || 1), this.chart.inverted && (s = t, t = i, i = s), {
                                x: i,
                                y: t
                            }
                        }
                        mouseMoveToTranslation(t) {
                            let i, s = t.chartX - t.prevChartX;
                            return t = t.chartY - t.prevChartY, this.chart.inverted && (i = t, t = s, s = i), {
                                x: s,
                                y: t
                            }
                        }
                        onDrag(t) {
                            if (this.chart.isInsidePlot(t.chartX - this.chart.plotLeft, t.chartY - this.chart.plotTop, {
                                    visiblePlotOnly: !0
                                })) {
                                const i = this.mouseMoveToTranslation(t);
                                "x" === this.options.draggable && (i.y = 0), "y" === this.options.draggable && (i.x = 0), this.points.length ? this.translate(i.x, i.y) : (this.shapes.forEach((t => t.translate(i.x, i.y))), this.labels.forEach((t => t.translate(i.x, i.y)))), this.redraw(!1)
                            }
                        }
                        onMouseDown(t) {
                            if (t.preventDefault && t.preventDefault(), 2 !== t.button) {
                                var i = this,
                                    a = i.chart.pointer,
                                    l = (t = a.normalize(t)).chartX,
                                    h = t.chartY;
                                i.cancelClick = !1, i.chart.hasDraggedAnnotation = !0, i.removeDrag = n(s, e ? "touchmove" : "mousemove", (function(t) {
                                    i.hasDragged = !0, (t = a.normalize(t)).prevChartX = l, t.prevChartY = h, o(i, "drag", t), l = t.chartX, h = t.chartY
                                }), e ? {
                                    passive: !1
                                } : void 0), i.removeMouseUp = n(s, e ? "touchend" : "mouseup", (function(t) {
                                    const s = r(i.target && i.target.annotation, i.target);
                                    s && (s.cancelClick = i.hasDragged), i.cancelClick = i.hasDragged, i.hasDragged = !1, i.chart.hasDraggedAnnotation = !1, o(r(s, i), "afterUpdate"), i.onMouseUp(t)
                                }), e ? {
                                    passive: !1
                                } : void 0)
                            }
                        }
                        onMouseUp(t) {
                            var i = this.chart;
                            t = this.target || this;
                            const s = i.options.annotations;
                            i = i.annotations.indexOf(t), this.removeDocEvents(), s[i] = t.options
                        }
                        removeDocEvents() {
                            this.removeDrag && (this.removeDrag = this.removeDrag()), this.removeMouseUp && (this.removeMouseUp = this.removeMouseUp())
                        }
                    }
                })), i(t, "Extensions/Annotations/ControlPoint.js", [t["Extensions/Annotations/EventEmitter.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        merge: s,
                        pick: e
                    } = i;
                    return class extends t {
                        constructor(t, i, s, n) {
                            super(), this.graphic = void 0, this.nonDOMEvents = ["drag"], this.chart = t, this.target = i, this.options = s, this.index = e(s.index, n)
                        }
                        destroy() {
                            super.destroy(), this.graphic && (this.graphic = this.graphic.destroy()), this.options = this.target = this.chart = null
                        }
                        redraw(t) {
                            this.graphic[t ? "animate" : "attr"](this.options.positioner.call(this, this.target))
                        }
                        render() {
                            const t = this.chart,
                                i = this.options;
                            this.graphic = t.renderer.symbol(i.symbol, 0, 0, i.width, i.height).add(t.controlPointsGroup).css(i.style), this.setVisibility(i.visible), this.addEvents()
                        }
                        setVisibility(t) {
                            this.graphic[t ? "show" : "hide"](), this.options.visible = t
                        }
                        update(t) {
                            const i = this.chart,
                                e = this.target,
                                n = this.index;
                            t = s(!0, this.options, t), this.destroy(), this.constructor(i, e, t, n), this.render(i.controlPointsGroup), this.redraw()
                        }
                    }
                })), i(t, "Extensions/Annotations/MockPoint.js", [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        series: {
                            prototype: s
                        }
                    } = t, {
                        defined: e,
                        fireEvent: n
                    } = i;
                    class o {
                        static fromPoint(t) {
                            return new o(t.series.chart, null, {
                                x: t.x,
                                y: t.y,
                                xAxis: t.series.xAxis,
                                yAxis: t.series.yAxis
                            })
                        }
                        static pointToPixels(t, i) {
                            const s = t.series,
                                e = s.chart;
                            let n = t.plotX || 0,
                                o = t.plotY || 0;
                            return e.inverted && (t.mock ? (n = t.plotY, o = t.plotX) : (n = e.plotWidth - (t.plotY || 0), o = e.plotHeight - (t.plotX || 0))), s && !i && (n += (t = s.getPlotBox()).translateX, o += t.translateY), {
                                x: n,
                                y: o
                            }
                        }
                        static pointToOptions(t) {
                            return {
                                x: t.x,
                                y: t.y,
                                xAxis: t.series.xAxis,
                                yAxis: t.series.yAxis
                            }
                        }
                        constructor(t, i, e) {
                            this.plotY = this.plotX = void 0, this.mock = !0, this.series = {
                                visible: !0,
                                chart: t,
                                getPlotBox: s.getPlotBox
                            }, this.target = i || null, this.options = e, this.applyOptions(this.getOptions())
                        }
                        applyOptions(t) {
                            this.command = t.command, this.setAxis(t, "x"), this.setAxis(t, "y"), this.refresh()
                        }
                        getLabelConfig() {
                            return {
                                x: this.x,
                                y: this.y,
                                point: this
                            }
                        }
                        getOptions() {
                            return this.hasDynamicOptions() ? this.options(this.target) : this.options
                        }
                        hasDynamicOptions() {
                            return "function" === typeof this.options
                        }
                        isInsidePlot() {
                            const t = this.plotX,
                                i = this.plotY,
                                s = this.series.xAxis,
                                o = this.series.yAxis,
                                a = {
                                    x: t,
                                    y: i,
                                    isInsidePlot: !0,
                                    options: {}
                                };
                            return s && (a.isInsidePlot = e(t) && 0 <= t && t <= s.len), o && (a.isInsidePlot = a.isInsidePlot && e(i) && 0 <= i && i <= o.len), n(this.series.chart, "afterIsInsidePlot", a), a.isInsidePlot
                        }
                        refresh() {
                            var t = this.series;
                            const i = t.xAxis;
                            t = t.yAxis;
                            const s = this.getOptions();
                            i ? (this.x = s.x, this.plotX = i.toPixels(s.x, !0)) : (this.x = void 0, this.plotX = s.x), t ? (this.y = s.y, this.plotY = t.toPixels(s.y, !0)) : (this.y = null, this.plotY = s.y), this.isInside = this.isInsidePlot()
                        }
                        refreshOptions() {
                            var t = this.series;
                            const i = t.xAxis;
                            t = t.yAxis, this.x = this.options.x = i ? this.options.x = i.toValue(this.plotX, !0) : this.plotX, this.y = this.options.y = t ? t.toValue(this.plotY, !0) : this.plotY
                        }
                        rotate(t, i, s) {
                            if (!this.hasDynamicOptions()) {
                                const e = Math.cos(s);
                                s = Math.sin(s);
                                const n = this.plotX - t,
                                    o = this.plotY - i,
                                    a = n * s + o * e;
                                this.plotX = n * e - o * s + t, this.plotY = a + i, this.refreshOptions()
                            }
                        }
                        scale(t, i, s, e) {
                            if (!this.hasDynamicOptions()) {
                                const n = this.plotY * e;
                                this.plotX = (1 - s) * t + this.plotX * s, this.plotY = (1 - e) * i + n, this.refreshOptions()
                            }
                        }
                        setAxis(t, i) {
                            t = t[i += "Axis"];
                            const s = this.series.chart;
                            this.series[i] = "object" === typeof t ? t : e(t) ? s[i][t] || s.get(t) : null
                        }
                        toAnchor() {
                            const t = [this.plotX, this.plotY, 0, 0];
                            return this.series.chart.inverted && (t[0] = this.plotY, t[1] = this.plotX), t
                        }
                        translate(t, i, s, e) {
                            this.hasDynamicOptions() || (this.plotX += s, this.plotY += e, this.refreshOptions())
                        }
                    }
                    return o
                })), i(t, "Extensions/Annotations/ControlTarget.js", [t["Extensions/Annotations/ControlPoint.js"], t["Extensions/Annotations/MockPoint.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    var e;
                    return function(e) {
                        function n() {
                            const i = this.controlPoints,
                                e = this.options.controlPoints || [];
                            e.forEach(((n, o) => {
                                (n = s.merge(this.options.controlPointOptions, n)).index || (n.index = o), e[o] = n, i.push(new t(this.chart, this, n))
                            }))
                        }

                        function o(t) {
                            const i = t.series.getPlotBox(),
                                e = t.series.chart;
                            var n = t.mock ? t.toAnchor() : e.tooltip && e.tooltip.getAnchor.call({
                                chart: t.series.chart
                            }, t) || [0, 0, 0, 0];
                            return {
                                relativePosition: n = {
                                    x: n[0] + (this.options.x || 0),
                                    y: n[1] + (this.options.y || 0),
                                    height: n[2] || 0,
                                    width: n[3] || 0
                                },
                                absolutePosition: s.merge(n, {
                                    x: n.x + (t.mock ? i.translateX : e.plotLeft),
                                    y: n.y + (t.mock ? i.translateY : e.plotTop)
                                })
                            }
                        }

                        function a() {
                            this.controlPoints.forEach((t => t.destroy())), this.options = this.points = this.controlPoints = this.chart = null, this.annotation && (this.annotation = null)
                        }

                        function r() {
                            const t = this.options;
                            return t.points || t.point && s.splat(t.point)
                        }

                        function l() {
                            const t = this.getPointsOptions(),
                                i = this.points,
                                s = t && t.length || 0;
                            let e, n;
                            for (e = 0; e < s; e++) {
                                if (n = this.point(t[e], i[e]), !n) return void(i.length = 0);
                                n.mock && n.refresh(), i[e] = n
                            }
                            return i
                        }

                        function h(t, e) {
                            return t && t.series ? t : (e && null !== e.series || (s.isObject(t) ? e = new i(this.chart, this, t) : s.isString(t) ? e = this.chart.get(t) || null : "function" === typeof t && (e = (e = t.call(e, this)).series ? e : new i(this.chart, this, t))), e)
                        }

                        function c(t) {
                            this.controlPoints.forEach((i => i.redraw(t)))
                        }

                        function p() {
                            this.controlPoints.forEach((t => t.render()))
                        }

                        function d(t, i, s, e, n) {
                            if (this.chart.inverted) {
                                const t = i;
                                i = s, s = t
                            }
                            this.points.forEach(((o, a) => this.transformPoint(t, i, s, e, n, a)), this)
                        }

                        function u(t, s, e, n, o, a) {
                            let r = this.points[a];
                            r.mock || (r = this.points[a] = i.fromPoint(r)), r[t](s, e, n, o)
                        }

                        function g(t, i) {
                            this.transform("translate", null, null, t, i)
                        }

                        function f(t, i, s) {
                            this.transformPoint("translate", null, null, t, i, s)
                        }
                        const m = [];
                        e.compose = function(t) {
                            s.pushUnique(m, t) && s.merge(!0, t.prototype, {
                                addControlPoints: n,
                                anchor: o,
                                destroyControlTarget: a,
                                getPointsOptions: r,
                                linkPoints: l,
                                point: h,
                                redrawControlPoints: c,
                                renderControlPoints: p,
                                transform: d,
                                transformPoint: u,
                                translate: g,
                                translatePoint: f
                            })
                        }
                    }(e || (e = {})), e
                })), i(t, "Extensions/Annotations/Controllables/Controllable.js", [t["Extensions/Annotations/ControlTarget.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        merge: s
                    } = i;
                    class e {
                        constructor(t, i, s, e) {
                            this.graphic = void 0, this.annotation = t, this.chart = t.chart, this.collection = "label" === e ? "labels" : "shapes", this.controlPoints = [], this.options = i, this.points = [], this.index = s, this.itemType = e, this.init(t, i, s)
                        }
                        attr(...t) {
                            this.graphic.attr.apply(this.graphic, arguments)
                        }
                        attrsFromOptions(t) {
                            const i = this.constructor.attrsMap,
                                s = {},
                                e = this.chart.styledMode;
                            let n, o;
                            for (n in t) o = i[n], "undefined" === typeof i[n] || e && -1 !== ["fill", "stroke", "stroke-width"].indexOf(o) || (s[o] = t[n]);
                            return s
                        }
                        destroy() {
                            this.graphic && (this.graphic = this.graphic.destroy()), this.tracker && (this.tracker = this.tracker.destroy()), this.destroyControlTarget()
                        }
                        init(t, i, s) {
                            this.annotation = t, this.chart = t.chart, this.options = i, this.points = [], this.controlPoints = [], this.index = s, this.linkPoints(), this.addControlPoints()
                        }
                        redraw(t) {
                            this.redrawControlPoints(t)
                        }
                        render(t) {
                            this.renderControlPoints()
                        }
                        rotate(t, i, s) {
                            this.transform("rotate", t, i, s)
                        }
                        scale(t, i, s, e) {
                            this.transform("scale", t, i, s, e)
                        }
                        setControlPointsVisibility(t) {
                            this.controlPoints.forEach((i => {
                                i.setVisibility(t)
                            }))
                        }
                        shouldBeDrawn() {
                            return !!this.points.length
                        }
                        translateShape(t, i, s) {
                            var e = this.annotation.chart;
                            const n = this.annotation.userOptions,
                                o = e.annotations.indexOf(this.annotation);
                            e = e.options.annotations[o], this.translatePoint(t, i, 0), s && this.translatePoint(t, i, 1), e[this.collection][this.index].point = this.options.point, n[this.collection][this.index].point = this.options.point
                        }
                        update(t) {
                            var i = this.annotation;
                            const e = s(!0, this.options, t);
                            t = this.graphic.parentGroup;
                            const n = this.constructor;
                            this.destroy(), i = new n(i, e, this.index, this.itemType), s(!0, this, i), this.render(t), this.redraw()
                        }
                    }
                    return t.compose(e), e
                })), i(t, "Extensions/Annotations/Controllables/ControllableDefaults.js", [], (function() {
                    return {
                        defaultMarkers: {
                            arrow: {
                                tagName: "marker",
                                attributes: {
                                    id: "arrow",
                                    refY: 5,
                                    refX: 9,
                                    markerWidth: 10,
                                    markerHeight: 10
                                },
                                children: [{
                                    tagName: "path",
                                    attributes: {
                                        d: "M 0 0 L 10 5 L 0 10 Z",
                                        "stroke-width": 0
                                    }
                                }]
                            },
                            "reverse-arrow": {
                                tagName: "marker",
                                attributes: {
                                    id: "reverse-arrow",
                                    refY: 5,
                                    refX: 1,
                                    markerWidth: 10,
                                    markerHeight: 10
                                },
                                children: [{
                                    tagName: "path",
                                    attributes: {
                                        d: "M 0 5 L 10 0 L 10 10 Z",
                                        "stroke-width": 0
                                    }
                                }]
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/Controllables/ControllablePath.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllableDefaults.js"], t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i, s, e) {
                    function n(t) {
                        return function(i) {
                            this.attr(t, "url(#" + i + ")")
                        }
                    }

                    function o() {
                        this.options.defs = p(r, this.options.defs || {})
                    }

                    function a(t, i) {
                        const s = {
                                attributes: {
                                    id: t
                                }
                            },
                            e = {
                                stroke: i.color || "none",
                                fill: i.color || "rgba(0, 0, 0, 0.75)"
                            };
                        return s.children = i.children && i.children.map((function(t) {
                            return p(e, t)
                        })), i = p(!0, {
                            attributes: {
                                markerWidth: 20,
                                markerHeight: 20,
                                refX: 0,
                                refY: 0,
                                orient: "auto"
                            }
                        }, i, s), (i = this.definition(i)).id = t, i
                    }
                    const {
                        defaultMarkers: r
                    } = i, {
                        addEvent: l,
                        defined: h,
                        extend: c,
                        merge: p,
                        uniqueKey: d
                    } = e, u = [], g = n("marker-end"), f = n("marker-start"), m = "rgba(192,192,192," + (s.svg ? 1e-4 : .002) + ")";
                    class y extends t {
                        static compose(t, i) {
                            e.pushUnique(u, t) && l(t, "afterGetContainer", o), e.pushUnique(u, i) && (i.prototype.addMarker = a)
                        }
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "path"
                        }
                        toD() {
                            var t = this.options.d;
                            if (t) return "function" === typeof t ? t.call(this) : t;
                            const i = (t = this.points).length,
                                s = [];
                            var e = i;
                            let n = t[0],
                                o = e && this.anchor(n).absolutePosition,
                                a = 0;
                            if (o)
                                for (s.push(["M", o.x, o.y]); ++a < i && e;) n = t[a], e = n.command || "L", o = this.anchor(n).absolutePosition, "M" === e || "L" === e ? s.push([e, o.x, o.y]) : "Z" === e && s.push([e]), e = n.series.visible;
                            return e && this.graphic ? this.chart.renderer.crispLine(s, this.graphic.strokeWidth()) : null
                        }
                        shouldBeDrawn() {
                            return super.shouldBeDrawn() || !!this.options.d
                        }
                        render(t) {
                            const i = this.options,
                                s = this.attrsFromOptions(i);
                            this.graphic = this.annotation.chart.renderer.path([
                                ["M", 0, 0]
                            ]).attr(s).add(t), i.className && this.graphic.addClass(i.className), this.tracker = this.annotation.chart.renderer.path([
                                ["M", 0, 0]
                            ]).addClass("highcharts-tracker-line").attr({
                                zIndex: 2
                            }).add(t), this.annotation.chart.styledMode || this.tracker.attr({
                                "stroke-linejoin": "round",
                                stroke: m,
                                fill: m,
                                "stroke-width": this.graphic.strokeWidth() + 2 * i.snap
                            }), super.render(), c(this.graphic, {
                                markerStartSetter: f,
                                markerEndSetter: g
                            }), this.setMarkers(this)
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.toD(),
                                    s = t ? "animate" : "attr";
                                i ? (this.graphic[s]({
                                    d: i
                                }), this.tracker[s]({
                                    d: i
                                })) : (this.graphic.attr({
                                    d: "M 0 -9000000000"
                                }), this.tracker.attr({
                                    d: "M 0 -9000000000"
                                })), this.graphic.placed = this.tracker.placed = !!i
                            }
                            super.redraw(t)
                        }
                        setMarkers(t) {
                            const i = t.options,
                                s = t.chart,
                                e = s.options.defs,
                                n = i.fill,
                                o = h(n) && "none" !== n ? n : i.stroke;
                            ["markerStart", "markerEnd"].forEach((function(n) {
                                var a = i[n];
                                let r, l, h;
                                if (a) {
                                    for (h in e)
                                        if (r = e[h], (a === (r.attributes && r.attributes.id) || a === r.id) && "marker" === r.tagName) {
                                            l = r;
                                            break
                                        }
                                    l && (a = t[n] = s.renderer.addMarker((i.id || d()) + "-" + a, p(l, {
                                        color: o
                                    })), t.attr(n, a.getAttribute("id")))
                                }
                            }))
                        }
                    }
                    return y.attrsMap = {
                        dashStyle: "dashstyle",
                        strokeWidth: "stroke-width",
                        stroke: "stroke",
                        fill: "fill",
                        zIndex: "zIndex"
                    }, y
                })), i(t, "Extensions/Annotations/Controllables/ControllableRect.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    ({
                        merge: s
                    } = s);
                    class e extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "rect", this.translate = super.translateShape
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options);
                            this.graphic = this.annotation.chart.renderer.rect(0, -9e9, 0, 0).attr(i).add(t), super.render()
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.anchor(this.points[0]).absolutePosition;
                                i ? this.graphic[t ? "animate" : "attr"]({
                                    x: i.x,
                                    y: i.y,
                                    width: this.options.width,
                                    height: this.options.height
                                }) : this.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!i
                            }
                            super.redraw(t)
                        }
                    }
                    return e.attrsMap = s(i.attrsMap, {
                        width: "width",
                        height: "height"
                    }), e
                })), i(t, "Extensions/Annotations/Controllables/ControllableCircle.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    ({
                        merge: s
                    } = s);
                    class e extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "circle", this.translate = super.translateShape
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const i = this.anchor(this.points[0]).absolutePosition;
                                i ? this.graphic[t ? "animate" : "attr"]({
                                    x: i.x,
                                    y: i.y,
                                    r: this.options.r
                                }) : this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!i
                            }
                            super.redraw.call(this, t)
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options);
                            this.graphic = this.annotation.chart.renderer.circle(0, -9e9, 0).attr(i).add(t), super.render()
                        }
                        setRadius(t) {
                            this.options.r = t
                        }
                    }
                    return e.attrsMap = s(i.attrsMap, {
                        r: "r"
                    }), e
                })), i(t, "Extensions/Annotations/Controllables/ControllableEllipse.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Core/Utilities.js"]], (function(t, i, s) {
                    const {
                        merge: e,
                        defined: n
                    } = s;
                    class o extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "ellipse"
                        }
                        init(t, i, s) {
                            n(i.yAxis) && i.points.forEach((t => {
                                t.yAxis = i.yAxis
                            })), n(i.xAxis) && i.points.forEach((t => {
                                t.xAxis = i.xAxis
                            })), super.init(t, i, s)
                        }
                        render(t) {
                            this.graphic = this.annotation.chart.renderer.createElement("ellipse").attr(this.attrsFromOptions(this.options)).add(t), super.render()
                        }
                        translate(t, i) {
                            super.translateShape(t, i, !0)
                        }
                        getDistanceFromLine(t, i, s, e) {
                            return Math.abs((i.y - t.y) * s - (i.x - t.x) * e + i.x * t.y - i.y * t.x) / Math.sqrt((i.y - t.y) * (i.y - t.y) + (i.x - t.x) * (i.x - t.x))
                        }
                        getAttrs(t, i) {
                            var s = t.x,
                                e = t.y;
                            const n = i.x,
                                o = i.y;
                            i = (s + n) / 2, t = (e + o) / 2;
                            const a = Math.sqrt((s - n) * (s - n) / 4 + (e - o) * (e - o) / 4);
                            return e = 180 * Math.atan((o - e) / (n - s)) / Math.PI, i < s && (e += 180), {
                                cx: i,
                                cy: t,
                                rx: a,
                                ry: s = this.getRY(),
                                angle: e
                            }
                        }
                        getRY() {
                            const t = this.getYAxis();
                            return n(t) ? Math.abs(t.toPixels(this.options.ry) - t.toPixels(0)) : this.options.ry
                        }
                        getYAxis() {
                            return this.chart.yAxis[this.options.yAxis]
                        }
                        getAbsolutePosition(t) {
                            return this.anchor(t).absolutePosition
                        }
                        redraw(t) {
                            if (this.graphic) {
                                const s = this.getAbsolutePosition(this.points[0]);
                                var i = this.getAbsolutePosition(this.points[1]);
                                i = this.getAttrs(s, i), s ? this.graphic[t ? "animate" : "attr"]({
                                    cx: i.cx,
                                    cy: i.cy,
                                    rx: i.rx,
                                    ry: i.ry,
                                    rotation: i.angle,
                                    rotationOriginX: i.cx,
                                    rotationOriginY: i.cy
                                }) : this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!s
                            }
                            super.redraw(t)
                        }
                        setYRadius(t) {
                            const i = this.annotation.userOptions.shapes;
                            this.options.ry = t, i && i[0] && (i[0].ry = t, i[0].ry = t)
                        }
                    }
                    return o.attrsMap = e(i.attrsMap, {
                        ry: "ry"
                    }), o
                })), i(t, "Extensions/Annotations/Controllables/ControllableLabel.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Core/Templating.js"], t["Extensions/Annotations/MockPoint.js"], t["Core/Utilities.js"]], (function(t, i, s, e) {
                    function n(t, i, s, e, n) {
                        const o = n && n.anchorX;
                        n = n && n.anchorY;
                        let a, l, h = s / 2;
                        return r(o) && r(n) && (a = [
                            ["M", o, n]
                        ], l = i - n, 0 > l && (l = -e - l), l < s && (h = o < t + s / 2 ? l : s - l), n > i + e ? a.push(["L", t + h, i + e]) : n < i ? a.push(["L", t + h, i]) : o < t ? a.push(["L", t, i + e / 2]) : o > t + s && a.push(["L", t + s, i + e / 2])), a || []
                    }
                    const {
                        format: o
                    } = i, {
                        extend: a,
                        isNumber: r,
                        pick: l
                    } = e, h = [];
                    class c extends t {
                        static alignedPosition(t, i) {
                            const s = t.align,
                                e = t.verticalAlign;
                            let n, o, a = (i.x || 0) + (t.x || 0),
                                r = (i.y || 0) + (t.y || 0);
                            return "right" === s ? n = 1 : "center" === s && (n = 2), n && (a += (i.width - (t.width || 0)) / n), "bottom" === e ? o = 1 : "middle" === e && (o = 2), o && (r += (i.height - (t.height || 0)) / o), {
                                x: Math.round(a),
                                y: Math.round(r)
                            }
                        }
                        static compose(t) {
                            e.pushUnique(h, t) && (t.prototype.symbols.connector = n)
                        }
                        static justifiedOptions(t, i, s, e) {
                            const n = s.align,
                                o = s.verticalAlign,
                                a = i.box ? 0 : i.padding || 0,
                                r = i.getBBox();
                            let l;
                            return i = {
                                align: n,
                                verticalAlign: o,
                                x: s.x,
                                y: s.y,
                                width: i.width,
                                height: i.height
                            }, s = (e.x || 0) - t.plotLeft, e = (e.y || 0) - t.plotTop, l = s + a, 0 > l && ("right" === n ? i.align = "left" : i.x = (i.x || 0) - l), l = s + r.width - a, l > t.plotWidth && ("left" === n ? i.align = "right" : i.x = (i.x || 0) + t.plotWidth - l), l = e + a, 0 > l && ("bottom" === o ? i.verticalAlign = "top" : i.y = (i.y || 0) - l), l = e + r.height - a, l > t.plotHeight && ("top" === o ? i.verticalAlign = "bottom" : i.y = (i.y || 0) + t.plotHeight - l), i
                        }
                        constructor(t, i, s) {
                            super(t, i, s, "label")
                        }
                        translatePoint(t, i) {
                            super.translatePoint(t, i, 0)
                        }
                        translate(t, i) {
                            var s = this.annotation.chart;
                            const e = this.annotation.userOptions;
                            var n = s.annotations.indexOf(this.annotation);
                            n = s.options.annotations[n], s.inverted && (s = t, t = i, i = s), this.options.x += t, this.options.y += i, n[this.collection][this.index].x = this.options.x, n[this.collection][this.index].y = this.options.y, e[this.collection][this.index].x = this.options.x, e[this.collection][this.index].y = this.options.y
                        }
                        render(t) {
                            const i = this.options,
                                s = this.attrsFromOptions(i),
                                e = i.style;
                            this.graphic = this.annotation.chart.renderer.label("", 0, -9999, i.shape, null, null, i.useHTML, null, "annotation-label").attr(s).add(t), this.annotation.chart.styledMode || ("contrast" === e.color && (e.color = this.annotation.chart.renderer.getContrast(-1 < c.shapesWithoutBackground.indexOf(i.shape) ? "#FFFFFF" : i.backgroundColor)), this.graphic.css(i.style).shadow(i.shadow)), i.className && this.graphic.addClass(i.className), this.graphic.labelrank = i.labelrank, super.render()
                        }
                        redraw(t) {
                            var i = this.options,
                                s = this.text || i.format || i.text;
                            const e = this.graphic,
                                n = this.points[0];
                            e ? (e.attr({
                                text: s ? o(String(s), n.getLabelConfig(), this.annotation.chart) : i.formatter.call(n, this)
                            }), i = this.anchor(n), (s = this.position(i)) ? (e.alignAttr = s, s.anchorX = i.absolutePosition.x, s.anchorY = i.absolutePosition.y, e[t ? "animate" : "attr"](s)) : e.attr({
                                x: 0,
                                y: -9999
                            }), e.placed = !!s, super.redraw(t)) : this.redraw(t)
                        }
                        anchor(t) {
                            const i = super.anchor.apply(this, arguments),
                                s = this.options.x || 0,
                                e = this.options.y || 0;
                            return i.absolutePosition.x -= s, i.absolutePosition.y -= e, i.relativePosition.x -= s, i.relativePosition.y -= e, i
                        }
                        position(t) {
                            var i = this.graphic;
                            const e = this.annotation.chart;
                            var n = e.tooltip;
                            const o = this.points[0];
                            var r = this.options;
                            const h = t.absolutePosition,
                                p = t.relativePosition;
                            let d;
                            if (t = o.series.visible && s.prototype.isInsidePlot.call(o), i && t) {
                                const {
                                    width: s = 0,
                                    height: u = 0
                                } = i;
                                r.distance && n ? d = n.getPosition.call({
                                    chart: e,
                                    distance: l(r.distance, 16),
                                    getPlayingField: n.getPlayingField
                                }, s, u, {
                                    plotX: p.x,
                                    plotY: p.y,
                                    negative: o.negative,
                                    ttBelow: o.ttBelow,
                                    h: p.height || p.width
                                }) : r.positioner ? d = r.positioner.call(this) : (n = {
                                    x: h.x,
                                    y: h.y,
                                    width: 0,
                                    height: 0
                                }, d = c.alignedPosition(a(r, {
                                    width: s,
                                    height: u
                                }), n), "justify" === this.options.overflow && (d = c.alignedPosition(c.justifiedOptions(e, i, r, d), n))), r.crop && (i = d.x - e.plotLeft, r = d.y - e.plotTop, t = e.isInsidePlot(i, r) && e.isInsidePlot(i + s, r + u))
                            }
                            return t ? d : null
                        }
                    }
                    return c.attrsMap = {
                        backgroundColor: "fill",
                        borderColor: "stroke",
                        borderWidth: "stroke-width",
                        zIndex: "zIndex",
                        borderRadius: "r",
                        padding: "padding"
                    }, c.shapesWithoutBackground = ["connector"], c
                })), i(t, "Extensions/Annotations/Controllables/ControllableImage.js", [t["Extensions/Annotations/Controllables/Controllable.js"], t["Extensions/Annotations/Controllables/ControllableLabel.js"]], (function(t, i) {
                    class s extends t {
                        constructor(t, i, s) {
                            super(t, i, s, "shape"), this.type = "image", this.translate = super.translateShape
                        }
                        render(t) {
                            const i = this.attrsFromOptions(this.options),
                                s = this.options;
                            this.graphic = this.annotation.chart.renderer.image(s.src, 0, -9e9, s.width, s.height).attr(i).add(t), this.graphic.width = s.width, this.graphic.height = s.height, super.render()
                        }
                        redraw(t) {
                            if (this.graphic) {
                                var s = this.anchor(this.points[0]);
                                (s = i.prototype.position.call(this, s)) ? this.graphic[t ? "animate" : "attr"]({
                                    x: s.x,
                                    y: s.y
                                }): this.graphic.attr({
                                    x: 0,
                                    y: -9e9
                                }), this.graphic.placed = !!s
                            }
                            super.redraw(t)
                        }
                    }
                    return s.attrsMap = {
                        width: "width",
                        height: "height",
                        zIndex: "zIndex"
                    }, s
                })), i(t, "Core/Chart/ChartNavigationComposition.js", [], (function() {
                    var t;
                    return function(t) {
                        t.compose = function(t) {
                            return t.navigation || (t.navigation = new i(t)), t
                        };
                        class i {
                            constructor(t) {
                                this.updates = [], this.chart = t
                            }
                            addUpdate(t) {
                                this.chart.navigation.updates.push(t)
                            }
                            update(t, i) {
                                this.updates.forEach((s => {
                                    s.call(this.chart, t, i)
                                }))
                            }
                        }
                        t.Additions = i
                    }(t || (t = {})), t
                })), i(t, "Extensions/Annotations/NavigationBindingsUtilities.js", [t["Core/Utilities.js"]], (function(t) {
                    const {
                        defined: i,
                        isNumber: s,
                        pick: e
                    } = t, n = {
                        backgroundColor: "string",
                        borderColor: "string",
                        borderRadius: "string",
                        color: "string",
                        fill: "string",
                        fontSize: "string",
                        labels: "string",
                        name: "string",
                        stroke: "string",
                        title: "string"
                    };
                    return {
                        annotationsFieldsTypes: n,
                        getAssignedAxis: function(t) {
                            return t.filter((t => {
                                var i = t.axis.getExtremes();
                                const n = i.min;
                                i = i.max;
                                const o = e(t.axis.minPointOffset, 0);
                                return s(n) && s(i) && t.value >= n - o && t.value <= i + o && !t.axis.options.isInternal
                            }))[0]
                        },
                        getFieldType: function(t, s) {
                            return s = typeof s, i(t = n[t]) && (s = t), {
                                string: "text",
                                number: "number",
                                boolean: "checkbox"
                            }[s]
                        }
                    }
                })), i(t, "Extensions/Annotations/NavigationBindingsDefaults.js", [t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        getAssignedAxis: s
                    } = t, {
                        isNumber: e,
                        merge: n
                    } = i;
                    return {
                        lang: {
                            navigation: {
                                popup: {
                                    simpleShapes: "Simple shapes",
                                    lines: "Lines",
                                    circle: "Circle",
                                    ellipse: "Ellipse",
                                    rectangle: "Rectangle",
                                    label: "Label",
                                    shapeOptions: "Shape options",
                                    typeOptions: "Details",
                                    fill: "Fill",
                                    format: "Text",
                                    strokeWidth: "Line width",
                                    stroke: "Line color",
                                    title: "Title",
                                    name: "Name",
                                    labelOptions: "Label options",
                                    labels: "Labels",
                                    backgroundColor: "Background color",
                                    backgroundColors: "Background colors",
                                    borderColor: "Border color",
                                    borderRadius: "Border radius",
                                    borderWidth: "Border width",
                                    style: "Style",
                                    padding: "Padding",
                                    fontSize: "Font size",
                                    color: "Color",
                                    height: "Height",
                                    shapes: "Shape options"
                                }
                            }
                        },
                        navigation: {
                            bindingsClassName: "highcharts-bindings-container",
                            bindings: {
                                circleAnnotation: {
                                    className: "highcharts-circle-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const e = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(n({
                                            langKey: "circle",
                                            type: "basicAnnotation",
                                            shapes: [{
                                                type: "circle",
                                                point: {
                                                    x: t.value,
                                                    y: i.value,
                                                    xAxis: t.axis.index,
                                                    yAxis: i.axis.index
                                                },
                                                r: 5
                                            }]
                                        }, e.annotationsOptions, e.bindings.circleAnnotation.annotationsOptions))
                                    },
                                    steps: [function(t, i) {
                                        var s = i.options.shapes;
                                        if (s = s && s[0] && s[0].point || {}, e(s.xAxis) && e(s.yAxis)) {
                                            var n = this.chart.inverted;
                                            const i = this.chart.xAxis[s.xAxis].toPixels(s.x);
                                            s = this.chart.yAxis[s.yAxis].toPixels(s.y), n = Math.max(Math.sqrt(Math.pow(n ? s - t.chartX : i - t.chartX, 2) + Math.pow(n ? i - t.chartY : s - t.chartY, 2)), 5)
                                        }
                                        i.update({
                                            shapes: [{
                                                r: n
                                            }]
                                        })
                                    }]
                                },
                                ellipseAnnotation: {
                                    className: "highcharts-ellipse-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const e = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(n({
                                            langKey: "ellipse",
                                            type: "basicAnnotation",
                                            shapes: [{
                                                type: "ellipse",
                                                xAxis: t.axis.index,
                                                yAxis: i.axis.index,
                                                points: [{
                                                    x: t.value,
                                                    y: i.value
                                                }, {
                                                    x: t.value,
                                                    y: i.value
                                                }],
                                                ry: 1
                                            }]
                                        }, e.annotationsOptions, e.bindings.ellipseAnnotation.annotationOptions))
                                    },
                                    steps: [function(t, i) {
                                        const s = (i = i.shapes[0]).getAbsolutePosition(i.points[1]);
                                        i.translatePoint(t.chartX - s.x, t.chartY - s.y, 1), i.redraw(!1)
                                    }, function(t, i) {
                                        var s = (i = i.shapes[0]).getAbsolutePosition(i.points[0]);
                                        const e = i.getAbsolutePosition(i.points[1]);
                                        t = i.getDistanceFromLine(s, e, t.chartX, t.chartY), s = i.getYAxis(), t = Math.abs(s.toValue(0) - s.toValue(t)), i.setYRadius(t), i.redraw(!1)
                                    }]
                                },
                                rectangleAnnotation: {
                                    className: "highcharts-rectangle-annotation",
                                    start: function(t) {
                                        t = this.chart.pointer.getCoordinates(t);
                                        var i = s(t.xAxis),
                                            e = s(t.yAxis);
                                        if (i && e) {
                                            t = i.value;
                                            var o = e.value;
                                            i = i.axis.index, e = e.axis.index;
                                            var a = this.chart.options.navigation;
                                            return this.chart.addAnnotation(n({
                                                langKey: "rectangle",
                                                type: "basicAnnotation",
                                                shapes: [{
                                                    type: "path",
                                                    points: [{
                                                        xAxis: i,
                                                        yAxis: e,
                                                        x: t,
                                                        y: o
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: e,
                                                        x: t,
                                                        y: o
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: e,
                                                        x: t,
                                                        y: o
                                                    }, {
                                                        xAxis: i,
                                                        yAxis: e,
                                                        x: t,
                                                        y: o
                                                    }, {
                                                        command: "Z"
                                                    }]
                                                }]
                                            }, a.annotationsOptions, a.bindings.rectangleAnnotation.annotationsOptions))
                                        }
                                    },
                                    steps: [function(t, i) {
                                        var e = i.options.shapes;
                                        e = e && e[0] && e[0].points || [];
                                        var n = this.chart.pointer.getCoordinates(t);
                                        t = s(n.xAxis), n = s(n.yAxis), t && n && (t = t.value, n = n.value, e[1].x = t, e[2].x = t, e[2].y = n, e[3].y = n, i.update({
                                            shapes: [{
                                                points: e
                                            }]
                                        }))
                                    }]
                                },
                                labelAnnotation: {
                                    className: "highcharts-label-annotation",
                                    start: function(t) {
                                        var i = this.chart.pointer.getCoordinates(t);
                                        t = s(i.xAxis), i = s(i.yAxis);
                                        const e = this.chart.options.navigation;
                                        if (t && i) return this.chart.addAnnotation(n({
                                            langKey: "label",
                                            type: "basicAnnotation",
                                            labelOptions: {
                                                format: "{y:.2f}"
                                            },
                                            labels: [{
                                                point: {
                                                    xAxis: t.axis.index,
                                                    yAxis: i.axis.index,
                                                    x: t.value,
                                                    y: i.value
                                                },
                                                overflow: "none",
                                                crop: !0
                                            }]
                                        }, e.annotationsOptions, e.bindings.labelAnnotation.annotationsOptions))
                                    }
                                }
                            },
                            events: {},
                            annotationsOptions: {
                                animation: {
                                    defer: 0
                                }
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/NavigationBindings.js", [t["Core/Chart/ChartNavigationComposition.js"], t["Core/Defaults.js"], t["Core/Templating.js"], t["Core/Globals.js"], t["Extensions/Annotations/NavigationBindingsDefaults.js"], t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Utilities.js"]], (function(t, i, s, e, n, o, a) {
                    function r() {
                        this.chart.navigationBindings && this.chart.navigationBindings.deselectAnnotation()
                    }

                    function l() {
                        this.navigationBindings && this.navigationBindings.destroy()
                    }

                    function h() {
                        const t = this.options;
                        t && t.navigation && t.navigation.bindings && (this.navigationBindings = new B(this, t.navigation), this.navigationBindings.initEvents(), this.navigationBindings.initUpdate())
                    }

                    function c() {
                        const t = this.navigationBindings;
                        if (this && t) {
                            let i = !1;
                            if (this.series.forEach((t => {
                                    !t.options.isInternal && t.visible && (i = !0)
                                })), this.navigationBindings && this.navigationBindings.container && this.navigationBindings.container[0]) {
                                const s = this.navigationBindings.container[0];
                                j(t.boundClassNames, ((t, e) => {
                                    if (e = s.querySelectorAll("." + e))
                                        for (let s = 0; s < e.length; s++) {
                                            const n = e[s],
                                                o = n.className;
                                            "normal" === t.noDataState || i ? -1 !== o.indexOf("highcharts-disabled-btn") && n.classList.remove("highcharts-disabled-btn") : -1 === o.indexOf("highcharts-disabled-btn") && (n.className += " highcharts-disabled-btn")
                                        }
                                }))
                            }
                        }
                    }

                    function p() {
                        this.deselectAnnotation()
                    }

                    function d() {
                        this.selectedButtonElement = null
                    }

                    function u(t) {
                        function i(t) {
                            const i = this,
                                e = i.chart.navigationBindings,
                                n = e.activeAnnotation;
                            s && s.call(i, t), n !== i ? (e.deselectAnnotation(), e.activeAnnotation = i, i.setControlPointsVisibility(!0), A(e, "showPopup", {
                                annotation: i,
                                formType: "annotation-toolbar",
                                options: e.annotationToFields(i),
                                onSubmit: function(t) {
                                    if ("remove" === t.actionType) e.activeAnnotation = !1, e.chart.removeAnnotation(i);
                                    else {
                                        const s = {};
                                        e.fieldsToOptions(t.fields, s), e.deselectAnnotation(), t = s.typeOptions, "measure" === i.options.type && (t.crosshairY.enabled = 0 !== t.crosshairY.strokeWidth, t.crosshairX.enabled = 0 !== t.crosshairX.strokeWidth), i.update(s)
                                    }
                                }
                            })) : A(e, "closePopup"), t.activeAnnotation = !0
                        }
                        const s = t.prototype.defaultOptions.events && t.prototype.defaultOptions.events.click;
                        let e, n;
                        w(!0, t.prototype.defaultOptions.events, {
                            click: i,
                            touchstart: function(t) {
                                e = t.touches[0].clientX, n = t.touches[0].clientY
                            },
                            touchend: function(t) {
                                e && 4 <= Math.sqrt(Math.pow(e - t.changedTouches[0].clientX, 2) + Math.pow(n - t.changedTouches[0].clientY, 2)) || i.call(this, t)
                            }
                        })
                    }
                    const {
                        setOptions: g
                    } = i, {
                        format: f
                    } = s, {
                        doc: m,
                        win: y
                    } = e, {
                        getFieldType: v
                    } = o, {
                        addEvent: x,
                        attr: b,
                        fireEvent: A,
                        isArray: C,
                        isFunction: E,
                        isNumber: k,
                        isObject: P,
                        merge: w,
                        objectEach: j,
                        pick: O
                    } = a, N = [];
                    class B {
                        static compose(t, i) {
                            a.pushUnique(N, t) && (x(t, "remove", r), u(t), j(t.types, (t => {
                                u(t)
                            }))), a.pushUnique(N, i) && (x(i, "destroy", l), x(i, "load", h), x(i, "render", c)), a.pushUnique(N, B) && (x(B, "closePopup", p), x(B, "deselectButton", d)), a.pushUnique(N, g) && g(n)
                        }
                        constructor(t, i) {
                            this.selectedButton = this.boundClassNames = void 0, this.chart = t, this.options = i, this.eventsToUnbind = [], this.container = this.chart.container.getElementsByClassName(this.options.bindingsClassName || ""), this.container.length || (this.container = m.getElementsByClassName(this.options.bindingsClassName || ""))
                        }
                        initEvents() {
                            const t = this,
                                i = t.chart,
                                s = t.container,
                                n = t.options;
                            t.boundClassNames = {}, j(n.bindings || {}, (i => {
                                t.boundClassNames[i.className] = i
                            })), [].forEach.call(s, (i => {
                                t.eventsToUnbind.push(x(i, "click", (s => {
                                    const e = t.getButtonEvents(i, s);
                                    e && !e.button.classList.contains("highcharts-disabled-btn") && t.bindingsButtonClick(e.button, e.events, s)
                                })))
                            })), j(n.events || {}, ((i, s) => {
                                E(i) && t.eventsToUnbind.push(x(t, s, i, {
                                    passive: !1
                                }))
                            })), t.eventsToUnbind.push(x(i.container, "click", (function(s) {
                                !i.cancelClick && i.isInsidePlot(s.chartX - i.plotLeft, s.chartY - i.plotTop, {
                                    visiblePlotOnly: !0
                                }) && t.bindingsChartClick(this, s)
                            }))), t.eventsToUnbind.push(x(i.container, e.isTouchDevice ? "touchmove" : "mousemove", (function(i) {
                                t.bindingsContainerMouseMove(this, i)
                            }), e.isTouchDevice ? {
                                passive: !1
                            } : void 0))
                        }
                        initUpdate() {
                            const i = this;
                            t.compose(this.chart).navigation.addUpdate((t => {
                                i.update(t)
                            }))
                        }
                        bindingsButtonClick(t, i, s) {
                            const e = this.chart,
                                n = e.renderer.boxWrapper;
                            let o = !0;
                            this.selectedButtonElement && (this.selectedButtonElement.classList === t.classList && (o = !1), A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), this.nextEvent && (this.currentUserDetails && "annotations" === this.currentUserDetails.coll && e.removeAnnotation(this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1)), o ? (this.selectedButton = i, this.selectedButtonElement = t, A(this, "selectButton", {
                                button: t
                            }), i.init && i.init.call(this, t, s), (i.start || i.steps) && e.renderer.boxWrapper.addClass("highcharts-draw-mode")) : (e.stockTools && e.stockTools.toggleButtonActiveClass(t), n.removeClass("highcharts-draw-mode"), this.mouseMoveEvent = this.nextEvent = !1, this.selectedButton = null)
                        }
                        bindingsChartClick(t, i) {
                            t = this.chart;
                            const s = this.activeAnnotation,
                                e = this.selectedButton;
                            t = t.renderer.boxWrapper, s && (s.cancelClick || i.activeAnnotation || !i.target.parentNode || function(t, i) {
                                const s = y.Element.prototype,
                                    e = s.matches || s.msMatchesSelector || s.webkitMatchesSelector;
                                let n = null;
                                if (s.closest) n = s.closest.call(t, i);
                                else
                                    do {
                                        if (e.call(t, i)) return t;
                                        t = t.parentElement || t.parentNode
                                    } while (null !== t && 1 === t.nodeType);
                                return n
                            }(i.target, ".highcharts-popup") ? s.cancelClick && setTimeout((() => {
                                s.cancelClick = !1
                            }), 0) : A(this, "closePopup")), e && e.start && (this.nextEvent ? (this.nextEvent(i, this.currentUserDetails), this.steps && (this.stepIndex++, e.steps[this.stepIndex] ? this.mouseMoveEvent = this.nextEvent = e.steps[this.stepIndex] : (A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), t.removeClass("highcharts-draw-mode"), e.end && e.end.call(this, i, this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1, this.selectedButton = null))) : (this.currentUserDetails = e.start.call(this, i)) && e.steps ? (this.stepIndex = 0, this.steps = !0, this.mouseMoveEvent = this.nextEvent = e.steps[this.stepIndex]) : (A(this, "deselectButton", {
                                button: this.selectedButtonElement
                            }), t.removeClass("highcharts-draw-mode"), this.steps = !1, this.selectedButton = null, e.end && e.end.call(this, i, this.currentUserDetails)))
                        }
                        bindingsContainerMouseMove(t, i) {
                            this.mouseMoveEvent && this.mouseMoveEvent(i, this.currentUserDetails)
                        }
                        fieldsToOptions(t, i) {
                            return j(t, ((t, s) => {
                                const e = parseFloat(t),
                                    n = s.split("."),
                                    o = n.length - 1;
                                if (!k(e) || t.match(/px|em/g) || s.match(/format/g) || (t = e), "undefined" !== t) {
                                    let s = i;
                                    n.forEach(((i, e) => {
                                        const a = O(n[e + 1], "");
                                        o === e ? s[i] = t : (s[i] || (s[i] = a.match(/\d/g) ? [] : {}), s = s[i])
                                    }))
                                }
                            })), i
                        }
                        deselectAnnotation() {
                            this.activeAnnotation && (this.activeAnnotation.setControlPointsVisibility(!1), this.activeAnnotation = !1)
                        }
                        annotationToFields(t) {
                            function i(s, e, o, r, l) {
                                let h;
                                o && s && -1 === a.indexOf(e) && (0 <= (o.indexOf && o.indexOf(e)) || o[e] || !0 === o) && (C(s) ? (r[e] = [], s.forEach(((t, s) => {
                                    P(t) ? (r[e][s] = {}, j(t, ((t, o) => {
                                        i(t, o, n[e], r[e][s], e)
                                    }))) : i(t, 0, n[e], r[e], e)
                                }))) : P(s) ? (h = {}, C(r) ? (r.push(h), h[e] = {}, h = h[e]) : r[e] = h, j(s, ((t, s) => {
                                    i(t, s, 0 === e ? o : n[e], h, e)
                                }))) : "format" === e ? r[e] = [f(s, t.labels[0].points[0]).toString(), "text"] : C(r) ? r.push([s, v(l, s)]) : r[e] = [s, v(e, s)])
                            }
                            const s = t.options,
                                e = B.annotationsEditable,
                                n = e.nestedOptions,
                                o = O(s.type, s.shapes && s.shapes[0] && s.shapes[0].type, s.labels && s.labels[0] && s.labels[0].type, "label"),
                                a = B.annotationsNonEditable[s.langKey] || [],
                                r = {
                                    langKey: s.langKey,
                                    type: o
                                };
                            return j(s, ((t, a) => {
                                "typeOptions" === a ? (r[a] = {}, j(s[a], ((t, s) => {
                                    i(t, s, n, r[a], s)
                                }))) : i(t, a, e[o], r, a)
                            })), r
                        }
                        getClickedClassNames(t, i) {
                            let s, e = i.target;
                            for (i = []; e && e.tagName && ((s = b(e, "class")) && (i = i.concat(s.split(" ").map((t => [t, e])))), e = e.parentNode, e !== t););
                            return i
                        }
                        getButtonEvents(t, i) {
                            const s = this;
                            let e;
                            return this.getClickedClassNames(t, i).forEach((t => {
                                s.boundClassNames[t[0]] && !e && (e = {
                                    events: s.boundClassNames[t[0]],
                                    button: t[1]
                                })
                            })), e
                        }
                        update(t) {
                            this.options = w(!0, this.options, t), this.removeEvents(), this.initEvents()
                        }
                        removeEvents() {
                            this.eventsToUnbind.forEach((t => t()))
                        }
                        destroy() {
                            this.removeEvents()
                        }
                    }
                    return B.annotationsEditable = {
                        nestedOptions: {
                            labelOptions: ["style", "format", "backgroundColor"],
                            labels: ["style"],
                            label: ["style"],
                            style: ["fontSize", "color"],
                            background: ["fill", "strokeWidth", "stroke"],
                            innerBackground: ["fill", "strokeWidth", "stroke"],
                            outerBackground: ["fill", "strokeWidth", "stroke"],
                            shapeOptions: ["fill", "strokeWidth", "stroke"],
                            shapes: ["fill", "strokeWidth", "stroke"],
                            line: ["strokeWidth", "stroke"],
                            backgroundColors: [!0],
                            connector: ["fill", "strokeWidth", "stroke"],
                            crosshairX: ["strokeWidth", "stroke"],
                            crosshairY: ["strokeWidth", "stroke"]
                        },
                        circle: ["shapes"],
                        ellipse: ["shapes"],
                        verticalLine: [],
                        label: ["labelOptions"],
                        measure: ["background", "crosshairY", "crosshairX"],
                        fibonacci: [],
                        tunnel: ["background", "line", "height"],
                        pitchfork: ["innerBackground", "outerBackground"],
                        rect: ["shapes"],
                        crookedLine: [],
                        basicAnnotation: ["shapes", "labelOptions"]
                    }, B.annotationsNonEditable = {
                        rectangle: ["crosshairX", "crosshairY", "labelOptions"],
                        ellipse: ["labelOptions"],
                        circle: ["labelOptions"]
                    }, B
                })), i(t, "Shared/BaseForm.js", [t["Core/Renderer/HTML/AST.js"], t["Core/Utilities.js"]], (function(t, i) {
                    const {
                        addEvent: s,
                        createElement: e
                    } = i;
                    return class {
                        constructor(t, i) {
                            this.iconsURL = i, this.container = this.createPopupContainer(t), this.closeButton = this.addCloseButton()
                        }
                        createPopupContainer(t, i = "highcharts-popup highcharts-no-tooltip") {
                            return e("div", {
                                className: i
                            }, void 0, t)
                        }
                        addCloseButton(t = "highcharts-popup-close") {
                            const i = this,
                                n = this.iconsURL,
                                o = e("div", {
                                    className: t
                                }, void 0, this.container);
                            return o.style["background-image"] = "url(" + (n.match(/png|svg|jpeg|jpg|gif/gi) ? n : n + "close.svg") + ")", ["click", "touchstart"].forEach((t => {
                                s(o, t, i.closeButtonEvents.bind(i))
                            })), o
                        }
                        closeButtonEvents() {
                            this.closePopup()
                        }
                        showPopup(i = "highcharts-annotation-toolbar") {
                            const s = this.container,
                                e = this.closeButton;
                            this.type = void 0, s.innerHTML = t.emptyHTML, 0 <= s.className.indexOf(i) && (s.classList.remove(i), s.removeAttribute("style")), s.appendChild(e), s.style.display = "block", s.style.height = ""
                        }
                        closePopup() {
                            this.container.style.display = "none"
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupAnnotations.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s(t, i, h, p, d, u) {
                        if (i) {
                            var g, f, m = this.addInput,
                                y = this.lang;
                            l(p, ((e, n) => {
                                g = "" !== h ? h + "." + n : n, r(e) && (!a(e) || a(e) && r(e[0]) ? ((f = y[n] || n).match(/\d/g) || d.push([!0, f, t]), s.call(this, t, i, g, e, d, !1)) : d.push([this, g, "annotation", t, e]))
                            })), u && (c(d, (t => t[1].match(/format/g) ? -1 : 1)), n && d.reverse(), d.forEach((t => {
                                !0 === t[0] ? o("span", {
                                    className: "highcharts-annotation-title"
                                }, void 0, t[2]).appendChild(e.createTextNode(t[1])) : (t[4] = {
                                    value: t[4][0],
                                    type: t[4][1]
                                }, m.apply(t[0], t.splice(1)))
                            })))
                        }
                    }
                    const {
                        doc: e,
                        isFirefox: n
                    } = t, {
                        createElement: o,
                        isArray: a,
                        isObject: r,
                        objectEach: l,
                        pick: h,
                        stableSort: c
                    } = i;
                    return {
                        addForm: function(t, i, n, a) {
                            if (t) {
                                var r = this.container,
                                    l = this.lang,
                                    h = o("h2", {
                                        className: "highcharts-popup-main-title"
                                    }, void 0, r);
                                h.appendChild(e.createTextNode(l[i.langKey] || i.langKey || "")), h = o("div", {
                                    className: "highcharts-popup-lhs-col highcharts-popup-lhs-full"
                                }, void 0, r);
                                var c = o("div", {
                                    className: "highcharts-popup-bottom-row"
                                }, void 0, r);
                                s.call(this, h, t, "", i, [], !0), this.addButton(c, a ? l.addButton || "Add" : l.saveButton || "Save", a ? "add" : "save", r, n)
                            }
                        },
                        addToolbar: function(t, i, s) {
                            const n = this.lang,
                                a = this.container,
                                r = this.showForm; - 1 === a.className.indexOf("highcharts-annotation-toolbar") && (a.className += " highcharts-annotation-toolbar"), t && (a.style.top = t.plotTop + 10 + "px"), o("span", void 0, void 0, a).appendChild(e.createTextNode(h(n[i.langKey] || i.langKey, i.shapes && i.shapes[0].type, "")));
                            let l = this.addButton(a, n.removeButton || "Remove", "remove", a, s);
                            l.className += " highcharts-annotation-remove-button", l.style["background-image"] = "url(" + this.iconsURL + "destroy.svg)", l = this.addButton(a, n.editButton || "Edit", "edit", a, (() => {
                                r.call(this, "annotation-edit", t, i, s)
                            })), l.className += " highcharts-annotation-edit-button", l.style["background-image"] = "url(" + this.iconsURL + "edit.svg)"
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupIndicators.js", [t["Core/Renderer/HTML/AST.js"], t["Core/Globals.js"], t["Extensions/Annotations/NavigationBindingsUtilities.js"], t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]], (function(t, i, s, e, n) {
                    function o(t) {
                        const i = v("div", {
                            className: "highcharts-popup-lhs-col"
                        }, void 0, t);
                        return t = v("div", {
                            className: "highcharts-popup-rhs-col"
                        }, void 0, t), v("div", {
                            className: "highcharts-popup-rhs-col-wrapper"
                        }, void 0, t), {
                            lhsCol: i,
                            rhsCol: t
                        }
                    }

                    function a(i, s, e, n) {
                        const o = this,
                            a = o.lang,
                            l = s.querySelectorAll(".highcharts-popup-lhs-col")[0];
                        s = s.querySelectorAll(".highcharts-popup-rhs-col")[0];
                        const h = "edit" === e;
                        if (e = h ? i.series : i.options.plotOptions || {}, i || !e) {
                            var c, m = [];
                            h || b(e) ? b(e) && (m = d.call(this, e)) : m = p.call(this, e, n), E(m, ((t, i) => (t = t.indicatorFullName.toLowerCase()) < (i = i.indicatorFullName.toLowerCase()) ? -1 : t > i ? 1 : 0)), l.children[1] && l.children[1].remove();
                            var x = v("ul", {
                                    className: "highcharts-indicator-list"
                                }, void 0, l),
                                A = s.querySelectorAll(".highcharts-popup-rhs-col-wrapper")[0];
                            m.forEach((s => {
                                const {
                                    indicatorFullName: e,
                                    indicatorType: n,
                                    series: a
                                } = s;
                                (c = v("li", {
                                    className: "highcharts-indicator-list"
                                }, void 0, x)).appendChild(f.createTextNode(e)), ["click", "touchstart"].forEach((s => {
                                    y(c, s, (function() {
                                        const s = A.parentNode.children[1]; {
                                            const s = a.params || a.options.params;
                                            A.innerHTML = t.emptyHTML, v("h3", {
                                                className: "highcharts-indicator-title"
                                            }, void 0, A).appendChild(f.createTextNode(u(a, n).indicatorFullName)), v("input", {
                                                type: "hidden",
                                                name: "highcharts-type-" + n,
                                                value: n
                                            }, void 0, A), g.call(o, n, "series", i, A, a, a.linkedParent && a.linkedParent.options.id), s.volumeSeriesID && g.call(o, n, "volume", i, A, a, a.linkedParent && s.volumeSeriesID), r.call(o, i, "params", s, n, A)
                                        }
                                        s && (s.style.display = "block"), h && a.options && v("input", {
                                            type: "hidden",
                                            name: "highcharts-id-" + n,
                                            value: a.options.id
                                        }, void 0, A).setAttribute("highcharts-data-series-id", a.options.id)
                                    }))
                                }))
                            })), 0 < x.childNodes.length ? x.childNodes[0].click() : h || (t.setElementHTML(A.parentNode.children[0], a.noFilterMatch || ""), A.parentNode.children[1].style.display = "none")
                        }
                    }

                    function r(t, i, s, e, n) {
                        if (t) {
                            var o = this.addInput;
                            C(s, ((s, a) => {
                                var l = i + "." + a;
                                x(s) && l && (A(s) && (o.call(this, l, e, n, {}), r.call(this, t, l, s, e, n)), l in k ? (l = h.call(this, e, l, n), c.call(this, t, i, l, e, a, s)) : "params.volumeSeriesID" === l || b(s) || o.call(this, l, e, n, {
                                    value: s,
                                    type: "number"
                                }))
                            }))
                        }
                    }

                    function l(t, i) {
                        const s = this;
                        var e = i.querySelectorAll(".highcharts-popup-lhs-col")[0];
                        i = this.lang.clearFilter, e = v("div", {
                            className: "highcharts-input-wrapper"
                        }, void 0, e);
                        const n = this.addInput("searchIndicators", "input", e, {
                                value: "",
                                type: "text",
                                htmlFor: "search-indicators",
                                labelClassName: "highcharts-input-search-indicators-label"
                            }),
                            o = v("a", {
                                textContent: i
                            }, void 0, e);
                        n.classList.add("highcharts-input-search-indicators"), o.classList.add("clear-filter-button"), y(n, "input", (function(i) {
                            a.call(s, t, s.container, "add", this.value), o.style.display = this.value.length ? "inline-block" : "none"
                        })), ["click", "touchstart"].forEach((i => {
                            y(o, i, (function() {
                                n.value = "", a.call(s, t, s.container, "add", ""), o.style.display = "none"
                            }))
                        }))
                    }

                    function h(t, i, s) {
                        var e = i.split(".");
                        e = e[e.length - 1], t = "highcharts-" + i + "-type-" + t;
                        const n = this.lang;
                        return v("label", {
                            htmlFor: t
                        }, null, s).appendChild(f.createTextNode(n[e] || i)), (s = v("select", {
                            name: t,
                            className: "highcharts-popup-field",
                            id: "highcharts-select-" + i
                        }, null, s)).setAttribute("id", "highcharts-select-" + i), s
                    }

                    function c(t, i, s, e, n, o, a) {
                        "series" === i || "volume" === i ? t.series.forEach((t => {
                            const e = t.options,
                                n = e.name || e.params ? t.name : e.id || "";
                            "highcharts-navigator-series" !== e.id && e.id !== (a && a.options && a.options.id) && (x(o) || "volume" !== i || "column" !== t.type || (o = e.id), v("option", {
                                value: e.id
                            }, void 0, s).appendChild(f.createTextNode(n)))
                        })) : e && n && P[n + "-" + e].forEach((t => {
                            v("option", {
                                value: t
                            }, void 0, s).appendChild(f.createTextNode(t))
                        })), x(o) && (s.value = o)
                    }

                    function p(t, i) {
                        const s = this.chart && this.chart.options.lang,
                            e = s && s.navigation && s.navigation.popup && s.navigation.popup.indicatorAliases,
                            n = [];
                        let o;
                        return C(t, ((t, s) => {
                            var a = t && t.options;
                            if (t.params || a && a.params) {
                                const {
                                    indicatorFullName: r,
                                    indicatorType: l
                                } = u(t, s);
                                i ? (s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = new RegExp(s, "i"), a = e && e[l] && e[l].join(" ") || "", (r.match(s) || a.match(s)) && (o = {
                                    indicatorFullName: r,
                                    indicatorType: l,
                                    series: t
                                }, n.push(o))) : (o = {
                                    indicatorFullName: r,
                                    indicatorType: l,
                                    series: t
                                }, n.push(o))
                            }
                        })), n
                    }

                    function d(t) {
                        const i = [];
                        return t.forEach((t => {
                            t.is("sma") && i.push({
                                indicatorFullName: t.name,
                                indicatorType: t.type,
                                series: t
                            })
                        })), i
                    }

                    function u(t, i) {
                        const s = t.options;
                        let e = m[i] && m[i].prototype.nameBase || i.toUpperCase();
                        return s && s.type && (i = t.options.type, e = t.name), {
                            indicatorFullName: e,
                            indicatorType: i
                        }
                    }

                    function g(t, i, s, e, n, o) {
                        s && (t = h.call(this, t, i, e), c.call(this, s, i, t, void 0, void 0, void 0, n), x(o) && (t.value = o))
                    }
                    const {
                        doc: f
                    } = i, {
                        seriesTypes: m
                    } = e, {
                        addEvent: y,
                        createElement: v,
                        defined: x,
                        isArray: b,
                        isObject: A,
                        objectEach: C,
                        stableSort: E
                    } = n;
                    var k;
                    ! function(t) {
                        t[t["params.algorithm"] = 0] = "params.algorithm", t[t["params.average"] = 1] = "params.average"
                    }(k || (k = {}));
                    const P = {
                        "algorithm-pivotpoints": ["standard", "fibonacci", "camarilla"],
                        "average-disparityindex": ["sma", "ema", "dema", "tema", "wma"]
                    };
                    return {
                        addForm: function(t, i, s) {
                            let e;
                            if (i = this.lang, t) {
                                this.tabs.init.call(this, t);
                                var n = this.container.querySelectorAll(".highcharts-tab-item-content");
                                o(n[0]), l.call(this, t, n[0]), a.call(this, t, n[0], "add"), e = n[0].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(e, i.addButton || "add", "add", e, s), o(n[1]), a.call(this, t, n[1], "edit"), e = n[1].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(e, i.saveButton || "save", "edit", e, s), this.addButton(e, i.removeButton || "remove", "remove", e, s)
                            }
                        },
                        getAmount: function() {
                            let t = 0;
                            return this.series.forEach((i => {
                                (i.params || i.options.params) && t++
                            })), t
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/PopupTabs.js", [t["Core/Globals.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s() {
                        return l("div", {
                            className: "highcharts-tab-item-content highcharts-no-mousewheel"
                        }, void 0, this.container)
                    }

                    function e(t, i) {
                        const s = this.container,
                            e = this.lang;
                        let n = "highcharts-tab-item";
                        return 0 === i && (n += " highcharts-tab-disabled"), (i = l("span", {
                            className: n
                        }, void 0, s)).appendChild(a.createTextNode(e[t + "Button"] || t)), i.setAttribute("highcharts-data-tab-type", t), i
                    }

                    function n(t, i) {
                        const s = this.container.querySelectorAll(".highcharts-tab-item-content");
                        t.className += " highcharts-tab-item-active", s[i].className += " highcharts-tab-item-show"
                    }

                    function o(t) {
                        const i = this;
                        this.container.querySelectorAll(".highcharts-tab-item").forEach(((s, e) => {
                            0 === t && "edit" === s.getAttribute("highcharts-data-tab-type") || ["click", "touchstart"].forEach((t => {
                                r(s, t, (function() {
                                    {
                                        var t = i.container;
                                        const s = t.querySelectorAll(".highcharts-tab-item");
                                        t = t.querySelectorAll(".highcharts-tab-item-content");
                                        for (let i = 0; i < s.length; i++) s[i].classList.remove("highcharts-tab-item-active"), t[i].classList.remove("highcharts-tab-item-show")
                                    }
                                    n.call(i, this, e)
                                }))
                            }))
                        }))
                    }
                    const {
                        doc: a
                    } = t, {
                        addEvent: r,
                        createElement: l
                    } = i;
                    return {
                        init: function(t) {
                            if (t) {
                                t = this.indicators.getAmount.call(t);
                                var i = e.call(this, "add");
                                e.call(this, "edit", t), s.call(this), s.call(this), o.call(this, t), n.call(this, i, 0)
                            }
                        }
                    }
                })), i(t, "Extensions/Annotations/Popup/Popup.js", [t["Shared/BaseForm.js"], t["Core/Globals.js"], t["Core/Defaults.js"], t["Extensions/Annotations/Popup/PopupAnnotations.js"], t["Extensions/Annotations/Popup/PopupIndicators.js"], t["Extensions/Annotations/Popup/PopupTabs.js"], t["Core/Utilities.js"]], (function(t, i, s, e, n, o, a) {
                    const {
                        doc: r
                    } = i, {
                        getOptions: l
                    } = s, {
                        addEvent: h,
                        createElement: c,
                        extend: p,
                        fireEvent: d,
                        pick: u
                    } = a;
                    class g extends t {
                        constructor(t, i, s) {
                            super(t, i), this.chart = s, this.lang = l().lang.navigation.popup, h(this.container, "mousedown", (() => {
                                const t = s && s.navigationBindings && s.navigationBindings.activeAnnotation;
                                if (t) {
                                    t.cancelClick = !0;
                                    const i = h(r, "click", (() => {
                                        setTimeout((() => {
                                            t.cancelClick = !1
                                        }), 0), i()
                                    }))
                                }
                            }))
                        }
                        addInput(t, i, s, e) {
                            var n = t.split(".");
                            n = n[n.length - 1];
                            const o = this.lang;
                            return i = "highcharts-" + i + "-" + u(e.htmlFor, n), n.match(/^\d+$/) || c("label", {
                                htmlFor: i,
                                className: e.labelClassName
                            }, void 0, s).appendChild(r.createTextNode(o[n] || n)), (s = c("input", {
                                name: i,
                                value: e.value,
                                type: e.type,
                                className: "highcharts-popup-field"
                            }, void 0, s)).setAttribute("highcharts-data-name", t), s
                        }
                        closeButtonEvents() {
                            if (this.chart) {
                                const t = this.chart.navigationBindings;
                                d(t, "closePopup"), t && t.selectedButtonElement && d(t, "deselectButton", {
                                    button: t.selectedButtonElement
                                })
                            } else super.closeButtonEvents()
                        }
                        addButton(t, i, s, e, n) {
                            const o = c("button", void 0, void 0, t);
                            return o.appendChild(r.createTextNode(i)), n && ["click", "touchstart"].forEach((t => {
                                h(o, t, (() => (this.closePopup(), n(function(t, i) {
                                    const s = Array.prototype.slice.call(t.querySelectorAll("input")),
                                        e = Array.prototype.slice.call(t.querySelectorAll("select")),
                                        n = t.querySelectorAll("#highcharts-select-series > option:checked")[0];
                                    t = t.querySelectorAll("#highcharts-select-volume > option:checked")[0];
                                    const o = {
                                        actionType: i,
                                        linkedTo: n && n.getAttribute("value") || "",
                                        fields: {}
                                    };
                                    return s.forEach((t => {
                                        const i = t.getAttribute("highcharts-data-name");
                                        t.getAttribute("highcharts-data-series-id") ? o.seriesId = t.value : i ? o.fields[i] = t.value : o.type = t.value
                                    })), e.forEach((t => {
                                        var i = t.id;
                                        "highcharts-select-series" !== i && "highcharts-select-volume" !== i && (i = i.split("highcharts-select-")[1], o.fields[i] = t.value)
                                    })), t && (o.fields["params.volumeSeriesID"] = t.getAttribute("value") || ""), o
                                }(e, s)))))
                            })), o
                        }
                        showForm(t, i, s, e) {
                            i && (this.showPopup(), "indicators" === t && this.indicators.addForm.call(this, i, s, e), "annotation-toolbar" === t && this.annotations.addToolbar.call(this, i, s, e), "annotation-edit" === t && this.annotations.addForm.call(this, i, s, e), "flag" === t && this.annotations.addForm.call(this, i, s, e, !0), this.type = t, this.container.style.height = this.container.offsetHeight + "px")
                        }
                    }
                    return p(g.prototype, {
                        annotations: e,
                        indicators: n,
                        tabs: o
                    }), g
                })), i(t, "Extensions/Annotations/Popup/PopupComposition.js", [t["Extensions/Annotations/Popup/Popup.js"], t["Core/Utilities.js"]], (function(t, i) {
                    function s() {
                        this.popup && this.popup.closePopup()
                    }

                    function e(i) {
                        this.popup || (this.popup = new t(this.chart.container, this.chart.options.navigation.iconsURL || this.chart.options.stockTools && this.chart.options.stockTools.gui.iconsURL || "https://code.highcharts.com/11.1.0/gfx/stock-icons/", this.chart)), this.popup.showForm(i.formType, this.chart, i.options, i.onSubmit)
                    }

                    function n(t, i) {
                        this.inClass(i.target, "highcharts-popup") || t.apply(this, Array.prototype.slice.call(arguments, 1))
                    }
                    const {
                        addEvent: o,
                        wrap: a
                    } = i, r = [];
                    return {
                        compose: function(t, l) {
                            i.pushUnique(r, t) && (o(t, "closePopup", s), o(t, "showPopup", e)), i.pushUnique(r, l) && a(l.prototype, "onContainerMouseDown", n)
                        }
                    }
                })), i(t, "Extensions/Annotations/Annotation.js", [t["Core/Animation/AnimationUtilities.js"], t["Extensions/Annotations/AnnotationChart.js"], t["Extensions/Annotations/AnnotationDefaults.js"], t["Extensions/Annotations/Controllables/ControllableRect.js"], t["Extensions/Annotations/Controllables/ControllableCircle.js"], t["Extensions/Annotations/Controllables/ControllableEllipse.js"], t["Extensions/Annotations/Controllables/ControllablePath.js"], t["Extensions/Annotations/Controllables/ControllableImage.js"], t["Extensions/Annotations/Controllables/ControllableLabel.js"], t["Extensions/Annotations/ControlPoint.js"], t["Extensions/Annotations/ControlTarget.js"], t["Extensions/Annotations/EventEmitter.js"], t["Extensions/Annotations/MockPoint.js"], t["Extensions/Annotations/NavigationBindings.js"], t["Extensions/Annotations/Popup/PopupComposition.js"], t["Core/Utilities.js"]], (function(t, i, s, e, n, o, a, r, l, h, c, p, d, u, g, f) {
                    function m(t, i) {
                        const s = {};
                        return ["labels", "shapes"].forEach((e => {
                            const n = t[e];
                            n && (s[e] = i[e] ? E(i[e]).map((function(t, i) {
                                return A(n[i], t)
                            })) : t[e])
                        })), s
                    }
                    const {
                        getDeferredAnimation: y
                    } = t, {
                        destroyObjectProperties: v,
                        erase: x,
                        fireEvent: b,
                        merge: A,
                        pick: C,
                        splat: E
                    } = f;
                    class k extends p {
                        static compose(t, s, e) {
                            i.compose(k, t, s), l.compose(e), a.compose(t, e), u.compose(k, t), g.compose(u, s)
                        }
                        constructor(t, i) {
                            super(), this.coll = "annotations", this.shapesGroup = this.labelsGroup = this.labelCollector = this.group = this.graphic = this.animationConfig = void 0, this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.index = -1, this.labels = [], this.shapes = [], this.options = A(this.defaultOptions, i), this.userOptions = i, i = m(this.options, i), this.options.labels = i.labels, this.options.shapes = i.shapes, this.init(t, this.options)
                        }
                        addClipPaths() {
                            this.setClipAxes(), this.clipXAxis && this.clipYAxis && this.options.crop && (this.clipRect = this.chart.renderer.clipRect(this.getClipBox()))
                        }
                        addLabels() {
                            const t = this.options.labels || [];
                            t.forEach(((i, s) => {
                                i = this.initLabel(i, s), A(!0, t[s], i.options)
                            }))
                        }
                        addShapes() {
                            const t = this.options.shapes || [];
                            t.forEach(((i, s) => {
                                i = this.initShape(i, s), A(!0, t[s], i.options)
                            }))
                        }
                        destroy() {
                            const t = this.chart,
                                i = function(t) {
                                    t.destroy()
                                };
                            this.labels.forEach(i), this.shapes.forEach(i), this.clipYAxis = this.clipXAxis = null, x(t.labelCollectors, this.labelCollector), super.destroy(), this.destroyControlTarget(), v(this, t)
                        }
                        destroyItem(t) {
                            x(this[t.itemType + "s"], t), t.destroy()
                        }
                        getClipBox() {
                            if (this.clipXAxis && this.clipYAxis) return {
                                x: this.clipXAxis.left,
                                y: this.clipYAxis.top,
                                width: this.clipXAxis.width,
                                height: this.clipYAxis.height
                            }
                        }
                        initProperties(t, i) {
                            this.setOptions(i);
                            const s = m(this.options, i);
                            this.options.labels = s.labels, this.options.shapes = s.shapes, this.chart = t, this.points = [], this.controlPoints = [], this.coll = "annotations", this.userOptions = i, this.labels = [], this.shapes = []
                        }
                        init(t, i, s = this.index) {
                            t = this.chart, i = this.options.animation, this.index = s, this.linkPoints(), this.addControlPoints(), this.addShapes(), this.addLabels(), this.setLabelCollector(), this.animationConfig = y(t, i)
                        }
                        initLabel(t, i) {
                            return t = A(this.options.labelOptions, {
                                controlPointOptions: this.options.controlPointOptions
                            }, t), (i = new l(this, t, i)).itemType = "label", this.labels.push(i), i
                        }
                        initShape(t, i) {
                            return t = A(this.options.shapeOptions, {
                                controlPointOptions: this.options.controlPointOptions
                            }, t), (i = new k.shapesMap[t.type](this, t, i)).itemType = "shape", this.shapes.push(i), i
                        }
                        redraw(t) {
                            this.linkPoints(), this.graphic || this.render(), this.clipRect && this.clipRect.animate(this.getClipBox()), this.redrawItems(this.shapes, t), this.redrawItems(this.labels, t), this.redrawControlPoints(t)
                        }
                        redrawItem(t, i) {
                            t.linkPoints(), t.shouldBeDrawn() ? (t.graphic || this.renderItem(t), t.redraw(C(i, !0) && t.graphic.placed), t.points.length && function(t) {
                                const i = t.graphic;
                                t = t.points.some((t => !1 !== t.series.visible && !1 !== t.visible)), i && (t ? "hidden" === i.visibility && i.show() : i.hide())
                            }(t)) : this.destroyItem(t)
                        }
                        redrawItems(t, i) {
                            let s = t.length;
                            for (; s--;) this.redrawItem(t[s], i)
                        }
                        remove() {
                            return this.chart.removeAnnotation(this)
                        }
                        render() {
                            const t = this.chart.renderer;
                            this.graphic = t.g("annotation").attr({
                                opacity: 0,
                                zIndex: this.options.zIndex,
                                visibility: this.options.visible ? "inherit" : "hidden"
                            }).add(), this.shapesGroup = t.g("annotation-shapes").add(this.graphic), this.options.crop && this.shapesGroup.clip(this.chart.plotBoxClip), this.labelsGroup = t.g("annotation-labels").attr({
                                translateX: 0,
                                translateY: 0
                            }).add(this.graphic), this.addClipPaths(), this.clipRect && this.graphic.clip(this.clipRect), this.renderItems(this.shapes), this.renderItems(this.labels), this.addEvents(), this.renderControlPoints()
                        }
                        renderItem(t) {
                            t.render("label" === t.itemType ? this.labelsGroup : this.shapesGroup)
                        }
                        renderItems(t) {
                            let i = t.length;
                            for (; i--;) this.renderItem(t[i])
                        }
                        setClipAxes() {
                            const t = this.chart.xAxis,
                                i = this.chart.yAxis,
                                s = (this.options.labels || []).concat(this.options.shapes || []).reduce(((s, e) => (e = e && (e.point || e.points && e.points[0]), [t[e && e.xAxis] || s[0], i[e && e.yAxis] || s[1]])), []);
                            this.clipXAxis = s[0], this.clipYAxis = s[1]
                        }
                        setControlPointsVisibility(t) {
                            const i = function(i) {
                                i.setControlPointsVisibility(t)
                            };
                            this.controlPoints.forEach((i => {
                                i.setVisibility(t)
                            })), this.shapes.forEach(i), this.labels.forEach(i)
                        }
                        setLabelCollector() {
                            const t = this;
                            t.labelCollector = function() {
                                return t.labels.reduce((function(t, i) {
                                    return i.options.allowOverlap || t.push(i.graphic), t
                                }), [])
                            }, t.chart.labelCollectors.push(t.labelCollector)
                        }
                        setOptions(t) {
                            this.options = A(this.defaultOptions, t)
                        }
                        setVisibility(t) {
                            const i = this.options,
                                s = this.chart.navigationBindings,
                                e = C(t, !i.visible);
                            this.graphic.attr("visibility", e ? "inherit" : "hidden"), e || (t = function(t) {
                                t.setControlPointsVisibility(e)
                            }, this.shapes.forEach(t), this.labels.forEach(t), s.activeAnnotation === this && s.popup && "annotation-toolbar" === s.popup.type && b(s, "closePopup")), i.visible = e
                        }
                        update(t, i) {
                            const s = this.chart,
                                e = m(this.userOptions, t),
                                n = s.annotations.indexOf(this);
                            (t = A(!0, this.userOptions, t)).labels = e.labels, t.shapes = e.shapes, this.destroy(), this.initProperties(s, t), this.init(s, t), s.options.annotations[n] = t, this.isUpdating = !0, C(i, !0) && s.redraw(), b(this, "afterUpdate"), this.isUpdating = !1
                        }
                    }
                    return k.ControlPoint = h, k.MockPoint = d, k.shapesMap = {
                        rect: e,
                        circle: n,
                        ellipse: o,
                        path: a,
                        image: r
                    }, k.types = {}, k.prototype.defaultOptions = s, k.prototype.nonDOMEvents = ["add", "afterUpdate", "drag", "remove"], c.compose(k), k
                })), i(t, "masters/modules/annotations.src.js", [t["Core/Globals.js"], t["Extensions/Annotations/Annotation.js"]], (function(t, i) {
                    t.Annotation = i, i.compose(t.Chart, t.Pointer, t.SVGRenderer)
                }))
            }, t.exports ? (o.default = o, t.exports = o) : (e = [s(5291)], void 0 === (n = function(t) {
                return o(t), o.Highcharts = t, o
            }.apply(i, e)) || (t.exports = n))
        },
        82205: function(t, i, s) {
            "use strict";
            const e = s(81092),
                n = s(25768),
                o = s(72246),
                a = s(16180),
                r = Symbol("encodeFragmentIdentifier");

            function l(t) {
                if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function h(t, i) {
                return i.encode ? i.strict ? e(t) : encodeURIComponent(t) : t
            }

            function c(t, i) {
                return i.decode ? n(t) : t
            }

            function p(t) {
                return Array.isArray(t) ? t.sort() : "object" === typeof t ? p(Object.keys(t)).sort(((t, i) => Number(t) - Number(i))).map((i => t[i])) : t
            }

            function d(t) {
                const i = t.indexOf("#");
                return -1 !== i && (t = t.slice(0, i)), t
            }

            function u(t) {
                const i = (t = d(t)).indexOf("?");
                return -1 === i ? "" : t.slice(i + 1)
            }

            function g(t, i) {
                return i.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !i.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
            }

            function f(t, i) {
                l((i = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, i)).arrayFormatSeparator);
                const s = function(t) {
                        let i;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, s, e) => {
                                    i = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), i ? (void 0 === e[t] && (e[t] = {}), e[t][i[1]] = s) : e[t] = s
                                };
                            case "bracket":
                                return (t, s, e) => {
                                    i = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), i ? void 0 !== e[t] ? e[t] = [].concat(e[t], s) : e[t] = [s] : e[t] = s
                                };
                            case "colon-list-separator":
                                return (t, s, e) => {
                                    i = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), i ? void 0 !== e[t] ? e[t] = [].concat(e[t], s) : e[t] = [s] : e[t] = s
                                };
                            case "comma":
                            case "separator":
                                return (i, s, e) => {
                                    const n = "string" === typeof s && s.includes(t.arrayFormatSeparator),
                                        o = "string" === typeof s && !n && c(s, t).includes(t.arrayFormatSeparator);
                                    s = o ? c(s, t) : s;
                                    const a = n || o ? s.split(t.arrayFormatSeparator).map((i => c(i, t))) : null === s ? s : c(s, t);
                                    e[i] = a
                                };
                            case "bracket-separator":
                                return (i, s, e) => {
                                    const n = /(\[\])$/.test(i);
                                    if (i = i.replace(/\[\]$/, ""), !n) return void(e[i] = s ? c(s, t) : s);
                                    const o = null === s ? [] : s.split(t.arrayFormatSeparator).map((i => c(i, t)));
                                    void 0 !== e[i] ? e[i] = [].concat(e[i], o) : e[i] = o
                                };
                            default:
                                return (t, i, s) => {
                                    void 0 !== s[t] ? s[t] = [].concat(s[t], i) : s[t] = i
                                }
                        }
                    }(i),
                    e = Object.create(null);
                if ("string" !== typeof t) return e;
                if (!(t = t.trim().replace(/^[?#&]/, ""))) return e;
                for (const n of t.split("&")) {
                    if ("" === n) continue;
                    let [t, a] = o(i.decode ? n.replace(/\+/g, " ") : n, "=");
                    a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(i.arrayFormat) ? a : c(a, i), s(c(t, i), a, e)
                }
                for (const n of Object.keys(e)) {
                    const t = e[n];
                    if ("object" === typeof t && null !== t)
                        for (const s of Object.keys(t)) t[s] = g(t[s], i);
                    else e[n] = g(t, i)
                }
                return !1 === i.sort ? e : (!0 === i.sort ? Object.keys(e).sort() : Object.keys(e).sort(i.sort)).reduce(((t, i) => {
                    const s = e[i];
                    return Boolean(s) && "object" === typeof s && !Array.isArray(s) ? t[i] = p(s) : t[i] = s, t
                }), Object.create(null))
            }
            i.extract = u, i.parse = f, i.stringify = (t, i) => {
                if (!t) return "";
                l((i = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, i)).arrayFormatSeparator);
                const s = s => {
                        return i.skipNull && (null === (e = t[s]) || void 0 === e) || i.skipEmptyString && "" === t[s];
                        var e
                    },
                    e = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return i => (s, e) => {
                                    const n = s.length;
                                    return void 0 === e || t.skipNull && null === e || t.skipEmptyString && "" === e ? s : null === e ? [...s, [h(i, t), "[", n, "]"].join("")] : [...s, [h(i, t), "[", h(n, t), "]=", h(e, t)].join("")]
                                };
                            case "bracket":
                                return i => (s, e) => void 0 === e || t.skipNull && null === e || t.skipEmptyString && "" === e ? s : null === e ? [...s, [h(i, t), "[]"].join("")] : [...s, [h(i, t), "[]=", h(e, t)].join("")];
                            case "colon-list-separator":
                                return i => (s, e) => void 0 === e || t.skipNull && null === e || t.skipEmptyString && "" === e ? s : null === e ? [...s, [h(i, t), ":list="].join("")] : [...s, [h(i, t), ":list=", h(e, t)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const i = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                                    return s => (e, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? e : (n = null === n ? "" : n, 0 === e.length ? [
                                        [h(s, t), i, h(n, t)].join("")
                                    ] : [
                                        [e, h(n, t)].join(t.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return i => (s, e) => void 0 === e || t.skipNull && null === e || t.skipEmptyString && "" === e ? s : null === e ? [...s, h(i, t)] : [...s, [h(i, t), "=", h(e, t)].join("")]
                        }
                    }(i),
                    n = {};
                for (const a of Object.keys(t)) s(a) || (n[a] = t[a]);
                const o = Object.keys(n);
                return !1 !== i.sort && o.sort(i.sort), o.map((s => {
                    const n = t[s];
                    return void 0 === n ? "" : null === n ? h(s, i) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === i.arrayFormat ? h(s, i) + "[]" : n.reduce(e(s), []).join("&") : h(s, i) + "=" + h(n, i)
                })).filter((t => t.length > 0)).join("&")
            }, i.parseUrl = (t, i) => {
                i = Object.assign({
                    decode: !0
                }, i);
                const [s, e] = o(t, "#");
                return Object.assign({
                    url: s.split("?")[0] || "",
                    query: f(u(t), i)
                }, i && i.parseFragmentIdentifier && e ? {
                    fragmentIdentifier: c(e, i)
                } : {})
            }, i.stringifyUrl = (t, s) => {
                s = Object.assign({
                    encode: !0,
                    strict: !0,
                    [r]: !0
                }, s);
                const e = d(t.url).split("?")[0] || "",
                    n = i.extract(t.url),
                    o = i.parse(n, {
                        sort: !1
                    }),
                    a = Object.assign(o, t.query);
                let l = i.stringify(a, s);
                l && (l = `?${l}`);
                let c = function(t) {
                    let i = "";
                    const s = t.indexOf("#");
                    return -1 !== s && (i = t.slice(s)), i
                }(t.url);
                return t.fragmentIdentifier && (c = `#${s[r]?h(t.fragmentIdentifier,s):t.fragmentIdentifier}`), `${e}${l}${c}`
            }, i.pick = (t, s, e) => {
                e = Object.assign({
                    parseFragmentIdentifier: !0,
                    [r]: !1
                }, e);
                const {
                    url: n,
                    query: o,
                    fragmentIdentifier: l
                } = i.parseUrl(t, e);
                return i.stringifyUrl({
                    url: n,
                    query: a(o, s),
                    fragmentIdentifier: l
                }, e)
            }, i.exclude = (t, s, e) => {
                const n = Array.isArray(s) ? t => !s.includes(t) : (t, i) => !s(t, i);
                return i.pick(t, n, e)
            }
        },
        72246: function(t) {
            "use strict";
            t.exports = (t, i) => {
                if ("string" !== typeof t || "string" !== typeof i) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === i) return [t];
                const s = t.indexOf(i);
                return -1 === s ? [t] : [t.slice(0, s), t.slice(s + i.length)]
            }
        },
        81092: function(t) {
            "use strict";
            t.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`))
        },
        78659: function(t, i, s) {
            "use strict";
            s.d(i, {
                N: function() {
                    return l
                }
            });
            var e = s(65568),
                n = s(27853),
                o = s(61039);
            class a extends n.z {
                constructor(t, i) {
                    super(t, i)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(t, i) {
                    super.setOptions({ ...t,
                        behavior: (0, o.Gm)()
                    }, i)
                }
                getOptimisticResult(t) {
                    return t.behavior = (0, o.Gm)(), super.getOptimisticResult(t)
                }
                fetchNextPage({
                    pageParam: t,
                    ...i
                } = {}) {
                    return this.fetch({ ...i,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: t
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: t,
                    ...i
                } = {}) {
                    return this.fetch({ ...i,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: t
                            }
                        }
                    })
                }
                createResult(t, i) {
                    var s, e, n, a, r, l;
                    const {
                        state: h
                    } = t, c = super.createResult(t, i), {
                        isFetching: p,
                        isRefetching: d
                    } = c, u = p && "forward" === (null == (s = h.fetchMeta) || null == (e = s.fetchMore) ? void 0 : e.direction), g = p && "backward" === (null == (n = h.fetchMeta) || null == (a = n.fetchMore) ? void 0 : a.direction);
                    return { ...c,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, o.Qy)(i, null == (r = h.data) ? void 0 : r.pages),
                        hasPreviousPage: (0, o.ZF)(i, null == (l = h.data) ? void 0 : l.pages),
                        isFetchingNextPage: u,
                        isFetchingPreviousPage: g,
                        isRefetching: d && !u && !g
                    }
                }
            }
            var r = s(27342);

            function l(t, i, s) {
                const n = (0, e._v)(t, i, s);
                return (0, r.r)(n, a)
            }
        },
        90854: function(t, i, s) {
            "use strict";
            s.d(i, {
                Z: function() {
                    return r
                }
            });
            var e = s(73138),
                n = s(60905),
                o = s(83644),
                a = s(38129);

            function r(t) {
                return (0, e.Z)(t) || (0, n.Z)(t) || (0, o.Z)(t) || (0, a.Z)()
            }
        }
    }
]);