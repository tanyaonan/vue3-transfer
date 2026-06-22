globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, E as n, N as r, _ as i, _t as a, at as o, ct as s, et as c, ft as l, it as u, k as d, lt as f, pt as p, st as m, ut as h, yt as g, z as _ } from "../vue.runtime.js";
//#region node_modules/.pnpm/@vueuse+shared@14.3.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@vueuse/shared/dist/index.js
function v(e, t) {
	let n = p();
	return c(() => {
		n.value = e();
	}, {
		...t,
		flush: t?.flush ?? "sync"
	}), f(n);
}
function y(e, t) {
	return u() ? (m(e, t), !0) : !1;
}
var b = /* @__PURE__ */ new WeakMap(), x = (...e) => {
	let r = e[0], i = n()?.proxy ?? u();
	if (i == null && !d()) throw Error("injectLocal must be called in setup");
	return i && b.has(i) && r in b.get(i) ? b.get(i)[r] : t(...e);
}, S = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var C = (e) => e !== void 0, w = (e) => e != null, T = Object.prototype.toString, E = (e) => T.call(e) === "[object Object]", D = (e, t, n) => Math.min(n, Math.max(t, e)), O = () => {}, k = /* @__PURE__ */ A();
function A() {
	var e, t;
	return S && !!(!((e = window) == null || (e = e.navigator) == null) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function j(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return n;
}
function M(e, t = {}) {
	let n, r, i = O, o = (e) => {
		clearTimeout(e), i(), i = O;
	}, s;
	return (c) => {
		let l = a(e), u = a(t.maxWait);
		return n && o(n), l <= 0 || u !== void 0 && u <= 0 ? (r &&= (o(r), void 0), Promise.resolve(c())) : new Promise((e, a) => {
			i = t.rejectOnCancel ? a : e, s = c, u && !r && (r = setTimeout(() => {
				n && o(n), r = void 0, e(s());
			}, u)), n = setTimeout(() => {
				r && o(r), r = void 0, e(c());
			}, l);
		});
	};
}
function N(...e) {
	let t = 0, n, r = !0, i = O, s, c, l, u, d;
	!o(e[0]) && typeof e[0] == "object" ? {delay: c, trailing: l = !0, leading: u = !0, rejectOnCancel: d = !1} = e[0] : [c, l = !0, u = !0, d = !1] = e;
	let f = () => {
		n && (clearTimeout(n), n = void 0, i(), i = O);
	};
	return (e) => {
		let o = a(c), p = Date.now() - t, m = () => s = e();
		return f(), o <= 0 ? (t = Date.now(), m()) : (p > o ? (t = Date.now(), (u || !r) && m()) : l && (s = new Promise((e, a) => {
			i = d ? a : e, n = setTimeout(() => {
				t = Date.now(), r = !0, e(m()), f();
			}, Math.max(0, o - p));
		})), !u && !n && (n = setTimeout(() => r = !0, o)), r = !1, s);
	};
}
function P(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function F(e) {
	return Array.isArray(e) ? e : [e];
}
function I(e) {
	return e || n();
}
function ee(e) {
	return o(e) ? s(new Proxy({}, {
		get(t, n, r) {
			return g(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return o(e.value[n]) && !o(r) ? e.value[n].value = r : e.value[n] = r, !0;
		},
		deleteProperty(t, n) {
			return Reflect.deleteProperty(e.value, n);
		},
		has(t, n) {
			return Reflect.has(e.value, n);
		},
		ownKeys() {
			return Object.keys(e.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	})) : s(e);
}
function te(e) {
	return ee(i(e));
}
function L(e, t = 200, n = {}) {
	return j(M(t, n), e);
}
function R(t, n = 200, r = {}) {
	let i = h(a(t)), o = L(() => {
		i.value = t.value;
	}, n, r);
	return e(t, () => o()), l(i);
}
function z(e, t = 200, n = !1, r = !0, i = !1) {
	return j(N(t, n, r, i), e);
}
function B(e, t = !0, n) {
	I(n) ? _(e, n) : t ? e() : r(e);
}
function V(e, t, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, o = p(!1), s;
	function c() {
		s &&= (clearTimeout(s), void 0);
	}
	function u() {
		o.value = !1, c();
	}
	function d(...n) {
		i && e(), c(), o.value = !0, s = setTimeout(() => {
			o.value = !1, s = void 0, e(...n);
		}, a(t));
	}
	return r && (o.value = !0, S && d()), y(u), {
		isPending: l(o),
		start: d,
		stop: u
	};
}
function H(t, n, r) {
	return e(t, n, {
		...r,
		immediate: !0
	});
}
//#endregion
//#region node_modules/.pnpm/@vueuse+core@14.3.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@vueuse/core/dist/index.js
var U = S ? window : void 0, W = S ? window.document : void 0;
S && window.navigator, S && window.location;
function G(e) {
	let t = a(e);
	return t?.$el ?? t;
}
function K(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = i(() => {
		let t = F(a(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return H(() => [
		n.value?.map((e) => G(e)) ?? [U].filter((e) => e != null),
		F(a(n.value ? e[1] : e[0])),
		F(g(n.value ? e[2] : e[1])),
		a(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = E(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var q = !1;
function J(e, t, n = {}) {
	let { window: r = U, ignore: i = [], capture: o = !0, detectIframe: s = !1, controls: c = !1 } = n;
	if (!r) return c ? {
		stop: O,
		cancel: O,
		trigger: O
	} : O;
	if (k && !q) {
		q = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", O, e)), r.document.documentElement.addEventListener("click", O, e);
	}
	let l = !0, u = (e) => a(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = G(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function d(e) {
		let t = a(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function f(e, t) {
		let n = a(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let p = (n) => {
		let r = G(e);
		if (n.target != null && !(!(r instanceof Element) && d(e) && f(e, n)) && !(!r || r === n.target || n.composedPath().includes(r))) {
			if ("detail" in n && n.detail === 0 && (l = !u(n)), !l) {
				l = !0;
				return;
			}
			t(n);
		}
	}, m = !1, h = [
		K(r, "click", (e) => {
			m || (m = !0, setTimeout(() => {
				m = !1;
			}, 0), p(e));
		}, {
			passive: !0,
			capture: o
		}),
		K(r, "pointerdown", (t) => {
			let n = G(e);
			l = !u(t) && !!(n && !t.composedPath().includes(n));
		}, { passive: !0 }),
		s && K(r, "blur", (n) => {
			setTimeout(() => {
				let i = G(e), a = r.document.activeElement;
				for (; a?.shadowRoot;) a = a.shadowRoot.activeElement;
				a?.tagName === "IFRAME" && !i?.contains(r.document.activeElement) && t(n);
			}, 0);
		}, { passive: !0 })
	].filter(Boolean), g = () => h.forEach((e) => e());
	return c ? {
		stop: g,
		cancel: () => {
			l = !1;
		},
		trigger: (e) => {
			l = !0, p(e), l = !1;
		}
	} : g;
}
function Y() {
	let e = p(!1), t = n();
	return t && _(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function X(e) {
	let t = Y();
	return i(() => (t.value, !!e()));
}
function Z(t, n, r = {}) {
	let { window: o = U, ...s } = r, c, l = /* @__PURE__ */ X(() => o && "MutationObserver" in o), u = () => {
		c &&= (c.disconnect(), void 0);
	}, d = e(i(() => {
		let e = F(a(t)).map(G).filter(w);
		return new Set(e);
	}), (e) => {
		u(), l.value && e.size && (c = new MutationObserver(n), e.forEach((e) => c.observe(e, s)));
	}, {
		immediate: !0,
		flush: "post"
	}), f = () => c?.takeRecords(), p = () => {
		d(), u();
	};
	return y(p), {
		isSupported: l,
		stop: p,
		takeRecords: f
	};
}
function ne(e, t, n = {}) {
	let { window: r = U, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return O;
	let o, s = (e) => {
		o?.(), o = e;
	}, l = c(() => {
		let n = G(e);
		if (n) {
			let { stop: e } = Z(i, (e) => {
				e.map((e) => [...e.removedNodes]).flat().some((e) => e === n || e.contains(n)) && t(e);
			}, {
				window: r,
				childList: !0,
				subtree: !0
			});
			s(e);
		}
	}, { flush: a }), u = () => {
		l(), s();
	};
	return y(u), u;
}
function re(e = {}) {
	let { window: t = U, deep: n = !0, triggerOnRemoval: r = !1 } = e, i = e.document ?? t?.document, a = () => {
		let e = i?.activeElement;
		if (n) for (var t; e?.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, o = p(), s = () => {
		o.value = a();
	};
	if (t) {
		let e = {
			capture: !0,
			passive: !0
		};
		K(t, "blur", (e) => {
			e.relatedTarget === null && s();
		}, e), K(t, "focus", s, e);
	}
	return r && ne(o, s, { document: i }), s(), o;
}
var ie = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function ae() {
	let e = d() ? x(ie, null) : null;
	return typeof e == "number" ? e : void 0;
}
function oe(e, t = {}) {
	let { window: n = U, ssrWidth: r = /* @__PURE__ */ ae() } = t, o = /* @__PURE__ */ X(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), s = p(typeof r == "number"), l = p(), u = p(!1);
	return c(() => {
		if (s.value) {
			s.value = !o.value, u.value = a(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= P(n[1])), i && a && (a = r <= P(i[1])), t ? !a : a;
			});
			return;
		}
		o.value && (l.value = n.matchMedia(a(e)), u.value = l.value.matches);
	}), K(l, "change", (e) => {
		u.value = e.matches;
	}, { passive: !0 }), i(() => u.value);
}
function se(e) {
	return JSON.parse(JSON.stringify(e));
}
function Q(t, n, r = {}) {
	let { window: o = U, initialValue: s, observe: c = !1 } = r, l = p(s), u = i(() => {
		var e;
		return G(n) || (o == null || (e = o.document) == null ? void 0 : e.documentElement);
	});
	function d() {
		let e = a(t), n = a(u);
		n && o && e && (l.value = o.getComputedStyle(n).getPropertyValue(e)?.trim() || l.value || s);
	}
	return c && Z(u, d, {
		attributeFilter: ["style", "class"],
		window: o
	}), e([u, () => a(t)], (e, t) => {
		t[0] && t[1] && t[0].style.removeProperty(t[1]), d();
	}, { immediate: !0 }), e([l, u], ([e, n]) => {
		let r = a(t);
		n?.style && r && (e == null ? n.style.removeProperty(r) : n.style.setProperty(r, e));
	}, { immediate: !0 }), l;
}
function ce(e = {}) {
	let { document: t = W } = e;
	if (!t) return p("visible");
	let n = p(t.visibilityState);
	return K(t, "visibilitychange", () => {
		n.value = t.visibilityState;
	}, { passive: !0 }), n;
}
function $(t, n, r = {}) {
	let { window: o = U, ...s } = r, c, l = /* @__PURE__ */ X(() => o && "ResizeObserver" in o), u = () => {
		c &&= (c.disconnect(), void 0);
	}, d = e(i(() => {
		let e = a(t);
		return Array.isArray(e) ? e.map((e) => G(e)) : [G(e)];
	}), (e) => {
		if (u(), l.value && o) {
			c = new ResizeObserver(n);
			for (let t of e) t && c.observe(t, s);
		}
	}, {
		immediate: !0,
		flush: "post"
	}), f = () => {
		u(), d();
	};
	return y(f), {
		isSupported: l,
		stop: f
	};
}
function le(t, n = {}) {
	let { reset: r = !0, windowResize: i = !0, windowScroll: a = !0, immediate: o = !0, updateTiming: s = "sync" } = n, c = p(0), l = p(0), u = p(0), d = p(0), f = p(0), m = p(0), h = p(0), g = p(0);
	function _() {
		let e = G(t);
		if (!e) {
			r && (c.value = 0, l.value = 0, u.value = 0, d.value = 0, f.value = 0, m.value = 0, h.value = 0, g.value = 0);
			return;
		}
		let n = e.getBoundingClientRect();
		c.value = n.height, l.value = n.bottom, u.value = n.left, d.value = n.right, f.value = n.top, m.value = n.width, h.value = n.x, g.value = n.y;
	}
	function v() {
		s === "sync" ? _() : s === "next-frame" && requestAnimationFrame(() => _());
	}
	return $(t, v), e(() => G(t), (e) => !e && v()), Z(t, v, { attributeFilter: ["style", "class"] }), a && K("scroll", v, {
		capture: !0,
		passive: !0
	}), i && K("resize", v, { passive: !0 }), B(() => {
		o && v();
	}), {
		height: c,
		bottom: l,
		left: u,
		right: d,
		top: f,
		width: m,
		x: h,
		y: g,
		update: v
	};
}
function ue(t, n = {
	width: 0,
	height: 0
}, r = {}) {
	let { window: a = U, box: o = "content-box" } = r, s = i(() => {
		var e;
		return (e = G(t)) == null || (e = e.namespaceURI) == null ? void 0 : e.includes("svg");
	}), c = p(n.width), l = p(n.height), { stop: u } = $(t, ([e]) => {
		let n = o === "border-box" ? e.borderBoxSize : o === "content-box" ? e.contentBoxSize : e.devicePixelContentBoxSize;
		if (a && s.value) {
			let e = G(t);
			if (e) {
				let t = e.getBoundingClientRect();
				c.value = t.width, l.value = t.height;
			}
		} else if (n) {
			let e = F(n);
			c.value = e.reduce((e, { inlineSize: t }) => e + t, 0), l.value = e.reduce((e, { blockSize: t }) => e + t, 0);
		} else c.value = e.contentRect.width, l.value = e.contentRect.height;
	}, r);
	B(() => {
		let e = G(t);
		e && (c.value = "offsetWidth" in e ? e.offsetWidth : n.width, l.value = "offsetHeight" in e ? e.offsetHeight : n.height);
	});
	let d = e(() => G(t), (e) => {
		c.value = e ? n.width : 0, l.value = e ? n.height : 0;
	});
	function f() {
		u(), d();
	}
	return {
		width: c,
		height: l,
		stop: f
	};
}
function de(t, n, r = {}) {
	let { root: o, rootMargin: s, threshold: c = 0, window: l = U, immediate: u = !0 } = r, d = /* @__PURE__ */ X(() => l && "IntersectionObserver" in l), f = i(() => F(a(t)).map(G).filter(w)), m = O, h = p(u), g = d.value ? e(() => [
		f.value,
		G(o),
		a(s),
		h.value
	], ([e, t, r]) => {
		if (m(), !h.value || !e.length) return;
		let i = new IntersectionObserver(n, {
			root: G(t),
			rootMargin: r,
			threshold: c
		});
		e.forEach((e) => e && i.observe(e)), m = () => {
			i.disconnect(), m = O;
		};
	}, {
		immediate: u,
		flush: "post"
	}) : O, _ = () => {
		m(), g(), h.value = !1;
	};
	return y(_), {
		isSupported: d,
		isActive: h,
		pause() {
			m(), h.value = !1;
		},
		resume() {
			h.value = !0;
		},
		stop: _
	};
}
function fe(t, a, o, s = {}) {
	var c, l;
	let { clone: u = !1, passive: d = !1, eventName: f, deep: p = !1, defaultValue: m, shouldEmit: g } = s, _ = n(), v = o || _?.emit || (_ == null || (c = _.$emit) == null ? void 0 : c.bind(_)) || (_ == null || (l = _.proxy) == null || (l = l.$emit) == null ? void 0 : l.bind(_?.proxy)), y = f;
	a ||= "modelValue", y ||= `update:${a.toString()}`;
	let b = (e) => u ? typeof u == "function" ? u(e) : se(e) : e, x = () => C(t[a]) ? b(t[a]) : m, S = (e) => {
		g ? g(e) && v(y, e) : v(y, e);
	};
	if (d) {
		let n = h(x()), i = !1;
		return e(() => t[a], (e) => {
			i || (i = !0, n.value = b(e), r(() => i = !1));
		}), e(n, (e) => {
			!i && (e !== t[a] || p) && S(e);
		}, { deep: p }), n;
	} else return i({
		get() {
			return x();
		},
		set(e) {
			S(e);
		}
	});
}
function pe(e = {}) {
	let { window: t = U } = e;
	if (!t) return p(!1);
	let n = p(t.document.hasFocus()), r = { passive: !0 };
	return K(t, "blur", () => {
		n.value = !1;
	}, r), K(t, "focus", () => {
		n.value = !0;
	}, r), n;
}
function me(t = {}) {
	let { window: n = U, initialWidth: r = Infinity, initialHeight: i = Infinity, listenOrientation: a = !0, includeScrollbar: o = !0, type: s = "inner" } = t, c = p(r), l = p(i), u = () => {
		if (n) if (s === "outer") c.value = n.outerWidth, l.value = n.outerHeight;
		else if (s === "visual" && n.visualViewport) {
			let { width: e, height: t, scale: r } = n.visualViewport;
			c.value = Math.round(e * r), l.value = Math.round(t * r);
		} else o ? (c.value = n.innerWidth, l.value = n.innerHeight) : (c.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight);
	};
	u(), B(u);
	let d = { passive: !0 };
	return K("resize", u, d), n && s === "visual" && n.visualViewport && K(n.visualViewport, "resize", u, d), a && e(oe("(orientation: portrait)"), () => u()), {
		width: c,
		height: l
	};
}
//#endregion
export { z as C, L as S, S as _, ce as a, R as b, K as c, $ as d, fe as f, v as g, D as h, Q as i, de as l, me as m, G as n, le as o, pe as p, re as r, ue as s, J as t, Z as u, k as v, V as w, y as x, te as y };
