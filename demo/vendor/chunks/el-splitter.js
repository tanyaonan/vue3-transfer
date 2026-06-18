globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, A as t, E as n, G as r, H as i, I as a, J as o, M as s, Mt as c, N as l, Ot as u, Pt as d, T as f, U as p, _ as m, b as h, bt as g, ct as _, gt as v, ht as y, jt as b, p as x, tt as S, ut as C, v as w, w as T, x as E, y as D, yt as O } from "./vue.runtime.js";
import { i as k, t as A } from "./shared/element-plus/utils/vue/install.js";
import { t as j } from "./shared/lodash/clamp.js";
import { n as M } from "./shared/element-plus/utils/vue/props/runtime.js";
import { n as ee } from "./shared/element-plus/utils/error.js";
import { s as N } from "./shared/vueuse.js";
import { r as P } from "./shared/element-plus/hooks/use-namespace.js";
import { i as F, n as I, r as te, t as L } from "./shared/element-plus-icons.js";
import { t as R } from "./shared/element-plus/hooks/use-ordered-children.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/splitter.mjs
var z = M({
	layout: {
		type: String,
		default: "horizontal",
		values: ["horizontal", "vertical"]
	},
	lazy: Boolean
}), B = {
	resizeStart: (e, t) => !0,
	resize: (e, t) => !0,
	resizeEnd: (e, t) => !0,
	collapse: (e, t, n) => !0
};
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/hooks/useContainer.mjs
function V(e) {
	let t = C(), { width: n, height: r } = N(t);
	return {
		containerEl: t,
		containerSize: m(() => e.value === "horizontal" ? n.value : r.value)
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/hooks/useSize.mjs
function H(e) {
	return Number(e.slice(0, -1)) / 100;
}
function U(e) {
	return Number(e.slice(0, -2));
}
function W(e) {
	return b(e) && e.endsWith("%");
}
function G(e) {
	return b(e) && e.endsWith("px");
}
function ne(t, n) {
	let r = m(() => t.value.map((e) => e.size)), i = m(() => t.value.length), a = C([]);
	e([
		r,
		i,
		n
	], () => {
		let e = [], r = 0;
		for (let a = 0; a < i.value; a += 1) {
			let i = t.value[a]?.size;
			if (W(i)) e[a] = H(i);
			else if (G(i)) e[a] = U(i) / n.value;
			else if (i || i === 0) {
				let t = Number(i);
				Number.isNaN(t) || (e[a] = t / n.value);
			} else r += 1, e[a] = void 0;
		}
		let o = e.reduce((e, t) => e + (t || 0), 0);
		if (o > 1 || !r) {
			let t = 1 / o;
			e = e.map((e) => e === void 0 ? 0 : e * t);
		} else {
			let t = (1 - o) / r;
			e = e.map((e) => e === void 0 ? t : e);
		}
		a.value = e;
	});
	let o = (e) => e * n.value;
	return {
		percentSizes: a,
		pxSizes: m(() => a.value.map(o))
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/hooks/useResize.mjs
function K(t, n, r, i) {
	let a = (e) => e * n.value || 0;
	function o(e, t) {
		return W(e) ? a(H(e)) : G(e) ? U(e) : e ?? t;
	}
	let s = C(0), c = C(null), l = [], u = g, d = m(() => t.value.map((e) => [e.min, e.max]));
	e(i, () => {
		if (s.value) {
			let e = new MouseEvent("mouseup", { bubbles: !0 });
			window.dispatchEvent(e);
		}
	});
	let f = (e) => {
		s.value = 0, c.value = {
			index: e,
			confirmed: !1
		}, l = r.value;
	}, p = (e, r) => {
		let a = null;
		if ((!c.value || !c.value.confirmed) && r !== 0) {
			if (r > 0) a = e, c.value = {
				index: e,
				confirmed: !0
			};
			else for (let t = e; t >= 0; --t) if (l[t] > 0) {
				a = t, c.value = {
					index: t,
					confirmed: !0
				};
				break;
			}
		}
		let f = a ?? c.value?.index ?? e, p = [...l], m = f + 1, h = o(d.value[f][0], 0), _ = o(d.value[m][0], 0), v = o(d.value[f][1], n.value || 0), y = o(d.value[m][1], n.value || 0), b = r;
		p[f] + b < h && (b = h - p[f]), p[m] - b < _ && (b = p[m] - _), p[f] + b > v && (b = v - p[f]), p[m] - b > y && (b = p[m] - y), p[f] += b, p[m] -= b, s.value = b, u = () => {
			t.value.forEach((e, t) => {
				e.size = p[t];
			}), u = g;
		}, i.value || u();
	}, h = () => {
		i.value && u(), s.value = 0, c.value = null, l = [];
	}, _ = [];
	return {
		lazyOffset: s,
		onMoveStart: f,
		onMoving: p,
		onMoveEnd: h,
		movingIndex: c,
		onCollapse: (e, n) => {
			_.length || _.push(...r.value.map((e, t) => e <= 0 ? o(d.value[t]?.[0], 0) : e));
			let i = r.value, a = n === "start" ? e : e + 1, s = n === "start" ? e + 1 : e, c = i[a], l = i[s];
			if (c !== 0 && l !== 0) i[a] = 0, i[s] += c, _[e] = c;
			else {
				let t = c + l, n = j(_[e], 0, t), r = t - n;
				i[s] = n, i[a] = r;
			}
			t.value.forEach((e, t) => {
				e.size = i[t];
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/type.mjs
var re = Symbol("splitterRootContextKey"), q = /* @__PURE__ */ f({
	name: "ElSplitter",
	__name: "splitter",
	props: z,
	emits: B,
	setup(t, { emit: a }) {
		let o = P("splitter"), s = a, u = t, f = y(u, "layout"), g = y(u, "lazy"), { containerEl: v, containerSize: b } = V(f), { removeChild: x, children: S, addChild: C, ChildrenSorter: w } = R(n(), "ElSplitterPanel");
		e(S, () => {
			j.value = null, S.value.forEach((e, t) => {
				e.setIndex(t);
			});
		});
		let { percentSizes: D, pxSizes: k } = ne(S, b), { lazyOffset: A, movingIndex: j, onMoveStart: M, onMoving: ee, onMoveEnd: N, onCollapse: F } = K(S, b, k, g), I = m(() => ({ [o.cssVarBlockName("bar-offset")]: g.value ? `${A.value}px` : void 0 }));
		return p(re, _({
			panels: S,
			percentSizes: D,
			pxSizes: k,
			layout: f,
			lazy: g,
			movingIndex: j,
			containerSize: b,
			onMoveStart: (e) => {
				M(e), s("resizeStart", e, k.value);
			},
			onMoving: (e, t) => {
				ee(e, t), g.value || s("resize", e, k.value);
			},
			onMoveEnd: async (e) => {
				N(), await l(), s("resizeEnd", e, k.value);
			},
			onCollapse: (e, t) => {
				F(e, t), s("collapse", e, t, k.value);
			},
			registerPanel: C,
			unregisterPanel: x
		})), (e, t) => (i(), E("div", {
			ref_key: "containerEl",
			ref: v,
			class: c([O(o).b(), O(o).e(f.value)]),
			style: d(I.value)
		}, [
			r(e.$slots, "default"),
			T(O(w)),
			h(" Prevent iframe touch events from breaking "),
			O(j) ? (i(), E("div", {
				key: 0,
				class: c([O(o).e("mask"), O(o).e(`mask-${f.value}`)])
			}, null, 2)) : h("v-if", !0)
		], 6));
	}
}), J = M({
	min: { type: [String, Number] },
	max: { type: [String, Number] },
	size: { type: [String, Number] },
	resizable: {
		type: Boolean,
		default: !0
	},
	collapsible: Boolean
}), Y = { "update:size": (e) => typeof e == "number" || typeof e == "string" };
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/hooks/usePanel.mjs
function ie(e) {
	return e && u(e) ? e : {
		start: !!e,
		end: !!e
	};
}
function ae(e, t, n, r) {
	return !!(e?.collapsible.end && t > 0 || n?.collapsible.start && r === 0 && t > 0);
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/splitter/src/split-bar.mjs
var oe = /* @__PURE__ */ f({
	name: "ElSplitterBar",
	__name: "split-bar",
	props: {
		index: {
			type: Number,
			required: !0
		},
		layout: {
			type: String,
			values: ["horizontal", "vertical"],
			default: "horizontal"
		},
		resizable: {
			type: Boolean,
			default: !0
		},
		lazy: Boolean,
		startCollapsible: Boolean,
		endCollapsible: Boolean
	},
	emits: [
		"moveStart",
		"moving",
		"moveEnd",
		"collapse"
	],
	setup(e, { emit: t }) {
		let n = P("splitter-bar"), a = e, s = t, l = m(() => a.layout === "horizontal"), u = m(() => l.value ? { width: 0 } : { height: 0 }), f = m(() => ({
			width: l.value ? "16px" : "100%",
			height: l.value ? "100%" : "16px",
			cursor: a.resizable ? l.value ? "ew-resize" : "ns-resize" : "auto",
			touchAction: "none"
		})), p = m(() => {
			let e = n.e("dragger");
			return {
				[`${e}-horizontal`]: l.value,
				[`${e}-vertical`]: !l.value,
				[`${e}-active`]: !!g.value
			};
		}), g = C(null), _ = (e) => {
			a.resizable && (g.value = [e.pageX, e.pageY], s("moveStart", a.index), window.addEventListener("mouseup", x), window.addEventListener("mousemove", y));
		}, v = (e) => {
			if (a.resizable && e.touches.length === 1) {
				e.preventDefault();
				let t = e.touches[0];
				g.value = [t.pageX, t.pageY], s("moveStart", a.index), window.addEventListener("touchend", S), window.addEventListener("touchmove", b);
			}
		}, y = (e) => {
			let { pageX: t, pageY: n } = e, r = t - g.value[0], i = n - g.value[1], o = l.value ? r : i;
			s("moving", a.index, o);
		}, b = (e) => {
			if (e.touches.length === 1) {
				e.preventDefault();
				let t = e.touches[0], n = t.pageX - g.value[0], r = t.pageY - g.value[1], i = l.value ? n : r;
				s("moving", a.index, i);
			}
		}, x = () => {
			g.value = null, window.removeEventListener("mouseup", x), window.removeEventListener("mousemove", y), s("moveEnd", a.index);
		}, S = () => {
			g.value = null, window.removeEventListener("touchend", S), window.removeEventListener("touchmove", b), s("moveEnd", a.index);
		}, T = m(() => l.value ? I : F), k = m(() => l.value ? te : L);
		return (t, a) => (i(), E("div", {
			class: c([O(n).b()]),
			style: d(u.value)
		}, [
			e.startCollapsible ? (i(), E("div", {
				key: 0,
				class: c([O(n).e("collapse-icon"), O(n).e(`${e.layout}-collapse-icon-start`)]),
				onClick: a[0] ||= (t) => s("collapse", e.index, "start")
			}, [r(t.$slots, "start-collapsible", {}, () => [(i(), D(o(T.value), { style: {
				width: "12px",
				height: "12px"
			} }))])], 2)) : h("v-if", !0),
			w("div", {
				class: c([
					O(n).e("dragger"),
					p.value,
					O(n).is("disabled", !e.resizable),
					O(n).is("lazy", e.resizable && e.lazy)
				]),
				style: d(f.value),
				onMousedown: _,
				onTouchstart: v
			}, null, 38),
			e.endCollapsible ? (i(), E("div", {
				key: 1,
				class: c([O(n).e("collapse-icon"), O(n).e(`${e.layout}-collapse-icon-end`)]),
				onClick: a[1] ||= (t) => s("collapse", e.index, "end")
			}, [r(t.$slots, "end-collapsible", {}, () => [(i(), D(o(k.value), { style: {
				width: "12px",
				height: "12px"
			} }))])], 2)) : h("v-if", !0)
		], 6));
	}
}), se = "ElSplitterPanel", X = /* @__PURE__ */ f({
	name: se,
	__name: "split-panel",
	props: J,
	emits: Y,
	setup(o, { expose: c, emit: u }) {
		let d = P("splitter-panel"), f = o, p = u, g = t(re);
		g || ee(se, "usage: <el-splitter><el-splitter-panel /></el-splitter/>");
		let { panels: y, layout: b, lazy: T, containerSize: k, pxSizes: A } = v(g), { registerPanel: j, unregisterPanel: M, onCollapse: N, onMoveEnd: F, onMoveStart: I, onMoving: te } = g, L = C(), R = n(), z = R.uid, B = C(0), V = m(() => y.value[B.value]), ne = (e) => {
			B.value = e;
		}, K = m(() => V.value ? A.value[B.value] ?? 0 : 0), q = m(() => V.value ? A.value[B.value + 1] ?? 0 : 0), J = m(() => V.value ? y.value[B.value + 1] : null), Y = m(() => J.value ? f.resizable && J.value?.resizable && (K.value !== 0 || !f.min) && (q.value !== 0 || !J.value.min) : !1), X = m(() => V.value ? B.value !== y.value.length - 1 : !1), Z = m(() => ae(V.value, K.value, J.value, q.value)), ce = m(() => ae(J.value, q.value, V.value, K.value));
		function Q(e) {
			return W(e) ? H(e) * k.value || 0 : G(e) ? U(e) : e ?? 0;
		}
		let $ = !1;
		e(() => f.size, () => {
			if (!$ && V.value) {
				if (!k.value) {
					V.value.size = f.size;
					return;
				}
				let e = Q(f.size), t = Q(f.max), n = Q(f.min), r = Math.min(Math.max(e, n || 0), t || e);
				r !== e && p("update:size", r), V.value.size = r;
			}
		}), e(() => V.value?.size, (e) => {
			e !== f.size && ($ = !0, p("update:size", e), l(() => $ = !1));
		}), e(() => f.resizable, (e) => {
			V.value && (V.value.resizable = e);
		});
		let le = _({
			uid: z,
			getVnode: () => R.vnode,
			setIndex: ne,
			...f,
			collapsible: m(() => ie(f.collapsible))
		});
		return j(le), a(() => M(le)), c({ splitterPanelRef: L }), (e, t) => (i(), E(x, null, [w("div", s({
			ref_key: "panelEl",
			ref: L,
			class: [O(d).b()],
			style: { flexBasis: `${K.value}px` }
		}, e.$attrs), [r(e.$slots, "default")], 16), X.value ? (i(), D(oe, {
			key: 0,
			index: B.value,
			layout: O(b),
			lazy: O(T),
			resizable: Y.value,
			"start-collapsible": Z.value,
			"end-collapsible": ce.value,
			onMoveStart: O(I),
			onMoving: O(te),
			onMoveEnd: O(F),
			onCollapse: O(N)
		}, {
			"start-collapsible": S(() => [r(e.$slots, "start-collapsible")]),
			"end-collapsible": S(() => [r(e.$slots, "end-collapsible")]),
			_: 3
		}, 8, [
			"index",
			"layout",
			"lazy",
			"resizable",
			"start-collapsible",
			"end-collapsible",
			"onMoveStart",
			"onMoving",
			"onMoveEnd",
			"onCollapse"
		])) : h("v-if", !0)], 64));
	}
}), Z = A(q, { SplitPanel: X }), ce = k(X);
//#endregion
export { Z as ElSplitter, Z as default, ce as ElSplitterPanel, B as splitterEmits, Y as splitterPanelEmits, J as splitterPanelProps, z as splitterProps };
