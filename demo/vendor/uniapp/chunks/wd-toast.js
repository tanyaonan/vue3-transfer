globalThis.process === void 0 && (globalThis.process = { env: { NODE_ENV: "production" } });
import { t as e } from "./shared/rolldown-runtime.js";
import { B as t, D as n, L as r, N as i, O as a, P as o, U as s, a as c, c as l, d as u, g as d, h as f, l as p, s as m, u as h, y as g, z as _ } from "./vue.runtime.js";
import { j as v, t as y, u as b, x, y as S } from "./shared/wot-ui/common/AbortablePromise.ts.js";
import { s as C, t as w } from "./shared/wot-ui/common/props.ts.js";
import { t as T } from "./wd-icon.js";
import { t as E } from "./wd-transition.js";
import { t as D } from "./wd-overlay.js";
import { t as O } from "./wd-loading.js";
//#region node_modules/.pnpm/@wot-ui+ui@2.1.0_vue@3.6.0-beta.15_typescript@5.9.3_/node_modules/@wot-ui/ui/components/wd-toast/index.ts
var k = "__TOAST_OPTION__", A = {
	duration: 2e3,
	show: !1
}, j = Symbol("None"), M = /* @__PURE__ */ new Map();
function N(e = "") {
	let t = P(e), n = g(t, r(j));
	n.value === j && (n.value = A, a(t, n));
	let i = (e) => (t) => o(b(e, typeof t == "string" ? { msg: t } : t)), o = (e) => {
		let r = b(A, typeof e == "string" ? { msg: e } : e);
		n.value = b(r, { show: !0 });
		let i = M.get(t);
		if (i && (clearTimeout(i), M.delete(t)), r.duration && r.duration > 0) {
			let e = setTimeout(() => {
				M.delete(t), f();
			}, r.duration);
			M.set(t, e);
		}
	}, s = i({
		iconName: "loading",
		duration: 0,
		cover: !0
	}), c = i({
		iconName: "success",
		duration: 1500
	}), l = i({ iconName: "error" }), u = i({ iconName: "warning" }), d = i({ iconName: "info" }), f = () => {
		let e = M.get(t);
		e && (clearTimeout(e), M.delete(t)), n.value = { show: !1 };
	};
	return {
		show: o,
		loading: s,
		success: c,
		error: l,
		warning: u,
		info: d,
		close: f
	};
}
var P = (e) => e ? `${k}${e}` : k, F = {
	success: "check-circle",
	warning: "exclamation-circle",
	info: "info-circle",
	error: "close-circle"
}, I = /*@__PURE__*/ d({
	name: "wd-toast",
	options: {
		addGlobalClass: !0,
		virtualHost: !0,
		styleIsolation: "shared"
	},
	props: {
		...w,
		selector: C(""),
		msg: {
			type: String,
			default: ""
		},
		direction: C("horizontal"),
		iconName: {
			type: String,
			default: ""
		},
		iconSize: Number,
		loadingType: C("circular"),
		loadingColor: {
			type: String,
			default: "#ffffff"
		},
		loadingSize: Number,
		iconColor: String,
		position: C("middle"),
		zIndex: {
			type: Number,
			default: 100
		},
		cover: {
			type: Boolean,
			default: !1
		},
		iconClass: {
			type: String,
			default: ""
		},
		classPrefix: C("wd-icon"),
		cssIcon: {
			type: [Boolean, String],
			default: !1
		},
		opened: Function,
		closed: Function
	},
	setup(e) {
		let a = e, d = r(""), b = r(""), C = r("middle"), w = r(!1), k = r(100), j = r("circular"), M = r("#fff"), N = r(), I = r(), L = r(), R = r(!1), z = r("wd-icon"), B = r(""), V = r(!1), H = r("horizontal"), U = null, W = null, G = g(P(a.selector), r(A));
		i(() => G.value, (e) => {
			X(e);
		}, {
			deep: !0,
			immediate: !0
		});
		let K = m(() => v({
			"z-index": k.value,
			position: "fixed",
			top: "50%",
			left: 0,
			width: "100%",
			"text-align": "center",
			"pointer-events": "none"
		})), q = m(() => `wd-toast ${a.customClass} wd-toast--${C.value} ${(d.value !== "loading" || b.value) && (d.value || B.value || V.value) ? "wd-toast--with-icon" : ""} ${d.value === "loading" && !b.value ? "wd-toast--loading" : ""} ${H.value === "vertical" ? "is-vertical" : ""}`);
		function J() {
			x(U) && U();
		}
		function Y() {
			x(W) && W();
		}
		function X(e) {
			w.value = S(e.show) ? e.show : !1, w.value && Z(e, a);
		}
		function Z(e, t) {
			d.value = S(e.iconName) ? e.iconName : t.iconName, B.value = S(e.iconClass) ? e.iconClass : t.iconClass, V.value = S(e.cssIcon) ? e.cssIcon : t.cssIcon, b.value = S(e.msg) ? e.msg : t.msg, C.value = S(e.position) ? e.position : t.position, k.value = S(e.zIndex) ? e.zIndex : t.zIndex, j.value = S(e.loadingType) ? e.loadingType : t.loadingType, M.value = S(e.loadingColor) ? e.loadingColor : t.loadingColor, N.value = S(e.iconSize) ? y(e.iconSize) : S(t.iconSize) ? y(t.iconSize) : void 0, I.value = S(e.iconColor) ? e.iconColor : t.iconColor, L.value = S(e.loadingSize) ? y(e.loadingSize) : S(t.loadingSize) ? y(t.loadingSize) : void 0, R.value = S(e.cover) ? e.cover : t.cover, z.value = S(e.classPrefix) ? e.classPrefix : t.classPrefix, H.value = S(e.direction) ? e.direction : t.direction, W = x(e.closed) ? e.closed : x(t.closed) ? t.closed : null, U = x(e.opened) ? e.opened : x(t.opened) ? t.opened : null;
		}
		return (e, r) => (n(), u(c, null, [R.value ? (n(), p(D, {
			key: 0,
			"z-index": k.value,
			"lock-scroll": "",
			show: w.value,
			"custom-style": "background-color: transparent;pointer-events: auto;"
		}, null, 8, ["z-index", "show"])) : h("", !0), f(E, {
			name: "fade",
			show: w.value,
			"custom-style": K.value,
			onAfterEnter: J,
			onAfterLeave: Y
		}, {
			default: o(() => [l("div", { class: t(q.value) }, [d.value === "loading" ? (n(), p(O, {
				key: 0,
				type: j.value,
				color: M.value,
				size: L.value,
				"custom-class": `wd-toast__icon ${H.value === "vertical" ? "is-vertical" : ""}`
			}, null, 8, [
				"type",
				"color",
				"size",
				"custom-class"
			])) : d.value === "success" || d.value === "warning" || d.value === "info" || d.value === "error" ? (n(), p(T, {
				key: 1,
				"custom-class": `wd-toast__icon ${H.value === "vertical" ? "is-vertical" : ""}`,
				size: N.value,
				"class-prefix": z.value,
				color: I.value,
				name: _(F)[d.value]
			}, null, 8, [
				"custom-class",
				"size",
				"class-prefix",
				"color",
				"name"
			])) : B.value || V.value ? (n(), p(T, {
				key: 2,
				"custom-class": `wd-toast__icon ${H.value === "vertical" ? "is-vertical" : ""}`,
				size: N.value,
				"class-prefix": z.value,
				color: I.value,
				name: B.value,
				"css-icon": V.value
			}, null, 8, [
				"custom-class",
				"size",
				"class-prefix",
				"color",
				"name",
				"css-icon"
			])) : h("", !0), b.value ? (n(), u("div", {
				key: 3,
				class: t(`wd-toast__msg ${H.value === "vertical" ? "is-vertical" : ""}`)
			}, s(b.value), 3)) : h("", !0)], 2)]),
			_: 1
		}, 8, ["show", "custom-style"])], 64));
	}
}), L = /* @__PURE__ */ e({ default: () => R }), R = I;
//#endregion
export { L as n, N as r, R as t };
