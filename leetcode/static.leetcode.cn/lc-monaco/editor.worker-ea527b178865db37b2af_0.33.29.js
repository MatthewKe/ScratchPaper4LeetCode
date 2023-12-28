(() => {
    "use strict";
    var e = {};
    e.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    const t = new class {
        constructor() {
            this.listeners = [], this.unexpectedErrorHandler = function(e) {
                setTimeout((() => {
                    if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
                    throw e
                }), 0)
            }
        }
        emit(e) {
            this.listeners.forEach((t => {
                t(e)
            }))
        }
        onUnexpectedError(e) {
            this.unexpectedErrorHandler(e), this.emit(e)
        }
        onUnexpectedExternalError(e) {
            this.unexpectedErrorHandler(e)
        }
    };

    function n(e) {
        o(e) || t.onUnexpectedError(e)
    }

    function r(e) {
        if (e instanceof Error) {
            let {
                name: t,
                message: n
            } = e;
            return {
                $isError: !0,
                name: t,
                message: n,
                stack: e.stacktrace || e.stack
            }
        }
        return e
    }
    const i = "Canceled";

    function o(e) {
        return e instanceof a || e instanceof Error && e.name === i && e.message === i
    }
    class a extends Error {
        constructor() {
            super(i), this.name = this.message
        }
    }
    Error;

    function s(e) {
        const t = this;
        let n, r = !1;
        return function() {
            return r || (r = !0, n = e.apply(t, arguments)), n
        }
    }
    var l;
    ! function(e) {
        e.is = function(e) {
            return e && "object" == typeof e && "function" == typeof e[Symbol.iterator]
        };
        const t = Object.freeze([]);
        e.empty = function() {
            return t
        }, e.single = function*(e) {
            yield e
        }, e.from = function(e) {
            return e || t
        }, e.isEmpty = function(e) {
            return !e || !0 === e[Symbol.iterator]().next().done
        }, e.first = function(e) {
            return e[Symbol.iterator]().next().value
        }, e.some = function(e, t) {
            for (const n of e)
                if (t(n)) return !0;
            return !1
        }, e.find = function(e, t) {
            for (const n of e)
                if (t(n)) return n
        }, e.filter = function*(e, t) {
            for (const n of e) t(n) && (yield n)
        }, e.map = function*(e, t) {
            let n = 0;
            for (const r of e) yield t(r, n++)
        }, e.concat = function*() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            for (const e of t)
                for (const t of e) yield t
        }, e.concatNested = function*(e) {
            for (const t of e)
                for (const e of t) yield e
        }, e.reduce = function(e, t, n) {
            let r = n;
            for (const n of e) r = t(r, n);
            return r
        }, e.slice = function*(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
            for (t < 0 && (t += e.length), n < 0 ? n += e.length : n > e.length && (n = e.length); t < n; t++) yield e[t]
        }, e.consume = function(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
            const r = [];
            if (0 === n) return [r, t];
            const i = t[Symbol.iterator]();
            for (let t = 0; t < n; t++) {
                const t = i.next();
                if (t.done) return [r, e.empty()];
                r.push(t.value)
            }
            return [r, {
                [Symbol.iterator]: () => i
            }]
        }, e.equals = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e, t) => e === t;
            const r = e[Symbol.iterator](),
                i = t[Symbol.iterator]();
            for (;;) {
                const e = r.next(),
                    t = i.next();
                if (e.done !== t.done) return !1;
                if (e.done) return !0;
                if (!n(e.value, t.value)) return !1
            }
        }
    }(l || (l = {}));
    let c = null;
    var h;

    function u(e) {
        return null == c || c.trackDisposable(e), e
    }

    function d(e) {
        null == c || c.markAsDisposed(e)
    }

    function f(e, t) {
        null == c || c.setParent(e, t)
    }

    function m(e, t) {
        if (c)
            for (const n of e) c.setParent(n, t)
    }
    class g extends Error {
        constructor(e) {
            super(`Encountered errors while disposing of store. Errors: [${e.join(", ")}]`), this.errors = e
        }
    }

    function b(e) {
        if (l.is(e)) {
            let t = [];
            for (const n of e)
                if (n) try {
                    n.dispose()
                } catch (e) {
                    t.push(e)
                }
            if (1 === t.length) throw t[0];
            if (t.length > 1) throw new g(t);
            return Array.isArray(e) ? [] : e
        }
        if (e) return e.dispose(), e
    }

    function C() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        const r = p((() => b(t)));
        return m(t, r), r
    }

    function p(e) {
        const t = u({
            dispose: s((() => {
                d(t), e()
            }))
        });
        return t
    }
    class w {
        constructor() {
            this._toDispose = new Set, this._isDisposed = !1, u(this)
        }
        dispose() {
            this._isDisposed || (d(this), this._isDisposed = !0, this.clear())
        }
        get isDisposed() {
            return this._isDisposed
        }
        clear() {
            try {
                b(this._toDispose.values())
            } finally {
                this._toDispose.clear()
            }
        }
        add(e) {
            if (!e) return e;
            if (e === this) throw new Error("Cannot register a disposable on itself!");
            return f(e, this), this._isDisposed ? w.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e), e
        }
    }
    w.DISABLE_DISPOSED_WARNING = !1;
    class _ {
        constructor() {
            this._store = new w, u(this), f(this._store, this)
        }
        dispose() {
            d(this), this._store.dispose()
        }
        _register(e) {
            if (e === this) throw new Error("Cannot register a disposable on itself!");
            return this._store.add(e)
        }
    }
    _.None = Object.freeze({
        dispose() {}
    });
    class y {
        constructor() {
            this.dispose = () => {}, this.unset = () => {}, this.isset = () => !1, u(this)
        }
        set(e) {
            let t = e;
            return this.unset = () => t = void 0, this.isset = () => void 0 !== t, this.dispose = () => {
                t && (t(), t = void 0, d(this))
            }, this
        }
    }
    class S {
        constructor(e) {
            this.element = e, this.next = S.Undefined, this.prev = S.Undefined
        }
    }
    S.Undefined = new S(void 0);
    class v {
        constructor() {
            this._first = S.Undefined, this._last = S.Undefined, this._size = 0
        }
        get size() {
            return this._size
        }
        isEmpty() {
            return this._first === S.Undefined
        }
        clear() {
            let e = this._first;
            for (; e !== S.Undefined;) {
                const t = e.next;
                e.prev = S.Undefined, e.next = S.Undefined, e = t
            }
            this._first = S.Undefined, this._last = S.Undefined, this._size = 0
        }
        unshift(e) {
            return this._insert(e, !1)
        }
        push(e) {
            return this._insert(e, !0)
        }
        _insert(e, t) {
            const n = new S(e);
            if (this._first === S.Undefined) this._first = n, this._last = n;
            else if (t) {
                const e = this._last;
                this._last = n, n.prev = e, e.next = n
            } else {
                const e = this._first;
                this._first = n, n.next = e, e.prev = n
            }
            this._size += 1;
            let r = !1;
            return () => {
                r || (r = !0, this._remove(n))
            }
        }
        shift() {
            if (this._first !== S.Undefined) {
                const e = this._first.element;
                return this._remove(this._first), e
            }
        }
        pop() {
            if (this._last !== S.Undefined) {
                const e = this._last.element;
                return this._remove(this._last), e
            }
        }
        _remove(e) {
            if (e.prev !== S.Undefined && e.next !== S.Undefined) {
                const t = e.prev;
                t.next = e.next, e.next.prev = t
            } else e.prev === S.Undefined && e.next === S.Undefined ? (this._first = S.Undefined, this._last = S.Undefined) : e.next === S.Undefined ? (this._last = this._last.prev, this._last.next = S.Undefined) : e.prev === S.Undefined && (this._first = this._first.next, this._first.prev = S.Undefined);
            this._size -= 1
        }*[Symbol.iterator]() {
            let e = this._first;
            for (; e !== S.Undefined;) yield e.element, e = e.next
        }
    }
    const L = "en";
    let N, E, A = !1,
        k = !1,
        M = !1,
        R = !1,
        O = !1,
        x = !1,
        P = !1,
        T = !1,
        I = !1,
        K = null,
        D = null;
    const V = "object" == typeof self ? self : "object" == typeof e.g ? e.g : {};
    let F;
    void 0 !== V.vscode && void 0 !== V.vscode.process ? F = V.vscode.process : "undefined" != typeof process && (F = process);
    const B = "string" == typeof(null === (h = null == F ? void 0 : F.versions) || void 0 === h ? void 0 : h.electron),
        U = B && "renderer" === (null == F ? void 0 : F.type);
    if ("object" != typeof navigator || U)
        if ("object" == typeof F) {
            A = "win32" === F.platform, k = "darwin" === F.platform, M = "linux" === F.platform, R = M && !!F.env.SNAP && !!F.env.SNAP_REVISION, P = B, I = !!F.env.CI || !!F.env.BUILD_ARTIFACTSTAGINGDIRECTORY, N = L, K = L;
            const e = F.env.VSCODE_NLS_CONFIG;
            if (e) try {
                const t = JSON.parse(e),
                    n = t.availableLanguages["*"];
                N = t.locale, K = n || L, D = t._translationsConfigFile
            } catch (e) {}
            O = !0
        } else console.error("Unable to resolve platform.");
    else E = navigator.userAgent, A = E.indexOf("Windows") >= 0, k = E.indexOf("Macintosh") >= 0, T = (E.indexOf("Macintosh") >= 0 || E.indexOf("iPad") >= 0 || E.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, M = E.indexOf("Linux") >= 0, x = !0, N = navigator.language, K = N;
    let q = 0;
    k ? q = 1 : A ? q = 3 : M && (q = 2);
    const H = A,
        W = k,
        $ = (x && V.importScripts, E);
    (() => {
        if ("function" == typeof V.postMessage && !V.importScripts) {
            let e = [];
            V.addEventListener("message", (t => {
                if (t.data && t.data.vscodeScheduleAsyncWork)
                    for (let n = 0, r = e.length; n < r; n++) {
                        const r = e[n];
                        if (r.id === t.data.vscodeScheduleAsyncWork) return e.splice(n, 1), void r.callback()
                    }
            }));
            let t = 0;
            return n => {
                const r = ++t;
                e.push({
                    id: r,
                    callback: n
                }), V.postMessage({
                    vscodeScheduleAsyncWork: r
                }, "*")
            }
        }
    })();
    const z = !!($ && $.indexOf("Chrome") >= 0),
        j = ($ && $.indexOf("Firefox"), !z && $ && $.indexOf("Safari"), $ && $.indexOf("Edg/"), $ && $.indexOf("Android"), V.performance && "function" == typeof V.performance.now);
    class G {
        constructor(e) {
            this._highResolution = j && e, this._startTime = this._now(), this._stopTime = -1
        }
        static create() {
            return new G(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0])
        }
        stop() {
            this._stopTime = this._now()
        }
        elapsed() {
            return -1 !== this._stopTime ? this._stopTime - this._startTime : this._now() - this._startTime
        }
        _now() {
            return this._highResolution ? V.performance.now() : Date.now()
        }
    }
    var Y;
    ! function(e) {
        function t(e) {
            false
        }

        function n(e) {
            return function(t) {
                let n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = !1;
                return n = e((e => {
                    if (!o) return n ? n.dispose() : o = !0, t.call(r, e)
                }), null, i), o && n.dispose(), n
            }
        }

        function r(e, t, n) {
            return s((function(n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                return e((e => n.call(r, t(e))), null, i)
            }), n)
        }

        function i(e, t, n) {
            return s((function(n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                return e((e => {
                    t(e), n.call(r, e)
                }), null, i)
            }), n)
        }

        function o(e, t, n) {
            return s((function(n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                return e((e => t(e) && n.call(r, e)), null, i)
            }), n)
        }

        function a(e, t, n, i) {
            let o = n;
            return r(e, (e => (o = t(o, e), o)), i)
        }

        function s(e, n) {
            let r;
            const i = {
                onFirstListenerAdd() {
                    r = e(o.fire, o)
                },
                onLastListenerRemove() {
                    r.dispose()
                }
            };
            n || t();
            const o = new X(i);
            return n && n.add(o), o.event
        }

        function l(e, n) {
            let r, i, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                l = arguments.length > 4 ? arguments[4] : void 0,
                c = arguments.length > 5 ? arguments[5] : void 0,
                h = 0;
            const u = {
                leakWarningThreshold: l,
                onFirstListenerAdd() {
                    r = e((e => {
                        h++, i = n(i, e), s && !o && (d.fire(i), i = void 0), clearTimeout(o), o = setTimeout((() => {
                            const e = i;
                            i = void 0, o = void 0, (!s || h > 1) && d.fire(e), h = 0
                        }), a)
                    }))
                },
                onLastListenerRemove() {
                    r.dispose()
                }
            };
            c || t();
            const d = new X(u);
            return c && c.add(d), d.event
        }

        function c(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e, t) => e === t,
                r = arguments.length > 2 ? arguments[2] : void 0,
                i = !0;
            return o(e, (e => {
                const r = i || !n(e, t);
                return i = !1, t = e, r
            }), r)
        }
        e.None = () => _.None, e.once = n, e.map = r, e.forEach = i, e.filter = o, e.signal = function(e) {
            return e
        }, e.any = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                return C(...t.map((t => t((t => e.call(n, t)), null, r))))
            }
        }, e.reduce = a, e.debounce = l, e.latch = c, e.split = function(t, n, r) {
            return [e.filter(t, n, r), e.filter(t, (e => !n(e)), r)]
        }, e.buffer = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                r = n.slice(),
                i = e((e => {
                    r ? r.push(e) : a.fire(e)
                }));
            const o = () => {
                    r && r.forEach((e => a.fire(e))), r = null
                },
                a = new X({
                    onFirstListenerAdd() {
                        i || (i = e((e => a.fire(e))))
                    },
                    onFirstListenerDidAdd() {
                        r && (t ? setTimeout(o) : o())
                    },
                    onLastListenerRemove() {
                        i && i.dispose(), i = null
                    }
                });
            return a.event
        };
        class h {
            constructor(e) {
                this.event = e
            }
            map(e) {
                return new h(r(this.event, e))
            }
            forEach(e) {
                return new h(i(this.event, e))
            }
            filter(e) {
                return new h(o(this.event, e))
            }
            reduce(e, t) {
                return new h(a(this.event, e, t))
            }
            latch() {
                return new h(c(this.event))
            }
            debounce(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                return new h(l(this.event, e, t, n, r))
            }
            on(e, t, n) {
                return this.event(e, t, n)
            }
            once(e, t, r) {
                return n(this.event)(e, t, r)
            }
        }
        e.chain = function(e) {
            return new h(e)
        }, e.fromNodeEventEmitter = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e;
            const r = function() {
                    return a.fire(n(...arguments))
                },
                i = () => e.on(t, r),
                o = () => e.removeListener(t, r),
                a = new X({
                    onFirstListenerAdd: i,
                    onLastListenerRemove: o
                });
            return a.event
        }, e.fromDOMEventEmitter = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e;
            const r = function() {
                    return a.fire(n(...arguments))
                },
                i = () => e.addEventListener(t, r),
                o = () => e.removeEventListener(t, r),
                a = new X({
                    onFirstListenerAdd: i,
                    onLastListenerRemove: o
                });
            return a.event
        }, e.toPromise = function(e) {
            return new Promise((t => n(e)(t)))
        }, e.runAndSubscribe = function(e, t) {
            return t(void 0), e((e => t(e)))
        }, e.runAndSubscribeWithStore = function(e, t) {
            let n = null;

            function r(e) {
                null == n || n.dispose(), n = new w, t(e, n)
            }
            r(void 0);
            const i = e((e => r(e)));
            return p((() => {
                i.dispose(), null == n || n.dispose()
            }))
        }
    }(Y || (Y = {}));
    class Z {
        constructor(e) {
            this._listenerCount = 0, this._invocationCount = 0, this._elapsedOverall = 0, this._name = `${e}_${Z._idPool++}`
        }
        start(e) {
            this._stopWatch = new G(!0), this._listenerCount = e
        }
        stop() {
            if (this._stopWatch) {
                const e = this._stopWatch.elapsed();
                this._elapsedOverall += e, this._invocationCount += 1, console.info(`did FIRE ${this._name}: elapsed_ms: ${e.toFixed(5)}, listener: ${this._listenerCount} (elapsed_overall: ${this._elapsedOverall.toFixed(2)}, invocations: ${this._invocationCount})`), this._stopWatch = void 0
            }
        }
    }
    Z._idPool = 0;
    class J {
        constructor(e) {
            this.value = e
        }
        static create() {
            var e;
            return new J(null !== (e = (new Error).stack) && void 0 !== e ? e : "")
        }
        print() {
            console.warn(this.value.split("\n").slice(2).join("\n"))
        }
    }
    class Q {
        constructor(e, t, n) {
            this.callback = e, this.callbackThis = t, this.stack = n, this.subscription = new y
        }
        invoke(e) {
            this.callback.call(this.callbackThis, e)
        }
    }
    class X {
        constructor(e) {
            var t;
            this._disposed = !1, this._options = e, this._leakageMon = void 0, this._perfMon = (null === (t = this._options) || void 0 === t ? void 0 : t._profName) ? new Z(this._options._profName) : void 0
        }
        dispose() {
            var e, t, n, r;
            this._disposed || (this._disposed = !0, this._listeners && this._listeners.clear(), null === (e = this._deliveryQueue) || void 0 === e || e.clear(), null === (n = null === (t = this._options) || void 0 === t ? void 0 : t.onLastListenerRemove) || void 0 === n || n.call(t), null === (r = this._leakageMon) || void 0 === r || r.dispose())
        }
        get event() {
            return this._event || (this._event = (e, t, n) => {
                var r, i, o;
                this._listeners || (this._listeners = new v);
                const a = this._listeners.isEmpty();
                let s, l;
                a && (null === (r = this._options) || void 0 === r ? void 0 : r.onFirstListenerAdd) && this._options.onFirstListenerAdd(this), this._leakageMon && this._listeners.size >= 30 && (l = J.create(), s = this._leakageMon.check(l, this._listeners.size + 1));
                const c = new Q(e, t, l),
                    h = this._listeners.push(c);
                a && (null === (i = this._options) || void 0 === i ? void 0 : i.onFirstListenerDidAdd) && this._options.onFirstListenerDidAdd(this), (null === (o = this._options) || void 0 === o ? void 0 : o.onListenerDidAdd) && this._options.onListenerDidAdd(this, e, t);
                const u = c.subscription.set((() => {
                    if (s && s(), !this._disposed && (h(), this._options && this._options.onLastListenerRemove)) {
                        this._listeners && !this._listeners.isEmpty() || this._options.onLastListenerRemove(this)
                    }
                }));
                return n instanceof w ? n.add(u) : Array.isArray(n) && n.push(u), u
            }), this._event
        }
        fire(e) {
            var t, r;
            if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new v);
                for (let t of this._listeners) this._deliveryQueue.push([t, e]);
                for (null === (t = this._perfMon) || void 0 === t || t.start(this._deliveryQueue.size); this._deliveryQueue.size > 0;) {
                    const [e, t] = this._deliveryQueue.shift();
                    try {
                        e.invoke(t)
                    } catch (e) {
                        n(e)
                    }
                }
                null === (r = this._perfMon) || void 0 === r || r.stop()
            }
        }
    }

    function ee(e) {
        const t = [];
        for (const n of function(e) {
                let t = [],
                    n = Object.getPrototypeOf(e);
                for (; Object.prototype !== n;) t = t.concat(Object.getOwnPropertyNames(n)), n = Object.getPrototypeOf(n);
                return t
            }(e)) "function" == typeof e[n] && t.push(n);
        return t
    }

    function te(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Unreachable";
        throw new Error(t)
    }
    class ne {
        constructor(e) {
            this.executor = e, this._didRun = !1
        }
        getValue() {
            if (!this._didRun) try {
                this._value = this.executor()
            } catch (e) {
                this._error = e
            } finally {
                this._didRun = !0
            }
            if (this._error) throw this._error;
            return this._value
        }
        get rawValue() {
            return this._value
        }
    }
    var re;

    function ie(e) {
        return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&")
    }

    function oe(e) {
        return e >= 65 && e <= 90
    }

    function ae(e) {
        return 55296 <= e && e <= 56319
    }

    function se(e) {
        return 56320 <= e && e <= 57343
    }

    function le(e, t) {
        return t - 56320 + (e - 55296 << 10) + 65536
    }

    function ce(e, t, n) {
        const r = e.charCodeAt(n);
        if (ae(r) && n + 1 < t) {
            const t = e.charCodeAt(n + 1);
            if (se(t)) return le(r, t)
        }
        return r
    }
    const he = /^[\t\n\r\x20-\x7E]*$/;
    String.fromCharCode(65279);
    class ue {
        constructor() {
            this._data = JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]")
        }
        static getInstance() {
            return ue._INSTANCE || (ue._INSTANCE = new ue), ue._INSTANCE
        }
        getGraphemeBreakType(e) {
            if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
            if (e < 127) return 0;
            const t = this._data,
                n = t.length / 3;
            let r = 1;
            for (; r <= n;)
                if (e < t[3 * r]) r *= 2;
                else {
                    if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                    r = 2 * r + 1
                }
            return 0
        }
    }
    ue._INSTANCE = null;
    class de {
        constructor(e) {
            this.confusableDictionary = e
        }
        static getInstance(e) {
            return de.cache.get(Array.from(e))
        }
        static getLocales() {
            return de._locales.getValue()
        }
        isAmbiguous(e) {
            return this.confusableDictionary.has(e)
        }
        getPrimaryConfusable(e) {
            return this.confusableDictionary.get(e)
        }
        getConfusableCodePoints() {
            return new Set(this.confusableDictionary.keys())
        }
    }
    re = de, de.ambiguousCharacterData = new ne((() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'))), de.cache = new class {
        constructor(e) {
            this.computeFn = e, this.lastCache = void 0, this.lastArgKey = void 0
        }
        get(e) {
            const t = JSON.stringify(e);
            return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this.computeFn(e)), this.lastCache
        }
    }((e => {
        function t(e) {
            const t = new Map;
            for (let n = 0; n < e.length; n += 2) t.set(e[n], e[n + 1]);
            return t
        }

        function n(e, t) {
            if (!e) return t;
            const n = new Map;
            for (const [r, i] of e) t.has(r) && n.set(r, i);
            return n
        }
        const r = re.ambiguousCharacterData.getValue();
        let i, o = e.filter((e => !e.startsWith("_") && e in r));
        0 === o.length && (o = ["_default"]);
        for (const e of o) {
            i = n(i, t(r[e]))
        }
        const a = function(e, t) {
            const n = new Map(e);
            for (const [e, r] of t) n.set(e, r);
            return n
        }(t(r._common), i);
        return new de(a)
    })), de._locales = new ne((() => Object.keys(de.ambiguousCharacterData.getValue()).filter((e => !e.startsWith("_")))));
    class fe {
        static getRawData() {
            return JSON.parse("[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]")
        }
        static getData() {
            return this._data || (this._data = new Set(fe.getRawData())), this._data
        }
        static isInvisibleCharacter(e) {
            return fe.getData().has(e)
        }
        static get codePoints() {
            return fe.getData()
        }
    }
    fe._data = void 0;
    const me = "$initialize";
    let ge;
    class be {
        constructor(e, t, n, r) {
            this.vsWorker = e, this.req = t, this.method = n, this.args = r, this.type = 0
        }
    }
    class Ce {
        constructor(e, t, n, r) {
            this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = 1
        }
    }
    class pe {
        constructor(e, t, n, r) {
            this.vsWorker = e, this.req = t, this.eventName = n, this.arg = r, this.type = 2
        }
    }
    class we {
        constructor(e, t, n) {
            this.vsWorker = e, this.req = t, this.event = n, this.type = 3
        }
    }
    class _e {
        constructor(e, t) {
            this.vsWorker = e, this.req = t, this.type = 4
        }
    }
    class ye {
        constructor(e) {
            this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null), this._pendingEmitters = new Map, this._pendingEvents = new Map
        }
        setWorkerId(e) {
            this._workerId = e
        }
        sendMessage(e, t) {
            const n = String(++this._lastSentReq);
            return new Promise(((r, i) => {
                this._pendingReplies[n] = {
                    resolve: r,
                    reject: i
                }, this._send(new be(this._workerId, n, e, t))
            }))
        }
        listen(e, t) {
            let n = null;
            const r = new X({
                onFirstListenerAdd: () => {
                    n = String(++this._lastSentReq), this._pendingEmitters.set(n, r), this._send(new pe(this._workerId, n, e, t))
                },
                onLastListenerRemove: () => {
                    this._pendingEmitters.delete(n), this._send(new _e(this._workerId, n)), n = null
                }
            });
            return r.event
        }
        handleMessage(e) {
            e && e.vsWorker && (-1 !== this._workerId && e.vsWorker !== this._workerId || this._handleMessage(e))
        }
        _handleMessage(e) {
            switch (e.type) {
                case 1:
                    return this._handleReplyMessage(e);
                case 0:
                    return this._handleRequestMessage(e);
                case 2:
                    return this._handleSubscribeEventMessage(e);
                case 3:
                    return this._handleEventMessage(e);
                case 4:
                    return this._handleUnsubscribeEventMessage(e)
            }
        }
        _handleReplyMessage(e) {
            if (!this._pendingReplies[e.seq]) return void console.warn("Got reply to unknown seq");
            let t = this._pendingReplies[e.seq];
            if (delete this._pendingReplies[e.seq], e.err) {
                let n = e.err;
                return e.err.$isError && (n = new Error, n.name = e.err.name, n.message = e.err.message, n.stack = e.err.stack), void t.reject(n)
            }
            t.resolve(e.res)
        }
        _handleRequestMessage(e) {
            let t = e.req;
            this._handler.handleMessage(e.method, e.args).then((e => {
                this._send(new Ce(this._workerId, t, e, void 0))
            }), (e => {
                e.detail instanceof Error && (e.detail = r(e.detail)), this._send(new Ce(this._workerId, t, void 0, r(e)))
            }))
        }
        _handleSubscribeEventMessage(e) {
            const t = e.req,
                n = this._handler.handleEvent(e.eventName, e.arg)((e => {
                    this._send(new we(this._workerId, t, e))
                }));
            this._pendingEvents.set(t, n)
        }
        _handleEventMessage(e) {
            this._pendingEmitters.has(e.req) ? this._pendingEmitters.get(e.req).fire(e.event) : console.warn("Got event for unknown req")
        }
        _handleUnsubscribeEventMessage(e) {
            this._pendingEvents.has(e.req) ? (this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req)) : console.warn("Got unsubscribe for unknown req")
        }
        _send(e) {
            let t = [];
            if (0 === e.type)
                for (let n = 0; n < e.args.length; n++) e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
            else 1 === e.type && e.res instanceof ArrayBuffer && t.push(e.res);
            this._handler.sendMessage(e, t)
        }
    }

    function Se(e) {
        return "o" === e[0] && "n" === e[1] && oe(e.charCodeAt(2))
    }

    function ve(e) {
        return /^onDynamic/.test(e) && oe(e.charCodeAt(9))
    }

    function Le(e, t, n) {
        const r = e => function() {
                const n = Array.prototype.slice.call(arguments, 0);
                return t(e, n)
            },
            i = e => function(t) {
                return n(e, t)
            };
        let o = {};
        for (const t of e) ve(t) ? o[t] = i(t) : Se(t) ? o[t] = n(t, void 0) : o[t] = r(t);
        return o
    }
    class Ne {
        constructor(e, t) {
            this._requestHandlerFactory = t, this._requestHandler = null, this._protocol = new ye({
                sendMessage: (t, n) => {
                    e(t, n)
                },
                handleMessage: (e, t) => this._handleMessage(e, t),
                handleEvent: (e, t) => this._handleEvent(e, t)
            })
        }
        onmessage(e) {
            this._protocol.handleMessage(e)
        }
        _handleMessage(e, t) {
            if (e === me) return this.initialize(t[0], t[1], t[2], t[3]);
            if (!this._requestHandler || "function" != typeof this._requestHandler[e]) return Promise.reject(new Error("Missing requestHandler or method: " + e));
            try {
                return Promise.resolve(this._requestHandler[e].apply(this._requestHandler, t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
        _handleEvent(e, t) {
            if (!this._requestHandler) throw new Error("Missing requestHandler");
            if (ve(e)) {
                const n = this._requestHandler[e].call(this._requestHandler, t);
                if ("function" != typeof n) throw new Error(`Missing dynamic event ${e} on request handler.`);
                return n
            }
            if (Se(e)) {
                const t = this._requestHandler[e];
                if ("function" != typeof t) throw new Error(`Missing event ${e} on request handler.`);
                return t
            }
            throw new Error(`Malformed event name ${e}`)
        }
        initialize(e, t, n, r) {
            this._protocol.setWorkerId(e);
            const i = Le(r, ((e, t) => this._protocol.sendMessage(e, t)), ((e, t) => this._protocol.listen(e, t)));
            return this._requestHandlerFactory ? (this._requestHandler = this._requestHandlerFactory(i), Promise.resolve(ee(this._requestHandler))) : (t && (void 0 !== t.baseUrl && delete t.baseUrl, void 0 !== t.paths && void 0 !== t.paths.vs && delete t.paths.vs, void 0 !== typeof t.trustedTypesPolicy && delete t.trustedTypesPolicy, t.catchError = !0, V.require.config(t)), new Promise(((e, t) => {
                (0, V.require)([n], (n => {
                    this._requestHandler = n.create(i), this._requestHandler ? e(ee(this._requestHandler)) : t(new Error("No RequestHandler!"))
                }), t)
            })))
        }
    }
    class Ee {
        constructor(e, t, n, r) {
            this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r
        }
        getOriginalEnd() {
            return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength
        }
    }

    function Ae(e, t) {
        return (t << 5) - t + e | 0
    }

    function ke(e, t) {
        t = Ae(149417, t);
        for (let n = 0, r = e.length; n < r; n++) t = Ae(e.charCodeAt(n), t);
        return t
    }

    function Me(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 32;
        const r = n - t,
            i = ~((1 << r) - 1);
        return (e << t | (i & e) >>> r) >>> 0
    }

    function Re(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.byteLength,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        for (let i = 0; i < n; i++) e[t + i] = r
    }

    function Oe(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0";
        for (; e.length < t;) e = n + e;
        return e
    }

    function xe(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
        return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((e => e.toString(16).padStart(2, "0"))).join("") : Oe((e >>> 0).toString(16), t / 4)
    }
    class Pe {
        constructor() {
            this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1
        }
        update(e) {
            const t = e.length;
            if (0 === t) return;
            const n = this._buff;
            let r, i, o = this._buffLen,
                a = this._leftoverHighSurrogate;
            for (0 !== a ? (r = a, i = -1, a = 0) : (r = e.charCodeAt(0), i = 0);;) {
                let s = r;
                if (ae(r)) {
                    if (!(i + 1 < t)) {
                        a = r;
                        break
                    } {
                        const t = e.charCodeAt(i + 1);
                        se(t) ? (i++, s = le(r, t)) : s = 65533
                    }
                } else se(r) && (s = 65533);
                if (o = this._push(n, o, s), i++, !(i < t)) break;
                r = e.charCodeAt(i)
            }
            this._buffLen = o, this._leftoverHighSurrogate = a
        }
        _push(e, t, n) {
            return n < 128 ? e[t++] = n : n < 2048 ? (e[t++] = 192 | (1984 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0) : n < 65536 ? (e[t++] = 224 | (61440 & n) >>> 12, e[t++] = 128 | (4032 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0) : (e[t++] = 240 | (1835008 & n) >>> 18, e[t++] = 128 | (258048 & n) >>> 12, e[t++] = 128 | (4032 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0), t >= 64 && (this._step(), t -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), t
        }
        digest() {
            return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), xe(this._h0) + xe(this._h1) + xe(this._h2) + xe(this._h3) + xe(this._h4)
        }
        _wrapUp() {
            this._buff[this._buffLen++] = 128, Re(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), Re(this._buff));
            const e = 8 * this._totalLen;
            this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1), this._buffDV.setUint32(60, e % 4294967296, !1), this._step()
        }
        _step() {
            const e = Pe._bigBlock32,
                t = this._buffDV;
            for (let n = 0; n < 64; n += 4) e.setUint32(n, t.getUint32(n, !1), !1);
            for (let t = 64; t < 320; t += 4) e.setUint32(t, Me(e.getUint32(t - 12, !1) ^ e.getUint32(t - 32, !1) ^ e.getUint32(t - 56, !1) ^ e.getUint32(t - 64, !1), 1), !1);
            let n, r, i, o = this._h0,
                a = this._h1,
                s = this._h2,
                l = this._h3,
                c = this._h4;
            for (let t = 0; t < 80; t++) t < 20 ? (n = a & s | ~a & l, r = 1518500249) : t < 40 ? (n = a ^ s ^ l, r = 1859775393) : t < 60 ? (n = a & s | a & l | s & l, r = 2400959708) : (n = a ^ s ^ l, r = 3395469782), i = Me(o, 5) + n + c + r + e.getUint32(4 * t, !1) & 4294967295, c = l, l = s, s = Me(a, 30), a = o, o = i;
            this._h0 = this._h0 + o & 4294967295, this._h1 = this._h1 + a & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + l & 4294967295, this._h4 = this._h4 + c & 4294967295
        }
    }
    Pe._bigBlock32 = new DataView(new ArrayBuffer(320));
    class Te {
        constructor(e) {
            this.source = e
        }
        getElements() {
            const e = this.source,
                t = new Int32Array(e.length);
            for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
            return t
        }
    }

    function Ie(e, t, n) {
        return new Fe(new Te(e), new Te(t)).ComputeDiff(n).changes
    }
    class Ke {
        static Assert(e, t) {
            if (!e) throw new Error(t)
        }
    }
    class De {
        static Copy(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o]
        }
        static Copy2(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o]
        }
    }
    class Ve {
        constructor() {
            this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0
        }
        MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Ee(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824
        }
        AddOriginalElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++
        }
        AddModifiedElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++
        }
        getChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes
        }
        getReverseChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes
        }
    }
    class Fe {
        constructor(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            this.ContinueProcessingPredicate = n, this._originalSequence = e, this._modifiedSequence = t;
            const [r, i, o] = Fe._getElements(e), [a, s, l] = Fe._getElements(t);
            this._hasStrings = o && l, this._originalStringElements = r, this._originalElementsOrHash = i, this._modifiedStringElements = a, this._modifiedElementsOrHash = s, this.m_forwardHistory = [], this.m_reverseHistory = []
        }
        static _isStringArray(e) {
            return e.length > 0 && "string" == typeof e[0]
        }
        static _getElements(e) {
            const t = e.getElements();
            if (Fe._isStringArray(t)) {
                const e = new Int32Array(t.length);
                for (let n = 0, r = t.length; n < r; n++) e[n] = ke(t[n], 0);
                return [t, e, !0]
            }
            return t instanceof Int32Array ? [
                [], t, !1
            ] : [
                [], new Int32Array(t), !1
            ]
        }
        ElementsAreEqual(e, t) {
            return this._originalElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._modifiedStringElements[t])
        }
        ElementsAreStrictEqual(e, t) {
            if (!this.ElementsAreEqual(e, t)) return !1;
            return Fe._getStrictElement(this._originalSequence, e) === Fe._getStrictElement(this._modifiedSequence, t)
        }
        static _getStrictElement(e, t) {
            return "function" == typeof e.getStrictElement ? e.getStrictElement(t) : null
        }
        OriginalElementsAreEqual(e, t) {
            return this._originalElementsOrHash[e] === this._originalElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._originalStringElements[t])
        }
        ModifiedElementsAreEqual(e, t) {
            return this._modifiedElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._modifiedStringElements[e] === this._modifiedStringElements[t])
        }
        ComputeDiff(e) {
            return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e)
        }
        _ComputeDiff(e, t, n, r, i) {
            const o = [!1];
            let a = this.ComputeDiffRecursive(e, t, n, r, o);
            return i && (a = this.PrettifyChanges(a)), {
                quitEarly: o[0],
                changes: a
            }
        }
        ComputeDiffRecursive(e, t, n, r, i) {
            for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);) e++, n++;
            for (; t >= e && r >= n && this.ElementsAreEqual(t, r);) t--, r--;
            if (e > t || n > r) {
                let i;
                return n <= r ? (Ke.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), i = [new Ee(e, 0, n, r - n + 1)]) : e <= t ? (Ke.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), i = [new Ee(e, t - e + 1, n, 0)]) : (Ke.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), Ke.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), i = []), i
            }
            const o = [0],
                a = [0],
                s = this.ComputeRecursionPoint(e, t, n, r, o, a, i),
                l = o[0],
                c = a[0];
            if (null !== s) return s;
            if (!i[0]) {
                const o = this.ComputeDiffRecursive(e, l, n, c, i);
                let a = [];
                return a = i[0] ? [new Ee(l + 1, t - (l + 1) + 1, c + 1, r - (c + 1) + 1)] : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i), this.ConcatenateChanges(o, a)
            }
            return [new Ee(e, t - e + 1, n, r - n + 1)]
        }
        WALKTRACE(e, t, n, r, i, o, a, s, l, c, h, u, d, f, m, g, b, C) {
            let p = null,
                w = null,
                _ = new Ve,
                y = t,
                S = n,
                v = d[0] - g[0] - r,
                L = -1073741824,
                N = this.m_forwardHistory.length - 1;
            do {
                const t = v + e;
                t === y || t < S && l[t - 1] < l[t + 1] ? (f = (h = l[t + 1]) - v - r, h < L && _.MarkNextChange(), L = h, _.AddModifiedElement(h + 1, f), v = t + 1 - e) : (f = (h = l[t - 1] + 1) - v - r, h < L && _.MarkNextChange(), L = h - 1, _.AddOriginalElement(h, f + 1), v = t - 1 - e), N >= 0 && (e = (l = this.m_forwardHistory[N])[0], y = 1, S = l.length - 1)
            } while (--N >= -1);
            if (p = _.getReverseChanges(), C[0]) {
                let e = d[0] + 1,
                    t = g[0] + 1;
                if (null !== p && p.length > 0) {
                    const n = p[p.length - 1];
                    e = Math.max(e, n.getOriginalEnd()), t = Math.max(t, n.getModifiedEnd())
                }
                w = [new Ee(e, u - e + 1, t, m - t + 1)]
            } else {
                _ = new Ve, y = o, S = a, v = d[0] - g[0] - s, L = 1073741824, N = b ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                do {
                    const e = v + i;
                    e === y || e < S && c[e - 1] >= c[e + 1] ? (f = (h = c[e + 1] - 1) - v - s, h > L && _.MarkNextChange(), L = h + 1, _.AddOriginalElement(h + 1, f + 1), v = e + 1 - i) : (f = (h = c[e - 1]) - v - s, h > L && _.MarkNextChange(), L = h, _.AddModifiedElement(h + 1, f + 1), v = e - 1 - i), N >= 0 && (i = (c = this.m_reverseHistory[N])[0], y = 1, S = c.length - 1)
                } while (--N >= -1);
                w = _.getChanges()
            }
            return this.ConcatenateChanges(p, w)
        }
        ComputeRecursionPoint(e, t, n, r, i, o, a) {
            let s = 0,
                l = 0,
                c = 0,
                h = 0,
                u = 0,
                d = 0;
            e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
            const f = t - e + (r - n),
                m = f + 1,
                g = new Int32Array(m),
                b = new Int32Array(m),
                C = r - n,
                p = t - e,
                w = e - n,
                _ = t - r,
                y = (p - C) % 2 == 0;
            g[C] = e, b[p] = t, a[0] = !1;
            for (let S = 1; S <= f / 2 + 1; S++) {
                let f = 0,
                    v = 0;
                c = this.ClipDiagonalBound(C - S, S, C, m), h = this.ClipDiagonalBound(C + S, S, C, m);
                for (let e = c; e <= h; e += 2) {
                    s = e === c || e < h && g[e - 1] < g[e + 1] ? g[e + 1] : g[e - 1] + 1, l = s - (e - C) - w;
                    const n = s;
                    for (; s < t && l < r && this.ElementsAreEqual(s + 1, l + 1);) s++, l++;
                    if (g[e] = s, s + l > f + v && (f = s, v = l), !y && Math.abs(e - p) <= S - 1 && s >= b[e]) return i[0] = s, o[0] = l, n <= b[e] && S <= 1448 ? this.WALKTRACE(C, c, h, w, p, u, d, _, g, b, s, t, i, l, r, o, y, a) : null
                }
                const L = (f - e + (v - n) - S) / 2;
                if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(f, L)) return a[0] = !0, i[0] = f, o[0] = v, L > 0 && S <= 1448 ? this.WALKTRACE(C, c, h, w, p, u, d, _, g, b, s, t, i, l, r, o, y, a) : (e++, n++, [new Ee(e, t - e + 1, n, r - n + 1)]);
                u = this.ClipDiagonalBound(p - S, S, p, m), d = this.ClipDiagonalBound(p + S, S, p, m);
                for (let f = u; f <= d; f += 2) {
                    s = f === u || f < d && b[f - 1] >= b[f + 1] ? b[f + 1] - 1 : b[f - 1], l = s - (f - p) - _;
                    const m = s;
                    for (; s > e && l > n && this.ElementsAreEqual(s, l);) s--, l--;
                    if (b[f] = s, y && Math.abs(f - C) <= S && s <= g[f]) return i[0] = s, o[0] = l, m >= g[f] && S <= 1448 ? this.WALKTRACE(C, c, h, w, p, u, d, _, g, b, s, t, i, l, r, o, y, a) : null
                }
                if (S <= 1447) {
                    let e = new Int32Array(h - c + 2);
                    e[0] = C - c + 1, De.Copy2(g, c, e, 1, h - c + 1), this.m_forwardHistory.push(e), e = new Int32Array(d - u + 2), e[0] = p - u + 1, De.Copy2(b, u, e, 1, d - u + 1), this.m_reverseHistory.push(e)
                }
            }
            return this.WALKTRACE(C, c, h, w, p, u, d, _, g, b, s, t, i, l, r, o, y, a)
        }
        PrettifyChanges(e) {
            for (let t = 0; t < e.length; t++) {
                const n = e[t],
                    r = t < e.length - 1 ? e[t + 1].originalStart : this._originalElementsOrHash.length,
                    i = t < e.length - 1 ? e[t + 1].modifiedStart : this._modifiedElementsOrHash.length,
                    o = n.originalLength > 0,
                    a = n.modifiedLength > 0;
                for (; n.originalStart + n.originalLength < r && n.modifiedStart + n.modifiedLength < i && (!o || this.OriginalElementsAreEqual(n.originalStart, n.originalStart + n.originalLength)) && (!a || this.ModifiedElementsAreEqual(n.modifiedStart, n.modifiedStart + n.modifiedLength));) {
                    const e = this.ElementsAreStrictEqual(n.originalStart, n.modifiedStart);
                    if (this.ElementsAreStrictEqual(n.originalStart + n.originalLength, n.modifiedStart + n.modifiedLength) && !e) break;
                    n.originalStart++, n.modifiedStart++
                }
                let s = [null];
                t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], s) && (e[t] = s[0], e.splice(t + 1, 1), t--)
            }
            for (let t = e.length - 1; t >= 0; t--) {
                const n = e[t];
                let r = 0,
                    i = 0;
                if (t > 0) {
                    const n = e[t - 1];
                    r = n.originalStart + n.originalLength, i = n.modifiedStart + n.modifiedLength
                }
                const o = n.originalLength > 0,
                    a = n.modifiedLength > 0;
                let s = 0,
                    l = this._boundaryScore(n.originalStart, n.originalLength, n.modifiedStart, n.modifiedLength);
                for (let e = 1;; e++) {
                    const t = n.originalStart - e,
                        c = n.modifiedStart - e;
                    if (t < r || c < i) break;
                    if (o && !this.OriginalElementsAreEqual(t, t + n.originalLength)) break;
                    if (a && !this.ModifiedElementsAreEqual(c, c + n.modifiedLength)) break;
                    const h = (t === r && c === i ? 5 : 0) + this._boundaryScore(t, n.originalLength, c, n.modifiedLength);
                    h > l && (l = h, s = e)
                }
                n.originalStart -= s, n.modifiedStart -= s;
                const c = [null];
                t > 0 && this.ChangesOverlap(e[t - 1], e[t], c) && (e[t - 1] = c[0], e.splice(t, 1), t++)
            }
            if (this._hasStrings)
                for (let t = 1, n = e.length; t < n; t++) {
                    const n = e[t - 1],
                        r = e[t],
                        i = r.originalStart - n.originalStart - n.originalLength,
                        o = n.originalStart,
                        a = r.originalStart + r.originalLength,
                        s = a - o,
                        l = n.modifiedStart,
                        c = r.modifiedStart + r.modifiedLength,
                        h = c - l;
                    if (i < 5 && s < 20 && h < 20) {
                        const e = this._findBetterContiguousSequence(o, s, l, h, i);
                        if (e) {
                            const [t, o] = e;
                            t === n.originalStart + n.originalLength && o === n.modifiedStart + n.modifiedLength || (n.originalLength = t - n.originalStart, n.modifiedLength = o - n.modifiedStart, r.originalStart = t + i, r.modifiedStart = o + i, r.originalLength = a - r.originalStart, r.modifiedLength = c - r.modifiedStart)
                        }
                    }
                }
            return e
        }
        _findBetterContiguousSequence(e, t, n, r, i) {
            if (t < i || r < i) return null;
            const o = e + t - i + 1,
                a = n + r - i + 1;
            let s = 0,
                l = 0,
                c = 0;
            for (let t = e; t < o; t++)
                for (let e = n; e < a; e++) {
                    const n = this._contiguousSequenceScore(t, e, i);
                    n > 0 && n > s && (s = n, l = t, c = e)
                }
            return s > 0 ? [l, c] : null
        }
        _contiguousSequenceScore(e, t, n) {
            let r = 0;
            for (let i = 0; i < n; i++) {
                if (!this.ElementsAreEqual(e + i, t + i)) return 0;
                r += this._originalStringElements[e + i].length
            }
            return r
        }
        _OriginalIsBoundary(e) {
            return e <= 0 || e >= this._originalElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._originalStringElements[e])
        }
        _OriginalRegionIsBoundary(e, t) {
            if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
            if (t > 0) {
                const n = e + t;
                if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0
            }
            return !1
        }
        _ModifiedIsBoundary(e) {
            return e <= 0 || e >= this._modifiedElementsOrHash.length - 1 || this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e])
        }
        _ModifiedRegionIsBoundary(e, t) {
            if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
            if (t > 0) {
                const n = e + t;
                if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0
            }
            return !1
        }
        _boundaryScore(e, t, n, r) {
            return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0)
        }
        ConcatenateChanges(e, t) {
            let n = [];
            if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
            if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
                const r = new Array(e.length + t.length - 1);
                return De.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], De.Copy(t, 1, r, e.length, t.length - 1), r
            } {
                const n = new Array(e.length + t.length);
                return De.Copy(e, 0, n, 0, e.length), De.Copy(t, 0, n, e.length, t.length), n
            }
        }
        ChangesOverlap(e, t, n) {
            if (Ke.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), Ke.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
                const r = e.originalStart;
                let i = e.originalLength;
                const o = e.modifiedStart;
                let a = e.modifiedLength;
                return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new Ee(r, i, o, a), !0
            }
            return n[0] = null, !1
        }
        ClipDiagonalBound(e, t, n, r) {
            if (e >= 0 && e < r) return e;
            const i = t % 2 == 0;
            if (e < 0) {
                return i === (n % 2 == 0) ? 0 : 1
            }
            return i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2
        }
    }
    if (void 0 !== V.vscode && void 0 !== V.vscode.process) {
        const e = V.vscode.process;
        ge = {
            get platform() {
                return e.platform
            },
            get arch() {
                return e.arch
            },
            get env() {
                return e.env
            },
            cwd: () => e.cwd()
        }
    } else ge = "undefined" != typeof process ? {
        get platform() {
            return process.platform
        },
        get arch() {
            return process.arch
        },
        get env() {
            return process.env
        },
        cwd: () => process.env.VSCODE_CWD || process.cwd()
    } : {
        get platform() {
            return H ? "win32" : W ? "darwin" : "linux"
        },
        get arch() {},
        get env() {
            return {}
        },
        cwd: () => "/"
    };
    const Be = ge.cwd,
        Ue = ge.env,
        qe = ge.platform,
        He = 46,
        We = 47,
        $e = 92,
        ze = 58;
    class je extends Error {
        constructor(e, t, n) {
            let r;
            "string" == typeof t && 0 === t.indexOf("not ") ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
            const i = -1 !== e.indexOf(".") ? "property" : "argument";
            let o = `The "${e}" ${i} ${r} of type ${t}`;
            o += ". Received type " + typeof n, super(o), this.code = "ERR_INVALID_ARG_TYPE"
        }
    }

    function Ge(e, t) {
        if ("string" != typeof e) throw new je(t, "string", e)
    }

    function Ye(e) {
        return e === We || e === $e
    }

    function Ze(e) {
        return e === We
    }

    function Je(e) {
        return e >= 65 && e <= 90 || e >= 97 && e <= 122
    }

    function Qe(e, t, n, r) {
        let i = "",
            o = 0,
            a = -1,
            s = 0,
            l = 0;
        for (let c = 0; c <= e.length; ++c) {
            if (c < e.length) l = e.charCodeAt(c);
            else {
                if (r(l)) break;
                l = We
            }
            if (r(l)) {
                if (a === c - 1 || 1 === s);
                else if (2 === s) {
                    if (i.length < 2 || 2 !== o || i.charCodeAt(i.length - 1) !== He || i.charCodeAt(i.length - 2) !== He) {
                        if (i.length > 2) {
                            const e = i.lastIndexOf(n); - 1 === e ? (i = "", o = 0) : (i = i.slice(0, e), o = i.length - 1 - i.lastIndexOf(n)), a = c, s = 0;
                            continue
                        }
                        if (0 !== i.length) {
                            i = "", o = 0, a = c, s = 0;
                            continue
                        }
                    }
                    t && (i += i.length > 0 ? `${n}..` : "..", o = 2)
                } else i.length > 0 ? i += `${n}${e.slice(a+1,c)}` : i = e.slice(a + 1, c), o = c - a - 1;
                a = c, s = 0
            } else l === He && -1 !== s ? ++s : s = -1
        }
        return i
    }

    function Xe(e, t) {
        if (null === t || "object" != typeof t) throw new je("pathObject", "Object", t);
        const n = t.dir || t.root,
            r = t.base || `${t.name||""}${t.ext||""}`;
        return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r
    }
    const et = {
            resolve() {
                let e = "",
                    t = "",
                    n = !1;
                for (let r = arguments.length - 1; r >= -1; r--) {
                    let i;
                    if (r >= 0) {
                        if (i = r < 0 || arguments.length <= r ? void 0 : arguments[r], Ge(i, "path"), 0 === i.length) continue
                    } else 0 === e.length ? i = Be() : (i = Ue[`=${e}`] || Be(), (void 0 === i || i.slice(0, 2).toLowerCase() !== e.toLowerCase() && i.charCodeAt(2) === $e) && (i = `${e}\\`));
                    const o = i.length;
                    let a = 0,
                        s = "",
                        l = !1;
                    const c = i.charCodeAt(0);
                    if (1 === o) Ye(c) && (a = 1, l = !0);
                    else if (Ye(c))
                        if (l = !0, Ye(i.charCodeAt(1))) {
                            let e = 2,
                                t = e;
                            for (; e < o && !Ye(i.charCodeAt(e));) e++;
                            if (e < o && e !== t) {
                                const n = i.slice(t, e);
                                for (t = e; e < o && Ye(i.charCodeAt(e));) e++;
                                if (e < o && e !== t) {
                                    for (t = e; e < o && !Ye(i.charCodeAt(e));) e++;
                                    e !== o && e === t || (s = `\\\\${n}\\${i.slice(t,e)}`, a = e)
                                }
                            }
                        } else a = 1;
                    else Je(c) && i.charCodeAt(1) === ze && (s = i.slice(0, 2), a = 2, o > 2 && Ye(i.charCodeAt(2)) && (l = !0, a = 3));
                    if (s.length > 0)
                        if (e.length > 0) {
                            if (s.toLowerCase() !== e.toLowerCase()) continue
                        } else e = s;
                    if (n) {
                        if (e.length > 0) break
                    } else if (t = `${i.slice(a)}\\${t}`, n = l, l && e.length > 0) break
                }
                return t = Qe(t, !n, "\\", Ye), n ? `${e}\\${t}` : `${e}${t}` || "."
            },
            normalize(e) {
                Ge(e, "path");
                const t = e.length;
                if (0 === t) return ".";
                let n, r = 0,
                    i = !1;
                const o = e.charCodeAt(0);
                if (1 === t) return Ze(o) ? "\\" : e;
                if (Ye(o))
                    if (i = !0, Ye(e.charCodeAt(1))) {
                        let i = 2,
                            o = i;
                        for (; i < t && !Ye(e.charCodeAt(i));) i++;
                        if (i < t && i !== o) {
                            const a = e.slice(o, i);
                            for (o = i; i < t && Ye(e.charCodeAt(i));) i++;
                            if (i < t && i !== o) {
                                for (o = i; i < t && !Ye(e.charCodeAt(i));) i++;
                                if (i === t) return `\\\\${a}\\${e.slice(o)}\\`;
                                i !== o && (n = `\\\\${a}\\${e.slice(o,i)}`, r = i)
                            }
                        }
                    } else r = 1;
                else Je(o) && e.charCodeAt(1) === ze && (n = e.slice(0, 2), r = 2, t > 2 && Ye(e.charCodeAt(2)) && (i = !0, r = 3));
                let a = r < t ? Qe(e.slice(r), !i, "\\", Ye) : "";
                return 0 !== a.length || i || (a = "."), a.length > 0 && Ye(e.charCodeAt(t - 1)) && (a += "\\"), void 0 === n ? i ? `\\${a}` : a : i ? `${n}\\${a}` : `${n}${a}`
            },
            isAbsolute(e) {
                Ge(e, "path");
                const t = e.length;
                if (0 === t) return !1;
                const n = e.charCodeAt(0);
                return Ye(n) || t > 2 && Je(n) && e.charCodeAt(1) === ze && Ye(e.charCodeAt(2))
            },
            join() {
                if (0 === arguments.length) return ".";
                let e, t;
                for (let n = 0; n < arguments.length; ++n) {
                    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                    Ge(r, "path"), r.length > 0 && (void 0 === e ? e = t = r : e += `\\${r}`)
                }
                if (void 0 === e) return ".";
                let n = !0,
                    r = 0;
                if ("string" == typeof t && Ye(t.charCodeAt(0))) {
                    ++r;
                    const e = t.length;
                    e > 1 && Ye(t.charCodeAt(1)) && (++r, e > 2 && (Ye(t.charCodeAt(2)) ? ++r : n = !1))
                }
                if (n) {
                    for (; r < e.length && Ye(e.charCodeAt(r));) r++;
                    r >= 2 && (e = `\\${e.slice(r)}`)
                }
                return et.normalize(e)
            },
            relative(e, t) {
                if (Ge(e, "from"), Ge(t, "to"), e === t) return "";
                const n = et.resolve(e),
                    r = et.resolve(t);
                if (n === r) return "";
                if ((e = n.toLowerCase()) === (t = r.toLowerCase())) return "";
                let i = 0;
                for (; i < e.length && e.charCodeAt(i) === $e;) i++;
                let o = e.length;
                for (; o - 1 > i && e.charCodeAt(o - 1) === $e;) o--;
                const a = o - i;
                let s = 0;
                for (; s < t.length && t.charCodeAt(s) === $e;) s++;
                let l = t.length;
                for (; l - 1 > s && t.charCodeAt(l - 1) === $e;) l--;
                const c = l - s,
                    h = a < c ? a : c;
                let u = -1,
                    d = 0;
                for (; d < h; d++) {
                    const n = e.charCodeAt(i + d);
                    if (n !== t.charCodeAt(s + d)) break;
                    n === $e && (u = d)
                }
                if (d !== h) {
                    if (-1 === u) return r
                } else {
                    if (c > h) {
                        if (t.charCodeAt(s + d) === $e) return r.slice(s + d + 1);
                        if (2 === d) return r.slice(s + d)
                    }
                    a > h && (e.charCodeAt(i + d) === $e ? u = d : 2 === d && (u = 3)), -1 === u && (u = 0)
                }
                let f = "";
                for (d = i + u + 1; d <= o; ++d) d !== o && e.charCodeAt(d) !== $e || (f += 0 === f.length ? ".." : "\\..");
                return s += u, f.length > 0 ? `${f}${r.slice(s,l)}` : (r.charCodeAt(s) === $e && ++s, r.slice(s, l))
            },
            toNamespacedPath(e) {
                if ("string" != typeof e) return e;
                if (0 === e.length) return "";
                const t = et.resolve(e);
                if (t.length <= 2) return e;
                if (t.charCodeAt(0) === $e) {
                    if (t.charCodeAt(1) === $e) {
                        const e = t.charCodeAt(2);
                        if (63 !== e && e !== He) return `\\\\?\\UNC\\${t.slice(2)}`
                    }
                } else if (Je(t.charCodeAt(0)) && t.charCodeAt(1) === ze && t.charCodeAt(2) === $e) return `\\\\?\\${t}`;
                return e
            },
            dirname(e) {
                Ge(e, "path");
                const t = e.length;
                if (0 === t) return ".";
                let n = -1,
                    r = 0;
                const i = e.charCodeAt(0);
                if (1 === t) return Ye(i) ? e : ".";
                if (Ye(i)) {
                    if (n = r = 1, Ye(e.charCodeAt(1))) {
                        let i = 2,
                            o = i;
                        for (; i < t && !Ye(e.charCodeAt(i));) i++;
                        if (i < t && i !== o) {
                            for (o = i; i < t && Ye(e.charCodeAt(i));) i++;
                            if (i < t && i !== o) {
                                for (o = i; i < t && !Ye(e.charCodeAt(i));) i++;
                                if (i === t) return e;
                                i !== o && (n = r = i + 1)
                            }
                        }
                    }
                } else Je(i) && e.charCodeAt(1) === ze && (n = t > 2 && Ye(e.charCodeAt(2)) ? 3 : 2, r = n);
                let o = -1,
                    a = !0;
                for (let n = t - 1; n >= r; --n)
                    if (Ye(e.charCodeAt(n))) {
                        if (!a) {
                            o = n;
                            break
                        }
                    } else a = !1;
                if (-1 === o) {
                    if (-1 === n) return ".";
                    o = n
                }
                return e.slice(0, o)
            },
            basename(e, t) {
                void 0 !== t && Ge(t, "ext"), Ge(e, "path");
                let n, r = 0,
                    i = -1,
                    o = !0;
                if (e.length >= 2 && Je(e.charCodeAt(0)) && e.charCodeAt(1) === ze && (r = 2), void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t === e) return "";
                    let a = t.length - 1,
                        s = -1;
                    for (n = e.length - 1; n >= r; --n) {
                        const l = e.charCodeAt(n);
                        if (Ye(l)) {
                            if (!o) {
                                r = n + 1;
                                break
                            }
                        } else -1 === s && (o = !1, s = n + 1), a >= 0 && (l === t.charCodeAt(a) ? -1 == --a && (i = n) : (a = -1, i = s))
                    }
                    return r === i ? i = s : -1 === i && (i = e.length), e.slice(r, i)
                }
                for (n = e.length - 1; n >= r; --n)
                    if (Ye(e.charCodeAt(n))) {
                        if (!o) {
                            r = n + 1;
                            break
                        }
                    } else -1 === i && (o = !1, i = n + 1);
                return -1 === i ? "" : e.slice(r, i)
            },
            extname(e) {
                Ge(e, "path");
                let t = 0,
                    n = -1,
                    r = 0,
                    i = -1,
                    o = !0,
                    a = 0;
                e.length >= 2 && e.charCodeAt(1) === ze && Je(e.charCodeAt(0)) && (t = r = 2);
                for (let s = e.length - 1; s >= t; --s) {
                    const t = e.charCodeAt(s);
                    if (Ye(t)) {
                        if (!o) {
                            r = s + 1;
                            break
                        }
                    } else -1 === i && (o = !1, i = s + 1), t === He ? -1 === n ? n = s : 1 !== a && (a = 1) : -1 !== n && (a = -1)
                }
                return -1 === n || -1 === i || 0 === a || 1 === a && n === i - 1 && n === r + 1 ? "" : e.slice(n, i)
            },
            format: Xe.bind(null, "\\"),
            parse(e) {
                Ge(e, "path");
                const t = {
                    root: "",
                    dir: "",
                    base: "",
                    ext: "",
                    name: ""
                };
                if (0 === e.length) return t;
                const n = e.length;
                let r = 0,
                    i = e.charCodeAt(0);
                if (1 === n) return Ye(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
                if (Ye(i)) {
                    if (r = 1, Ye(e.charCodeAt(1))) {
                        let t = 2,
                            i = t;
                        for (; t < n && !Ye(e.charCodeAt(t));) t++;
                        if (t < n && t !== i) {
                            for (i = t; t < n && Ye(e.charCodeAt(t));) t++;
                            if (t < n && t !== i) {
                                for (i = t; t < n && !Ye(e.charCodeAt(t));) t++;
                                t === n ? r = t : t !== i && (r = t + 1)
                            }
                        }
                    }
                } else if (Je(i) && e.charCodeAt(1) === ze) {
                    if (n <= 2) return t.root = t.dir = e, t;
                    if (r = 2, Ye(e.charCodeAt(2))) {
                        if (3 === n) return t.root = t.dir = e, t;
                        r = 3
                    }
                }
                r > 0 && (t.root = e.slice(0, r));
                let o = -1,
                    a = r,
                    s = -1,
                    l = !0,
                    c = e.length - 1,
                    h = 0;
                for (; c >= r; --c)
                    if (i = e.charCodeAt(c), Ye(i)) {
                        if (!l) {
                            a = c + 1;
                            break
                        }
                    } else -1 === s && (l = !1, s = c + 1), i === He ? -1 === o ? o = c : 1 !== h && (h = 1) : -1 !== o && (h = -1);
                return -1 !== s && (-1 === o || 0 === h || 1 === h && o === s - 1 && o === a + 1 ? t.base = t.name = e.slice(a, s) : (t.name = e.slice(a, o), t.base = e.slice(a, s), t.ext = e.slice(o, s))), t.dir = a > 0 && a !== r ? e.slice(0, a - 1) : t.root, t
            },
            sep: "\\",
            delimiter: ";",
            win32: null,
            posix: null
        },
        tt = {
            resolve() {
                let e = "",
                    t = !1;
                for (let n = arguments.length - 1; n >= -1 && !t; n--) {
                    const r = n >= 0 ? n < 0 || arguments.length <= n ? void 0 : arguments[n] : Be();
                    Ge(r, "path"), 0 !== r.length && (e = `${r}/${e}`, t = r.charCodeAt(0) === We)
                }
                return e = Qe(e, !t, "/", Ze), t ? `/${e}` : e.length > 0 ? e : "."
            },
            normalize(e) {
                if (Ge(e, "path"), 0 === e.length) return ".";
                const t = e.charCodeAt(0) === We,
                    n = e.charCodeAt(e.length - 1) === We;
                return 0 === (e = Qe(e, !t, "/", Ze)).length ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e)
            },
            isAbsolute: e => (Ge(e, "path"), e.length > 0 && e.charCodeAt(0) === We),
            join() {
                if (0 === arguments.length) return ".";
                let e;
                for (let t = 0; t < arguments.length; ++t) {
                    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    Ge(n, "path"), n.length > 0 && (void 0 === e ? e = n : e += `/${n}`)
                }
                return void 0 === e ? "." : tt.normalize(e)
            },
            relative(e, t) {
                if (Ge(e, "from"), Ge(t, "to"), e === t) return "";
                if ((e = tt.resolve(e)) === (t = tt.resolve(t))) return "";
                const n = e.length,
                    r = n - 1,
                    i = t.length - 1,
                    o = r < i ? r : i;
                let a = -1,
                    s = 0;
                for (; s < o; s++) {
                    const n = e.charCodeAt(1 + s);
                    if (n !== t.charCodeAt(1 + s)) break;
                    n === We && (a = s)
                }
                if (s === o)
                    if (i > o) {
                        if (t.charCodeAt(1 + s) === We) return t.slice(1 + s + 1);
                        if (0 === s) return t.slice(1 + s)
                    } else r > o && (e.charCodeAt(1 + s) === We ? a = s : 0 === s && (a = 0));
                let l = "";
                for (s = 1 + a + 1; s <= n; ++s) s !== n && e.charCodeAt(s) !== We || (l += 0 === l.length ? ".." : "/..");
                return `${l}${t.slice(1+a)}`
            },
            toNamespacedPath: e => e,
            dirname(e) {
                if (Ge(e, "path"), 0 === e.length) return ".";
                const t = e.charCodeAt(0) === We;
                let n = -1,
                    r = !0;
                for (let t = e.length - 1; t >= 1; --t)
                    if (e.charCodeAt(t) === We) {
                        if (!r) {
                            n = t;
                            break
                        }
                    } else r = !1;
                return -1 === n ? t ? "/" : "." : t && 1 === n ? "//" : e.slice(0, n)
            },
            basename(e, t) {
                void 0 !== t && Ge(t, "ext"), Ge(e, "path");
                let n, r = 0,
                    i = -1,
                    o = !0;
                if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t === e) return "";
                    let a = t.length - 1,
                        s = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                        const l = e.charCodeAt(n);
                        if (l === We) {
                            if (!o) {
                                r = n + 1;
                                break
                            }
                        } else -1 === s && (o = !1, s = n + 1), a >= 0 && (l === t.charCodeAt(a) ? -1 == --a && (i = n) : (a = -1, i = s))
                    }
                    return r === i ? i = s : -1 === i && (i = e.length), e.slice(r, i)
                }
                for (n = e.length - 1; n >= 0; --n)
                    if (e.charCodeAt(n) === We) {
                        if (!o) {
                            r = n + 1;
                            break
                        }
                    } else -1 === i && (o = !1, i = n + 1);
                return -1 === i ? "" : e.slice(r, i)
            },
            extname(e) {
                Ge(e, "path");
                let t = -1,
                    n = 0,
                    r = -1,
                    i = !0,
                    o = 0;
                for (let a = e.length - 1; a >= 0; --a) {
                    const s = e.charCodeAt(a);
                    if (s !== We) - 1 === r && (i = !1, r = a + 1), s === He ? -1 === t ? t = a : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                    else if (!i) {
                        n = a + 1;
                        break
                    }
                }
                return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
            },
            format: Xe.bind(null, "/"),
            parse(e) {
                Ge(e, "path");
                const t = {
                    root: "",
                    dir: "",
                    base: "",
                    ext: "",
                    name: ""
                };
                if (0 === e.length) return t;
                const n = e.charCodeAt(0) === We;
                let r;
                n ? (t.root = "/", r = 1) : r = 0;
                let i = -1,
                    o = 0,
                    a = -1,
                    s = !0,
                    l = e.length - 1,
                    c = 0;
                for (; l >= r; --l) {
                    const t = e.charCodeAt(l);
                    if (t !== We) - 1 === a && (s = !1, a = l + 1), t === He ? -1 === i ? i = l : 1 !== c && (c = 1) : -1 !== i && (c = -1);
                    else if (!s) {
                        o = l + 1;
                        break
                    }
                }
                if (-1 !== a) {
                    const r = 0 === o && n ? 1 : o; - 1 === i || 0 === c || 1 === c && i === a - 1 && i === o + 1 ? t.base = t.name = e.slice(r, a) : (t.name = e.slice(r, i), t.base = e.slice(r, a), t.ext = e.slice(i, a))
                }
                return o > 0 ? t.dir = e.slice(0, o - 1) : n && (t.dir = "/"), t
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null
        };
    tt.win32 = et.win32 = et, tt.posix = et.posix = tt;
    "win32" === qe ? et.normalize : tt.normalize, "win32" === qe ? et.resolve : tt.resolve, "win32" === qe ? et.relative : tt.relative, "win32" === qe ? et.dirname : tt.dirname, "win32" === qe ? et.basename : tt.basename, "win32" === qe ? et.extname : tt.extname, "win32" === qe ? et.sep : tt.sep;
    const nt = /^\w[\w\d+.-]*$/,
        rt = /^\//,
        it = /^\/\//;

    function ot(e, t) {
        if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
        if (e.scheme && !nt.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
        if (e.path)
            if (e.authority) {
                if (!rt.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
            } else if (it.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
    }
    const at = "",
        st = "/",
        lt = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class ct {
        constructor(e, t, n, r, i) {
            let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            "object" == typeof e ? (this.scheme = e.scheme || at, this.authority = e.authority || at, this.path = e.path || at, this.query = e.query || at, this.fragment = e.fragment || at) : (this.scheme = function(e, t) {
                return e || t ? e : "file"
            }(e, o), this.authority = t || at, this.path = function(e, t) {
                switch (e) {
                    case "https":
                    case "http":
                    case "file":
                        t ? t[0] !== st && (t = st + t) : t = st
                }
                return t
            }(this.scheme, n || at), this.query = r || at, this.fragment = i || at, ot(this, o))
        }
        static isUri(e) {
            return e instanceof ct || !!e && ("string" == typeof e.authority && "string" == typeof e.fragment && "string" == typeof e.path && "string" == typeof e.query && "string" == typeof e.scheme && "string" == typeof e.fsPath && "function" == typeof e.with && "function" == typeof e.toString)
        }
        get fsPath() {
            return gt(this, !1)
        }
        with(e) {
            if (!e) return this;
            let {
                scheme: t,
                authority: n,
                path: r,
                query: i,
                fragment: o
            } = e;
            return void 0 === t ? t = this.scheme : null === t && (t = at), void 0 === n ? n = this.authority : null === n && (n = at), void 0 === r ? r = this.path : null === r && (r = at), void 0 === i ? i = this.query : null === i && (i = at), void 0 === o ? o = this.fragment : null === o && (o = at), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new ut(t, n, r, i, o)
        }
        static parse(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = lt.exec(e);
            return n ? new ut(n[2] || at, wt(n[4] || at), wt(n[5] || at), wt(n[7] || at), wt(n[9] || at), t) : new ut(at, at, at, at, at)
        }
        static file(e) {
            let t = at;
            if (H && (e = e.replace(/\\/g, st)), e[0] === st && e[1] === st) {
                const n = e.indexOf(st, 2); - 1 === n ? (t = e.substring(2), e = st) : (t = e.substring(2, n), e = e.substring(n) || st)
            }
            return new ut("file", t, e, at, at)
        }
        static from(e) {
            const t = new ut(e.scheme, e.authority, e.path, e.query, e.fragment);
            return ot(t, !0), t
        }
        static joinPath(e) {
            if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
            let t;
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return t = H && "file" === e.scheme ? ct.file(et.join(gt(e, !0), ...r)).path : tt.join(e.path, ...r), e.with({
                path: t
            })
        }
        toString() {
            return bt(this, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
        }
        toJSON() {
            return this
        }
        static revive(e) {
            if (e) {
                if (e instanceof ct) return e; {
                    const t = new ut(e);
                    return t._formatted = e.external, t._fsPath = e._sep === ht ? e.fsPath : null, t
                }
            }
            return e
        }
    }
    const ht = H ? 1 : void 0;
    class ut extends ct {
        constructor() {
            super(...arguments), this._formatted = null, this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = gt(this, !1)), this._fsPath
        }
        toString() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? bt(this, !0) : (this._formatted || (this._formatted = bt(this, !1)), this._formatted)
        }
        toJSON() {
            const e = {
                $mid: 1
            };
            return this._fsPath && (e.fsPath = this._fsPath, e._sep = ht), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
        }
    }
    const dt = {
        58: "%3A",
        47: "%2F",
        63: "%3F",
        35: "%23",
        91: "%5B",
        93: "%5D",
        64: "%40",
        33: "%21",
        36: "%24",
        38: "%26",
        39: "%27",
        40: "%28",
        41: "%29",
        42: "%2A",
        43: "%2B",
        44: "%2C",
        59: "%3B",
        61: "%3D",
        32: "%20"
    };

    function ft(e, t) {
        let n, r = -1;
        for (let i = 0; i < e.length; i++) {
            const o = e.charCodeAt(i);
            if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) - 1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));
            else {
                void 0 === n && (n = e.substr(0, i));
                const t = dt[o];
                void 0 !== t ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += t) : -1 === r && (r = i)
            }
        }
        return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e
    }

    function mt(e) {
        let t;
        for (let n = 0; n < e.length; n++) {
            const r = e.charCodeAt(n);
            35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += dt[r]) : void 0 !== t && (t += e[n])
        }
        return void 0 !== t ? t : e
    }

    function gt(e, t) {
        let n;
        return n = e.authority && e.path.length > 1 && "file" === e.scheme ? `//${e.authority}${e.path}` : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path, H && (n = n.replace(/\//g, "\\")), n
    }

    function bt(e, t) {
        const n = t ? mt : ft;
        let r = "",
            {
                scheme: i,
                authority: o,
                path: a,
                query: s,
                fragment: l
            } = e;
        if (i && (r += i, r += ":"), (o || "file" === i) && (r += st, r += st), o) {
            let e = o.indexOf("@");
            if (-1 !== e) {
                const t = o.substr(0, e);
                o = o.substr(e + 1), e = t.indexOf(":"), -1 === e ? r += n(t, !1) : (r += n(t.substr(0, e), !1), r += ":", r += n(t.substr(e + 1), !1)), r += "@"
            }
            o = o.toLowerCase(), e = o.indexOf(":"), -1 === e ? r += n(o, !1) : (r += n(o.substr(0, e), !1), r += o.substr(e))
        }
        if (a) {
            if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) {
                const e = a.charCodeAt(1);
                e >= 65 && e <= 90 && (a = `/${String.fromCharCode(e+32)}:${a.substr(3)}`)
            } else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
                const e = a.charCodeAt(0);
                e >= 65 && e <= 90 && (a = `${String.fromCharCode(e+32)}:${a.substr(2)}`)
            }
            r += n(a, !0)
        }
        return s && (r += "?", r += n(s, !1)), l && (r += "#", r += t ? l : ft(l, !1)), r
    }

    function Ct(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e.length > 3 ? e.substr(0, 3) + Ct(e.substr(3)) : e
        }
    }
    const pt = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

    function wt(e) {
        return e.match(pt) ? e.replace(pt, (e => Ct(e))) : e
    }
    class _t {
        constructor(e, t) {
            this.lineNumber = e, this.column = t
        }
        with() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lineNumber,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.column;
            return e === this.lineNumber && t === this.column ? this : new _t(e, t)
        }
        delta() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this.with(this.lineNumber + e, this.column + t)
        }
        equals(e) {
            return _t.equals(this, e)
        }
        static equals(e, t) {
            return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column
        }
        isBefore(e) {
            return _t.isBefore(this, e)
        }
        static isBefore(e, t) {
            return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column
        }
        isBeforeOrEqual(e) {
            return _t.isBeforeOrEqual(this, e)
        }
        static isBeforeOrEqual(e, t) {
            return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column
        }
        static compare(e, t) {
            const n = 0 | e.lineNumber,
                r = 0 | t.lineNumber;
            if (n === r) {
                return (0 | e.column) - (0 | t.column)
            }
            return n - r
        }
        clone() {
            return new _t(this.lineNumber, this.column)
        }
        toString() {
            return "(" + this.lineNumber + "," + this.column + ")"
        }
        static lift(e) {
            return new _t(e.lineNumber, e.column)
        }
        static isIPosition(e) {
            return e && "number" == typeof e.lineNumber && "number" == typeof e.column
        }
    }
    class yt {
        constructor(e, t, n, r) {
            e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r)
        }
        isEmpty() {
            return yt.isEmpty(this)
        }
        static isEmpty(e) {
            return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
        }
        containsPosition(e) {
            return yt.containsPosition(this, e)
        }
        static containsPosition(e, t) {
            return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn))
        }
        static strictContainsPosition(e, t) {
            return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column <= e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column >= e.endColumn))
        }
        containsRange(e) {
            return yt.containsRange(this, e)
        }
        static containsRange(e, t) {
            return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)))
        }
        strictContainsRange(e) {
            return yt.strictContainsRange(this, e)
        }
        static strictContainsRange(e, t) {
            return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn <= e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn >= e.endColumn)))
        }
        plusRange(e) {
            return yt.plusRange(this, e)
        }
        static plusRange(e, t) {
            let n, r, i, o;
            return t.startLineNumber < e.startLineNumber ? (n = t.startLineNumber, r = t.startColumn) : t.startLineNumber === e.startLineNumber ? (n = t.startLineNumber, r = Math.min(t.startColumn, e.startColumn)) : (n = e.startLineNumber, r = e.startColumn), t.endLineNumber > e.endLineNumber ? (i = t.endLineNumber, o = t.endColumn) : t.endLineNumber === e.endLineNumber ? (i = t.endLineNumber, o = Math.max(t.endColumn, e.endColumn)) : (i = e.endLineNumber, o = e.endColumn), new yt(n, r, i, o)
        }
        intersectRanges(e) {
            return yt.intersectRanges(this, e)
        }
        static intersectRanges(e, t) {
            let n = e.startLineNumber,
                r = e.startColumn,
                i = e.endLineNumber,
                o = e.endColumn,
                a = t.startLineNumber,
                s = t.startColumn,
                l = t.endLineNumber,
                c = t.endColumn;
            return n < a ? (n = a, r = s) : n === a && (r = Math.max(r, s)), i > l ? (i = l, o = c) : i === l && (o = Math.min(o, c)), n > i || n === i && r > o ? null : new yt(n, r, i, o)
        }
        equalsRange(e) {
            return yt.equalsRange(this, e)
        }
        static equalsRange(e, t) {
            return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn
        }
        getEndPosition() {
            return yt.getEndPosition(this)
        }
        static getEndPosition(e) {
            return new _t(e.endLineNumber, e.endColumn)
        }
        getStartPosition() {
            return yt.getStartPosition(this)
        }
        static getStartPosition(e) {
            return new _t(e.startLineNumber, e.startColumn)
        }
        toString() {
            return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }
        setEndPosition(e, t) {
            return new yt(this.startLineNumber, this.startColumn, e, t)
        }
        setStartPosition(e, t) {
            return new yt(e, t, this.endLineNumber, this.endColumn)
        }
        collapseToStart() {
            return yt.collapseToStart(this)
        }
        static collapseToStart(e) {
            return new yt(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn)
        }
        static fromPositions(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
            return new yt(e.lineNumber, e.column, t.lineNumber, t.column)
        }
        static lift(e) {
            return e ? new yt(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null
        }
        static isIRange(e) {
            return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn
        }
        static areIntersectingOrTouching(e, t) {
            return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)
        }
        static areIntersecting(e, t) {
            return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn)
        }
        static compareRangesUsingStarts(e, t) {
            if (e && t) {
                const n = 0 | e.startLineNumber,
                    r = 0 | t.startLineNumber;
                if (n === r) {
                    const n = 0 | e.startColumn,
                        r = 0 | t.startColumn;
                    if (n === r) {
                        const n = 0 | e.endLineNumber,
                            r = 0 | t.endLineNumber;
                        if (n === r) {
                            return (0 | e.endColumn) - (0 | t.endColumn)
                        }
                        return n - r
                    }
                    return n - r
                }
                return n - r
            }
            return (e ? 1 : 0) - (t ? 1 : 0)
        }
        static compareRangesUsingEnds(e, t) {
            return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber
        }
        static spansMultipleLines(e) {
            return e.endLineNumber > e.startLineNumber
        }
        toJSON() {
            return this
        }
    }

    function St(e, t, n, r) {
        return new Fe(e, t, n).ComputeDiff(r)
    }
    class vt {
        constructor(e) {
            const t = [],
                n = [];
            for (let r = 0, i = e.length; r < i; r++) t[r] = kt(e[r], 1), n[r] = Mt(e[r], 1);
            this.lines = e, this._startColumns = t, this._endColumns = n
        }
        getElements() {
            const e = [];
            for (let t = 0, n = this.lines.length; t < n; t++) e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
            return e
        }
        getStrictElement(e) {
            return this.lines[e]
        }
        getStartLineNumber(e) {
            return e + 1
        }
        getEndLineNumber(e) {
            return e + 1
        }
        createCharSequence(e, t, n) {
            const r = [],
                i = [],
                o = [];
            let a = 0;
            for (let s = t; s <= n; s++) {
                const t = this.lines[s],
                    n = e ? this._startColumns[s] : 1,
                    l = e ? this._endColumns[s] : t.length + 1;
                for (let e = n; e < l; e++) r[a] = t.charCodeAt(e - 1), i[a] = s + 1, o[a] = e, a++
            }
            return new Lt(r, i, o)
        }
    }
    class Lt {
        constructor(e, t, n) {
            this._charCodes = e, this._lineNumbers = t, this._columns = n
        }
        getElements() {
            return this._charCodes
        }
        getStartLineNumber(e) {
            return this._lineNumbers[e]
        }
        getStartColumn(e) {
            return this._columns[e]
        }
        getEndLineNumber(e) {
            return this._lineNumbers[e]
        }
        getEndColumn(e) {
            return this._columns[e] + 1
        }
    }
    class Nt {
        constructor(e, t, n, r, i, o, a, s) {
            this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = s
        }
        static createFromDiffChange(e, t, n) {
            let r, i, o, a, s, l, c, h;
            return 0 === e.originalLength ? (r = 0, i = 0, o = 0, a = 0) : (r = t.getStartLineNumber(e.originalStart), i = t.getStartColumn(e.originalStart), o = t.getEndLineNumber(e.originalStart + e.originalLength - 1), a = t.getEndColumn(e.originalStart + e.originalLength - 1)), 0 === e.modifiedLength ? (s = 0, l = 0, c = 0, h = 0) : (s = n.getStartLineNumber(e.modifiedStart), l = n.getStartColumn(e.modifiedStart), c = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1), h = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1)), new Nt(r, i, o, a, s, l, c, h)
        }
    }
    class Et {
        constructor(e, t, n, r, i) {
            this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i
        }
        static createFromDiffResult(e, t, n, r, i, o, a) {
            let s, l, c, h, u;
            if (0 === t.originalLength ? (s = n.getStartLineNumber(t.originalStart) - 1, l = 0) : (s = n.getStartLineNumber(t.originalStart), l = n.getEndLineNumber(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (c = r.getStartLineNumber(t.modifiedStart) - 1, h = 0) : (c = r.getStartLineNumber(t.modifiedStart), h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1)), o && t.originalLength > 0 && t.originalLength < 20 && t.modifiedLength > 0 && t.modifiedLength < 20 && i()) {
                const o = n.createCharSequence(e, t.originalStart, t.originalStart + t.originalLength - 1),
                    s = r.createCharSequence(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1);
                let l = St(o, s, i, !0).changes;
                a && (l = function(e) {
                    if (e.length <= 1) return e;
                    const t = [e[0]];
                    let n = t[0];
                    for (let r = 1, i = e.length; r < i; r++) {
                        const i = e[r],
                            o = i.originalStart - (n.originalStart + n.originalLength),
                            a = i.modifiedStart - (n.modifiedStart + n.modifiedLength);
                        Math.min(o, a) < 3 ? (n.originalLength = i.originalStart + i.originalLength - n.originalStart, n.modifiedLength = i.modifiedStart + i.modifiedLength - n.modifiedStart) : (t.push(i), n = i)
                    }
                    return t
                }(l)), u = [];
                for (let e = 0, t = l.length; e < t; e++) u.push(Nt.createFromDiffChange(l[e], o, s))
            }
            return new Et(s, l, c, h, u)
        }
    }
    class At {
        constructor(e, t, n) {
            this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new vt(e), this.modified = new vt(t), this.continueLineDiff = Rt(n.maxComputationTime), this.continueCharDiff = Rt(0 === n.maxComputationTime ? 0 : Math.min(n.maxComputationTime, 5e3))
        }
        computeDiff() {
            if (1 === this.original.lines.length && 0 === this.original.lines[0].length) return 1 === this.modified.lines.length && 0 === this.modified.lines[0].length ? {
                quitEarly: !1,
                changes: []
            } : {
                quitEarly: !1,
                changes: [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.lines.length,
                    charChanges: [{
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                    }]
                }]
            };
            if (1 === this.modified.lines.length && 0 === this.modified.lines[0].length) return {
                quitEarly: !1,
                changes: [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.lines.length,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [{
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                    }]
                }]
            };
            const e = St(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff),
                t = e.changes,
                n = e.quitEarly;
            if (this.shouldIgnoreTrimWhitespace) {
                const e = [];
                for (let n = 0, r = t.length; n < r; n++) e.push(Et.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[n], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                return {
                    quitEarly: n,
                    changes: e
                }
            }
            const r = [];
            let i = 0,
                o = 0;
            for (let e = -1, n = t.length; e < n; e++) {
                const a = e + 1 < n ? t[e + 1] : null,
                    s = a ? a.originalStart : this.originalLines.length,
                    l = a ? a.modifiedStart : this.modifiedLines.length;
                for (; i < s && o < l;) {
                    const e = this.originalLines[i],
                        t = this.modifiedLines[o];
                    if (e !== t) {
                        {
                            let n = kt(e, 1),
                                a = kt(t, 1);
                            for (; n > 1 && a > 1;) {
                                if (e.charCodeAt(n - 2) !== t.charCodeAt(a - 2)) break;
                                n--, a--
                            }(n > 1 || a > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, n, o + 1, 1, a)
                        } {
                            let n = Mt(e, 1),
                                a = Mt(t, 1);
                            const s = e.length + 1,
                                l = t.length + 1;
                            for (; n < s && a < l;) {
                                if (e.charCodeAt(n - 1) !== e.charCodeAt(a - 1)) break;
                                n++, a++
                            }(n < s || a < l) && this._pushTrimWhitespaceCharChange(r, i + 1, n, s, o + 1, a, l)
                        }
                    }
                    i++, o++
                }
                a && (r.push(Et.createFromDiffResult(this.shouldIgnoreTrimWhitespace, a, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += a.originalLength, o += a.modifiedLength)
            }
            return {
                quitEarly: n,
                changes: r
            }
        }
        _pushTrimWhitespaceCharChange(e, t, n, r, i, o, a) {
            if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a)) return;
            let s;
            this.shouldComputeCharChanges && (s = [new Nt(t, n, t, r, i, o, i, a)]), e.push(new Et(t, t, i, i, s))
        }
        _mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a) {
            const s = e.length;
            if (0 === s) return !1;
            const l = e[s - 1];
            return 0 !== l.originalEndLineNumber && 0 !== l.modifiedEndLineNumber && (l.originalEndLineNumber + 1 === t && l.modifiedEndLineNumber + 1 === i && (l.originalEndLineNumber = t, l.modifiedEndLineNumber = i, this.shouldComputeCharChanges && l.charChanges && l.charChanges.push(new Nt(t, n, t, r, i, o, i, a)), !0))
        }
    }

    function kt(e, t) {
        const n = function(e) {
            for (let t = 0, n = e.length; t < n; t++) {
                const n = e.charCodeAt(t);
                if (32 !== n && 9 !== n) return t
            }
            return -1
        }(e);
        return -1 === n ? t : n + 1
    }

    function Mt(e, t) {
        const n = function(e) {
            for (let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length - 1; t >= 0; t--) {
                const n = e.charCodeAt(t);
                if (32 !== n && 9 !== n) return t
            }
            return -1
        }(e);
        return -1 === n ? t : n + 2
    }

    function Rt(e) {
        if (0 === e) return () => !0;
        const t = Date.now();
        return () => Date.now() - t < e
    }

    function Ot(e) {
        return e < 0 ? 0 : e > 255 ? 255 : 0 | e
    }

    function xt(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e
    }
    class Pt {
        constructor(e) {
            this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1
        }
        insertValues(e, t) {
            e = xt(e);
            const n = this.values,
                r = this.prefixSum,
                i = t.length;
            return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }
        setValue(e, t) {
            return e = xt(e), t = xt(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0)
        }
        removeValues(e, t) {
            e = xt(e), t = xt(t);
            const n = this.values,
                r = this.prefixSum;
            if (e >= n.length) return !1;
            const i = n.length - e;
            return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }
        getTotalSum() {
            return 0 === this.values.length ? 0 : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(e) {
            return e < 0 ? 0 : (e = xt(e), this._getPrefixSum(e))
        }
        _getPrefixSum(e) {
            if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
            let t = this.prefixSumValidIndex[0] + 1;
            0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
            for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
            return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e]
        }
        getIndexOf(e) {
            e = Math.floor(e), this.getTotalSum();
            let t = 0,
                n = this.values.length - 1,
                r = 0,
                i = 0,
                o = 0;
            for (; t <= n;)
                if (r = t + (n - t) / 2 | 0, i = this.prefixSum[r], o = i - this.values[r], e < o) n = r - 1;
                else {
                    if (!(e >= i)) break;
                    t = r + 1
                }
            return new Tt(r, e - o)
        }
    }
    class Tt {
        constructor(e, t) {
            this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t
        }
    }
    const It = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
    const Kt = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = "(-?\\d*\\.\\d\\w*)|([^";
        for (const n of It) e.indexOf(n) >= 0 || (t += "\\" + n);
        return t += "\\s]+)", new RegExp(t, "g")
    }();
    const Dt = {
        maxLen: 1e3,
        windowSize: 15,
        timeBudget: 150
    };

    function Vt(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dt;
        if (n.length > i.maxLen) {
            let o = e - i.maxLen / 2;
            return o < 0 ? o = 0 : r += o, Vt(e, t, n = n.substring(o, e + i.maxLen / 2), r, i)
        }
        const o = Date.now(),
            a = e - 1 - r;
        let s = -1,
            l = null;
        for (let e = 1; !(Date.now() - o >= i.timeBudget); e++) {
            const r = a - i.windowSize * e;
            t.lastIndex = Math.max(0, r);
            const o = Ft(t, n, a, s);
            if (!o && l) break;
            if (l = o, r <= 0) break;
            s = r
        }
        if (l) {
            const e = {
                word: l[0],
                startColumn: r + 1 + l.index,
                endColumn: r + 1 + l.index + l[0].length
            };
            return t.lastIndex = 0, e
        }
        return null
    }

    function Ft(e, t, n, r) {
        let i;
        for (; i = e.exec(t);) {
            const t = i.index || 0;
            if (t <= n && e.lastIndex >= n) return i;
            if (r > 0 && t > r) return null
        }
        return null
    }
    class Bt {
        constructor(e) {
            const t = Ot(e);
            this._defaultValue = t, this._asciiMap = Bt._createAsciiMap(t), this._map = new Map
        }
        static _createAsciiMap(e) {
            const t = new Uint8Array(256);
            for (let n = 0; n < 256; n++) t[n] = e;
            return t
        }
        set(e, t) {
            const n = Ot(t);
            e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n)
        }
        get(e) {
            return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue
        }
    }
    class Ut {
        constructor(e, t, n) {
            const r = new Uint8Array(e * t);
            for (let i = 0, o = e * t; i < o; i++) r[i] = n;
            this._data = r, this.rows = e, this.cols = t
        }
        get(e, t) {
            return this._data[e * this.cols + t]
        }
        set(e, t, n) {
            this._data[e * this.cols + t] = n
        }
    }
    class qt {
        constructor(e) {
            let t = 0,
                n = 0;
            for (let r = 0, i = e.length; r < i; r++) {
                const [i, o, a] = e[r];
                o > t && (t = o), i > n && (n = i), a > n && (n = a)
            }
            t++, n++;
            const r = new Ut(n, t, 0);
            for (let t = 0, n = e.length; t < n; t++) {
                const [n, i, o] = e[t];
                r.set(n, i, o)
            }
            this._states = r, this._maxCharCode = t
        }
        nextState(e, t) {
            return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t)
        }
    }
    let Ht = null;
    let Wt = null;
    class $t {
        static _createLink(e, t, n, r, i) {
            let o = i - 1;
            do {
                const n = t.charCodeAt(o);
                if (2 !== e.get(n)) break;
                o--
            } while (o > r);
            if (r > 0) {
                const e = t.charCodeAt(r - 1),
                    n = t.charCodeAt(o);
                (40 === e && 41 === n || 91 === e && 93 === n || 123 === e && 125 === n) && o--
            }
            return {
                range: {
                    startLineNumber: n,
                    startColumn: r + 1,
                    endLineNumber: n,
                    endColumn: o + 2
                },
                url: t.substring(r, o + 1)
            }
        }
        static computeLinks(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (null === Ht && (Ht = new qt([
                [1, 104, 2],
                [1, 72, 2],
                [1, 102, 6],
                [1, 70, 6],
                [2, 116, 3],
                [2, 84, 3],
                [3, 116, 4],
                [3, 84, 4],
                [4, 112, 5],
                [4, 80, 5],
                [5, 115, 9],
                [5, 83, 9],
                [5, 58, 10],
                [6, 105, 7],
                [6, 73, 7],
                [7, 108, 8],
                [7, 76, 8],
                [8, 101, 9],
                [8, 69, 9],
                [9, 58, 10],
                [10, 47, 11],
                [11, 47, 12]
            ])), Ht);
            const n = function() {
                    if (null === Wt) {
                        Wt = new Bt(0);
                        const e = " \t<>'\"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…";
                        for (let t = 0; t < e.length; t++) Wt.set(e.charCodeAt(t), 1);
                        const t = ".,;";
                        for (let e = 0; e < t.length; e++) Wt.set(t.charCodeAt(e), 2)
                    }
                    return Wt
                }(),
                r = [];
            for (let i = 1, o = e.getLineCount(); i <= o; i++) {
                const o = e.getLineContent(i),
                    a = o.length;
                let s = 0,
                    l = 0,
                    c = 0,
                    h = 1,
                    u = !1,
                    d = !1,
                    f = !1,
                    m = !1;
                for (; s < a;) {
                    let e = !1;
                    const a = o.charCodeAt(s);
                    if (13 === h) {
                        let t;
                        switch (a) {
                            case 40:
                                u = !0, t = 0;
                                break;
                            case 41:
                                t = u ? 0 : 1;
                                break;
                            case 91:
                                f = !0, d = !0, t = 0;
                                break;
                            case 93:
                                f = !1, t = d ? 0 : 1;
                                break;
                            case 123:
                                m = !0, t = 0;
                                break;
                            case 125:
                                t = m ? 0 : 1;
                                break;
                            case 39:
                                t = 34 === c || 96 === c ? 0 : 1;
                                break;
                            case 34:
                                t = 39 === c || 96 === c ? 0 : 1;
                                break;
                            case 96:
                                t = 39 === c || 34 === c ? 0 : 1;
                                break;
                            case 42:
                                t = 42 === c ? 1 : 0;
                                break;
                            case 124:
                                t = 124 === c ? 1 : 0;
                                break;
                            case 32:
                                t = f ? 0 : 1;
                                break;
                            default:
                                t = n.get(a)
                        }
                        1 === t && (r.push($t._createLink(n, o, i, l, s)), e = !0)
                    } else if (12 === h) {
                        let t;
                        91 === a ? (d = !0, t = 0) : t = n.get(a), 1 === t ? e = !0 : h = 13
                    } else h = t.nextState(h, a), 0 === h && (e = !0);
                    e && (h = 1, u = !1, d = !1, m = !1, l = s + 1, c = a), s++
                }
                13 === h && r.push($t._createLink(n, o, i, l, a))
            }
            return r
        }
    }
    class zt {
        constructor() {
            this._defaultValueSet = [
                ["true", "false"],
                ["True", "False"],
                ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
                ["public", "protected", "private"]
            ]
        }
        navigateValueSet(e, t, n, r, i) {
            if (e && t) {
                const n = this.doNavigateValueSet(t, i);
                if (n) return {
                    range: e,
                    value: n
                }
            }
            if (n && r) {
                const e = this.doNavigateValueSet(r, i);
                if (e) return {
                    range: n,
                    value: e
                }
            }
            return null
        }
        doNavigateValueSet(e, t) {
            const n = this.numberReplace(e, t);
            return null !== n ? n : this.textReplace(e, t)
        }
        numberReplace(e, t) {
            const n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1));
            let r = Number(e),
                i = parseFloat(e);
            return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null
        }
        textReplace(e, t) {
            return this.valueSetsReplace(this._defaultValueSet, e, t)
        }
        valueSetsReplace(e, t, n) {
            let r = null;
            for (let i = 0, o = e.length; null === r && i < o; i++) r = this.valueSetReplace(e[i], t, n);
            return r
        }
        valueSetReplace(e, t, n) {
            let r = e.indexOf(t);
            return r >= 0 ? (r += n ? 1 : -1, r < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null
        }
    }
    zt.INSTANCE = new zt;
    const jt = Object.freeze((function(e, t) {
        const n = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(n)
            }
        }
    }));
    var Gt;
    ! function(e) {
        e.isCancellationToken = function(t) {
            return t === e.None || t === e.Cancelled || (t instanceof Yt || !(!t || "object" != typeof t) && ("boolean" == typeof t.isCancellationRequested && "function" == typeof t.onCancellationRequested))
        }, e.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: Y.None
        }), e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: jt
        })
    }(Gt || (Gt = {}));
    class Yt {
        constructor() {
            this._isCancelled = !1, this._emitter = null
        }
        cancel() {
            this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()))
        }
        get isCancellationRequested() {
            return this._isCancelled
        }
        get onCancellationRequested() {
            return this._isCancelled ? jt : (this._emitter || (this._emitter = new X), this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(), this._emitter = null)
        }
    }
    class Zt {
        constructor(e) {
            this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this)
        }
        get token() {
            return this._token || (this._token = new Yt), this._token
        }
        cancel() {
            this._token ? this._token instanceof Yt && this._token.cancel() : this._token = Gt.Cancelled
        }
        dispose() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.cancel(), this._parentListener && this._parentListener.dispose(), this._token ? this._token instanceof Yt && this._token.dispose() : this._token = Gt.None
        }
    }
    class Jt {
        constructor() {
            this._keyCodeToStr = [], this._strToKeyCode = Object.create(null)
        }
        define(e, t) {
            this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e
        }
        keyCodeToStr(e) {
            return this._keyCodeToStr[e]
        }
        strToKeyCode(e) {
            return this._strToKeyCode[e.toLowerCase()] || 0
        }
    }
    const Qt = new Jt,
        Xt = new Jt,
        en = new Jt,
        tn = new Array(230),
        nn = {},
        rn = [],
        on = Object.create(null),
        an = Object.create(null),
        sn = [],
        ln = [];
    for (let e = 0; e <= 193; e++) sn[e] = -1;
    for (let e = 0; e <= 127; e++) ln[e] = -1;
    var cn;
    ! function() {
        const e = "",
            t = [
                [0, 1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", e, e],
                [0, 1, 1, "Hyper", 0, e, 0, e, e, e],
                [0, 1, 2, "Super", 0, e, 0, e, e, e],
                [0, 1, 3, "Fn", 0, e, 0, e, e, e],
                [0, 1, 4, "FnLock", 0, e, 0, e, e, e],
                [0, 1, 5, "Suspend", 0, e, 0, e, e, e],
                [0, 1, 6, "Resume", 0, e, 0, e, e, e],
                [0, 1, 7, "Turbo", 0, e, 0, e, e, e],
                [0, 1, 8, "Sleep", 0, e, 0, "VK_SLEEP", e, e],
                [0, 1, 9, "WakeUp", 0, e, 0, e, e, e],
                [31, 0, 10, "KeyA", 31, "A", 65, "VK_A", e, e],
                [32, 0, 11, "KeyB", 32, "B", 66, "VK_B", e, e],
                [33, 0, 12, "KeyC", 33, "C", 67, "VK_C", e, e],
                [34, 0, 13, "KeyD", 34, "D", 68, "VK_D", e, e],
                [35, 0, 14, "KeyE", 35, "E", 69, "VK_E", e, e],
                [36, 0, 15, "KeyF", 36, "F", 70, "VK_F", e, e],
                [37, 0, 16, "KeyG", 37, "G", 71, "VK_G", e, e],
                [38, 0, 17, "KeyH", 38, "H", 72, "VK_H", e, e],
                [39, 0, 18, "KeyI", 39, "I", 73, "VK_I", e, e],
                [40, 0, 19, "KeyJ", 40, "J", 74, "VK_J", e, e],
                [41, 0, 20, "KeyK", 41, "K", 75, "VK_K", e, e],
                [42, 0, 21, "KeyL", 42, "L", 76, "VK_L", e, e],
                [43, 0, 22, "KeyM", 43, "M", 77, "VK_M", e, e],
                [44, 0, 23, "KeyN", 44, "N", 78, "VK_N", e, e],
                [45, 0, 24, "KeyO", 45, "O", 79, "VK_O", e, e],
                [46, 0, 25, "KeyP", 46, "P", 80, "VK_P", e, e],
                [47, 0, 26, "KeyQ", 47, "Q", 81, "VK_Q", e, e],
                [48, 0, 27, "KeyR", 48, "R", 82, "VK_R", e, e],
                [49, 0, 28, "KeyS", 49, "S", 83, "VK_S", e, e],
                [50, 0, 29, "KeyT", 50, "T", 84, "VK_T", e, e],
                [51, 0, 30, "KeyU", 51, "U", 85, "VK_U", e, e],
                [52, 0, 31, "KeyV", 52, "V", 86, "VK_V", e, e],
                [53, 0, 32, "KeyW", 53, "W", 87, "VK_W", e, e],
                [54, 0, 33, "KeyX", 54, "X", 88, "VK_X", e, e],
                [55, 0, 34, "KeyY", 55, "Y", 89, "VK_Y", e, e],
                [56, 0, 35, "KeyZ", 56, "Z", 90, "VK_Z", e, e],
                [22, 0, 36, "Digit1", 22, "1", 49, "VK_1", e, e],
                [23, 0, 37, "Digit2", 23, "2", 50, "VK_2", e, e],
                [24, 0, 38, "Digit3", 24, "3", 51, "VK_3", e, e],
                [25, 0, 39, "Digit4", 25, "4", 52, "VK_4", e, e],
                [26, 0, 40, "Digit5", 26, "5", 53, "VK_5", e, e],
                [27, 0, 41, "Digit6", 27, "6", 54, "VK_6", e, e],
                [28, 0, 42, "Digit7", 28, "7", 55, "VK_7", e, e],
                [29, 0, 43, "Digit8", 29, "8", 56, "VK_8", e, e],
                [30, 0, 44, "Digit9", 30, "9", 57, "VK_9", e, e],
                [21, 0, 45, "Digit0", 21, "0", 48, "VK_0", e, e],
                [3, 1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", e, e],
                [9, 1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", e, e],
                [1, 1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", e, e],
                [2, 1, 49, "Tab", 2, "Tab", 9, "VK_TAB", e, e],
                [10, 1, 50, "Space", 10, "Space", 32, "VK_SPACE", e, e],
                [83, 0, 51, "Minus", 83, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
                [81, 0, 52, "Equal", 81, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
                [87, 0, 53, "BracketLeft", 87, "[", 219, "VK_OEM_4", "[", "OEM_4"],
                [89, 0, 54, "BracketRight", 89, "]", 221, "VK_OEM_6", "]", "OEM_6"],
                [88, 0, 55, "Backslash", 88, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
                [0, 0, 56, "IntlHash", 0, e, 0, e, e, e],
                [80, 0, 57, "Semicolon", 80, ";", 186, "VK_OEM_1", ";", "OEM_1"],
                [90, 0, 58, "Quote", 90, "'", 222, "VK_OEM_7", "'", "OEM_7"],
                [86, 0, 59, "Backquote", 86, "`", 192, "VK_OEM_3", "`", "OEM_3"],
                [82, 0, 60, "Comma", 82, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
                [84, 0, 61, "Period", 84, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
                [85, 0, 62, "Slash", 85, "/", 191, "VK_OEM_2", "/", "OEM_2"],
                [8, 1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", e, e],
                [59, 1, 64, "F1", 59, "F1", 112, "VK_F1", e, e],
                [60, 1, 65, "F2", 60, "F2", 113, "VK_F2", e, e],
                [61, 1, 66, "F3", 61, "F3", 114, "VK_F3", e, e],
                [62, 1, 67, "F4", 62, "F4", 115, "VK_F4", e, e],
                [63, 1, 68, "F5", 63, "F5", 116, "VK_F5", e, e],
                [64, 1, 69, "F6", 64, "F6", 117, "VK_F6", e, e],
                [65, 1, 70, "F7", 65, "F7", 118, "VK_F7", e, e],
                [66, 1, 71, "F8", 66, "F8", 119, "VK_F8", e, e],
                [67, 1, 72, "F9", 67, "F9", 120, "VK_F9", e, e],
                [68, 1, 73, "F10", 68, "F10", 121, "VK_F10", e, e],
                [69, 1, 74, "F11", 69, "F11", 122, "VK_F11", e, e],
                [70, 1, 75, "F12", 70, "F12", 123, "VK_F12", e, e],
                [0, 1, 76, "PrintScreen", 0, e, 0, e, e, e],
                [79, 1, 77, "ScrollLock", 79, "ScrollLock", 145, "VK_SCROLL", e, e],
                [7, 1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", e, e],
                [19, 1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", e, e],
                [14, 1, 80, "Home", 14, "Home", 36, "VK_HOME", e, e],
                [11, 1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", e, e],
                [20, 1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", e, e],
                [13, 1, 83, "End", 13, "End", 35, "VK_END", e, e],
                [12, 1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", e, e],
                [17, 1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", e],
                [15, 1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", e],
                [18, 1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", e],
                [16, 1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", e],
                [78, 1, 89, "NumLock", 78, "NumLock", 144, "VK_NUMLOCK", e, e],
                [108, 1, 90, "NumpadDivide", 108, "NumPad_Divide", 111, "VK_DIVIDE", e, e],
                [103, 1, 91, "NumpadMultiply", 103, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e],
                [106, 1, 92, "NumpadSubtract", 106, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e],
                [104, 1, 93, "NumpadAdd", 104, "NumPad_Add", 107, "VK_ADD", e, e],
                [3, 1, 94, "NumpadEnter", 3, e, 0, e, e, e],
                [94, 1, 95, "Numpad1", 94, "NumPad1", 97, "VK_NUMPAD1", e, e],
                [95, 1, 96, "Numpad2", 95, "NumPad2", 98, "VK_NUMPAD2", e, e],
                [96, 1, 97, "Numpad3", 96, "NumPad3", 99, "VK_NUMPAD3", e, e],
                [97, 1, 98, "Numpad4", 97, "NumPad4", 100, "VK_NUMPAD4", e, e],
                [98, 1, 99, "Numpad5", 98, "NumPad5", 101, "VK_NUMPAD5", e, e],
                [99, 1, 100, "Numpad6", 99, "NumPad6", 102, "VK_NUMPAD6", e, e],
                [100, 1, 101, "Numpad7", 100, "NumPad7", 103, "VK_NUMPAD7", e, e],
                [101, 1, 102, "Numpad8", 101, "NumPad8", 104, "VK_NUMPAD8", e, e],
                [102, 1, 103, "Numpad9", 102, "NumPad9", 105, "VK_NUMPAD9", e, e],
                [93, 1, 104, "Numpad0", 93, "NumPad0", 96, "VK_NUMPAD0", e, e],
                [107, 1, 105, "NumpadDecimal", 107, "NumPad_Decimal", 110, "VK_DECIMAL", e, e],
                [92, 0, 106, "IntlBackslash", 92, "OEM_102", 226, "VK_OEM_102", e, e],
                [58, 1, 107, "ContextMenu", 58, "ContextMenu", 93, e, e, e],
                [0, 1, 108, "Power", 0, e, 0, e, e, e],
                [0, 1, 109, "NumpadEqual", 0, e, 0, e, e, e],
                [71, 1, 110, "F13", 71, "F13", 124, "VK_F13", e, e],
                [72, 1, 111, "F14", 72, "F14", 125, "VK_F14", e, e],
                [73, 1, 112, "F15", 73, "F15", 126, "VK_F15", e, e],
                [74, 1, 113, "F16", 74, "F16", 127, "VK_F16", e, e],
                [75, 1, 114, "F17", 75, "F17", 128, "VK_F17", e, e],
                [76, 1, 115, "F18", 76, "F18", 129, "VK_F18", e, e],
                [77, 1, 116, "F19", 77, "F19", 130, "VK_F19", e, e],
                [0, 1, 117, "F20", 0, e, 0, "VK_F20", e, e],
                [0, 1, 118, "F21", 0, e, 0, "VK_F21", e, e],
                [0, 1, 119, "F22", 0, e, 0, "VK_F22", e, e],
                [0, 1, 120, "F23", 0, e, 0, "VK_F23", e, e],
                [0, 1, 121, "F24", 0, e, 0, "VK_F24", e, e],
                [0, 1, 122, "Open", 0, e, 0, e, e, e],
                [0, 1, 123, "Help", 0, e, 0, e, e, e],
                [0, 1, 124, "Select", 0, e, 0, e, e, e],
                [0, 1, 125, "Again", 0, e, 0, e, e, e],
                [0, 1, 126, "Undo", 0, e, 0, e, e, e],
                [0, 1, 127, "Cut", 0, e, 0, e, e, e],
                [0, 1, 128, "Copy", 0, e, 0, e, e, e],
                [0, 1, 129, "Paste", 0, e, 0, e, e, e],
                [0, 1, 130, "Find", 0, e, 0, e, e, e],
                [0, 1, 131, "AudioVolumeMute", 112, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e],
                [0, 1, 132, "AudioVolumeUp", 113, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e],
                [0, 1, 133, "AudioVolumeDown", 114, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e],
                [105, 1, 134, "NumpadComma", 105, "NumPad_Separator", 108, "VK_SEPARATOR", e, e],
                [110, 0, 135, "IntlRo", 110, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
                [0, 1, 136, "KanaMode", 0, e, 0, e, e, e],
                [0, 0, 137, "IntlYen", 0, e, 0, e, e, e],
                [0, 1, 138, "Convert", 0, e, 0, e, e, e],
                [0, 1, 139, "NonConvert", 0, e, 0, e, e, e],
                [0, 1, 140, "Lang1", 0, e, 0, e, e, e],
                [0, 1, 141, "Lang2", 0, e, 0, e, e, e],
                [0, 1, 142, "Lang3", 0, e, 0, e, e, e],
                [0, 1, 143, "Lang4", 0, e, 0, e, e, e],
                [0, 1, 144, "Lang5", 0, e, 0, e, e, e],
                [0, 1, 145, "Abort", 0, e, 0, e, e, e],
                [0, 1, 146, "Props", 0, e, 0, e, e, e],
                [0, 1, 147, "NumpadParenLeft", 0, e, 0, e, e, e],
                [0, 1, 148, "NumpadParenRight", 0, e, 0, e, e, e],
                [0, 1, 149, "NumpadBackspace", 0, e, 0, e, e, e],
                [0, 1, 150, "NumpadMemoryStore", 0, e, 0, e, e, e],
                [0, 1, 151, "NumpadMemoryRecall", 0, e, 0, e, e, e],
                [0, 1, 152, "NumpadMemoryClear", 0, e, 0, e, e, e],
                [0, 1, 153, "NumpadMemoryAdd", 0, e, 0, e, e, e],
                [0, 1, 154, "NumpadMemorySubtract", 0, e, 0, e, e, e],
                [0, 1, 155, "NumpadClear", 126, "Clear", 12, "VK_CLEAR", e, e],
                [0, 1, 156, "NumpadClearEntry", 0, e, 0, e, e, e],
                [5, 1, 0, e, 5, "Ctrl", 17, "VK_CONTROL", e, e],
                [4, 1, 0, e, 4, "Shift", 16, "VK_SHIFT", e, e],
                [6, 1, 0, e, 6, "Alt", 18, "VK_MENU", e, e],
                [57, 1, 0, e, 57, "Meta", 0, "VK_COMMAND", e, e],
                [5, 1, 157, "ControlLeft", 5, e, 0, "VK_LCONTROL", e, e],
                [4, 1, 158, "ShiftLeft", 4, e, 0, "VK_LSHIFT", e, e],
                [6, 1, 159, "AltLeft", 6, e, 0, "VK_LMENU", e, e],
                [57, 1, 160, "MetaLeft", 57, e, 0, "VK_LWIN", e, e],
                [5, 1, 161, "ControlRight", 5, e, 0, "VK_RCONTROL", e, e],
                [4, 1, 162, "ShiftRight", 4, e, 0, "VK_RSHIFT", e, e],
                [6, 1, 163, "AltRight", 6, e, 0, "VK_RMENU", e, e],
                [57, 1, 164, "MetaRight", 57, e, 0, "VK_RWIN", e, e],
                [0, 1, 165, "BrightnessUp", 0, e, 0, e, e, e],
                [0, 1, 166, "BrightnessDown", 0, e, 0, e, e, e],
                [0, 1, 167, "MediaPlay", 0, e, 0, e, e, e],
                [0, 1, 168, "MediaRecord", 0, e, 0, e, e, e],
                [0, 1, 169, "MediaFastForward", 0, e, 0, e, e, e],
                [0, 1, 170, "MediaRewind", 0, e, 0, e, e, e],
                [114, 1, 171, "MediaTrackNext", 119, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e],
                [115, 1, 172, "MediaTrackPrevious", 120, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e],
                [116, 1, 173, "MediaStop", 121, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
                [0, 1, 174, "Eject", 0, e, 0, e, e, e],
                [117, 1, 175, "MediaPlayPause", 122, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e],
                [0, 1, 176, "MediaSelect", 123, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e],
                [0, 1, 177, "LaunchMail", 124, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e],
                [0, 1, 178, "LaunchApp2", 125, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e],
                [0, 1, 179, "LaunchApp1", 0, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
                [0, 1, 180, "SelectTask", 0, e, 0, e, e, e],
                [0, 1, 181, "LaunchScreenSaver", 0, e, 0, e, e, e],
                [0, 1, 182, "BrowserSearch", 115, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e],
                [0, 1, 183, "BrowserHome", 116, "BrowserHome", 172, "VK_BROWSER_HOME", e, e],
                [112, 1, 184, "BrowserBack", 117, "BrowserBack", 166, "VK_BROWSER_BACK", e, e],
                [113, 1, 185, "BrowserForward", 118, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e],
                [0, 1, 186, "BrowserStop", 0, e, 0, "VK_BROWSER_STOP", e, e],
                [0, 1, 187, "BrowserRefresh", 0, e, 0, "VK_BROWSER_REFRESH", e, e],
                [0, 1, 188, "BrowserFavorites", 0, e, 0, "VK_BROWSER_FAVORITES", e, e],
                [0, 1, 189, "ZoomToggle", 0, e, 0, e, e, e],
                [0, 1, 190, "MailReply", 0, e, 0, e, e, e],
                [0, 1, 191, "MailForward", 0, e, 0, e, e, e],
                [0, 1, 192, "MailSend", 0, e, 0, e, e, e],
                [109, 1, 0, e, 109, "KeyInComposition", 229, e, e, e],
                [111, 1, 0, e, 111, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
                [91, 1, 0, e, 91, "OEM_8", 223, "VK_OEM_8", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_KANA", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_HANGUL", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_JUNJA", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_FINAL", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_HANJA", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_KANJI", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_CONVERT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_NONCONVERT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_ACCEPT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_MODECHANGE", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_SELECT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_PRINT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_EXECUTE", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_SNAPSHOT", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_HELP", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_APPS", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_PROCESSKEY", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_PACKET", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_DBE_SBCSCHAR", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_DBE_DBCSCHAR", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_ATTN", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_CRSEL", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_EXSEL", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_EREOF", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_PLAY", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_ZOOM", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_NONAME", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_PA1", e, e],
                [0, 1, 0, e, 0, e, 0, "VK_OEM_CLEAR", e, e]
            ];
        let n = [],
            r = [];
        for (const e of t) {
            const [t, i, o, a, s, l, c, h, u, d] = e;
            if (r[o] || (r[o] = !0, rn[o] = a, on[a] = o, an[a.toLowerCase()] = o, i && (sn[o] = s, 0 !== s && 3 !== s && 5 !== s && 4 !== s && 6 !== s && 57 !== s && (ln[s] = o))), !n[s]) {
                if (n[s] = !0, !l) throw new Error(`String representation missing for key code ${s} around scan code ${a}`);
                Qt.define(s, l), Xt.define(s, u || l), en.define(s, d || u || l)
            }
            c && (tn[c] = s), h && (nn[h] = s)
        }
        ln[3] = 46
    }(),
    function(e) {
        e.toString = function(e) {
            return Qt.keyCodeToStr(e)
        }, e.fromString = function(e) {
            return Qt.strToKeyCode(e)
        }, e.toUserSettingsUS = function(e) {
            return Xt.keyCodeToStr(e)
        }, e.toUserSettingsGeneral = function(e) {
            return en.keyCodeToStr(e)
        }, e.fromUserSettings = function(e) {
            return Xt.strToKeyCode(e) || en.strToKeyCode(e)
        }, e.toElectronAccelerator = function(e) {
            if (e >= 93 && e <= 108) return null;
            switch (e) {
                case 16:
                    return "Up";
                case 18:
                    return "Down";
                case 15:
                    return "Left";
                case 17:
                    return "Right"
            }
            return Qt.keyCodeToStr(e)
        }
    }(cn || (cn = {}));
    class hn extends yt {
        constructor(e, t, n, r) {
            super(e, t, n, r), this.selectionStartLineNumber = e, this.selectionStartColumn = t, this.positionLineNumber = n, this.positionColumn = r
        }
        toString() {
            return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"
        }
        equalsSelection(e) {
            return hn.selectionsEqual(this, e)
        }
        static selectionsEqual(e, t) {
            return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn
        }
        getDirection() {
            return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1
        }
        setEndPosition(e, t) {
            return 0 === this.getDirection() ? new hn(this.startLineNumber, this.startColumn, e, t) : new hn(e, t, this.startLineNumber, this.startColumn)
        }
        getPosition() {
            return new _t(this.positionLineNumber, this.positionColumn)
        }
        getSelectionStart() {
            return new _t(this.selectionStartLineNumber, this.selectionStartColumn)
        }
        setStartPosition(e, t) {
            return 0 === this.getDirection() ? new hn(e, t, this.endLineNumber, this.endColumn) : new hn(this.endLineNumber, this.endColumn, e, t)
        }
        static fromPositions(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
            return new hn(e.lineNumber, e.column, t.lineNumber, t.column)
        }
        static fromRange(e, t) {
            return 0 === t ? new hn(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : new hn(e.endLineNumber, e.endColumn, e.startLineNumber, e.startColumn)
        }
        static liftSelection(e) {
            return new hn(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn)
        }
        static selectionsArrEqual(e, t) {
            if (e && !t || !e && t) return !1;
            if (!e && !t) return !0;
            if (e.length !== t.length) return !1;
            for (let n = 0, r = e.length; n < r; n++)
                if (!this.selectionsEqual(e[n], t[n])) return !1;
            return !0
        }
        static isISelection(e) {
            return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn
        }
        static createWithDirection(e, t, n, r, i) {
            return 0 === i ? new hn(e, t, n, r) : new hn(n, r, e, t)
        }
    }
    var un, dn, fn, mn, gn, bn, Cn, pn, wn = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            l((r = r.apply(e, t || [])).next())
        }))
    };
    class _n extends _ {
        constructor(e, t, n) {
            super(), this._registry = e, this._languageId = t, this._factory = n, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1
        }
        get isResolved() {
            return this._isResolved
        }
        dispose() {
            this._isDisposed = !0, super.dispose()
        }
        resolve() {
            return wn(this, void 0, void 0, (function*() {
                return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise
            }))
        }
        _create() {
            return wn(this, void 0, void 0, (function*() {
                const e = yield Promise.resolve(this._factory.createTokenizationSupport());
                this._isResolved = !0, e && !this._isDisposed && this._register(this._registry.register(this._languageId, e))
            }))
        }
    }
    class yn {
        constructor(e, t, n) {
            this.id = e, this.definition = t, this.description = n, yn._allCodicons.push(this)
        }
        get classNames() {
            return "codicon codicon-" + this.id
        }
        get classNamesArray() {
            return ["codicon", "codicon-" + this.id]
        }
        get cssSelector() {
            return ".codicon.codicon-" + this.id
        }
        static getAll() {
            return yn._allCodicons
        }
    }
    yn._allCodicons = [], yn.add = new yn("add", {
            fontCharacter: "\\ea60"
        }), yn.plus = new yn("plus", yn.add.definition), yn.gistNew = new yn("gist-new", yn.add.definition), yn.repoCreate = new yn("repo-create", yn.add.definition), yn.lightbulb = new yn("lightbulb", {
            fontCharacter: "\\ea61"
        }), yn.lightBulb = new yn("light-bulb", {
            fontCharacter: "\\ea61"
        }), yn.repo = new yn("repo", {
            fontCharacter: "\\ea62"
        }), yn.repoDelete = new yn("repo-delete", {
            fontCharacter: "\\ea62"
        }), yn.gistFork = new yn("gist-fork", {
            fontCharacter: "\\ea63"
        }), yn.repoForked = new yn("repo-forked", {
            fontCharacter: "\\ea63"
        }), yn.gitPullRequest = new yn("git-pull-request", {
            fontCharacter: "\\ea64"
        }), yn.gitPullRequestAbandoned = new yn("git-pull-request-abandoned", {
            fontCharacter: "\\ea64"
        }), yn.recordKeys = new yn("record-keys", {
            fontCharacter: "\\ea65"
        }), yn.keyboard = new yn("keyboard", {
            fontCharacter: "\\ea65"
        }), yn.tag = new yn("tag", {
            fontCharacter: "\\ea66"
        }), yn.tagAdd = new yn("tag-add", {
            fontCharacter: "\\ea66"
        }), yn.tagRemove = new yn("tag-remove", {
            fontCharacter: "\\ea66"
        }), yn.person = new yn("person", {
            fontCharacter: "\\ea67"
        }), yn.personFollow = new yn("person-follow", {
            fontCharacter: "\\ea67"
        }), yn.personOutline = new yn("person-outline", {
            fontCharacter: "\\ea67"
        }), yn.personFilled = new yn("person-filled", {
            fontCharacter: "\\ea67"
        }), yn.gitBranch = new yn("git-branch", {
            fontCharacter: "\\ea68"
        }), yn.gitBranchCreate = new yn("git-branch-create", {
            fontCharacter: "\\ea68"
        }), yn.gitBranchDelete = new yn("git-branch-delete", {
            fontCharacter: "\\ea68"
        }), yn.sourceControl = new yn("source-control", {
            fontCharacter: "\\ea68"
        }), yn.mirror = new yn("mirror", {
            fontCharacter: "\\ea69"
        }), yn.mirrorPublic = new yn("mirror-public", {
            fontCharacter: "\\ea69"
        }), yn.star = new yn("star", {
            fontCharacter: "\\ea6a"
        }), yn.starAdd = new yn("star-add", {
            fontCharacter: "\\ea6a"
        }), yn.starDelete = new yn("star-delete", {
            fontCharacter: "\\ea6a"
        }), yn.starEmpty = new yn("star-empty", {
            fontCharacter: "\\ea6a"
        }), yn.comment = new yn("comment", {
            fontCharacter: "\\ea6b"
        }), yn.commentAdd = new yn("comment-add", {
            fontCharacter: "\\ea6b"
        }), yn.alert = new yn("alert", {
            fontCharacter: "\\ea6c"
        }), yn.warning = new yn("warning", {
            fontCharacter: "\\ea6c"
        }), yn.search = new yn("search", {
            fontCharacter: "\\ea6d"
        }), yn.searchSave = new yn("search-save", {
            fontCharacter: "\\ea6d"
        }), yn.logOut = new yn("log-out", {
            fontCharacter: "\\ea6e"
        }), yn.signOut = new yn("sign-out", {
            fontCharacter: "\\ea6e"
        }), yn.logIn = new yn("log-in", {
            fontCharacter: "\\ea6f"
        }), yn.signIn = new yn("sign-in", {
            fontCharacter: "\\ea6f"
        }), yn.eye = new yn("eye", {
            fontCharacter: "\\ea70"
        }), yn.eyeUnwatch = new yn("eye-unwatch", {
            fontCharacter: "\\ea70"
        }), yn.eyeWatch = new yn("eye-watch", {
            fontCharacter: "\\ea70"
        }), yn.circleFilled = new yn("circle-filled", {
            fontCharacter: "\\ea71"
        }), yn.primitiveDot = new yn("primitive-dot", {
            fontCharacter: "\\ea71"
        }), yn.closeDirty = new yn("close-dirty", {
            fontCharacter: "\\ea71"
        }), yn.debugBreakpoint = new yn("debug-breakpoint", {
            fontCharacter: "\\ea71"
        }), yn.debugBreakpointDisabled = new yn("debug-breakpoint-disabled", {
            fontCharacter: "\\ea71"
        }), yn.debugHint = new yn("debug-hint", {
            fontCharacter: "\\ea71"
        }), yn.primitiveSquare = new yn("primitive-square", {
            fontCharacter: "\\ea72"
        }), yn.edit = new yn("edit", {
            fontCharacter: "\\ea73"
        }), yn.pencil = new yn("pencil", {
            fontCharacter: "\\ea73"
        }), yn.info = new yn("info", {
            fontCharacter: "\\ea74"
        }), yn.issueOpened = new yn("issue-opened", {
            fontCharacter: "\\ea74"
        }), yn.gistPrivate = new yn("gist-private", {
            fontCharacter: "\\ea75"
        }), yn.gitForkPrivate = new yn("git-fork-private", {
            fontCharacter: "\\ea75"
        }), yn.lock = new yn("lock", {
            fontCharacter: "\\ea75"
        }), yn.mirrorPrivate = new yn("mirror-private", {
            fontCharacter: "\\ea75"
        }), yn.close = new yn("close", {
            fontCharacter: "\\ea76"
        }), yn.removeClose = new yn("remove-close", {
            fontCharacter: "\\ea76"
        }), yn.x = new yn("x", {
            fontCharacter: "\\ea76"
        }), yn.repoSync = new yn("repo-sync", {
            fontCharacter: "\\ea77"
        }), yn.sync = new yn("sync", {
            fontCharacter: "\\ea77"
        }), yn.clone = new yn("clone", {
            fontCharacter: "\\ea78"
        }), yn.desktopDownload = new yn("desktop-download", {
            fontCharacter: "\\ea78"
        }), yn.beaker = new yn("beaker", {
            fontCharacter: "\\ea79"
        }), yn.microscope = new yn("microscope", {
            fontCharacter: "\\ea79"
        }), yn.vm = new yn("vm", {
            fontCharacter: "\\ea7a"
        }), yn.deviceDesktop = new yn("device-desktop", {
            fontCharacter: "\\ea7a"
        }), yn.file = new yn("file", {
            fontCharacter: "\\ea7b"
        }), yn.fileText = new yn("file-text", {
            fontCharacter: "\\ea7b"
        }), yn.more = new yn("more", {
            fontCharacter: "\\ea7c"
        }), yn.ellipsis = new yn("ellipsis", {
            fontCharacter: "\\ea7c"
        }), yn.kebabHorizontal = new yn("kebab-horizontal", {
            fontCharacter: "\\ea7c"
        }), yn.mailReply = new yn("mail-reply", {
            fontCharacter: "\\ea7d"
        }), yn.reply = new yn("reply", {
            fontCharacter: "\\ea7d"
        }), yn.organization = new yn("organization", {
            fontCharacter: "\\ea7e"
        }), yn.organizationFilled = new yn("organization-filled", {
            fontCharacter: "\\ea7e"
        }), yn.organizationOutline = new yn("organization-outline", {
            fontCharacter: "\\ea7e"
        }), yn.newFile = new yn("new-file", {
            fontCharacter: "\\ea7f"
        }), yn.fileAdd = new yn("file-add", {
            fontCharacter: "\\ea7f"
        }), yn.newFolder = new yn("new-folder", {
            fontCharacter: "\\ea80"
        }), yn.fileDirectoryCreate = new yn("file-directory-create", {
            fontCharacter: "\\ea80"
        }), yn.trash = new yn("trash", {
            fontCharacter: "\\ea81"
        }), yn.trashcan = new yn("trashcan", {
            fontCharacter: "\\ea81"
        }), yn.history = new yn("history", {
            fontCharacter: "\\ea82"
        }), yn.clock = new yn("clock", {
            fontCharacter: "\\ea82"
        }), yn.folder = new yn("folder", {
            fontCharacter: "\\ea83"
        }), yn.fileDirectory = new yn("file-directory", {
            fontCharacter: "\\ea83"
        }), yn.symbolFolder = new yn("symbol-folder", {
            fontCharacter: "\\ea83"
        }), yn.logoGithub = new yn("logo-github", {
            fontCharacter: "\\ea84"
        }), yn.markGithub = new yn("mark-github", {
            fontCharacter: "\\ea84"
        }), yn.github = new yn("github", {
            fontCharacter: "\\ea84"
        }), yn.terminal = new yn("terminal", {
            fontCharacter: "\\ea85"
        }), yn.console = new yn("console", {
            fontCharacter: "\\ea85"
        }), yn.repl = new yn("repl", {
            fontCharacter: "\\ea85"
        }), yn.zap = new yn("zap", {
            fontCharacter: "\\ea86"
        }), yn.symbolEvent = new yn("symbol-event", {
            fontCharacter: "\\ea86"
        }), yn.error = new yn("error", {
            fontCharacter: "\\ea87"
        }), yn.stop = new yn("stop", {
            fontCharacter: "\\ea87"
        }), yn.variable = new yn("variable", {
            fontCharacter: "\\ea88"
        }), yn.symbolVariable = new yn("symbol-variable", {
            fontCharacter: "\\ea88"
        }), yn.array = new yn("array", {
            fontCharacter: "\\ea8a"
        }), yn.symbolArray = new yn("symbol-array", {
            fontCharacter: "\\ea8a"
        }), yn.symbolModule = new yn("symbol-module", {
            fontCharacter: "\\ea8b"
        }), yn.symbolPackage = new yn("symbol-package", {
            fontCharacter: "\\ea8b"
        }), yn.symbolNamespace = new yn("symbol-namespace", {
            fontCharacter: "\\ea8b"
        }), yn.symbolObject = new yn("symbol-object", {
            fontCharacter: "\\ea8b"
        }), yn.symbolMethod = new yn("symbol-method", {
            fontCharacter: "\\ea8c"
        }), yn.symbolFunction = new yn("symbol-function", {
            fontCharacter: "\\ea8c"
        }), yn.symbolConstructor = new yn("symbol-constructor", {
            fontCharacter: "\\ea8c"
        }), yn.symbolBoolean = new yn("symbol-boolean", {
            fontCharacter: "\\ea8f"
        }), yn.symbolNull = new yn("symbol-null", {
            fontCharacter: "\\ea8f"
        }), yn.symbolNumeric = new yn("symbol-numeric", {
            fontCharacter: "\\ea90"
        }), yn.symbolNumber = new yn("symbol-number", {
            fontCharacter: "\\ea90"
        }), yn.symbolStructure = new yn("symbol-structure", {
            fontCharacter: "\\ea91"
        }), yn.symbolStruct = new yn("symbol-struct", {
            fontCharacter: "\\ea91"
        }), yn.symbolParameter = new yn("symbol-parameter", {
            fontCharacter: "\\ea92"
        }), yn.symbolTypeParameter = new yn("symbol-type-parameter", {
            fontCharacter: "\\ea92"
        }), yn.symbolKey = new yn("symbol-key", {
            fontCharacter: "\\ea93"
        }), yn.symbolText = new yn("symbol-text", {
            fontCharacter: "\\ea93"
        }), yn.symbolReference = new yn("symbol-reference", {
            fontCharacter: "\\ea94"
        }), yn.goToFile = new yn("go-to-file", {
            fontCharacter: "\\ea94"
        }), yn.symbolEnum = new yn("symbol-enum", {
            fontCharacter: "\\ea95"
        }), yn.symbolValue = new yn("symbol-value", {
            fontCharacter: "\\ea95"
        }), yn.symbolRuler = new yn("symbol-ruler", {
            fontCharacter: "\\ea96"
        }), yn.symbolUnit = new yn("symbol-unit", {
            fontCharacter: "\\ea96"
        }), yn.activateBreakpoints = new yn("activate-breakpoints", {
            fontCharacter: "\\ea97"
        }), yn.archive = new yn("archive", {
            fontCharacter: "\\ea98"
        }), yn.arrowBoth = new yn("arrow-both", {
            fontCharacter: "\\ea99"
        }), yn.arrowDown = new yn("arrow-down", {
            fontCharacter: "\\ea9a"
        }), yn.arrowLeft = new yn("arrow-left", {
            fontCharacter: "\\ea9b"
        }), yn.arrowRight = new yn("arrow-right", {
            fontCharacter: "\\ea9c"
        }), yn.arrowSmallDown = new yn("arrow-small-down", {
            fontCharacter: "\\ea9d"
        }), yn.arrowSmallLeft = new yn("arrow-small-left", {
            fontCharacter: "\\ea9e"
        }), yn.arrowSmallRight = new yn("arrow-small-right", {
            fontCharacter: "\\ea9f"
        }), yn.arrowSmallUp = new yn("arrow-small-up", {
            fontCharacter: "\\eaa0"
        }), yn.arrowUp = new yn("arrow-up", {
            fontCharacter: "\\eaa1"
        }), yn.bell = new yn("bell", {
            fontCharacter: "\\eaa2"
        }), yn.bold = new yn("bold", {
            fontCharacter: "\\eaa3"
        }), yn.book = new yn("book", {
            fontCharacter: "\\eaa4"
        }), yn.bookmark = new yn("bookmark", {
            fontCharacter: "\\eaa5"
        }), yn.debugBreakpointConditionalUnverified = new yn("debug-breakpoint-conditional-unverified", {
            fontCharacter: "\\eaa6"
        }), yn.debugBreakpointConditional = new yn("debug-breakpoint-conditional", {
            fontCharacter: "\\eaa7"
        }), yn.debugBreakpointConditionalDisabled = new yn("debug-breakpoint-conditional-disabled", {
            fontCharacter: "\\eaa7"
        }), yn.debugBreakpointDataUnverified = new yn("debug-breakpoint-data-unverified", {
            fontCharacter: "\\eaa8"
        }), yn.debugBreakpointData = new yn("debug-breakpoint-data", {
            fontCharacter: "\\eaa9"
        }), yn.debugBreakpointDataDisabled = new yn("debug-breakpoint-data-disabled", {
            fontCharacter: "\\eaa9"
        }), yn.debugBreakpointLogUnverified = new yn("debug-breakpoint-log-unverified", {
            fontCharacter: "\\eaaa"
        }), yn.debugBreakpointLog = new yn("debug-breakpoint-log", {
            fontCharacter: "\\eaab"
        }), yn.debugBreakpointLogDisabled = new yn("debug-breakpoint-log-disabled", {
            fontCharacter: "\\eaab"
        }), yn.briefcase = new yn("briefcase", {
            fontCharacter: "\\eaac"
        }), yn.broadcast = new yn("broadcast", {
            fontCharacter: "\\eaad"
        }), yn.browser = new yn("browser", {
            fontCharacter: "\\eaae"
        }), yn.bug = new yn("bug", {
            fontCharacter: "\\eaaf"
        }), yn.calendar = new yn("calendar", {
            fontCharacter: "\\eab0"
        }), yn.caseSensitive = new yn("case-sensitive", {
            fontCharacter: "\\eab1"
        }), yn.check = new yn("check", {
            fontCharacter: "\\eab2"
        }), yn.checklist = new yn("checklist", {
            fontCharacter: "\\eab3"
        }), yn.chevronDown = new yn("chevron-down", {
            fontCharacter: "\\eab4"
        }), yn.dropDownButton = new yn("drop-down-button", yn.chevronDown.definition), yn.chevronLeft = new yn("chevron-left", {
            fontCharacter: "\\eab5"
        }), yn.chevronRight = new yn("chevron-right", {
            fontCharacter: "\\eab6"
        }), yn.chevronUp = new yn("chevron-up", {
            fontCharacter: "\\eab7"
        }), yn.chromeClose = new yn("chrome-close", {
            fontCharacter: "\\eab8"
        }), yn.chromeMaximize = new yn("chrome-maximize", {
            fontCharacter: "\\eab9"
        }), yn.chromeMinimize = new yn("chrome-minimize", {
            fontCharacter: "\\eaba"
        }), yn.chromeRestore = new yn("chrome-restore", {
            fontCharacter: "\\eabb"
        }), yn.circleOutline = new yn("circle-outline", {
            fontCharacter: "\\eabc"
        }), yn.debugBreakpointUnverified = new yn("debug-breakpoint-unverified", {
            fontCharacter: "\\eabc"
        }), yn.circleSlash = new yn("circle-slash", {
            fontCharacter: "\\eabd"
        }), yn.circuitBoard = new yn("circuit-board", {
            fontCharacter: "\\eabe"
        }), yn.clearAll = new yn("clear-all", {
            fontCharacter: "\\eabf"
        }), yn.clippy = new yn("clippy", {
            fontCharacter: "\\eac0"
        }), yn.closeAll = new yn("close-all", {
            fontCharacter: "\\eac1"
        }), yn.cloudDownload = new yn("cloud-download", {
            fontCharacter: "\\eac2"
        }), yn.cloudUpload = new yn("cloud-upload", {
            fontCharacter: "\\eac3"
        }), yn.code = new yn("code", {
            fontCharacter: "\\eac4"
        }), yn.collapseAll = new yn("collapse-all", {
            fontCharacter: "\\eac5"
        }), yn.colorMode = new yn("color-mode", {
            fontCharacter: "\\eac6"
        }), yn.commentDiscussion = new yn("comment-discussion", {
            fontCharacter: "\\eac7"
        }), yn.compareChanges = new yn("compare-changes", {
            fontCharacter: "\\eafd"
        }), yn.creditCard = new yn("credit-card", {
            fontCharacter: "\\eac9"
        }), yn.dash = new yn("dash", {
            fontCharacter: "\\eacc"
        }), yn.dashboard = new yn("dashboard", {
            fontCharacter: "\\eacd"
        }), yn.database = new yn("database", {
            fontCharacter: "\\eace"
        }), yn.debugContinue = new yn("debug-continue", {
            fontCharacter: "\\eacf"
        }), yn.debugDisconnect = new yn("debug-disconnect", {
            fontCharacter: "\\ead0"
        }), yn.debugPause = new yn("debug-pause", {
            fontCharacter: "\\ead1"
        }), yn.debugRestart = new yn("debug-restart", {
            fontCharacter: "\\ead2"
        }), yn.debugStart = new yn("debug-start", {
            fontCharacter: "\\ead3"
        }), yn.debugStepInto = new yn("debug-step-into", {
            fontCharacter: "\\ead4"
        }), yn.debugStepOut = new yn("debug-step-out", {
            fontCharacter: "\\ead5"
        }), yn.debugStepOver = new yn("debug-step-over", {
            fontCharacter: "\\ead6"
        }), yn.debugStop = new yn("debug-stop", {
            fontCharacter: "\\ead7"
        }), yn.debug = new yn("debug", {
            fontCharacter: "\\ead8"
        }), yn.deviceCameraVideo = new yn("device-camera-video", {
            fontCharacter: "\\ead9"
        }), yn.deviceCamera = new yn("device-camera", {
            fontCharacter: "\\eada"
        }), yn.deviceMobile = new yn("device-mobile", {
            fontCharacter: "\\eadb"
        }), yn.diffAdded = new yn("diff-added", {
            fontCharacter: "\\eadc"
        }), yn.diffIgnored = new yn("diff-ignored", {
            fontCharacter: "\\eadd"
        }), yn.diffModified = new yn("diff-modified", {
            fontCharacter: "\\eade"
        }), yn.diffRemoved = new yn("diff-removed", {
            fontCharacter: "\\eadf"
        }), yn.diffRenamed = new yn("diff-renamed", {
            fontCharacter: "\\eae0"
        }), yn.diff = new yn("diff", {
            fontCharacter: "\\eae1"
        }), yn.discard = new yn("discard", {
            fontCharacter: "\\eae2"
        }), yn.editorLayout = new yn("editor-layout", {
            fontCharacter: "\\eae3"
        }), yn.emptyWindow = new yn("empty-window", {
            fontCharacter: "\\eae4"
        }), yn.exclude = new yn("exclude", {
            fontCharacter: "\\eae5"
        }), yn.extensions = new yn("extensions", {
            fontCharacter: "\\eae6"
        }), yn.eyeClosed = new yn("eye-closed", {
            fontCharacter: "\\eae7"
        }), yn.fileBinary = new yn("file-binary", {
            fontCharacter: "\\eae8"
        }), yn.fileCode = new yn("file-code", {
            fontCharacter: "\\eae9"
        }), yn.fileMedia = new yn("file-media", {
            fontCharacter: "\\eaea"
        }), yn.filePdf = new yn("file-pdf", {
            fontCharacter: "\\eaeb"
        }), yn.fileSubmodule = new yn("file-submodule", {
            fontCharacter: "\\eaec"
        }), yn.fileSymlinkDirectory = new yn("file-symlink-directory", {
            fontCharacter: "\\eaed"
        }), yn.fileSymlinkFile = new yn("file-symlink-file", {
            fontCharacter: "\\eaee"
        }), yn.fileZip = new yn("file-zip", {
            fontCharacter: "\\eaef"
        }), yn.files = new yn("files", {
            fontCharacter: "\\eaf0"
        }), yn.filter = new yn("filter", {
            fontCharacter: "\\eaf1"
        }), yn.flame = new yn("flame", {
            fontCharacter: "\\eaf2"
        }), yn.foldDown = new yn("fold-down", {
            fontCharacter: "\\eaf3"
        }), yn.foldUp = new yn("fold-up", {
            fontCharacter: "\\eaf4"
        }), yn.fold = new yn("fold", {
            fontCharacter: "\\eaf5"
        }), yn.folderActive = new yn("folder-active", {
            fontCharacter: "\\eaf6"
        }), yn.folderOpened = new yn("folder-opened", {
            fontCharacter: "\\eaf7"
        }), yn.gear = new yn("gear", {
            fontCharacter: "\\eaf8"
        }), yn.gift = new yn("gift", {
            fontCharacter: "\\eaf9"
        }), yn.gistSecret = new yn("gist-secret", {
            fontCharacter: "\\eafa"
        }), yn.gist = new yn("gist", {
            fontCharacter: "\\eafb"
        }), yn.gitCommit = new yn("git-commit", {
            fontCharacter: "\\eafc"
        }), yn.gitCompare = new yn("git-compare", {
            fontCharacter: "\\eafd"
        }), yn.gitMerge = new yn("git-merge", {
            fontCharacter: "\\eafe"
        }), yn.githubAction = new yn("github-action", {
            fontCharacter: "\\eaff"
        }), yn.githubAlt = new yn("github-alt", {
            fontCharacter: "\\eb00"
        }), yn.globe = new yn("globe", {
            fontCharacter: "\\eb01"
        }), yn.grabber = new yn("grabber", {
            fontCharacter: "\\eb02"
        }), yn.graph = new yn("graph", {
            fontCharacter: "\\eb03"
        }), yn.gripper = new yn("gripper", {
            fontCharacter: "\\eb04"
        }), yn.heart = new yn("heart", {
            fontCharacter: "\\eb05"
        }), yn.home = new yn("home", {
            fontCharacter: "\\eb06"
        }), yn.horizontalRule = new yn("horizontal-rule", {
            fontCharacter: "\\eb07"
        }), yn.hubot = new yn("hubot", {
            fontCharacter: "\\eb08"
        }), yn.inbox = new yn("inbox", {
            fontCharacter: "\\eb09"
        }), yn.issueClosed = new yn("issue-closed", {
            fontCharacter: "\\eba4"
        }), yn.issueReopened = new yn("issue-reopened", {
            fontCharacter: "\\eb0b"
        }), yn.issues = new yn("issues", {
            fontCharacter: "\\eb0c"
        }), yn.italic = new yn("italic", {
            fontCharacter: "\\eb0d"
        }), yn.jersey = new yn("jersey", {
            fontCharacter: "\\eb0e"
        }), yn.json = new yn("json", {
            fontCharacter: "\\eb0f"
        }), yn.kebabVertical = new yn("kebab-vertical", {
            fontCharacter: "\\eb10"
        }), yn.key = new yn("key", {
            fontCharacter: "\\eb11"
        }), yn.law = new yn("law", {
            fontCharacter: "\\eb12"
        }), yn.lightbulbAutofix = new yn("lightbulb-autofix", {
            fontCharacter: "\\eb13"
        }), yn.linkExternal = new yn("link-external", {
            fontCharacter: "\\eb14"
        }), yn.link = new yn("link", {
            fontCharacter: "\\eb15"
        }), yn.listOrdered = new yn("list-ordered", {
            fontCharacter: "\\eb16"
        }), yn.listUnordered = new yn("list-unordered", {
            fontCharacter: "\\eb17"
        }), yn.liveShare = new yn("live-share", {
            fontCharacter: "\\eb18"
        }), yn.loading = new yn("loading", {
            fontCharacter: "\\eb19"
        }), yn.location = new yn("location", {
            fontCharacter: "\\eb1a"
        }), yn.mailRead = new yn("mail-read", {
            fontCharacter: "\\eb1b"
        }), yn.mail = new yn("mail", {
            fontCharacter: "\\eb1c"
        }), yn.markdown = new yn("markdown", {
            fontCharacter: "\\eb1d"
        }), yn.megaphone = new yn("megaphone", {
            fontCharacter: "\\eb1e"
        }), yn.mention = new yn("mention", {
            fontCharacter: "\\eb1f"
        }), yn.milestone = new yn("milestone", {
            fontCharacter: "\\eb20"
        }), yn.mortarBoard = new yn("mortar-board", {
            fontCharacter: "\\eb21"
        }), yn.move = new yn("move", {
            fontCharacter: "\\eb22"
        }), yn.multipleWindows = new yn("multiple-windows", {
            fontCharacter: "\\eb23"
        }), yn.mute = new yn("mute", {
            fontCharacter: "\\eb24"
        }), yn.noNewline = new yn("no-newline", {
            fontCharacter: "\\eb25"
        }), yn.note = new yn("note", {
            fontCharacter: "\\eb26"
        }), yn.octoface = new yn("octoface", {
            fontCharacter: "\\eb27"
        }), yn.openPreview = new yn("open-preview", {
            fontCharacter: "\\eb28"
        }), yn.package_ = new yn("package", {
            fontCharacter: "\\eb29"
        }), yn.paintcan = new yn("paintcan", {
            fontCharacter: "\\eb2a"
        }), yn.pin = new yn("pin", {
            fontCharacter: "\\eb2b"
        }), yn.play = new yn("play", {
            fontCharacter: "\\eb2c"
        }), yn.run = new yn("run", {
            fontCharacter: "\\eb2c"
        }), yn.plug = new yn("plug", {
            fontCharacter: "\\eb2d"
        }), yn.preserveCase = new yn("preserve-case", {
            fontCharacter: "\\eb2e"
        }), yn.preview = new yn("preview", {
            fontCharacter: "\\eb2f"
        }), yn.project = new yn("project", {
            fontCharacter: "\\eb30"
        }), yn.pulse = new yn("pulse", {
            fontCharacter: "\\eb31"
        }), yn.question = new yn("question", {
            fontCharacter: "\\eb32"
        }), yn.quote = new yn("quote", {
            fontCharacter: "\\eb33"
        }), yn.radioTower = new yn("radio-tower", {
            fontCharacter: "\\eb34"
        }), yn.reactions = new yn("reactions", {
            fontCharacter: "\\eb35"
        }), yn.references = new yn("references", {
            fontCharacter: "\\eb36"
        }), yn.refresh = new yn("refresh", {
            fontCharacter: "\\eb37"
        }), yn.regex = new yn("regex", {
            fontCharacter: "\\eb38"
        }), yn.remoteExplorer = new yn("remote-explorer", {
            fontCharacter: "\\eb39"
        }), yn.remote = new yn("remote", {
            fontCharacter: "\\eb3a"
        }), yn.remove = new yn("remove", {
            fontCharacter: "\\eb3b"
        }), yn.replaceAll = new yn("replace-all", {
            fontCharacter: "\\eb3c"
        }), yn.replace = new yn("replace", {
            fontCharacter: "\\eb3d"
        }), yn.repoClone = new yn("repo-clone", {
            fontCharacter: "\\eb3e"
        }), yn.repoForcePush = new yn("repo-force-push", {
            fontCharacter: "\\eb3f"
        }), yn.repoPull = new yn("repo-pull", {
            fontCharacter: "\\eb40"
        }), yn.repoPush = new yn("repo-push", {
            fontCharacter: "\\eb41"
        }), yn.report = new yn("report", {
            fontCharacter: "\\eb42"
        }), yn.requestChanges = new yn("request-changes", {
            fontCharacter: "\\eb43"
        }), yn.rocket = new yn("rocket", {
            fontCharacter: "\\eb44"
        }), yn.rootFolderOpened = new yn("root-folder-opened", {
            fontCharacter: "\\eb45"
        }), yn.rootFolder = new yn("root-folder", {
            fontCharacter: "\\eb46"
        }), yn.rss = new yn("rss", {
            fontCharacter: "\\eb47"
        }), yn.ruby = new yn("ruby", {
            fontCharacter: "\\eb48"
        }), yn.saveAll = new yn("save-all", {
            fontCharacter: "\\eb49"
        }), yn.saveAs = new yn("save-as", {
            fontCharacter: "\\eb4a"
        }), yn.save = new yn("save", {
            fontCharacter: "\\eb4b"
        }), yn.screenFull = new yn("screen-full", {
            fontCharacter: "\\eb4c"
        }), yn.screenNormal = new yn("screen-normal", {
            fontCharacter: "\\eb4d"
        }), yn.searchStop = new yn("search-stop", {
            fontCharacter: "\\eb4e"
        }), yn.server = new yn("server", {
            fontCharacter: "\\eb50"
        }), yn.settingsGear = new yn("settings-gear", {
            fontCharacter: "\\eb51"
        }), yn.settings = new yn("settings", {
            fontCharacter: "\\eb52"
        }), yn.shield = new yn("shield", {
            fontCharacter: "\\eb53"
        }), yn.smiley = new yn("smiley", {
            fontCharacter: "\\eb54"
        }), yn.sortPrecedence = new yn("sort-precedence", {
            fontCharacter: "\\eb55"
        }), yn.splitHorizontal = new yn("split-horizontal", {
            fontCharacter: "\\eb56"
        }), yn.splitVertical = new yn("split-vertical", {
            fontCharacter: "\\eb57"
        }), yn.squirrel = new yn("squirrel", {
            fontCharacter: "\\eb58"
        }), yn.starFull = new yn("star-full", {
            fontCharacter: "\\eb59"
        }), yn.starHalf = new yn("star-half", {
            fontCharacter: "\\eb5a"
        }), yn.symbolClass = new yn("symbol-class", {
            fontCharacter: "\\eb5b"
        }), yn.symbolColor = new yn("symbol-color", {
            fontCharacter: "\\eb5c"
        }), yn.symbolCustomColor = new yn("symbol-customcolor", {
            fontCharacter: "\\eb5c"
        }), yn.symbolConstant = new yn("symbol-constant", {
            fontCharacter: "\\eb5d"
        }), yn.symbolEnumMember = new yn("symbol-enum-member", {
            fontCharacter: "\\eb5e"
        }), yn.symbolField = new yn("symbol-field", {
            fontCharacter: "\\eb5f"
        }), yn.symbolFile = new yn("symbol-file", {
            fontCharacter: "\\eb60"
        }), yn.symbolInterface = new yn("symbol-interface", {
            fontCharacter: "\\eb61"
        }), yn.symbolKeyword = new yn("symbol-keyword", {
            fontCharacter: "\\eb62"
        }), yn.symbolMisc = new yn("symbol-misc", {
            fontCharacter: "\\eb63"
        }), yn.symbolOperator = new yn("symbol-operator", {
            fontCharacter: "\\eb64"
        }), yn.symbolProperty = new yn("symbol-property", {
            fontCharacter: "\\eb65"
        }), yn.wrench = new yn("wrench", {
            fontCharacter: "\\eb65"
        }), yn.wrenchSubaction = new yn("wrench-subaction", {
            fontCharacter: "\\eb65"
        }), yn.symbolSnippet = new yn("symbol-snippet", {
            fontCharacter: "\\eb66"
        }), yn.tasklist = new yn("tasklist", {
            fontCharacter: "\\eb67"
        }), yn.telescope = new yn("telescope", {
            fontCharacter: "\\eb68"
        }), yn.textSize = new yn("text-size", {
            fontCharacter: "\\eb69"
        }), yn.threeBars = new yn("three-bars", {
            fontCharacter: "\\eb6a"
        }), yn.thumbsdown = new yn("thumbsdown", {
            fontCharacter: "\\eb6b"
        }), yn.thumbsup = new yn("thumbsup", {
            fontCharacter: "\\eb6c"
        }), yn.tools = new yn("tools", {
            fontCharacter: "\\eb6d"
        }), yn.triangleDown = new yn("triangle-down", {
            fontCharacter: "\\eb6e"
        }), yn.triangleLeft = new yn("triangle-left", {
            fontCharacter: "\\eb6f"
        }), yn.triangleRight = new yn("triangle-right", {
            fontCharacter: "\\eb70"
        }), yn.triangleUp = new yn("triangle-up", {
            fontCharacter: "\\eb71"
        }), yn.twitter = new yn("twitter", {
            fontCharacter: "\\eb72"
        }), yn.unfold = new yn("unfold", {
            fontCharacter: "\\eb73"
        }), yn.unlock = new yn("unlock", {
            fontCharacter: "\\eb74"
        }), yn.unmute = new yn("unmute", {
            fontCharacter: "\\eb75"
        }), yn.unverified = new yn("unverified", {
            fontCharacter: "\\eb76"
        }), yn.verified = new yn("verified", {
            fontCharacter: "\\eb77"
        }), yn.versions = new yn("versions", {
            fontCharacter: "\\eb78"
        }), yn.vmActive = new yn("vm-active", {
            fontCharacter: "\\eb79"
        }), yn.vmOutline = new yn("vm-outline", {
            fontCharacter: "\\eb7a"
        }), yn.vmRunning = new yn("vm-running", {
            fontCharacter: "\\eb7b"
        }), yn.watch = new yn("watch", {
            fontCharacter: "\\eb7c"
        }), yn.whitespace = new yn("whitespace", {
            fontCharacter: "\\eb7d"
        }), yn.wholeWord = new yn("whole-word", {
            fontCharacter: "\\eb7e"
        }), yn.window = new yn("window", {
            fontCharacter: "\\eb7f"
        }), yn.wordWrap = new yn("word-wrap", {
            fontCharacter: "\\eb80"
        }), yn.zoomIn = new yn("zoom-in", {
            fontCharacter: "\\eb81"
        }), yn.zoomOut = new yn("zoom-out", {
            fontCharacter: "\\eb82"
        }), yn.listFilter = new yn("list-filter", {
            fontCharacter: "\\eb83"
        }), yn.listFlat = new yn("list-flat", {
            fontCharacter: "\\eb84"
        }), yn.listSelection = new yn("list-selection", {
            fontCharacter: "\\eb85"
        }), yn.selection = new yn("selection", {
            fontCharacter: "\\eb85"
        }), yn.listTree = new yn("list-tree", {
            fontCharacter: "\\eb86"
        }), yn.debugBreakpointFunctionUnverified = new yn("debug-breakpoint-function-unverified", {
            fontCharacter: "\\eb87"
        }), yn.debugBreakpointFunction = new yn("debug-breakpoint-function", {
            fontCharacter: "\\eb88"
        }), yn.debugBreakpointFunctionDisabled = new yn("debug-breakpoint-function-disabled", {
            fontCharacter: "\\eb88"
        }), yn.debugStackframeActive = new yn("debug-stackframe-active", {
            fontCharacter: "\\eb89"
        }), yn.debugStackframeDot = new yn("debug-stackframe-dot", {
            fontCharacter: "\\eb8a"
        }), yn.debugStackframe = new yn("debug-stackframe", {
            fontCharacter: "\\eb8b"
        }), yn.debugStackframeFocused = new yn("debug-stackframe-focused", {
            fontCharacter: "\\eb8b"
        }), yn.debugBreakpointUnsupported = new yn("debug-breakpoint-unsupported", {
            fontCharacter: "\\eb8c"
        }), yn.symbolString = new yn("symbol-string", {
            fontCharacter: "\\eb8d"
        }), yn.debugReverseContinue = new yn("debug-reverse-continue", {
            fontCharacter: "\\eb8e"
        }), yn.debugStepBack = new yn("debug-step-back", {
            fontCharacter: "\\eb8f"
        }), yn.debugRestartFrame = new yn("debug-restart-frame", {
            fontCharacter: "\\eb90"
        }), yn.callIncoming = new yn("call-incoming", {
            fontCharacter: "\\eb92"
        }), yn.callOutgoing = new yn("call-outgoing", {
            fontCharacter: "\\eb93"
        }), yn.menu = new yn("menu", {
            fontCharacter: "\\eb94"
        }), yn.expandAll = new yn("expand-all", {
            fontCharacter: "\\eb95"
        }), yn.feedback = new yn("feedback", {
            fontCharacter: "\\eb96"
        }), yn.groupByRefType = new yn("group-by-ref-type", {
            fontCharacter: "\\eb97"
        }), yn.ungroupByRefType = new yn("ungroup-by-ref-type", {
            fontCharacter: "\\eb98"
        }), yn.account = new yn("account", {
            fontCharacter: "\\eb99"
        }), yn.bellDot = new yn("bell-dot", {
            fontCharacter: "\\eb9a"
        }), yn.debugConsole = new yn("debug-console", {
            fontCharacter: "\\eb9b"
        }), yn.library = new yn("library", {
            fontCharacter: "\\eb9c"
        }), yn.output = new yn("output", {
            fontCharacter: "\\eb9d"
        }), yn.runAll = new yn("run-all", {
            fontCharacter: "\\eb9e"
        }), yn.syncIgnored = new yn("sync-ignored", {
            fontCharacter: "\\eb9f"
        }), yn.pinned = new yn("pinned", {
            fontCharacter: "\\eba0"
        }), yn.githubInverted = new yn("github-inverted", {
            fontCharacter: "\\eba1"
        }), yn.debugAlt = new yn("debug-alt", {
            fontCharacter: "\\eb91"
        }), yn.serverProcess = new yn("server-process", {
            fontCharacter: "\\eba2"
        }), yn.serverEnvironment = new yn("server-environment", {
            fontCharacter: "\\eba3"
        }), yn.pass = new yn("pass", {
            fontCharacter: "\\eba4"
        }), yn.stopCircle = new yn("stop-circle", {
            fontCharacter: "\\eba5"
        }), yn.playCircle = new yn("play-circle", {
            fontCharacter: "\\eba6"
        }), yn.record = new yn("record", {
            fontCharacter: "\\eba7"
        }), yn.debugAltSmall = new yn("debug-alt-small", {
            fontCharacter: "\\eba8"
        }), yn.vmConnect = new yn("vm-connect", {
            fontCharacter: "\\eba9"
        }), yn.cloud = new yn("cloud", {
            fontCharacter: "\\ebaa"
        }), yn.merge = new yn("merge", {
            fontCharacter: "\\ebab"
        }), yn.exportIcon = new yn("export", {
            fontCharacter: "\\ebac"
        }), yn.graphLeft = new yn("graph-left", {
            fontCharacter: "\\ebad"
        }), yn.magnet = new yn("magnet", {
            fontCharacter: "\\ebae"
        }), yn.notebook = new yn("notebook", {
            fontCharacter: "\\ebaf"
        }), yn.redo = new yn("redo", {
            fontCharacter: "\\ebb0"
        }), yn.checkAll = new yn("check-all", {
            fontCharacter: "\\ebb1"
        }), yn.pinnedDirty = new yn("pinned-dirty", {
            fontCharacter: "\\ebb2"
        }), yn.passFilled = new yn("pass-filled", {
            fontCharacter: "\\ebb3"
        }), yn.circleLargeFilled = new yn("circle-large-filled", {
            fontCharacter: "\\ebb4"
        }), yn.circleLargeOutline = new yn("circle-large-outline", {
            fontCharacter: "\\ebb5"
        }), yn.combine = new yn("combine", {
            fontCharacter: "\\ebb6"
        }), yn.gather = new yn("gather", {
            fontCharacter: "\\ebb6"
        }), yn.table = new yn("table", {
            fontCharacter: "\\ebb7"
        }), yn.variableGroup = new yn("variable-group", {
            fontCharacter: "\\ebb8"
        }), yn.typeHierarchy = new yn("type-hierarchy", {
            fontCharacter: "\\ebb9"
        }), yn.typeHierarchySub = new yn("type-hierarchy-sub", {
            fontCharacter: "\\ebba"
        }), yn.typeHierarchySuper = new yn("type-hierarchy-super", {
            fontCharacter: "\\ebbb"
        }), yn.gitPullRequestCreate = new yn("git-pull-request-create", {
            fontCharacter: "\\ebbc"
        }), yn.runAbove = new yn("run-above", {
            fontCharacter: "\\ebbd"
        }), yn.runBelow = new yn("run-below", {
            fontCharacter: "\\ebbe"
        }), yn.notebookTemplate = new yn("notebook-template", {
            fontCharacter: "\\ebbf"
        }), yn.debugRerun = new yn("debug-rerun", {
            fontCharacter: "\\ebc0"
        }), yn.workspaceTrusted = new yn("workspace-trusted", {
            fontCharacter: "\\ebc1"
        }), yn.workspaceUntrusted = new yn("workspace-untrusted", {
            fontCharacter: "\\ebc2"
        }), yn.workspaceUnspecified = new yn("workspace-unspecified", {
            fontCharacter: "\\ebc3"
        }), yn.terminalCmd = new yn("terminal-cmd", {
            fontCharacter: "\\ebc4"
        }), yn.terminalDebian = new yn("terminal-debian", {
            fontCharacter: "\\ebc5"
        }), yn.terminalLinux = new yn("terminal-linux", {
            fontCharacter: "\\ebc6"
        }), yn.terminalPowershell = new yn("terminal-powershell", {
            fontCharacter: "\\ebc7"
        }), yn.terminalTmux = new yn("terminal-tmux", {
            fontCharacter: "\\ebc8"
        }), yn.terminalUbuntu = new yn("terminal-ubuntu", {
            fontCharacter: "\\ebc9"
        }), yn.terminalBash = new yn("terminal-bash", {
            fontCharacter: "\\ebca"
        }), yn.arrowSwap = new yn("arrow-swap", {
            fontCharacter: "\\ebcb"
        }), yn.copy = new yn("copy", {
            fontCharacter: "\\ebcc"
        }), yn.personAdd = new yn("person-add", {
            fontCharacter: "\\ebcd"
        }), yn.filterFilled = new yn("filter-filled", {
            fontCharacter: "\\ebce"
        }), yn.wand = new yn("wand", {
            fontCharacter: "\\ebcf"
        }), yn.debugLineByLine = new yn("debug-line-by-line", {
            fontCharacter: "\\ebd0"
        }), yn.inspect = new yn("inspect", {
            fontCharacter: "\\ebd1"
        }), yn.layers = new yn("layers", {
            fontCharacter: "\\ebd2"
        }), yn.layersDot = new yn("layers-dot", {
            fontCharacter: "\\ebd3"
        }), yn.layersActive = new yn("layers-active", {
            fontCharacter: "\\ebd4"
        }), yn.compass = new yn("compass", {
            fontCharacter: "\\ebd5"
        }), yn.compassDot = new yn("compass-dot", {
            fontCharacter: "\\ebd6"
        }), yn.compassActive = new yn("compass-active", {
            fontCharacter: "\\ebd7"
        }), yn.azure = new yn("azure", {
            fontCharacter: "\\ebd8"
        }), yn.issueDraft = new yn("issue-draft", {
            fontCharacter: "\\ebd9"
        }), yn.gitPullRequestClosed = new yn("git-pull-request-closed", {
            fontCharacter: "\\ebda"
        }), yn.gitPullRequestDraft = new yn("git-pull-request-draft", {
            fontCharacter: "\\ebdb"
        }), yn.debugAll = new yn("debug-all", {
            fontCharacter: "\\ebdc"
        }), yn.debugCoverage = new yn("debug-coverage", {
            fontCharacter: "\\ebdd"
        }), yn.runErrors = new yn("run-errors", {
            fontCharacter: "\\ebde"
        }), yn.folderLibrary = new yn("folder-library", {
            fontCharacter: "\\ebdf"
        }), yn.debugContinueSmall = new yn("debug-continue-small", {
            fontCharacter: "\\ebe0"
        }), yn.beakerStop = new yn("beaker-stop", {
            fontCharacter: "\\ebe1"
        }), yn.graphLine = new yn("graph-line", {
            fontCharacter: "\\ebe2"
        }), yn.graphScatter = new yn("graph-scatter", {
            fontCharacter: "\\ebe3"
        }), yn.pieChart = new yn("pie-chart", {
            fontCharacter: "\\ebe4"
        }), yn.bracket = new yn("bracket", yn.json.definition), yn.bracketDot = new yn("bracket-dot", {
            fontCharacter: "\\ebe5"
        }), yn.bracketError = new yn("bracket-error", {
            fontCharacter: "\\ebe6"
        }), yn.lockSmall = new yn("lock-small", {
            fontCharacter: "\\ebe7"
        }), yn.azureDevops = new yn("azure-devops", {
            fontCharacter: "\\ebe8"
        }), yn.verifiedFilled = new yn("verified-filled", {
            fontCharacter: "\\ebe9"
        }), yn.newLine = new yn("newline", {
            fontCharacter: "\\ebea"
        }), yn.layout = new yn("layout", {
            fontCharacter: "\\ebeb"
        }), yn.layoutActivitybarLeft = new yn("layout-activitybar-left", {
            fontCharacter: "\\ebec"
        }), yn.layoutActivitybarRight = new yn("layout-activitybar-right", {
            fontCharacter: "\\ebed"
        }), yn.layoutPanelLeft = new yn("layout-panel-left", {
            fontCharacter: "\\ebee"
        }), yn.layoutPanelCenter = new yn("layout-panel-center", {
            fontCharacter: "\\ebef"
        }), yn.layoutPanelJustify = new yn("layout-panel-justify", {
            fontCharacter: "\\ebf0"
        }), yn.layoutPanelRight = new yn("layout-panel-right", {
            fontCharacter: "\\ebf1"
        }), yn.layoutPanel = new yn("layout-panel", {
            fontCharacter: "\\ebf2"
        }), yn.layoutSidebarLeft = new yn("layout-sidebar-left", {
            fontCharacter: "\\ebf3"
        }), yn.layoutSidebarRight = new yn("layout-sidebar-right", {
            fontCharacter: "\\ebf4"
        }), yn.layoutStatusbar = new yn("layout-statusbar", {
            fontCharacter: "\\ebf5"
        }), yn.layoutMenubar = new yn("layout-menubar", {
            fontCharacter: "\\ebf6"
        }), yn.layoutCentered = new yn("layout-centered", {
            fontCharacter: "\\ebf7"
        }), yn.target = new yn("target", {
            fontCharacter: "\\ebf8"
        }), yn.indent = new yn("indent", {
            fontCharacter: "\\ebf9"
        }), yn.recordSmall = new yn("record-small", {
            fontCharacter: "\\ebfa"
        }), yn.errorSmall = new yn("error-small", {
            fontCharacter: "\\ebfb"
        }), yn.arrowCircleDown = new yn("arrow-circle-down", {
            fontCharacter: "\\ebfc"
        }), yn.arrowCircleLeft = new yn("arrow-circle-left", {
            fontCharacter: "\\ebfd"
        }), yn.arrowCircleRight = new yn("arrow-circle-right", {
            fontCharacter: "\\ebfe"
        }), yn.arrowCircleUp = new yn("arrow-circle-up", {
            fontCharacter: "\\ebff"
        }), yn.dialogError = new yn("dialog-error", yn.error.definition), yn.dialogWarning = new yn("dialog-warning", yn.warning.definition), yn.dialogInfo = new yn("dialog-info", yn.info.definition), yn.dialogClose = new yn("dialog-close", yn.close.definition), yn.treeItemExpanded = new yn("tree-item-expanded", yn.chevronDown.definition), yn.treeFilterOnTypeOn = new yn("tree-filter-on-type-on", yn.listFilter.definition), yn.treeFilterOnTypeOff = new yn("tree-filter-on-type-off", yn.listSelection.definition), yn.treeFilterClear = new yn("tree-filter-clear", yn.close.definition), yn.treeItemLoading = new yn("tree-item-loading", yn.loading.definition), yn.menuSelection = new yn("menu-selection", yn.check.definition), yn.menuSubmenu = new yn("menu-submenu", yn.chevronRight.definition), yn.menuBarMore = new yn("menubar-more", yn.more.definition), yn.scrollbarButtonLeft = new yn("scrollbar-button-left", yn.triangleLeft.definition), yn.scrollbarButtonRight = new yn("scrollbar-button-right", yn.triangleRight.definition), yn.scrollbarButtonUp = new yn("scrollbar-button-up", yn.triangleUp.definition), yn.scrollbarButtonDown = new yn("scrollbar-button-down", yn.triangleDown.definition), yn.toolBarMore = new yn("toolbar-more", yn.more.definition), yn.quickInputBack = new yn("quick-input-back", yn.arrowLeft.definition),
        function(e) {
            e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
            const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);

            function n(e) {
                if (e instanceof yn) return ["codicon", "codicon-" + e.id];
                const r = t.exec(e.id);
                if (!r) return n(yn.error);
                let [, i, o] = r;
                const a = ["codicon", "codicon-" + i];
                return o && a.push("codicon-modifier-" + o.substr(1)), a
            }
            e.asClassNameArray = n, e.asClassName = function(e) {
                return n(e).join(" ")
            }, e.asCSSSelector = function(e) {
                return "." + n(e).join(".")
            }
        }(un || (un = {}));
    class Sn {
        constructor(e, t, n) {
            this._tokenBrand = void 0, this.offset = e, this.type = t, this.language = n
        }
        toString() {
            return "(" + this.offset + ", " + this.type + ")"
        }
    }! function(e) {
        const t = new Map;
        t.set(0, yn.symbolMethod), t.set(1, yn.symbolFunction), t.set(2, yn.symbolConstructor), t.set(3, yn.symbolField), t.set(4, yn.symbolVariable), t.set(5, yn.symbolClass), t.set(6, yn.symbolStruct), t.set(7, yn.symbolInterface), t.set(8, yn.symbolModule), t.set(9, yn.symbolProperty), t.set(10, yn.symbolEvent), t.set(11, yn.symbolOperator), t.set(12, yn.symbolUnit), t.set(13, yn.symbolValue), t.set(15, yn.symbolEnum), t.set(14, yn.symbolConstant), t.set(15, yn.symbolEnum), t.set(16, yn.symbolEnumMember), t.set(17, yn.symbolKeyword), t.set(27, yn.symbolSnippet), t.set(18, yn.symbolText), t.set(19, yn.symbolColor), t.set(20, yn.symbolFile), t.set(21, yn.symbolReference), t.set(22, yn.symbolCustomColor), t.set(23, yn.symbolFolder), t.set(24, yn.symbolTypeParameter), t.set(25, yn.account), t.set(26, yn.issues), e.toIcon = function(e) {
            let n = t.get(e);
            return n || (console.info("No codicon found for CompletionItemKind " + e), n = yn.symbolProperty), n
        };
        const n = new Map;
        n.set("method", 0), n.set("function", 1), n.set("constructor", 2), n.set("field", 3), n.set("variable", 4), n.set("class", 5), n.set("struct", 6), n.set("interface", 7), n.set("module", 8), n.set("property", 9), n.set("event", 10), n.set("operator", 11), n.set("unit", 12), n.set("value", 13), n.set("constant", 14), n.set("enum", 15), n.set("enum-member", 16), n.set("enumMember", 16), n.set("keyword", 17), n.set("snippet", 27), n.set("text", 18), n.set("color", 19), n.set("file", 20), n.set("reference", 21), n.set("customcolor", 22), n.set("folder", 23), n.set("type-parameter", 24), n.set("typeParameter", 24), n.set("account", 25), n.set("issue", 26), e.fromString = function(e, t) {
            let r = n.get(e);
            return void 0 !== r || t || (r = 9), r
        }
    }(dn || (dn = {})),
    function(e) {
        e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit"
    }(fn || (fn = {})),
    function(e) {
        e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange"
    }(mn || (mn = {})),
    function(e) {
        e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write"
    }(gn || (gn = {})),
    function(e) {
        const t = new Map;
        t.set(0, yn.symbolFile), t.set(1, yn.symbolModule), t.set(2, yn.symbolNamespace), t.set(3, yn.symbolPackage), t.set(4, yn.symbolClass), t.set(5, yn.symbolMethod), t.set(6, yn.symbolProperty), t.set(7, yn.symbolField), t.set(8, yn.symbolConstructor), t.set(9, yn.symbolEnum), t.set(10, yn.symbolInterface), t.set(11, yn.symbolFunction), t.set(12, yn.symbolVariable), t.set(13, yn.symbolConstant), t.set(14, yn.symbolString), t.set(15, yn.symbolNumber), t.set(16, yn.symbolBoolean), t.set(17, yn.symbolArray), t.set(18, yn.symbolObject), t.set(19, yn.symbolKey), t.set(20, yn.symbolNull), t.set(21, yn.symbolEnumMember), t.set(22, yn.symbolStruct), t.set(23, yn.symbolEvent), t.set(24, yn.symbolOperator), t.set(25, yn.symbolTypeParameter), e.toIcon = function(e) {
            let n = t.get(e);
            return n || (console.info("No codicon found for SymbolKind " + e), n = yn.symbolProperty), n
        }
    }(bn || (bn = {}));
    class vn {
        constructor(e) {
            this.value = e
        }
    }
    vn.Comment = new vn("comment"), vn.Imports = new vn("imports"), vn.Region = new vn("region"),
        function(e) {
            e.is = function(e) {
                return !(!e || "object" != typeof e) && ("string" == typeof e.id && "string" == typeof e.title)
            }
        }(Cn || (Cn = {})),
        function(e) {
            e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter"
        }(pn || (pn = {}));
    new class {
        constructor() {
            this._map = new Map, this._factories = new Map, this._onDidChange = new X, this.onDidChange = this._onDidChange.event, this._colorMap = null
        }
        fire(e) {
            this._onDidChange.fire({
                changedLanguages: e,
                changedColorMap: !1
            })
        }
        register(e, t) {
            return this._map.set(e, t), this.fire([e]), p((() => {
                this._map.get(e) === t && (this._map.delete(e), this.fire([e]))
            }))
        }
        registerFactory(e, t) {
            var n;
            null === (n = this._factories.get(e)) || void 0 === n || n.dispose();
            const r = new _n(this, e, t);
            return this._factories.set(e, r), p((() => {
                const t = this._factories.get(e);
                t && t === r && (this._factories.delete(e), t.dispose())
            }))
        }
        getOrCreate(e) {
            return wn(this, void 0, void 0, (function*() {
                const t = this.get(e);
                if (t) return t;
                const n = this._factories.get(e);
                return !n || n.isResolved ? null : (yield n.resolve(), this.get(e))
            }))
        }
        get(e) {
            return this._map.get(e) || null
        }
        isResolved(e) {
            if (this.get(e)) return !0;
            const t = this._factories.get(e);
            return !(t && !t.isResolved)
        }
        setColorMap(e) {
            this._colorMap = e, this._onDidChange.fire({
                changedLanguages: Array.from(this._map.keys()),
                changedColorMap: !0
            })
        }
        getColorMap() {
            return this._colorMap
        }
        getDefaultBackground() {
            return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null
        }
    };
    var Ln, Nn, En, An, kn, Mn, Rn, On, xn, Pn, Tn, In, Kn, Dn, Vn, Fn, Bn, Un, qn, Hn, Wn, $n, zn, jn, Gn, Yn, Zn, Jn, Qn, Xn, er, tr, nr, rr, ir, or, ar;
    ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
    }(Ln || (Ln = {})),
    function(e) {
        e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet"
    }(Nn || (Nn = {})),
    function(e) {
        e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet"
    }(En || (En = {})),
    function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }(An || (An = {})),
    function(e) {
        e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions"
    }(kn || (kn = {})),
    function(e) {
        e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW"
    }(Mn || (Mn = {})),
    function(e) {
        e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo"
    }(Rn || (Rn = {})),
    function(e) {
        e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"
    }(On || (On = {})),
    function(e) {
        e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write"
    }(xn || (xn = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full"
    }(Pn || (Pn = {})),
    function(e) {
        e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.ariaLabel = 4] = "ariaLabel", e[e.autoClosingBrackets = 5] = "autoClosingBrackets", e[e.autoClosingDelete = 6] = "autoClosingDelete", e[e.autoClosingOvertype = 7] = "autoClosingOvertype", e[e.autoClosingQuotes = 8] = "autoClosingQuotes", e[e.autoIndent = 9] = "autoIndent", e[e.automaticLayout = 10] = "automaticLayout", e[e.autoSurround = 11] = "autoSurround", e[e.bracketPairColorization = 12] = "bracketPairColorization", e[e.guides = 13] = "guides", e[e.codeLens = 14] = "codeLens", e[e.codeLensFontFamily = 15] = "codeLensFontFamily", e[e.codeLensFontSize = 16] = "codeLensFontSize", e[e.colorDecorators = 17] = "colorDecorators", e[e.columnSelection = 18] = "columnSelection", e[e.comments = 19] = "comments", e[e.contextmenu = 20] = "contextmenu", e[e.copyWithSyntaxHighlighting = 21] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 22] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 23] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 24] = "cursorStyle", e[e.cursorSurroundingLines = 25] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 26] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 27] = "cursorWidth", e[e.disableLayerHinting = 28] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 29] = "disableMonospaceOptimizations", e[e.domReadOnly = 30] = "domReadOnly", e[e.dragAndDrop = 31] = "dragAndDrop", e[e.emptySelectionClipboard = 32] = "emptySelectionClipboard", e[e.extraEditorClassName = 33] = "extraEditorClassName", e[e.fastScrollSensitivity = 34] = "fastScrollSensitivity", e[e.find = 35] = "find", e[e.fixedOverflowWidgets = 36] = "fixedOverflowWidgets", e[e.folding = 37] = "folding", e[e.foldingStrategy = 38] = "foldingStrategy", e[e.foldingHighlight = 39] = "foldingHighlight", e[e.foldingImportsByDefault = 40] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 41] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 42] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 43] = "fontFamily", e[e.fontInfo = 44] = "fontInfo", e[e.fontLigatures = 45] = "fontLigatures", e[e.fontSize = 46] = "fontSize", e[e.fontWeight = 47] = "fontWeight", e[e.formatOnPaste = 48] = "formatOnPaste", e[e.formatOnType = 49] = "formatOnType", e[e.glyphMargin = 50] = "glyphMargin", e[e.gotoLocation = 51] = "gotoLocation", e[e.hideCursorInOverviewRuler = 52] = "hideCursorInOverviewRuler", e[e.hover = 53] = "hover", e[e.inDiffEditor = 54] = "inDiffEditor", e[e.inlineSuggest = 55] = "inlineSuggest", e[e.letterSpacing = 56] = "letterSpacing", e[e.lightbulb = 57] = "lightbulb", e[e.lineDecorationsWidth = 58] = "lineDecorationsWidth", e[e.lineHeight = 59] = "lineHeight", e[e.lineNumbers = 60] = "lineNumbers", e[e.lineNumbersMinChars = 61] = "lineNumbersMinChars", e[e.linkedEditing = 62] = "linkedEditing", e[e.links = 63] = "links", e[e.matchBrackets = 64] = "matchBrackets", e[e.minimap = 65] = "minimap", e[e.mouseStyle = 66] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 67] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 68] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 69] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 70] = "multiCursorModifier", e[e.multiCursorPaste = 71] = "multiCursorPaste", e[e.occurrencesHighlight = 72] = "occurrencesHighlight", e[e.overviewRulerBorder = 73] = "overviewRulerBorder", e[e.overviewRulerLanes = 74] = "overviewRulerLanes", e[e.padding = 75] = "padding", e[e.parameterHints = 76] = "parameterHints", e[e.peekWidgetDefaultFocus = 77] = "peekWidgetDefaultFocus", e[e.definitionLinkOpensInPeek = 78] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 79] = "quickSuggestions", e[e.quickSuggestionsDelay = 80] = "quickSuggestionsDelay", e[e.readOnly = 81] = "readOnly", e[e.renameOnType = 82] = "renameOnType", e[e.renderControlCharacters = 83] = "renderControlCharacters", e[e.renderFinalNewline = 84] = "renderFinalNewline", e[e.renderLineHighlight = 85] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 86] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 87] = "renderValidationDecorations", e[e.renderWhitespace = 88] = "renderWhitespace", e[e.revealHorizontalRightPadding = 89] = "revealHorizontalRightPadding", e[e.roundedSelection = 90] = "roundedSelection", e[e.rulers = 91] = "rulers", e[e.scrollbar = 92] = "scrollbar", e[e.scrollBeyondLastColumn = 93] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 94] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 95] = "scrollPredominantAxis", e[e.selectionClipboard = 96] = "selectionClipboard", e[e.selectionHighlight = 97] = "selectionHighlight", e[e.selectOnLineNumbers = 98] = "selectOnLineNumbers", e[e.showFoldingControls = 99] = "showFoldingControls", e[e.showUnused = 100] = "showUnused", e[e.snippetSuggestions = 101] = "snippetSuggestions", e[e.smartSelect = 102] = "smartSelect", e[e.smoothScrolling = 103] = "smoothScrolling", e[e.stickyTabStops = 104] = "stickyTabStops", e[e.stopRenderingLineAfter = 105] = "stopRenderingLineAfter", e[e.suggest = 106] = "suggest", e[e.suggestFontSize = 107] = "suggestFontSize", e[e.suggestLineHeight = 108] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 109] = "suggestOnTriggerCharacters", e[e.suggestSelection = 110] = "suggestSelection", e[e.tabCompletion = 111] = "tabCompletion", e[e.tabIndex = 112] = "tabIndex", e[e.unicodeHighlighting = 113] = "unicodeHighlighting", e[e.unusualLineTerminators = 114] = "unusualLineTerminators", e[e.useShadowDOM = 115] = "useShadowDOM", e[e.useTabStops = 116] = "useTabStops", e[e.wordSeparators = 117] = "wordSeparators", e[e.wordWrap = 118] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 119] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 120] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 121] = "wordWrapColumn", e[e.wordWrapOverride1 = 122] = "wordWrapOverride1", e[e.wordWrapOverride2 = 123] = "wordWrapOverride2", e[e.wrappingIndent = 124] = "wrappingIndent", e[e.wrappingStrategy = 125] = "wrappingStrategy", e[e.showDeprecated = 126] = "showDeprecated", e[e.inlayHints = 127] = "inlayHints", e[e.editorClassName = 128] = "editorClassName", e[e.pixelRatio = 129] = "pixelRatio", e[e.tabFocusMode = 130] = "tabFocusMode", e[e.layoutInfo = 131] = "layoutInfo", e[e.wrappingInfo = 132] = "wrappingInfo"
    }(Tn || (Tn = {})),
    function(e) {
        e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"
    }(In || (In = {})),
    function(e) {
        e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF"
    }(Kn || (Kn = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent"
    }(Dn || (Dn = {})),
    function(e) {
        e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None"
    }(Vn || (Vn = {})),
    function(e) {
        e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter"
    }(Fn || (Fn = {})),
    function(e) {
        e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit"
    }(Bn || (Bn = {})),
    function(e) {
        e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.Semicolon = 80] = "Semicolon", e[e.Equal = 81] = "Equal", e[e.Comma = 82] = "Comma", e[e.Minus = 83] = "Minus", e[e.Period = 84] = "Period", e[e.Slash = 85] = "Slash", e[e.Backquote = 86] = "Backquote", e[e.BracketLeft = 87] = "BracketLeft", e[e.Backslash = 88] = "Backslash", e[e.BracketRight = 89] = "BracketRight", e[e.Quote = 90] = "Quote", e[e.OEM_8 = 91] = "OEM_8", e[e.IntlBackslash = 92] = "IntlBackslash", e[e.Numpad0 = 93] = "Numpad0", e[e.Numpad1 = 94] = "Numpad1", e[e.Numpad2 = 95] = "Numpad2", e[e.Numpad3 = 96] = "Numpad3", e[e.Numpad4 = 97] = "Numpad4", e[e.Numpad5 = 98] = "Numpad5", e[e.Numpad6 = 99] = "Numpad6", e[e.Numpad7 = 100] = "Numpad7", e[e.Numpad8 = 101] = "Numpad8", e[e.Numpad9 = 102] = "Numpad9", e[e.NumpadMultiply = 103] = "NumpadMultiply", e[e.NumpadAdd = 104] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 106] = "NumpadSubtract", e[e.NumpadDecimal = 107] = "NumpadDecimal", e[e.NumpadDivide = 108] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.AudioVolumeMute = 112] = "AudioVolumeMute", e[e.AudioVolumeUp = 113] = "AudioVolumeUp", e[e.AudioVolumeDown = 114] = "AudioVolumeDown", e[e.BrowserSearch = 115] = "BrowserSearch", e[e.BrowserHome = 116] = "BrowserHome", e[e.BrowserBack = 117] = "BrowserBack", e[e.BrowserForward = 118] = "BrowserForward", e[e.MediaTrackNext = 119] = "MediaTrackNext", e[e.MediaTrackPrevious = 120] = "MediaTrackPrevious", e[e.MediaStop = 121] = "MediaStop", e[e.MediaPlayPause = 122] = "MediaPlayPause", e[e.LaunchMediaPlayer = 123] = "LaunchMediaPlayer", e[e.LaunchMail = 124] = "LaunchMail", e[e.LaunchApp2 = 125] = "LaunchApp2", e[e.Clear = 126] = "Clear", e[e.MAX_VALUE = 127] = "MAX_VALUE"
    }(Un || (Un = {})),
    function(e) {
        e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error"
    }(qn || (qn = {})),
    function(e) {
        e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated"
    }(Hn || (Hn = {})),
    function(e) {
        e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter"
    }(Wn || (Wn = {})),
    function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR"
    }($n || ($n = {})),
    function(e) {
        e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER"
    }(zn || (zn = {})),
    function(e) {
        e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full"
    }(jn || (jn = {})),
    function(e) {
        e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None"
    }(Gn || (Gn = {})),
    function(e) {
        e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom"
    }(Yn || (Yn = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks"
    }(Zn || (Zn = {})),
    function(e) {
        e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate"
    }(Jn || (Jn = {})),
    function(e) {
        e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible"
    }(Qn || (Qn = {})),
    function(e) {
        e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL"
    }(Xn || (Xn = {})),
    function(e) {
        e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange"
    }(er || (er = {})),
    function(e) {
        e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter"
    }(tr || (tr = {})),
    function(e) {
        e[e.Deprecated = 1] = "Deprecated"
    }(nr || (nr = {})),
    function(e) {
        e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid"
    }(rr || (rr = {})),
    function(e) {
        e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin"
    }(ir || (ir = {})),
    function(e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"
    }(or || (or = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent"
    }(ar || (ar = {}));
    class sr {
        static chord(e, t) {
            return function(e, t) {
                return (e | (65535 & t) << 16 >>> 0) >>> 0
            }(e, t)
        }
    }
    sr.CtrlCmd = 2048, sr.Shift = 1024, sr.Alt = 512, sr.WinCtrl = 256;
    class lr extends Bt {
        constructor(e) {
            super(0);
            for (let t = 0, n = e.length; t < n; t++) this.set(e.charCodeAt(t), 2);
            this.set(32, 1), this.set(9, 1)
        }
    }! function(e) {
        const t = {}
    }((e => new lr(e)));
    Object.prototype.hasOwnProperty;
    var cr, hr, ur;
    ! function(e) {
        e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full"
    }(cr || (cr = {})),
    function(e) {
        e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter"
    }(hr || (hr = {})),
    function(e) {
        e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None"
    }(ur || (ur = {}));

    function dr(e, t, n, r, i) {
        return function(e, t, n, r, i) {
            if (0 === r) return !0;
            const o = t.charCodeAt(r - 1);
            if (0 !== e.get(o)) return !0;
            if (13 === o || 10 === o) return !0;
            if (i > 0) {
                const n = t.charCodeAt(r);
                if (0 !== e.get(n)) return !0
            }
            return !1
        }(e, t, 0, r, i) && function(e, t, n, r, i) {
            if (r + i === n) return !0;
            const o = t.charCodeAt(r + i);
            if (0 !== e.get(o)) return !0;
            if (13 === o || 10 === o) return !0;
            if (i > 0) {
                const n = t.charCodeAt(r + i - 1);
                if (0 !== e.get(n)) return !0
            }
            return !1
        }(e, t, n, r, i)
    }
    class fr {
        constructor(e, t) {
            this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0
        }
        reset(e) {
            this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0
        }
        next(e) {
            const t = e.length;
            let n;
            do {
                if (this._prevMatchStartIndex + this._prevMatchLength === t) return null;
                if (n = this._searchRegex.exec(e), !n) return null;
                const r = n.index,
                    i = n[0].length;
                if (r === this._prevMatchStartIndex && i === this._prevMatchLength) {
                    if (0 === i) {
                        ce(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
                        continue
                    }
                    return null
                }
                if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || dr(this._wordSeparators, e, t, r, i)) return n
            } while (n);
            return null
        }
    }
    class mr {
        constructor(e) {
            this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = de.getInstance(new Set(e.allowedLocales))
        }
        getCandidateCodePoints() {
            if (this.options.nonBasicASCII) return "allNonBasicAscii";
            const e = new Set;
            if (this.options.invisibleCharacters)
                for (const t of fe.codePoints) gr(String.fromCodePoint(t)) || e.add(t);
            if (this.options.ambiguousCharacters)
                for (const t of this.ambiguousCharacters.getConfusableCodePoints()) e.add(t);
            for (const t of this.allowedCodePoints) e.delete(t);
            return e
        }
        shouldHighlightNonBasicASCII(e, t) {
            const n = e.codePointAt(0);
            if (this.allowedCodePoints.has(n)) return 0;
            if (this.options.nonBasicASCII) return 1;
            let r = !1,
                i = !1;
            if (t)
                for (let e of t) {
                    const t = e.codePointAt(0),
                        n = (o = e, he.test(o));
                    r = r || n, n || this.ambiguousCharacters.isAmbiguous(t) || fe.isInvisibleCharacter(t) || (i = !0)
                }
            var o;
            return !r && i ? 0 : this.options.invisibleCharacters && !gr(e) && fe.isInvisibleCharacter(n) ? 2 : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? 3 : 0
        }
    }

    function gr(e) {
        return " " === e || "\n" === e || "\t" === e
    }
    var br = function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(a, s)
            }
            l((r = r.apply(e, t || [])).next())
        }))
    };
    class Cr extends class {
        constructor(e, t, n, r) {
            this._uri = e, this._lines = t, this._eol = n, this._versionId = r, this._lineStarts = null, this._cachedTextValue = null
        }
        dispose() {
            this._lines.length = 0
        }
        get version() {
            return this._versionId
        }
        getText() {
            return null === this._cachedTextValue && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue
        }
        onEvents(e) {
            e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
            const t = e.changes;
            for (const e of t) this._acceptDeleteRange(e.range), this._acceptInsertText(new _t(e.range.startLineNumber, e.range.startColumn), e.text);
            this._versionId = e.versionId, this._cachedTextValue = null
        }
        _ensureLineStarts() {
            if (!this._lineStarts) {
                const e = this._eol.length,
                    t = this._lines.length,
                    n = new Uint32Array(t);
                for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
                this._lineStarts = new Pt(n)
            }
        }
        _setLineText(e, t) {
            this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length)
        }
        _acceptDeleteRange(e) {
            if (e.startLineNumber !== e.endLineNumber) this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
            else {
                if (e.startColumn === e.endColumn) return;
                this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1))
            }
        }
        _acceptInsertText(e, t) {
            if (0 === t.length) return;
            const n = t.split(/\r\n|\r|\n/);
            if (1 === n.length) return void this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
            n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
            const r = new Uint32Array(n.length - 1);
            for (let t = 1; t < n.length; t++) this._lines.splice(e.lineNumber + t - 1, 0, n[t]), r[t - 1] = n[t].length + this._eol.length;
            this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r)
        }
    } {
        get uri() {
            return this._uri
        }
        get eol() {
            return this._eol
        }
        getValue() {
            return this.getText()
        }
        getLinesContent() {
            return this._lines.slice(0)
        }
        getLineCount() {
            return this._lines.length
        }
        getLineContent(e) {
            return this._lines[e - 1]
        }
        getWordAtPosition(e, t) {
            const n = Vt(e.column, function(e) {
                let t = Kt;
                if (e && e instanceof RegExp)
                    if (e.global) t = e;
                    else {
                        let n = "g";
                        e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n)
                    }
                return t.lastIndex = 0, t
            }(t), this._lines[e.lineNumber - 1], 0);
            return n ? new yt(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null
        }
        words(e) {
            const t = this._lines,
                n = this._wordenize.bind(this);
            let r = 0,
                i = "",
                o = 0,
                a = [];
            return {*[Symbol.iterator]() {
                    for (;;)
                        if (o < a.length) {
                            const e = i.substring(a[o].start, a[o].end);
                            o += 1, yield e
                        } else {
                            if (!(r < t.length)) break;
                            i = t[r], a = n(i, e), o = 0, r += 1
                        }
                }
            }
        }
        getLineWords(e, t) {
            const n = this._lines[e - 1],
                r = this._wordenize(n, t),
                i = [];
            for (const e of r) i.push({
                word: n.substring(e.start, e.end),
                startColumn: e.start + 1,
                endColumn: e.end + 1
            });
            return i
        }
        _wordenize(e, t) {
            const n = [];
            let r;
            for (t.lastIndex = 0;
                (r = t.exec(e)) && 0 !== r[0].length;) n.push({
                start: r.index,
                end: r.index + r[0].length
            });
            return n
        }
        getValueInRange(e) {
            if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
            const t = this._eol,
                n = e.startLineNumber - 1,
                r = e.endLineNumber - 1,
                i = [];
            i.push(this._lines[n].substring(e.startColumn - 1));
            for (let e = n + 1; e < r; e++) i.push(this._lines[e]);
            return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
        }
        offsetAt(e) {
            return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1)
        }
        positionAt(e) {
            e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
            const t = this._lineStarts.getIndexOf(e),
                n = this._lines[t.index].length;
            return {
                lineNumber: 1 + t.index,
                column: 1 + Math.min(t.remainder, n)
            }
        }
        _validateRange(e) {
            const t = this._validatePosition({
                    lineNumber: e.startLineNumber,
                    column: e.startColumn
                }),
                n = this._validatePosition({
                    lineNumber: e.endLineNumber,
                    column: e.endColumn
                });
            return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? {
                startLineNumber: t.lineNumber,
                startColumn: t.column,
                endLineNumber: n.lineNumber,
                endColumn: n.column
            } : e
        }
        _validatePosition(e) {
            if (!_t.isIPosition(e)) throw new Error("bad position");
            let {
                lineNumber: t,
                column: n
            } = e, r = !1;
            if (t < 1) t = 1, n = 1, r = !0;
            else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
            else {
                const e = this._lines[t - 1].length + 1;
                n < 1 ? (n = 1, r = !0) : n > e && (n = e, r = !0)
            }
            return r ? {
                lineNumber: t,
                column: n
            } : e
        }
    }
    class pr {
        constructor(e, t) {
            this._host = e, this._models = Object.create(null), this._foreignModuleFactory = t, this._foreignModule = null
        }
        dispose() {
            this._models = Object.create(null)
        }
        _getModel(e) {
            return this._models[e]
        }
        _getModels() {
            const e = [];
            return Object.keys(this._models).forEach((t => e.push(this._models[t]))), e
        }
        acceptNewModel(e) {
            this._models[e.url] = new Cr(ct.parse(e.url), e.lines, e.EOL, e.versionId)
        }
        acceptModelChanged(e, t) {
            if (!this._models[e]) return;
            this._models[e].onEvents(t)
        }
        acceptRemovedModel(e) {
            this._models[e] && delete this._models[e]
        }
        computeUnicodeHighlights(e, t, n) {
            return br(this, void 0, void 0, (function*() {
                const r = this._getModel(e);
                return r ? class {
                    static computeUnicodeHighlights(e, t, n) {
                        const r = n ? n.startLineNumber : 1,
                            i = n ? n.endLineNumber : e.getLineCount(),
                            o = new mr(t),
                            a = o.getCandidateCodePoints();
                        let s;
                        s = "allNonBasicAscii" === a ? new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : new RegExp(`[${ie(Array.from(a).map((e=>String.fromCodePoint(e))).join(""))}]`, "g");
                        const l = new fr(null, s),
                            c = [];
                        let h, u = !1,
                            d = 0,
                            f = 0,
                            m = 0;
                        e: for (let t = r, n = i; t <= n; t++) {
                            const n = e.getLineContent(t),
                                r = n.length;
                            l.reset(0);
                            do {
                                if (h = l.next(n), h) {
                                    let e = h.index,
                                        i = h.index + h[0].length;
                                    e > 0 && ae(n.charCodeAt(e - 1)) && e--, i + 1 < r && ae(n.charCodeAt(i - 1)) && i++;
                                    const a = n.substring(e, i),
                                        s = Vt(e + 1, Kt, n, 0),
                                        l = o.shouldHighlightNonBasicASCII(a, s ? s.word : null);
                                    if (0 !== l) {
                                        3 === l ? d++ : 2 === l ? f++ : 1 === l ? m++ : te(l);
                                        const n = 1e3;
                                        if (c.length >= n) {
                                            u = !0;
                                            break e
                                        }
                                        c.push(new yt(t, e + 1, t, i + 1))
                                    }
                                }
                            } while (h)
                        }
                        return {
                            ranges: c,
                            hasMore: u,
                            ambiguousCharacterCount: d,
                            invisibleCharacterCount: f,
                            nonBasicAsciiCharacterCount: m
                        }
                    }
                    static computeUnicodeHighlightReason(e, t) {
                        const n = new mr(t);
                        switch (n.shouldHighlightNonBasicASCII(e, null)) {
                            case 0:
                                return null;
                            case 2:
                                return {
                                    kind: 1
                                };
                            case 3:
                                {
                                    const r = e.codePointAt(0),
                                        i = n.ambiguousCharacters.getPrimaryConfusable(r),
                                        o = de.getLocales().filter((e => !de.getInstance(new Set([...t.allowedLocales, e])).isAmbiguous(r)));
                                    return {
                                        kind: 0,
                                        confusableWith: String.fromCodePoint(i),
                                        notAmbiguousInLocales: o
                                    }
                                }
                            case 1:
                                return {
                                    kind: 2
                                }
                        }
                    }
                }.computeUnicodeHighlights(r, t, n) : {
                    ranges: [],
                    hasMore: !1,
                    ambiguousCharacterCount: 0,
                    invisibleCharacterCount: 0,
                    nonBasicAsciiCharacterCount: 0
                }
            }))
        }
        computeDiff(e, t, n, r) {
            return br(this, void 0, void 0, (function*() {
                const i = this._getModel(e),
                    o = this._getModel(t);
                if (!i || !o) return null;
                const a = i.getLinesContent(),
                    s = o.getLinesContent(),
                    l = new At(a, s, {
                        shouldComputeCharChanges: !0,
                        shouldPostProcessCharChanges: !0,
                        shouldIgnoreTrimWhitespace: n,
                        shouldMakePrettyDiff: !0,
                        maxComputationTime: r
                    }).computeDiff(),
                    c = !(l.changes.length > 0) && this._modelsAreIdentical(i, o);
                return {
                    quitEarly: l.quitEarly,
                    identical: c,
                    changes: l.changes
                }
            }))
        }
        _modelsAreIdentical(e, t) {
            const n = e.getLineCount();
            if (n !== t.getLineCount()) return !1;
            for (let r = 1; r <= n; r++) {
                if (e.getLineContent(r) !== t.getLineContent(r)) return !1
            }
            return !0
        }
        computeMoreMinimalEdits(e, t) {
            return br(this, void 0, void 0, (function*() {
                const n = this._getModel(e);
                if (!n) return t;
                const r = [];
                let i;
                t = t.slice(0).sort(((e, t) => {
                    if (e.range && t.range) return yt.compareRangesUsingStarts(e.range, t.range);
                    return (e.range ? 0 : 1) - (t.range ? 0 : 1)
                }));
                for (let {
                        range: e,
                        text: o,
                        eol: a
                    } of t) {
                    if ("number" == typeof a && (i = a), yt.isEmpty(e) && !o) continue;
                    const t = n.getValueInRange(e);
                    if (o = o.replace(/\r\n|\n|\r/g, n.eol), t === o) continue;
                    if (Math.max(o.length, t.length) > pr._diffLimit) {
                        r.push({
                            range: e,
                            text: o
                        });
                        continue
                    }
                    const s = Ie(t, o, !1),
                        l = n.offsetAt(yt.lift(e).getStartPosition());
                    for (const e of s) {
                        const t = n.positionAt(l + e.originalStart),
                            i = n.positionAt(l + e.originalStart + e.originalLength),
                            a = {
                                text: o.substr(e.modifiedStart, e.modifiedLength),
                                range: {
                                    startLineNumber: t.lineNumber,
                                    startColumn: t.column,
                                    endLineNumber: i.lineNumber,
                                    endColumn: i.column
                                }
                            };
                        n.getValueInRange(a.range) !== a.text && r.push(a)
                    }
                }
                return "number" == typeof i && r.push({
                    eol: i,
                    text: "",
                    range: {
                        startLineNumber: 0,
                        startColumn: 0,
                        endLineNumber: 0,
                        endColumn: 0
                    }
                }), r
            }))
        }
        computeLinks(e) {
            return br(this, void 0, void 0, (function*() {
                const t = this._getModel(e);
                return t ? function(e) {
                    return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? $t.computeLinks(e) : []
                }(t) : null
            }))
        }
        textualSuggest(e, t, n, r) {
            return br(this, void 0, void 0, (function*() {
                const i = new G(!0),
                    o = new RegExp(n, r),
                    a = new Set;
                e: for (let n of e) {
                    const e = this._getModel(n);
                    if (e)
                        for (let n of e.words(o))
                            if (n !== t && isNaN(Number(n)) && (a.add(n), a.size > pr._suggestionsLimit)) break e
                }
                return {
                    words: Array.from(a),
                    duration: i.elapsed()
                }
            }))
        }
        computeWordRanges(e, t, n, r) {
            return br(this, void 0, void 0, (function*() {
                const i = this._getModel(e);
                if (!i) return Object.create(null);
                const o = new RegExp(n, r),
                    a = Object.create(null);
                for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
                    const t = i.getLineWords(e, o);
                    for (const n of t) {
                        if (!isNaN(Number(n.word))) continue;
                        let t = a[n.word];
                        t || (t = [], a[n.word] = t), t.push({
                            startLineNumber: e,
                            startColumn: n.startColumn,
                            endLineNumber: e,
                            endColumn: n.endColumn
                        })
                    }
                }
                return a
            }))
        }
        navigateValueSet(e, t, n, r, i) {
            return br(this, void 0, void 0, (function*() {
                const o = this._getModel(e);
                if (!o) return null;
                const a = new RegExp(r, i);
                t.startColumn === t.endColumn && (t = {
                    startLineNumber: t.startLineNumber,
                    startColumn: t.startColumn,
                    endLineNumber: t.endLineNumber,
                    endColumn: t.endColumn + 1
                });
                const s = o.getValueInRange(t),
                    l = o.getWordAtPosition({
                        lineNumber: t.startLineNumber,
                        column: t.startColumn
                    }, a);
                if (!l) return null;
                const c = o.getValueInRange(l);
                return zt.INSTANCE.navigateValueSet(t, s, l, c, n)
            }))
        }
        loadForeignModule(e, t, n) {
            const r = function(e, t) {
                    const n = e => function() {
                        const n = Array.prototype.slice.call(arguments, 0);
                        return t(e, n)
                    };
                    let r = {};
                    for (const t of e) r[t] = n(t);
                    return r
                }(n, ((e, t) => this._host.fhr(e, t))),
                i = {
                    host: r,
                    getMirrorModels: () => this._getModels()
                };
            return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(i, t), Promise.resolve(ee(this._foreignModule))) : Promise.reject(new Error("Unexpected usage"))
        }
        fmr(e, t) {
            if (!this._foreignModule || "function" != typeof this._foreignModule[e]) return Promise.reject(new Error("Missing requestHandler or method: " + e));
            try {
                return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }
    pr._diffLimit = 1e5, pr._suggestionsLimit = 1e4, "function" == typeof importScripts && (V.monaco = {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: Zt,
        Emitter: X,
        KeyCode: Un,
        KeyMod: sr,
        Position: _t,
        Range: yt,
        Selection: hn,
        SelectionDirection: Xn,
        MarkerSeverity: qn,
        MarkerTag: Hn,
        Uri: ct,
        Token: Sn
    });
    let wr = !1;
    self.onmessage = e => {
        wr || function(e) {
            if (wr) return;
            wr = !0;
            const t = new Ne((e => {
                self.postMessage(e)
            }), (t => new pr(t, e)));
            self.onmessage = e => {
                t.onmessage(e.data)
            }
        }(null)
    }
})();