globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { $ as e, E as t, I as n, O as r, T as i, _ as a, ct as o, d as s, ut as c, yt as l } from "../vue.runtime.js";
import { l as u } from "../shared/element-plus/utils/objects.js";
import { n as d, r as f, t as p } from "../shared/element-plus/utils/vue/props/runtime.js";
import { n as m, t as h } from "../shared/element-plus/utils/raf.js";
import { r as g } from "../shared/element-plus/hooks/use-namespace.js";
import { t as _ } from "../shared/element-plus/utils/typescript.js";
import { t as v } from "../el-scrollbar/util.js";
import { a as y, c as b, f as x, l as S, n as C, p as w, s as T } from "./defaults.js";
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/virtual-list/src/utils.mjs
var E = (e, t) => e < t ? y : C, D = (e) => e === "ltr" || e === "rtl" || e === "horizontal", O = (e) => e === "rtl", k = null;
function A(e = !1) {
	if (k === null || e) {
		let e = document.createElement("div"), t = e.style;
		t.width = "50px", t.height = "50px", t.overflow = "scroll", t.direction = "rtl";
		let n = document.createElement("div"), r = n.style;
		return r.width = "100px", r.height = "100px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? k = S : (e.scrollLeft = 1, k = e.scrollLeft === 0 ? T : b), document.body.removeChild(e), k;
	}
	return k;
}
function j({ move: e, size: t, bar: n }, r) {
	let i = {}, a = `translate${n.axis}(${e}px)`;
	return i[n.size] = t, i.transform = a, r === "horizontal" ? i.height = "100%" : i.width = "100%", i;
}
//#endregion
//#region node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js
var M = Number.isNaN || function(e) {
	return typeof e == "number" && e !== e;
};
function N(e, t) {
	return !!(e === t || M(e) && M(t));
}
function P(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (!N(e[n], t[n])) return !1;
	return !0;
}
function F(e, t) {
	t === void 0 && (t = P);
	var n = null;
	function r() {
		var r = [...arguments];
		if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
		var i = e.apply(this, r);
		return n = {
			lastResult: i,
			lastArgs: r,
			lastThis: this
		}, i;
	}
	return r.clear = function() {
		n = null;
	}, r;
}
//#endregion
//#region node_modules/.pnpm/element-plus@2.14.2_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/element-plus/es/components/virtual-list/src/hooks/use-cache.mjs
var I = () => {
	let e = t().proxy.$props;
	return a(() => {
		let t = (e, t, n) => ({});
		return e.perfMode ? u(t) : F(t);
	});
}, L = p({
	type: f([Number, Function]),
	required: !0
}), R = p({ type: Number }), z = p({
	type: Number,
	default: 2
}), B = p({
	type: String,
	values: ["ltr", "rtl"],
	default: "ltr"
}), V = p({
	type: Number,
	default: 0
}), H = p({
	type: Number,
	required: !0
}), U = p({
	type: String,
	values: ["horizontal", "vertical"],
	default: w
}), W = d({
	className: {
		type: String,
		default: ""
	},
	containerElement: {
		type: f([String, Object]),
		default: "div"
	},
	data: {
		type: f(Array),
		default: () => _([])
	},
	direction: B,
	height: {
		type: [String, Number],
		required: !0
	},
	innerElement: {
		type: [String, Object],
		default: "div"
	},
	innerProps: {
		type: f(Object),
		default: () => ({})
	},
	style: {
		type: f([
			Object,
			String,
			Array,
			Boolean
		]),
		default: void 0
	},
	useIsScrolling: Boolean,
	width: {
		type: [Number, String],
		required: !1
	},
	innerWidth: {
		type: [Number, String],
		required: !1
	},
	perfMode: {
		type: Boolean,
		default: !0
	},
	scrollbarAlwaysOn: Boolean
}), G = d({
	cache: z,
	estimatedItemSize: R,
	layout: U,
	initScrollOffset: V,
	total: H,
	itemSize: L,
	...W
}), K = {
	type: Number,
	default: 6
}, q = {
	type: Number,
	default: 0
}, J = {
	type: Number,
	default: 2
}, Y = d({
	columnCache: z,
	columnWidth: L,
	estimatedColumnWidth: R,
	estimatedRowHeight: R,
	initScrollLeft: V,
	initScrollTop: V,
	itemKey: {
		type: f(Function),
		default: ({ columnIndex: e, rowIndex: t }) => `${t}:${e}`
	},
	rowCache: z,
	rowHeight: L,
	totalColumn: H,
	totalRow: H,
	hScrollbarSize: K,
	vScrollbarSize: K,
	scrollbarStartGap: q,
	scrollbarEndGap: J,
	role: String,
	...W
}), X = d({
	alwaysOn: Boolean,
	class: String,
	layout: U,
	total: H,
	ratio: {
		type: Number,
		required: !0
	},
	clientSize: {
		type: Number,
		required: !0
	},
	scrollFrom: {
		type: Number,
		required: !0
	},
	scrollbarSize: K,
	startGap: q,
	endGap: J,
	visible: Boolean
}), Z = i({
	name: "ElVirtualScrollBar",
	props: X,
	emits: [
		"scroll",
		"start-move",
		"stop-move"
	],
	setup(t, { emit: i }) {
		let u = a(() => t.startGap + t.endGap), d = g("virtual-scrollbar"), f = g("scrollbar"), p = c(), _ = c(), y = null, b = null, S = o({
			isDragging: !1,
			traveled: 0
		}), C = a(() => v[t.layout]), w = a(() => t.clientSize - l(u)), T = a(() => ({
			position: "absolute",
			width: `${t.layout === "horizontal" ? w.value : t.scrollbarSize}px`,
			height: `${t.layout === "horizontal" ? t.scrollbarSize : w.value}px`,
			[x[t.layout]]: "2px",
			right: "2px",
			bottom: "2px",
			borderRadius: "4px"
		})), E = a(() => {
			let e = t.ratio;
			if (e >= 100) return Infinity;
			if (e >= 50) return e * w.value / 100;
			let n = w.value / 3;
			return Math.floor(Math.min(Math.max(e * w.value / 100, 20), n));
		}), D = a(() => {
			if (!Number.isFinite(E.value)) return { display: "none" };
			let e = `${E.value}px`;
			return j({
				bar: C.value,
				size: e,
				move: S.traveled
			}, t.layout);
		}), O = a(() => Math.ceil(t.clientSize - E.value - l(u))), k = () => {
			window.addEventListener("mousemove", P), window.addEventListener("mouseup", N);
			let e = l(_);
			e && (b = document.onselectstart, document.onselectstart = () => !1, e.addEventListener("touchmove", P, { passive: !0 }), e.addEventListener("touchend", N));
		}, A = () => {
			window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", N), document.onselectstart = b, b = null;
			let e = l(_);
			e && (e.removeEventListener("touchmove", P), e.removeEventListener("touchend", N));
		}, M = (e) => {
			e.stopImmediatePropagation(), !(e.ctrlKey || [1, 2].includes(e.button)) && (S.isDragging = !0, S[C.value.axis] = e.currentTarget[C.value.offset] - (e[C.value.client] - e.currentTarget.getBoundingClientRect()[C.value.direction]), i("start-move"), k());
		}, N = () => {
			S.isDragging = !1, S[C.value.axis] = 0, i("stop-move"), A();
		}, P = (e) => {
			let { isDragging: t } = S;
			if (!t || !_.value || !p.value) return;
			let n = S[C.value.axis];
			if (!n) return;
			h(y);
			let r = (p.value.getBoundingClientRect()[C.value.direction] - e[C.value.client]) * -1 - (_.value[C.value.offset] - n);
			y = m(() => {
				S.traveled = Math.max(0, Math.min(r, O.value)), i("scroll", r, O.value);
			});
		}, F = (e) => {
			let t = Math.abs(e.target.getBoundingClientRect()[C.value.direction] - e[C.value.client]) - _.value[C.value.offset] / 2;
			S.traveled = Math.max(0, Math.min(t, O.value)), i("scroll", t, O.value);
		};
		return e(() => t.scrollFrom, (e) => {
			S.isDragging || (S.traveled = Math.ceil(e * O.value));
		}), n(() => {
			A();
		}), () => r("div", {
			role: "presentation",
			ref: p,
			class: [
				d.b(),
				t.class,
				(t.alwaysOn || S.isDragging) && "always-on"
			],
			style: T.value,
			onMousedown: s(F, ["stop", "prevent"]),
			onTouchstartPrevent: M
		}, r("div", {
			ref: _,
			class: f.e("thumb"),
			style: D.value,
			onMousedown: M
		}, []));
	}
});
//#endregion
export { X as a, E as c, W as i, D as l, Y as n, I as o, G as r, A as s, Z as t, O as u };
